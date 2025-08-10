"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { sendMessageToAI, testAPIConnection, getAIServiceStatus } from "@/lib/api"
import { API_CONFIG } from "@/lib/config"
import { Loader2, CheckCircle, XCircle, AlertCircle } from "lucide-react"

export default function TestAPIPage() {
  const [testResult, setTestResult] = useState<string>("")
  const [isLoading, setIsLoading] = useState(false)
  const [connectionStatus, setConnectionStatus] = useState<'unknown' | 'online' | 'offline'>('unknown')

  const handleTestConnection = async () => {
    setIsLoading(true)
    setTestResult("正在测试连接...")
    
    try {
      const isConnected = await testAPIConnection()
      setConnectionStatus(isConnected ? 'online' : 'offline')
      setTestResult(isConnected ? "✅ API连接成功！" : "❌ API连接失败")
    } catch (error) {
      setConnectionStatus('offline')
      setTestResult(`❌ 连接测试失败: ${error}`)
    } finally {
      setIsLoading(false)
    }
  }

  const handleTestMessage = async () => {
    setIsLoading(true)
    setTestResult("正在发送测试消息...")
    
    try {
      const response = await sendMessageToAI({
        message: "你好，这是一个测试消息，请简单回复确认收到。",
        sessionId: "test_session_" + Date.now(),
        userId: "test_user_" + Date.now()
      })
      
      if (response.success) {
        setTestResult(`✅ 消息发送成功！\n\nAI回复: ${response.message}`)
      } else {
        setTestResult(`❌ 消息发送失败: ${response.error || response.message}`)
      }
    } catch (error) {
      setTestResult(`❌ 发送消息时出错: ${error}`)
    } finally {
      setIsLoading(false)
    }
  }

  const handleGetStatus = async () => {
    setIsLoading(true)
    setTestResult("正在获取服务状态...")
    
    try {
      const status = await getAIServiceStatus()
      setConnectionStatus(status.status)
      setTestResult(`📊 服务状态: ${status.status}\n消息: ${status.message}\n检查时间: ${status.lastChecked.toLocaleString()}`)
    } catch (error) {
      setTestResult(`❌ 获取状态失败: ${error}`)
    } finally {
      setIsLoading(false)
    }
  }

  const getStatusIcon = () => {
    switch (connectionStatus) {
      case 'online':
        return <CheckCircle className="w-5 h-5 text-green-500" />
      case 'offline':
        return <XCircle className="w-5 h-5 text-red-500" />
      default:
        return <AlertCircle className="w-5 h-5 text-gray-500" />
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">API集成测试</h1>
          
          {/* 连接状态 */}
          <div className="mb-8 p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center space-x-2 mb-2">
              {getStatusIcon()}
              <span className="font-semibold">连接状态: {connectionStatus}</span>
            </div>
            <p className="text-sm text-gray-600">
              n8n Webhook URL: {API_CONFIG.N8N_WEBHOOK_URL}
            </p>
          </div>

          {/* 测试按钮 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <Button
              onClick={handleTestConnection}
              disabled={isLoading}
              className="h-12"
            >
              {isLoading ? (
                <Loader2 className="w-4 h-4 animate-spin mr-2" />
              ) : null}
              测试连接
            </Button>
            
            <Button
              onClick={handleTestMessage}
              disabled={isLoading}
              className="h-12"
            >
              {isLoading ? (
                <Loader2 className="w-4 h-4 animate-spin mr-2" />
              ) : null}
              发送测试消息
            </Button>
            
            <Button
              onClick={handleGetStatus}
              disabled={isLoading}
              className="h-12"
            >
              {isLoading ? (
                <Loader2 className="w-4 h-4 animate-spin mr-2" />
              ) : null}
              获取服务状态
            </Button>
          </div>

          {/* 测试结果 */}
          <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
            <h3 className="text-white font-semibold mb-2">测试结果:</h3>
            <pre className="whitespace-pre-wrap">
              {testResult || "点击上方按钮开始测试..."}
            </pre>
          </div>

          {/* 使用说明 */}
          <div className="mt-8 p-4 bg-blue-50 rounded-lg">
            <h3 className="font-semibold text-blue-900 mb-2">使用说明:</h3>
            <ul className="text-sm text-blue-800 space-y-1">
              <li>• <strong>测试连接</strong>: 验证与n8n webhook的基本连接</li>
              <li>• <strong>发送测试消息</strong>: 发送一条测试消息并获取AI回复</li>
              <li>• <strong>获取服务状态</strong>: 检查AI服务的当前状态</li>
            </ul>
          </div>

          {/* API信息 */}
          <div className="mt-8 p-4 bg-yellow-50 rounded-lg">
            <h3 className="font-semibold text-yellow-900 mb-2">API配置信息:</h3>
            <div className="text-sm text-yellow-800 space-y-1">
              <p><strong>Webhook URL</strong>: {API_CONFIG.N8N_WEBHOOK_URL}</p>
              <p><strong>请求方法</strong>: POST</p>
              <p><strong>Content-Type</strong>: application/json</p>
              <p><strong>超时时间</strong>: {API_CONFIG.REQUEST_TIMEOUT / 1000}秒</p>
              <p><strong>重试次数</strong>: 最多{API_CONFIG.MAX_RETRIES}次</p>
              <p><strong>消息长度限制</strong>: {API_CONFIG.MAX_MESSAGE_LENGTH}字符</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
