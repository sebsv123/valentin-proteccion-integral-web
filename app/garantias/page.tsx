'use client'

import Image from "next/image";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { StickyWhatsApp } from "@/components/sticky-whatsapp";
import { buildWhatsAppHref } from "@/lib/products";
import { Shield, Zap, Clock, HeartHandshake, BadgePercent, CheckCircle2 } from "lucide-react";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

const guarantees = [
  {
    num: "01",
    icon: Shield,
    title: "Seriedad en cada detalle",
    body: "Trabajamos con la misma exigencia que esperarías de una gran firma. Recibirás documentación clara, comunicación profesional y propuestas presentadas con cuidado.",
    color: "blue",
  },
  {
    num: "02",
    icon: Zap,
    title: "Proceso sin fricciones",
    body: "Sin formularios interminables, sin burocracia innecesaria. Consulta, propuesta y contratación en 3 pasos. Si algo se puede simplificar, lo simplificamos.",
    color: "blue",
  },
  {
    num: "03",
    icon: Clock,
    title: "Respuesta en menos de 24h",
    body: "Respondemos en menos de 24 horas laborables. Si no es así, te llamamos nosotros con una explicación y una disculpa real.",
    color: "blue",
  },
  {
    num: "04",
    icon: HeartHandshake,
    title: "Sin presión, nunca",
    body: "No trabajamos a comisión por venderte el producto más caro. Nuestro objetivo es que contrates lo que de verdad te conviene. Si no hay nada que encaje, te lo decimos.",
    color: "blue",
  },
];

const steps = [
  {
    step: "01",
    title: "Consulta gratuita",
    desc: "Cuéntanos tu situación sin compromiso. Analizamos qué necesitas de verdad.",
  },
  {
    step: "02",
    title: "Propuesta en 24h",
    desc: "Recibes opciones claras, comparadas y explicadas. Sin letra pequeña.",
  },
  {
    step: "03",
    title: "Acompañamiento continuo",
    desc: "Seguimos contigo después de contratar. Ante cualquier duda o siniestro, aquí estamos.",
  },
];

