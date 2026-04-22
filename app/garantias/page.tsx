'use client'

import Image from "next/image";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { StickyWhatsApp } from "@/components/sticky-whatsapp";
import { buildWhatsAppHref } from "@/lib/products";
import { Shield, Zap, Clock, HeartHandshake, BadgePercent, CheckCircle2, ArrowRight } from "lucide-react";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { motion } from "framer-motion";

// ─── animation helpers ───────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

// ─── data ────────────────────────────────────────────────────────────────────
const badges = [
  { value: "+10", label: "años de experiencia" },
  { value: "+1.200", label: "familias protegidas" },
  { value: "5.0★", label: "en Google" },
];

const guarantees = [
  {
    num: "01",
    icon: Shield,
    title: "Seriedad en cada detalle",
    body: "Trabajamos con la misma exigencia que esperarías de una gran firma. Documentación clara, comunicación profesional y propuestas presentadas con cuidado.",
    dark: true,
  },
  {
    num: "02",
    icon: Zap,
    title: "Proceso sin fricciones",
    body: "Sin formularios interminables, sin burocracia innecesaria. Consulta, propuesta y contratación en 3 pasos. Si algo se puede simplificar, lo simplificamos.",
    dark: false,
  },
  {
    num: "03",
    icon: Clock,
    title: "Respuesta en menos de 24h",
    body: "Respondemos en menos de 24 horas laborables. Si no es así, te llamamos nosotros con una explicación y una disculpa real.",
    dark: true,
  },
  {
    num: "04",
    icon: HeartHandshake,
    title: "Sin presión, nunca",
    body: "No trabajamos a comisión por venderte el producto más caro. Nuestro objetivo es que contrates lo que de verdad te conviene. Si no hay nada que encaje, te lo decimos.",
    dark: false,
  },
];

const steps = [
  { step: "01", title: "Consulta gratuita", desc: "Cuéntanos tu situación sin compromiso. Analizamos qué necesitas de verdad." },
  { step: "02", title: "Propuesta en 24h", desc: "Recibes opciones claras, comparadas y explicadas. Sin letra pequeña." },
  { step: "03", title: "Acompañamiento continuo", desc: "Seguimos contigo después de contratar. Ante cualquier duda o siniestro, aquí estamos." },
];

