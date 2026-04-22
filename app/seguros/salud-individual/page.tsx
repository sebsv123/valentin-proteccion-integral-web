import type { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { StickyWhatsApp } from "@/components/sticky-whatsapp";
import { buildWhatsAppHref } from "@/lib/products";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { Heart, Clock, Building2, Shield, CheckCircle2, Users, Star, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Seguro Salud Privado Madrid | Sin Listas de Espera | Valentín Protección Integral",
  description: "Seguro de salud privado en Madrid sin listas de espera. Accede a los mejores hospitales privados. Cotización en 30 minutos. Rosa y Sebastián.",
  keywords: ["seguro salud privado Madrid","seguro salud sin esperas Madrid","seguro hospital privado Madrid","seguro salud individual Madrid"],
  alternates: { canonical: "https://valentinproteccionintegral.com/seguros/salud-individual" },
  openGraph: {
    title: "Seguro Salud Privado Madrid | Sin Listas de Espera",
    description: "Accede a los mejores hospitales privados de Madrid sin esperas. Cotización en 30 minutos.",
    url: "https://valentinproteccionintegral.com/seguros/salud-individual",
    siteName: "Valentín Protección Integral",
    locale: "es_ES",
    type: "website",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Seguro de Salud Privado Madrid",
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
  "description": "Seguro de salud privado en Madrid sin listas de espera. Acceso directo a especialistas y hospitales privados.",
};

export const dynamic = "force-static";

export default function SaludIndividualPage() {
  const wCotiza = buildWhatsAppHref("Hola, quiero información sobre seguro de salud privado en Madrid sin listas de espera.");

  return (
    <>
      <BreadcrumbSchema items={[{name:"Inicio",url:"/"},{name:"Seguros",url:"/seguros"},{name:"Salud Individual",url:"/seguros/salud-individual"}]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(serviceSchema)}} />
      <Header />
      <main className="min-h-screen bg-white">
        
        {/* HERO APPLE — Cinematic */}
        <section className="min-h-screen bg-white flex flex-col items-center justify-center text-center px-6 pt-20">
          <p className="text-[#0071E3] text-lg font-medium tracking-wide uppercase mb-4">
            Seguro Salud Privado Madrid
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold text-[#1D1D1F] tracking-tight leading-[1.0] max-w-5xl mb-8">
            Sin listas de espera.
            <br />
            Sin sorpresas.
          </h1>
          <p className="text-xl md:text-2xl text-[#6E6E73] mt-4 max-w-2xl leading-relaxed">
            Accede a los mejores hospitales privados de Madrid
            con Rosa Valentín. Cotización en 30 minutos.
          </p>
          
          {/* Imagen CINEMATIC */}
          <Image 
            src="https://images.pexels.com/photos/3845998/pexels-photo-3845998.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Hospital privado moderno Madrid limpio brillante"
            width={1200}
            height={600}
            className="w-full max-w-6xl rounded-3xl mt-16 shadow-[0_40px_80px_rgba(0,0,0,0.12)] aspect-[21/9] object-cover"
            priority
          />
        </section>

        {/* STATS APPLE */}
        <section className="py-24 bg-[#F5F5F7]">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid md:grid-cols-3 gap-12 text-center">
              <div>
                <p className="text-7xl md:text-8xl font-light text-[#1D1D1F]">0</p>
                <p className="text-xl text-[#6E6E73] mt-2">días de lista de espera</p>
              </div>
              <div>
                <p className="text-7xl md:text-8xl font-light text-[#1D1D1F]">24<span className="text-4xl">h</span></p>
                <p className="text-xl text-[#6E6E73] mt-2">para especialista</p>
              </div>
              <div>
                <p className="text-7xl md:text-8xl font-light text-[#1D1D1F]">100<span className="text-4xl">%</span></p>
                <p className="text-xl text-[#6E6E73] mt-2">hospitales privados</p>
              </div>
            </div>
          </div>
        </section>

        {/* BENEFICIOS — Grid Apple */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-4xl font-semibold text-[#1D1D1F] text-center mb-16">
              Cobertura completa
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Heart, title: "Sin esperas", desc: "Acceso directo a especialistas" },
                { icon: Building2, title: "Hospitales top", desc: "Mejores centros privados Madrid" },
                { icon: Clock, title: "24 horas", desc: "Atención médica telefónica" },
                { icon: Shield, title: "Sin letra pequeña", desc: "Cobertura clara desde el primer día" },
              ].map((item, i) => (
                <div key={i} className="rounded-2xl border border-[#D2D2D7] p-8 text-center hover:border-[#0071E3] transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-[#F5F5F7] flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-6 h-6 text-[#0071E3]" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#1D1D1F] mb-2">{item.title}</h3>
                  <p className="text-sm text-[#6E6E73]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FOTO EQUIPO Apple Portrait */}
        <section className="py-24 bg-[#F5F5F7]">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <Image 
                src="/images/rosa_y_sebastian.jpeg"
                alt="Rosa y Sebastián - Tu asesoría salud privada Madrid"
                width={500}
                height={700}
                className="rounded-3xl aspect-[3/4] object-cover shadow-[0_60px_120px_rgba(0,0,0,0.15)] mx-auto"
              />
              <div>
                <h2 className="text-4xl font-semibold text-[#1D1D1F] mb-6">
                  Tu salud en manos expertas
                </h2>
                <p className="text-xl text-[#6E6E73] leading-relaxed mb-8">
                  Rosa y Sebastián llevan más de 10 años ayudando a familias y profesionales 
                  de Madrid a elegir el seguro de salud adecuado. Conocen cada hospital privado, 
                  cada especialista, cada cobertura.
                </p>
                <div className="space-y-4">
                  {[
                    "Asesoría gratuita y sin compromiso",
                    "Comparamos entre las principales compañías",
                    "Gestión completa del alta",
                    "Revisión anual de tu cobertura",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#0071E3]" />
                      <span className="text-[#1D1D1F]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA FINAL Apple */}
        <section className="py-24 bg-white text-center">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-semibold text-[#1D1D1F] mb-6">
              Tu salud no puede esperar
            </h2>
            <p className="text-xl text-[#6E6E73] mb-10">
              Cotización personalizada en 30 minutos. Sin letra pequeña.
            </p>
            <a 
              href={wCotiza}
              className="inline-flex items-center gap-3 bg-[#0071E3] hover:bg-[#0077ED] text-white px-10 py-4 rounded-full text-lg font-medium transition-all hover:scale-[1.02]"
            >
              <WhatsAppIcon className="w-5 h-5" />
              Cotiza tu salud ahora
            </a>
            <p className="text-sm text-[#6E6E73] mt-6">
              NIF: 79234434D · DGSFP: C012479234434D · Boadilla del Monte, Madrid
            </p>
          </div>
        </section>

      </main>
      <Footer />
      <StickyWhatsApp />
    </>
  );
}
