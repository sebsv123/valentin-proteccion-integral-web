import type { Metadata } from "next";
import dynamic from "next/dynamic";

const AccidentesDecesosLanding = dynamic(
  () => import("@/components/accidentes-decesos-landing").then((mod) => mod.AccidentesDecesosLanding),
  { ssr: false }
);

export const metadata: Metadata = {
  title: "Seguro de Accidentes y Decesos en Madrid | Desde 3€/mes | Valentín Protección Integral",
  description: "Protege a tu familia desde 3€ al mes en Madrid. Seguro de accidentes y decesos sin permanencia, sin letra pequeña. Rosa y Sebastián te lo gestionan en 30 minutos.",
  keywords: ["seguro accidentes madrid", "seguro decesos madrid", "seguro barato familia madrid", "protección familiar madrid", "seguro accidentes Boadilla del Monte"],
  alternates: { canonical: "https://valentinproteccionintegral.com/seguros/accidentes-decesos" },
  openGraph: {
    title: "Seguro de Accidentes y Decesos en Madrid | Desde 3€/mes",
    description: "La protección familiar más accesible en Madrid. Sin permanencia. Rosa y Sebastián, tu gestor personal.",
    url: "https://valentinproteccionintegral.com/seguros/accidentes-decesos",
    siteName: "Valentín Protección Integral",
    locale: "es_ES",
    type: "website",
    images: [{ url: "https://valentinproteccionintegral.com/images/rosa_y_sebastian_mesa.png", alt: "Rosa y Sebastián Valentín, asesores de seguros de accidentes en Madrid" }],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Seguro de Accidentes y Decesos en Madrid",
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
  "description": "Asesoramiento para seguros de accidentes y decesos en Madrid desde 3€/mes. Sin permanencia ni letra pequeña. Gestión personal de Rosa y Sebastián Valentín.",
  "offers": { "@type": "Offer", "price": "3", "priceCurrency": "EUR", "description": "Seguro de accidentes desde 3€/mes. Consulta gratuita sin compromiso." }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Qué cubre un seguro de accidentes y decesos en Madrid?",
      "acceptedAnswer": { "@type": "Answer", "text": "Un seguro de accidentes cubre indemnizaciones por fallecimiento o invalidez derivados de un accidente. El seguro de decesos cubre los gastos del sepelio y servicios funerarios. Rosa y Sebastián Valentín te explican la cobertura exacta antes de contratar, sin letra pequeña." }
    },
    {
      "@type": "Question",
      "name": "¿Cuánto cuesta un seguro de accidentes en Madrid?",
      "acceptedAnswer": { "@type": "Answer", "text": "Los seguros que gestionamos en Madrid comienzan desde 3€ al mes por persona. El precio final depende del capital asegurado y la edad. Contacta con Rosa y Sebastián para un presupuesto personalizado sin compromiso." }
    },
    {
      "@type": "Question",
      "name": "¿El seguro de decesos tiene permanencia?",
      "acceptedAnswer": { "@type": "Answer", "text": "No. Los seguros de decesos que gestionamos en Madrid y Boadilla del Monte no tienen permanencia. Puedes cancelarlo cuando lo necesites, con el simple preaviso indicado en la póliza." }
    }
  ]
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <AccidentesDecesosLanding />
    </>
  );
}
