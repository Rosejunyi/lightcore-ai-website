"use client"

import { motion } from "framer-motion"
import { AnimatedContainer } from "@/components/ui/animated-container"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  Lightbulb, 
  Users, 
  Target, 
  Heart,
  Rocket,
  Shield,
  ArrowRight,
  Star
} from "lucide-react"

const cultureValues = [
  {
    icon: Lightbulb,
    title: "创新",
    subtitle: "Innovation",
    description: "持续探索前沿技术，勇于尝试新的解决方案，为客户创造更大价值",
    color: "from-blue-500 to-cyan-500",
    examples: ["技术创新", "产品创新", "服务创新"]
  },
  {
    icon: Users,
    title: "赋能",
    subtitle: "Empowerment",
    description: "通过AI技术赋能企业和个人，让每个人都能享受到智能化带来的便利",
    color: "from-green-500 to-emerald-500",
    examples: ["客户赋能", "团队赋能", "行业赋能"]
  },
  {
    icon: Target,
    title: "专业",
    subtitle: "Professional",
    description: "以专业的态度和精湛的技术，为客户提供高质量的解决方案",
    color: "from-purple-500 to-pink-500",
    examples: ["技术专业", "服务专业", "态度专业"]
  },
  {
    icon: Heart,
    title: "合作",
    subtitle: "Collaboration",
    description: "与客户、合作伙伴建立长期互信关系，共同成长，共创价值",
    color: "from-orange-500 to-yellow-500",
    examples: ["团队合作", "客户合作", "生态合作"]
  }
]

const workingPrinciples = [
  {
    icon: Rocket,
    title: "快速迭代",
    description: "敏捷开发，快速响应客户需求，持续优化产品和服务"
  },
  {
    icon: Shield,
    title: "质量第一",
    description: "严格的质量控制，确保每一个交付都达到最高标准"
  },
  {
    icon: Star,
    title: "客户成功",
    description: "以客户成功为最终目标，持续创造商业价值"
  }
]

export function CompanyCulture() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimatedContainer className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] mb-4">
            企业文化与价值观
          </h2>
          <p className="text-lg sm:text-xl text-[var(--text-muted)] max-w-3xl mx-auto">
            我们的文化塑造着我们的行为，指导着我们的决策，驱动着我们的创新
          </p>
        </AnimatedContainer>

        {/* Core Values */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {cultureValues.map((value, index) => {
            const Icon = value.icon
            return (
              <AnimatedContainer
                key={value.title}
                delay={index * 0.2}
                className="h-full"
              >
                <Card className="h-full group hover:shadow-xl transition-all duration-300 border-0 bg-white relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                  
                  <CardContent className="p-8 relative">
                    <div className="flex items-start space-x-6">
                      <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      
                      <div className="flex-1">
                        <div className="mb-4">
                          <h3 className="text-2xl font-bold text-[var(--text-primary)] group-hover:text-[var(--tech-blue)] transition-colors duration-300">
                            {value.title}
                          </h3>
                          <p className="text-sm text-[var(--text-muted)] font-medium">
                            {value.subtitle}
                          </p>
                        </div>
                        
                        <p className="text-[var(--text-muted)] leading-relaxed mb-6">
                          {value.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-2">
                          {value.examples.map((example) => (
                            <span
                              key={example}
                              className="text-xs bg-gray-100 text-[var(--text-muted)] px-3 py-1 rounded-full"
                            >
                              {example}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedContainer>
            )
          })}
        </div>

        {/* Working Principles */}
        <AnimatedContainer delay={0.8}>
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-[var(--text-primary)] mb-4">
              工作原则
            </h3>
            <p className="text-[var(--text-muted)] max-w-2xl mx-auto">
              这些原则指导着我们的日常工作，确保我们始终朝着正确的方向前进
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {workingPrinciples.map((principle, index) => {
              const Icon = principle.icon
              return (
                <motion.div
                  key={principle.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="text-center group"
                >
                  <div className="w-16 h-16 bg-[var(--tech-blue)]/10 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:bg-[var(--tech-blue)]/20 transition-colors duration-300">
                    <Icon className="w-8 h-8 text-[var(--tech-blue)] group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h4 className="text-lg font-semibold text-[var(--text-primary)] mb-3">
                    {principle.title}
                  </h4>
                  <p className="text-[var(--text-muted)] leading-relaxed">
                    {principle.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </AnimatedContainer>

        {/* Culture Statement */}
        <AnimatedContainer delay={1.0}>
          <div className="bg-gradient-to-r from-[var(--tech-blue)]/5 via-[var(--ai-green)]/5 to-[var(--accent-orange)]/5 rounded-2xl p-8 lg:p-12">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h3 className="text-2xl lg:text-3xl font-bold text-[var(--text-primary)]">
                我们的文化宣言
              </h3>
              <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
                <p>
                  在「慧视」，我们相信技术应该服务于人，AI应该赋能于企业。
                  我们不仅仅是技术的提供者，更是企业数字化转型路上的伙伴。
                </p>
                <p>
                  我们追求卓越，但不忘初心；我们拥抱变化，但坚持原则；
                  我们专注创新，但更关注价值创造。
                </p>
                <p>
                  每一行代码、每一个方案、每一次服务，都承载着我们对客户的承诺：
                  <strong className="text-[var(--tech-blue)]">让AI成为您最智慧的伙伴</strong>。
                </p>
              </div>
            </div>
          </div>
        </AnimatedContainer>

        {/* Join Us CTA */}
        <AnimatedContainer delay={1.2} className="mt-20 text-center">
          <div className="space-y-6">
            <h3 className="text-2xl lg:text-3xl font-bold text-[var(--text-primary)]">
              加入我们的团队
            </h3>
            <p className="text-[var(--text-muted)] max-w-2xl mx-auto">
              如果您认同我们的价值观，热爱AI技术，渴望在数字化转型领域创造价值，
              我们诚邀您加入「慧视」团队
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button variant="primary" size="lg" className="group">
                <span className="flex items-center space-x-2">
                  <span>查看职位</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </span>
              </Button>
              <Button variant="outline" size="lg">
                了解更多
              </Button>
            </div>
          </div>
        </AnimatedContainer>
      </div>
    </section>
  )
}
