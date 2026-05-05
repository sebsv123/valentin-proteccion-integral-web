import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { StickyWhatsApp } from "@/components/sticky-whatsapp";
import { buildWhatsAppHref } from "@/lib/products";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Asesores de Seguros en Madrid Oeste | Valentín Protección Integral",
  description: "Agentes de seguros registrados DGSFP en Boadilla del Monte, Majadahonda, Pozuelo de Alarcón y Madrid. +10 años y +1.200 familias. Consulta gratis por WhatsApp.",
  keywords: ["asesores seguros Madrid Oeste", "seguros Boadilla", "seguros Majadahonda", "seguros Pozuelo", "agente seguros Madrid"],
  alternates: { canonical: "https://valentinproteccionintegral.com/zonas" },
  openGraph: {
    title: "Asesores de Seguros en Madrid Oeste | Valentín Protección Integral",
    description: "Agentes de seguros registrados DGSFP en Boadilla del Monte, Majadahonda, Pozuelo de Alarcón y Madrid. +10 años y +1.200 familias.",
    url: "https://valentinproteccionintegral.com/zonas",
    siteName: "Valentín Protección Integral",
    locale: "es_ES",
    type: "website",
  },
};

const wCotiza = buildWhatsAppHref("Hola, estoy en Madrid Oeste y necesito información sobre seguros.");

const zonas = [
  {
    slug: "boadilla-del-monte",
    nombre: "Boadilla del Monte",
    imagen: "/images/zonas/boadilla-del-monte.webp",
    desc: "Asesoramiento personalizado en el corazón de Madrid Oeste.",
  },
  {
    slug: "majadahonda",
    nombre: "Majadahonda",
    imagen: "/images/zonas/majadahonda.webp",
    desc: "Seguros a medida para familias y autónomos de Majadahonda.",
  },
  {
    slug: "pozuelo-de-alarcon",
    nombre: "Pozuelo de Alarcón",
    imagen: "/images/zonas/pozuelo-de-alarcon.webp",
    desc: "Protección premium para los vecinos de Pozuelo.",
  },
  {
    slug: "madrid",
    nombre: "Madrid",
    imagen: "/images/zonas/madrid.webp",
    desc: "Cobertura en toda la capital y área metropolitana.",
  },
];

export const dynamic = "force-static";

export default function ZonasPage() {
  return (
    <>
      <BreadcrumbSchema items={[{name:"Inicio",url:"/"},{name:"Zonas",url:"/zonas"}]} />
      <Header />
      <main className="min-h-screen bg-white">
        
        {/* HERO */}
        <section className="bg-slate-900 text-white py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                  Asesores de seguros en Madrid Oeste y toda la comunidad
                </h1>
                <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                  Rosa y Sebastián llevan más de 10 años ayudando a familias y autónomos 
                  a encontrar el mejor seguro. Atendemos presencialmente en Boadilla del Monte 
                  y por videollamada en toda la Comunidad de Madrid.
                </p>
                <a 
                  href={wCotiza}
                  className="inline-flex items-center gap-3 bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors shadow-lg shadow-emerald-600/20"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Escríbenos por WhatsApp
                </a>
                <p className="text-sm text-slate-500 mt-4">Respuesta en menos de 30 minutos</p>
              </div>
              
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/rosa_y_sebastian.jpeg"
                    alt="Rosa y Sebastián - Asesores de seguros en Madrid Oeste"
                    width={600}
                    height={500}
                    className="w-full h-auto object-cover"
                    priority
                  />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-emerald-600 text-white px-6 py-3 rounded-full text-sm font-semibold shadow-lg">
                  +10 años de experiencia
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PRUEBA LOCAL */}
        <section className="bg-black text-white py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl text-center">
            <p className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              +1.200 familias protegidas
            </p>
            <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-emerald-400 mt-4">
              En Madrid Oeste y toda la comunidad
            </p>
          </div>
        </section>

        {/* GRID DE ZONAS */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-6xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 text-center mb-4">
              Zonas que atendemos
            </h2>
            <p className="text-slate-600 text-center mb-12 max-w-2xl mx-auto">
              Haz clic en tu zona para ver los seguros disponibles y recibir asesoramiento personalizado.
            </p>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {zonas.map((zona) => (
                <div key={zona.slug} className="group bg-slate-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-slate-100">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={zona.imagen}
                      alt={zona.nombre}
                      width={400}
                      height={300}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-300 w-full h-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-bold text-white">{zona.nombre}</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-slate-600 text-sm mb-4">{zona.desc}</p>
                    <Link 
                      href={`/zonas/${zona.slug}`}
                      className="inline-flex items-center text-emerald-600 font-semibold hover:text-emerald-700 transition-colors"
                    >
                      Ver seguros en {zona.nombre.split(" ")[0]}
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FOTO DEL EQUIPO + CONFIANZA */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/rosa_y_sebastian.jpeg"
                  alt="Rosa y Sebastián Valentín - Tus asesores de confianza"
                  width={600}
                  height={500}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                  Tu equipo de confianza
                </h2>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                  Somos Rosa y Sebastián, Agentes registrados de seguros con más de 10 años de experiencia. 
                  Te ofrecemos asesoramiento personalizado con registro oficial DGSFP.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
                      </svg>
                    </div>
                    <span className="text-slate-700">Sin copagos ocultos ni letra pequeña</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
                      </svg>
                    </div>
                    <span className="text-slate-700">Asesoría gratuita en 30 minutos</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
                      </svg>
                    </div>
                    <span className="text-slate-700">Te acompañamos en todo el proceso</span>
                  </div>
                </div>
                <p className="text-slate-500 mb-8">
                  <span className="font-semibold text-slate-700">Dirección:</span> C. de los Reyes Católicos, 1, Boadilla del Monte, Madrid<br/>
                  <span className="font-semibold text-slate-700">WhatsApp:</span> 603 44 87 65
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="bg-slate-900 text-white py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-4xl text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              ¿Buscas un asesor de seguros en Madrid?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Estamos aquí para ayudarte. Asesoría gratis sin compromiso.
            </p>
            <a 
              href={wCotiza}
              className="inline-flex items-center gap-3 bg-emerald-600 hover:bg-emerald-500 text-white px-10 py-5 rounded-full text-xl font-semibold transition-colors shadow-xl shadow-emerald-600/20"
            >
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Escríbenos por WhatsApp
            </a>
            <p className="text-slate-400 mt-6">wa.me/34603448765</p>
          </div>
        </section>

      </main>
      <Footer />
      <StickyWhatsApp />
    </>
  );
}
