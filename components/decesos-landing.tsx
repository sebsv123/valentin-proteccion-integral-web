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
  Home,
  MapPin,
  FileCheck,
  Headphones,
  Landmark,
  Stethoscope,
  Gift,
  Globe,
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

export function DecesosLanding() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    setPrefersReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  const fadeInUpVariants = getFadeInUp(prefersReducedMotion);

  const faqs = [
    {
      q: "¿Qué cubre un seguro de decesos en Madrid?",
      a: "Un seguro de decesos cubre los gastos del sepelio (entre 4.000€ y 6.000€ de media), el traslado de restos a cualquier punto de España o el extranjero, y la gestión completa de todos los trámites funerarios. Rosa y Sebastián acompañan a la familia desde el primer aviso hasta la gestión final.",
    },
    {
      q: "¿Cuánto cuesta un seguro de decesos en Madrid?",
      a: "Los seguros de decesos que gestionamos en Madrid comienzan desde 5€ al mes por persona. El precio depende de la edad y las coberturas elegidas. Contacta con Rosa y Sebastián para un presupuesto personalizado sin compromiso en 30 minutos.",
    },
    {
      q: "¿El seguro de decesos tiene permanencia?",
      a: "No. Los seguros de decesos que gestionamos no tienen permanencia. Puedes cancelarlo cuando lo necesites con el simple preaviso indicado en la póliza.",
    },
    {
      q: "¿Puedo contratar decesos para mis padres mayores?",
      a: "Sí. Es uno de los perfiles más habituales. Los hijos contratan el seguro para sus padres y así toda la familia queda tranquila. Consultamos las condiciones según la edad y el estado de salud.",
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
                <span className="inline-flex items-center px-4 py-2 rounded-full bg-amber-100 text-amber-800 text-sm font-semibold">
                  <Heart className="h-4 w-4 mr-1.5" /> Más de 1.200 familias protegidas en Madrid
                </span>
              </motion.div>

              <motion.p
                variants={fadeInUpVariants}
                className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-2"
              >
                Cuando más se necesita, no hay que pensar en dinero
              </motion.p>

              <motion.h1
                variants={fadeInUpVariants}
                className="text-3xl sm:text-4xl lg:text-6xl font-bold tracking-tight mb-6"
              >
                Seguro de Decesos en Madrid:{" "}
                <span className="underline decoration-amber-500 decoration-4 underline-offset-4">Tu Familia No Se Preocupa</span>{" "}
                por el Funeral
              </motion.h1>

              <motion.p
                variants={fadeInUpVariants}
                className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed"
              >
                Un funeral cuesta entre 4.000€ y 6.000€. Con este seguro, tu familia no adelanta ni un euro. Rosa y Sebastián gestionan todo desde el primer aviso.
              </motion.p>

              <motion.div
                variants={fadeInUpVariants}
                className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8 text-sm"
              >
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-amber-600" /> Respuesta en 2 horas
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-amber-600" /> Sin permanencia
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-amber-600" /> Gestión completa del funeral
                </span>
              </motion.div>

              <motion.div
                variants={fadeInUpVariants}
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
              >
                <WhatsAppLink
                  href="https://wa.me/34603448765?text=Hola%2C%20me%20gustar%C3%ADa%20informaci%C3%B3n%20sobre%20el%20seguro%20de%20decesos."
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
                  alt="Rosa y Sebastián Valentín, asesores de seguros de decesos en Madrid"
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

      {/* 3. LA REALIDAD QUE CAMBIA TODO */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="py-14 sm:py-20 lg:py-24 bg-accent/30"
      >
        <div className="container mx-auto px-4">
          <motion.div variants={fadeInUpVariants} className="text-center mb-10 sm:mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-4">La realidad que cambia todo</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Cuando llega el momento, lo último que una familia necesita son preocupaciones prácticas.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: <Home className="h-7 w-7 text-muted-foreground mb-3" />,
                title: "Fallecimiento en casa",
                descSin: "Gastos del funeral que la familia adelanta",
                descCon: "Gestión completa en horas, sin que nadie pague nada por adelantado",
              },
              {
                icon: <MapPin className="h-7 w-7 text-muted-foreground mb-3" />,
                title: "Fallecimiento fuera de Madrid",
                descSin: "Traslado de restos complicado y costoso",
                descCon: "Traslado cubierto a cualquier punto de España o el extranjero",
              },
              {
                icon: <FileCheck className="h-7 w-7 text-muted-foreground mb-3" />,
                title: "Los trámites del registro",
                descSin: "Papeleos, certificados, gestiones en momentos de duelo",
                descCon: "Sebastián o Rosa se ocupan de todo",
              },
            ].map((escenario, i) => (
              <div
                key={i}
                className="flex flex-col gap-3 items-start text-left p-6 rounded-2xl border bg-card hover:shadow-md transition-shadow"
              >
                {escenario.icon}
                <h3 className="text-xl font-bold">{escenario.title}</h3>
                <div className="space-y-2">
                  <p className="text-sm text-red-600/80 line-through">{escenario.descSin}</p>
                  <p className="text-sm text-emerald-600 font-medium">{escenario.descCon}</p>
                </div>
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
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-4">Lo que cubre tu seguro de decesos</h2>
            <p className="text-xl text-white/80">Sin letra pequeña. Te explicamos todo antes de firmar.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: <Landmark className="h-6 w-6" />,
                title: "Gastos de sepelio al 100%",
                desc: "Entre 4.000€ y 6.000€ de media. Tanatorio, ataúd, servicio funerario completo.",
              },
              {
                icon: <MapPin className="h-6 w-6" />,
                title: "Traslado de restos dentro de España",
                desc: "Desde cualquier punto de España hasta el lugar del entierro elegido por la familia.",
              },
              {
                icon: <Globe className="h-6 w-6" />,
                title: "Traslado internacional de restos",
                desc: "Repatriación desde cualquier país del mundo. Incluido en las mejores modalidades.",
              },
              {
                icon: <FileCheck className="h-6 w-6" />,
                title: "Gestión completa de trámites",
                desc: "Rosa o Sebastián se ocupan de todos los papeleos: registro civil, certificados, banco...",
              },
              {
                icon: <Headphones className="h-6 w-6" />,
                title: "Asistencia 24h desde el primer aviso",
                desc: "Una llamada y todo se pone en marcha. Teléfono directo, sin esperas ni buzones.",
              },
              {
                icon: <Landmark className="h-6 w-6" />,
                title: "Lápida y recordatorios",
                desc: "Incluido en muchas modalidades. La familia no tiene que preocuparse de nada.",
              },
              {
                icon: <Stethoscope className="h-6 w-6" />,
                title: "Segunda opinión médica (si incluye)",
                desc: "Algunas pólizas incluyen este servicio adicional para los beneficiarios.",
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
      <section className="py-10 bg-amber-50 border-y border-amber-200">
        <div className="container mx-auto max-w-4xl text-center px-4">
          <p className="text-lg md:text-xl font-bold text-amber-900">
            ¿Ya tienes salud o accidentes con nosotros?
          </p>
          <p className="text-base text-amber-800 mt-2 max-w-2xl mx-auto">
            Al combinar decesos con cualquier otro seguro, las condiciones mejoran. Un solo gestor para toda tu protección familiar.
          </p>
          <WhatsAppLink
            href={`https://wa.me/34603448765?text=${encodeURIComponent(
              "Hola, tengo otro seguro con vosotros y quiero consultar sobre añadir decesos."
            )}`}
            className="mt-4 inline-flex items-center gap-2 text-amber-700 font-semibold hover:opacity-80 transition-opacity underline"
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
                title: "Solo tú",
                precio: "desde ~5€/mes",
              },
              {
                icon: <Users className="h-8 w-8 text-muted-foreground mb-4" />,
                title: "Pareja",
                precio: "desde ~9€/mes",
              },
              {
                icon: <Heart className="h-8 w-8 text-muted-foreground mb-4" />,
                title: "Padres o mayores",
                precio: "desde ~7€/mes por persona",
              },
            ].map((precio, i) => (
              <motion.div
                key={i}
                variants={fadeInUpVariants}
                className="text-center p-8 rounded-2xl border bg-card shadow-sm"
              >
                {precio.icon}
                <h3 className="text-xl font-bold mb-2">{precio.title}</h3>
                <p className="text-2xl font-bold text-amber-600">{precio.precio}</p>
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
        className="py-14 sm:py-20 lg:py-24 bg-amber-50"
      >
        <div className="container mx-auto px-4">
          <motion.div variants={fadeInUpVariants} className="text-center mb-10 sm:mb-16">
            <h2 className="text-3xl font-bold sm:text-5xl mb-4">Así de sencillo es empezar</h2>
          </motion.div>

          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-16 items-center max-w-6xl mx-auto">
            {/* Columna izquierda: los 3 pasos */}
            <div>
              <div className="space-y-12 relative">
                <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-amber-200 hidden md:block" />

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
                    <div className="flex-none w-12 h-12 rounded-full bg-amber-600 text-white flex items-center justify-center font-bold text-xl relative z-10 shadow-lg">
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
                alt="Rosa y Sebastián Valentín explicando seguro de decesos"
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
                  alt="Rosa y Sebastián Valentín respondiendo preguntas sobre seguros de decesos"
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
            El mismo seguro de decesos. Mejor precio. Garantizado.
          </h2>
          <p className="text-base sm:text-xl text-white/80 mb-8">
            Tráenos el precio que tengas. En 10 años nunca hemos dejado de encontrar uno mejor.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <WhatsAppLink
              href="https://wa.me/34603448765?text=Hola%2C%20me%20gustar%C3%ADa%20informaci%C3%B3n%20sobre%20el%20seguro%20de%20decesos."
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
            ¿Buscas cobertura ante accidentes?{" "}
            <a href="/seguros/accidentes" className="underline font-medium hover:text-white">
              Ver seguro de accidentes →
            </a>
          </p>
        </div>
      </motion.section>
    </>
  );
}
