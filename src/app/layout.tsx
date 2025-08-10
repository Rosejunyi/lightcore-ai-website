import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { SmartFooter } from "@/components/layout/smart-footer";
import { PerformanceMonitor } from "@/components/ui/performance-monitor";
import { LightcoreAIStructuredData } from "@/components/seo/structured-data";
import { Inter, Poppins } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const poppins = Poppins({ subsets: ["latin"], weight: ["300","400","500","600","700","800"], variable: "--font-poppins" })

export const metadata: Metadata = {
  title: "慧视 - AI智见，引领企业数智未来 | Lightcore AI",
  description: "慧视是Lightcore AI旗下的AI金融洞察引擎，专注为传统企业提供AI驱动的数字化转型解决方案，包括AI金融洞察、内容生成、运营优化等服务。",
  keywords: "AI, 人工智能, 数字化转型, 金融洞察, 内容生成, 企业服务, Lightcore AI, 慧视",
  authors: [{ name: "Rosa Zhao" }],
  creator: "Lightcore AI",
  publisher: "Lightcore AI",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: "https://www.lightcoreai.com",
    siteName: "慧视 - Lightcore AI",
    title: "慧视 - AI智见，引领企业数智未来",
    description: "专业的AI驱动数字化转型解决方案提供商",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "慧视 - Lightcore AI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "慧视 - AI智见，引领企业数智未来",
    description: "专业的AI驱动数字化转型解决方案提供商",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <head>
        <LightcoreAIStructuredData />
      </head>
      <body
        className={`${inter.variable} ${poppins.variable} antialiased min-h-screen bg-white`}
      >
        <Navbar />
        <main className="pt-16 lg:pt-20">
          {children}
        </main>
        <SmartFooter />
        <PerformanceMonitor showInDevelopment={true} position="bottom-right" />
      </body>
    </html>
  );
}
