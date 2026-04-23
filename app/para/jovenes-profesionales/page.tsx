import type { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { StickyWhatsApp } from "@/components/sticky-whatsapp";
import { buildWhatsAppHref } from "@/lib/products";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { Sparkles, CheckCircle2, Heart, Mountain, Home, Laptop, Zap, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "Seguros Jóvenes Profesionales Madrid | Valentín Protección Integral",
  description: "Seguros millennials Madrid. Salud sin copagos, vida hipoteca joven, accidentes deportes. WhatsApp 30min. Rosa y Sebastián.",
  keywords: ["seguros jovenes Madrid","seguros millennials Madrid","seguro hipoteca joven Madrid","seguro salud sin copagos jovenes"],
  alternates: { canonical: "https://valentinproteccionintegral.com/para/jovenes-profesionales" },
  openGraph: {
    title: "Seguros Jóvenes Profesionales Madrid | Millennials First",
    description: "Salud sin copagos, deportes, hipoteca joven. WhatsApp 30min respuesta.",
    url: "https://valentinproteccionintegral.com/para/jovenes-profesionales",
    siteName: "Valentín Protección Integral",
    locale: "es_ES",
    type: "website",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "InsuranceAgency",
  "name": "Seguros Jóvenes Profesionales Madrid - Valentín Protección Integral",
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
  "description": "Seguros para jóvenes profesionales Madrid. Millennials. Salud sin copagos, hipoteca joven, deportes.",
};

export const dynamic = "force-static";

export default function JovenesPage() {
  const wCotiza = buildWhatsAppHref("Hola, soy joven profesional en Madrid y busco un seguro a mi medida.");

  return (
    <>
      <BreadcrumbSchema items={[{name:"Inicio",url:"/"},{name:"Para",url:"/para"},{name:"Jóvenes Profesionales",url:"/para/jovenes-profesionales"}]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(serviceSchema)}} />
      <Header />
      <main className="min-h-screen bg-white">
        
        {/* HERO VERCEL TURQUESA */}
        <section className="pt-24 pb-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left: Content */}
              <div>
                {/* Badge Vercel */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#EBF5FF] text-[#0066FF] text-sm mb-6" style={{ boxShadow: 'rgba(0,0,0,0.08) 0px 0px 0px 1px' }}>
                  <Sparkles className="w-4 h-4" />
                  Millennials first · +1.200 jóvenes
                </div>
                
                {/* H1 Vercel — compressed tracking */}
                <h1 className="text-[48px] sm:text-[56px] lg:text-[64px] font-semibold text-[#171717] leading-[1.00] tracking-[-2.4px] mb-6">
                  Seguros
                  <br />
                  <span className="text-[#0066FF]">Jóvenes Madrid</span>
                </h1>
                
                {/* Subhead */}
                <p className="text-xl text-[#666666] leading-relaxed mb-8 max-w-md">
                  Sin copagos. Deportes. Hipoteca joven.
                </p>
                
                {/* CTAs Vercel */}
                <div className="flex flex-wrap gap-4 mb-8">
                  <a 
                    href={wCotiza}
                    className="group inline-flex items-center gap-2 bg-[#0066FF] hover:bg-[#0052CC] text-white px-6 py-3 rounded-lg text-base font-medium transition-all"
                    style={{ boxShadow: 'rgba(0,0,0,0.08) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 2px 2px' }}
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                    💬 WhatsApp
                    <span className="hidden group-hover:inline text-sm ml-1">
                      ⚡ 15% descuento
                    </span>
                  </a>
                  <a 
                    href="#coberturas"
                    className="inline-flex items-center gap-2 bg-white text-[#171717] px-6 py-3 rounded-lg text-base font-medium transition-all hover:bg-[#fafafa]"
                    style={{ boxShadow: 'rgba(0,0,0,0.08) 0px 0px 0px 1px' }}
                  >
                    Ver coberturas
                  </a>
                </div>
                
                {/* Trust row */}
                <div className="flex flex-wrap gap-6 text-sm text-[#666666]">
                  <span className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0066FF]" />
                    Sin copagos
                  </span>
                  <span className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-[#0066FF]" />
                    App gestión
                  </span>
                  <span className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-[#0066FF]" />
                    25-35 años
                  </span>
                </div>
              </div>
              
              {/* Right: Hero Image */}
              <div className="relative">
                <div className="relative rounded-xl overflow-hidden" style={{ boxShadow: 'rgba(0,0,0,0.08) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 2px 2px, rgba(0,0,0,0.04) 0px 8px 8px -8px, #fafafa 0px 0px 0px 1px' }}>
                  <Image
                    src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Joven profesional Madrid gym coworking"
                    width={600}
                    height={450}
                    className="w-full h-auto object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PERFECTO PARA — Vercel cards */}
        <section className="py-20" style={{ boxShadow: 'rgba(0,0,0,0.08) 0px 0px 0px 1px inset' }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl">
            <h2 className="text-[40px] font-semibold text-[#171717] leading-[1.20] tracking-[-2.4px] text-center mb-12">
              Perfecto para ti
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { icon: Home, title: "25-35 años", desc: "Primera hipoteca joven" },
                { icon: Mountain, title: "Deportes", desc: "Extremos cubiertos" },
                { icon: Heart, title: "Salud", desc: "Sin copagos urgencias" },
                { icon: Laptop, title: "Home Office", desc: "Trabajo remoto protegido" },
              ].map((item, i) => (
                <div key={i} className="rounded-xl p-6 bg-white" style={{ boxShadow: 'rgba(0,0,0,0.08) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 2px 2px' }}>
                  <div className="w-10 h-10 rounded-lg bg-[#EBF5FF] flex items-center justify-center mb-4">
                    <item.icon className="w-5 h-5 text-[#0066FF]" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#171717] mb-1">{item.title}</h3>
                  <p className="text-sm text-[#666666]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* COBERTURAS JÓVENES — Vercel grid */}
        <section id="coberturas" className="py-20 bg-[#fafafa]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl">
            <h2 className="text-[40px] font-semibold text-[#171717] leading-[1.20] tracking-[-2.4px] text-center mb-12">
              Cobertura joven
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: Heart, title: "Salud sin copagos", desc: "Médico sin pagar extra" },
                { icon: Mountain, title: "Deportes", desc: "Accidentes cubiertos" },
                { icon: Home, title: "Vida hipoteca", desc: "Primera vivienda joven" },
                { icon: Laptop, title: "Responsabilidad", desc: "RC digital incluida" },
              ].map((item, i) => (
                <div key={i} className="rounded-xl p-5 bg-white" style={{ boxShadow: 'rgba(0,0,0,0.08) 0px 0px 0px 1px' }}>
                  <div className="w-10 h-10 rounded-lg bg-[#EBF5FF] flex items-center justify-center mb-3">
                    <item.icon className="w-5 h-5 text-[#0066FF]" />
                  </div>
                  <h3 className="text-base font-semibold text-[#171717] mb-1">{item.title}</h3>
                  <p className="text-sm text-[#666666]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* EQUIPO JÓVEN */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative rounded-xl overflow-hidden" style={{ boxShadow: 'rgba(0,0,0,0.08) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 2px 2px, rgba(0,0,0,0.04) 0px 8px 8px -8px, #fafafa 0px 0px 0px 1px' }}>
                <Image
                  src="/images/rosa_y_sebastian.jpeg"
                  alt="Rosa Valentín · También millennial"
                  width={500}
                  height={600}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#EBF5FF] text-[#0066FF] text-sm mb-6" style={{ boxShadow: 'rgba(0,0,0,0.08) 0px 0px 0px 1px' }}>
                  <Sparkles className="w-4 h-4" />
                  También millennial
                </div>
                <h2 className="text-[40px] font-semibold text-[#171717] leading-[1.20] tracking-[-2.4px] mb-4">
                  Rosa Valentín
                </h2>
                <p className="text-lg text-[#666666] leading-relaxed mb-6">
                  Entiendo lo que necesitas porque también soy joven profesional. 
                  Sé lo que es la primera hipoteca, el gimnasio, los deportes de fin de semana.
                </p>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#171717] text-white text-sm">
                  <CheckCircle2 className="w-4 h-4" />
                  DGSFP: C012479234434D
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROCESO RÁPIDO */}
        <section className="py-20 bg-[#fafafa]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl">
            <h2 className="text-[40px] font-semibold text-[#171717] leading-[1.20] tracking-[-2.4px] text-center mb-12">
              Proceso rápido
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { num: "01", title: "WhatsApp", desc: "Edad + deportes + necesidades." },
                { num: "02", title: "Plan joven", desc: "Cotización optimizada en 30min." },
                { num: "03", title: "App", desc: "Gestión instantánea desde el móvil." },
              ].map((step, i) => (
                <div key={i} className="text-center">
                  <div className="w-12 h-12 rounded-lg bg-[#0066FF] text-white flex items-center justify-center text-lg font-semibold mx-auto mb-4" style={{ boxShadow: 'rgba(0,0,0,0.08) 0px 0px 0px 1px' }}>
                    {step.num}
                  </div>
                  <h3 className="text-xl font-semibold text-[#171717] mb-2">{step.title}</h3>
                  <p className="text-base text-[#666666]">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="py-24 bg-[#0066FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-4xl text-center">
            <h2 className="text-[48px] sm:text-[56px] font-semibold text-white leading-[1.00] tracking-[-2.4px] mb-4">
              Tu futuro asegurado
            </h2>
            <p className="text-xl text-white/70 mb-10">
              Un WhatsApp. 30 minutos. Sin complicaciones.
            </p>
            
            <a 
              href={wCotiza}
              className="group inline-flex items-center gap-2 bg-white text-[#0066FF] px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:bg-[#fafafa]"
              style={{ boxShadow: 'rgba(0,0,0,0.08) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 2px 2px' }}
            >
              <WhatsAppIcon className="w-5 h-5" />
              💬 WhatsApp Ahora
              <span className="hidden group-hover:inline text-sm ml-2 text-[#0066FF]/70">
                ⚡ 15% descuento
              </span>
            </a>
            
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
