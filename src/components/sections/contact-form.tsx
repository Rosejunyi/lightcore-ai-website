"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { AnimatedContainer } from "@/components/ui/animated-container"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  Send, 
  User, 
  Building, 
  Mail, 
  Phone,
  MessageSquare,
  CheckCircle,
  AlertCircle
} from "lucide-react"

const serviceOptions = [
  "AI金融洞察方案",
  "内容生成与营销",
  "企业运营优化",
  "定制化AI解决方案",
  "技术咨询服务",
  "其他需求"
]

const budgetRanges = [
  "10万以下",
  "10-50万",
  "50-100万",
  "100万以上",
  "待商议"
]

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    message: "",
    urgency: "normal"
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // 模拟表单提交
    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      setSubmitStatus("success")
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        service: "",
        budget: "",
        message: "",
        urgency: "normal"
      })
    } catch {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus("idle"), 5000)
    }
  }

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedContainer>
          <Card className="border-0 shadow-xl bg-white">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-2xl lg:text-3xl font-bold text-[var(--text-primary)]">
                专业咨询表单
              </CardTitle>
              <CardDescription className="text-lg text-[var(--text-muted)]">
                请填写以下信息，我们的AI智囊或专业顾问将在24小时内与您联系，助您开启转型之旅。
              </CardDescription>
            </CardHeader>

            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* 基本信息 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-[var(--text-primary)] flex items-center space-x-2">
                      <User className="w-4 h-4" />
                      <span>姓名 *</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[var(--tech-blue)] focus:border-transparent transition-colors duration-200"
                      placeholder="请输入您的姓名"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium text-[var(--text-primary)] flex items-center space-x-2">
                      <Building className="w-4 h-4" />
                      <span>公司名称 *</span>
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[var(--tech-blue)] focus:border-transparent transition-colors duration-200"
                      placeholder="请输入公司名称"
                    />
                  </div>
                </div>

                {/* 联系方式 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-[var(--text-primary)] flex items-center space-x-2">
                      <Mail className="w-4 h-4" />
                      <span>邮箱地址 *</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[var(--tech-blue)] focus:border-transparent transition-colors duration-200"
                      placeholder="请输入邮箱地址"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-[var(--text-primary)] flex items-center space-x-2">
                      <Phone className="w-4 h-4" />
                      <span>联系电话</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[var(--tech-blue)] focus:border-transparent transition-colors duration-200"
                      placeholder="请输入联系电话"
                    />
                  </div>
                </div>

                {/* 服务需求 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="service" className="text-sm font-medium text-[var(--text-primary)]">
                      感兴趣的服务 *
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[var(--tech-blue)] focus:border-transparent transition-colors duration-200"
                    >
                      <option value="">请选择服务类型</option>
                      {serviceOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="budget" className="text-sm font-medium text-[var(--text-primary)]">
                      预算范围
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[var(--tech-blue)] focus:border-transparent transition-colors duration-200"
                    >
                      <option value="">请选择预算范围</option>
                      {budgetRanges.map((range) => (
                        <option key={range} value={range}>
                          {range}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* 紧急程度 */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-[var(--text-primary)]">
                    项目紧急程度
                  </label>
                  <div className="flex space-x-4">
                    {[
                      { value: "urgent", label: "紧急（1周内）", color: "text-red-600" },
                      { value: "normal", label: "正常（1个月内）", color: "text-[var(--tech-blue)]" },
                      { value: "flexible", label: "灵活（时间充裕）", color: "text-[var(--ai-green)]" }
                    ].map((option) => (
                      <label key={option.value} className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="radio"
                          name="urgency"
                          value={option.value}
                          checked={formData.urgency === option.value}
                          onChange={handleInputChange}
                          className="text-[var(--tech-blue)] focus:ring-[var(--tech-blue)]"
                        />
                        <span className={`text-sm ${option.color}`}>{option.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* 详细需求 */}
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-[var(--text-primary)] flex items-center space-x-2">
                    <MessageSquare className="w-4 h-4" />
                    <span>详细需求描述 *</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[var(--tech-blue)] focus:border-transparent transition-colors duration-200 resize-none"
                    placeholder="请详细描述您的需求、目前面临的挑战、期望达到的效果等..."
                  />
                </div>

                {/* 提交状态显示 */}
                {submitStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center space-x-2 text-[var(--ai-green)] bg-green-50 p-3 rounded-lg"
                  >
                    <CheckCircle className="w-5 h-5" />
                    <span className="text-sm">提交成功！我们将在24小时内与您联系。</span>
                  </motion.div>
                )}

                {submitStatus === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center space-x-2 text-red-600 bg-red-50 p-3 rounded-lg"
                  >
                    <AlertCircle className="w-5 h-5" />
                    <span className="text-sm">提交失败，请稍后重试或直接联系我们。</span>
                  </motion.div>
                )}

                {/* 提交按钮 */}
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full group"
                  loading={isSubmitting}
                  disabled={isSubmitting}
                >
                  <span className="flex items-center justify-center space-x-2">
                    <Send className="w-5 h-5" />
                    <span>{isSubmitting ? "提交中..." : "提交咨询"}</span>
                  </span>
                </Button>

                <p className="text-xs text-[var(--text-muted)] text-center">
                  提交表单即表示您同意我们的隐私政策。我们承诺保护您的个人信息安全。
                </p>
              </form>
            </CardContent>
          </Card>
        </AnimatedContainer>
      </div>
    </section>
  )
}
