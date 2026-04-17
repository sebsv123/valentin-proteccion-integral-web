import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { site } from '@/lib/products';

export const metadata: Metadata = {
  title: "Seguro Médico para Autónomos en Madrid · Dedúcete hasta 500€ | Valentín",
  description: "Asesoría gratuita para autónomos en Madrid. Descubre cuánto puedes ahorrar con tu seguro médico y cómo deducirte hasta 500€ en el IRPF. Sin compromiso.",
  robots: { index: false, follow: false },
};

// Meta Pixel tracking helper
function trackLead() {
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('track', 'Lead', { content_name: 'landing-autonomos' });
  }
}

export default function LandingAutonomosPage() {
  const whatsappHref = `https://wa.me/34603448765?text=${encodeURIComponent(
    'Hola, soy autónomo en Madrid y quiero información sobre el seguro médico con deducción IRPF.'
  )}`;

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0a1628] via-[#0d1d33] to-[#0a1628]">
      {/* BARRA SUPERIOR - Logo + Teléfono */}
      <div className="border-b border-white/10 bg-white/5 backdrop-blur-sm">
        <div className="container-shell flex items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative h-10 w-[100px] overflow-hidden rounded-lg bg-white/10 p-1">
              <Image
                src="/brand/logo-vpi.webp"
                alt="Valentín Protección Integral"
                width={440}
                height={181}
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>
          <a
            href={`tel:${site.phone}`}
            className="flex items-center gap-2 text-sm font-semibold text-white/90 hover:text-white"
          >
            <span>📞</span>
            <span>{site.phone}</span>
          </a>
        </div>
      </div>

      {/* HERO */}
      <section className="section-pad pt-8 pb-12 md:pt-12 md:pb-16">
        <div className="container-shell max-w-3xl">
          <span className="inline-block rounded-full bg-[var(--blue)]/20 px-4 py-1.5 text-sm font-semibold tracking-wide text-[var(--blue-light)]">
            Autónomos en Madrid
          </span>

          <h1 className="mt-6 font-heading text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">
            Tu seguro médico puede deducirse hasta 500€ al año.
            <span className="block text-[var(--blue-light)]">Nosotros te decimos si te compensa y cómo.</span>
          </h1>

          <p className="mt-4 text-lg text-white/80 md:text-xl">
            Asesoría gratuita en 15 minutos.
            <br />
            Sin comparadores. Sin presión. Con un asesor real.
          </p>

          {/* Badge de urgencia sutil */}
          <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-amber-500/10 px-4 py-2 text-sm font-medium text-amber-400">
            <span>⚡</span>
            <span>Plazas limitadas esta semana — Respuesta en menos de 2 horas</span>
          </div>

          {/* CTA DOBLE */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappHref}
              onClick={trackLead}
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#128C7E] px-8 py-4 text-base font-semibold text-white shadow-lg shadow-[#128C7E]/30 hover:bg-[#0e6b60] transition-all"
            >
              <span>💬</span>
              Consultar por WhatsApp
            </a>
            <a
              href={`tel:${site.phone}`}
              onClick={trackLead}
              className="inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-white/30 bg-transparent px-8 py-4 text-base font-semibold text-white hover:bg-white/10 transition-all"
            >
              <span>📞</span>
              Llamar ahora · {site.phone}
            </a>
          </div>
        </div>
      </section>

      {/* SECCIÓN: La deducción explicada simple */}
      <section className="section-pad bg-white/5">
        <div className="container-shell">
          <h2 className="mb-8 text-center font-heading text-2xl font-bold text-white md:text-3xl">
            ¿Cuánto me ahorro exactamente?
          </h2>

          <div className="grid gap-4 sm:grid-cols-3">
            <div className="soft-card bg-gradient-to-br from-[var(--blue)]/20 to-[var(--blue)]/5 p-6 text-center">
              <div className="font-heading text-4xl font-bold text-[var(--blue-light)]">500€</div>
              <p className="mt-2 text-sm text-white/70">Por ti al año en el IRPF</p>
            </div>
            <div className="soft-card bg-gradient-to-br from-[var(--blue)]/20 to-[var(--blue)]/5 p-6 text-center">
              <div className="font-heading text-4xl font-bold text-[var(--blue-light)]">x4</div>
              <p className="mt-2 text-sm text-white/70">Si tienes pareja e hijos: hasta 2.000€/año</p>
            </div>
            <div className="soft-card bg-gradient-to-br from-[var(--blue)]/20 to-[var(--blue)]/5 p-6 text-center">
              <div className="font-heading text-4xl font-bold text-[var(--blue-light)]">0€</div>
              <p className="mt-2 text-sm text-white/70">Coste de la asesoría. Siempre.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN: Para qué perfil es esto */}
      <section className="section-pad">
        <div className="container-shell max-w-3xl">
          <h2 className="mb-8 text-center font-heading text-2xl font-bold text-white md:text-3xl">
            Esto es para ti si...
          </h2>

          <div className="space-y-4">
            {[
              'Estás dado de alta como autónomo en Madrid',
              'Tienes entre 25 y 55 años',
              'No tienes seguro médico o pagas de más por el que tienes',
              'Tienes familia a tu cargo y quieres optimizar gastos',
              'Quieres hablar con alguien que te explique, no que te venda',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                  ✓
                </span>
                <span className="text-white/90">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN SORPRESA - Cross-sell */}
      <section className="section-pad bg-[var(--blue)]/10">
        <div className="container-shell max-w-2xl">
          <div className="soft-card bg-gradient-to-br from-[var(--blue-deep)] to-[var(--blue)] p-8 text-center md:p-10">
            <div className="mb-4 flex justify-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-3xl">
                🎁
              </span>
            </div>
            <h3 className="font-heading text-xl font-bold text-white md:text-2xl">
              Si contratas tu seguro de salud junto con vida o accidentes,
              te aplicamos un descuento exclusivo en tu primera prima.
            </h3>
            <a
              href={whatsappHref}
              onClick={trackLead}
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-8 py-4 text-base font-semibold text-[var(--blue-deep)] hover:bg-white/90 transition-all"
            >
              Quiero saber más
            </a>
          </div>
        </div>
      </section>

      {/* SECCIÓN GARANTÍA */}
      <section className="section-pad">
        <div className="container-shell max-w-2xl">
          <div className="soft-card border-2 border-[var(--blue)]/30 bg-white/5 p-8 text-center md:p-12">
            <p className="font-heading text-lg font-bold text-[var(--blue-light)]">
              +10 años asesorando autónomos en Madrid
            </p>
            <p className="mt-4 text-white/80">
              Si en 15 minutos no encontramos algo que te convenga,
              te lo decimos sin rodeos. Sin coste y sin compromiso.
            </p>
            <a
              href={whatsappHref}
              onClick={trackLead}
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-2xl bg-[#128C7E] px-8 py-4 text-base font-semibold text-white shadow-lg hover:bg-[#0e6b60] transition-all"
            >
              <span>💬</span>
              Hablar por WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER MÍNIMO */}
      <footer className="border-t border-white/10 py-6">
        <div className="container-shell text-center text-sm text-white/50">
          © 2025 Valentín Protección Integral ·{' '}
          <Link href="/privacidad" className="hover:text-white/80">Privacidad</Link> ·{' '}
          <Link href="/aviso-legal" className="hover:text-white/80">Aviso legal</Link>
        </div>
      </footer>
    </main>
  );
}
