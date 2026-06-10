import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { StickyWhatsApp } from "@/components/sticky-whatsapp";
import { buildWhatsAppHref, site } from "@/lib/products";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { WhatsAppButton } from "@/components/whatsapp-button";
import GarantiasSection from "@/components/GarantiasSection";
import GoogleReviewsWidget from "@/components/GoogleReviewsWidget";
import {
  BookOpen,
  GraduationCap,
  Globe,
  FileText,
  Shield,
  CheckCircle2,
  Clock,
  Phone,
  Users,
  ChevronRight,
  Sparkles,
  ArrowRight,
  HeartHandshake,
  Building2,
  Home,
  Briefcase,
  Plane,
  Search,
  AlertTriangle,
  HelpCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Seguro médico para extranjeros en España | Valentín Protección Integral",
  description:
    "Orientación sobre seguro médico para estudiantes, residentes, familias y personas extranjeras que preparan trámites en España. Atención clara y personalizada.",
  keywords: [
    "seguro médico extranjeros España",
    "seguro visado estudios España",
    "seguro NIE TIE estudiantes",
    "seguro residencia extranjeros Madrid",
    "seguro salud extranjeros sin copagos",
  ],
  alternates: {
    canonical: "https://valentinproteccionintegral.com/extranjeros",
  },
  openGraph: {
    title: "Seguro médico para extranjeros en España | Valentín Protección Integral",
    description:
      "Orientación sobre seguro médico para estudiantes, residentes, familias y personas extranjeras que preparan trámites en España.",
    url: "https://valentinproteccionintegral.com/extranjeros",
    siteName: "Valentín Protección Integral",
    locale: "es_ES",
    type: "website",
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
    "addressCountry": "ES",
  },
  "areaServed": ["Boadilla del Monte", "Madrid", "Majadahonda", "Pozuelo de Alarcón"],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Sirve cualquier seguro médico para trámites de extranjería?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No siempre. Según el trámite, pueden exigirse condiciones concretas: entidad autorizada en España, sin copagos, sin carencias, cobertura completa y repatriación. Te orientamos para que revises qué puede encajar con tu caso.",
      },
    },
    {
      "@type": "Question",
      "name": "¿El seguro debe estar contratado con entidad autorizada en España?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "En la mayoría de trámites de residencia, estudios o renovación, sí. Las autoridades suelen requerir que la aseguradora opere legalmente en España. Conviene confirmarlo antes de contratar.",
      },
    },
    {
      "@type": "Question",
      "name": "¿Para estudios suelen pedir seguro sin copagos ni carencias?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Normalmente, los consulados y oficinas de extranjería exigen cobertura completa sin copagos ni periodos de carencia para visados de estudios. Te ayudamos a identificar qué opciones cumplen esos criterios.",
      },
    },
    {
      "@type": "Question",
      "name": "¿Tengo que enviar pasaporte o datos médicos por la web?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Para una primera orientación solo necesitamos saber tu situación y el tipo de trámite. No pedimos datos médicos ni documentación sensible por formularios abiertos.",
      },
    },
    {
      "@type": "Question",
      "name": "¿VPI sustituye a una asesoría de extranjería?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Valentín Protección Integral no es un organismo público ni sustituye el asesoramiento jurídico. Te ayudamos con la parte del seguro médico, para que entiendas qué puede necesitar tu caso.",
      },
    },
  ],
};

export const dynamic = "force-static";

