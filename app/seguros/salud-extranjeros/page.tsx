import { Metadata } from "next";
import dynamic from "next/dynamic";

const ExtranjeroLanding = dynamic(
  () => import("@/components/extranjeros-landing").then((mod) => mod.ExtranjeroLanding),
  { ssr: false }
);

export const metadata: Metadata = {
  title: "Seguro de Salud para Extranjeros en Madrid | Cobertura Internacional | Valentín Protección Integral",
  description: "Seguro de salud para extranjeros y viajes internacionales en Madrid. Cobertura médica en más de 190 países. Rosa y Sebastián Valentín te lo gestionan en una llamada. Sin sorpresas.",
  keywords: [
    "seguro salud extranjeros Madrid",
    "seguro medico extranjeros España",
    "seguro viaje internacional Madrid",
    "seguro salud internacional Madrid",
    "seguro expatriados Madrid",
  ],
  alternates: { canonical: "https://valentinproteccionintegral.com/seguros/salud-extranjeros" },
  openGraph: {
    title: "Seguro de Salud para Extranjeros en Madrid | Valentín Protección Integral",
    description: "Cobertura médica privada en más de 190 países. Gestión personal de Rosa y Sebastián Valentín. Respuesta en 30 minutos.",
    url: "https://valentinproteccionintegral.com/seguros/salud-extranjeros",
    siteName: "Valentín Protección Integral",
    locale: "es_ES",
    type: "website",
    images: [{ url: "https://valentinproteccionintegral.com/images/rosa_y_sebastian_conversando.png", alt: "Rosa y Sebastián Valentín, asesores de seguros para extranjeros en Madrid" }],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Seguro de Salud para Extranjeros en Madrid",
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
  "areaServed": ["Madrid", "Boadilla del Monte", "España"],
  "description": "Asesoramiento para seguros de salud internacionales y para extranjeros en Madrid. Cobertura en más de 190 países. Gestión personal de Rosa y Sebastián Valentín sin coste.",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "EUR", "description": "Consulta gratuita y sin compromiso" }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Qué es un seguro de salud para extranjeros en España?",
      "acceptedAnswer": { "@type": "Answer", "text": "Es una póliza de salud privada diseñada para ciudadanos extranjeros residentes en España o para personas que viajan frecuentemente al extranjero. Cubre atención médica en clínicas privadas, urgencias y hospitalización, y en algunos planes, también en el extranjero. Rosa y Sebastián Valentín te orientan sobre la mejor opción para tu situación en Madrid." }
    },
    {
      "@type": "Question",
      "name": "¿Los extranjeros residentes en Madrid pueden contratar un seguro de salud privado?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. Los extranjeros residentes en España pueden contratar seguros de salud privados sin necesidad de tener tarjeta sanitaria pública. Incluso es un requisito habitual para la renovación de permisos de residencia. Rosa y Sebastián Valentín te gestionan el proceso completo." }
    },
    {
      "@type": "Question",
      "name": "¿El seguro cubre atención médica fuera de España?",
      "acceptedAnswer": { "@type": "Answer", "text": "Depende del plan contratado. Algunos seguros ofrecen cobertura en más de 190 países para urgencias y hospitalización. En Valentín Protección Integral comparamos los planes con y sin cobertura internacional para que elijas el que mejor se adapta a tu situación, con total claridad." }
    }
  ]
};

export default function SaludExtranjeros() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <ExtranjeroLanding />
    </>
  );
}
