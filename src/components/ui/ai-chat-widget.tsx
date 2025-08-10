"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import {
  MessageCircle,
  X,
  Send,
  Bot,
  User,
  Sparkles,
  AlertCircle,
  Loader2
} from "lucide-react"
import { sendMessageWithRetry, generateSessionId, generateUserId } from "@/lib/api"
import { ChatMessage } from "@/lib/utils"

interface Message extends ChatMessage {
  status?: 'sending' | 'sent' | 'error'
}

export function AIChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'bot',
      content: '您好！我是慧视AI智囊，很高兴为您服务。请问有什么可以帮助您的吗？',
      timestamp: new Date()
    }
  ])
  const [inputValue, setInputValue] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [sessionId] = useState(() => generateSessionId())
  const [userId] = useState(() => generateUserId())
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // 自动滚动到最新消息
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  // 聚焦输入框
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => {
        inputRef.current?.focus()
      }, 300)
    }
  }, [isOpen])

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
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        content: response.success
          ? response.message
          : response.message || '抱歉，我现在无法回复您的消息，请稍后重试。',
        timestamp: new Date(),
        status: response.success ? 'sent' : 'error'
      }

      setMessages(prev => [...prev, botMessage])

      // 如果API调用失败，显示错误状态
      if (!response.success) {
        console.error('AI API调用失败:', response.error)
      }

    } catch (error) {
      console.error('发送消息时出错:', error)

      // 更新用户消息状态为错误
      setMessages(prev => prev.map(msg =>
        msg.id === userMessage.id
          ? { ...msg, status: 'error' }
          : msg
      ))

      // 添加错误提示消息
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

    // 移除错误状态的消息
    setMessages(prev => prev.filter(msg =>
      !(msg.id === messageId || (msg.type === 'bot' && msg.status === 'error'))
    ))

    // 重新发送
    setInputValue(message.content)
    await handleSendMessage()
  }

  return (
    <>
      {/* Chat Widget */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed bottom-24 right-6 w-80 h-96 bg-white rounded-2xl shadow-2xl border border-gray-200 z-50 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-4 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <Bot className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold">慧视AI智囊</h3>
                    <p className="text-xs text-blue-100">在线为您服务</p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:bg-white/20 h-8 w-8 p-0"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex items-start space-x-2 max-w-[80%] ${message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                      message.type === 'user'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-600'
                    }`}>
                      {message.type === 'user' ? (
                        <User className="w-3 h-3" />
                      ) : (
                        <Bot className="w-3 h-3" />
                      )}
                    </div>
                    <div className="flex flex-col space-y-1">
                      <div className={`rounded-lg p-3 text-sm relative ${
                        message.type === 'user'
                          ? message.status === 'error'
                            ? 'bg-red-500 text-white'
                            : 'bg-blue-600 text-white'
                          : message.status === 'error'
                            ? 'bg-red-50 text-red-800 border border-red-200'
                            : 'bg-gray-100 text-gray-800'
                      }`}>
                        {message.content}

                        {/* 消息状态指示器 */}
                        {message.status === 'sending' && (
                          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-yellow-500 rounded-full flex items-center justify-center">
                            <Loader2 className="w-2 h-2 text-white animate-spin" />
                          </div>
                        )}
                        {message.status === 'error' && (
                          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                            <AlertCircle className="w-2 h-2 text-white" />
                          </div>
                        )}
                      </div>

                      {/* 错误重试按钮 */}
                      {message.status === 'error' && message.type === 'user' && (
                        <button
                          onClick={() => handleRetryMessage(message.id)}
                          className="text-xs text-red-600 hover:text-red-800 self-end"
                        >
                          点击重试
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}

              {/* 加载指示器 */}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="flex items-start space-x-2 max-w-[80%]">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 bg-gray-100 text-gray-600">
                      <Bot className="w-3 h-3" />
                    </div>
                    <div className="bg-gray-100 rounded-lg p-3 text-sm">
                      <div className="flex items-center space-x-2">
                        <Loader2 className="w-4 h-4 animate-spin text-gray-500" />
                        <span className="text-gray-600">AI正在思考中...</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-gray-200">
              <div className="flex items-center space-x-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault()
                      handleSendMessage()
                    }
                  }}
                  placeholder={isLoading ? "AI正在回复中..." : "输入您的问题..."}
                  disabled={isLoading}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-50 disabled:text-gray-500"
                  maxLength={1000}
                />
                <Button
                  onClick={handleSendMessage}
                  size="sm"
                  disabled={!inputValue.trim() || isLoading}
                  className="bg-blue-600 hover:bg-blue-700 h-9 w-9 p-0 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <Send className="w-4 h-4" />
                  )}
                </Button>
              </div>

              {/* 字符计数 */}
              {inputValue.length > 800 && (
                <div className="mt-2 text-xs text-gray-500 text-right">
                  {inputValue.length}/1000
                </div>
              )}

              {/* 提示信息 */}
              <div className="mt-2 text-xs text-gray-400">
                按 Enter 发送消息，Shift + Enter 换行
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 shadow-lg hover:shadow-xl transition-all duration-300 group relative overflow-hidden"
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="w-6 h-6 text-white" />
              </motion.div>
            ) : (
              <motion.div
                key="chat"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="relative"
              >
                <MessageCircle className="w-6 h-6 text-white" />
                {/* Pulse animation */}
                <motion.div
                  className="absolute inset-0 rounded-full bg-white/20"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0, 0.5]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>
            )}
          </AnimatePresence>
          
          {/* Sparkle effect */}
          <motion.div
            className="absolute top-1 right-1"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Sparkles className="w-3 h-3 text-yellow-300" />
          </motion.div>
        </Button>
      </motion.div>
    </>
  )
}
