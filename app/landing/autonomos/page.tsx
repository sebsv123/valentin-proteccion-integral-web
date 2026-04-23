import type { Metadata } from "next";
import Image from "next/image";
import { StickyWhatsApp } from "@/components/sticky-whatsapp";
import { buildWhatsAppHref } from "@/lib/products";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { FAQChat } from "@/components/faq-chat";
import GuaranteeBadge from "@/components/GuaranteeBadge";
import { Sparkles, CheckCircle2, TrendingDown, AlertTriangle, Shield, Heart, Clock, FileCheck, Users, Home } from "lucide-react";

export const metadata: Metadata = {
  title: "Seguro Autónomos Madrid · Deducción Fiscal | Valentín",
  description: "Seguro para autónomos en Madrid deducible en el IRPF. Salud, accidentes y vida con asesoría gratuita. Rosa o Sebastián te responden en 30 min.",
  keywords: ["seguros autonomos Madrid","seguro autonomos deduccion IRPF","proteccion autonomos Madrid"],
  alternates: { canonical: "https://valentinproteccionintegral.com/landing/autonomos" },
  openGraph: {
    title: "Seguro Autónomos Madrid · Deducción Fiscal | Valentín",
    description: "Seguro para autónomos en Madrid deducible en el IRPF. Salud, accidentes y vida con asesoría gratuita. Rosa o Sebastián te responden en 30 min.",
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
                  Protégete sin perder un día de trabajo.
                </h1>
                
                {/* Subhead — 18px weight 300 */}
                <p className="text-lg font-light text-[#64748d] leading-[1.40] mb-8 max-w-lg">
                  Protección y ventajas fiscales pensadas para autónomos que no quieren perder tiempo ni complicarse.
                </p>
                
                {/* CTAs Stripe */}
                <div className="flex flex-wrap gap-4 mb-8">
                  <WhatsAppButton 
                    href={wCotiza}
                    location="landing-autonomos-hero"
                    showIcon
                    className="inline-flex items-center gap-2 bg-[#533afd] hover:bg-[#4434d4] text-white px-6 py-4 rounded-xl text-lg font-medium transition-all shadow-[rgba(50,50,93,0.25)_0px_4px_8px_-2px,rgba(0,0,0,0.1)_0px_2px_4px_-2px]"
                  >
                    Hablar con Rosa ahora
                  </WhatsAppButton>
                </div>
                
                {/* Trust row */}
                <div className="flex flex-wrap gap-6 text-sm text-[#64748d]">
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
                { icon: Heart, title: "Salud", desc: "Deducible 100% en IRPF. Especialistas sin esperas." },
                { icon: Shield, title: "Accidentes", desc: "Baja laboral cubierta. Incapacidad desde día 1." },
                { icon: Users, title: "Vida", desc: "Protección para tu familia si faltan ingresos." },
                { icon: Home, title: "Decesos", desc: "Muy contratado por autónomos. Gestión completa." },
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
                { num: "01", title: "Nos escribes", desc: "Por WhatsApp contándonos tu actividad." },
                { num: "02", title: "Propuesta", desc: "En menos de 24h tienes una propuesta personalizada." },
                { num: "03", title: "Tú decides", desc: "Nosotros lo gestionamos todo. Sin papeleo para ti." },
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

        {/* GARANTÍA RESPUESTA — Bloque único */}
        <section className="py-20 bg-gradient-to-br from-[#f6f9fc] via-[#eef2ff] to-[#f5f3ff]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-4xl">
            <div className="bg-white rounded-3xl p-10 md:p-14 shadow-xl shadow-[#533afd]/10 border border-[#e0e7ff]">
              <h2 className="text-[36px] sm:text-[44px] font-bold text-[#061b31] leading-tight mb-6 text-center">
                ¿Y si no te respondemos en 30 minutos?
              </h2>
              
              <p className="text-xl text-[#64748d] leading-relaxed mb-8 text-center max-w-2xl mx-auto">
                Rosa o Sebastián te llaman directamente.
                <br />
                Sin esperas. Sin centralitas. Sin excusas.
                <br />
                <span className="text-[#533afd] font-semibold">Nadie en el sector ofrece esta garantía. Nosotros sí.</span>
              </p>
              
              <div className="flex items-center justify-center gap-4 pt-4 border-t border-[#e5edf5]">
                <div className="relative w-14 h-14 rounded-full overflow-hidden">
                  <Image
                    src="/images/rosa_y_sebastian.jpeg"
                    alt="Rosa Valentín"
                    fill
                    className="object-cover object-[center_20%]"
                  />
                </div>
                <div>
                  <p className="font-semibold text-[#061b31]">Rosa Valentín</p>
                  <p className="text-sm text-[#64748d]">Mediadora DGSFP · NIF 79234434D</p>
                </div>
              </div>
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
            <WhatsAppButton 
              href={wCotiza}
              location="landing-autonomos-cta-final"
              showIcon
              className="inline-flex items-center gap-3 bg-[#533afd] hover:bg-[#4434d4] text-white px-8 py-4 rounded-xl text-lg font-medium transition-all shadow-[rgba(50,50,93,0.25)_0px_4px_8px_-2px,rgba(0,0,0,0.1)_0px_2px_4px_-2px]"
            >
              Hablar con Rosa ahora
            </WhatsAppButton>
            <p className="text-sm text-white/40 mt-8">
              DGSFP: C012479234434D · +1.200 clientes protegidos
            </p>
          </div>
        </section>

        {/* FAQ CHAT */}
        <FAQChat 
          brandColor="indigo"
          title="¿Tienes dudas sobre seguros para autónomos?"
          subtitle="Preguntas frecuentes"
          items={[
            { 
              q: "¿Cómo funciona la deducción fiscal?", 
              a: "La prima del seguro de salud para autónomos es 100% deducible en tu declaración de IRPF. Si pagas 100€/mes, te devuelven hasta 30€ en la declaración anual." 
            },
            { 
              q: "¿Puedo contratar solo para mí o también para mi familia?", 
              a: "Puedes contratar solo para ti (más barato) o incluir cónyuge e hijos. Toda la familia disfruta de la misma cobertura privada." 
            },
            { 
              q: "¿Y si tengo una baja laboral?", 
              a: "Recomendamos combinar el seguro de salud con un seguro de incapacidad temporal. Así cobras tu sueldo completo durante la baja médica." 
            },
            { 
              q: "¿Cuánto cuesta aproximadamente?", 
              a: "Un seguro de salud completo para un autónomo de 35 años cuesta entre 50-80€/mes. El de responsabilidad civil unos 20-40€/año. Te damos presupuesto exacto en WhatsApp." 
            },
            { 
              q: "¿Hay permanencia?", 
              a: "Las pólizas de salud tienen permanencia de 1 año por normativa. El seguro de RC profesional suele ser sin permanencia. Te lo aclaramos todo antes de contratar." 
            },
          ]}
        />

      </main>
      <StickyWhatsApp />
    </>
  );
}
