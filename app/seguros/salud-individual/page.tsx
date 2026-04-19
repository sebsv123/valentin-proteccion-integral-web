import { Metadata } from "next";
import { SaludLanding } from "@/components/salud-landing";

export const metadata: Metadata = {
  title: "Seguro de Salud Individual en Madrid | Sin listas de espera | Valentín Protección Integral",
  description: "Seguro de salud privado en Madrid sin listas de espera. Médico de cabecera, especialistas y urgencias desde el primer día. Rosa y Sebastián te responden en 30 minutos.",
  keywords: "seguro salud individual Madrid, seguro médico privado Madrid, seguro salud sin carencias Madrid, seguro salud familiar Madrid",
  openGraph: {
    title: "Seguro de Salud Individual Madrid — Sin esperas, sin sorpresas",
    description: "Médico privado para toda tu familia en Madrid. Gestión personal de Rosa y Sebastián. Presupuesto en 30 minutos.",
    url: "https://valentinproteccionintegral.com/seguros/salud-individual",
    siteName: "Valentín Protección Integral",
    locale: "es_ES",
    type: "website",
    images: [{ url: "https://valentinproteccionintegral.com/images/rosa_y_sebastian_conversando.png", alt: "Rosa y Sebastián Valentín, asesores de seguros de salud en Madrid" }],
  },
  alternates: {
    canonical: "https://valentinproteccionintegral.com/seguros/salud-individual",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Seguro de Salud en Madrid",
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
  "description": "Asesoramiento independiente para seguros de salud en Madrid. Comparamos las mejores opciones sin coste para el cliente.",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "EUR", "description": "Consulta gratuita y sin compromiso" }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Cuánto cuesta un seguro de salud privado en Madrid?",
      "acceptedAnswer": { "@type": "Answer", "text": "Un seguro de salud individual en Madrid suele costar desde 30€ al mes, dependiendo de la edad, cobertura y compañía. Rosa y Sebastián Valentín comparan las mejores opciones del mercado por ti, sin coste." }
    },
    {
      "@type": "Question",
      "name": "¿Hay períodos de carencia en el seguro de salud?",
      "acceptedAnswer": { "@type": "Answer", "text": "Urgencias, médico de cabecera y especialistas están disponibles desde el primer día en la mayoría de planes. Algunos servicios como cirugía o maternidad pueden tener espera, que siempre te explicamos antes de contratar, sin letra pequeña." }
    },
    {
      "@type": "Question",
      "name": "¿Cómo funciona el asesoramiento de Valentín Protección Integral para seguros de salud en Madrid?",
      "acceptedAnswer": { "@type": "Answer", "text": "Rosa y Sebastián Valentín son asesores independientes en Boadilla del Monte y Madrid. Te escuchan, comparan las mejores opciones del mercado y te orientan sin presiones. La consulta es gratuita y te responden en menos de 30 minutos." }
    }
  ]
};

export default function SaludIndividualPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <SaludLanding />
    </>
  );
}
