import type { Metadata } from "next";
import Image from "next/image";
import dynamicImport from "next/dynamic";
import { buildWhatsAppHref } from "@/lib/products";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { Shield, CheckCircle2, Phone, Globe, FileCheck, Check, FileText, Heart, Users, Scale, MessageSquare } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";

// Dynamic imports for non-critical components (reduce initial JS bundle)
const StickyWhatsApp = dynamicImport(() => import("@/components/sticky-whatsapp").then(m => m.StickyWhatsApp));
const FAQChat = dynamicImport(() => import("@/components/faq-chat").then(m => m.FAQChat));

export const metadata: Metadata = {
  title: "Seguro Médico para NIE, TIE y Visado en España | Valentín Protección Integral",
  description: "Sin copagos, certificado en 24h, válido para visado y residencia. +100 trámites aprobados.",
  keywords: ["seguro médico NIE España","seguro residencia Madrid latinos 2026","seguro médico extranjeros","NIE TIE seguro Madrid","seguro extranjería España"],
  alternates: { canonical: "https://valentinproteccionintegral.com/seguros/salud-extranjeros" },
  openGraph: {
    title: "Seguro Médico para NIE, TIE y Visado en España | Valentín Protección Integral",
    description: "Sin copagos, certificado en 24h, válido para visado y residencia. +100 trámites aprobados.",
    url: "https://valentinproteccionintegral.com/seguros/salud-extranjeros",
    siteName: "Valentín Protección Integral",
    locale: "es_ES",
    type: "website",
    images: [{ url: "/images/rosa_y_sebastian.jpeg", width: 1200, height: 630, alt: "Rosa y Sebastián - Mediadores de seguros en Madrid" }],
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Valentín Protección Integral",
  "url": "https://valentinproteccionintegral.com",
  "telephone": "+34603448765",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "C. de los Reyes Católicos, 1",
    "addressLocality": "Boadilla del Monte",
    "addressRegion": "Madrid",
    "addressCountry": "ES"
  },
  "areaServed": ["Boadilla del Monte", "Madrid", "Majadahonda", "Pozuelo de Alarcón"],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "60",
    "bestRating": "5",
    "worstRating": "1"
  }
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "name": "Seguro Médico NIE/TIE Extranjeros Madrid - Valentín Protección Integral",
  "provider": localBusinessSchema,
  "areaServed": ["Madrid", "Boadilla del Monte", "Majadahonda", "Pozuelo de Alarcón", "Las Rozas"],
  "description": "Seguro médico residencia España 2026. Cumple requisitos NIE/TIE. +100 clientes latinos/EEUU aprobados. Certificado 24h."
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿El seguro es válido para solicitar el visado o NIE?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí, nuestros seguros cumplen todos los requisitos exigidos por el consulado o la comisaría de extranjería para visado, NIE y TIE."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuánto tarda en emitirse el certificado?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "El certificado se emite en menos de 24 horas desde la contratación."
      }
    },
    {
      "@type": "Question",
      "name": "¿Tiene copagos o carencias?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No tiene copagos ni carencias desde el primer día de cobertura."
      }
    },
    {
      "@type": "Question",
      "name": "¿Puedo contratar si ya estoy en España?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí, puedes contratar desde cualquier punto de España sin necesidad de desplazarte."
      }
    }
  ]
};

export const dynamic = "force-static";

