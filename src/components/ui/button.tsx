import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "primary" | "secondary" | "accent" | "outline" | "ghost"
  size?: "sm" | "md" | "lg" | "xl"
  loading?: boolean
  animated?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "md", loading = false, animated = true, children, disabled, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none relative overflow-hidden"

    const variants = {
      default: "bg-gray-100 text-gray-900 hover:bg-gray-200 focus:ring-gray-500",
      primary: "bg-[var(--tech-blue)] text-white hover:bg-[var(--tech-blue-dark)] focus:ring-[var(--tech-blue)] shadow-md hover:shadow-lg",
      secondary: "bg-[var(--ai-green)] text-white hover:bg-[var(--ai-green-dark)] focus:ring-[var(--ai-green)] shadow-md hover:shadow-lg",
      accent: "bg-gradient-to-r from-[var(--accent-orange)] to-[var(--accent-gold)] text-white hover:from-[var(--accent-orange)] hover:to-[var(--accent-orange)] focus:ring-[var(--accent-orange)] shadow-md hover:shadow-lg",
      outline: "border-2 border-[var(--tech-blue)] text-[var(--tech-blue)] hover:bg-[var(--tech-blue)] hover:text-white focus:ring-[var(--tech-blue)]",
      ghost: "text-[var(--tech-blue)] hover:bg-[var(--tech-blue)]/10 focus:ring-[var(--tech-blue)]"
    }

    const sizes = {
      sm: "px-3 py-1.5 text-sm",
      md: "px-4 py-2 text-base",
      lg: "px-6 py-3 text-lg",
      xl: "px-8 py-4 text-xl"
    }

    const ButtonComponent = "button"

    return (
      <ButtonComponent
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          loading && "cursor-not-allowed",
          className
        )}
        ref={ref}
        disabled={disabled || loading}

        {...props}
      >
        {/* Ripple effect background */}
        {animated && (
          <motion.div
            className="absolute inset-0 bg-white/20 rounded-lg"
            initial={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
        )}

        <span className="relative z-10 flex items-center">
          {loading && (
            <motion.svg
              className="-ml-1 mr-2 h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </motion.svg>
          )}
          {children}
        </span>
      </ButtonComponent>
    )
  }
)
Button.displayName = "Button"

export { Button }
