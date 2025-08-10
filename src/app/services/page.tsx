import { ServicesHero } from "@/components/sections/services-hero"
import { ServicesList } from "@/components/sections/services-list"
import { ProcessFlow } from "@/components/sections/process-flow"
import { ServicesCTA } from "@/components/sections/services-cta"

export const metadata = {
  title: "服务与解决方案 - 慧视 | Lightcore AI",
  description: "慧视提供AI金融洞察、内容生成、运营优化等专业服务，为企业数字化转型提供全方位解决方案。",
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <ServicesHero />
      <ServicesList />
      <ProcessFlow />
      <ServicesCTA />
    </div>
  )
}
