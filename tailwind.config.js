/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // 主色调：纯白色或极浅的暖灰色背景
        background: {
          DEFAULT: '#FFFFFF',
          warm: '#F5F5F5',
          'warm-light': '#FAFAFA',
        },
        
        // 强调色：活力科技蓝
        'tech-blue': {
          50: '#E6F3FF',
          100: '#CCE7FF',
          200: '#99CFFF',
          300: '#66B7FF',
          400: '#339FFF',
          500: '#007AFF', // 主要科技蓝
          600: '#0066CC',
          700: '#004C99',
          800: '#003366',
          900: '#001933',
        },
        
        // 强调色：清澈AI绿
        'ai-green': {
          50: '#E6F7ED',
          100: '#CCEFDB',
          200: '#99DFB7',
          300: '#66CF93',
          400: '#33BF6F',
          500: '#34C759', // 主要AI绿
          600: '#00CC44',
          700: '#009933',
          800: '#006622',
          900: '#003311',
        },
        
        // CTA渐变色：柔和的橙/金
        'warm-orange': {
          50: '#FFF7E6',
          100: '#FFEFCC',
          200: '#FFDF99',
          300: '#FFCF66',
          400: '#FFBF33',
          500: '#FF9500', // 主要橙色
          600: '#FFCC00', // 金色
          700: '#CC9900',
          800: '#996600',
          900: '#663300',
        },
        
        // 文本颜色
        text: {
          primary: '#000000',
          secondary: '#333333',
          muted: '#888888',
          light: '#CCCCCC',
        },
        
        // 边框和分割线
        border: {
          DEFAULT: '#E5E5E5',
          light: '#F0F0F0',
          muted: '#D1D5DB',
        },
      },
      
      fontFamily: {
        sans: ['Inter', 'Poppins', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        display: ['Poppins', 'Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },
      
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'medium': '0 4px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 30px -5px rgba(0, 0, 0, 0.05)',
        'large': '0 10px 40px -10px rgba(0, 0, 0, 0.1), 0 20px 50px -10px rgba(0, 0, 0, 0.05)',
        'tech': '0 0 20px rgba(0, 122, 255, 0.15)',
        'ai': '0 0 20px rgba(52, 199, 89, 0.15)',
      },
      
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'pulse-soft': 'pulseSoft 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(0, 122, 255, 0.2)' },
          '100%': { boxShadow: '0 0 20px rgba(0, 122, 255, 0.4)' },
        },
      },
      
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
