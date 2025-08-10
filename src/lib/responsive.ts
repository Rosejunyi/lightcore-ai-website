// 响应式断点配置
export const breakpoints = {
  xs: 320,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536
} as const

// 媒体查询工具
export const mediaQueries = {
  xs: `(min-width: ${breakpoints.xs}px)`,
  sm: `(min-width: ${breakpoints.sm}px)`,
  md: `(min-width: ${breakpoints.md}px)`,
  lg: `(min-width: ${breakpoints.lg}px)`,
  xl: `(min-width: ${breakpoints.xl}px)`,
  '2xl': `(min-width: ${breakpoints['2xl']}px)`,
  
  // 最大宽度查询
  maxXs: `(max-width: ${breakpoints.xs - 1}px)`,
  maxSm: `(max-width: ${breakpoints.sm - 1}px)`,
  maxMd: `(max-width: ${breakpoints.md - 1}px)`,
  maxLg: `(max-width: ${breakpoints.lg - 1}px)`,
  maxXl: `(max-width: ${breakpoints.xl - 1}px)`,
  max2xl: `(max-width: ${breakpoints['2xl'] - 1}px)`,
  
  // 范围查询
  smToMd: `(min-width: ${breakpoints.sm}px) and (max-width: ${breakpoints.md - 1}px)`,
  mdToLg: `(min-width: ${breakpoints.md}px) and (max-width: ${breakpoints.lg - 1}px)`,
  lgToXl: `(min-width: ${breakpoints.lg}px) and (max-width: ${breakpoints.xl - 1}px)`,
  
  // 设备类型查询
  mobile: `(max-width: ${breakpoints.md - 1}px)`,
  tablet: `(min-width: ${breakpoints.md}px) and (max-width: ${breakpoints.lg - 1}px)`,
  desktop: `(min-width: ${breakpoints.lg}px)`,
  
  // 特殊查询
  touch: '(hover: none) and (pointer: coarse)',
  hover: '(hover: hover) and (pointer: fine)',
  reducedMotion: '(prefers-reduced-motion: reduce)',
  darkMode: '(prefers-color-scheme: dark)',
  highContrast: '(prefers-contrast: high)',
  portrait: '(orientation: portrait)',
  landscape: '(orientation: landscape)'
} as const

// 响应式字体大小
export const responsiveFontSizes = {
  xs: {
    mobile: 'text-xs',
    tablet: 'text-sm',
    desktop: 'text-sm'
  },
  sm: {
    mobile: 'text-sm',
    tablet: 'text-base',
    desktop: 'text-base'
  },
  base: {
    mobile: 'text-base',
    tablet: 'text-lg',
    desktop: 'text-lg'
  },
  lg: {
    mobile: 'text-lg',
    tablet: 'text-xl',
    desktop: 'text-xl'
  },
  xl: {
    mobile: 'text-xl',
    tablet: 'text-2xl',
    desktop: 'text-2xl'
  },
  '2xl': {
    mobile: 'text-2xl',
    tablet: 'text-3xl',
    desktop: 'text-3xl'
  },
  '3xl': {
    mobile: 'text-3xl',
    tablet: 'text-4xl',
    desktop: 'text-4xl'
  },
  '4xl': {
    mobile: 'text-4xl',
    tablet: 'text-5xl',
    desktop: 'text-5xl'
  },
  '5xl': {
    mobile: 'text-5xl',
    tablet: 'text-6xl',
    desktop: 'text-6xl'
  }
} as const

// 响应式间距
export const responsiveSpacing = {
  xs: {
    mobile: 'p-2',
    tablet: 'p-3',
    desktop: 'p-4'
  },
  sm: {
    mobile: 'p-4',
    tablet: 'p-6',
    desktop: 'p-6'
  },
  md: {
    mobile: 'p-6',
    tablet: 'p-8',
    desktop: 'p-8'
  },
  lg: {
    mobile: 'p-8',
    tablet: 'p-10',
    desktop: 'p-12'
  },
  xl: {
    mobile: 'p-10',
    tablet: 'p-12',
    desktop: 'p-16'
  }
} as const

