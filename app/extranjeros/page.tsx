import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { StickyWhatsApp } from "@/components/sticky-whatsapp";
import { buildWhatsAppHref, site } from "@/lib/products";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { FAQAccordion } from "@/components/faq-accordion";
import GarantiasSection from "@/components/GarantiasSection";
import {
  GraduationCap,
  Globe,
  FileText,
  Shield,
  CheckCircle2,
  Clock,
  Phone,
  Award,
  BookOpen,
  Building2,
  Users,
  ChevronRight,
  Sparkles,
  ArrowRight,
  MapPin,
  HeartHandshake,
  ScrollText,
  Landmark,
  Stethoscope,
  Luggage,
  Car,
  Home,
  Briefcase,
  CreditCard,
  UserCheck,
  MessageCircle,
  Star,
  TrendingUp,
  Calendar,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Extranjeros en Madrid · Seguros para Visado, NIE y TIE | Valentín",
  description:
    "¿Eres extranjero y necesitas un seguro para tu visado, NIE o TIE en Madrid? Te orientamos paso a paso con las mejores opciones. Consulta gratuita.",
  keywords: [
    "seguro extranjeros Madrid",
    "seguro visado España",
    "seguro NIE Madrid",
    "seguro TIE extranjeros",
    "seguro salud estudiantes internacionales Madrid",
    "seguro residencia España",
  ],
  alternates: {
    canonical: "https://valentinproteccionintegral.com/extranjeros",
  },
  openGraph: {
    title: "Extranjeros en Madrid · Seguros para Visado, NIE y TIE | Valentín",
    description:
      "¿Eres extranjero y necesitas un seguro para tu visado, NIE o TIE en Madrid? Te orientamos paso a paso con las mejores opciones. Consulta gratuita.",
    url: "https://valentinproteccionintegral.com/extranjeros",
    siteName: "Valentín Protección Integral",
    locale: "es_ES",
    type: "website",
  },
};

const faqItems = [
  {
    q: "¿Qué seguro necesito para solicitar el visado de residencia en España?",
    a: "Para la mayoría de visados de residencia no laboral, estudios o reagrupación familiar, la ley exige un seguro de salud privado que cumpla tres requisitos: sin copagos, sin periodos de carencia y con cobertura de repatriación. Te ayudamos a encontrar la opción que cumple exactamente con lo que pide tu expediente.",
  },
  {
    q: "¿Puedo contratar un seguro si aún no tengo el NIE?",
    a: "Sí. Es posible contratar utilizando tu número de pasaporte. De hecho, muchos extranjeros contratan el seguro antes de obtener el NIE precisamente para presentarlo como requisito en su solicitud. Nosotros gestionamos todo el proceso.",
  },
  {
    q: "¿El seguro para estudiantes internacionales es diferente?",
    a: "Sí, aunque comparte requisitos básicos (sin copagos, sin carencias), el seguro para estudiantes suele tener coberturas adaptadas a estancias temporales y puede incluir asistencia en viaje o cobertura en el país de origen durante periodos vacacionales. Te orientamos según la duración de tus estudios.",
  },
  {
    q: "¿Cuánto cuesta un seguro de salud para extranjeros en Madrid?",
    a: "El precio varía según la edad y el perfil, pero los seguros que cumplen con los requisitos de extranjería suelen partir desde 35-50€/mes. Te damos el precio exacto en una consulta rápida por WhatsApp, sin compromiso.",
  },
  {
    q: "¿El certificado del seguro sirve para la solicitud del TIE?",
    a: "Sí. Emitimos un certificado que cumple con todos los requisitos exigidos por las oficinas de extranjería y la Policía Nacional para la tramitación del TIE. Incluye los datos del tomador, las coberturas contratadas y la vigencia de la póliza.",
  },
  {
    q: "¿Qué pasa si mi visado es denegado?",
    a: "Puedes cancelar la póliza y recuperar la prima no consumida según las condiciones del contrato. Te explicamos todo antes de contratar para que no haya sorpresas.",
  },
  {
    q: "¿Atendéis en otros idiomas?",
    a: "Sí. Además de español, atendemos en inglés y estamos familiarizados con los trámites de extranjería de ciudadanos de Latinoamérica, Estados Unidos, Reino Unido y otros países extracomunitarios.",
  },
  {
    q: "¿Cuánto tiempo se tarda en tener el seguro activo?",
    a: "Desde que confirmas la opción elegida, el seguro puede estar activo en menos de 24 horas. El certificado para tu expediente lo recibes al momento de la contratación.",
  },
];

