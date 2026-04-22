import type { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { StickyWhatsApp } from "@/components/sticky-whatsapp";
import { buildWhatsAppHref } from "@/lib/products";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { Heart, Shield, Plane, Stethoscope, FileCheck, AlertTriangle, CheckCircle2, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Seguro Mascotas Madrid | RC Obligatoria Ley 2023 | Valentín Protección Integral",
  description: "Seguro de mascotas desde 5€/mes. RC obligatoria Ley 17/2023. Veterinario, vacunas, pasaporte europeo. Rosa y Sebastián.",
  keywords: ["seguro mascotas Madrid","seguro perro Madrid","RC obligatoria perro 2023","pasaporte europeo mascotas"],
  alternates: { canonical: "https://valentinproteccionintegral.com/seguros/mascotas" },
  openGraph: {
    title: "Seguro Mascotas Madrid | RC Obligatoria Ley 2023",
    description: "Desde 5€/mes. RC obligatoria, veterinario, pasaporte europeo.",
    url: "https://valentinproteccionintegral.com/seguros/mascotas",
    siteName: "Valentín Protección Integral",
    locale: "es_ES",
    type: "website",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Seguro de Mascotas Madrid",
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
  "description": "Seguro de mascotas con RC obligatoria Ley 17/2023. Desde 5€/mes. Veterinario, vacunas, pasaporte europeo.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Es obligatorio el seguro de perro en Madrid?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. La Ley de Bienestar Animal 17/2023 obliga a todos los propietarios de perros en España, incluido Madrid, a tener un seguro de responsabilidad civil. Las opciones que gestionamos empiezan desde 5€/mes para RC básica." }
    }
  ]
};

export const dynamic = "force-static";

export default function MascotasPage() {
  const wCotiza = buildWhatsAppHref("Hola, quiero información sobre seguro para mi perro/gato. ¿Me podéis ayudar con la RC obligatoria?");

  return (
    <>
      <BreadcrumbSchema items={[{name:"Inicio",url:"/"},{name:"Seguros",url:"/seguros"},{name:"Mascotas",url:"/seguros/mascotas"}]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(serviceSchema)}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(faqSchema)}} />
      <Header />
      <main className="min-h-screen bg-white">
        
        {/* HERO AIRBNB — Foto mascota emocional */}
        <section className="relative min-h-[80vh] flex items-center">
          <div className="absolute inset-0">
            <Image
              src="https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg?auto=compress&cs=tinysrgb&w=1920"
              alt="Golden retriever feliz con dueño parque Madrid"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
          </div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10 py-20">
            <div className="max-w-2xl">
              <span className="inline-block bg-[#FF385C] text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                RC Obligatoria Ley 2023 — Desde 5€/mes
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Tu compañero merece
                <br />
                protección total
              </h1>
              <p className="text-xl text-white/90 mb-8 max-w-lg">
                Seguro de mascotas que cubre RC obligatoria, veterinario ilimitado, 
                vacunas y pasaporte europeo.
              </p>
              <a 
                href={wCotiza}
                className="inline-flex items-center gap-3 bg-[#FF385C] hover:bg-[#D9324E] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all"
              >
                <WhatsAppIcon className="w-5 h-5" />
                Proteger a mi mascota
              </a>
            </div>
          </div>
        </section>

        {/* CARACTERÍSTICAS */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#222222] text-center mb-12">
              Todo lo que incluye
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Shield, title: "RC Obligatoria", desc: "Cubre daños a terceros. Ley 17/2023." },
                { icon: Stethoscope, title: "Veterinario", desc: "Consultas, urgencias, cirugías cubiertas." },
                { icon: Heart, title: "Vacunas", desc: "Rabia, desparasitación, chip incluidos." },
                { icon: Plane, title: "Pasaporte UE", desc: "Documentación para viajar por Europa." },
              ].map((item, i) => (
                <div key={i} className="p-6 rounded-2xl border border-[#DDDDDD] hover:border-[#FF385C] transition-colors">
                  <div className="w-12 h-12 rounded-full bg-[#FFF8F9] flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-[#FF385C]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#222222] mb-2">{item.title}</h3>
                  <p className="text-[#717171] text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* INFO OBLIGATORIA */}
        <section className="py-20 bg-[#FFF8F9]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <AlertTriangle className="w-6 h-6 text-[#FF385C]" />
                <h2 className="text-2xl font-bold text-[#222222]">RC obligatoria desde 2023</h2>
              </div>
              <p className="text-[#717171] mb-6 leading-relaxed">
                La Ley 17/2023 de Bienestar Animal exige a todos los propietarios de perros en España 
                (incluido Madrid) tener un seguro de responsabilidad civil. La multa por no cumplir 
                puede llegar a los 10.000€.
              </p>
              <div className="bg-white rounded-2xl p-6 border border-[#DDDDDD]">
                <p className="text-[#222222] font-medium">
                  Las pólizas que gestionamos incluyen RC desde 5€/mes. 
                  Si quieres cobertura veterinaria completa, te calculamos el precio para tu mascota en 30 minutos.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FOTO EQUIPO */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <Image 
                src="/images/rosa_y_sebastian_mascotas.png"
                alt="Rosa y Sebastián - Amantes de las mascotas"
                width={600}
                height={500}
                className="rounded-3xl object-cover shadow-xl"
              />
              <div>
                <h2 className="text-3xl font-bold text-[#222222] mb-6">
                  Nosotros también tenemos mascotas
                </h2>
                <p className="text-lg text-[#717171] mb-6 leading-relaxed">
                  Rosa y Sebastián entienden lo que significa tu compañero. Por eso buscan 
                  las mejores coberturas: veterinario de confianza, sin letra pequeña, 
                  y gestión ágil cuando más lo necesitas.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="flex items-center gap-2 bg-[#FFF8F9] px-4 py-2 rounded-full text-sm font-medium text-[#FF385C]">
                    <CheckCircle2 className="w-4 h-4" />
                    +1.200 mascotas protegidas
                  </span>
                  <span className="flex items-center gap-2 bg-[#FFF8F9] px-4 py-2 rounded-full text-sm font-medium text-[#FF385C]">
                    <Star className="w-4 h-4" />
                    Veterinarios de confianza
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="py-20 bg-[#222222]">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Protege a tu compañero hoy
            </h2>
            <p className="text-xl text-white/70 mb-8">
              RC obligatoria desde 5€/mes. Veterinario completo desde 20€.
            </p>
            <a 
              href={wCotiza}
              className="inline-flex items-center gap-3 bg-[#FF385C] hover:bg-[#D9324E] text-white px-10 py-4 rounded-xl font-semibold text-lg transition-all"
            >
              <WhatsAppIcon className="w-5 h-5" />
              WhatsApp: 603 44 87 65
            </a>
          </div>
        </section>

      </main>
      <Footer />
      <StickyWhatsApp />
    </>
  );
}
