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
import { Sparkles, CheckCircle2, Clock, Shield, Heart, Stethoscope, Syringe, Pill, Home, PawPrint, Award, TrendingUp, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Seguro Mascotas Madrid | RC Obligatoria Perros | Valentín",
  description: "Seguro mascotas Madrid desde 5€/mes. RC obligatoria perros Ley 2023. Asistencia veterinaria perros y gatos. WhatsApp 30 minutos.",
  keywords: ["seguro mascotas Madrid","seguro perro gato Madrid","veterinario seguro Madrid","seguro mascotas barato"],
  alternates: { canonical: "https://valentinproteccionintegral.com/seguros/mascotas" },
  openGraph: {
    title: "Seguro Mascotas Madrid | RC Obligatoria Perros | Valentín",
    description: "Seguro mascotas Madrid desde 5€/mes. RC obligatoria perros Ley 2023. Asistencia veterinaria perros y gatos. WhatsApp 30 minutos.",
    url: "https://valentinproteccionintegral.com/seguros/mascotas",
    siteName: "Valentín Protección Integral",
    locale: "es_ES",
    type: "website",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "InsuranceAgency",
  "name": "Seguro Mascotas Madrid - Valentín Protección Integral",
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
  "description": "Seguro veterinario perros gatos Madrid. Accidentes, cirugías, hospital. Cotiza WhatsApp 30min.",
};

export const dynamic = "force-static";

export default function MascotasPage() {
  const wCotiza = buildWhatsAppHref("Hola, quiero información sobre seguro para mi mascota en Madrid.");

  return (
    <>
      <BreadcrumbSchema items={[{name:"Inicio",url:"/"},{name:"Seguros",url:"/seguros"},{name:"Mascotas",url:"/seguros/mascotas"}]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(serviceSchema)}} />
      <Header />
      <main className="min-h-screen bg-white">
        
        {/* HERO — Blanco cálido, mascota protagonista */}
        <section className="relative pt-20 pb-16 bg-orange-50/30 overflow-hidden">
          {/* Halo cálido suave */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-radial from-amber-100/50 via-orange-50/30 to-transparent blur-3xl pointer-events-none" />
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-6xl relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left: Content */}
              <div>
                {/* Guarantee Badge */}
                <div className="mb-8">
                  <GuaranteeBadge type="mascotas" />
                </div>
                
                {/* H1 emocional */}
                <h1 className="text-[48px] sm:text-[56px] lg:text-[64px] font-bold text-stone-800 leading-[0.95] tracking-tight mb-6">
                  Seguro de Mascotas Madrid:
                  <br />
                  <span className="text-amber-600">RC Obligatoria y Veterinario</span>
                </h1>
                
                {/* Subheadline cálida */}
                <p className="text-2xl text-stone-600 leading-relaxed mb-8 max-w-lg">
                  Porque merece lo mejor.
                  <br />
                  <span className="text-stone-500">Veterinario, accidentes, cirugías.</span>
                </p>
                
                {/* CTAs */}
                <div className="flex flex-wrap gap-4 mb-8">
                  <WhatsAppButton 
                    href={wCotiza}
                    location="mascotas-hero"
                    className="group inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all shadow-lg shadow-amber-500/25 hover:shadow-xl hover:-translate-y-0.5"
                  >
                    Cotizar WhatsApp
                  </WhatsAppButton>
                  <a 
                    href="tel:603448765"
                    className="inline-flex items-center gap-2 bg-white text-stone-700 px-8 py-4 rounded-xl text-lg font-medium border border-stone-200 hover:border-amber-300 hover:bg-amber-50/30 transition-all"
                  >
                    <Phone className="w-5 h-5" />
                    📞 603 44 87 65
                  </a>
                </div>
                
                {/* Trust pills */}
                <div className="flex flex-wrap gap-3">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-stone-200 text-stone-600 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-amber-500" />
                    Perros y gatos
                  </span>
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-stone-200 text-stone-600 text-sm">
                    <Heart className="w-4 h-4 text-amber-500" />
                    Sin límite de edad
                  </span>
                </div>
              </div>
              
              {/* Right: Mascota protagonista */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-100/40 to-orange-50/20 rounded-3xl blur-2xl transform scale-95" />
                <div className="relative rounded-2xl overflow-hidden shadow-xl shadow-stone-200/50 border border-stone-100">
                  <Image
                    src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Perro y gato felices protegidos"
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

        {/* RAZONES — Por qué asegurar */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl">
            <div className="text-center mb-14">
              <h2 className="text-[36px] sm:text-[42px] font-bold text-stone-800 leading-tight mb-4">
                Por qué asegurar a tu mascota
              </h2>
              <p className="text-xl text-stone-600">
                Cuidarlos es quererlos
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { 
                  icon: Heart, 
                  title: "Tranquilidad", 
                  desc: "Sabes que está cubierto si algo pasa. Sin preocuparte por el dinero en momentos difíciles."
                },
                { 
                  icon: Stethoscope, 
                  title: "Mejor atención", 
                  desc: "Acceso a los mejores veterinarios de Madrid. Sin esperas, sin listas de espera."
                },
                { 
                  icon: Shield, 
                  title: "Imprevistos cubiertos", 
                  desc: "Accidentes, enfermedades, cirugías. Todo protegido desde el primer día."
                },
              ].map((item, i) => (
                <div key={i} className="bg-orange-50/50 rounded-2xl p-8 border border-orange-100">
                  <div className="w-14 h-14 rounded-xl bg-white flex items-center justify-center mb-6 shadow-sm">
                    <item.icon className="w-7 h-7 text-amber-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-stone-800 mb-3">{item.title}</h3>
                  <p className="text-stone-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* COBERTURAS — Cards limpias */}
        <section className="py-20 bg-stone-50/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl">
            <div className="text-center mb-14">
              <h2 className="text-[36px] sm:text-[42px] font-bold text-stone-800 leading-tight mb-4">
                Cobertura completa
              </h2>
              <p className="text-xl text-stone-600">
                Todo lo que incluye
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: Stethoscope, title: "Veterinario", desc: "Consultas" },
                { icon: Syringe, title: "Vacunas", desc: "Puestas al día" },
                { icon: Pill, title: "Medicación", desc: "Tratamientos" },
                { icon: Home, title: "Hospital", desc: "Ingresos" },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border border-stone-100 text-center">
                  <div className="w-12 h-12 rounded-lg bg-amber-50 flex items-center justify-center mb-4 mx-auto">
                    <item.icon className="w-6 h-6 text-amber-500" />
                  </div>
                  <h3 className="text-lg font-bold text-stone-800 mb-1">{item.title}</h3>
                  <p className="text-sm text-stone-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* EQUIPO Y CONFIANZA */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-100/40 to-stone-100/20 rounded-3xl blur-2xl transform scale-95" />
                <div className="relative rounded-2xl overflow-hidden shadow-xl shadow-stone-200/50 border border-stone-100">
                  <Image
                    src="/images/rosa_y_sebastian_mascotas.png"
                    alt="Rosa y Sebastián - Amantes de los animales"
                    width={500}
                    height={500}
                    className="w-full h-auto object-cover object-[center_20%]"
                    priority
                    style={{ aspectRatio: '1/1' }}
                  />
                </div>
              </div>
              
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 text-amber-700 text-sm font-medium mb-6">
                  <PawPrint className="w-4 h-4" />
                  Amantes de los animales
                </div>
                
                <h2 className="text-[36px] sm:text-[42px] font-bold text-stone-800 leading-tight mb-6">
                  Rosa y Sebastián
                </h2>
                
                <p className="text-lg text-stone-600 leading-relaxed mb-6">
                  Tenemos mascotas y sabemos lo que significan. Por eso entendemos 
                  lo importante que es protegerlas. Te ayudamos a encontrar el seguro 
                  que mejor cuida a tu compañero de 4 patas.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
                      <CheckCircle2 className="w-5 h-5 text-amber-600" />
                    </div>
                    <span className="text-stone-700">+1.200 mascotas protegidas</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
                      <Award className="w-5 h-5 text-amber-600" />
                    </div>
                    <span className="text-stone-700">DGSFP: C012479234434D</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-amber-600" />
                    </div>
                    <span className="text-stone-700">98% dueños felices</span>
                  </div>
                </div>
                
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-stone-100 text-stone-700 text-sm">
                  <span className="font-semibold text-stone-900">NIF:</span> 79234434D
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROCESO — Simple */}
        <section className="py-20 bg-orange-50/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl">
            <div className="text-center mb-14">
              <h2 className="text-[36px] sm:text-[42px] font-bold text-stone-800 leading-tight mb-4">
                Cómo funciona
              </h2>
              <p className="text-xl text-stone-600">
                Tres pasos simples
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { 
                  num: "1", 
                  title: "Nos cuentas", 
                  desc: "Nos dices qué mascota tienes y qué necesitas."
                },
                { 
                  num: "2", 
                  title: "Te asesoramos", 
                  desc: "Te recomendamos la mejor cobertura para tu caso."
                },
                { 
                  num: "3", 
                  title: "Proteges", 
                  desc: "Tu mascota está cubierta desde el primer día."
                },
              ].map((step, i) => (
                <div key={i} className="text-center">
                  <div className="w-16 h-16 rounded-2xl bg-amber-500 text-white flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg shadow-amber-500/20">
                    {step.num}
                  </div>
                  <h3 className="text-xl font-bold text-stone-800 mb-3">{step.title}</h3>
                  <p className="text-stone-600 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="relative py-24 bg-amber-500 overflow-hidden">
          {/* Halo */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gradient-radial from-amber-400/50 to-transparent blur-3xl pointer-events-none" />
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-4xl relative z-10 text-center">
            <h2 className="text-[40px] sm:text-[48px] font-bold text-white leading-tight mb-6">
              Protege a tu compañero
            </h2>
            
            <p className="text-xl text-amber-100 mb-10 max-w-2xl mx-auto">
              Un WhatsApp. 30 minutos. Sin compromiso.
              <br />
              Tu mascota lo merece.
            </p>
            
            <WhatsAppButton 
              href={wCotiza}
              location="mascotas-cta-final"
              className="group inline-flex items-center gap-3 bg-white text-amber-600 px-10 py-5 rounded-xl text-xl font-semibold transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
            >
              Cotizar Ahora
            </WhatsAppButton>
            
            {/* Badges finales */}
            <div className="flex flex-wrap justify-center gap-4 mt-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 text-white text-sm">
                <CheckCircle2 className="w-4 h-4" />
                Perros y gatos
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 text-white text-sm">
                <Heart className="w-4 h-4" />
                Sin límite de edad
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 text-white text-sm">
                <Shield className="w-4 h-4" />
                DGSFP verificado
              </div>
            </div>
            
            <p className="text-lg text-amber-200/70 mt-8">
              DGSFP: C012479234434D
            </p>
          </div>
        </section>

        {/* RESEÑAS GOOGLE */}
        <GoogleReviewsWidget title="Opiniones de clientes sobre seguro de mascotas" />

        {/* GARANTÍAS PREMIUM */}
        <GarantiasSection brandColor="#f59e0b" />

      </main>
      <Footer />
      <StickyWhatsApp />
    </>
  );
}
