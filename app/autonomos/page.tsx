import { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { StickyWhatsApp } from "@/components/sticky-whatsapp";
import { site, buildWhatsAppHref } from "@/lib/products";
import { 
  Phone, 
  CheckCircle2, 
  Shield, 
  Briefcase, 
  Heart, 
  Scale, 
  Clock,
  Users,
  Gift,
  ChevronDown,
  ChevronUp,
  BadgeCheck
} from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Seguros Autónomos Madrid | Valentín Protección Integral",
  description: "Protege tu actividad como autónomo en Madrid. Salud, accidentes, RC y más. Asesoría gratuita sin compromiso. ☎ 603 44 87 65",
  keywords: "seguro autónomos Madrid, seguro autónomo salud, seguro RC autónomos, protección autónomos Madrid",
  openGraph: {
    title: "Seguros para Autónomos en Madrid — Asesoría Gratuita",
    description: "Protege tu actividad como autónomo en Madrid. Salud, accidentes, RC y más. Asesoría gratuita sin compromiso.",
    url: "https://www.valentinproteccionintegral.com/autonomos",
    siteName: "Valentín Protección Integral",
    locale: "es_ES",
    type: "website",
    images: [{ url: "https://www.valentinproteccionintegral.com/images/rosa_y_sebastian.jpeg", alt: "Rosa y Sebastián Valentín - Asesores de seguros para autónomos en Madrid" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Seguros Autónomos Madrid | Valentín Protección Integral",
    description: "Protege tu actividad como autónomo en Madrid. Salud, accidentes, RC y más. Asesoría gratuita sin compromiso.",
  },
  alternates: {
    canonical: "https://www.valentinproteccionintegral.com/autonomos",
  },
};

// FAQ data con Schema
const faqs = [
  {
    question: "¿Qué seguros necesita un autónomo en Madrid?",
    answer: "Como mínimo, un autónomo debería tener: seguro de salud (para acceder a la sanidad privada sin esperas), responsabilidad civil (para cubrir daños a terceros en tu actividad), y accidentes de trabajo. Muchos también contratan protección jurídica y vida para proteger a su familia.",
  },
  {
    question: "¿Puedo deducirme el seguro de salud siendo autónomo?",
    answer: "Sí. La ley permite deducirte hasta 500€ anuales por cada persona asegurada (tú, tu pareja y cada hijo). Esto significa que una familia de cuatro puede deducir hasta 2.000€ al año en la declaración del IRPF.",
  },
  {
    question: "¿Es obligatorio el seguro de RC para autónomos?",
    answer: "Depende de tu actividad. Algunos sectores como la construcción, consultoría o transporte lo requieren por ley o por los contratos con clientes. Aunque no sea obligatorio para tu sector, es altamente recomendable: una reclamación puede arruinar tu negocio.",
  },
  {
    question: "¿Cuánto cuesta un seguro para autónomos?",
    answer: "El precio varía según coberturas y edad. Un seguro de salud básico empieza en 30-40€/mes. La RC profesional desde 150-300€/año. Accidentes desde 100€/año. Te preparamos un presupuesto personalizado sin compromiso en una llamada.",
  },
  {
    question: "¿Puedo contratar seguros para mis empleados siendo autónomo?",
    answer: "Sí, si tienes trabajadores a tu cargo puedes contratar seguros de salud y accidentes para ellos. Estas primas son gastos deducibles de tu actividad económica, además de mejorar la retención de talento en tu equipo.",
  },
];

// FAQ Schema para SEO
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
};

// Service Schema
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Seguros para Autónomos en Madrid",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Valentín Protección Integral",
    "url": "https://www.valentinproteccionintegral.com",
    "telephone": "+34603448765",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Boadilla del Monte",
      "addressRegion": "Madrid",
      "addressCountry": "ES"
    },
    "areaServed": {
      "@type": "City",
      "name": "Madrid"
    },
    "identifier": {
      "@type": "PropertyValue",
      "name": "Registro DGSFP",
      "value": "C012479234434D"
    },
    "taxID": "79234434D"
  },
  "audience": {
    "@type": "BusinessAudience",
    "audienceType": "Autónomos y pequeñas empresas"
  },
  "serviceType": "Asesoramiento de seguros",
  "description": "Protege tu actividad como autónomo en Madrid. Salud, accidentes, RC y más. Asesoría gratuita sin compromiso.",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "EUR",
    "description": "Asesoría gratuita sin compromiso"
  }
};

