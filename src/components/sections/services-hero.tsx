"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { 
  TrendingUp, 
  PenTool, 
  Settings, 
  ArrowRight,
  Sparkles,
  Target,
  Zap
} from "lucide-react"

const serviceHighlights = [
  {
    icon: TrendingUp,
    title: "AI金融洞察",
    description: "智能分析市场趋势",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: PenTool,
    title: "内容生成",
    description: "AI驱动内容创作",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Settings,
    title: "运营优化",
    description: "数字化管理升级",
    color: "from-orange-500 to-yellow-500"
  }
]

export function ServicesHero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-gray-50 to-blue-50">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-[var(--tech-blue)]/10 to-[var(--ai-green)]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-[var(--accent-orange)]/10 to-[var(--tech-blue)]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        {/* Floating Elements */}
        <motion.div
          className="absolute top-20 left-20 w-4 h-4 bg-[var(--tech-blue)] rounded-full opacity-60"
          animate={{
            y: [0, -20, 0],
            opacity: [0.6, 1, 0.6]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-40 right-32 w-3 h-3 bg-[var(--ai-green)] rounded-full opacity-60"
          animate={{
            y: [0, -15, 0],
            opacity: [0.6, 1, 0.6]
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-[var(--tech-blue)]/20 rounded-full px-4 py-2 text-sm font-medium text-[var(--tech-blue)]"
          >
            <Sparkles className="w-4 h-4" />
            <span>专业AI解决方案</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--text-primary)] leading-tight"
          >
            <span className="block">服务与解决方案</span>
            <span className="block bg-gradient-to-r from-[var(--tech-blue)] via-[var(--ai-green)] to-[var(--accent-orange)] bg-clip-text text-transparent text-3xl sm:text-4xl lg:text-5xl mt-2">
              为您的企业量身定制
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl lg:text-2xl text-[var(--text-muted)] max-w-4xl mx-auto leading-relaxed"
          >
            从AI金融洞察到智能内容生成，从运营优化到数字化转型，
            我们为不同行业提供专业的AI驱动解决方案
          </motion.p>

          {/* Service Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-12"
          >
            {serviceHighlights.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className={`w-12 h-12 bg-gradient-to-br ${service.color} rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[var(--text-muted)]">
                    {service.description}
                  </p>
                </motion.div>
              )
            })}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mt-12"
          >
            <Button
              variant="accent"
              size="xl"
              className="group relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center space-x-2">
                <span>免费咨询</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </span>
            </Button>
            
            <Button
              variant="outline"
              size="xl"
              className="group"
            >
              <span className="flex items-center space-x-2">
                <span>查看案例</span>
                <Target className="w-5 h-5 group-hover:rotate-12 transition-transform duration-200" />
              </span>
            </Button>
          </motion.div>

          {/* Key Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto"
          >
            <div className="flex items-center justify-center space-x-3 text-sm text-[var(--text-muted)]">
              <Zap className="w-5 h-5 text-[var(--tech-blue)]" />
              <span>快速部署</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-sm text-[var(--text-muted)]">
              <Target className="w-5 h-5 text-[var(--ai-green)]" />
              <span>精准定制</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-sm text-[var(--text-muted)]">
              <Sparkles className="w-5 h-5 text-[var(--accent-orange)]" />
              <span>持续优化</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-[var(--tech-blue)]/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-3 bg-[var(--tech-blue)] rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
