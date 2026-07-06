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

const madridImage = "/images/alquileres/gran-via-madrid.webp";

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
            <div className="absolute inset-0 bg-gradient-to-r from-[#06182B]/88 via-[#06182B]/34 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#06182B]/18" />
          </div>

          <div className="container relative z-10 mx-auto px-4 pb-0 pt-32 sm:px-6 lg:px-8">
            <nav className="mb-8 text-sm text-white/50" aria-label="Migas de pan">
              <Link href="/extranjeros" className="hover:text-white">Extranjeros</Link>
              <span className="mx-2">/</span>
              <span className="text-white/80">Alquileres</span>
            </nav>

            <div className="grid gap-12 lg:grid-cols-[minmax(0,0.78fr)_minmax(320px,0.42fr)] lg:items-end">
              <div
                data-alquileres-hero-panel
                className="max-w-3xl rounded-[8px] border border-[#D7C3AA]/55 p-6 shadow-[0_34px_90px_-54px_rgba(0,0,0,0.9)] sm:p-8 lg:mb-24 lg:p-10"
                style={{ backgroundColor: "rgba(3, 24, 46, 0.94)" }}
              >
                <p className="kicker !text-[#D7C3AA]">Vivienda para tu llegada a España</p>
                <h1 className="mt-5 max-w-3xl font-heading text-4xl font-bold leading-[1.02] text-[#FFF7EA] sm:text-5xl lg:text-7xl">
                  Alquiler de pisos en Madrid para estudiantes y familias internacionales
                </h1>
                <p className="mt-6 max-w-xl text-lg leading-8 text-white/90">
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
                    className="text-sm font-semibold text-[#F5EFE5] underline decoration-[#D7C3AA]/60 underline-offset-4 transition hover:text-white"
                  >
                    Hablar por WhatsApp
                  </WhatsAppButton>
                </div>
              </div>

              <a
                data-alquileres-hero-brief
                href="#solicitar"
                className="group mb-10 block rounded-[8px] border border-[#C9B28D] p-6 text-[var(--blue-deep)] shadow-[0_18px_48px_-38px_rgba(0,0,0,0.7)] transition hover:border-[var(--green)]/60 sm:p-7 lg:mb-28"
                style={{ backgroundColor: "#f7f1e6" }}
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

        <section className="relative bg-[#F5EFE5] py-8 text-white lg:-mt-8 lg:py-12">
          <div className="relative left-1/2 right-1/2 w-screen -translate-x-1/2">
            <div className="relative isolate overflow-hidden bg-[var(--blue-deep)] lg:min-h-[980px]">
              <Image
                src={madridImage}
                alt="Vista urbana de Gran Vía en Madrid con el edificio Capitol"
                fill
                className="object-cover object-[50%_44%]"
                sizes="100vw"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#06182B]/82 via-[#06182B]/28 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#06182B]/20" />

              <div className="relative z-10 mx-auto grid min-h-[980px] max-w-[88rem] gap-8 px-4 py-6 sm:px-6 sm:py-8 lg:grid-cols-[0.88fr_1.12fr] lg:gap-10 lg:px-8 lg:py-12">
                <div className="self-start border border-[#D7C3AA]/45 bg-[#031C35] p-5 shadow-[0_24px_70px_-48px_rgba(0,0,0,0.88)] sm:p-7 lg:max-w-xl">
                  <p className="kicker !text-[#D7C3AA]">Madrid bien conectado</p>
                  <h2 className="mt-4 max-w-lg font-heading text-4xl font-bold leading-[1.05] sm:text-5xl">
                    Cada zona propone una forma distinta de llegar a casa.
                  </h2>
                  <p className="mt-6 max-w-md text-base leading-8 text-[#F5EFE5]">
                    Orientamos la búsqueda hacia barrios bien comunicados, agrupados por el tipo
                    de vida que ofrecen más que por su ubicación en un mapa.
                  </p>
                </div>

                <div className="self-end border border-[#D7C3AA] bg-[#FFF8EC] p-5 text-[var(--blue-deep)] shadow-[0_28px_80px_-58px_rgba(0,0,0,0.8)] sm:p-7 lg:max-w-[44rem] lg:justify-self-end">
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

        <section className="bg-[#F5EFE5] py-12 sm:py-16 lg:-mt-8">
          <div className="relative left-1/2 right-1/2 w-screen -translate-x-1/2">
            <div className="relative isolate overflow-hidden bg-[var(--blue-deep)] lg:min-h-[920px]">
              <Image
                src="/images/alquileres/proceso-visita-vivienda.webp"
                alt="Personas durante una visita ilustrativa a una vivienda"
                fill
                className="object-cover object-[50%_44%]"
                sizes="100vw"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#06182B]/84 via-[#06182B]/34 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#06182B]/18" />

              <div className="relative z-10 mx-auto grid min-h-[920px] max-w-[88rem] gap-8 px-4 py-6 sm:px-6 sm:py-8 lg:grid-cols-[0.86fr_1.14fr] lg:items-start lg:gap-10 lg:px-8 lg:py-12">
                <div className="self-start border border-[#D7C3AA]/45 bg-[#031C35] p-5 text-white shadow-[0_24px_70px_-48px_rgba(0,0,0,0.88)] sm:p-7 lg:max-w-xl">
                  <p className="kicker !text-[#D7C3AA]">Cómo funciona</p>
                  <h2 className="mt-4 max-w-md font-heading text-4xl font-bold leading-tight text-[#FFF8EC] sm:text-5xl">
                    Acompañamiento humano, paso a paso.
                  </h2>
                  <p className="mt-5 max-w-sm leading-8 text-[#F5EFE5]">
                    La búsqueda no se trata como un trámite aislado: se ordena alrededor de tu
                    llegada, tus tiempos y la documentación que puede pedir cada propiedad.
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6 lg:gap-5">
                  {PROCESS_STEPS.map((step, index) => {
                    const spanClass =
                      index === 0 || index === 1
                        ? "lg:col-span-3"
                        : "lg:col-span-2";

                    return (
                      <article key={step.n} className={spanClass}>
                        <div
                          className={
                            step.n === "01"
                              ? "h-full border border-[#D7C3AA] bg-[#FFF8EC] p-5 text-[var(--blue-deep)] shadow-[0_24px_70px_-60px_rgba(0,0,0,0.55)] sm:grid sm:grid-cols-[0.56fr_0.44fr] sm:gap-5 sm:p-6"
                              : "h-full border border-[#D7C3AA] bg-[#FFF8EC] p-5 text-[var(--blue-deep)] shadow-[0_24px_70px_-60px_rgba(0,0,0,0.55)] sm:p-6"
                          }
                        >
                          <div>
                            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--green)]">{step.n}</p>
                            <h3 className="mt-2 font-heading text-xl font-bold">{step.title}</h3>
                            <p className="mt-3 max-w-md leading-7 text-slate-600">{step.desc}</p>
                          </div>
                          {step.n === "01" ? (
                            <div className="mt-4 grid gap-4 sm:mt-0">
                              <div className="rounded-[8px] bg-white/75 p-4 text-sm leading-6 text-slate-600">
                                Revisamos el perfil, el momento de llegada y el ritmo del traslado para
                                ordenar la búsqueda con más contexto.
                              </div>
                              <div className="rounded-[8px] bg-white/75 p-4 text-sm leading-6 text-slate-600">
                                Visitas, documentación y firma se coordinan sin presentar el proceso
                                como una lista de control.
                              </div>
                            </div>
                          ) : null}
                        </div>
                      </article>
                    );
                  })}
                  <p className="sm:col-span-2 border border-[#D7C3AA] bg-[#FFF8EC] p-5 text-sm leading-6 text-slate-500 shadow-[0_24px_70px_-60px_rgba(0,0,0,0.45)] sm:p-6">
                    No prestamos asesoramiento jurídico sobre el contrato. Para la revisión legal del
                    contrato de arrendamiento, recomendamos asesoramiento jurídico independiente.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#FFF8EC] py-16 sm:py-24">
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

            <div className="mt-14 grid gap-8 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] lg:items-stretch">
              <article className="relative min-h-[560px] overflow-hidden rounded-[8px] bg-[var(--blue-deep)] text-white">
                <Image
                  src="/images/alquileres/perfil-estudiantes.webp"
                  alt="Estudiantes compartiendo un apartamento"
                  fill
                  className="object-cover object-[50%_30%]"
                  sizes="(min-width: 1024px) 48vw, 100vw"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#041F3A] via-[#041F3A]/42 to-transparent" />
                <div className="relative z-10 flex min-h-[560px] items-end p-6 sm:p-8">
                  <div className="max-w-lg border border-[#D7C3AA]/35 bg-[#041F3A] p-5 sm:p-6">
                    <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#D7C3AA]">Estudiantes internacionales</p>
                    <h3 className="mt-3 font-heading text-3xl font-bold text-[#FFF8EC]">
                      Primeras semanas, campus y una rutina que empieza.
                    </h3>
                    <p className="mt-4 leading-8 text-[#F5EFE5]">
                      Llegas a Madrid para estudiar y necesitas un sitio donde instalarte sin
                      perder tiempo entre clases, trámites y primeras semanas de curso.
                    </p>
                    <p className="mt-4 text-sm leading-6 text-[#F5EFE5]/85">
                      Conexión con universidades, opciones individuales o compartidas y orientación documental.
                    </p>
                    <WhatsAppButton
                      href={wStudents}
                      location="alquileres-perfil-estudiantes"
                      className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#FFF8EC] underline decoration-[var(--green)]/70 underline-offset-4 hover:text-[var(--green)]"
                    >
                      Soy estudiante <ArrowRight className="h-4 w-4" />
                    </WhatsAppButton>
                  </div>
                </div>
              </article>

              <article className="grid gap-5 lg:grid-rows-[0.95fr_auto]">
                <div className="relative min-h-[360px] overflow-hidden rounded-[8px] bg-[var(--blue-deep)] lg:min-h-0">
                  <Image
                    src="/images/alquileres/perfil-familias-mudanza.webp"
                    alt="Familia durante una mudanza a su nuevo hogar"
                    fill
                    className="object-cover object-[60%_45%]"
                    sizes="(min-width: 1024px) 36vw, 100vw"
                    loading="lazy"
                  />
                </div>
                <div className="rounded-[8px] border border-[#D7C3AA] bg-[#041F3A] p-6 text-white sm:p-7">
                  <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#D7C3AA]">Familias/profesionales</p>
                  <h3 className="mt-3 font-heading text-2xl font-bold text-[#FFF8EC]">
                    Una mudanza con más piezas que una maleta.
                  </h3>
                  <p className="mt-3 leading-7 text-[#F5EFE5]">
                    Un traslado a Madrid implica organizar mucho más que una mudanza. Te
                    ayudamos a que la vivienda deje de ser la parte incierta del proceso.
                  </p>
                  <p className="mt-4 text-sm leading-6 text-[#F5EFE5]/85">
                    Habitaciones, colegio o trabajo, amueblado y duración se ordenan según el caso.
                  </p>
                  <WhatsAppButton
                    href={wFamilies}
                    location="alquileres-perfil-familias"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#FFF8EC] underline decoration-[var(--green)]/70 underline-offset-4 hover:text-[var(--green)]"
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

        <section id="solicitar" className="scroll-mt-24 bg-[#F5EFE5] pb-16 pt-0 sm:pb-20 lg:-mt-10">
          <div className="relative left-1/2 right-1/2 -mt-12 w-screen -translate-x-1/2">
            <div className="relative isolate overflow-hidden bg-[var(--blue-deep)] lg:min-h-[980px]">
              <Image
                src="/images/alquileres/interior-calido-ventanales.webp"
                alt="Interior cálido con grandes ventanales y luz natural"
                fill
                className="object-cover object-[50%_35%]"
                sizes="100vw"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#06182B]/86 via-[#06182B]/46 to-transparent" />
              <div className="relative z-10 mx-auto grid min-h-[980px] max-w-[88rem] gap-8 px-4 py-6 sm:px-6 sm:py-8 lg:grid-cols-[0.38fr_0.62fr] lg:items-end lg:gap-10 lg:px-8 lg:py-12">
                <div className="self-start border border-[#D7C3AA]/45 bg-[#031C35] p-5 text-white shadow-[0_24px_70px_-48px_rgba(0,0,0,0.88)] sm:p-7 lg:max-w-xl">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#D7C3AA]">Apoyo en origen</p>
                  <p className="mt-3 max-w-xl leading-7 text-[#F5EFE5]">
                    Para quienes inician el proceso desde Perú, coordinamos la búsqueda de vivienda
                    en Madrid en colaboración con VIP Global Perú.
                  </p>
                  <div className="mt-6 flex items-center gap-3">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#D7C3AA]/80">
                      Firma de colaboración
                    </span>
                    <div className="relative h-8 w-28 flex-none opacity-85">
                      <Image
                        src="/images/partners/vip-global-peru.png"
                        alt="VIP Global Perú - Soluciones Administrativas"
                        fill
                        className="object-contain"
                        sizes="128px"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <WhatsAppButton
                    href={wPeru}
                    location="alquileres-vip-global-peru"
                    className="mt-5 inline-flex text-sm font-semibold text-[#FFF8EC] underline decoration-[var(--green)]/60 underline-offset-4 hover:text-[var(--green)]"
                  >
                    Empezar mi proceso desde Perú
                  </WhatsAppButton>
                </div>

                <div className="grid gap-6 lg:self-end lg:justify-self-end lg:max-w-3xl">
                  <p className="max-w-2xl bg-[#041F3A] p-5 font-heading text-4xl font-bold leading-tight text-[#FFF8EC] shadow-[0_24px_70px_-60px_rgba(0,0,0,0.8)] sm:p-7 sm:text-5xl">
                    Un hogar es, sobre todo, un lugar donde sentirte bien.
                  </p>
                  <AlquileresForm />
                </div>
              </div>
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
