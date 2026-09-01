export type BreadcrumbItem = {
  name: string;
  item: string;
  position: number;
};

export default function SchemaBreadcrumb({ items, locale }: { items: BreadcrumbItem[]; locale?: 'es' | 'en' }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    ...(locale ? { inLanguage: locale } : {}),
    "itemListElement": items.map(item => ({
      "@type": "ListItem",
      "position": item.position,
      "name": item.name,
      "item": item.item
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
