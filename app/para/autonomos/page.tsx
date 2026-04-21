import { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { StickyWhatsApp } from "@/components/sticky-whatsapp";
import { buildWhatsAppHref, site } from "@/lib/products";
import { HeartPulse, Users, Briefcase, Calculator, ArrowRight } from "lucide-react";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";

export const metadata: Metadata = {
  title: "Seguros Autónomos Madrid · Dedúcete 500€ en IRPF",
  description: "Dedúcete hasta 500€ en el IRPF con tu seguro médico. Asesoramiento gratuito para autónomos en Madrid · Valentín Protección Integral.",
  keywords: "seguros autónomos Madrid, seguro médico autónomo deducible, deducción IRPF autónomo, seguro salud autónomo",
  openGraph: {
    title: "Seguros Autónomos Madrid · Dedúcete 500€ en IRPF",
    description: "Dedúcete hasta 500€ en el IRPF con tu seguro médico. Asesoramiento gratuito para autónomos en Madrid.",
    url: "https://www.valentinproteccionintegral.com/para/autonomos",
    siteName: "Valentín Protección Integral",
    locale: "es_ES",
    type: "website",
  },
  alternates: {
    canonical: "https://www.valentinproteccionintegral.com/para/autonomos",
  },
};

export const dynamic = "force-static";

export default function AutonomosICPPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Inicio", url: "/" },
          { name: "Autónomos", url: "/para/autonomos" },
        ]}
      />
      <Header />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#123B68] via-[#0F5E9C] to-[#123B68] py-20 lg:py-28">
          <div className="absolute inset-0 bg-[url('/images/premium/grid.svg')] opacity-10" />
          <div className="container-shell relative z-10">
            <div className="max-w-3xl">
              <p className="kicker !text-white/80 !border-white/30">Para autónomos en Madrid</p>
              <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Eres autónomo en Madrid. Tu seguro de salud debería costarte menos de lo que crees.
              </h1>
              <p className="mt-6 text-xl text-white/90">
                Como autónomo tienes ventajas fiscales que la mayoría no aprovecha. 
                Te ayudamos a elegir el seguro médico que más te conviene y a entender 
                exactamente cuánto te devuelve Hacienda.
              </p>
              <div className="mt-8">
                <a
                  href={buildWhatsAppHref("Hola, soy autónomo en Madrid y quiero información sobre seguros con deducción fiscal.")}
                  className="btn-whatsapp !text-lg !px-8 !py-4 inline-flex"
                >
                  <WhatsAppIcon className="h-5 w-5" />
                  Escríbenos por WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Sección fiscal clara */}
        <section className="section-pad bg-white">
          <div className="container-shell">
            <h2 className="section-title text-center mb-12">¿Cuánto te puedes deducir exactamente?</h2>
            <div className="glass-card-premium p-10 md:p-12 max-w-4xl mx-auto border-[var(--blue)]">
              <div className="flex items-start gap-4 mb-8">
                <div className="flex-none w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center">
                  <Calculator className="h-7 w-7 text-green-700" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold font-heading mb-2">La deducción que muchos desconocen</h3>
                  <p className="text-lg text-[var(--muted)]">
                    Desde 2018, los autónomos pueden deducirse hasta <strong className="text-[var(--blue)]">500€ por persona</strong> en el IRPF.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-[var(--bg-soft)] rounded-xl p-6">
                  <h4 className="font-bold text-lg mb-3">¿Quién puede deducirse?</h4>
                  <ul className="space-y-2 text-[var(--muted)]">
                    <li>• Tú como autónomo: hasta 500€</li>
                    <li>• Tu cónyuge/pareja de hecho: otros 500€</li>
                    <li>• Cada hijo menor de 25: 500€ más</li>
                    <li>• <strong>Total familiar: hasta 2.000€/año</strong></li>
                  </ul>
                </div>
                <div className="bg-[var(--bg-soft)] rounded-xl p-6">
                  <h4 className="font-bold text-lg mb-3">Ejemplo con números reales</h4>
                  <p className="text-[var(--muted)] mb-3">
                    Seguro de salud sin copago: <strong>55€/mes</strong> (660€/año)
                  </p>
                  <p className="text-[var(--muted)] mb-3">
                    Tipo impositivo IRPF (24%): deducción de <strong>500€</strong>
                  </p>
                  <p className="text-[var(--blue)] font-bold">
                    Coste real anual: ~540€ netos (45€/mes)
                  </p>
                </div>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
                <p className="text-amber-800">
                  <strong>Importante:</strong> Esta deducción es directa sobre la cuota íntegra del IRPF, 
                  no una reducción de la base imponible. Es dinero que dejas de pagar a Hacienda, 
                  no solo una rebaja fiscal.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Tu perfil - 3 situaciones */}
        <section className="section-pad bg-[var(--bg-soft)]">
          <div className="container-shell">
            <h2 className="section-title text-center mb-12">¿Cuál es tu situación?</h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {/* Solo */}
              <div className="glass-card-premium p-6">
                <div className="w-14 h-14 mb-4 rounded-2xl bg-[var(--blue)]/10 flex items-center justify-center">
                  <HeartPulse className="h-7 w-7 text-[var(--blue)]" />
                </div>
                <h3 className="font-heading text-xl font-bold mb-2">Autónomo solo</h3>
                <p className="text-[var(--muted)] text-sm leading-relaxed mb-4">
                  Tu prioridad: salud individual con deducción. Opciones desde 25€/mes netos 
                  con la deducción fiscal aplicada.
                </p>
                <a href="/seguros/salud/autonomos" className="inline-flex items-center gap-1 text-[var(--blue)] font-medium text-sm hover:gap-2 transition-all">
                  Ver seguro para autónomos <ArrowRight className="h-4 w-4" />
                </a>
              </div>

              {/* Con familia */}
              <div className="glass-card-premium p-6">
                <div className="w-14 h-14 mb-4 rounded-2xl bg-[var(--blue)]/10 flex items-center justify-center">
                  <Users className="h-7 w-7 text-[var(--blue)]" />
                </div>
                <h3 className="font-heading text-xl font-bold mb-2">Autónomo con familia</h3>
                <p className="text-[var(--muted)] text-sm leading-relaxed mb-4">
                  Puedes deducirte hasta 2.000€ si tu pareja también es autónoma. 
                  Salud familiar completa con pediatras incluidos.
                </p>
                <a href="/seguros/salud-familiar" className="inline-flex items-center gap-1 text-[var(--blue)] font-medium text-sm hover:gap-2 transition-all">
                  Ver salud familiar <ArrowRight className="h-4 w-4" />
                </a>
              </div>

              {/* Con empleados */}
              <div className="glass-card-premium p-6">
                <div className="w-14 h-14 mb-4 rounded-2xl bg-[var(--blue)]/10 flex items-center justify-center">
                  <Briefcase className="h-7 w-7 text-[var(--blue)]" />
                </div>
                <h3 className="font-heading text-xl font-bold mb-2">Autónomo con empleados</h3>
                <p className="text-[var(--muted)] text-sm leading-relaxed mb-4">
                  Si tienes trabajadores, su seguro médico es deducible al 100% 
                  como gasto de empresa. Te explicamos cómo.
                </p>
                <a
                  href={buildWhatsAppHref("Soy autónomo con empleados y quiero saber cómo deducir sus seguros médicos.")}
                  className="inline-flex items-center gap-1 text-[var(--blue)] font-medium text-sm hover:gap-2 transition-all"
                >
                  Consultar opciones <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Sorpresa - Empleados */}
        <section className="section-pad bg-white">
          <div className="container-shell">
            <div className="glass-card-premium p-10 md:p-12 max-w-4xl mx-auto border-[var(--blue)]">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-none w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="text-2xl">💼</span>
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold font-heading mb-2">
                    Si tienes empleados, su seguro médico también es deducible
                  </h2>
                  <p className="text-lg text-[var(--muted)]">
                    Al 100% como gasto de empresa. Te lo explicamos.
                  </p>
                </div>
              </div>
              <div className="prose max-w-none text-[var(--muted)]">
                <p>
                  Muchos autónomos con pequeños equipos no saben que pueden contratar seguro médico 
                  para sus empleados y deducirlo completamente como gasto de empresa. Esto tiene 
                  doble beneficio: retención de talento y ahorro fiscal.
                </p>
                <p className="mt-4">
                  Además, si tus empleados están contentos con su cobertura médica, 
                  tienen menos bajas y están más productivos. Es una inversión que se paga sola.
                </p>
              </div>
              <div className="mt-8">
                <a
                  href={buildWhatsAppHref("Soy autónomo con empleados y quiero información sobre seguros deducibles para ellos.")}
                  className="btn-primary inline-flex"
                >
                  Quiero saber más
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Garantía */}
        <section className="section-pad bg-[var(--bg-soft)]">
          <div className="container-shell">
            <div className="glass-card-premium p-10 md:p-12 max-w-4xl mx-auto text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center">
                <span className="text-3xl">⚡</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
                Te respondemos en menos de 24 horas
              </h2>
              <p className="text-xl text-[var(--muted)] mb-6 max-w-2xl mx-auto">
                Con una propuesta concreta. Si no encaja con tu situación, te lo decimos. 
                No perdemos tu tiempo ni el nuestro.
              </p>
              <p className="text-lg text-[var(--muted)]">
                Como autónomo sabes que el tiempo es dinero. Nosotros también. 
                Por eso vamos al grano desde el primer mensaje.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ fiscal */}
        <section className="section-pad bg-white">
          <div className="container-shell">
            <h2 className="section-title text-center mb-12">Preguntas frecuentes sobre la deducción</h2>
            <div className="max-w-3xl mx-auto space-y-4">
              <div className="glass-card-premium p-6">
                <h3 className="font-bold text-lg mb-2">¿Puedo deducirme el seguro dental?</h3>
                <p className="text-[var(--muted)]">
                  No, la deducción específica de 500€ solo aplica a seguros de enfermedad o salud médica. 
                  Los seguros exclusivamente dentales no califican para esta deducción, 
                  aunque sí pueden ser deducibles como gasto de empresa si los contratas para empleados.
                </p>
              </div>

              <div className="glass-card-premium p-6">
                <h3 className="font-bold text-lg mb-2">¿Qué pasa si doy de alta a un hijo a mitad de año?</h3>
                <p className="text-[var(--muted)]">
                  La deducción se prorratea por meses. Si das de alta a un hijo en julio, 
                  puedes deducir la parte proporcional de esos 500€ correspondiente a los meses 
                  restantes del año (unos 250€ por 6 meses).
                </p>
              </div>

              <div className="glass-card-premium p-6">
                <h3 className="font-bold text-lg mb-2">¿Necesito tener una sociedad para deducirme?</h3>
                <p className="text-[var(--muted)]">
                  No. Tanto si eres autónomo individual (autónomo en régimen de estimación directa) 
                  como si tienes sociedad, puedes deducirte el seguro siempre que esté contratado 
                  por ti o tu empresa.
                </p>
              </div>

              <div className="glass-card-premium p-6">
                <h3 className="font-bold text-lg mb-2">¿Y si mi pareja también es autónoma?</h3>
                <p className="text-[var(--muted)]">
                  Si ambos sois autónomos y pagáis el seguro, cada uno puede deducirse hasta 500€ 
                  por cada persona asegurada. Si tenéis un seguro familiar de 2.000€, 
                  podríais deducir hasta 2.000€ cada uno (total 4.000€ de deducción familiar).
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="section-pad bg-gradient-to-br from-[#123B68] to-[#0F5E9C]">
          <div className="container-shell text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white font-heading mb-6">
              Aprovecha la deducción que ya tienes disponible
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Cuéntanos tu situación: ¿solo, con familia, con empleados? 
              Te calculamos exactamente cuánto puedes ahorrar.
            </p>
            <a
              href={buildWhatsAppHref("Hola, soy autónomo y quiero aprovechar la deducción de 500€ en el IRPF por mi seguro de salud.")}
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
