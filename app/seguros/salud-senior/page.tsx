import type { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { StickyWhatsApp } from "@/components/sticky-whatsapp";
import { buildWhatsAppHref } from "@/lib/products";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import GuaranteeBadge from "@/components/GuaranteeBadge";
import GoogleReviewsWidget from "@/components/GoogleReviewsWidget";
import GarantiasSection from "@/components/GarantiasSection";
import { Sparkles, CheckCircle2, Clock, Shield, Heart, Stethoscope, Home, Pill, Phone, UserCheck, Award, TrendingUp, HandHeart } from "lucide-react";

export const metadata: Metadata = {
  title: "Seguro Salud Senior Madrid · Mayores 65+ | VPI",
  description: "Seguro médico para mayores 65+ Madrid. Sin carencias, sin copagos, atención geriátrica especializada. Llámanos o WhatsApp. Rosa y Sebastián.",
  keywords: ["seguro salud senior Madrid","seguro medico mayores 65 Madrid","salud privada jubilados Madrid"],
  alternates: { canonical: "https://valentinproteccionintegral.com/seguros/salud-senior" },
  openGraph: {
    title: "Seguro Salud Senior Madrid | Para Mayores 65+",
    description: "Atención médica especializada para mayores. Sin carencias, sin copagos. Llámanos o WhatsApp.",
    url: "https://valentinproteccionintegral.com/seguros/salud-senior",
    siteName: "Valentín Protección Integral",
    locale: "es_ES",
    type: "website",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Valentín Protección Integral",
  "url": "https://valentinproteccionintegral.com",
  "telephone": "+34603448765",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "C. de los Reyes Católicos, 1",
    "addressLocality": "Boadilla del Monte",
    "addressRegion": "Madrid",
    "addressCountry": "ES"
  },
  "areaServed": ["Boadilla del Monte", "Madrid", "Majadahonda", "Pozuelo de Alarcón"],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "60",
    "bestRating": "5",
    "worstRating": "1"
  }
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "name": "Seguro Salud Senior Madrid - Valentín Protección Integral",
  "provider": localBusinessSchema,
  "areaServed": ["Madrid", "Boadilla del Monte", "Majadahonda", "Pozuelo de Alarcón", "Las Rozas"],
  "description": "Seguro médico para mayores 65+ Madrid. Sin carencias, sin copagos, atención geriátrica especializada."
};

export const dynamic = "force-static";

