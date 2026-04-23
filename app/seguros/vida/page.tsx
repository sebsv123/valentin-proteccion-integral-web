import type { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { StickyWhatsApp } from "@/components/sticky-whatsapp";
import { buildWhatsAppHref } from "@/lib/products";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { Sparkles, CheckCircle2, Clock, Shield, Heart, Home, Wallet, AlertTriangle, Users, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Seguro de Vida Hipoteca Madrid | Valentín Protección",
  description: "Seguro de vida para tu hipoteca en Madrid. Ahorra hasta 50% vs tu banco. Cotiza gratis en WhatsApp · Respuesta 30min · Sin permanencia.",
  keywords: ["seguro vida hipoteca Madrid","seguro vida hipoteca","proteccion vida familia Madrid"],
  alternates: { canonical: "https://valentinproteccionintegral.com/seguros/vida" },
  openGraph: {
    title: "Seguro de Vida Hipoteca Madrid | Valentín Protección",
    description: "Seguro de vida para tu hipoteca en Madrid. Ahorra hasta 50% vs tu banco. Cotiza gratis en WhatsApp · Respuesta 30min · Sin permanencia.",
    url: "https://valentinproteccionintegral.com/seguros/vida",
    siteName: "Valentín Protección Integral",
    locale: "es_ES",
    type: "website",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "InsuranceAgency",
  "name": "Seguro Vida Hipoteca Madrid - Valentín Protección Integral",
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
  "description": "Seguro de vida para hipoteca Madrid. Protege tu familia, no el banco. Cobertura hasta 500k€.",
};

export const dynamic = "force-static";

export default function VidaPage() {
  const wCotiza = buildWhatsAppHref("Hola, quiero información sobre seguro de vida para hipoteca en Madrid.");

  return (
    <>
      <BreadcrumbSchema items={[{name:"Inicio",url:"/"},{name:"Seguros",url:"/seguros"},{name:"Vida",url:"/seguros/vida"}]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(serviceSchema)}} />
      <Header />
      <main className="min-h-screen bg-white">
        
        {/* HERO — White with coral accents */}
        <section className="bg-white py-20 lg:py-28 relative overflow-hidden">
          {/* Soft coral halo behind content */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-radial from-[#e23b4a]/10 to-transparent blur-3xl pointer-events-none" />
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl relative z-10 text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#e23b4a]/10 text-[#e23b4a] text-sm mb-8">
              <Sparkles className="w-4 h-4" />
              +1.200 familias protegidas · DGSFP verificado
            </div>
            
            {/* H1 — Clean and premium */}
            <h1 className="text-[40px] sm:text-[56px] lg:text-[64px] font-semibold text-[#191c1f] leading-[1.10] tracking-[-0.02em] mb-6">
              Seguro de Vida Hipoteca Madrid
            </h1>
            
            {/* Subhead — Human and warm */}
            <p className="text-xl sm:text-2xl text-[#505a63] leading-[1.50] mb-12 max-w-2xl mx-auto">
              Protege a tu familia y deja la hipoteca resuelta.
            </p>
            
            {/* CTAs — Coral as accent */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <a 
                href={wCotiza}
                className="group inline-flex items-center gap-2 bg-[#e23b4a] hover:bg-[#c42f3d] text-white px-8 py-4 rounded-xl text-lg font-medium transition-all shadow-lg shadow-[#e23b4a]/20"
              >
                <WhatsAppIcon className="w-5 h-5" />
                Cotizar en WhatsApp
              </a>
              <a 
                href="tel:603448765"
                className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-[#191c1f] px-8 py-4 rounded-xl text-lg font-medium border-2 border-gray-200 transition-all"
              >
                <Phone className="w-5 h-5" />
                Llamar ahora
              </a>
            </div>
            
            {/* Trust row */}
            <div className="flex flex-wrap justify-center gap-8 text-[#505a63]">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#00a87e]" />
                30 min respuesta
              </span>
              <span className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-[#00a87e]" />
                Sin permanencia
              </span>
              <span className="flex items-center gap-2">
                <Heart className="w-5 h-5 text-[#e23b4a]" />
                Familia protegida
              </span>
            </div>
          </div>
        </section>

        {/* ¿QUIÉN NECESITA? — Revolut cards */}
        <section className="py-24 bg-[#f4f4f4]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl">
            <h2 className="text-[48px] font-medium text-[#191c1f] leading-[1.21] tracking-[-0.48px] text-center mb-16">
              ¿Quién lo necesita?
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: Home, title: "Nueva hipoteca", desc: "El banco lo exige. Pero tú decides dónde contratarlo." },
                { icon: Users, title: "Familia joven", desc: "Protección máxima cuando más lo necesitas." },
                { icon: Heart, title: "Tranquilidad", desc: "Duerme mejor sabiendo que tu familia está cubierta." },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-[20px] p-8 hover:bg-[#f9f9f9] transition-colors">
                  <div className="w-14 h-14 rounded-full bg-[#e23b4a]/10 flex items-center justify-center mb-6">
                    <item.icon className="w-7 h-7 text-[#e23b4a]" />
                  </div>
                  <h3 className="text-[24px] font-medium text-[#191c1f] mb-3">{item.title}</h3>
                  <p className="text-base text-[#505a63] leading-[1.50]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* COBERTURAS — Revolut grid rojo */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl">
            <h2 className="text-[48px] font-medium text-[#191c1f] leading-[1.21] tracking-[-0.48px] text-center mb-16">
              Cobertura completa
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: Wallet, title: "Capital muerte", desc: "Hasta 500.000€ de cobertura para tu familia." },
                { icon: AlertTriangle, title: "Invalidez absoluta", desc: "100% del capital en caso de invalidez permanente." },
                { icon: Shield, title: "Doble capital accidentes", desc: "El doble si el fallecimiento es por accidente." },
                { icon: CheckCircle2, title: "Exención hipoteca", desc: "Tu familia no hereda la deuda del banco." },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-6 rounded-[20px] bg-[#f4f4f4] hover:bg-[#e8e8e8] transition-colors">
                  <div className="w-12 h-12 rounded-full bg-[#e23b4a] flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-[20px] font-medium text-[#191c1f] mb-1">{item.title}</h3>
                    <p className="text-base text-[#505a63] leading-[1.50]">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* EQUIPO — Revolut flat style */}
        <section className="py-24 bg-[#f4f4f4]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="rounded-[20px] overflow-hidden relative">
                <Image
                  src="/images/rosa_y_sebastian.jpeg"
                  alt="Sebastián Valentín · Especialista hipotecas"
                  width={500}
                  height={500}
                  className="w-full h-auto object-cover object-[center_20%]"
                  priority
                  style={{ aspectRatio: '1/1' }}
                />
              </div>
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#e23b4a]/10 text-[#e23b4a] text-sm mb-6">
                  <Users className="w-4 h-4" />
                  Tu especialista hipotecas
                </div>
                <h2 className="text-[48px] font-medium text-[#191c1f] leading-[1.21] tracking-[-0.48px] mb-4">
                  Sebastián Valentín
                </h2>
                <p className="text-xl text-[#505a63] mb-6">
                  Especialista en seguros de vida para hipotecas.
                </p>
                <p className="text-base text-[#505a63] leading-[1.50] mb-8">
                  +10 años ayudando a familias de Madrid a protegerse 
                  frente al banco. Te explico cada cobertura sin tecnicismos.
                </p>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00a87e]/10 text-[#006400] text-sm">
                  <CheckCircle2 className="w-4 h-4" />
                  DGSFP: C012479234434D
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROCESO — 3 pasos rojo */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl">
            <h2 className="text-[48px] font-medium text-[#191c1f] leading-[1.21] tracking-[-0.48px] text-center mb-16">
              Proceso simple
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { num: "1", title: "WhatsApp", desc: "Nos cuentas el importe de tu hipoteca." },
                { num: "2", title: "Cotizamos", desc: "En 30 min tienes tu mejor opción." },
                { num: "3", title: "Alta 24h", desc: "Sin papeles. Sin esperas." },
              ].map((step, i) => (
                <div key={i} className="text-center">
                  <div className="w-16 h-16 rounded-full bg-[#e23b4a] text-white flex items-center justify-center text-[24px] font-medium mx-auto mb-6">
                    {step.num}
                  </div>
                  <h3 className="text-[24px] font-medium text-[#191c1f] mb-2">{step.title}</h3>
                  <p className="text-base text-[#505a63] leading-[1.50]">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA + GARANTÍAS — Revolut dark section */}
        <section className="py-24 bg-[#191c1f]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-4xl text-center">
            <h2 className="text-[48px] sm:text-[64px] font-medium text-white leading-[1.00] tracking-[-0.8px] mb-6">
              Protege tu familia hoy
            </h2>
            <p className="text-xl text-white/60 mb-10">
              Un WhatsApp. 30 minutos. Sin compromiso.
            </p>
            
            <a 
              href={wCotiza}
              className="group inline-flex items-center gap-2 bg-[#e23b4a] hover:bg-[#c42f3d] text-white px-10 py-4 rounded-full text-lg font-medium transition-colors"
            >
              Cotizar por WhatsApp
              <span className="hidden group-hover:inline text-sm ml-2 text-white/80">
                🎁 Vida + Decesos = condiciones especiales
              </span>
            </a>
            
            {/* Garantías badges */}
            <div className="flex flex-wrap justify-center gap-4 mt-12">
              {[
                "30min respuesta",
                "Sin permanencia",
                "DGSFP verificado",
              ].map((item, i) => (
                <div key={i} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white/80 text-sm">
                  <CheckCircle2 className="w-4 h-4" />
                  {item}
                </div>
              ))}
            </div>
            
            <p className="text-sm text-white/40 mt-8">
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
