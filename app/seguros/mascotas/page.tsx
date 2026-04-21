import type { Metadata } from "next";
import { MascotasLanding } from "@/components/mascotas-landing";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { StickyWhatsApp } from "@/components/sticky-whatsapp";

export const metadata: Metadata = {
  title: "Seguro Veterinario para Mascotas en Madrid | RC desde 5€/mes · Valentín Protección Integral",
  description: "RC obligatoria para perros desde 5€/mes. Asistencia veterinaria para perros y gatos. Rosa Valentín, +10 años, +1.200 familias. Presupuesto gratis en 30 min.",
  alternates: {
    canonical: "https://www.valentinproteccionintegral.com/seguros/mascotas",
  },
};

export default function MascotasPage() {
  return (
    <>
      <Header />
      <MascotasLanding />
      <Footer />
      <StickyWhatsApp />
    </>
  );
}
