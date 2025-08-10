import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// API相关类型定义
export interface ChatMessage {
  id: string
  type: 'user' | 'bot'
  content: string
  timestamp: Date
}

export interface ChatRequest {
  message: string
  sessionId?: string
  userId?: string
}

export interface ChatResponse {
  success: boolean
  message: string
  sessionId?: string
  error?: string
  photo?: string // 可选的图片URL（用于金融AI演示返回）
}

export interface APIError {
  message: string
  status?: number
  code?: string
}
