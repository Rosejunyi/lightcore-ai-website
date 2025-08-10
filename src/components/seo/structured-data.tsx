import Script from "next/script"

interface OrganizationData {
  name: string
  url: string
  logo: string
  description: string
  email: string
  founder: {
    name: string
    email: string
  }
  services: string[]
  address?: {
    streetAddress: string
    addressLocality: string
    addressRegion: string
    postalCode: string
    addressCountry: string
  }
  socialMedia?: {
    linkedin?: string
    twitter?: string
    github?: string
  }
}

interface WebsiteData {
  name: string
  url: string
  description: string
  inLanguage: string
  publisher: string
}

interface ServiceData {
  name: string
  description: string
  provider: string
  serviceType: string
  areaServed: string[]
  offers: {
    name: string
    description: string
    price?: string
    priceCurrency?: string
  }[]
}

// 组织结构化数据
export function OrganizationStructuredData({ data }: { data: OrganizationData }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": data.name,
    "url": data.url,
    "logo": data.logo,
    "description": data.description,
    "email": data.email,
    "founder": {
      "@type": "Person",
      "name": data.founder.name,
      "email": data.founder.email
    },
    "knowsAbout": data.services,
    "serviceArea": {
      "@type": "Place",
      "name": "全球"
    },
    ...(data.address && {
      "address": {
        "@type": "PostalAddress",
        "streetAddress": data.address.streetAddress,
        "addressLocality": data.address.addressLocality,
        "addressRegion": data.address.addressRegion,
        "postalCode": data.address.postalCode,
        "addressCountry": data.address.addressCountry
      }
    }),
    ...(data.socialMedia && {
      "sameAs": Object.values(data.socialMedia).filter(Boolean)
    })
  }

  return (
    <Script
      id="organization-structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData)
      }}
    />
  )
}

// 网站结构化数据
export function WebsiteStructuredData({ data }: { data: WebsiteData }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": data.name,
    "url": data.url,
    "description": data.description,
    "inLanguage": data.inLanguage,
    "publisher": {
      "@type": "Organization",
      "name": data.publisher
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${data.url}/search?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  }

  return (
    <Script
      id="website-structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData)
      }}
    />
  )
}

// 服务结构化数据
export function ServiceStructuredData({ data }: { data: ServiceData }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": data.name,
    "description": data.description,
    "provider": {
      "@type": "Organization",
      "name": data.provider
    },
    "serviceType": data.serviceType,
    "areaServed": data.areaServed.map(area => ({
      "@type": "Place",
      "name": area
    })),
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "服务目录",
      "itemListElement": data.offers.map((offer, index) => ({
        "@type": "Offer",
        "name": offer.name,
        "description": offer.description,
        "position": index + 1,
        ...(offer.price && {
          "price": offer.price,
          "priceCurrency": offer.priceCurrency || "CNY"
        })
      }))
    }
  }

  return (
    <Script
      id="service-structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData)
      }}
    />
  )
}

// 面包屑导航结构化数据
export function BreadcrumbStructuredData({ items }: { 
  items: Array<{ name: string; url: string }> 
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  }

  return (
    <Script
      id="breadcrumb-structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData)
      }}
    />
  )
}

// FAQ结构化数据
export function FAQStructuredData({ faqs }: { 
  faqs: Array<{ question: string; answer: string }> 
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }

  return (
    <Script
      id="faq-structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData)
      }}
    />
  )
}

// 文章结构化数据
export function ArticleStructuredData({ 
  title, 
  description, 
  author, 
  datePublished, 
  dateModified, 
  url, 
  image 
}: {
  title: string
  description: string
  author: string
  datePublished: string
  dateModified?: string
  url: string
  image?: string
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "author": {
      "@type": "Person",
      "name": author
    },
    "datePublished": datePublished,
    "dateModified": dateModified || datePublished,
    "url": url,
    "publisher": {
      "@type": "Organization",
      "name": "Lightcore AI",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.lightcoreai.com/logo.png"
      }
    },
    ...(image && {
      "image": {
        "@type": "ImageObject",
        "url": image
      }
    })
  }

  return (
    <Script
      id="article-structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData)
      }}
    />
  )
}

// 默认的慧视结构化数据
export function LightcoreAIStructuredData() {
  const organizationData: OrganizationData = {
    name: "Lightcore AI",
    url: "https://www.lightcoreai.com",
    logo: "https://www.lightcoreai.com/logo.png",
    description: "慧视是Lightcore AI旗下的AI金融洞察引擎，专注为传统企业提供AI驱动的数字化转型解决方案。",
    email: "junyichao5@gmail.com",
    founder: {
      name: "Rosa Zhao",
      email: "junyichao5@gmail.com"
    },
    services: [
      "AI金融洞察",
      "智能内容生成",
      "企业运营优化",
      "数字化转型咨询",
      "AI技术开发"
    ]
  }

  const websiteData: WebsiteData = {
    name: "慧视 - Lightcore AI",
    url: "https://www.lightcoreai.com",
    description: "AI智见，引领企业数智未来。专业的AI驱动数字化转型解决方案提供商。",
    inLanguage: "zh-CN",
    publisher: "Lightcore AI"
  }

  return (
    <>
      <OrganizationStructuredData data={organizationData} />
      <WebsiteStructuredData data={websiteData} />
    </>
  )
}
