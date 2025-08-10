"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import {
  Brain,
  ArrowRight,
  BookOpen,
  Lightbulb
} from "lucide-react"

export function InsightsHero() {
  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-br from-indigo-50 via-white to-purple-50 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center space-x-2 bg-indigo-100 border border-indigo-200 rounded-full px-4 py-2 text-sm font-medium text-indigo-700"
          >
            <Brain className="w-4 h-4" />
            <span>AI前沿洞察</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--text-primary)] leading-tight"
          >
            <span className="block">探索AI前沿</span>
            <span className="block bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              洞察未来趋势
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl text-[var(--text-muted)] max-w-3xl mx-auto leading-relaxed"
          >
            获取最新的AI技术趋势、行业洞察和专业分析，
            与我们一起探索人工智能的无限可能
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-600 mb-2">50+</div>
              <div className="text-sm text-[var(--text-muted)]">深度文章</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">10+</div>
              <div className="text-sm text-[var(--text-muted)]">行业报告</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-600 mb-2">每周</div>
              <div className="text-sm text-[var(--text-muted)]">更新频率</div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4"
          >
            <Button variant="primary" size="lg" className="group">
              <span className="flex items-center space-x-2">
                <BookOpen className="w-5 h-5" />
                <span>开始阅读</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </span>
            </Button>
            
            <Button variant="outline" size="lg" className="group">
              <span className="flex items-center space-x-2">
                <Lightbulb className="w-5 h-5" />
                <span>订阅更新</span>
              </span>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
