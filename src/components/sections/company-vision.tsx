"use client"

import { motion } from "framer-motion"
import { AnimatedContainer } from "@/components/ui/animated-container"
import { Card, CardContent } from "@/components/ui/card"
import { Target, Eye, Heart, Lightbulb, Users, Zap } from "lucide-react"

const visionPoints = [
  {
    icon: Target,
    title: "我们的使命",
    description: "通过AI技术赋能传统企业，助力实现数字化转型升级，创造新质生产力",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Eye,
    title: "我们的愿景",
    description: "成为企业数字化转型的首选AI合作伙伴，引领行业智能化发展",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Heart,
    title: "我们的价值观",
    description: "创新、专业、合作、赋能 - 以客户成功为导向，持续创造价值",
    color: "from-orange-500 to-yellow-500"
  }
]

const coreValues = [
  {
    icon: Lightbulb,
    title: "创新驱动",
    description: "持续探索AI前沿技术，为客户提供最先进的解决方案"
  },
  {
    icon: Users,
    title: "客户至上",
    description: "深入理解客户需求，提供个性化的专业服务"
  },
  {
    icon: Zap,
    title: "高效执行",
    description: "快速响应，高质量交付，确保项目成功落地"
  }
]

export function CompanyVision() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-white via-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <AnimatedContainer className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--text-primary)]">
              关于
              <span className="bg-gradient-to-r from-[var(--tech-blue)] via-[var(--ai-green)] to-[var(--accent-orange)] bg-clip-text text-transparent">
                「慧视」
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-[var(--text-muted)] max-w-4xl mx-auto leading-relaxed">
              AI智见，引领企业数智未来
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-[var(--tech-blue)] to-[var(--ai-green)] mx-auto rounded-full"></div>
          </motion.div>
        </AnimatedContainer>

        {/* Company Introduction */}
        <AnimatedContainer delay={0.2} className="mb-20">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 lg:p-12 shadow-lg border border-gray-100">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h2 className="text-2xl lg:text-3xl font-bold text-[var(--text-primary)]">
                Lightcore AI 旗下品牌
              </h2>
              <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                「慧视」是Lightcore AI旗下专注于企业数字化转型的AI智能引擎。我们深耕AI应用领域，
                为传统制造型企业、出口贸易型企业、电商平台以及寻求转型的个人创业者提供专业的AI驱动解决方案。
              </p>
              <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                通过先进的AI技术和深度的行业洞察，我们帮助企业解决数据管理不系统、分析能力不足、
                对外展示不够专业、员工缺乏数据化管理标准等痛点，实现真正的智能化升级。
              </p>
            </div>
          </div>
        </AnimatedContainer>

        {/* Mission, Vision, Values */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {visionPoints.map((point, index) => {
            const Icon = point.icon
            return (
              <AnimatedContainer
                key={point.title}
                delay={index * 0.2}
                className="h-full"
              >
                <Card className="h-full group hover:shadow-xl transition-all duration-300 border-0 bg-white/90 backdrop-blur-sm relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${point.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                  
                  <CardContent className="p-8 text-center relative">
                    <div className={`w-16 h-16 bg-gradient-to-br ${point.color} rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-4 group-hover:text-[var(--tech-blue)] transition-colors duration-300">
                      {point.title}
                    </h3>
                    
                    <p className="text-[var(--text-muted)] leading-relaxed">
                      {point.description}
                    </p>
                  </CardContent>
                </Card>
              </AnimatedContainer>
            )
          })}
        </div>

        {/* Core Values */}
        <AnimatedContainer delay={0.8}>
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-[var(--text-primary)] mb-4">
              核心价值观
            </h2>
            <p className="text-lg text-[var(--text-muted)] max-w-2xl mx-auto">
              我们的价值观指导着我们的每一个决策和行动
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreValues.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="text-center group"
                >
                  <div className="w-12 h-12 bg-[var(--tech-blue)]/10 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:bg-[var(--tech-blue)]/20 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-[var(--tech-blue)]" />
                  </div>
                  <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">
                    {value.title}
                  </h3>
                  <p className="text-[var(--text-muted)] text-sm leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </AnimatedContainer>

        {/* Company Positioning */}
        <AnimatedContainer delay={1.0} className="mt-20">
          <div className="bg-gradient-to-r from-[var(--tech-blue)]/5 via-[var(--ai-green)]/5 to-[var(--accent-orange)]/5 rounded-2xl p-8 lg:p-12 text-center">
            <h2 className="text-2xl lg:text-3xl font-bold text-[var(--text-primary)] mb-6">
              我们的定位
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-[var(--tech-blue)]">
                  专业 · 创新 · 值得信赖
                </h3>
                <p className="text-[var(--text-muted)] text-sm leading-relaxed">
                  我们不仅是技术提供商，更是企业数字化转型的战略合作伙伴，
                  致力于为每一位客户创造可持续的商业价值。
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-[var(--ai-green)]">
                  能解决问题 · 未来感十足 · 易于理解
                </h3>
                <p className="text-[var(--text-muted)] text-sm leading-relaxed">
                  我们的AI机器人具有专业、创新友好、前沿且具引领性的人格特质，
                  它是您的智囊，而非冰冷的工具。
                </p>
              </div>
            </div>
          </div>
        </AnimatedContainer>
      </div>
    </section>
  )
}
