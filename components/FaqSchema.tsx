// components/FaqSchema.tsx
export default function FaqSchema({ faqs, locale }: { faqs: { q: string; a: string }[]; locale?: 'es' | 'en' }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    ...(locale ? { inLanguage: locale } : {}),
    "mainEntity": faqs.map(({ q, a }) => ({
      "@type": "Question",
      "name": q,
      "acceptedAnswer": { "@type": "Answer", "text": a }
    }))
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
