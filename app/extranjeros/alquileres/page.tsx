import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { StickyWhatsApp } from "@/components/sticky-whatsapp";
import { buildWhatsAppHref } from "@/lib/products";
import { siteConfig } from "@/lib/site-config";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { WhatsAppButton } from "@/components/whatsapp-button";
import AlquileresForm from "@/components/alquileres-form";
import { ArrowRight } from "lucide-react";

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
const wPeru = buildWhatsAppHref(
  "Hola, quiero iniciar mi proceso de vivienda en Madrid desde Perú, en colaboración con VIP Global Perú."
);

const ZONE_GROUPS = [
  {
    title: "Universidades y estudiantes",
    criteria: "Cerca de los campus y de la vida académica del día a día.",
    zones: ["Moncloa y Argüelles", "Tribunal y Malasaña"],
  },
  {
    title: "Trabajo y conexión",
    criteria: "Entornos de oficinas con buen enlace de transporte.",
    zones: ["Nuevos Ministerios", "Chamartín"],
  },
  {
    title: "Vida urbana",
    criteria: "Ritmo de ciudad, comercio de calle y ambiente social.",
    zones: ["Centro de Madrid", "Chamberí"],
  },
  {
    title: "Familias y tranquilidad",
    criteria: "Espacios más calmados para el día a día en familia.",
    zones: ["Barrio de Salamanca", "Retiro"],
  },
];

const VIP_STEPS = [
  { n: "01", label: "Orientación inicial en Perú" },
  { n: "02", label: "Coordinación de vivienda en Madrid" },
  { n: "03", label: "Acompañamiento en documentación y llegada" },
];

const VALUE_PROPS = [
  { n: "01", title: "Búsqueda con contexto", desc: "Revisamos fechas, presupuesto, duración, zonas y necesidades reales." },
  { n: "02", title: "Coordinación desde el extranjero", desc: "Facilitamos visitas presenciales o virtuales y la comunicación durante el proceso." },
  { n: "03", title: "Documentación y firma", desc: "Te orientamos sobre la documentación habitual y los siguientes pasos, sin sustituir el asesoramiento jurídico." },
];

const PROCESS_STEPS = [
  { n: "01", title: "Perfil", desc: "Conocemos tu situación: presupuesto, fechas, motivo del traslado y zonas preferidas." },
  { n: "02", title: "Búsqueda", desc: "Filtramos opciones que encajen con tu perfil y con las condiciones de propietarios o agencias." },
  { n: "03", title: "Visitas", desc: "Coordinamos visitas presenciales o virtuales y la comunicación entre las partes." },
  { n: "04", title: "Documentación", desc: "Te orientamos sobre justificantes, garantías económicas y datos habituales del proceso." },
  { n: "05", title: "Firma", desc: "Te acompañamos hasta comprender y completar el proceso con claridad." },
];

const STUDENT_POINTS = [
  "Conexión con universidades y centros de estudio.",
  "Opciones individuales o compartidas.",
  "Orientación sobre la documentación.",
];

