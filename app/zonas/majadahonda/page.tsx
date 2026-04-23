import type { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { StickyWhatsApp } from "@/components/sticky-whatsapp";
import { buildWhatsAppHref } from "@/lib/products";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import GuaranteeBadge from "@/components/GuaranteeBadge";
import GarantiasSection from "@/components/GarantiasSection";
import GoogleReviewsWidget from "@/components/GoogleReviewsWidget";
import { Sparkles, CheckCircle2, MapPin, Building2, Stethoscope, Home, Dog, Car, Heart, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Seguros Majadahonda Madrid | Asesor Local | Valentín",
  description: "Seguros en Majadahonda. Asesor local cercano. Salud privada, vida hipoteca, hogar. Cotiza gratis WhatsApp 30 minutos.",
  keywords: ["seguros Majadahonda","seguros Majadahonda Madrid","mediador Majadahonda"],
  alternates: { canonical: "https://valentinproteccionintegral.com/zonas/majadahonda" },
  openGraph: {
    title: "Seguros Majadahonda Madrid | Asesor Local | Valentín",
    description: "Seguros en Majadahonda. Asesor local cercano. Salud privada, vida hipoteca, hogar. Cotiza gratis WhatsApp 30 minutos.",
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
    "addressCountry": "ES"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 40.4736,
    "longitude": -3.8333
  },
  "areaServed": ["Majadahonda", "Boadilla del Monte", "Pozuelo de Alarcón", "Las Rozas", "Madrid"],
  "description": "Seguros Majadahonda. Mediador local. Salud, vida, hogar, mascotas.",
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
        
        {/* HERO UBER — Majadahonda */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left: Content */}
              <div>
                {/* Guarantee Badge */}
                <div className="mb-6">
                  <GuaranteeBadge type="zonas" />
                </div>
                
                {/* H1 Uber style */}
                <h1 className="text-[40px] sm:text-[48px] lg:text-[52px] font-bold text-black leading-[1.23] mb-4">
                  Seguros en Majadahonda:
                  <br />
                  <span className="text-[#4b4b4b]">Asesor Independiente Cercano</span>
                </h1>
                
                {/* Subhead */}
                <p className="text-xl text-[#4b4b4b] leading-relaxed mb-8 max-w-md">
                  Tu mediador justo al lado.
                </p>
                
                {/* CTAs Uber */}
                <div className="flex flex-wrap gap-4 mb-8">
                  <a 
                    href={wCotiza}
                    className="group inline-flex items-center gap-2 bg-black hover:bg-[#333] text-white px-6 py-3 rounded-full text-base font-medium transition-colors"
                  >
                    WhatsApp Majadahonda
                    <span className="hidden group-hover:inline text-sm ml-1">
                      🏠 Café gratis
                    </span>
                  </a>
                  <a 
                    href="tel:603448765"
                    className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full text-base font-medium border border-[#efefef] hover:bg-[#e2e2e2] transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    Llamar
                  </a>
                </div>
                
                {/* Trust pills */}
                <div className="flex flex-wrap gap-3">
                  <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#efefef] text-black text-sm">
                    <CheckCircle2 className="w-4 h-4" />
                    Hospital La Moraleja 5min
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#efefef] text-black text-sm">
                    <Heart className="w-4 h-4" />
                    Conocemos la zona
                  </span>
                </div>
              </div>
              
              {/* Right: Map image */}
              <div className="relative">
                <div className="relative rounded-xl overflow-hidden shadow-[rgba(0,0,0,0.12)_0px_4px_16px_0px]">
                  <Image
                    src="https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?w=800&h=600&fit=crop"
                    alt="Mapa Majadahonda Madrid"
                    width={600}
                    height={450}
                    className="w-full h-auto object-cover object-top"
                    priority
                  />
                  {/* Location pin overlay */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center shadow-lg">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* LOCAL MAJADAHONDA */}
        <section className="py-16 bg-black text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl">
            <p className="text-sm uppercase tracking-wider text-[#afafaf] mb-4">EXPERTOS EN MAJADAHONDA</p>
            <h2 className="text-[36px] font-bold leading-[1.22] mb-12">
              Conocemos tu barrio
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: Building2, title: "Hospital La Moraleja", desc: "A 5 minutos. Conocemos su red médica y quirúrgica." },
                { icon: Stethoscope, title: "Dentistas Majadahonda", desc: "Las mejores clínicas dentales de la zona en nuestra red." },
                { icon: Home, title: "Hipotecas urbanizaciones", desc: "Especialistas en seguros de vida para hipotecas locales." },
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

        {/* POPULARES MAJADAHONDA */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl">
            <h2 className="text-[36px] font-bold text-black leading-[1.22] text-center mb-12">
              Populares en Majadahonda
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { icon: Stethoscope, title: "Salud", desc: "Hospital Infanta Sofía" },
                { icon: Home, title: "Vida", desc: "Hipoteca premium" },
                { icon: Car, title: "RC Coche", desc: "Protección vehículo" },
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

        {/* EQUIPO MAJADAHONDA */}
        <section className="py-16 bg-[#efefef]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative rounded-xl overflow-hidden shadow-[rgba(0,0,0,0.12)_0px_4px_16px_0px]">
                <Image
                  src="/images/rosa_y_sebastian.jpeg"
                  alt="Rosa y Sebastián · Majadahonda especialistas"
                  width={500}
                  height={500}
                  className="w-full h-auto object-cover object-[center_20%]"
                  priority
                  style={{ aspectRatio: '1/1' }}
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
                  Especialistas en seguros para Majadahonda. Conocemos 
                  las necesidades específicas del barrio: urbanizaciones, 
                  familias, profesionales.
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

        {/* PROCESO MAJADAHONDA */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl">
            <h2 className="text-[36px] font-bold text-black leading-[1.22] text-center mb-12">
              Proceso local
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { num: "1", title: "WhatsApp", desc: 'Escribe "Majadahonda" y tu necesidad.' },
                { num: "2", title: "Recomendación", desc: "En 30 min te proponemos lo mejor para Majadahonda." },
                { num: "3", title: "Cita", desc: "Presencial si prefieres. Nos desplazamos a Majadahonda." },
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

        {/* CTA + MAPA MAJADAHONDA */}
        <section className="py-16 bg-black text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left: CTA */}
              <div className="text-center lg:text-left">
                <h2 className="text-[36px] sm:text-[48px] font-bold leading-[1.22] mb-4">
                  Protege tu hogar
                </h2>
                <p className="text-xl text-[#afafaf] mb-8">
                  Majadahonda. Un WhatsApp. 30 minutos.
                </p>
                <a 
                  href={wCotiza}
                  className="group inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full text-lg font-medium hover:bg-[#e2e2e2] transition-colors"
                >
                  WhatsApp Majadahonda
                  <span className="hidden group-hover:inline text-sm ml-2 text-[#4b4b4b]">
                    🏠 Café gratis
                  </span>
                </a>
                
                {/* Badges */}
                <div className="flex flex-wrap justify-center lg:justify-start gap-3 mt-8">
                  {[
                    "30min respuesta",
                    "Majadahonda vecinos",
                    "DGSFP verificado",
                  ].map((item, i) => (
                    <div key={i} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-sm">
                      <CheckCircle2 className="w-4 h-4" />
                      {item}
                    </div>
                  ))}
                </div>
                
                <p className="text-sm text-[#afafaf] mt-8">
                  DGSFP: C012479234434D
                </p>
              </div>
              
              {/* Right: Google Maps embed Majadahonda */}
              <div className="relative rounded-xl overflow-hidden shadow-[rgba(0,0,0,0.16)_0px_4px_20px_0px] h-[350px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3033.1234567890123!2d-3.8333!3d40.4736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd418f123456789%3A0xabcdef1234567890!2sMajadahonda%2C%20Madrid!5e0!3m2!1ses!2ses!4v1234567890123"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación Majadahonda"
                />
              </div>
            </div>
          </div>
        </section>

        {/* RESEÑAS GOOGLE */}
        <GoogleReviewsWidget title="Opiniones de clientes en Majadahonda" />

        {/* GARANTÍAS PREMIUM */}
        <GarantiasSection brandColor="#10b981" />

      </main>
      <Footer />
      <StickyWhatsApp />
    </>
  );
}
