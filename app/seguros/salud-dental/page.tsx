import type { Metadata } from 'next';
import { DentalLanding } from '@/components/dental-landing';

export const metadata: Metadata = {
  title: 'Seguro Dental en Madrid · Sin Carencias desde el Día 1 | Valentín Protección Integral',
  description: 'Seguro dental en Madrid sin períodos de carencia: revisiones, limpiezas e implantes desde el día 1. Rosa y Sebastián Valentín te responden en 30 minutos. Sin letra pequeña.',
  keywords: [
    'seguro dental Madrid',
    'seguro dental sin carencias Madrid',
    'seguro dental barato Madrid',
    'seguro dental familiar Madrid',
    'contratar seguro dental Madrid',
    'seguro dental Boadilla del Monte',
  ],
  alternates: { canonical: 'https://valentinproteccionintegral.com/seguros/salud-dental' },
  openGraph: {
    title: 'Seguro Dental en Madrid · Sin Carencias | Valentín Protección Integral',
    description: 'Tu seguro dental en Madrid sin períodos de espera para revisiones y limpiezas. Respuesta garantizada en 30 minutos. Rosa y Sebastián Valentín.',
    url: 'https://valentinproteccionintegral.com/seguros/salud-dental',
    siteName: 'Valentín Protección Integral',
    locale: 'es_ES',
    type: 'website',
    images: [{ url: 'https://valentinproteccionintegral.com/images/sebastian_con_cliente.png', alt: 'Sebastián Valentín explicando coberturas de seguro dental en Madrid' }],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Seguro Dental en Madrid",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Valentín Protección Integral",
    "telephone": "+34603448765",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Boadilla del Monte",
      "addressRegion": "Madrid",
      "addressCountry": "ES"
    }
  },
  "areaServed": ["Madrid", "Boadilla del Monte", "Majadahonda", "Pozuelo de Alarcón"],
  "description": "Asesoramiento independiente para seguros dentales en Madrid. Sin carencias en revisiones y limpiezas desde el primer día. Comparamos las mejores opciones sin coste.",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "EUR", "description": "Consulta gratuita y sin compromiso" }
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <DentalLanding />
    </>
  );
}
