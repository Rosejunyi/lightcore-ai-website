import { ContentGenerationHero } from "@/components/sections/content-generation-hero"
import { ContentGenerationFeatures } from "@/components/sections/content-generation-features"
import { ContentGenerationShowcase } from "@/components/sections/content-generation-showcase"
import { ContentGenerationPricing } from "@/components/sections/content-generation-pricing"

export const metadata = {
  title: "AI驱动内容生成与营销方案 - 慧视 | Lightcore AI",
  description: "专业的AI内容生成解决方案，提供智能文案创作、短视频脚本、多媒体内容制作和营销策略优化，助力企业提升内容营销效果。",
  keywords: "AI内容生成, 智能文案, 短视频脚本, 营销文案, 内容营销, 自动化创作",
}

export default function ContentGenerationPage() {
  return (
    <div className="min-h-screen">
      <ContentGenerationHero />
      <ContentGenerationFeatures />
      <ContentGenerationShowcase />
      <ContentGenerationPricing />
    </div>
  )
}
