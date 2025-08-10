"use client"

import { motion } from "framer-motion"
import { AnimatedContainer } from "@/components/ui/animated-container"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  Brain, 
  Lightbulb, 
  Users, 

  Mail,
  Linkedin,
  ArrowRight,
  Quote
} from "lucide-react"

const expertise = [
  {
    icon: Brain,
    title: "AI应用专家",
    description: "深耕人工智能应用领域，专注于将前沿AI技术转化为实用的商业解决方案",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Lightbulb,
    title: "数字转型顾问",
    description: "拥有丰富的企业数字化转型经验，帮助传统企业实现智能化升级",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Users,
    title: "人机交互洞察",
    description: "结合心理学背景，对人机交互和用户体验有独特的理解和洞察",
    color: "from-purple-500 to-pink-500"
  }
]

const achievements = [
  "成功为50+企业提供AI驱动的数字化转型解决方案",
  "开发多个行业领先的AI应用系统",
  "在金融、保险、制造业等领域积累丰富实战经验",
  "专精N8N、Supabase RAG+SQL等先进技术栈"
]

export function FounderProfile() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimatedContainer className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] mb-4">
            创始人简介
          </h2>
          <p className="text-lg sm:text-xl text-[var(--text-muted)] max-w-3xl mx-auto">
            了解「慧视」背后的专业团队和创新理念
          </p>
        </AnimatedContainer>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Profile Image and Basic Info */}
          <AnimatedContainer delay={0.2}>
            <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-gray-50 overflow-hidden">
              <CardContent className="p-8 lg:p-10">
                {/* Professional Profile Image Placeholder */}
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <div className="w-full h-full bg-gradient-to-br from-[var(--tech-blue)] to-[var(--ai-green)] rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-4xl font-bold text-white">R</span>
                  </div>
                  {/* Professional photo suggestion overlay */}
                  <div className="absolute inset-0 bg-black/60 rounded-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 cursor-pointer">
                    <div className="text-center text-white text-xs">
                      <div className="font-medium">专业形象照</div>
                      <div className="text-white/80">增强信任度</div>
                    </div>
                  </div>
                  {/* Decorative ring */}
                  <div className="absolute -inset-2 bg-gradient-to-br from-[var(--tech-blue)]/20 to-[var(--ai-green)]/20 rounded-full -z-10"></div>
                </div>
                
                <div className="text-center space-y-4">
                  <h3 className="text-2xl font-bold text-[var(--text-primary)]">
                    Rosa Zhao
                  </h3>
                  <p className="text-lg text-[var(--tech-blue)] font-medium">
                    创始人 & CEO
                  </p>
                  <p className="text-[var(--text-muted)] leading-relaxed">
                    AI应用专家 · 数字转型顾问 · 技术创新者
                  </p>
                  
                  {/* Contact Info */}
                  <div className="pt-6 space-y-3">
                    <div className="flex items-center justify-center space-x-3 text-sm text-[var(--text-muted)]">
                      <Mail className="w-4 h-4 text-[var(--tech-blue)]" />
                      <span>junyichao5@gmail.com</span>
                    </div>
                    <div className="flex items-center justify-center space-x-4 pt-4">
                      <Button variant="outline" size="sm" className="group">
                        <Linkedin className="w-4 h-4 mr-2 group-hover:text-[var(--tech-blue)]" />
                        LinkedIn
                      </Button>
                      <Button variant="primary" size="sm" className="group">
                        <Mail className="w-4 h-4 mr-2" />
                        联系我
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </AnimatedContainer>

          {/* Professional Background */}
          <AnimatedContainer delay={0.4} className="space-y-8">
            {/* Quote */}
            <div className="relative">
              <Quote className="w-8 h-8 text-[var(--tech-blue)]/20 absolute -top-2 -left-2" />
              <blockquote className="text-lg lg:text-xl text-[var(--text-secondary)] italic leading-relaxed pl-6">
                &ldquo;AI不应该是冰冷的工具，而应该是企业的智慧伙伴。我们的使命是让每一家企业都能享受到AI带来的智能化红利。&rdquo;
              </blockquote>
              <cite className="block text-right text-sm text-[var(--text-muted)] mt-4 pr-6">
                — Rosa Zhao, 慧视创始人
              </cite>
            </div>

            {/* Professional Background */}
            <div className="space-y-6">
              <h4 className="text-xl font-semibold text-[var(--text-primary)]">
                专业背景
              </h4>
              <p className="text-[var(--text-muted)] leading-relaxed">
                Rosa拥有深厚的AI应用和数字化转型经验，曾为多家知名企业提供专业的技术咨询和解决方案。
                她独特的<strong className="text-[var(--tech-blue)]">心理学与玄学跨界背景</strong>让她对&ldquo;洞察&rdquo;和&ldquo;人机交互&rdquo;有着与众不同的理解，
                能够在AI分析中融入对人性的深度洞察、市场情绪的精准把握，以及战略规划的独特视角，
                这使得「慧视」的AI解决方案不仅技术先进，更具有<strong className="text-[var(--ai-green)]">独一无二的深度和人性化体验</strong>。
              </p>
              <p className="text-[var(--text-muted)] leading-relaxed">
                在创立「慧视」之前，Rosa专注于AI技术的商业化应用，
                深度参与了保险、金融、制造等多个行业的数字化转型项目，
                积累了丰富的实战经验和行业洞察。
              </p>
            </div>

            {/* Key Achievements */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-[var(--text-primary)]">
                主要成就
              </h4>
              <ul className="space-y-3">
                {achievements.map((achievement, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <div className="w-2 h-2 bg-[var(--tech-blue)] rounded-full mt-2 flex-shrink-0" />
                    <span className="text-[var(--text-muted)] leading-relaxed">
                      {achievement}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </AnimatedContainer>
        </div>

        {/* Expertise Areas */}
        <AnimatedContainer delay={0.6} className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-[var(--text-primary)] mb-4">
              专业领域
            </h3>
            <p className="text-[var(--text-muted)] max-w-2xl mx-auto">
              多年的专业积累，造就了独特的技术视角和商业洞察
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {expertise.map((area, index) => {
              const Icon = area.icon
              return (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <Card className="h-full group hover:shadow-xl transition-all duration-300 border-0 bg-white relative overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${area.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                    
                    <CardContent className="p-6 text-center relative">
                      <div className={`w-14 h-14 bg-gradient-to-br ${area.color} rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      
                      <h4 className="text-lg font-semibold text-[var(--text-primary)] mb-3 group-hover:text-[var(--tech-blue)] transition-colors duration-300">
                        {area.title}
                      </h4>
                      
                      <p className="text-[var(--text-muted)] text-sm leading-relaxed">
                        {area.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </AnimatedContainer>

        {/* CTA Section */}
        <AnimatedContainer delay={0.8} className="mt-20 text-center">
          <div className="bg-gradient-to-r from-[var(--tech-blue)]/5 via-[var(--ai-green)]/5 to-[var(--accent-orange)]/5 rounded-2xl p-8 lg:p-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-[var(--text-primary)] mb-4">
              想要了解更多？
            </h3>
            <p className="text-[var(--text-muted)] mb-8 max-w-2xl mx-auto">
              欢迎与Rosa直接交流，探讨您的企业数字化转型需求和AI应用机会
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button variant="primary" size="lg" className="group">
                <span className="flex items-center space-x-2">
                  <span>预约咨询</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </span>
              </Button>
              <Button variant="outline" size="lg">
                查看更多案例
              </Button>
            </div>
          </div>
        </AnimatedContainer>
      </div>
    </section>
  )
}
