import { ContactHero } from "@/components/sections/contact-hero"
import { ContactForm } from "@/components/sections/contact-form"
import { ContactInfo } from "@/components/sections/contact-info"

export const metadata = {
  title: "联系我们 - 慧视 | Lightcore AI",
  description: "联系慧视团队，获取专业的AI解决方案咨询。我们随时准备为您的数字化转型提供支持。",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <ContactHero />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
        <ContactForm />
        <ContactInfo />
      </div>
    </div>
  )
}
