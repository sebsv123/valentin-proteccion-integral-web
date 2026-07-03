import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { StickyWhatsApp } from "@/components/sticky-whatsapp";
import { buildWhatsAppHref } from "@/lib/products";
import { siteConfig } from "@/lib/site-config";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { WhatsAppButton } from "@/components/whatsapp-button";
import AlquileresForm from "@/components/alquileres-form";
import { MadridSkyline } from "@/components/madrid-skyline";
import {
  GraduationCap,
  Home,
  Users,
  Building2,
  Briefcase,
  MapPin,
  Compass,
  Globe2,
  SlidersHorizontal,
  Search,
  CalendarClock,
  FileText,
  KeyRound,
  MessageSquare,
  ArrowRight,
  Train,
  BedDouble,
  Sofa,
  Handshake,
} from "lucide-react";

const CANONICAL = "https://valentinproteccionintegral.com/extranjeros/alquileres";
const CITY = siteConfig.housingService.scopeCity;

export const metadata: Metadata = {
  title: "Alquiler de pisos en Madrid para extranjeros | VPI",
  description:
    "Ayuda para buscar alquiler en Madrid desde el extranjero. Orientación para estudiantes, profesionales y familias durante la búsqueda, las visitas y la documentación.",
  keywords: [
    "alquiler pisos Madrid extranjeros",
    "alquiler Madrid estudiantes internacionales",
    "vivienda Madrid desde el extranjero",
    "alquiler Madrid familias internacionales",
    "buscar piso Madrid antes de llegar",
  ],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Alquiler de pisos en Madrid para estudiantes y familias internacionales",
    description:
      "Encuentra tu hogar en Madrid antes de llegar, con acompañamiento durante la búsqueda, las visitas, la documentación y la firma.",
    url: CANONICAL,
    siteName: siteConfig.brand.name,
    locale: "es_ES",
    type: "website",
  },
};

export const dynamic = "force-static";

const wMain = buildWhatsAppHref(
  "Hola, me gustaría orientación sobre alquiler de vivienda en Madrid para mi llegada a España."
);
const wStudents = buildWhatsAppHref(
  "Hola, soy estudiante internacional y busco alojamiento en Madrid para mi llegada."
);
const wFamilies = buildWhatsAppHref(
  "Hola, somos familia/profesional y buscamos vivienda en Madrid para nuestro traslado."
);
const wPartner = buildWhatsAppHref(
  "Hola, soy colaborador (academia/relocation/asesoría) y quiero derivar casos de vivienda + seguro."
);

const ZONES = [
  "Chamberí",
  "Moncloa y Argüelles",
  "Nuevos Ministerios",
  "Tribunal y Malasaña",
  "Barrio de Salamanca",
  "Retiro",
  "Chamartín",
  "Centro de Madrid",
];

