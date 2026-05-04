import type { Metadata } from 'next';
import Image from 'next/image';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { StickyWhatsApp } from '@/components/sticky-whatsapp';
import { buildWhatsAppHref } from '@/lib/products';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import { WhatsAppButton } from '@/components/whatsapp-button';
import GuaranteeBadge from '@/components/GuaranteeBadge';
import GarantiasSection from '@/components/GarantiasSection';
import GoogleReviewsWidget from '@/components/GoogleReviewsWidget';
import { Sparkles, CheckCircle2, MapPin, Building2, Stethoscope, Home, Dog, Heart, Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Seguros en Pozuelo de Alarcón — Mediador Independiente | Valentín Protección Integral',
  description: 'Asesor de seguros en Pozuelo de Alarcón. Salud, vida, dental y mascotas sin copagos. Mediador independiente con +10 años. Consulta gratis.',
  keywords: ['seguros Pozuelo de Alarcón', 'seguro salud Pozuelo', 'mediador seguros Pozuelo de Alarcón', 'seguro medico privado Pozuelo'],
  alternates: { canonical: 'https://valentinproteccionintegral.com/zonas/pozuelo-de-alarcon' },
  openGraph: {
    title: 'Seguros en Pozuelo de Alarcón — Mediador Independiente | Valentín Protección Integral',
    description: 'Asesor de seguros en Pozuelo de Alarcón. Salud, vida, dental y mascotas sin copagos. Mediador independiente con +10 años. Consulta gratis.',
    url: 'https://valentinproteccionintegral.com/zonas/pozuelo-de-alarcon',
    siteName: 'Valentín Protección Integral',
    locale: 'es_ES',
    type: 'website',
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Valentín Protección Integral - Seguros Pozuelo de Alarcón',
  telephone: '+34603448765',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Pozuelo de Alarcón',
    addressRegion: 'Madrid',
    addressCountry: 'ES',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 40.435,
    longitude: -3.8142,
  },
  areaServed: ['Pozuelo de Alarcón', 'Majadahonda', 'Boadilla del Monte', 'Las Rozas', 'Madrid'],
  description: 'Mediador de seguros independiente en Pozuelo de Alarcón. Salud, vida, dental, mascotas.',
};

export const dynamic = 'force-static';

