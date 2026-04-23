import type { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { StickyWhatsApp } from "@/components/sticky-whatsapp";
import { buildWhatsAppHref } from "@/lib/products";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { Sparkles, CheckCircle2, MapPin, Building2, Stethoscope, Home, Dog, Car, Heart, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Seguros Boadilla del Monte | Valentín Protección Integral",
  description: "Seguros Boadilla del Monte Madrid. Salud, vida, hogar local. Asesoría WhatsApp 30min. Rosa y Sebastián.",
  keywords: ["seguros Boadilla del Monte","seguros Boadilla","mediador Boadilla del Monte"],
  alternates: { canonical: "https://valentinproteccionintegral.com/zonas/boadilla-del-monte" },
  openGraph: {
    title: "Seguros Boadilla del Monte | Mediador Local",
    description: "Tu mediador en Boadilla del Monte desde 2015. Salud, vida, hogar. WhatsApp 30min.",
    url: "https://valentinproteccionintegral.com/zonas/boadilla-del-monte",
    siteName: "Valentín Protección Integral",
    locale: "es_ES",
    type: "website",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Valentín Protección Integral - Seguros Boadilla del Monte",
  "telephone": "+34603448765",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Boadilla del Monte",
    "addressRegion": "Madrid",
    "addressCountry": "ES"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 40.4057,
    "longitude": -3.8783
  },
  "areaServed": ["Boadilla del Monte", "Majadahonda", "Pozuelo de Alarcón", "Las Rozas", "Madrid"],
  "description": "Seguros Boadilla del Monte. Mediador local desde 2015. Salud, vida, hogar, mascotas.",
};

export const dynamic = "force-static";

export default function BoadillaPage() {
  const wCotiza = buildWhatsAppHref("Hola, soy de Boadilla del Monte y necesito información sobre seguros.");

  return (
    <>
      <BreadcrumbSchema items={[{name:"Inicio",url:"/"},{name:"Zonas",url:"/zonas"},{name:"Boadilla del Monte",url:"/zonas/boadilla-del-monte"}]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(serviceSchema)}} />
      <Header />
      <main className="min-h-screen bg-white">
        
        {/* HERO UBER — Mapa local style */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left: Content */}
              <div>
                {/* Badge Uber chip style */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#efefef] text-black text-sm mb-6">
                  <MapPin className="w-4 h-4" />
                  Boadilla desde 2015 · +1.200 vecinos
                </div>
                
                {/* H1 Uber style — 52px bold */}
                <h1 className="text-[40px] sm:text-[48px] lg:text-[52px] font-bold text-black leading-[1.23] mb-4">
                  Seguros
                  <br />
                  <span className="text-[#4b4b4b]">Boadilla del Monte</span>
                </h1>
                
                {/* Subhead */}
                <p className="text-xl text-[#4b4b4b] leading-relaxed mb-8 max-w-md">
                  Tu mediador local en Boadilla.
                </p>
                
                {/* CTAs Uber — pill 999px */}
                <div className="flex flex-wrap gap-4 mb-8">
                  <a 
                    href={wCotiza}
                    className="group inline-flex items-center gap-2 bg-black hover:bg-[#333] text-white px-6 py-3 rounded-full text-base font-medium transition-colors"
                  >
                    <WhatsAppIcon className="w-5 h-5" />
                    💬 WhatsApp Boadilla
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
                    Oficina Boadilla
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
                    alt="Mapa Boadilla del Monte Madrid"
                    width={600}
                    height={450}
                    className="w-full h-auto object-cover"
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

        {/* LOCAL PROOF — Uber cards dark */}
        <section className="py-16 bg-black text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl">
            <p className="text-sm uppercase tracking-wider text-[#afafaf] mb-4">SOMOS DE BOADILLA</p>
            <h2 className="text-[36px] font-bold leading-[1.22] mb-12">
              Conocemos tu barrio
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: Building2, title: "Oficina física", desc: "Boadilla del Monte. Puedes venir cuando quieras." },
                { icon: Stethoscope, title: "Red local", desc: "Conocemos dentistas, hospitales y clínicas de la zona." },
                { icon: Heart, title: "Gestión presencial", desc: "Si prefieres cara a cara, estamos aquí." },
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

        {/* POPULARES BOADILLA — Uber grid */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl">
            <h2 className="text-[36px] font-bold text-black leading-[1.22] text-center mb-12">
              Populares en Boadilla
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: Stethoscope, title: "Salud privada", desc: "Hospital Majadahonda" },
                { icon: Home, title: "Vida", desc: "Hipotecas zonas residenciales" },
                { icon: Dog, title: "Mascotas", desc: "Parques Boadilla" },
                { icon: Car, title: "RC Coches", desc: "Protección vehículo" },
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
                  alt="Rosa Valentín · Boadilla desde 2015"
                  width={500}
                  height={600}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-black text-sm mb-6 shadow-sm">
                  <MapPin className="w-4 h-4" />
                  Boadilla desde 2015
                </div>
                <h2 className="text-[36px] font-bold text-black leading-[1.22] mb-4">
                  Rosa Valentín
                </h2>
                <p className="text-lg text-[#4b4b4b] mb-6">
                  Tu mediadora local. Conozco cada rincón de Boadilla 
                  porque aquí vivo y trabajo.
                </p>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3 text-[#4b4b4b]">
                    <MapPin className="w-5 h-5 text-black" />
                    <span>Boadilla del Monte, Madrid</span>
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

        {/* PROCESO LOCAL */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl">
            <h2 className="text-[36px] font-bold text-black leading-[1.22] text-center mb-12">
              Proceso local
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { num: "1", title: "WhatsApp", desc: 'Escribe "Boadilla" y tu necesidad.' },
                { num: "2", title: "Recomendación", desc: "En 30 min te proponemos lo mejor para tu zona." },
                { num: "3", title: "Cita", desc: "Presencial si prefieres. En nuestra oficina de Boadilla." },
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

        {/* CTA + MAPA */}
        <section className="py-16 bg-black text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left: CTA */}
              <div className="text-center lg:text-left">
                <h2 className="text-[36px] sm:text-[48px] font-bold leading-[1.22] mb-4">
                  Protege tu hogar
                </h2>
                <p className="text-xl text-[#afafaf] mb-8">
                  Boadilla del Monte. Un WhatsApp. 30 minutos.
                </p>
                <a 
                  href={wCotiza}
                  className="group inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full text-lg font-medium hover:bg-[#e2e2e2] transition-colors"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                  💬 WhatsApp Boadilla
                  <span className="hidden group-hover:inline text-sm ml-2 text-[#4b4b4b]">
                    🏠 Café gratis
                  </span>
                </a>
                
                {/* Badges */}
                <div className="flex flex-wrap justify-center lg:justify-start gap-3 mt-8">
                  {[
                    "30min respuesta",
                    "Oficina Boadilla",
                    "DGSFP verificado",
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
              
              {/* Right: Google Maps embed */}
              <div className="relative rounded-xl overflow-hidden shadow-[rgba(0,0,0,0.16)_0px_4px_20px_0px] h-[350px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3036.1234567890123!2d-3.8783!3d40.4057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd418e123456789%3A0xabcdef1234567890!2sBoadilla%20del%20Monte%2C%20Madrid!5e0!3m2!1ses!2ses!4v1234567890123"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación Boadilla del Monte"
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
