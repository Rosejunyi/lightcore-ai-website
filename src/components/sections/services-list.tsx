"use client"

import { motion } from "framer-motion"
import { AnimatedContainer } from "@/components/ui/animated-container"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  TrendingUp, 
  PenTool, 
  Settings, 
  ArrowRight,
  CheckCircle,
  BarChart3,
  FileText,
  Users,
  Globe,
  Smartphone,
  Database,
  Shield
} from "lucide-react"

const services = [
  {
    id: "financial-ai",
    icon: TrendingUp,
    title: "AI金融智能洞察方案",
    subtitle: "Financial AI Solutions",
    description: "针对金融行业，提供股票/市场/研报AI分析，赋能精准决策",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50",
    targetIndustries: ["金融机构", "投资公司", "保险公司", "证券公司"],
    painPoints: [
      "市场数据分析复杂，人工处理效率低",
      "投资决策缺乏数据支撑",
      "风险评估不够精准",
      "研报生成耗时耗力"
    ],
    solutions: [
      {
        icon: BarChart3,
        title: "实时市场分析",
        description: "AI驱动的股票市场实时分析和趋势预测"
      },
      {
        icon: FileText,
        title: "智能研报生成",
        description: "自动化生成专业投资研究报告"
      },
      {
        icon: Shield,
        title: "风险评估模型",
        description: "基于AI的投资风险评估和预警系统"
      },
      {
        icon: TrendingUp,
        title: "投资建议引擎",
        description: "个性化投资建议和组合优化方案"
      }
    ],
    benefits: [
      "提升分析效率300%",
      "降低投资风险25%",
      "增加投资回报率15-20%",
      "节省人力成本60%"
    ],
    caseStudy: "某投资机构通过我们的AI金融洞察系统，投资决策准确率提升87%，年化收益率增长23%"
  },
  {
    id: "content-generation",
    icon: PenTool,
    title: "AI驱动内容生成与营销方案",
    subtitle: "Content Generation Solutions",
    description: "针对传媒/出版社，提供内容创作、短视频脚本、营销文案AI生成",
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-50",
    targetIndustries: ["传媒公司", "出版社", "广告公司", "电商平台"],
    painPoints: [
      "内容创作成本高，周期长",
      "营销文案缺乏创意和吸引力",
      "多平台内容适配困难",
      "内容质量不稳定"
    ],
    solutions: [
      {
        icon: PenTool,
        title: "智能文案创作",
        description: "AI生成高质量营销文案和产品描述"
      },
      {
        icon: FileText,
        title: "多媒体内容制作",
        description: "图文、视频、音频等多形式内容生成"
      },
      {
        icon: Smartphone,
        title: "短视频脚本",
        description: "针对抖音、小红书等平台的脚本创作"
      },
      {
        icon: BarChart3,
        title: "内容效果分析",
        description: "内容表现数据分析和优化建议"
      }
    ],
    benefits: [
      "内容创作效率提升500%",
      "营销转化率提升40%",
      "内容制作成本降低70%",
      "多平台覆盖率提升200%"
    ],
    caseStudy: "某电商平台使用我们的内容生成方案后，产品描述点击率提升180%，销售转化率增长38%"
  },
  {
    id: "operations",
    icon: Settings,
    title: "AI赋能企业运营优化",
    subtitle: "Operations Optimization",
    description: "针对传统行业，提供专业网站搭建、数据分析、智能客服等数字化管理",
    color: "from-orange-500 to-yellow-500",
    bgColor: "bg-orange-50",
    targetIndustries: ["制造业", "零售业", "服务业", "传统企业"],
    painPoints: [
      "数字化程度低，管理效率不高",
      "客户服务响应慢，体验差",
      "数据分析能力不足",
      "员工培训成本高，效果差"
    ],
    solutions: [
      {
        icon: Globe,
        title: "专业网站搭建",
        description: "现代化企业官网和电商平台建设"
      },
      {
        icon: Users,
        title: "智能客服系统",
        description: "24/7 AI客服，提升客户服务质量"
      },
      {
        icon: Database,
        title: "数据分析平台",
        description: "业务数据可视化分析和洞察"
      },
      {
        icon: Users,
        title: "AI培训导师",
        description: "员工技能培训和管理标准化"
      }
    ],
    benefits: [
      "运营效率提升55%",
      "客户满意度提升92%",
      "培训成本降低60%",
      "数据决策准确率提升80%"
    ],
    caseStudy: "某制造企业通过我们的运营优化方案，线上询盘增长180%，整体运营效率提升55%"
  }
]