const tramitesData = [
  {
    category: "Estudios y formación",
    icon: GraduationCap,
    items: [
      "Estancia por estudios",
      "Prácticas y actividades formativas",
      "Movilidad de alumnos",
      "Voluntariado",
      "Modificaciones post-estudios",
    ],
  },
  {
    category: "Residencia y renovaciones",
    icon: ScrollText,
    items: [
      "Residencia no lucrativa",
      "Renovación de residencia",
      "Residencia de larga duración cuando aplique",
      "Cambios desde estancia por estudios",
    ],
  },
  {
    category: "Familia y reagrupación",
    icon: Users,
    items: [
      "Reagrupación familiar",
      "Familiares de españoles",
      "Familiar de ciudadano comunitario",
      "Movilidad y renovaciones familiares",
    ],
  },
  {
    category: "Otros perfiles",
    icon: FileText,
    items: [
      "Inversores / Ley 14/2013 cuando aplique",
      "Casos con exigencia de seguro privado",
      "Personas sin acceso efectivo a sanidad pública",
      "Otros supuestos a revisar",
    ],
  },
];

const partnersData = [
  {
    name: "Academias de Español",
    desc: "Escuelas de idiomas que reciben estudiantes internacionales y necesitan asegurar que sus alumnos cumplen con los requisitos legales.",
    icon: BookOpen,
  },
  {
    name: "Universidades y Centros de Estudios",
    desc: "Instituciones educativas con programas de grado, máster o doctorado para estudiantes extracomunitarios.",
    icon: GraduationCap,
  },
  {
    name: "Asesorías y Gestorías",
    desc: "Despachos profesionales que tramitan expedientes de extranjería y buscan un partner de seguros fiable para sus clientes.",
    icon: Building2,
  },
  {
    name: "Agencias de Relocation",
    desc: "Empresas especializadas en la acogida de profesionales internacionales que necesitan un servicio integral de instalación en Madrid.",
    icon: Globe,
  },
];

const howItWorks = [
  {
    step: 1,
    title: "Cuéntanos tu situación",
    desc: "Dinos qué trámite necesitas (visado, NIE, TIE, estudios) y tu país de origen. Te orientamos en español o inglés.",
    icon: MessageCircle,
  },
  {
    step: 2,
    title: "Te proponemos opciones",
    desc: "En menos de 30 minutos te enviamos las alternativas que mejor encajan con tu perfil y los requisitos de tu expediente.",
    icon: FileText,
  },
  {
    step: 3,
    title: "Eliges y activamos",
    desc: "Confirmas la opción que prefieres y activamos tu seguro en menos de 24 horas. Recibirás el certificado para tu trámite al instante.",
    icon: Shield,
  },
  {
    step: 4,
    title: "Te acompañamos",
    desc: "Si tienes dudas durante el proceso o necesitas modificar algo, seguimos a tu lado. No desaparecemos después de contratar.",
    icon: HeartHandshake,
  },
];

const insuranceSchema = {
  "@context": "https://schema.org",
  "@type": "InsuranceAgency",
  name: "Valentín Protección Integral - Seguros para Extranjeros",
  provider: {
    "@type": "LocalBusiness",
    name: "Valentín Protección Integral",
    telephone: "+34603448765",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Boadilla del Monte",
      addressRegion: "Madrid",
      addressCountry: "ES",
    },
  },
  areaServed: ["Madrid", "Boadilla del Monte", "Majadahonda", "Pozuelo de Alarcón", "Las Rozas"],
  description:
    "Asesoramiento en seguros de salud para extranjeros en Madrid. Visado, NIE, TIE y estudiantes internacionales. Sin copagos, sin carencias.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

export const dynamic = "force-static";

