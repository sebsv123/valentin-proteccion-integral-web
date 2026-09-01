import type { Metadata } from 'next';
import Image from 'next/image';
import { ArrowDown, ArrowRight, Check } from 'lucide-react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { WhatsAppIcon } from '@/components/ui/whatsapp-icon';
import { buildWhatsAppHref } from '@/lib/products';
import styles from './corea.module.css';
import { getKoreaMetadata, koreaFaq, koreaTranslations, type KoreaLocale } from './corea-content';

const baseUrl = 'https://valentinproteccionintegral.com';
const imageRoot = '/images/internacional/corea';

export const metadata: Metadata = getKoreaMetadata('es'); /* Spanish route default */
/*
const legacyMetadata: Metadata = {
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
}; */

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

export function KoreaPageView({ locale }: { locale: KoreaLocale }) {
  const t = (text: string) => locale === 'en' ? koreaTranslations[text] ?? text : text;
  const whatsappHref = buildWhatsAppHref(locale === 'en' ? 'Hello, I would like to prepare my arrival in South Korea with VPI and LandKorea.' : 'Hola, quiero preparar mi llegada a Corea del Sur con VPI y LandKorea.');
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: t('Vivir en Corea del Sur | VPI × LandKorea'),
    url: locale === 'en' ? `${baseUrl}/en/international/south-korea` : `${baseUrl}/internacional/corea-del-sur`,
    description: getKoreaMetadata(locale).description,
    about: { '@type': 'Country', name: locale === 'en' ? 'South Korea' : 'Corea del Sur' },
    provider: { '@type': 'Organization', name: 'Valentín Protección Integral', url: baseUrl },
    mainEntity: {
      '@type': 'FAQPage',
      mainEntity: (locale === 'en' ? koreaFaq : faqItems).map(([question, answer]) => ({ '@type': 'Question', name: locale === 'en' ? question : question, acceptedAnswer: { '@type': 'Answer', text: answer } })),
    },
  };

  return (
    <div className={styles.route}>
      <Header />
      <main className={styles.page}>
        <section className={styles.heroNew} aria-labelledby="korea-title">
          <div className={`container-shell ${styles.heroInner}`}>
            <div className={styles.heroBreadcrumb}>
              <Breadcrumbs items={[{ label: t('Inicio'), href: locale === 'en' ? '/en' : '/' }, { label: t('Internacional'), href: locale === 'en' ? '/en/international' : '/internacional' }, { label: t('Corea del Sur') }]} />
            </div>
            <div className={styles.heroGrid}>
              <div className={styles.heroNewContent}>
                <div className={styles.destinationMark}>
                  <Image src={`${imageRoot}/bandera-corea-del-sur.svg`} alt={t('Bandera de Corea del Sur')} width={48} height={32} priority />
                  <span><strong>{t('COREA DEL SUR')}</strong><small>{t('VPI INTERNACIONAL')}</small></span>
                </div>
                <h1 id="korea-title"><span>{t('Tu nueva vida')}</span><em>{t('en Corea')}</em><small>{t('empieza antes')}</small><small>{t('de aterrizar')}</small></h1>
                <p className={styles.heroNewCopy}>{t('VPI prepara contigo la parte aseguradora antes de salir. En Corea, LandKorea aporta el conocimiento local para ayudarte con tu llegada, vivienda, visado y primeros pasos.')}</p>
                <div className={styles.heroNewActions}>
                  <a href="#contacto" className={styles.heroPrimary}>{t('Preparar mi llegada')} <ArrowRight aria-hidden="true" /></a>
                  <a href={whatsappHref} className={styles.heroSecondary}><WhatsAppIcon aria-hidden="true" /> {t('Hablar con nosotros')} <span aria-hidden="true">↗</span></a>
                </div>
              </div>
              <figure className={styles.heroMedia}>
                <Image src={`${imageRoot}/corea-metro-vida-cotidiana.webp`} alt={t('Pasajeros dentro de un metro coreano')} fill priority sizes="(max-width: 760px) 100vw, 64vw" />
              </figure>
            </div>
            <div className={styles.partnerNew}>
              <strong>VPI <i>×</i> LandKorea</strong>
              <span>{t('España → Corea del Sur')}</span>
              <small>{t('Preparación aseguradora · Relocation local')}</small>
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.teams}`} aria-labelledby="teams-title">
          <div className="container-shell">
            <SectionLabel>{t('ESPAÑA → COREA DEL SUR')}</SectionLabel>
            <h2 id="teams-title">{t('Dos equipos.')}<br /><em>{t('Un mismo traslado.')}</em></h2>
            <div className={styles.teamGrid}>
              <div className={styles.teamVpi}><span className={styles.teamKicker}>{t('DESDE ESPAÑA')}</span><h3>VPI</h3><ul><li><strong>{t('Seguro')}</strong><span>{t('La cobertura adecuada para tu estancia.')}</span></li><li><strong>{t('Documentación')}</strong><span>{t('Lo que conviene llevar resuelto antes de viajar.')}</span></li><li><strong>{t('Preparación')}</strong><span>{t('Llegar sabiendo qué está cubierto y qué queda por organizar.')}</span></li></ul></div>
              <div className={styles.coordination}><span /><div className={styles.relayNode}><i className={styles.relayMark} aria-hidden="true">×</i><strong>{t('EL RELEVO')}</strong><small>{t('España → Corea')}</small></div><span /></div>
              <div className={styles.teamLand}><span className={styles.teamKicker}>{t('YA EN COREA')}</span><h3>LandKorea</h3><ul><li><strong>{t('Visado')}</strong><span>{t('Apoyo con procesos migratorios según cada caso.')}</span></li><li><strong>{t('Vivienda')}</strong><span>{t('Búsqueda y acompañamiento en la instalación.')}</span></li><li><strong>{t('Settling-in')}</strong><span>{t('Primeros pasos para que Corea funcione como tu día a día.')}</span></li></ul></div>
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.landKorea}`} aria-labelledby="landkorea-title">
          <div className="container-shell">
            <div className={styles.splitHeading}><div><SectionLabel>{t('LANDKOREA · APOYO LOCAL EN COREA')}</SectionLabel><h2 id="landkorea-title">{t('Hay decisiones que se entienden mejor')}<br /><em>{t('cuando alguien conoce Corea desde dentro')}</em></h2></div><p>{t('LandKorea trabaja sobre el terreno con personas, familias y profesionales que necesitan preparar su llegada y resolver aspectos prácticos de su instalación en Corea del Sur.')}</p></div>
            <div className={styles.bands}>
              {[['01', 'VISADO E INMIGRACIÓN', 'Ordenar el proceso, la documentación y las preguntas que aparecen antes de llegar.'], ['02', 'VIVIENDA', 'Buscar un lugar posible para empezar, con contexto local y expectativas realistas.'], ['03', 'LOS PRIMEROS DÍAS', 'Resolver lo cotidiano para que tu llegada tenga menos fricción y más estructura.'], ['04', 'FAMILIA Y VIDA EN COREA', 'Acompañar la adaptación cuando el traslado incluye rutinas, colegio o nuevas relaciones.']].map(([number, title, copy]) => <div className={styles.band} key={number}><span>{number}</span><h3>{t(title)}</h3><p>{t(copy)}</p><ArrowRight aria-hidden="true" /></div>)}
            </div>
            <p className={styles.note}>{t('También pueden estudiarse necesidades relacionadas con creación de empresas y relocation corporativo según el caso.')}</p>
          </div>
        </section>

        <section className={styles.cultural} aria-labelledby="culture-title">
          <div className={styles.culturalImage}><Image src={`${imageRoot}/corea-hanbok-cultura.webp`} alt="People wearing hanbok walking along a street in South Korea" fill sizes="100vw" /></div>
          <div className={styles.culturalOverlay}><SectionLabel>{t('VIVIR COREA')}</SectionLabel><h2 id="culture-title">{t('Instalarte no es solamente saber dónde dormir.')}<br /><em>{t('Es empezar a entender dónde estás.')}</em></h2><p>{t('Los barrios, el transporte, la comida, las normas sociales y las pequeñas rutinas forman parte del aterrizaje tanto como los documentos.')}</p></div>
        </section>

        <section className={`${styles.section} ${styles.everyday}`} aria-labelledby="everyday-title">
          <div className="container-shell"><SectionLabel>{t('EL DÍA A DÍA')}</SectionLabel><h2 id="everyday-title">{t('Poco a poco,')}<br /><em>{t('Corea empieza a hacerse tuya')}</em></h2>
            <div className={styles.triptych}>
              <figure className={styles.sceneMove}><div><Image src={`${imageRoot}/corea-metro-estacion.webp`} alt="People entering a metro station in Korea" fill sizes="(max-width: 800px) 100vw, 30vw" /></div><figcaption><b>{t('MOVERTE')}</b><span>{t('Entender los trayectos y la movilidad hace que la ciudad empiece a tener otra escala.')}</span></figcaption></figure>
              <figure className={styles.sceneLive}><div><Image src={`${imageRoot}/corea-barrio-calle.webp`} alt={t('Calle de barrio en Corea del Sur')} fill sizes="(max-width: 800px) 100vw, 30vw" /></div><figcaption><b>{t('HACER VIDA')}</b><span>{t('Un barrio deja de ser un punto del mapa cuando empiezas a reconocer lo que ocurre alrededor.')}</span></figcaption></figure>
              <figure className={styles.sceneCulture}><div><Image src={`${imageRoot}/corea-mercado-gastronomia.webp`} alt="Vendor preparing food in a Korean market" fill sizes="(max-width: 800px) 100vw, 30vw" /></div><figcaption><b>{t('ENTENDER LA CULTURA')}</b><span>{t('Corea también se descubre en sus mercados, su comida y las pequeñas escenas de la vida cotidiana.')}</span></figcaption></figure>
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.specialists}`} aria-labelledby="specialists-title">
          <div className="container-shell"><SectionLabel>{t('RELOCATION SPECIALISTS · SOUTH KOREA')}</SectionLabel><h2 id="specialists-title">{t('Apoyo sobre el terreno')}<br /><em>{t('cuando el traslado empieza a hacerse real')}</em></h2><p className={styles.specialistCopy}>{t('LandKorea aporta la experiencia local necesaria para acompañar aspectos de visado, vivienda, settling-in, familia y adaptación cultural según cada caso.')}</p><div className={styles.areaList}>{areas.map((area, index) => <span key={area}><i>0{index + 1}</i>{area}</span>)}</div></div>
        </section>

        <section className={`${styles.section} ${styles.insurance}`} aria-labelledby="insurance-title">
          <div className="container-shell"><SectionLabel>{t('ANTES DE VIAJAR')}</SectionLabel><h2 id="insurance-title">{t('Antes de recomendarte una cobertura,')}<br /><em>{t('necesitamos entender cómo vas a vivir Corea')}</em></h2><div className={styles.questions}>{[['01', '¿CUÁNTO TIEMPO?', 'Duración'], ['02', '¿POR QUÉ VAS?', 'Estudios · trabajo · traslado'], ['03', '¿QUÉ NECESITAS CUBRIR?', 'Asistencia sanitaria · viaje · internacional']].map(([number, question, answer]) => <div key={number}><span>{number}</span><h3>{t(question)}</h3><p>{t(answer)}</p></div>)}</div><p className={styles.insuranceClose}>{t('Con esa información estudiamos qué solución aseguradora puede encajar y qué requisitos concretos conviene revisar antes de viajar.')}</p><a href={locale === 'en' ? '/en/contact' : '/contacto'} className={styles.primaryCta}>{t('Consultar mi situación')} <ArrowRight aria-hidden="true" /></a></div>
        </section>

        <section className={`${styles.section} ${styles.timeline}`} aria-labelledby="timeline-title">
          <div className="container-shell"><SectionLabel>{t('DE ESPAÑA A COREA')}</SectionLabel><h2 id="timeline-title">{t('El traslado empieza antes del vuelo')}<br /><em>{t('y continúa después de aterrizar')}</em></h2><div className={styles.timelineLine}>{[['01', 'ANTES DE COMPRAR EL BILLETE'], ['02', 'PREPARAMOS LA SALIDA'], ['03', 'ATERRIZAS EN COREA'], ['04', 'EMPIEZAS A HACER VIDA']].map(([number, title], index) => <div key={number} className={index === 2 ? styles.timelineActive : ''}><span>{number}</span><b>{t(title)}</b></div>)}</div></div>
        </section>

        <section className={`${styles.section} ${styles.faq}`} aria-labelledby="faq-title">
          <div className="container-shell"><SectionLabel>{t('PREGUNTAS QUE CONVIENE HACERSE')}</SectionLabel><h2 id="faq-title">{t('Antes de dar el paso,')}<br /><em>{t('hablemos de lo concreto')}</em></h2><div className={styles.faqList}>{(locale === 'en' ? koreaFaq : faqItems).map(([question, answer]) => <details key={question}><summary>{locale === 'en' ? question : question}<ArrowDown aria-hidden="true" /></summary><p>{answer}</p></details>)}</div></div>
        </section>

        <section id="contacto" className={styles.contact} aria-labelledby="contact-title"><div className="container-shell"><SectionLabel>{t('COREA DEL SUR · VPI × LANDKOREA')}</SectionLabel><h2 id="contact-title">{t('Quizá todavía no tengas todas las respuestas.')}<br /><em>{t('Para empezar, basta con saber que te vas.')}</em></h2><p>{t('Cuéntanos cuándo viajas, por qué vas y qué necesitas preparar. Ordenamos contigo los siguientes pasos antes de que Corea deje de ser un plan y empiece a convertirse en tu día a día.')}</p><div className={styles.contactActions}><a href={whatsappHref} className={styles.primaryCta}>{t('Preparar mi llegada')} <ArrowRight aria-hidden="true" /></a><a href={whatsappHref} className={styles.contactGhost}><WhatsAppIcon aria-hidden="true" /> {t('Hablar por WhatsApp')}</a></div></div></section>
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </div>
  );
}

export default function CoreaDelSurPage() { return <KoreaPageView locale="es" />; }
