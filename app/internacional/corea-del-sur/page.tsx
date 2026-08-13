import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowDown, ArrowRight, Check, MessageCircle } from 'lucide-react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { buildWhatsAppHref } from '@/lib/products';
import styles from './corea.module.css';

const baseUrl = 'https://valentinproteccionintegral.com';
const imageRoot = '/images/internacional/corea';

export const metadata: Metadata = {
  title: 'Vivir en Corea del Sur | VPI × LandKorea',
  description: 'Prepara tu llegada a Corea del Sur con VPI desde España y LandKorea sobre el terreno: visado, vivienda, settling-in, adaptación y orientación aseguradora.',
  alternates: { canonical: `${baseUrl}/internacional/corea-del-sur` },
  openGraph: {
    title: 'Tu nueva vida en Corea empieza antes de aterrizar',
    description: 'VPI × LandKorea: preparación desde España y apoyo local para vivir, estudiar o trabajar en Corea del Sur.',
    url: `${baseUrl}/internacional/corea-del-sur`,
    type: 'article',
    images: [{ url: `${imageRoot}/corea-metro-vida-cotidiana.webp`, width: 1800, height: 1200, alt: 'Personas viajando en el metro de Corea del Sur' }],
  },
  twitter: { card: 'summary_large_image', title: 'Tu nueva vida en Corea empieza antes de aterrizar', description: 'VPI × LandKorea para preparar tu llegada a Corea del Sur.', images: [`${imageRoot}/corea-metro-vida-cotidiana.webp`] },
};

const faqItems = [
  ['¿Con cuánta antelación debería empezar a preparar mi traslado?', 'Conviene empezar cuando ya conoces el motivo y la duración aproximada del traslado. Así se pueden ordenar a tiempo los documentos, la vivienda, la llegada y las necesidades aseguradoras que dependen de tu situación.'],
  ['¿LandKorea puede ayudarme con el visado?', 'LandKorea puede orientarte sobre el proceso y los aspectos prácticos de tu llegada. Los requisitos y la decisión corresponden a las autoridades competentes, por lo que cada caso debe revisarse con la documentación y el tipo de estancia concretos.'],
  ['¿También puede ayudarme a buscar vivienda?', 'Sí, la vivienda forma parte del apoyo local de LandKorea. El alcance, la disponibilidad y las condiciones se estudian según tu perfil, ciudad y momento del traslado.'],
  ['¿Qué gestiona VPI y qué gestiona LandKorea?', 'VPI prepara contigo la parte aseguradora desde España. LandKorea aporta apoyo local en visado, vivienda, settling-in, familia y adaptación cultural. Coordinamos la conversación para que cada parte tenga claro su siguiente paso.'],
  ['¿Qué seguro necesito para vivir o estudiar en Corea?', 'Depende de la duración, el motivo del viaje, los requisitos de tu estancia y la forma en la que vas a vivir allí. Primero revisamos esas variables y después estudiamos qué solución puede encajar, sin afirmar una cobertura única para todos los casos.'],
  ['¿También podéis trabajar con empresas que trasladan profesionales?', 'Sí. Puede estudiarse apoyo para relocation corporativo y creación de empresas según el caso, el número de personas y las necesidades de instalación.'],
];

const areas = ['Visa & Immigration', 'Housing & Real Estate', 'Settling-In', 'Family & Education', 'Cultural Orientation', 'Business Setup'];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className={styles.eyebrow}>{children}</p>;
}

