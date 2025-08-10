"use client"

import { motion } from "framer-motion"
import { AnimatedContainer } from "@/components/ui/animated-container"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  Database, 
  Workflow, 
  Brain, 
  Cloud,
  Code,
  Zap,
  Shield,
  BarChart3
} from "lucide-react"

const techCategories = [
  {
    title: "AI & 机器学习",
    description: "前沿的人工智能技术栈",
    icon: Brain,
    color: "from-blue-500 to-cyan-500",
    technologies: [
      { name: "OpenAI GPT", description: "大语言模型应用" },
      { name: "LangChain", description: "AI应用开发框架" },
      { name: "Vector Databases", description: "向量数据库技术" },
      { name: "RAG系统", description: "检索增强生成" }
    ]
  },
  {
    title: "数据管理",
    description: "专业化数据管理解决方案",
    icon: Database,
    color: "from-green-500 to-emerald-500",
    technologies: [
      { name: "Supabase", description: "现代化数据库平台" },
      { name: "PostgreSQL", description: "企业级关系数据库" },
      { name: "Redis", description: "高性能缓存系统" },
      { name: "Data Pipeline", description: "数据处理管道" }
    ]
  },
  {
    title: "自动化工作流",
    description: "智能化业务流程自动化",
    icon: Workflow,
    color: "from-purple-500 to-pink-500",
    technologies: [
      { name: "N8N", description: "可视化工作流自动化" },
      { name: "Zapier", description: "应用集成平台" },
      { name: "API集成", description: "第三方服务整合" },
      { name: "Webhook", description: "实时数据同步" }
    ]
  },
  {
    title: "云服务 & 部署",
    description: "可靠的云基础设施",
    icon: Cloud,
    color: "from-orange-500 to-yellow-500",
    technologies: [
      { name: "Vercel", description: "前端部署平台" },
      { name: "AWS", description: "云计算服务" },
      { name: "Docker", description: "容器化部署" },
      { name: "CDN", description: "全球内容分发" }
    ]
  }
]

const capabilities = [
  {
    icon: Code,
    title: "全栈开发",
    description: "从前端到后端的完整技术解决方案"
  },
  {
    icon: Zap,
    title: "快速部署",
    description: "高效的开发流程，快速交付高质量产品"
  },
  {
    icon: Shield,
    title: "安全可靠",
    description: "企业级安全标准，保障数据和系统安全"
  },
  {
    icon: BarChart3,
    title: "数据洞察",
    description: "深度数据分析，为决策提供智能支持"
  }
]

export function TechStack() {
  return (
    <section className="py-20 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimatedContainer className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] mb-4">
            核心技术栈
          </h2>
          <p className="text-lg sm:text-xl text-[var(--text-muted)] max-w-3xl mx-auto">
            基于前沿技术构建的专业化数据管理和AI应用解决方案
          </p>
        </AnimatedContainer>

        {/* Technology Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {techCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <AnimatedContainer
                key={category.title}
                delay={index * 0.2}
                className="h-full"
              >
                <Card className="h-full group hover:shadow-xl transition-all duration-300 border-0 bg-white relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                  
                  <CardHeader className="relative">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-xl font-semibold text-[var(--text-primary)] group-hover:text-[var(--tech-blue)] transition-colors duration-300">
                          {category.title}
                        </CardTitle>
                        <CardDescription className="text-[var(--text-muted)]">
                          {category.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="relative">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {category.technologies.map((tech, techIndex) => (
                        <motion.div
                          key={tech.name}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ 
                            duration: 0.4, 
                            delay: index * 0.2 + techIndex * 0.1 
                          }}
                          className="bg-gray-50 rounded-lg p-3 hover:bg-gray-100 transition-colors duration-200"
                        >
                          <h4 className="text-sm font-medium text-[var(--text-primary)] mb-1">
                            {tech.name}
                          </h4>
                          <p className="text-xs text-[var(--text-muted)]">
                            {tech.description}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </AnimatedContainer>
            )
          })}
        </div>

        {/* Core Capabilities */}
        <AnimatedContainer delay={0.8}>
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-[var(--text-primary)] mb-4">
              技术能力
            </h3>
            <p className="text-[var(--text-muted)] max-w-2xl mx-auto">
              强大的技术实力，为您的数字化转型提供坚实保障
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((capability, index) => {
              const Icon = capability.icon
              return (
                <motion.div
                  key={capability.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center group"
                >
                  <div className="w-16 h-16 bg-white rounded-xl shadow-lg flex items-center justify-center mb-4 mx-auto group-hover:shadow-xl transition-shadow duration-300">
                    <Icon className="w-8 h-8 text-[var(--tech-blue)] group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h4 className="text-lg font-semibold text-[var(--text-primary)] mb-2">
                    {capability.title}
                  </h4>
                  <p className="text-[var(--text-muted)] text-sm leading-relaxed">
                    {capability.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </AnimatedContainer>

        {/* Technical Advantages */}
        <AnimatedContainer delay={1.0} className="mt-20">
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
            <div className="text-center mb-8">
              <h3 className="text-2xl lg:text-3xl font-bold text-[var(--text-primary)] mb-4">
                技术优势
              </h3>
              <p className="text-[var(--text-muted)] max-w-2xl mx-auto">
                我们的技术栈经过精心选择，确保为客户提供最优质的服务
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-[var(--tech-blue)] mb-2">
                  99.9%
                </div>
                <div className="text-sm text-[var(--text-muted)]">
                  系统可用性
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[var(--ai-green)] mb-2">
                  &lt;100ms
                </div>
                <div className="text-sm text-[var(--text-muted)]">
                  平均响应时间
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[var(--accent-orange)] mb-2">
                  24/7
                </div>
                <div className="text-sm text-[var(--text-muted)]">
                  技术支持
                </div>
              </div>
            </div>
          </div>
        </AnimatedContainer>
      </div>
    </section>
  )
}
