import { Metadata } from "next";
import { SaludLanding } from "@/components/salud-landing";

export const metadata: Metadata = {
  title: "Seguro Salud Individual Madrid · Sin listas de espera",
  description: "Seguro de salud individual en Madrid sin listas de espera. Médico en 24h, cobertura desde el primer día. Presupuesto gratis · Valentín Protección Integral.",
  keywords: "seguro salud individual Madrid, seguro médico privado Madrid, seguro salud sin carencias Madrid, seguro salud familiar Madrid",
  openGraph: {
    title: "Seguro de Salud en Madrid · Desde 21€/mes",
    description: "Médico privado para toda tu familia en Madrid. Gestión personal de Rosa y Sebastián. Presupuesto en 30 minutos.",
    url: "https://valentinproteccionintegral.com/seguros/salud-individual",
    siteName: "Valentín Protección Integral",
    locale: "es_ES",
    type: "website",
    images: [{ url: "https://valentinproteccionintegral.com/images/rosa_y_sebastian_conversando.png", alt: "Rosa y Sebastián Valentín, asesores de seguros de salud en Madrid" }],
  },
  twitter: {
    title: "Seguro de Salud en Madrid · Desde 21€/mes | Valentín Protección Integral",
    description: "Médico privado para toda tu familia en Madrid. Gestión personal de Rosa y Sebastián. Presupuesto en 30 minutos.",
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
  "description": "Asesoramiento independiente para seguros de salud en Madrid. Te asesoramos de forma personalizada, sin coste para el cliente.",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "EUR", "description": "Consulta gratuita y sin compromiso" }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Cuánto cuesta un seguro de salud privado en Madrid?",
      "acceptedAnswer": { "@type": "Answer", "text": "Un seguro de salud individual en Madrid suele costar desde 21€ al mes, dependiendo de la edad, cobertura y compañía. Rosa y Sebastián Valentín te asesoran de forma independiente y te orientan con honestidad, sin coste." }
    },
    {
      "@type": "Question",
      "name": "¿Hay períodos de carencia en el seguro de salud?",
      "acceptedAnswer": { "@type": "Answer", "text": "Urgencias, médico de cabecera y especialistas están disponibles desde el primer día en la mayoría de planes. Algunos servicios como cirugía o maternidad pueden tener espera, que siempre te explicamos antes de contratar, sin letra pequeña." }
    },
    {
      "@type": "Question",
      "name": "¿Cómo funciona el asesoramiento de Valentín Protección Integral para seguros de salud en Madrid?",
      "acceptedAnswer": { "@type": "Answer", "text": "Rosa y Sebastián Valentín son asesores independientes en Boadilla del Monte y Madrid. Te escuchan, buscan la mejor solución para tu situación y te orientan con honestidad. La consulta es gratuita y te responden en menos de 30 minutos." }
    }
  ]
};

export default function SaludIndividualPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* BLOQUE SEO ESTÁTICO — visible para crawlers, oculto visualmente */}
      <section aria-label="Información sobre el seguro de salud individual en Madrid" className="sr-only">
        <h1>Seguro de Salud Individual en Madrid — Sin listas de espera</h1>
        <p>
          En Valentín Protección Integral ofrecemos asesoramiento independiente para contratar el mejor seguro de salud privado en Madrid. Rosa y Sebastián Valentín llevan más de 10 años ayudando a familias y profesionales en Boadilla del Monte, Pozuelo de Alarcón, Las Rozas y toda la comunidad de Madrid a elegir la cobertura médica que necesitan, sin ataduras a ninguna compañía aseguradora.
        </p>
        <h2>¿Qué incluye un seguro de salud privado en Madrid?</h2>
        <p>
          Un seguro de salud individual te da acceso a médico de cabecera, especialistas y urgencias desde el primer día, sin esperas. La mayoría de planes incluyen analíticas, radiografías, fisioterapia y atención pediátrica. Te explicamos cada cobertura con claridad, sin letra pequeña, antes de que firmes nada.
        </p>
        <h2>¿Cuánto cuesta un seguro de salud en Madrid?</h2>
        <p>
          El precio de un seguro médico privado en Madrid depende de la edad, las coberturas elegidas y el número de personas aseguradas. Los planes individuales comienzan desde 21€ al mes. Como mediadores independientes, te asesoramos de forma personalizada y te orientamos para encontrar la opción que mejor se adapte a tu situación y presupuesto.
        </p>
        <h2>¿Por qué elegir Valentín Protección Integral?</h2>
        <ul>
          <li>Mediadores independientes registrados en la DGSFP — trabajamos para ti, no para ninguna compañía</li>
          <li>Más de 1.200 familias protegidas en Madrid</li>
          <li>Respuesta en menos de 30 minutos por WhatsApp</li>
          <li>Asesoría gratuita y sin compromiso</li>
          <li>Acompañamiento real después de contratar: gestión de incidencias incluida</li>
        </ul>
        <h2>Preguntas frecuentes sobre el seguro de salud individual en Madrid</h2>
        <dl>
          <dt>¿Hay períodos de carencia?</dt>
          <dd>Urgencias, médico de cabecera y especialistas están disponibles desde el primer día en la mayoría de planes. Algunos servicios como cirugía programada o maternidad pueden tener espera, que siempre explicamos antes de contratar.</dd>
          <dt>¿Puedo añadir a mi familia al mismo seguro?</dt>
          <dd>Sí. Puedes contratar un plan familiar que incluya pareja e hijos, generalmente con descuento respecto a contratar cada miembro por separado.</dd>
          <dt>¿Qué pasa si necesito un especialista?</dt>
          <dd>Con un seguro privado accedes directamente al especialista que necesitas, sin necesidad de derivación ni lista de espera. El cuadro médico incluye cientos de profesionales en Madrid.</dd>
          <dt>¿Cómo contrato?</dt>
          <dd>Escríbenos por WhatsApp al 603 44 87 65, cuéntanos tu situación y en menos de 30 minutos te enviamos las mejores opciones sin coste ni compromiso.</dd>
        </dl>
      </section>

      {/* Componente visual principal — sin tocar */}
      <SaludLanding />
    </>
  );
}
