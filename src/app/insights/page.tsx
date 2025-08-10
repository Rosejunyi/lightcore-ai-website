import { InsightsHero } from "@/components/sections/insights-hero"
import { InsightsList } from "@/components/sections/insights-list"
import { InsightsCategories } from "@/components/sections/insights-categories"

export const metadata = {
  title: "AI前沿洞察 - 慧视 | Lightcore AI",
  description: "获取最新的AI技术趋势、行业洞察和专业分析。慧视为您提供前沿的人工智能资讯和深度思考。",
  keywords: "AI洞察, 人工智能趋势, 技术分析, 行业报告, AI资讯",
}

export default function InsightsPage() {
  return (
    <div className="min-h-screen">
      <InsightsHero />
      <InsightsCategories />
      <InsightsList />
    </div>
  )
}
