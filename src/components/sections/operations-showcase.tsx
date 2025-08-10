"use client"

import { AnimatedContainer } from "@/components/ui/animated-container"

export function OperationsShowcase() {
  return (
    <section className="py-20 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedContainer className="text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] mb-4">
            运营优化案例
          </h2>
          <p className="text-lg sm:text-xl text-[var(--text-muted)] max-w-3xl mx-auto">
            传统企业数字化转型成功案例
          </p>
        </AnimatedContainer>
      </div>
    </section>
  )
}
