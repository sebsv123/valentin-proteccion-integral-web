import type { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { StickyWhatsApp } from "@/components/sticky-whatsapp";
import { buildWhatsAppHref } from "@/lib/products";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { Sparkles, CheckCircle2, Clock, Shield, Users, MessageCircle, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Asesoría Seguros Gratis Madrid | Valentín Protección Integral",
  description: "Asesoría gratuita seguros Madrid. Salud, vida, hogar, autónomos. WhatsApp 30min respuesta. Mediadores independientes. Boadilla del Monte.",
  keywords: ["asesoria seguros gratis Madrid","asesoramiento seguros Madrid","consulta seguros gratuita"],
  alternates: { canonical: "https://valentinproteccionintegral.com/landing/asesoria-gratuita" },
  openGraph: {
    title: "Asesoría Seguros Gratis Madrid | Valentín Protección Integral",
    description: "Asesoría gratuita en 30 minutos. Encuentra el mejor seguro para ti. Sin compromiso.",
    url: "https://valentinproteccionintegral.com/landing/asesoria-gratuita",
    siteName: "Valentín Protección Integral",
    locale: "es_ES",
    type: "website",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "InsuranceAgency",
  "name": "Asesoría Seguros Gratis Madrid - Valentín Protección Integral",
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
  "description": "Asesoría gratuita seguros Madrid. Salud, vida, hogar, autónomos. 30min respuesta.",
};

export const dynamic = "force-static";

export default function AsesoriaGratuitaPage() {
  const wCotiza = buildWhatsAppHref("Hola, quiero una asesoría gratuita sobre seguros. ¿Podéis ayudarme?");

  return (
    <>
      <BreadcrumbSchema items={[{name:"Inicio",url:"/"},{name:"Asesoría Gratuita",url:"/landing/asesoria-gratuita"}]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(serviceSchema)}} />
      <Header />
      <main className="min-h-screen bg-[#faf9f6]">
        
        {/* HERO INTERCOM — Warm cream, Fin Orange accent */}
        <section className="pt-24 pb-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left: Content */}
              <div>
                {/* Badge Intercom */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-white border border-[#dedbd6] text-[#7b7b78] text-xs mb-6">
                  <Sparkles className="w-3.5 h-3.5 text-[#ff5600]" />
                  ✦ +1.200 clientes · 30min respuesta
                </div>
                
                {/* H1 Intercom style — tight tracking, 1.00 line-height */}
                <h1 className="text-[48px] sm:text-[54px] font-normal text-[#111111] leading-[1.00] tracking-[-1.6px] mb-6">
                  Asesoría Seguros
                  <br />
                  <span className="text-[#ff5600]">GRATIS Madrid</span>
                </h1>
                
                {/* Subhead */}
                <p className="text-lg text-[#7b7b78] leading-[1.50] mb-8 max-w-md">
                  Encuentra el mejor seguro para ti en 30 minutos.
                  Mediadores independientes. Sin compromiso.
                </p>
                
                {/* CTAs Intercom — sharp 4px radius, scale hover */}
                <div className="flex flex-wrap gap-4 mb-8">
                  <a 
                    href={wCotiza}
                    className="group inline-flex items-center gap-2 bg-[#111111] text-white px-4 py-3 rounded text-base font-normal transition-transform hover:scale-110 hover:bg-white hover:text-[#111111] border border-[#111111]"
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                    💬 WhatsApp Ahora
                  </a>
                  <a 
                    href="tel:603448765"
                    className="inline-flex items-center gap-2 bg-transparent text-[#111111] px-4 py-3 rounded text-base font-normal border border-[#111111] transition-transform hover:scale-110"
                  >
                    <Phone className="w-4 h-4" />
                    📞 603 44 87 65
                  </a>
                </div>
              </div>
              
              {/* Right: Chat Bubble Intercom Style */}
              <div className="relative">
                <div className="bg-white rounded-lg p-6 border border-[#dedbd6] shadow-sm max-w-md mx-auto">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-10 h-10 rounded bg-[#ff5600] flex items-center justify-center text-white font-semibold text-sm flex-shrink-0">
                      R
                    </div>
                    <div className="bg-[#faf9f6] rounded-lg rounded-tl-sm px-4 py-3 border border-[#dedbd6]">
                      <p className="text-sm text-[#111111]">
                        "Hola 👋 Soy Rosa. ¿En qué te puedo ayudar hoy?"
                      </p>
                    </div>
                  </div>
                  <a 
                    href={wCotiza}
                    className="w-full flex items-center justify-center gap-2 bg-[#ff5600] hover:bg-[#e04d00] text-white rounded py-3 font-normal text-base transition-transform hover:scale-[1.02]"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Responder por WhatsApp
                  </a>
                </div>
                
                {/* Decorative dots */}
                <div className="absolute -top-4 -right-4 flex gap-1">
                  <div className="w-2 h-2 rounded-full bg-[#ff5600]"></div>
                  <div className="w-2 h-2 rounded-full bg-[#dedbd6]"></div>
                  <div className="w-2 h-2 rounded-full bg-[#65b5ff]"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ¿POR QUÉ NOSOTROS? — Intercom cards */}
        <section className="py-20 border-t border-[#dedbd6]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl">
            <p className="text-center text-[#ff5600] text-xs font-normal uppercase tracking-[0.6px] mb-4">
              Mediadores independientes × 10 años experiencia
            </p>
            <h2 className="text-[40px] font-normal text-[#111111] leading-[1.00] tracking-[-1.2px] text-center mb-12">
              ¿Por qué nosotros?
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: CheckCircle2, title: "Mejor precio", desc: "Comparamos todas las compañías para encontrar tu mejor opción." },
                { icon: Shield, title: "Sin permanencia", desc: "Cancelas cuando quieras. Sin letra pequeña ni sorpresas." },
                { icon: Clock, title: "30 min garantizados", desc: "Respuesta en 30 minutos o te llamamos nosotros." },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-lg p-6 border border-[#dedbd6] hover:border-[#ff5600]/30 transition-all">
                  <div className="w-10 h-10 rounded bg-[#faf9f6] border border-[#dedbd6] flex items-center justify-center mb-4">
                    <item.icon className="w-5 h-5 text-[#ff5600]" />
                  </div>
                  <h3 className="text-xl font-normal text-[#111111] tracking-[-0.48px] mb-2">{item.title}</h3>
                  <p className="text-base text-[#7b7b78] leading-[1.50]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* EQUIPO */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="rounded-lg overflow-hidden border border-[#dedbd6]">
                  <Image
                    src="/images/rosa_y_sebastian.jpeg"
                    alt="Rosa y Sebastián Valentín — tus asesores personales"
                    width={500}
                    height={600}
                    className="w-full h-auto object-cover"
                    priority
                  />
                </div>
              </div>
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-[#faf9f6] border border-[#dedbd6] text-[#7b7b78] text-xs mb-6">
                  <Users className="w-3.5 h-3.5 text-[#ff5600]" />
                  Tu equipo personal
                </div>
                <h2 className="text-[32px] font-normal text-[#111111] leading-[1.00] tracking-[-0.96px] mb-4">
                  Rosa y Sebastián Valentín
                </h2>
                <p className="text-lg text-[#7b7b78] leading-[1.50] mb-6">
                  Tus asesores personales en Madrid. 
                  Llevamos más de 10 años ayudando a familias y profesionales 
                  a encontrar la protección que necesitan.
                </p>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-[#0bdf50]/10 border border-[#0bdf50]/30 text-[#2c6415] text-xs">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  DGSFP: C012479234434D
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROCESO SIMPLE — 3 pasos Intercom */}
        <section className="py-20 border-t border-[#dedbd6]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl">
            <h2 className="text-[40px] font-normal text-[#111111] leading-[1.00] tracking-[-1.2px] text-center mb-4">
              Proceso simple
            </h2>
            <p className="text-lg text-[#7b7b78] text-center mb-12">
              ¡Sin papeleo! Todo digital.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { num: "1", title: "WhatsApp", desc: "Nos escribes con tu situación. En tu idioma." },
                { num: "2", title: "Cotizamos", desc: "En 30 min tenemos tu mejor precio." },
                { num: "3", title: "Contratas", desc: "Sin presión. Sin permanencia. Digital." },
              ].map((step, i) => (
                <div key={i} className="text-center">
                  <div className="w-12 h-12 rounded bg-[#ff5600] text-white flex items-center justify-center text-lg font-normal mx-auto mb-4">
                    {step.num}
                  </div>
                  <h3 className="text-xl font-normal text-[#111111] tracking-[-0.48px] mb-2">{step.title}</h3>
                  <p className="text-base text-[#7b7b78] leading-[1.50]">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* GARANTÍAS — Intercom badges */}
        <section className="py-20 bg-[#faf9f6]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl">
            <h2 className="text-[32px] font-normal text-[#111111] leading-[1.00] tracking-[-0.96px] text-center mb-12">
              Nuestras garantías
            </h2>
            
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "Respuesta 30min o llamamos nosotros",
                "Revisión anual gratis",
                "Sin permanencia",
                "DGSFP verificado",
              ].map((item, i) => (
                <div key={i} className="inline-flex items-center gap-2 px-4 py-2 rounded bg-white border border-[#dedbd6] text-sm text-[#111111]">
                  <CheckCircle2 className="w-4 h-4 text-[#0bdf50]" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="py-24 bg-[#111111]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-4xl text-center">
            <h2 className="text-[40px] sm:text-[48px] font-normal text-white leading-[1.00] tracking-[-1.2px] mb-4">
              Tu asesoría gratuita espera
            </h2>
            <p className="text-lg text-white/60 leading-[1.50] mb-10">
              Un WhatsApp. 30 minutos. Sin compromiso.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <a 
                href={wCotiza}
                className="group inline-flex items-center gap-2 bg-[#ff5600] text-white px-6 py-3 rounded text-lg font-normal transition-transform hover:scale-110"
              >
                <WhatsAppIcon className="w-5 h-5" />
                💬 WhatsApp Ahora
              </a>
              <a 
                href="tel:603448765"
                className="inline-flex items-center gap-2 bg-transparent text-white px-6 py-3 rounded text-lg font-normal border border-white/30 transition-transform hover:scale-110"
              >
                <Phone className="w-5 h-5" />
                📞 603 44 87 65
              </a>
            </div>
            
            <p className="text-sm text-white/40">
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
