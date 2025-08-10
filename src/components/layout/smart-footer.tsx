"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronUp, ChevronDown } from "lucide-react"
import { Footer } from "./footer"

export function SmartFooter() {
  const pathname = usePathname()
  const [isVisible, setIsVisible] = useState(true)
  const [isHovered, setIsHovered] = useState(false)
  const [showToggle, setShowToggle] = useState(false)
  
  // 检查是否在AI聊天页面
  const isAIChatPage = pathname === '/ai-chat'
  
  useEffect(() => {
    if (isAIChatPage) {
      // 在AI聊天页面，默认隐藏footer，显示切换按钮
      setIsVisible(false)
      setShowToggle(true)
    } else {
      // 在其他页面，显示footer，隐藏切换按钮
      setIsVisible(true)
      setShowToggle(false)
    }
  }, [isAIChatPage])

  // 如果不在AI聊天页面，直接显示普通footer
  if (!isAIChatPage) {
    return <Footer />
  }

  return (
    <>
      {/* Footer内容 */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "100%", opacity: 0 }}
            transition={{ 
              type: "spring", 
              stiffness: 300, 
              damping: 30,
              opacity: { duration: 0.2 }
            }}
            className="relative z-10"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>

      {/* 切换按钮 - 只在AI聊天页面显示 */}
      {showToggle && (
        <motion.div
          className="fixed bottom-4 right-4 z-50"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <motion.button
            onClick={() => setIsVisible(!isVisible)}
            className="bg-white/90 backdrop-blur-sm border border-gray-200 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            title={isVisible ? "隐藏页脚" : "显示页脚"}
          >
            <motion.div
              animate={{ rotate: isVisible ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              {isVisible ? (
                <ChevronDown className="w-5 h-5 text-gray-600 group-hover:text-blue-600" />
              ) : (
                <ChevronUp className="w-5 h-5 text-gray-600 group-hover:text-blue-600" />
              )}
            </motion.div>
          </motion.button>
        </motion.div>
      )}

      {/* 底部悬停区域 - 用于触发footer显示 */}
      {!isVisible && (
        <div
          className="fixed bottom-0 left-0 right-0 h-8 z-40 bg-transparent"
          onMouseEnter={() => {
            setIsVisible(true)
            setTimeout(() => {
              if (!isHovered) {
                setIsVisible(false)
              }
            }, 3000) // 3秒后自动隐藏
          }}
        />
      )}
    </>
  )
}
