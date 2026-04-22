import type { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { StickyWhatsApp } from "@/components/sticky-whatsapp";
import { buildWhatsAppHref } from "@/lib/products";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { Shield, FileCheck, Heart, Users, TrendingUp, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Seguro de Vida Madrid | Protección Familiar Directa | Valentín Protección Integral",
  description: "Seguro de vida con indemnización directa al notario. Capital mínimo 18.000€, el doble de la competencia. Suicidio cubierto año 1. Rosa y Sebastián.",
  keywords: ["seguro vida Madrid","seguro vida hipoteca Madrid","indemnización directa seguro vida","capital seguro vida 18.000€"],
  alternates: { canonical: "https://valentinproteccionintegral.com/seguros/vida" },
  openGraph: {
    title: "Seguro de Vida Madrid | Protección Familiar Directa",
    description: "Capital mínimo 18.000€, el doble de la competencia. Indemnización directa al notario.",
    url: "https://valentinproteccionintegral.com/seguros/vida",
    siteName: "Valentín Protección Integral",
    locale: "es_ES",
    type: "website",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Seguro de Vida Madrid",
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
  "description": "Seguro de vida con capital mínimo 18.000€. Indemnización directa al notario sin intermediarios. Suicidio cubierto desde año 1.",
};

export const dynamic = "force-static";

export default function VidaPage() {
  const wCotiza = buildWhatsAppHref("Hola, quiero información sobre seguro de vida con indemnización directa. ¿Cuál es el capital mínimo?");

  return (
    <>
      <BreadcrumbSchema items={[{name:"Inicio",url:"/"},{name:"Seguros",url:"/seguros"},{name:"Vida",url:"/seguros/vida"}]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(serviceSchema)}} />
      <Header />
      <main className="min-h-screen bg-[#191C1F] text-white">
        
        {/* HERO REVOLUT — Pregunta impactante */}
        <section className="min-h-screen flex items-center bg-[#191C1F] relative overflow-hidden">
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0075EB]/10 via-transparent to-transparent" />
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-20 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-[#27C880] font-mono text-sm tracking-widest uppercase mb-6">
                  PROTECCIÓN FAMILIAR DIRECTA
                </p>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-8">
                  ¿Sabes cuánto le
                  <br />
                  <span className="text-[#0075EB]">quedaría a tu familia</span>
                  <br />
                  ante invalidez?
                </h1>
                
                {/* Stats impacto Revolut */}
                <div className="flex flex-wrap gap-6 mt-8">
                  <div className="border-l-2 border-[#0075EB] pl-4">
                    <p className="text-3xl font-bold text-white">50%</p>
                    <p className="text-[#8A9BB0] text-sm">Hipoteca banco</p>
                  </div>
                  <div className="border-l-2 border-[#0075EB] pl-4">
                    <p className="text-3xl font-bold text-white">40%</p>
                    <p className="text-[#8A9BB0] text-sm">Nómina trabajo</p>
                  </div>
                  <div className="border-l-2 border-[#27C880] pl-4">
                    <p className="text-3xl font-bold text-[#27C880]">18.000€</p>
                    <p className="text-[#8A9BB0] text-sm">Nosotros mínimo</p>
                  </div>
                </div>
              </div>
              
              <div className="hidden lg:block relative">
                <Image
                  src="https://images.pexels.com/photos/3807770/pexels-photo-3807770.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Protección familiar seguridad profesional"
                  width={500}
                  height={600}
                  className="rounded-2xl object-cover brightness-90 border border-[rgba(255,255,255,0.08)] shadow-[0_0_60px_rgba(0,117,235,0.2)]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* DIFERENCIADORES — Cards dark Revolut */}
        <section className="py-24 bg-[#1E2328]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
              Por qué elegirnos
            </h2>
            <p className="text-[#8A9BB0] text-center mb-12 max-w-2xl mx-auto">
              El doble de capital mínimo. Indemnización directa. Cobertura completa desde el primer día.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: FileCheck, title: "Directo notario", desc: "Sin intermediarios ni gestores. Tu familia recibe el 100% del capital en 10-15 días.", color: "#0075EB" },
                { icon: Shield, title: "Suicidio año 1", desc: "Cubierto desde el primer año. A diferencia de la mayoría de pólizas del mercado.", color: "#27C880" },
                { icon: TrendingUp, title: "18.000€ mínimo", desc: "El doble de la competencia (~9.000€ típico). Capital real para gastos funerarios y deudas.", color: "#0075EB" },
                { icon: Heart, title: "Complementa banco", desc: "El seguro del banco cubre 50% en invalidez. Nosotros cubrimos el gap que deja tu familia expuesta.", color: "#27C880" },
              ].map((item, i) => (
                <div key={i} className="rounded-2xl bg-[#191C1F] border border-[rgba(255,255,255,0.08)] p-6 hover:border-[rgba(0,117,235,0.4)] transition-all">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: `${item.color}20` }}>
                    <item.icon className="w-6 h-6" style={{ color: item.color }} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-[#8A9BB0] text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FOTO EQUIPO dark Revolut */}
        <section className="py-24 bg-[#191C1F]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <Image 
                src="/images/rosa_y_sebastian.jpeg"
                alt="Rosa y Sebastián - Protección familiar directa"
                width={600}
                height={700}
                className="rounded-2xl object-cover brightness-90 border border-[rgba(255,255,255,0.08)] shadow-[0_0_60px_rgba(0,117,235,0.2)]"
              />
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Rosa y Sebastián
                </h2>
                <p className="text-lg text-[#8A9BB0] leading-relaxed mb-6">
                  Tu asesor personal de por vida. No un call center, no un operador diferente cada vez. 
                  Misma persona, siempre disponible, respuesta en 30 minutos.
                </p>
                <div className="space-y-3">
                  {[
                    "+10 años protegiendo familias en Madrid",
                    "+1.200 familias ya protegidas",
                    "Capital mínimo 18.000€ (doble competencia)",
                    "DGSFP regulados: C012479234434D",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#27C880]" />
                      <span className="text-white">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA FINAL Revolut */}
        <section className="py-24 bg-gradient-to-br from-[#0075EB] to-[#00C6FF]">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Protege a tu familia hoy
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Capital mínimo 18.000€. Indemnización directa al notario. 
              Suicidio cubierto desde el primer año.
            </p>
            <a 
              href={wCotiza}
              className="inline-flex items-center gap-3 bg-white text-[#0075EB] px-10 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl transition-all hover:scale-[1.02]"
            >
              <WhatsAppIcon className="w-6 h-6" />
              Cotizar seguro de vida ahora
            </a>
            <p className="text-sm text-white/60 mt-6">
              NIF: 79234434D · DGSFP: C012479234434D
            </p>
          </div>
        </section>

      </main>
      <Footer />
      <StickyWhatsApp />
    </>
  );
}
