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
import { CheckCircle2, MapPin, Building2, Stethoscope, Home, Dog, Car, Heart, Phone, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Seguros en Madrid — Asesor Independiente | Valentín Protección Integral",
  description: "Mediador de seguros en Madrid. Salud desde 22,50€/mes, vida, dental, mascotas y seguros para extranjeros con NIE/TIE. +1.200 familias. Consulta gratis.",
  keywords: ["seguros Madrid", "seguro salud Madrid", "mediador seguros Madrid", "seguro medico privado Madrid", "asesor seguros Madrid"],
  alternates: { canonical: "https://valentinproteccionintegral.com/zonas/madrid" },
  openGraph: {
    title: "Seguros en Madrid — Asesor Independiente | Valentín Protección Integral",
    description: "Mediador de seguros en Madrid. Salud desde 22,50€/mes, vida, dental, mascotas y seguros para extranjeros con NIE/TIE. +1.200 familias. Consulta gratis.",
    url: "https://valentinproteccionintegral.com/zonas/madrid",
    siteName: "Valentín Protección Integral",
    locale: "es_ES",
    type: "website",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Valentín Protección Integral - Seguros Madrid",
  "telephone": "+34603448765",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Madrid",
    "addressRegion": "Madrid",
    "addressCountry": "ES",
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 40.4168,
    "longitude": -3.7038,
  },
  "areaServed": ["Madrid", "Boadilla del Monte", "Majadahonda", "Pozuelo de Alarcón", "Las Rozas"],
};

export const dynamic = "force-static";

