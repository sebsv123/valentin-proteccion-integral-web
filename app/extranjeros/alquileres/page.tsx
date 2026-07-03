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
import {
  GraduationCap,
  Home,
  Users,
  Building2,
  Search,
  MessageSquare,
  Compass,
  ArrowRightLeft,
  ClipboardCheck,
  HeartHandshake,
  Handshake,
  ArrowRight,
  Info,
} from "lucide-react";

const CANONICAL = "https://valentinproteccionintegral.com/extranjeros/alquileres";

export const metadata: Metadata = {
  title: "Alquileres para extranjeros en España | Valentín Protección Integral",
  description:
    "Si además del seguro necesitas ayuda con alquileres o vivienda para tu llegada a España, te orientamos según tu perfil, fechas y necesidades.",
  keywords: [
    "alquiler extranjeros España",
    "vivienda estudiantes internacionales Madrid",
    "alquiler llegada a España",
    "seguro y vivienda extranjeros",
    "orientación alquiler residentes España",
  ],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Alquileres para tu llegada a España | Valentín Protección Integral",
    description:
      "Además del seguro, también podemos ayudarte a orientarte con opciones de vivienda y alquiler según tu perfil, fechas y necesidades.",
    url: CANONICAL,
    siteName: siteConfig.brand.name,
    locale: "es_ES",
    type: "website",
  },
};

export const dynamic = "force-static";

const wMain = buildWhatsAppHref(
  "Hola, además del seguro me gustaría orientación sobre alquiler / vivienda para mi llegada a España."
);
const wSeguroVivienda = buildWhatsAppHref(
  "Hola, quiero información sobre seguro + vivienda para mi llegada a España."
);

