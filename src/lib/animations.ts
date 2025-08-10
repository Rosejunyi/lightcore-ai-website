// 动画配置和预设
export const animations = {
  // 基础动画时长
  duration: {
    fast: 0.15,
    normal: 0.3,
    slow: 0.5,
    slower: 0.8
  },

  // 缓动函数
  easing: {
    easeOut: [0.25, 0.25, 0, 1],
    easeIn: [0.25, 0, 0.25, 1],
    easeInOut: [0.25, 0.1, 0.25, 1],
    spring: [0.68, -0.55, 0.265, 1.55],
    bounce: [0.68, -0.6, 0.32, 1.6]
  },

  // 页面过渡动画
  pageTransition: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.3, ease: [0.25, 0.25, 0, 1] }
  },

  // 元素进入动画
  fadeInUp: {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.25, 0.25, 0, 1] }
  },

  fadeInDown: {
    initial: { opacity: 0, y: -30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.25, 0.25, 0, 1] }
  },

  fadeInLeft: {
    initial: { opacity: 0, x: -30 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: [0.25, 0.25, 0, 1] }
  },

  fadeInRight: {
    initial: { opacity: 0, x: 30 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: [0.25, 0.25, 0, 1] }
  },

  // 缩放动画
  scaleIn: {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.4, ease: [0.25, 0.25, 0, 1] }
  },

  // 悬停动画
  hover: {
    scale: 1.05,
    transition: { duration: 0.2, ease: [0.25, 0.25, 0, 1] }
  },

  hoverLift: {
    y: -5,
    transition: { duration: 0.2, ease: [0.25, 0.25, 0, 1] }
  },

  // 点击动画
  tap: {
    scale: 0.95,
    transition: { duration: 0.1, ease: [0.25, 0.25, 0, 1] }
  },

  // 加载动画
  loading: {
    rotate: 360,
    transition: { duration: 1, ease: "linear", repeat: Infinity }
  },

  // 脉冲动画
  pulse: {
    scale: [1, 1.05, 1],
    transition: { duration: 2, ease: "easeInOut", repeat: Infinity }
  },

  // 浮动动画
  float: {
    y: [0, -10, 0],
    transition: { duration: 3, ease: "easeInOut", repeat: Infinity }
  },

  // 渐变背景动画
  gradientShift: {
    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
    transition: { duration: 5, ease: "linear", repeat: Infinity }
  },

  // 文字打字机效果
  typewriter: {
    width: ["0%", "100%"],
    transition: { duration: 2, ease: "easeInOut" }
  },

  // 数字计数动画
  counter: {
    transition: { duration: 2, ease: "easeOut" }
  },

  // 进度条动画
  progressBar: {
    width: ["0%", "100%"],
    transition: { duration: 1.5, ease: "easeOut" }
  },

  // 卡片翻转动画
  cardFlip: {
    rotateY: 180,
    transition: { duration: 0.6, ease: [0.25, 0.25, 0, 1] }
  },

  // 滑动动画
  slideInFromBottom: {
    initial: { y: "100%", opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: "100%", opacity: 0 },
    transition: { duration: 0.4, ease: [0.25, 0.25, 0, 1] }
  },

  slideInFromTop: {
    initial: { y: "-100%", opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: "-100%", opacity: 0 },
    transition: { duration: 0.4, ease: [0.25, 0.25, 0, 1] }
  },

  // 模态框动画
  modal: {
    initial: { opacity: 0, scale: 0.9, y: 20 },
    animate: { opacity: 1, scale: 1, y: 0 },
    exit: { opacity: 0, scale: 0.9, y: 20 },
    transition: { duration: 0.3, ease: [0.25, 0.25, 0, 1] }
  },

  // 背景遮罩动画
  overlay: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.2 }
  },

  // 导航菜单动画
  menuSlide: {
    initial: { x: "100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "100%", opacity: 0 },
    transition: { duration: 0.3, ease: [0.25, 0.25, 0, 1] }
  },

  // 列表项动画
  listItem: (index: number) => ({
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    transition: { 
      duration: 0.4, 
      delay: index * 0.1,
      ease: [0.25, 0.25, 0, 1] 
    }
  }),

  // 交错动画
  stagger: {
    animate: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  },

  staggerFast: {
    animate: {
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    }
  },

  // 路径绘制动画
  pathDraw: {
    pathLength: [0, 1],
    transition: { duration: 2, ease: "easeInOut" }
  },

  // 波纹效果
  ripple: {
    scale: [0, 4],
    opacity: [1, 0],
    transition: { duration: 0.6, ease: "easeOut" }
  }
}

// 视口动画配置
export const viewportConfig = {
  once: true,
  margin: "-50px",
  amount: 0.3
}

// 响应式动画配置
export const responsiveAnimations = {
  mobile: {
    // 移动端减少动画复杂度
    duration: 0.2,
    distance: 20
  },
  desktop: {
    // 桌面端完整动画
    duration: 0.6,
    distance: 30
  }
}

// 性能优化配置
export const performanceConfig = {
  // 减少动画的媒体查询
  reduceMotion: "(prefers-reduced-motion: reduce)",
  
  // 低性能设备检测
  lowPerformance: {
    // 简化动画
    simplify: true,
    // 减少动画时长
    reduceDuration: 0.5
  }
}
