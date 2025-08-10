"use client"

import { AnimatedContainer } from "@/components/ui/animated-container"

export function ContentGenerationFeatures() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedContainer className="text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] mb-4">
            功能特性
          </h2>
          <p className="text-lg sm:text-xl text-[var(--text-muted)] max-w-3xl mx-auto">
            强大的AI内容生成功能，满足各种创作需求
          </p>
        </AnimatedContainer>
      </div>
    </section>
  )
}
