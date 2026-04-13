import { site } from '@/lib/products';

export default function SchemaLocalBusiness() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": site.name,
    "description": "Asesoría de seguros personalizada en Madrid. Salud, vida, mascotas, dental y más especialistas en acompañar a familias.",
    "url": "https://valentinproteccionintegral.com",
    "telephone": site.phone,
    "image": "https://valentinproteccionintegral.com/og-image.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Boadilla del Monte",
      "addressLocality": "Madrid",
      "addressRegion": "Comunidad de Madrid",
      "postalCode": "28660",
      "addressCountry": "ES"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 40.4065,
      "longitude": -3.8768
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "19:00"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "23" // Actualizado con el número de reseñas en lib/blog.ts
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
