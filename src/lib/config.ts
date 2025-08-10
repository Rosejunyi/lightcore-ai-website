// 应用配置文件

// API配置
export const API_CONFIG = {
  // n8n webhook配置
  // 默认通用聊天（首页）
  N8N_WEBHOOK_URL: process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL || 'https://n8nprd.aifunbox.com/webhook/lightcoreai',
  // 金融AI演示专用
  FINANCE_WEBHOOK_URL: process.env.NEXT_PUBLIC_N8N_FINANCE_WEBHOOK_URL || 'https://n8n.aifunbox.com/webhook/storeai',

  // 请求配置
  REQUEST_TIMEOUT: 30000, // 30秒
  MAX_RETRIES: 3,
  RETRY_DELAY: 1000, // 1秒

  // 消息限制
  MAX_MESSAGE_LENGTH: 1000,
  MAX_MESSAGES_PER_SESSION: 100,

  // 会话配置
  SESSION_TIMEOUT: 30 * 60 * 1000, // 30分钟
} as const

// 应用信息
export const APP_INFO = {
  NAME: '慧视 AI 智囊',
  VERSION: '1.0.0',
  USER_AGENT: 'LightcoreAI-Website/1.0',
  SOURCE: 'lightcore-ai-website'
} as const

// 错误消息
export const ERROR_MESSAGES = {
  NETWORK_ERROR: '网络连接异常，请检查网络后重试',
  TIMEOUT_ERROR: '请求超时，请稍后重试',
  SERVER_ERROR: 'AI服务暂时繁忙，请稍后重试',
  INVALID_MESSAGE: '消息内容不能为空',
  MESSAGE_TOO_LONG: `消息内容过长，请控制在${API_CONFIG.MAX_MESSAGE_LENGTH}字符以内`,
  UNKNOWN_ERROR: '抱歉，AI服务暂时不可用，请稍后重试',
  INVALID_RESPONSE: 'AI响应格式无效',
  EMPTY_RESPONSE: '服务器返回空响应'
} as const

// 成功消息
export const SUCCESS_MESSAGES = {
  CONNECTION_SUCCESS: 'AI服务正常运行',
  CONNECTION_FAILED: 'AI服务暂时不可用',
  STATUS_UNKNOWN: '无法检测AI服务状态'
} as const

// 开发环境配置
export const DEV_CONFIG = {
  ENABLE_CONSOLE_LOGS: process.env.NODE_ENV === 'development',
  ENABLE_PERFORMANCE_MONITOR: process.env.NODE_ENV === 'development',
  SHOW_DEBUG_INFO: process.env.NODE_ENV === 'development'
} as const

// 日志工具
export const logger = {
  info: (message: string, data?: unknown) => {
    if (DEV_CONFIG.ENABLE_CONSOLE_LOGS) {
      console.log(`[INFO] ${message}`, data || '')
    }
  },
  error: (message: string, error?: unknown) => {
    if (DEV_CONFIG.ENABLE_CONSOLE_LOGS) {
      console.error(`[ERROR] ${message}`, error || '')
    }
  },
  warn: (message: string, data?: unknown) => {
    if (DEV_CONFIG.ENABLE_CONSOLE_LOGS) {
      console.warn(`[WARN] ${message}`, data || '')
    }
  },
  debug: (message: string, data?: unknown) => {
    if (DEV_CONFIG.SHOW_DEBUG_INFO) {
      console.debug(`[DEBUG] ${message}`, data || '')
    }
  }
}

// 验证配置
export function validateConfig() {
  const issues: string[] = []

  if (!API_CONFIG.N8N_WEBHOOK_URL) {
    issues.push('N8N_WEBHOOK_URL 未配置')
  }

  if (API_CONFIG.REQUEST_TIMEOUT < 1000) {
    issues.push('REQUEST_TIMEOUT 不能小于1秒')
  }

  if (API_CONFIG.MAX_MESSAGE_LENGTH < 1) {
    issues.push('MAX_MESSAGE_LENGTH 必须大于0')
  }

  if (issues.length > 0) {
    logger.error('配置验证失败', issues)
    return false
  }

  logger.info('配置验证通过')
  return true
}

// 获取环境信息
export function getEnvironmentInfo() {
  return {
    nodeEnv: process.env.NODE_ENV,
    isProduction: process.env.NODE_ENV === 'production',
    isDevelopment: process.env.NODE_ENV === 'development',
    webhookUrl: API_CONFIG.N8N_WEBHOOK_URL,
    timestamp: new Date().toISOString()
  }
}

// 安全获取环境变量（避免 any）
export function getEnv<T = string>(key: string, fallback?: T) {
  const val = process.env[key]
  if (val === undefined || val === "") return fallback as T
  return val as unknown as T
}

export function getNumberEnv(key: string, fallback?: number) {
  const val = process.env[key]
  const num = Number(val)
  if (isNaN(num)) return fallback
  return num
}

export function getBooleanEnv(key: string, fallback?: boolean) {
  const val = process.env[key]
  if (val === undefined) return fallback
  return val === "true" || val === "1"
}

