import { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { StickyWhatsApp } from "@/components/sticky-whatsapp";
import { buildWhatsAppHref, site } from "@/lib/products";
import { MessageCircle, Home, HeartPulse, Shield, ArrowRight } from "lucide-react";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Seguros para Jóvenes Profesionales en Madrid · Protección que crece contigo | Valentín Protección Integral",
  description: "Acabas de emanciparte o tienes hipoteca reciente. Te ayudamos a proteger lo que estás construyendo: salud, hogar y vida, sin pagar de más ni contratar lo que no necesitas.",
  keywords: "seguros jóvenes profesionales Madrid, seguro salud joven Madrid, seguro hogar primer piso, seguro vida hipoteca joven",
  openGraph: {
    title: "Seguros para Jóvenes Profesionales en Madrid · Protección que crece contigo",
    description: "Acabas de emanciparte o tienes hipoteca reciente. Te ayudamos a proteger lo que estás construyendo.",
    url: "https://www.valentinproteccionintegral.com/para/jovenes-profesionales",
    siteName: "Valentín Protección Integral",
    locale: "es_ES",
    type: "website",
  },
  alternates: {
    canonical: "https://www.valentinproteccionintegral.com/para/jovenes-profesionales",
  },
};

export const dynamic = "force-static";

export default function JovenesProfesionalesPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Inicio", url: "/" },
          { name: "Jóvenes Profesionales", url: "/para/jovenes-profesionales" },
        ]}
      />
      <Header />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#123B68] via-[#0F5E9C] to-[#123B68] py-20 lg:py-28">
          <div className="absolute inset-0 bg-[url('/images/premium/grid.svg')] opacity-10" />
          <div className="container-shell relative z-10">
            <div className="max-w-3xl">
              <p className="kicker !text-white/80 !border-white/30">Para ti, que estás empezando</p>
              <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Estás construyendo tu vida. Nosotros cuidamos que nada lo interrumpa.
              </h1>
              <p className="mt-6 text-xl text-white/90">
                Acabas de emanciparte, tienes tu primer piso o estás pensando en ello. No necesitas un seguro genérico. Necesitas uno que crezca contigo.
              </p>
              <div className="mt-8">
                <a
                  href={buildWhatsAppHref("Hola, soy joven profesional en Madrid y quiero información sobre seguros. Acabo de emanciparme/tengo hipoteca reciente.")}
                  className="btn-whatsapp !text-lg !px-8 !py-4 inline-flex"
                >
                  <MessageCircle className="h-5 w-5" />
                  Escríbenos por WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Lo que más te interesa */}
        <section className="section-pad bg-white">
          <div className="container-shell">
            <h2 className="section-title text-center mb-12">Lo que más te interesa ahora mismo</h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {/* Salud Individual */}
              <a href="/seguros/salud-individual" className="glass-card-premium p-6 hover:shadow-lg transition-shadow group">
                <div className="w-14 h-14 mb-4 rounded-2xl bg-[var(--blue)]/10 flex items-center justify-center">
                  <HeartPulse className="h-7 w-7 text-[var(--blue)]" />
                </div>
                <h3 className="font-heading text-xl font-bold mb-2">Salud Individual</h3>
                <p className="text-[var(--muted)] text-sm leading-relaxed">
                  Acceso a especialistas sin esperas. Para cuando necesitas resolver algo rápido y seguir con tu ritmo.
                </p>
                <span className="inline-flex items-center gap-1 mt-4 text-[var(--blue)] font-medium text-sm group-hover:gap-2 transition-all">
                  Ver opciones <ArrowRight className="h-4 w-4" />
                </span>
              </a>

              {/* Hogar */}
              <a href="/seguros/hogar" className="glass-card-premium p-6 hover:shadow-lg transition-shadow group">
                <div className="w-14 h-14 mb-4 rounded-2xl bg-[var(--blue)]/10 flex items-center justify-center">
                  <Home className="h-7 w-7 text-[var(--blue)]" />
                </div>
                <h3 className="font-heading text-xl font-bold mb-2">Hogar</h3>
                <p className="text-[var(--muted)] text-sm leading-relaxed">
                  Tu primer piso merece protección real. Desde el móvil hasta la tubería que no sabías que existía.
                </p>
                <span className="inline-flex items-center gap-1 mt-4 text-[var(--blue)] font-medium text-sm group-hover:gap-2 transition-all">
                  Ver opciones <ArrowRight className="h-4 w-4" />
                </span>
              </a>

              {/* Vida (hipoteca) */}
              <a href="/seguros/vida-hipoteca" className="glass-card-premium p-6 hover:shadow-lg transition-shadow group">
                <div className="w-14 h-14 mb-4 rounded-2xl bg-[var(--blue)]/10 flex items-center justify-center">
                  <Shield className="h-7 w-7 text-[var(--blue)]" />
                </div>
                <h3 className="font-heading text-xl font-bold mb-2">Vida (Hipoteca)</h3>
                <p className="text-[var(--muted)] text-sm leading-relaxed">
                  Si tienes hipoteca, esto te interesa. Protección para que tu familia no herede deudas.
                </p>
                <span className="inline-flex items-center gap-1 mt-4 text-[var(--blue)] font-medium text-sm group-hover:gap-2 transition-all">
                  Ver opciones <ArrowRight className="h-4 w-4" />
                </span>
              </a>
            </div>
          </div>
        </section>

        {/* Sección sorpresa - Hipoteca */}
        <section className="section-pad bg-[var(--bg-soft)]">
          <div className="container-shell">
            <div className="glass-card-premium p-10 md:p-12 max-w-4xl mx-auto border-[var(--blue)]">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-none w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center">
                  <span className="text-2xl">⚠️</span>
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold font-heading mb-2">
                    Si tienes hipoteca, tu banco probablemente ya te vendió un seguro de vida
                  </h2>
                  <p className="text-lg text-[var(--muted)]">
                    Hay opciones más baratas y con mejores condiciones. Te lo explicamos sin compromiso.
                  </p>
                </div>
              </div>
              <div className="prose max-w-none text-[var(--muted)]">
                <p>
                  Los bancos suelen vincular el seguro de vida a la hipoteca, pero no es obligatorio contratarlo con ellos. 
                  En muchos casos, puedes ahorrar entre un 30% y un 50% en la prima anual contratando el mismo producto 
                  a través de un asesor independiente.
                </p>
                <p className="mt-4">
                  Además, el seguro del banco suele tener coberturas limitadas y condiciones menos flexibles. 
                  Nosotros te ayudamos a comparar y, si te interesa, gestionamos el cambio sin complicaciones.
                </p>
              </div>
              <div className="mt-8">
                <a
                  href={buildWhatsAppHref("Tengo hipoteca reciente y quiero revisar el seguro de vida que me vendió el banco.")}
                  className="btn-primary inline-flex"
                >
                  Quiero comparar mi seguro actual
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Garantía */}
        <section className="section-pad bg-white">
          <div className="container-shell">
            <div className="glass-card-premium p-10 md:p-12 max-w-4xl mx-auto text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center">
                <span className="text-3xl">⏱️</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
                En 15 minutos sabes exactamente qué necesitas y qué no
              </h2>
              <p className="text-xl text-[var(--muted)] mb-6 max-w-2xl mx-auto">
                Sin ventas cruzadas innecesarias. Te escuchamos, te explicamos las opciones que realmente 
                encajan contigo, y tú decides. Sin presión.
              </p>
              <p className="text-lg text-[var(--muted)]">
                Hemos ayudado a más de 200 jóvenes profesionales en Madrid a protegerse bien desde el principio.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="section-pad bg-gradient-to-br from-[#123B68] to-[#0F5E9C]">
          <div className="container-shell text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white font-heading mb-6">
              Empieza a construir tu protección hoy
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Cuéntanos tu situación: ¿emancipación reciente? ¿Hipoteca nueva? ¿Quieres prevenir antes de que pase nada?
            </p>
            <a
              href={buildWhatsAppHref("Hola, soy joven profesional y quiero empezar a proteger lo que estoy construyendo.")}
              className="btn-whatsapp !text-lg !px-10 !py-5 inline-flex"
            >
              <MessageCircle className="h-6 w-6" />
              Escríbenos por WhatsApp
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <StickyWhatsApp />
    </>
  );
}