export default function PozueloPage() {
  const wCotiza = buildWhatsAppHref('Hola, soy de Pozuelo de Alarcón y necesito información sobre seguros.');

  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Inicio', url: '/' }, { name: 'Zonas', url: '/zonas' }, { name: 'Pozuelo de Alarcón', url: '/zonas/pozuelo-de-alarcon' }]} />
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <Header />
      <main className='min-h-screen bg-white'>
        {/* HERO UBER — Mapa local style */}
        <section className='py-16 lg:py-24'>
          <div className='container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-6xl'>
            <div className='grid lg:grid-cols-2 gap-12 items-center'>
              {/* Left: Content */}
              <div>
                {/* Guarantee Badge */}
                <div className='mb-6'>
                  <GuaranteeBadge type='zonas' />
                </div>

                {/* H1 Uber style — 52px bold */}
                <h1 className='text-[40px] sm:text-[48px] lg:text-[52px] font-bold text-black leading-[1.23] mb-4'>
                  Seguros en Pozuelo de Alarcón:
                  <br />
                  <span className='text-[#4b4b4b]'>Mediador Independiente</span>
                </h1>

                {/* Subhead */}
                <p className='text-xl text-[#4b4b4b] leading-relaxed mb-8 max-w-md'>
                  En Pozuelo las familias merecen seguros a medida. No vendemos una marca: buscamos lo mejor para ti entre todas las compañías.
                </p>

                {/* CTAs Uber — pill 999px */}
                <div className='flex flex-wrap gap-4 mb-8'>
                  <WhatsAppButton href={wCotiza} location='pozuelo-hero' className='group inline-flex items-center gap-2 bg-black hover:bg-[#333] text-white px-6 py-3 rounded-full text-base font-medium transition-colors'>
                    WhatsApp Pozuelo
                  </WhatsAppButton>
                  <a
                    href='tel:603448765'
                    className='inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full text-base font-medium border border-[#efefef] hover:bg-[#e2e2e2] transition-colors'
                  >
                    <Phone className='w-5 h-5' />
                    Llamar
                  </a>
                </div>

                {/* Trust pills */}
                <div className='flex flex-wrap gap-3'>
                  <span className='inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#efefef] text-black text-sm'>
                    <CheckCircle2 className='w-4 h-4' />
                    Respuesta en 30min
                  </span>
                  <span className='inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#efefef] text-black text-sm'>
                    <Heart className='w-4 h-4' />
                    Conocemos la zona
                  </span>
                </div>
              </div>

              {/* Right: Map image */}
              <div className='relative'>
                <div className='relative rounded-xl overflow-hidden shadow-[rgba(0,0,0,0.12)_0px_4px_16px_0px]'>
                  <Image
                    src='/images/zonas/pozuelo-de-alarcon.webp'
                    alt='Pozuelo de Alarcón, Madrid Oeste'
                    width={600}
                    height={450}
                    className='w-full h-auto object-cover object-top'
                    priority
                  />
                  {/* Location badge bottom-left */}
                  <div className='absolute bottom-4 left-4'>
                    <div className='inline-flex items-center gap-2 rounded-full bg-white/95 backdrop-blur px-4 py-2 shadow-lg'>
                      <MapPin className='w-4 h-4 text-black' />
                      <span className='text-sm font-bold text-black'>Pozuelo de Alarcón</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* LOCAL PROOF — Uber cards dark */}
        <section className='py-16 bg-black text-white'>
          <div className='container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl'>
            <p className='text-sm uppercase tracking-wider text-[#afafaf] mb-4'>POZUELO DE ALARCÓN, MADRID OESTE</p>
            <p className='text-lg text-[#afafaf] mb-12 max-w-2xl'>
              Pozuelo tiene una de las rentas más altas de España. Tus seguros deben estar diseñados para ese nivel de vida, no para una media que no te representa.
            </p>

            <div className='grid md:grid-cols-3 gap-6'>
              {[
                { icon: Building2, title: 'Perfil premium', desc: 'Familias con necesidades de salud privada, patrimonio que proteger y calidad de vida que mantener.' },
                { icon: Stethoscope, title: 'Clínicas de referencia', desc: 'Acceso a Clínica Ruber, Hospital Montepríncipe y toda la red privada de Madrid Oeste.' },
                { icon: Sparkles, title: 'Sin letras pequeñas', desc: 'Te explicamos cada cláusula antes de firmar. Transparencia total, siempre.' },
              ].map((item, i) => (
                <div key={i} className='rounded-xl p-6 border border-[#333]'>
                  <div className='w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mb-4'>
                    <item.icon className='w-5 h-5 text-white' />
                  </div>
                  <h3 className='text-xl font-bold mb-2'>{item.title}</h3>
                  <p className='text-[#afafaf]'>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* POPULARES POZUELO — Uber grid */}
        <section className='py-16'>
          <div className='container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl'>
            <h2 className='text-[36px] font-bold text-black leading-[1.22] text-center mb-12'>Populares en Pozuelo</h2>

            <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
              {[
                { icon: Stethoscope, title: 'Salud premium', desc: 'Sin copagos, acceso inmediato.' },
                { icon: Home, title: 'Vida familiar', desc: 'Protege tu patrimonio en Pozuelo.' },
                { icon: Dog, title: 'Mascotas', desc: 'Veterinarios de referencia en zona.' },
                { icon: Heart, title: 'Decesos', desc: 'Tranquilidad para toda la familia.' },
              ].map((item, i) => (
                <div key={i} className='rounded-xl p-5 shadow-[rgba(0,0,0,0.12)_0px_4px_16px_0px] hover:shadow-[rgba(0,0,0,0.16)_0px_4px_20px_0px] transition-shadow'>
                  <div className='w-10 h-10 rounded-lg bg-[#efefef] flex items-center justify-center mb-3'>
                    <item.icon className='w-5 h-5 text-black' />
                  </div>
                  <h3 className='text-base font-bold text-black mb-1'>{item.title}</h3>
                  <p className='text-sm text-[#4b4b4b]'>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* EQUIPO LOCAL */}
        <section className='py-16 bg-[#efefef]'>
          <div className='container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl'>
            <div className='grid lg:grid-cols-2 gap-12 items-center'>
              <div className='relative rounded-xl overflow-hidden shadow-[rgba(0,0,0,0.12)_0px_4px_16px_0px]'>
                <Image
                  src='/images/rosa_y_sebastian.jpeg'
                  alt='Rosa Valentín · Asesora en Pozuelo de Alarcón'
                  width={500}
                  height={500}
                  className='w-full h-auto object-cover object-[center_20%]'
                  priority
                  style={{ aspectRatio: '1/1' }}
                />
              </div>
              <div>
                <div className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-black text-sm mb-6 shadow-sm'>
                  <MapPin className='w-4 h-4' />
                  Atendemos Pozuelo
                </div>
                <h2 className='text-[36px] font-bold text-black leading-[1.22] mb-4'>Rosa Valentín</h2>
                <p className='text-lg text-[#4b4b4b] mb-6'>
                  Tu mediadora en Pozuelo de Alarcón. Conozco las necesidades de las familias de la zona porque las asesoro cada día.
                </p>
                <div className='space-y-3 mb-8'>
                  <div className='flex items-center gap-3 text-[#4b4b4b]'>
                    <MapPin className='w-5 h-5 text-black' />
                    <span>Pozuelo de Alarcón, Madrid Oeste</span>
                  </div>
                  <div className='flex items-center gap-3 text-[#4b4b4b]'>
                    <Phone className='w-5 h-5 text-black' />
                    <span>603 44 87 65</span>
                  </div>
                </div>
                <div className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black text-white text-sm'>
                  <CheckCircle2 className='w-4 h-4' />
                  DGSFP: C012479234434D
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROCESO LOCAL */}
        <section className='py-16'>
          <div className='container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl'>
            <h2 className='text-[36px] font-bold text-black leading-[1.22] text-center mb-12'>Proceso local</h2>

            <div className='grid md:grid-cols-3 gap-8'>
              {[
                { num: '1', title: 'WhatsApp', desc: 'Escribe "Pozuelo" y tu necesidad concreta.' },
                { num: '2', title: 'Análisis', desc: 'Revisamos tu situación y comparamos las mejores opciones del mercado.' },
                { num: '3', title: 'Sin sorpresas', desc: 'Contrato claro, sin permanencia. Si algo falla, lo resolvemos.' },
              ].map((step, i) => (
                <div key={i} className='text-center'>
                  <div className='w-12 h-12 rounded-full bg-black text-white flex items-center justify-center text-lg font-bold mx-auto mb-4'>{step.num}</div>
                  <h3 className='text-xl font-bold text-black mb-2'>{step.title}</h3>
                  <p className='text-base text-[#4b4b4b]'>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA + MAPA */}
        <section className='py-16 bg-black text-white'>
          <div className='container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl'>
            <div className='grid lg:grid-cols-2 gap-12 items-center'>
              {/* Left: CTA */}
              <div className='text-center lg:text-left'>
                <h2 className='text-[36px] sm:text-[48px] font-bold leading-[1.22] mb-4'>Tu mediador de seguros en Pozuelo</h2>
                <p className='text-xl text-[#afafaf] mb-8'>Independientes. Sin comisiones ocultas. Sin permanencia.</p>
                <WhatsAppButton
                  href={wCotiza}
                  location='pozuelo-cta-final'
                  className='group inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full text-lg font-medium hover:bg-[#e2e2e2] transition-colors'
                >
                  WhatsApp Pozuelo
                </WhatsAppButton>

                {/* Badges */}
                <div className='flex flex-wrap justify-center lg:justify-start gap-3 mt-8'>
                  {['Sin copagos', 'Mediador independiente', 'DGSFP verificado'].map((item, i) => (
                    <div key={i} className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-sm'>
                      <CheckCircle2 className='w-4 h-4' />
                      {item}
                    </div>
                  ))}
                </div>

                <p className='text-sm text-[#afafaf] mt-8'>DGSFP: C012479234434D</p>
              </div>

              {/* Right: Google Maps embed */}
              <div className='relative rounded-xl overflow-hidden shadow-[rgba(0,0,0,0.16)_0px_4px_20px_0px] h-[350px]'>
                <iframe
                  src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3036.5!2d-3.8142!3d40.4350!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd418e123456789%3A0xabcdef1234567890!2sPozuelo%20de%20Alarc%C3%B3n%2C%20Madrid!5e0!3m2!1ses!2ses!4v1234567890123'
                  width='100%'
                  height='100%'
                  style={{ border: 0 }}
                  allowFullScreen
                  loading='lazy'
                  referrerPolicy='no-referrer-when-downgrade'
                  title='Ubicación Pozuelo de Alarcón'
                />
              </div>
            </div>
          </div>
        </section>

        {/* RESEÑAS GOOGLE */}
        <GoogleReviewsWidget title='Opiniones de clientes en Pozuelo de Alarcón' />

        {/* GARANTÍAS PREMIUM */}
        <GarantiasSection brandColor='#10b981' />
      </main>
      <Footer />
      <StickyWhatsApp />
    </>
  );
}
