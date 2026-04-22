import type { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { StickyWhatsApp } from "@/components/sticky-whatsapp";
import { buildWhatsAppHref } from "@/lib/products";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { Sparkles, CheckCircle2, Clock, Shield, Heart } from "lucide-react";

export const metadata: Metadata = {
  title: "Pack Accidentes y Decesos Madrid | Protección Completa | Valentín Protección Integral",
  description: "Pack combinado accidentes + decesos. Cubre el imprevisto de hoy y protege a tu familia del mañana. Desde 18€/mes. Rosa y Sebastián.",
  keywords: ["pack accidentes decesos Madrid","seguro accidentes decesos combinado","protección completa familia Madrid"],
  alternates: { canonical: "https://valentinproteccionintegral.com/seguros/accidentes-decesos" },
  openGraph: {
    title: "Pack Accidentes y Decesos Madrid | Protección Completa",
    description: "Accidentes cubre hoy. Decesos protege mañana. Un pack. Tranquilidad total.",
    url: "https://valentinproteccionintegral.com/seguros/accidentes-decesos",
    siteName: "Valentín Protección Integral",
    locale: "es_ES",
    type: "website",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "InsuranceAgency",
  "name": "Pack Accidentes y Decesos Madrid - Valentín Protección Integral",
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
  "description": "Pack combinado accidentes + decesos. Protección completa para hoy y mañana.",
};

export const dynamic = "force-static";

export default function AccidentesDecesosPage() {
  const wCotiza = buildWhatsAppHref("Hola, quiero información sobre el pack combinado accidentes + decesos.");

  return (
    <>
      <BreadcrumbSchema items={[{name:"Inicio",url:"/"},{name:"Seguros",url:"/seguros"},{name:"Accidentes y Decesos",url:"/seguros/accidentes-decesos"}]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(serviceSchema)}} />
      <Header />
      <main className="min-h-screen bg-[#0C0C0C] text-white">
        
        {/* HERO ELEVENLABS — Aurora dramática */}
        <section className="relative bg-[#0C0C0C] min-h-screen overflow-hidden flex items-center">
          {/* Aurora gradient blob */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-20 blur-[120px] bg-gradient-to-r from-[#FF6B35] via-[#9B59B6] to-[#2C3E8C] rounded-full" />
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-20 relative z-10">
            <div className="max-w-3xl">
              {/* Badge combinado */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[rgba(255,107,53,0.3)] bg-[rgba(255,107,53,0.08)] text-[#FF6B35] text-sm mb-8">
                <Sparkles className="w-4 h-4" />
                Pack Accidentes + Decesos — La protección completa
              </div>

              <h1 className="text-5xl sm:text-6xl md:text-7xl font-semibold text-white tracking-tight leading-[1.05] mb-6">
                Protección total:
                <br />
                <span className="bg-gradient-to-r from-[#FF6B35] to-[#9B59B6] bg-clip-text text-transparent">
                  hoy y mañana.
                </span>
              </h1>

              <p className="text-xl text-[#888899] mt-6 max-w-2xl leading-relaxed">
                Accidentes cubre el imprevisto de hoy.
                Decesos protege a tu familia del mañana.
                Un pack. Una llamada. Tranquilidad total.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 mt-10">
                <a 
                  href={wCotiza}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FF6B35] to-[#9B59B6] text-white px-8 py-4 rounded-xl font-medium hover:shadow-[0_0_40px_rgba(255,107,53,0.3)] transition-all hover:scale-[1.02]"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                  Cotiza el pack ahora
                </a>
                <a 
                  href="tel:603448765"
                  className="inline-flex items-center gap-2 border border-[rgba(255,255,255,0.2)] text-white px-8 py-4 rounded-xl font-medium hover:bg-[rgba(255,255,255,0.05)] transition-all"
                >
                  Llamar: 603 44 87 65
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* DOS MUNDOS — Split visual */}
        <section className="py-24 bg-[#0C0C0C]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-6xl">
            <div className="grid md:grid-cols-2 gap-1 rounded-3xl overflow-hidden">
              {/* Izquierda: Accidentes — warm orange */}
              <div className="bg-gradient-to-br from-[#FF6B35]/10 to-transparent p-12 border-r border-[rgba(255,255,255,0.06)]">
                <p className="text-[#FF6B35] font-mono text-xs tracking-widest mb-4">
                  ACCIDENTES
                </p>
                <h3 className="text-3xl font-semibold text-white mb-4">
                  El imprevisto de hoy
                </h3>
                <ul className="space-y-3 text-[#888899]">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#FF6B35]" /> Desde 3€/mes</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#FF6B35]" /> Cobertura deportes</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#FF6B35]" /> Trabajo + ocio</li>
                </ul>
              </div>
              {/* Derecha: Decesos — cool purple */}
              <div className="bg-gradient-to-bl from-[#9B59B6]/10 to-transparent p-12">
                <p className="text-[#9B59B6] font-mono text-xs tracking-widest mb-4">
                  DECESOS
                </p>
                <h3 className="text-3xl font-semibold text-white mb-4">
                  La paz de mañana
                </h3>
                <ul className="space-y-3 text-[#888899]">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#9B59B6]" /> Gastos sepelio 0€</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#9B59B6]" /> Familia tranquila</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#9B59B6]" /> Gestión completa</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* STATS PACK */}
        <section className="py-16 bg-[#0C0C0C]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-4xl">
            <div className="grid grid-cols-3 gap-8 py-16 border-y border-[rgba(255,255,255,0.06)]">
              <div className="text-center">
                <p className="text-5xl font-light text-white">Pack</p>
                <p className="text-[#888899] text-sm mt-2">condiciones especiales por pack</p>
              </div>
              <div className="text-center">
                <p className="text-5xl font-light text-[#FF6B35]">Día 1</p>
                <p className="text-[#888899] text-sm mt-2">Cobertura inmediata</p>
              </div>
              <div className="text-center">
                <p className="text-5xl font-light text-[#9B59B6]">30&apos;</p>
                <p className="text-[#888899] text-sm mt-2">Respuesta máxima</p>
              </div>
            </div>
          </div>
        </section>

        {/* FOTO EQUIPO */}
        <section className="py-24 bg-[#0C0C0C]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl">
            <div className="relative">
              <Image 
                src="/images/rosa_y_sebastian.jpeg"
                alt="Rosa y Sebastián - Tu protección completa"
                width={1200}
                height={675}
                className="rounded-3xl border border-[rgba(255,255,255,0.08)] shadow-[0_0_80px_rgba(155,89,182,0.2)] aspect-[16/9] object-cover object-top"
              />
              <div className="absolute bottom-8 left-8 bg-[rgba(12,12,12,0.9)] backdrop-blur-sm px-6 py-4 rounded-2xl border border-[rgba(255,255,255,0.08)]">
                <p className="text-white font-semibold">Rosa y Sebastián</p>
                <p className="text-[#888899] text-sm">+10 años protegiendo familias en Madrid</p>
              </div>
            </div>
          </div>
        </section>

        {/* VENTAJAS PACK */}
        <section className="py-24 bg-[#141414]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-4xl">
            <h2 className="text-3xl font-semibold text-white text-center mb-12">
              Ventajas del pack combinado
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: Heart, title: "Una sola gestión", desc: "Un asesor para ambos seguros. Simplificas papeleo." },
                { icon: Shield, title: "Precio preferente", desc: "5% de descuento por contratar ambos juntos." },
                { icon: Clock, title: "Cobertura inmediata", desc: "Accidentes desde día 1. Decesos sin carencias." },
                { icon: CheckCircle2, title: "Tranquilidad total", desc: "Hoy y mañana cubiertos. Sin preocupaciones." },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-6 rounded-2xl bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.08)]">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#FF6B35]/20 to-[#9B59B6]/20 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-[#FF6B35]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">{item.title}</h3>
                    <p className="text-[#888899] text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA FINAL Aurora */}
        <section className="bg-gradient-to-r from-[#FF6B35] via-[#9B59B6] to-[#2C3E8C] py-24 text-center">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-4xl font-semibold text-white">
              Un pack. Una decisión. Toda la tranquilidad.
            </h2>
            <a 
              href={wCotiza}
              className="inline-flex items-center gap-2 bg-white text-[#9B59B6] px-10 py-4 rounded-xl font-medium text-lg mt-8 hover:shadow-2xl transition-all"
            >
              <WhatsAppIcon className="w-5 h-5" />
              WhatsApp: 603 44 87 65
            </a>
            <p className="text-white/50 text-sm mt-6">
              NIF: 79234434D | DGSFP: C012479234434D
            </p>
          </div>
        </section>

      </main>
      <Footer />
      <StickyWhatsApp />
    </>
  );
}
