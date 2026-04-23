import type { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { StickyWhatsApp } from "@/components/sticky-whatsapp";
import { buildWhatsAppHref } from "@/lib/products";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import GuaranteeBadge from "@/components/GuaranteeBadge";
import GarantiasSection from "@/components/GarantiasSection";
import { Sparkles, CheckCircle2, TrendingDown, AlertTriangle, Shield, Heart, Clock, FileCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Seguros Autónomos Madrid | IRPF Deducible | Valentín",
  description: "Seguro médico autónomos Madrid deducible 100% IRPF. RC profesional, accidentes. Cotiza gratis WhatsApp 30min. Sin permanencia.",
  keywords: ["seguros autonomos Madrid","seguro autonomos deduccion IRPF","proteccion autonomos Madrid"],
  alternates: { canonical: "https://valentinproteccionintegral.com/landing/autonomos" },
  openGraph: {
    title: "Seguros Autónomos Madrid | IRPF Deducible | Valentín",
    description: "Seguro médico autónomos Madrid deducible 100% IRPF. RC profesional, accidentes. Cotiza gratis WhatsApp 30min. Sin permanencia.",
    url: "https://valentinproteccionintegral.com/landing/autonomos",
    siteName: "Valentín Protección Integral",
    locale: "es_ES",
    type: "website",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "InsuranceAgency",
  "name": "Seguros Autónomos Madrid - Valentín Protección Integral",
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
  "description": "Seguros para autónomos en Madrid con deducción IRPF 100%. Salud, accidentes, RC profesional.",
};

export const dynamic = "force-static";

export default function AutonomosLandingPage() {
  const wCotiza = buildWhatsAppHref("Hola, soy autónomo y necesito proteger mi negocio. ¿Qué opciones tengo?");

  return (
    <>
      <BreadcrumbSchema items={[{name:"Inicio",url:"/"},{name:"Seguros Autónomos",url:"/landing/autonomos"}]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(serviceSchema)}} />
      <Header />
      <main className="min-h-screen bg-white">
        
        {/* HERO STRIPE — Weight-300 elegance, purple accents */}
        <section className="relative pt-24 pb-20 overflow-hidden">
          {/* Gradient decoration — ruby to magenta stripe style */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-[#ea2261]/10 via-[#f96bee]/5 to-transparent rounded-full blur-[100px]" />
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-6xl relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left: Content */}
              <div>
                {/* Guarantee Badge */}
                <div className="mb-6">
                  <GuaranteeBadge type="autonomos" />
                </div>
                
                {/* H1 — 48px weight 300, tight tracking */}
                <h1 className="text-[40px] sm:text-[48px] lg:text-[56px] font-light text-[#061b31] leading-[1.03] tracking-[-1.4px] mb-6" style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}>
                  Seguros Autónomos Madrid:
                  <br />
                  <span className="text-[#533afd]">IRPF Deducible al 100%</span>
                </h1>
                
                {/* Subhead — 18px weight 300 */}
                <p className="text-lg font-light text-[#64748d] leading-[1.40] mb-8 max-w-lg">
                  Tu seguro médico es deducible al 100% en IRPF.
                  Te ayudamos a protegerte y a pagar menos impuestos.
                </p>
                
                {/* CTAs Stripe */}
                <div className="flex flex-wrap gap-4 mb-8">
                  <a 
                    href={wCotiza}
                    className="inline-flex items-center gap-2 bg-[#533afd] hover:bg-[#4434d4] text-white px-4 py-2 rounded text-base font-normal transition-all shadow-[rgba(50,50,93,0.25)_0px_4px_8px_-2px,rgba(0,0,0,0.1)_0px_2px_4px_-2px]"
                  >
                    Cotizar por WhatsApp
                  </a>
                  <a 
                    href="tel:603448765"
                    className="inline-flex items-center gap-2 bg-transparent text-[#533afd] px-4 py-2 rounded text-base font-normal border border-[#b9b9f9] hover:bg-[rgba(83,58,253,0.05)] transition-all"
                  >
                    📞 Llamar ahora
                  </a>
                </div>
                
                {/* Trust row */}
                <div className="flex flex-wrap gap-6 text-sm text-[#64748d]">
                  <span className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#15be53]" />
                    Sin permanencia
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#533afd]" />
                    Respuesta 30 min
                  </span>
                  <span className="flex items-center gap-2">
                    <FileCheck className="w-4 h-4 text-[#533afd]" />
                    DGSFP: C012479234434D
                  </span>
                </div>
              </div>
              
              {/* Right: Hero Image */}
              <div className="relative">
                <div className="relative rounded-lg overflow-hidden shadow-[rgba(50,50,93,0.25)_0px_30px_45px_-30px,rgba(0,0,0,0.1)_0px_18px_36px_-18px]">
                  <Image
                    src="https://images.pexels.com/photos/6001241/pexels-photo-6001241.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Autónoma trabajando en laptop - Seguros para autónomos Madrid"
                    width={600}
                    height={700}
                    className="w-full h-auto object-cover object-top"
                    priority
                  />
                </div>
                {/* Decorative card overlay */}
                <div className="absolute -bottom-6 -left-6 bg-white rounded-lg p-4 shadow-[rgba(50,50,93,0.25)_0px_13px_27px_-5px,rgba(0,0,0,0.1)_0px_8px_16px_-8px] border border-[#e5edf5]">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded bg-[#533afd]/10 flex items-center justify-center">
                      <TrendingDown className="w-5 h-5 text-[#533afd]" />
                    </div>
                    <div>
                      <p className="text-sm font-normal text-[#061b31]">Ahorro fiscal</p>
                      <p className="text-xs text-[#64748d]">Ahorro fiscal real</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* STATS — Stripe grid pattern */}
        <section className="py-16 border-y border-[#e5edf5]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl">
            <div className="grid grid-cols-3 gap-8 text-center">
              <div>
                <p className="text-[32px] font-light text-[#061b31] tracking-[-0.64px]">+1.200</p>
                <p className="text-sm text-[#64748d] mt-1">clientes protegidos</p>
              </div>
              <div className="border-x border-[#e5edf5]">
                <p className="text-[32px] font-light text-[#061b31] tracking-[-0.64px]">+10</p>
                <p className="text-sm text-[#64748d] mt-1">años experiencia</p>
              </div>
              <div>
                <p className="text-[32px] font-light text-[#533afd] tracking-[-0.64px]">30min</p>
                <p className="text-sm text-[#64748d] mt-1">tiempo respuesta</p>
              </div>
            </div>
          </div>
        </section>

        {/* PROBLEMA — Hook IRPF */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl">
            <h2 className="text-[32px] font-light text-[#061b31] tracking-[-0.64px] text-center mb-12">
              ¿Sabes cuánto pierdes sin el seguro correcto?
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: AlertTriangle, title: "Baja por enfermedad", desc: "Sin cobertura pierdes el 100% de tus ingresos. Tu negocio se detiene." },
                { icon: Shield, title: "Accidente laboral", desc: "Como autónomo no tienes prestación automática. ¿Tienes ahorros para 3 meses?" },
                { icon: TrendingDown, title: "Sin deducción IRPF", desc: "Pagas impuestos de más cada año. El seguro médico es 100% deducible." },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-lg p-6 border border-[#e5edf5] shadow-[rgba(50,50,93,0.25)_0px_13px_27px_-5px,rgba(0,0,0,0.1)_0px_8px_16px_-8px]">
                  <div className="w-12 h-12 rounded bg-[#ea2261]/10 flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-[#ea2261]" />
                  </div>
                  <h3 className="text-lg font-normal text-[#061b31] mb-2">{item.title}</h3>
                  <p className="text-sm text-[#64748d] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SOLUCIÓN — Bento grid */}
        <section className="py-20 bg-[#f6f9fc]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl">
            <h2 className="text-[32px] font-light text-[#061b31] tracking-[-0.64px] text-center mb-4">
              Todo lo que necesitas.
            </h2>
            <p className="text-lg text-[#64748d] text-center mb-12 font-light">
              Nada que no necesitas.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: Heart, title: "Salud privada", desc: "100% deducible en IRPF para autónomos. Especialistas sin lista de espera." },
                { icon: Shield, title: "Accidentes", desc: "Cobertura laboral y extralaboral. Incapacidad temporal cubierta desde día 1." },
                { icon: FileCheck, title: "Responsabilidad Civil", desc: "Errores profesionales cubiertos. Protege tu patrimonio personal." },
                { icon: Sparkles, title: "Decesos", desc: "Protege a tu familia, no al banco. Gestión completa del sepelio incluida." },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-lg p-6 border border-[#e5edf5] hover:border-[#533afd]/30 transition-all shadow-[rgba(23,23,23,0.08)_0px_15px_35px]">
                  <div className="w-10 h-10 rounded bg-[#533afd]/10 flex items-center justify-center mb-4">
                    <item.icon className="w-5 h-5 text-[#533afd]" />
                  </div>
                  <h3 className="text-xl font-light text-[#061b31] tracking-[-0.22px] mb-2">{item.title}</h3>
                  <p className="text-base text-[#64748d] font-light leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FOTO EQUIPO + QUOTE */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="rounded-lg overflow-hidden shadow-[rgba(50,50,93,0.25)_0px_30px_45px_-30px,rgba(0,0,0,0.1)_0px_18px_36px_-18px]">
                  <Image
                    src="/images/rosa_y_sebastian.jpeg"
                    alt="Rosa y Sebastián - Tus asesores en Madrid"
                    width={500}
                    height={500}
                    className="w-full h-auto object-cover object-[center_20%]"
                    style={{ aspectRatio: '1/1' }}
                  />
                </div>
              </div>
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-[rgba(21,190,83,0.2)] border border-[rgba(21,190,83,0.4)] text-[#108c3d] text-xs mb-6">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  +10 años ayudando a autónomos
                </div>
                <blockquote className="text-[22px] font-light text-[#061b31] leading-[1.30] tracking-[-0.22px] mb-6">
                  "Llevamos más de 10 años ayudando a autónomos como tú a protegerse mejor y a pagar menos impuestos."
                </blockquote>
                <p className="text-base text-[#061b31] font-normal mb-1">Rosa Valentín</p>
                <p className="text-sm text-[#64748d] mb-4">Mediadora DGSFP: C012479234434D</p>
                <div className="flex gap-4 text-sm text-[#64748d]">
                  <span className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#15be53]" />
                    DGSFP: C012479234434D
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROCESO 3 PASOS */}
        <section className="py-20 bg-[#f6f9fc]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl">
            <h2 className="text-[32px] font-light text-[#061b31] tracking-[-0.64px] text-center mb-12">
              Tan fácil como esto:
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { num: "01", title: "WhatsApp", desc: "Nos escribes con tu situación. Sin papeleo previo." },
                { num: "02", title: "Análisis", desc: "En 30 min tienes tu cotización personalizada. Sin compromiso." },
                { num: "03", title: "Cobertura", desc: "Decides sin presión. Sin permanencia. Sin sorpresas." },
              ].map((step, i) => (
                <div key={i} className="text-center">
                  <div className="w-12 h-12 rounded-full bg-[#533afd] text-white flex items-center justify-center text-lg font-normal mx-auto mb-4">
                    {step.num}
                  </div>
                  <h3 className="text-xl font-light text-[#061b31] tracking-[-0.22px] mb-2">{step.title}</h3>
                  <p className="text-base text-[#64748d] font-light">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* GARANTÍAS */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl">
            <h2 className="text-[32px] font-light text-[#061b31] tracking-[-0.64px] text-center mb-12">
              Nuestras garantías. Por escrito.
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Respuesta en 30 minutos o te llamamos nosotros",
                "Revisión anual gratuita de tu póliza",
                "Gestor personal asignado para siempre",
                "DGSFP: C012479234434D — mediadores verificados",
                "Sin permanencia — cancelas cuando quieras",
                "Sin letra pequeña, sin sorpresas",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-lg bg-[#f6f9fc]">
                  <CheckCircle2 className="w-5 h-5 text-[#15be53] flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-[#061b31]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA FINAL — Dark brand section */}
        <section className="py-20 bg-[#1c1e54]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-4xl text-center">
            <h2 className="text-[32px] sm:text-[40px] font-light text-white tracking-[-0.64px] mb-4">
              Protege tu negocio hoy.
            </h2>
            <p className="text-lg text-white/70 font-light mb-8">
              Un WhatsApp. 30 minutos. Toda la tranquilidad.
            </p>
            <a 
              href={wCotiza}
              className="inline-flex items-center gap-3 bg-[#533afd] hover:bg-[#4434d4] text-white px-6 py-3 rounded text-lg font-normal transition-all shadow-[rgba(50,50,93,0.25)_0px_4px_8px_-2px,rgba(0,0,0,0.1)_0px_2px_4px_-2px]"
            >
              Empezar por WhatsApp
            </a>
            <p className="text-sm text-white/40 mt-8">
              DGSFP: C012479234434D · 10 años · Sin permanencia
            </p>
          </div>
        </section>

        {/* GARANTÍAS PREMIUM */}
        <GarantiasSection brandColor="#7c3aed" />

      </main>
      <Footer />
      <StickyWhatsApp />
    </>
  );
}
