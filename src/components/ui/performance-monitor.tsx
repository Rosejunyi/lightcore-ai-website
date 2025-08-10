"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface PerformanceMetrics {
  fcp: number // First Contentful Paint
  lcp: number // Largest Contentful Paint
  fid: number // First Input Delay
  cls: number // Cumulative Layout Shift
  ttfb: number // Time to First Byte
  loadTime: number
  domContentLoaded: number
}

interface PerformanceMonitorProps {
  showInDevelopment?: boolean
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right"
}

export function PerformanceMonitor({ 
  showInDevelopment = true, 
  position = "bottom-right" 
}: PerformanceMonitorProps) {
  const [metrics, setMetrics] = useState<Partial<PerformanceMetrics>>({})
  const [isVisible, setIsVisible] = useState(false)
  const [isDevelopment, setIsDevelopment] = useState(false)

  useEffect(() => {
    setIsDevelopment(process.env.NODE_ENV === 'development')
  }, [])

  useEffect(() => {
    if (!showInDevelopment && !isDevelopment) return

    // 收集性能指标
    const collectMetrics = () => {
      if (typeof window === 'undefined') return

      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
      const paint = performance.getEntriesByType('paint')

      const newMetrics: Partial<PerformanceMetrics> = {}

      // 基础时间指标
      if (navigation) {
        newMetrics.ttfb = navigation.responseStart - navigation.requestStart
        const navStart = navigation.startTime ?? 0
        newMetrics.domContentLoaded = navigation.domContentLoadedEventEnd - navStart
        newMetrics.loadTime = navigation.loadEventEnd - navStart
      }

      // Paint 指标
      paint.forEach((entry) => {
        if (entry.name === 'first-contentful-paint') {
          newMetrics.fcp = entry.startTime
        }
      })

      // Web Vitals
      if ('PerformanceObserver' in window) {
        // LCP (Largest Contentful Paint)
        try {
          const lcpObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries()
            const lastEntry = entries[entries.length - 1]
            newMetrics.lcp = lastEntry.startTime
            setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }))
          })
          lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] })
        } catch {
          console.warn('LCP observation not supported')
        }

        // FID (First Input Delay)
        try {
          const fidObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries()
            entries.forEach((entry) => {
              const fi = entry as PerformanceEventTiming
              newMetrics.fid = fi.processingStart - fi.startTime
              setMetrics(prev => ({ ...prev, fid: fi.processingStart - fi.startTime }))
            })
          })
          fidObserver.observe({ entryTypes: ['first-input'] })
        } catch {
          console.warn('FID observation not supported')
        }

        // CLS (Cumulative Layout Shift)
        try {
          let clsValue = 0
          const clsObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries()
            entries.forEach((entry: PerformanceEntry & { value?: number; hadRecentInput?: boolean }) => {
              if (!entry.hadRecentInput) {
                const v = (entry as PerformanceEntry & { value?: number }).value ?? 0
                clsValue += v
                newMetrics.cls = clsValue
                setMetrics(prev => ({ ...prev, cls: clsValue }))
              }
            })
          })
          clsObserver.observe({ entryTypes: ['layout-shift'] })
        } catch {
          console.warn('CLS observation not supported')
        }
      }

      setMetrics(prev => ({ ...prev, ...newMetrics }))
    }

    // 延迟收集指标，确保页面加载完成
    const timer = setTimeout(collectMetrics, 1000)

    return () => clearTimeout(timer)
  }, [showInDevelopment, isDevelopment])

  if (!showInDevelopment && !isDevelopment) return null

  const formatTime = (time: number) => {
    if (time < 1000) return `${Math.round(time)}ms`
    return `${(time / 1000).toFixed(2)}s`
  }

  const getScoreColor = (metric: string, value: number) => {
    const thresholds: Record<string, { good: number; poor: number }> = {
      fcp: { good: 1800, poor: 3000 },
      lcp: { good: 2500, poor: 4000 },
      fid: { good: 100, poor: 300 },
      cls: { good: 0.1, poor: 0.25 },
      ttfb: { good: 800, poor: 1800 }
    }

    const threshold = thresholds[metric]
    if (!threshold) return 'text-gray-600'

    if (value <= threshold.good) return 'text-green-600'
    if (value <= threshold.poor) return 'text-yellow-600'
    return 'text-red-600'
  }

  const positionClasses = {
    'top-left': 'top-4 left-4',
    'top-right': 'top-4 right-4',
    'bottom-left': 'bottom-4 left-4',
    'bottom-right': 'bottom-4 right-4'
  }

  return (
    <div className={`fixed ${positionClasses[position]} z-50`}>
      <motion.button
        onClick={() => setIsVisible(!isVisible)}
        className="bg-black/80 text-white px-3 py-2 rounded-lg text-xs font-mono hover:bg-black/90 transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        ⚡ Perf
      </motion.button>

      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            className="absolute top-full mt-2 bg-white border border-gray-200 rounded-lg shadow-lg p-4 min-w-[280px] font-mono text-xs"
          >
            <h3 className="font-semibold text-gray-800 mb-3 text-sm">Performance Metrics</h3>
            
            <div className="space-y-2">
              {/* Core Web Vitals */}
              <div className="border-b border-gray-100 pb-2 mb-2">
                <h4 className="font-medium text-gray-700 mb-1">Core Web Vitals</h4>
                
                {metrics.fcp && (
                  <div className="flex justify-between">
                    <span>FCP:</span>
                    <span className={getScoreColor('fcp', metrics.fcp)}>
                      {formatTime(metrics.fcp)}
                    </span>
                  </div>
                )}
                
                {metrics.lcp && (
                  <div className="flex justify-between">
                    <span>LCP:</span>
                    <span className={getScoreColor('lcp', metrics.lcp)}>
                      {formatTime(metrics.lcp)}
                    </span>
                  </div>
                )}
                
                {metrics.fid !== undefined && (
                  <div className="flex justify-between">
                    <span>FID:</span>
                    <span className={getScoreColor('fid', metrics.fid)}>
                      {formatTime(metrics.fid)}
                    </span>
                  </div>
                )}
                
                {metrics.cls !== undefined && (
                  <div className="flex justify-between">
                    <span>CLS:</span>
                    <span className={getScoreColor('cls', metrics.cls)}>
                      {metrics.cls.toFixed(3)}
                    </span>
                  </div>
                )}
              </div>

              {/* Other Metrics */}
              <div>
                <h4 className="font-medium text-gray-700 mb-1">Other Metrics</h4>
                
                {metrics.ttfb && (
                  <div className="flex justify-between">
                    <span>TTFB:</span>
                    <span className={getScoreColor('ttfb', metrics.ttfb)}>
                      {formatTime(metrics.ttfb)}
                    </span>
                  </div>
                )}
                
                {metrics.domContentLoaded && (
                  <div className="flex justify-between">
                    <span>DOM Ready:</span>
                    <span className="text-gray-600">
                      {formatTime(metrics.domContentLoaded)}
                    </span>
                  </div>
                )}
                
                {metrics.loadTime && (
                  <div className="flex justify-between">
                    <span>Load Time:</span>
                    <span className="text-gray-600">
                      {formatTime(metrics.loadTime)}
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Score Legend */}
            <div className="mt-3 pt-2 border-t border-gray-100">
              <div className="flex justify-between text-xs">
                <span className="text-green-600">● Good</span>
                <span className="text-yellow-600">● Needs Improvement</span>
                <span className="text-red-600">● Poor</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

// 性能警告组件
interface PerformanceWarningProps {
  threshold?: number
  message?: string
}

export function PerformanceWarning({ 
  threshold = 3000, 
  message = "页面加载较慢，正在优化中..." 
}: PerformanceWarningProps) {
  const [showWarning, setShowWarning] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWarning(true)
    }, threshold)

    const handleLoad = () => {
      clearTimeout(timer)
      setShowWarning(false)
    }

    window.addEventListener('load', handleLoad)

    return () => {
      clearTimeout(timer)
      window.removeEventListener('load', handleLoad)
    }
  }, [threshold])

  return (
    <AnimatePresence>
      {showWarning && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-yellow-100 border border-yellow-300 text-yellow-800 px-4 py-2 rounded-lg shadow-lg"
        >
          <div className="flex items-center space-x-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-medium">{message}</span>
            <button
              onClick={() => setShowWarning(false)}
              className="ml-2 text-yellow-600 hover:text-yellow-800"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
