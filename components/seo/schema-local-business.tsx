import { site } from '@/lib/products';

interface Props {
  cityName?: string;
  postcode?: string;
  locale?: string;
}

export default function SchemaLocalBusiness({ cityName, postcode, locale = 'es' }: Props) {
  const isEnglish = locale === 'en';
  const offerItems = isEnglish
    ? [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Health insurance", "url": "https://valentinproteccionintegral.com/en/insurance/health" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Business insurance", "url": "https://valentinproteccionintegral.com/en/business" } },
      ]
    : [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Seguro de Salud", "url": "https://valentinproteccionintegral.com/seguros/salud" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Seguro para Mascotas", "url": "https://valentinproteccionintegral.com/seguros/mascotas" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Seguro Dental", "url": "https://valentinproteccionintegral.com/seguros/dental" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Seguro de Viaje", "url": "https://valentinproteccionintegral.com/seguros/viaje" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Seguro de Accidentes", "url": "https://valentinproteccionintegral.com/seguros/accidentes-decesos" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Seguros para Negocios", "url": "https://valentinproteccionintegral.com/empresas" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Seguro de Decesos", "url": "https://valentinproteccionintegral.com/seguros/decesos" } },
      ];
  const schema = {
    "@context": "https://schema.org",
    "@type": "InsuranceAgency",
    "inLanguage": locale,
    "name": site.name,
    "description": isEnglish ? "DGSFP-registered insurance advice in Madrid. Personal guidance on health, life, pet, dental, travel, accident, legal protection, home appliance, funeral and business insurance. Over 10 years of experience. Initial consultation free." : "Agentes de seguros registrados en la DGSFP en Madrid. Asesoramiento personalizado en salud, vida, mascotas, dental, viaje, accidentes, protección jurídica, electrodomésticos, decesos y negocios. Más de 10 años de experiencia. Primera consulta gratuita.",
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
      "Health insurance", "Life insurance", "Pet insurance", "Dental insurance", "Travel insurance", "Accident insurance", "Legal protection", "Home appliance insurance", "Funeral insurance", "Business insurance", "Insurance for international residents", "Pet liability insurance", "Mortgage life insurance", "Insurance for self-employed people"
    ] : [
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
