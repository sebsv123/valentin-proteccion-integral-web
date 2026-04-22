import type { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { StickyWhatsApp } from "@/components/sticky-whatsapp";
import { buildWhatsAppHref } from "@/lib/products";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { Heart, Shield, Home, FileCheck, Clock, Users, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Seguros para Seniors Madrid | Decesos, Salud, Hogar | Valentín Protección Integral",
  description: "Seguros para mayores de 60 en Madrid. Decesos, salud, hogar. Tranquilidad para ti, alivio para tus hijos. Rosa y Sebastián.",
  keywords: ["seguros seniors Madrid","seguro decesos Madrid mayores","seguro salud senior Madrid","protección seniors Madrid"],
  alternates: { canonical: "https://valentinproteccionintegral.com/para/seniors" },
  openGraph: {
    title: "Seguros para Seniors Madrid | Decesos, Salud, Hogar",
    description: "Tranquilidad para ti. Alivio para tus hijos. Decesos, salud, hogar.",
    url: "https://valentinproteccionintegral.com/para/seniors",
    siteName: "Valentín Protección Integral",
    locale: "es_ES",
    type: "website",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Seguros para Seniors Madrid",
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
  "description": "Seguros para mayores de 60 en Madrid. Decesos, salud, hogar. Tranquilidad para ti, alivio para tus hijos.",
};

export const dynamic = "force-static";

export default function SeniorsPage() {
  const wCotiza = buildWhatsAppHref("Hola, tengo más de 60 años y quiero información sobre seguros para dejar todo en orden.");

  return (
    <>
      <BreadcrumbSchema items={[{name:"Inicio",url:"/"},{name:"Para Seniors",url:"/para/seniors"}]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(serviceSchema)}} />
      <Header />
      <main className="min-h-screen bg-white">
        
        {/* HERO IBM — Claro, accesible, 18px+ */}
        <section className="py-16 lg:py-24 bg-[#F7F8F9]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl">
            <div className="text-center mb-12">
              <span className="inline-block bg-[#F0FAE5] text-[#163300] border border-[#9FE870] px-4 py-2 rounded-full text-base font-medium mb-6">
                Para mayores de 60 años
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#163300] tracking-tight mb-6 leading-tight">
                Tranquilidad para ti.
                <br />
                <span className="text-[#163300]">Alivio para tus hijos.</span>
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-[#6B7280] max-w-3xl mx-auto leading-relaxed">
                Decesos, salud y hogar gestionados por Rosa y Sebastián. 
                Siempre la misma persona, siempre cerca.
              </p>
            </div>

            {/* Proceso 3 pasos IBM */}
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                { num: "1", title: "Nos cuentas", desc: "Una llamada o WhatsApp con tu situación" },
                { num: "2", title: "Te asesoramos", desc: "Opciones claras en lenguaje sencillo" },
                { num: "3", title: "Todo gestionado", desc: "Nosotros hacemos el papeleo por ti" },
              ].map((step, i) => (
                <div key={i} className="text-center p-6 bg-white rounded-xl border border-[#E5E7EB]">
                  <div className="w-12 h-12 rounded-full bg-[#163300] text-white flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {step.num}
                  </div>
                  <h3 className="text-xl font-semibold text-[#163300] mb-2">{step.title}</h3>
                  <p className="text-base text-[#6B7280]">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* COBERTURAS SENIOR */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl">
            <h2 className="text-3xl lg:text-4xl font-semibold text-[#163300] text-center mb-12">
              Protección completa para seniors
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: Heart, title: "Salud Senior", desc: "Especialistas sin listas de espera. Pruebas rápidas. Hospitalización." },
                { icon: Shield, title: "Decesos Completo", desc: "Gestión total del sepelio y trámites. Tu familia hace una sola llamada." },
                { icon: Home, title: "Hogar Protegido", desc: "Tu vivienda, tu patrimonio. Todo cubierto: daños, robo, responsabilidad civil." },
              ].map((item, i) => (
                <div key={i} className="p-8 bg-[#F7F8F9] rounded-xl border border-[#E5E7EB] hover:border-[#9FE870] transition-colors">
                  <div className="w-14 h-14 rounded-xl bg-[#F0FAE5] flex items-center justify-center mb-6">
                    <item.icon className="w-7 h-7 text-[#163300]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#163300] mb-3">{item.title}</h3>
                  <p className="text-base text-[#6B7280] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* VENTAJAS */}
        <section className="py-16 lg:py-24 bg-[#F7F8F9]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <Image 
                src="https://images.pexels.com/photos/3768136/pexels-photo-3768136.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Pareja senior feliz jardín España"
                width={600}
                height={450}
                className="rounded-xl object-cover"
              />
              <div>
                <h2 className="text-3xl font-semibold text-[#163300] mb-8">
                  Por qué los seniors confían en nosotros
                </h2>
                <div className="space-y-5">
                  {[
                    "Mensaje claro: nosotros nos ocupamos del resto",
                    "Gestor personal vitalicio: siempre la misma persona",
                    "Revisión anual gratuita de tus pólizas",
                    "Respuesta personal en menos de 30 minutos",
                    "Sin call center, sin operadores genéricos",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-6 h-6 rounded-full bg-[#9FE870] flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle2 className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-lg text-[#163300]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FOTO EQUIPO */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl">
            <div className="bg-[#F7F8F9] rounded-2xl p-8 lg:p-12">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <Image 
                  src="/images/rosa_y_sebastian.jpeg"
                  alt="Rosa y Sebastián - Tu asesoría senior personal"
                  width={400}
                  height={500}
                  className="rounded-xl object-cover mx-auto"
                />
                <div className="text-center lg:text-left">
                  <h2 className="text-3xl font-semibold text-[#163300] mb-4">
                    Rosa y Sebastián
                  </h2>
                  <p className="text-lg text-[#6B7280] mb-6 leading-relaxed">
                    "Llevamos más de 10 años trabajando con familias de Madrid. 
                    Los seniors son quienes más nos recomiendan porque tratamos 
                    sus seguros como si fueran los de nuestra propia familia."
                  </p>
                  <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-sm text-[#6B7280]">
                    <span className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-[#163300]" />
                      +10 años
                    </span>
                    <span className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-[#163300]" />
                      +1.200 familias
                    </span>
                    <span className="flex items-center gap-2">
                      <FileCheck className="w-4 h-4 text-[#163300]" />
                      DGSFP regulados
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="py-16 lg:py-24 bg-[#163300]">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <h2 className="text-3xl lg:text-4xl font-semibold text-white mb-4">
              Hablemos con calma. Estamos aquí.
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Cuéntanos qué quieres proteger. En 30 minutos tienes propuesta clara, sin tecnicismos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href={wCotiza}
                className="inline-flex items-center gap-3 bg-white text-[#163300] px-8 py-4 rounded-2xl font-medium text-lg hover:bg-[#F0FAE5] transition-colors"
              >
                <WhatsAppIcon className="w-6 h-6" />
                WhatsApp: 603 44 87 65
              </a>
              <a 
                href="tel:603448765"
                className="inline-flex items-center gap-3 bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-medium text-lg hover:bg-white/10 transition-colors"
              >
                Llamar ahora
              </a>
            </div>
            <p className="text-sm text-white/60 mt-8">
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
