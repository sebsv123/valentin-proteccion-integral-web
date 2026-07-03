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

const ZONES = [
  { name: "Chamberí", desc: "Calles tranquilas y ambiente residencial, cerca del centro." },
  { name: "Moncloa y Argüelles", desc: "Zona universitaria, muy solicitada por estudiantes." },
  { name: "Nuevos Ministerios", desc: "Entorno de oficinas con buena oferta de transporte público." },
  { name: "Tribunal y Malasaña", desc: "Ambiente joven, comercios y vida de barrio." },
  { name: "Barrio de Salamanca", desc: "Zona residencial consolidada y bien conectada." },
  { name: "Retiro", desc: "Tranquilidad y cercanía al parque, ambiente familiar." },
  { name: "Chamartín", desc: "Zona de negocios con buenas conexiones de transporte." },
  { name: "Centro de Madrid", desc: "Pleno centro, a pie de los principales servicios." },
];

const VALUE_PROPS = [
  { n: "01", title: "Búsqueda con contexto", desc: "Revisamos fechas, presupuesto, duración, zonas y necesidades reales." },
  { n: "02", title: "Coordinación desde el extranjero", desc: "Facilitamos visitas presenciales o virtuales y la comunicación durante el proceso." },
  { n: "03", title: "Documentación y firma", desc: "Te orientamos sobre la documentación habitual y los siguientes pasos, sin sustituir el asesoramiento jurídico." },
];

const PROCESS_STEPS = [
  { n: "01", title: "Conocemos tu situación", desc: "Analizamos presupuesto, fechas, motivo del traslado, número de personas, universidad o lugar de trabajo y zonas preferidas." },
  { n: "02", title: "Buscamos opciones adecuadas", desc: "Filtramos opciones que encajen con el perfil y con las condiciones solicitadas por propietarios o agencias." },
  { n: "03", title: "Coordinamos las visitas", desc: "Organizamos visitas presenciales o virtuales y facilitamos la comunicación entre las partes." },
  { n: "04", title: "Te orientamos con la documentación", desc: "Explicamos qué justificantes, garantías económicas y datos pueden solicitarse durante el proceso." },
  { n: "05", title: "Te acompañamos hasta la firma", desc: "Ayudamos a comprender los puntos esenciales y a completar el proceso con mayor claridad." },
];

const STUDENT_POINTS = [
  "Conexión con universidades y centros de estudio.",
  "Opciones individuales o compartidas.",
  "Transporte público bien comunicado.",
  "Orientación sobre la documentación.",
];

