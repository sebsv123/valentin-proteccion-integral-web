import type { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { StickyWhatsApp } from "@/components/sticky-whatsapp";
import { buildWhatsAppHref } from "@/lib/products";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { Sparkles, CheckCircle2, Clock, Shield, Heart, Hospital, Stethoscope, Pill, FlaskConical, SmilePlus, Ambulance } from "lucide-react";

export const metadata: Metadata = {
  title: "Seguro Salud Privado Madrid | Valentín Protección Integral",
  description: "Mejor seguro médico privado Madrid. Sin copagos, cobertura inmediata. Cotiza WhatsApp 30min. Rosa y Sebastián.",
  keywords: ["seguro salud privado Madrid","seguro medico privado Madrid","salud privada Madrid sin copagos"],
  alternates: { canonical: "https://valentinproteccionintegral.com/seguros/salud-individual" },
  openGraph: {
    title: "Seguro Salud Privado Madrid | Sin Copagos",
    description: "Cobertura inmediata. Sin copagos. Especialistas sin lista de espera. WhatsApp 30min.",
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
      <main className="min-h-screen bg-[#f5f5f7]">
        
        {/* HERO APPLE — Clean, minimal, product-as-hero */}
        <section className="bg-[#000000] text-white py-24 lg:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-6xl text-center">
            {/* Badge Apple style */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1d1d1f] text-[#86868b] text-sm mb-8">
              <Sparkles className="w-4 h-4" />
              +1.200 protegidos · DGSFP verificado
            </div>
            
            {/* H1 Apple SF Pro Display 56px weight 600 */}
            <h1 className="text-[48px] sm:text-[56px] lg:text-[64px] font-semibold text-white leading-[1.07] tracking-[-0.28px] mb-4">
              Tu Salud Privado
              <br />
              <span className="text-[#86868b]">Madrid</span>
            </h1>
            
            {/* Subhead Apple style */}
            <p className="text-[21px] text-[#86868b] leading-[1.47] mb-10 max-w-2xl mx-auto">
              Sin copagos. Cobertura inmediata. Madrid.
            </p>
            
            {/* CTAs Apple style — Pill links */}
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              <a 
                href={wCotiza}
                className="inline-flex items-center gap-2 bg-[#0071e3] hover:bg-[#0077ed] text-white px-6 py-3 rounded-lg text-[17px] font-normal transition-colors"
              >
                <WhatsAppIcon className="w-4 h-4" />
                💬 Cotizar WhatsApp
              </a>
              <a 
                href="#coberturas"
                className="inline-flex items-center gap-2 bg-transparent text-[#2997ff] px-6 py-3 rounded-[980px] text-[17px] font-normal border border-[#2997ff] hover:underline transition-all"
              >
                Ver coberturas →
              </a>
            </div>
            
            {/* Hero Image Apple style */}
            <div className="relative max-w-4xl mx-auto">
              <Image
                src="https://images.pexels.com/photos/668300/pexels-photo-668300.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Hospital moderno Madrid profesional"
                width={980}
                height={550}
                className="w-full rounded-xl object-cover shadow-[rgba(0,0,0,0.22)_3px_5px_30px_0px]"
                priority
              />
            </div>
          </div>
        </section>

        {/* VENTAJAS — Apple cards limpias */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl">
            <h2 className="text-[40px] font-semibold text-[#1d1d1f] leading-[1.10] text-center mb-16">
              Ventajas claras
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: CheckCircle2, title: "Sin copagos", desc: "Consulta y hospitalización sin pagar nada extra." },
                { icon: Clock, title: "Cobertura inmediata", desc: "Desde el primer día. Sin carencias para urgencias." },
                { icon: Shield, title: "Madrid + España", desc: "Red nacional de hospitales privados." },
              ].map((item, i) => (
                <div key={i} className="bg-[#f5f5f7] rounded-xl p-8 text-center">
                  <div className="w-14 h-14 rounded-full bg-[#0071e3]/10 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-7 h-7 text-[#0071e3]" />
                  </div>
                  <h3 className="text-[21px] font-semibold text-[#1d1d1f] mb-2">{item.title}</h3>
                  <p className="text-[17px] text-[#86868b] leading-[1.47]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* COBERTURAS — Apple grid */}
        <section id="coberturas" className="py-24 bg-[#f5f5f7]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl">
            <h2 className="text-[40px] font-semibold text-[#1d1d1f] leading-[1.10] text-center mb-16">
              Cobertura completa
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {[
                { icon: Hospital, title: "Hospitalización", desc: "Completa" },
                { icon: Stethoscope, title: "Especialistas", desc: "Ilimitados" },
                { icon: Pill, title: "Medicación", desc: "100% cubierta" },
                { icon: FlaskConical, title: "Análisis", desc: "Y pruebas" },
                { icon: SmilePlus, title: "Dental", desc: "Básica incluida" },
                { icon: Ambulance, title: "Ambulancia", desc: "Ilimitada" },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-xl p-6 shadow-[rgba(0,0,0,0.22)_3px_5px_30px_0px] hover:shadow-[rgba(0,0,0,0.3)_5px_8px_40px_0px] transition-shadow">
                  <div className="w-12 h-12 rounded-full bg-[#f5f5f7] flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-[#1d1d1f]" />
                  </div>
                  <h3 className="text-[17px] font-semibold text-[#1d1d1f] mb-1">{item.title}</h3>
                  <p className="text-[14px] text-[#86868b]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* EQUIPO — Apple style con foto */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <Image
                  src="/images/rosa_y_sebastian.jpeg"
                  alt="Rosa Valentín · Mediadora Senior"
                  width={500}
                  height={600}
                  className="w-full rounded-xl object-cover shadow-[rgba(0,0,0,0.22)_3px_5px_30px_0px]"
                />
              </div>
              <div className="text-center lg:text-left">
                <h2 className="text-[32px] font-semibold text-[#1d1d1f] leading-[1.10] mb-4">
                  Rosa Valentín
                </h2>
                <p className="text-[21px] text-[#86868b] mb-6">
                  Mediadora Senior
                </p>
                <p className="text-[17px] text-[#1d1d1f] leading-[1.47] mb-8">
                  +10 años ayudando a familias de Madrid a encontrar 
                  la mejor cobertura médica privada. Asesoría personalizada, 
                  sin coste adicional.
                </p>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f5f5f7] text-[#1d1d1f] text-sm">
                  <CheckCircle2 className="w-4 h-4 text-[#0071e3]" />
                  NIF: 79234434D · DGSFP: C012479234434D
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROCESO — Apple steps minimal */}
        <section className="py-24 bg-[#f5f5f7]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl">
            <h2 className="text-[40px] font-semibold text-[#1d1d1f] leading-[1.10] text-center mb-4">
              Proceso simple
            </h2>
            <p className="text-[21px] text-[#86868b] text-center mb-16">
              Sin esperas. Sin complicaciones.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { num: "1", title: "WhatsApp", desc: "Nos cuentas tu situación médica y necesidades." },
                { num: "2", title: "Cotizamos", desc: "En 30 min te enviamos la mejor opción para ti." },
                { num: "3", title: "Alta inmediata", desc: "Cobertura desde el primer día. Sin papeleo." },
              ].map((step, i) => (
                <div key={i} className="text-center">
                  <div className="w-12 h-12 rounded-full bg-[#0071e3] text-white flex items-center justify-center text-[21px] font-semibold mx-auto mb-4">
                    {step.num}
                  </div>
                  <h3 className="text-[21px] font-semibold text-[#1d1d1f] mb-2">{step.title}</h3>
                  <p className="text-[17px] text-[#86868b] leading-[1.47]">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* GARANTÍAS APPLE — Badges blancos */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl">
            <h2 className="text-[40px] font-semibold text-[#1d1d1f] leading-[1.10] text-center mb-16">
              Garantías
            </h2>
            
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "Respuesta 30min garantizada",
                "Sin permanencia",
                "Revisión anual gratuita",
                "DGSFP verificado",
              ].map((item, i) => (
                <div key={i} className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#f5f5f7] text-[#1d1d1f] text-[17px]">
                  <CheckCircle2 className="w-5 h-5 text-[#0071e3]" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA FINAL — Apple dark section */}
        <section className="py-24 lg:py-32 bg-[#000000] text-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-4xl">
            <h2 className="text-[48px] sm:text-[56px] font-semibold text-white leading-[1.07] tracking-[-0.28px] mb-4">
              Empieza Hoy
            </h2>
            <p className="text-[21px] text-[#86868b] mb-10">
              Tu cobertura médica privada en 30 minutos.
            </p>
            <a 
              href={wCotiza}
              className="group inline-flex items-center gap-2 bg-[#0071e3] hover:bg-[#0077ed] text-white px-8 py-4 rounded-lg text-[17px] font-normal transition-all hover:scale-105"
            >
              <WhatsAppIcon className="w-5 h-5" />
              💬 Cotizar por WhatsApp
              <span className="hidden group-hover:inline text-sm ml-2 text-white/80">
                ✨ + Dental = condiciones especiales
              </span>
            </a>
            <p className="text-[14px] text-[#86868b] mt-8">
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
