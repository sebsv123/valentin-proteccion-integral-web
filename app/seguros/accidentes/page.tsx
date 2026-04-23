import type { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { StickyWhatsApp } from "@/components/sticky-whatsapp";
import { buildWhatsAppHref } from "@/lib/products";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import GuaranteeBadge from "@/components/GuaranteeBadge";
import { Sparkles, CheckCircle2, Mountain, Bike, Dumbbell, Bike as BikeIcon, Trophy, Heart, Shield, Zap, AlertTriangle, Activity } from "lucide-react";

export const metadata: Metadata = {
  title: "Seguro Accidentes Deportes Madrid | Valentín Protección Integral",
  description: "Seguro accidentes deportivos Madrid desde muy poco al mes. Esquí, moto, running. Cotiza WhatsApp 30min. Rosa y Sebastián.",
  keywords: ["seguro accidentes deportes Madrid","seguro deportes extremos Madrid","seguro accidentes esqui moto"],
  alternates: { canonical: "https://valentinproteccionintegral.com/seguros/accidentes" },
  openGraph: {
    title: "Seguro Accidentes Deportes Madrid | Esquí, Moto, BTT",
    description: "Desde muy poco al mes. Esquí, moto, BTT, gym. Cobertura inmediata. WhatsApp 30min.",
    url: "https://valentinproteccionintegral.com/seguros/accidentes",
    siteName: "Valentín Protección Integral",
    locale: "es_ES",
    type: "website",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "InsuranceAgency",
  "name": "Seguro Accidentes Deportes Madrid - Valentín Protección Integral",
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
  "areaServed": ["Madrid", "Sierra de Madrid", "Boadilla del Monte", "Majadahonda", "Pozuelo de Alarcón"],
  "description": "Seguro accidentes deportivos Madrid. Esquí, moto, BTT, running, gym. Cobertura inmediata.",
};

export const dynamic = "force-static";

export default function AccidentesPage() {
  const wCotiza = buildWhatsAppHref("Hola, practico deportes y quiero un seguro de accidentes en Madrid.");

  return (
    <>
      <BreadcrumbSchema items={[{name:"Inicio",url:"/"},{name:"Seguros",url:"/seguros"},{name:"Accidentes",url:"/seguros/accidentes"}]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(serviceSchema)}} />
      <Header />
      <main className="min-h-screen bg-[#07080a] text-[#f9f9f9]">
        
        {/* HERO RAYCAST — Obsidian dark, red accent */}
        <section className="relative pt-24 pb-20 overflow-hidden">
          {/* Raycast red diagonal stripe decoration */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-bl from-[#FF6363]/20 to-transparent transform rotate-45 translate-x-1/2 -translate-y-1/2" />
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-6xl relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left: Content */}
              <div>
                {/* Guarantee Badge */}
                <div className="mb-6">
                  <GuaranteeBadge type="accidentes" />
                </div>
                
                {/* H1 Raycast */}
                <h1 className="text-[48px] sm:text-[56px] lg:text-[64px] font-semibold text-white leading-[1.10] tracking-normal mb-6">
                  Seguro
                  <br />
                  <span className="text-[#FF6363]">Accidentes</span>
                  <br />
                  Deportes
                </h1>
                
                {/* Subhead */}
                <p className="text-xl text-[#cecece] leading-relaxed mb-8 max-w-md">
                  Desde muy poco al mes.
                  <br />
                  Esquí, moto, BTT, gym.
                </p>
                
                {/* CTAs Raycast */}
                <div className="flex flex-wrap gap-4 mb-8">
                  <a 
                    href={wCotiza}
                    className="group inline-flex items-center gap-2 bg-transparent text-white px-6 py-3 rounded-full text-base font-semibold border border-[#2f3031] transition-all hover:bg-[#1b1c1e]"
                    style={{ boxShadow: 'rgba(255,255,255,0.1) 0px 1px 0px 0px inset, rgba(0,0,0,0.4) 0px 2px 4px' }}
                  >
                    Cotizar WhatsApp
                    <span className="hidden group-hover:inline text-sm ml-1 text-[#5fc992]">
                      🚀 1 mes gratis
                    </span>
                  </a>
                  <a 
                    href="#coberturas"
                    className="inline-flex items-center gap-2 text-[#55b3ff] px-6 py-3 rounded-full text-base font-medium hover:text-white transition-colors"
                  >
                    Ver coberturas →
                  </a>
                </div>
                
                {/* Trust row */}
                <div className="flex flex-wrap gap-6 text-sm text-[#9c9c9d]">
                  <span className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#5fc992]" />
                    Cobertura inmediata
                  </span>
                  <span className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-[#ffbc33]" />
                    30 min respuesta
                  </span>
                </div>
              </div>
              
              {/* Right: Hero Image */}
              <div className="relative">
                <div className="relative rounded-xl overflow-hidden border border-[#252829]" style={{ boxShadow: '0 20px 40px rgba(0,0,0,0.6)' }}>
                  <Image
                    src="https://images.pexels.com/photos/38296/cycling-mountain-bike-mountain-biking-trail-38296.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Deportes extremos Madrid sierra BTT"
                    width={600}
                    height={450}
                    className="w-full h-auto object-cover object-top"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* DEPORTES — Raycast cards */}
        <section className="py-20 border-t border-[#252829]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl">
            <h2 className="text-[32px] font-medium text-white leading-[1.17] tracking-[0.2px] text-center mb-12">
              Deportes cubiertos
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {[
                { icon: Mountain, title: "Montaña", desc: "Esquí, BTT" },
                { icon: BikeIcon, title: "Moto", desc: "Trial, enduro" },
                { icon: Activity, title: "Running", desc: "Trail, maratón" },
                { icon: Dumbbell, title: "Gym", desc: "Crossfit, pesas" },
                { icon: Trophy, title: "Fútbol", desc: "7, amateur" },
              ].map((item, i) => (
                <div key={i} className="rounded-xl p-5 bg-[#101111] border border-[#252829] hover:border-[#2f3031] transition-all">
                  <div className="w-10 h-10 rounded-lg bg-[#1b1c1e] flex items-center justify-center mb-3">
                    <item.icon className="w-5 h-5 text-[#FF6363]" />
                  </div>
                  <h3 className="text-base font-medium text-white mb-1">{item.title}</h3>
                  <p className="text-sm text-[#6a6b6c]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* COBERTURAS — Raycast grid */}
        <section id="coberturas" className="py-20 bg-[#101111] border-t border-[#252829]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl">
            <h2 className="text-[32px] font-medium text-white leading-[1.17] tracking-[0.2px] text-center mb-12">
              Cobertura completa
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: Heart, title: "Muerte", desc: "60.000€" },
                { icon: Shield, title: "Invalidez", desc: "Hasta 100%" },
                { icon: Activity, title: "Gastos médicos", desc: "6.000€" },
                { icon: AlertTriangle, title: "Hospital", desc: "100€/día" },
              ].map((item, i) => (
                <div key={i} className="rounded-xl p-5 bg-[#07080a] border border-[#252829]">
                  <div className="w-10 h-10 rounded-lg bg-[#1b1c1e] flex items-center justify-center mb-3">
                    <item.icon className="w-5 h-5 text-[#5fc992]" />
                  </div>
                  <h3 className="text-base font-medium text-white mb-1">{item.title}</h3>
                  <p className="text-sm text-[#FF6363] font-semibold">{item.desc}</p>
                </div>
              ))}
            </div>
            
            {/* Doble capital highlight */}
            <div className="mt-8 p-4 rounded-xl bg-[#1b1c1e] border border-[#FF6363]/30 text-center">
              <p className="text-[#FF6363] font-medium">
                <span className="inline-flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4" />
                  Doble capital en deportes de riesgo
                </span>
              </p>
            </div>
          </div>
        </section>

        {/* EQUIPO */}
        <section className="py-20 border-t border-[#252829]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative rounded-xl overflow-hidden border border-[#252829]" style={{ boxShadow: '0 20px 40px rgba(0,0,0,0.6)' }}>
                <Image
                  src="/images/rosa_y_sebastian.jpeg"
                  alt="Sebastián · Practicante MTB"
                  width={500}
                  height={600}
                  className="w-full h-auto object-cover object-top"
                  priority
                />
              </div>
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1b1c1e] border border-[#2f3031] text-[#5fc992] text-sm mb-6">
                  <Bike className="w-4 h-4" />
                  Practicante MTB
                </div>
                <h2 className="text-[32px] font-medium text-white leading-[1.17] tracking-[0.2px] mb-4">
                  Sebastián
                </h2>
                <p className="text-lg text-[#cecece] leading-relaxed mb-6">
                  Entiendo los riesgos porque también practico deportes de montaña. 
                  Un accidente puede pasarle a cualquiera, estando preparado 
                  es la diferencia.
                </p>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1b1c1e] border border-[#2f3031] text-[#9c9c9d] text-sm">
                  <CheckCircle2 className="w-4 h-4 text-[#5fc992]" />
                  DGSFP: C012479234434D
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROCESO RÁPIDO */}
        <section className="py-20 bg-[#101111] border-t border-[#252829]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl">
            <h2 className="text-[32px] font-medium text-white leading-[1.17] tracking-[0.2px] text-center mb-12">
              Proceso rápido
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { num: "1", title: "WhatsApp", desc: "Dinos qué deportes practicas." },
                { num: "2", title: "Específico", desc: "Cotización a medida en 30min." },
                { num: "3", title: "Inmediata", desc: "Cobertura desde el primer día." },
              ].map((step, i) => (
                <div key={i} className="text-center">
                  <div className="w-12 h-12 rounded-full bg-[#1b1c1e] border border-[#2f3031] text-[#FF6363] flex items-center justify-center text-lg font-semibold mx-auto mb-4">
                    {step.num}
                  </div>
                  <h3 className="text-xl font-medium text-white mb-2">{step.title}</h3>
                  <p className="text-base text-[#6a6b6c]">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA FINAL — Raycast speed */}
        <section className="py-24 bg-[#101111] border-t border-[#252829]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-4xl text-center">
            <h2 className="text-[48px] sm:text-[56px] font-semibold text-white leading-[1.10] mb-4">
              Protegerme <span className="text-[#FF6363]">YA</span>
            </h2>
            <p className="text-xl text-[#cecece] mb-10">
              Un WhatsApp. 30 minutos. Listo para salir.
            </p>
            
            <a 
              href={wCotiza}
              className="group inline-flex items-center gap-2 bg-[#FF6363] hover:bg-[#ff7a7a] text-white px-10 py-4 rounded-full text-lg font-semibold transition-all"
              style={{ boxShadow: '0 10px 30px rgba(255,99,99,0.3)' }}
            >
              Cotizar Ahora
              <span className="hidden group-hover:inline text-sm ml-1">
                🚀 1 mes gratis
              </span>
            </a>
            
            {/* Badges */}
            <div className="flex flex-wrap justify-center gap-3 mt-10">
              {[
                "Sin permanencia",
                "Cobertura inmediata",
                "DGSFP verificado",
              ].map((item, i) => (
                <div key={i} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1b1c1e] border border-[#2f3031] text-[#9c9c9d] text-sm">
                  <CheckCircle2 className="w-4 h-4 text-[#5fc992]" />
                  {item}
                </div>
              ))}
            </div>
            
            <p className="text-sm text-[#434345] mt-8">
              DGSFP: C012479234434D
            </p>
          </div>
        </section>

      </main>
      <Footer />
      <StickyWhatsApp />
    </>
  );
}
