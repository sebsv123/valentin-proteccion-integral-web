import type { Metadata } from "next";
import { DentalLanding } from "@/components/dental-landing";

export const metadata: Metadata = {
  title: "Seguro Dental en Madrid | Sin Carencias | Valentín Protección Integral",
  description: "Seguro dental en Madrid desde 9€/mes. Sin carencias en revisiones y limpiezas desde el primer día. Rosa y Sebastián te lo gestionan en 30 minutos. Sin permanencia.",
  keywords: [
    "seguro dental madrid",
    "seguro dental sin carencias madrid",
    "seguro dental barato madrid",
    "seguro dental familiar madrid",
    "seguro dental implantes madrid",
    "seguro dental Boadilla del Monte",
  ],
  alternates: { canonical: "https://valentinproteccionintegral.com/seguros/dental" },
  openGraph: {
    title: "Seguro Dental en Madrid | Sin Carencias | Valentín Protección Integral",
    description: "Sin carencias en revisiones y limpiezas desde el primer día. Desde 9€/mes. Sin permanencia.",
    url: "https://valentinproteccionintegral.com/seguros/dental",
    siteName: "Valentín Protección Integral",
    locale: "es_ES",
    type: "website",
    images: [{ url: "https://valentinproteccionintegral.com/images/rosa_y_sebastian.jpeg", alt: "Rosa y Sebastián Valentín, asesores de seguros dentales en Madrid" }],
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
  "description": "Asesoramiento para seguros dentales en Madrid. Sin carencias en revisiones y limpiezas desde el primer día. Desde 9€/mes sin permanencia.",
  "offers": { "@type": "Offer", "price": "9", "priceCurrency": "EUR", "description": "Seguro dental desde 9€/mes. Consulta gratuita sin compromiso." }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿El seguro dental tiene períodos de carencia?",
      "acceptedAnswer": { "@type": "Answer", "text": "En los seguros que gestionamos, revisiones y limpiezas están disponibles desde el primer día sin período de carencia. Para ortodoncia e implantes las condiciones varían según modalidad. Rosa y Sebastián te explican exactamente qué incluye cada opción antes de decidir." }
    },
    {
      "@type": "Question",
      "name": "¿Los seguros dentales cubren implantes?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. Según la modalidad elegida, los seguros que gestionamos incluyen implantes o los cubren con descuento significativo. Un implante sin seguro supera los 1.200€. Contacta con Rosa y Sebastián para saber qué modalidad te conviene." }
    },
    {
      "@type": "Question",
      "name": "¿Puedo incluir a toda mi familia en el seguro dental?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. Gestionamos seguros dentales familiares donde cada miembro tiene su cobertura. Cuantos más miembros, mejor precio por persona. Rosa y Sebastián te lo tramitan en una sola llamada." }
    },
    {
      "@type": "Question",
      "name": "¿Cuánto cuesta un seguro dental en Madrid?",
      "acceptedAnswer": { "@type": "Answer", "text": "Un seguro dental en Madrid comienza desde 9€/mes si ya tienes seguro de salud con nosotros. Una cobertura dental completa independiente va habitualmente entre 15€ y 25€/mes. Contacta con Rosa y Sebastián para un precio exacto en 30 minutos, gratis y sin compromiso." }
    }
  ]
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <DentalLanding />
    </>
  );
}
