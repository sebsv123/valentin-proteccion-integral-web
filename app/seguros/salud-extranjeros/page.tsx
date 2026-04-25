import type { Metadata } from "next";
import Image from "next/image";
import { StickyWhatsApp } from "@/components/sticky-whatsapp";
import { buildWhatsAppHref } from "@/lib/products";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { FAQChat } from "@/components/faq-chat";
import GuaranteeBadge from "@/components/GuaranteeBadge";
import GarantiasSection from "@/components/GarantiasSection";
import GoogleReviewsWidget from "@/components/GoogleReviewsWidget";
import { Globe, CheckCircle2, ArrowRight, Shield, Heart, FileCheck, Check, FileText, Phone } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";

export const metadata: Metadata = {
  title: "Seguro de Salud para Extranjeros en Madrid | Valentín",
  description: "Seguro médico para extranjeros en España listo en 24 horas. Cobertura completa, gestión sencilla y atención personalizada desde el primer día.",
  keywords: ["seguro médico NIE España","seguro residencia Madrid latinos 2026","seguro médico extranjeros","NIE TIE seguro Madrid","seguro extranjería España"],
  alternates: { canonical: "https://valentinproteccionintegral.com/seguros/salud-extranjeros" },
  openGraph: {
    title: "Seguro de Salud para Extranjeros en Madrid | Valentín",
    description: "Seguro médico para extranjeros en España listo en 24 horas. Cobertura completa, gestión sencilla y atención personalizada desde el primer día.",
    url: "https://valentinproteccionintegral.com/seguros/salud-extranjeros",
    siteName: "Valentín Protección Integral",
    locale: "es_ES",
    type: "website",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "name": "Seguro Médico NIE/TIE Extranjeros Madrid - Valentín Protección Integral",
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
  "description": "Seguro médico residencia España 2026. Cumple requisitos NIE/TIE. +100 clientes latinos/EEUU aprobados. Certificado 24h.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Necesito NIE para contratar el seguro de salud?",
      "acceptedAnswer": { "@type": "Answer", "text": "No siempre es obligatorio. Te asesoramos según tu situación particular. Algunas modalidades permiten contratación con pasaporte. Escríbenos por WhatsApp y estudiamos tu caso en 30 minutos." }
    },
    {
      "@type": "Question",
      "name": "Do I need to speak Spanish?",
      "acceptedAnswer": { "@type": "Answer", "text": "No, we speak English. Rosa and Sebastián can assist you in English throughout the entire process." }
    },
    {
      "@type": "Question",
      "name": "¿Cuándo empieza la cobertura?",
      "acceptedAnswer": { "@type": "Answer", "text": "La cobertura comienza entre 24-48 horas después de la contratación, dependiendo de la compañía y modalidad elegida. Te explicamos los detalles específicos antes de contratar." }
    }
  ]
};

export const dynamic = "force-static";

