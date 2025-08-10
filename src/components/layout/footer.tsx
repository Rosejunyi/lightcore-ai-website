import Link from "next/link"
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react"

const footerLinks = {
  company: [
    { name: "关于我们", href: "/about" },
    { name: "企业文化", href: "/about#culture" },
    { name: "团队介绍", href: "/about#team" },
    { name: "联系我们", href: "/contact" }
  ],
  services: [
    { name: "AI金融洞察", href: "/services/financial-ai" },
    { name: "内容生成方案", href: "/services/content-generation" },
    { name: "运营优化", href: "/services/operations" },
    { name: "定制化解决方案", href: "/services/custom" }
  ],
  resources: [
    { name: "AI前沿洞察", href: "/insights" },
    { name: "技术博客", href: "/insights/tech" },
    { name: "行业报告", href: "/insights/reports" },
    { name: "成功案例", href: "/case-studies" }
  ],
  legal: [
    { name: "隐私政策", href: "/privacy" },
    { name: "服务条款", href: "/terms" },
    { name: "Cookie政策", href: "/cookies" },
    { name: "免责声明", href: "/disclaimer" }
  ]
}

const socialLinks = [
  { name: "GitHub", icon: Github, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" }
]

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-[var(--tech-blue)] to-[var(--ai-green)] rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">慧</span>
                </div>
                <div>
                  <span className="text-xl font-bold text-[var(--text-primary)]">慧视</span>
                  <span className="text-sm text-[var(--text-muted)] ml-2">Lightcore AI</span>
                </div>
              </div>
              <p className="text-[var(--text-muted)] mb-6 leading-relaxed">
                AI智见，引领企业数智未来。专注为传统企业提供AI驱动的数字化转型解决方案，助力企业实现智能化升级。
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-sm text-[var(--text-muted)]">
                  <Mail className="w-4 h-4 text-[var(--tech-blue)]" />
                  <span>junyichao5@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-[var(--text-muted)]">
                  <Phone className="w-4 h-4 text-[var(--tech-blue)]" />
                  <span>联系人：Rosa Zhao</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-[var(--text-muted)]">
                  <MapPin className="w-4 h-4 text-[var(--tech-blue)]" />
                  <span>www.lightcoreai.com</span>
                </div>
              </div>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="text-sm font-semibold text-[var(--text-primary)] uppercase tracking-wider mb-4">
                公司
              </h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-[var(--text-muted)] hover:text-[var(--tech-blue)] transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services Links */}
            <div>
              <h3 className="text-sm font-semibold text-[var(--text-primary)] uppercase tracking-wider mb-4">
                服务
              </h3>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-[var(--text-muted)] hover:text-[var(--tech-blue)] transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources Links */}
            <div>
              <h3 className="text-sm font-semibold text-[var(--text-primary)] uppercase tracking-wider mb-4">
                资源
              </h3>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-[var(--text-muted)] hover:text-[var(--tech-blue)] transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h3 className="text-sm font-semibold text-[var(--text-primary)] uppercase tracking-wider mb-4">
                法律
              </h3>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-[var(--text-muted)] hover:text-[var(--tech-blue)] transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-[var(--text-muted)]">
              © 2024 Lightcore AI. 保留所有权利。
            </div>
            
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <Link
                    key={social.name}
                    href={social.href}
                    className="text-[var(--text-muted)] hover:text-[var(--tech-blue)] transition-colors duration-200"
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5" />
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
