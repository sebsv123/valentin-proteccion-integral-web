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
import { Sparkles, CheckCircle2, MapPin, Building2, Stethoscope, Home, Briefcase, Car, Clock, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Asesor de Seguros en Madrid | Sin Copagos · Valentín Protección Integral",
  description: "Mediadores de seguros independientes en Madrid. Salud, vida, dental, mascotas y más. +10 años y +1.200 familias. Consulta gratis sin compromiso.",
  keywords: "seguros madrid, seguro medico madrid, seguros hogar madrid, seguro autonomos madrid centro",
  alternates: { canonical: "https://valentinproteccionintegral.com/zonas/madrid" },
  openGraph: {
    title: "Asesor de Seguros en Madrid | Sin Copagos · Valentín Protección Integral",
    description: "Mediadores de seguros independientes en Madrid. Salud, vida, dental, mascotas y más. +10 años y +1.200 familias. Consulta gratis sin compromiso.",
    url: "https://valentinproteccionintegral.com/zonas/madrid",
    siteName: "Valentín Protección Integral",
    locale: "es_ES",
    type: "website",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Valentín Protección Integral - Seguros Madrid Capital",
  "telephone": "+34603448765",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Madrid",
    "addressRegion": "Madrid",
    "addressCountry": "ES"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 40.4168,
    "longitude": -3.7038
  },
  "areaServed": ["Madrid Centro", "Chamberí", "Salamanca", "Malasaña", "Chueca", "Madrid Río", "Retiro", "Centro"],
  "description": "Seguros Madrid Capital. Salud privada, vida, hogar, autónomos. Respuesta inmediata 24h.",
};

export const dynamic = "force-static";