const FAMILY_POINTS = [
  "Número de habitaciones según tu caso.",
  "Cercanía al trabajo o al centro de estudios.",
  "Amueblado o sin amueblar.",
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
            HERO — editorial, con fotografía real
            ═══════════════════════════════════════════ */}
        <section className="relative overflow-hidden bg-[var(--blue-deep)] text-white">
          <div className="container relative z-10 mx-auto grid gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8 lg:py-24">
            <div>
              <nav className="mb-6 text-sm text-white/45" aria-label="Migas de pan">
                <Link href="/extranjeros" className="hover:text-white">Extranjeros</Link>
                <span className="mx-2">/</span>
                <span className="text-white/75">Alquileres</span>
              </nav>

              <p className="kicker !text-white/60">Vivienda para tu llegada a España</p>

              <h1 className="mt-4 font-heading text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl">
                Alquiler de pisos en Madrid para estudiantes y familias internacionales
              </h1>

              <p className="mt-5 max-w-xl text-lg leading-8 text-white/75">
                Encuentra tu hogar en Madrid antes de llegar, con acompañamiento durante la
                búsqueda, las visitas, la documentación y la firma.
              </p>

              <div className="mt-8">
                <a
                  href="#solicitar"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[var(--green)] px-6 py-3.5 font-semibold text-[var(--blue-deep)] transition-all hover:brightness-105 sm:w-auto"
                >
                  Cuéntanos qué vivienda necesitas
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>

              <p className="mt-5 text-sm text-white/55">
                También podemos coordinar{" "}
                <Link href="/extranjeros" className="font-semibold text-white/80 underline decoration-white/30 underline-offset-4 hover:text-white">
                  tu seguro para la llegada a España
                </Link>
                .
              </p>

              <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 border-t border-white/10 pt-6 text-sm text-white/55">
                <span>Búsqueda desde el extranjero</span>
                <span>Visitas presenciales o virtuales</span>
                <span>Apoyo documental</span>
              </div>
            </div>

            <div>
              <div className="relative aspect-[5/4] overflow-hidden rounded-[24px] sm:aspect-[4/3] lg:aspect-[5/4]">
                <Image
                  src="/images/products/bebe-room.jpg"
                  alt="Familia en el salón luminoso de su vivienda, con vistas a la ciudad"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  priority
                />
              </div>
              <p className="mt-3 text-sm text-white/45">
                Búsqueda en Madrid según fechas, presupuesto y perfil.
              </p>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            PROPUESTA DE VALOR
            ═══════════════════════════════════════════ */}
        <section className="bg-[#F7F3EA] py-20">
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
            MADRID BIEN CONECTADO — sección editorial
            ═══════════════════════════════════════════ */}
        <section className="bg-white py-20">
          <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-[24px] bg-[var(--blue-deep)] p-8 text-white sm:p-12 lg:p-14">
              <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
                <div>
                  <p className="kicker !text-white/60">Madrid bien conectado</p>
                  <h2 className="mt-3 font-heading text-3xl font-bold sm:text-4xl">
                    Zonas habituales de interés
                  </h2>
                  <p className="mt-4 max-w-sm leading-relaxed text-white/65">
                    Orientamos la búsqueda hacia barrios bien comunicados por transporte
                    público y cercanos a universidades y áreas de trabajo.
                  </p>
                </div>
                <div className="grid gap-x-10 sm:grid-cols-2">
                  {ZONES.map((zone) => (
                    <div key={zone.name} className="border-t border-white/10 py-4 first:border-t-0">
                      <h3 className="font-semibold text-white">{zone.name}</h3>
                      <p className="mt-1 text-sm leading-6 text-white/55">{zone.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <p className="mt-10 border-t border-white/10 pt-6 text-sm leading-6 text-white/50">
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
          <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 max-w-2xl">
              <p className="kicker">Cómo funciona</p>
              <h2 className="mt-3 font-heading text-3xl font-bold text-[var(--blue-deep)] sm:text-4xl">
                De la primera consulta a la firma
              </h2>
            </div>
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
            <p className="mx-auto mt-8 max-w-2xl text-sm text-slate-500">
              No prestamos asesoramiento jurídico sobre el contrato. Para la revisión legal del
              contrato de arrendamiento, recomendamos asesoramiento jurídico independiente.
            </p>
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
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-10">
              {/* Estudiantes */}
              <article>
                <div className="relative aspect-[4/3] overflow-hidden rounded-[24px]">
                  <Image
                    src="/images/extranjeros/extranjeros-students.webp"
                    alt="Estudiantes internacionales estudiando juntos en un aula"
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 50vw, 100vw"
                  />
                </div>
                <h3 className="mt-6 font-heading text-xl font-bold text-[var(--blue-deep)]">Estudiantes internacionales</h3>
                <ul className="mt-3 space-y-2.5 text-slate-600">
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
              <article>
                <div className="relative aspect-[4/3] overflow-hidden rounded-[24px]">
                  <Image
                    src="/images/home/family-window.jpg"
                    alt="Familia en el interior luminoso de su vivienda"
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 50vw, 100vw"
                  />
                </div>
                <h3 className="mt-6 font-heading text-xl font-bold text-[var(--blue-deep)]">Familias y profesionales</h3>
                <ul className="mt-3 space-y-2.5 text-slate-600">
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
            <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-[var(--blue-deep)]/10 pt-8 sm:flex-row sm:items-center">
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
            FORMULARIO
            ═══════════════════════════════════════════ */}
        <section id="solicitar" className="scroll-mt-24 bg-[#F7F3EA] py-20">
          <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 max-w-xl">
              <p className="kicker">Solicitar orientación</p>
              <h2 className="mt-3 font-heading text-3xl font-bold text-[var(--blue-deep)] sm:text-4xl">
                Cuéntanos qué vivienda necesitas
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
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <WhatsAppButton
                href={wMain}
                location="alquileres-cta-final-whatsapp"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--green)] px-6 py-3.5 font-semibold text-[var(--blue-deep)] transition-all hover:brightness-105"
              >
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
