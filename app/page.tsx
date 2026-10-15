import type { Metadata } from 'next';
import { HomePageView } from '@/components/home-page-view';

export const metadata: Metadata = {
  title: "Asesor de Seguros en Madrid — Salud, Vida y Más | VPI",
  description:
    "Marca comercial de mediación de seguros en Madrid, cofundada por Rosa y Sebastián. Salud, vida, dental y mascotas con orientación clara y sin presión comercial.",
  keywords: "asesor de seguros madrid, asesores de seguros madrid, seguro de salud madrid, seguro de vida madrid, agente seguros registrado DGSFP madrid, consulta seguros gratis madrid",
  authors: [{ name: "Valentín Protección Integral" }],
  publisher: "Valentín Protección Integral",
  openGraph: {
    title: "Asesor de Seguros en Madrid — Salud, Vida y Más | VPI",
    description: "Marca comercial de mediación de seguros en Madrid, cofundada por Rosa y Sebastián. Salud, vida, dental y mascotas con orientación clara y sin presión comercial.",
    url: "https://valentinproteccionintegral.com",
    siteName: "Valentín Protección Integral",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Asesor de Seguros en Madrid — Salud, Vida y Más | VPI",
    description: "Marca comercial de mediación de seguros cofundada por Rosa y Sebastián. Orientación clara sobre coberturas disponibles en Madrid.",
  },
  alternates: {
    canonical: "https://valentinproteccionintegral.com",
    languages: {
      es: "https://valentinproteccionintegral.com",
      en: "https://valentinproteccionintegral.com/en",
      "x-default": "https://valentinproteccionintegral.com",
    },
  },
};

export const dynamic = 'force-static';

export default function HomePage() {
  return <HomePageView locale="es" />;
}
