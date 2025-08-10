import { CompanyVision } from "@/components/sections/company-vision"
import { FounderProfile } from "@/components/sections/founder-profile"
import { TechStack } from "@/components/sections/tech-stack"
import { CompanyCulture } from "@/components/sections/company-culture"

export const metadata = {
  title: "关于我们 - 慧视 | Lightcore AI",
  description: "了解慧视团队的愿景使命、创始人背景、核心技术栈和企业文化。我们致力于为企业提供专业的AI驱动数字化转型解决方案。",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <CompanyVision />
      <FounderProfile />
      <TechStack />
      <CompanyCulture />
    </div>
  )
}
