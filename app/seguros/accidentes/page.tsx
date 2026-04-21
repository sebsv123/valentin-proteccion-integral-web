import type { Metadata } from "next";
import { AccidentesLanding } from "@/components/accidentes-landing";

export const metadata: Metadata = {
  title: "Seguro de Accidentes en Madrid | Desde 3€/mes | Valentín Protección Integral",
  description: "Seguro de accidentes en Madrid desde 3€/mes. Cubre incapacidad temporal, invalidez y fallecimiento por accidente. Gestión personal de Rosa y Sebastián en 30 minutos.",
  keywords: ["seguro accidentes madrid", "seguro accidentes laboral madrid", "seguro accidentes autonomos madrid", "seguro accidentes Boadilla del Monte"],
  alternates: { canonical: "https://valentinproteccionintegral.com/seguros/accidentes" },
  openGraph: {
    title: "Seguro de Accidentes en Madrid | Valentín Protección Integral",
    description: "Protégete ante cualquier imprevisto. Seguro de accidentes desde 3€/mes con gestión personal de Rosa y Sebastián.",
    url: "https://valentinproteccionintegral.com/seguros/accidentes",
    siteName: "Valentín Protección Integral",
    locale: "es_ES",
    type: "website",
    images: [{ url: "https://valentinproteccionintegral.com/images/rosa_y_sebastian_mesa.png", alt: "Rosa y Sebastián Valentín, asesores de seguros de accidentes en Madrid" }],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Seguro de Accidentes en Madrid",
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
  "areaServed": ["Madrid", "Boadilla del Monte", "Majadahonda", "Pozuelo de Alarcón", "Las Rozas"],
  "description": "Asesoramiento para seguros de accidentes en Madrid. Cobertura de incapacidad temporal, invalidez permanente y fallecimiento por accidente. Ideal para autónomos, deportistas y familias con hijos activos.",
  "offers": { "@type": "Offer", "price": "3", "priceCurrency": "EUR", "description": "Seguro de accidentes desde 3€/mes. Consulta gratuita sin compromiso." }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Qué cubre un seguro de accidentes en Madrid?",
      "acceptedAnswer": { "@type": "Answer", "text": "Un seguro de accidentes cubre la incapacidad temporal (baja laboral), la invalidez permanente (parcial o total) y el fallecimiento por accidente de cualquier tipo: laboral, de tráfico, deportivo o doméstico. La indemnización varía según la gravedad y la cobertura contratada." }
    },
    {
      "@type": "Question",
      "name": "¿Cuánto cuesta un seguro de accidentes en Madrid?",
      "acceptedAnswer": { "@type": "Answer", "text": "Los seguros de accidentes que gestionamos en Madrid comienzan desde 3€ al mes. El precio depende de la edad, profesión y capital asegurado. Los autónomos y deportistas suelen necesitar coberturas más altas. Contacta con Rosa y Sebastián para un presupuesto personalizado en 30 minutos." }
    },
    {
      "@type": "Question",
      "name": "¿El seguro de accidentes cubre el deporte?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. Las modalidades que gestionamos cubren accidentes deportivos: ciclismo, running, pádel, esquí... También cubren accidentes de tráfico, laborales y domésticos. Te explicamos exactamente qué actividades incluye cada póliza antes de que contrates." }
    },
    {
      "@type": "Question",
      "name": "¿Puede un autónomo contratar seguro de accidentes?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí, y es especialmente recomendable. Los autónomos no tienen protección por accidente laboral como los asalariados. Un seguro de accidentes cubre la baja médica y la invalidez, garantizando ingresos si no puedes trabajar. Es una inversión pequeña con gran retorno de tranquilidad." }
    }
  ]
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <AccidentesLanding />
    </>
  );
}
