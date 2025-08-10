"use client"

import { useState, useRef, useEffect } from "react"
// import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { 
  Send,
  Bot,
  User,

  AlertCircle,
  Loader2,
  ArrowLeft,
  RotateCcw,
  Copy,
  Check
} from "lucide-react"
import { sendMessageWithRetry, generateSessionId, generateUserId } from "@/lib/api"
import { ChatMessage } from "@/lib/utils"
import { FormattedMessage } from "@/components/ui/formatted-message"
import Link from "next/link"

interface Message extends ChatMessage {
  status?: 'sending' | 'sent' | 'error'
  imageUrl?: string
}

export default function AIChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'bot',
      content: '您好！我是「慧视」AI智囊，Lightcore AI 轻心力的AI战略咨询师。很高兴为您服务！\n\n我们专注于帮助企业和个人实现数字化转型，提升品牌影响力，优化运营效率。\n\n为了更高效地帮助您，请问您目前希望从哪些方面获得支持？',
      timestamp: new Date()
    }
  ])
  const [inputValue, setInputValue] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [sessionId] = useState(() => generateSessionId())
  const [userId] = useState(() => generateUserId())
  const [copiedMessageId, setCopiedMessageId] = useState<string | null>(null)
  // const [isInputFocused, setIsInputFocused] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLTextAreaElement>(null)

  // 自动滚动到最新消息
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  // 聚焦输入框
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  const extractImageUrl = (text: string): string | null => {
    // 简单匹配 http(s):// 开头的图片链接（以 .png/.jpg/.jpeg/.gif 结尾或常见CDN路径）
    const urlMatch = text.match(/https?:\/\/[\w\-./%]+\.(?:png|jpg|jpeg|gif)(?:\?[\w=&%.-]*)?/i)
    return urlMatch ? urlMatch[0] : null
  }

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return

    const messageContent = inputValue.trim()
    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: messageContent,
      timestamp: new Date(),
      status: 'sending'
    }

    // 添加用户消息并清空输入
    setMessages(prev => [...prev, userMessage])
    setInputValue('')
    setIsLoading(true)

    try {
      // 更新用户消息状态为已发送
      setMessages(prev => prev.map(msg => 
        msg.id === userMessage.id 
          ? { ...msg, status: 'sent' }
          : msg
      ))

      // 调用AI API
      const response = await sendMessageWithRetry({
        message: messageContent,
        sessionId,
        userId
      })

      // 创建AI回复消息
      // 检测返回的图片URL
      const photoUrl = response.photo || extractImageUrl(response.message)

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        content: response.success
          ? response.message
          : response.message || '抱歉，我现在无法回复您的消息，请稍后重试。',
        timestamp: new Date(),
        status: response.success ? 'sent' : 'error',
        imageUrl: photoUrl || undefined
      }

      setMessages(prev => [...prev, botMessage])

      if (!response.success) {
        console.error('AI API调用失败:', response.error)
      }

    } catch (error) {
      console.error('发送消息时出错:', error)
      
      setMessages(prev => prev.map(msg => 
        msg.id === userMessage.id 
          ? { ...msg, status: 'error' }
          : msg
      ))

      const errorMessage: Message = {
        id: (Date.now() + 2).toString(),
        type: 'bot',
        content: '抱歉，发送消息时出现了问题。请检查网络连接后重试。',
        timestamp: new Date(),
        status: 'error'
      }

      setMessages(prev => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  // 重试发送消息
  const handleRetryMessage = async (messageId: string) => {
    const message = messages.find(msg => msg.id === messageId)
    if (!message || message.type !== 'user') return

    setMessages(prev => prev.filter(msg => 
      !(msg.id === messageId || (msg.type === 'bot' && msg.status === 'error'))
    ))

    setInputValue(message.content)
    setTimeout(() => handleSendMessage(), 100)
  }

  // 复制消息内容
  const handleCopyMessage = async (content: string, messageId: string) => {
    try {
      await navigator.clipboard.writeText(content)
      setCopiedMessageId(messageId)
      setTimeout(() => setCopiedMessageId(null), 2000)
    } catch (error) {
      console.error('复制失败:', error)
    }
  }

  // 清空对话
  const handleClearChat = () => {
    setMessages([{
      id: '1',
      type: 'bot',
      content: '您好！我是「慧视」AI智囊，Lightcore AI 轻心力的AI战略咨询师。很高兴为您服务！\n\n我们专注于帮助企业和个人实现数字化转型，提升品牌影响力，优化运营效率。\n\n为了更高效地帮助您，请问您目前希望从哪些方面获得支持？',
      timestamp: new Date()
    }])
  }

  // 处理键盘事件
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <div className="h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 flex flex-col">
      {/* 头部导航 - 固定高度 */}
      <header className="flex-shrink-0 bg-white/80 backdrop-blur-sm border-b border-gray-200 z-10">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/">
                <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-900">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  返回首页
                </Button>
              </Link>
              <div className="h-6 w-px bg-gray-300" />
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-900">慧视 AI 智囊</h1>
                  <p className="text-sm text-gray-600">专业的AI战略咨询师</p>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Button
                onClick={handleClearChat}
                variant="ghost"
                size="sm"
                className="text-gray-600 hover:text-gray-900"
              >
                <RotateCcw className="w-4 h-4 mr-2" />
                清空对话
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* 消息列表区域 - 可滚动，占据剩余空间 */}
      <div className="flex-1 overflow-y-auto px-4 py-6">
        <div className="max-w-4xl mx-auto space-y-6">
          {messages.length === 0 ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Bot className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">欢迎使用慧视 AI 智囊</h2>
              <p className="text-gray-600 mb-8">我是您的专业AI战略咨询师，随时为您提供专业建议</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
                {[
                  { icon: "🎯", title: "品牌策略", desc: "品牌定位、命名、Slogan设计" },
                  { icon: "📈", title: "市场推广", desc: "营销策略、渠道规划、内容策略" },
                  { icon: "💻", title: "数字化转型", desc: "网站建设、数字化营销、流程优化" },
                  { icon: "⚡", title: "运营优化", desc: "效率提升、成本控制、用户体验" }
                ].map((item, index) => (
                  <div key={index} className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-gray-200 hover:border-blue-300 transition-colors">
                    <div className="text-2xl mb-2">{item.icon}</div>
                    <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            messages.map((message) => (
              <MessageBubble
                key={message.id}
                message={message}
                onRetry={handleRetryMessage}
                onCopy={handleCopyMessage}
                isCopied={copiedMessageId === message.id}
              />
            ))
          )}

          {/* 加载指示器 */}
          {isLoading && (
            <div className="flex justify-start">
              <div className="flex items-start space-x-4 max-w-4xl">
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Bot className="w-6 h-6 text-gray-600" />
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <div className="flex items-center space-x-3">
                    <Loader2 className="w-5 h-5 animate-spin text-blue-600" />
                    <span className="text-gray-600">AI正在思考中...</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* 输入区域 - 固定在底部，确保在屏幕内 */}
      <div className="flex-shrink-0 border-t border-gray-200 bg-white/80 backdrop-blur-sm p-4 pb-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-end space-x-4">
            <div className="flex-1 relative">
              <textarea
                ref={inputRef}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}

                placeholder="输入您的问题或需求..."
                disabled={isLoading}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-50 disabled:text-gray-500 resize-none min-h-[60px] max-h-[200px]"
                rows={1}
                style={{ height: 'auto' }}
                onInput={(e) => {
                  const target = e.target as HTMLTextAreaElement
                  target.style.height = 'auto'
                  target.style.height = Math.min(target.scrollHeight, 200) + 'px'
                }}
              />

              {/* 字符计数 */}
              {inputValue.length > 800 && (
                <div className="absolute bottom-2 right-2 text-xs text-gray-500 bg-white px-2 py-1 rounded">
                  {inputValue.length}/1000
                </div>
              )}
            </div>

            <Button
              onClick={handleSendMessage}
              disabled={!inputValue.trim() || isLoading}
              className="bg-blue-600 hover:bg-blue-700 h-[60px] px-6 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <Send className="w-5 h-5" />
              )}
            </Button>
          </div>

          {/* 提示文字 */}
          <div className="mt-3 text-sm text-gray-500 text-center">
            按 Enter 发送消息，Shift + Enter 换行 • 支持最多1000字符
          </div>
        </div>
      </div>
    </div>
  )
}

