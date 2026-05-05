"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import {
  Heart,
  Clock,
  FileText,
  UserCheck,
  RefreshCw,
  ChevronDown,
  Phone,
  BadgePercent,
  CheckCircle2,
  Users,
  Bike,
  Car,
  Briefcase,
  AlertTriangle,
  Shield,
  TrendingUp,
  Activity,
  Stethoscope,
  Gift,
} from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { WhatsAppLink } from '@/components/whatsapp-link';

const getFadeInUp = (prefersReducedMotion: boolean) => ({
  hidden: { opacity: prefersReducedMotion ? 1 : 0, y: prefersReducedMotion ? 0 : 20 },
  visible: { opacity: 1, y: 0, transition: { duration: prefersReducedMotion ? 0 : 0.5 } },
});

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

export function AccidentesLanding() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    setPrefersReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  const fadeInUpVariants = getFadeInUp(prefersReducedMotion);

  const faqs = [
    {
      q: "¿Qué cubre un seguro de accidentes en Madrid?",
      a: "Un seguro de accidentes cubre la incapacidad temporal (baja laboral), la invalidez permanente (parcial o total) y el fallecimiento por accidente de cualquier tipo: laboral, de tráfico, deportivo o doméstico. La indemnización varía según la gravedad y la cobertura contratada.",
    },
    {
      q: "¿Cuánto cuesta un seguro de accidentes en Madrid?",
      a: "Los seguros de accidentes que gestionamos en Madrid comienzan desde 3€ al mes. El precio depende de la edad, profesión y capital asegurado. Los autónomos y deportistas suelen necesitar coberturas más altas. Contacta con Rosa y Sebastián para un presupuesto personalizado en 30 minutos.",
    },
    {
      q: "¿El seguro de accidentes cubre el deporte?",
      a: "Sí. Las modalidades que gestionamos cubren accidentes deportivos: ciclismo, running, pádel, esquí... También cubren accidentes de tráfico, laborales y domésticos. Te explicamos exactamente qué actividades incluye cada póliza antes de que contrates.",
    },
    {
      q: "¿Puede un autónomo contratar seguro de accidentes?",
      a: "Sí, y es especialmente recomendable. Los autónomos no tienen protección por accidente laboral como los asalariados. Un seguro de accidentes cubre la baja médica y la invalidez, garantizando ingresos si no puedes trabajar. Es una inversión pequeña con gran retorno de tranquilidad.",
    },
  ];

  return (
    <>
      {/* 1. BARRA STICKY */}
      <div className="sticky top-16 z-40 w-full bg-[#002244] text-white py-2 sm:py-3 px-4 shadow-md">
        <div className="container mx-auto max-w-5xl flex items-center justify-center gap-3">
          <p className="text-sm font-semibold leading-tight text-center">
            ¿Tienes ya un presupuesto? Tráenoslo y lo mejoramos — o te decimos honestamente si ya es bueno.
          </p>
        </div>
      </div>

      {/* 2. HERO */}
      <section className="relative min-h-screen flex items-center justify-center border-b overflow-hidden py-20 pt-24 bg-background">
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
            {/* Columna izquierda - Texto */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="text-center lg:text-left"
            >
              <motion.div variants={fadeInUpVariants} className="mb-6">
                <span className="inline-flex items-center px-4 py-2 rounded-full bg-orange-100 text-orange-800 text-sm font-semibold">
                  <Heart className="h-4 w-4 mr-1.5" /> Más de 1.200 familias protegidas en Madrid
                </span>
              </motion.div>

              <motion.p
                variants={fadeInUpVariants}
                className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-2"
              >
                Para lo que no esperas, pero puede pasar
              </motion.p>

              <motion.h1
                variants={fadeInUpVariants}
                className="text-3xl sm:text-4xl lg:text-6xl font-bold tracking-tight mb-6"
              >
                Seguro de Accidentes en Madrid:{" "}
                <span className="underline decoration-orange-500 decoration-4 underline-offset-4">Protégete</span>{" "}
                en Cualquier Situación
              </motion.h1>

              <motion.p
                variants={fadeInUpVariants}
                className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed"
              >
                Trabajo, tráfico, deporte, casa. Un accidente puede dejarte sin ingresos en cualquier momento. Desde 3€/mes, protege tu economía y la de tu familia.
              </motion.p>

              <motion.div
                variants={fadeInUpVariants}
                className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8 text-sm"
              >
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-orange-600" /> Respuesta en 30 min
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-orange-600" /> Sin permanencia
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-orange-600" /> Ideal autónomos y deportistas
                </span>
              </motion.div>

              <motion.div
                variants={fadeInUpVariants}
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
              >
                <WhatsAppLink
                  href="https://wa.me/34603448765?text=Hola%2C%20me%20gustar%C3%ADa%20informaci%C3%B3n%20sobre%20el%20seguro%20de%20accidentes."
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "h-14 px-8 text-lg font-bold bg-emerald-500 hover:bg-emerald-600 text-white gap-2"
                  )}
                >
                  <WhatsAppIcon className="h-5 w-5" />
                  WhatsApp ahora
                </WhatsAppLink>
                <a
                  href="tel:603448765"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "h-14 px-8 text-lg font-bold border-2"
                  )}
                >
                  <Phone className="mr-2 h-5 w-5" />
                  603 448 765
                </a>
              </motion.div>
            </motion.div>

            {/* Columna derecha - Imagen */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative"
            >
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-border">
                <Image
                  src="/images/rosa_y_sebastian_mesa.png"
                  alt="Rosa y Sebastián Valentín, asesores de seguros de accidentes en Madrid"
                  fill
                  loading="lazy"
                  decoding="async"
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. ESCENARIOS */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="py-14 sm:py-20 lg:py-24 bg-accent/30"
      >
        <div className="container mx-auto px-4">
          <motion.div variants={fadeInUpVariants} className="text-center mb-10 sm:mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-4">¿Dónde te puede pasar?</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Los accidentes no avisan. En cualquiera de estas situaciones, un seguro te protege.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: <Briefcase className="h-7 w-7 text-muted-foreground mb-3" />,
                title: "Accidente laboral",
                desc: "Caída en obra, lesión levantando peso, corte con maquinaria... Si eres autónomo, nadie cubre tu baja.",
              },
              {
                icon: <Car className="h-7 w-7 text-muted-foreground mb-3" />,
                title: "Accidente de tráfico",
                desc: "Como conductor, pasajero o peatón. El más común de todos. Una indemnización rápida cuando más la necesitas.",
              },
              {
                icon: <Bike className="h-7 w-7 text-muted-foreground mb-3" />,
                title: "Accidente deportivo",
                desc: "Caída en bici, lesión jugando a pádel, rotura esquiando... Las actividades que más nos gustan también arriesgan.",
              },
              {
                icon: <AlertTriangle className="h-7 w-7 text-muted-foreground mb-3" />,
                title: "Accidente doméstico",
                desc: "Caída por las escaleras, corte cocinando, quemadura... En casa también pasan, y a cualquier edad.",
              },
            ].map((escenario, i) => (
              <div
                key={i}
                className="flex flex-col gap-3 items-start text-left p-6 rounded-2xl border bg-card hover:shadow-md transition-shadow"
              >
                {escenario.icon}
                <h3 className="text-xl font-bold">{escenario.title}</h3>
                <p className="text-muted-foreground text-sm">{escenario.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* 4. COBERTURAS */}
      <section
        id="coberturas"
        className="py-14 sm:py-20 lg:py-24 bg-slate-900 text-white"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-4">Lo que cubre tu seguro de accidentes</h2>
            <p className="text-xl text-white/80">Sin letra pequeña. Te explicamos todo antes de firmar.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: <Activity className="h-6 w-6" />,
                title: "Incapacidad temporal",
                desc: "Te pagan una indemnización diaria durante la baja médica. Ideal para autónomos que no cobran si no trabajan.",
              },
              {
                icon: <Shield className="h-6 w-6" />,
                title: "Invalidez permanente",
                desc: "Cobertura por invalidez parcial o total tras un accidente. Capital que te permite rehacer tu vida.",
              },
              {
                icon: <Heart className="h-6 w-6" />,
                title: "Fallecimiento por accidente",
                desc: "Capital para tus beneficiarios si el accidente tiene consecuencias mortales. Protección familiar completa.",
              },
              {
                icon: <Stethoscope className="h-6 w-6" />,
                title: "Gastos médicos adicionales",
                desc: "Algunas modalidades incluyen reembolso de gastos no cubiertos por la Seguridad Social (fisioterapia, rehabilitación).",
              },
              {
                icon: <TrendingUp className="h-6 w-6" />,
                title: "Fracturas y lesiones específicas",
                desc: "Indemnizaciones fijas por fracturas de huesos, quemaduras, pérdida de miembros... Según gravedad.",
              },
              {
                icon: <AlertTriangle className="h-6 w-6" />,
                title: "Accidentes de cualquier tipo",
                desc: "Laborales, de tráfico, deportivos, domésticos... La póliza cubre cualquier accidente, donde sea y como sea.",
              },
            ].map((cobertura, i) => (
              <div
                key={i}
                className="flex gap-4 p-6 rounded-2xl bg-white/10 border border-white/20"
              >
                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center text-white/60">
                  {cobertura.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">{cobertura.title}</h3>
                  <p className="text-white/70">{cobertura.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. BANNER SORPRESA — COMBINADO */}
      <section className="py-10 bg-orange-50 border-y border-orange-200">
        <div className="container mx-auto max-w-4xl text-center px-4">
          <p className="text-lg md:text-xl font-bold text-orange-900">
            ¿Ya tienes salud o decesos con nosotros?
          </p>
          <p className="text-base text-orange-800 mt-2 max-w-2xl mx-auto">
            Al combinar accidentes con cualquier otro seguro, las condiciones mejoran. Un solo gestor para toda tu protección familiar.
          </p>
          <WhatsAppLink
            href={`https://wa.me/34603448765?text=${encodeURIComponent(
              "Hola, tengo otro seguro con vosotros y quiero consultar sobre añadir accidentes."
            )}`}
            className="mt-4 inline-flex items-center gap-2 text-orange-700 font-semibold hover:opacity-80 transition-opacity underline"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Escríbenos y te lo explicamos →
          </WhatsAppLink>
        </div>
      </section>

      {/* 6. PRECIOS ORIENTATIVOS */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="py-14 sm:py-20 lg:py-24 bg-background"
      >
        <div className="container mx-auto px-4">
          <motion.div variants={fadeInUpVariants} className="text-center mb-10 sm:mb-16">
            <h2 className="text-3xl font-bold sm:text-5xl mb-4">Precios orientativos</h2>
            <p className="text-lg text-muted-foreground">Tu precio exacto en 30 minutos, gratis y sin compromiso.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                icon: <UserCheck className="h-8 w-8 text-muted-foreground mb-4" />,
                title: "Perfil básico",
                precio: "desde ~3€/mes",
                desc: "Jóvenes, trabajadores de oficina",
              },
              {
                icon: <Briefcase className="h-8 w-8 text-muted-foreground mb-4" />,
                title: "Autónomos",
                precio: "desde ~6€/mes",
                desc: "Mayor cobertura de incapacidad",
              },
              {
                icon: <Bike className="h-8 w-8 text-muted-foreground mb-4" />,
                title: "Deportistas",
                precio: "desde ~8€/mes",
                desc: "Cobertura específica deportiva",
              },
            ].map((precio, i) => (
              <motion.div
                key={i}
                variants={fadeInUpVariants}
                className="text-center p-8 rounded-2xl border bg-card shadow-sm"
              >
                {precio.icon}
                <h3 className="text-xl font-bold mb-2">{precio.title}</h3>
                <p className="text-2xl font-bold text-orange-600">{precio.precio}</p>
                <p className="text-sm text-muted-foreground mt-2">{precio.desc}</p>
              </motion.div>
            ))}
          </div>

          <p className="text-center text-sm text-muted-foreground mt-8">
            * Precios orientativos. Tu precio exacto en 30 min, gratis y sin compromiso.
          </p>
        </div>
      </motion.section>

      {/* 7. PROCESO EN 3 PASOS */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="py-14 sm:py-20 lg:py-24 bg-orange-50"
      >
        <div className="container mx-auto px-4">
          <motion.div variants={fadeInUpVariants} className="text-center mb-10 sm:mb-16">
            <h2 className="text-3xl font-bold sm:text-5xl mb-4">Así de sencillo es empezar</h2>
          </motion.div>

          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-16 items-center max-w-6xl mx-auto">
            {/* Columna izquierda: los 3 pasos */}
            <div>
              <div className="space-y-12 relative">
                <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-orange-200 hidden md:block" />

                {[
                  {
                    num: "1",
                    title: "Escríbenos por WhatsApp o llámanos",
                    desc: "Dos clics y tu consulta llega directamente a Rosa o Sebastián.",
                  },
                  {
                    num: "2",
                    title: "Te llamamos en menos de 30 minutos",
                    desc: "Te explican todo sin presión, respondiendo todas tus dudas.",
                  },
                  {
                    num: "3",
                    title: "Recibes tu presupuesto personalizado",
                    desc: "Sin compromiso. Solo cuando estés convencido, procedemos.",
                  },
                ].map((paso, i) => (
                  <motion.div
                    key={i}
                    variants={fadeInUpVariants}
                    className="flex gap-8 relative"
                  >
                    <div className="flex-none w-12 h-12 rounded-full bg-orange-600 text-white flex items-center justify-center font-bold text-xl relative z-10 shadow-lg">
                      {paso.num}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{paso.title}</h3>
                      <p className="text-muted-foreground text-lg">{paso.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Columna derecha: imagen */}
            <div className="hidden lg:block relative aspect-[3/4] rounded-3xl overflow-hidden border shadow-2xl">
              <Image
                src="/images/rosa_y_sebastian_conversando.png"
                alt="Rosa y Sebastián Valentín explicando seguro de accidentes"
                fill
                loading="lazy"
                decoding="async"
                className="object-cover"
                sizes="40vw"
              />
            </div>
          </div>
        </div>
      </motion.section>

      {/* 8. GARANTÍAS */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="py-14 sm:py-20 lg:py-24 bg-background"
      >
        <div className="container mx-auto max-w-5xl px-4">
          <motion.div variants={fadeInUpVariants} className="text-center mb-12">
            <h2 className="text-3xl font-bold sm:text-5xl mb-4">Nuestras garantías</h2>
            <p className="text-xl text-muted-foreground">Promesas que cumplimos</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Clock className="h-8 w-8" />, title: "Respuesta en 30 minutos", desc: "O te llamamos nosotros" },
              { icon: <FileText className="h-8 w-8" />, title: "Sin letra pequeña", desc: "Te explicamos todo antes de firmar" },
              { icon: <UserCheck className="h-8 w-8" />, title: "Gestor personal de por vida", desc: "Rosa o Sebastián, siempre" },
              { icon: <RefreshCw className="h-8 w-8" />, title: "Revisión anual gratuita", desc: "Revisamos tu cobertura cada año" },
            ].map((garantia, i) => (
              <motion.div
                key={i}
                variants={fadeInUpVariants}
                className="text-left p-6 rounded-2xl border bg-card shadow-sm"
              >
                <div className="mb-4 text-muted-foreground">
                  {garantia.icon}
                </div>
                <h3 className="text-lg font-bold mb-2">{garantia.title}</h3>
                <p className="text-muted-foreground text-sm">{garantia.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* 9. FAQ */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="py-14 sm:py-20 lg:py-24 bg-accent/30"
      >
        <div className="container max-w-5xl px-4">
          <h2 className="text-3xl font-bold sm:text-6xl mb-10 text-center lg:hidden">Preguntas frecuentes</h2>
          <div className="grid lg:grid-cols-[0.8fr_1fr] gap-16 items-start">

            <div className="hidden lg:block lg:sticky lg:top-24 text-center">
              <h2 className="text-3xl font-bold sm:text-6xl mb-6">Preguntas frecuentes</h2>
              <div className="relative aspect-square rounded-3xl overflow-hidden border bg-muted">
                <Image
                  src="/images/rosa_y_sebastian_de_pie.png"
                  alt="Rosa y Sebastián Valentín respondiendo preguntas sobre seguros de accidentes"
                  fill
                  loading="lazy"
                  decoding="async"
                  className="object-cover object-top"
                  sizes="40vw"
                />
              </div>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUpVariants}
                  className="rounded-2xl border bg-card overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-4 sm:p-6 text-left hover:bg-accent/50 transition-colors"
                  >
                    <span className="text-base sm:text-lg font-semibold pr-4">{faq.q}</span>
                    <ChevronDown
                      className={cn(
                        "h-5 w-5 flex-shrink-0 transition-transform",
                        openFaq === i && "rotate-180"
                      )}
                    />
                  </button>
                  <motion.div
                    initial={false}
                    animate={{ height: openFaq === i ? "auto" : 0, opacity: openFaq === i ? 1 : 0 }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-6 text-muted-foreground">{faq.a}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* 10. CIERRE + CTA FINAL */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUpVariants}
        className="py-14 sm:py-20 lg:py-24 bg-[#002244] text-white"
      >
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-6">
            El mismo seguro de accidentes. Mejor precio. Garantizado.
          </h2>
          <p className="text-base sm:text-xl text-white/80 mb-8">
            Tráenos el precio que tengas. En 10 años nunca hemos dejado de encontrar uno mejor.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <WhatsAppLink
              href="https://wa.me/34603448765?text=Hola%2C%20me%20gustar%C3%ADa%20informaci%C3%B3n%20sobre%20el%20seguro%20de%20accidentes."
              className={cn(
                buttonVariants({ size: "lg" }),
                "h-14 sm:h-16 px-10 text-lg sm:text-xl font-bold bg-emerald-500 hover:bg-emerald-600 text-white gap-2"
              )}
            >
              <WhatsAppIcon className="h-5 w-5 sm:h-6 sm:w-6" />
              Pedir presupuesto gratis
            </WhatsAppLink>
            <a
              href="tel:603448765"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "h-14 sm:h-16 px-10 text-lg sm:text-xl font-bold border-2 border-white text-white hover:bg-white hover:text-[#002244]"
              )}
            >
              <Phone className="mr-2 h-5 w-5 sm:h-6 sm:w-6" />
              603 448 765
            </a>
          </div>

          {/* ENLACE CRUZADO */}
          <p className="text-center text-sm text-white/60 mt-8">
            ¿Buscas cobertura para gastos de funeral?{" "}
            <a href="/seguros/decesos" className="underline font-medium hover:text-white">
              Ver seguro de decesos →
            </a>
          </p>
        </div>
      </motion.section>
    </>
  );
}
