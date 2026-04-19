import { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { StickyWhatsApp } from "@/components/sticky-whatsapp";
import { buildWhatsAppHref, site } from "@/lib/products";
import { Shield, Zap, Clock, HeartHandshake } from "lucide-react";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";

export const metadata: Metadata = {
  title: "Nuestras Garantías · Valentín Protección Integral",
  description: "Asesoramiento sin presión, respuesta en menos de 24h y acompañamiento real antes y después de contratar. Estas son nuestras garantías. Sin letra pequeña.",
  keywords: "garantías asesor seguros Madrid, compromiso calidad seguros, asesoramiento sin presión Madrid",
  openGraph: {
    title: "Nuestras Garantías · Valentín Protección Integral",
    description: "Asesoramiento sin presión, respuesta en menos de 24h y acompañamiento real antes y después de contratar.",
    url: "https://www.valentinproteccionintegral.com/garantias",
    siteName: "Valentín Protección Integral",
    locale: "es_ES",
    type: "website",
  },
  alternates: {
    canonical: "https://www.valentinproteccionintegral.com/garantias",
  },
};

export const dynamic = "force-static";

export default function GarantiasPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Inicio", url: "/" },
          { name: "Garantías", url: "/garantias" },
        ]}
      />
      <Header />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#123B68] via-[#0F5E9C] to-[#123B68] py-20 lg:py-28">
          <div className="absolute inset-0 bg-[url('/images/premium/grid.svg')] opacity-10" />
          <div className="container-shell relative z-10 text-center">
            <p className="kicker !text-white/80 !border-white/30">Compromiso real</p>
            <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-4xl mx-auto">
              Lo que nos comprometemos a cumplir. Siempre.
            </h1>
          </div>
        </section>

        {/* 4 Pilares de Garantía */}
        <section className="section-pad bg-white">
          <div className="container-shell">
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {/* Diseño serio */}
              <div className="glass-card-premium p-8">
                <div className="w-14 h-14 mb-6 rounded-2xl bg-[var(--blue)]/10 flex items-center justify-center">
                  <Shield className="h-7 w-7 text-[var(--blue)]" />
                </div>
                <h3 className="font-heading text-2xl font-bold mb-4">Diseño serio</h3>
                <p className="text-[var(--muted)] leading-relaxed">
                  Trabajamos con la misma seriedad que esperarías de cualquier gran firma. Recibirás documentación clara, comunicación profesional y propuestas presentadas con cuidado.
                </p>
              </div>

              {/* Proceso sencillo */}
              <div className="glass-card-premium p-8">
                <div className="w-14 h-14 mb-6 rounded-2xl bg-[var(--blue)]/10 flex items-center justify-center">
                  <Zap className="h-7 w-7 text-[var(--blue)]" />
                </div>
                <h3 className="font-heading text-2xl font-bold mb-4">Proceso sencillo</h3>
                <p className="text-[var(--muted)] leading-relaxed">
                  Sin formularios interminables, sin burocracia innecesaria. Consulta, propuesta y contratación en 3 pasos. Si algo se puede simplificar, lo simplificamos.
                </p>
              </div>

              {/* Respuesta garantizada */}
              <div className="glass-card-premium p-8">
                <div className="w-14 h-14 mb-6 rounded-2xl bg-[var(--blue)]/10 flex items-center justify-center">
                  <Clock className="h-7 w-7 text-[var(--blue)]" />
                </div>
                <h3 className="font-heading text-2xl font-bold mb-4">Respuesta garantizada</h3>
                <p className="text-[var(--muted)] leading-relaxed">
                  Respondemos en menos de 24 horas laborables. Si no es así, te llamamos nosotros con una explicación y una disculpa real.
                </p>
              </div>

              {/* Sin presión, nunca */}
              <div className="glass-card-premium p-8 border-[var(--blue)]">
                <div className="w-14 h-14 mb-6 rounded-2xl bg-[var(--blue)]/10 flex items-center justify-center">
                  <HeartHandshake className="h-7 w-7 text-[var(--blue)]" />
                </div>
                <h3 className="font-heading text-2xl font-bold mb-4">Sin presión, nunca</h3>
                <p className="text-[var(--muted)] leading-relaxed">
                  No trabajamos a comisión por venderte el producto más caro. Nuestro objetivo es que contrates lo que de verdad te conviene. Si no hay nada que encaje, te lo decimos.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ¿Qué pasa si no cumplimos? */}
        <section className="section-pad bg-[var(--bg-soft)]">
          <div className="container-shell">
            <div className="glass-card-premium p-10 md:p-12 max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
                ¿Qué pasa si no cumplimos?
              </h2>
              <p className="text-lg text-[var(--muted)] leading-relaxed mb-6">
                Nuestro negocio vive de la recomendación. Un cliente insatisfecho nos cuesta más que cualquier póliza. Por eso estas garantías no son marketing — son la base de cómo trabajamos.
              </p>
              <p className="text-lg text-[var(--muted)] leading-relaxed">
                En más de 10 años hemos asesorado a más de 1.200 familias en Madrid. La mayoría de nuestros nuevos clientes llegan recomendados por alguien que ya confía en nosotros. Esa es nuestra mejor garantía.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="section-pad bg-gradient-to-br from-[#123B68] to-[#0F5E9C]">
          <div className="container-shell text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white font-heading mb-6">
              Compruébalo sin compromiso
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Cuéntanos qué necesitas. Te responderemos en menos de 24h con una propuesta honesta o te diremos si no hay nada que encaje contigo.
            </p>
            <a
              href={buildWhatsAppHref("Hola, quiero conocer más sobre vuestras garantías de asesoramiento.")}
              className="btn-whatsapp !text-lg !px-10 !py-5 inline-flex"
            >
              <WhatsAppIcon className="h-6 w-6" />
              Escríbenos por WhatsApp
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <StickyWhatsApp />
    </>
  );
}