export default function ExtranjerosPage() {
  const wGeneral = buildWhatsAppHref(
    "Hola, soy extranjero/a y necesito orientación sobre seguros para mi visado, NIE o TIE en Madrid. ¿Pueden ayudarme?"
  );
  const wEstudiantes = buildWhatsAppHref(
    "Hola, soy estudiante internacional y necesito un seguro para mis estudios en España. ¿Pueden orientarme?"
  );
  const wResidentes = buildWhatsAppHref(
    "Hola, necesito un seguro de salud para mi residencia en España (visado/NIE/TIE). ¿Pueden ayudarme con los requisitos?"
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(insuranceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header />
      <main className="min-h-screen bg-white">
        {/* ============================================================ */}
        {/* HERO — Profesional, clean, tecnológico, humano               */}
        {/* ============================================================ */}
        <section className="relative pt-20 pb-16 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
          {/* Halo tech */}
          <div className="absolute top-1/2 right-0 w-[600px] h-[600px] rounded-full bg-gradient-radial from-blue-100/40 via-blue-50/20 to-transparent blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-gradient-radial from-emerald-100/30 via-emerald-50/10 to-transparent blur-3xl pointer-events-none" />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-6xl relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left: Content */}
              <div>
                {/* Kicker */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-medium mb-6">
                  <Globe className="w-4 h-4" />
                  Seguros para extranjeros en Madrid
                </div>

                {/* H1 */}
                <h1 className="text-[42px] sm:text-[52px] lg:text-[60px] font-bold text-slate-900 leading-[0.95] tracking-tight mb-6">
                  Tu seguro para el visado,
                  <br />
                  <span className="text-blue-700">NIE o TIE</span>
                </h1>

                {/* Subcopy */}
                <p className="text-xl text-slate-600 leading-relaxed mb-8 max-w-lg">
                  Sin copagos, sin carencias, con repatriación incluida.
                  <br />
                  <span className="text-slate-500">
                    Te orientamos paso a paso para que cumplas con todos los requisitos.
                  </span>
                </p>

                {/* CTAs */}
                <div className="flex flex-wrap gap-4 mb-8">
                  <WhatsAppButton
                    href={wGeneral}
                    location="extranjeros-hero"
                    className="group inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all shadow-lg shadow-slate-900/20 hover:shadow-xl hover:-translate-y-0.5"
                  >
                    Consultar ahora
                  </WhatsAppButton>
                  <a
                    href="tel:603448765"
                    className="inline-flex items-center gap-2 bg-white text-slate-700 px-8 py-4 rounded-xl text-lg font-medium border border-slate-200 hover:border-slate-400 transition-all"
                  >
                    <Phone className="w-5 h-5" />
                    📞 603 44 87 65
                  </a>
                </div>

                {/* Trust pills */}
                <div className="flex flex-wrap gap-3">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-600 text-sm shadow-sm">
                    <Shield className="w-4 h-4 text-emerald-600" />
                    Sin copagos
                  </span>
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-600 text-sm shadow-sm">
                    <Clock className="w-4 h-4 text-blue-600" />
                    Sin carencias
                  </span>
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-600 text-sm shadow-sm">
                    <Globe className="w-4 h-4 text-slate-700" />
                    Repatriación incluida
                  </span>
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-600 text-sm shadow-sm">
                    <Award className="w-4 h-4 text-amber-600" />
                    DGSFP: C012479234434D
                  </span>
                </div>

                {/* Disclaimer */}
                <p className="text-xs text-slate-400 mt-6 leading-relaxed">
                  * El seguro no garantiza por sí mismo la concesión del visado o permiso de
                  residencia. La resolución corresponde a la administración competente. Te
                  orientamos sobre los requisitos habituales, pero cada caso es evaluado
                  individualmente por las autoridades de extranjería.
                </p>
              </div>

              {/* Right: Image */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100/40 to-emerald-100/20 rounded-3xl blur-2xl transform scale-95" />
                <div className="relative rounded-2xl overflow-hidden shadow-xl shadow-slate-200/50 border border-slate-100">
                  <Image
                    src="/images/extranjeros/extranjeros-hero.png"
                    alt="Personas revisando documentación para seguro médico de extranjería en España"
                    width={600}
                    height={450}
                    className="w-full h-auto object-cover object-top"
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* ELIGE TU SITUACIÓN — 2 cards: Students / Residents          */}
        {/* ============================================================ */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl">
            <div className="text-center mb-14">
              <p className="text-sm font-semibold tracking-widest text-blue-600 uppercase mb-3">
                Elige tu situación
              </p>
              <h2 className="text-[36px] sm:text-[42px] font-bold text-slate-900 leading-tight mb-4">
                ¿Eres estudiante o residente?
              </h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Cada perfil tiene requisitos distintos. Te ayudamos a encontrar lo que
                necesitas según tu caso.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Card: Estudiantes */}
              <div className="group relative bg-gradient-to-br from-blue-50 to-white rounded-2xl border border-blue-100 p-8 transition-all hover:shadow-xl hover:-translate-y-1">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-100/40 to-transparent rounded-bl-full pointer-events-none" />
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center mb-6">
                    <GraduationCap className="w-8 h-8 text-blue-700" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">
                    Estudiante internacional
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    Si vienes a estudiar a España (máster, grado, curso de español o
                    doctorado), necesitas un seguro de salud que cumpla con los requisitos
                    del visado de estudios. Sin copagos, sin carencias y con cobertura
                    durante toda tu estancia.
                  </p>
                  <ul className="space-y-3 mb-8">
                    {[
                      "Válido para visado de estudios",
                      "Cobertura en periodos vacacionales",
                      "Asistencia en viaje incluida",
                      "Certificado para tu expediente",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" />
                        <span className="text-slate-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <WhatsAppButton
                    href={wEstudiantes}
                    location="extranjeros-estudiantes"
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all shadow-md hover:shadow-lg"
                  >
                    Soy estudiante
                    <ArrowRight className="w-4 h-4" />
                  </WhatsAppButton>
                </div>
              </div>

              {/* Card: Residentes */}
              <div className="group relative bg-gradient-to-br from-emerald-50 to-white rounded-2xl border border-emerald-100 p-8 transition-all hover:shadow-xl hover:-translate-y-1">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-emerald-100/40 to-transparent rounded-bl-full pointer-events-none" />
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-100 flex items-center justify-center mb-6">
                    <Users className="w-8 h-8 text-emerald-700" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">
                    Residente o familiar
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    Si solicitas residencia no lucrativa, reagrupación familiar o
                    cualquier otro permiso de residencia, el seguro de salud privado es
                    un requisito obligatorio. Te ayudamos a cumplir con todos los
                    documentos que exige extranjería.
                  </p>
                  <ul className="space-y-3 mb-8">
                    {[
                      "Válido para NIE y TIE",
                      "Sin copagos ni carencias",
                      "Repatriación incluida",
                      "Cobertura para toda la unidad familiar",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" />
                        <span className="text-slate-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <WhatsAppButton
                    href={wResidentes}
                    location="extranjeros-residentes"
                    className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-xl font-semibold transition-all shadow-md hover:shadow-lg"
                  >
                    Soy residente
                    <ArrowRight className="w-4 h-4" />
                  </WhatsAppButton>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* TRÁMITES — Grid por categorías con id="tramites"            */}
        {/* ============================================================ */}
        <section id="tramites" className="py-20 bg-slate-50/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-6xl">
            <div className="text-center mb-14">
              <p className="text-sm font-semibold tracking-widest text-blue-600 uppercase mb-3">
                Trámites
              </p>
              <h2 className="text-[36px] sm:text-[42px] font-bold text-slate-900 leading-tight mb-4">
                ¿En qué podemos ayudarte?
              </h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Desde el visado hasta tu día a día en Madrid. Te cubrimos en cada paso.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {tramitesData.map((category, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-slate-100 p-8 transition-all hover:shadow-lg hover:-translate-y-0.5"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-xl bg-slate-100 flex items-center justify-center">
                      <category.icon className="w-7 h-7 text-slate-700" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">
                      {category.category}
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {category.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" />
                        <span className="text-slate-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* CTA after tramites */}
            <div className="text-center mt-12">
              <WhatsAppButton
                href={wGeneral}
                location="extranjeros-tramites"
                className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all shadow-lg hover:shadow-xl"
              >
                Consultar mi caso
                <ArrowRight className="w-5 h-5" />
              </WhatsAppButton>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* CÓMO FUNCIONA — Timeline (horizontal desktop, vertical mob)  */}
        {/* ============================================================ */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl">
            <div className="text-center mb-14">
              <p className="text-sm font-semibold tracking-widest text-blue-600 uppercase mb-3">
                Cómo funciona
              </p>
              <h2 className="text-[36px] sm:text-[42px] font-bold text-slate-900 leading-tight mb-4">
                De la consulta al certificado
              </h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Así de sencillo es obtener tu seguro para extranjería.
              </p>
            </div>

            {/* Desktop: horizontal timeline */}
            <div className="hidden md:block relative">
              {/* Connecting line */}
              <div className="absolute top-16 left-[12.5%] right-[12.5%] h-0.5 bg-slate-200">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-emerald-500 to-blue-500 bg-[length:200%_100%] animate-pulse rounded-full" />
              </div>

              <div className="grid grid-cols-4 gap-8">
                {howItWorks.map((item, idx) => (
                  <div key={idx} className="relative text-center">
                    {/* Step circle */}
                    <div className="relative mx-auto mb-6 w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-lg shadow-blue-200">
                      <item.icon className="w-7 h-7 text-white" />
                      <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-emerald-500 text-white text-xs font-bold flex items-center justify-center shadow-md">
                        {item.step}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile: vertical timeline */}
            <div className="md:hidden relative">
              {/* Vertical line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-slate-200" />

              <div className="space-y-10">
                {howItWorks.map((item, idx) => (
                  <div key={idx} className="relative flex gap-6">
                    {/* Step circle */}
                    <div className="relative z-10 shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-lg shadow-blue-200">
                      <item.icon className="w-7 h-7 text-white" />
                      <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-emerald-500 text-white text-xs font-bold flex items-center justify-center shadow-md">
                        {item.step}
                      </span>
                    </div>
                    <div className="pt-2">
                      <h3 className="text-lg font-bold text-slate-900 mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA after timeline */}
            <div className="text-center mt-14">
              <WhatsAppButton
                href={wGeneral}
                location="extranjeros-como-funciona"
                className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all shadow-lg hover:shadow-xl"
              >
                Empezar ahora
                <ArrowRight className="w-5 h-5" />
              </WhatsAppButton>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* DATOS MÍNIMOS — Profesional data collection section          */}
        {/* ============================================================ */}
        <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-4xl">
            <div className="bg-white rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/50 p-10 md:p-14">
              <div className="text-center mb-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-medium mb-4">
                  <Sparkles className="w-4 h-4" />
                  Datos mínimos para orientarte
                </div>
                <h2 className="text-[32px] sm:text-[38px] font-bold text-slate-900 leading-tight mb-4">
                  Cuéntanos tu caso
                </h2>
                <p className="text-lg text-slate-600 max-w-xl mx-auto">
                  Con solo estos datos podemos darte una orientación precisa y sin
                  compromiso.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 mb-10">
                {[
                  {
                    icon: UserCheck,
                    label: "País de origen",
                    desc: "Para conocer los requisitos específicos de tu nacionalidad",
                  },
                  {
                    icon: ScrollText,
                    label: "Tipo de trámite",
                    desc: "Visado de estudios, residencia no lucrativa, reagrupación, etc.",
                  },
                  {
                    icon: Calendar,
                    label: "Edad",
                    desc: "La prima varía según tu edad. Nosotros te damos el precio exacto",
                  },
                  {
                    icon: Users,
                    label: "¿Solo o en familia?",
                    desc: "Si vienes acompañado, necesitamos cubrir a toda la unidad familiar",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-4 p-5 rounded-xl bg-slate-50 border border-slate-100"
                  >
                    <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm shrink-0">
                      <item.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">
                        {item.label}
                      </h3>
                      <p className="text-sm text-slate-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <WhatsAppButton
                  href={wGeneral}
                  location="extranjeros-datos-minimos"
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-xl text-lg font-semibold transition-all shadow-lg hover:shadow-xl"
                >
                  <MessageCircle className="w-5 h-5" />
                  Enviar mis datos por WhatsApp
                </WhatsAppButton>
                <p className="text-sm text-slate-400 mt-4">
                  Respondemos en menos de 10 minutos
                </p>
                <p className="text-xs text-slate-400 mt-6 max-w-lg mx-auto leading-relaxed">
                  No envíes pasaporte, NIE ni información médica por formularios abiertos.
                  Para una primera orientación solo necesitamos datos básicos. Si hiciera
                  falta documentación adicional, te indicaremos el canal adecuado.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* PARTNERS — Academias, escuelas, asesores                    */}
        {/* ============================================================ */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl">
            <div className="text-center mb-14">
              <p className="text-sm font-semibold tracking-widest text-blue-600 uppercase mb-3">
                Partners
              </p>
              <h2 className="text-[36px] sm:text-[42px] font-bold text-slate-900 leading-tight mb-4">
                Colaboramos con centros y profesionales
              </h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Si trabajas con estudiantes internacionales o clientes extranjeros,
                podemos ser tu partner de confianza en seguros.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              {partnersData.map((partner, idx) => (
                <div
                  key={idx}
                  className="bg-slate-50 rounded-2xl border border-slate-100 p-8 transition-all hover:shadow-lg hover:-translate-y-0.5"
                >
                  <div className="w-14 h-14 rounded-xl bg-white flex items-center justify-center mb-6 shadow-sm">
                    <partner.icon className="w-7 h-7 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {partner.name}
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-6">{partner.desc}</p>
                  <WhatsAppButton
                    href={buildWhatsAppHref(
                      "Hola, soy un centro/asesoría y me gustaría saber cómo podemos colaborar en seguros para estudiantes internacionales o clientes extranjeros."
                    )}
                    location="extranjeros-partners"
                    className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                  >
                    Quiero colaborar
                    <ChevronRight className="w-4 h-4" />
                  </WhatsAppButton>
                </div>
              ))}
            </div>

            {/* Partners info block */}
            <div className="mt-12 bg-blue-50 rounded-2xl border border-blue-100 p-8 md:p-10">
              <div className="max-w-3xl mx-auto text-center">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  ¿Cómo funciona la colaboración?
                </h3>
                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                  Podemos preparar un circuito sencillo para que tus alumnos o clientes
                  sepan qué datos mínimos necesitamos, cómo contactarnos y qué pueden
                  esperar del proceso. Trabajamos caso a caso, sin campañas invasivas y
                  cuidando la protección de datos.
                </p>
                <WhatsAppButton
                  href={buildWhatsAppHref(
                    "Hola, soy un centro/asesoría y me gustaría saber cómo podemos colaborar en seguros para estudiantes internacionales o clientes extranjeros."
                  )}
                  location="extranjeros-partners-info"
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all shadow-lg hover:shadow-xl"
                >
                  Hablemos de colaboración
                  <ArrowRight className="w-5 h-5" />
                </WhatsAppButton>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* ASESOR — Sebastián con DGSFP info                           */}
        {/* ============================================================ */}
        <section className="py-20 bg-slate-50/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl">
            <div className="grid md:grid-cols-5 gap-10 items-center">
              {/* Left: Photo + badge */}
              <div className="md:col-span-2">
                <div className="relative mx-auto max-w-[280px]">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-100/40 to-emerald-100/20 rounded-3xl blur-2xl transform scale-95" />
                  <div className="relative rounded-2xl overflow-hidden shadow-xl shadow-slate-200/50 border border-slate-100">
                    <Image
                      src="/images/agent/sebastian.jpg"
                      alt="Sebastián Sifontes Valentín, agente de seguros vinculado registrado en la DGSFP"
                      width={400}
                      height={500}
                      className="w-full h-auto object-cover object-top"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  {/* DGSFP badge */}
                  <div className="absolute -bottom-3 -right-3 bg-white rounded-xl shadow-lg border border-slate-100 px-4 py-3">
                    <p className="text-xs font-bold text-slate-900">DGSFP</p>
                    <p className="text-[10px] text-slate-500">C046172295271S</p>
                  </div>
                </div>
              </div>

              {/* Right: Bio */}
              <div className="md:col-span-3">
                <p className="text-sm font-semibold tracking-widest text-blue-600 uppercase mb-3">
                  Tu asesor
                </p>
                <h2 className="text-[32px] sm:text-[38px] font-bold text-slate-900 leading-tight mb-4">
                  Sebastián Valentín
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                  Agente de seguros vinculado, registrado en la DGSFP con el número
                  C046172295271S. Especializado en seguros para extranjeros y
                  estudiantes internacionales en Madrid.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Más de 10 años de experiencia en el sector asegurador",
                    "Registrado en la DGSFP — total transparencia y legalidad",
                    "Atención personalizada en español e inglés",
                    "Te acompañamos durante todo el proceso, no solo en la contratación",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" />
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <WhatsAppButton
                  href={wGeneral}
                  location="extranjeros-asesor"
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all shadow-lg hover:shadow-xl"
                >
                  <MessageCircle className="w-5 h-5" />
                  Hablar con Sebastián
                </WhatsAppButton>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* FAQ — con FAQAccordion                                       */}
        {/* ============================================================ */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-3xl">
            <div className="text-center mb-14">
              <p className="text-sm font-semibold tracking-widest text-blue-600 uppercase mb-3">
                Preguntas frecuentes
              </p>
              <h2 className="text-[36px] sm:text-[42px] font-bold text-slate-900 leading-tight mb-4">
                Resolvemos tus dudas
              </h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Todo lo que necesitas saber sobre seguros para extranjeros en Madrid.
              </p>
            </div>

            <FAQAccordion items={faqItems} />

            {/* CTA after FAQ */}
            <div className="text-center mt-12">
              <WhatsAppButton
                href={wGeneral}
                location="extranjeros-faq"
                className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all shadow-lg hover:shadow-xl"
              >
                ¿Otra duda? Pregúntanos
                <ArrowRight className="w-5 h-5" />
              </WhatsAppButton>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* FINAL CTA — Fuerte llamada a WhatsApp                        */}
        {/* ============================================================ */}
        <section className="py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
          {/* Halo */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-radial from-blue-100/30 via-emerald-50/10 to-transparent blur-3xl pointer-events-none" />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-3xl relative z-10">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                Consulta gratuita
              </div>
              <h2 className="text-[36px] sm:text-[44px] font-bold text-slate-900 leading-tight mb-6">
                ¿Listo para empezar tu trámite?
              </h2>
              <p className="text-xl text-slate-600 max-w-xl mx-auto mb-10 leading-relaxed">
                Cuéntanos tu caso por WhatsApp y en menos de 30 minutos te
                orientamos sobre el seguro que necesitas para tu visado, NIE o TIE.
                Sin compromiso.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <WhatsAppButton
                  href={wGeneral}
                  location="extranjeros-final-cta"
                  className="group inline-flex items-center gap-3 bg-emerald-600 hover:bg-emerald-700 text-white px-10 py-5 rounded-xl text-xl font-semibold transition-all shadow-lg shadow-emerald-200 hover:shadow-xl hover:-translate-y-0.5"
                >
                  <MessageCircle className="w-6 h-6" />
                  Consultar por WhatsApp
                </WhatsAppButton>
                <a
                  href="tel:603448765"
                  className="inline-flex items-center gap-2 bg-white text-slate-700 px-8 py-5 rounded-xl text-lg font-medium border border-slate-200 hover:border-slate-400 transition-all"
                >
                  <Phone className="w-5 h-5" />
                  📞 603 44 87 65
                </a>
                <Link
                  href="/seguros/salud-extranjeros"
                  className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-5 rounded-xl text-lg font-medium border border-blue-200 hover:border-blue-400 hover:bg-blue-50 transition-all"
                >
                  <Shield className="w-5 h-5" />
                  Ver seguro salud extranjeros
                </Link>
              </div>
              <p className="text-sm text-slate-400 mt-6">
                Respondemos en menos de 10 minutos · Sin compromiso · 100% gratuito
              </p>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* GARANTÍAS — Componente reutilizable                           */}
        {/* ============================================================ */}
        <GarantiasSection brandColor="#2563eb" />

        {/* ============================================================ */}
        {/* FOOTER                                                        */}
        {/* ============================================================ */}
        <Footer />
      </main>

      {/* ============================================================ */}
      {/* STICKY WHATSAPP                                               */}
      {/* ============================================================ */}
      <StickyWhatsApp />
    </>
  );
}