export default function SaludSeniorPage() {
  const wCotiza = buildWhatsAppHref("Hola, busco un seguro de salud para mayores en Madrid. Tengo más de 65 años.");

  return (
    <>
      <BreadcrumbSchema items={[{name:"Inicio",url:"/"},{name:"Seguros",url:"/seguros"},{name:"Salud Senior",url:"/seguros/salud-senior"}]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(localBusinessSchema)}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(serviceSchema)}} />
      <Header />
      <main className="min-h-screen bg-white">
        
        {/* HERO — Claro, calmado, legible */}
        <section className="relative pt-20 pb-16 bg-stone-50 overflow-hidden">
          {/* Halo sutil verde salvia */}
          <div className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full bg-gradient-radial from-emerald-100/50 via-stone-100/20 to-transparent blur-3xl pointer-events-none" />
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-6xl relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left: Content */}
              <div>
                {/* Guarantee Badge */}
                <div className="mb-8">
                  <GuaranteeBadge type="senior" />
                </div>
                
                {/* H1 grande y claro */}
                <h1 className="text-[44px] sm:text-[52px] lg:text-[60px] font-bold text-stone-800 leading-[1.05] tracking-tight mb-6">
                  Seguro Salud
                  <br />
                  <span className="text-emerald-700">Senior Madrid</span>
                </h1>
                
                {/* Subheadline calmada */}
                <p className="text-2xl text-stone-600 leading-relaxed mb-8 max-w-lg">
                  Atención médica especializada para mayores.
                  <br />
                  <span className="text-stone-500">Sin carencias. Sin copagos. Con acompañamiento.</span>
                </p>
                
                {/* CTAs grandes y visibles */}
                <div className="flex flex-wrap gap-4 mb-8">
                  <a 
                    href={wCotiza}
                    className="group inline-flex items-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white px-8 py-5 rounded-xl text-xl font-semibold transition-all shadow-lg shadow-emerald-700/20 hover:shadow-xl"
                  >
                    <WhatsAppIcon className="w-6 h-6" />
                    💬 WhatsApp
                  </a>
                  <a 
                    href="tel:603448765"
                    className="inline-flex items-center gap-2 bg-white text-stone-700 px-8 py-5 rounded-xl text-xl font-medium border-2 border-stone-200 hover:border-emerald-400 hover:bg-emerald-50/30 transition-all"
                  >
                    <Phone className="w-6 h-6" />
                    📞 603 44 87 65
                  </a>
                </div>
                
                {/* Trust pills grandes */}
                <div className="flex flex-wrap gap-3">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-stone-200 text-stone-600 text-base">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    Sin carencias
                  </span>
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-stone-200 text-stone-600 text-base">
                    <Heart className="w-5 h-5 text-emerald-600" />
                    Sin copagos
                  </span>
                </div>
              </div>
              
              {/* Right: Imagen serena */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-100/40 to-stone-100/20 rounded-3xl blur-2xl transform scale-95" />
                <div className="relative rounded-2xl overflow-hidden shadow-xl shadow-stone-200/50 border border-stone-100">
                  <Image
                    src="https://images.pexels.com/photos/3768117/pexels-photo-3768117.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Atención médica para mayores Madrid"
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

        {/* BENEFICIOS — Simples y claros */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl">
            <div className="text-center mb-14">
              <h2 className="text-[36px] sm:text-[42px] font-bold text-stone-800 leading-tight mb-4">
                Ventajas claras
              </h2>
              <p className="text-xl text-stone-600">
                Lo que necesitas saber
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { 
                  icon: Stethoscope, 
                  title: "Médicos especialistas", 
                  desc: "Geriatras y especialistas en medicina para mayores. Sin lista de espera."
                },
                { 
                  icon: Home, 
                  title: "Atención domicilio", 
                  desc: "Si no puedes salir, el médico viene a tu casa. Incluido en tu seguro."
                },
                { 
                  icon: Pill, 
                  title: "Medicación incluida", 
                  desc: "La medicación en hospital está cubierta. Sin sorpresas en la factura."
                },
              ].map((item, i) => (
                <div key={i} className="bg-stone-50 rounded-2xl p-8 border border-stone-100">
                  <div className="w-16 h-16 rounded-xl bg-emerald-50 flex items-center justify-center mb-6">
                    <item.icon className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-stone-800 mb-3">{item.title}</h3>
                  <p className="text-lg text-stone-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* COBERTURAS — Necesidades senior */}
        <section className="py-20 bg-stone-50/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl">
            <div className="text-center mb-14">
              <h2 className="text-[36px] sm:text-[42px] font-bold text-stone-800 leading-tight mb-4">
                Principales especialidades
              </h2>
              <p className="text-xl text-stone-600">
                Coberturas clave para mayores de 65 años
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: Stethoscope, title: "Geriatría", desc: "Especialistas" },
                { icon: Heart, title: "Cardiología", desc: "Corazón" },
                { icon: Home, title: "Domicilio", desc: "A tu casa" },
                { icon: HandHeart, title: "Rehabilitación", desc: "Fisioterapia" },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border border-stone-100 text-center">
                  <div className="w-14 h-14 rounded-lg bg-emerald-50 flex items-center justify-center mb-4 mx-auto">
                    <item.icon className="w-7 h-7 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-bold text-stone-800 mb-1">{item.title}</h3>
                  <p className="text-base text-stone-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* EQUIPO — Confianza y cercanía */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-100/30 to-stone-100/20 rounded-3xl blur-2xl transform scale-95" />
                <div className="relative rounded-2xl overflow-hidden shadow-xl shadow-stone-200/50 border border-stone-100">
                  <Image
                    src="/images/rosa_y_sebastian.jpeg"
                    alt="Rosa y Sebastián - Especialistas en seguros para mayores"
                    width={500}
                    height={500}
                    className="w-full h-auto object-cover object-[center_20%]"
                    priority
                    style={{ aspectRatio: '1/1' }}
                  />
                </div>
              </div>
              
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 text-emerald-700 text-base font-medium mb-6">
                  <UserCheck className="w-5 h-5" />
                  Especialistas en mayores
                </div>
                
                <h2 className="text-[36px] sm:text-[42px] font-bold text-stone-800 leading-tight mb-6">
                  Rosa y Sebastián
                </h2>
                
                <p className="text-xl text-stone-600 leading-relaxed mb-6">
                  Entendemos lo que necesitas porque llevamos años ayudando a mayores 
                  de Madrid a encontrar el seguro médico adecuado. Te explicamos 
                  todo con paciencia y claridad.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center">
                      <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                    </div>
                    <span className="text-lg text-stone-700">+500 mayores asegurados</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center">
                      <Award className="w-6 h-6 text-emerald-600" />
                    </div>
                    <span className="text-lg text-stone-700">DGSFP: C012479234434D</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-emerald-600" />
                    </div>
                    <span className="text-lg text-stone-700">98% clientes satisfechos</span>
                  </div>
                </div>
                
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-stone-100 text-stone-700 text-base">
                  <span className="font-semibold text-stone-900">NIF:</span> 79234434D
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROCESO — Simple paso a paso */}
        <section className="py-20 bg-stone-50/50">
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
                  title: "Nos llamas", 
                  desc: "Por teléfono o WhatsApp. Te escuchamos con calma."
                },
                { 
                  num: "2", 
                  title: "Te asesoramos", 
                  desc: "Explicamos las opciones sin prisa. Respondemos todas tus dudas."
                },
                { 
                  num: "3", 
                  title: "Te acompañamos", 
                  desc: "Antes, durante y después. Siempre disponibles para ti."
                },
              ].map((step, i) => (
                <div key={i} className="text-center">
                  <div className="w-20 h-20 rounded-2xl bg-emerald-700 text-white flex items-center justify-center text-3xl font-bold mx-auto mb-6 shadow-lg shadow-emerald-700/20">
                    {step.num}
                  </div>
                  <h3 className="text-2xl font-bold text-stone-800 mb-3">{step.title}</h3>
                  <p className="text-lg text-stone-600 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA FINAL — Muy visible */}
        <section className="relative py-24 bg-emerald-700 overflow-hidden">
          {/* Halo sutil */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gradient-radial from-emerald-600/50 to-transparent blur-3xl pointer-events-none" />
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-4xl relative z-10 text-center">
            <h2 className="text-[40px] sm:text-[48px] font-bold text-white leading-tight mb-6">
              Tu salud, nuestra prioridad
            </h2>
            
            <p className="text-2xl text-emerald-100 mb-10 max-w-2xl mx-auto">
              Un WhatsApp o una llamada.
              <br />
              Te escuchamos con paciencia.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href={wCotiza}
                className="group inline-flex items-center gap-3 bg-white text-emerald-700 px-10 py-5 rounded-xl text-xl font-semibold transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
              >
                <WhatsAppIcon className="w-6 h-6" />
                💬 WhatsApp
              </a>
              <a 
                href="tel:603448765"
                className="inline-flex items-center gap-3 bg-emerald-600 text-white px-10 py-5 rounded-xl text-xl font-semibold border-2 border-emerald-500 hover:bg-emerald-500 transition-all"
              >
                <Phone className="w-6 h-6" />
                📞 603 44 87 65
              </a>
            </div>
            
            <p className="text-lg text-emerald-200/70 mt-10">
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
