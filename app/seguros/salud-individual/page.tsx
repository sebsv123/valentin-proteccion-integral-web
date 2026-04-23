import type { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { StickyWhatsApp } from "@/components/sticky-whatsapp";
import { buildWhatsAppHref } from "@/lib/products";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import GuaranteeBadge from "@/components/GuaranteeBadge";
import { Sparkles, CheckCircle2, Clock, Shield, Heart, Hospital, Stethoscope, Pill, FlaskConical, SmilePlus, Ambulance, Award, MapPin, TrendingUp, Activity } from "lucide-react";

export const metadata: Metadata = {
  title: "Seguro Salud Privado Madrid | Sin Copagos | Valentín",
  description: "Seguro médico privado Madrid sin copagos. Cobertura inmediata, especialistas ilimitados. Cotiza en WhatsApp en 30 minutos. DGSFP verificado.",
  keywords: ["seguro salud privado Madrid","seguro medico privado Madrid","salud privada Madrid sin copagos"],
  alternates: { canonical: "https://valentinproteccionintegral.com/seguros/salud-individual" },
  openGraph: {
    title: "Seguro Salud Privado Madrid | Sin Copagos | Valentín",
    description: "Seguro médico privado Madrid sin copagos. Cobertura inmediata, especialistas ilimitados. Cotiza en WhatsApp en 30 minutos. DGSFP verificado.",
    url: "https://valentinproteccionintegral.com/seguros/salud-individual",
    siteName: "Valentín Protección Integral",
    locale: "es_ES",
    type: "website",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "name": "Seguro Salud Privado Madrid - Valentín Protección Integral",
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
  "description": "Seguro médico privado Madrid sin copagos. Cobertura inmediata. Especialistas sin lista de espera.",
};

export const dynamic = "force-static";

export default function SaludIndividualPage() {
  const wCotiza = buildWhatsAppHref("Hola, quiero información sobre seguro de salud privado individual en Madrid.");

  return (
    <>
      <BreadcrumbSchema items={[{name:"Inicio",url:"/"},{name:"Seguros",url:"/seguros"},{name:"Salud Individual",url:"/seguros/salud-individual"}]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(serviceSchema)}} />
      <Header />
      <main className="min-h-screen bg-white">
        
        {/* HERO OSCURO — Premium, elegante, potente */}
        <section className="relative bg-gray-950 min-h-[85vh] flex items-center overflow-hidden">
          {/* Background image with overlay */}
          <div className="absolute inset-0">
            <Image
              src="https://images.pexels.com/photos/668300/pexels-photo-668300.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="Hospital moderno Madrid"
              fill
              className="object-cover opacity-40"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/90 to-gray-950/70" />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-gray-950/50" />
          </div>
          
          {/* Content */}
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-6xl relative z-10 py-24">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left: Content */}
              <div>
                {/* Guarantee Badge */}
                <GuaranteeBadge type="salud" />
                
                {/* H1 potente */}
                <h1 className="text-[56px] sm:text-[64px] lg:text-[72px] font-bold text-white leading-[0.95] tracking-tight mb-6">
                  Seguro Salud Privado Madrid:
                  <br />
                  <span className="text-emerald-400">Sin Copagos ni Listas de Espera</span>
                </h1>
                
                {/* Subheadline clara */}
                <p className="text-xl sm:text-2xl text-white/80 leading-relaxed mb-10 max-w-lg">
                  Sin copagos. Cobertura inmediata. Madrid.
                </p>
                
                {/* CTAs con alto contraste */}
                <div className="flex flex-wrap gap-4 mb-10">
                  <a 
                    href={wCotiza}
                    className="group inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-gray-950 px-8 py-4 rounded-xl text-lg font-semibold transition-all shadow-lg shadow-emerald-500/20 hover:shadow-xl hover:shadow-emerald-500/30 hover:-translate-y-0.5"
                  >
                    Cotizar por WhatsApp
                  </a>
                  <a 
                    href="#ventajas"
                    className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl text-lg font-medium border border-white/20 hover:bg-white/20 transition-all"
                  >
                    Ver ventajas
                  </a>
                </div>
                
                {/* Trust pills oscuros */}
                <div className="flex flex-wrap gap-3">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 text-white/80 text-sm border border-white/10">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    Sin copagos
                  </span>
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 text-white/80 text-sm border border-white/10">
                    <Clock className="w-4 h-4 text-emerald-400" />
                    30 min respuesta
                  </span>
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 text-white/80 text-sm border border-white/10">
                    <Shield className="w-4 h-4 text-emerald-400" />
                    Sin permanencia
                  </span>
                </div>
              </div>
              
              {/* Right: Empty for image visibility */}
              <div className="hidden lg:block" />
            </div>
          </div>
        </section>

        {/* VENTAJAS — Fondo blanco puro */}
        <section id="ventajas" className="py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl">
            <div className="text-center mb-16">
              <h2 className="text-[40px] sm:text-[48px] font-bold text-gray-900 leading-tight mb-4">
                Ventajas claras
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Por qué elegir un seguro de salud privado con nosotros
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { 
                  icon: Heart, 
                  title: "Sin copagos", 
                  desc: "No pagas nada extra en cada visita. Todo incluido en tu cuota mensual."
                },
                { 
                  icon: Clock, 
                  title: "Cobertura inmediata", 
                  desc: "Desde el primer día sin esperas ni carencias iniciales."
                },
                { 
                  icon: MapPin, 
                  title: "Madrid + España", 
                  desc: "Red completa de hospitales y clínicas en toda España."
                },
                { 
                  icon: Activity, 
                  title: "Cobertura completa", 
                  desc: "Desde consultas hasta cirugía, todo incluido."
                },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-14 h-14 rounded-xl bg-emerald-50 flex items-center justify-center mb-6">
                    <item.icon className="w-7 h-7 text-emerald-500" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* COBERTURA COMPLETA — Fondo blanco con mucho aire */}
        <section className="py-24 bg-gray-50/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl">
            <div className="text-center mb-16">
              <h2 className="text-[40px] sm:text-[48px] font-bold text-gray-900 leading-tight mb-4">
                Cobertura completa
              </h2>
              <p className="text-lg text-gray-600">
                Todo lo que incluye tu seguro de salud
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {[
                { icon: Hospital, title: "Hospitalización", desc: "Habitación individual" },
                { icon: Stethoscope, title: "Especialistas", desc: "Sin lista de espera" },
                { icon: Pill, title: "Medicación", desc: "En hospital incluida" },
                { icon: FlaskConical, title: "Análisis y pruebas", desc: "Diagnóstico completo" },
                { icon: SmilePlus, title: "Dental básica", desc: "Extracciones y limpieza" },
                { icon: Ambulance, title: "Ambulancia", desc: "Urgencias 24h" },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border border-gray-100">
                  <div className="w-12 h-12 rounded-lg bg-emerald-50 flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-emerald-500" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* EQUIPO Y CONFIANZA — Fondo blanco */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-100/50 to-transparent rounded-3xl blur-2xl transform scale-95" />
                <div className="relative rounded-2xl overflow-hidden shadow-xl shadow-gray-200/50 border border-gray-100">
                  <Image
                    src="/images/rosa_y_sebastian.jpeg"
                    alt="Rosa y Sebastián - Tu equipo de confianza"
                    width={500}
                    height={500}
                    className="w-full h-auto object-cover object-[center_20%]"
                    priority
                    style={{ aspectRatio: '1/1' }}
                  />
                </div>
              </div>
              
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 text-emerald-700 text-sm font-medium mb-6">
                  <Award className="w-4 h-4" />
                  Mediadores certificados
                </div>
                
                <h2 className="text-[40px] sm:text-[48px] font-bold text-gray-900 leading-tight mb-6">
                  Rosa y Sebastián
                </h2>
                
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Te acompañamos en todo el proceso. Desde elegir el seguro que mejor 
                  se adapta a ti hasta resolver cualquier duda que tengas después.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    </div>
                    <span className="text-gray-700">+10 años de experiencia</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                      <Shield className="w-5 h-5 text-emerald-600" />
                    </div>
                    <span className="text-gray-700">DGSFP: C012479234434D</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-emerald-600" />
                    </div>
                    <span className="text-gray-700">+1.200 clientes satisfechos</span>
                  </div>
                </div>
                
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 text-gray-700 text-sm">
                  <span className="font-semibold text-gray-900">NIF:</span> 79234434D
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA FINAL — Fondo blanco con acento sutil */}
        <section className="relative py-24 bg-gray-50/50 overflow-hidden">
          {/* Acento visual sutil */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gradient-radial from-emerald-100/40 via-emerald-50/20 to-transparent blur-3xl pointer-events-none" />
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-4xl relative z-10 text-center">
            <h2 className="text-[40px] sm:text-[48px] font-bold text-gray-900 leading-tight mb-6">
              Tu salud no puede esperar
            </h2>
            
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Un WhatsApp. 30 minutos. Sin compromiso.
              <br />
              Descubre el seguro que mejor se adapta a ti.
            </p>
            
            <a 
              href={wCotiza}
              className="group inline-flex items-center gap-3 bg-emerald-500 hover:bg-emerald-600 text-white px-10 py-5 rounded-xl text-xl font-semibold transition-all shadow-xl shadow-emerald-500/20 hover:shadow-2xl hover:shadow-emerald-500/30 hover:-translate-y-1"
            >
              Cotizar Ahora
            </a>
            
            {/* Badges finales */}
            <div className="flex flex-wrap justify-center gap-4 mt-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 text-gray-600 text-sm shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                Sin copagos
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 text-gray-600 text-sm shadow-sm">
                <Clock className="w-4 h-4 text-emerald-500" />
                30 min
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 text-gray-600 text-sm shadow-sm">
                <Shield className="w-4 h-4 text-emerald-500" />
                Sin permanencia
              </div>
            </div>
            
            <p className="text-sm text-gray-400 mt-8">
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
