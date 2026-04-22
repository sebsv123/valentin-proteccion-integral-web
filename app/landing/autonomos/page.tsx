import type { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { StickyWhatsApp } from "@/components/sticky-whatsapp";
import { buildWhatsAppHref } from "@/lib/products";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Phone, Shield, TrendingUp, Clock, ArrowRight, AlertCircle, CheckCircle2, Wallet, Briefcase, HeartPulse, Users, FileCheck, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Seguros para Autónomos Madrid | Valentín Protección Integral",
  description: "Seguro médico para autónomos en Madrid con deducción IRPF hasta 500€/año. Salud + accidentes + RC profesional. Asesoría gratuita en 30 min. Rosa y Sebastián.",
  keywords: ["seguro autonomos madrid","seguro medico autonomos madrid","deduccion irpf seguro medico autonomos","seguro autonomos boadilla del monte","seguro salud autonomos madrid"],
  alternates: { canonical: "https://valentinproteccionintegral.com/landing/autonomos" },
  openGraph: {
    title: "Seguros para Autónomos Madrid | Valentín Protección Integral",
    description: "Seguro médico para autónomos en Madrid con deducción IRPF hasta 500€/año. Salud + accidentes desde 20€/mes.",
    url: "https://valentinproteccionintegral.com/landing/autonomos",
    siteName: "Valentín Protección Integral",
    locale: "es_ES",
    type: "website",
    images: [{ url: "https://valentinproteccionintegral.com/images/rosa_y_sebastian_mesa.png", alt: "Rosa y Sebastián - Asesores autónomos Madrid" }],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Seguro para Autónomos en Madrid",
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
  "description": "Asesoramiento para seguros médicos deducibles para autónomos en Madrid. Deducción IRPF hasta 500€. Gestión personal de Rosa y Sebastián Valentín.",
  "offers": { "@type": "Offer", "price": "20", "priceCurrency": "EUR", "description": "Seguro para autónomos desde 20€/mes con deducción IRPF. Asesoría gratuita sin compromiso." }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Puede un autónomo deducirse el seguro médico en el IRPF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. Como autónomo puedes deducirte hasta 500€ anuales en el IRPF por tu seguro médico, y hasta 500€ más por cónyuge e hijos menores de 25 años. En total hasta 2.000€ si tienes familia numerosa. Rosa y Sebastián te calculan el ahorro exacto en 30 minutos, sin compromiso." }
    },
    {
      "@type": "Question",
      "name": "¿Cuánto cuesta un seguro médico para autónomos en Madrid?",
      "acceptedAnswer": { "@type": "Answer", "text": "El precio de un seguro médico para autónomos en Madrid varía según la edad, las coberturas y la compañía. En nuestra consulta gratuita analizamos tu situación y buscamos la mejor opción para tu perfil concreto, comparando entre las principales compañías del mercado. El seguro es 100% deducible como gasto de la actividad." }
    },
    {
      "@type": "Question",
      "name": "¿Qué seguro necesita un autónomo en Madrid?",
      "acceptedAnswer": { "@type": "Answer", "text": "Un autónomo en Madrid necesita como mínimo: seguro de salud privado (deducible en IRPF), seguro de accidentes con incapacidad temporal, y responsabilidad civil profesional según la actividad. Además, si tienes empleados, seguro de vida colectivo. Te asesoramos para cubrir exactamente lo que necesitas." }
    },
    {
      "@type": "Question",
      "name": "¿Hay permanencia en el seguro de autónomos?",
      "acceptedAnswer": { "@type": "Answer", "text": "No. Las pólizas que gestionamos para autónomos no tienen permanencia. Puedes cancelar cuando quieras sin penalización. Además, hacemos revisión anual gratuita para asegurarnos de que tu cobertura sigue siendo la óptima para tu situación." }
    }
  ]
};

export const dynamic = "force-static";