const faqs = [
  {
    q: "¿Puedo pedir ayuda con la vivienda aunque aún no tenga seguro?",
    a: "Sí. Puedes contarnos tu caso de vivienda aunque todavía no hayas contratado un seguro. Si además lo necesitas, coordinamos las dos cosas; si no, te orientamos igualmente con la parte de alquiler.",
  },
  {
    q: "¿Trabajáis solo con estudiantes?",
    a: "No. Orientamos a estudiantes internacionales, pero también a profesionales, familias que se trasladan y perfiles en proceso de instalación en Madrid.",
  },
  {
    q: "¿También ayudáis a familias o residentes?",
    a: "Sí. Revisamos el caso de familias y profesionales para orientarte sobre opciones de vivienda más adecuadas a tu situación, fechas y zona.",
  },
  {
    q: "¿Tenéis pisos propios?",
    a: "No somos una inmobiliaria ni disponemos de un inventario propio de pisos. Ofrecemos orientación y acompañamiento durante la búsqueda, y coordinamos con propietarios, agencias y colaboradores cuando corresponde.",
  },
  {
    q: "¿La disponibilidad está garantizada?",
    a: "No podemos garantizar disponibilidad. Las opciones dependen del perfil, la zona, las fechas, el presupuesto y las condiciones de cada propiedad. Te orientamos con transparencia sobre lo que es realista en tu caso.",
  },
  {
    q: "¿Podéis ayudarme antes de llegar a España?",
    a: "Sí. Puedes escribirnos antes de viajar para ir preparando la búsqueda y, si lo necesitas, tu seguro, de modo que llegues a Madrid con más tranquilidad.",
  },
  {
    q: "¿En qué zonas de Madrid podéis ayudarme?",
    a: "Trabajamos en Madrid y su área de influencia, orientando la búsqueda hacia zonas bien comunicadas. La disponibilidad concreta en cada barrio depende de las fechas, el presupuesto y las condiciones de cada propiedad.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: `Alquiler de pisos en ${CITY} para extranjeros`,
  url: CANONICAL,
  description:
    "Servicio de orientación en vivienda y alquiler en Madrid para estudiantes, profesionales y familias internacionales.",
  isPartOf: { "@type": "WebSite", name: siteConfig.brand.name, url: siteConfig.brand.domain },
  about: { "@type": "Organization", name: siteConfig.brand.name },
};

export default function AlquileresPage() {
  const { housingService } = siteConfig;
  const coordinatorLine =
    housingService.showPartner && housingService.partnerName
      ? `${housingService.coordinatorLine} En colaboración con ${housingService.partnerName}.`
      : housingService.coordinatorLine;

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Inicio", url: "/" },
          { name: "Extranjeros", url: "/extranjeros" },
          { name: "Alquileres", url: "/extranjeros/alquileres" },
        ]}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <Header />
      <main className="bg-[#F7F3EA]">
        {/* ═══════════════════════════════════════════
            HERO — azul noche + skyline abstracto
            ═══════════════════════════════════════════ */}
        <section className="relative overflow-hidden bg-[#0A1E3F] pt-24 pb-40 text-white sm:pb-48">
          {/* Formas grandes de fondo, sutiles */}
          <div className="pointer-events-none absolute -top-32 -right-24 h-[26rem] w-[26rem] rounded-full bg-[#1FB8A6]/10 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-24 h-[24rem] w-[24rem] rounded-full bg-white/5 blur-2xl" />

          <div className="container relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6">
            <nav className="mb-6 text-sm text-slate-400" aria-label="Migas de pan">
              <Link href="/extranjeros" className="hover:text-white">Extranjeros</Link>
              <span className="mx-2">/</span>
              <span className="text-slate-200">Alquileres</span>
            </nav>

            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#1FB8A6]/15 px-4 py-1.5 text-sm font-medium text-[#7FEBD9]">
              <Home className="h-4 w-4" />
              Vivienda para tu llegada a España
            </span>

            <h1 className="mx-auto mt-5 max-w-3xl text-3xl font-bold leading-tight sm:text-5xl">
              Alquiler de pisos en Madrid para estudiantes y familias internacionales
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-300">
              Encuentra tu hogar en Madrid antes de llegar, con acompañamiento personalizado
              durante la búsqueda, las visitas, la documentación y la firma.
            </p>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-[#7FEBD9]">
              También podemos coordinar tu seguro para la llegada a España.
            </p>

            <div className="mt-7 flex flex-wrap justify-center gap-2">
              {["Desde el extranjero", "Estudiantes y familias", "Madrid bien conectado"].map((t) => (
                <span key={t} className="rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm text-slate-200">
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href="#solicitar"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#1FB8A6] px-6 py-3.5 font-semibold text-[#04231f] transition-all hover:bg-[#2fd0bc]"
              >
                Cuéntanos qué vivienda necesitas
                <ArrowRight className="h-4 w-4" />
              </a>
              <WhatsAppButton
                href={wMain}
                location="alquileres-hero-whatsapp"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3.5 font-semibold text-white transition-all hover:bg-white/20"
              >
                Hablar por WhatsApp
              </WhatsAppButton>
            </div>

            <p className="mx-auto mt-6 max-w-md text-sm text-slate-400">
              Búsqueda, visitas, documentación y acompañamiento hasta la firma.
            </p>
          </div>

          {/* Skyline abstracto en la parte baja del hero */}
          <MadridSkyline className="absolute bottom-0 left-0 z-0 h-32 w-full text-[#1FB8A6] sm:h-40" />
        </section>

        {/* ═══════════════════════════════════════════
            PROPUESTA DE VALOR
            ═══════════════════════════════════════════ */}
        <section className="bg-[#F7F3EA] py-20">
          <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <h2 className="text-3xl font-bold text-[#0A1E3F] sm:text-4xl">
                Tu hogar en Madrid, incluso antes de llegar
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {[
                { icon: Compass, title: "Ubicación y conexión", desc: "Orientamos la búsqueda hacia zonas bien comunicadas con universidades, centros de estudio, áreas empresariales y servicios." },
                { icon: Globe2, title: "Acompañamiento internacional", desc: "Coordinamos el proceso cuando el cliente todavía se encuentra fuera de España y facilitamos las distintas fases de la búsqueda." },
                { icon: SlidersHorizontal, title: "Viviendas adaptadas", desc: "Revisamos presupuesto, fecha de llegada, número de personas, duración y preferencias de ubicación." },
              ].map((c) => {
                const Icon = c.icon;
                return (
                  <div key={c.title} className="rounded-3xl border border-[#0A1E3F]/10 bg-white p-7 shadow-[0_10px_40px_rgba(10,30,63,0.06)]">
                    <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E7F7F3] text-[#0E7C6B]">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-bold text-[#0A1E3F]">{c.title}</h3>
                    <p className="mt-2 leading-relaxed text-slate-600">{c.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            MADRID BIEN CONECTADO — panel oscuro
            ═══════════════════════════════════════════ */}
        <section className="bg-[#F7F3EA] pb-20">
          <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-[2rem] bg-[#0A1E3F] p-8 text-white sm:p-12">
              <div className="pointer-events-none absolute -top-20 -right-16 h-72 w-72 rounded-full bg-[#1FB8A6]/10 blur-2xl" />
              <div className="relative grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
                <div>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-sm text-[#7FEBD9]">
                    <Train className="h-4 w-4" />
                    Madrid bien conectado
                  </span>
                  <h2 className="mt-4 text-2xl font-bold sm:text-3xl">
                    Zonas habituales de interés
                  </h2>
                  <p className="mt-3 max-w-md text-slate-300">
                    Orientamos la búsqueda hacia barrios bien comunicados por transporte
                    público y cercanos a universidades y áreas de trabajo.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {ZONES.map((z) => (
                      <span key={z} className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-sm text-slate-100">
                        <MapPin className="h-3.5 w-3.5 text-[#7FEBD9]" />
                        {z}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Diagrama abstracto de conexiones (no es un mapa geográfico) */}
                <div className="relative">
                  <svg viewBox="0 0 400 260" className="w-full" role="img" aria-label="Diagrama abstracto de conexiones entre zonas de Madrid">
                    <g stroke="#1FB8A6" strokeWidth="2.5" opacity="0.5" fill="none">
                      <path d="M60 60 L200 40 L340 70" />
                      <path d="M40 140 L200 130 L360 150" />
                      <path d="M70 210 L200 220 L330 200" />
                      <path d="M200 40 L200 220" />
                      <path d="M60 60 L200 130 L340 70" />
                      <path d="M40 140 L200 220 L360 150" />
                    </g>
                    <g fill="#7FEBD9">
                      {[
                        [60, 60], [200, 40], [340, 70],
                        [40, 140], [200, 130], [360, 150],
                        [70, 210], [200, 220], [330, 200],
                      ].map(([cx, cy]) => (
                        <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="6" />
                      ))}
                    </g>
                    <circle cx="200" cy="130" r="11" fill="none" stroke="#7FEBD9" strokeWidth="2.5" />
                  </svg>
                </div>
              </div>

              <p className="relative mt-8 border-t border-white/10 pt-5 text-sm leading-6 text-slate-400">
                Las zonas indicadas representan áreas habituales de interés. La disponibilidad
                depende de las fechas, el presupuesto, el perfil del solicitante y las
                condiciones de cada propiedad.
              </p>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            PROCESO — 5 pasos con numeración grande
            ═══════════════════════════════════════════ */}
        <section className="bg-white py-20">
          <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <h2 className="text-3xl font-bold text-[#0A1E3F] sm:text-4xl">Cómo funciona</h2>
            </div>
            <div className="space-y-5">
              {[
                { n: "01", icon: Search, title: "Conocemos tu situación", desc: "Analizamos presupuesto, fechas, motivo del traslado, número de personas, universidad o lugar de trabajo y zonas preferidas." },
                { n: "02", icon: SlidersHorizontal, title: "Buscamos opciones adecuadas", desc: "Filtramos opciones que encajen con el perfil y con las condiciones solicitadas por propietarios o agencias." },
                { n: "03", icon: CalendarClock, title: "Coordinamos las visitas", desc: "Organizamos visitas presenciales o virtuales y facilitamos la comunicación entre las partes." },
                { n: "04", icon: FileText, title: "Te orientamos con la documentación", desc: "Explicamos qué justificantes, garantías económicas y datos pueden solicitarse durante el proceso." },
                { n: "05", icon: KeyRound, title: "Te acompañamos hasta la firma", desc: "Ayudamos a comprender los puntos esenciales y a completar el proceso con mayor claridad." },
              ].map((step) => {
                const Icon = step.icon;
                return (
                  <div key={step.n} className="flex items-start gap-5 rounded-3xl border border-[#0A1E3F]/10 bg-[#F7F3EA] p-6 sm:gap-7 sm:p-7">
                    <div className="font-bold leading-none text-[#1FB8A6]/40 text-4xl sm:text-6xl tabular-nums">
                      {step.n}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 text-[#0E7C6B]">
                        <Icon className="h-5 w-5" />
                        <h3 className="text-lg font-bold text-[#0A1E3F]">{step.title}</h3>
                      </div>
                      <p className="mt-2 leading-relaxed text-slate-600">{step.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <p className="mx-auto mt-8 max-w-3xl text-center text-sm text-slate-500">
              No prestamos asesoramiento jurídico sobre el contrato. Para la revisión legal del
              contrato de arrendamiento, recomendamos asesoramiento jurídico independiente.
            </p>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            PERFILES PRINCIPALES
            ═══════════════════════════════════════════ */}
        <section className="bg-[#F7F3EA] py-20">
          <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <h2 className="text-3xl font-bold text-[#0A1E3F] sm:text-4xl">Para quién es</h2>
            </div>
            <div className="grid gap-6 lg:grid-cols-2">
              {/* Estudiantes */}
              <div className="rounded-3xl border border-[#0A1E3F]/10 bg-white p-8 shadow-[0_10px_40px_rgba(10,30,63,0.06)]">
                <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0A1E3F] text-white">
                  <GraduationCap className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold text-[#0A1E3F]">Estudiantes internacionales</h3>
                <ul className="mt-4 space-y-3 text-slate-600">
                  {[
                    { icon: Compass, t: "Conexión con universidades y centros de estudio." },
                    { icon: BedDouble, t: "Opciones individuales o compartidas." },
                    { icon: Train, t: "Transporte público bien comunicado." },
                    { icon: FileText, t: "Orientación sobre la documentación." },
                  ].map((it) => {
                    const Icon = it.icon;
                    return (
                      <li key={it.t} className="flex items-start gap-3">
                        <Icon className="mt-0.5 h-5 w-5 flex-none text-[#0E7C6B]" />
                        <span>{it.t}</span>
                      </li>
                    );
                  })}
                </ul>
                <WhatsAppButton
                  href={wStudents}
                  location="alquileres-perfil-estudiantes"
                  className="mt-6 inline-flex items-center gap-2 font-semibold text-[#0E7C6B] hover:text-[#0b6559]"
                >
                  Soy estudiante <ArrowRight className="h-4 w-4" />
                </WhatsAppButton>
              </div>

              {/* Familias y profesionales */}
              <div className="rounded-3xl border border-[#0A1E3F]/10 bg-white p-8 shadow-[0_10px_40px_rgba(10,30,63,0.06)]">
                <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0A1E3F] text-white">
                  <Users className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold text-[#0A1E3F]">Familias y profesionales</h3>
                <ul className="mt-4 space-y-3 text-slate-600">
                  {[
                    { icon: Home, t: "Número de habitaciones según tu caso." },
                    { icon: Briefcase, t: "Cercanía al trabajo o centro de estudios." },
                    { icon: Train, t: "Servicios y transporte." },
                    { icon: Sofa, t: "Amueblado o sin amueblar." },
                    { icon: CalendarClock, t: "Estancias de media o larga duración." },
                  ].map((it) => {
                    const Icon = it.icon;
                    return (
                      <li key={it.t} className="flex items-start gap-3">
                        <Icon className="mt-0.5 h-5 w-5 flex-none text-[#0E7C6B]" />
                        <span>{it.t}</span>
                      </li>
                    );
                  })}
                </ul>
                <WhatsAppButton
                  href={wFamilies}
                  location="alquileres-perfil-familias"
                  className="mt-6 inline-flex items-center gap-2 font-semibold text-[#0E7C6B] hover:text-[#0b6559]"
                >
                  Somos familia o profesional <ArrowRight className="h-4 w-4" />
                </WhatsAppButton>
              </div>
            </div>

            {/* Colaboradores — secundario */}
            <div className="mt-6 flex flex-col items-start justify-between gap-4 rounded-3xl border border-[#0A1E3F]/10 bg-white/60 p-6 sm:flex-row sm:items-center">
              <div className="flex items-start gap-4">
                <div className="inline-flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-[#E7F7F3] text-[#0E7C6B]">
                  <Building2 className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-[#0A1E3F]">Academias, relocation y asesorías</h3>
                  <p className="mt-1 text-sm text-slate-600">
                    Si trabajas con perfiles internacionales y quieres derivar casos de vivienda + seguro.
                  </p>
                </div>
              </div>
              <WhatsAppButton
                href={wPartner}
                location="alquileres-perfil-colaboradores"
                className="inline-flex flex-none items-center gap-2 rounded-xl border border-[#0A1E3F]/15 px-5 py-3 text-sm font-semibold text-[#0A1E3F] hover:bg-[#0A1E3F]/5"
              >
                Hablar sobre colaboración
              </WhatsAppButton>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            FORMULARIO
            ═══════════════════════════════════════════ */}
        <section id="solicitar" className="scroll-mt-24 bg-white py-20">
          <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <AlquileresForm />
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            FAQ + nota de condiciones
            ═══════════════════════════════════════════ */}
        <section className="bg-[#F7F3EA] py-20">
          <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-10 text-center text-3xl font-bold text-[#0A1E3F] sm:text-4xl">
              Preguntas frecuentes
            </h2>
            <div className="space-y-3">
              {faqs.map((f) => (
                <details key={f.q} className="group rounded-2xl border border-[#0A1E3F]/10 bg-white p-5">
                  <summary className="flex cursor-pointer items-center justify-between gap-4 font-semibold text-[#0A1E3F]">
                    {f.q}
                    <span className="text-[#0E7C6B] transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 leading-relaxed text-slate-600">{f.a}</p>
                </details>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-[#0A1E3F]/10 bg-white p-5 text-sm leading-6 text-slate-500">
              <p>
                Las viviendas están sujetas a disponibilidad, condiciones del propietario,
                estudio del perfil y aceptación de la documentación aportada. Las características
                de cada alquiler y los servicios prestados se informarán antes de iniciar el
                proceso.
              </p>
              <p className="mt-3 text-slate-400">{coordinatorLine}</p>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            CTA FINAL
            ═══════════════════════════════════════════ */}
        <section className="bg-[#0A1E3F] py-20 text-white">
          <div className="container mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <Handshake className="mx-auto mb-6 h-12 w-12 text-[#7FEBD9]" />
            <h2 className="text-2xl font-bold sm:text-4xl">
              ¿Vienes a Madrid? Cuéntanos qué vivienda necesitas y te acompañamos
            </h2>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <WhatsAppButton
                href={wMain}
                location="alquileres-cta-final-whatsapp"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#1FB8A6] px-6 py-3.5 font-semibold text-[#04231f] transition-all hover:bg-[#2fd0bc]"
              >
                <MessageSquare className="h-5 w-5" />
                Hablar por WhatsApp
              </WhatsAppButton>
              <a
                href="#solicitar"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3.5 font-semibold text-white transition-all hover:bg-white/20"
              >
                Solicitar orientación
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <StickyWhatsApp />
    </>
  );
}
