import { OperationsHero } from "@/components/sections/operations-hero"
import { OperationsFeatures } from "@/components/sections/operations-features"
import { OperationsShowcase } from "@/components/sections/operations-showcase"
import { OperationsPricing } from "@/components/sections/operations-pricing"

export const metadata = {
  title: "AI赋能企业运营优化 - 慧视 | Lightcore AI",
  description: "专业的企业运营优化解决方案，提供网站搭建、数据分析、智能客服和员工培训等数字化管理服务，助力传统企业实现智能化升级。",
  keywords: "企业运营优化, 数字化转型, 智能客服, 数据分析, 网站搭建, 员工培训",
}

export default function OperationsPage() {
  return (
    <div className="min-h-screen">
      <OperationsHero />
      <OperationsFeatures />
      <OperationsShowcase />
      <OperationsPricing />
    </div>
  )
}
