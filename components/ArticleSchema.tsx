// components/ArticleSchema.tsx
export default function ArticleSchema({ title, datePublished, dateModified, description }: {
  title: string;
  datePublished: string;
  dateModified?: string;
  description: string;
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
      "url": "https://valentinproteccionintegral.com/sobre-mi"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Valentín Protección Integral",
      "url": "https://valentinproteccionintegral.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://valentinproteccionintegral.com/brand/logo-vpi.jpeg"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://valentinproteccionintegral.com/blog"
    }
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
