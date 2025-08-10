"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"

interface AnimatedContainerProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: "up" | "down" | "left" | "right" | "fade"
  duration?: number
}

export function AnimatedContainer({
  children,
  className = "",
  delay = 0,
  direction = "up",
  duration = 0.6
}: AnimatedContainerProps) {
  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 30 : direction === "down" ? -30 : 0,
      x: direction === "left" ? 30 : direction === "right" ? -30 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration,
        delay,
        ease: "easeInOut"
      }
    }
  } as const

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={variants}
    >
      {children}
    </motion.div>
  )
}

// 预设的动画组件
export function FadeIn({ children, className = "", delay = 0 }: { children: ReactNode, className?: string, delay?: number }) {
  return (
    <AnimatedContainer direction="fade" delay={delay} className={className}>
      {children}
    </AnimatedContainer>
  )
}

export function SlideUp({ children, className = "", delay = 0 }: { children: ReactNode, className?: string, delay?: number }) {
  return (
    <AnimatedContainer direction="up" delay={delay} className={className}>
      {children}
    </AnimatedContainer>
  )
}

export function SlideLeft({ children, className = "", delay = 0 }: { children: ReactNode, className?: string, delay?: number }) {
  return (
    <AnimatedContainer direction="left" delay={delay} className={className}>
      {children}
    </AnimatedContainer>
  )
}
