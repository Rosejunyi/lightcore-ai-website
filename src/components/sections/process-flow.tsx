"use client"

import { motion } from "framer-motion"
import { AnimatedContainer } from "@/components/ui/animated-container"
import { Card, CardContent } from "@/components/ui/card"
import { 
  MessageCircle, 
  Search, 
  Lightbulb, 
  Code, 
  TestTube, 
  Rocket,
  ArrowRight,
  CheckCircle
} from "lucide-react"

const processSteps = [
  {
    step: "01",
    icon: MessageCircle,
    title: "需求沟通",
    subtitle: "Consultation",
    description: "深入了解您的业务需求、痛点和目标，制定初步解决方案框架",
    details: [
      "业务现状分析",
      "痛点识别梳理",
      "目标设定确认",
      "预算范围讨论"
    ],
    color: "from-blue-500 to-cyan-500",
    duration: "1-2天"
  },
  {
    step: "02",
    icon: Search,
    title: "深度调研",
    subtitle: "Research",
    description: "对您的行业、竞品和技术环境进行深度调研，确保方案的针对性",
    details: [
      "行业趋势分析",
      "竞品对比研究",
      "技术可行性评估",
      "风险因素识别"
    ],
    color: "from-green-500 to-emerald-500",
    duration: "3-5天"
  },
  {
    step: "03",
    icon: Lightbulb,
    title: "方案设计",
    subtitle: "Design",
    description: "基于调研结果，设计详细的AI解决方案和实施计划",
    details: [
      "技术架构设计",
      "功能模块规划",
      "实施时间安排",
      "成本效益分析"
    ],
    color: "from-purple-500 to-pink-500",
    duration: "5-7天"
  },
  {
    step: "04",
    icon: Code,
    title: "开发实施",
    subtitle: "Development",
    description: "按照设计方案进行系统开发，确保高质量的代码和功能实现",
    details: [
      "核心功能开发",
      "系统集成测试",
      "性能优化调试",
      "安全性验证"
    ],
    color: "from-orange-500 to-yellow-500",
    duration: "2-4周"
  },
  {
    step: "05",
    icon: TestTube,
    title: "测试验证",
    subtitle: "Testing",
    description: "全面测试系统功能和性能，确保满足业务需求和质量标准",
    details: [
      "功能测试验证",
      "性能压力测试",
      "用户体验测试",
      "数据安全测试"
    ],
    color: "from-red-500 to-pink-500",
    duration: "3-5天"
  },
  {
    step: "06",
    icon: Rocket,
    title: "上线部署",
    subtitle: "Deployment",
    description: "系统正式上线部署，提供培训支持和持续优化服务",
    details: [
      "生产环境部署",
      "用户培训指导",
      "监控系统配置",
      "持续优化支持"
    ],
    color: "from-indigo-500 to-purple-500",
    duration: "1-2天"
  }
]

const serviceGuarantees = [
  {
    icon: CheckCircle,
    title: "质量保证",
    description: "严格的质量控制流程，确保交付高质量产品"
  },
  {
    icon: CheckCircle,
    title: "按时交付",
    description: "明确的项目时间节点，保证按时完成交付"
  },
  {
    icon: CheckCircle,
    title: "持续支持",
    description: "提供长期技术支持和系统优化服务"
  },
  {
    icon: CheckCircle,
    title: "效果保障",
    description: "承诺达到预期效果，不满意可调整优化"
  }
]