// 消息气泡组件
function MessageBubble({ 
  message, 
  onRetry, 
  onCopy, 
  isCopied 
}: { 
  message: Message
  onRetry: (id: string) => void
  onCopy: (content: string, id: string) => void
  isCopied: boolean
}) {
  const isUser = message.type === 'user'
  
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div className={`flex items-start space-x-4 max-w-4xl ${isUser ? 'flex-row-reverse space-x-reverse' : ''}`}>
        {/* 头像 */}
        <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
          isUser 
            ? 'bg-blue-600 text-white' 
            : 'bg-gray-100 text-gray-600'
        }`}>
          {isUser ? (
            <User className="w-6 h-6" />
          ) : (
            <Bot className="w-6 h-6" />
          )}
        </div>
        
        {/* 消息内容 */}
        <div className="flex flex-col space-y-2">
          <div className={`rounded-2xl p-6 relative group ${
            isUser
              ? message.status === 'error' 
                ? 'bg-red-500 text-white'
                : 'bg-blue-600 text-white'
              : message.status === 'error'
                ? 'bg-red-50 text-red-800 border border-red-200'
                : 'bg-white shadow-sm border border-gray-100'
          }`}>
            {/* 消息内容 - 使用格式化组件 */}
            <FormattedMessage
              content={message.content}
              isUser={isUser}
            />

            {/* 图片展示（当返回包含 imageUrl 时） */}
            {!isUser && message.imageUrl && (
              <div className="mt-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={message.imageUrl}
                  alt="AI生成图表"
                  className="max-w-full rounded-lg border border-gray-200 shadow-sm"
                />
                <div className="text-xs text-gray-500 mt-2 break-all">
                  图片来源：
                  <a href={message.imageUrl} target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-700">
                    {message.imageUrl}
                  </a>
                </div>
              </div>
            )}

            {/* 消息状态指示器 */}
            {message.status === 'sending' && (
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center">
                <Loader2 className="w-3 h-3 text-white animate-spin" />
              </div>
            )}
            {message.status === 'error' && (
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                <AlertCircle className="w-3 h-3 text-white" />
              </div>
            )}
            
            {/* 复制按钮 */}
            {!isUser && message.status === 'sent' && (
              <button
                onClick={() => onCopy(message.content, message.id)}
                className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity p-1 rounded hover:bg-gray-100"
              >
                {isCopied ? (
                  <Check className="w-4 h-4 text-green-600" />
                ) : (
                  <Copy className="w-4 h-4 text-gray-500" />
                )}
              </button>
            )}
          </div>
          
          {/* 时间戳 */}
          <div className={`text-xs text-gray-500 ${isUser ? 'text-right' : 'text-left'}`}>
            {message.timestamp.toLocaleTimeString()}
          </div>
          
          {/* 错误重试按钮 */}
          {message.status === 'error' && isUser && (
            <button
              onClick={() => onRetry(message.id)}
              className="text-sm text-red-600 hover:text-red-800 self-end"
            >
              点击重试
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
