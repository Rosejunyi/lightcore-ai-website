# 慧视 AI 科技公司官网

> AI智见，引领企业数智未来

## 项目概述

「慧视」是 Lightcore AI 旗下的 AI 金融洞察引擎，专注为传统企业提供 AI 驱动的数字化转型解决方案。本项目为慧视官方网站 (www.lightcoreai.com)，采用现代化技术栈构建，提供专业、创新、值得信赖的用户体验。

## 🚀 技术栈

- **框架**: Next.js 15.4.5 (React 18)
- **样式**: Tailwind CSS 4.0
- **动画**: Framer Motion
- **语言**: TypeScript
- **图标**: Lucide React + Heroicons
- **UI组件**: Headless UI
- **部署**: Vercel (推荐)

## 📁 项目结构

```
lightcore-ai-website/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── about/             # 关于我们页面
│   │   ├── contact/           # 联系我们页面
│   │   ├── services/          # 服务与解决方案页面
│   │   ├── globals.css        # 全局样式和设计系统
│   │   ├── layout.tsx         # 根布局
│   │   └── page.tsx           # 首页
│   ├── components/            # 组件库
│   │   ├── layout/           # 布局组件
│   │   ├── sections/         # 页面区块组件
│   │   ├── seo/              # SEO优化组件
│   │   └── ui/               # 基础UI组件
│   └── lib/                  # 工具函数和配置
│       ├── animations.ts     # 动画配置
│       ├── responsive.ts     # 响应式工具
│       └── utils.ts          # 通用工具
├── public/                   # 静态资源
└── package.json             # 项目配置
```

## 🎨 设计系统

### 颜色方案
- **主色调**: 纯白色 (#FFFFFF) 和极浅暖灰 (#F5F5F5)
- **科技蓝**: #007AFF - #00BFFF (AI元素、按钮、链接)
- **AI绿**: #34C759 - #00CC44 (成功状态、积极信号)
- **橙金渐变**: #FF9500 - #FFCC00 (CTA、重点强调)
- **文本层级**: #000000 (主要) → #333333 (次要) → #888888 (辅助)

### 字体系统
- **主字体**: Inter + Poppins (现代、简洁、高可读性)
- **显示字体**: Poppins (用于标题和重要文本)

### 动画系统
- **进入动画**: 淡入上升、左右滑入、缩放进入
- **交互动画**: 悬停提升、点击缩放、磁性效果
- **加载动画**: 旋转、脉冲、波浪、骨架屏
- **页面过渡**: 平滑的路由切换动画

## 🌟 核心功能

### 已完成功能
- ✅ **响应式设计**: 完美适配所有设备
- ✅ **现代化UI**: 基于设计系统的一致性界面
- ✅ **动画效果**: 丰富的微交互和页面动画
- ✅ **性能优化**: 图片懒加载、代码分割、性能监控
- ✅ **SEO优化**: 结构化数据、元标签、语义化HTML
- ✅ **首页**: Hero区域、服务概览、案例展示
- ✅ **关于我们**: 公司愿景、创始人介绍、技术栈
- ✅ **服务页面**: 详细的解决方案介绍
- ✅ **联系页面**: 专业询盘表单和联系信息
- ✅ **AI智能客服**: 集成n8n webhook的实时AI对话功能

### 待完成功能
- ⏳ **AI前沿洞察**: 博客系统和内容管理
- ✅ **AI机器人**: 智能客服对话功能 (已集成n8n webhook)
- ⏳ **内容填充**: 真实内容和最终测试

## 🚀 快速开始

### 环境要求
- Node.js 18.0 或更高版本
- npm 或 yarn 包管理器

### 安装和运行

```bash
# 进入项目目录
cd lightcore-ai-website

# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 启动生产服务器
npm start
```

### 开发服务器
访问 [http://localhost:3000](http://localhost:3000) 查看网站

## 📱 响应式设计

网站采用移动优先的响应式设计：

- **移动端** (< 768px): 单列布局，简化导航
- **平板端** (768px - 1024px): 两列布局，适中间距
- **桌面端** (> 1024px): 多列布局，完整功能

## ⚡ 性能优化

### 已实现优化
- **图片优化**: Next.js Image组件，自动格式转换和尺寸优化
- **代码分割**: 路由级别和组件级别的懒加载
- **CSS优化**: Tailwind CSS的JIT编译和未使用样式清理
- **字体优化**: Google Fonts的自动优化加载
- **缓存策略**: 静态资源的长期缓存

### 性能监控
开发环境下提供实时性能监控，包括：
- Core Web Vitals (FCP, LCP, FID, CLS)
- 加载时间指标 (TTFB, DOM Ready, Load Time)
- 性能评分和优化建议

## 🔍 SEO优化

### 结构化数据
- 组织信息 (Organization Schema)
- 网站信息 (Website Schema)
- 服务信息 (Service Schema)
- 面包屑导航 (Breadcrumb Schema)

### 元标签优化
- 页面标题和描述
- Open Graph标签
- Twitter Card标签
- 关键词和作者信息

## 🎯 核心特色

### 设计特色
- **极简风格**: 明亮洁净的浅色调，充足留白
- **科技感**: AI数据流动画、智能网格效果
- **专业性**: 现代字体、精确间距、一致性设计
- **交互性**: 微动画、平滑过渡、智能反馈

### 技术特色
- **现代化架构**: Next.js 15 + React 18 + TypeScript
- **性能优先**: 自动优化、懒加载、缓存策略
- **可维护性**: 组件化设计、类型安全、代码规范
- **可扩展性**: 模块化结构、配置化设计

## 🤖 AI集成说明

### AI智能客服功能
项目已成功集成n8n webhook，实现了真实的AI对话功能：

- **Webhook URL**: `https://n8nprd.aifunbox.com/webhook/lightcoreai`
- **功能特性**:
  - 专门的全屏AI对话页面 (/ai-chat)
  - 实时AI对话响应
  - 格式化文本显示（支持Markdown）
  - 消息状态指示器（发送中、已发送、错误）
  - 自动重试机制（最多3次）
  - 错误处理和用户友好的提示
  - 会话管理和用户标识
  - 多入口访问（导航栏、首页、联系页面）
  - 响应式对话界面

### 测试页面
访问 `/test-api` 页面可以测试AI集成功能：
- 测试webhook连接
- 发送测试消息
- 查看服务状态
- 查看详细的API配置信息

### 环境配置
复制 `.env.example` 为 `.env.local` 并配置相应的环境变量：
```bash
cp .env.example .env.local
```

## 📞 联系信息

- **创始人**: Rosa Zhao
- **邮箱**: junyichao5@gmail.com
- **网站**: www.lightcoreai.com

## 📄 许可证

本项目为 Lightcore AI 专有项目，版权所有。

---

**慧视 - AI智见，引领企业数智未来**