export default function ExtranjerosPage() {
  const wWhatsAppMain = buildWhatsAppHref(
    "Hola, soy extranjero/a y quiero orientación sobre seguro médico para mi trámite en España."
  );
  const wEstudios = buildWhatsAppHref(
    "Hola, quiero revisar un seguro médico para visado o estancia por estudios en España."
  );
  const wResidencia = buildWhatsAppHref(
    "Hola, quiero orientación sobre seguro médico para un trámite de residencia en España."
  );
  const wFamilia = buildWhatsAppHref(
    "Hola, quiero revisar opciones de seguro médico para mi familia en España."
  );
  const wPartner = buildWhatsAppHref(
    "Hola, trabajo con alumnos/clientes extranjeros y quiero hablar sobre una posible colaboración."
  );
  const wNoSe = buildWhatsAppHref(
    "Hola, soy extranjero/a y no tengo claro qué seguro médico necesito para mi trámite en España."
  );

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Inicio", url: "/" },
          { name: "Extranjeros", url: "/extranjeros" },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header />
      <main className="min-h-screen bg-white">
        {/* ═══════════════════════════════════════════
            HERO PREMIUM DOCUMENTAL
            ═══════════════════════════════════════════ */}
        <section className="relative pt-24 pb-16 bg-slate-900 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-800/50 via-slate-900 to-blue-950 opacity-60" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-6xl relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 text-blue-300 text-sm mb-6 border border-blue-500/20">
                  <Sparkles className="w-4 h-4" />
                  Seguro médico para extranjeros en España
                </span>
                <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-bold text-white leading-[1.08] tracking-tight mb-6">
                  Tu llegada a España, con la parte del seguro más clara
                </h1>
                <p className="text-lg text-slate-300 leading-relaxed mb-8 max-w-lg">
                  Te orientamos según tu situación: estudios, residencia, renovación,
                  familia o colaboración con academias y asesorías.
                </p>
                <div className="flex flex-wrap gap-3 mb-8">
                  <WhatsAppButton
                    href={wWhatsAppMain}
                    location="extranjeros-hero"
                    className="group inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-3.5 rounded-xl text-base font-semibold transition-all shadow-lg shadow-emerald-600/20"
                  >
                    Revisar mi caso por WhatsApp
                  </WhatsAppButton>
                  <a
                    href="#elige"
                    className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3.5 rounded-xl text-base font-medium border border-white/20 transition-all"
                  >
                    Ver qué suelen revisar
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["Estudios y formación", "Residencia", "Familias", "Partners", "DGSFP"].map(
                    (item) => (
                      <span
                        key={item}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 text-slate-300 text-xs border border-white/10"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        {item}
                      </span>
                    )
                  )}
                </div>
              </div>
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl" />
                <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/30 border border-white/10">
                  <Image
                    src="/images/extranjeros/v2/pasaporte-espanol.webp"
                    alt="Seguro médico para trámites en España"
                    width={600}
                    height={450}
                    className="w-full h-auto object-cover"
                    priority
                  />
                </div>
                {/* Floating trust cards */}
                <div className="absolute -bottom-4 -right-2 bg-white rounded-xl p-3 shadow-xl border border-slate-100 text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center">
                      <FileText className="w-4 h-4 text-emerald-600" />
                    </div>
                    <span className="text-slate-700 font-medium">Documentación clara</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            ELIGE TU SITUACIÓN
            ═══════════════════════════════════════════ */}
        <section id="elige" className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-6xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 text-center mb-4">
              Elige tu situación
            </h2>
            <p className="text-slate-600 text-center mb-12 max-w-xl mx-auto">
              Cada trámite tiene sus particularidades. Te ayudamos a entender qué puede
              necesitar tu caso.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {/* A — Estudios */}
              <div className="bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/images/extranjeros/v2/estudiantes-modernos.webp"
                    alt="Estudiantes extranjeros en España"
                    width={700}
                    height={350}
                    className="w-full h-full object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 text-slate-800 text-sm font-medium">
                      <GraduationCap className="w-4 h-4" />
                      Vengo a estudiar
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-slate-600 mb-5 leading-relaxed">
                    Para visado de estudios, estancia por formación o renovación, revisamos
                    contigo qué condiciones puede exigir tu trámite.
                  </p>
                  <WhatsAppButton
                    href={wEstudios}
                    location="extranjeros-estudios"
                    className="inline-flex items-center gap-2 text-emerald-600 font-semibold hover:text-emerald-700 transition-colors text-sm"
                  >
                    Revisar seguro para estudios
                    <ArrowRight className="w-4 h-4" />
                  </WhatsAppButton>
                </div>
              </div>

              {/* B — Residencia */}
              <div className="bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/images/extranjeros/v2/familia-moderna.webp"
                    alt="Familia preparando residencia en España"
                    width={700}
                    height={350}
                    className="w-full h-full object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 text-slate-800 text-sm font-medium">
                      <Home className="w-4 h-4" />
                      Voy a residir en España
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-slate-600 mb-5 leading-relaxed">
                    Si estás preparando residencia, renovación o un trámite familiar, te
                    ayudamos a ordenar la parte del seguro médico.
                  </p>
                  <WhatsAppButton
                    href={wResidencia}
                    location="extranjeros-residencia"
                    className="inline-flex items-center gap-2 text-emerald-600 font-semibold hover:text-emerald-700 transition-colors text-sm"
                  >
                    Revisar seguro para residencia
                    <ArrowRight className="w-4 h-4" />
                  </WhatsAppButton>
                </div>
              </div>

              {/* C — Partners/B2B */}
              <div className="bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/images/extranjeros/v2/reunion-moderna.webp"
                    alt="Colaboración profesional para seguros de extranjeros"
                    width={700}
                    height={350}
                    className="w-full h-full object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 text-slate-800 text-sm font-medium">
                      <Building2 className="w-4 h-4" />
                      Necesito ayudar a un alumno o cliente
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-slate-600 mb-5 leading-relaxed">
                    Para academias, escuelas, asesorías y colaboradores que trabajan con
                    personas extranjeras.
                  </p>
                  <WhatsAppButton
                    href={wPartner}
                    location="extranjeros-partner"
                    className="inline-flex items-center gap-2 text-emerald-600 font-semibold hover:text-emerald-700 transition-colors text-sm"
                  >
                    Hablar sobre colaboración
                    <ArrowRight className="w-4 h-4" />
                  </WhatsAppButton>
                </div>
              </div>

              {/* D — No sé mi caso */}
              <div className="bg-slate-50 rounded-3xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-center">
                <div className="p-8 text-center">
                  <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center mx-auto mb-5">
                    <HelpCircle className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    No sé qué seguro necesito
                  </h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    Cuéntanos tu situación y te orientamos con claridad sobre qué puede
                    encajar en tu caso.
                  </p>
                  <WhatsAppButton
                    href={wNoSe}
                    location="extranjeros-nose"
                    className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-3 rounded-xl text-sm font-semibold transition-all shadow-lg shadow-emerald-600/20"
                  >
                    Cuéntanos tu caso
                  </WhatsAppButton>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            SEMÁFORO DEL SEGURO
            ═══════════════════════════════════════════ */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 text-center mb-4">
              Semáforo del seguro para extranjería
            </h2>
            <p className="text-slate-600 text-center mb-4 max-w-2xl mx-auto">
              Los requisitos pueden variar según trámite, consulado o expediente. Te
              orientamos sobre la parte del seguro, sin sustituir asesoramiento jurídico.
            </p>
            <p className="text-xs text-slate-400 text-center mb-12">
              Fuentes: criterios habituales de consulados y oficinas de extranjería — información orientativa.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {/* Verde */}
              <div className="bg-white rounded-2xl p-8 border-l-4 border-emerald-500 shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3 text-emerald-700">
                  Normalmente importante revisar
                </h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                    Entidad autorizada para operar en España
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                    Duración de la cobertura según trámite
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                    Certificado o documentación clara
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                    Prestaciones sanitarias adecuadas
                  </li>
                </ul>
              </div>

              {/* Amarillo */}
              <div className="bg-white rounded-2xl p-8 border-l-4 border-amber-400 shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center mb-4">
                  <AlertTriangle className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3 text-amber-700">
                  Depende del caso
                </h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 flex-shrink-0" />
                    Copagos o deducibles
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 flex-shrink-0" />
                    Carencias según modalidad
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 flex-shrink-0" />
                    Familiares incluidos
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 flex-shrink-0" />
                    Renovación o prórroga
                  </li>
                </ul>
              </div>

              {/* Rojo */}
              <div className="bg-white rounded-2xl p-8 border-l-4 border-red-400 shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center mb-4">
                  <AlertTriangle className="w-6 h-6 text-red-500" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3 text-red-600">
                  Evita improvisar
                </h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 flex-shrink-0" />
                    Asumir que cualquier seguro sirve para todos los trámites
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 flex-shrink-0" />
                    Presentar documentación incompleta
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 flex-shrink-0" />
                    Usar seguro turístico si el trámite exige seguro médico completo
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 flex-shrink-0" />
                    Enviar pasaporte o datos médicos por formularios abiertos
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            TU RUTA EN 4 PASOS
            ═══════════════════════════════════════════ */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-4xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 text-center mb-14">
              Tu ruta en 4 pasos
            </h2>
            <div className="relative">
              {/* Línea de timeline en móvil — oculta, en desktop centrada */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 -translate-x-1/2" />
              <div className="space-y-10 relative">
                {[
                  {
                    step: "1",
                    title: "Nos cuentas tu situación",
                    desc: "Estudios, residencia, renovación, familia o colaboración. Con eso ya podemos empezar a orientarte.",
                    icon: Search,
                  },
                  {
                    step: "2",
                    title: "Revisamos qué suele pedir tu trámite",
                    desc: "Según fuentes oficiales y experiencia, te contamos qué criterios suelen aplicar. Siempre con prudencia.",
                    icon: FileText,
                  },
                  {
                    step: "3",
                    title: "Te orientamos sobre el seguro médico",
                    desc: "Te explicamos qué opciones pueden encajar, qué condiciones conviene revisar y qué documentación necesitarás.",
                    icon: Shield,
                  },
                  {
                    step: "4",
                    title: "Te acompañamos si decides contratar",
                    desc: "Sin presión. Si tu opción encaja, te ayudamos con el proceso para que llegues al trámite con tranquilidad.",
                    icon: HeartHandshake,
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-6 relative">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 text-white flex items-center justify-center text-xl font-bold flex-shrink-0 shadow-lg shadow-blue-600/20 z-10">
                      {item.step}
                    </div>
                    <div className="pt-2">
                      <h3 className="text-xl font-bold text-slate-900 mb-1">{item.title}</h3>
                      <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            MÓDULO B2B
            ═══════════════════════════════════════════ */}
        <section className="py-20 bg-blue-50/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-4xl text-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6">
              <Building2 className="w-4 h-4" />
              Para profesionales
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              ¿Trabajas con alumnos o clientes extranjeros?
            </h2>
            <p className="text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Podemos ayudarte a resolver la parte del seguro médico con un circuito sencillo,
              atención personalizada y comunicación responsable.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {["Academias y escuelas", "Asesorías de extranjería", "Relocation", "Centros formativos"].map(
                (item) => (
                  <div
                    key={item}
                    className="bg-white rounded-xl p-4 border border-slate-100 text-sm text-slate-700 font-medium"
                  >
                    {item}
                  </div>
                )
              )}
            </div>
            <WhatsAppButton
              href={wPartner}
              location="extranjeros-b2b"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-6 py-3.5 rounded-xl text-base font-semibold transition-all shadow-lg shadow-blue-600/20"
            >
              Hablar sobre colaboración
            </WhatsAppButton>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            NO SOMOS EXTRANJERÍA
            ═══════════════════════════════════════════ */}
        <section className="py-16 bg-white border-t border-slate-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-3xl text-center">
            <div className="w-14 h-14 rounded-2xl bg-slate-100 flex items-center justify-center mx-auto mb-6">
              <Shield className="w-7 h-7 text-slate-600" />
            </div>
            <p className="text-slate-700 leading-relaxed font-medium">
              Valentín Protección Integral no es un organismo público ni sustituye el
              asesoramiento jurídico de extranjería. Te ayudamos con la parte del seguro
              médico, para que entiendas qué puede necesitar tu caso y qué documentación
              conviene revisar antes de presentar el trámite.
            </p>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            SEBASTIÁN DGSFP PREMIUM
            ═══════════════════════════════════════════ */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-3xl">
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-100 shadow-sm">
              <div className="flex items-start gap-5">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-1">
                    Sebastián Sifontes Valentín
                  </h3>
                  <p className="text-sm text-slate-500 mb-3">
                    Agente de seguros vinculado registrado en la DGSFP
                  </p>
                  <p className="text-sm font-mono text-slate-600 mb-4 bg-slate-50 inline-block px-3 py-1.5 rounded-lg">
                    Clave: C046172295271S
                  </p>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    Trabajo mi actividad comercial bajo la marca Valentín Protección Integral,
                    con atención cercana para personas extranjeras, familias y colaboradores.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            FUENTES OFICIALES ORIENTATIVAS
            ═══════════════════════════════════════════ */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-3xl text-center">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Nos guiamos por criterios oficiales, pero revisamos tu caso con prudencia
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm mb-8">
              Las fuentes oficiales pueden variar según consulado, trámite y momento de
              presentación. Usamos esta información como orientación general y recomendamos
              confirmar siempre los requisitos concretos de tu expediente.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-slate-600 text-sm">
                <BookOpen className="w-4 h-4" />
                Fuentes consulares orientativas
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-slate-600 text-sm">
                <Globe className="w-4 h-4" />
                Criterios de extranjería
              </span>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            FAQ COMERCIAL/COMPLIANCE
            ═══════════════════════════════════════════ */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-3xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 text-center mb-12">
              Preguntas frecuentes
            </h2>
            <div className="space-y-3">
              {[
                {
                  q: "¿Sirve cualquier seguro médico para trámites de extranjería?",
                  a: "No siempre. Según el trámite, pueden exigirse condiciones concretas: entidad autorizada en España, sin copagos, sin carencias, cobertura completa y repatriación. Te orientamos para que revises qué puede encajar con tu caso.",
                },
                {
                  q: "¿El seguro debe estar contratado con entidad autorizada en España?",
                  a: "En la mayoría de trámites de residencia, estudios o renovación, sí. Las autoridades suelen requerir que la aseguradora opere legalmente en España. Conviene confirmarlo antes de contratar.",
                },
                {
                  q: "¿Para estudios suelen pedir seguro sin copagos ni carencias?",
                  a: "Normalmente, los consulados y oficinas de extranjería exigen cobertura completa sin copagos ni periodos de carencia para visados de estudios. Te ayudamos a identificar qué opciones cumplen esos criterios.",
                },
                {
                  q: "¿Puedo pagar mensual o debe cubrir toda la estancia?",
                  a: "Depende del trámite. Algunos consulados exigen que la póliza cubra todo el periodo de estancia de una sola vez. Conviene revisar este punto antes de contratar.",
                },
                {
                  q: "¿Qué pasa si voy con familiares?",
                  a: "Cada familiar puede necesitar su propia cobertura según el tipo de visado o trámite. Te orientamos sobre qué opciones permiten incluir a familiares en la misma póliza o como pólizas independientes.",
                },
                {
                  q: "¿Me podéis ayudar si soy academia o asesoría?",
                  a: "Sí. Si trabajas con alumnos o clientes extranjeros, podemos establecer un circuito para resolver la parte del seguro médico de forma ágil. Escríbenos y lo hablamos sin compromiso.",
                },
                {
                  q: "¿Tengo que enviar pasaporte o datos médicos por la web?",
                  a: "No. Para una primera orientación solo necesitamos saber tu situación y el tipo de trámite. No pedimos datos médicos ni documentación sensible por formularios abiertos.",
                },
                {
                  q: "¿VPI sustituye a una asesoría de extranjería?",
                  a: "No. Valentín Protección Integral no es un organismo público ni sustituye el asesoramiento jurídico. Te ayudamos con la parte del seguro médico, para que entiendas qué puede necesitar tu caso.",
                },
              ].map((faq, i) => (
                <details
                  key={i}
                  className="group bg-white rounded-xl border border-slate-100 overflow-hidden"
                >
                  <summary className="flex items-center justify-between p-5 cursor-pointer hover:bg-slate-50 transition-colors">
                    <span className="font-medium text-slate-800 pr-4">{faq.q}</span>
                    <ChevronRight className="w-5 h-5 text-slate-400 group-open:rotate-90 transition-transform flex-shrink-0" />
                  </summary>
                  <div className="px-5 pb-5 text-slate-600 leading-relaxed text-sm">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            RESEÑAS + GARANTÍAS
            ═══════════════════════════════════════════ */}
        <GoogleReviewsWidget title="Opiniones de clientes sobre seguros para extranjeros" />
        <GarantiasSection brandColor="#2563eb" />

        {/* ═══════════════════════════════════════════
            CTA FINAL SEGMENTADO
            ═══════════════════════════════════════════ */}
        <section className="py-24 bg-slate-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-4xl text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              ¿Hablamos de tu caso?
            </h2>
            <p className="text-slate-300 mb-10 max-w-xl mx-auto">
              Elige la opción que mejor describe tu situación y te respondemos con claridad.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
              {[
                { label: "Soy estudiante", href: wEstudios, icon: GraduationCap },
                { label: "Estoy preparando residencia", href: wResidencia, icon: Home },
                { label: "Vengo con familia", href: wFamilia, icon: Users },
                { label: "Soy academia o asesoría", href: wPartner, icon: Building2 },
              ].map((item) => (
                <WhatsAppButton
                  key={item.label}
                  href={item.href}
                  location={`extranjeros-cta-${item.label}`}
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-5 py-3.5 rounded-xl text-sm font-medium border border-white/10 transition-all"
                >
                  <item.icon className="w-4 h-4" />
                  {item.label}
                </WhatsAppButton>
              ))}
            </div>
            <p className="text-xs text-slate-500 mt-8">
              WhatsApp: 34603448765 · DGSFP: C046172295271S
            </p>
          </div>
        </section>
      </main>
      <Footer />
      <StickyWhatsApp />
    </>
  );
}