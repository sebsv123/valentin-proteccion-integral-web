import type { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { StickyWhatsApp } from "@/components/sticky-whatsapp";
import { buildWhatsAppHref } from "@/lib/products";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { Sparkles, CheckCircle2, Clock, Shield, Heart, Stethoscope, Syringe, Pill, Home, PawPrint } from "lucide-react";

export const metadata: Metadata = {
  title: "Seguro Mascotas Madrid | Valentín Protección Integral",
  description: "Seguro veterinario perros gatos Madrid. Accidentes, cirugías, hospital. Cotiza WhatsApp 30min. Rosa y Sebastián.",
  keywords: ["seguro mascotas Madrid","seguro perro gato Madrid","veterinario seguro Madrid"],
  alternates: { canonical: "https://valentinproteccionintegral.com/seguros/mascotas" },
  openGraph: {
    title: "Seguro Mascotas Madrid | Veterinario y Cirugías",
    description: "Hospitalización, cirugía 90% cubierta, medicación crónica. WhatsApp 30min.",
    url: "https://valentinproteccionintegral.com/seguros/mascotas",
    siteName: "Valentín Protección Integral",
    locale: "es_ES",
    type: "website",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "InsuranceAgency",
  "name": "Seguro Mascotas Madrid - Valentín Protección Integral",
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
  "description": "Seguro veterinario perros gatos Madrid. Accidentes, cirugías, hospital. Cotiza WhatsApp 30min.",
};

export const dynamic = "force-static";

export default function MascotasPage() {
  const wCotiza = buildWhatsAppHref("Hola, quiero información sobre seguro para mi mascota en Madrid.");

  return (
    <>
      <BreadcrumbSchema items={[{name:"Inicio",url:"/"},{name:"Seguros",url:"/seguros"},{name:"Mascotas",url:"/seguros/mascotas"}]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(serviceSchema)}} />
      <Header />
      <main className="min-h-screen bg-white">
        
        {/* HERO AIRBNB — Rosa coral, fotografía cálida, rounded */}
        <section className="relative bg-gradient-to-b from-[#FFF8F6] to-white pt-24 pb-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left: Content */}
              <div>
                {/* Badge Airbnb */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#DDDDDD] text-[#717171] text-sm mb-6 shadow-sm">
                  <Sparkles className="w-4 h-4 text-[#FF5A5F]" />
                  +1.200 mascotas felices · DGSFP
                </div>
                
                {/* H1 Airbnb style */}
                <h1 className="text-[40px] sm:text-[48px] lg:text-[56px] font-semibold text-[#222222] leading-[1.10] tracking-[-0.02em] mb-4">
                  Seguro para tu
                  <br />
                  <span className="text-[#FF5A5F]">Mascota Madrid</span>
                </h1>
                
                {/* Subhead */}
                <p className="text-xl text-[#717171] leading-relaxed mb-8 max-w-md">
                  Veterinario, accidentes, cirugías.
                  <br />
                  Protege a tu compañero de 4 patas.
                </p>
                
                {/* CTAs Airbnb — rounded, coral */}
                <div className="flex flex-wrap gap-4 mb-8">
                  <a 
                    href={wCotiza}
                    className="group inline-flex items-center gap-2 bg-[#FF5A5F] hover:bg-[#E14F53] text-white px-6 py-4 rounded-xl text-lg font-medium transition-all hover:scale-105 shadow-md"
                  >
                    <WhatsAppIcon className="w-5 h-5" />
                    💬 Cotizar WhatsApp
                    <span className="hidden group-hover:inline text-sm ml-1">
                      🐶 10% 1er año
                    </span>
                  </a>
                  <a 
                    href="#coberturas"
                    className="inline-flex items-center gap-2 bg-white text-[#222222] px-6 py-4 rounded-xl text-lg font-medium border border-[#DDDDDD] hover:border-[#FF5A5F] transition-all"
                  >
                    Ver coberturas
                  </a>
                </div>
                
                {/* Trust pills */}
                <div className="flex flex-wrap gap-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#FFF8F6] text-[#222222] text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#00A699]" />
                    30 min respuesta
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#FFF8F6] text-[#222222] text-sm">
                    <Shield className="w-4 h-4 text-[#00A699]" />
                    Sin permanencia
                  </span>
                </div>
              </div>
              
              {/* Right: Hero image Airbnb style */}
              <div className="relative">
                <div className="relative rounded-3xl overflow-hidden shadow-lg">
                  <Image
                    src="https://images.pexels.com/photos/46024/pexels-photo-46024.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Perro gato veterinario Madrid feliz"
                    width={600}
                    height={500}
                    className="w-full h-auto object-cover"
                    priority
                  />
                </div>
                {/* Floating card */}
                <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-lg border border-[#EBEBEB]">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#FF5A5F]/10 flex items-center justify-center">
                      <PawPrint className="w-5 h-5 text-[#FF5A5F]" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-[#222222]">Protección total</p>
                      <p className="text-xs text-[#717171]">Perros y gatos</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ¿POR QUÉ? — Airbnb cards hogar */}
        <section className="py-20 bg-[#F7F7F7]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl">
            <h2 className="text-[32px] sm:text-[40px] font-semibold text-[#222222] leading-[1.15] text-center mb-12">
              ¿Por qué un seguro para tu mascota?
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: Stethoscope, title: "Accidente repentino", desc: "Urgencias veterinarias cubiertas las 24h. Sin preocuparte por el coste." },
                { icon: Syringe, title: "Cirugía inesperada", desc: "Hasta 3.000€ en cirugías. Tu mascota merece lo mejor." },
                { icon: Heart, title: "Veterinario rutinario", desc: "Chequeos anuales incluidos. Prevenir es cuidar." },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-[#EBEBEB] hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-xl bg-[#FF5A5F]/10 flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-[#FF5A5F]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#222222] mb-2">{item.title}</h3>
                  <p className="text-base text-[#717171] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* COBERTURAS — Airbnb grid */}
        <section id="coberturas" className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl">
            <h2 className="text-[32px] sm:text-[40px] font-semibold text-[#222222] leading-[1.15] text-center mb-12">
              Todo lo que incluye
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { icon: Home, title: "Hospitalización", desc: "Completa" },
                { icon: Syringe, title: "Cirugía", desc: "90% cubierta" },
                { icon: Pill, title: "Medicación", desc: "Crónica incluida" },
                { icon: Shield, title: "Robo", desc: "600€ cubiertos" },
                { icon: Stethoscope, title: "Responsabilidad", desc: "Civil incluida" },
                { icon: PawPrint, title: "Eutanasia", desc: "Cubierta" },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-xl p-5 border border-[#EBEBEB] hover:border-[#FF5A5F]/30 transition-all">
                  <div className="w-10 h-10 rounded-lg bg-[#FFF8F6] flex items-center justify-center mb-3">
                    <item.icon className="w-5 h-5 text-[#FF5A5F]" />
                  </div>
                  <h3 className="text-base font-semibold text-[#222222] mb-1">{item.title}</h3>
                  <p className="text-sm text-[#717171]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* EQUIPO — Airbnb shadows suaves */}
        <section className="py-20 bg-[#F7F7F7]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <Image
                  src="/images/rosa_y_sebastian.jpeg"
                  alt="Rosa Valentín · Amor por los animales"
                  width={500}
                  height={600}
                  className="w-full rounded-3xl object-cover shadow-md"
                  priority
                />
              </div>
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFF8F6] text-[#FF5A5F] text-sm mb-6">
                  <Heart className="w-4 h-4" />
                  Amor por los animales
                </div>
                <h2 className="text-[32px] sm:text-[40px] font-semibold text-[#222222] leading-[1.15] mb-4">
                  Rosa Valentín
                </h2>
                <p className="text-lg text-[#717171] leading-relaxed mb-6">
                  +10 años protegiendo mascotas en Madrid.
                  Entiendo lo que significa tu compañero porque 
                  también tengo los míos.
                </p>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00A699]/10 text-[#00887A] text-sm">
                  <CheckCircle2 className="w-4 h-4" />
                  DGSFP: C012479234434D
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROCESO FÁCIL */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl">
            <h2 className="text-[32px] sm:text-[40px] font-semibold text-[#222222] leading-[1.15] text-center mb-12">
              Proceso fácil
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { num: "1", title: "WhatsApp", desc: "Foto + raza de tu mascota." },
                { num: "2", title: "Cotizamos", desc: "En 30 min cotización personalizada." },
                { num: "3", title: "Tarjeta", desc: "Veterinaria digital inmediata." },
              ].map((step, i) => (
                <div key={i} className="text-center">
                  <div className="w-14 h-14 rounded-full bg-[#FF5A5F] text-white flex items-center justify-center text-xl font-semibold mx-auto mb-4 shadow-md">
                    {step.num}
                  </div>
                  <h3 className="text-xl font-semibold text-[#222222] mb-2">{step.title}</h3>
                  <p className="text-base text-[#717171]">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA + TRUST — Airbnb final */}
        <section className="py-24 bg-gradient-to-b from-[#FFF8F6] to-[#FFE8E5]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-4xl text-center">
            <h2 className="text-[40px] sm:text-[48px] font-semibold text-[#222222] leading-[1.10] mb-4">
              Protege a tu mejor amigo
            </h2>
            <p className="text-xl text-[#717171] mb-10">
              Un WhatsApp. 30 minutos. Sin compromiso.
            </p>
            
            <a 
              href={wCotiza}
              className="group inline-flex items-center gap-2 bg-[#FF5A5F] hover:bg-[#E14F53] text-white px-8 py-5 rounded-xl text-xl font-medium transition-all hover:scale-105 shadow-lg"
            >
              <WhatsAppIcon className="w-6 h-6" />
              💬 Cotizar por WhatsApp
              <span className="hidden group-hover:inline text-base ml-2">
                🐶 10% 1er año
              </span>
            </a>
            
            {/* Trust badges */}
            <div className="flex flex-wrap justify-center gap-3 mt-10">
              {[
                "30min respuesta",
                "Sin permanencia",
                "DGSFP verificado",
              ].map((item, i) => (
                <div key={i} className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white text-[#222222] text-sm border border-[#DDDDDD]">
                  <CheckCircle2 className="w-4 h-4 text-[#00A699]" />
                  {item}
                </div>
              ))}
            </div>
            
            <p className="text-sm text-[#717171] mt-8">
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