export function ServicesList() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimatedContainer className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] mb-4">
            详细服务方案
          </h2>
          <p className="text-lg sm:text-xl text-[var(--text-muted)] max-w-3xl mx-auto">
            深入了解我们如何通过AI技术解决您的业务痛点，创造实际价值
          </p>
        </AnimatedContainer>

        {/* Services List */}
        <div className="space-y-20">
          {services.map((service, index) => {
            const Icon = service.icon
            const isEven = index % 2 === 0
            
            return (
              <AnimatedContainer
                key={service.id}
                delay={index * 0.2}
                className="relative"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${!isEven ? 'lg:grid-flow-col-dense' : ''}`}>
                  {/* Service Info */}
                  <div className={`space-y-8 ${!isEven ? 'lg:col-start-2' : ''}`}>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-4">
                        <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center`}>
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl lg:text-3xl font-bold text-[var(--text-primary)]">
                            {service.title}
                          </h3>
                          <p className="text-sm text-[var(--text-muted)] font-medium">
                            {service.subtitle}
                          </p>
                        </div>
                      </div>
                      
                      <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    {/* Target Industries */}
                    <div>
                      <h4 className="text-lg font-semibold text-[var(--text-primary)] mb-3">
                        适用行业
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {service.targetIndustries.map((industry) => (
                          <span
                            key={industry}
                            className={`text-sm ${service.bgColor} text-[var(--text-secondary)] px-3 py-1 rounded-full border`}
                          >
                            {industry}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Pain Points */}
                    <div>
                      <h4 className="text-lg font-semibold text-[var(--text-primary)] mb-3">
                        解决痛点
                      </h4>
                      <ul className="space-y-2">
                        {service.painPoints.map((point, pointIndex) => (
                          <li key={pointIndex} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                            <span className="text-[var(--text-muted)] text-sm">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Benefits */}
                    <div>
                      <h4 className="text-lg font-semibold text-[var(--text-primary)] mb-3">
                        预期效果
                      </h4>
                      <div className="grid grid-cols-2 gap-3">
                        {service.benefits.map((benefit, benefitIndex) => (
                          <div key={benefitIndex} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-[var(--ai-green)] flex-shrink-0" />
                            <span className="text-[var(--text-muted)] text-sm">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Button variant="primary" size="lg" className="group">
                      <span className="flex items-center space-x-2">
                        <span>了解详情</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                      </span>
                    </Button>
                  </div>

                  {/* Solutions Grid */}
                  <div className={`${!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                    <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-gray-50">
                      <CardHeader>
                        <CardTitle className="text-xl text-[var(--text-primary)]">
                          解决方案
                        </CardTitle>
                        <CardDescription>
                          我们提供的核心功能和服务
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {service.solutions.map((solution, solutionIndex) => {
                            const SolutionIcon = solution.icon
                            return (
                              <motion.div
                                key={solution.title}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ 
                                  duration: 0.4, 
                                  delay: index * 0.2 + solutionIndex * 0.1 
                                }}
                                className="bg-white rounded-lg p-4 border border-gray-100 hover:shadow-md transition-shadow duration-200"
                              >
                                <div className="flex items-start space-x-3">
                                  <div className={`w-8 h-8 bg-gradient-to-br ${service.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                                    <SolutionIcon className="w-4 h-4 text-white" />
                                  </div>
                                  <div>
                                    <h5 className="text-sm font-semibold text-[var(--text-primary)] mb-1">
                                      {solution.title}
                                    </h5>
                                    <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                                      {solution.description}
                                    </p>
                                  </div>
                                </div>
                              </motion.div>
                            )
                          })}
                        </div>

                        {/* Case Study */}
                        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                          <h5 className="text-sm font-semibold text-[var(--text-primary)] mb-2">
                            成功案例
                          </h5>
                          <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                            {service.caseStudy}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </AnimatedContainer>
            )
          })}
        </div>
      </div>
    </section>
  )
}
