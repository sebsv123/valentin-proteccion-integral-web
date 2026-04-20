"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { MagicCard, MagicContainer } from "@/components/magicui/magic-card";
import AnimatedShinyText from "@/components/magicui/animated-shiny-text";

const DotGrid = dynamic(() => import("@/components/ui/dot-grid"), {
  ssr: false,
  loading: () => <div className="absolute inset-0 z-0" />,
});

const Globe = dynamic(() => import("@/components/magicui/globe"), {
  ssr: false,
  loading: () => null,
});
import {
  Stethoscope,
  Microscope,
  Siren,
  Building2,
  Baby,
  FlaskConical,
  Clock,
  FileText,
  UserCheck,
  RefreshCw,
  ChevronDown,
  ArrowRight,
  Shield,
  Heart,
  Zap,
  Phone,
  BadgePercent,
  Hospital,
  Lightbulb,
  Gift,
  ArrowUpRight,
  Lock,
  CheckCircle2,
  Hourglass,
} from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";

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

export function SaludLanding() {
  const [form, setForm] = useState({
    nombre: "",
    telefono: "",
    personas: "Solo yo",
  });
  const [sent, setSent] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    setIsTouchDevice(window.matchMedia("(hover: none)").matches);
    setPrefersReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  const fadeInUpVariants = getFadeInUp(prefersReducedMotion);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Hola Rosa y Sebastián 👋\n\nMe llamo *${form.nombre}* y me gustaría información sobre el seguro de salud individual.\n\n📞 Teléfono: ${form.telefono}\n👥 Para: ${form.personas}\n\nGracias.`
    );
    window.open(`https://wa.me/34603448765?text=${msg}`, "_blank");
    setSent(true);
  };

  const faqs = [
    {
      q: "¿Hay períodos de carencia?",
      a: "No para la mayoría de servicios. Lo que sí existe en algunos planes muy específicos te lo explicamos antes de contratar, sin sorpresas.",
    },
    {
      q: "¿Puedo añadir a mi familia?",
      a: "Sí, y cuantos más miembros, mejor precio por persona. Gestión de toda la familia en una sola póliza.",
    },
    {
      q: "¿Qué diferencia hay con la sanidad pública?",
      a: "Sin listas de espera, médico de cabecera propio, habitación individual en hospitalizaciones y acceso inmediato a especialistas.",
    },
    {
      q: "¿Puedo cancelar cuando quiera?",
      a: "Sí. No hay permanencia. Te explicamos todas las condiciones antes de firmar.",
    },
    {
      q: "¿Ya tengo dental con vosotros, tengo ventajas?",
      a: "Sí. Los clientes que amplían su cobertura tienen descuentos especiales. Una llamada y te lo gestionamos.",
    },
    {
      q: "¿Cómo es el proceso de contratación?",
      a: "Nos escribes, te llamamos en 30 minutos, te explicamos todo sin compromiso y solo firmas cuando estás seguro.",
    },
  ];

  return (
    <>
      {/* 1. BARRA STICKY */}
      <div className="sticky top-16 z-40 w-full bg-green-800 text-white py-2 sm:py-3 px-4 shadow-md">
        <div className="container mx-auto max-w-5xl flex items-center justify-between gap-3">

          {/* Texto CORTO en móvil, texto LARGO en desktop */}
          <p className="text-sm font-semibold leading-tight flex-1 truncate">
            <span className="sm:hidden flex items-center gap-1.5">
              <Hospital className="h-4 w-4 inline" /> Médico privado sin esperas
            </span>
            <span className="hidden sm:inline flex items-center gap-1.5">
              <Hospital className="h-4 w-4 inline" /> <span className="font-bold">Sin listas de espera. Médico de cabecera, especialistas y urgencias desde el primer día.</span>
            </span>
          </p>

          {/* CTA: siempre visible, siempre a la derecha */}
          <a
            href="#contacto"
            className="flex-none text-sm font-bold underline underline-offset-4 hover:opacity-80 transition-opacity whitespace-nowrap"
          >
            Pedir presupuesto →
          </a>

        </div>
      </div>

      {/* 2. HERO */}
      <section className="relative min-h-screen flex items-center justify-center border-b overflow-hidden py-20 pt-24 bg-background">
        <DotGrid 
          className="z-0"
          dotSize={4}
          gap={isTouchDevice ? 32 : 28}
          baseColor="#bbf7d0"
          activeColor="#16a34a"
          proximity={isTouchDevice ? 0 : 80}
          shockStrength={isTouchDevice ? 0 : 2}
        />
        <div className="absolute inset-y-0 left-0 w-[55%] hidden lg:block pointer-events-none z-[5]">
          <Globe className="inset-0" />
          <div className="absolute bottom-0 inset-x-0 h-2/3 bg-gradient-to-t from-background to-transparent" />
          <div className="absolute inset-y-0 right-0 w-2/5 bg-gradient-to-l from-background to-transparent" />
        </div>
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
                <AnimatedShinyText className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-800 text-sm font-semibold">
                  <Heart className="h-4 w-4 inline mr-1.5" /> Más de 200 familias madrileñas confían en nosotros
                </AnimatedShinyText>
              </motion.div>

              <motion.h1
                variants={fadeInUpVariants}
                className="text-3xl sm:text-4xl lg:text-6xl font-bold tracking-tight mb-6"
              >
                Médico privado para toda tu familia.{" "}
                <span className="underline decoration-green-500 decoration-4 underline-offset-4">Sin esperas</span>.{" "}
                Sin sorpresas.
              </motion.h1>

              <motion.p
                variants={fadeInUpVariants}
                className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed"
              >
                Accede a especialistas, urgencias y tu médico de cabecera cuando lo necesitas. Rosa y Sebastián te gestionan todo en una sola llamada, de forma personal.
              </motion.p>

              <motion.div
                variants={fadeInUpVariants}
                className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8 text-sm"
              >
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-green-600" /> Respuesta en 30 min
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-green-600" /> Sin letra pequeña
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-green-600" /> Gestor personal
                </span>
              </motion.div>

              <motion.div
                variants={fadeInUpVariants}
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
              >
                <a
                  href="https://wa.me/34603448765"
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "h-14 px-8 text-lg font-bold bg-emerald-500 hover:bg-emerald-600 text-white gap-2"
                  )}
                >
                  <WhatsAppIcon className="h-5 w-5" />
                  WhatsApp ahora
                </a>
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

            {/* Columna derecha - Formulario */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              id="contacto"
              className="relative"
            >
              <div className="bg-card rounded-2xl sm:rounded-3xl shadow-lg sm:shadow-xl border p-5 sm:p-8">
                <h2 className="text-2xl font-bold mb-2 text-center">Recibe tu presupuesto en 30 min</h2>
                <p className="text-muted-foreground text-center mb-6">Sin compromiso. Te lo explicamos todo.</p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="text"
                    placeholder="Nombre completo"
                    required
                    className="w-full h-12 px-4 rounded-xl border bg-background"
                    value={form.nombre}
                    onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                  />
                  <input
                    type="tel"
                    placeholder="Teléfono"
                    required
                    className="w-full h-12 px-4 rounded-xl border bg-background"
                    value={form.telefono}
                    onChange={(e) => setForm({ ...form, telefono: e.target.value })}
                  />
                  <select
                    className="w-full h-12 px-4 rounded-xl border bg-background"
                    value={form.personas}
                    onChange={(e) => setForm({ ...form, personas: e.target.value })}
                  >
                    <option>Solo yo</option>
                    <option>Pareja</option>
                    <option>Familia con hijos</option>
                    <option>Más de 4 personas</option>
                  </select>
                  {sent ? (
                    <p className="text-center text-green-600 font-semibold flex items-center justify-center gap-1.5">
                      <CheckCircle2 className="h-4 w-4" /> Mensaje enviado. Te llamamos en menos de 30 min.
                    </p>
                  ) : (
                    <button
                      type="submit"
                      className={cn(
                        buttonVariants({ size: "lg" }),
                        "w-full h-14 text-lg font-bold shadow-xl shadow-primary/20 hover:scale-[1.02] transition-transform gap-2"
                      )}
                    >
                      <WhatsAppIcon className="h-5 w-5" />
                      Enviar por WhatsApp
                    </button>
                  )}

                  <p className="text-center text-sm text-muted-foreground opacity-70">
                    Al enviar, te abrimos WhatsApp con tus datos para que te llamemos en menos de 30 min.
                  </p>
                  <p className="text-center text-xs font-semibold text-emerald-600 flex items-center justify-center gap-1.5">
                    <Gift className="h-4 w-4 inline" />
                    <span>Si ya tienes dental con nosotros, tienes descuentos especiales al añadir salud.</span>
                  </p>
                  <p className="text-center text-xs text-muted-foreground/60 flex items-center justify-center gap-1.5">
                    <Lock className="h-3.5 w-3.5 inline" /> Consulta sin compromiso. Sin letra pequeña. Nunca compartimos tus datos.
                  </p>
                </form>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Globe — visible solo en móvil, debajo del formulario */}
        <div className="lg:hidden relative w-full max-w-[360px] aspect-square mx-auto mt-12">
          <Globe className="top-0" />
        </div>
      </section>

      {/* 3. BENEFICIOS PRINCIPALES */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="py-14 sm:py-20 lg:py-24 bg-accent/30"
      >
        <div className="container mx-auto px-4">
          <motion.div variants={fadeInUpVariants} className="text-center mb-10 sm:mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-4">Todo lo que incluye tu seguro de salud</h2>
            <p className="text-lg text-muted-foreground">Sin listas de espera. Sin sorpresas. Desde el primer día.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Stethoscope className="h-8 w-8" />,
                title: "Médico de cabecera",
                desc: "Tu médico personal, sin esperas de la sanidad pública.",
                color: "bg-green-100 text-green-600",
              },
              {
                icon: <Microscope className="h-8 w-8" />,
                title: "Especialistas",
                desc: "Cardiólogo, dermatólogo, traumatólogo... cuando los necesites.",
                color: "bg-blue-100 text-blue-600",
              },
              {
                icon: <Siren className="h-8 w-8" />,
                title: "Urgencias 24h",
                desc: "Atención urgente cualquier día del año, a cualquier hora.",
                color: "bg-red-100 text-red-600",
              },
              {
                icon: <Building2 className="h-8 w-8" />,
                title: "Hospitalización",
                desc: "Habitación individual, sin listas, con la mejor atención.",
                color: "bg-purple-100 text-purple-600",
              },
              {
                icon: <Baby className="h-8 w-8" />,
                title: "Maternidad",
                desc: "Seguimiento completo del embarazo y parto con los mejores especialistas.",
                color: "bg-pink-100 text-pink-600",
              },
              {
                icon: <FlaskConical className="h-8 w-8" />,
                title: "Análisis y pruebas",
                desc: "Radiografías, analíticas y pruebas diagnósticas sin demora.",
                color: "bg-amber-100 text-amber-600",
              },
            ].map((beneficio, i) =>
              isTouchDevice ? (
                <div
                  key={i}
                  className="flex flex-col gap-4 items-center text-center p-6 rounded-2xl border bg-card shadow-sm"
                >
                  <div className={cn("p-3 rounded-xl", beneficio.color)}>
                    {beneficio.icon}
                  </div>
                  <h3 className="text-xl font-bold">{beneficio.title}</h3>
                  <p className="text-muted-foreground">{beneficio.desc}</p>
                </div>
              ) : (
                <MagicContainer key={i}>
                  <MagicCard className="flex flex-col gap-4 items-center text-center p-6">
                    <div className={cn("p-3 rounded-xl", beneficio.color)}>
                      {beneficio.icon}
                    </div>
                    <h3 className="text-xl font-bold">{beneficio.title}</h3>
                    <p className="text-muted-foreground">{beneficio.desc}</p>
                  </MagicCard>
                </MagicContainer>
              )
            )}
          </div>
        </div>
      </motion.section>

      {/* 4. BANNER UPGRADE — CLIENTES DENTAL */}
      <section className="py-10 bg-emerald-50 border-y border-emerald-200">
        <div className="container mx-auto max-w-4xl text-center px-4">
          <p className="text-lg md:text-xl font-bold text-emerald-800 flex items-center justify-center gap-2">
            <Lightbulb className="h-5 w-5 inline" /> ¿Ya tienes seguro dental con nosotros? Al añadir salud completa, tienes descuentos especiales. Te lo gestionamos en una sola llamada.
          </p>
          <a
            href={`https://wa.me/34603448765?text=${encodeURIComponent(
              "Hola, ya tengo seguro dental y quiero añadir salud individual."
            )}`}
            className="mt-4 inline-flex items-center gap-2 text-emerald-700 font-semibold hover:opacity-80 transition-opacity underline"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Escríbenos ahora →
          </a>
        </div>
      </section>

      {/* 5. POR QUÉ ELEGIRNOS / ROSA Y SEBASTIÁN */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="py-14 sm:py-20 lg:py-24 bg-slate-900 text-white overflow-hidden"
      >
        <div className="container max-w-6xl">
          <div className="grid lg:grid-cols-[5fr_7fr] gap-12 lg:gap-20 items-center">
            <motion.div variants={fadeInUpVariants} className="relative w-full max-w-sm mx-auto aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl ring-4 ring-white/20">
              <Image
                src="/images/rosa_y_sebastian_de_pie.png"
                alt="Rosa y Sebastián Valentín, asesores de seguros en Boadilla del Monte"
                fill
                loading="lazy"
                decoding="async"
                className="object-cover object-top"
              />
            </motion.div>
            <motion.div variants={fadeInUpVariants} className="text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-8">Hablas con personas, no con un call center</h2>
              <p className="text-xl md:text-2xl opacity-90 mb-4 leading-relaxed italic font-light">
                &ldquo;Rosa y Sebastián Valentín llevan más de 10 años ayudando a familias de Madrid a encontrar la protección que realmente necesitan. Cada consulta es personal. Cada recomendación es honesta.&rdquo;
              </p>
              <a
                href="https://www.colegiomediadores.es"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 text-sm font-medium text-emerald-400 mb-6 hover:text-emerald-300 transition-colors underline underline-offset-2"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                Agentes de seguros colegiados en Madrid — Verificar →
              </a>

              <div className="grid sm:grid-cols-3 gap-6 mt-8">
                {[
                  { icon: <WhatsAppIcon className="h-6 w-6" />, text: "Respondemos en menos de 30 minutos" },
                  { icon: <FileText className="h-6 w-6" />, text: "Te explicamos todo antes de firmar" },
                  { icon: <UserCheck className="h-6 w-6" />, text: "Un gestor personal de por vida" },
                ].map((item, i) => (
                  <div key={i} className="flex flex-col items-center gap-2 p-4 rounded-xl bg-white/10">
                    {item.icon}
                    <span className="text-sm font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* 6. COBERTURAS DETALLADAS */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUpVariants}
        className="py-14 sm:py-20 lg:py-24 bg-[var(--bg-soft)]"
      >
        <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border">
            <Image
              src="/images/sebastian_con_cliente.png"
              alt="Sebastián Valentín revisando coberturas de salud con un cliente en Madrid"
              fill
              loading="lazy"
              decoding="async"
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-4 text-center lg:text-left">Lo que tienes. Claro. Sin letra pequeña.</h2>
            <p className="text-lg text-muted-foreground mb-8 text-center lg:text-left">La mayoría de coberturas son inmediatas. Las que tienen espera, te las explicamos antes de firmar. Así trabajamos.</p>

            <div className="overflow-hidden rounded-2xl border bg-card/50 overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-muted">
                  <tr>
                    <th className="px-6 py-4 font-bold">Servicio</th>
                    <th className="px-6 py-4 font-bold text-center">Disponibilidad</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {[
                    { s: "Consulta de especialidad media", d: "Desde el día 1", highlight: false },
                    { s: "Urgencias 24h",            d: "Desde el día 1",    highlight: false },
                    { s: "Pediatría",               d: "Desde el día 1",    highlight: false },
                    { s: "Especialistas",            d: "Desde el día 1",    highlight: false },
                    { s: "Analíticas y radiografías",d: "Desde el día 1",    highlight: false },
                    { s: "Pruebas complejas (TAC, resonancia)", d: "6 meses", highlight: true  },
                    { s: "Rehabilitación / Fisioterapia",       d: "6 meses", highlight: true  },
                    { s: "Hospitalización y cirugía",           d: "8 meses", highlight: true  },
                    { s: "Parto y maternidad",                  d: "10 meses",highlight: true  },
                    { s: "Salud mental",                        d: "Consultar",highlight: true  },
                  ].map((row, i) => (
                    <tr key={i} className={cn(
                      "transition-colors",
                      row.highlight
                        ? "bg-amber-50/60 hover:bg-amber-50"
                        : "hover:bg-muted/50"
                    )}>
                      <td className="px-6 py-4 font-medium">{row.s}</td>
                      <td className={cn(
                        "px-6 py-4 text-center font-semibold",
                        row.highlight ? "text-amber-600" : "text-primary"
                      )}>
                        {row.highlight ? (
                          <span className="flex items-center justify-center gap-1">
                            <Hourglass className="h-4 w-4" /> {row.d}
                          </span>
                        ) : (
                          <span className="flex items-center justify-center gap-1">
                            <CheckCircle2 className="h-4 w-4 text-green-600" /> {row.d}
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Nota portabilidad — gancho de venta */}
            <div className="mt-4 rounded-xl border border-emerald-200 bg-emerald-50 px-5 py-4 flex gap-3 items-start">
              <ArrowUpRight className="h-6 w-6 text-emerald-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-bold text-emerald-800 text-sm">
                  ¿Vienes de otra compañía? Te mantenemos la antigüedad.
                </p>
                <p className="text-emerald-700 text-sm mt-1">
                  Si ya llevas tiempo asegurado con otra empresa, podemos eliminar 
                  o reducir las carencias y reconocer tu antigüedad. 
                  Una llamada y lo gestionamos todo.
                </p>
                <a
                  href={`https://wa.me/34603448765?text=${encodeURIComponent(
                    "Hola, vengo de otra aseguradora y me gustaría que me mantuvierais la antigüedad al cambiarme."
                  )}`}
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-emerald-700 
                             underline underline-offset-2 hover:opacity-80 transition-opacity mt-2"
                >
                  Consultarnos por WhatsApp →
                </a>
              </div>
            </div>
            <p className="mt-3 text-xs text-muted-foreground/70 italic">
              Los plazos indicados son orientativos y pueden variar según el plan contratado. 
              Te lo explicamos todo antes de firmar, sin sorpresas.
            </p>
          </div>
        </div>
      </motion.section>

      {/* 6.5. GARANTÍA DE PRECIO */}
      <section className="py-10 sm:py-14 bg-[var(--bg-soft)] border-y border-[var(--border)]">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 p-6 rounded-2xl bg-white border border-[var(--border)] shadow-sm">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center">
              <BadgePercent className="h-6 w-6 text-amber-600" />
            </div>
            <div className="flex-1">
              <p className="font-heading text-lg sm:text-xl font-bold text-[var(--blue-deep)]">
                El mismo seguro. Mejor precio. Garantizado.
              </p>
              <p className="text-sm sm:text-base text-[var(--muted)] mt-1">
                Tráenos el precio de tu banco o gestoría. En 10 años y más de 1.200 familias asesoradas, siempre hemos encontrado un precio mejor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. GARANTÍAS */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="py-14 sm:py-20 lg:py-24 bg-slate-900 text-white"
      >
        <div className="container mx-auto max-w-5xl px-4">
          <motion.div variants={fadeInUpVariants} className="text-center mb-12">
            <h2 className="text-3xl font-bold sm:text-5xl mb-4">Nuestras garantías</h2>
            <p className="text-xl text-white/80">Promesas que cumplimos</p>
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
                className="text-center p-6 rounded-2xl bg-white/10"
              >
                <div className="mb-4 text-white/80">
                  {garantia.icon}
                </div>
                <h3 className="text-lg font-bold mb-2">{garantia.title}</h3>
                <p className="text-white/70 text-sm">{garantia.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={fadeInUpVariants}
            className="mt-12 mx-auto max-w-2xl rounded-2xl border border-white/20 
                       bg-white/5 px-8 py-6 text-center"
          >
            <p className="text-lg font-bold text-white mb-2">
              ¿Y si no cumplimos lo que prometemos?
            </p>
            <p className="text-white/70 text-base leading-relaxed">
              Si no te contactamos en 30 minutos tras tu consulta, 
              Rosa o Sebastián te ofrecen una{" "}
              <span className="text-white font-semibold">
                cita presencial gratuita en nuestra oficina
              </span>
              {" "}para explicarte todo en persona.
              Así de seguros estamos de lo que prometemos.
            </p>
            <p className="mt-4 text-sm text-white/40 italic">
              Nadie en el sector hace esta garantía. Nosotros sí.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* 8. PROCESO EN 3 PASOS */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="py-14 sm:py-20 lg:py-24 bg-green-50"
      >
        <div className="container mx-auto px-4">
          <motion.div variants={fadeInUpVariants} className="text-center mb-10 sm:mb-16">
            <h2 className="text-3xl font-bold sm:text-5xl mb-4">Así de sencillo es empezar</h2>
          </motion.div>

          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-16 items-center max-w-6xl mx-auto">
            {/* Columna izquierda: los 3 pasos */}
            <div>
              <div className="space-y-12 relative">
              <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-green-200 hidden md:block" />

              {[
                {
                  num: "1",
                  title: "Escríbenos por WhatsApp o rellena el formulario",
                  desc: "Dos clics y tus datos llegan directamente a Rosa o Sebastián.",
                },
                {
                  num: "2",
                  title: "Rosa o Sebastián te llaman en menos de 30 minutos",
                  desc: "Te explican todo sin presión, respondiendo todas tus dudas.",
                },
                {
                  num: "3",
                  title: "Te explicamos todo. Sin firmar nada hasta que estés seguro.",
                  desc: "Solo cuando entiendas todo y estés convencido, procedemos.",
                },
              ].map((paso, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUpVariants}
                  className="flex gap-8 relative"
                >
                  <div className="flex-none w-12 h-12 rounded-full bg-green-600 text-white flex items-center justify-center font-bold text-xl relative z-10 shadow-lg">
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

          {/* Columna derecha: imagen — oculta en móvil */}
          <div className="hidden lg:block relative aspect-[3/4] rounded-3xl overflow-hidden border shadow-2xl">
            <Image
              src="/images/rosa_y_sebastian_mesa.png"
              alt="Rosa y Sebastián Valentín en consulta de seguros de salud en Boadilla del Monte"
              fill
              loading="lazy"
              decoding="async"
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
      </motion.section>

      {/* 9. AMPLÍA TU PROTECCIÓN */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="py-14 sm:py-20 lg:py-24 bg-[var(--bg-soft)]"
      >
        <div className="container mx-auto px-4">
          <motion.div variants={fadeInUpVariants} className="text-center mb-12">
            <h2 className="text-3xl font-bold sm:text-5xl mb-4">Cuanto más completa tu protección, más económica</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Muchos de nuestros clientes empezaron con un solo producto. Hoy tienen su familia completamente protegida y pagan menos de lo que esperaban.
            </p>
          </motion.div>

          {/* Banner cross-sell con imagen */}
          <div className="grid lg:grid-cols-[1fr_1.3fr] gap-16 items-center bg-green-50 rounded-[3rem] p-8 md:p-16 border shadow-inner mb-12">
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-lg">
              <Image
                src="/images/sebastian.png"
                alt="Sebastián Valentín asesorando sobre seguros complementarios"
                fill
                loading="lazy"
                decoding="async"
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="text-center">
              <div className="mb-4 inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-700 font-bold text-sm tracking-widest uppercase border border-green-200">
                <Gift className="h-4 w-4 mr-1.5" /> Clientes dental: descuentos especiales
              </div>
              <p className="text-xl text-muted-foreground leading-relaxed">
                La mayoría de nuestros clientes comienzan con un seguro dental y, en poco tiempo, amplían a salud completa para toda la familia. Cuando lo hagas, tendrás condiciones especiales por ser ya cliente nuestro.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: <Heart className="h-8 w-8 text-pink-500" />,
                title: "Dental",
                desc: "¿Ya lo tienes? Perfecto. ¿Aún no? Desde 9€/mes más.",
                link: "/seguros/salud-dental",
                linkText: "Ver seguro dental →",
              },
              {
                icon: <Shield className="h-8 w-8 text-blue-500" />,
                title: "Vida",
                desc: "Protege a tu familia si tú faltas.",
                link: "#",
                linkText: "Próximamente",
                disabled: true,
              },
              {
                icon: <Zap className="h-8 w-8 text-amber-500" />,
                title: "Accidentes",
                desc: "Cobertura extra ante cualquier imprevisto.",
                link: "#",
                linkText: "Próximamente",
                disabled: true,
              },
            ].map((producto, i) => (
              <motion.div
                key={i}
                variants={fadeInUpVariants}
                className="p-8 rounded-2xl border bg-card/50 text-center"
              >
                <div className="mb-4">
                  {producto.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{producto.title}</h3>
                <p className="text-muted-foreground mb-4">{producto.desc}</p>
                <a
                  href={producto.link}
                  className={cn(
                    "text-sm font-semibold",
                    producto.disabled
                      ? "text-muted-foreground cursor-default"
                      : "text-green-600 hover:underline"
                  )}
                >
                  {producto.linkText}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* 10. FAQ */}
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
                  src="/images/rosa_y_sebastian_conversando.png"
                  alt="Rosa y Sebastián Valentín respondiendo preguntas sobre seguros de salud"
                  fill
                  loading="lazy"
                  decoding="async"
                  className="object-cover object-top"
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

      {/* 11. CTA FINAL */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUpVariants}
        className="py-14 sm:py-20 lg:py-24 bg-gradient-to-br from-green-800 to-green-900 text-white"
      >
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-6">
            Tu familia merece la mejor atención médica. Hoy mismo.
          </h2>
          <p className="text-base sm:text-xl text-white/80 mb-8">
            Rosa y Sebastián te responden en menos de 30 minutos.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/34603448765"
              className={cn(
                buttonVariants({ size: "lg" }),
                "h-14 sm:h-16 px-10 text-lg sm:text-xl font-bold bg-emerald-500 hover:bg-emerald-600 text-white gap-2"
              )}
            >
              <WhatsAppIcon className="h-5 w-5 sm:h-6 sm:w-6" />
              WhatsApp ahora
            </a>
            <a
              href="tel:603448765"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "h-14 sm:h-16 px-10 text-lg sm:text-xl font-bold border-2 border-white text-white hover:bg-white hover:text-green-900"
              )}
            >
              <Phone className="mr-2 h-5 w-5 sm:h-6 sm:w-6" />
              603 448 765
            </a>
          </div>
        </div>
      </motion.section>
    </>
  );
}
