import { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { StickyWhatsApp } from "@/components/sticky-whatsapp";
import { buildWhatsAppHref, site } from "@/lib/products";
import { Phone, HeartPulse, Umbrella, Home, ArrowRight } from "lucide-react";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";

export const metadata: Metadata = {
  title: "Seguros para Seniors en Madrid · Tranquilidad para ti y los tuyos | Valentín Protección Integral",
  description: "Más de 60 años y quieres tener todo en orden. Salud privada, decesos y protección patrimonial con el acompañamiento cercano que mereces. Sin trámites complicados.",
  keywords: "seguros seniors Madrid, seguro salud mayores Madrid, seguro decesos senior, protección patrimonial",
  openGraph: {
    title: "Seguros para Seniors en Madrid · Tranquilidad para ti y los tuyos",
    description: "Más de 60 años y quieres tener todo en orden. Salud privada, decesos y protección patrimonial con acompañamiento cercano.",
    url: "https://www.valentinproteccionintegral.com/para/seniors",
    siteName: "Valentín Protección Integral",
    locale: "es_ES",
    type: "website",
  },
  alternates: {
    canonical: "https://www.valentinproteccionintegral.com/para/seniors",
  },
};

export const dynamic = "force-static";

export default function SeniorsPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Inicio", url: "/" },
          { name: "Seniors", url: "/para/seniors" },
        ]}
      />
      <Header />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#123B68] via-[#0F5E9C] to-[#123B68] py-20 lg:py-28">
          <div className="absolute inset-0 bg-[url('/images/premium/grid.svg')] opacity-10" />
          <div className="container-shell relative z-10">
            <div className="max-w-3xl">
              <p className="kicker !text-white/80 !border-white/30">Para mayores de 60</p>
              <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                A esta edad, la tranquilidad no es un lujo. Es lo que te mereces.
              </h1>
              <p className="mt-6 text-xl text-white/90">
                Más de 60 años y quieres tener todo en orden. Te entendemos. 
                Y te ofrecemos el acompañamiento cercano que mereces, sin trámites complicados.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:603448765"
                  className="btn-whatsapp !text-lg !px-8 !py-4 inline-flex"
                >
                  <Phone className="h-5 w-5" />
                  Llámanos: 603 448 765
                </a>
                <a
                  href={buildWhatsAppHref("Hola, tengo más de 60 años y quiero información sobre seguros. Prefiero hablar por teléfono pero me pongo en contacto por aquí primero.")}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold rounded-xl border-2 border-white text-white hover:bg-white/10 transition-colors"
                >
                  <WhatsAppIcon className="h-5 w-5" />
                  O por WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Lo más importante para proteger */}
        <section className="section-pad bg-white">
          <div className="container-shell">
            <h2 className="section-title text-center mb-12">Lo más importante para proteger lo que has construido</h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {/* Salud Senior */}
              <a href="/seguros/salud-senior" className="glass-card-premium p-6 hover:shadow-lg transition-shadow group">
                <div className="w-14 h-14 mb-4 rounded-2xl bg-[var(--blue)]/10 flex items-center justify-center">
                  <HeartPulse className="h-7 w-7 text-[var(--blue)]" />
                </div>
                <h3 className="font-heading text-xl font-bold mb-2">Salud Senior</h3>
                <p className="text-[var(--muted)] text-sm leading-relaxed">
                  Especialistas sin esperas, pruebas diagnósticas rápidas y hospitalización cuando la necesites. 
                  Prioridad en tu etapa de la vida.
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
                <h3 className="font-heading text-xl font-bold mb-2">Decesos</h3>
                <p className="text-[var(--muted)] text-sm leading-relaxed">
                  Gestión completa del sepelio y trámites. Para que tu familia no tenga que preocuparse 
                  por nada en los momentos difíciles.
                </p>
                <span className="inline-flex items-center gap-1 mt-4 text-[var(--blue)] font-medium text-sm group-hover:gap-2 transition-all">
                  Ver más <ArrowRight className="h-4 w-4" />
                </span>
              </a>

              {/* Hogar */}
              <a href="/seguros/hogar" className="glass-card-premium p-6 hover:shadow-lg transition-shadow group">
                <div className="w-14 h-14 mb-4 rounded-2xl bg-[var(--blue)]/10 flex items-center justify-center">
                  <Home className="h-7 w-7 text-[var(--blue)]" />
                </div>
                <h3 className="font-heading text-xl font-bold mb-2">Hogar</h3>
                <p className="text-[var(--muted)] text-sm leading-relaxed">
                  Protección integral de tu vivienda. Desde reparaciones de fontanería hasta 
                  responsabilidad civil. Todo cubierto.
                </p>
                <span className="inline-flex items-center gap-1 mt-4 text-[var(--blue)] font-medium text-sm group-hover:gap-2 transition-all">
                  Ver más <ArrowRight className="h-4 w-4" />
                </span>
              </a>
            </div>
          </div>
        </section>

        {/* Sección honestidad - Decesos */}
        <section className="section-pad bg-[var(--bg-soft)]">
          <div className="container-shell">
            <div className="glass-card-premium p-10 md:p-12 max-w-4xl mx-auto border-[var(--blue)]">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-none w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center">
                  <span className="text-2xl">🕊️</span>
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold font-heading mb-2">
                    El seguro de decesos es el producto que más gente deja para mañana
                  </h2>
                  <p className="text-lg text-[var(--muted)]">
                    Y el que más agradecen haber contratado cuando llega el momento. 
                    Te explicamos qué cubre exactamente y qué gestiona por tu familia.
                  </p>
                </div>
              </div>
              <div className="prose max-w-none text-[var(--muted)]">
                <p>
                  Sabemos que hablar de esto no es fácil. Pero precisamente por eso, merece la pena 
                  tenerlo resuelto. Un seguro de decesos no es solo pagar el entierro: es gestionar 
                  todos los trámites, desde el certificado de defunción hasta las notificaciones a 
                  bancos y organismos públicos.
                </p>
                <p className="mt-4">
                  En Madrid, los costes funerarios son elevados. Sin este seguro, tu familia 
                  deberá hacer frente a gastos de entre 6.000€ y 9.000€, además de gestionar 
                  todo el papeleo en un momento emocionalmente difícil. Por menos de 100€ al año, 
                  puedes dejarlo todo resuelto.
                </p>
              </div>
              <div className="mt-8">
                <a
                  href={buildWhatsAppHref("Tengo más de 60 años y quiero información sobre seguro de decesos. Me gustaría entender bien qué cubre.")}
                  className="btn-primary inline-flex"
                >
                  Quiero saber más sobre decesos
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
                <span className="text-3xl">🤝</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
                Atención personal directa con Rosa o Sebastián
              </h2>
              <p className="text-xl text-[var(--muted)] mb-6 max-w-2xl mx-auto">
                No con un call center. No con un operador que cambia cada vez. 
                Con nosotros, siempre hablas con la misma persona que te conoce.
              </p>
              <p className="text-lg text-[var(--muted)]">
                Llevamos más de 10 años ayudando a familias en Madrid. 
                Sabemos que a esta edad se valora la confianza y la cercanía. 
                Por eso trabajamos así.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Final - Con teléfono grande */}
        <section className="section-pad bg-gradient-to-br from-[#123B68] to-[#0F5E9C]">
          <div className="container-shell text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white font-heading mb-6">
              Hablemos. Estamos aquí para ayudarte.
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Preferimos llamarte y explicártelo con calma. Déjanos tu teléfono 
              o llámanos directamente.
            </p>
            
            {/* Teléfono grande y visible */}
            <div className="mb-8">
              <a
                href="tel:603448765"
                className="inline-flex items-center gap-3 text-4xl md:text-5xl font-bold text-white hover:text-amber-300 transition-colors"
              >
                <Phone className="h-10 w-10 md:h-12 md:w-12" />
                603 448 765
              </a>
              <p className="mt-2 text-white/70">Lunes a Viernes, 9:00 - 19:00</p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={buildWhatsAppHref("Soy senior y prefiero que me llaméis. Mi teléfono es: [INDICAR TELÉFONO]")}
                className="btn-whatsapp !text-lg !px-8 !py-4 inline-flex"
              >
                <WhatsAppIcon className="h-5 w-5" />
                O escríbenos por WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <StickyWhatsApp />
    </>
  );
}