const badges = [
  { value: "+10", label: "años de experiencia" },
  { value: "+1.200", label: "familias protegidas" },
  { value: "5.0★", label: "valoración en Google" },
];

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

        {/* ── HERO — Stripe gradient + Apple large type ── */}
        <section className="relative overflow-hidden bg-[#0a1f3c] py-24 lg:py-36">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(15,94,156,0.55) 0%, transparent 70%)",
            }}
          />
          {/* subtle grid */}
          <div
            aria-hidden
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />

          <div className="container-shell relative z-10 text-center">
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0}
              className="inline-block text-xs font-semibold tracking-widest uppercase text-white/50 mb-5"
            >
              Compromiso real
            </motion.p>

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={1}
              className="font-heading text-4xl md:text-5xl lg:text-[3.75rem] font-bold text-white leading-[1.1] tracking-tight max-w-4xl mx-auto"
            >
              Lo que nos comprometemos{" "}
              <span className="text-[#5ba4f5]">a cumplir.</span>{" "}Siempre.
            </motion.h1>

            {/* Badges — Apple-style pill row */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={2}
              className="mt-10 flex flex-wrap items-center justify-center gap-3 md:gap-5"
            >
              {badges.map((b) => (
                <div
                  key={b.value}
                  className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm px-5 py-2.5"
                >
                  <span className="text-lg font-bold text-white">{b.value}</span>
                  <span className="text-sm text-white/50">{b.label}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── GARANTÍA PERSONAL — Notion warmth + Apple photo ── */}
        <section className="section-pad bg-white">
          <div className="container-shell">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="rounded-3xl border border-gray-100 shadow-sm overflow-hidden"
            >
              <div className="grid xl:grid-cols-2">
                <div className="relative min-h-[360px] xl:min-h-[480px]">
                  <Image
                    src="/images/rosa_y_sebastian_conversando.png"
                    alt="Rosa y Sebastián Valentín, garantía personal de asesoramiento en seguros"
                    fill
                    loading="lazy"
                    sizes="(max-width: 1280px) 100vw, 600px"
                    className="object-cover object-top"
                  />
                </div>
                <div className="p-10 md:p-14 flex flex-col justify-center bg-[#fafafa]">
                  <p className="kicker">Garantía personal</p>
                  <h2 className="mt-3 font-heading text-3xl md:text-4xl font-bold text-[#0a1f3c] leading-tight">
                    Dos personas,{" "}
                    <span className="italic text-[#0F5E9C]">un compromiso</span>
                  </h2>
                  <p className="mt-5 text-gray-500 leading-relaxed text-[1.05rem]">
                    Rosa y Sebastián son quienes responden tus mensajes, preparan las propuestas y te acompañan si hay algún problema. No hay call centers ni equipos de juniors. Solo dos profesionales con 10 años de experiencia y una reputación que cuidar.
                  </p>
                  <ul className="mt-6 space-y-2">
                    {["Atención directa y personal", "Sin intermediarios ni bots", "Disponibles por WhatsApp"].map((item) => (
                      <li key={item} className="flex items-center gap-2.5 text-sm text-gray-600">
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

        {/* ── GRID GARANTÍAS — Stripe card numbers ── */}
        <section className="section-pad bg-[#f6f8fa]">
          <div className="container-shell">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-center mb-14"
            >
              <p className="kicker">Nuestros compromisos</p>
              <h2 className="mt-3 font-heading text-3xl md:text-4xl font-bold text-[#0a1f3c]">
                Garantías que puedes exigir
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-5 max-w-5xl mx-auto">
              {guarantees.map(({ num, icon: Icon, title, body }, i) => (
                <motion.div
                  key={num}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  custom={i * 0.08}
                  whileHover={{ y: -3, boxShadow: "0 8px 32px rgba(10,31,60,0.09)" }}
                  className="relative bg-white rounded-2xl border border-gray-100 shadow-sm p-8 overflow-hidden cursor-default transition-shadow"
                >
                  {/* Big number background — Stripe style */}
                  <span
                    aria-hidden
                    className="absolute top-4 right-5 font-heading text-7xl font-bold text-gray-100 select-none leading-none"
                  >
                    {num}
                  </span>
                  <div className="relative z-10">
                    <div className="w-12 h-12 mb-5 rounded-xl bg-[#0F5E9C]/8 flex items-center justify-center">
                      <Icon className="h-6 w-6 text-[#0F5E9C]" />
                    </div>
                    <h3 className="font-heading text-xl font-bold text-[#0a1f3c] mb-3">{title}</h3>
                    <p className="text-gray-500 leading-relaxed text-sm">{body}</p>
                  </div>
                </motion.div>
              ))}

              {/* Full-width card — precio garantizado */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                custom={0.4}
                whileHover={{ y: -3, boxShadow: "0 8px 32px rgba(217,119,6,0.12)" }}
                className="relative md:col-span-2 bg-white rounded-2xl border border-amber-200 shadow-sm p-8 overflow-hidden cursor-default transition-shadow"
              >
                <span
                  aria-hidden
                  className="absolute top-4 right-5 font-heading text-7xl font-bold text-amber-50 select-none leading-none"
                >
                  05
                </span>
                <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-6">
                  <div className="w-12 h-12 shrink-0 rounded-xl bg-amber-50 flex items-center justify-center">
                    <BadgePercent className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-bold text-[#0a1f3c] mb-2">
                      El mismo seguro. Mejor precio. Garantizado.
                    </h3>
                    <p className="text-gray-500 leading-relaxed text-sm">
                      Tráenos el precio de tu banco o gestoría. En 10 años y más de 1.200 familias asesoradas, siempre hemos encontrado un precio mejor.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── TIMELINE — 3 pasos — Notion warmth ── */}
        <section className="section-pad bg-white">
          <div className="container-shell">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-center mb-14"
            >
              <p className="kicker">Así funciona</p>
              <h2 className="mt-3 font-heading text-3xl md:text-4xl font-bold text-[#0a1f3c]">
                Tres pasos. Sin complicaciones.
              </h2>
            </motion.div>

            <div className="relative max-w-4xl mx-auto">
              {/* connector line — desktop */}
              <div
                aria-hidden
                className="hidden md:block absolute top-10 left-[calc(16.66%+1rem)] right-[calc(16.66%+1rem)] h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"
              />

              <div className="grid md:grid-cols-3 gap-8">
                {steps.map(({ step, title, desc }, i) => (
                  <motion.div
                    key={step}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    custom={i * 0.12}
                    className="flex flex-col items-center text-center"
                  >
                    <div className="w-20 h-20 rounded-2xl bg-[#f6f8fa] border border-gray-100 flex flex-col items-center justify-center mb-5 shadow-sm">
                      <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Paso</span>
                      <span className="font-heading text-2xl font-bold text-[#0F5E9C]">{step}</span>
                    </div>
                    <h3 className="font-heading text-lg font-bold text-[#0a1f3c] mb-2">{title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── ¿QUÉ PASA SI NO CUMPLIMOS? — Notion card ── */}
        <section className="section-pad bg-[#f6f8fa]">
          <div className="container-shell">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="max-w-3xl mx-auto rounded-3xl border border-gray-100 bg-white shadow-sm p-10 md:p-14"
            >
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#0a1f3c] mb-6">
                ¿Qué pasa si no cumplimos?
              </h2>
              <p className="text-[1.05rem] text-gray-500 leading-relaxed mb-5">
                Nuestro negocio vive de la recomendación. Un cliente insatisfecho nos cuesta más que cualquier póliza. Por eso estas garantías no son marketing — son la base de cómo trabajamos.
              </p>
              <p className="text-[1.05rem] text-gray-500 leading-relaxed">
                En más de 10 años hemos asesorado a más de 1.200 familias en Madrid. La mayoría de nuestros nuevos clientes llegan recomendados por alguien que ya confía en nosotros. Esa es nuestra mejor garantía.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── CTA FINAL — Stripe gradient + WhatsApp pulse ── */}
        <section className="relative overflow-hidden py-24 lg:py-32">
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background: "linear-gradient(135deg, #0a1f3c 0%, #0F5E9C 60%, #123B68 100%)",
            }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 70% 50% at 80% 50%, rgba(91,164,245,0.15) 0%, transparent 70%)",
            }}
          />
          <div className="container-shell relative z-10 text-center">
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={0}
              className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4"
            >
              Compruébalo sin compromiso
            </motion.h2>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={0.1}
              className="text-lg text-white/70 mb-10 max-w-xl mx-auto"
            >
              Cuéntanos qué necesitas. Te responderemos en menos de 24h con una propuesta honesta o te diremos si no hay nada que encaje contigo.
            </motion.p>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={0.2}
            >
              <a
                href={buildWhatsAppHref("Hola, quiero conocer más sobre vuestras garantías de asesoramiento.")}
                className="inline-flex items-center gap-3 rounded-2xl bg-[#25D366] hover:bg-[#1ebe5d] text-white font-semibold text-lg px-10 py-5 shadow-lg shadow-[#25D366]/30 transition-all duration-200 hover:shadow-[#25D366]/50 hover:scale-[1.02]"
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
