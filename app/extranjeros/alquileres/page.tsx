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
    criteria: "Campus, vida académica y primeras semanas.",
    zones: ["Moncloa y Argüelles", "Tribunal y Malasaña"],
  },
  {
    title: "Trabajo y conexión",
    criteria: "Oficinas, transporte y rutinas ágiles.",
    zones: ["Nuevos Ministerios", "Chamartín"],
  },
  {
    title: "Vida urbana",
    criteria: "Comercio, servicios y vida de barrio.",
    zones: ["Centro de Madrid", "Chamberí"],
  },
  {
    title: "Familias y tranquilidad",
    criteria: "Estancias más calmadas y vida familiar.",
    zones: ["Barrio de Salamanca", "Retiro"],
  },
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
      <main className="overflow-x-clip bg-[#F5EFE5]">
        <section className="relative isolate flex min-h-[720px] items-end overflow-hidden text-white sm:min-h-[760px] lg:min-h-[92vh]">
          <div className="absolute inset-0">
            <Image
              src="/images/alquileres/hero-interior-luminoso.webp"
              alt="Interior residencial contemporáneo con abundante luz natural"
              fill
              className="object-cover object-[58%_50%]"
              sizes="100vw"
              priority
            />
            <div className="absolute inset-0 bg-[var(--blue-deep)]/32" />
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--blue-deep)]/94 via-[var(--blue-deep)]/52 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D2138]/86 via-[#0D2138]/18 to-transparent" />
          </div>

          <div className="container relative z-10 mx-auto px-4 pb-0 pt-32 sm:px-6 lg:px-8">
            <nav className="mb-8 text-sm text-white/50" aria-label="Migas de pan">
              <Link href="/extranjeros" className="hover:text-white">Extranjeros</Link>
              <span className="mx-2">/</span>
              <span className="text-white/80">Alquileres</span>
            </nav>

            <div className="grid gap-12 lg:grid-cols-[minmax(0,0.78fr)_minmax(320px,0.42fr)] lg:items-end">
              <div className="max-w-3xl pb-14 lg:pb-24">
                <p className="kicker !text-white/62">Vivienda para tu llegada a España</p>
                <h1 className="mt-5 max-w-3xl font-heading text-4xl font-bold leading-[1.02] sm:text-5xl lg:text-7xl">
                  Alquiler de pisos en Madrid para estudiantes y familias internacionales
                </h1>
                <p className="mt-6 max-w-xl text-lg leading-8 text-white/78">
                  Encuentra tu hogar en Madrid antes de llegar, con acompañamiento durante la
                  búsqueda, las visitas, la documentación y la firma.
                </p>
                <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4">
                  <a
                    href="#solicitar"
                    className="inline-flex items-center justify-center gap-2 rounded-[8px] bg-[var(--green)] px-6 py-3.5 font-semibold text-[var(--blue-deep)] transition-all hover:brightness-105"
                  >
                    Iniciar mi búsqueda
                    <ArrowRight className="h-4 w-4" />
                  </a>
                  <WhatsAppButton
                    href={wMain}
                    location="alquileres-hero-whatsapp"
                    className="text-sm font-semibold text-white/68 underline decoration-white/25 underline-offset-4 transition hover:text-white"
                  >
                    Hablar por WhatsApp
                  </WhatsAppButton>
                </div>
              </div>

              <a
                href="#solicitar"
                className="group mb-[-54px] block border border-white/20 bg-[#F8F1E7]/95 p-6 text-[var(--blue-deep)] backdrop-blur-sm transition hover:border-white/40 sm:p-7 lg:mb-[-64px]"
              >
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--green)]">
                  Nota de búsqueda privada
                </p>
                <p className="mt-4 font-heading text-2xl font-bold leading-tight">
                  Cuéntanos qué estás buscando.
                </p>
                <div className="mt-5 grid gap-4 text-sm text-slate-600 sm:grid-cols-2 lg:grid-cols-1">
                  <p><span className="block font-semibold text-[var(--blue-deep)]">Perfil</span> Estudiante, familia o profesional</p>
                  <p><span className="block font-semibold text-[var(--blue-deep)]">Llegada</span> Fechas, presupuesto y zona preferida</p>
                  <p><span className="block font-semibold text-[var(--blue-deep)]">Acompañamiento</span> Visitas, documentación y firma</p>
                </div>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--blue-deep)] transition group-hover:text-[var(--green)]">
                  Iniciar mi búsqueda <ArrowRight className="h-4 w-4" />
                </span>
              </a>
            </div>
          </div>
        </section>

        <section className="relative bg-[#F5EFE5] pb-14 pt-28 sm:pt-32 lg:pb-20">
          <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(280px,0.45fr)] lg:items-start">
              <div>
                <p className="kicker">Cómo te acompañamos</p>
                <h2 className="mt-4 max-w-4xl font-heading text-4xl font-bold leading-[1.08] text-[var(--blue-deep)] sm:text-5xl">
                  Tu hogar en Madrid, incluso antes de llegar, se trabaja como una búsqueda con contexto.
                </h2>
              </div>
              <p className="max-w-md border-l border-[var(--blue-deep)]/15 pl-6 leading-8 text-slate-600">
                Un acompañamiento cercano y realista para ordenar zonas, documentación, visitas
                y expectativas antes de que el traslado convierta cada decisión en una urgencia.
              </p>
            </div>

            <div className="mt-14 grid gap-8 border-y border-[var(--blue-deep)]/10 py-8 lg:grid-cols-3 lg:gap-12">
              {VALUE_PROPS.map((item) => (
                <div key={item.n} className="grid grid-cols-[3rem_1fr] gap-4 lg:block">
                  <span className="font-heading text-2xl font-bold tabular-nums text-[var(--green)]">{item.n}</span>
                  <div>
                    <h3 className="font-heading text-xl font-bold text-[var(--blue-deep)]">{item.title}</h3>
                    <p className="mt-2 leading-7 text-slate-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative bg-[#F5EFE5] py-10 text-white lg:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative isolate min-h-[780px] overflow-hidden bg-[var(--blue-deep)] lg:min-h-[720px]">
              <Image
                src="/images/alquileres/madrid-vida-urbana.webp"
                alt="Calle urbana de Madrid con arquitectura residencial y comercios"
                fill
                className="object-cover object-[46%_50%]"
                sizes="(min-width: 1280px) 1180px, 100vw"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--blue-deep)]/92 via-[var(--blue-deep)]/56 to-[var(--blue-deep)]/10" />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--blue-deep)]/82 via-transparent to-transparent" />

              <div className="relative z-10 grid min-h-[780px] gap-12 p-6 sm:p-10 lg:min-h-[720px] lg:grid-cols-[0.82fr_1fr] lg:p-14 xl:p-16">
                <div className="flex flex-col justify-between">
                  <div>
                    <p className="kicker !text-white/62">Madrid bien conectado</p>
                    <h2 className="mt-4 max-w-lg font-heading text-4xl font-bold leading-[1.05] sm:text-5xl">
                      Cada zona propone una forma distinta de llegar a casa.
                    </h2>
                  </div>
                  <p className="max-w-md text-base leading-8 text-white/70">
                    Orientamos la búsqueda hacia barrios bien comunicados, agrupados por el tipo
                    de vida que ofrecen más que por su ubicación en un mapa.
                  </p>
                </div>

                <div className="self-end bg-[#F5EFE5]/92 p-5 text-[var(--blue-deep)] backdrop-blur-sm sm:p-7 lg:ml-auto lg:max-w-2xl">
                  <div className="grid gap-x-10 gap-y-7 sm:grid-cols-2">
                    {ZONE_GROUPS.map((group) => (
                      <div key={group.title} className="border-t border-[var(--blue-deep)]/14 pt-4">
                        <h3 className="font-heading text-lg font-bold">{group.title}</h3>
                        <p className="mt-1.5 text-sm leading-6 text-slate-600">{group.criteria}</p>
                        <p className="mt-3 text-sm font-semibold leading-6 text-[var(--blue-deep)]">
                          {group.zones.join(" · ")}
                        </p>
                      </div>
                    ))}
                  </div>
                  <p className="mt-8 border-t border-[var(--blue-deep)]/14 pt-4 text-sm leading-6 text-slate-500">
                    La disponibilidad depende de las fechas, el presupuesto, el perfil y las
                    condiciones de cada propiedad.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#F5EFE5] py-16 sm:py-20">
          <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
              <div>
                <p className="kicker">Cómo funciona</p>
                <h2 className="mt-4 max-w-md font-heading text-4xl font-bold leading-tight text-[var(--blue-deep)] sm:text-5xl">
                  Acompañamiento humano, paso a paso.
                </h2>
                <p className="mt-5 max-w-sm leading-8 text-slate-600">
                  La búsqueda no se trata como un trámite aislado: se ordena alrededor de tu
                  llegada, tus tiempos y la documentación que puede pedir cada propiedad.
                </p>
              </div>

              <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
                <figure className="relative lg:sticky lg:top-28">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-[8px]">
                    <Image
                      src="/images/alquileres/proceso-visita-vivienda.webp"
                      alt="Personas durante una visita ilustrativa a una vivienda"
                      fill
                      className="object-cover object-[60%_40%]"
                      sizes="(min-width: 1024px) 28vw, 100vw"
                      loading="lazy"
                    />
                  </div>
                  <figcaption className="mt-3 text-sm leading-6 text-slate-500">
                    Visitas presenciales o virtuales según tu momento de llegada.
                  </figcaption>
                </figure>

                <div className="space-y-7">
                  {PROCESS_STEPS.map((step, index) => (
                    <div
                      key={step.n}
                      className={index % 2 === 1 ? "ml-0 border-l border-[var(--blue-deep)]/12 pl-5 sm:ml-8" : "border-l border-[var(--blue-deep)]/12 pl-5"}
                    >
                      <p className="font-heading text-2xl font-bold tabular-nums text-[var(--green)]">{step.n}</p>
                      <h3 className="mt-1 font-heading text-xl font-bold text-[var(--blue-deep)]">{step.title}</h3>
                      <p className="mt-2 leading-7 text-slate-600">{step.desc}</p>
                    </div>
                  ))}
                  <p className="border-t border-[var(--blue-deep)]/10 pt-5 text-sm leading-6 text-slate-500">
                    No prestamos asesoramiento jurídico sobre el contrato. Para la revisión legal del
                    contrato de arrendamiento, recomendamos asesoramiento jurídico independiente.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#FFFDF8] py-16 sm:py-24">
          <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="kicker">Para quién es</p>
              <h2 className="mt-4 font-heading text-4xl font-bold leading-tight text-[var(--blue-deep)] sm:text-5xl">
                No todos llegan a Madrid con las mismas prioridades.
              </h2>
              <p className="mt-5 max-w-2xl leading-8 text-slate-600">
                La búsqueda cambia según el momento de vida: una primera habitación cerca de la
                universidad no se decide igual que una vivienda familiar para instalarse con calma.
              </p>
            </div>

            <div className="mt-14 grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(300px,0.68fr)] lg:items-start lg:gap-16">
              <article className="grid gap-7 lg:grid-cols-[0.95fr_0.82fr] lg:items-end">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[8px]">
                  <Image
                    src="/images/alquileres/perfil-estudiantes.webp"
                    alt="Estudiantes compartiendo un apartamento"
                    fill
                    className="object-cover object-[50%_30%]"
                    sizes="(min-width: 1024px) 38vw, 100vw"
                    loading="lazy"
                  />
                </div>
                <div className="lg:pb-10">
                  <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--green)]">Estudiantes</p>
                  <h3 className="mt-3 font-heading text-3xl font-bold text-[var(--blue-deep)]">
                    Primeras semanas, campus y una rutina que empieza.
                  </h3>
                  <p className="mt-4 leading-8 text-slate-600">
                    Llegas a Madrid para estudiar y necesitas un sitio donde instalarte sin
                    perder tiempo entre clases, trámites y primeras semanas de curso.
                  </p>
                  <p className="mt-4 text-sm leading-6 text-slate-500">
                    {STUDENT_POINTS.join(" ")}
                  </p>
                  <WhatsAppButton
                    href={wStudents}
                    location="alquileres-perfil-estudiantes"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--blue-deep)] underline decoration-[var(--green)]/50 underline-offset-4 hover:text-[var(--green)]"
                  >
                    Soy estudiante <ArrowRight className="h-4 w-4" />
                  </WhatsAppButton>
                </div>
              </article>

              <article className="lg:mt-28">
                <div className="relative aspect-[7/5] overflow-hidden rounded-[8px] lg:aspect-[4/5]">
                  <Image
                    src="/images/alquileres/perfil-familias-mudanza.webp"
                    alt="Familia durante una mudanza a su nuevo hogar"
                    fill
                    className="object-cover object-[60%_45%]"
                    sizes="(min-width: 1024px) 30vw, 100vw"
                    loading="lazy"
                  />
                </div>
                <div className="relative -mt-8 ml-5 bg-[#FFFDF8] p-5 sm:ml-10 sm:p-6 lg:ml-[-44px] lg:mt-[-70px]">
                  <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--green)]">Familias y profesionales</p>
                  <h3 className="mt-3 font-heading text-2xl font-bold text-[var(--blue-deep)]">
                    Una mudanza con más piezas que una maleta.
                  </h3>
                  <p className="mt-3 leading-7 text-slate-600">
                    Un traslado a Madrid implica organizar mucho más que una mudanza. Te
                    ayudamos a que la vivienda deje de ser la parte incierta del proceso.
                  </p>
                  <p className="mt-4 text-sm leading-6 text-slate-500">
                    {FAMILY_POINTS.join(" ")}
                  </p>
                  <WhatsAppButton
                    href={wFamilies}
                    location="alquileres-perfil-familias"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[var(--blue-deep)] underline decoration-[var(--green)]/50 underline-offset-4 hover:text-[var(--green)]"
                  >
                    Somos familia o profesional <ArrowRight className="h-4 w-4" />
                  </WhatsAppButton>
                </div>
              </article>
            </div>

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

        <section className="bg-[#FFFDF8] pb-16">
          <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 border-y border-[var(--blue-deep)]/10 py-9 lg:grid-cols-[0.28fr_1fr_0.32fr] lg:items-center">
              <div>
                <p className="kicker">Colaboración en origen</p>
                <h2 className="mt-3 font-heading text-2xl font-bold text-[var(--blue-deep)]">
                  Coordinación desde Perú
                </h2>
              </div>
              <p className="max-w-2xl leading-8 text-slate-600">
                Para quienes inician el proceso desde Perú, coordinamos la búsqueda de vivienda
                en Madrid en colaboración con VIP Global Perú, firma especializada en asesoría
                administrativa y trámites documentarios.
              </p>
              <div className="flex items-center gap-4 lg:justify-end">
                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
                  En colaboración con
                </span>
                <div className="relative h-10 w-28 flex-none">
                  <Image
                    src="/images/partners/vip-global-peru.png"
                    alt="VIP Global Perú - Soluciones Administrativas"
                    fill
                    className="object-contain"
                    sizes="112px"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
            <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-500">
              <span>Orientación inicial en Perú</span>
              <span className="text-slate-300">/</span>
              <span>Coordinación de vivienda en Madrid</span>
              <span className="text-slate-300">/</span>
              <span>Acompañamiento en documentación y llegada</span>
              <WhatsAppButton
                href={wPeru}
                location="alquileres-vip-global-peru"
                className="font-semibold text-[var(--blue-deep)] underline decoration-[var(--green)]/50 underline-offset-4 hover:text-[var(--green)]"
              >
                Empezar mi proceso desde Perú
              </WhatsAppButton>
            </div>
          </div>
        </section>

        <section className="bg-[#FFFDF8]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative isolate min-h-[520px] overflow-hidden rounded-[8px]">
              <Image
                src="/images/alquileres/interior-calido-ventanales.webp"
                alt="Interior cálido con grandes ventanales y luz natural"
                fill
                className="object-cover object-[50%_35%]"
                sizes="(min-width: 1280px) 1180px, 100vw"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--blue-deep)]/84 via-[var(--blue-deep)]/28 to-transparent" />
              <div className="relative z-10 flex min-h-[520px] items-end p-6 sm:p-10 lg:p-14">
                <p className="max-w-xl font-heading text-4xl font-bold leading-tight text-white sm:text-5xl">
                  Un hogar es, sobre todo, un lugar donde sentirte bien.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="solicitar" className="scroll-mt-24 bg-[#F5EFE5] pb-20 pt-0 sm:pb-24">
          <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="relative -mt-14 grid gap-8 bg-[#F8F1E7] p-6 sm:p-8 lg:grid-cols-[0.42fr_0.58fr] lg:p-10">
              <div className="pt-2">
                <p className="kicker">Ficha de búsqueda</p>
                <h2 className="mt-4 font-heading text-4xl font-bold leading-tight text-[var(--blue-deep)] sm:text-5xl">
                  Cuéntanos cómo sería tu vivienda ideal
                </h2>
                <div className="mt-8 space-y-5 text-sm leading-7 text-slate-600">
                  <p>
                    Revisamos perfil, fechas, presupuesto, zona preferida y documentación habitual
                    para responder con una orientación realista.
                  </p>
                  <p>
                    No prometemos vivienda garantizada ni disponibilidad concreta: cada propiedad
                    depende de condiciones, fechas y aceptación del perfil.
                  </p>
                  <p>
                    Te contactamos por el canal que indiques para ordenar los siguientes pasos.
                  </p>
                </div>
              </div>
              <AlquileresForm />
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <p className="kicker">Resolvemos tus dudas</p>
            <h2 className="mb-10 mt-3 font-heading text-3xl font-bold text-[var(--blue-deep)] sm:text-4xl">
              Preguntas frecuentes
            </h2>
            <div className="space-y-3">
              {faqs.map((f) => (
                <details key={f.q} className="group rounded-[8px] border border-[var(--blue-deep)]/10 bg-[#F7F3EA] p-5">
                  <summary className="flex cursor-pointer items-center justify-between gap-4 font-semibold text-[var(--blue-deep)]">
                    {f.q}
                    <span className="text-[var(--green)] transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 leading-relaxed text-slate-600">{f.a}</p>
                </details>
              ))}
            </div>

            <div className="mt-8 rounded-[8px] border border-[var(--blue-deep)]/10 bg-[#F7F3EA] p-5 text-sm leading-6 text-slate-500">
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

        <section className="bg-[var(--blue-deep)] py-20 text-white">
          <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading text-2xl font-bold sm:text-4xl">
              ¿Vienes a Madrid? Cuéntanos qué vivienda necesitas y te acompañamos.
            </h2>
            <div className="mt-8 flex flex-col items-start gap-4">
              <a
                href="#solicitar"
                className="inline-flex items-center justify-center gap-2 rounded-[8px] bg-[var(--green)] px-6 py-3.5 font-semibold text-[var(--blue-deep)] transition-all hover:brightness-105"
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
