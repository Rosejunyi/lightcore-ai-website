"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Brain, Zap } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-gray-50 to-blue-50">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-[var(--tech-blue)]/10 to-[var(--ai-green)]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-[var(--accent-orange)]/10 to-[var(--tech-blue)]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        {/* Floating AI Elements */}
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
        <motion.div
          className="absolute bottom-32 left-32 w-2 h-2 bg-[var(--accent-orange)] rounded-full opacity-60"
          animate={{
            y: [0, -10, 0],
            opacity: [0.6, 1, 0.6]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
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
            <span>AI智能引擎 · 数字化转型专家</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold text-[var(--text-primary)] leading-tight"
          >
            <span className="block">「慧视」</span>
            <span className="block bg-gradient-to-r from-[var(--tech-blue)] via-[var(--ai-green)] to-[var(--accent-orange)] bg-clip-text text-transparent">
              AI智见
            </span>
            <span className="block text-3xl sm:text-4xl lg:text-5xl mt-2">
              引领企业数智未来
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl lg:text-2xl text-[var(--text-muted)] max-w-4xl mx-auto leading-relaxed"
          >
            赋能企业产业数字化升级，智造新质生产力
          </motion.p>

          {/* Value Proposition */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-12"
          >
            <div className="flex items-center justify-center space-x-3 bg-white/60 backdrop-blur-sm rounded-lg p-4 border border-gray-100">
              <Brain className="w-6 h-6 text-[var(--tech-blue)]" />
              <span className="text-sm font-medium text-[var(--text-secondary)]">AI金融洞察</span>
            </div>
            <div className="flex items-center justify-center space-x-3 bg-white/60 backdrop-blur-sm rounded-lg p-4 border border-gray-100">
              <Zap className="w-6 h-6 text-[var(--ai-green)]" />
              <span className="text-sm font-medium text-[var(--text-secondary)]">智能内容生成</span>
            </div>
            <div className="flex items-center justify-center space-x-3 bg-white/60 backdrop-blur-sm rounded-lg p-4 border border-gray-100">
              <Sparkles className="w-6 h-6 text-[var(--accent-orange)]" />
              <span className="text-sm font-medium text-[var(--text-secondary)]">运营优化升级</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mt-12"
          >
            <Link href="/ai-chat">
              <Button
                variant="accent"
                size="xl"
                className="group relative overflow-hidden text-gray-900"
              >
                <span className="relative z-10 flex items-center space-x-2">
                  <span>与AI智囊对话</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--accent-orange)] to-[var(--accent-gold)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>
            </Link>
            
            <Button
              variant="outline"
              size="xl"
              className="group"
            >
              <span className="flex items-center space-x-2">
                <span>开启您的AI转型之旅</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </span>
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-16 text-center"
          >
            <p className="text-sm text-[var(--text-muted)] mb-4">
              已为多家企业提供AI驱动的数字化转型解决方案
            </p>
            <div className="flex items-center justify-center space-x-8 opacity-60">
              <div className="text-xs font-medium text-[var(--text-muted)]">保险行业</div>
              <div className="w-1 h-1 bg-[var(--text-muted)] rounded-full"></div>
              <div className="text-xs font-medium text-[var(--text-muted)]">金融服务</div>
              <div className="w-1 h-1 bg-[var(--text-muted)] rounded-full"></div>
              <div className="text-xs font-medium text-[var(--text-muted)]">制造业</div>
              <div className="w-1 h-1 bg-[var(--text-muted)] rounded-full"></div>
              <div className="text-xs font-medium text-[var(--text-muted)]">电商平台</div>
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
