"use client"

import React, { useEffect, useRef, useState } from "react"
import { Bot, Loader2, SendHorizontal, User, AlertCircle, Copy, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { sendMessageToAIWithUrl, generateSessionId, generateUserId } from "@/lib/api"
import { API_CONFIG } from "@/lib/config"
import { ChatMessage } from "@/lib/utils"
import { FormattedMessage } from "@/components/ui/formatted-message"

interface Message extends ChatMessage {
  status?: 'sending' | 'sent' | 'error'
  imageUrl?: string
}

export default function FinanceAIChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      type: "bot",
      content: "您好！这里是AI金融洞察演示，请输入股票代码或相关问题（例如：600223 技术面分析）。",
      timestamp: new Date(),
    }
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [sessionId, setSessionId] = useState<string>("")
  const [userId, setUserId] = useState<string>("")
  const [copiedId, setCopiedId] = useState<string | null>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // 为同一浏览器窗口持久化 sessionId/userId（刷新不变，关闭标签页后重置）
    if (typeof window !== 'undefined') {
      const sidKey = 'finance_ai_session_id'
      const uidKey = 'finance_ai_user_id'
      let sid = window.sessionStorage.getItem(sidKey)
      let uid = window.sessionStorage.getItem(uidKey)
      if (!sid) {
        sid = generateSessionId()
        window.sessionStorage.setItem(sidKey, sid)
      }
      if (!uid) {
        uid = generateUserId()
        window.sessionStorage.setItem(uidKey, uid)
      }
      setSessionId(sid)
      setUserId(uid)
    } else {
      // 兜底（理论上不会走到）
      setSessionId(generateSessionId())
      setUserId(generateUserId())
    }
  }, [])

  useEffect(() => {
    // 仅在新消息到达时滚动到最底，但不影响输入框位置
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth", block: 'end' })
  }, [messages])

  const extractImageUrl = (text: string): string | null => {
    const urlMatch = text.match(/https?:\/\/[\w\-./%]+\.(?:png|jpg|jpeg|gif)(?:\?[\w=&%.-]*)?/i)
    return urlMatch ? urlMatch[0] : null
  }

  const handleSendMessage = async () => {
    const trimmed = input.trim()
    if (!trimmed || isLoading) return

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: trimmed,
      timestamp: new Date(),
      status: 'sent'
    }

    setMessages(prev => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    try {
      // 通过 Next.js API 路由做反向代理，避免浏览器端跨域/证书等问题
      const proxyResp = await fetch('/api/finance-chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: trimmed, sessionId, userId })
      })
      const response = await proxyResp.json()

      const photoUrl = response.photo || extractImageUrl(response.message)

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        content: response.success ? response.message : (response.message || '抱歉，AI服务暂时不可用，请稍后重试'),
        timestamp: new Date(),
        status: response.success ? 'sent' : 'error',
        imageUrl: photoUrl || undefined
      }
      setMessages(prev => [...prev, botMessage])
    } catch (err) {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        content: '抱歉，AI服务暂时不可用，请稍后重试',
        timestamp: new Date(),
        status: 'error'
      }
      setMessages(prev => [...prev, botMessage])
    } finally {
      setIsLoading(false)
    }
  }

  const onCopy = (content: string, id: string) => {
    navigator.clipboard.writeText(content)
    setCopiedId(id)
    setTimeout(() => setCopiedId(null), 1500)
  }

  return (
    <div className="min-h-[calc(100vh-80px)] bg-gradient-to-b from-gray-50 to-white pb-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 顶部栏 */}
        <div className="pt-8 pb-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-[var(--text-primary)]">AI金融洞察 · 演示</h1>
            <p className="text-[var(--text-muted)] text-sm mt-1">输入股票代码或者问题，系统会实时拉取数据并返回分析与图表。</p>
          </div>
        </div>

        {/* 聊天主体 */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
          {/* 固定高度容器，内部滚动，避免页面整体滚动 */}
          <div className="space-y-6 h-[60vh] overflow-y-auto pr-2">
            {messages.map((message) => {
              const isUser = message.type === 'user'
              return (
                <div key={message.id} className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
                  <div className={`flex items-start space-x-4 max-w-4xl ${isUser ? 'flex-row-reverse space-x-reverse' : ''}`}>
                    {/* 头像 */}
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${isUser ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600'}`}>
                      {isUser ? <User className="w-6 h-6" /> : <Bot className="w-6 h-6" />}
                    </div>

                    {/* 内容 */}
                    <div className="flex flex-col space-y-2">
                      <div className={`rounded-2xl p-6 relative group ${isUser ? 'bg-blue-600 text-white' : 'bg-white shadow-sm border border-gray-100'}`}>
                        <FormattedMessage content={message.content} isUser={isUser} />

                        {/* 图片 */}
                        {!isUser && message.imageUrl && (
                          <div className="mt-4">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src={message.imageUrl} alt="AI生成图表" className="max-w-full rounded-lg border border-gray-200 shadow-sm" />
                            <div className="text-xs text-gray-500 mt-2 break-all">
                              图片来源：<a href={message.imageUrl} target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-700">{message.imageUrl}</a>
                            </div>
                          </div>
                        )}

                        {/* 复制 */}
                        {!isUser && (
                          <button onClick={() => onCopy(message.content, message.id)} className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity p-1 rounded hover:bg-gray-100">
                            {copiedId === message.id ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 text-gray-500" />}
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
            <div ref={messagesEndRef} />
          </div>

          {/* 输入区 */}
          <div className="mt-6 flex items-center space-x-3">
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleSendMessage()}
              placeholder="请输入股票代码或问题，例如：600223 技术面分析"
              className="flex-1 rounded-xl border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <Button onClick={handleSendMessage} disabled={isLoading}>
              {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <SendHorizontal className="w-4 h-4" />}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

