import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Seguro Dental en Madrid desde 7€/mes | Valentín Protección Integral',
  description: 'Consigue tu seguro dental en Madrid con asesoría personalizada de Rosa y Sebastián. Sin carencias en revisiones. Respuesta en 30 minutos. Sin letra pequeña.',
  openGraph: {
    title: 'Seguro Dental Madrid | Valentín Protección Integral',
    description: 'Asesoría dental personalizada. Te respondemos en 30 minutos. Sin sorpresas.',
  }
}

const WHATSAPP_URL = "https://wa.me/34603448765?text=Hola%2C%20me%20interesa%20el%20seguro%20dental.%20%C2%BFPodemos%20hablar%3F"
const TELEFONO = "603 448 765"

const tablaAhorro = [
  { tratamiento: "Revisión anual",    sinSeguro: "60€",    conSeguro: "Gratis" },
  { tratamiento: "Limpieza dental",   sinSeguro: "80€",    conSeguro: "Gratis" },
  { tratamiento: "Empaste",           sinSeguro: "120€",   conSeguro: "Gratis" },
  { tratamiento: "Endodoncia",        sinSeguro: "500€",   conSeguro: "Desde 90€" },
  { tratamiento: "Ortodoncia",        sinSeguro: "3.500€", conSeguro: "Desde 1.200€" },
  { tratamiento: "Implante",          sinSeguro: "2.500€", conSeguro: "Desde 550€" },
]

const garantias = [
  {
    icon: "⚡",
    titulo: "Respuesta en 30 minutos",
    texto: "Te respondemos en menos de 30 minutos. Garantizado. De lunes a viernes."
  },
  {
    icon: "🔄",
    titulo: "14 días de garantía",
    texto: "Si en los primeros 14 días no estás satisfecho con tu póliza, te ayudamos a cancelarla sin coste."
  },
  {
    icon: "📅",
    titulo: "Tu antigüedad, intacta",
    texto: "Sea cual sea la compañía de la que vengas, mantenemos tu antigüedad."
  },
  {
    icon: "🦷",
    titulo: "Úsalo desde el primer día",
    texto: "Sin periodos de carencia en revisiones y limpiezas. Activo desde el momento en que lo contratas."
  },
]

const faqs = [
  {
    q: "¿Tiene carencias el seguro dental?",
    a: "En revisiones y limpiezas, no. Desde el primer día puedes ir al dentista. Otros tratamientos como ortodoncia o implantes pueden tener periodos de carencia según el plan — te lo explicamos todo antes de contratar."
  },
  {
    q: "¿Cuánto tarda en activarse la póliza?",
    a: "Una vez enviada la documentación, la póliza puede estar activa en menos de 24-72 horas según el plan elegido. Te acompañamos en todo el proceso."
  },
  {
    q: "¿Habrá clínicas dentales cerca de mi casa en Madrid?",
    a: "Sí. Los planes que gestionamos cuentan con amplias redes de clínicas en toda la Comunidad de Madrid. Antes de contratar te confirmamos que tienes clínica cerca de tu domicilio o trabajo."
  },
  {
    q: "¿Puedo incluir a mi familia en la misma póliza?",
    a: "Sí, existen planes familiares con condiciones especiales. Cuéntanos cuántos sois y lo buscamos."
  },
  {
    q: "¿Tengo que cambiar de dentista?",
    a: "Si tu dentista actual no está en la red, sí tendrías que ir a uno de la red cubierta. Te ayudamos a encontrar el más cercano antes de que tomes ninguna decisión."
  },
  {
    q: "¿Qué pasa si ya tengo un seguro dental con otra compañía?",
    a: "Podemos revisar lo que tienes, compararlo con lo que podemos ofrecerte, y si merece la pena cambiar, te mantenemos la antigüedad acumulada. Sin coste, sin compromiso."
  },
]

