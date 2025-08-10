"use client"

import { motion } from "framer-motion"
import { AnimatedContainer } from "@/components/ui/animated-container"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { 
  ArrowRight, 
  Phone, 
  Mail, 
  Calendar,
  MessageCircle,
  Download,
  Star,
  Users,
  Clock,
  Shield
} from "lucide-react"

const ctaOptions = [
  {
    icon: MessageCircle,
    title: "免费咨询",
    description: "与我们的专家一对一交流，获取专业建议",
    action: "立即咨询",
    color: "from-blue-500 to-cyan-500",
    popular: true
  },
  {
    icon: Calendar,
    title: "预约演示",
    description: "观看产品演示，了解具体功能和效果",
    action: "预约演示",
    color: "from-green-500 to-emerald-500",
    popular: false
  },
  {
    icon: Download,
    title: "下载资料",
    description: "获取详细的产品介绍和案例分析资料",
    action: "下载资料",
    color: "from-purple-500 to-pink-500",
    popular: false
  }
]

const contactMethods = [
  {
    icon: Mail,
    title: "邮件联系",
    value: "junyichao5@gmail.com",
    description: "发送邮件详细描述您的需求"
  },
  {
    icon: Phone,
    title: "电话咨询",
    value: "Rosa Zhao",
    description: "直接与创始人沟通交流"
  },
  {
    icon: MessageCircle,
    title: "在线客服",
    value: "24/7 在线",
    description: "随时为您解答疑问"
  }
]

const trustIndicators = [
  {
    icon: Users,
    value: "50+",
    label: "成功案例"
  },
  {
    icon: Star,
    value: "95%",
    label: "客户满意度"
  },
  {
    icon: Clock,
    value: "24/7",
    label: "技术支持"
  },
  {
    icon: Shield,
    value: "100%",
    label: "数据安全"
  }
]

export function ServicesCTA() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main CTA */}
        <AnimatedContainer className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text-primary)]">
              准备开始您的
              <span className="bg-gradient-to-r from-[var(--tech-blue)] via-[var(--ai-green)] to-[var(--accent-orange)] bg-clip-text text-transparent">
                AI转型之旅
              </span>
              ？
            </h2>
            <p className="text-lg sm:text-xl text-[var(--text-muted)] max-w-3xl mx-auto leading-relaxed">
              无论您是想了解AI如何帮助您的企业，还是已经有了明确的需求，
              我们都随时准备为您提供专业的咨询和解决方案
            </p>
          </motion.div>
        </AnimatedContainer>

        {/* CTA Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {ctaOptions.map((option, index) => {
            const Icon = option.icon
            return (
              <AnimatedContainer
                key={option.title}
                delay={index * 0.2}
                className="h-full"
              >
                <Card className={`h-full group hover:shadow-xl transition-all duration-300 border-0 bg-white relative overflow-hidden ${option.popular ? 'ring-2 ring-[var(--tech-blue)]/20' : ''}`}>
                  {option.popular && (
                    <div className="absolute top-4 right-4 bg-[var(--tech-blue)] text-white text-xs px-2 py-1 rounded-full">
                      推荐
                    </div>
                  )}
                  
                  <div className={`absolute inset-0 bg-gradient-to-br ${option.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                  
                  <CardContent className="p-8 text-center relative">
                    <div className={`w-16 h-16 bg-gradient-to-br ${option.color} rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-3 group-hover:text-[var(--tech-blue)] transition-colors duration-300">
                      {option.title}
                    </h3>
                    
                    <p className="text-[var(--text-muted)] leading-relaxed mb-6">
                      {option.description}
                    </p>
                    
                    <Button 
                      variant={option.popular ? "primary" : "outline"} 
                      size="lg" 
                      className="w-full group/btn"
                    >
                      <span className="flex items-center justify-center space-x-2">
                        <span>{option.action}</span>
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                      </span>
                    </Button>
                  </CardContent>
                </Card>
              </AnimatedContainer>
            )
          })}
        </div>

        {/* Contact Methods */}
        <AnimatedContainer delay={0.8}>
          <div className="bg-gray-50 rounded-2xl p-8 lg:p-12 mb-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl lg:text-3xl font-bold text-[var(--text-primary)] mb-4">
                多种联系方式
              </h3>
              <p className="text-[var(--text-muted)] max-w-2xl mx-auto">
                选择最适合您的方式与我们取得联系
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {contactMethods.map((method, index) => {
                const Icon = method.icon
                return (
                  <motion.div
                    key={method.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white rounded-lg p-6 text-center hover:shadow-md transition-shadow duration-200"
                  >
                    <div className="w-12 h-12 bg-[var(--tech-blue)]/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                      <Icon className="w-6 h-6 text-[var(--tech-blue)]" />
                    </div>
                    <h4 className="text-lg font-semibold text-[var(--text-primary)] mb-2">
                      {method.title}
                    </h4>
                    <p className="text-[var(--tech-blue)] font-medium mb-2">
                      {method.value}
                    </p>
                    <p className="text-sm text-[var(--text-muted)]">
                      {method.description}
                    </p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </AnimatedContainer>

        {/* Trust Indicators */}
        <AnimatedContainer delay={1.0}>
          <div className="bg-gradient-to-r from-[var(--tech-blue)]/5 via-[var(--ai-green)]/5 to-[var(--accent-orange)]/5 rounded-2xl p-8 lg:p-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl lg:text-3xl font-bold text-[var(--text-primary)] mb-4">
                值得信赖的合作伙伴
              </h3>
              <p className="text-[var(--text-muted)] max-w-2xl mx-auto">
                我们的专业能力和服务质量得到了众多客户的认可
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {trustIndicators.map((indicator, index) => {
                const Icon = indicator.icon
                return (
                  <motion.div
                    key={indicator.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="w-16 h-16 bg-white rounded-xl shadow-lg flex items-center justify-center mb-4 mx-auto">
                      <Icon className="w-8 h-8 text-[var(--tech-blue)]" />
                    </div>
                    <div className="text-3xl font-bold text-[var(--tech-blue)] mb-2">
                      {indicator.value}
                    </div>
                    <div className="text-sm text-[var(--text-muted)]">
                      {indicator.label}
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </AnimatedContainer>

        {/* Final CTA */}
        <AnimatedContainer delay={1.2} className="text-center mt-16">
          <div className="space-y-6">
            <h3 className="text-2xl lg:text-3xl font-bold text-[var(--text-primary)]">
              还有疑问？
            </h3>
            <p className="text-[var(--text-muted)] max-w-2xl mx-auto">
              我们的专家团队随时准备为您答疑解惑，提供最适合您的AI解决方案建议
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button variant="accent" size="xl" className="group">
                <span className="flex items-center space-x-2">
                  <span>立即开始免费咨询</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </span>
              </Button>
              <Button variant="outline" size="xl">
                查看更多案例
              </Button>
            </div>
          </div>
        </AnimatedContainer>
      </div>
    </section>
  )
}
