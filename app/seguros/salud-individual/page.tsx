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
  },
  alternates: {
    canonical: "https://valentinproteccionintegral.com/seguros/salud-individual",
  },
};

export default function SaludIndividualPage() {
  return <SaludLanding />;
}
