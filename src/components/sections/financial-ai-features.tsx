"use client"

import { motion } from "framer-motion"
import { AnimatedContainer } from "@/components/ui/animated-container"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  TrendingUp, 
  BarChart3, 
  Shield, 
  FileText,
  Brain,
  Zap,
  Target,
  Globe,
  Clock,
  Users
} from "lucide-react"

const features = [
  {
    icon: TrendingUp,
    title: "实时市场分析",
    description: "基于机器学习的股票价格预测和市场趋势分析",
    details: [
      "多维度数据融合分析",
      "实时价格波动监控",
      "技术指标智能解读",
      "市场情绪分析"
    ],
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: FileText,
    title: "智能研报生成",
    description: "自动化生成专业投资研究报告和分析文档",
    details: [
      "个股深度分析报告",
      "行业对比研究",
      "投资建议生成",
      "风险提示自动标注"
    ],
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Shield,
    title: "风险评估模型",
    description: "多层次风险识别和预警系统，保障投资安全",
    details: [
      "VaR风险价值计算",
      "压力测试模拟",
      "相关性风险分析",
      "实时风险预警"
    ],
    color: "from-red-500 to-orange-500"
  },
  {
    icon: Target,
    title: "投资组合优化",
    description: "基于现代投资组合理论的智能资产配置建议",
    details: [
      "马科维茨优化模型",
      "风险平价策略",
      "动态再平衡建议",
      "收益风险平衡"
    ],
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Brain,
    title: "AI量化策略",
    description: "深度学习驱动的量化交易策略开发和回测",
    details: [
      "多因子模型构建",
      "策略回测验证",
      "参数自动优化",
      "实盘策略监控"
    ],
    color: "from-indigo-500 to-blue-500"
  },
  {
    icon: BarChart3,
    title: "数据可视化",
    description: "直观的图表和仪表板，让复杂数据一目了然",
    details: [
      "交互式图表展示",
      "自定义仪表板",
      "多维度数据钻取",
      "移动端适配"
    ],
    color: "from-teal-500 to-cyan-500"
  }
]

const stats = [
  {
    icon: Clock,
    value: "24/7",
    label: "实时监控",
    description: "全天候市场数据监控"
  },
  {
    icon: Zap,
    value: "<100ms",
    label: "响应速度",
    description: "毫秒级数据处理"
  },
  {
    icon: Globe,
    value: "50+",
    label: "市场覆盖",
    description: "全球主要金融市场"
  },
  {
    icon: Users,
    value: "1000+",
    label: "专业用户",
    description: "金融机构信赖选择"
  }
]

export function FinancialAIFeatures() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimatedContainer className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] mb-4">
            核心功能特性
          </h2>
          <p className="text-lg sm:text-xl text-[var(--text-muted)] max-w-3xl mx-auto">
            全方位的AI金融分析工具，为您的投资决策提供强有力的数据支撑
          </p>
        </AnimatedContainer>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <AnimatedContainer
                key={feature.title}
                delay={index * 0.1}
                className="h-full"
              >
                <Card className="h-full group hover:shadow-xl transition-all duration-300 border-0 bg-white relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                  
                  <CardHeader className="relative">
                    <div className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    
                    <CardTitle className="text-xl font-semibold text-[var(--text-primary)] group-hover:text-blue-600 transition-colors duration-300">
                      {feature.title}
                    </CardTitle>
                    <CardDescription className="text-[var(--text-muted)] leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="relative">
                    <ul className="space-y-2">
                      {feature.details.map((detail, detailIndex) => (
                        <motion.li
                          key={detail}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ 
                            duration: 0.4, 
                            delay: index * 0.1 + detailIndex * 0.05 
                          }}
                          className="flex items-center space-x-3 text-sm text-[var(--text-secondary)]"
                        >
                          <div className={`w-1.5 h-1.5 bg-gradient-to-br ${feature.color} rounded-full flex-shrink-0`} />
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

        {/* Stats Section */}
        <AnimatedContainer delay={0.8}>
          <div className="bg-gradient-to-r from-blue-50 via-cyan-50 to-indigo-50 rounded-2xl p-8 lg:p-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl lg:text-3xl font-bold text-[var(--text-primary)] mb-4">
                平台优势数据
              </h3>
              <p className="text-[var(--text-muted)] max-w-2xl mx-auto">
                专业的技术实力和丰富的行业经验，为您提供可靠的金融AI服务
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="text-center group"
                  >
                    <div className="w-16 h-16 bg-white rounded-xl shadow-lg flex items-center justify-center mb-4 mx-auto group-hover:shadow-xl transition-shadow duration-300">
                      <Icon className="w-8 h-8 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div className="text-3xl font-bold text-blue-600 mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm font-medium text-[var(--text-primary)] mb-1">
                      {stat.label}
                    </div>
                    <div className="text-xs text-[var(--text-muted)]">
                      {stat.description}
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </AnimatedContainer>
      </div>
    </section>
  )
}
