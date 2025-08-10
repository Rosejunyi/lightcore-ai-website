"use client"

import { motion } from "framer-motion"
// import { AnimatedContainer } from "@/components/ui/animated-container"
import { 
  MessageCircle, 
  Phone, 
  Mail,
  Clock,
  MapPin,
  Sparkles
} from "lucide-react"

const quickStats = [
  {
    icon: Clock,
    title: "24小时内",
    description: "响应您的咨询"
  },
  {
    icon: MessageCircle,
    title: "免费咨询",
    description: "专业建议无需费用"
  },
  {
    icon: Sparkles,
    title: "定制方案",
    description: "量身打造解决方案"
  }
]

export function ContactHero() {
  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-br from-white via-gray-50 to-blue-50 overflow-hidden">
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

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
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
              <MessageCircle className="w-4 h-4" />
              <span>随时为您服务</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--text-primary)] leading-tight"
            >
              <span className="block">联系我们</span>
              <span className="block bg-gradient-to-r from-[var(--tech-blue)] via-[var(--ai-green)] to-[var(--accent-orange)] bg-clip-text text-transparent text-3xl sm:text-4xl lg:text-5xl mt-2">
                开启AI转型之旅
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg sm:text-xl lg:text-2xl text-[var(--text-muted)] max-w-4xl mx-auto leading-relaxed"
            >
              无论您是想了解我们的服务，还是需要专业的AI解决方案咨询，
              我们的专家团队都随时准备为您提供支持
            </motion.p>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-12"
            >
              {quickStats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <motion.div
                    key={stat.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                    className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-[var(--tech-blue)]/10 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:bg-[var(--tech-blue)]/20 transition-colors duration-300">
                      <Icon className="w-6 h-6 text-[var(--tech-blue)]" />
                    </div>
                    <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">
                      {stat.title}
                    </h3>
                    <p className="text-sm text-[var(--text-muted)]">
                      {stat.description}
                    </p>
                  </motion.div>
                )
              })}
            </motion.div>

            {/* Contact Methods Preview */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 mt-12"
            >
              <div className="flex items-center space-x-3 text-[var(--text-muted)]">
                <Mail className="w-5 h-5 text-[var(--tech-blue)]" />
                <span className="text-sm">junyichao5@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3 text-[var(--text-muted)]">
                <Phone className="w-5 h-5 text-[var(--ai-green)]" />
                <span className="text-sm">Rosa Zhao</span>
              </div>
              <div className="flex items-center space-x-3 text-[var(--text-muted)]">
                <MapPin className="w-5 h-5 text-[var(--accent-orange)]" />
                <span className="text-sm">www.lightcoreai.com</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
