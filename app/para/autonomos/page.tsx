import type { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { StickyWhatsApp } from "@/components/sticky-whatsapp";
import { buildWhatsAppHref } from "@/lib/products";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { Sparkles, CheckCircle2, Clock, Shield, TrendingDown, Globe, Home, Briefcase, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Seguros Autónomos Madrid | Valentín Protección Integral",
  description: "Seguro médico autónomos deducible IRPF Madrid. Salud + RC + accidentes. Cotiza WhatsApp 30min. Rosa y Sebastián.",
  keywords: ["seguros autonomos Madrid","seguro autonomos deducible IRPF","proteccion autonomos Madrid"],
  alternates: { canonical: "https://valentinproteccionintegral.com/para/autonomos" },
  openGraph: {
    title: "Seguros Autónomos Madrid | IRPF Deducible",
    description: "Salud + RC profesional + Accidentes. Todo deducible. WhatsApp 30min.",
    url: "https://valentinproteccionintegral.com/para/autonomos",
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
  "description": "Seguros autónomos Madrid. IRPF deducible 100%. Salud + RC profesional + Accidentes.",
};

export const dynamic = "force-static";

export default function AutonomosParaPage() {
  const wCotiza = buildWhatsAppHref("Hola, soy autónomo y quiero un seguro deducible IRPF en Madrid.");

  return (
    <>
      <BreadcrumbSchema items={[{name:"Inicio",url:"/"},{name:"Para",url:"/para"},{name:"Autónomos",url:"/para/autonomos"}]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(serviceSchema)}} />
      <Header />
      <main className="min-h-screen bg-[#171717] text-[#fafafa]">
        
        {/* HERO SUPABASE — Dark tech, orange accent */}
        <section className="py-24 lg:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left: Content */}
              <div>
                {/* Badge tech style */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0f0f0f] border border-[#2e2e2e] text-[#898989] text-xs mb-8">
                  <Sparkles className="w-3.5 h-3.5 text-[#F97316]" />
                  +1.200 autónomos · DGSFP
                </div>
                
                {/* H1 Supabase style — 72px tight */}
                <h1 className="text-[48px] sm:text-[56px] lg:text-[72px] font-normal text-[#fafafa] leading-[1.00] mb-6">
                  Seguros
                  <br />
                  <span className="text-[#F97316]">Autónomos Tech</span>
                </h1>
                
                {/* Subhead */}
                <p className="text-xl text-[#b4b4b4] leading-relaxed mb-8 max-w-md">
                  IRPF deducible + RC profesional + Accidentes.
                  <br />
                  Protección fiscal completa.
                </p>
                
                {/* CTAs Supabase — Pill 9999px */}
                <div className="flex flex-wrap gap-4 mb-8">
                  <a 
                    href={wCotiza}
                    className="group inline-flex items-center gap-2 bg-[#0f0f0f] border border-[#F97316] text-[#fafafa] px-8 py-3 rounded-full text-sm font-medium transition-all hover:bg-[#F97316] hover:text-[#0f0f0f]"
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                    💬 Cotizar WhatsApp
                    <span className="hidden group-hover:inline text-xs ml-1">
                      ⚡ Alta 24h + 1 mes RC gratis
                    </span>
                  </a>
                  <a 
                    href="#planes"
                    className="inline-flex items-center gap-2 bg-transparent text-[#b4b4b4] px-6 py-3 rounded-full text-sm font-medium border border-[#2e2e2e] hover:border-[#363636] hover:text-[#fafafa] transition-all"
                  >
                    Ver planes
                  </a>
                </div>
                
                {/* Trust row */}
                <div className="flex flex-wrap gap-6 text-sm text-[#898989]">
                  <span className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#F97316]" />
                    Deducible fiscal
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#F97316]" />
                    30 min respuesta
                  </span>
                  <span className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-[#F97316]" />
                    Sin permanencia
                  </span>
                </div>
              </div>
              
              {/* Right: Hero image */}
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden border border-[#2e2e2e]">
                  <Image
                    src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Autónomo laptop Madrid coworking"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                    priority
                  />
                </div>
                {/* Floating stat card */}
                <div className="absolute -bottom-4 -left-4 bg-[#0f0f0f] rounded-xl p-4 border border-[#2e2e2e]">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#F97316]/20 flex items-center justify-center">
                      <TrendingDown className="w-5 h-5 text-[#F97316]" />
                    </div>
                    <div>
                      <p className="text-sm text-[#fafafa]">Ahorro fiscal</p>
                      <p className="text-xs text-[#898989]">Hasta 500€/año</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PLANES TECH — Supabase pricing style */}
        <section id="planes" className="py-24 border-t border-[#242424]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl">
            <h2 className="text-[36px] font-normal text-[#fafafa] leading-[1.25] text-center mb-16">
              Planes para autónomos
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { 
                  name: "STARTUP", 
                  price: "45€/mes",
                  desc: "Para empezar",
                  features: ["Salud básica", "IRPF deducible", "Chequeos anuales"],
                  border: "#2e2e2e"
                },
                { 
                  name: "PRO", 
                  price: "75€/mes",
                  desc: "El más popular",
                  features: ["+ RC profesional", "+ Accidentes", "Especialistas ilimitados"],
                  border: "#F97316",
                  popular: true
                },
                { 
                  name: "ENTERPRISE", 
                  price: "120€/mes",
                  desc: "Todo incluido",
                  features: ["Todo ilimitado", "Cobertura internacional", "Asesor fiscal incluido"],
                  border: "#2e2e2e"
                },
              ].map((plan, i) => (
                <div key={i} className={`bg-[#0f0f0f] rounded-2xl p-6 border ${plan.popular ? 'border-[#F97316] ring-1 ring-[#F97316]' : 'border-[#2e2e2e]'}`}>
                  {plan.popular && (
                    <div className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-[#F97316]/10 text-[#F97316] text-xs font-medium mb-4">
                      <Zap className="w-3 h-3" />
                      Más popular
                    </div>
                  )}
                  <h3 className="text-lg font-medium text-[#fafafa] mb-1">{plan.name}</h3>
                  <p className="text-2xl text-[#F97316] font-normal mb-1">{plan.price}</p>
                  <p className="text-sm text-[#898989] mb-4">{plan.desc}</p>
                  <ul className="space-y-2 mb-6">
                    {plan.features.map((feat, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-[#b4b4b4]">
                        <CheckCircle2 className="w-4 h-4 text-[#F97316]" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                  <a 
                    href={wCotiza}
                    className="block w-full text-center py-2.5 rounded-full text-sm font-medium transition-all border border-[#F97316] text-[#fafafa] hover:bg-[#F97316] hover:text-[#0f0f0f]"
                  >
                    Elegir {plan.name}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* COBERTURAS — Supabase features grid */}
        <section className="py-24 border-t border-[#242424]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl">
            <h2 className="text-[36px] font-normal text-[#fafafa] leading-[1.25] text-center mb-16">
              Cobertura completa
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { icon: TrendingDown, title: "IRPF 100%", desc: "Deducible fiscal" },
                { icon: Shield, title: "RC Profesional", desc: "Errores cubiertos" },
                { icon: Briefcase, title: "Accidentes", desc: "Laboral/extralaboral" },
                { icon: Globe, title: "Internacional", desc: "Cobertura UE" },
                { icon: Home, title: "Home Office", desc: "Protección puesto" },
                { icon: CheckCircle2, title: "Sin carencias", desc: "Desde día 1" },
              ].map((item, i) => (
                <div key={i} className="bg-[#0f0f0f] rounded-xl p-5 border border-[#2e2e2e] hover:border-[#363636] transition-all">
                  <div className="w-10 h-10 rounded-lg bg-[#F97316]/10 flex items-center justify-center mb-3">
                    <item.icon className="w-5 h-5 text-[#F97316]" />
                  </div>
                  <h3 className="text-base font-medium text-[#fafafa] mb-1">{item.title}</h3>
                  <p className="text-sm text-[#898989]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* EQUIPO */}
        <section className="py-24 border-t border-[#242424]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative rounded-2xl overflow-hidden border border-[#2e2e2e]">
                <Image
                  src="/images/rosa_y_sebastian.jpeg"
                  alt="Sebastián Valentín · Autónomo → Mediador"
                  width={500}
                  height={600}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0f0f0f] border border-[#2e2e2e] text-[#F97316] text-xs font-medium mb-6">
                  <Briefcase className="w-3.5 h-3.5" />
                  Autónomo → Mediador
                </div>
                <h2 className="text-[36px] font-normal text-[#fafafa] leading-[1.25] mb-4">
                  Sebastián Valentín
                </h2>
                <p className="text-lg text-[#b4b4b4] mb-6">
                  Fui autónomo. Sé lo que necesitas.
                </p>
                <p className="text-base text-[#898989] leading-relaxed mb-8">
                  +10 años ayudando a profesionales independientes en Madrid 
                  a optimizar su protección y sus impuestos. 
                  Entiendo el día a día del autónomo porque lo he vivido.
                </p>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0f0f0f] border border-[#2e2e2e] text-[#898989] text-xs">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#F97316]" />
                  DGSFP: C012479234434D
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROCESO FAST */}
        <section className="py-24 border-t border-[#242424]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl">
            <h2 className="text-[36px] font-normal text-[#fafafa] leading-[1.25] text-center mb-16">
              Proceso fast
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { num: "01", title: "WhatsApp", desc: "Actividad profesional y necesidades." },
                { num: "02", title: "Optimizado", desc: "Cotización IRPF-optimizada en 30min." },
                { num: "03", title: "Digital", desc: "Alta inmediata. Todo online." },
              ].map((step, i) => (
                <div key={i} className="text-center">
                  <div className="w-12 h-12 rounded-lg bg-[#F97316] text-[#0f0f0f] flex items-center justify-center text-lg font-medium mx-auto mb-4">
                    {step.num}
                  </div>
                  <h3 className="text-lg font-medium text-[#fafafa] mb-2">{step.title}</h3>
                  <p className="text-sm text-[#898989]">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA + TRUST */}
        <section className="py-24 bg-[#0f0f0f]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-4xl text-center">
            <h2 className="text-[48px] sm:text-[56px] font-normal text-[#fafafa] leading-[1.00] mb-4">
              Protege tu negocio
            </h2>
            <p className="text-xl text-[#898989] mb-10">
              Un WhatsApp. 30 minutos. Todo optimizado.
            </p>
            
            <a 
              href={wCotiza}
              className="group inline-flex items-center gap-2 bg-[#F97316] text-[#0f0f0f] px-10 py-4 rounded-full text-lg font-medium transition-all hover:scale-105"
            >
              <WhatsAppIcon className="w-5 h-5" />
              💬 Cotizar por WhatsApp
              <span className="hidden group-hover:inline text-sm ml-2 text-[#0f0f0f]/70">
                ⚡ Alta 24h + 1 mes RC gratis
              </span>
            </a>
            
            {/* Trust badges */}
            <div className="flex flex-wrap justify-center gap-3 mt-10">
              {[
                "Deducible fiscal",
                "Sin permanencia",
                "DGSFP verificado",
              ].map((item, i) => (
                <div key={i} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#171717] border border-[#2e2e2e] text-[#b4b4b4] text-sm">
                  <CheckCircle2 className="w-4 h-4 text-[#F97316]" />
                  {item}
                </div>
              ))}
            </div>
            
            <p className="text-sm text-[#4d4d4d] mt-8">
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
