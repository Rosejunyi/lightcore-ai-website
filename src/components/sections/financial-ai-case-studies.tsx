"use client"

import { motion } from "framer-motion"
import { AnimatedContainer } from "@/components/ui/animated-container"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  Building, 
  TrendingUp, 
  Shield,
  ArrowRight,
  CheckCircle,
  BarChart3,

} from "lucide-react"

const caseStudies = [
  {
    icon: Building,
    company: "某大型投资银行",
    title: "AI驱动的投资决策系统",
    industry: "投资银行",
    challenge: "传统投资分析耗时长，人工成本高，决策效率低下",
    solution: "部署AI金融洞察平台，实现自动化市场分析和投资建议生成",
    results: [
      { metric: "分析效率", improvement: "+300%", description: "投资分析时间从8小时缩短至2小时" },
      { metric: "预测准确率", improvement: "87%", description: "市场趋势预测准确率达到87%" },
      { metric: "投资回报", improvement: "+23%", description: "年化投资回报率提升23%" }
    ],
    testimonial: "AI金融洞察平台彻底改变了我们的投资决策流程，不仅提高了效率，更重要的是提升了决策质量。",
    author: "投资总监",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Shield,
    company: "知名保险集团",
    title: "智能风险管理系统",
    industry: "保险金融",
    challenge: "风险评估依赖人工经验，缺乏系统性风险预警机制",
    solution: "集成AI风险评估模型，建立多维度风险监控体系",
    results: [
      { metric: "风险识别", improvement: "+150%", description: "风险识别覆盖率提升150%" },
      { metric: "损失减少", improvement: "-35%", description: "投资损失减少35%" },
      { metric: "合规效率", improvement: "+200%", description: "合规检查效率提升200%" }
    ],
    testimonial: "通过AI风险管理系统，我们能够更早发现潜在风险，大大降低了投资损失。",
    author: "风险管理部门负责人",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: TrendingUp,
    company: "私募基金公司",
    title: "量化交易策略优化",
    industry: "私募基金",
    challenge: "量化策略开发周期长，回测验证复杂，策略优化困难",
    solution: "使用AI量化策略平台，自动化策略开发和优化",
    results: [
      { metric: "策略开发", improvement: "+400%", description: "策略开发效率提升400%" },
      { metric: "夏普比率", improvement: "1.8", description: "投资组合夏普比率达到1.8" },
      { metric: "最大回撤", improvement: "-8%", description: "最大回撤控制在8%以内" }
    ],
    testimonial: "AI量化平台让我们能够快速验证和优化交易策略，显著提升了基金表现。",
    author: "量化投资经理",
    color: "from-purple-500 to-pink-500"
  }
]

export function FinancialAICaseStudies() {
  return (
    <section className="py-20 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimatedContainer className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] mb-4">
            客户成功案例
          </h2>
          <p className="text-lg sm:text-xl text-[var(--text-muted)] max-w-3xl mx-auto">
            看看我们如何帮助金融机构实现AI驱动的智能化转型
          </p>
        </AnimatedContainer>

        {/* Case Studies */}
        <div className="space-y-16">
          {caseStudies.map((caseStudy, index) => {
            const Icon = caseStudy.icon
            const isEven = index % 2 === 0
            
            return (
              <AnimatedContainer
                key={caseStudy.title}
                delay={index * 0.2}
                className="relative"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${!isEven ? 'lg:grid-flow-col-dense' : ''}`}>
                  {/* Case Study Info */}
                  <div className={`space-y-6 ${!isEven ? 'lg:col-start-2' : ''}`}>
                    <div className="flex items-center space-x-4 mb-6">
                      <div className={`w-12 h-12 bg-gradient-to-br ${caseStudy.color} rounded-lg flex items-center justify-center`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-blue-600 mb-1">
                          {caseStudy.industry}
                        </div>
                        <h3 className="text-2xl font-bold text-[var(--text-primary)]">
                          {caseStudy.title}
                        </h3>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h4 className="text-lg font-semibold text-[var(--text-primary)] mb-2">
                          挑战
                        </h4>
                        <p className="text-[var(--text-muted)] leading-relaxed">
                          {caseStudy.challenge}
                        </p>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-[var(--text-primary)] mb-2">
                          解决方案
                        </h4>
                        <p className="text-[var(--text-muted)] leading-relaxed">
                          {caseStudy.solution}
                        </p>
                      </div>
                    </div>

                    {/* Testimonial */}
                    <div className="bg-white p-6 rounded-lg border-l-4 border-blue-500">
                      <p className="text-[var(--text-secondary)] italic mb-3">
                        &ldquo;{caseStudy.testimonial}&rdquo;
                      </p>
                      <div className="text-sm text-[var(--text-muted)]">
                        — {caseStudy.author}, {caseStudy.company}
                      </div>
                    </div>
                  </div>

                  {/* Results */}
                  <div className={`${!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                    <Card className="border-0 shadow-xl bg-white">
                      <CardHeader>
                        <CardTitle className="text-xl text-[var(--text-primary)] flex items-center space-x-2">
                          <BarChart3 className="w-5 h-5 text-blue-600" />
                          <span>实施效果</span>
                        </CardTitle>
                        <CardDescription>
                          量化的业务改进成果
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-6">
                          {caseStudy.results.map((result, resultIndex) => (
                            <motion.div
                              key={result.metric}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ 
                                duration: 0.5, 
                                delay: index * 0.2 + resultIndex * 0.1 
                              }}
                              className="flex items-start space-x-4"
                            >
                              <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                <CheckCircle className="w-5 h-5 text-green-600" />
                              </div>
                              <div className="flex-1">
                                <div className="flex items-center space-x-3 mb-1">
                                  <span className="text-sm font-medium text-[var(--text-primary)]">
                                    {result.metric}
                                  </span>
                                  <span className={`text-lg font-bold bg-gradient-to-br ${caseStudy.color} bg-clip-text text-transparent`}>
                                    {result.improvement}
                                  </span>
                                </div>
                                <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                                  {result.description}
                                </p>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </AnimatedContainer>
            )
          })}
        </div>

        {/* CTA Section */}
        <AnimatedContainer delay={1.0} className="text-center mt-20">
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 lg:p-12 text-white">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              准备开始您的AI金融转型？
            </h3>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              联系我们的专家团队，获取定制化的AI金融解决方案
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button variant="secondary" size="lg" className="bg-white text-blue-600 hover:bg-gray-100 group">
                <span className="flex items-center space-x-2">
                  <span>免费咨询</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </span>
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                预约演示
              </Button>
            </div>
          </div>
        </AnimatedContainer>
      </div>
    </section>
  )
}
