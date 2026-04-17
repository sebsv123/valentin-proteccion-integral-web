// components/ArticleSchema.tsx
export default function ArticleSchema({
  title,
  datePublished,
  dateModified,
  description,
  imageUrl,
  articleUrl,
}: {
  title: string;
  datePublished: string;
  dateModified?: string;
  description: string;
  imageUrl?: string;
  articleUrl?: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "datePublished": datePublished,
    "dateModified": dateModified || datePublished,
    "author": {
      "@type": "Person",
      "name": "Rosa Valentín",
      "url": "https://valentinproteccionintegral.com/sobre-nosotros"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Valentín Protección Integral",
      "url": "https://valentinproteccionintegral.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://valentinproteccionintegral.com/brand/logo-vpi.png"
      }
    },
    ...(imageUrl ? {
      "image": {
        "@type": "ImageObject",
        "url": imageUrl
      }
    } : {}),
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": articleUrl || "https://valentinproteccionintegral.com/blog"
    }
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