const FAMILY_POINTS = [
  "Número de habitaciones según tu caso.",
  "Amueblado o sin amueblar, cerca del trabajo o el colegio.",
  "Estancias de media o larga duración.",
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
      <main className="overflow-x-clip bg-[#F7F3EA]">
        {/* ═══════════════════════════════════════════
            HERO — photo-led, imagen a sangre
            ═══════════════════════════════════════════ */}
        <section className="relative flex min-h-[640px] items-end overflow-hidden text-white sm:min-h-[720px] lg:min-h-[86vh]">
          <div className="absolute inset-0">
            <Image
              src="/images/alquileres/hero-interior-luminoso.webp"
              alt="Interior residencial contemporáneo con abundante luz natural"
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--blue-deep)]/92 via-[var(--blue-deep)]/55 to-[var(--blue-deep)]/10" />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--blue-deep)]/70 via-transparent to-transparent" />
          </div>

          <div className="container relative z-10 mx-auto px-4 pb-14 pt-32 sm:px-6 lg:px-8 lg:pb-20">
            <nav className="mb-6 text-sm text-white/50" aria-label="Migas de pan">
              <Link href="/extranjeros" className="hover:text-white">Extranjeros</Link>
              <span className="mx-2">/</span>
              <span className="text-white/80">Alquileres</span>
            </nav>

            <p className="kicker !text-white/65">Vivienda para tu llegada a España</p>

            <h1 className="mt-4 max-w-2xl font-heading text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Alquiler de pisos en Madrid para estudiantes y familias internacionales
            </h1>

            <p className="mt-5 max-w-lg text-lg leading-8 text-white/80">
              Encuentra tu hogar en Madrid antes de llegar, con acompañamiento durante la
              búsqueda, las visitas, la documentación y la firma.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
              <a
                href="#solicitar"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--green)] px-6 py-3.5 font-semibold text-[var(--blue-deep)] transition-all hover:brightness-105"
              >
                Iniciar mi búsqueda
                <ArrowRight className="h-4 w-4" />
              </a>
              <WhatsAppButton
                href={wMain}
                location="alquileres-hero-whatsapp"
                className="text-sm font-semibold text-white/70 underline decoration-white/30 underline-offset-4 transition hover:text-white"
              >
                Hablar por WhatsApp
              </WhatsAppButton>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-1.5 text-xs text-white/50">
              <span>Búsqueda desde el extranjero</span>
              <span>·</span>
              <span>Visitas presenciales o virtuales</span>
              <span>·</span>
              <span>Apoyo documental</span>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            MINI FICHA — banda editorial, enlaza al formulario
            ═══════════════════════════════════════════ */}
        <section className="relative bg-[#F7F3EA]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <a
              href="#solicitar"
              className="group relative -mt-10 mb-4 block rounded-[8px] border border-[var(--blue-deep)]/10 bg-white p-6 shadow-[0_20px_50px_-24px_rgba(0,34,68,0.35)] transition hover:border-[var(--blue-deep)]/20 sm:-mt-14 sm:p-8 lg:-mt-16"
            >
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--green)]">
                Cuéntanos qué estás buscando
              </p>
              <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_1fr_auto] lg:items-end lg:gap-8">
                {[
                  { label: "Perfil", value: "Estudiante, familia, profesional…" },
                  { label: "Zona", value: "Chamberí, Retiro, Salamanca…" },
                  { label: "Presupuesto", value: "Ej. 500–700 € / mes" },
                  { label: "Fecha de llegada", value: "Ej. sept. 2026" },
                ].map((f) => (
                  <div key={f.label} className="border-b border-[var(--blue-deep)]/10 pb-3 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-6">
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">{f.label}</p>
                    <p className="mt-1 text-base font-medium text-[var(--blue-deep)]">{f.value}</p>
                  </div>
                ))}
                <div className="flex items-center gap-2 font-semibold text-[var(--blue-deep)] transition group-hover:text-[var(--green)] lg:justify-self-end">
                  Iniciar mi búsqueda <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </a>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            PROPUESTA DE VALOR
            ═══════════════════════════════════════════ */}
        <section className="bg-[#F7F3EA] pb-20">
          <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
              <div>
                <p className="kicker">Cómo te acompañamos</p>
                <h2 className="mt-3 font-heading text-3xl font-bold text-[var(--blue-deep)] sm:text-4xl">
                  Tu hogar en Madrid, incluso antes de llegar
                </h2>
                <p className="mt-4 max-w-sm leading-relaxed text-slate-600">
                  Un acompañamiento cercano y realista, pensado para quien organiza su
                  mudanza a Madrid desde fuera de España.
                </p>
              </div>
              <div className="border-t border-[var(--blue-deep)]/10">
                {VALUE_PROPS.map((item) => (
                  <div key={item.n} className="flex gap-6 border-b border-[var(--blue-deep)]/10 py-7">
                    <span className="font-heading text-xl font-bold text-[var(--green)]">{item.n}</span>
                    <div>
                      <h3 className="text-lg font-bold text-[var(--blue-deep)]">{item.title}</h3>
                      <p className="mt-1.5 leading-relaxed text-slate-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            MADRID BIEN CONECTADO — experiencia visual
            ═══════════════════════════════════════════ */}
        <section className="bg-[var(--blue-deep)] text-white">
          <div className="grid lg:grid-cols-[0.4fr_0.6fr] 2xl:grid-cols-[0.36fr_0.64fr]">
            <div className="relative min-h-[280px] sm:min-h-[380px] lg:min-h-0">
              <Image
                src="/images/alquileres/madrid-arquitectura-contemporanea.webp"
                alt="Arquitectura contemporánea en Madrid"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 40vw, 100vw"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--blue-deep)]/50 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-[var(--blue-deep)]/30" />
            </div>

            <div className="px-4 py-16 sm:px-6 lg:px-14 lg:py-20 2xl:px-20 2xl:py-24">
              <p className="kicker !text-white/60">Madrid bien conectado</p>
              <h2 className="mt-3 max-w-2xl font-heading text-3xl font-bold sm:text-4xl 2xl:text-5xl">
                Cada zona, una forma distinta de vivir Madrid
              </h2>
              <p className="mt-4 max-w-xl leading-relaxed text-white/65 2xl:text-lg">
                Orientamos la búsqueda hacia barrios bien comunicados, agrupados por el tipo
                de vida que ofrecen más que por su ubicación en un mapa.
              </p>

              <div className="mt-10 grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:gap-x-16 2xl:mt-16 2xl:gap-x-20 2xl:gap-y-14">
                {ZONE_GROUPS.map((group) => (
                  <div key={group.title} className="border-t border-white/15 pt-4">
                    <h3 className="font-heading text-lg font-bold text-white 2xl:text-xl">{group.title}</h3>
                    <p className="mt-1.5 text-sm italic leading-6 text-white/50 2xl:text-base">{group.criteria}</p>
                    <p className="mt-2 text-sm leading-6 text-white/70 2xl:text-base">{group.zones.join(" · ")}</p>
                  </div>
                ))}
              </div>

              <p className="mt-12 max-w-xl text-sm leading-6 text-white/45 2xl:mt-16">
                La disponibilidad depende de las fechas, el presupuesto, el perfil y las
                condiciones de cada propiedad.
              </p>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            PROCESO — línea editorial, numeración sobria
            ═══════════════════════════════════════════ */}
        <section className="bg-[#F7F3EA] py-20">
          <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 max-w-2xl">
              <p className="kicker">Cómo funciona</p>
              <h2 className="mt-3 font-heading text-3xl font-bold text-[var(--blue-deep)] sm:text-4xl">
                De la primera consulta a la firma
              </h2>
            </div>
            <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[8px] lg:sticky lg:top-28">
                <Image
                  src="/images/alquileres/proceso-visita-vivienda.webp"
                  alt="Personas durante una visita ilustrativa a una vivienda"
                  fill
                  className="object-cover object-[60%_40%]"
                  sizes="(min-width: 1024px) 42vw, 100vw"
                  loading="lazy"
                />
              </div>
              <div>
                <div className="border-t border-[var(--blue-deep)]/10">
                  {PROCESS_STEPS.map((step) => (
                    <div key={step.n} className="flex flex-col gap-2 border-b border-[var(--blue-deep)]/10 py-7 sm:flex-row sm:gap-8">
                      <span className="font-heading text-3xl font-bold tabular-nums text-[var(--green)] sm:w-16 sm:shrink-0">
                        {step.n}
                      </span>
                      <div>
                        <h3 className="text-lg font-bold text-[var(--blue-deep)]">{step.title}</h3>
                        <p className="mt-1.5 max-w-2xl leading-relaxed text-slate-600">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="mt-8 max-w-2xl text-sm text-slate-500">
                  No prestamos asesoramiento jurídico sobre el contrato. Para la revisión legal del
                  contrato de arrendamiento, recomendamos asesoramiento jurídico independiente.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            PERFILES — bloques fotográficos
            ═══════════════════════════════════════════ */}
        <section className="bg-white py-20">
          <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 max-w-2xl">
              <p className="kicker">Para quién es</p>
              <h2 className="mt-3 font-heading text-3xl font-bold text-[var(--blue-deep)] sm:text-4xl">
                Estudiantes, familias y profesionales
              </h2>
            </div>
            <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
              {/* Estudiantes */}
              <article>
                <div className="relative aspect-[5/6] overflow-hidden rounded-[8px]">
                  <Image
                    src="/images/alquileres/perfil-estudiantes.webp"
                    alt="Estudiantes compartiendo un apartamento"
                    fill
                    className="object-cover object-[50%_30%]"
                    sizes="(min-width: 1024px) 45vw, 100vw"
                    loading="lazy"
                  />
                </div>
                <h3 className="mt-6 font-heading text-2xl font-bold text-[var(--blue-deep)]">Estudiantes internacionales</h3>
                <p className="mt-2 leading-relaxed text-slate-600">
                  Llegas a Madrid para estudiar y necesitas un sitio donde instalarte sin
                  perder tiempo entre clases, trámites y primeras semanas de curso.
                </p>
                <ul className="mt-4 space-y-2.5 text-slate-600">
                  {STUDENT_POINTS.map((point) => (
                    <li key={point} className="flex items-start gap-2.5">
                      <span className="mt-2.5 h-1 w-1 flex-none rounded-full bg-[var(--green)]" aria-hidden="true" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <WhatsAppButton
                  href={wStudents}
                  location="alquileres-perfil-estudiantes"
                  className="mt-5 inline-flex items-center gap-2 font-semibold text-[var(--blue-deep)] underline decoration-[var(--green)]/50 underline-offset-4 hover:text-[var(--green)]"
                >
                  Soy estudiante <ArrowRight className="h-4 w-4" />
                </WhatsAppButton>
              </article>

              {/* Familias y profesionales */}
              <article className="lg:mt-20">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[8px]">
                  <Image
                    src="/images/alquileres/perfil-familias-mudanza.webp"
                    alt="Familia durante una mudanza a su nuevo hogar"
                    fill
                    className="object-cover object-[60%_45%]"
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    loading="lazy"
                  />
                </div>
                <h3 className="mt-6 font-heading text-2xl font-bold text-[var(--blue-deep)]">Familias y profesionales</h3>
                <p className="mt-2 leading-relaxed text-slate-600">
                  Un traslado a Madrid implica organizar mucho más que una mudanza. Te
                  ayudamos a que la vivienda deje de ser la parte incierta del proceso.
                </p>
                <ul className="mt-4 space-y-2.5 text-slate-600">
                  {FAMILY_POINTS.map((point) => (
                    <li key={point} className="flex items-start gap-2.5">
                      <span className="mt-2.5 h-1 w-1 flex-none rounded-full bg-[var(--green)]" aria-hidden="true" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <WhatsAppButton
                  href={wFamilies}
                  location="alquileres-perfil-familias"
                  className="mt-5 inline-flex items-center gap-2 font-semibold text-[var(--blue-deep)] underline decoration-[var(--green)]/50 underline-offset-4 hover:text-[var(--green)]"
                >
                  Somos familia o profesional <ArrowRight className="h-4 w-4" />
                </WhatsAppButton>
              </article>
            </div>

            {/* Colaboradores — secundario, discreto */}
            <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-[var(--blue-deep)]/10 pt-8 sm:flex-row sm:items-center">
              <div>
                <h3 className="font-semibold text-[var(--blue-deep)]">Academias, relocation y asesorías</h3>
                <p className="mt-1 text-sm text-slate-500">
                  Si trabajas con perfiles internacionales y quieres derivar casos de vivienda + seguro.
                </p>
              </div>
              <WhatsAppButton
                href={wPartner}
                location="alquileres-perfil-colaboradores"
                className="inline-flex flex-none items-center gap-2 text-sm font-semibold text-[var(--blue-deep)] underline decoration-[var(--blue-deep)]/25 underline-offset-4 hover:text-[var(--green)]"
              >
                Hablar sobre colaboración
              </WhatsAppButton>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            COLABORACIÓN EN ORIGEN — VIP Global Perú
            ═══════════════════════════════════════════ */}
        <section className="bg-[#F7F3EA] py-20">
          <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-16">
              <div className="flex items-center justify-center rounded-[8px] border border-[var(--blue-deep)]/10 bg-white p-10 sm:p-12">
                <div className="relative h-16 w-full max-w-[260px] sm:h-20">
                  <Image
                    src="/images/partners/vip-global-peru.png"
                    alt="VIP Global Perú - Soluciones Administrativas"
                    fill
                    className="object-contain"
                    sizes="260px"
                    loading="lazy"
                  />
                </div>
              </div>

              <div>
                <p className="kicker">Colaboración en origen</p>
                <h2 className="mt-3 font-heading text-3xl font-bold text-[var(--blue-deep)] sm:text-4xl">
                  Acompañamiento también desde Perú, junto a VIP Global Perú
                </h2>
                <p className="mt-4 max-w-xl leading-relaxed text-slate-600">
                  Para quienes inician el proceso desde Perú, coordinamos la búsqueda de
                  vivienda en Madrid en colaboración con VIP Global Perú, firma especializada
                  en asesoría administrativa y trámites documentarios.
                </p>

                <div className="mt-8 border-t border-[var(--blue-deep)]/10">
                  {VIP_STEPS.map((step) => (
                    <div key={step.n} className="flex items-baseline gap-4 border-b border-[var(--blue-deep)]/10 py-4">
                      <span className="font-heading text-lg font-bold text-[var(--green)]">{step.n}</span>
                      <p className="text-sm font-semibold text-[var(--blue-deep)]">{step.label}</p>
                    </div>
                  ))}
                </div>

                <WhatsAppButton
                  href={wPeru}
                  location="alquileres-vip-global-peru"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--blue-deep)] underline decoration-[var(--green)]/50 underline-offset-4 hover:text-[var(--green)]"
                >
                  Empezar mi proceso desde Perú <ArrowRight className="h-4 w-4" />
                </WhatsAppButton>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            BREAKER EDITORIAL — pausa visual antes del formulario
            ═══════════════════════════════════════════ */}
        <section className="bg-white">
          <div className="relative h-[38vh] min-h-[280px] w-full overflow-hidden sm:h-[46vh]">
            <Image
              src="/images/alquileres/interior-calido-ventanales.webp"
              alt="Interior cálido con grandes ventanales y luz natural"
              fill
              className="object-cover object-[50%_35%]"
              sizes="100vw"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--blue-deep)]/60 via-transparent to-transparent" />
            <p className="absolute bottom-6 left-4 text-sm font-medium text-white/85 sm:left-6 lg:left-8">
              Un hogar es, sobre todo, un lugar donde sentirte bien.
            </p>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            FORMULARIO
            ═══════════════════════════════════════════ */}
        <section id="solicitar" className="scroll-mt-24 bg-[#F7F3EA] py-20">
          <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 max-w-xl">
              <p className="kicker">Ficha de búsqueda</p>
              <h2 className="mt-3 font-heading text-3xl font-bold text-[var(--blue-deep)] sm:text-4xl">
                Cuéntanos cómo sería tu vivienda ideal
              </h2>
            </div>
            <AlquileresForm />
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            FAQ + nota de condiciones
            ═══════════════════════════════════════════ */}
        <section className="bg-white py-20">
          <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <p className="kicker">Resolvemos tus dudas</p>
            <h2 className="mb-10 mt-3 font-heading text-3xl font-bold text-[var(--blue-deep)] sm:text-4xl">
              Preguntas frecuentes
            </h2>
            <div className="space-y-3">
              {faqs.map((f) => (
                <details key={f.q} className="group rounded-2xl border border-[var(--blue-deep)]/10 bg-[#F7F3EA] p-5">
                  <summary className="flex cursor-pointer items-center justify-between gap-4 font-semibold text-[var(--blue-deep)]">
                    {f.q}
                    <span className="text-[var(--green)] transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 leading-relaxed text-slate-600">{f.a}</p>
                </details>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-[var(--blue-deep)]/10 bg-[#F7F3EA] p-5 text-sm leading-6 text-slate-500">
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
        <section className="bg-[var(--blue-deep)] py-20 text-white">
          <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading text-2xl font-bold sm:text-4xl">
              ¿Vienes a Madrid? Cuéntanos qué vivienda necesitas y te acompañamos.
            </h2>
            <div className="mt-8 flex flex-col items-start gap-4">
              <a
                href="#solicitar"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--green)] px-6 py-3.5 font-semibold text-[var(--blue-deep)] transition-all hover:brightness-105"
              >
                Iniciar mi búsqueda
                <ArrowRight className="h-4 w-4" />
              </a>
              <WhatsAppButton
                href={wMain}
                location="alquileres-cta-final-whatsapp"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-white/70 underline decoration-white/30 underline-offset-4 transition hover:text-white"
              >
                Hablar por WhatsApp
              </WhatsAppButton>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <StickyWhatsApp />
    </>
  );
}
