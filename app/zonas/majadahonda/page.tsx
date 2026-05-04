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
import { CheckCircle2, MapPin, Building2, Stethoscope, Home, Dog, Heart, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Seguros en Majadahonda — Mediador Independiente | Valentín Protección Integral",
  description: "Asesor de seguros en Majadahonda. Salud privada desde 22,50€/mes, vida, dental y mascotas sin copagos. Mediador independiente. Consulta gratis.",
  keywords: ["seguros Majadahonda", "seguro salud Majadahonda", "mediador seguros Majadahonda", "seguro medico privado Majadahonda"],
  alternates: { canonical: "https://valentinproteccionintegral.com/zonas/majadahonda" },
  openGraph: {
    title: "Seguros en Majadahonda — Mediador Independiente | Valentín Protección Integral",
    description: "Asesor de seguros en Majadahonda. Salud privada desde 22,50€/mes, vida, dental y mascotas sin copagos. Mediador independiente. Consulta gratis.",
    url: "https://valentinproteccionintegral.com/zonas/majadahonda",
    siteName: "Valentín Protección Integral",
    locale: "es_ES",
    type: "website",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Valentín Protección Integral - Seguros Majadahonda",
  "telephone": "+34603448765",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Majadahonda",
    "addressRegion": "Madrid",
    "addressCountry": "ES",
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 40.4731,
    "longitude": -3.8729,
  },
  "areaServed": ["Majadahonda", "Boadilla del Monte", "Pozuelo de Alarcón", "Las Rozas", "Madrid"],
};

export const dynamic = "force-static";

