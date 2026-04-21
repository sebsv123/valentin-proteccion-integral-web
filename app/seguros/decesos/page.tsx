import type { Metadata } from "next";
import { DecesosLanding } from "@/components/decesos-landing";

export const metadata: Metadata = {
  title: "Seguro de Decesos en Madrid | Gastos de Sepelio Cubiertos | Valentín Protección Integral",
  description: "Seguro de decesos en Madrid desde 5€/mes. Cubre gastos de sepelio, traslado de restos y gestión completa del funeral. Rosa y Sebastián te lo explican en 30 minutos. Sin permanencia.",
  keywords: ["seguro decesos madrid", "seguro funerario madrid", "gastos sepelio madrid", "seguro decesos Boadilla del Monte", "seguro decesos familia madrid"],
  alternates: { canonical: "https://valentinproteccionintegral.com/seguros/decesos" },
  openGraph: {
    title: "Seguro de Decesos en Madrid | Valentín Protección Integral",
    description: "Que tu familia no tenga que preocuparse por los gastos del funeral. Desde 5€/mes. Sin permanencia.",
    url: "https://valentinproteccionintegral.com/seguros/decesos",
    siteName: "Valentín Protección Integral",
    locale: "es_ES",
    type: "website",
    images: [{ url: "https://valentinproteccionintegral.com/images/rosa_y_sebastian_mesa.png", alt: "Rosa y Sebastián Valentín, asesores de seguros de decesos en Madrid" }],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Seguro de Decesos en Madrid",
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
  "description": "Asesoramiento para seguros de decesos en Madrid. Cobertura de gastos de sepelio, traslado de restos y gestión del funeral. Sin permanencia ni letra pequeña.",
  "offers": { "@type": "Offer", "price": "5", "priceCurrency": "EUR", "description": "Seguro de decesos desde 5€/mes. Consulta gratuita sin compromiso." }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Qué cubre un seguro de decesos en Madrid?",
      "acceptedAnswer": { "@type": "Answer", "text": "Un seguro de decesos cubre los gastos del sepelio (entre 4.000€ y 6.000€ de media), el traslado de restos a cualquier punto de España o el extranjero, y la gestión completa de todos los trámites funerarios. Rosa y Sebastián acompañan a la familia desde el primer aviso hasta la gestión final." }
    },
    {
      "@type": "Question",
      "name": "¿Cuánto cuesta un seguro de decesos en Madrid?",
      "acceptedAnswer": { "@type": "Answer", "text": "Los seguros de decesos que gestionamos en Madrid comienzan desde 5€ al mes por persona. El precio depende de la edad y las coberturas elegidas. Contacta con Rosa y Sebastián para un presupuesto personalizado sin compromiso en 30 minutos." }
    },
    {
      "@type": "Question",
      "name": "¿El seguro de decesos tiene permanencia?",
      "acceptedAnswer": { "@type": "Answer", "text": "No. Los seguros de decesos que gestionamos no tienen permanencia. Puedes cancelarlo cuando lo necesites con el simple preaviso indicado en la póliza." }
    },
    {
      "@type": "Question",
      "name": "¿Puedo contratar decesos para mis padres mayores?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. Es uno de los perfiles más habituales. Los hijos contratan el seguro para sus padres y así toda la familia queda tranquila. Consultamos las condiciones según la edad y el estado de salud." }
    }
  ]
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <DecesosLanding />
    </>
  );
}
