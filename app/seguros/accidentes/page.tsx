import type { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { StickyWhatsApp } from "@/components/sticky-whatsapp";
import { buildWhatsAppHref } from "@/lib/products";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { Bike, Dumbbell, Bike as BikeIcon, Mountain, Waves, AlertTriangle, Shield, CheckCircle2, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "Seguro Accidentes Madrid | Ciclismo, Gym, Moto Laboral | Valentín Protección Integral",
  description: "Seguro de accidentes desde 3€/mes. Cubre ciclismo, gimnasio, moto laboral, deportes de montaña y agua. Indemnización por incapacidad temporal.",
  keywords: ["seguro accidentes Madrid","seguro ciclismo Madrid","seguro gym Madrid","indemnización incapacidad temporal"],
  alternates: { canonical: "https://valentinproteccionintegral.com/seguros/accidentes" },
  openGraph: {
    title: "Seguro Accidentes Madrid | Ciclismo, Gym, Moto Laboral",
    description: "Todo cubierto desde 3€/mes. Ciclismo, gimnasio, moto laboral, deportes.",
    url: "https://valentinproteccionintegral.com/seguros/accidentes",
    siteName: "Valentín Protección Integral",
    locale: "es_ES",
    type: "website",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Seguro de Accidentes Madrid",
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
  "description": "Seguro de accidentes para ciclismo, gimnasio, moto laboral y deportes. Desde 3€/mes.",
};

export const dynamic = "force-static";

export default function AccidentesPage() {
  const wCotiza = buildWhatsAppHref("Hola, quiero información sobre seguro de accidentes. Hago ciclismo/gym/moto y quiero estar cubierto.");

  return (
    <>
      <BreadcrumbSchema items={[{name:"Inicio",url:"/"},{name:"Seguros",url:"/seguros"},{name:"Accidentes",url:"/seguros/accidentes"}]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(serviceSchema)}} />
      <Header />
      <main className="min-h-screen bg-[#1C1C1E] text-white">
        
        {/* HERO RAYCAST — Energía deportiva */}
        <section className="min-h-screen bg-[#1C1C1E] relative overflow-hidden flex items-center">
          {/* Gradient blob ENERGÉTICO */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-[#FF6363] to-[#FFD93D] opacity-[0.15] blur-[100px] rounded-full" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-br from-[#FF8C42] to-[#FF6363] opacity-[0.1] blur-[80px] rounded-full" />
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-20 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[rgba(255,99,99,0.2)] text-[#FF8C42] text-sm font-medium mb-6">
                  <AlertTriangle className="w-4 h-4" />
                  Desde 3€/mes
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                  <span className="bg-gradient-to-r from-[#FF6363] to-[#FFD93D] bg-clip-text text-transparent">
                    Bici. Gym. Trabajo.
                  </span>
                  <br />
                  <span className="text-white">Todo cubierto.</span>
                </h1>
                <p className="text-xl text-[#98989D] mb-8 max-w-lg">
                  Seguro de accidentes que cubre tu vida activa. Ciclismo, deporte, moto laboral. 
                  Indemnización por incapacidad temporal.
                </p>
                <a 
                  href={wCotiza}
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-[#FF6363] to-[#FF8C42] text-white font-semibold text-lg hover:shadow-[0_0_30px_rgba(255,99,99,0.4)] transition-all hover:scale-[1.02]"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                  Cotizar ahora desde 3€/mes
                </a>
              </div>
              
              <div className="hidden lg:block relative">
                <Image
                  src="https://images.pexels.com/photos/2889445/pexels-photo-2889445.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Ciclista deporte protección accidentes Madrid"
                  width={500}
                  height={600}
                  className="rounded-3xl object-cover border border-[rgba(255,255,255,0.1)]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* DEPORTES — Cards neon */}
        <section className="py-24 bg-[#1C1C1E]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
              Todo lo que cubrimos
            </h2>
            <p className="text-[#98989D] text-center mb-12">
              Tu estilo de vida activo, protegido
            </p>
            
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
              {[
                { icon: Bike, name: "Ciclismo", desc: "Carretera y montaña" },
                { icon: Dumbbell, name: "Gym", desc: "Gimnasio y fitness" },
                { icon: BikeIcon, name: "Moto laboral", desc: "Desplazamientos trabajo" },
                { icon: Mountain, name: "Montaña", desc: "Senderismo, escalada" },
                { icon: Waves, name: "Deportes agua", desc: "Natación, surf, paddle" },
              ].map((sport, i) => (
                <div key={i} className="rounded-2xl bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.1)] p-6 text-center hover:border-[rgba(255,99,99,0.4)] transition-all group">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#FF6363] to-[#FF8C42] flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <sport.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1">{sport.name}</h3>
                  <p className="text-[#98989D] text-sm">{sport.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* COBERTURA */}
        <section className="py-24 bg-[#191919]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  ¿Qué cubre exactamente?
                </h2>
                <div className="space-y-6">
                  {[
                    { icon: Shield, title: "Gastos médicos", desc: "Urgencias, hospitalización, rehabilitación" },
                    { icon: TrendingUp, title: "Incapacidad temporal", desc: "Indemnización diaria si no puedes trabajar" },
                    { icon: AlertTriangle, title: "Invalidez", desc: "Capital en caso de invalidez permanente" },
                    { icon: CheckCircle2, title: "Fallecimiento", desc: "Capital para tus beneficiarios" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-[rgba(255,99,99,0.2)] flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-[#FF8C42]" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
                        <p className="text-[#98989D]">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/images/rosa_y_sebastian.jpeg"
                  alt="Rosa y Sebastián - Seguro accidentes"
                  width={500}
                  height={600}
                  className="rounded-3xl object-cover border border-[rgba(255,255,255,0.1)]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-gradient-to-br from-[#FF6363] to-[#FF8C42]">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Protege tu estilo de vida
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Desde 3€/mes. Cotización en 30 minutos.
            </p>
            <a 
              href={wCotiza}
              className="inline-flex items-center gap-3 bg-white text-[#FF6363] px-10 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl transition-all"
            >
              <WhatsAppIcon className="w-5 h-5" />
              Cotizar seguro de accidentes
            </a>
          </div>
        </section>

      </main>
      <Footer />
      <StickyWhatsApp />
    </>
  );
}
