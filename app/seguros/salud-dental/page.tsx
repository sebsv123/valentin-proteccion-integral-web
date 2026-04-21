import type { Metadata } from 'next';
import { DentalLanding } from '@/components/dental-landing';

export const metadata: Metadata = {
  title: 'Seguro Dental en Madrid · Sin Carencias desde el Día 1 | Valentín Protección Integral',
  description: 'Seguro dental desde 8€/mes. Asesoramiento sin compromiso en Boadilla del Monte, Madrid. Te ayudamos a elegir la cobertura perfecta para tu familia.',
  keywords: [
    'seguro dental Madrid',
    'seguro dental sin carencias Madrid',
    'seguro dental barato Madrid',
    'seguro dental familiar Madrid',
    'contratar seguro dental Madrid',
    'seguro dental Boadilla del Monte',
  ],
  alternates: { canonical: 'https://valentinproteccionintegral.com/seguros/dental' },
  openGraph: {
    title: 'Seguro Dental en Madrid · Sin Carencias | Valentín Protección Integral',
    description: 'Seguro dental desde 8€/mes en Boadilla del Monte, Madrid. Sin carencias desde el día 1. Asesoramiento sin compromiso.',
    url: 'https://valentinproteccionintegral.com/seguros/salud-dental',
    siteName: 'Valentín Protección Integral',
    locale: 'es_ES',
    type: 'website',
    images: [{ url: 'https://www.valentinproteccionintegral.com/og-dental.webp', alt: 'Seguro dental en Madrid - Valentín Protección Integral' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Seguro Dental en Madrid · Sin Carencias | Valentín Protección Integral',
    description: 'Seguro dental desde 8€/mes en Boadilla del Monte, Madrid. Sin carencias desde el día 1.',
    images: ['https://www.valentinproteccionintegral.com/og-dental.webp'],
  },
};

// Schema InsuranceAgency simplificado (sin Person extensa de Sebastián)
const insuranceAgencySchema = {
  "@context": "https://schema.org",
  "@type": "InsuranceAgency",
  "name": "Valentín Protección Integral",
  "description": "Asesoramiento independiente para seguros dentales en Madrid. Sin carencias en revisiones y limpiezas desde el primer día. Rosa y Sebastián Valentín te atienden personalmente.",
  "url": "https://valentinproteccionintegral.com/seguros/salud-dental",
  "telephone": "+34 603 448 765",
  "email": "contacto@valentinproteccionintegral.com",
  "priceRange": "€€",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Boadilla del Monte",
    "addressRegion": "Comunidad de Madrid",
    "addressCountry": "ES"
  },
  "areaServed": {
    "@type": "Place",
    "name": "Madrid y alrededores"
  },
  "founders": [
    {
      "@type": "Person",
      "name": "Rosa Valentín",
      "jobTitle": "Mediadora de Seguros Independiente"
    },
    {
      "@type": "Person",
      "name": "Sebastián Sifontes Valentín",
      "jobTitle": "Asesor Especialista en Seguros"
    }
  ]
};

// Schema Person de Rosa (simplificado)
const rosaSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Rosa Valentín",
  "jobTitle": "Mediadora de Seguros Independiente",
  "description": "Mediadora de seguros colegiada con más de 10 años de experiencia en Madrid. Especialista en seguros dentales, salud, mascotas y protección familiar.",
  "url": "https://valentinproteccionintegral.com/sobre-nosotros",
  "telephone": "+34 603 448 765",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Boadilla del Monte",
    "addressRegion": "Comunidad de Madrid",
    "addressCountry": "ES"
  },
  "sameAs": [
    "https://www.instagram.com/segurosrosavalentin/",
    "https://wa.me/34603448765"
  ],
  "knowsAbout": [
    "Seguros dentales",
    "Seguros de salud",
    "Seguros para mascotas",
    "Protección familiar mediante seguros"
  ]
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Inicio",
      "item": "https://valentinproteccionintegral.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Seguros",
      "item": "https://valentinproteccionintegral.com/seguros"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Seguro Dental",
      "item": "https://valentinproteccionintegral.com/seguros/salud-dental"
    }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿El seguro dental en Madrid tiene períodos de carencia?",
      "acceptedAnswer": { "@type": "Answer", "text": "No. Con los planes que gestionamos en Madrid, revisiones, limpiezas, empastes e incluso implantes están disponibles desde el día 1. Si en algún caso específico existiera alguna excepción, Rosa y Sebastián te lo explican antes de firmar, sin sorpresas." }
    },
    {
      "@type": "Question",
      "name": "¿Puedo incluir a toda mi familia en el seguro dental?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. Gestionamos seguros dentales familiares donde cada miembro tiene su cobertura. Cuantos más miembros, mejor precio por persona. Rosa y Sebastián te lo tramitan en una sola llamada." }
    },
    {
      "@type": "Question",
      "name": "¿Desde cuánto cuesta un seguro dental en Madrid?",
      "acceptedAnswer": { "@type": "Answer", "text": "Un seguro dental individual en Madrid puede costar desde 9€ al mes adicionales si ya tienes seguro de salud con nosotros. Para una cobertura dental completa desde cero, los planes comienzan habitualmente entre 15€ y 25€ al mes. Contacta con Rosa y Sebastián para un presupuesto personalizado." }
    }
  ]
};

export default function SaludDentalPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(insuranceAgencySchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(rosaSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <DentalLanding />
    </>
  );
}