export default function MadridPage() {
  const wCotiza = buildWhatsAppHref("Hola, soy de Madrid centro y necesito información sobre seguros.");

  return (
    <>
      <BreadcrumbSchema items={[{name:"Inicio",url:"/"},{name:"Zonas",url:"/zonas"},{name:"Madrid",url:"/zonas/madrid"}]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(serviceSchema)}} />
      <Header />
      <main className="min-h-screen bg-white">
        
        {/* HERO MADRID CAPITAL */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left: Content */}
              <div>
                {/* Guarantee Badge */}
                <div className="mb-6">
                  <GuaranteeBadge type="zonas" />
                </div>
                
                {/* H1 */}
                <h1 className="text-[40px] sm:text-[48px] lg:text-[52px] font-bold text-black leading-[1.23] mb-4">
                  Seguros en Madrid Capital:
                  <br />
                  <span className="text-[#4b4b4b]">Mediador Independiente</span>
                </h1>
                
                {/* Subhead */}
                <p className="text-xl text-[#4b4b4b] leading-relaxed mb-8 max-w-md">
                  Cobertura completa. Respuesta inmediata.
                </p>
                
                {/* CTAs */}
                <div className="flex flex-wrap gap-4 mb-8">
                  <WhatsAppButton 
                    href={wCotiza}
                    location="madrid-hero"
                    className="group inline-flex items-center gap-2 bg-black hover:bg-[#333] text-white px-6 py-3 rounded-full text-base font-medium transition-colors"
                  >
                    WhatsApp Madrid
                    <span className="hidden group-hover:inline text-sm ml-1">
                      🏙️ 15min URGENTE
                    </span>
                  </WhatsAppButton>
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
                    Hospital 12 Octubre 15min
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#efefef] text-black text-sm">
                    <MapPin className="w-4 h-4" />
                    Toda la capital
                  </span>
                </div>
              </div>
              
              {/* Right: Hero image */}
              <div className="relative">
                <div className="relative rounded-xl overflow-hidden shadow-[rgba(0,0,0,0.12)_0px_4px_16px_0px]">
                  <Image
                    src="https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=800&h=600&fit=crop"
                    alt="Madrid skyline Gran Vía"
                    width={600}
                    height={450}
                    className="w-full h-auto object-cover object-top"
                    priority
                  />
                </div>
                {/* Location pin */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center shadow-lg">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MADRID ESPECÍFICO */}
        <section className="py-16 bg-black text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl">
            <p className="text-sm uppercase tracking-wider text-[#afafaf] mb-4">MADRID CENTRO</p>
            <h2 className="text-[36px] font-bold leading-[1.22] mb-12">
              Conocemos tu barrio
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Building2, title: "Hospital 12 de Octubre", desc: "A 15 minutos del centro. Acceso urgencias 24h." },
                { icon: Stethoscope, title: "Dentistas Chamberí/Salamanca", desc: "Las mejores clínicas dentales de Madrid centro." },
                { icon: Briefcase, title: "Autónomos Malasaña/Chueca", desc: "Especialistas en seguros para profesionales creativos." },
                { icon: Home, title: "Hogar centro histórico", desc: "Seguros adaptados a edificios históricos y modernos." },
              ].map((item, i) => (
                <div key={i} className="rounded-xl p-6 border border-[#333]">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mb-4">
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-[#afafaf] text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* MÁS CONTRATADOS MADRID */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl">
            <h2 className="text-[36px] font-bold text-black leading-[1.22] text-center mb-12">
              Más contratados en Madrid
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: Stethoscope, title: "Salud privada", desc: "Gregorio Marañón" },
                { icon: Home, title: "Vida hipoteca", desc: "Madrid Río" },
                { icon: Car, title: "RC coche", desc: "Madrid centro" },
                { icon: Briefcase, title: "Autónomos", desc: "Coworkings" },
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

        {/* EQUIPO MADRID */}
        <section className="py-16 bg-[#efefef]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative rounded-xl overflow-hidden shadow-[rgba(0,0,0,0.12)_0px_4px_16px_0px]">
                <Image
                  src="/images/rosa_y_sebastian.jpeg"
                  alt="Sebastián Valentín · Madrid completo"
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
                  Madrid completo
                </div>
                <h2 className="text-[36px] font-bold text-black leading-[1.22] mb-4">
                  Sebastián Valentín
                </h2>
                <p className="text-lg text-[#4b4b4b] mb-6">
                  Conocemos cada barrio de Madrid: desde Chamberí y Salamanca 
                  hasta Malasaña, Chueca y Madrid Río. Seguros a medida 
                  para cada zona de la capital.
                </p>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3 text-[#4b4b4b]">
                    <MapPin className="w-5 h-5 text-black" />
                    <span>Madrid, Comunidad de Madrid</span>
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

        {/* PROCESO 24H */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl">
            <h2 className="text-[36px] font-bold text-black leading-[1.22] text-center mb-12">
              Proceso 24h
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { num: "1", title: "WhatsApp", desc: "Dinos tu barrio de Madrid y tu necesidad." },
                { num: "2", title: "Hiperlocal", desc: "Cotización específica para tu zona en 30min." },
                { num: "3", title: "Digital", desc: "Alta inmediata. Cobertura desde hoy." },
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

        {/* CTA + MAPA MADRID */}
        <section className="py-16 bg-black text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left: CTA */}
              <div className="text-center lg:text-left">
                <h2 className="text-[36px] sm:text-[48px] font-bold leading-[1.22] mb-4">
                  Tu seguro en Madrid
                </h2>
                <p className="text-xl text-[#afafaf] mb-8">
                  Madrid centro. 24h. Respuesta inmediata.
                </p>
                <WhatsAppButton 
                  href={wCotiza}
                  location="madrid-cta-final"
                  className="group inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full text-lg font-medium hover:bg-[#e2e2e2] transition-colors"
                >
                  WhatsApp Madrid
                  <span className="hidden group-hover:inline text-sm ml-2 text-[#4b4b4b]">
                    🏙️ 15min URGENTE
                  </span>
                </WhatsAppButton>
                
                {/* Badges */}
                <div className="flex flex-wrap justify-center lg:justify-start gap-3 mt-8">
                  {[
                    "30min respuesta",
                    "Madrid 24h",
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
              
              {/* Right: Google Maps embed Madrid centro */}
              <div className="relative rounded-xl overflow-hidden shadow-[rgba(0,0,0,0.16)_0px_4px_20px_0px] h-[350px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.1234567890123!2d-3.7038!3d40.4168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4228f123456789%3A0xabcdef1234567890!2sMadrid%20Centro!5e0!3m2!1ses!2ses!4v1234567890123"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación Madrid Centro"
                />
              </div>
            </div>
          </div>
        </section>

        {/* RESEÑAS GOOGLE */}
        <GoogleReviewsWidget title="Opiniones de clientes en Madrid" />

        {/* GARANTÍAS PREMIUM */}
        <GarantiasSection brandColor="#10b981" />

      </main>
      <Footer />
      <StickyWhatsApp />
    </>
  );
}
