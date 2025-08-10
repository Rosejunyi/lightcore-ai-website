"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { 
  Settings, 
  Zap, 
  ArrowRight,
  Globe,
  Users,
  BarChart3
} from "lucide-react"

const highlights = [
  {
    icon: Globe,
    title: "180%",
    subtitle: "线上询盘增长",
    description: "专业网站带来的业务增长"
  },
  {
    icon: Users,
    title: "55%",
    subtitle: "运营效率提升",
    description: "智能化管理系统优化"
  },
  {
    icon: BarChart3,
    title: "92%",
    subtitle: "客户满意度",
    description: "智能客服服务质量"
  }
]

export function OperationsHero() {
  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-br from-orange-50 via-white to-yellow-50 overflow-hidden">
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
              className="inline-flex items-center space-x-2 bg-orange-100 border border-orange-200 rounded-full px-4 py-2 text-sm font-medium text-orange-700"
            >
              <Settings className="w-4 h-4" />
              <span>企业运营优化</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--text-primary)] leading-tight"
            >
              <span className="block">数字化转型</span>
              <span className="block bg-gradient-to-r from-orange-600 via-yellow-600 to-amber-600 bg-clip-text text-transparent">
                运营效率倍增
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg sm:text-xl text-[var(--text-muted)] leading-relaxed"
            >
              为传统企业提供全方位的数字化转型解决方案，
              从专业网站搭建到智能客服系统，助力企业实现运营效率的全面提升。
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4"
            >
              <Button variant="accent" size="lg" className="group">
                <span className="flex items-center space-x-2">
                  <span>免费咨询</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </span>
              </Button>
              
              <Button variant="outline" size="lg" className="group">
                <span className="flex items-center space-x-2">
                  <span>查看案例</span>
                  <Zap className="w-5 h-5 group-hover:rotate-12 transition-transform duration-200" />
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
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-orange-600 mb-1">
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
