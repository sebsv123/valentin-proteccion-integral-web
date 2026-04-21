import type { Metadata } from "next";
import { VidaLanding } from "@/components/vida-landing";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { StickyWhatsApp } from "@/components/sticky-whatsapp";

export const metadata: Metadata = {
  title: "Seguro de Vida en Madrid | Valentín Protección Integral",
  description:
    "Protege a tu familia e hipoteca con el seguro de vida que mejor se adapta a ti. Rosa y Sebastián Valentín, +10 años, +1.200 familias. Presupuesto gratis en 30 min.",
};

export default function VidaPage() {
  return (
    <>
      <Header />
      <VidaLanding />
      <Footer />
      <StickyWhatsApp />
    </>
  );
}
