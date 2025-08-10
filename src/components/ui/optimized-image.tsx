"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

interface OptimizedImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  priority?: boolean
  quality?: number
  placeholder?: "blur" | "empty"
  blurDataURL?: string
  sizes?: string
  fill?: boolean
  objectFit?: "contain" | "cover" | "fill" | "none" | "scale-down"
  loading?: "lazy" | "eager"
  onLoad?: () => void
  onError?: () => void
  fallback?: string
  showLoadingState?: boolean
  rounded?: boolean
  shadow?: boolean
}

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  className = "",
  priority = false,
  quality = 75,
  placeholder = "empty",
  blurDataURL,
  sizes,
  fill = false,
  objectFit = "cover",
  loading = "lazy",
  onLoad,
  onError,
  fallback = "/placeholder-image.jpg",
  showLoadingState = true,
  rounded = false,
  shadow = false,
  ...props
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)
  const [isInView, setIsInView] = useState(false)
  const imgRef = useRef<HTMLDivElement>(null)

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (!imgRef.current || priority) {
      setIsInView(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      {
        rootMargin: "50px",
        threshold: 0.1
      }
    )

    observer.observe(imgRef.current)

    return () => observer.disconnect()
  }, [priority])

  const handleLoad = () => {
    setIsLoading(false)
    onLoad?.()
  }

  const handleError = () => {
    setHasError(true)
    setIsLoading(false)
    onError?.()
  }

  const imageClasses = cn(
    "transition-all duration-300",
    rounded && "rounded-lg",
    shadow && "shadow-lg",
    className
  )

  const containerClasses = cn(
    "relative overflow-hidden",
    rounded && "rounded-lg",
    fill ? "w-full h-full" : ""
  )

  return (
    <div ref={imgRef} className={containerClasses}>
      {/* Loading State */}
      <AnimatePresence>
        {isLoading && showLoadingState && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={cn(
              "absolute inset-0 bg-gray-200 flex items-center justify-center",
              rounded && "rounded-lg"
            )}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="w-6 h-6 border-2 border-[var(--tech-blue)] border-t-transparent rounded-full"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Error State */}
      {hasError ? (
        <div className={cn(
          "flex items-center justify-center bg-gray-100 text-gray-400",
          fill ? "absolute inset-0" : `w-[${width}px] h-[${height}px]`,
          rounded && "rounded-lg"
        )}>
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
          </svg>
        </div>
      ) : (
        // Main Image
        isInView && (
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative"
          >
            <Image
              src={hasError ? fallback : src}
              alt={alt}
              width={fill ? undefined : width}
              height={fill ? undefined : height}
              fill={fill}
              priority={priority}
              quality={quality}
              placeholder={placeholder}
              blurDataURL={blurDataURL}
              sizes={sizes}
              loading={loading}
              onLoad={handleLoad}
              onError={handleError}
              className={cn(
                imageClasses,
                `object-${objectFit}`,
                isLoading && "opacity-0"
              )}
              {...props}
            />
          </motion.div>
        )
      )}
    </div>
  )
}

// 响应式图片组件
interface ResponsiveImageProps extends Omit<OptimizedImageProps, 'width' | 'height' | 'sizes'> {
  breakpoints: {
    mobile: { width: number; height: number }
    tablet: { width: number; height: number }
    desktop: { width: number; height: number }
  }
}

export function ResponsiveImage({ breakpoints, ...props }: ResponsiveImageProps) {
  const sizes = `
    (max-width: 768px) ${breakpoints.mobile.width}px,
    (max-width: 1024px) ${breakpoints.tablet.width}px,
    ${breakpoints.desktop.width}px
  `

  return (
    <OptimizedImage
      {...props}
      width={breakpoints.desktop.width}
      height={breakpoints.desktop.height}
      sizes={sizes}
    />
  )
}

// 头像组件
interface AvatarProps extends Omit<OptimizedImageProps, 'width' | 'height'> {
  size?: "sm" | "md" | "lg" | "xl"
  name?: string
}

export function Avatar({ size = "md", name, className, ...props }: AvatarProps) {
  const sizes = {
    sm: { width: 32, height: 32, text: "text-sm" },
    md: { width: 48, height: 48, text: "text-base" },
    lg: { width: 64, height: 64, text: "text-lg" },
    xl: { width: 96, height: 96, text: "text-xl" }
  }

  const sizeConfig = sizes[size]

  return (
    <div className={cn("relative", className)}>
      <OptimizedImage
        {...props}
        width={sizeConfig.width}
        height={sizeConfig.height}
        className="rounded-full"
        rounded={true}
        fallback={`https://ui-avatars.com/api/?name=${encodeURIComponent(name || 'User')}&size=${sizeConfig.width}&background=007AFF&color=fff`}
      />
    </div>
  )
}

// 图片画廊组件
interface ImageGalleryProps {
  images: Array<{
    src: string
    alt: string
    caption?: string
  }>
  className?: string
  columns?: number
  gap?: number
}

export function ImageGallery({ images, className = "", columns = 3, gap = 4 }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  return (
    <>
      <div className={cn(
        `grid gap-${gap}`,
        `grid-cols-1 md:grid-cols-${Math.min(columns, 2)} lg:grid-cols-${columns}`,
        className
      )}>
        {images.map((image, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="cursor-pointer"
            onClick={() => setSelectedImage(index)}
          >
            <OptimizedImage
              src={image.src}
              alt={image.alt}
              width={400}
              height={300}
              className="w-full h-48 object-cover"
              rounded={true}
              shadow={true}
            />
            {image.caption && (
              <p className="mt-2 text-sm text-[var(--text-muted)] text-center">
                {image.caption}
              </p>
            )}
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <OptimizedImage
                src={images[selectedImage].src}
                alt={images[selectedImage].alt}
                width={800}
                height={600}
                className="max-w-full max-h-full object-contain"
                priority={true}
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
