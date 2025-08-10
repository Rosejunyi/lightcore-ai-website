"use client"

import { motion } from "framer-motion"
import { AnimatedContainer } from "@/components/ui/animated-container"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  CheckCircle, 
  ArrowRight, 
  Star,
  Zap,
  Crown,
  Rocket
} from "lucide-react"

const pricingPlans = [
  {
    name: "基础版",
    subtitle: "适合小型投资机构",
    price: "¥9,999",
    period: "/月",
    description: "基础的AI分析功能，满足日常投资决策需求",
    features: [
      "实时市场数据分析",
      "基础技术指标解读",
      "简单风险评估",
      "月度投资报告",
      "邮件技术支持",
      "最多3个投资组合"
    ],
    icon: Zap,
    color: "from-blue-500 to-cyan-500",
    popular: false
  },
  {
    name: "专业版",
    subtitle: "适合中型金融机构",
    price: "¥29,999",
    period: "/月",
    description: "全面的AI金融分析工具，提供专业级投资洞察",
    features: [
      "高级市场预测模型",
      "智能投资组合优化",
      "深度风险分析",
      "自动化研报生成",
      "7x24小时技术支持",
      "无限投资组合",
      "API接口访问",
      "自定义指标配置"
    ],
    icon: Crown,
    color: "from-purple-500 to-pink-500",
    popular: true
  },
  {
    name: "企业版",
    subtitle: "适合大型金融集团",
    price: "定制报价",
    period: "",
    description: "完全定制化的AI金融解决方案，满足企业级需求",
    features: [
      "所有专业版功能",
      "定制化AI模型训练",
      "私有化部署选项",
      "专属客户经理",
      "现场技术支持",
      "数据安全合规",
      "系统集成服务",
      "员工培训服务"
    ],
    icon: Rocket,
    color: "from-orange-500 to-yellow-500",
    popular: false
  }
]

const addOns = [
  {
    name: "高频数据源",
    description: "毫秒级市场数据更新",
    price: "¥5,999/月"
  },
  {
    name: "量化策略模块",
    description: "专业量化交易策略开发",
    price: "¥15,999/月"
  },
  {
    name: "风控合规模块",
    description: "监管合规和风险控制",
    price: "¥8,999/月"
  },
  {
    name: "专属培训服务",
    description: "一对一专家培训指导",
    price: "¥3,999/次"
  }
]

export function FinancialAIPricing() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimatedContainer className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] mb-4">
            选择适合的方案
          </h2>
          <p className="text-lg sm:text-xl text-[var(--text-muted)] max-w-3xl mx-auto">
            灵活的定价方案，满足不同规模金融机构的需求
          </p>
        </AnimatedContainer>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {pricingPlans.map((plan, index) => {
            const Icon = plan.icon
            return (
              <AnimatedContainer
                key={plan.name}
                delay={index * 0.2}
                className="h-full"
              >
                <Card className={`h-full relative overflow-hidden border-0 ${plan.popular ? 'ring-2 ring-purple-500 shadow-xl scale-105' : 'shadow-lg'} transition-all duration-300 hover:shadow-xl`}>
                  {plan.popular && (
                    <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-center py-2 text-sm font-medium">
                      <Star className="w-4 h-4 inline mr-1" />
                      最受欢迎
                    </div>
                  )}
                  
                  <div className={`absolute inset-0 bg-gradient-to-br ${plan.color} opacity-0 hover:opacity-5 transition-opacity duration-300`} />
                  
                  <CardHeader className={`relative ${plan.popular ? 'pt-12' : 'pt-8'}`}>
                    <div className={`w-12 h-12 bg-gradient-to-br ${plan.color} rounded-lg flex items-center justify-center mb-4`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    
                    <CardTitle className="text-2xl font-bold text-[var(--text-primary)]">
                      {plan.name}
                    </CardTitle>
                    <CardDescription className="text-[var(--text-muted)]">
                      {plan.subtitle}
                    </CardDescription>
                    
                    <div className="flex items-baseline space-x-2 mt-4">
                      <span className={`text-4xl font-bold bg-gradient-to-br ${plan.color} bg-clip-text text-transparent`}>
                        {plan.price}
                      </span>
                      {plan.period && (
                        <span className="text-[var(--text-muted)]">
                          {plan.period}
                        </span>
                      )}
                    </div>
                    
                    <p className="text-sm text-[var(--text-muted)] mt-2">
                      {plan.description}
                    </p>
                  </CardHeader>

                  <CardContent className="relative">
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <motion.li
                          key={feature}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ 
                            duration: 0.4, 
                            delay: index * 0.2 + featureIndex * 0.05 
                          }}
                          className="flex items-center space-x-3 text-sm text-[var(--text-secondary)]"
                        >
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span>{feature}</span>
                        </motion.li>
                      ))}
                    </ul>

                    <Button 
                      variant={plan.popular ? "primary" : "outline"} 
                      size="lg" 
                      className="w-full group"
                    >
                      <span className="flex items-center justify-center space-x-2">
                        <span>{plan.price === "定制报价" ? "联系销售" : "立即开始"}</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                      </span>
                    </Button>
                  </CardContent>
                </Card>
              </AnimatedContainer>
            )
          })}
        </div>

        {/* Add-ons Section */}
        <AnimatedContainer delay={0.8}>
          <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl lg:text-3xl font-bold text-[var(--text-primary)] mb-4">
                增值服务
              </h3>
              <p className="text-[var(--text-muted)] max-w-2xl mx-auto">
                根据您的特殊需求，选择额外的专业服务模块
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {addOns.map((addon, index) => (
                <motion.div
                  key={addon.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-lg p-6 border border-gray-100 hover:shadow-md transition-shadow duration-200"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-lg font-semibold text-[var(--text-primary)] mb-1">
                        {addon.name}
                      </h4>
                      <p className="text-sm text-[var(--text-muted)]">
                        {addon.description}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-blue-600">
                        {addon.price}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedContainer>

        {/* FAQ or Contact CTA */}
        <AnimatedContainer delay={1.0} className="text-center mt-16">
          <div className="space-y-6">
            <h3 className="text-2xl lg:text-3xl font-bold text-[var(--text-primary)]">
              需要定制化方案？
            </h3>
            <p className="text-[var(--text-muted)] max-w-2xl mx-auto">
              我们的专家团队将根据您的具体需求，为您量身定制最适合的AI金融解决方案
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button variant="primary" size="lg" className="group">
                <span className="flex items-center space-x-2">
                  <span>免费咨询</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </span>
              </Button>
              <Button variant="outline" size="lg">
                预约演示
              </Button>
            </div>
          </div>
        </AnimatedContainer>
      </div>
    </section>
  )
}
