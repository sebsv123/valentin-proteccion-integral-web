// components/BreadcrumbSchema.tsx
export default function BreadcrumbSchema({ items, locale }: { items: { name: string; url: string }[]; locale?: 'es' | 'en' }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    ...(locale ? { inLanguage: locale } : {}),
    "itemListElement": items.map((item, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "name": item.name,
      "item": `https://valentinproteccionintegral.com${item.url}`
    }))
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