export default function AutonomosLandingPage() {
  const wCotiza = buildWhatsAppHref("Hola, soy autónomo y quiero información sobre seguro de salud con deducción IRPF. ¿Podéis ayudarme?");
  const wDeduccion = buildWhatsAppHref("Hola, soy autónomo y quiero saber cuánto puedo deducirme en IRPF con un seguro de salud.");

  return (
    <>
      <BreadcrumbSchema items={[{name:"Inicio",url:"/"},{name:"Seguros para Autónomos",url:"/landing/autonomos"}]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(serviceSchema)}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(faqSchema)}} />
      <Header />
      <main className="min-h-screen bg-[#0A0A1A] text-white overflow-x-hidden">
        
        {/* SECCIÓN 1: HERO — Stripe gradient dark */}
        <section className="relative min-h-screen flex items-center bg-[#0A0A1A] overflow-hidden">
          {/* Gradient blobs background */}
          <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-[#635BFF] opacity-[0.12] blur-[120px]" />
          <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] rounded-full bg-[#8B5CF6] opacity-[0.08] blur-[100px]" />
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-20 lg:py-0 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left: Content */}
              <div className="max-w-2xl">
                {/* Badge Stripe */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[rgba(99,91,255,0.3)] bg-[rgba(99,91,255,0.1)] text-[#A78BFA] text-sm mb-8">
                  <Sparkles className="w-4 h-4" />
                  +1.200 clientes protegidos en Madrid
                </div>
                
                {/* H1 Stripe weight-300 */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-white leading-[1.05] mb-6">
                  Seguros para Autónomos
                  <br />
                  <span className="bg-gradient-to-r from-[#635BFF] to-[#A78BFA] bg-clip-text text-transparent font-semibold">
                    en Madrid
                  </span>
                </h1>
                
                {/* Sub */}
                <p className="text-lg md:text-xl text-[#A0A0B8] font-light max-w-2xl leading-relaxed mb-8">
                  Deducción IRPF hasta 500€/año. Salud + accidentes + RC profesional. 
                  Sin permanencia. Gestor personal para siempre.
                </p>
                
                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <a href={wCotiza} className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-[#635BFF] to-[#7C3AED] text-white font-medium text-lg hover:shadow-[0_0_30px_rgba(99,91,255,0.4)] transition-all duration-300 hover:scale-[1.02]">
                    <WhatsAppIcon className="w-6 h-6" />
                    Cotiza tu seguro ahora
                  </a>
                  <a href="tel:603448765" className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl border border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.05)] text-white font-medium text-lg hover:bg-[rgba(255,255,255,0.1)] transition-all">
                    <Phone className="w-5 h-5" />
                    Llamar: 603 44 87 65
                  </a>
                </div>
                
                {/* Trust */}
                <div className="flex flex-wrap items-center gap-4 text-sm text-[#A0A0B8]">
                  <span className="flex items-center gap-2">
                    <FileCheck className="w-4 h-4 text-[#635BFF]" />
                    NIF: 79234434D
                  </span>
                  <span className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-[#635BFF]" />
                    DGSFP: C012479234434D
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#635BFF]" />
                    +10 años
                  </span>
                </div>
              </div>
              
              {/* Right: Hero Image */}
              <div className="relative hidden lg:block">
                <Image
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Autónomo profesional español con laptop en Madrid"
                  width={600}
                  height={750}
                  className="rounded-3xl object-cover aspect-[4/5] border border-[rgba(255,255,255,0.08)] shadow-[0_0_80px_rgba(99,91,255,0.2)]"
                  priority
                />
                {/* Floating card */}
                <div className="absolute -bottom-6 -left-6 p-4 rounded-2xl border border-[rgba(99,91,255,0.3)] bg-[rgba(10,10,26,0.9)] backdrop-blur-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#635BFF] to-[#7C3AED] flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-bold">Hasta 500€</p>
                      <p className="text-[#A0A0B8] text-sm">deducción IRPF/año</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECCIÓN 2: STATS STRIPE */}
        <section className="border-y border-[rgba(255,255,255,0.08)] bg-[#0F0F1A]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <p className="text-4xl md:text-5xl font-light text-white mb-2">+1.200</p>
                <p className="text-sm text-[#A0A0B8]">Autónomos protegidos</p>
              </div>
              <div className="text-center">
                <p className="text-4xl md:text-5xl font-light text-white mb-2">10+</p>
                <p className="text-sm text-[#A0A0B8]">Años de experiencia</p>
              </div>
              <div className="text-center">
                <p className="text-4xl md:text-5xl font-light text-white mb-2">30</p>
                <p className="text-sm text-[#A0A0B8]">Minutos respuesta</p>
              </div>
            </div>
          </div>
        </section>

        {/* SECCIÓN 3: PROBLEMA */}
        <section className="py-24 bg-[#0A0A1A]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-6">
                ¿Sabes qué pasa con tu IRPF si enfermas <span className="text-[#A78BFA]">30 días</span>?
              </h2>
              <p className="text-lg text-[#A0A0B8] font-light">
                La baja por enfermedad no cubre tus gastos fijos. Sin protección, tu negocio se resiente.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="rounded-2xl border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] backdrop-blur-sm p-6 hover:border-[rgba(99,91,255,0.4)] transition-all">
                <div className="w-12 h-12 rounded-xl bg-[rgba(239,68,68,0.2)] flex items-center justify-center mb-4">
                  <HeartPulse className="w-6 h-6 text-red-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Baja por enfermedad</h3>
                <p className="text-[#A0A0B8] text-sm leading-relaxed">
                  La Seguridad Social cubre el 55% de tu base. ¿Y los gastos fijos de tu negocio? 
                  Alquiler, suministros, suministros...
                </p>
              </div>
              <div className="rounded-2xl border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] backdrop-blur-sm p-6 hover:border-[rgba(99,91,255,0.4)] transition-all">
                <div className="w-12 h-12 rounded-xl bg-[rgba(245,158,11,0.2)] flex items-center justify-center mb-4">
                  <AlertCircle className="w-6 h-6 text-amber-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Accidente de trabajo</h3>
                <p className="text-[#A0A0B8] text-sm leading-relaxed">
                  No siempre cubierto como accidente laboral. ¿Tienes protección por incapacidad 
                  temporal cuando no puedes trabajar?
                </p>
              </div>
              <div className="rounded-2xl border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] backdrop-blur-sm p-6 hover:border-[rgba(99,91,255,0.4)] transition-all">
                <div className="w-12 h-12 rounded-xl bg-[rgba(99,91,255,0.2)] flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-[#A78BFA]" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Responsabilidad civil</h3>
                <p className="text-[#A0A0B8] text-sm leading-relaxed">
                  Un error profesional puede costarte miles. ¿Estás cubierto ante reclamaciones 
                  de clientes o terceros?
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECCIÓN 4: FOTO EQUIPO */}
        <section className="py-24 bg-[#0F0F1A]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <Image 
                  src="/images/rosa_y_sebastian.jpeg" 
                  alt="Rosa y Sebastián - Tu equipo de autónomos Madrid"
                  width={600}
                  height={750}
                  className="rounded-3xl object-cover w-full shadow-[0_0_60px_rgba(99,91,255,0.15)]"
                  priority
                />
              </div>
              <div className="max-w-xl">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[rgba(99,91,255,0.3)] bg-[rgba(99,91,255,0.1)] text-[#A78BFA] text-sm mb-6">
                  <Users className="w-4 h-4" />
                  Tu equipo personal
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-6 leading-tight">
                  "Llevamos <span className="font-semibold text-[#A78BFA]">+10 años</span> ayudando a autónomos como tú"
                </h2>
                <p className="text-lg text-[#A0A0B8] font-light leading-relaxed mb-6">
                  Rosa Valentín y Sebastián son tus gestores personales. No un call center, 
                  no un operador diferente cada vez. Siempre la misma persona que conoce 
                  tu situación y responde en 30 minutos.
                </p>
                <div className="flex items-center gap-4 text-sm text-[#A0A0B8]">
                  <span className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#635BFF]" />
                    Boadilla del Monte
                  </span>
                  <span className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#635BFF]" />
                    Atención presencial y online
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECCIÓN 5: COBERTURAS */}
        <section className="py-24 bg-[#0A0A1A]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-6">
                Coberturas diseñadas para <span className="text-[#A78BFA]">autónomos</span>
              </h2>
              <p className="text-lg text-[#A0A0B8] font-light">
                Todo deducible en tu IRPF. Todo gestionado por tu asesor personal.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="rounded-2xl border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] backdrop-blur-sm p-6 hover:border-[rgba(99,91,255,0.4)] hover:bg-[rgba(99,91,255,0.05)] transition-all group">
                <div className="w-12 h-12 rounded-xl bg-[rgba(99,91,255,0.2)] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <HeartPulse className="w-6 h-6 text-[#A78BFA]" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Baja laboral</h3>
                <p className="text-[#A0A0B8] text-sm mb-4">Cubre incapacidad temporal. 100% deducible IRPF.</p>
                <div className="flex items-center gap-2 text-[#635BFF] text-sm font-medium">
                  <TrendingUp className="w-4 h-4" />
                  Hasta 500€/año
                </div>
              </div>
              
              <div className="rounded-2xl border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] backdrop-blur-sm p-6 hover:border-[rgba(99,91,255,0.4)] hover:bg-[rgba(99,91,255,0.05)] transition-all group">
                <div className="w-12 h-12 rounded-xl bg-[rgba(99,91,255,0.2)] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Shield className="w-6 h-6 text-[#A78BFA]" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">RC Profesional</h3>
                <p className="text-[#A0A0B8] text-sm mb-4">Errores profesionales cubiertos. Protege tu patrimonio.</p>
                <div className="flex items-center gap-2 text-[#635BFF] text-sm font-medium">
                  <CheckCircle2 className="w-4 h-4" />
                  Sin límite reclamaciones
                </div>
              </div>
              
              <div className="rounded-2xl border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] backdrop-blur-sm p-6 hover:border-[rgba(99,91,255,0.4)] hover:bg-[rgba(99,91,255,0.05)] transition-all group">
                <div className="w-12 h-12 rounded-xl bg-[rgba(99,91,255,0.2)] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <AlertCircle className="w-6 h-6 text-[#A78BFA]" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Accidentes</h3>
                <p className="text-[#A0A0B8] text-sm mb-4">Gastos médicos e incapacidad. Desde 3€/mes.</p>
                <div className="flex items-center gap-2 text-[#635BFF] text-sm font-medium">
                  <Wallet className="w-4 h-4" />
                  Precio accesible
                </div>
              </div>
              
              <div className="rounded-2xl border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] backdrop-blur-sm p-6 hover:border-[rgba(99,91,255,0.4)] hover:bg-[rgba(99,91,255,0.05)] transition-all group">
                <div className="w-12 h-12 rounded-xl bg-[rgba(99,91,255,0.2)] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Briefcase className="w-6 h-6 text-[#A78BFA]" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Decesos</h3>
                <p className="text-[#A0A0B8] text-sm mb-4">Capital para tu familia. Sin preocuparles.</p>
                <div className="flex items-center gap-2 text-[#635BFF] text-sm font-medium">
                  <Users className="w-4 h-4" />
                  Protege a los tuyos
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECCIÓN 6: GARANTÍAS */}
        <section className="py-24 bg-[#0F0F1A]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-6">
                Garantías que <span className="text-[#A78BFA]">cumplimos</span>
              </h2>
            </div>
            
            <div className="max-w-2xl mx-auto space-y-6">
              {[
                { icon: CheckCircle2, text: "Sin permanencia. Cancela cuando quieras." },
                { icon: Clock, text: "Revisión anual gratuita de tu cobertura." },
                { icon: Users, text: "Gestor personal para siempre. No cambias de asesor." },
                { icon: FileCheck, text: "DGSFP: C012479234434D. Mediador regulado." },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-xl border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)]">
                  <div className="w-10 h-10 rounded-lg bg-[rgba(99,91,255,0.2)] flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-[#A78BFA]" />
                  </div>
                  <p className="text-white font-light text-lg">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECCIÓN 7: FAQ */}
        <section className="py-24 bg-[#0A0A1A]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-light text-white mb-12 text-center">
                Preguntas <span className="text-[#A78BFA]">frecuentes</span>
              </h2>
              
              <div className="space-y-4">
                {[
                  { q: "¿Puedo deducirme el seguro médico en el IRPF?", a: "Sí. Como autónomo puedes deducirte hasta 500€ anuales en el IRPF por tu seguro médico, y hasta 500€ más por cónyuge e hijos menores de 25 años. En total hasta 2.000€ si tienes familia numerosa." },
                  { q: "¿Cuánto cuesta un seguro médico para autónomos?", a: "El precio varía según tu edad y coberturas. En nuestra consulta gratuita analizamos tu situación y buscamos la mejor opción para tu perfil concreto, comparando entre las principales compañías." },
                  { q: "¿Qué seguro necesita un autónomo en Madrid?", a: "Como mínimo: seguro de salud privado (deducible en IRPF), seguro de accidentes con incapacidad temporal, y responsabilidad civil profesional según tu actividad." },
                  { q: "¿Hay permanencia en el seguro?", a: "No. Las pólizas que gestionamos no tienen permanencia. Puedes cancelar cuando quieras sin penalización." },
                ].map((faq, i) => (
                  <details key={i} className="group rounded-xl border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] overflow-hidden">
                    <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-[rgba(255,255,255,0.06)] transition-colors">
                      <span className="font-medium text-white pr-4">{faq.q}</span>
                      <ArrowRight className="w-5 h-5 text-[#A0A0B8] group-open:rotate-90 transition-transform flex-shrink-0" />
                    </summary>
                    <div className="px-6 pb-6 text-[#A0A0B8] leading-relaxed">
                      {faq.a}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECCIÓN 8: CTA FINAL */}
        <section className="bg-gradient-to-br from-[#635BFF] via-[#7C3AED] to-[#0A0A1A] py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-6">
              Protege tu negocio <span className="font-semibold">hoy</span>
            </h2>
            <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
              Un WhatsApp. Cotización personalizada en 30 minutos. Sin compromiso.
            </p>
            <a href={wCotiza} className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-xl bg-white text-[#635BFF] font-semibold text-lg hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] transition-all duration-300 hover:scale-[1.02] mb-8">
              <WhatsAppIcon className="w-6 h-6" />
              Cotiza tu seguro ahora
            </a>
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/60">
              <span className="flex items-center gap-2">
                <FileCheck className="w-4 h-4" />
                NIF: 79234434D
              </span>
              <span className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                DGSFP: C012479234434D
              </span>
            </div>
          </div>
        </section>

      </main>
      
      {/* STICKY BAR MÓVIL */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-[rgba(10,10,26,0.95)] backdrop-blur-xl border-t border-[rgba(99,91,255,0.2)] md:hidden">
        <a href={wCotiza} className="flex items-center justify-center gap-3 w-full py-4 rounded-xl bg-gradient-to-r from-[#635BFF] to-[#7C3AED] text-white font-medium">
          <WhatsAppIcon className="w-5 h-5" />
          Cotizar seguro ahora
        </a>
      </div>
      
      <div className="hidden md:block">
        <Footer />
      </div>
      <StickyWhatsApp />
    </>
  );
}
