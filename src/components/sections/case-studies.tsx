"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AnimatedContainer } from "@/components/ui/animated-container"
import { 
  ArrowRight,
  TrendingUp,
  Building,
  Shield
} from "lucide-react"

const caseStudies = [
  {
    icon: Shield,
    company: "某大型保险公司",
    title: "AI智能教练项目",
    category: "金融保险",
    description: "通过AI技术为保险销售团队提供智能培训和实时指导，显著提升销售效率和客户满意度",
    results: [
      { label: "销售效率提升", value: "45%" },
      { label: "培训时间缩短", value: "60%" },
      { label: "客户满意度", value: "92%" }
    ],
    tags: ["AI培训", "智能客服", "数据分析"],
    image: "/case-study-insurance.jpg",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: TrendingUp,
    company: "金融投资机构",
    title: "智能金融分析工具",
    category: "金融科技",
    description: "基于AI的股票分析和市场预测系统，为投资决策提供数据驱动的智能洞察",
    results: [
      { label: "预测准确率", value: "87%" },
      { label: "分析速度提升", value: "300%" },
      { label: "投资回报率", value: "+23%" }
    ],
    tags: ["金融AI", "数据洞察", "预测模型"],
    image: "/case-study-finance.jpg",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Building,
    company: "传统制造企业",
    title: "数字化网站与运营升级",
    category: "制造业",
    description: "为传统制造企业打造现代化官网和数字化运营体系，实现线上线下一体化管理",
    results: [
      { label: "线上询盘增长", value: "180%" },
      { label: "运营效率提升", value: "55%" },
      { label: "客户转化率", value: "38%" }
    ],
    tags: ["网站建设", "数字化转型", "运营优化"],
    image: "/case-study-manufacturing.jpg",
    color: "from-orange-500 to-yellow-500"
  }
]

export function CaseStudies() {
  return (
    <section className="py-20 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimatedContainer className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text-primary)]">
              成功案例速览
            </h2>
            <p className="text-lg sm:text-xl text-[var(--text-muted)] max-w-3xl mx-auto">
              真实案例见证AI赋能的成果，看看我们如何帮助企业实现数字化转型
            </p>
          </motion.div>
        </AnimatedContainer>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {caseStudies.map((caseStudy, index) => {
            const Icon = caseStudy.icon
            return (
              <AnimatedContainer
                key={caseStudy.title}
                delay={index * 0.2}
                className="h-full"
              >
                <Card className="h-full group hover:shadow-xl transition-all duration-300 border-0 bg-white relative overflow-hidden">
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${caseStudy.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                  
                  <CardHeader className="relative">
                    {/* Category Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-medium text-[var(--tech-blue)] bg-[var(--tech-blue)]/10 px-3 py-1 rounded-full">
                        {caseStudy.category}
                      </span>
                      <Icon className={`w-6 h-6 bg-gradient-to-br ${caseStudy.color} bg-clip-text text-transparent`} />
                    </div>
                    
                    <CardTitle className="text-lg font-semibold text-[var(--text-primary)] group-hover:text-[var(--tech-blue)] transition-colors duration-300">
                      {caseStudy.title}
                    </CardTitle>
                    <CardDescription className="text-sm text-[var(--text-muted)] font-medium">
                      {caseStudy.company}
                    </CardDescription>
                    <p className="text-sm text-[var(--text-muted)] leading-relaxed mt-2">
                      {caseStudy.description}
                    </p>
                  </CardHeader>

                  <CardContent className="relative space-y-6">
                    {/* Results */}
                    <div className="grid grid-cols-3 gap-4">
                      {caseStudy.results.map((result, resultIndex) => (
                        <motion.div
                          key={result.label}
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ 
                            duration: 0.4, 
                            delay: index * 0.2 + resultIndex * 0.1 
                          }}
                          className="text-center"
                        >
                          <div className={`text-lg font-bold bg-gradient-to-br ${caseStudy.color} bg-clip-text text-transparent`}>
                            {result.value}
                          </div>
                          <div className="text-xs text-[var(--text-muted)] leading-tight">
                            {result.label}
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {caseStudy.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs text-[var(--text-muted)] bg-gray-100 px-2 py-1 rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <Button
                      variant="ghost"
                      className="w-full group/btn justify-between text-[var(--tech-blue)] hover:bg-[var(--tech-blue)]/5"
                    >
                      <span>查看详情</span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                    </Button>
                  </CardContent>
                </Card>
              </AnimatedContainer>
            )
          })}
        </div>

        {/* Stats Section */}
        <AnimatedContainer delay={0.8}>
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[var(--tech-blue)] mb-2">
                  50+
                </div>
                <div className="text-sm text-[var(--text-muted)]">
                  成功项目
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[var(--ai-green)] mb-2">
                  95%
                </div>
                <div className="text-sm text-[var(--text-muted)]">
                  客户满意度
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[var(--accent-orange)] mb-2">
                  200%
                </div>
                <div className="text-sm text-[var(--text-muted)]">
                  平均效率提升
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[var(--tech-blue)] mb-2">
                  24/7
                </div>
                <div className="text-sm text-[var(--text-muted)]">
                  技术支持
                </div>
              </div>
            </div>
          </div>
        </AnimatedContainer>

        {/* Bottom CTA */}
        <AnimatedContainer delay={1.0} className="text-center mt-16">
          <div className="space-y-6">
            <h3 className="text-2xl lg:text-3xl font-bold text-[var(--text-primary)]">
              准备开始您的AI转型之旅？
            </h3>
            <p className="text-[var(--text-muted)] max-w-2xl mx-auto">
              联系我们的专家团队，获取免费的数字化转型咨询和定制化解决方案
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button variant="primary" size="lg" className="group">
                <span className="flex items-center space-x-2">
                  <span>立即咨询</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </span>
              </Button>
              <Button variant="outline" size="lg">
                下载案例详情
              </Button>
            </div>
          </div>
        </AnimatedContainer>
      </div>
    </section>
  )
}