const faqs = [
  {
    q: "¿Puedo pedir ayuda con la vivienda aunque aún no tenga seguro?",
    a: "Sí. Puedes contarnos tu caso de vivienda aunque todavía no hayas contratado un seguro. Si además lo necesitas, coordinamos las dos cosas; si no, te orientamos igualmente con la parte de alquiler.",
  },
  {
    q: "¿Trabajáis solo con estudiantes?",
    a: "No. Orientamos a estudiantes internacionales, pero también a residentes, familias que se trasladan y perfiles en proceso de instalación en España.",
  },
  {
    q: "¿También ayudáis a familias o residentes?",
    a: "Sí. Revisamos el caso de familias y residentes para orientarte sobre opciones de vivienda más adecuadas a tu situación, fechas y zona.",
  },
  {
    q: "¿Tenéis pisos propios?",
    a: "No somos una inmobiliaria ni disponemos de un inventario propio de pisos. Ofrecemos orientación y acompañamiento comercial, y coordinamos con colaboradores cuando corresponde.",
  },
  {
    q: "¿La disponibilidad está garantizada?",
    a: "No podemos garantizar disponibilidad. Las opciones dependen del perfil, la zona, las fechas y las condiciones del arrendador o colaborador correspondiente. Te orientamos con transparencia sobre lo que es realista en tu caso.",
  },
  {
    q: "¿Podéis ayudarme antes de llegar a España?",
    a: "Sí. Puedes escribirnos antes de viajar para ir preparando la parte de seguro y orientarte sobre vivienda, de modo que llegues con más tranquilidad.",
  },
  {
    q: "¿En qué zonas o ciudades podéis ayudarme?",
    a: "Trabajamos principalmente en Madrid y su entorno. Para otras zonas, cuéntanos tu caso y te decimos con honestidad hasta dónde podemos orientarte según disponibilidad.",
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
  name: "Alquileres para extranjeros en España",
  url: CANONICAL,
  description:
    "Servicio complementario de orientación en vivienda y alquiler para personas extranjeras que llegan a España.",
  isPartOf: {
    "@type": "WebSite",
    name: siteConfig.brand.name,
    url: siteConfig.brand.domain,
  },
  about: {
    "@type": "Organization",
    name: siteConfig.brand.name,
  },
};

export default function AlquileresPage() {
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
      <main>
        {/* ═══════════════════════════════════════════
            HERO
            ═══════════════════════════════════════════ */}
        <section className="relative overflow-hidden bg-slate-900 pt-24 pb-16 text-white">
          {/* Slot visual William (pendiente): fondo/ilustración de bienvenida.
              Por ahora, gradiente neutro — NO usar fotos que aparenten pisos reales. */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-950/60" />
          <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl" />
          <div className="container relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <nav className="mb-6 text-sm text-slate-400" aria-label="Migas de pan">
              <Link href="/extranjeros" className="hover:text-white">Extranjeros</Link>
              <span className="mx-2">/</span>
              <span className="text-slate-200">Alquileres</span>
            </nav>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 px-3 py-1 text-sm font-medium text-emerald-300">
              <Home className="h-4 w-4" />
              Servicio complementario
            </span>
            <h1 className="mt-5 max-w-3xl text-3xl font-bold leading-tight sm:text-5xl">
              Encuentra seguro y resuelve tu llegada a España con más tranquilidad
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-slate-300">
              Si además de tu seguro necesitas ayuda con alquileres, vivienda o una
              solución adaptada a tu situación, también podemos acompañarte.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Estudiantes", "Residentes", "Familias", "Perfiles internacionales"].map((t) => (
                <span key={t} className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-sm text-slate-200">
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#solicitar"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-6 py-3.5 font-semibold text-white transition-all hover:bg-emerald-400"
              >
                Cuéntanos qué necesitas
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
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            QUÉ OFRECEMOS
            ═══════════════════════════════════════════ */}
        <section className="bg-white py-20">
          <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Qué ofrecemos</h2>
              <p className="mt-3 text-slate-600">
                Un acompañamiento realista, sin prometer lo que no podemos garantizar.
              </p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { icon: Compass, title: "Orientación inicial", desc: "Te orientamos sobre vivienda y alquiler según tu perfil, fechas y zona." },
                { icon: GraduationCap, title: "Ayuda a estudiantes", desc: "Apoyo a estudiantes internacionales que buscan alojamiento compatible con su llegada." },
                { icon: Users, title: "Residentes y familias", desc: "Opciones para quienes se trasladan a España y buscan algo adecuado a su situación." },
                { icon: ArrowRightLeft, title: "Coordinación seguro + llegada", desc: "Ordenamos juntos la parte del seguro y la de la vivienda para que encajen." },
                { icon: ClipboardCheck, title: "Revisión de tu caso", desc: "Revisamos tu situación concreta y te decimos qué es realista según disponibilidad." },
                { icon: HeartHandshake, title: "Acompañamiento comercial", desc: "Te acompañamos durante el proceso y coordinamos el siguiente paso contigo." },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                    <p className="mt-2 text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            PARA QUIÉN ES
            ═══════════════════════════════════════════ */}
        <section className="bg-slate-50 py-20">
          <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Para quién es</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {[
                { icon: GraduationCap, title: "Estudiantes internacionales", desc: "Si vienes a estudiar y además necesitas una habitación, piso o una opción de alojamiento compatible con tu llegada." },
                { icon: Home, title: "Residentes y familias", desc: "Si te trasladas a España y buscas una opción de vivienda más adecuada para tu situación." },
                { icon: Search, title: "Perfiles en proceso de instalación", desc: "Si necesitas coordinar seguro, documentación y vivienda en poco tiempo." },
                { icon: Building2, title: "Colaboradores / partners", desc: "Si eres academia, relocation, asesoría o despacho y quieres derivar casos de seguro + vivienda." },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="flex gap-4 rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
                    {/* Slot visual William (pendiente): imagen representativa por perfil. */}
                    <div className="flex h-12 w-12 flex-none items-center justify-center rounded-2xl bg-slate-900 text-white">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                      <p className="mt-2 text-slate-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            CÓMO FUNCIONA
            ═══════════════════════════════════════════ */}
        <section className="bg-white py-20">
          <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Cómo funciona</h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { n: "1", title: "Nos cuentas tu caso", desc: "Perfil, fechas, zona y qué necesitas. Con eso empezamos." },
                { n: "2", title: "Revisamos tus necesidades", desc: "Vemos qué es realista según tu situación y disponibilidad." },
                { n: "3", title: "Te orientamos con opciones", desc: "Te explicamos las alternativas que encajan con tu caso." },
                { n: "4", title: "Coordinamos el siguiente paso", desc: "Te acompañamos para avanzar, con seguro y vivienda alineados." },
              ].map((step) => (
                <div key={step.n} className="relative rounded-3xl border border-slate-100 bg-slate-50 p-6">
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-600 text-lg font-bold text-white">
                    {step.n}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">{step.title}</h3>
                  <p className="mt-2 text-slate-600 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            FORMULARIO
            ═══════════════════════════════════════════ */}
        <section id="solicitar" className="scroll-mt-24 bg-slate-50 py-20">
          <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <AlquileresForm />
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            FAQ
            ═══════════════════════════════════════════ */}
        <section className="bg-white py-20">
          <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-10 text-center text-3xl font-bold text-slate-900 sm:text-4xl">
              Preguntas frecuentes
            </h2>
            <div className="space-y-3">
              {faqs.map((f) => (
                <details key={f.q} className="group rounded-2xl border border-slate-100 bg-slate-50 p-5">
                  <summary className="flex cursor-pointer items-center justify-between gap-4 font-semibold text-slate-900">
                    {f.q}
                    <span className="text-emerald-600 transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 text-slate-600 leading-relaxed">{f.a}</p>
                </details>
              ))}
            </div>

            {/* Nota discreta obligatoria */}
            <div className="mt-8 flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm leading-6 text-slate-500">
              <Info className="mt-0.5 h-5 w-5 flex-none text-slate-400" />
              <p>
                La disponibilidad y las condiciones de las opciones de alquiler dependen del
                perfil, la zona, las fechas y las condiciones del arrendador o colaborador
                correspondiente. {siteConfig.brand.name} es una marca comercial de mediación de
                seguros y ofrece la parte de vivienda como servicio complementario de
                orientación, no como garantía de alojamiento.
              </p>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            CTA FINAL
            ═══════════════════════════════════════════ */}
        <section className="bg-slate-900 py-20 text-white">
          <div className="container mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <Handshake className="mx-auto mb-6 h-12 w-12 text-emerald-400" />
            <h2 className="text-2xl font-bold sm:text-4xl">
              Si vienes a España y quieres resolver seguro y vivienda con más claridad, cuéntanos tu caso
            </h2>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <WhatsAppButton
                href={wSeguroVivienda}
                location="alquileres-cta-final-whatsapp"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-6 py-3.5 font-semibold text-white transition-all hover:bg-emerald-400"
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
