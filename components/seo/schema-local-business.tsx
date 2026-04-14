import { site } from '@/lib/products';

export default function SchemaLocalBusiness() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "InsuranceAgency",
    "name": site.name,
    "description": "Mediadora de seguros independiente en Madrid. Asesoramiento personalizado en salud, vida, mascotas, dental, viaje, accidentes, protección jurídica, electrodomésticos, decesos y negocios. Más de 10 años de experiencia. Primera consulta gratuita.",
    "url": "https://valentinproteccionintegral.com",
    "telephone": site.phone,
    "email": "contacto@valentinproteccionintegral.com",
    "image": "https://valentinproteccionintegral.com/og-image.png",
    "logo": "https://valentinproteccionintegral.com/favicon-192.png",
    "priceRange": "€",
    "currenciesAccepted": "EUR",
    "paymentAccepted": "Cash, Credit Card, Bank Transfer",
    "areaServed": [
      { "@type": "City", "name": "Madrid" },
      { "@type": "City", "name": "Boadilla del Monte" },
      { "@type": "Country", "name": "España" }
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "C. de los Reyes Católicos, 1",
      "addressLocality": "Boadilla del Monte",
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
      "ratingValue": "5.0",
      "bestRating": "5",
      "worstRating": "1",
      "reviewCount": "31"
    },
    "sameAs": [
      "https://www.instagram.com/segurosrosavalentin/",
      "https://wa.me/34603448765"
    ],
    "knowsAbout": [
      "Seguro de salud",
      "Seguro de vida",
      "Seguro para mascotas",
      "Seguro dental",
      "Seguro de viaje",
      "Seguro de accidentes",
      "Protección jurídica",
      "Seguro de electrodomésticos",
      "Seguro de decesos",
      "Seguros para negocios y pymes",
      "Seguros para extranjeros con visado",
      "Ley de Bienestar Animal seguros mascotas",
      "Seguro de vida para hipoteca",
      "Seguros para autónomos"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Seguros disponibles",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Seguro de Salud", "url": "https://valentinproteccionintegral.com/seguros/salud" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Seguro de Vida", "url": "https://valentinproteccionintegral.com/seguros/vida" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Seguro para Mascotas", "url": "https://valentinproteccionintegral.com/seguros/mascotas" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Seguro Dental", "url": "https://valentinproteccionintegral.com/seguros/dental" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Seguro de Viaje", "url": "https://valentinproteccionintegral.com/seguros/viaje" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Seguro de Accidentes", "url": "https://valentinproteccionintegral.com/seguros/accidentes" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Protección Jurídica", "url": "https://valentinproteccionintegral.com/seguros/proteccion-juridica" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Seguros para Negocios", "url": "https://valentinproteccionintegral.com/seguros/negocio" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Seguro de Electrodomésticos", "url": "https://valentinproteccionintegral.com/seguros/electrodomesticos" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Seguro de Decesos", "url": "https://valentinproteccionintegral.com/seguros/decesos" } }
      ]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