export default function SaludExtranjerosPage() {
  const wVisado = buildWhatsAppHref("Quiero mi seguro para visado");

  return (
    <>
      <link rel="preload" href="https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=900" as="image" fetchPriority="high" />
      <BreadcrumbSchema items={[{name:"Inicio",url:"/"},{name:"Seguros",url:"/seguros"},{name:"Salud Extranjeros",url:"/seguros/salud-extranjeros"}]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(localBusinessSchema)}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(faqSchema)}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(serviceSchema)}} />

      {/* Gancho Principal - Top Bar */}
      <div className="fixed top-0 left-0 right-0 z-[60] bg-slate-900 border-b border-slate-700 text-white py-2.5 text-center overflow-hidden">
        <div className="container mx-auto px-4">
          <p className="text-xs sm:text-sm font-black uppercase tracking-widest flex items-center justify-center gap-2">
            <Shield className="w-4 h-4 text-amber-400" />
            <span className="hidden sm:inline">Si tu seguro no es válido para tu trámite → <span className="text-amber-400">te devolvemos el dinero</span></span>
            <span className="sm:hidden">Si no es válido para tu trámite → <span className="text-amber-400 font-black">te devolvemos el dinero</span></span>
          </p>
        </div>
      </div>

      <header className="fixed top-10 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex items-center justify-between h-16">
          <a href="/" className="font-bold text-slate-900 text-lg tracking-tight">
            Valentín <span className="text-emerald-600">Protección Integral</span>
          </a>
          <a
            href={wVisado}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg text-sm font-bold transition-all"
          >
            <WhatsAppIcon className="w-4 h-4" />
            <span className="hidden sm:inline">Presupuesto </span>WhatsApp
          </a>
        </div>
      </header>

      <main className="min-h-screen bg-white pt-24 sm:pt-28">
        
        {/* 1. HERO — Impacto Inmediato (Fondo Restaurado) */}
        <section className="relative py-20 lg:py-32 bg-[#1e3a5f] overflow-hidden min-h-[85vh] flex items-center">
          {/* Fondo con imagen multicultural - optimizada para LCP */}
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=900"
              alt="Seguro médico para extranjeros en España — NIE TIE visado consulado"
              width={900}
              height={600}
              className="object-cover opacity-30 w-full h-full"
              priority
              fetchPriority="high"
              placeholder="blur"
              blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTAwiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iIzFlM2E1ZiIvPjwvc3ZnPg=="
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/60 to-transparent" />
          </div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-7xl relative z-10">
            <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
              <div>
                <h1 className="text-[40px] sm:text-[60px] font-extrabold text-white leading-[1.1] tracking-tight mb-6">
                  Seguro de salud para extranjeros <span className="text-emerald-400">aprobado</span> para visado en España
                </h1>
                
                <p className="text-xl sm:text-2xl text-white/90 leading-relaxed mb-10 font-medium">
                  Evita errores que puedan retrasar o rechazar tu visado.
                  <br />
                  <span className="text-emerald-400 font-bold underline decoration-emerald-400/30 underline-offset-8">Te damos el seguro correcto en 24–48h.</span>
                </p>

                <div className="grid sm:grid-cols-2 gap-y-4 gap-x-8 mb-12">
                  {[
                    "Válido para extranjería",
                    "Sin copagos",
                    "Documento listo",
                    "Si no es válido, te devolvemos el dinero"
                  ].map((bullet, i) => (
                    <div key={i} className="flex items-center gap-3 text-white font-bold">
                      <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0 shadow-lg shadow-emerald-500/30">
                        <Check className="w-4 h-4 text-gray-900" />
                      </div>
                      {bullet}
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-6">
                  <div className="w-full sm:w-auto">
                    <a
                      href={wVisado}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-3 bg-emerald-600 hover:bg-emerald-700 text-white px-10 py-5 rounded-2xl text-xl font-black transition-all shadow-xl shadow-emerald-500/20 w-full"
                    >
                      <WhatsAppIcon className="w-6 h-6" />
                      Quiero mi seguro para visado ahora
                    </a>
                    <p className="text-center mt-3 text-white font-bold flex items-center justify-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      Respuesta en menos de 10 minutos
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="relative w-16 h-16 rounded-full border-4 border-emerald-500/20 overflow-hidden shadow-xl ring-4 ring-white/10">
                      <Image src="/images/rosa_y_sebastian.jpeg" alt="Rosa y Sebastián" fill sizes="64px" className="object-cover object-[center_20%]" />
                    </div>
                    <div className="pl-2">
                      <p className="text-xs text-white/50 font-bold uppercase tracking-widest">Atención directa</p>
                      <p className="text-lg font-bold text-white leading-none">Rosa y Sebastián</p>
                      <p className="text-xs text-emerald-400 mt-1 font-medium italic">Tus asesores personales</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tarjeta tipo "Documento Oficial" (Imagen Real con Efecto Premium) */}
              <div className="hidden lg:block relative group perspective-1000">
                <div className="absolute inset-0 bg-emerald-600/10 rounded-[40px] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative transform rotate-2 group-hover:rotate-0 transition-all duration-700 hover:scale-[1.02]">
                  <div className="relative">
                    <div className="relative bg-white p-2 rounded-[32px] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.3)] border border-white/40 overflow-hidden">
                      <Image 
                        src="/images/premium/certificado-oficial.png" 
                        alt="Certificado Oficial de Seguro de Salud" 
                        width={600} 
                        height={800} 
                        className="rounded-[24px] w-full h-auto"
                      />
                    </div>
                    
                    {/* Badge flotante "Listo en 24h" - Ahora fuera del overflow */}
                    <div className="absolute -bottom-6 -left-6 bg-white border border-slate-200 rounded-2xl p-4 shadow-xl flex items-center gap-3 animate-bounce-soft z-20">
                      <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center">
                        <Check className="w-5 h-5 text-white" />
                      </div>
                      <p className="text-sm font-bold text-slate-700">Listo en 24h</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECCIÓN PERFILES — ¿Para quién es este seguro? */}
        <section className="py-16 bg-white border-b border-slate-100">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">¿Para quién es este seguro?</h2>
              <p className="text-slate-500 mt-3 max-w-xl mx-auto">Tres perfiles. Una misma solución. Rápida y sin complicaciones.</p>
            </div>
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                {
                  emoji: "🎓",
                  title: "Estudiante internacional",
                  desc: "Cubre los requisitos de tu visado de estudios desde el primer día. Sin carencias, sin esperas."
                },
                {
                  emoji: "🏠",
                  title: "Residente en proceso de NIE/TIE",
                  desc: "Certificado válido para comisaría en menos de 24h. Más de 100 trámites aprobados."
                },
                {
                  emoji: "💼",
                  title: "Trabajador o emprendedor extranjero",
                  desc: "Sin copagos, sin carencias, compatible con tu situación laboral o de autónomo en España."
                }
              ].map((perfil, i) => (
                <div key={i} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow text-center">
                  <div className="text-4xl mb-4">{perfil.emoji}</div>
                  <h3 className="font-bold text-slate-900 text-lg mb-2">{perfil.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{perfil.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. BLOQUE GARANTÍAS (Subido arriba) */}
        <section className="py-24 bg-slate-50 border-y border-slate-100">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4">
                Garantías reales para tu tranquilidad
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  t: "Si tu seguro no es válido para tu trámite → te devolvemos el dinero",
                  icon: <Shield className="w-10 h-10 text-emerald-600" />
                },
                {
                  t: "Te acompañamos hasta que presentes correctamente tu documentación",
                  icon: <Heart className="w-10 h-10 text-emerald-600" />
                },
                {
                  t: "Sin letra pequeña ni permanencias ocultas",
                  icon: <FileText className="w-10 h-10 text-emerald-600" />
                }
              ].map((g, i) => (
                <div key={i} className="bg-white p-12 rounded-[40px] shadow-sm border border-slate-100 hover:shadow-xl transition-all text-center group">
                  <div className="mb-8 w-24 h-24 rounded-3xl bg-slate-50 flex items-center justify-center mx-auto group-hover:bg-emerald-50 group-hover:scale-110 transition-all">
                    {g.icon}
                  </div>
                  <p className="text-2xl font-bold text-slate-800 leading-tight">
                    {g.t}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. BLOQUE CÓMO FUNCIONA */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4">
                Lo tienes listo en 3 pasos
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-12 text-center">
              {[
                { num: "1", t: "Escribes por WhatsApp", d: "Analizamos tu trámite al momento." },
                { num: "2", t: "Te damos la opción válida", d: "Directo a lo que aceptan." },
                { num: "3", t: "Recibes tu póliza lista", d: "En PDF oficial en tu móvil." }
              ].map((paso, i) => (
                <div key={i} className="relative">
                  <div className="text-[120px] font-black text-slate-100 absolute -top-20 left-1/2 -translate-x-1/2 z-0 opacity-50 select-none">
                    {paso.num}
                  </div>
                  <div className="relative z-10">
                    <div className="w-20 h-20 rounded-full bg-emerald-600 text-white flex items-center justify-center text-3xl font-black mx-auto mb-6 shadow-xl shadow-emerald-600/20">
                      {paso.num}
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{paso.t}</h3>
                    <p className="text-slate-500 font-bold">{paso.d}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <a
                href={wVisado}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-emerald-600 hover:bg-emerald-700 text-white px-10 py-5 rounded-2xl text-xl font-black transition-all shadow-xl shadow-emerald-600/20"
              >
                <WhatsAppIcon className="w-6 h-6" />
                Quiero mi seguro ahora
              </a>
            </div>
          </div>
        </section>

        {/* 4. BLOQUE ESPECIALISTAS (Reposicionado y Protagonista) */}
        <section className="py-32 bg-slate-900 text-white overflow-hidden relative">
          <div 
            className="absolute top-0 left-0 w-full h-full opacity-5"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 5V4zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '6px 6px'
            }}
          />
          <div className="container mx-auto px-4 max-w-4xl relative z-10 text-center">
            <div className="flex justify-center mb-10">
              <div className="w-24 h-24 rounded-3xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
                <Users className="w-12 h-12 text-emerald-400" />
              </div>
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold mb-8 leading-tight">
              Especialistas en seguros para visado en España
            </h2>
            <p className="text-2xl md:text-3xl text-emerald-100/70 leading-relaxed mb-8 font-medium">
              Cada semana ayudamos a personas en tu misma situación.
            </p>
            <p className="text-xl md:text-2xl text-white/60 leading-relaxed">
              No recomendamos seguros al azar. 
              <br />
              Solo opciones que cumplen los requisitos reales de extranjería.
            </p>
          </div>
        </section>

        {/* 5. BLOQUE SORPRESAS */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4">
                Te lo ponemos fácil de verdad
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { t: "Revisamos tu caso GRATIS antes de contratar", icon: <CheckCircle2 className="w-8 h-8 text-emerald-500" /> },
                { t: "Te decimos exactamente qué documento presentar", icon: <CheckCircle2 className="w-8 h-8 text-emerald-500" /> },
                { t: "Si lo necesitas urgente, lo gestionamos en el mismo día", icon: <CheckCircle2 className="w-8 h-8 text-emerald-500" /> }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center text-center p-8 rounded-[32px] bg-slate-50 border border-slate-100">
                  <div className="mb-6">{item.icon}</div>
                  <p className="text-lg font-bold text-slate-800 leading-relaxed">{item.t}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. BLOQUE CONTEXTO LEGAL */}
        <section className="py-24 bg-slate-50 border-y border-slate-100">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-md">
              <Scale className="w-8 h-8 text-slate-400" />
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-8">
              ¿Por qué necesitas este seguro?
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              Para vivir en España sin trabajar o solicitar visado, es obligatorio contar con un <strong>seguro médico privado sin copagos</strong>, con cobertura completa y válido durante toda la estancia. Es el requisito que frena la mayoría de expedientes, y nosotros estamos aquí para que el tuyo sea aprobado a la primera.
            </p>
          </div>
        </section>

        {/* 7. BLOQUE IDENTIDAD */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="relative aspect-square rounded-[40px] overflow-hidden shadow-2xl">
                <Image
                  src="/images/rosa_y_sebastian.jpeg"
                  alt="Rosa y Sebastián — Valentín Protección Integral"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-[center_20%]"
                />
              </div>
              <div>
                <p className="text-emerald-600 font-black uppercase tracking-widest text-sm mb-4">Confianza Humana</p>
                <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-8 leading-tight">
                  Más de 10 años ayudando a familias a tomar la decisión correcta.
                </h2>
                <p className="text-xl text-slate-600 leading-relaxed mb-8">
                  No trabajamos para una compañía. 
                  <br />
                  <strong>Trabajamos para ti.</strong>
                </p>
                <div className="flex items-center gap-4 p-6 rounded-2xl bg-slate-50 border border-slate-100">
                  <Heart className="w-6 h-6 text-emerald-500" />
                  <p className="font-bold text-slate-800">Cercanía real y asesoramiento independiente.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 8. FAQ */}
        <FAQChat
          brandColor="emerald"
          title="❓ Preguntas frecuentes"
          subtitle="Todo lo que necesitas saber para tu visado"
          items={[
            {
              q: "¿Sirve este seguro para obtener el NIE / TIE?",
              a: "Sí, es el documento principal que te pedirán en la oficina de extranjería o consulado. Emitimos el certificado oficial en español listo para presentar."
            },
            {
              q: "¿El seguro tiene que ser obligatoriamente sin copagos?",
              a: "Sí. Si presentas un seguro con copagos, tu visado será denegado automáticamente. Tramitamos exclusivamente opciones con 0€ de copago."
            },
            {
              q: "¿Cuánto tarda en estar lista la póliza?",
              a: "Lo normal es que lo tengas todo en 24-48 horas hábiles. Si tienes una urgencia, avísanos por WhatsApp y podemos intentar agilizarlo para el mismo día."
            },
            {
              q: "¿Qué pasa si me rechazan el seguro en extranjería?",
              a: "Contamos con una garantía de devolución: si el seguro no cumple los requisitos técnicos y es rechazado por ese motivo, te devolvemos el importe."
            }
          ]}
        />

        {/* 9. CTA FINAL */}
        <section className="py-24 bg-slate-900 text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/20 to-transparent" />
          <div className="container mx-auto px-4 relative z-10 max-w-4xl">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
              Evita errores que puedan retrasar tu visado
            </h2>
            <p className="text-xl text-slate-300 mb-10">
              Asegura tu aprobación hoy mismo con expertos en extranjería.
            </p>
            <a
              href={wVisado}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-emerald-600 hover:bg-emerald-700 text-white px-10 py-5 rounded-2xl text-xl font-black transition-all shadow-2xl shadow-emerald-600/20"
            >
              <WhatsAppIcon className="w-6 h-6" />
              Quiero mi seguro para visado ahora
            </a>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm font-bold text-slate-400">
              <p className="flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-emerald-500" />
                Atención rápida (respuesta en menos de 10 minutos)
              </p>
              <p className="flex items-center gap-2">
                <FileCheck className="w-5 h-5 text-emerald-500" />
                Gestión completa en 24–48h
              </p>
            </div>
          </div>
        </section>

      </main>

      <footer className="bg-slate-950 text-slate-500 py-12 border-t border-slate-900">
        <div className="container mx-auto px-4 text-center">
          <p className="font-bold text-white mb-4">Valentín Protección Integral</p>
          <p className="text-sm">© 2026 · Mediadores de seguros independientes · NIF 79234434D · Boadilla del Monte, Madrid</p>
          <div className="flex items-center justify-center gap-4 mt-4 text-sm">
            <a href="tel:+34603448765" className="text-slate-400 hover:text-white transition-colors">603 44 87 65</a>
            <span className="text-slate-600">·</span>
            <a href="mailto:rosavalenting@gmail.com" className="text-slate-400 hover:text-white transition-colors">rosavalenting@gmail.com</a>
          </div>
        </div>
      </footer>

      <StickyWhatsApp />

      {/* Mobile Sticky CTA Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white/80 backdrop-blur-md border-t border-slate-100 sm:hidden">
        <a
          href={wVisado}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 bg-emerald-600 text-white py-4 rounded-xl font-black shadow-lg"
        >
          <WhatsAppIcon className="w-5 h-5" />
          Quiero mi seguro para visado
        </a>
      </div>
    </>
  );
}
