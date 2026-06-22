'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { testimonials, buildWhatsAppHref } from '@/lib/products';
import { CheckCircle2, Shield, Clock, HeartHandshake, Star, MessageCircle, Phone } from 'lucide-react';
import { captureUTMs, trackLeadFormSubmit } from '@/lib/analytics';

const PRODUCT_OPTIONS = [
  { value: '', label: '¿Qué tipo de seguro buscas?' },
  { value: 'Salud', label: 'Salud' },
  { value: 'Vida', label: 'Vida' },
  { value: 'Dental', label: 'Dental' },
  { value: 'Mascotas', label: 'Mascotas' },
  { value: 'Accidentes', label: 'Accidentes' },
  { value: 'Negocios', label: 'Negocios' },
  { value: 'Otro', label: 'Otro' },
];

export default function AsesoriaGratuitaLanding() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [product, setProduct] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !product) return;
    setSubmitting(true);
    setSubmitError(null);

    captureUTMs();

    // Get stored UTMs to include in payload
    const utms = typeof window !== 'undefined' ? (() => {
      try {
        const raw = sessionStorage.getItem('valentin_utm');
        return raw ? JSON.parse(raw) : {};
      } catch { return {}; }
    })() : {};

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          source: 'landing-asesoria-gratuita',
          name: name.trim(),
          phone: phone.trim(),
          interest: product,
          message: 'Solicitud de asesoría gratuita',
          consent: true,
          website: '',
          pageUrl: typeof window !== 'undefined' ? window.location.href : '',
          referrer: typeof document !== 'undefined' ? document.referrer || '' : '',
          utm: utms,
        }),
      });

      if (!response.ok) {
        throw new Error('No hemos podido enviar el formulario.');
      }

      trackLeadFormSubmit({
        product_slug: 'asesoria-gratuita',
        lead_type: 'form',
        page_location: typeof window !== 'undefined' ? window.location.href : '',
      });
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'Contactar', {
          event_category: 'conversion',
          event_label: 'asesoria_gratuita_landing',
          value: product,
        });
      }
      if (typeof window !== 'undefined') {
        try {
          sessionStorage.setItem('valentin_conversion_fired', '1');
        } catch { /* ignore */ }
      }

      router.push('/gracias');
    } catch {
      setSubmitError('No hemos podido enviar el formulario. Escríbenos por WhatsApp o a contacto@valentinproteccionintegral.com.');
      setSubmitting(false);
    }
  };

  const wHref = buildWhatsAppHref('Hola, quiero una asesoría gratuita sobre seguros. ¿Podéis ayudarme?');

  return (
    <>
      {/* ── MINIMAL HEADER ─────────────────────────────────────────────── */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 h-16 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold text-gray-900">Valentín</span>
            <span className="hidden sm:inline text-sm text-gray-400 font-medium">Protección Integral</span>
          </a>
          <a
            href={wHref}
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp
          </a>
        </div>
      </header>

      <main className="min-h-screen bg-white">

        {/* ── HERO + FORM ──────────────────────────────────────────────── */}
        <section className="relative pt-16 pb-20 overflow-hidden">
          {/* Halo suave */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-radial from-blue-100/40 via-blue-50/20 to-transparent blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              {/* Left: Content */}
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-6">
                  <Shield className="w-4 h-4" />
                  Asesoría 100% gratuita
                </div>

                <h1 className="text-[40px] sm:text-[48px] lg:text-[56px] font-bold text-gray-900 leading-[1.05] tracking-tight mb-6">
                  Asesoría de Seguros
                  <br />
                  <span className="text-blue-600">Gratis en Madrid</span>
                </h1>

                <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
                  Te ayudamos a elegir el seguro que realmente necesitas.
                  <br />
                  <span className="font-semibold text-gray-900">Sin presión. Sin compromiso. En menos de 24h.</span>
                </p>

                {/* Trust points */}
                <div className="grid sm:grid-cols-3 gap-4 mb-8">
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-100">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <Shield className="w-4 h-4 text-blue-600" />
                    </div>
                    <div className="text-left">
                      <p className="font-semibold text-gray-900 text-sm">Registro Oficial</p>
                      <p className="text-xs text-gray-500">DGSFP: C012479234434D</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-100">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-4 h-4 text-blue-600" />
                    </div>
                    <div className="text-left">
                      <p className="font-semibold text-gray-900 text-sm">Respuesta Rápida</p>
                      <p className="text-xs text-gray-500">En menos de 24h</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-100">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <HeartHandshake className="w-4 h-4 text-blue-600" />
                    </div>
                    <div className="text-left">
                      <p className="font-semibold text-gray-900 text-sm">Sin Compromiso</p>
                      <p className="text-xs text-gray-500">Consulta sin ataduras</p>
                    </div>
                  </div>
                </div>

                {/* Testimonials preview */}
                <div className="hidden lg:block">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex -space-x-2">
                      {testimonials.slice(0, 3).map((t, i) => (
                        <div
                          key={i}
                          className="w-8 h-8 rounded-full bg-blue-100 border-2 border-white flex items-center justify-center text-xs font-bold text-blue-600"
                        >
                          {t.avatar}
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-gray-500">
                    +1.200 familias protegidas en Madrid
                  </p>
                </div>
              </div>

              {/* Right: Form */}
              <div className="w-full max-w-md mx-auto lg:mx-0">
                <div className="bg-white rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100 p-8">
                  <h2 className="text-xl font-bold text-gray-900 mb-2">Solicita tu asesoría gratuita</h2>
                  <p className="text-sm text-gray-500 mb-6">Rellena el formulario y te llamamos en menos de 24h</p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Nombre completo
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Ej: María García"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Teléfono
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Ej: 612 34 56 78"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="product" className="block text-sm font-medium text-gray-700 mb-1">
                        ¿Qué seguro te interesa?
                      </label>
                      <select
                        id="product"
                        required
                        value={product}
                        onChange={(e) => setProduct(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      >
                        {PRODUCT_OPTIONS.map((opt) => (
                          <option key={opt.value} value={opt.value} disabled={!opt.value}>
                            {opt.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold py-3.5 px-6 rounded-xl transition-all shadow-lg shadow-blue-600/25 hover:shadow-xl hover:shadow-blue-600/30"
                    >
                      {submitting ? 'Enviando...' : 'Solicitar asesoría gratuita'}
                    </button>

                    {submitError ? (
                      <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                        {submitError}
                      </p>
                    ) : null}

                    <p className="text-xs text-gray-400 text-center">
                      Al enviar aceptas nuestra{' '}
                      <a href="/privacidad" className="underline hover:text-gray-600">política de privacidad</a>.
                      Te llamaremos en menos de 24h en horario de atención (L-V 9h-19h, S 10h-14h).
                    </p>
                  </form>

                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <p className="text-sm text-gray-500 text-center mb-3">O escríbenos directamente:</p>
                    <a
                      href={wHref}
                      className="flex items-center justify-center gap-2 w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-xl transition-all"
                    >
                      <MessageCircle className="w-5 h-5" />
                      WhatsApp
                    </a>
                    <a
                      href="tel:603448765"
                      className="flex items-center justify-center gap-2 w-full mt-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-3 px-6 rounded-xl transition-all"
                    >
                      <Phone className="w-5 h-5" />
                      603 44 87 65
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS ─────────────────────────────────────────────── */}
        <section className="py-20 bg-gray-50/50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <div className="text-center mb-12">
              <h2 className="text-[32px] sm:text-[36px] font-bold text-gray-900 leading-tight mb-4">
                Lo que dicen nuestros clientes
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Personas reales que ya confiaron en nosotros
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((t, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                  <div className="flex items-center gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">&ldquo;{t.quote}&rdquo;</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-sm font-bold text-blue-600">
                      {t.avatar}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">{t.name}</p>
                      <p className="text-xs text-gray-400">{t.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA FINAL ────────────────────────────────────────────────── */}
        <section className="py-20 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-6">
              <CheckCircle2 className="w-4 h-4" />
              Sin compromiso
            </div>
            <h2 className="text-[32px] sm:text-[40px] font-bold text-gray-900 leading-tight mb-4">
              ¿Hablamos?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto">
              Un WhatsApp o un formulario. Te orientamos en menos de 24h.
              <br />
              <span className="font-semibold text-gray-900">Sin presión. Sin letra pequeña.</span>
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={wHref}
                className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all shadow-lg shadow-green-500/25 hover:shadow-xl"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Ahora
              </a>
              <a
                href="tel:603448765"
                className="inline-flex items-center gap-2 bg-white text-gray-700 px-8 py-4 rounded-xl text-lg font-medium border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all"
              >
                <Phone className="w-5 h-5" />
                603 44 87 65
              </a>
            </div>
          </div>
        </section>

      </main>

      {/* ── LEGAL FOOTER ───────────────────────────────────────────────── */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-white font-bold text-lg mb-3">Valentín Protección Integral</h3>
              <p className="text-sm leading-relaxed">
                Asesoría de seguros registrada en la DGSFP. Más de 10 años ayudando a familias y profesionales
                en Madrid a encontrar la protección adecuada.
              </p>
            </div>
            <div>
              <h3 className="text-white font-bold text-lg mb-3">Datos legales</h3>
              <ul className="text-sm space-y-1">
                <li><span className="text-gray-500">NIF:</span> 79234434D</li>
                <li><span className="text-gray-500">DGSFP:</span> C012479234434D</li>
                <li><span className="text-gray-500">Teléfono:</span> 603 44 87 65</li>
                <li><span className="text-gray-500">Email:</span> info@valentinproteccionintegral.com</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs">
              &copy; {new Date().getFullYear()} Valentín Protección Integral. Todos los derechos reservados.
            </p>
            <div className="flex gap-4 text-xs">
              <a href="/aviso-legal" className="hover:text-white transition-colors">Aviso Legal</a>
              <a href="/privacidad" className="hover:text-white transition-colors">Privacidad</a>
              <a href="/cookies" className="hover:text-white transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
