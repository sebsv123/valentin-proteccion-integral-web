import type { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { StickyWhatsApp } from "@/components/sticky-whatsapp";
import { buildWhatsAppHref } from "@/lib/products";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { Sparkles, CheckCircle2, MapPin, Building2, Stethoscope, Home, Users, Shield, Heart, Phone, Crown } from "lucide-react";

export const metadata: Metadata = {
  title: "Seguros Pozuelo de Alarcón | Premium | Valentín",
  description: "Seguros en Pozuelo de Alarcón. Servicio premium y personalizado. Salud ejecutivos, vida familiar, hogar alta gama. WhatsApp.",
  keywords: ["seguros Pozuelo de Alarcón","seguros Pozuelo Alarcón","seguros premium Pozuelo","mediador Pozuelo"],
  alternates: { canonical: "https://valentinproteccionintegral.com/zonas/pozuelo-de-alarcon" },
  openGraph: {
    title: "Seguros Pozuelo de Alarcón | Premium | Valentín",
    description: "Seguros en Pozuelo de Alarcón. Servicio premium y personalizado. Salud ejecutivos, vida familiar, hogar alta gama. WhatsApp.",
    url: "https://valentinproteccionintegral.com/zonas/pozuelo-de-alarcon",
    siteName: "Valentín Protección Integral",
    locale: "es_ES",
    type: "website",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Valentín Protección Integral - Seguros Pozuelo de Alarcón Premium",
  "telephone": "+34603448765",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Pozuelo de Alarcón",
    "addressRegion": "Madrid",
    "addressCountry": "ES"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 40.4353,
    "longitude": -3.8144
  },
  "areaServed": ["Pozuelo de Alarcón", "Majadahonda", "Boadilla del Monte", "Las Rozas", "Madrid"],
  "description": "Seguros premium Pozuelo de Alarcón. Salud privada ejecutivos, vida familiar, hogar alta gama.",
};

export const dynamic = "force-static";

export default function PozueloPage() {
  const wCotiza = buildWhatsAppHref("Hola, soy de Pozuelo de Alarcón y busco un seguro premium para mi familia.");

  return (
    <>
      <BreadcrumbSchema items={[{name:"Inicio",url:"/"},{name:"Zonas",url:"/zonas"},{name:"Pozuelo de Alarcón",url:"/zonas/pozuelo-de-alarcon"}]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(serviceSchema)}} />
      <Header />
      <main className="min-h-screen bg-white">
        
        {/* HERO UBER PREMIUM — Pozuelo */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left: Content */}
              <div>
                {/* Badge premium */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black text-white text-sm mb-6">
                  <Crown className="w-4 h-4" />
                  Pozuelo exclusivo · +1.200 familias
                </div>
                
                {/* H1 Uber style */}
                <h1 className="text-[40px] sm:text-[48px] lg:text-[52px] font-bold text-black leading-[1.23] mb-4">
                  Seguros en Pozuelo de Alarcón:
                  <br />
                  <span className="text-[#4b4b4b]">Servicio Premium Local</span>
                </h1>
                
                {/* Subhead premium */}
                <p className="text-xl text-[#4b4b4b] leading-relaxed mb-8 max-w-md">
                  Servicio premium para tu familia.
                </p>
                
                {/* CTAs Uber */}
                <div className="flex flex-wrap gap-4 mb-8">
                  <a 
                    href={wCotiza}
                    className="group inline-flex items-center gap-2 bg-black hover:bg-[#333] text-white px-6 py-3 rounded-full text-base font-medium transition-colors"
                  >
                    WhatsApp Privado
                    <span className="hidden group-hover:inline text-sm ml-1">
                      🏛️ Puerta a puerta gratis
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
                
                {/* Trust pills premium */}
                <div className="flex flex-wrap gap-3">
                  <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#efefef] text-black text-sm">
                    <CheckCircle2 className="w-4 h-4" />
                    Hospital Universitario 10min
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#efefef] text-black text-sm">
                    <Crown className="w-4 h-4" />
                    Servicio premium
                  </span>
                </div>
              </div>
              
              {/* Right: Hero image */}
              <div className="relative">
                <div className="relative rounded-xl overflow-hidden shadow-[rgba(0,0,0,0.12)_0px_4px_16px_0px]">
                  <Image
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop"
                    alt="Pozuelo de Alarcón luxury residencial"
                    width={600}
                    height={450}
                    className="w-full h-auto object-cover object-top"
                    priority
                  />
                </div>
                {/* Location pin overlay */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center shadow-lg">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* POZUELO ESPECIAL — Premium dark section */}
        <section className="py-16 bg-black text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl">
            <p className="text-sm uppercase tracking-wider text-[#afafaf] mb-4">EXPERTOS EN POZUELO</p>
            <h2 className="text-[36px] font-bold leading-[1.22] mb-12">
              Conocemos tus necesidades premium
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Building2, title: "Hospital Universitario", desc: "A 10 minutos. Las mejores especialidades médicas." },
                { icon: Users, title: "Colegios privados", desc: "Seguros escolares y accidentes deportivos cubiertos." },
                { icon: Home, title: "Urbanizaciones premium", desc: "Seguros de hogar a medida para viviendas de alta gama." },
                { icon: Stethoscope, title: "Salud ejecutivos", desc: "Cobertura premium con acceso a los mejores médicos." },
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

        {/* SERVICIOS POZUELO PREMIUM */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl">
            <h2 className="text-[36px] font-bold text-black leading-[1.22] text-center mb-12">
              Servicios exclusivos Pozuelo
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: Stethoscope, title: "Salud ejecutivos", desc: "Quirón + HM" },
                { icon: Users, title: "Vida familiar", desc: "Cobertura completa" },
                { icon: Home, title: "Hogar alta gama", desc: "Chalets y pisos premium" },
                { icon: Shield, title: "Jurídica", desc: "Contratos y reclamaciones" },
              ].map((item, i) => (
                <div key={i} className="rounded-xl p-5 shadow-[rgba(0,0,0,0.12)_0px_4px_16px_0px] hover:shadow-[rgba(0,0,0,0.16)_0px_4px_20px_0px] transition-shadow">
                  <div className="w-10 h-10 rounded-lg bg-black flex items-center justify-center mb-3">
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-base font-bold text-black mb-1">{item.title}</h3>
                  <p className="text-sm text-[#4b4b4b]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* EQUIPO PREMIUM POZUELO */}
        <section className="py-16 bg-[#efefef]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative rounded-xl overflow-hidden shadow-[rgba(0,0,0,0.12)_0px_4px_16px_0px]">
                <Image
                  src="/images/rosa_y_sebastian.jpeg"
                  alt="Rosa Valentín · Pozuelo especialistas"
                  width={500}
                  height={600}
                  className="w-full h-auto object-cover object-top"
                  priority
                />
              </div>
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black text-white text-sm mb-6">
                  <Crown className="w-4 h-4" />
                  Pozuelo especialistas
                </div>
                <h2 className="text-[36px] font-bold text-black leading-[1.22] mb-4">
                  Rosa Valentín
                </h2>
                <p className="text-lg text-[#4b4b4b] mb-6">
                  Especialistas en seguros premium para Pozuelo de Alarcón. 
                  Entendemos las necesidades específicas de las familias 
                  de esta zona: calidad, exclusividad y servicio puerta a puerta.
                </p>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3 text-[#4b4b4b]">
                    <MapPin className="w-5 h-5 text-black" />
                    <span>Pozuelo de Alarcón, Madrid</span>
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

        {/* PROCESO EXCLUSIVO */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl">
            <h2 className="text-[36px] font-bold text-black leading-[1.22] text-center mb-12">
              Proceso exclusivo
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { num: "1", title: "WhatsApp Privado", desc: "Cuéntanos tus preferencias premium." },
                { num: "2", title: "Asesor Personal", desc: "En 30 min te asignamos tu asesor dedicado." },
                { num: "3", title: "Puerta a Puerta", desc: "Servicio exclusivo en tu domicilio en Pozuelo." },
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

        {/* CTA + MAPA POZUELO */}
        <section className="py-16 bg-black text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left: CTA */}
              <div className="text-center lg:text-left">
                <h2 className="text-[36px] sm:text-[48px] font-bold leading-[1.22] mb-4">
                  Servicio premium Pozuelo
                </h2>
                <p className="text-xl text-[#afafaf] mb-8">
                  Un WhatsApp. 30 minutos. Asesoría puerta a puerta.
                </p>
                <a 
                  href={wCotiza}
                  className="group inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full text-lg font-medium hover:bg-[#e2e2e2] transition-colors"
                >
                  WhatsApp Privado
                  <span className="hidden group-hover:inline text-sm ml-2 text-[#4b4b4b]">
                    🏛️ Puerta a puerta gratis
                  </span>
                </a>
                
                {/* Badges */}
                <div className="flex flex-wrap justify-center lg:justify-start gap-3 mt-8">
                  {[
                    "30min respuesta",
                    "Asesor personal",
                    "Servicio puerta a puerta",
                  ].map((item, i) => (
                    <div key={i} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-sm">
                      <CheckCircle2 className="w-4 h-4" />
                      {item}
                    </div>
                  ))}
                </div>
                
                <p className="text-sm text-[#afafaf] mt-8">
                  NIF: 79234434D · DGSFP: C012479234434D
                </p>
              </div>
              
              {/* Right: Google Maps embed Pozuelo */}
              <div className="relative rounded-xl overflow-hidden shadow-[rgba(0,0,0,0.16)_0px_4px_20px_0px] h-[350px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3032.1234567890123!2d-3.8144!3d40.4353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd418e123456789%3A0xabcdef1234567890!2sPozuelo%20de%20Alarc%C3%B3n%2C%20Madrid!5e0!3m2!1ses!2ses!4v1234567890123"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación Pozuelo de Alarcón"
                />
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
      <StickyWhatsApp />
    </>
  );
}
