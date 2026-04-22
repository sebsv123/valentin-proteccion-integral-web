import type { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { StickyWhatsApp } from "@/components/sticky-whatsapp";
import { buildWhatsAppHref } from "@/lib/products";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { Briefcase, TrendingUp, Shield, Clock, Zap, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Seguros para Autónomos Madrid | Protección Profesional | Valentín Protección Integral",
  description: "Seguros para autónomos en Madrid. Deducción IRPF, salud, accidentes, RC profesional. Tu negocio no para, tu protección tampoco.",
  keywords: ["seguros autonomos Madrid","seguro autonomos deducción IRPF","protección profesional Madrid"],
  alternates: { canonical: "https://valentinproteccionintegral.com/para/autonomos" },
  openGraph: {
    title: "Seguros para Autónomos Madrid | Protección Profesional",
    description: "Tu negocio no para. Tu protección tampoco. Deducción IRPF hasta 500€/año.",
    url: "https://valentinproteccionintegral.com/para/autonomos",
    siteName: "Valentín Protección Integral",
    locale: "es_ES",
    type: "website",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Seguros para Autónomos Madrid",
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
  "description": "Seguros para autónomos en Madrid. Deducción IRPF, salud, accidentes, RC profesional.",
};

export const dynamic = "force-static";

export default function AutonomosPerfilPage() {
  const wCotiza = buildWhatsAppHref("Hola, soy autónomo y necesito proteger mi negocio. ¿Qué opciones tengo?");

  return (
    <>
      <BreadcrumbSchema items={[{name:"Inicio",url:"/"},{name:"Para Autónomos",url:"/para/autonomos"}]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(serviceSchema)}} />
      <Header />
      <main className="min-h-screen bg-[#1C1C1C] text-white">
        
        {/* HERO LINEAR — Dark profesional */}
        <section className="min-h-screen flex items-center bg-[#1C1C1C] relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#3ECF8E]/10 via-transparent to-transparent" />
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-20 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[rgba(62,207,142,0.3)] bg-[rgba(62,207,142,0.08)] text-[#3ECF8E] text-sm font-medium mb-6">
                  <Briefcase className="w-4 h-4" />
                  Para autónomos
                </span>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight mb-6">
                  Tu negocio no para.
                  <br />
                  <span className="text-[#3ECF8E]">Tu protección tampoco.</span>
                </h1>
                <p className="text-lg text-[#9B9B9B] mb-8 max-w-lg leading-relaxed">
                  Seguros diseñados para profesionales independientes. 
                  Deducción IRPF hasta 500€/año. Salud, accidentes, RC profesional.
                </p>
                <a 
                  href={wCotiza}
                  className="inline-flex items-center gap-2 bg-[#3ECF8E] hover:bg-[#2EBF7E] text-[#1C1C1C] font-semibold px-6 py-3 rounded-md font-medium transition-colors"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                  Proteger mi negocio
                </a>
              </div>
              
              <div className="hidden lg:block">
                <Image
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Autónomo profesional laptop café Madrid"
                  width={500}
                  height={600}
                  className="rounded-lg border border-[rgba(62,207,142,0.15)]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* COBERTURAS */}
        <section className="py-24 bg-[#1C1C1C] border-t border-[rgba(62,207,142,0.15)]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl">
            <h2 className="text-2xl font-semibold mb-12 text-center">Coberturas esenciales</h2>
            
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { icon: TrendingUp, title: "Salud deducible", desc: "Hasta 500€/año IRPF. Especialistas sin esperas." },
                { icon: Zap, title: "Accidentes", desc: "Incapacidad temporal cubierta. Desde 3€/mes." },
                { icon: Shield, title: "RC Profesional", desc: "Errores y omissiones cubiertos. Protege tu patrimonio." },
              ].map((item, i) => (
                <div key={i} className="p-6 rounded-lg bg-[#2A2A2A] border border-[rgba(62,207,142,0.15)] hover:border-[#5E6AD2]/50 transition-colors">
                  <div className="w-10 h-10 rounded bg-[#3ECF8E]/20 flex items-center justify-center mb-4">
                    <item.icon className="w-5 h-5 text-[#3ECF8E]" />
                  </div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-[#9B9B9B]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* VENTAJAS */}
        <section className="py-24 bg-[#2A2A2A]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl font-semibold mb-6">Ventajas para autónomos</h2>
                <div className="space-y-4">
                  {[
                    "Deducción 100% en IRPF como gasto de actividad",
                    "Gestor personal, siempre el mismo",
                    "Revisión anual gratuita de coberturas",
                    "Sin permanencia, cancela cuando quieras",
                    "Respuesta en 30 minutos garantizada",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#3ECF8E]" />
                      <span className="text-[#9B9B9B]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <Image 
                src="/images/rosa_y_sebastian.jpeg"
                alt="Rosa y Sebastián - Asesores autónomos"
                width={500}
                height={400}
                className="rounded-lg border border-[rgba(62,207,142,0.15)]"
              />
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-[#5E6AD2]">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-semibold text-white mb-4">
              Protege tu negocio hoy
            </h2>
            <p className="text-[#1C1C1C]/80 mb-8">
              Cotización personalizada en 30 minutos. Sin compromiso.
            </p>
            <a 
              href={wCotiza}
              className="inline-flex items-center gap-2 bg-white text-[#3ECF8E] px-8 py-3 rounded-md font-medium"
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