export default function MadridPage() {
  const wCotiza = buildWhatsAppHref("Hola, estoy en Madrid y necesito información sobre seguros.");

  return (
    <>
      <BreadcrumbSchema items={[{name:"Inicio",url:"/"},{name:"Zonas",url:"/zonas"},{name:"Madrid",url:"/zonas/madrid"}]} />
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
                  Seguros en Madrid: Tu Asesor Independiente y Multicompañía
                </h1>
                <p className="text-xl text-[#4b4b4b] leading-relaxed mb-8 max-w-md">
                  Más de 1.200 familias en Madrid y Madrid Oeste nos eligen porque no trabajamos para ninguna compañía. Trabajamos para ti.
                </p>
                <div className="flex flex-wrap gap-4 mb-8">
                  <WhatsAppButton
                    href={wCotiza}
                    location="madrid-hero"
                    className="inline-flex items-center gap-2 bg-black hover:bg-[#333] text-white px-6 py-3 rounded-full text-base font-medium transition-colors"
                  >
                    WhatsApp Madrid
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
                    +1.200 familias
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#efefef] text-black text-sm">
                    <Sparkles className="w-4 h-4" />
                    Mediador independiente
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#efefef] text-black text-sm">
                    <CheckCircle2 className="w-4 h-4" />
                    +10 años
                  </span>
                </div>
              </div>
              <div className="relative">
                <div className="relative rounded-xl overflow-hidden shadow-[rgba(0,0,0,0.12)_0px_4px_16px_0px]">
                  <Image
                    src="/images/zonas/madrid.jpg"
                    alt="Madrid, capital de España"
                    width={600}
                    height={450}
                    className="w-full h-auto object-cover object-top"
                    priority
                  />
                  <div className="absolute bottom-4 left-4">
                    <div className="inline-flex items-center gap-2 rounded-full bg-white/95 backdrop-blur px-4 py-2 shadow-lg">
                      <MapPin className="w-4 h-4 text-black" />
                      <span className="text-sm font-bold text-black">Madrid</span>
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
            <p className="text-sm uppercase tracking-wider text-[#afafaf] mb-4">MADRID, DESDE EL CENTRO HASTA EL OESTE</p>
            <h2 className="text-[36px] font-bold leading-[1.22] mb-12">
              Madrid, desde el centro hasta el Oeste
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: Building2, title: "+1.200 familias protegidas", desc: "Una década protegiendo familias en toda la provincia de Madrid con seguros a medida." },
                { icon: Stethoscope, title: "Toda la red privada", desc: "Acceso a los mejores hospitales y clínicas privadas de Madrid capital y provincia." },
                { icon: Sparkles, title: "Respuesta en 30 min", desc: "WhatsApp directo con Rosa o Sebastián. Sin centralitas, sin esperas, sin bots." },
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
              Populares en Madrid
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="rounded-xl p-5 shadow-[rgba(0,0,0,0.12)_0px_4px_16px_0px] hover:shadow-[rgba(0,0,0,0.16)_0px_4px_20px_0px] transition-shadow">
                <div className="w-10 h-10 rounded-lg bg-[#efefef] flex items-center justify-center mb-3">
                  <Stethoscope className="w-5 h-5 text-black" />
                </div>
                <h3 className="text-base font-bold text-black mb-1">Salud privada</h3>
                <p className="text-sm text-[#4b4b4b]">Desde 22,50€/mes. Sin copagos.</p>
              </div>
              <div className="rounded-xl p-5 shadow-[rgba(0,0,0,0.12)_0px_4px_16px_0px] hover:shadow-[rgba(0,0,0,0.16)_0px_4px_20px_0px] transition-shadow">
                <div className="w-10 h-10 rounded-lg bg-[#efefef] flex items-center justify-center mb-3">
                  <Car className="w-5 h-5 text-black" />
                </div>
                <h3 className="text-base font-bold text-black mb-1">Extranjeros y NIE</h3>
                <a href="/seguros/salud-extranjeros" className="text-sm text-[#4b4b4b] underline hover:text-black">
                  Válido para visado/TIE desde día 1.
                </a>
              </div>
              <div className="rounded-xl p-5 shadow-[rgba(0,0,0,0.12)_0px_4px_16px_0px] hover:shadow-[rgba(0,0,0,0.16)_0px_4px_20px_0px] transition-shadow">
                <div className="w-10 h-10 rounded-lg bg-[#efefef] flex items-center justify-center mb-3">
                  <Dog className="w-5 h-5 text-black" />
                </div>
                <h3 className="text-base font-bold text-black mb-1">Mascotas</h3>
                <p className="text-sm text-[#4b4b4b]">La ley obliga. Te lo gestionamos.</p>
              </div>
              <div className="rounded-xl p-5 shadow-[rgba(0,0,0,0.12)_0px_4px_16px_0px] hover:shadow-[rgba(0,0,0,0.16)_0px_4px_20px_0px] transition-shadow">
                <div className="w-10 h-10 rounded-lg bg-[#efefef] flex items-center justify-center mb-3">
                  <Heart className="w-5 h-5 text-black" />
                </div>
                <h3 className="text-base font-bold text-black mb-1">Vida y decesos</h3>
                <p className="text-sm text-[#4b4b4b]">Protección completa para tu familia.</p>
              </div>
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
                  alt="Rosa y Sebastián Valentín · Tu equipo asesor en Madrid"
                  width={500}
                  height={500}
                  className="w-full h-auto object-cover object-[center_20%]"
                  style={{ aspectRatio: "1/1" }}
                />
              </div>
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-black text-sm mb-6 shadow-sm">
                  <MapPin className="w-4 h-4" />
                  Madrid completo
                </div>
                <h2 className="text-[36px] font-bold text-black leading-[1.22] mb-4">
                  Rosa y Sebastián
                </h2>
                <p className="text-lg text-[#4b4b4b] mb-6">
                  Tu equipo asesor en Madrid. No trabajamos para ninguna compañía: trabajamos para ti. Más de una década ayudando a familias de toda la provincia de Madrid.
                </p>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3 text-[#4b4b4b]">
                    <MapPin className="w-5 h-5 text-black" />
                    <span>C. de los Reyes Católicos, 1, Boadilla del Monte, Madrid</span>
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
                { num: "1", title: "WhatsApp", desc: 'Escribe "Madrid" y tu necesidad. Respondemos en menos de 30 minutos.' },
                { num: "2", title: "Propuesta", desc: "Comparamos entre todas las compañías y te recomendamos la mejor para tu caso." },
                { num: "3", title: "Contratación", desc: "Online o presencial en nuestra oficina de Boadilla del Monte." },
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
              Tu asesor de seguros en Madrid
            </h2>
            <p className="text-xl text-[#afafaf] mb-8">
              +10 años · +1.200 familias · Mediador DGSFP
            </p>
            <WhatsAppButton
              href={wCotiza}
              location="madrid-cta-final"
              className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full text-lg font-medium hover:bg-[#e2e2e2] transition-colors"
            >
              WhatsApp Madrid
            </WhatsAppButton>
            <div className="flex flex-wrap justify-center gap-3 mt-8">
              {["Desde 22,50€/mes", "Mediador independiente", "DGSFP C012479234434D"].map((item, i) => (
                <div key={i} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-sm">
                  <CheckCircle2 className="w-4 h-4" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* RESEÑAS */}
        <GoogleReviewsWidget title="Opiniones de clientes en Madrid" />

        {/* GARANTÍAS */}
        <GarantiasSection brandColor="#10b981" />

      </main>
      <Footer />
      <StickyWhatsApp />
    </>
  );
}
