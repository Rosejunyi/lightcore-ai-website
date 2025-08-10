import { FinancialAIHero } from "@/components/sections/financial-ai-hero"
import { FinancialAIFeatures } from "@/components/sections/financial-ai-features"
import { FinancialAICaseStudies } from "@/components/sections/financial-ai-case-studies"
import { FinancialAIPricing } from "@/components/sections/financial-ai-pricing"

export const metadata = {
  title: "AI金融智能洞察方案 - 慧视 | Lightcore AI",
  description: "专业的AI金融洞察解决方案，提供股票市场分析、投资建议、风险评估和智能研报生成，助力金融机构实现智能化决策。",
  keywords: "AI金融, 股票分析, 投资建议, 风险评估, 智能研报, 金融科技",
}

export default function FinancialAIPage() {
  return (
    <div className="min-h-screen">
      <FinancialAIHero />
      <FinancialAIFeatures />
      <FinancialAICaseStudies />
      <FinancialAIPricing />
    </div>
  )
}
