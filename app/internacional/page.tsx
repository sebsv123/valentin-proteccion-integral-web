import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Globe2 } from 'lucide-react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { buildWhatsAppHref } from '@/lib/products';
import styles from './internacional.module.css';

const baseUrl = 'https://valentinproteccionintegral.com';
const upcomingDestinations = ['Japón', 'Estados Unidos', 'Canadá', 'Ecuador', 'Venezuela', 'México'];

export const metadata: Metadata = {
  title: 'VPI Internacional | Preparar tu llegada a nuevos destinos',
  description: 'VPI conecta la orientación aseguradora desde España con especialistas locales para preparar tu llegada y tu vida en Corea del Sur y Australia.',
  alternates: { canonical: `${baseUrl}/internacional` },
  openGraph: {
    title: 'VPI Internacional | Preparar tu llegada a nuevos destinos',
    description: 'Una red de orientación desde España y apoyo local para empezar bien en tu próximo destino.',
    url: `${baseUrl}/internacional`,
    type: 'website',
    images: [{ url: '/images/internacional/corea/corea-barrio-vida-local.webp', width: 1400, height: 933, alt: 'Vida urbana en Corea del Sur' }],
  },
  twitter: { card: 'summary_large_image', title: 'VPI Internacional', description: 'Preparar tu llegada a Corea del Sur con VPI y LandKorea.', images: ['/images/internacional/corea/corea-barrio-vida-local.webp'] },
};

