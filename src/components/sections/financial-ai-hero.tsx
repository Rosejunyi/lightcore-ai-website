"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { 
  TrendingUp, 
  BarChart3, 
  Shield, 

  ArrowRight,
  Sparkles,
  Brain
} from "lucide-react"

const highlights = [
  {
    icon: TrendingUp,
    title: "87%",
    subtitle: "预测准确率",
    description: "基于深度学习的市场趋势预测"
  },
  {
    icon: BarChart3,
    title: "300%",
    subtitle: "分析效率提升",
    description: "自动化数据处理和分析"
  },
  {
    icon: Shield,
    title: "25%",
    subtitle: "风险降低",
    description: "智能风险评估和预警"
  }
]

export function FinancialAIHero() {
  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-br from-blue-50 via-white to-cyan-50 overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-indigo-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        {/* Floating Financial Icons */}
        <motion.div
          className="absolute top-20 left-20 w-6 h-6 text-blue-500/60"
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
          <TrendingUp className="w-full h-full" />
        </motion.div>
        <motion.div
          className="absolute top-40 right-32 w-5 h-5 text-cyan-500/60"
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
          <BarChart3 className="w-full h-full" />
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
              className="inline-flex items-center space-x-2 bg-blue-100 border border-blue-200 rounded-full px-4 py-2 text-sm font-medium text-blue-700"
            >
              <Brain className="w-4 h-4" />
              <span>AI金融智能洞察</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--text-primary)] leading-tight"
            >
              <span className="block">智能金融分析</span>
              <span className="block bg-gradient-to-r from-blue-600 via-cyan-600 to-indigo-600 bg-clip-text text-transparent">
                数据驱动决策
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg sm:text-xl text-[var(--text-muted)] leading-relaxed"
            >
              基于先进AI算法的金融市场分析平台，为投资决策提供精准洞察，
              实现风险可控的智能化投资管理。
            </motion.p>

            {/* Key Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="space-y-4"
            >
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-[var(--text-secondary)]">实时市场数据分析与趋势预测</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                <span className="text-[var(--text-secondary)]">智能投资组合优化建议</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                <span className="text-[var(--text-secondary)]">自动化风险评估与预警</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4"
            >
              <Button variant="primary" size="lg" className="group">
                <span className="flex items-center space-x-2">
                  <span>免费试用</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </span>
              </Button>
              
              <a href="/ai-chat/finance" className="inline-block">
                <Button variant="outline" size="lg" className="group">
                  <span className="flex items-center space-x-2">
                    <span>AI演示</span>
                    <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform duration-200" />
                  </span>
                </Button>
              </a>
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
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-blue-600 mb-1">
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