export default function CoreaDelSurPage() {
  const whatsappHref = buildWhatsAppHref('Hola, quiero preparar mi llegada a Corea del Sur con VPI y LandKorea.');
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Vivir en Corea del Sur | VPI × LandKorea',
    url: `${baseUrl}/internacional/corea-del-sur`,
    description: metadata.description,
    about: { '@type': 'Country', name: 'Corea del Sur' },
    provider: { '@type': 'Organization', name: 'Valentín Protección Integral', url: baseUrl },
    mainEntity: {
      '@type': 'FAQPage',
      mainEntity: faqItems.map(([question, answer]) => ({ '@type': 'Question', name: question, acceptedAnswer: { '@type': 'Answer', text: answer } })),
    },
  };

  return (
    <div className={styles.route}>
      <Header />
      <main className={styles.page}>
        <section className={styles.heroNew} aria-labelledby="korea-title">
          <div className={`container-shell ${styles.heroInner}`}>
            <div className={styles.heroBreadcrumb}>
              <Breadcrumbs items={[{ label: 'Inicio', href: '/' }, { label: 'Internacional', href: '/internacional' }, { label: 'Corea del Sur' }]} />
            </div>
            <div className={styles.heroGrid}>
              <div className={styles.heroNewContent}>
                <div className={styles.destinationMark}>
                  <Image src={`${imageRoot}/bandera-corea-del-sur.svg`} alt="Bandera de Corea del Sur" width={48} height={32} priority />
                  <span><strong>COREA DEL SUR</strong><small>VPI INTERNACIONAL</small></span>
                </div>
                <h1 id="korea-title"><span>Tu nueva vida</span><em>en Corea</em><small>empieza antes</small><small>de aterrizar</small></h1>
                <p className={styles.heroNewCopy}>VPI prepara contigo la parte aseguradora antes de salir. En Corea, LandKorea aporta el conocimiento local para ayudarte con tu llegada, vivienda, visado y primeros pasos.</p>
                <div className={styles.heroNewActions}>
                  <a href="#contacto" className={styles.heroPrimary}>Preparar mi llegada <ArrowRight aria-hidden="true" /></a>
                  <a href={whatsappHref} className={styles.heroSecondary}><MessageCircle aria-hidden="true" /> Hablar con nosotros <span aria-hidden="true">↗</span></a>
                </div>
              </div>
              <figure className={styles.heroMedia}>
                <Image src={`${imageRoot}/corea-metro-vida-cotidiana.webp`} alt="Pasajeros dentro de un metro coreano" fill priority sizes="(max-width: 760px) 100vw, 64vw" />
              </figure>
            </div>
            <div className={styles.partnerNew}>
              <strong>VPI <i>×</i> LandKorea</strong>
              <span>España → Corea del Sur</span>
              <small>Preparación aseguradora · Relocation local</small>
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.teams}`} aria-labelledby="teams-title">
          <div className="container-shell">
            <SectionLabel>ESPAÑA → COREA DEL SUR</SectionLabel>
            <h2 id="teams-title">Dos equipos.<br /><em>Un mismo traslado.</em></h2>
            <div className={styles.teamGrid}>
              <div className={styles.teamVpi}><span className={styles.teamKicker}>DESDE ESPAÑA</span><h3>VPI</h3><ul><li><strong>Seguro</strong><span>La cobertura adecuada para tu estancia.</span></li><li><strong>Documentación</strong><span>Lo que conviene llevar resuelto antes de viajar.</span></li><li><strong>Preparación</strong><span>Llegar sabiendo qué está cubierto y qué queda por organizar.</span></li></ul></div>
              <div className={styles.coordination}><span /><div className={styles.relayNode}><i className={styles.relayMark} aria-hidden="true">×</i><strong>EL RELEVO</strong><small>España → Corea</small></div><span /></div>
              <div className={styles.teamLand}><span className={styles.teamKicker}>YA EN COREA</span><h3>LandKorea</h3><ul><li><strong>Visado</strong><span>Apoyo con procesos migratorios según cada caso.</span></li><li><strong>Vivienda</strong><span>Búsqueda y acompañamiento en la instalación.</span></li><li><strong>Settling-in</strong><span>Primeros pasos para que Corea funcione como tu día a día.</span></li></ul></div>
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.landKorea}`} aria-labelledby="landkorea-title">
          <div className="container-shell">
            <div className={styles.splitHeading}><div><SectionLabel>LANDKOREA · APOYO LOCAL EN COREA</SectionLabel><h2 id="landkorea-title">Hay decisiones que se entienden mejor<br /><em>cuando alguien conoce Corea desde dentro</em></h2></div><p>LandKorea trabaja sobre el terreno con personas, familias y profesionales que necesitan preparar su llegada y resolver aspectos prácticos de su instalación en Corea del Sur.</p></div>
            <div className={styles.bands}>
              {[['01', 'VISADO E INMIGRACIÓN', 'Ordenar el proceso, la documentación y las preguntas que aparecen antes de llegar.'], ['02', 'VIVIENDA', 'Buscar un lugar posible para empezar, con contexto local y expectativas realistas.'], ['03', 'LOS PRIMEROS DÍAS', 'Resolver lo cotidiano para que tu llegada tenga menos fricción y más estructura.'], ['04', 'FAMILIA Y VIDA EN COREA', 'Acompañar la adaptación cuando el traslado incluye rutinas, colegio o nuevas relaciones.']].map(([number, title, copy]) => <div className={styles.band} key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p><ArrowRight aria-hidden="true" /></div>)}
            </div>
            <p className={styles.note}>También pueden estudiarse necesidades relacionadas con creación de empresas y relocation corporativo según el caso.</p>
          </div>
        </section>

        <section className={styles.cultural} aria-labelledby="culture-title">
          <div className={styles.culturalImage}><Image src={`${imageRoot}/corea-hanbok-cultura.webp`} alt="Personas con hanbok caminando por una calle de Corea del Sur" fill sizes="100vw" /></div>
          <div className={styles.culturalOverlay}><SectionLabel>VIVIR COREA</SectionLabel><h2 id="culture-title">Instalarte no es solamente saber dónde dormir.<br /><em>Es empezar a entender dónde estás.</em></h2><p>Los barrios, el transporte, la comida, las normas sociales y las pequeñas rutinas forman parte del aterrizaje tanto como los documentos.</p></div>
        </section>

        <section className={`${styles.section} ${styles.everyday}`} aria-labelledby="everyday-title">
          <div className="container-shell"><SectionLabel>EL DÍA A DÍA</SectionLabel><h2 id="everyday-title">Poco a poco,<br /><em>Corea empieza a hacerse tuya</em></h2>
            <div className={styles.triptych}>
              <figure className={styles.sceneMove}><div><Image src={`${imageRoot}/corea-metro-estacion.webp`} alt="Personas entrando en una estación de metro en Corea" fill sizes="(max-width: 800px) 100vw, 30vw" /></div><figcaption><b>MOVERTE</b><span>Entender los trayectos y la movilidad hace que la ciudad empiece a tener otra escala.</span></figcaption></figure>
              <figure className={styles.sceneLive}><div><Image src={`${imageRoot}/corea-barrio-calle.webp`} alt="Calle de barrio en Corea del Sur" fill sizes="(max-width: 800px) 100vw, 30vw" /></div><figcaption><b>HACER VIDA</b><span>Un barrio deja de ser un punto del mapa cuando empiezas a reconocer lo que ocurre alrededor.</span></figcaption></figure>
              <figure className={styles.sceneCulture}><div><Image src={`${imageRoot}/corea-mercado-gastronomia.webp`} alt="Vendedora preparando comida en un mercado coreano" fill sizes="(max-width: 800px) 100vw, 30vw" /></div><figcaption><b>ENTENDER LA CULTURA</b><span>Corea también se descubre en sus mercados, su comida y las pequeñas escenas de la vida cotidiana.</span></figcaption></figure>
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.specialists}`} aria-labelledby="specialists-title">
          <div className="container-shell"><SectionLabel>RELOCATION SPECIALISTS · SOUTH KOREA</SectionLabel><h2 id="specialists-title">Apoyo sobre el terreno<br /><em>cuando el traslado empieza a hacerse real</em></h2><p className={styles.specialistCopy}>LandKorea aporta la experiencia local necesaria para acompañar aspectos de visado, vivienda, settling-in, familia y adaptación cultural según cada caso.</p><div className={styles.areaList}>{areas.map((area, index) => <span key={area}><i>0{index + 1}</i>{area}</span>)}</div></div>
        </section>

        <section className={`${styles.section} ${styles.insurance}`} aria-labelledby="insurance-title">
          <div className="container-shell"><SectionLabel>ANTES DE VIAJAR</SectionLabel><h2 id="insurance-title">Antes de recomendarte una cobertura,<br /><em>necesitamos entender cómo vas a vivir Corea</em></h2><div className={styles.questions}>{[['01', '¿CUÁNTO TIEMPO?', 'Duración'], ['02', '¿POR QUÉ VAS?', 'Estudios · trabajo · traslado'], ['03', '¿QUÉ NECESITAS CUBRIR?', 'Asistencia sanitaria · viaje · internacional']].map(([number, question, answer]) => <div key={number}><span>{number}</span><h3>{question}</h3><p>{answer}</p></div>)}</div><p className={styles.insuranceClose}>Con esa información estudiamos qué solución aseguradora puede encajar y qué requisitos concretos conviene revisar antes de viajar.</p><Link href="/contacto" className={styles.primaryCta}>Consultar mi situación <ArrowRight aria-hidden="true" /></Link></div>
        </section>

        <section className={`${styles.section} ${styles.timeline}`} aria-labelledby="timeline-title">
          <div className="container-shell"><SectionLabel>DE ESPAÑA A COREA</SectionLabel><h2 id="timeline-title">El traslado empieza antes del vuelo<br /><em>y continúa después de aterrizar</em></h2><div className={styles.timelineLine}>{[['01', 'ANTES DE COMPRAR EL BILLETE'], ['02', 'PREPARAMOS LA SALIDA'], ['03', 'ATERRIZAS EN COREA'], ['04', 'EMPIEZAS A HACER VIDA']].map(([number, title], index) => <div key={number} className={index === 2 ? styles.timelineActive : ''}><span>{number}</span><b>{title}</b></div>)}</div></div>
        </section>

        <section className={`${styles.section} ${styles.faq}`} aria-labelledby="faq-title">
          <div className="container-shell"><SectionLabel>PREGUNTAS QUE CONVIENE HACERSE</SectionLabel><h2 id="faq-title">Antes de dar el paso,<br /><em>hablemos de lo concreto</em></h2><div className={styles.faqList}>{faqItems.map(([question, answer]) => <details key={question}><summary>{question}<ArrowDown aria-hidden="true" /></summary><p>{answer}</p></details>)}</div></div>
        </section>

        <section id="contacto" className={styles.contact} aria-labelledby="contact-title"><div className="container-shell"><SectionLabel>COREA DEL SUR · VPI × LANDKOREA</SectionLabel><h2 id="contact-title">Quizá todavía no tengas todas las respuestas.<br /><em>Para empezar, basta con saber que te vas.</em></h2><p>Cuéntanos cuándo viajas, por qué vas y qué necesitas preparar. Ordenamos contigo los siguientes pasos antes de que Corea deje de ser un plan y empiece a convertirse en tu día a día.</p><div className={styles.contactActions}><a href={whatsappHref} className={styles.primaryCta}>Preparar mi llegada <ArrowRight aria-hidden="true" /></a><a href={whatsappHref} className={styles.contactGhost}><MessageCircle aria-hidden="true" /> Hablar por WhatsApp</a></div></div></section>
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </div>
  );
}
