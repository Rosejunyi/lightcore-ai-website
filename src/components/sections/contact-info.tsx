"use client"

import { motion } from "framer-motion"
import { AnimatedContainer } from "@/components/ui/animated-container"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageCircle,
  Calendar,
  Users,
  Shield,

  Star,
  ArrowRight
} from "lucide-react"
import Link from "next/link"

const contactMethods = [
  {
    icon: Mail,
    title: "邮件联系",
    value: "junyichao5@gmail.com",
    description: "发送详细需求，我们会在24小时内回复",
    action: "发送邮件",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Phone,
    title: "直接沟通",
    value: "Rosa Zhao",
    description: "与创始人直接交流，获取专业建议",
    action: "预约通话",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: MessageCircle,
    title: "在线客服",
    value: "24/7 在线",
    description: "即时响应，随时为您解答疑问",
    action: "开始对话",
    color: "from-purple-500 to-pink-500"
  }
]

const workingHours = [
  { day: "周一至周五", time: "9:00 - 18:00", available: true },
  { day: "周六", time: "10:00 - 16:00", available: true },
  { day: "周日", time: "预约服务", available: false }
]

const responsePromises = [
  {
    icon: Clock,
    title: "快速响应",
    description: "24小时内回复您的咨询"
  },
  {
    icon: Users,
    title: "专业团队",
    description: "经验丰富的AI专家为您服务"
  },
  {
    icon: Shield,
    title: "信息安全",
    description: "严格保护您的商业机密"
  },
  {
    icon: Star,
    title: "优质服务",
    description: "95%客户满意度保证"
  }
]

const quickActions = [
  {
    icon: Calendar,
    title: "预约演示",
    description: "观看产品演示，了解具体功能",
    action: "立即预约"
  },
  {
    icon: MessageCircle,
    title: "技术咨询",
    description: "获取专业的技术建议和方案",
    action: "开始咨询"
  }
]

export function ContactInfo() {
  return (
    <section className="py-20 lg:py-32 bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedContainer>
          <div className="space-y-8">
            {/* Contact Methods */}
            <div className="space-y-6">
              <h2 className="text-2xl lg:text-3xl font-bold text-[var(--text-primary)] text-center mb-8">
                多种联系方式
              </h2>
              
              {contactMethods.map((method, index) => {
                const Icon = method.icon
                return (
                  <motion.div
                    key={method.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white relative overflow-hidden">
                      <div className={`absolute inset-0 bg-gradient-to-br ${method.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                      
                      <CardContent className="p-6 relative">
                        <div className="flex items-start space-x-4">
                          <div className={`w-12 h-12 bg-gradient-to-br ${method.color} rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-1">
                              {method.title}
                            </h3>
                            <p className="text-[var(--tech-blue)] font-medium mb-2">
                              {method.value}
                            </p>
                            <p className="text-sm text-[var(--text-muted)] mb-4">
                              {method.description}
                            </p>
                            {method.action === "开始对话" ? (
                              <Link href="/ai-chat">
                                <Button variant="outline" size="sm" className="group/btn">
                                  <span className="flex items-center space-x-2">
                                    <span>{method.action}</span>
                                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                                  </span>
                                </Button>
                              </Link>
                            ) : (
                              <Button variant="outline" size="sm" className="group/btn">
                                <span className="flex items-center space-x-2">
                                  <span>{method.action}</span>
                                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                                </span>
                              </Button>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                )
              })}
            </div>

            {/* Working Hours */}
            <AnimatedContainer delay={0.4}>
              <Card className="border-0 shadow-lg bg-white">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-4 flex items-center space-x-2">
                    <Clock className="w-5 h-5 text-[var(--tech-blue)]" />
                    <span>服务时间</span>
                  </h3>
                  
                  <div className="space-y-3">
                    {workingHours.map((schedule) => (
                      <div key={schedule.day} className="flex items-center justify-between">
                        <span className="text-[var(--text-secondary)]">{schedule.day}</span>
                        <span className={`text-sm font-medium ${schedule.available ? 'text-[var(--ai-green)]' : 'text-[var(--text-muted)]'}`}>
                          {schedule.time}
                        </span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                    <p className="text-xs text-[var(--tech-blue)]">
                      <strong>紧急情况：</strong>如有紧急技术问题，可通过邮件联系，我们会优先处理。
                    </p>
                  </div>
                </CardContent>
              </Card>
            </AnimatedContainer>

            {/* Response Promises */}
            <AnimatedContainer delay={0.6}>
              <Card className="border-0 shadow-lg bg-white">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-6 text-center">
                    我们的承诺
                  </h3>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {responsePromises.map((promise, index) => {
                      const Icon = promise.icon
                      return (
                        <motion.div
                          key={promise.title}
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: index * 0.1 }}
                          className="text-center group"
                        >
                          <div className="w-10 h-10 bg-[var(--tech-blue)]/10 rounded-lg flex items-center justify-center mb-2 mx-auto group-hover:bg-[var(--tech-blue)]/20 transition-colors duration-300">
                            <Icon className="w-5 h-5 text-[var(--tech-blue)]" />
                          </div>
                          <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-1">
                            {promise.title}
                          </h4>
                          <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                            {promise.description}
                          </p>
                        </motion.div>
                      )
                    })}
                  </div>
                </CardContent>
              </Card>
            </AnimatedContainer>

            {/* Quick Actions */}
            <AnimatedContainer delay={0.8}>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-[var(--text-primary)] text-center">
                  快速行动
                </h3>
                
                {quickActions.map((action) => {
                  const Icon = action.icon
                  return (
                    <Card key={action.title} className="border-0 shadow-md bg-white hover:shadow-lg transition-shadow duration-300">
                      <CardContent className="p-4">
                        <div className="flex items-center space-x-4">
                          <div className="w-10 h-10 bg-[var(--ai-green)]/10 rounded-lg flex items-center justify-center">
                            <Icon className="w-5 h-5 text-[var(--ai-green)]" />
                          </div>
                          <div className="flex-1">
                            <h4 className="text-sm font-semibold text-[var(--text-primary)]">
                              {action.title}
                            </h4>
                            <p className="text-xs text-[var(--text-muted)]">
                              {action.description}
                            </p>
                          </div>
                          {action.action === "开始咨询" ? (
                            <Link href="/ai-chat">
                              <Button variant="ghost" size="sm" className="text-[var(--ai-green)] hover:bg-[var(--ai-green)]/10">
                                {action.action}
                              </Button>
                            </Link>
                          ) : (
                            <Button variant="ghost" size="sm" className="text-[var(--ai-green)] hover:bg-[var(--ai-green)]/10">
                              {action.action}
                            </Button>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </AnimatedContainer>

            {/* Location Info */}
            <AnimatedContainer delay={1.0}>
              <Card className="border-0 shadow-lg bg-gradient-to-br from-[var(--tech-blue)]/5 to-[var(--ai-green)]/5">
                <CardContent className="p-6 text-center">
                  <MapPin className="w-8 h-8 text-[var(--tech-blue)] mx-auto mb-3" />
                  <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">
                    Lightcore AI
                  </h3>
                  <p className="text-[var(--text-muted)] mb-4">
                    www.lightcoreai.com
                  </p>
                  <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                    我们是一家专注于AI应用的科技公司，致力于为企业提供专业的数字化转型解决方案。
                    无论您身在何处，我们都能为您提供优质的远程服务。
                  </p>
                </CardContent>
              </Card>
            </AnimatedContainer>
          </div>
        </AnimatedContainer>
      </div>
    </section>
  )
}
