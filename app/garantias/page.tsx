'use client'

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { StickyWhatsApp } from "@/components/sticky-whatsapp";
import { buildWhatsAppHref } from "@/lib/products";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Shield, MessageCircle, Clock, HeartHandshake } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

const guarantees = [
  {
    icon: Shield,
    title: "Seriedad en cada detalle",
    body: "Trabajamos con la misma exigencia que esperarías de una gran firma. Documentación clara, comunicación profesional y propuestas presentadas con cuidado.",
  },
  {
    icon: Clock,
    title: "Respuesta en menos de 24h",
    body: "Respondemos en menos de 24 horas laborables. Si no es así, te llamamos nosotros con una explicación y una disculpa real.",
  },
  {
    icon: HeartHandshake,
    title: "Proceso sin fricciones",
    body: "Sin formularios interminables, sin burocracia innecesaria. Consulta, propuesta y contratación en 3 pasos. Si algo se puede simplificar, lo simplificamos.",
  },
  {
    icon: MessageCircle,
    title: "Sin presión, nunca",
    body: "No trabajamos a comisión por venderte el producto más caro. Nuestro objetivo es que contrates lo que de verdad te conviene. Si no hay nada que encaje, te lo decimos.",
  },
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

        {/* ── HERO ─────────────────────────────────────────────────────── */}
        <section className="section-pad bg-[#0d0d10]">
          <div className="container-shell text-center max-w-4xl mx-auto">
            <motion.p
              variants={fadeUp} initial="hidden" animate="show" custom={0}
              className="kicker text-indigo-400"
            >
              NUESTRAS GARANTÍAS
            </motion.p>

            <motion.h1
              variants={fadeUp} initial="hidden" animate="show" custom={1}
              className="section-title text-white mt-4"
            >
              Lo que prometemos,{" "}
              <span className="text-gradient from-indigo-400 to-[#5ba4f5]">
                lo cumplimos.
              </span>
              {" "}Sin letra pequeña.
            </motion.h1>

            <motion.p
              variants={fadeUp} initial="hidden" animate="show" custom={2}
              className="section-copy text-white/60 mt-6 max-w-2xl mx-auto"
            >
              Estas son las garantías que puedes exigirnos desde el primer día. Sin excusas. Sin condiciones ocultas.
            </motion.p>
          </div>
        </section>

        {/* ── GARANTÍAS GRID ───────────────────────────────────────────── */}
        <section className="section-pad bg-white">
          <div className="container-shell">
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {guarantees.map((g, i) => (
                <motion.div
                  key={g.title}
                  variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={i * 0.1}
                  className="soft-card p-8"
                >
                  <div className="w-12 h-12 rounded-xl bg-[var(--blue)]/10 flex items-center justify-center mb-5">
                    <g.icon className="w-6 h-6 text-[var(--blue)]" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-[var(--blue-deep)] mb-3">{g.title}</h3>
                  <p className="text-[var(--muted)] leading-relaxed">{g.body}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── QUOTE BLOCK ──────────────────────────────────────────────── */}
        <section className="section-pad bg-[#f6f8fa]">
          <div className="container-shell max-w-3xl mx-auto text-center">
            <motion.div
              variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
              className="glass p-10 md:p-14 rounded-2xl"
            >
              <svg className="w-10 h-10 text-[var(--blue)]/30 mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11H10v10H0z" />
              </svg>
              <blockquote className="text-xl md:text-2xl text-[var(--blue-deep)] font-heading font-semibold leading-relaxed">
                &ldquo;Llevo más de 10 años ayudando a familias a proteger lo que más quieren. 
                No me gusta la letra pequeña ni las sorpresas. Por eso, lo que prometo, lo cumplo. 
                Siempre.&rdquo;
              </blockquote>
              <div className="mt-6 flex items-center justify-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[var(--blue)]/10 flex items-center justify-center text-[var(--blue)] font-bold text-lg">
                  R
                </div>
                <div className="text-left">
                  <p className="font-semibold text-[var(--blue-deep)]">Rosa Valentín</p>
                  <p className="text-sm text-[var(--muted)]">Fundadora · Valentín Protección Integral</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── PRECIO GARANTIZADO ───────────────────────────────────────── */}
        <section className="section-pad bg-white">
          <div className="container-shell max-w-3xl mx-auto text-center">
            <motion.div
              variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
            >
              <h2 className="section-title text-[var(--blue-deep)]">
                El mismo seguro. Mejor precio. Garantizado.
              </h2>
              <p className="section-copy text-[var(--muted)] mt-4 max-w-2xl mx-auto">
                Tráenos el precio de tu banco o gestoría y lo revisamos contigo entre las modalidades que podemos distribuir, 
                siempre hemos encontrado un precio mejor.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-4 py-2 text-sm font-medium text-green-700">
                  <CheckCircle2 className="h-4 w-4" />
                  Sin permanencia
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-4 py-2 text-sm font-medium text-green-700">
                  <CheckCircle2 className="h-4 w-4" />
                  Sin copagos ocultos
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-4 py-2 text-sm font-medium text-green-700">
                  <CheckCircle2 className="h-4 w-4" />
                  Cancelación gratuita
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── TIMELINE 3 PASOS ─────────────────────────────────────────── */}
        <section className="section-pad bg-[#f6f8fa]">
          <div className="container-shell max-w-4xl mx-auto">
            <motion.div
              variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
              className="text-center mb-14"
            >
              <p className="kicker">Así funciona</p>
              <h2 className="section-title text-[var(--blue-deep)] mt-3">
                Tres pasos. Sin complicaciones.
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { step: "01", title: "Consulta gratuita", desc: "Cuéntanos tu situación sin compromiso. Analizamos qué necesitas de verdad." },
                { step: "02", title: "Propuesta en 24h", desc: "Recibes opciones claras, comparadas y explicadas. Sin letra pequeña." },
                { step: "03", title: "Acompañamiento continuo", desc: "Seguimos contigo después de contratar. Ante cualquier duda o siniestro, aquí estamos." },
              ].map((item, i) => (
                <motion.div
                  key={item.step}
                  variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={i * 0.1}
                  className="text-center"
                >
                  <div className="w-16 h-16 rounded-2xl bg-white border border-gray-200 shadow-sm flex flex-col items-center justify-center mx-auto mb-5">
                    <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider">Paso</span>
                    <span className="font-heading text-2xl font-bold text-[var(--blue)]">{item.step}</span>
                  </div>
                  <h3 className="font-heading text-lg font-bold text-[var(--blue-deep)] mb-2">{item.title}</h3>
                  <p className="text-[var(--muted)] text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────────────── */}
        <section className="section-pad bg-white">
          <div className="container-shell text-center max-w-2xl mx-auto">
            <motion.h2
              variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={0}
              className="section-title text-[var(--blue-deep)] mb-4"
            >
              ¿Hablamos sin compromiso?
            </motion.h2>
            <motion.p
              variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={0.1}
              className="section-copy text-[var(--muted)] mb-10"
            >
              Cuéntanos qué necesitas. Te responderemos en menos de 24h con una propuesta honesta.
            </motion.p>
            <motion.div
              variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={0.2}
              className="flex flex-wrap items-center justify-center gap-4"
            >
              <a
                href={buildWhatsAppHref("Hola, quiero conocer más sobre vuestras garantías de asesoramiento.")}
                className="btn-whatsapp inline-flex items-center gap-3"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Escríbenos por WhatsApp
              </a>
              <Link
                href="/contacto"
                className="btn-secondary inline-flex items-center gap-2"
              >
                Ir al formulario
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </section>

      </main>
      <Footer />
      <StickyWhatsApp />
    </>
  );
}
