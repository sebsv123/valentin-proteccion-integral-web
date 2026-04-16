import { site } from '@/lib/products';

export default function SchemaReviews() {
  const reviewsData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${site.domain}/#organization`,
    "name": "Valentín Protección Integral",
    "image": `${site.domain}/images/premium/hero-family.png`,
    "telePhone": site.phone,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Boadilla del Monte",
      "addressRegion": "Madrid",
      "postalCode": "28660",
      "addressCountry": "ES"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "32"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Elena García"
        },
        "datePublished": "2026-03-15",
        "reviewBody": "Excelente trato y profesionalidad. Me ayudó a ahorrar más de un 30% en mi seguro de salud con mejores coberturas.",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        }
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Carlos Rodríguez"
        },
        "datePublished": "2026-02-10",
        "reviewBody": "Rosa es una experta. Desvinculamos el seguro de vida de la hipoteca y ahora pagamos muchísimo menos. Totalmente recomendado.",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        }
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Lucía Martín"
        },
        "datePublished": "2026-04-02",
        "reviewBody": "Gran asesoramiento para mi seguro de autónomo. Transparente y sin letra pequeña. Por fin entiendo lo que contrato.",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewsData) }}
    />
  );
}
