import { NextResponse } from 'next/server'
import { API_CONFIG, APP_INFO, logger } from '@/lib/config'

export const dynamic = 'force-dynamic'

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}))

    const message: string = (body?.message || '').toString()
    if (!message.trim()) {
      return NextResponse.json({ success: false, message: '消息内容不能为空' }, { status: 400 })
    }

    const requestData = {
      message: message.trim(),
      sessionId: body?.sessionId || `finance_${Date.now()}`,
      userId: body?.userId || `finance_user_${Math.random().toString(36).slice(2, 8)}`,
      timestamp: new Date().toISOString(),
      source: `${APP_INFO.SOURCE}:finance`
    }

    logger.info('Finance proxy -> n8n', { url: API_CONFIG.FINANCE_WEBHOOK_URL, ...requestData })

    // 优先使用 POST（你的 n8n 现已切换为 POST），必要时回退为 GET 以兼容
    let resp = await fetch(API_CONFIG.FINANCE_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'User-Agent': APP_INFO.USER_AGENT
      },
      body: JSON.stringify(requestData),
      cache: 'no-store'
    })

    // 如果 POST 返回 404（例如切回 GET 模式），再尝试 GET
    if (!resp.ok && resp.status === 404) {
      const getUrl = `${API_CONFIG.FINANCE_WEBHOOK_URL}?` + new URLSearchParams({
        message: requestData.message,
        sessionId: requestData.sessionId,
        userId: requestData.userId,
        timestamp: requestData.timestamp,
        source: requestData.source
      }).toString()

      resp = await fetch(getUrl, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'User-Agent': APP_INFO.USER_AGENT
        },
        cache: 'no-store'
      })
    }

    const rawText = await resp.text()

    if (!resp.ok) {
      logger.error('Finance webhook error', { status: resp.status, statusText: resp.statusText, rawText })
      return NextResponse.json({ success: false, message: `服务器响应错误 (${resp.status}): ${resp.statusText}`, error: rawText }, { status: resp.status })
    }

    let data: unknown
    try {
      data = JSON.parse(rawText)
    } catch {
      data = rawText
    }

    let aiMessage: string
    if (typeof data === 'string') aiMessage = data
    else if (typeof data === 'object' && data !== null) {
      const obj = data as Record<string, unknown>
      aiMessage = String(obj.response || obj.output || obj.message || obj.text || obj.content || rawText)
    } else {
      aiMessage = String(rawText)
    }

    const photoUrl = (typeof data === 'object' && data !== null)
      ? (data as Record<string, unknown>).photo || (data as Record<string, unknown>).image || (data as Record<string, unknown>).picture
      : undefined

    return NextResponse.json({
      success: true,
      message: aiMessage?.trim?.() || '',
      photo: typeof photoUrl === 'string' ? photoUrl : undefined
    })
  } catch (e) {
    logger.error('Finance proxy failed', e)
    const message = e instanceof Error ? e.message : '未知错误'
    return NextResponse.json({ success: false, message: 'AI服务暂时不可用，请稍后重试', error: message }, { status: 500 })
  }
}

