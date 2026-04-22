import type { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { StickyWhatsApp } from "@/components/sticky-whatsapp";
import { buildWhatsAppHref } from "@/lib/products";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { Users, Heart, Shield, Home, Baby, CheckSquare, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Seguros para Familias Madrid | Protección Completa | Valentín Protección Integral",
  description: "Seguros para familias en Madrid: salud, vida, hogar, mascotas. Protección completa sin complicaciones. Rosa y Sebastián.",
  keywords: ["seguros familias Madrid","seguro salud familia Madrid","protección familiar Madrid","seguro hogar familia Madrid"],
  alternates: { canonical: "https://valentinproteccionintegral.com/para/familias" },
  openGraph: {
    title: "Seguros para Familias Madrid | Protección Completa",
    description: "Tu familia, protegida sin complicaciones. Salud, vida, hogar, mascotas.",
    url: "https://valentinproteccionintegral.com/para/familias",
    siteName: "Valentín Protección Integral",
    locale: "es_ES",
    type: "website",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Seguros para Familias Madrid",
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
  "description": "Seguros para familias en Madrid. Protección completa sin complicaciones.",
};

export const dynamic = "force-static";

export default function FamiliasPage() {
  const wCotiza = buildWhatsAppHref("Hola, quiero proteger a mi familia con seguros. Somos [X] personas y necesitamos [salud/vida/hogar].");

  return (
    <>
      <BreadcrumbSchema items={[{name:"Inicio",url:"/"},{name:"Para Familias",url:"/para/familias"}]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(serviceSchema)}} />
      <Header />
      <main className="min-h-screen bg-white">
        
        {/* HERO NOTION — Clean, bloques claros */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl">
            <div className="text-center mb-16">
              <span className="inline-block bg-[#2383E2]/10 text-[#2383E2] px-4 py-1.5 rounded-md text-sm font-medium mb-6">
                Para familias
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#37352F] tracking-tight mb-6">
                Tu familia, protegida
                <br />
                sin complicaciones
              </h1>
              <p className="text-xl text-[#6B6B6B] max-w-2xl mx-auto leading-relaxed">
                Salud, vida, hogar, mascotas. Todo lo que tu familia necesita, 
                en una sola gestión con Rosa y Sebastián.
              </p>
            </div>

            {/* Bloques Notion style */}
            <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto mb-12">
              <div className="flex items-start gap-4 p-5 bg-[#F7F6F3] rounded-lg">
                <div className="w-10 h-10 rounded bg-[#2383E2]/10 flex items-center justify-center flex-shrink-0">
                  <Users className="w-5 h-5 text-[#2383E2]" />
                </div>
                <div>
                  <h3 className="font-medium text-[#37352F] mb-1">Salud familiar</h3>
                  <p className="text-sm text-[#6B6B6B]">Pediatría sin esperas para los peques</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-5 bg-[#F7F6F3] rounded-lg">
                <div className="w-10 h-10 rounded bg-[#2383E2]/10 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-5 h-5 text-[#2383E2]" />
                </div>
                <div>
                  <h3 className="font-medium text-[#37352F] mb-1">Vida + hipoteca</h3>
                  <p className="text-sm text-[#6B6B6B]">Si algo pasa, la familia está cubierta</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-5 bg-[#F7F6F3] rounded-lg">
                <div className="w-10 h-10 rounded bg-[#2383E2]/10 flex items-center justify-center flex-shrink-0">
                  <Home className="w-5 h-5 text-[#2383E2]" />
                </div>
                <div>
                  <h3 className="font-medium text-[#37352F] mb-1">Hogar protegido</h3>
                  <p className="text-sm text-[#6B6B6B]">Daños, robo, responsabilidad civil</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-5 bg-[#F7F6F3] rounded-lg">
                <div className="w-10 h-10 rounded bg-[#2383E2]/10 flex items-center justify-center flex-shrink-0">
                  <Heart className="w-5 h-5 text-[#2383E2]" />
                </div>
                <div>
                  <h3 className="font-medium text-[#37352F] mb-1">Mascotas</h3>
                  <p className="text-sm text-[#6B6B6B]">RC obligatoria y veterinario</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <a 
                href={wCotiza}
                className="inline-flex items-center gap-2 bg-[#2383E2] hover:bg-[#1A6CB3] text-white px-6 py-3 rounded-md font-medium transition-colors"
              >
                <WhatsAppIcon className="w-5 h-5" />
                Proteger a mi familia
              </a>
            </div>
          </div>
        </section>

        {/* PROTECCIÓN COMPLETA */}
        <section className="py-20 bg-[#F7F6F3]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl">
            <h2 className="text-3xl font-semibold text-[#37352F] mb-12 text-center">
              Protección completa para tu familia
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: Baby, title: "Pediatría sin esperas", desc: "Acceso directo a pediatras en Madrid. Sin listas de espera de meses." },
                { icon: CheckSquare, title: "Vacunas incluidas", desc: "Calendario vacunal completo para niños y adultos." },
                { icon: Heart, title: "Protección 360°", desc: "Salud + vida + hogar + mascotas. Todo en uno." },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-lg p-6 border border-[#E3E2E0]">
                  <div className="w-10 h-10 rounded bg-[#2383E2]/10 flex items-center justify-center mb-4">
                    <item.icon className="w-5 h-5 text-[#2383E2]" />
                  </div>
                  <h3 className="font-semibold text-[#37352F] mb-2">{item.title}</h3>
                  <p className="text-sm text-[#6B6B6B]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FOTO EQUIPO */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <Image 
                src="https://images.pexels.com/photos/1128318/pexels-photo-1128318.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Familia feliz española Madrid hogar"
                width={600}
                height={400}
                className="rounded-lg object-cover"
              />
              <div>
                <h2 className="text-3xl font-semibold text-[#37352F] mb-6">
                  Un asesor para toda tu familia
                </h2>
                <p className="text-lg text-[#6B6B6B] mb-6 leading-relaxed">
                  Rosa y Sebastián gestionan todos los seguros de tu familia. 
                  Un solo contacto para todo: salud de los peques, vida de los padres, 
                  hogar, mascotas. Sencillez máxima.
                </p>
                <div className="space-y-3">
                  {[
                    "Revisión anual gratuita de todas las pólizas",
                    "Gestor personal para siempre",
                    "Respuesta en 30 minutos",
                    "Sin letra pequeña ni sorpresas",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded bg-[#2383E2]/10 flex items-center justify-center">
                        <CheckSquare className="w-3 h-3 text-[#2383E2]" />
                      </div>
                      <span className="text-[#37352F]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="py-20 bg-[#37352F]">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <h2 className="text-3xl font-semibold text-white mb-4">
              Protege lo más importante
            </h2>
            <p className="text-lg text-white/70 mb-8">
              Tu familia merece la mejor protección. Cotización gratuita en 30 minutos.
            </p>
            <a 
              href={wCotiza}
              className="inline-flex items-center gap-2 bg-[#2383E2] hover:bg-[#1A6CB3] text-white px-8 py-4 rounded-md font-medium text-lg transition-colors"
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