export default function MajadahondaPage() {
  const wCotiza = buildWhatsAppHref("Hola, soy de Majadahonda y necesito información sobre seguros.");

  return (
    <>
      <BreadcrumbSchema items={[{name:"Inicio",url:"/"},{name:"Zonas",url:"/zonas"},{name:"Majadahonda",url:"/zonas/majadahonda"}]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(serviceSchema)}} />
      <Header />
      <main className="min-h-screen bg-white">

        {/* HERO */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="mb-6">
                  <GuaranteeBadge type="zonas" />
                </div>
                <h1 className="text-[40px] sm:text-[48px] lg:text-[52px] font-bold text-black leading-[1.23] mb-4">
                  Seguros en Majadahonda: Mediador Independiente
                </h1>
                <p className="text-xl text-[#4b4b4b] leading-relaxed mb-8 max-w-md">
                  No trabajamos para ninguna compañía. Comparamos el mercado completo y te recomendamos lo mejor para tu familia en Majadahonda.
                </p>
                <div className="flex flex-wrap gap-4 mb-8">
                  <WhatsAppButton
                    href={wCotiza}
                    location="majadahonda-hero"
                    className="inline-flex items-center gap-2 bg-black hover:bg-[#333] text-white px-6 py-3 rounded-full text-base font-medium transition-colors"
                  >
                    WhatsApp Majadahonda
                  </WhatsAppButton>
                  <a
                    href="tel:603448765"
                    className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full text-base font-medium border border-[#efefef] hover:bg-[#e2e2e2] transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    Llamar
                  </a>
                </div>
                <div className="flex flex-wrap gap-3">
                  <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#efefef] text-black text-sm">
                    <CheckCircle2 className="w-4 h-4" />
                    Mediador independiente
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#efefef] text-black text-sm">
                    <Heart className="w-4 h-4" />
                    Sin permanencia
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#efefef] text-black text-sm">
                    <CheckCircle2 className="w-4 h-4" />
                    30 min respuesta
                  </span>
                </div>
              </div>
              <div className="relative">
                <div className="relative rounded-xl overflow-hidden shadow-[rgba(0,0,0,0.12)_0px_4px_16px_0px]">
                  <Image
                    src="/images/zonas/majadahonda.jpg"
                    alt="Plaza de Colón de Majadahonda, Madrid"
                    width={600}
                    height={450}
                    className="w-full h-auto object-cover object-top"
                    priority
                  />
                  <div className="absolute bottom-4 left-4">
                    <div className="inline-flex items-center gap-2 rounded-full bg-white/95 backdrop-blur px-4 py-2 shadow-lg">
                      <MapPin className="w-4 h-4 text-black" />
                      <span className="text-sm font-bold text-black">Majadahonda</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* LOCAL PROOF */}
        <section className="py-16 bg-black text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl">
            <p className="text-sm uppercase tracking-wider text-[#afafaf] mb-4">MAJADAHONDA, MADRID OESTE</p>
            <h2 className="text-[36px] font-bold leading-[1.22] mb-12">
              Majadahonda, Madrid Oeste
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: Building2, title: "Alta cobertura privada", desc: "Majadahonda lidera en seguros de salud privada en Madrid Oeste. Las familias aquí son exigentes y lo saben." },
                { icon: Stethoscope, title: "Hospital Puerta de Hierro", desc: "A 10 minutos. Te asesoramos sobre qué póliza cubre mejor en esta red y en las clínicas locales." },
                { icon: Heart, title: "Sin permanencia", desc: "Contratas cuando quieres, cambias cuando quieres. Sin ataduras a ninguna compañía." },
              ].map((item, i) => (
                <div key={i} className="rounded-xl p-6 border border-[#333]">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mb-4">
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-[#afafaf]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* POPULARES */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl">
            <h2 className="text-[36px] font-bold text-black leading-[1.22] text-center mb-12">
              Populares en Majadahonda
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: Stethoscope, title: "Salud familiar", desc: "Colegios privados, deportes. Salud a su altura." },
                { icon: Home, title: "Vida + Hipoteca", desc: "Urbanizaciones premium de Majadahonda." },
                { icon: Dog, title: "Mascotas", desc: "Alta densidad de mascotas en la zona." },
                { icon: Heart, title: "Dental", desc: "Revisiones sin espera, sin copagos." },
              ].map((item, i) => (
                <div key={i} className="rounded-xl p-5 shadow-[rgba(0,0,0,0.12)_0px_4px_16px_0px] hover:shadow-[rgba(0,0,0,0.16)_0px_4px_20px_0px] transition-shadow">
                  <div className="w-10 h-10 rounded-lg bg-[#efefef] flex items-center justify-center mb-3">
                    <item.icon className="w-5 h-5 text-black" />
                  </div>
                  <h3 className="text-base font-bold text-black mb-1">{item.title}</h3>
                  <p className="text-sm text-[#4b4b4b]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* EQUIPO LOCAL */}
        <section className="py-16 bg-[#efefef]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative rounded-xl overflow-hidden shadow-[rgba(0,0,0,0.12)_0px_4px_16px_0px]">
                <Image
                  src="/images/rosa_y_sebastian.jpeg"
                  alt="Rosa y Sebastián Valentín · Tu equipo asesor en Majadahonda"
                  width={500}
                  height={500}
                  className="w-full h-auto object-cover object-[center_20%]"
                  style={{ aspectRatio: "1/1" }}
                />
              </div>
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-black text-sm mb-6 shadow-sm">
                  <MapPin className="w-4 h-4" />
                  Majadahonda especialistas
                </div>
                <h2 className="text-[36px] font-bold text-black leading-[1.22] mb-4">
                  Rosa y Sebastián
                </h2>
                <p className="text-lg text-[#4b4b4b] mb-6">
                  Mediadores independientes. No trabajamos para ninguna compañía: comparamos el mercado y te recomendamos lo mejor para tu familia en Majadahonda.
                </p>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3 text-[#4b4b4b]">
                    <MapPin className="w-5 h-5 text-black" />
                    <span>Majadahonda, Madrid</span>
                  </div>
                  <div className="flex items-center gap-3 text-[#4b4b4b]">
                    <Phone className="w-5 h-5 text-black" />
                    <span>603 44 87 65</span>
                  </div>
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black text-white text-sm">
                  <CheckCircle2 className="w-4 h-4" />
                  DGSFP: C012479234434D
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROCESO */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl">
            <h2 className="text-[36px] font-bold text-black leading-[1.22] text-center mb-12">
              Cómo trabajamos
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { num: "1", title: "WhatsApp", desc: 'Escribe "Majadahonda" y cuéntanos tu situación.' },
                { num: "2", title: "Comparativa", desc: "Analizamos las mejores opciones para tu perfil en 30 minutos." },
                { num: "3", title: "Contratación", desc: "Sin papeles innecesarios. Sin desplazamientos si no quieres." },
              ].map((step, i) => (
                <div key={i} className="text-center">
                  <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center text-lg font-bold mx-auto mb-4">
                    {step.num}
                  </div>
                  <h3 className="text-xl font-bold text-black mb-2">{step.title}</h3>
                  <p className="text-base text-[#4b4b4b]">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="py-16 bg-black text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl text-center">
            <h2 className="text-[36px] sm:text-[48px] font-bold leading-[1.22] mb-4">
              Tu asesor de seguros en Majadahonda
            </h2>
            <p className="text-xl text-[#afafaf] mb-8">
              Mediador independiente. Comparamos sin cobrarte nada.
            </p>
            <WhatsAppButton
              href={wCotiza}
              location="majadahonda-cta-final"
              className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full text-lg font-medium hover:bg-[#e2e2e2] transition-colors"
            >
              WhatsApp Majadahonda
            </WhatsAppButton>
            <div className="flex flex-wrap justify-center gap-3 mt-8">
              {["30 min respuesta", "Mediador independiente", "DGSFP verificado"].map((item, i) => (
                <div key={i} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-sm">
                  <CheckCircle2 className="w-4 h-4" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* RESEÑAS */}
        <GoogleReviewsWidget title="Opiniones de clientes en Majadahonda" />

        {/* GARANTÍAS */}
        <GarantiasSection brandColor="#10b981" />

      </main>
      <Footer />
      <StickyWhatsApp />
    </>
  );
}
