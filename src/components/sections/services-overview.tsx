"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AnimatedContainer } from "@/components/ui/animated-container"
import {
  TrendingUp,
  PenTool,
  Settings,
  ArrowRight,
  Zap
} from "lucide-react"

const services = [
  {
    icon: TrendingUp,
    title: "AI金融智能洞察方案",
    description: "针对金融行业，提供股票/市场/研报AI分析，赋能精准决策",
    features: [
      "实时市场数据分析",
      "智能投资建议",
      "风险评估模型",
      "个性化研报生成"
    ],
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50",
    href: "/services/financial-ai"
  },
  {
    icon: PenTool,
    title: "AI驱动内容生成与营销方案",
    description: "针对传媒/出版社，提供内容创作、短视频脚本、营销文案AI生成",
    features: [
      "智能文案创作",
      "短视频脚本生成",
      "多媒体内容制作",
      "营销策略优化"
    ],
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-50",
    href: "/services/content-generation"
  },
  {
    icon: Settings,
    title: "AI赋能企业运营优化",
    description: "针对传统行业，提供专业网站搭建、数据分析、智能客服等数字化管理",
    features: [
      "专业网站搭建",
      "数据分析洞察",
      "智能客服系统",
      "员工培训AI导师"
    ],
    color: "from-orange-500 to-yellow-500",
    bgColor: "bg-orange-50",
    href: "/services/operations"
  }
]

export function ServicesOverview() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimatedContainer className="text-center mb-16">
          {/* Core Value Proposition */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-50 to-green-50 border border-blue-200 rounded-full px-6 py-3 text-lg font-semibold text-blue-700">
              <Zap className="w-5 h-5" />
              <span>用AI利器，助您智造新质生产力</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text-primary)]">
              核心服务与解决方案
            </h2>
            <p className="text-lg sm:text-xl text-[var(--text-muted)] max-w-3xl mx-auto">
              为不同行业量身定制的AI驱动解决方案，助力企业实现数字化转型升级
            </p>
          </motion.div>
        </AnimatedContainer>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <AnimatedContainer
                key={service.title}
                delay={index * 0.2}
                className="h-full"
              >
                <Card className="h-full group hover:shadow-xl transition-all duration-300 border-0 bg-white relative overflow-hidden">
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                  
                  <CardHeader className="relative">
                    {/* Icon */}
                    <div className={`w-16 h-16 ${service.bgColor} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`w-8 h-8 bg-gradient-to-br ${service.color} bg-clip-text text-transparent`} />
                    </div>
                    
                    <CardTitle className="text-xl font-semibold text-[var(--text-primary)] group-hover:text-[var(--tech-blue)] transition-colors duration-300">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-[var(--text-muted)] leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="relative space-y-6">
                    {/* Features List */}
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <motion.li
                          key={feature}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ 
                            duration: 0.4, 
                            delay: index * 0.2 + featureIndex * 0.1 
                          }}
                          className="flex items-center space-x-3 text-sm text-[var(--text-secondary)]"
                        >
                          <div className={`w-2 h-2 bg-gradient-to-br ${service.color} rounded-full flex-shrink-0`} />
                          <span>{feature}</span>
                        </motion.li>
                      ))}
                    </ul>

                    {/* CTA Button */}
                    <a href={service.href} className="block">
                      <Button
                        variant="ghost"
                        className="w-full group/btn justify-between text-[var(--tech-blue)] hover:bg-[var(--tech-blue)]/5"
                      >
                        <span>了解详情</span>
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                      </Button>
                    </a>
                  </CardContent>
                </Card>
              </AnimatedContainer>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <AnimatedContainer delay={0.8} className="text-center mt-16">
          <div className="bg-gradient-to-r from-[var(--tech-blue)]/5 via-[var(--ai-green)]/5 to-[var(--accent-orange)]/5 rounded-2xl p-8 lg:p-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-[var(--text-primary)] mb-4">
              需要定制化AI解决方案？
            </h3>
            <p className="text-[var(--text-muted)] mb-8 max-w-2xl mx-auto">
              我们的专家团队将根据您的具体需求，为您量身定制最适合的AI驱动数字化转型方案
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button variant="primary" size="lg" className="group">
                <span className="flex items-center space-x-2">
                  <span>免费咨询</span>
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
