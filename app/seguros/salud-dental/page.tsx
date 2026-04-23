import type { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { StickyWhatsApp } from "@/components/sticky-whatsapp";
import { buildWhatsAppHref } from "@/lib/products";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { WhatsAppButton } from "@/components/whatsapp-button";
import GuaranteeBadge from "@/components/GuaranteeBadge";
import GarantiasSection from "@/components/GarantiasSection";
import GoogleReviewsWidget from "@/components/GoogleReviewsWidget";
import { Sparkles, CheckCircle2, Clock, Shield, Heart, Smile, Stethoscope, Syringe, Scan, Award, MapPin, TrendingUp, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Seguro Dental Madrid Sin Carencias | Valentín",
  description: "Seguro dental Madrid desde 9€/mes. Sin carencias, revisiones desde día 1. Toda la familia en una póliza. Cotiza WhatsApp 30 min.",
  keywords: ["seguro dental Madrid","seguro dental sin carencias","seguro dental barato Madrid"],
  alternates: { canonical: "https://valentinproteccionintegral.com/seguros/salud-dental" },
  openGraph: {
    title: "Seguro Dental Madrid Sin Carencias | Valentín",
    description: "Seguro dental Madrid desde 9€/mes. Sin carencias, revisiones desde día 1. Toda la familia en una póliza. Cotiza WhatsApp 30 min.",
    url: "https://valentinproteccionintegral.com/seguros/salud-dental",
    siteName: "Valentín Protección Integral",
    locale: "es_ES",
    type: "website",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "medicalSpecialty": "Dentistry",
  "name": "Seguro Dental Madrid - Valentín Protección Integral",
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
  "description": "Seguro dental Madrid sin carencias. Implantes, ortodoncia, checkups.",
};

export const dynamic = "force-static";

export default function SaludDentalPage() {
  const wCotiza = buildWhatsAppHref("Hola, quiero información sobre seguro dental en Madrid. Sin carencias.");

  return (
    <>
      <BreadcrumbSchema items={[{name:"Inicio",url:"/"},{name:"Seguros",url:"/seguros"},{name:"Dental",url:"/seguros/salud-dental"}]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(serviceSchema)}} />
      <Header />
      <main className="min-h-screen bg-white">
        
        {/* HERO — Blanco limpio con halo azul sutil */}
        <section className="relative pt-24 pb-20 overflow-hidden">
          {/* Halo azul claro muy sutil */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-gradient-radial from-sky-100/40 via-sky-50/20 to-transparent blur-3xl pointer-events-none" />
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-6xl relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left: Content */}
              <div>
                {/* Guarantee Badge */}
                <div className="mb-8">
                  <GuaranteeBadge type="dental" />
                </div>
                
                {/* H1 limpio */}
                <h1 className="text-[56px] sm:text-[64px] lg:text-[72px] font-bold text-slate-900 leading-[0.95] tracking-tight mb-6">
                  Seguro Dental Madrid:
                  <br />
                  <span className="text-sky-500">Sin Carencias desde el Primer Día</span>
                </h1>
                
                {/* Subheadline clara */}
                <p className="text-2xl text-slate-600 leading-relaxed mb-10 max-w-lg">
                  Sin carencias.
                  <br />
                  <span className="font-semibold text-slate-900">Precio adaptado a tu perfil.</span>
                </p>
                
                {/* CTAs elegantes */}
                <div className="flex flex-wrap gap-4 mb-10">
                  <WhatsAppButton 
                    href={wCotiza}
                    location="hero"
                    className="group inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-600 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all shadow-lg shadow-sky-500/20 hover:shadow-xl hover:shadow-sky-500/30 hover:-translate-y-0.5"
                  >
                    Cotizar WhatsApp
                  </WhatsAppButton>
                  <a 
                    href="tel:603448765"
                    className="inline-flex items-center gap-2 bg-white text-slate-700 px-8 py-4 rounded-xl text-lg font-medium border border-slate-200 hover:border-sky-300 hover:bg-sky-50/50 transition-all"
                  >
                    <Phone className="w-5 h-5" />
                    📞 603 44 87 65
                  </a>
                </div>
                
                {/* Trust pills */}
                <div className="flex flex-wrap gap-3">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-600 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-sky-500" />
                    Sin carencias
                  </span>
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-600 text-sm">
                    <Clock className="w-4 h-4 text-sky-500" />
                    30 min respuesta
                  </span>
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-600 text-sm">
                    <Shield className="w-4 h-4 text-sky-500" />
                    Implantes incluidos
                  </span>
                </div>
              </div>
              
              {/* Right: Imagen con halo sutil */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-sky-100/50 to-blue-50/30 rounded-3xl blur-2xl transform scale-95" />
                <div className="relative rounded-2xl overflow-hidden shadow-xl shadow-slate-200/50 border border-slate-100">
                  <Image
                    src="/images/dental/hero-dental.jpg"
                    alt="Seguro dental Madrid - Clínica dental profesional"
                    width={600}
                    height={500}
                    className="w-full h-auto object-cover object-top"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* VENTAJAS — Cards limpias con borde suave */}
        <section className="py-24 bg-slate-50/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl">
            <div className="text-center mb-16">
              <h2 className="text-[40px] sm:text-[48px] font-bold text-slate-900 leading-tight mb-4">
                Ventajas claras
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Por qué sonreír con nosotros
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { 
                  icon: CheckCircle2, 
                  title: "Sin carencias", 
                  desc: "Cobertura desde el día 1. Sin esperas ni papeleo. Empieza a usar tu seguro inmediatamente."
                },
                { 
                  icon: Smile, 
                  title: "Implantes cubiertos", 
                  desc: "Implantes dentales incluidos. Recupera tu sonrisa completa."
                },
                { 
                  icon: Heart, 
                  title: "Ortodoncia adultos", 
                  desc: "Tratamientos de ortodoncia para todas las edades. Tu sonrisa perfecta es posible."
                },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-14 h-14 rounded-xl bg-sky-50 flex items-center justify-center mb-6">
                    <item.icon className="w-7 h-7 text-sky-500" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* COBERTURAS — Grid minimalista */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl">
            <div className="text-center mb-16">
              <h2 className="text-[40px] sm:text-[48px] font-bold text-slate-900 leading-tight mb-4">
                ¿Qué incluye?
              </h2>
              <p className="text-lg text-slate-600">
                Todo lo que necesitas para tu sonrisa
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {[
                { icon: Stethoscope, title: "Checkups", desc: "2x/año gratis" },
                { icon: Syringe, title: "Empastes", desc: "80% cubierto" },
                { icon: Scan, title: "Radiografías", desc: "Ilimitadas" },
                { icon: Smile, title: "Prótesis", desc: "Removibles" },
                { icon: Shield, title: "Extracciones", desc: "Completa" },
                { icon: Heart, title: "Limpiezas", desc: "Profesional" },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border border-slate-100">
                  <div className="w-12 h-12 rounded-lg bg-sky-50 flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-sky-500" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* EQUIPO — Blanco puro, foto protagonista */}
        <section className="py-24 bg-slate-50/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-sky-100/50 to-transparent rounded-3xl blur-2xl transform scale-95" />
                <div className="relative rounded-2xl overflow-hidden shadow-xl shadow-slate-200/50 border border-slate-100">
                  <Image
                    src="/images/rosa_y_sebastian.jpeg"
                    alt="Rosa Valentín - Especialista dental"
                    width={500}
                    height={500}
                    className="w-full h-auto object-cover object-[center_20%]"
                    priority
                    style={{ aspectRatio: '1/1' }}
                  />
                </div>
              </div>
              
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-50 text-sky-700 text-sm font-medium mb-6">
                  <Award className="w-4 h-4" />
                  Especialista dental
                </div>
                
                <h2 className="text-[40px] sm:text-[48px] font-bold text-slate-900 leading-tight mb-6">
                  Rosa Valentín
                </h2>
                
                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                  +10 años ayudando a familias de Madrid a sonreír con confianza.
                  Te explico cada cobertura sin tecnicismos, paso a paso.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center">
                      <CheckCircle2 className="w-5 h-5 text-sky-600" />
                    </div>
                    <span className="text-slate-700">Dentistas de confianza en Madrid</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center">
                      <Shield className="w-5 h-5 text-sky-600" />
                    </div>
                    <span className="text-slate-700">DGSFP: C012479234434D</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-sky-600" />
                    </div>
                    <span className="text-slate-700">95% clientes recomiendan</span>
                  </div>
                </div>
                
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-slate-700 text-sm">
                  <span className="font-semibold text-slate-900">NIF:</span> 79234434D
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROCESO — Fondo alternado, 3 pasos */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl">
            <div className="text-center mb-16">
              <h2 className="text-[40px] sm:text-[48px] font-bold text-slate-900 leading-tight mb-4">
                Cómo funciona
              </h2>
              <p className="text-lg text-slate-600">
                Tres pasos simples
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { 
                  num: "01", 
                  title: "WhatsApp", 
                  desc: "Nos cuentas tus necesidades dentales. Sin formularios."
                },
                { 
                  num: "02", 
                  title: "Cotizamos", 
                  desc: "En 30 minutos tienes tu mejor opción adaptada a ti."
                },
                { 
                  num: "03", 
                  title: "Sonríes", 
                  desc: "Tarjeta dental inmediata. Empiezas a sonreír desde hoy."
                },
              ].map((step, i) => (
                <div key={i} className="text-center">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-sky-500 to-sky-400 text-white flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg shadow-sky-500/20">
                    {step.num}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* COMPARADOR — ¿Ya tienes seguro dental? */}
        <section className="py-24 bg-gradient-to-br from-slate-50 via-sky-50/30 to-blue-50/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-4xl">
            <div className="bg-white rounded-3xl p-10 md:p-14 shadow-xl shadow-sky-100/50 border border-sky-100">
              <h2 className="text-[32px] sm:text-[40px] font-bold text-slate-900 leading-tight mb-4 text-center">
                ¿Ya tienes seguro dental y no estás del todo contento?
              </h2>
              
              <p className="text-lg text-slate-600 leading-relaxed mb-10 text-center max-w-2xl mx-auto">
                Tráenoslo. En 10 años y +1.200 familias, siempre hemos encontrado uno mejor — o te lo decimos honestamente si el tuyo ya es bueno.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-10">
                {[
                  { icon: CheckCircle2, text: "Te comparamos sin cobrarte nada" },
                  { icon: Shield, text: "Si el tuyo es mejor, te lo decimos. Así de claros." },
                  { icon: Clock, text: "Si el nuestro es mejor, cambiamos en un día" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-sky-50/50">
                    <div className="w-10 h-10 rounded-lg bg-sky-100 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-sky-600" />
                    </div>
                    <p className="text-slate-700 leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
              
              <div className="text-center">
                <WhatsAppButton 
                  href={wCotiza}
                  location="comparador"
                  showIcon
                  className="inline-flex items-center gap-3 bg-sky-500 hover:bg-sky-600 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all shadow-lg shadow-sky-500/20 hover:shadow-xl"
                >
                  Compara tu seguro actual
                </WhatsAppButton>
              </div>
            </div>
          </div>
        </section>

        {/* CTA FINAL — Fondo blanco con toque azul suave */}
        <section className="relative py-24 bg-slate-50/50 overflow-hidden">
          {/* Toque azul suave */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gradient-radial from-sky-100/40 via-sky-50/20 to-transparent blur-3xl pointer-events-none" />
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-4xl relative z-10 text-center">
            <h2 className="text-[40px] sm:text-[48px] font-bold text-slate-900 leading-tight mb-6">
              Sonrisa perfecta,
              <br />
              <span className="text-sky-500">ya</span>
            </h2>
            
            <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
              Sin carencias. Sin compromiso.
              <br />
              Un WhatsApp. 30 minutos. Empieza a sonreír.
            </p>
            
            <WhatsAppButton 
              href={wCotiza}
              location="cta-final"
              className="group inline-flex items-center gap-3 bg-sky-500 hover:bg-sky-600 text-white px-10 py-5 rounded-xl text-xl font-semibold transition-all shadow-xl shadow-sky-500/20 hover:shadow-2xl hover:shadow-sky-500/30 hover:-translate-y-1"
            >
              Cotizar Ahora
            </WhatsAppButton>
            
            {/* Badges finales */}
            <div className="flex flex-wrap justify-center gap-4 mt-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-600 text-sm shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-sky-500" />
                Sin carencias
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-600 text-sm shadow-sm">
                <Clock className="w-4 h-4 text-sky-500" />
                30 min
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-600 text-sm shadow-sm">
                <Shield className="w-4 h-4 text-sky-500" />
                Implantes 300€/año
              </div>
            </div>
            
            <p className="text-sm text-slate-400 mt-8">
              DGSFP: C012479234434D
            </p>
          </div>
        </section>

        {/* RESEÑAS GOOGLE */}
        <GoogleReviewsWidget title="Opiniones de clientes sobre seguro dental" />

        {/* GARANTÍAS PREMIUM */}
        <GarantiasSection brandColor="#0ea5e9" />

      </main>
      <Footer />
      <StickyWhatsApp />
    </>
  );
}