// 响应式网格
export const responsiveGrid = {
  '1-2-3': 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
  '1-2-4': 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  '1-3-6': 'grid-cols-1 md:grid-cols-3 lg:grid-cols-6',
  '2-4-6': 'grid-cols-2 md:grid-cols-4 lg:grid-cols-6',
  '1-1-2': 'grid-cols-1 lg:grid-cols-2',
  '1-2-2': 'grid-cols-1 md:grid-cols-2',
  auto: 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'
} as const

// 容器最大宽度
export const containerSizes = {
  sm: 'max-w-screen-sm',
  md: 'max-w-screen-md', 
  lg: 'max-w-screen-lg',
  xl: 'max-w-screen-xl',
  '2xl': 'max-w-screen-2xl',
  '3xl': 'max-w-[1600px]',
  '4xl': 'max-w-[1800px]',
  '5xl': 'max-w-[2000px]',
  full: 'max-w-full',
  none: 'max-w-none'
} as const

// 响应式工具函数
export function getResponsiveClass(
  mobile: string,
  tablet?: string,
  desktop?: string
): string {
  let classes = mobile
  
  if (tablet) {
    classes += ` md:${tablet}`
  }
  
  if (desktop) {
    classes += ` lg:${desktop}`
  }
  
  return classes
}

// 检测设备类型
export function getDeviceType(): 'mobile' | 'tablet' | 'desktop' {
  if (typeof window === 'undefined') return 'desktop'
  
  const width = window.innerWidth
  
  if (width < breakpoints.md) return 'mobile'
  if (width < breakpoints.lg) return 'tablet'
  return 'desktop'
}

// 检测是否为触摸设备
export function isTouchDevice(): boolean {
  if (typeof window === 'undefined') return false
  
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0
}

// 检测是否支持悬停
export function supportsHover(): boolean {
  if (typeof window === 'undefined') return true
  
  return window.matchMedia('(hover: hover)').matches
}

// 检测用户是否偏好减少动画
export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false
  
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

// 检测暗色模式偏好
export function prefersDarkMode(): boolean {
  if (typeof window === 'undefined') return false
  
  return window.matchMedia('(prefers-color-scheme: dark)').matches
}

// 响应式图片尺寸
export const responsiveImageSizes = {
  avatar: {
    mobile: 'w-12 h-12',
    tablet: 'w-16 h-16',
    desktop: 'w-20 h-20'
  },
  icon: {
    mobile: 'w-6 h-6',
    tablet: 'w-8 h-8',
    desktop: 'w-10 h-10'
  },
  logo: {
    mobile: 'w-32 h-8',
    tablet: 'w-40 h-10',
    desktop: 'w-48 h-12'
  },
  hero: {
    mobile: 'w-full h-64',
    tablet: 'w-full h-80',
    desktop: 'w-full h-96'
  }
} as const

// 性能优化配置
export const performanceConfig = {
  // 图片懒加载配置
  lazyLoading: {
    rootMargin: '50px',
    threshold: 0.1
  },
  
  // 动画性能配置
  animations: {
    // 在低性能设备上禁用复杂动画
    disableOnLowPerformance: true,
    // 减少动画时长
    reducedDuration: 0.2,
    // 简化动画效果
    simplifiedEffects: true
  },
  
  // 代码分割配置
  codeSplitting: {
    // 路由级别分割
    routeLevel: true,
    // 组件级别分割
    componentLevel: true,
    // 第三方库分割
    vendorSplit: true
  }
} as const

// 可访问性配置
export const accessibilityConfig = {
  // 焦点管理
  focus: {
    // 跳过链接
    skipLinks: true,
    // 焦点陷阱
    focusTrap: true,
    // 焦点指示器
    focusIndicator: true
  },
  
  // 键盘导航
  keyboard: {
    // 支持Tab导航
    tabNavigation: true,
    // 支持方向键导航
    arrowNavigation: true,
    // 支持快捷键
    shortcuts: true
  },
  
  // 屏幕阅读器
  screenReader: {
    // ARIA标签
    ariaLabels: true,
    // 语义化HTML
    semanticHTML: true,
    // 实时区域
    liveRegions: true
  }
} as const
