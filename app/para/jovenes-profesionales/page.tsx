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
import { Sparkles, CheckCircle2, Clock, Shield, Heart, Briefcase, Home, Zap, Award, TrendingUp, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Seguros Jóvenes Profesionales Madrid | Valentín",
  description: "Seguros para jóvenes profesionales Madrid. Salud sin copagos, vida hipoteca, accidentes deportes. WhatsApp cotización inmediata.",
  keywords: ["seguros jovenes profesionales Madrid","seguro hipoteca joven Madrid","seguro salud millennials Madrid"],
  alternates: { canonical: "https://valentinproteccionintegral.com/para/jovenes-profesionales" },
  openGraph: {
    title: "Seguros Jóvenes Profesionales Madrid | Valentín",
    description: "Seguros para jóvenes profesionales Madrid. Salud sin copagos, vida hipoteca, accidentes deportes. WhatsApp cotización inmediata.",
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
  "description": "Seguros para jóvenes profesionales Madrid. Hipoteca, salud, protección. Simple y moderno.",
};

export const dynamic = "force-static";

export default function JovenesPage() {
  const wCotiza = buildWhatsAppHref("Hola, soy joven profesional en Madrid y busco un seguro. Primera hipoteca / salud / protección.");

  return (
    <>
      <BreadcrumbSchema items={[{name:"Inicio",url:"/"},{name:"Para",url:"/para"},{name:"Jóvenes Profesionales",url:"/para/jovenes-profesionales"}]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(serviceSchema)}} />
      <Header />
      <main className="min-h-screen bg-white">
        
        {/* HERO — Moderno, aspiracional, limpio */}
        <section className="relative pt-24 pb-20 overflow-hidden">
          {/* Halo suave violeta */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-gradient-radial from-violet-100/60 via-fuchsia-50/30 to-transparent blur-3xl pointer-events-none" />
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-6xl relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left: Content */}
              <div>
                {/* Guarantee Badge */}
                <div className="mb-8">
                  <GuaranteeBadge type="default" />
                </div>
                
                {/* H1 moderno */}
                <h1 className="text-[52px] sm:text-[60px] lg:text-[68px] font-bold text-slate-900 leading-[0.95] tracking-tight mb-6">
                  Seguros Jóvenes Profesionales Madrid:
                  <br />
                  <span className="text-violet-600">Salud e Hipoteca</span>
                </h1>
                
                {/* Subhead aspiracional */}
                <p className="text-2xl text-slate-500 leading-relaxed mb-10 max-w-md">
                  Tu primera hipoteca.
                  <br />
                  Salud sin copagos.
                  <br />
                  <span className="text-slate-900 font-medium">Protección real.</span>
                </p>
                
                {/* CTAs modernos */}
                <div className="flex flex-wrap gap-4 mb-10">
                  <WhatsAppButton 
                    href={wCotiza}
                    location="jovenes-hero"
                    className="group inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all shadow-lg shadow-violet-600/25 hover:shadow-xl hover:-translate-y-0.5"
                  >
                    Cotizar ahora
                  </WhatsAppButton>
                  <a 
                    href="#necesidades"
                    className="inline-flex items-center gap-2 bg-white text-slate-700 px-8 py-4 rounded-full text-lg font-medium border border-slate-200 hover:border-violet-300 transition-all"
                  >
                    Ver opciones
                  </a>
                </div>
                
                {/* Trust minimal */}
                <div className="flex flex-wrap gap-6 text-slate-500">
                  <span className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-violet-600" />
                    Sin permanencia
                  </span>
                  <span className="flex items-center gap-2">
                    <Zap className="w-5 h-5 text-violet-600" />
                    30 min respuesta
                  </span>
                </div>
              </div>
              
              {/* Right: Imagen aspiracional */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-100/50 to-fuchsia-50/30 rounded-3xl blur-2xl transform scale-95" />
                <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-slate-200/50">
                  <Image
                    src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Joven profesional Madrid"
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

        {/* NECESIDADES REALES */}
        <section id="necesidades" className="py-24 bg-slate-50/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl">
            <div className="text-center mb-16">
              <h2 className="text-[40px] sm:text-[48px] font-bold text-slate-900 leading-tight mb-4">
                Lo que necesitás ahora
              </h2>
              <p className="text-xl text-slate-500">
                Tres momentos clave
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { 
                  icon: Home, 
                  title: "Primera hipoteca", 
                  desc: "El banco exige seguro de vida. Nosotros te conseguimos el mejor precio con la misma cobertura."
                },
                { 
                  icon: Heart, 
                  title: "Salud sin copagos", 
                  desc: "Médico cuando lo necesites, sin pagar extra. Especialistas y urgencias incluidos."
                },
                { 
                  icon: Briefcase, 
                  title: "Protección real", 
                  desc: "RC profesional, accidentes, responsabilidad. Tu futuro protegido desde el día 1."
                },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-2xl p-8 border border-slate-100">
                  <div className="w-14 h-14 rounded-xl bg-violet-50 flex items-center justify-center mb-6">
                    <item.icon className="w-7 h-7 text-violet-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* COBERTURAS CLARAS */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl">
            <div className="text-center mb-16">
              <h2 className="text-[40px] sm:text-[48px] font-bold text-slate-900 leading-tight mb-4">
                Cobertura simple
              </h2>
              <p className="text-xl text-slate-500">
                Lo esencial, nada de más
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: Heart, title: "Salud", desc: "Sin copagos" },
                { icon: Home, title: "Vida", desc: "Hipoteca" },
                { icon: Briefcase, title: "RC", desc: "Profesional" },
                { icon: Shield, title: "Accidentes", desc: "Protección" },
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <div className="w-16 h-16 rounded-2xl bg-slate-100 flex items-center justify-center mb-4 mx-auto">
                    <item.icon className="w-8 h-8 text-slate-700" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-1">{item.title}</h3>
                  <p className="text-slate-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BENEFICIOS PRÁCTICOS */}
        <section className="py-24 bg-slate-50/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl">
            <div className="text-center mb-16">
              <h2 className="text-[40px] sm:text-[48px] font-bold text-slate-900 leading-tight mb-4">
                Beneficios reales
              </h2>
              <p className="text-xl text-slate-500">
                Por qué elegirnos
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "App para gestionar todo", desc: "Tu seguro en el móvil. Sin papeleo, sin llamadas eternas." },
                { title: "Sin permanencia", desc: "Cambiás cuando quieras. Sin letras chicas ni sorpresas." },
                { title: "30 minutos y listo", desc: "Cotización clara, sin tecnicismos. Decidís y ya está." },
                { title: "Precio justo", desc: "Sin comisiones ocultas. Pagás lo que ves, ni un euro más." },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-6 bg-white rounded-xl border border-slate-100">
                  <div className="w-10 h-10 rounded-full bg-violet-100 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-violet-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1">{item.title}</h3>
                    <p className="text-slate-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* EQUIPO */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-100/40 to-slate-100/20 rounded-3xl blur-2xl transform scale-95" />
                <div className="relative rounded-2xl overflow-hidden shadow-xl shadow-slate-200/50">
                  <Image
                    src="/images/rosa_y_sebastian.jpeg"
                    alt="Rosa y Sebastián - Entienden tu momento"
                    width={500}
                    height={500}
                    className="w-full h-auto object-cover object-[center_20%]"
                    priority
                    style={{ aspectRatio: '1/1' }}
                  />
                </div>
              </div>
              
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-50 text-violet-700 text-sm font-medium mb-8">
                  <Award className="w-4 h-4" />
                  También pasamos por esto
                </div>
                
                <h2 className="text-[40px] sm:text-[48px] font-bold text-slate-900 leading-tight mb-6">
                  Rosa y Sebastián
                </h2>
                
                <p className="text-xl text-slate-500 leading-relaxed mb-8">
                  Sabemos lo que es la primera hipoteca, el gimnasio, los planes de fin de semana. 
                  Entendemos tu ritmo y te proponemos seguros que realmente se adaptan a tu vida.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-violet-100 flex items-center justify-center">
                      <CheckCircle2 className="w-5 h-5 text-violet-600" />
                    </div>
                    <span className="text-slate-700">+1.200 jóvenes protegidos</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-violet-100 flex items-center justify-center">
                      <Shield className="w-5 h-5 text-violet-600" />
                    </div>
                    <span className="text-slate-700">DGSFP: C012479234434D</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-violet-100 flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-violet-600" />
                    </div>
                    <span className="text-slate-700">94% recomiendan</span>
                  </div>
                </div>
                
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-slate-700 text-sm">
                  <span className="font-semibold text-slate-900">NIF:</span> 79234434D
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ - Jóvenes Profesionales */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-4xl">
            <div className="text-center mb-14">
              <h2 className="text-[32px] sm:text-[40px] font-bold text-slate-900 leading-tight mb-4">
                Preguntas frecuentes
              </h2>
              <p className="text-lg text-slate-600">
                Respuestas para jóvenes profesionales
              </p>
            </div>
            
            <div className="space-y-4">
              {[
                { 
                  q: "¿Qué seguro necesito para mi primera hipoteca?", 
                  a: "El banco te exigirá un seguro de vida vinculado a la hipoteca. Pero puedes contratarlo con nosotros y ahorrar hasta 50% respecto al del banco." 
                },
                { 
                  q: "¿Me conviene seguro de salud sin copagos?", 
                  a: "Si vas al médico más de 3-4 veces al año, sí. Sin copagos pagas una cuota fija y todas las consultas están incluidas. Te ayudamos a calcularlo." 
                },
                { 
                  q: "¿Puedo deducirme el seguro médico siendo autónomo?", 
                  a: "Sí, si eres autónomo el 100% de la prima es deducible en IRPF. Si eres asalariado, depende de tu convenio. Lo revisamos gratis." 
                },
                { 
                  q: "¿Qué pasa si cambio de trabajo?", 
                  a: "El seguro te sigue. Al ser privado y contratado directamente, no depende de tu empresa. Perfecto para la movilidad laboral de los jóvenes." 
                },
              ].map((item, i) => (
                <div key={i} className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{item.q}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "¿Qué seguro necesito para mi primera hipoteca?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "El banco te exigirá un seguro de vida vinculado a la hipoteca. Pero puedes contratarlo con nosotros y ahorrar hasta 50% respecto al del banco."
                  }
                },
                {
                  "@type": "Question",
                  "name": "¿Me conviene seguro de salud sin copagos?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Si vas al médico más de 3-4 veces al año, sí. Sin copagos pagas una cuota fija y todas las consultas están incluidas. Te ayudamos a calcularlo."
                  }
                },
                {
                  "@type": "Question",
                  "name": "¿Puedo deducirme el seguro médico siendo autónomo?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Sí, si eres autónomo el 100% de la prima es deducible en IRPF. Si eres asalariado, depende de tu convenio. Lo revisamos gratis."
                  }
                },
                {
                  "@type": "Question",
                  "name": "¿Qué pasa si cambio de trabajo?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "El seguro te sigue. Al ser privado y contratado directamente, no depende de tu empresa. Perfecto para la movilidad laboral de los jóvenes."
                  }
                }
              ]
            })
          }}
        />

        {/* CTA FINAL */}
        <section className="relative py-24 bg-violet-600 overflow-hidden">
          {/* Halo */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-radial from-violet-500/50 to-transparent blur-3xl pointer-events-none" />
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-4xl relative z-10 text-center">
            <h2 className="text-[44px] sm:text-[52px] font-bold text-white leading-tight mb-6">
              Decidí rápido.
              <br />
              <span className="text-violet-200">Decidí bien.</span>
            </h2>
            
            <p className="text-xl text-violet-100 mb-12 max-w-2xl mx-auto">
              Un WhatsApp. 30 minutos. Sin compromiso.
              <br />
              La protección que necesitás, al precio justo.
            </p>
            
            <WhatsAppButton 
              href={wCotiza}
              location="jovenes-cta-final"
              className="group inline-flex items-center gap-3 bg-white text-violet-600 px-12 py-5 rounded-full text-xl font-semibold transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
            >
              Empezar ahora
            </WhatsAppButton>
            
            {/* Minimal badges */}
            <div className="flex flex-wrap justify-center gap-6 mt-12 text-violet-200">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                Sin permanencia
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                30 min
              </span>
            </div>
            
            <p className="text-lg text-violet-300/70 mt-10">
              DGSFP: C012479234434D
            </p>
          </div>
        </section>

        {/* RESEÑAS GOOGLE */}
        <GoogleReviewsWidget title="Opiniones de jóvenes profesionales" />

        {/* GARANTÍAS PREMIUM */}
        <GarantiasSection brandColor="#8b5cf6" />

      </main>
      <Footer />
      <StickyWhatsApp />
    </>
  );
}
