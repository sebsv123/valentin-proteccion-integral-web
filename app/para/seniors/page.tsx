import type { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { StickyWhatsApp } from "@/components/sticky-whatsapp";
import { buildWhatsAppHref } from "@/lib/products";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { Sparkles, CheckCircle2, Phone, Heart, Home, HandHeart, Shield, Award, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "Seguros Seniors Madrid 65+ | Tranquilidad Real | Valentín",
  description: "Seguros para mayores de 65 en Madrid. Salud geriátrica, decesos, asistencia domicilio. Gestor personal. Cotiza en WhatsApp o teléfono.",
  keywords: ["seguros mayores Madrid","seguros seniors Madrid","seguro decesos Madrid","asistencia domicilio mayores"],
  alternates: { canonical: "https://valentinproteccionintegral.com/para/seniors" },
  openGraph: {
    title: "Seguros Seniors Madrid 65+ | Tranquilidad Real | Valentín",
    description: "Seguros para mayores de 65 en Madrid. Salud geriátrica, decesos, asistencia domicilio. Gestor personal. Cotiza en WhatsApp o teléfono.",
    url: "https://valentinproteccionintegral.com/para/seniors",
    siteName: "Valentín Protección Integral",
    locale: "es_ES",
    type: "website",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "InsuranceAgency",
  "name": "Seguros para Mayores Madrid - Valentín Protección Integral",
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
  "description": "Seguros para mayores Madrid. Decesos, salud, asistencia domicilio. Atención personalizada.",
};

export const dynamic = "force-static";

export default function SeniorsPage() {
  const wCotiza = buildWhatsAppHref("Hola, tengo más de 50 años y busco un seguro en Madrid.");

  return (
    <>
      <BreadcrumbSchema items={[{name:"Inicio",url:"/"},{name:"Para",url:"/para"},{name:"Mayores",url:"/para/seniors"}]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(serviceSchema)}} />
      <Header />
      <main className="min-h-screen bg-white">
        
        {/* HERO — Tranquilo, claro, sin oscuros */}
        <section className="pt-20 pb-16 bg-stone-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left: Content */}
              <div>
                {/* Badge claro */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-stone-200 text-stone-600 text-base mb-8">
                  <Sparkles className="w-4 h-4 text-emerald-600" />
                  <span>+10 años ayudando a mayores</span>
                </div>
                
                {/* H1 grande y claro */}
                <h1 className="text-[48px] sm:text-[56px] font-bold text-stone-800 leading-[1.05] mb-6">
                  Seguros para
                  <br />
                  <span className="text-emerald-700">mayores</span>
                </h1>
                
                {/* Subheadline muy legible */}
                <p className="text-2xl text-stone-600 leading-relaxed mb-8">
                  Decesos, salud y asistencia en casa.
                  <br />
                  Todo explicado con claridad.
                </p>
                
                {/* Teléfono grande y visible */}
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <a 
                    href="tel:603448765"
                    className="inline-flex items-center justify-center gap-3 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-5 rounded-xl text-xl font-semibold transition-all shadow-lg"
                  >
                    <Phone className="w-6 h-6" />
                    📞 603 44 87 65
                  </a>
                  <a 
                    href={wCotiza}
                    className="inline-flex items-center justify-center gap-2 bg-white text-stone-700 px-8 py-5 rounded-xl text-xl font-medium border-2 border-stone-200 hover:border-emerald-400 transition-all"
                  >
                    WhatsApp
                  </a>
                </div>
                
                {/* Info simple */}
                <p className="text-lg text-stone-500">
                  Atención personalizada. Sin prisa.
                </p>
              </div>
              
              {/* Right: Imagen serena */}
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-lg border border-stone-100">
                  <Image
                    src="https://images.pexels.com/photos/3760260/pexels-photo-3760260.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Pareja mayor tranquila"
                    width={600}
                    height={450}
                    className="w-full h-auto object-cover object-top"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* NECESIDADES — Tres cosas simples */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl">
            <div className="text-center mb-14">
              <h2 className="text-[40px] sm:text-[48px] font-bold text-stone-800 mb-4">
                Tres cosas importantes
              </h2>
              <p className="text-xl text-stone-500">
                Lo que necesitas ahora
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { 
                  icon: HandHeart, 
                  title: "Decesos", 
                  desc: "Para que tu familia no se preocupe por nada. Gastos cubiertos y gestión completa."
                },
                { 
                  icon: Heart, 
                  title: "Salud", 
                  desc: "Médico cuando lo necesites. Sin listas de espera. Atención en casa si lo prefieres."
                },
                { 
                  icon: Home, 
                  title: "Asistencia", 
                  desc: "Ayuda en tu hogar cuando la necesites. 24 horas, los 365 días del año."
                },
              ].map((item, i) => (
                <div key={i} className="bg-stone-50 rounded-2xl p-8">
                  <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-6 shadow-sm">
                    <item.icon className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-stone-800 mb-3">{item.title}</h3>
                  <p className="text-lg text-stone-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* COBERTURAS — Lista clara */}
        <section className="py-20 bg-stone-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl">
            <div className="text-center mb-14">
              <h2 className="text-[40px] sm:text-[48px] font-bold text-stone-800 mb-4">
                Todo lo que incluye
              </h2>
              <p className="text-xl text-stone-500">
                Sin letra pequeña
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Gastos de funeral cubiertos al 100%",
                "Capital para tu familia (hasta 50.000€)",
                "Médico especialista sin esperas",
                "Atención en tu domicilio",
                "Traslado al hospital si es necesario",
                "Gestión de todos los trámites",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 bg-white rounded-xl p-6">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  </div>
                  <p className="text-lg text-stone-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* EQUIPO — Confianza humana */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-lg border border-stone-100">
                  <Image
                    src="/images/rosa_y_sebastian.jpeg"
                    alt="Rosa y Sebastián - Te acompañamos"
                    width={500}
                    height={600}
                    className="w-full h-auto object-cover object-top"
                    priority
                  />
                </div>
              </div>
              
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 text-emerald-700 text-base mb-8">
                  <HandHeart className="w-4 h-4" />
                  Te acompañamos
                </div>
                
                <h2 className="text-[40px] sm:text-[48px] font-bold text-stone-800 leading-tight mb-6">
                  Rosa y Sebastián
                </h2>
                
                <p className="text-xl text-stone-600 leading-relaxed mb-8">
                  Llevamos más de 10 años ayudando a mayores de Madrid. 
                  Sabemos que lo más importante es la confianza y el trato humano.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    </div>
                    <span className="text-lg text-stone-700">+500 mayores acompañados</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                      <Shield className="w-5 h-5 text-emerald-600" />
                    </div>
                    <span className="text-lg text-stone-700">DGSFP: C012479234434D</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                      <Award className="w-5 h-5 text-emerald-600" />
                    </div>
                    <span className="text-lg text-stone-700">Disponibles para ti</span>
                  </div>
                </div>
                
                <p className="text-lg text-stone-500">
                  <span className="font-semibold text-stone-800">NIF:</span> 79234434D
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PROCESO — Muy simple */}
        <section className="py-20 bg-stone-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl">
            <div className="text-center mb-14">
              <h2 className="text-[40px] sm:text-[48px] font-bold text-stone-800 mb-4">
                Cómo funciona
              </h2>
              <p className="text-xl text-stone-500">
                Tres pasos sencillos
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { 
                  num: "1", 
                  title: "Nos llamas", 
                  desc: "Explicamos todo por teléfono. Sin prisa, con paciencia."
                },
                { 
                  num: "2", 
                  title: "Te asesoramos", 
                  desc: "Te proponemos lo que mejor se adapta a ti. Sin compromiso."
                },
                { 
                  num: "3", 
                  title: "Estás cubierto", 
                  desc: "Nosotros nos ocupamos de todo. Tú tranquilo."
                },
              ].map((step, i) => (
                <div key={i} className="text-center">
                  <div className="w-20 h-20 rounded-full bg-emerald-600 text-white flex items-center justify-center text-3xl font-bold mx-auto mb-6">
                    {step.num}
                  </div>
                  <h3 className="text-2xl font-bold text-stone-800 mb-3">{step.title}</h3>
                  <p className="text-lg text-stone-600 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA FINAL — Tranquila, sin presión */}
        <section className="py-24 bg-emerald-600">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-4xl text-center">
            <h2 className="text-[44px] sm:text-[52px] font-bold text-white leading-tight mb-6">
              Tranquilidad para ti
              <br />
              y tu familia
            </h2>
            
            <p className="text-2xl text-emerald-100 mb-10">
              Una llamada. Sin compromiso. Con toda la paciencia del mundo.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="tel:603448765"
                className="inline-flex items-center justify-center gap-3 bg-white text-emerald-700 px-10 py-5 rounded-xl text-xl font-semibold transition-all shadow-xl hover:shadow-2xl"
              >
                <Phone className="w-6 h-6" />
                📞 603 44 87 65
              </a>
              <a 
                href={wCotiza}
                className="inline-flex items-center justify-center gap-2 bg-emerald-500 text-white px-10 py-5 rounded-xl text-xl font-medium border-2 border-emerald-400 hover:bg-emerald-400 transition-all"
              >
                WhatsApp
              </a>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 mt-10 text-emerald-100">
              <span className="flex items-center gap-2 text-lg">
                <CheckCircle2 className="w-5 h-5" />
                Sin permanencia
              </span>
              <span className="flex items-center gap-2 text-lg">
                <Shield className="w-5 h-5" />
                DGSFP verificado
              </span>
            </div>
            
            <p className="text-lg text-emerald-200/70 mt-8">
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
