import { site } from '@/lib/products';

type SchemaArticleProps = {
  title: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  author: string;
  image: string;
  url: string;
};

export default function SchemaArticle({
  title,
  description,
  datePublished,
  dateModified,
  author,
  image,
  url,
}: SchemaArticleProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "image": image.startsWith('http') ? image : `${site.domain}${image}`,
    "datePublished": datePublished,
    "dateModified": dateModified || datePublished,
    "author": {
      "@type": "Person",
      "name": author,
      "url": site.domain,
    },
    "publisher": {
      "@type": "Organization",
      "name": "Valentín Protección Integral",
      "logo": {
        "@type": "ImageObject",
        "url": `${site.domain}/og-image.webp`,
      },
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
