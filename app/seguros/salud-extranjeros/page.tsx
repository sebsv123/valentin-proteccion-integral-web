import { Metadata } from "next"
import { ExtranjeroLanding } from "@/components/extranjeros-landing"

export const metadata: Metadata = {
  title: "Seguro de Salud para Extranjeros y Viajes Internacionales | Valentín Protección Integral",
  description: "Cobertura médica privada en más de 190 países. Rosa y Sebastián Valentín te gestionan tu seguro de salud internacional en una sola llamada. Sin sorpresas.",
}

export default function SaludExtranjeros() {
  return <ExtranjeroLanding />
}