export const dynamic = "force-static";

export default function AutonomosPage() {
  return (
    <>
      {/* Schema JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      
      <BreadcrumbSchema
        items={[
          { name: "Inicio", url: "/" },
          { name: "Autónomos", url: "/autonomos" },
        ]}
      />
      
      <Header />
      
      {/* Sticky Banner - visible en móvil */}
      <div className="sticky top-[68px] z-40 w-full bg-[#1a2744] text-white py-2.5 px-4 shadow-lg lg:hidden">
        <div className="container mx-auto max-w-5xl flex items-center justify-between gap-3">
          <p className="text-sm font-semibold leading-tight flex-1">
            <span className="sm:hidden">Consulta gratuita para autónomos</span>
            <span className="hidden sm:inline">Asesoría gratuita para autónomos en 24h</span>
          </p>
          <a
            href={buildWhatsAppHref("Hola, soy autónomo y quiero información sobre seguros.")}
            className="flex-none bg-[#2d8653] hover:bg-[#236b42] text-white text-sm font-bold px-4 py-2 rounded-full transition-colors flex items-center gap-1.5"
          >
            <WhatsAppIcon className="h-4 w-4" />
            WhatsApp
          </a>
        </div>
      </div>

      <main>
        {/* Breadcrumbs */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 pt-4 pb-2">
          <Breadcrumbs items={[{ label: 'Inicio', href: '/' }, { label: 'Seguros para Autónomos' }]} />
        </div>

        {/* 1. HERO */}
        <section className="relative bg-[#1a2744] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a2744] via-[#243352] to-[#1a2744]" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-16 lg:py-24 relative z-10">
            <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-10 lg:gap-16 items-center">
              {/* Texto */}
              <div>
                {/* Badge Sin permanencia */}
                <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/90 text-sm font-medium px-4 py-2 rounded-full mb-6">
                  <BadgeCheck className="h-4 w-4 text-[#2d8653]" />
                  Sin permanencia · Cancela cuando quieras
                </div>
                
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
                  Seguros para Autónomos en Madrid — <span className="text-[#2d8653]">Asesoría Gratuita</span>
                </h1>
                
                <p className="mt-6 text-lg lg:text-xl text-white/80 leading-relaxed max-w-2xl">
                  Protege tu salud, tu negocio y tu familia. Como autónomo, un accidente o una baja puede poner en riesgo todo lo que has construido. Te ayudamos a cubrirte sin complicaciones.
                </p>
                
                {/* CTA WhatsApp */}
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <a
                    href={buildWhatsAppHref("Hola, soy autónomo y quiero información sobre seguros.")}
                    className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe57] text-white text-lg font-bold px-8 py-4 rounded-full transition-all shadow-lg hover:shadow-xl"
                  >
                    <WhatsAppIcon className="h-6 w-6" />
                    Consulta gratuita
                  </a>
                  <a
                    href={`tel:${site.phoneHref}`}
                    className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white text-lg font-semibold px-8 py-4 rounded-full border border-white/30 transition-all"
                  >
                    <Phone className="h-5 w-5" />
                    {site.phone}
                  </a>
                </div>
                
                {/* Badge promocional */}
                <div className="mt-6 inline-flex items-center gap-2 bg-[#2d8653]/20 border border-[#2d8653]/30 text-[#7dd3a8] text-sm font-medium px-4 py-2 rounded-lg">
                  <Gift className="h-4 w-4" />
                  🎁 Contrata Salud + Accidentes → gestión de primera reclamación gratis
                </div>
              </div>
              
              {/* Imagen Hero */}
              <div className="hidden lg:block relative">
                <div className="relative h-[420px] xl:h-[480px] rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                  <Image
                    src="/images/pexels/pexels-autonomo-hero.jpg"
                    alt="Autónomo trabajando desde casa en Madrid - Seguros para autónomos"
                    fill
                    priority
                    sizes="(max-width: 1280px) 40vw, 480px"
                    quality={85}
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a2744]/60 to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. PROBLEMAS - 3 riesgos reales */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1a2744]">
                Sin la protección adecuada, estás expuesto a…
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
              {/* Problema 1: Baja por enfermedad */}
              <div className="bg-[#f8fafc] border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center mb-6">
                  <Heart className="h-7 w-7 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-[#1a2744] mb-3">
                  Baja por enfermedad
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Sin seguro de salud, dependes exclusivamente de la Seguridad Social. Las listas de espera pueden hacer que una dolencia menor se convierta en un problema grave, afectando a tu capacidad de trabajar.
                </p>
              </div>
              
              {/* Problema 2: Accidente laboral */}
              <div className="bg-[#f8fafc] border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
                  <Briefcase className="h-7 w-7 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-[#1a2744] mb-3">
                  Accidente laboral
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Como autónomo, una lesión que te impida trabajar significa cero ingresos. Sin un seguro de accidentes o incapacidad, no tendrás cobertura económica durante tu recuperación.
                </p>
              </div>
              
              {/* Problema 3: Responsabilidad civil */}
              <div className="bg-[#f8fafc] border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                  <Scale className="h-7 w-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-[#1a2744] mb-3">
                  Responsabilidad civil
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Un error profesional o un daño a un cliente puede generar una reclamación económica que ponga en riesgo tu patrimonio personal. La RC te protege de estas situaciones.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. SOLUCIÓN - Qué cubre exactamente */}
        <section className="py-16 lg:py-24 bg-[#f1f5f9]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1a2744]">
                La protección completa para tu actividad
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Te ayudamos a configurar el paquete de seguros que se adapta a tu actividad y presupuesto
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6 max-w-7xl mx-auto">
              {/* Salud */}
              <div className="bg-white rounded-xl p-6 border border-gray-200 hover:border-[#2d8653]/50 hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="font-bold text-[#1a2744] mb-2">Salud</h3>
                <p className="text-sm text-gray-600">Médico privado, especialistas y urgencias sin esperas. Deducible en IRPF.</p>
              </div>
              
              {/* Accidentes */}
              <div className="bg-white rounded-xl p-6 border border-gray-200 hover:border-[#2d8653]/50 hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Briefcase className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="font-bold text-[#1a2744] mb-2">Accidentes</h3>
                <p className="text-sm text-gray-600">Cobertura por lesiones que impidan trabajar. Indemnización diaria o capital.</p>
              </div>
              
              {/* RC Profesional */}
              <div className="bg-white rounded-xl p-6 border border-gray-200 hover:border-[#2d8653]/50 hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-bold text-[#1a2744] mb-2">RC Profesional</h3>
                <p className="text-sm text-gray-600">Protege tu patrimonio ante reclamaciones de terceros por daños en tu actividad.</p>
              </div>
              
              {/* Vida */}
              <div className="bg-white rounded-xl p-6 border border-gray-200 hover:border-[#2d8653]/50 hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="font-bold text-[#1a2744] mb-2">Vida</h3>
                <p className="text-sm text-gray-600">Protege a tu familia si algo te pasara. Capital para mantener su calidad de vida.</p>
              </div>
              
              {/* Protección Jurídica */}
              <div className="bg-white rounded-xl p-6 border border-gray-200 hover:border-[#2d8653]/50 hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <Scale className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="font-bold text-[#1a2744] mb-2">Protección Jurídica</h3>
                <p className="text-sm text-gray-600">Abogado y gestoría para reclamaciones, contratos y conflictos laborales o fiscales.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. GARANTÍA + FOTO ROSA Y SEBASTIÁN */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-16 items-center max-w-6xl mx-auto">
              {/* Foto */}
              <div className="relative">
                <div className="relative aspect-[4/5] max-w-md mx-auto lg:mx-0 rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/rosa_y_sebastian.jpeg"
                    alt="Rosa y Sebastián Valentín - Asesores de seguros para autónomos en Madrid"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 400px"
                    quality={85}
                    className="object-cover"
                  />
                </div>
                {/* Badge experiencia */}
                <div className="absolute -bottom-4 -right-4 lg:right-auto lg:-left-4 bg-[#1a2744] text-white px-6 py-3 rounded-xl shadow-lg">
                  <p className="text-2xl font-bold">+10 años</p>
                  <p className="text-sm text-white/80">asesorando autónomos</p>
                </div>
              </div>
              
              {/* Texto garantía */}
              <div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1a2744] mb-6">
                  Hablas con Rosa o Sebastián, no con un call center
                </h2>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-[#2d8653]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Clock className="h-4 w-4 text-[#2d8653]" />
                    </div>
                    <div>
                      <p className="font-semibold text-[#1a2744]">Asesoría gratuita en 24h</p>
                      <p className="text-gray-600 text-sm">Te respondemos el mismo día. Sin esperas, sin burocracia.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-[#2d8653]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="h-4 w-4 text-[#2d8653]" />
                    </div>
                    <div>
                      <p className="font-semibold text-[#1a2744]">Sin compromiso</p>
                      <p className="text-gray-600 text-sm">Te explicamos todas las opciones. Tú decides cuándo y si contratar.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-[#2d8653]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Shield className="h-4 w-4 text-[#2d8653]" />
                    </div>
                    <div>
                      <p className="font-semibold text-[#1a2744]">Correduría independiente</p>
                      <p className="text-gray-600 text-sm">No trabajamos para ninguna aseguradora. Buscamos lo mejor para ti.</p>
                    </div>
                  </div>
                </div>
                
                {/* Datos regulatorios */}
                <div className="bg-[#f1f5f9] rounded-xl p-4 mb-6">
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold text-[#1a2744]">NIF:</span> 79234434D · 
                    <span className="font-semibold text-[#1a2744]"> Registro DGSFP:</span> C012479234434D
                  </p>
                </div>
                
                <a
                  href={buildWhatsAppHref("Hola, soy autónomo y quiero que me asesoreis sobre seguros.")}
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "h-14 px-8 text-lg font-bold bg-[#25D366] hover:bg-[#1ebe57] text-white gap-2 inline-flex items-center rounded-full"
                  )}
                >
                  <WhatsAppIcon className="h-5 w-5" />
                  Hablar con un asesor
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 5. FAQ */}
        <section className="py-16 lg:py-24 bg-[#f1f5f9]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1a2744] text-center mb-12">
                Preguntas frecuentes de autónomos
              </h2>
              
              <div className="space-y-4">
                {faqs.map((faq, idx) => (
                  <details 
                    key={idx} 
                    className="group bg-white rounded-xl border border-gray-200 overflow-hidden [&_summary::-webkit-details-marker]:hidden"
                  >
                    <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 transition-colors">
                      <h3 className="font-semibold text-[#1a2744] pr-4">{faq.question}</h3>
                      <div className="flex-shrink-0 w-8 h-8 bg-[#1a2744]/5 rounded-full flex items-center justify-center group-open:bg-[#1a2744] group-open:text-white transition-colors">
                        <ChevronDown className="h-5 w-5 group-open:hidden" />
                        <ChevronUp className="h-5 w-5 hidden group-open:block" />
                      </div>
                    </summary>
                    <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 6. CTA FINAL */}
        <section className="py-16 lg:py-24 bg-[#1a2744]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
              Protege tu actividad hoy mismo
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Una llamada de 10 minutos puede ahorrarte problemas y dinero. Asesoría gratuita, sin compromiso.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
              <a
                href={buildWhatsAppHref("Hola, soy autónomo y quiero información sobre seguros.")}
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe57] text-white text-lg font-bold px-10 py-5 rounded-full transition-all shadow-lg hover:shadow-xl"
              >
                <WhatsAppIcon className="h-6 w-6" />
                WhatsApp: Consulta gratuita
              </a>
              <a
                href={`tel:${site.phoneHref}`}
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white text-lg font-semibold px-10 py-5 rounded-full border border-white/30 transition-all"
              >
                <Phone className="h-5 w-5" />
                {site.phone}
              </a>
            </div>
            
            <p className="text-white/60 text-sm">
              NIF: 79234434D · Registro DGSFP: C012479234434D
            </p>
          </div>
        </section>
      </main>

      <Footer />
      <StickyWhatsApp />
    </>
  );
}
