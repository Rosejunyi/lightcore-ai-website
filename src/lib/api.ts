import { ChatRequest, ChatResponse } from './utils'
import { API_CONFIG, APP_INFO, ERROR_MESSAGES, logger } from './config'

// 生成唯一的会话ID
export function generateSessionId(): string {
  return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
}

// 生成唯一的用户ID
export function generateUserId(): string {
  return `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
}

// 创建带超时的fetch请求
function fetchWithTimeout(url: string, options: RequestInit, timeout: number): Promise<Response> {
  return new Promise((resolve, reject) => {
    const timeoutId = setTimeout(() => {
      reject(new Error('请求超时，请稍后重试'))
    }, timeout)

    fetch(url, options)
      .then(response => {
        clearTimeout(timeoutId)
        resolve(response)
      })
      .catch(error => {
        clearTimeout(timeoutId)
        reject(error)
      })
  })
}

// 发送消息到n8n webhook（内部实现，允许自定义 webhookUrl）
async function sendMessageToAIInternal(request: ChatRequest, webhookUrl: string): Promise<ChatResponse> {
  try {
    // 验证输入
    if (!request.message || request.message.trim().length === 0) {
      throw new Error(ERROR_MESSAGES.INVALID_MESSAGE)
    }

    if (request.message.length > API_CONFIG.MAX_MESSAGE_LENGTH) {
      throw new Error(ERROR_MESSAGES.MESSAGE_TOO_LONG)
    }

    // 准备请求数据
    const requestData = {
      message: request.message.trim(),
      sessionId: request.sessionId || generateSessionId(),
      userId: request.userId || generateUserId(),
      timestamp: new Date().toISOString(),
      source: APP_INFO.SOURCE
    }

    logger.info('发送请求到n8n', { url: webhookUrl, ...requestData })

    // 发送请求到n8n webhook
    const response = await fetchWithTimeout(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'User-Agent': APP_INFO.USER_AGENT
      },
      body: JSON.stringify(requestData)
    }, API_CONFIG.REQUEST_TIMEOUT)

    // 检查响应状态
    if (!response.ok) {
      const errorText = await response.text()
      logger.error('n8n webhook响应错误', {
        status: response.status,
        statusText: response.statusText,
        body: errorText
      })

      throw new Error(`服务器响应错误 (${response.status}): ${response.statusText}`)
    }

    // 解析响应数据
    const responseData = await response.json()
    logger.info('n8n webhook响应', responseData)

    // 验证响应格式
    if (!responseData) {
      throw new Error(ERROR_MESSAGES.EMPTY_RESPONSE)
    }

    // 处理不同的响应格式
    let aiMessage: string

    if (typeof responseData === 'string') {
      aiMessage = responseData
    } else if (responseData.output) {
      // n8n webhook返回的格式
      aiMessage = responseData.output
    } else if (responseData.message) {
      aiMessage = responseData.message
    } else if (responseData.response) {
      aiMessage = responseData.response
    } else if (responseData.text) {
      aiMessage = responseData.text
    } else if (responseData.content) {
      aiMessage = responseData.content
    } else {
      // 如果没有找到明确的消息字段，尝试使用整个响应作为消息
      aiMessage = JSON.stringify(responseData)
    }

    // 兼容可能的图片字段（photo）
    const photoUrl = (responseData && (responseData.photo || responseData.image || responseData.picture)) as string | undefined

    // 验证AI消息
    if (!aiMessage || typeof aiMessage !== 'string') {
      throw new Error(ERROR_MESSAGES.INVALID_RESPONSE)
    }

    return {
      success: true,
      message: aiMessage.trim(),
      sessionId: requestData.sessionId,
      photo: typeof photoUrl === 'string' ? photoUrl : undefined
    }

  } catch (error) {
    logger.error('AI API调用失败', error)

    // 处理不同类型的错误
    let errorMessage: (typeof ERROR_MESSAGES)[keyof typeof ERROR_MESSAGES] = ERROR_MESSAGES.UNKNOWN_ERROR

    if (error instanceof Error) {
      if (error.message.includes('网络')) {
        errorMessage = ERROR_MESSAGES.NETWORK_ERROR
      } else if (error.message.includes('超时')) {
        errorMessage = ERROR_MESSAGES.TIMEOUT_ERROR
      } else if (error.message.includes('服务器')) {
        errorMessage = ERROR_MESSAGES.SERVER_ERROR
      } else {
        // 兜底使用通用错误文案，原始错误信息通过 error 字段返回
        errorMessage = ERROR_MESSAGES.UNKNOWN_ERROR
      }
    }

    return {
      success: false,
      message: errorMessage,
      error: error instanceof Error ? error.message : '未知错误'
    }
  }
}

// 默认：使用通用 webhook
export async function sendMessageToAI(request: ChatRequest): Promise<ChatResponse> {
  return sendMessageToAIInternal(request, API_CONFIG.N8N_WEBHOOK_URL)
}

// 指定 webhook：用于金融演示等场景
export async function sendMessageToAIWithUrl(request: ChatRequest, webhookUrl: string): Promise<ChatResponse> {
  return sendMessageToAIInternal(request, webhookUrl)
}

// 测试API连接
export async function testAPIConnection(): Promise<boolean> {
  try {
    const testResponse = await sendMessageToAI({
      message: '你好，这是一个连接测试',
      sessionId: 'test_session',
      userId: 'test_user'
    })
    
    return testResponse.success
  } catch (error) {
    logger.error('API连接测试失败', error)
    return false
  }
}

// 获取AI服务状态
export async function getAIServiceStatus(): Promise<{
  status: 'online' | 'offline' | 'unknown'
  message: string
  lastChecked: Date
}> {
  const lastChecked = new Date()
  
  try {
    const isOnline = await testAPIConnection()
    
    return {
      status: isOnline ? 'online' : 'offline',
      message: isOnline ? 'AI服务正常运行' : 'AI服务暂时不可用',
      lastChecked
    }
  } catch {
    return {
      status: 'unknown',
      message: '无法检测AI服务状态',
      lastChecked
    }
  }
}

// 错误重试机制
export async function sendMessageWithRetry(
  request: ChatRequest,
  maxRetries: number = API_CONFIG.MAX_RETRIES,
  retryDelay: number = API_CONFIG.RETRY_DELAY
): Promise<ChatResponse> {
  let lastError: Error | null = null
  
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      const response = await sendMessageToAI(request)
      
      if (response.success) {
        return response
      }
      
      // 如果不是网络错误，不进行重试
      if (!response.error?.includes('网络') && !response.error?.includes('超时')) {
        return response
      }
      
      lastError = new Error(response.error || '请求失败')
      
    } catch (error) {
      lastError = error instanceof Error ? error : new Error('未知错误')
    }
    
    // 如果不是最后一次尝试，等待后重试
    if (attempt < maxRetries) {
      logger.warn(`第${attempt}次尝试失败，${retryDelay}ms后重试...`)
      await new Promise(resolve => setTimeout(resolve, retryDelay))
      retryDelay *= 2 // 指数退避
    }
  }
  
  return {
    success: false,
    message: `经过${maxRetries}次尝试后仍然失败，请稍后重试`,
    error: lastError?.message || '重试失败'
  }
}
