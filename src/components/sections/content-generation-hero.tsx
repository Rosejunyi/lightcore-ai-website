"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import {
  PenTool,
  Sparkles,
  ArrowRight,
  Video,
  FileText,
  Megaphone
} from "lucide-react"

const highlights = [
  {
    icon: PenTool,
    title: "500%",
    subtitle: "创作效率提升",
    description: "AI驱动的内容生成速度"
  },
  {
    icon: Video,
    title: "180%",
    subtitle: "点击率提升",
    description: "优化的内容营销效果"
  },
  {
    icon: Megaphone,
    title: "70%",
    subtitle: "成本降低",
    description: "自动化内容制作流程"
  }
]

export function ContentGenerationHero() {
  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-br from-green-50 via-white to-emerald-50 overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-teal-500/10 to-green-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        {/* Floating Content Icons */}
        <motion.div
          className="absolute top-20 left-20 w-6 h-6 text-green-500/60"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <PenTool className="w-full h-full" />
        </motion.div>
        <motion.div
          className="absolute top-40 right-32 w-5 h-5 text-emerald-500/60"
          animate={{
            y: [0, -15, 0],
            rotate: [0, -180, -360]
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        >
          <FileText className="w-full h-full" />
        </motion.div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-green-100 border border-green-200 rounded-full px-4 py-2 text-sm font-medium text-green-700"
            >
              <Sparkles className="w-4 h-4" />
              <span>AI内容生成与营销</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--text-primary)] leading-tight"
            >
              <span className="block">智能内容创作</span>
              <span className="block bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
                营销效果倍增
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg sm:text-xl text-[var(--text-muted)] leading-relaxed"
            >
              AI驱动的内容生成平台，为传媒、出版、电商等行业提供高质量的
              文案创作、视频脚本和营销内容，大幅提升创作效率和营销效果。
            </motion.p>

            {/* Key Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="space-y-4"
            >
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-[var(--text-secondary)]">多平台内容自动适配</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                <span className="text-[var(--text-secondary)]">品牌调性智能保持</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                <span className="text-[var(--text-secondary)]">SEO优化内容生成</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4"
            >
              <Button variant="secondary" size="lg" className="group">
                <span className="flex items-center space-x-2">
                  <span>免费试用</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </span>
              </Button>
              
              <Button variant="outline" size="lg" className="group">
                <span className="flex items-center space-x-2">
                  <span>查看案例</span>
                  <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform duration-200" />
                </span>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Content - Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon
              return (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-600 mb-1">
                        {highlight.title}
                      </div>
                      <div className="text-sm font-medium text-[var(--text-primary)] mb-2">
                        {highlight.subtitle}
                      </div>
                      <div className="text-sm text-[var(--text-muted)]">
                        {highlight.description}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
