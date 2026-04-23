import type { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { StickyWhatsApp } from "@/components/sticky-whatsapp";
import { buildWhatsAppHref } from "@/lib/products";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import GarantiasSection from "@/components/GarantiasSection";
import GoogleReviewsWidget from "@/components/GoogleReviewsWidget";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { Sparkles, CheckCircle2, Clock, Smile, Stethoscope, Syringe, Scan, XCircle, Bone } from "lucide-react";

export const metadata: Metadata = {
  title: "Seguro Dental Sin Carencias Madrid | Valentín Protección Integral",
  description: "Seguro dental económico Madrid. Sin carencias. WhatsApp cotización inmediata. Rosa y Sebastián.",
  keywords: ["seguro dental Madrid","seguro dental sin carencias","seguro dental barato Madrid"],
  alternates: { canonical: "https://valentinproteccionintegral.com/seguros/dental" },
  openGraph: {
    title: "Seguro Dental Sin Carencias Madrid | Sin esperas",
    description: "Sin carencias desde día 1. Implantes incluidos. Cotiza WhatsApp 30min.",
    url: "https://valentinproteccionintegral.com/seguros/dental",
    siteName: "Valentín Protección Integral",
    locale: "es_ES",
    type: "website",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "medicalSpecialty": "Dentistry",
  "name": "Seguro Dental Sin Carencias Madrid - Valentín Protección Integral",
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

export default function DentalPage() {
  const wCotiza = buildWhatsAppHref("Hola, quiero información sobre seguro dental en Madrid. Sin carencias.");

  return (
    <>
      <BreadcrumbSchema items={[{name:"Inicio",url:"/"},{name:"Seguros",url:"/seguros"},{name:"Dental",url:"/seguros/dental"}]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(serviceSchema)}} />
      <Header />
      <main className="min-h-screen bg-white">
        
        {/* HERO MINTLIFY — Atmospheric gradient green-white */}
        <section className="relative pt-24 pb-20 overflow-hidden">
          {/* Gradient wash */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#d4fae8]/50 via-white to-white" />
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-6xl relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#d4fae8] text-[#0fa76e] text-sm mb-8">
                <Sparkles className="w-4 h-4" />
                +1.200 sonrisas protegidas · DGSFP
              </div>
              
              {/* H1 Mintlify — Inter 64px weight 600 */}
              <h1 className="text-[48px] sm:text-[56px] lg:text-[64px] font-semibold text-[#0d0d0d] leading-[1.15] tracking-[-1.28px] mb-6">
                Seguro Dental
                <br />
                <span className="text-[#18E299]">Madrid</span>
              </h1>
              
              {/* Subhead */}
              <p className="text-xl text-[#666666] leading-[1.50] mb-10 max-w-2xl mx-auto">
                Sin carencias. Precio adaptado.
                <br />
                Tu sonrisa, protegida desde hoy.
              </p>
              
              {/* CTA Mintlify — full-round, green */}
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                <a 
                  href={wCotiza}
                  className="group inline-flex items-center gap-2 bg-[#18E299] hover:bg-[#0fa76e] text-white px-8 py-4 rounded-full text-lg font-medium transition-all hover:scale-105 shadow-[rgba(0,0,0,0.06)_0px_1px_2px]"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                  💬 Cotizar WhatsApp
                  <span className="hidden group-hover:inline text-sm ml-2">
                    🌟 Dental + Salud = descuento
                  </span>
                </a>
                <a 
                  href="#coberturas"
                  className="inline-flex items-center gap-2 bg-white text-[#0d0d0d] px-8 py-4 rounded-full text-lg font-medium border border-[rgba(0,0,0,0.08)] hover:border-[#18E299] transition-all"
                >
                  Ver coberturas
                </a>
              </div>
              
              {/* Hero image */}
              <div className="relative max-w-4xl mx-auto mt-8">
                <Image
                  src="https://images.pexels.com/photos/3845816/pexels-photo-3845816.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Sonrisa dental profesional Madrid"
                  width={900}
                  height={500}
                  className="w-full rounded-3xl object-cover shadow-[rgba(0,0,0,0.03)_0px_2px_4px]"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* VENTAJAS — Mintlify cards verdes */}
        <section className="py-20 border-t border-[rgba(0,0,0,0.05)]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl">
            <h2 className="text-[40px] font-semibold text-[#0d0d0d] leading-[1.10] tracking-[-0.8px] text-center mb-16">
              Ventajas claras
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: CheckCircle2, title: "Sin carencias", desc: "Cobertura desde el día 1. Sin esperas ni papeleo." },
                { icon: Bone, title: "Implantes", desc: "Implantes dentales incluidos en tu seguro." },
                { icon: Smile, title: "Ortodoncia adultos", desc: "Tratamientos de ortodoncia para todas las edades." },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-3xl p-8 border border-[rgba(0,0,0,0.05)] hover:border-[#18E299]/30 transition-all">
                  <div className="w-14 h-14 rounded-2xl bg-[#d4fae8] flex items-center justify-center mb-6">
                    <item.icon className="w-7 h-7 text-[#18E299]" />
                  </div>
                  <h3 className="text-[20px] font-semibold text-[#0d0d0d] tracking-[-0.2px] mb-3">{item.title}</h3>
                  <p className="text-base text-[#666666] leading-[1.50]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* COBERTURAS — Mint grid */}
        <section id="coberturas" className="py-20 bg-[#fafafa]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl">
            <h2 className="text-[40px] font-semibold text-[#0d0d0d] leading-[1.10] tracking-[-0.8px] text-center mb-16">
              ¿Qué incluye?
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { icon: Stethoscope, title: "Checkups", desc: "2x/año gratis" },
                { icon: Syringe, title: "Empastes", desc: "80% cubierto" },
                { icon: XCircle, title: "Extracciones", desc: "Completa" },
                { icon: Smile, title: "Prótesis", desc: "Removibles" },
                { icon: Scan, title: "Radiografías", desc: "Ilimitadas" },
                { icon: Bone, title: "Implantes", desc: "Incluidos" },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 border border-[rgba(0,0,0,0.05)] hover:border-[#18E299]/20 transition-all">
                  <div className="w-10 h-10 rounded-xl bg-[#d4fae8] flex items-center justify-center mb-4">
                    <item.icon className="w-5 h-5 text-[#18E299]" />
                  </div>
                  <h3 className="text-[16px] font-medium text-[#0d0d0d] mb-1">{item.title}</h3>
                  <p className="text-sm text-[#888888]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* EQUIPO — Mintlify shadows */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <Image
                  src="/images/rosa_y_sebastian.jpeg"
                  alt="Rosa Valentín · Especialista dental"
                  width={500}
                  height={600}
                  className="w-full rounded-3xl object-cover shadow-[rgba(0,0,0,0.03)_0px_2px_4px]"
                />
              </div>
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#d4fae8] text-[#0fa76e] text-sm mb-6">
                  <Sparkles className="w-4 h-4" />
                  Especialista dental
                </div>
                <h2 className="text-[40px] font-semibold text-[#0d0d0d] leading-[1.10] tracking-[-0.8px] mb-4">
                  Rosa Valentín
                </h2>
                <p className="text-lg text-[#666666] leading-[1.50] mb-6">
                  +10 años ayudando a familias de Madrid a sonreír con confianza.
                  Te explico cada cobertura sin tecnicismos.
                </p>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f5f5f5] text-[#0d0d0d] text-sm border border-[rgba(0,0,0,0.05)]">
                  <CheckCircle2 className="w-4 h-4 text-[#18E299]" />
                  DGSFP: C012479234434D
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROCESO */}
        <section className="py-20 border-t border-[rgba(0,0,0,0.05)]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl">
            <h2 className="text-[40px] font-semibold text-[#0d0d0d] leading-[1.10] tracking-[-0.8px] text-center mb-16">
              Proceso simple
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { num: "1", title: "WhatsApp", desc: "Nos cuentas tus necesidades dentales." },
                { num: "2", title: "Cotizamos", desc: "En 30 min tienes tu mejor opción." },
                { num: "3", title: "Tarjeta", desc: "Tarjeta dental inmediata. Sin esperas." },
              ].map((step, i) => (
                <div key={i} className="text-center">
                  <div className="w-14 h-14 rounded-full bg-[#18E299] text-white flex items-center justify-center text-xl font-semibold mx-auto mb-4">
                    {step.num}
                  </div>
                  <h3 className="text-[20px] font-semibold text-[#0d0d0d] tracking-[-0.2px] mb-2">{step.title}</h3>
                  <p className="text-base text-[#666666] leading-[1.50]">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA FINAL — Verde grande */}
        <section className="py-24 bg-[#d4fae8]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-4xl text-center">
            <h2 className="text-[48px] sm:text-[56px] font-semibold text-[#0d0d0d] leading-[1.15] tracking-[-1.28px] mb-4">
              Sonrisa perfecta, ya.
            </h2>
            <p className="text-xl text-[#666666] mb-10">
              Sin carencias. Sin compromiso.
            </p>
            
            <a 
              href={wCotiza}
              className="group inline-flex items-center gap-2 bg-[#18E299] hover:bg-[#0fa76e] text-white px-10 py-5 rounded-full text-lg font-medium transition-all hover:scale-105 shadow-[rgba(0,0,0,0.06)_0px_1px_2px]"
            >
              <WhatsAppIcon className="w-5 h-5" />
              💬 Cotizar por WhatsApp
              <span className="hidden group-hover:inline text-sm ml-2">
                🌟 + Salud = descuento
              </span>
            </a>
            
            {/* Garantías verdes */}
            <div className="flex flex-wrap justify-center gap-4 mt-10">
              {[
                "30min respuesta",
                "Sin permanencia",
                "DGSFP verificado",
              ].map((item, i) => (
                <div key={i} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-[#0d0d0d] text-sm border border-[rgba(0,0,0,0.05)]">
                  <CheckCircle2 className="w-4 h-4 text-[#18E299]" />
                  {item}
                </div>
              ))}
            </div>
            
            <p className="text-sm text-[#888888] mt-8">
              DGSFP: C012479234434D
            </p>
          </div>
        </section>

        {/* RESEÑAS GOOGLE */}
        <GoogleReviewsWidget title="Opiniones de clientes sobre seguro dental" />

        {/* GARANTÍAS PREMIUM */}
        <GarantiasSection brandColor="#18E299" />

      </main>
      <Footer />
      <StickyWhatsApp />
    </>
  );
}
