import type { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { StickyWhatsApp } from "@/components/sticky-whatsapp";
import { buildWhatsAppHref } from "@/lib/products";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { Zap, Shield, Heart, Briefcase, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Seguros Jóvenes Profesionales Madrid | Valentín Protección Integral",
  description: "Seguros para jóvenes profesionales en Madrid. Salud, dental, vida. Contrata rápido, gestión digital. Rosa y Sebastián.",
  keywords: ["seguros jovenes profesionales Madrid","seguro salud joven Madrid","seguro dental joven Madrid"],
  alternates: { canonical: "https://valentinproteccionintegral.com/para/jovenes-profesionales" },
  openGraph: {
    title: "Seguros Jóvenes Profesionales Madrid",
    description: "Joven. Activo. Protegido. Seguros rápidos, gestión digital.",
    url: "https://valentinproteccionintegral.com/para/jovenes-profesionales",
    siteName: "Valentín Protección Integral",
    locale: "es_ES",
    type: "website",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Seguros para Jóvenes Profesionales Madrid",
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
  "description": "Seguros para jóvenes profesionales en Madrid. Salud, dental, vida. Rápido y digital.",
};

export const dynamic = "force-static";

export default function JovenesPage() {
  const wCotiza = buildWhatsAppHref("Hola, soy joven profesional y quiero información sobre seguros de salud/dental.");

  return (
    <>
      <BreadcrumbSchema items={[{name:"Inicio",url:"/"},{name:"Jóvenes Profesionales",url:"/para/jovenes-profesionales"}]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(serviceSchema)}} />
      <Header />
      <main className="min-h-screen bg-black text-white">
        
        {/* HERO VERCEL — Dark tech minimal */}
        <section className="min-h-screen flex items-center bg-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-20">
            <div className="max-w-4xl">
              <span className="text-[#888888] text-sm mb-6 block">Para jóvenes profesionales</span>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-8">
                Joven.
                <br />
                Activo.
                <br />
                <span className="text-white">Protegido.</span>
              </h1>
              <p className="text-xl text-[#888888] mb-10 max-w-xl">
                Seguros rápidos para profesionales de Madrid. 
                Contrata por WhatsApp. Gestión 100% digital.
              </p>
              <a 
                href={wCotiza}
                className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-medium text-lg hover:bg-[#EEEEEE] transition-colors"
              >
                <WhatsAppIcon className="w-5 h-5" />
                Cotizar ahora
              </a>
            </div>
          </div>
        </section>

        {/* PACKS */}
        <section className="py-24 bg-[#0A0A0A]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl">
            <h2 className="text-2xl font-bold mb-12 text-center">Packs diseñados para ti</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: Heart, title: "Salud", desc: "Especialistas sin esperas", price: "desde 21€/mes" },
                { icon: Zap, title: "Salud + Dental", desc: "Pack completo joven", price: "condiciones especiales" },
                { icon: Shield, title: "Salud + Vida", desc: "Protección integral", price: "desde 25€/mes" },
              ].map((item, i) => (
                <div key={i} className="p-8 rounded-2xl bg-[#111111] border border-[#333333] hover:border-white/50 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-6">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-[#888888] mb-4">{item.desc}</p>
                  <p className="text-white font-medium">{item.price}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESO */}
        <section className="py-24 bg-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-4xl">
            <h2 className="text-2xl font-bold mb-12 text-center">Así de rápido</h2>
            <div className="space-y-6">
              {[
                { num: "01", title: "Nos cuentas", desc: "Por WhatsApp qué necesitas" },
                { num: "02", title: "Te proponemos", desc: "Opciones claras, precios reales" },
                { num: "03", title: "Ya estás cubierto", desc: "Alta inmediata, póliza digital" },
              ].map((step, i) => (
                <div key={i} className="flex items-center gap-6 p-6 rounded-2xl bg-[#0A0A0A]">
                  <span className="text-3xl font-bold text-[#333333]">{step.num}</span>
                  <div>
                    <h3 className="font-bold text-lg">{step.title}</h3>
                    <p className="text-[#888888]">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FOTO + CTA */}
        <section className="py-24 bg-[#0A0A0A]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <Image 
                src="/images/rosa_y_sebastian.jpeg"
                alt="Rosa y Sebastián - Asesores jóvenes"
                width={500}
                height={400}
                className="rounded-2xl"
              />
              <div>
                <h2 className="text-3xl font-bold mb-6">Rosa y Sebastián</h2>
                <p className="text-[#888888] mb-6">
                  Tus asesores personales. Misma edad, mismo lenguaje. 
                  Responden en 30 minutos, gestión digital completa.
                </p>
                <div className="flex flex-wrap gap-3">
                  {["Sin letra pequeña", "Sin permanencia", "Revisión anual gratis"].map((item, i) => (
                    <span key={i} className="flex items-center gap-2 text-sm text-[#888888]">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="py-24 bg-white text-black">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-4">Protege tu futuro hoy</h2>
            <p className="text-[#666666] mb-8">Cotización en 30 minutos. Sin compromiso.</p>
            <a 
              href={wCotiza}
              className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 rounded-full font-medium"
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