// ─── component ───────────────────────────────────────────────────────────────
export default function GarantiasPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Inicio", url: "/" },
          { name: "Garantías", url: "/garantias" },
        ]}
      />
      <Header />
      <main className="overflow-x-hidden">

        {/* ── HERO OSCURO — Linear style ───────────────────────────────── */}
        <section className="relative min-h-[92vh] flex flex-col items-center justify-center bg-[#0d0d10] overflow-hidden">
          {/* purple/blue glow top-left */}
          <div aria-hidden className="pointer-events-none absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(99,102,241,0.18) 0%, transparent 70%)" }} />
          {/* blue glow bottom-right */}
          <div aria-hidden className="pointer-events-none absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(15,94,156,0.22) 0%, transparent 70%)" }} />
          {/* fine dot grid */}
          <div aria-hidden className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }} />

          <div className="container-shell relative z-10 text-center px-6">
            <motion.p
              variants={fadeUp} initial="hidden" animate="show" custom={0}
              className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-indigo-400 mb-6"
            >
              Compromiso real · Valentín Protección Integral
            </motion.p>

            <motion.h1
              variants={fadeUp} initial="hidden" animate="show" custom={1}
              className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.08] tracking-tight max-w-4xl mx-auto"
            >
              Lo que nos comprometemos{" "}
              <span className="bg-gradient-to-r from-indigo-400 to-[#5ba4f5] bg-clip-text text-transparent">
                a cumplir.
              </span>
              {" "}Siempre.
            </motion.h1>

            <motion.p
              variants={fadeUp} initial="hidden" animate="show" custom={2}
              className="mt-6 text-lg text-white/50 max-w-2xl mx-auto leading-relaxed"
            >
              Sin letra pequeña. Sin excusas. Estas son las garantías que puedes exigirnos desde el primer día.
            </motion.p>

            {/* badges row */}
            <motion.div
              variants={fadeUp} initial="hidden" animate="show" custom={3}
              className="mt-10 flex flex-wrap items-center justify-center gap-3"
            >
              {badges.map((b) => (
                <div key={b.value}
                  className="flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm px-5 py-2.5"
                >
                  <span className="text-base font-bold text-white">{b.value}</span>
                  <span className="text-sm text-white/40">{b.label}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA secundario hero */}
            <motion.div
              variants={fadeUp} initial="hidden" animate="show" custom={4}
              className="mt-10"
            >
              <a
                href="#garantias"
                className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors"
              >
                Ver nuestras garantías
                <ArrowRight className="h-4 w-4" />
              </a>
            </motion.div>
          </div>

          {/* bottom fade to white */}
          <div aria-hidden className="absolute bottom-0 left-0 right-0 h-32"
            style={{ background: "linear-gradient(to bottom, transparent, #ffffff)" }} />
        </section>

        {/* ── GARANTÍA PERSONAL — foto + texto, luz ───────────────────── */}
        <section className="section-pad bg-white">
          <div className="container-shell">
            <motion.div
              variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
              className="rounded-3xl border border-gray-100 shadow-sm overflow-hidden"
            >
              <div className="grid xl:grid-cols-2">
                <div className="relative min-h-[380px] xl:min-h-[500px]">
                  <Image
                    src="/images/rosa_y_sebastian_conversando.png"
                    alt="Rosa y Sebastián Valentín, garantía personal de asesoramiento en seguros"
                    fill loading="lazy"
                    sizes="(max-width: 1280px) 100vw, 600px"
                    className="object-cover object-top"
                  />
                </div>
                <div className="p-10 md:p-14 flex flex-col justify-center">
                  <p className="kicker">Garantía personal</p>
                  <h2 className="mt-3 font-heading text-3xl md:text-4xl font-bold text-[#0d0d10] leading-tight">
                    Dos personas,{" "}
                    <em className="not-italic text-[#0F5E9C]">un compromiso</em>
                  </h2>
                  <p className="mt-5 text-gray-500 leading-relaxed">
                    Rosa y Sebastián son quienes responden tus mensajes, preparan las propuestas y te acompañan si hay algún problema. No hay call centers ni equipos de juniors. Solo dos profesionales con 10 años de experiencia y una reputación que cuidar.
                  </p>
                  <ul className="mt-6 space-y-3">
                    {["Atención directa y personal", "Sin intermediarios ni bots", "Disponibles por WhatsApp"].map((item) => (
                      <li key={item} className="flex items-center gap-3 text-sm text-gray-600">
                        <CheckCircle2 className="h-4 w-4 text-[#0F5E9C] shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── GARANTÍAS — alternating dark/light rows — Linear style ── */}
        <div id="garantias">
          {guarantees.map(({ num, icon: Icon, title, body, dark }, i) => (
            <section
              key={num}
              className={`section-pad ${
                dark ? "bg-[#0d0d10]" : "bg-white"
              }`}
            >
              <div className="container-shell">
                <motion.div
                  variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={0}
                  className={`max-w-4xl mx-auto flex flex-col md:flex-row items-start gap-10 ${
                    i % 2 === 1 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* number block */}
                  <div className="shrink-0 flex flex-col items-center">
                    <span className={`font-heading text-[6rem] font-bold leading-none select-none ${
                      dark ? "text-white/8" : "text-gray-100"
                    }`}>
                      {num}
                    </span>
                  </div>

                  {/* content */}
                  <div className="flex-1">
                    <div className={`w-12 h-12 mb-5 rounded-xl flex items-center justify-center ${
                      dark ? "bg-indigo-500/10" : "bg-[#0F5E9C]/8"
                    }`}>
                      <Icon className={`h-6 w-6 ${ dark ? "text-indigo-400" : "text-[#0F5E9C]" }`} />
                    </div>
                    <h2 className={`font-heading text-3xl md:text-4xl font-bold leading-tight mb-4 ${
                      dark ? "text-white" : "text-[#0d0d10]"
                    }`}>
                      {title}
                    </h2>
                    <p className={`text-lg leading-relaxed max-w-xl ${
                      dark ? "text-white/50" : "text-gray-500"
                    }`}>
                      {body}
                    </p>
                  </div>
                </motion.div>
              </div>
            </section>
          ))}
        </div>

        {/* ── PRECIO GARANTIZADO — oscuro destacado ───────────────────── */}
        <section className="section-pad bg-[#0d0d10]">
          <div className="container-shell">
            <motion.div
              variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
              className="max-w-4xl mx-auto rounded-3xl border border-amber-500/20 bg-gradient-to-br from-amber-500/5 to-transparent p-10 md:p-14 flex flex-col md:flex-row items-start gap-8"
            >
              <div className="shrink-0 w-14 h-14 rounded-2xl bg-amber-500/10 flex items-center justify-center">
                <BadgePercent className="h-7 w-7 text-amber-400" />
              </div>
              <div>
                <p className="text-xs font-semibold tracking-widest uppercase text-amber-400 mb-3">05 — Precio garantizado</p>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
                  El mismo seguro. Mejor precio. Garantizado.
                </h2>
                <p className="text-lg text-white/50 leading-relaxed">
                  Tráenos el precio de tu banco o gestoría. En 10 años y más de 1.200 familias asesoradas, siempre hemos encontrado un precio mejor.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── TIMELINE 3 PASOS — claro ─────────────────────────────────── */}
        <section className="section-pad bg-[#f6f8fa]">
          <div className="container-shell">
            <motion.div
              variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
              className="text-center mb-16"
            >
              <p className="kicker">Así funciona</p>
              <h2 className="mt-3 font-heading text-3xl md:text-4xl font-bold text-[#0d0d10]">
                Tres pasos. Sin complicaciones.
              </h2>
            </motion.div>

            <div className="relative max-w-4xl mx-auto">
              <div aria-hidden
                className="hidden md:block absolute top-10 left-[calc(16.66%+1rem)] right-[calc(16.66%+1rem)] h-px"
                style={{ background: "linear-gradient(90deg, transparent, #d1d5db 30%, #d1d5db 70%, transparent)" }}
              />
              <div className="grid md:grid-cols-3 gap-10">
                {steps.map(({ step, title, desc }, i) => (
                  <motion.div
                    key={step}
                    variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={i * 0.1}
                    className="flex flex-col items-center text-center"
                  >
                    <div className="w-20 h-20 rounded-2xl bg-white border border-gray-200 shadow-sm flex flex-col items-center justify-center mb-6">
                      <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider">Paso</span>
                      <span className="font-heading text-2xl font-bold text-[#0F5E9C]">{step}</span>
                    </div>
                    <h3 className="font-heading text-lg font-bold text-[#0d0d10] mb-2">{title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── ¿QUÉ PASA SI NO CUMPLIMOS? — oscuro ─────────────────────── */}
        <section className="section-pad bg-[#0d0d10]">
          <div className="container-shell">
            <motion.div
              variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center"
            >
              <p className="text-xs font-semibold tracking-widest uppercase text-indigo-400 mb-5">Transparencia total</p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
                ¿Qué pasa si no cumplimos?
              </h2>
              <p className="text-lg text-white/50 leading-relaxed mb-5">
                Nuestro negocio vive de la recomendación. Un cliente insatisfecho nos cuesta más que cualquier póliza. Por eso estas garantías no son marketing — son la base de cómo trabajamos.
              </p>
              <p className="text-lg text-white/50 leading-relaxed">
                En más de 10 años hemos asesorado a más de 1.200 familias en Madrid. La mayoría de nuestros nuevos clientes llegan recomendados por alguien que ya confía en nosotros. Esa es nuestra mejor garantía.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── CTA FINAL — claro con WhatsApp ──────────────────────────── */}
        <section className="section-pad bg-white border-t border-gray-100">
          <div className="container-shell text-center">
            <motion.h2
              variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={0}
              className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-[#0d0d10] leading-tight mb-4"
            >
              Compruébalo sin compromiso
            </motion.h2>
            <motion.p
              variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={0.1}
              className="text-lg text-gray-500 mb-10 max-w-xl mx-auto"
            >
              Cuéntanos qué necesitas. Te responderemos en menos de 24h con una propuesta honesta.
            </motion.p>
            <motion.div
              variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={0.2}
            >
              <a
                href={buildWhatsAppHref("Hola, quiero conocer más sobre vuestras garantías de asesoramiento.")}
                className="inline-flex items-center gap-3 rounded-2xl bg-[#25D366] hover:bg-[#1ebe5d] text-white font-semibold text-lg px-10 py-5 shadow-lg shadow-[#25D366]/25 transition-all duration-200 hover:shadow-[#25D366]/40 hover:scale-[1.02]"
              >
                <WhatsAppIcon className="h-6 w-6" />
                Escríbenos por WhatsApp
              </a>
            </motion.div>
          </div>
        </section>

      </main>
      <Footer />
      <StickyWhatsApp />
    </>
  );
}
