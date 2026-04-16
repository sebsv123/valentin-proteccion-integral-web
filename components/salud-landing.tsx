"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import DotGrid from "@/components/ui/dot-grid";
import { MagicCard, MagicContainer } from "@/components/magicui/magic-card";
import AnimatedShinyText from "@/components/magicui/animated-shiny-text";
import Globe from "@/components/magicui/globe";
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
  MessageCircle,
} from "lucide-react";

const WhatsAppLogo = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

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
    comentario: "",
  });
  const [sent, setSent] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Hola Rosa y Sebastián 👋\n\nMe llamo *${form.nombre}* y me gustaría información sobre el seguro de salud individual.\n\n📞 Teléfono: ${form.telefono}\n👥 Para: ${form.personas}${form.comentario ? `\n💬 ${form.comentario}` : ""}\n\nGracias.`
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
      {/* 1. BARRA STICKY FIXED */}
      <div className="fixed top-0 left-0 right-0 z-50 w-full bg-green-800 text-white py-3 px-4 shadow-md">
        <div className="container mx-auto max-w-5xl flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-center">
          <p className="text-sm sm:text-base font-semibold leading-snug">
            🏥 <span className="font-bold">Sin listas de espera. Médico de cabecera, especialistas y urgencias desde el primer día.</span>
          </p>
          <a
            href="#contacto"
            className="flex-none text-sm font-bold underline underline-offset-4 hover:opacity-80 transition-opacity whitespace-nowrap"
          >
            Pedir presupuesto →
          </a>
        </div>
      </div>

      {/* 2. HERO */}
      <section className="relative min-h-screen flex items-center justify-center border-b overflow-hidden py-20 pt-32 bg-background">
        <DotGrid 
          className="z-0"
          dotSize={4}
          gap={28}
          baseColor="#bbf7d0"
          activeColor="#16a34a"
          proximity={120}
          shockStrength={3}
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
              <motion.div variants={fadeInUp} className="mb-6">
                <AnimatedShinyText className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-800 text-sm font-semibold">
                  ⭐ Más de 200 familias madrileñas confían en nosotros
                </AnimatedShinyText>
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
              >
                Médico privado para toda tu familia.{" "}
                <span className="underline decoration-green-500 decoration-4 underline-offset-4">Sin esperas</span>.{" "}
                Sin sorpresas.
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-xl text-muted-foreground mb-8 leading-relaxed"
              >
                Accede a especialistas, urgencias y tu médico de cabecera cuando lo necesitas. Rosa y Sebastián te gestionan todo en una sola llamada, de forma personal.
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8 text-sm"
              >
                <span className="flex items-center gap-1.5">
                  <span className="text-green-600">✅</span> Respuesta en 30 min
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="text-green-600">✅</span> Sin letra pequeña
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="text-green-600">✅</span> Gestor personal
                </span>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
              >
                <a
                  href="https://wa.me/34603448765"
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "h-14 px-8 text-lg font-bold bg-emerald-500 hover:bg-emerald-600 text-white gap-2"
                  )}
                >
                  <WhatsAppLogo className="h-5 w-5" />
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
              <div className="bg-card rounded-3xl shadow-xl border p-8">
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
                  <textarea
                    placeholder="Comentario (opcional)"
                    rows={3}
                    className="w-full px-4 py-3 rounded-xl border bg-background resize-none"
                    value={form.comentario}
                    onChange={(e) => setForm({ ...form, comentario: e.target.value })}
                  />

                  {sent ? (
                    <p className="text-center text-green-600 font-semibold">
                      ✅ Mensaje enviado. Te llamamos en menos de 30 min.
                    </p>
                  ) : (
                    <button
                      type="submit"
                      className={cn(
                        buttonVariants({ size: "lg" }),
                        "w-full h-14 text-lg font-bold shadow-xl shadow-primary/20 hover:scale-[1.02] transition-transform gap-2"
                      )}
                    >
                      <WhatsAppLogo className="h-5 w-5" />
                      Enviar por WhatsApp
                    </button>
                  )}

                  <p className="text-center text-sm text-muted-foreground opacity-70">
                    Al enviar, te abrimos WhatsApp con tus datos para que te llamemos en menos de 30 min.
                  </p>
                  <p className="text-center text-xs font-semibold text-emerald-600 flex items-center justify-center gap-1.5">
                    <span>🎁</span>
                    <span>Si ya tienes dental con nosotros, tienes descuentos especiales al añadir salud.</span>
                  </p>
                  <p className="text-center text-xs text-muted-foreground/60">
                    🔒 Consulta sin compromiso. Sin letra pequeña. Nunca compartimos tus datos.
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
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-24 bg-accent/30"
      >
        <div className="container mx-auto px-4">
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-4">Todo lo que incluye tu seguro de salud</h2>
            <p className="text-lg text-muted-foreground">Sin listas de espera. Sin sorpresas. Desde el primer día.</p>
          </motion.div>

          <MagicContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
            ].map((beneficio, i) => (
              <MagicCard
                key={i}
                className="flex flex-col gap-4 items-center text-center p-6"
              >
                <div className={cn("p-3 rounded-xl", beneficio.color)}>
                  {beneficio.icon}
                </div>
                <h3 className="text-xl font-bold">{beneficio.title}</h3>
                <p className="text-muted-foreground">{beneficio.desc}</p>
              </MagicCard>
            ))}
          </MagicContainer>
        </div>
      </motion.section>

      {/* 4. BANNER UPGRADE — CLIENTES DENTAL */}
      <section className="py-10 bg-emerald-50 border-y border-emerald-200">
        <div className="container mx-auto max-w-4xl text-center px-4">
          <p className="text-lg md:text-xl font-bold text-emerald-800">
            💡 ¿Ya tienes seguro dental con nosotros? Al añadir salud completa, tienes descuentos especiales. Te lo gestionamos en una sola llamada.
          </p>
          <a
            href={`https://wa.me/34603448765?text=${encodeURIComponent(
              "Hola, ya tengo seguro dental y quiero añadir salud individual."
            )}`}
            className="mt-4 inline-flex items-center gap-2 text-emerald-700 font-semibold hover:opacity-80 transition-opacity underline"
          >
            <WhatsAppLogo className="h-5 w-5" />
            Escríbenos ahora →
          </a>
        </div>
      </section>

      {/* 5. POR QUÉ ELEGIRNOS / ROSA Y SEBASTIÁN */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-24 bg-slate-900 text-white overflow-hidden"
      >
        <div className="container max-w-6xl">
          <div className="grid lg:grid-cols-[5fr_7fr] gap-12 lg:gap-20 items-center">
            <motion.div variants={fadeInUp} className="relative w-full max-w-sm mx-auto aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl ring-4 ring-white/20">
              <Image
                src="/images/rosa_y_sebastian.jpeg"
                alt="Rosa y Sebastián Valentín"
                fill
                className="object-cover object-top"
              />
            </motion.div>
            <motion.div variants={fadeInUp} className="text-center">
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
                  { icon: <MessageCircle className="h-6 w-6" />, text: "Respondemos en menos de 30 minutos" },
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
        viewport={{ once: true }}
        variants={fadeInUp}
        className="py-24"
      >
        <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border">
            <Image
              src="https://images.pexels.com/photos/8460125/pexels-photo-8460125.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="Consulta médica privada en Madrid"
              fill
              className="object-cover"
              unoptimized
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
                    { s: "Consulta de especialidad media", d: "✅ Desde el día 1", highlight: false },
                    { s: "Urgencias 24h",            d: "✅ Desde el día 1",    highlight: false },
                    { s: "Pediatría",               d: "✅ Desde el día 1",    highlight: false },
                    { s: "Especialistas",            d: "✅ Desde el día 1",    highlight: false },
                    { s: "Analíticas y radiografías",d: "✅ Desde el día 1",    highlight: false },
                    { s: "Pruebas complejas (TAC, resonancia)", d: "⏳ 6 meses", highlight: true  },
                    { s: "Rehabilitación / Fisioterapia",       d: "⏳ 6 meses", highlight: true  },
                    { s: "Hospitalización y cirugía",           d: "⏳ 8 meses", highlight: true  },
                    { s: "Parto y maternidad",                  d: "⏳ 10 meses",highlight: true  },
                    { s: "Salud mental",                        d: "⏳ Consultar",highlight: true  },
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
                      )}>{row.d}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Nota portabilidad — gancho de venta */}
            <div className="mt-4 rounded-xl border border-emerald-200 bg-emerald-50 px-5 py-4 flex gap-3 items-start">
              <span className="text-2xl leading-none mt-0.5">🚀</span>
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

      {/* 7. GARANTÍAS */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-24 bg-slate-900 text-white"
      >
        <div className="container mx-auto max-w-5xl px-4">
          <motion.div variants={fadeInUp} className="text-center mb-12">
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
                variants={fadeInUp}
                className="text-center p-6 rounded-2xl bg-white/10"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 mb-4">
                  {garantia.icon}
                </div>
                <h3 className="text-lg font-bold mb-2">{garantia.title}</h3>
                <p className="text-white/70 text-sm">{garantia.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.p variants={fadeInUp} className="text-center mt-12 text-white/70">
            ¿Qué pasa si no cumplimos? Te ayudamos a resolver cualquier problema personalmente. Sin burocracia.
          </motion.p>
        </div>
      </motion.section>

      {/* 8. PROCESO EN 3 PASOS */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-24 bg-green-50"
      >
        <div className="container mx-auto px-4">
          <motion.div variants={fadeInUp} className="text-center mb-16">
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
                  variants={fadeInUp}
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

          {/* Columna derecha: imagen */}
          <div className="relative aspect-[3/4] rounded-3xl overflow-hidden border shadow-2xl">
            <Image
              src="https://images.pexels.com/photos/7735626/pexels-photo-7735626.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="Asesor de seguros con cliente en Madrid"
              fill
              className="object-cover"
              unoptimized
            />
          </div>
        </div>
      </div>
      </motion.section>

      {/* 9. AMPLÍA TU PROTECCIÓN */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-24"
      >
        <div className="container mx-auto px-4">
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl font-bold sm:text-5xl mb-4">Cuanto más completa tu protección, más económica</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Muchos de nuestros clientes empezaron con un solo producto. Hoy tienen su familia completamente protegida y pagan menos de lo que esperaban.
            </p>
          </motion.div>

          {/* Banner cross-sell con imagen */}
          <div className="grid lg:grid-cols-[1fr_1.3fr] gap-16 items-center bg-green-50 rounded-[3rem] p-8 md:p-16 border shadow-inner mb-12">
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-lg">
              <Image
                src="https://images.pexels.com/photos/7220529/pexels-photo-7220529.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="Familia protegida con seguro de salud en Madrid"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <div className="text-center">
              <div className="mb-4 inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-700 font-bold text-sm tracking-widest uppercase border border-green-200">
                🎁 Clientes dental: descuentos especiales
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
                variants={fadeInUp}
                className="p-8 rounded-2xl border bg-card/50 text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
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
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-24 bg-accent/30"
      >
        <div className="container max-w-5xl px-4">
          <div className="grid lg:grid-cols-[0.8fr_1fr] gap-16 items-start">

            <div className="lg:sticky lg:top-24 text-center">
              <h2 className="text-3xl font-bold sm:text-6xl mb-6">Preguntas frecuentes</h2>
              <div className="relative aspect-square rounded-3xl overflow-hidden border bg-muted">
                <Image
                  src="/images/rosa_y_sebastian.jpeg"
                  alt="Rosa y Sebastián responden tus dudas"
                  fill
                  className="object-cover object-top"
                />
              </div>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="rounded-2xl border bg-card overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-accent/50 transition-colors"
                >
                  <span className="text-lg font-semibold pr-4">{faq.q}</span>
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
        viewport={{ once: true }}
        variants={fadeInUp}
        className="py-24 bg-gradient-to-br from-green-800 to-green-900 text-white"
      >
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-3xl sm:text-5xl font-bold mb-6">
            Tu familia merece la mejor atención médica. Hoy mismo.
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Rosa y Sebastián te responden en menos de 30 minutos.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/34603448765"
              className={cn(
                buttonVariants({ size: "lg" }),
                "h-16 px-10 text-xl font-bold bg-emerald-500 hover:bg-emerald-600 text-white gap-2"
              )}
            >
              <WhatsAppLogo className="h-6 w-6" />
              WhatsApp ahora
            </a>
            <a
              href="tel:603448765"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "h-16 px-10 text-xl font-bold border-2 border-white text-white hover:bg-white hover:text-green-900"
              )}
            >
              <Phone className="mr-2 h-6 w-6" />
              603 448 765
            </a>
          </div>
        </div>
      </motion.section>
    </>
  );
}
