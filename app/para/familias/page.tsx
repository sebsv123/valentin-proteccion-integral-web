import { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { StickyWhatsApp } from "@/components/sticky-whatsapp";
import { buildWhatsAppHref, site } from "@/lib/products";
import { HeartPulse, Smile, Shield, Umbrella, ArrowRight } from "lucide-react";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";

export const metadata: Metadata = {
  title: "Seguros para Familias en Madrid · Protección completa sin complicaciones | Valentín Protección Integral",
  description: "Protege a tu familia con un asesoramiento real. Salud, dental, vida y decesos adaptados a lo que necesitáis ahora, con alguien que os conoce y os acompaña de verdad.",
  keywords: "seguros familia Madrid, seguro salud familiar, seguro dental familia, seguro decesos familiar",
  openGraph: {
    title: "Seguros para Familias en Madrid · Protección completa sin complicaciones",
    description: "Protege a tu familia con un asesoramiento real. Salud, dental, vida y decesos adaptados a tu situación.",
    url: "https://www.valentinproteccionintegral.com/para/familias",
    siteName: "Valentín Protección Integral",
    locale: "es_ES",
    type: "website",
  },
  alternates: {
    canonical: "https://www.valentinproteccionintegral.com/para/familias",
  },
};

export const dynamic = "force-static";

export default function FamiliasPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Inicio", url: "/" },
          { name: "Familias", url: "/para/familias" },
        ]}
      />
      <Header />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#123B68] via-[#0F5E9C] to-[#123B68] py-20 lg:py-28">
          <div className="absolute inset-0 bg-[url('/images/premium/grid.svg')] opacity-10" />
          <div className="container-shell relative z-10">
            <div className="max-w-3xl">
              <p className="kicker !text-white/80 !border-white/30">Para familias como la tuya</p>
              <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Tu familia merece más que un seguro. Merece alguien que la conozca.
              </h1>
              <p className="mt-6 text-xl text-white/90">
                Protege a quienes más quieres con un asesoramiento real. Alguien que os conoce, 
                que os escucha y que os acompaña de verdad.
              </p>
              <div className="mt-8">
                <a
                  href={buildWhatsAppHref("Hola, tengo familia y quiero revisar nuestra protección actual. ¿Podemos hablar?")}
                  className="btn-whatsapp !text-lg !px-8 !py-4 inline-flex"
                >
                  <WhatsAppIcon className="h-5 w-5" />
                  Escríbenos por WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Lo que suelen necesitar las familias */}
        <section className="section-pad bg-white">
          <div className="container-shell">
            <h2 className="section-title text-center mb-12">Lo que suelen necesitar las familias como la tuya</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {/* Salud Familiar */}
              <a href="/seguros/salud-familiar" className="glass-card-premium p-6 hover:shadow-lg transition-shadow group">
                <div className="w-14 h-14 mb-4 rounded-2xl bg-[var(--blue)]/10 flex items-center justify-center">
                  <HeartPulse className="h-7 w-7 text-[var(--blue)]" />
                </div>
                <h3 className="font-heading text-lg font-bold mb-2">Salud Familiar</h3>
                <p className="text-[var(--muted)] text-sm leading-relaxed">
                  Cobertura médica para toda la familia. Especialistas, urgencias y hospitalización sin preocupaciones.
                </p>
                <span className="inline-flex items-center gap-1 mt-4 text-[var(--blue)] font-medium text-sm group-hover:gap-2 transition-all">
                  Ver más <ArrowRight className="h-4 w-4" />
                </span>
              </a>

              {/* Dental */}
              <a href="/seguros/dental" className="glass-card-premium p-6 hover:shadow-lg transition-shadow group">
                <div className="w-14 h-14 mb-4 rounded-2xl bg-[var(--blue)]/10 flex items-center justify-center">
                  <Smile className="h-7 w-7 text-[var(--blue)]" />
                </div>
                <h3 className="font-heading text-lg font-bold mb-2">Dental</h3>
                <p className="text-[var(--muted)] text-sm leading-relaxed">
                  Limpiezas, empastes y revisiones para todos. Los niños aprenden a cuidar su sonrisa desde pequeños.
                </p>
                <span className="inline-flex items-center gap-1 mt-4 text-[var(--blue)] font-medium text-sm group-hover:gap-2 transition-all">
                  Ver más <ArrowRight className="h-4 w-4" />
                </span>
              </a>

              {/* Vida */}
              <a href="/seguros/vida" className="glass-card-premium p-6 hover:shadow-lg transition-shadow group">
                <div className="w-14 h-14 mb-4 rounded-2xl bg-[var(--blue)]/10 flex items-center justify-center">
                  <Shield className="h-7 w-7 text-[var(--blue)]" />
                </div>
                <h3 className="font-heading text-lg font-bold mb-2">Vida</h3>
                <p className="text-[var(--muted)] text-sm leading-relaxed">
                  Protección para los que dependen de ti. Tranquilidad de que tu familia estará bien, pase lo que pase.
                </p>
                <span className="inline-flex items-center gap-1 mt-4 text-[var(--blue)] font-medium text-sm group-hover:gap-2 transition-all">
                  Ver más <ArrowRight className="h-4 w-4" />
                </span>
              </a>

              {/* Decesos */}
              <a href="/seguros/accidentes-decesos" className="glass-card-premium p-6 hover:shadow-lg transition-shadow group">
                <div className="w-14 h-14 mb-4 rounded-2xl bg-[var(--blue)]/10 flex items-center justify-center">
                  <Umbrella className="h-7 w-7 text-[var(--blue)]" />
                </div>
                <h3 className="font-heading text-lg font-bold mb-2">Decesos</h3>
                <p className="text-[var(--muted)] text-sm leading-relaxed">
                  Gestión completa en los momentos difíciles. Para que tu familia no tenga que preocuparse por nada.
                </p>
                <span className="inline-flex items-center gap-1 mt-4 text-[var(--blue)] font-medium text-sm group-hover:gap-2 transition-all">
                  Ver más <ArrowRight className="h-4 w-4" />
                </span>
              </a>
            </div>
          </div>
        </section>

        {/* Sección sorpresa - Dental vs Salud completa */}
        <section className="section-pad bg-[var(--bg-soft)]">
          <div className="container-shell">
            <div className="glass-card-premium p-10 md:p-12 max-w-4xl mx-auto border-[var(--blue)]">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-none w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="text-2xl">💡</span>
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold font-heading mb-2">
                    Muchas familias en Madrid tienen solo seguro dental
                  </h2>
                  <p className="text-lg text-[var(--muted)]">
                    Por poco más tienen médico de cabecera, especialistas y urgencias para todos. Te lo calculamos.
                  </p>
                </div>
              </div>
              <div className="prose max-w-none text-[var(--muted)]">
                <p>
                  Es muy común empezar con un seguro dental porque parece más asequible. Pero muchas familias 
                  no saben que, por una diferencia de 20-30€ al mes, pueden tener acceso a médico de cabecera, 
                  pediatras, especialistas y urgencias para toda la familia.
                </p>
                <p className="mt-4">
                  Si tienes niños pequeños, esto es especialmente valioso. Un acceso rápido a pediatras y 
                  especialistas sin listas de espera puede marcar la diferencia en tu día a día. 
                  Nosotros te calculamos las opciones reales para tu situación familiar.
                </p>
              </div>
              <div className="mt-8">
                <a
                  href={buildWhatsAppHref("Tengo seguro dental familiar y quiero saber cuánto me costaría pasar a salud completa.")}
                  className="btn-primary inline-flex"
                >
                  Quiero ver la comparación
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Garantía */}
        <section className="section-pad bg-white">
          <div className="container-shell">
            <div className="glass-card-premium p-10 md:p-12 max-w-4xl mx-auto text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-amber-100 flex items-center justify-center">
                <span className="text-3xl">📋</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
                Si llevas más de un año con nosotros y nunca te hemos contactado para revisar tu cobertura
              </h2>
              <p className="text-xl text-[var(--muted)] mb-6 max-w-2xl mx-auto">
                Este es ese momento. Las familias cambian: nacen hijos, cambian de casa, crecen. 
                Tu seguro debería cambiar contigo.
              </p>
              <p className="text-lg text-[var(--muted)]">
                Sin coste, sin compromiso. Solo una revisión honesta de si tu protección actual 
                sigue siendo la adecuada para tu situación familiar hoy.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="section-pad bg-gradient-to-br from-[#123B68] to-[#0F5E9C]">
          <div className="container-shell text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white font-heading mb-6">
              Protege a tu familia con alguien que os conoce de verdad
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Cuéntanos cuántos sois, las edades de los niños y qué tenéis ahora. 
              Te propondremos lo que realmente necesitáis.
            </p>
            <a
              href={buildWhatsAppHref("Hola, somos una familia y queremos revisar nuestra protección. ¿Podemos hablar?")}
              className="btn-whatsapp !text-lg !px-10 !py-5 inline-flex"
            >
              <WhatsAppIcon className="h-6 w-6" />
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
