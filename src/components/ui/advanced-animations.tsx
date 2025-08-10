"use client"

import { motion, useInView, AnimatePresence } from "framer-motion"
import { useEffect, useRef, ReactNode, useState } from "react"
// animation presets can be imported when needed from '@/lib/animations'

// 数字计数动画组件
interface CounterProps {
  from: number
  to: number
  duration?: number
  className?: string
  suffix?: string
  prefix?: string
}

export function AnimatedCounter({ from, to, duration = 2, className = "", suffix = "", prefix = "" }: CounterProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const [display, setDisplay] = useState(from)

  useEffect(() => {
    if (isInView) {
      const start = performance.now()
      const step = (now: number) => {
        const t = Math.min(1, (now - start) / (duration * 1000))
        const val = Math.round(from + (to - from) * t)
        setDisplay(val)
        if (t < 1) requestAnimationFrame(step)
      }
      requestAnimationFrame(step)
    }
  }, [isInView, from, to, duration])


  return (
    <motion.span
      ref={ref}
      className={className}
    >
      {prefix}{display}{suffix}
    </motion.span>
  )
}

// 打字机效果组件
interface TypewriterProps {
  text: string
  delay?: number
  speed?: number
  className?: string
  cursor?: boolean
}

export function TypewriterText({ text, delay = 0, speed = 50, className = "", cursor = true }: TypewriterProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <motion.div ref={ref} className={className}>
      <AnimatePresence>
        {isInView && (
          <motion.span
            initial={{ width: 0 }}
            animate={{ width: "auto" }}
            transition={{ duration: text.length * speed / 1000, delay, ease: "linear" }}
            style={{ overflow: "hidden", whiteSpace: "nowrap", display: "inline-block" }}
          >
            {text}
            {cursor && (
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
                className="ml-1"
              >
                |
              </motion.span>
            )}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

// 进度条动画组件
interface ProgressBarProps {
  progress: number
  height?: string
  color?: string
  backgroundColor?: string
  className?: string
  showPercentage?: boolean
}

export function AnimatedProgressBar({
  progress,
  height = "h-2",
  color = "bg-[var(--tech-blue)]",
  backgroundColor = "bg-gray-200",
  className = "",
  showPercentage = false
}: ProgressBarProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <div ref={ref} className={`w-full ${className}`}>
      <div className={`w-full ${height} ${backgroundColor} rounded-full overflow-hidden`}>
        <motion.div
          className={`${height} ${color} rounded-full`}
          initial={{ width: "0%" }}
          animate={isInView ? { width: `${progress}%` } : { width: "0%" }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
        />
      </div>
      {showPercentage && (
        <div className="mt-2 text-right">
          <AnimatedCounter from={0} to={progress} suffix="%" className="text-sm font-medium text-[var(--text-muted)]" />
        </div>
      )}
    </div>
  )
}

// 悬停卡片组件
interface HoverCardProps {
  children: ReactNode
  className?: string
  hoverScale?: number
  hoverY?: number
  rotateOnHover?: boolean
}

export function HoverCard({ children, className = "", hoverScale = 1.02, hoverY = -5, rotateOnHover = false }: HoverCardProps) {
  return (
    <motion.div
      className={className}
      whileHover={{
        scale: hoverScale,
        y: hoverY,
        rotateY: rotateOnHover ? 5 : 0,
        transition: { duration: 0.2, ease: "easeOut" }
      }}
      whileTap={{ scale: 0.98 }}
      style={{ transformStyle: "preserve-3d" }}
    >
      {children}
    </motion.div>
  )
}

// 磁性按钮组件
interface MagneticButtonProps {
  children: ReactNode
  className?: string
  strength?: number
}

export function MagneticButton({ children, className = "", strength = 0.3 }: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return

    const rect = ref.current.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2

    ref.current.style.transform = `translate(${x * strength}px, ${y * strength}px)`
  }

  const handleMouseLeave = () => {
    if (!ref.current) return
    ref.current.style.transform = "translate(0px, 0px)"
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transition: "transform 0.3s ease-out" }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.div>
  )
}

// 视差滚动组件
interface ParallaxProps {
  children: ReactNode
  speed?: number
  className?: string
}

export function ParallaxElement({ children, speed = 0.5, className = "" }: ParallaxProps) {
  const ref = useRef(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const handleScroll = () => {
      const scrolled = window.pageYOffset
      const rate = scrolled * -speed

      if (element) {
        (element as HTMLElement).style.transform = `translateY(${rate}px)`
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [speed])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}

// 波纹效果组件
interface RippleProps {
  children: ReactNode
  className?: string
  color?: string
}

export function RippleEffect({ children, className = "", color = "rgba(255, 255, 255, 0.6)" }: RippleProps) {
  const ref = useRef<HTMLDivElement>(null)

  const createRipple = (e: React.MouseEvent) => {
    if (!ref.current) return

    const rect = ref.current.getBoundingClientRect()
    const size = Math.max(rect.width, rect.height)
    const x = e.clientX - rect.left - size / 2
    const y = e.clientY - rect.top - size / 2

    const ripple = document.createElement("span")
    ripple.style.cssText = `
      position: absolute;
      border-radius: 50%;
      background: ${color};
      transform: scale(0);
      animation: ripple 600ms linear;
      left: ${x}px;
      top: ${y}px;
      width: ${size}px;
      height: ${size}px;
      pointer-events: none;
    `

    ref.current.appendChild(ripple)

    setTimeout(() => {
      ripple.remove()
    }, 600)
  }

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden ${className}`}
      onMouseDown={createRipple}
      style={{
        WebkitTapHighlightColor: "transparent"
      }}
    >
      {children}
      <style jsx>{`
        @keyframes ripple {
          to {
            transform: scale(4);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  )
}

// 浮动元素组件
interface FloatingElementProps {
  children: ReactNode
  className?: string
  amplitude?: number
  duration?: number
  delay?: number
}

export function FloatingElement({
  children,
  className = "",
  amplitude = 10,
  duration = 3,
  delay = 0
}: FloatingElementProps) {
  return (
    <motion.div
      className={className}
      animate={{
        y: [0, -amplitude, 0],
        rotate: [0, 2, 0, -2, 0]
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      {children}
    </motion.div>
  )
}

// 交错动画容器
interface StaggerContainerProps {
  children: ReactNode
  className?: string
  staggerDelay?: number
  childDelay?: number
}

export function StaggerContainer({
  children,
  className = "",
  staggerDelay = 0.1,
  childDelay = 0.2
}: StaggerContainerProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: childDelay
          }
        }
      }}
    >
      {children}
    </motion.div>
  )
}

// 交错动画子元素
interface StaggerItemProps {
  children: ReactNode
  className?: string
}

export function StaggerItem({ children, className = "" }: StaggerItemProps) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: [0.25, 0.25, 0, 1] }
        }
      }}
    >
      {children}
    </motion.div>
  )
}
