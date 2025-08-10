import { HeroSection } from "@/components/sections/hero-section"
import { ServicesOverview } from "@/components/sections/services-overview"
import { CaseStudies } from "@/components/sections/case-studies"

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ServicesOverview />
      <CaseStudies />
    </div>
  );
}