export default function InternacionalPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'VPI Internacional',
    url: `${baseUrl}/internacional`,
    description: metadata.description,
    isPartOf: { '@type': 'WebSite', name: 'Valentín Protección Integral', url: baseUrl },
    mainEntity: { '@type': 'Place', name: 'Corea del Sur', url: `${baseUrl}/internacional/corea-del-sur` },
  };

  return (
    <div className={styles.route}>
      <Header />
      <main className={styles.page}>
        <div className="container-shell">
          <Breadcrumbs items={[{ label: 'Inicio', href: '/' }, { label: 'Internacional' }]} />
        </div>

        <section className={styles.hubHero} aria-labelledby="international-title">
          <div className="container-shell">
            <div className={styles.heroGrid}>
              <div className={styles.heroCopy}>
                <p className={styles.eyebrow}>VPI INTERNACIONAL</p>
                <h1 id="international-title">Cuando el destino cambia,<br /><em>también cambia</em> lo que necesitas alrededor</h1>
                <p className={styles.lead}>VPI Internacional conecta nuestra orientación aseguradora desde España con especialistas locales que conocen el país al que llegas.</p>
                <a className={styles.textCta} href="#destinos">Descubrir destinos <ArrowRight aria-hidden="true" /></a>
              </div>
              <div className={styles.heroImage}>
                <Image src="/images/internacional/corea/corea-barrio-vida-local.webp" alt="Una calle de barrio en Corea del Sur" fill priority sizes="(max-width: 900px) 100vw, 52vw" />
                <span className={styles.imageNote}>VPI × colaboradores locales</span>
              </div>
            </div>
          </div>
        </section>

        <section id="destinos" className={styles.destinationSection} aria-labelledby="destination-title">
          <div className="container-shell">
            <div className={styles.sectionIntro}>
              <p className={styles.eyebrow}>UN DESTINO, UNA FORMA DE LLEGAR</p>
              <h2 id="destination-title">Corea del Sur, con la parte importante ya en movimiento.</h2>
            </div>
            <Link href="/internacional/corea-del-sur" className={styles.destinationFeature}>
              <div className={styles.destinationPhoto}>
                <Image src="/images/internacional/corea/corea-hanbok-cultura.webp" alt="Personas con hanbok en una calle de Corea del Sur" fill sizes="(max-width: 900px) 100vw, 48vw" />
              </div>
              <div className={styles.destinationCopy}>
                <div className={styles.flagLine}>
                  <Image src="/images/internacional/corea/bandera-corea-del-sur.svg" alt="Bandera de Corea del Sur" width={42} height={28} />
                  <span>COREA DEL SUR</span>
                </div>
                <h3>Instalarte en Corea<br /><em>con apoyo local</em> y visión aseguradora</h3>
                <p>VPI prepara contigo la parte aseguradora desde España y LandKorea aporta experiencia local para ayudarte a afrontar la llegada, la vivienda, los primeros pasos y la adaptación a Corea.</p>
                <span className={styles.destinationCta}>Descubrir Corea del Sur <ArrowRight aria-hidden="true" /></span>
              </div>
            </Link>
            <Link href="/internacional/australia" className={`${styles.destinationFeature} ${styles.destinationFeatureAustralia}`}>
              <div className={styles.destinationPhoto}>
                <Image src="/images/internacional/australia/australia-hero-sydney.webp" alt="Ferry y paisaje urbano de Sídney, Australia" fill sizes="(max-width: 900px) 100vw, 48vw" />
              </div>
              <div className={styles.destinationCopy}>
                <div className={styles.flagLine}><Image src="/images/internacional/australia/bandera-australia.jpg" alt="Bandera de Australia" width={42} height={28} /><span>AUSTRALIA</span></div>
                <h3>Australia tiene<br /><em>muchas formas de empezar</em></h3>
                <p>Estudiar, trabajar, viajar o reunirte con tu familia pueden llevarte al mismo país por caminos muy distintos. Empieza por ordenar el motivo, la ruta y la cobertura.</p>
                <span className={styles.destinationCta}>Explorar Australia <ArrowRight aria-hidden="true" /></span>
              </div>
            </Link>
            <Link href="/internacional/india" className={`${styles.destinationFeature} ${styles.destinationFeatureIndia}`}>
              <div className={styles.destinationPhoto}>
                <Image src="/images/internacional/india/india-hero-estudiantes.jpg" alt="Estudiantes consultando material académico en una biblioteca en India" fill sizes="(max-width: 900px) 100vw, 48vw" />
              </div>
              <div className={styles.destinationCopy}>
                <div className={styles.flagLine}><i className={`${styles.flagMark} ${styles.flagMarkIndia}`} aria-hidden="true" /><span>INDIA</span></div>
                <h3>Tu camino de India<br /><em>a España</em> empieza mucho antes del vuelo</h3>
                <p>Aara te acompaña desde India en la elección académica, la solicitud y el visado. VPI completa el recorrido desde España con apoyo especializado en seguro médico y llegada.</p>
                <span className={styles.destinationCta}>Explorar India <ArrowRight aria-hidden="true" /></span>
              </div>
            </Link>
            <Link href="/internacional/peru" className={`${styles.destinationFeature} ${styles.destinationFeaturePeru}`}>
              <div className={styles.destinationPhoto}>
                <Image src="/images/internacional/peru/peru-hero-lima.jpg" alt="Costa de Lima, Perú" fill sizes="(max-width: 900px) 100vw, 48vw" />
              </div>
              <div className={styles.destinationCopy}>
                <div className={styles.flagLine}><i className={`${styles.flagMark} ${styles.flagMarkPeru}`} aria-hidden="true" /><span>PERÚ</span></div>
                <h3>Perú puede ser<br /><em>el inicio.</em> O el destino.</h3>
                <p>Visados, documentación y asesoría para moverte entre Perú, España y los principales destinos del mundo.</p>
                <span className={styles.destinationCta}>Explorar Perú <ArrowRight aria-hidden="true" /></span>
              </div>
            </Link>
          </div>
        </section>

        <section className={styles.growingSection} aria-labelledby="upcoming-title">
          <div className={styles.upcomingInner}>
            <p className={styles.eyebrow}>PRÓXIMAMENTE</p>
            <h2 id="upcoming-title">Nuevos destinos están tomando forma.</h2>
            <p className={styles.upcomingLead}>Estamos ampliando VPI Internacional con nuevos países y colaboradores, manteniendo el mismo criterio: preparar desde España lo que tenga sentido y sumar conocimiento local allí donde realmente aporte valor.</p>
            <div className={styles.upcomingList} aria-label="Próximos destinos">
              {upcomingDestinations.map((destination, index) => <div className={styles.upcomingDestination} key={destination}><span>0{index + 1}</span><strong>{destination}</strong></div>)}
            </div>
          </div>
        </section>

        <section className={styles.growingSection} aria-labelledby="growing-title">
          <div className="container-shell">
            <Globe2 aria-hidden="true" className={styles.growingIcon} />
            <p className={styles.eyebrow}>UNA RED QUE CRECE CON CRITERIO</p>
            <h2 id="growing-title">Incorporaremos nuevos destinos cuando exista un colaborador local y una propuesta que realmente aporte valor a quien viaja.</h2>
          </div>
        </section>
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </div>
  );
}