export default function SaludExtranjerosPage() {
  const wExtranjeria = buildWhatsAppHref("Quiero mi seguro para extranjería");

  return (
    <>
      <BreadcrumbSchema items={[{name:"Inicio",url:"/"},{name:"Seguros",url:"/seguros"},{name:"Salud Extranjeros",url:"/seguros/salud-extranjeros"}]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(serviceSchema)}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(faqSchema)}} />
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex items-center justify-between h-16">
          <a href="/" className="font-bold text-[#163300] text-lg tracking-tight">
            Valentín <span className="text-emerald-600">Protección Integral</span>
          </a>
          <a
            href="https://wa.me/34603448765"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all"
          >
            Cotizar ahora
          </a>
        </div>
      </header>
      <main className="min-h-screen bg-white pt-16">
        
        {/* HERO — Despacho Serio / Autoridad */}
        <section className="relative min-h-[90vh] flex items-center bg-gray-900 overflow-hidden">
          {/* Fondo con imagen multicultural (recuperada) */}
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Seguro médico para extranjeros en España — NIE TIE visado consulado"
              fill
              className="object-cover opacity-30"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-900/40 to-transparent" />
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-7xl relative z-10 py-20">
            <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-16 items-center">
              <div>
                <div className="flex flex-wrap gap-2 mb-8">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold border border-emerald-500/30">
                    <Shield className="w-3 h-3" />
                    Garantía de Aceptación Administrativa
                  </div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/20 text-amber-400 text-xs font-bold border border-amber-500/30">
                    <Globe className="w-3 h-3" />
                    Fast Track 24h: Gestión Urgente
                  </div>
                </div>
                
                <h1 className="text-[40px] sm:text-[60px] font-bold text-white leading-[1.1] tracking-tight mb-6">
                  Seguro de salud para extranjeros en España <span className="text-emerald-400">aprobado para visado</span>
                </h1>

                <p className="text-xl sm:text-2xl text-white/80 leading-relaxed mb-10 max-w-2xl">
                  Sin copagos. Sin complicaciones. Listo para presentar en extranjería en 24h.
                </p>

                <div className="flex flex-col gap-3 mb-12">
                  <div className="flex flex-wrap gap-4">
                    <a
                      href={wExtranjeria}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 bg-emerald-500 hover:bg-emerald-400 text-gray-950 px-8 py-5 rounded-2xl text-lg font-bold transition-all shadow-xl shadow-emerald-500/20"
                    >
                      <WhatsAppIcon className="w-6 h-6" />
                      Quiero mi seguro para extranjería
                    </a>
                    <div className="flex items-center gap-3 px-6 py-4">
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                        <Phone className="w-5 h-5 text-emerald-400" />
                      </div>
                      <div>
                        <p className="text-white font-bold leading-none italic">Respuesta en menos de 10 min</p>
                        <p className="text-white/50 text-sm mt-1">Horario laboral</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-6 pt-8 border-t border-white/10">
                  <div className="flex items-center gap-2 text-white/70 font-medium text-sm">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    Válido para NIE / TIE / visado
                  </div>
                  <div className="flex items-center gap-2 text-white/70 font-medium text-sm">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    +1.200 familias ya protegidas
                  </div>
                  <div className="flex items-center gap-2 text-white/70 font-medium text-sm">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    Asesor personal directo
                  </div>
                </div>
              </div>

              {/* Tarjeta tipo "Documento Oficial" */}
              <div className="hidden lg:block relative">
                <div className="absolute inset-0 bg-emerald-600/5 rounded-[40px] blur-3xl" />
                <div className="relative bg-white border border-slate-200 rounded-[32px] p-10 shadow-2xl transform rotate-2">
                  <div className="absolute top-8 right-8">
                    <div className="w-16 h-16 rounded-full bg-slate-50 border-4 border-white shadow-inner flex items-center justify-center overflow-hidden opacity-20">
                      <Globe className="w-10 h-10 text-slate-400" />
                    </div>
                  </div>
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 rounded-xl bg-emerald-600 flex items-center justify-center shadow-lg shadow-emerald-600/30">
                      <FileCheck className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Certificado Oficial</p>
                      <p className="text-lg font-bold text-slate-900">Validez Consular</p>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div className="h-2 w-3/4 bg-slate-100 rounded-full" />
                    <div className="h-2 w-full bg-slate-100 rounded-full" />
                    <div className="h-2 w-5/6 bg-slate-100 rounded-full" />
                    <div className="pt-4 grid grid-cols-2 gap-4">
                      <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 text-center">
                        <p className="text-[10px] font-bold text-slate-400 uppercase">Sin Copagos</p>
                        <p className="text-emerald-600 font-bold text-sm">CUMPLIDO</p>
                      </div>
                      <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 text-center">
                        <p className="text-[10px] font-bold text-slate-400 uppercase">Carencias</p>
                        <p className="text-emerald-600 font-bold text-sm">0 DÍAS</p>
                      </div>
                    </div>
                    <div className="pt-6 border-t border-dashed border-slate-200 text-center">
                      <p className="text-[10px] font-bold text-slate-400 uppercase mb-2">Sello de aprobación</p>
                      <div className="w-20 h-20 border-4 border-emerald-100 rounded-full mx-auto flex items-center justify-center">
                        <Check className="w-10 h-10 text-emerald-200" />
                      </div>
                    </div>
                  </div>
                </div>
                {/* Decoración extra */}
                <div className="absolute -bottom-6 -left-6 bg-white border border-slate-200 rounded-2xl p-4 shadow-xl flex items-center gap-3 animate-bounce-soft">
                  <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-sm font-bold text-slate-700">Listo en 24h</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROCESO SENCILLO — 3 pasos Wise (Conversión Inmediata) */}
        <section className="py-24 bg-white border-b border-slate-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl">
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-600 text-sm font-bold mb-4">
                Agilidad Máxima
              </div>
              <h2 className="text-[32px] sm:text-[44px] font-bold text-slate-900 mb-4">
                Lo tienes en 3 pasos
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-12 relative">
              {/* Línea decorativa entre pasos en desktop */}
              <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-px bg-slate-100 z-0" />
              
              {[
                { num: "01", title: "Escríbenos por WhatsApp", desc: "Rosa o Sebastián te atienden personalmente. Sin centralitas." },
                { num: "02", title: "Recibes opciones en minutos", desc: "Comparamos y te enviamos la mejor póliza para tu visado." },
                { num: "03", title: "Listo para presentar", desc: "Firmas digitalmente y recibes tu certificado oficial en 24h." }
              ].map((paso, i) => (
                <div key={i} className="relative z-10 text-center">
                  <div className="w-20 h-20 rounded-full bg-white border-2 border-emerald-500 text-emerald-600 flex items-center justify-center text-2xl font-black mx-auto mb-6 shadow-xl shadow-emerald-500/10">
                    {paso.num}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{paso.title}</h3>
                  <p className="text-slate-500 leading-relaxed">{paso.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <a
                href={wExtranjeria}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#163300] hover:bg-black text-white px-10 py-5 rounded-2xl text-xl font-bold transition-all shadow-xl"
              >
                <WhatsAppIcon className="w-6 h-6" />
                Quiero mi seguro para extranjería
              </a>
              <p className="mt-4 text-slate-500 text-sm italic font-medium">Respuesta en menos de 10 minutos (horario laboral)</p>
            </div>
          </div>
        </section>

        {/* SORPRESA 1 — Checklist Lead Magnet */}
        <section className="py-20 bg-emerald-600 overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
          <div className="container mx-auto px-4 relative z-10 max-w-5xl">
            <div className="bg-white rounded-[32px] p-8 md:p-12 shadow-2xl flex flex-col md:flex-row items-center gap-10">
              <div className="flex-shrink-0 w-32 h-32 md:w-48 md:h-48 bg-emerald-50 rounded-3xl flex items-center justify-center border-4 border-emerald-100 shadow-inner">
                <FileText className="w-16 h-16 md:w-24 md:h-24 text-emerald-600" />
              </div>
              <div className="flex-grow text-center md:text-left">
                <div className="inline-block px-4 py-1 rounded-full bg-amber-100 text-amber-700 text-xs font-black uppercase tracking-widest mb-4">🎁 Recurso Gratuito</div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Checklist para aprobar tu visado sin errores</h2>
                <p className="text-lg text-slate-600 mb-8">Evita los 7 errores más comunes que provocan denegaciones en extranjería. Posiciónate como experto ante el consulado.</p>
                <a
                  href={buildWhatsAppHref("Hola, quiero la checklist gratuita para visado")}
                  className="inline-flex items-center gap-3 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg shadow-emerald-600/20"
                >
                  Descargar Checklist (PDF) por WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* GARANTÍAS NUCLEARES — Rompiendo Objeciones */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-[32px] sm:text-[44px] font-bold text-slate-900 mb-4">
                Tu tranquilidad es nuestra prioridad
              </h2>
              <p className="text-lg text-slate-500 max-w-2xl mx-auto">
                No vendemos solo un seguro, vendemos el resultado de tu trámite.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Devolución Garantizada",
                  desc: "Si tu seguro no es válido para tu trámite de extranjería, te devolvemos el dinero sin preguntas.",
                  icon: <Shield className="w-8 h-8 text-emerald-600" />
                },
                {
                  title: "Acompañamiento Total",
                  desc: "Te acompañamos hasta que tu documentación esté presentada y aceptada correctamente.",
                  icon: <Heart className="w-8 h-8 text-emerald-600" />
                },
                {
                  title: "Transparencia Absoluta",
                  desc: "Sin permanencias ocultas, sin letra pequeña y sin sorpresas en la renovación.",
                  icon: <FileCheck className="w-8 h-8 text-emerald-600" />
                }
              ].map((g, i) => (
                <div key={i} className="p-10 rounded-[32px] bg-slate-50 border border-slate-100 hover:border-emerald-200 transition-all shadow-sm hover:shadow-xl group">
                  <div className="mb-6 w-16 h-16 rounded-2xl bg-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                    {g.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{g.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{g.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl">
            <div className="bg-[#163300] rounded-[40px] p-8 md:p-16 text-white overflow-hidden relative shadow-2xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -mr-32 -mt-32" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-400/5 rounded-full blur-3xl -ml-32 -mb-32" />

              <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-300 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-emerald-500/30">
                    <Shield className="w-4 h-4" />
                    Validación Técnica Superior
                  </div>
                  <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
                    Estándares legales para tu visado
                  </h2>
                  <p className="text-emerald-100/80 text-lg mb-8 leading-relaxed">
                    Gestionamos pólizas de salud de grado residencial que cumplen con los requisitos de seguro exigidos para trámites de extranjería en España.
                  </p>
                  
                  <div className="space-y-6">
                    {[
                      { t: "Grado de Sanidad Pública", d: "Sin exclusiones, equivalente a la Seguridad Social." },
                      { t: "Sin Copagos", d: "Acceso total a medicina y especialistas sin abonos extra por consulta." },
                      { t: "Cobertura de Repatriación", d: "Punto crítico valorado por todas las oficinas de extranjería." },
                      { t: "Vigencia Documental", d: "Certificados oficiales listos para presentar en menos de 24h." }
                    ].map((item, i) => (
                      <div key={i} className="flex gap-4">
                        <div className="mt-1">
                          <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center">
                            <Check className="w-4 h-4 text-[#163300]" />
                          </div>
                        </div>
                        <div>
                          <p className="font-bold text-white">{item.t}</p>
                          <p className="text-emerald-100/60 text-sm">{item.d}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-20 h-20 rounded-full bg-white text-[#163300] flex items-center justify-center mb-6 shadow-xl">
                      <FileText className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Garantía de Aceptación</h3>
                    <p className="text-emerald-100/70 mb-8 leading-relaxed text-sm">
                      Aunque la ley no exige el pago anual por escrito, la práctica administrativa en consulados y oficinas de extranjería lo ha convertido en el <strong>estándar de seguridad</strong> para evitar denegaciones por dudas sobre la vigencia del seguro.
                    </p>
                    <div className="w-full h-px bg-white/10 mb-8" />
                    <p className="text-xs font-medium text-emerald-400 uppercase tracking-widest leading-relaxed">
                      Pólizas adaptadas a los criterios técnicos de la normativa de extranjería vigente
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>



        {/* GARANTÍA RESPUESTA — Fondo diferenciado */}
        <section className="py-20 bg-gradient-to-br from-[#F0FAE5] via-[#E8F5E9] to-[#F1F8E9]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-4xl">
            <div className="bg-white rounded-3xl p-10 md:p-14 shadow-xl shadow-[#9FE870]/20 border border-[#C8E6C9]">
              <h2 className="text-[36px] sm:text-[44px] font-bold text-[#163300] leading-tight mb-6 text-center">
                ¿Y si no te respondemos en 30 minutos?
              </h2>
              
              <p className="text-xl text-[#4B5563] leading-relaxed mb-8 text-center max-w-2xl mx-auto">
                Rosa o Sebastián te llaman directamente.
                <br />
                Sin esperas. Sin centralitas. Sin excusas.
                <br />
                <span className="text-[#2E7D32] font-semibold">Nadie en el sector ofrece esta garantía. Nosotros sí.</span>
              </p>
              
              <div className="flex items-center justify-center gap-4 pt-4 border-t border-[#E5E7EB]">
                <div className="relative w-14 h-14 rounded-full overflow-hidden">
                  <Image
                    src="/images/rosa_y_sebastian.jpeg"
                    alt="Rosa Valentín"
                    fill
                    className="object-cover object-[center_20%]"
                  />
                </div>
                <div>
                  <p className="font-semibold text-[#163300]">Rosa y Sebastián</p>
                  <p className="text-sm text-[#4B5563]">Asesores Independientes · NIF 79234434D</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FOTO EQUIPO Wise cálido */}
        <section className="bg-[#F7F8F9] py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="rounded-3xl shadow-2xl overflow-hidden border border-[#E5E7EB]">
                <Image
                  src="/images/rosa_y_sebastian.jpeg"
                  alt="Rosa y Sebastián — Tu equipo en Madrid"
                  width={500}
                  height={500}
                  className="w-full h-auto object-cover object-[center_20%]"
                  style={{ aspectRatio: '1/1' }}
                />
              </div>
              <div>
                <p className="text-[#2E7D32] font-medium mb-3 uppercase tracking-widest text-sm">
                  Independencia y cercanía real
                </p>
                <h2 className="text-4xl font-semibold text-[#163300] leading-tight">
                  No trabajamos para una compañía.<br/>
                  Trabajamos para ti.
                </h2>
                <p className="text-[#4B5563] text-lg mt-6 leading-relaxed">
                  Sabemos lo importante que es esto porque tratamos cada semana con personas en tu misma situación. Encontrar el mejor <strong>seguro médico para visado en España</strong> no es cuestión de precio, sino de seguridad jurídica.
                </p>
                <p className="text-[#4B5563] text-lg mt-4 leading-relaxed font-medium">
                  Nuestro objetivo es que tú te centres en tu nueva vida en Madrid, mientras nosotros blindamos tu expediente ante extranjería.
                </p>
                {/* Trust badges */}
                {/* Trust badges */}
                <div className="flex gap-4 mt-8 flex-wrap">
                  <span className="bg-[#F0FAE5] border border-[#9FE870] text-[#163300] px-4 py-2 rounded-full text-sm">
                    ✓ DGSFP: C012479234434D
                  </span>
                  <span className="bg-[#F0FAE5] border border-[#9FE870] text-[#163300] px-4 py-2 rounded-full text-sm">
                    ✓ +1.200 clientes protegidos
                  </span>
                  <span className="bg-[#F0FAE5] border border-[#9FE870] text-[#163300] px-4 py-2 rounded-full text-sm">
                    ✓ English spoken
                  </span>
                </div>
                <WhatsAppButton 
                  href={wCotiza}
                  location="salud-extranjeros-garantias"
                  className="mt-8 inline-flex items-center gap-3 bg-[#163300] text-white px-8 py-4 rounded-xl font-medium hover:bg-[#1a3d00] transition-all"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                  Quiero mi seguro para extranjería
                </a>
                <p className="mt-3 text-slate-500 text-xs font-medium">Respuesta en menos de 10 min (horario laboral)</p>
              </div>
            </div>
          </div>
        </section>

        {/* EL VALOR DE LA TRANQUILIDAD — Banner de Autoridad */}
        <section className="py-24 bg-white overflow-hidden">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-emerald-50 rounded-[40px] -rotate-2" />
                <div className="relative aspect-square rounded-[32px] overflow-hidden shadow-2xl border-8 border-white">
                  <Image
                    src="https://images.pexels.com/photos/5920775/pexels-photo-5920775.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Gestión profesional de seguros para extranjeros"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div>
                <p className="text-emerald-600 font-bold uppercase tracking-widest text-sm mb-4">Efecto Despacho Serio</p>
                <h2 className="text-4xl font-bold text-slate-900 mb-6 leading-tight">
                  Alguien que ya lo ha hecho <span className="text-emerald-600">mil veces por ti</span>
                </h2>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  El éxito de un visado no depende solo de la póliza, sino de cómo se presenta la documentación. Rosa y Sebastián conocen los criterios específicos de cada consulado para que no pierdas tiempo ni dinero en denegaciones evitables.
                </p>
                <ul className="space-y-4">
                  {[
                    "Asesoramiento preventivo sobre requisitos de consulado",
                    "Certificados emitidos con la redacción exacta exigida",
                    "Soporte directo por WhatsApp en español e inglés",
                    "Gestión integral sin que tengas que desplazarte"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                      <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-emerald-600" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <FAQChat
          brandColor="emerald"
          title="Resolvemos tus dudas sobre el visado"
          subtitle="Información real, sin jerga técnica"
          items={[
            {
              q: "¿Qué cobertura exige el seguro salud extranjeros España?",
              a: "Para obtener el visado o residencia, se exige una póliza sin copagos, con hospitalización y cobertura de repatriación. Debe ser equivalente a la sanidad pública española. Nosotros solo tramitamos opciones que cumplen el 100% de estos requisitos."
            },
            {
              q: "¿Es válido este seguro médico visado España para el consulado?",
              a: "Sí, emitimos certificados específicos en español con la redacción exacta que pide el consulado. Nuestra tasa de aprobación es del 100% en expedientes de visado."
            },
            {
              q: "¿Necesito un seguro sin copagos extranjería?",
              a: "Rotundamente sí. Cualquier póliza con copagos será rechazada de inmediato por las oficinas de extranjería. Tramitamos únicamente seguros sin abonos extra por consulta."
            },
            {
              q: "¿Puedo contratar un seguro para NIE España con pasaporte?",
              a: "Sí. La mayoría de nuestros clientes inician el proceso con pasaporte para poder obtener precisamente el NIE o la TIE. Te asesoramos en el paso a paso."
            },
            {
              q: "¿Qué incluye la repatriación?",
              a: "Incluye el traslado sanitario o por fallecimiento hasta tu país de origen. Es una cobertura obligatoria por ley para extranjeros y nosotros la incluimos por defecto."
            },
            {
              q: "¿Hay pediatras incluidos?",
              a: "Sí, si viajas con familia, la póliza incluye pediatría y todas las especialidades desde el primer día, sin listas de espera."
            },
          ]}
        />

        {/* CTA SECTION — Certificado Residencia */}
        <section className="py-20 bg-[#F7F8F9]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#163300] mb-4">
              Presupuesto + Certificado Residencia
            </h2>
            <p className="text-lg text-[#4B5563] mb-8">
              Recibe tu póliza y certificado para extranjería en menos de 24 horas
            </p>
            <a 
              href={wExtranjeria}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#163300] hover:bg-[#1a3d00] text-white font-semibold px-10 py-5 rounded-2xl text-xl transition-all hover:scale-[1.02] shadow-xl"
            >
              <WhatsAppIcon className="w-6 h-6" />
              Quiero mi seguro para extranjería
            </a>
            <p className="mt-4 text-slate-500 text-sm font-medium">Respuesta en menos de 10 min (horario laboral)</p>
            <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-[#4B5563]">
              <span className="inline-flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4 text-[#2E7D32]" />
                seguro médico NIE España
              </span>
              <span className="inline-flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4 text-[#2E7D32]" />
                seguro residencia Madrid latinos 2026
              </span>
            </div>
            <p className="text-[#4B5563]/60 text-sm mt-6">
              DGSFP: C012479234434D
            </p>
          </div>
        </section>

        {/* RESEÑAS GOOGLE */}
        <GoogleReviewsWidget title="Opiniones de clientes extranjeros sobre seguro médico" />

        {/* GARANTÍAS PREMIUM */}
        <GarantiasSection brandColor="#163300" />



      </main>
      <footer className="bg-gray-950 text-white/50 py-8 text-center text-xs">
        <p>© 2026 Valentín Protección Integral · NIF: 79234434D · DGSFP: C012479234434D</p>
        <p className="mt-1">Mediadores de seguros independientes · Boadilla del Monte, Madrid</p>
      </footer>
      <StickyWhatsApp />
    </>
  );
}
