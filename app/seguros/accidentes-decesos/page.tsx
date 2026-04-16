import type { Metadata } from "next"
import { AccidentesDecesosLanding } from "@/components/accidentes-decesos-landing"

export const metadata: Metadata = {
  title: "Seguro de Accidentes y Decesos en Madrid | Desde 3€/mes | Valentín Protección Integral",
  description: "Protege a tu familia desde 3€ al mes. Seguro de accidentes y decesos sin permanencia, sin letra pequeña. Rosa y Sebastián te lo gestionan en 30 minutos. Madrid.",
  keywords: ["seguro accidentes madrid", "seguro decesos madrid", "seguro barato familia", "protección familiar madrid"],
  openGraph: {
    title: "Seguro de Accidentes y Decesos | Desde 3€/mes",
    description: "La protección familiar más accesible. Sin permanencia. Rosa y Sebastián, tu gestor personal en Madrid.",
    url: "https://valentinproteccionintegral.com/seguros/accidentes-decesos",
  },
}

export default function Page() {
  return <AccidentesDecesosLanding />
}