export function ProcessFlow() {
  return (
    <section className="py-20 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimatedContainer className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] mb-4">
            服务流程
          </h2>
          <p className="text-lg sm:text-xl text-[var(--text-muted)] max-w-3xl mx-auto">
            标准化的服务流程，确保项目高质量交付
          </p>
        </AnimatedContainer>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-[var(--tech-blue)] via-[var(--ai-green)] to-[var(--accent-orange)] opacity-20"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => {
              const Icon = step.icon
              return (
                <AnimatedContainer
                  key={step.step}
                  delay={index * 0.2}
                  className="relative"
                >
                  <Card className="h-full group hover:shadow-xl transition-all duration-300 border-0 bg-white relative overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                    
                    <CardContent className="p-6 relative">
                      {/* Step Number */}
                      <div className="flex items-center justify-between mb-4">
                        <span className={`text-2xl font-bold bg-gradient-to-br ${step.color} bg-clip-text text-transparent`}>
                          {step.step}
                        </span>
                        <span className="text-xs text-[var(--text-muted)] bg-gray-100 px-2 py-1 rounded-full">
                          {step.duration}
                        </span>
                      </div>
                      
                      {/* Icon */}
                      <div className={`w-12 h-12 bg-gradient-to-br ${step.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      
                      {/* Title */}
                      <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-1 group-hover:text-[var(--tech-blue)] transition-colors duration-300">
                        {step.title}
                      </h3>
                      <p className="text-sm text-[var(--text-muted)] font-medium mb-3">
                        {step.subtitle}
                      </p>
                      
                      {/* Description */}
                      <p className="text-[var(--text-muted)] text-sm leading-relaxed mb-4">
                        {step.description}
                      </p>
                      
                      {/* Details */}
                      <ul className="space-y-2">
                        {step.details.map((detail, detailIndex) => (
                          <motion.li
                            key={detail}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ 
                              duration: 0.4, 
                              delay: index * 0.2 + detailIndex * 0.1 
                            }}
                            className="flex items-center space-x-2 text-xs text-[var(--text-muted)]"
                          >
                            <div className={`w-1.5 h-1.5 bg-gradient-to-br ${step.color} rounded-full flex-shrink-0`} />
                            <span>{detail}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </AnimatedContainer>
              )
            })}
          </div>
        </div>

        {/* Service Guarantees */}
        <AnimatedContainer delay={1.2} className="mt-20">
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
            <div className="text-center mb-8">
              <h3 className="text-2xl lg:text-3xl font-bold text-[var(--text-primary)] mb-4">
                服务保障
              </h3>
              <p className="text-[var(--text-muted)] max-w-2xl mx-auto">
                我们承诺为每一位客户提供最优质的服务体验
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {serviceGuarantees.map((guarantee, index) => {
                const Icon = guarantee.icon
                return (
                  <motion.div
                    key={guarantee.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="text-center group"
                  >
                    <div className="w-12 h-12 bg-[var(--ai-green)]/10 rounded-lg flex items-center justify-center mb-3 mx-auto group-hover:bg-[var(--ai-green)]/20 transition-colors duration-300">
                      <Icon className="w-6 h-6 text-[var(--ai-green)]" />
                    </div>
                    <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-2">
                      {guarantee.title}
                    </h4>
                    <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                      {guarantee.description}
                    </p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </AnimatedContainer>

        {/* Timeline Summary */}
        <AnimatedContainer delay={1.4} className="mt-16 text-center">
          <div className="bg-gradient-to-r from-[var(--tech-blue)]/5 via-[var(--ai-green)]/5 to-[var(--accent-orange)]/5 rounded-2xl p-8">
            <h3 className="text-xl lg:text-2xl font-bold text-[var(--text-primary)] mb-4">
              项目周期：通常 3-6 周完成
            </h3>
            <p className="text-[var(--text-muted)] mb-6">
              具体时间根据项目复杂度和需求范围而定，我们会在初期沟通中给出准确的时间预估
            </p>
            <div className="flex items-center justify-center space-x-2 text-sm text-[var(--text-muted)]">
              <span>咨询</span>
              <ArrowRight className="w-4 h-4" />
              <span>调研</span>
              <ArrowRight className="w-4 h-4" />
              <span>设计</span>
              <ArrowRight className="w-4 h-4" />
              <span>开发</span>
              <ArrowRight className="w-4 h-4" />
              <span>测试</span>
              <ArrowRight className="w-4 h-4" />
              <span>上线</span>
            </div>
          </div>
        </AnimatedContainer>
      </div>
    </section>
  )
}
