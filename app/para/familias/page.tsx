import type { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { StickyWhatsApp } from "@/components/sticky-whatsapp";
import { buildWhatsAppHref } from "@/lib/products";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { Sparkles, CheckCircle2, Clock, Shield, Heart, Home, Users, Baby, Umbrella, Lock, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Seguros Familiares Madrid | Valentín Protección Integral",
  description: "Seguros completos familias Madrid. Salud, vida, hogar todo en uno. Cotiza WhatsApp familiar. Rosa y Sebastián.",
  keywords: ["seguros familiares Madrid","seguro familia completa Madrid","seguro salud familia Madrid"],
  alternates: { canonical: "https://valentinproteccionintegral.com/para/familias" },
  openGraph: {
    title: "Seguros Familiares Madrid | Salud, Vida, Hogar",
    description: "Todo en una sola gestión. Salud, vida, hogar para tu familia. WhatsApp 30min.",
    url: "https://valentinproteccionintegral.com/para/familias",
    siteName: "Valentín Protección Integral",
    locale: "es_ES",
    type: "website",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "InsuranceAgency",
  "name": "Seguros Familiares Madrid - Valentín Protección Integral",
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
  "description": "Seguros completos familias Madrid. Salud, vida, hogar todo en uno. Cotiza WhatsApp.",
};

export const dynamic = "force-static";

export default function FamiliasPage() {
  const wCotiza = buildWhatsAppHref("Hola, quiero un seguro completo para mi familia en Madrid. Salud, vida, hogar.");

  return (
    <>
      <BreadcrumbSchema items={[{name:"Inicio",url:"/"},{name:"Para",url:"/para"},{name:"Familias",url:"/para/familias"}]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(serviceSchema)}} />
      <Header />
      <main className="min-h-screen bg-white">
        
        {/* HERO NOTION — Purple, warm neutrals, generous whitespace */}
        <section className="pt-24 pb-20 bg-[#f6f5f4]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl text-center">
            {/* Badge Notion pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[rgba(0,0,0,0.1)] text-[#615d59] text-xs mb-8">
              <Sparkles className="w-3.5 h-3.5 text-[#6C5CE7]" />
              +1.200 familias protegidas
            </div>
            
            {/* H1 Notion — 64px weight 700, tight tracking */}
            <h1 className="text-[48px] sm:text-[56px] lg:text-[64px] font-bold text-[rgba(0,0,0,0.95)] leading-[1.00] tracking-[-2.125px] mb-6">
              Seguros Completos
              <br />
              <span className="text-[#6C5CE7]">para tu Familia</span>
            </h1>
            
            {/* Subhead */}
            <p className="text-xl text-[#615d59] leading-[1.50] mb-10 max-w-2xl mx-auto">
              Salud, vida, hogar. Todo en una sola gestión.
            </p>
            
            {/* CTAs Notion — 4px radius, purple */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <a 
                href={wCotiza}
                className="group inline-flex items-center gap-2 bg-[#6C5CE7] hover:bg-[#5B4BD4] text-white px-5 py-2.5 rounded text-base font-semibold transition-all hover:scale-105 active:scale-95"
              >
                <WhatsAppIcon className="w-4 h-4" />
                💬 Cotizar Familiar
                <span className="hidden group-hover:inline text-sm ml-1">
                  👨‍👩‍👧‍👦 8% descuento
                </span>
              </a>
              <a 
                href="#paquetes"
                className="inline-flex items-center gap-2 bg-[rgba(0,0,0,0.05)] text-[rgba(0,0,0,0.95)] px-5 py-2.5 rounded text-base font-semibold hover:bg-[rgba(0,0,0,0.08)] transition-all"
              >
                Ver paquetes
              </a>
            </div>
            
            {/* Hero image */}
            <div className="relative max-w-4xl mx-auto mt-8 rounded-xl overflow-hidden border border-[rgba(0,0,0,0.1)] shadow-[rgba(0,0,0,0.04)_0px_4px_18px,rgba(0,0,0,0.027)_0px_2px_8px]">
              <Image
                src="https://images.pexels.com/photos/1128317/pexels-photo-1128317.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Familia feliz Madrid parque"
                width={900}
                height={500}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>
        </section>

        {/* PAQUETES FAMILIA — Notion cards escalables */}
        <section id="paquetes" className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl">
            <h2 className="text-[48px] font-bold text-[rgba(0,0,0,0.95)] leading-[1.00] tracking-[-1.5px] text-center mb-16">
              Paquetes Familia
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { 
                  name: "BÁSICO", 
                  price: "desde 45€/mes",
                  features: ["Salud niños", "Vida padres", "Accidentes"],
                  color: "#6C5CE7"
                },
                { 
                  name: "COMPLETO", 
                  price: "desde 75€/mes",
                  features: ["Salud + Vida", "Hogar completo", "Decesos", "RC civil"],
                  color: "#5B4BD4",
                  popular: true
                },
                { 
                  name: "PREMIUM", 
                  price: "desde 120€/mes",
                  features: ["Todo ilimitado", "Dental", "Asistencia 24h", "Revisión anual"],
                  color: "#4A3AC2"
                },
              ].map((pkg, i) => (
                <div key={i} className={`bg-white rounded-xl p-6 border border-[rgba(0,0,0,0.1)] shadow-[rgba(0,0,0,0.04)_0px_4px_18px] ${pkg.popular ? 'ring-2 ring-[#6C5CE7]' : ''}`}>
                  {pkg.popular && (
                    <div className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-[#6C5CE7]/10 text-[#6C5CE7] text-xs font-semibold mb-4">
                      <Sparkles className="w-3 h-3" />
                      Más popular
                    </div>
                  )}
                  <h3 className="text-[22px] font-bold text-[rgba(0,0,0,0.95)] tracking-[-0.25px] mb-1">{pkg.name}</h3>
                  <p className="text-lg text-[#6C5CE7] font-semibold mb-4">{pkg.price}</p>
                  <ul className="space-y-2 mb-6">
                    {pkg.features.map((feat, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-[#615d59]">
                        <CheckCircle2 className="w-4 h-4 text-[#6C5CE7]" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                  <a 
                    href={wCotiza}
                    className="block w-full text-center py-2.5 rounded text-sm font-semibold transition-all active:scale-95"
                    style={{ backgroundColor: pkg.color, color: 'white' }}
                  >
                    Elegir {pkg.name}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* COBERTURAS — Notion database style */}
        <section className="py-24 bg-[#f6f5f4]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl">
            <h2 className="text-[48px] font-bold text-[rgba(0,0,0,0.95)] leading-[1.00] tracking-[-1.5px] text-center mb-16">
              Coberturas por miembro
            </h2>
            
            <div className="bg-white rounded-xl border border-[rgba(0,0,0,0.1)] overflow-hidden shadow-[rgba(0,0,0,0.04)_0px_4px_18px]">
              {/* Table header */}
              <div className="grid grid-cols-3 border-b border-[rgba(0,0,0,0.1)] bg-[#f6f5f4] py-3 px-6">
                <div className="text-sm font-semibold text-[#615d59]">Miembro</div>
                <div className="text-sm font-semibold text-[#615d59]">Coberturas incluidas</div>
                <div className="text-sm font-semibold text-[#615d59]">Extras</div>
              </div>
              {/* Table rows */}
              {[
                { member: "Niños", icon: Baby, coverage: "Salud + Accidentes", extra: "Pediatría 24h" },
                { member: "Adultos", icon: Users, coverage: "Vida + Salud", extra: "Especialistas ilimitados" },
                { member: "Hogar", icon: Home, coverage: "Responsabilidad + Robo", extra: "Asistencia domicilio" },
              ].map((row, i) => (
                <div key={i} className="grid grid-cols-3 border-b border-[rgba(0,0,0,0.05)] py-4 px-6 hover:bg-[#fafafa] transition-colors">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded bg-[#6C5CE7]/10 flex items-center justify-center">
                      <row.icon className="w-4 h-4 text-[#6C5CE7]" />
                    </div>
                    <span className="font-semibold text-[rgba(0,0,0,0.95)]">{row.member}</span>
                  </div>
                  <div className="text-[#615d59]">{row.coverage}</div>
                  <div className="text-sm text-[#a39e98]">{row.extra}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* EQUIPO FAMILIAR */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative rounded-xl overflow-hidden border border-[rgba(0,0,0,0.1)] shadow-[rgba(0,0,0,0.04)_0px_4px_18px]">
                <Image
                  src="/images/rosa_y_sebastian.jpeg"
                  alt="Rosa y Sebastián — familia tras familia"
                  width={500}
                  height={600}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#6C5CE7]/10 text-[#6C5CE7] text-xs font-semibold mb-6">
                  <Heart className="w-3.5 h-3.5" />
                  Tu equipo familiar
                </div>
                <h2 className="text-[40px] font-bold text-[rgba(0,0,0,0.95)] leading-[1.50] mb-4">
                  Rosa y Sebastián
                </h2>
                <p className="text-lg text-[#615d59] leading-[1.50] mb-6">
                  Familia tras familia, llevamos más de 10 años protegiendo 
                  hogares en Madrid. Entendemos lo que significa cuidar 
                  de quienes más quieres.
                </p>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#2a9d99]/10 text-[#1aae39] text-xs font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  DGSFP: C012479234434D
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROCESO FAMILIAR */}
        <section className="py-24 bg-[#f6f5f4]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl">
            <h2 className="text-[48px] font-bold text-[rgba(0,0,0,0.95)] leading-[1.00] tracking-[-1.5px] text-center mb-16">
              Proceso familiar
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { num: "1", title: "WhatsApp", desc: "Nos cuentas la composición de tu familia." },
                { num: "2", title: "Personalizado", desc: "En 30 min tu paquete a medida." },
                { num: "3", title: "Unificada", desc: "Una sola factura. Una sola gestión." },
              ].map((step, i) => (
                <div key={i} className="text-center">
                  <div className="w-12 h-12 rounded-lg bg-[#6C5CE7] text-white flex items-center justify-center text-lg font-bold mx-auto mb-4">
                    {step.num}
                  </div>
                  <h3 className="text-[22px] font-bold text-[rgba(0,0,0,0.95)] tracking-[-0.25px] mb-2">{step.title}</h3>
                  <p className="text-base text-[#615d59] leading-[1.50]">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* GARANTÍAS — Notion badges morados */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl">
            <h2 className="text-[48px] font-bold text-[rgba(0,0,0,0.95)] leading-[1.00] tracking-[-1.5px] text-center mb-12">
              Garantías
            </h2>
            
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Familiares en un solo lugar",
                "Revisión anual gratuita",
                "Sin permanencia",
                "DGSFP verificado",
              ].map((item, i) => (
                <div key={i} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#6C5CE7]/10 text-[#6C5CE7] text-sm font-semibold">
                  <CheckCircle2 className="w-4 h-4" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA FINAL — Morado grande */}
        <section className="py-24 bg-[#6C5CE7]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-4xl text-center">
            <h2 className="text-[48px] sm:text-[56px] font-bold text-white leading-[1.00] tracking-[-1.5px] mb-4">
              Proteger mi familia
            </h2>
            <p className="text-xl text-white/80 mb-10">
              Un WhatsApp. 30 minutos. Toda la tranquilidad.
            </p>
            
            <a 
              href={wCotiza}
              className="group inline-flex items-center gap-2 bg-white text-[#6C5CE7] px-8 py-4 rounded text-lg font-bold transition-all hover:scale-105 active:scale-95"
            >
              <WhatsAppIcon className="w-5 h-5" />
              💬 Cotizar Familiar
              <span className="hidden group-hover:inline text-sm ml-2 text-[#6C5CE7]/70">
                👨‍👩‍👧‍👦 8% descuento
              </span>
            </a>
            
            <p className="text-sm text-white/60 mt-8">
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
