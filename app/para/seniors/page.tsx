import type { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { StickyWhatsApp } from "@/components/sticky-whatsapp";
import { buildWhatsAppHref } from "@/lib/products";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { Sparkles, CheckCircle2, Phone, Heart, Home, Plane, Ambulance, Shield, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Seguros Mayores 50+ Madrid | Valentín Protección Integral",
  description: "Seguros seniors Madrid. Decesos, salud geriátrica, asistencia domicilio. Llamada directa 603 44 87 65. Rosa y Sebastián.",
  keywords: ["seguros mayores Madrid","seguros seniors Madrid","seguro decesos Madrid","asistencia domicilio mayores"],
  alternates: { canonical: "https://valentinproteccionintegral.com/para/seniors" },
  openGraph: {
    title: "Seguros Mayores 50+ Madrid | Tranquilidad",
    description: "Decesos, salud geriátrica, asistencia domicilio. Llamada directa. 10+ años confianza.",
    url: "https://valentinproteccionintegral.com/para/seniors",
    siteName: "Valentín Protección Integral",
    locale: "es_ES",
    type: "website",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "InsuranceAgency",
  "name": "Seguros Mayores 50+ Madrid - Valentín Protección Integral",
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
  "description": "Seguros para mayores 50+ Madrid. Decesos, salud geriátrica, asistencia domicilio 24h.",
};

export const dynamic = "force-static";

export default function SeniorsPage() {
  const wCotiza = buildWhatsAppHref("Hola, tengo más de 50 años y busco un seguro tranquilo en Madrid. Prefiero llamar.");

  return (
    <>
      <BreadcrumbSchema items={[{name:"Inicio",url:"/"},{name:"Para",url:"/para"},{name:"Mayores 50+",url:"/para/seniors"}]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(serviceSchema)}} />
      <Header />
      <main className="min-h-screen bg-white">
        
        {/* HERO WISE — Azul calma (usando verde Wise) */}
        <section className="pt-24 pb-20 bg-[#F7F8F9]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left: Content */}
              <div>
                {/* Badge Wise */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F0FAE5] text-[#163300] text-sm mb-6 border border-[#9FE870]">
                  <Sparkles className="w-4 h-4 text-[#2E7D32]" />
                  +10 años confianza · +1.200 seniors
                </div>
                
                {/* H1 Wise style */}
                <h1 className="text-[48px] sm:text-[56px] lg:text-[64px] font-bold text-[#163300] leading-[0.85] tracking-tight mb-6">
                  Seguros
                  <br />
                  <span className="text-[#4B5563]">Tranquilidad 50+</span>
                </h1>
                
                {/* Subhead grande para legibilidad */}
                <p className="text-2xl text-[#4B5563] leading-relaxed mb-8 max-w-lg">
                  Decesos, salud, asistencia hogar.
                  <br />
                  <span className="text-[#163300] font-medium">Todo explicado paso a paso.</span>
                </p>
                
                {/* CTAs — Teléfono primario para seniors */}
                <div className="flex flex-wrap gap-4 mb-8">
                  <a 
                    href="tel:603448765"
                    className="group inline-flex items-center gap-2 bg-[#9FE870] hover:bg-[#8FD460] text-[#163300] px-8 py-4 rounded-full text-lg font-semibold transition-transform hover:scale-105"
                  >
                    <Phone className="w-5 h-5" />
                    📞 Llamar Ahora
                    <span className="hidden group-hover:inline text-sm ml-1">
                      👴 Asesoría gratis
                    </span>
                  </a>
                  <a 
                    href={wCotiza}
                    className="inline-flex items-center gap-2 bg-white text-[#163300] px-6 py-4 rounded-full text-lg font-medium border border-[#E5E7EB] hover:bg-[#F0FAE5] transition-all"
                  >
                    <WhatsAppIcon className="w-5 h-5" />
                    WhatsApp
                  </a>
                </div>
                
                {/* Trust row */}
                <div className="flex flex-wrap gap-6 text-lg text-[#4B5563]">
                  <span className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#2E7D32]" />
                    Sin internet necesario
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-[#163300]" />
                    Respuesta inmediata
                  </span>
                </div>
              </div>
              
              {/* Right: Hero Image */}
              <div className="relative">
                <div className="relative rounded-[30px] overflow-hidden shadow-[rgba(14,15,12,0.12)_0px_0px_0px_1px]">
                  <Image
                    src="https://images.pexels.com/photos/3760260/pexels-photo-3760260.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Senior pareja Madrid parque feliz"
                    width={600}
                    height={450}
                    className="w-full h-auto object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* NECESIDADES 50+ — Wise cards */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl">
            <h2 className="text-[40px] sm:text-[48px] font-bold text-[#163300] leading-[0.85] text-center mb-12">
              Lo que necesitas
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Heart, title: "Decesos", desc: "Sin preocupaciones para tu familia. Todo gestionado." },
                { icon: Shield, title: "Salud geriátrica", desc: "Especialistas en medicina para mayores." },
                { icon: Home, title: "Asistencia 24h", desc: "Ayuda en casa cuando la necesites." },
                { icon: Plane, title: "Repatriación", desc: "Cobertura internacional completa." },
              ].map((item, i) => (
                <div key={i} className="rounded-[30px] p-6 bg-[#F0FAE5] border border-[#9FE870]/30">
                  <div className="w-12 h-12 rounded-full bg-[#9FE870] flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-[#163300]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#163300] mb-2">{item.title}</h3>
                  <p className="text-base text-[#4B5563]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* COBERTURAS — Wise grid */}
        <section className="py-20 bg-[#F7F8F9]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl">
            <h2 className="text-[40px] sm:text-[48px] font-bold text-[#163300] leading-[0.85] text-center mb-12">
              Cobertura completa
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: Heart, title: "Decesos completo", desc: "Todo incluido" },
                { icon: Shield, title: "Geriátrica", desc: "Especialistas" },
                { icon: Ambulance, title: "Ambulancia 24h", desc: "Domicilio" },
                { icon: Plane, title: "Repatriación", desc: "Mundial" },
              ].map((item, i) => (
                <div key={i} className="rounded-[20px] p-5 bg-white border border-[#E5E7EB]">
                  <div className="w-10 h-10 rounded-full bg-[#F0FAE5] flex items-center justify-center mb-3">
                    <item.icon className="w-5 h-5 text-[#163300]" />
                  </div>
                  <h3 className="text-base font-bold text-[#163300] mb-1">{item.title}</h3>
                  <p className="text-sm text-[#4B5563]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* EQUIPO EXPERIENCIA */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative rounded-[30px] overflow-hidden shadow-[rgba(14,15,12,0.12)_0px_0px_0px_1px]">
                <Image
                  src="/images/rosa_y_sebastian.jpeg"
                  alt="Rosa Valentín · 10+ años seniors"
                  width={500}
                  height={600}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F0FAE5] text-[#163300] text-sm mb-6 border border-[#9FE870]">
                  <Sparkles className="w-4 h-4 text-[#2E7D32]" />
                  10+ años experiencia seniors
                </div>
                <h2 className="text-[40px] sm:text-[48px] font-bold text-[#163300] leading-[0.85] mb-4">
                  Rosa Valentín
                </h2>
                <p className="text-xl text-[#4B5563] leading-relaxed mb-6">
                  Llevo más de 10 años ayudando a personas mayores en Madrid 
                  a encontrar la protección adecuada. Entiendo lo importante 
                  que es la claridad y la confianza.
                </p>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#9FE870] text-[#163300] text-sm font-semibold">
                  <CheckCircle2 className="w-4 h-4" />
                  DGSFP: C012479234434D
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROCESO SIMPLE */}
        <section className="py-20 bg-[#F7F8F9]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl">
            <h2 className="text-[40px] sm:text-[48px] font-bold text-[#163300] leading-[0.85] text-center mb-12">
              Proceso simple
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { num: "1", title: "Llamada", desc: "Directa, sin necesidad de internet. Te escuchamos." },
                { num: "2", title: "Asesor personal", desc: "Te asignamos un asesor que te guiará en todo." },
                { num: "3", title: "Todo explicado", desc: "Paso a paso, sin prisa, hasta que quede claro." },
              ].map((step, i) => (
                <div key={i} className="text-center">
                  <div className="w-14 h-14 rounded-full bg-[#9FE870] text-[#163300] flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {step.num}
                  </div>
                  <h3 className="text-2xl font-bold text-[#163300] mb-2">{step.title}</h3>
                  <p className="text-lg text-[#4B5563]">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA CONFIANZA — Teléfono destacado */}
        <section className="py-24 bg-[#163300]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-4xl text-center">
            <h2 className="text-[48px] sm:text-[56px] font-bold text-white leading-[0.85] mb-4">
              Llamar Ahora
            </h2>
            <p className="text-2xl text-white/70 mb-4">
              GRATIS. Sin compromiso.
            </p>
            
            {/* Teléfono gigante */}
            <a 
              href="tel:603448765"
              className="group inline-flex items-center gap-3 bg-[#9FE870] hover:bg-[#8FD460] text-[#163300] px-10 py-5 rounded-full text-3xl font-bold transition-transform hover:scale-105 mb-8"
            >
              <Phone className="w-8 h-8" />
              603 44 87 65
              <span className="hidden group-hover:inline text-lg ml-2 text-[#163300]/70">
                👴 Asesoría gratis
              </span>
            </a>
            
            <p className="text-xl text-white/50 mb-8">
              O si prefieres WhatsApp:
            </p>
            
            <a 
              href={wCotiza}
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-full text-lg font-medium border border-white/30 transition-all"
            >
              <WhatsAppIcon className="w-5 h-5" />
              WhatsApp
            </a>
            
            {/* Badges */}
            <div className="flex flex-wrap justify-center gap-3 mt-10">
              {[
                "Sin internet necesario",
                "Asesor personal",
                "DGSFP verificado",
              ].map((item, i) => (
                <div key={i} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-sm">
                  <CheckCircle2 className="w-4 h-4" />
                  {item}
                </div>
              ))}
            </div>
            
            <p className="text-sm text-white/40 mt-8">
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