export default function LandingDental() {
  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans">

      {/* ── HERO ── */}
      <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white px-6 py-20 md:py-28">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block bg-blue-700/60 border border-blue-500/40 text-blue-100 text-sm font-medium px-4 py-1.5 rounded-full mb-6 tracking-wide">
            Asesoría dental personalizada · Madrid
          </span>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-5">
            Tu seguro dental activo<br className="hidden md:block" /> en menos de 24 horas
          </h1>
          <p className="text-blue-100 text-lg md:text-xl mb-3 max-w-xl mx-auto">
            Te encontramos el mejor plan para tu boca y tu bolsillo.<br />
            Sin letra pequeña. Sin sorpresas.
          </p>
          <p className="text-blue-200 text-base mb-10">
            📍 Desde <strong className="text-white">7€/mes</strong> · Revisiones sin carencia desde el primer día
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-400 text-white font-semibold text-lg px-8 py-4 rounded-xl transition-all shadow-lg hover:shadow-green-500/30 hover:scale-105"
            >
              💬 Escríbenos por WhatsApp
            </a>
            <a
              href={`tel:+34${TELEFONO.replace(/\s/g,'')}`}
              className="bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold text-lg px-8 py-4 rounded-xl transition-all"
            >
              📞 Llamar ahora · {TELEFONO}
            </a>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3 text-blue-200 text-sm">
            <span>✅ Sin carencias en revisiones</span>
            <span>✅ Respuesta en 30 minutos</span>
            <span>✅ Asesoría gratuita</span>
            <span>✅ 355 clientes en Madrid</span>
          </div>
        </div>
      </section>

      {/* ── TABLA DE AHORRO ── */}
      <section className="px-6 py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-3">
            ¿Cuánto te cuesta el dentista sin seguro?
          </h2>
          <p className="text-center text-gray-500 mb-10">
            Compara lo que pagas hoy con lo que pagarías con tu seguro dental
          </p>
          <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full text-sm md:text-base">
              <thead>
                <tr className="bg-blue-950 text-white">
                  <th className="text-left px-5 py-4 font-semibold">Tratamiento</th>
                  <th className="text-center px-5 py-4 font-semibold">Sin seguro</th>
                  <th className="text-center px-5 py-4 font-semibold text-green-300">Con seguro</th>
                </tr>
              </thead>
              <tbody>
                {tablaAhorro.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-5 py-3.5 font-medium">{row.tratamiento}</td>
                    <td className="px-5 py-3.5 text-center text-red-500 line-through">{row.sinSeguro}</td>
                    <td className="px-5 py-3.5 text-center text-green-600 font-semibold">{row.conSeguro}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-center text-gray-400 text-xs mt-5">
            * Precios orientativos. Los tratamientos incluidos dependen del plan contratado.
          </p>
        </div>
      </section>

      {/* ── QUIÉNES SOMOS ── */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">
                No somos una aseguradora.<br /> Somos tu asesor.
              </h2>
              <p className="text-gray-600 text-lg mb-6">
                Rosa lleva 11 años en el sector. Sebastián se ha incorporado al equipo familiar con las mismas ganas de hacer las cosas bien. Juntos gestionamos la protección de 355 familias y empresas en Madrid.
              </p>
              <p className="text-gray-500">
                Cuando tienes un problema con tu seguro, no te quedas solo. Estamos aquí antes, durante y después de contratar.
              </p>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/equipo/rosa-y-sebastian.jpg"
                alt="Rosa y Sebastián — Valentín Protección Integral"
                width={600}
                height={700}
                className="object-cover w-full h-full"
                priority
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14 text-left">
            {[
              { icon: "🔍", title: "Buscamos por ti", desc: "Analizamos tu situación y te recomendamos el plan que más te conviene — no el que más nos conviene a nosotros." },
              { icon: "📋", title: "Sin papeleo", desc: "Nos encargamos de toda la gestión. Tú solo decides. Nosotros hacemos el resto." },
              { icon: "🤝", title: "Siempre disponibles", desc: "Después de contratar seguimos aquí. Si tienes un problema con tu seguro, lo gestionamos contigo." },
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GARANTÍAS ── */}
      <section className="px-6 py-20 bg-blue-950 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-3">Nuestras garantías</h2>
          <p className="text-blue-200 mb-12">
            Cosas que prometemos porque podemos cumplirlas.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
            {garantias.map((g, i) => (
              <div key={i} className="bg-white/10 border border-white/10 rounded-2xl p-6">
                <div className="text-3xl mb-3">{g.icon}</div>
                <h3 className="font-semibold text-lg mb-2">{g.titulo}</h3>
                <p className="text-blue-200 text-sm">{g.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OFERTA / SORPRESA ── */}
      <section className="px-6 py-16 bg-green-50 border-y border-green-100">
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-green-600 font-semibold text-sm uppercase tracking-widest">Oferta exclusiva</span>
          <h2 className="text-2xl md:text-3xl font-bold mt-2 mb-4 text-gray-900">
            Contrata dental hoy y accede a salud completa con condiciones de cliente antiguo
          </h2>
          <p className="text-gray-600 mb-8">
            Si en los primeros 30 días decides ampliar tu cobertura a salud completa, te aplicamos las condiciones de cliente con antigüedad — aunque acabes de empezar. Sin esperas, sin recargos.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-500 hover:bg-green-400 text-white font-semibold text-lg px-8 py-4 rounded-xl transition-all shadow-md hover:scale-105"
          >
            💬 Quiero aprovechar esta oferta
          </a>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Preguntas frecuentes</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group border border-gray-200 rounded-xl overflow-hidden">
                <summary className="flex justify-between items-center px-6 py-4 cursor-pointer font-semibold text-gray-900 hover:bg-gray-50 list-none">
                  {faq.q}
                  <span className="ml-4 text-blue-600 group-open:rotate-180 transition-transform text-xs">▼</span>
                </summary>
                <div className="px-6 pb-5 pt-2 text-gray-600 text-sm leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="px-6 py-20 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Hablamos?</h2>
          <p className="text-blue-200 text-lg mb-8">
            Es gratis. Sin compromiso. Y te respondemos en menos de 30 minutos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-400 text-white font-semibold text-lg px-8 py-4 rounded-xl transition-all shadow-lg hover:scale-105"
            >
              💬 Escríbenos por WhatsApp
            </a>
            <a
              href={`tel:+34${TELEFONO.replace(/\s/g,'')}`}
              className="bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold text-lg px-8 py-4 rounded-xl transition-all"
            >
              📞 {TELEFONO}
            </a>
          </div>
          <p className="text-blue-300 text-sm mt-6">
            Rosa · Sebastián · Valentín Protección Integral · Madrid
          </p>
        </div>
      </section>

    </main>
  )
}
