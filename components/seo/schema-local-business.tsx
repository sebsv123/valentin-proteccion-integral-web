import { site } from '@/lib/products';
import { getSeoInsuranceCatalog } from '@/lib/seo-insurance-catalog';

interface Props {
  cityName?: string;
  postcode?: string;
  locale?: string;
}

export default function SchemaLocalBusiness({ cityName, postcode, locale = 'es' }: Props) {
  const isEnglish = locale === 'en';
  const offerItems = getSeoInsuranceCatalog(isEnglish ? 'en' : 'es');
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://valentinproteccionintegral.com/#organization",
    "inLanguage": locale,
    "name": site.name,
    "description": isEnglish ? "Valentín Protección Integral is a commercial brand and project co-founded by Rosa Valentín and Sebastián Sifontes Valentín, providing customer guidance and support around insurance processes." : "Valentín Protección Integral es una marca y proyecto comercial cofundado por Rosa Valentín y Sebastián Sifontes Valentín que ofrece orientación y acompañamiento al cliente en procesos relacionados con seguros.",
    "url": isEnglish ? "https://valentinproteccionintegral.com/en" : "https://valentinproteccionintegral.com",
    "telephone": site.phone,
    "email": "contacto@valentinproteccionintegral.com",
    "image": "https://valentinproteccionintegral.com/og-image.webp",
    "logo": "https://valentinproteccionintegral.com/favicon-192.png",
    "priceRange": "€",
    "currenciesAccepted": "EUR",
    "paymentAccepted": "Cash, Credit Card, Bank Transfer",
    "areaServed": cityName ? { "@type": "City", "name": cityName, "postalCode": postcode } : [
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
    "sameAs": [
      "https://www.instagram.com/segurosvalentin/",
      "https://wa.me/34603448765"
    ],
    "knowsAbout": isEnglish ? [
      "Health insurance", "Pet insurance", "Dental insurance", "Travel insurance", "Accident insurance", "Funeral insurance", "Business health insurance", "Business cybersecurity", "Insurance for international residents", "Pet liability insurance", "Insurance for self-employed people"
    ] : [
      "Seguro de salud",
      "Seguro para mascotas",
      "Seguro dental",
      "Seguro de viaje",
      "Seguro de accidentes",
      "Seguro de decesos",
      "Salud para empresas y autónomos",
      "Ciberseguridad para empresas",
      "Seguros para extranjeros con visado",
      "Ley de Bienestar Animal seguros mascotas",
      "Seguros para autónomos"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": isEnglish ? "Insurance available" : "Seguros disponibles",
      "itemListElement": offerItems
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
