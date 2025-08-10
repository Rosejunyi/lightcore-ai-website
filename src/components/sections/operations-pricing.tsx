"use client"

import { AnimatedContainer } from "@/components/ui/animated-container"

export function OperationsPricing() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedContainer className="text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] mb-4">
            服务定价
          </h2>
          <p className="text-lg sm:text-xl text-[var(--text-muted)] max-w-3xl mx-auto">
            灵活的运营优化服务方案
          </p>
        </AnimatedContainer>
      </div>
    </section>
  )
}
