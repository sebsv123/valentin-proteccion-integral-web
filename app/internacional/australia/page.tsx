import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowDown, ArrowRight, MessageCircle } from 'lucide-react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { buildWhatsAppHref } from '@/lib/products';
import styles from './australia.module.css';

const baseUrl = 'https://valentinproteccionintegral.com';
const imageRoot = '/images/internacional/australia';

export const metadata: Metadata = {
  title: 'Vivir, estudiar y trabajar en Australia | VPI Internacional',
  description: 'Información orientativa sobre las principales rutas para estudiar, trabajar, viajar o establecerte en Australia y cómo preparar tu cobertura antes de salir desde España.',
  alternates: { canonical: `${baseUrl}/internacional/australia` },
  openGraph: {
    title: 'Vivir, estudiar y trabajar en Australia | VPI Internacional',
    description: 'Ordena el motivo de tu viaje, la ruta que estás revisando y la cobertura que necesitas antes de salir desde España.',
    url: `${baseUrl}/internacional/australia`,
    type: 'article',
    images: [{ url: `${imageRoot}/australia-hero-sydney.webp`, width: 1100, height: 1467, alt: 'Ferry y paisaje urbano de Sídney, Australia' }],
  },
  twitter: { card: 'summary_large_image', title: 'Vivir, estudiar y trabajar en Australia', description: 'Principales rutas para ordenar tu llegada a Australia y preparar la cobertura.', images: [`${imageRoot}/australia-hero-sydney.webp`] },
};

const routes = [
  ['01', 'VISITAR', 'Visitas, turismo y determinados viajes de corta duración pueden utilizar rutas distintas según el pasaporte, el propósito del viaje y la elegibilidad.'],
  ['02', 'ESTUDIAR', 'La Student visa 500 es la referencia principal para estudios. Existen además rutas específicas para guardianes y determinados programas de formación.'],
  ['03', 'WORKING HOLIDAY', 'El programa Working Holiday Maker utiliza dos subclases según nacionalidad y elegibilidad, y permite combinar una estancia de vacaciones con trabajo y estudio de corta duración.'],
  ['04', 'TRABAJO CON EMPRESA', 'Cuando existe una empresa que quiere cubrir una posición con un profesional extranjero, pueden entrar en juego rutas patrocinadas temporales o permanentes.'],
  ['05', 'MIGRACIÓN CUALIFICADA', 'Existen rutas basadas en cualificación profesional, invitación, nominación o vinculación regional, según la subclase.'],
  ['06', 'PAREJA Y FAMILIA', 'Las rutas de pareja cambian según la situación, el lugar desde el que se solicita y el tipo de relación.'],
];

const faqs = [
  ['¿Qué visa necesito para irme a Australia?', 'Depende del motivo del viaje, tu perfil y los requisitos aplicables. Esta página resume algunas de las principales familias, pero la elección y preparación de una solicitud debe revisarse sobre tu caso concreto.'],
  ['¿Cuál es la diferencia entre las visas 189, 190 y 491?', 'La 189 es una ruta skilled independiente basada en invitación; la 190 requiere nominación estatal o territorial; y la 491 es provisional y orientada a Australia regional, con requisitos propios.'],
  ['¿Qué diferencia hay entre Working Holiday 417 y Work and Holiday 462?', 'Ambas pertenecen al programa Working Holiday Maker, pero la subclase disponible depende de la nacionalidad y de los requisitos aplicables a cada programa.'],
  ['¿Necesito seguro médico para una Student visa 500?', 'Para la Student visa 500, generalmente se exige OSHC de un proveedor australiano aprobado para el estudiante y los familiares incluidos, salvo excepciones.'],
  ['¿Una póliza internacional española sustituye el OSHC?', 'No debe presentarse una póliza internacional española como sustituto del OSHC cuando este sea obligatorio. Las coberturas adicionales deben estudiarse por separado.'],
  ['¿Qué opciones existen si una empresa australiana quiere contratarme?', 'Pueden existir rutas patrocinadas temporales o permanentes según la posición, la empresa, el perfil y los requisitos aplicables. La parte migratoria debe revisarse profesionalmente.'],
  ['¿Qué rutas existen si mi pareja vive en Australia?', 'Existen distintas rutas según la relación, el lugar desde el que se solicita y las circunstancias del caso. No hay una única vía válida para todas las situaciones.'],
  ['¿La visa 485 permite quedarse después de estudiar?', 'La 485 permite a determinados graduados internacionales vivir, estudiar y trabajar temporalmente en Australia después de sus estudios si cumplen los requisitos del stream correspondiente.'],
  ['¿VPI tramita visas australianas?', 'VPI no presta asesoramiento migratorio australiano. Nuestro trabajo se centra en la parte aseguradora y en ayudarte a distinguir qué necesidades corresponden al seguro y cuáles requieren revisión migratoria profesional.'],
];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className={styles.eyebrow}>{children}</p>;
}

function Photo({ src, alt, className, sizes }: { src: string; alt: string; className: string; sizes: string }) {
  return <div className={className}><Image src={`${imageRoot}/${src}`} alt={alt} fill sizes={sizes} /></div>;
}

function RouteVisas({ number }: { number: string }) {
  if (number === '01') return <div className={styles.routeVisas}><strong className={styles.visaHero}>600</strong><span>601 · 651</span></div>;
  if (number === '02') return <div className={styles.routeVisas}><strong className={styles.visaHero}>500</strong><span>590 · 407</span></div>;
  if (number === '03') return <div className={`${styles.routeVisas} ${styles.visaWorking}`}><strong>417</strong><i>·</i><strong>462</strong></div>;
  if (number === '04') return <div className={`${styles.routeVisas} ${styles.visaSequence}`}><strong>482</strong><i aria-hidden="true" /> <strong>186</strong></div>;
  if (number === '05') return <div className={`${styles.routeVisas} ${styles.visaSkilled}`}><strong>189</strong><strong>190</strong><strong>491<small>REGIONAL</small></strong></div>;
  return <div className={`${styles.routeVisas} ${styles.visaFamily}`}><span><strong>820</strong><i>→</i><strong>801</strong></span><span><strong>309</strong><i>→</i><strong>100</strong></span><strong>300</strong></div>;
}

export default function AustraliaPage() {
  const whatsappHref = buildWhatsAppHref('Hola, quiero ordenar mi situación para Australia con VPI.');
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Vivir, estudiar y trabajar en Australia | VPI Internacional',
    url: `${baseUrl}/internacional/australia`,
    description: metadata.description,
    about: { '@type': 'Country', name: 'Australia' },
    provider: { '@type': 'Organization', name: 'Valentín Protección Integral', url: baseUrl },
    mainEntity: { '@type': 'FAQPage', mainEntity: faqs.map(([question, answer]) => ({ '@type': 'Question', name: question, acceptedAnswer: { '@type': 'Answer', text: answer } })) },
  };

  return (
    <div className={styles.route}>
      <Header />
      <main className={styles.page}>
        <section className={styles.hero} aria-labelledby="australia-title">
            <div className="container-shell">
            <div className={styles.breadcrumb}><Breadcrumbs items={[{ label: 'Inicio', href: '/' }, { label: 'Internacional', href: '/internacional' }, { label: 'Australia' }]} /></div>
            <div className={styles.heroComposition}>
              <div className={styles.heroHeading}>
                <div className={styles.heroIdentity}>
                  <Image src={`${imageRoot}/bandera-australia.jpg`} alt="Bandera de Australia" width={400} height={206} className={styles.flag} priority />
                  <span><strong>AUSTRALIA</strong><small>VPI INTERNACIONAL</small></span>
                </div>
                <div className={styles.heroIndex}><span>MOTIVO</span><i>↓</i><span>RUTA</span><i>↓</i><span>COBERTURA</span></div>
                <h1 id="australia-title"><span>Australia tiene</span><span>muchas formas</span><em>de empezar.</em></h1>
                <div className={styles.heroIntro}><p className={styles.heroLead}>La primera decisión no es qué seguro contratar. Es entender por qué vas.</p><p className={styles.heroDescription}>Estudiar, trabajar, viajar, migrar por tu profesión o reunirte con tu familia pueden llevarte al mismo país por caminos muy distintos. Empezamos por ordenar el escenario antes de hablar de cobertura.</p></div>
                <div className={styles.heroRouteIndex} aria-label="Rutas principales"><span>ESTUDIAR</span><i>·</i><span>TRABAJAR</span><i>·</i><span>VIAJAR</span><i>·</i><span>FAMILIA</span></div>
                <div className={styles.heroActions}><a href="#rutas" className={styles.primaryCta}>Entender mi situación <ArrowRight aria-hidden="true" /></a><a href={whatsappHref} className={styles.textCta}><MessageCircle aria-hidden="true" /> Hablar con nosotros <span>↗</span></a></div>
                <span className={styles.heroChapter} aria-hidden="true">01</span>
              </div>
              <div className={styles.heroPhotoWrap}>
                <div className={styles.heroPhotoFrame}><Photo src="australia-hero-sydney.webp" alt="Ferry y paisaje urbano de Sídney, Australia" className={styles.heroPhoto} sizes="(max-width: 900px) 100vw, 60vw" /></div>
                <div className={styles.photoLabel}><span>SYDNEY · AUSTRALIA</span><small>33.8688° S · 151.2093° E</small></div>
              </div>
            </div>
          </div>
        </section>

        <section id="rutas" className={styles.routesSection} aria-labelledby="routes-title">
          <div className="container-shell"><div className={styles.sectionHeading}><div><Eyebrow>ANTES DE HABLAR DE COBERTURA</Eyebrow><h2 id="routes-title">Tu motivo cambia la ruta.</h2></div><div><p>Australia organiza su sistema migratorio en caminos distintos según qué quieres hacer, tu situación personal y los requisitos que cumplas.</p><p className={styles.disclaimer}>La información de esta página es orientativa y debe comprobarse con los requisitos oficiales vigentes.</p></div></div><div className={styles.routeList}>{routes.map(([number, title, copy]) => <article className={styles.routeRow} data-episode={number} key={title}><div className={styles.routeMeta}><span className={styles.routeNumber}>{number}</span><h3>{title}</h3></div><RouteVisas number={number} /><p>{copy}</p></article>)}</div></div>
        </section>

        <section className={styles.coverageSection} aria-labelledby="coverage-title">
          <div className="container-shell">
            <div className={styles.coverageMapLayer} aria-hidden="true">
              <Image src="/images/internacional/australia/australia-cartographic-overlay.svg" alt="" width={1600} height={900} className={styles.decisionMap} />
            </div>
            <div className={styles.coverageGrid}>
              <div className={styles.coverageEditorial}>
                <Eyebrow>LA PARTE ASEGURADORA</Eyebrow>
                <h2 id="coverage-title" className={styles.coverageTitle}><span>Primero entendemos</span><span>el escenario.</span><em>Después hablamos</em><em>de cobertura.</em></h2>
                <p className={styles.coverageCopy}>No recomendamos una solución internacional sin entender antes el tipo de estancia y los requisitos que afectan al caso. Una cosa es el requisito migratorio y otra las coberturas adicionales que pueden tener sentido para tu viaje o estancia.</p>
                <div className={styles.coverageCtaRow}><a href="#contacto" className={styles.lightCta}>Contarnos mi caso <ArrowRight aria-hidden="true" /></a><span className={styles.coverageNote}>ANÁLISIS PERSONAL · SIN COMPROMISO</span></div>
              </div>
              <div className={styles.coveragePath}>
                <p className={styles.coveragePathLabel}>TU RUTA, EN TRES DECISIONES</p>
                <div className={styles.coverageQuestions}>
                  <div className={styles.coverageStep}><strong>01</strong><span className={styles.coverageDivider} /><div><h3>¿Por qué vas?</h3><p>ESTUDIO <i>·</i> TRABAJO <i>·</i> VIAJE <i>·</i> FAMILIA</p></div><span className={styles.coverageMarker} /></div>
                  <div className={styles.coverageStep}><strong>02</strong><span className={styles.coverageDivider} /><div><h3>¿Cuánto tiempo estarás?</h3><p>CORTA <i>·</i> TEMPORAL <i>·</i> LARGA ESTANCIA</p></div><span className={styles.coverageMarker} /></div>
                  <div className={styles.coverageStep}><strong>03</strong><span className={styles.coverageDivider} /><div><h3>¿Qué cobertura necesitas realmente?</h3><p>REQUISITO <i>·</i> ASISTENCIA <i>·</i> PROTECCIÓN ADICIONAL</p></div><span className={styles.coverageMarker} /></div>
                </div>
              </div>
            </div>
            <div className={styles.coverageFooter}><span>MOTIVO <i>→</i> DURACIÓN <i>→</i> REQUISITOS <i>→</i> COBERTURA</span></div>
          </div>
        </section>

        <section className={styles.studentSection} aria-labelledby="student-title"><div className="container-shell"><div className={styles.studentGrid}><Photo src="australia-estudiar-campus.webp" alt="Campus universitario en Sídney, Australia" className={styles.studentPhoto} sizes="(max-width: 900px) 100vw, 48vw" /><div className={styles.studentCopy}><span className={styles.giantNumber}>500</span><Eyebrow>STUDENT VISA · 500</Eyebrow><h2 id="student-title">Estudiar en Australia<br /><em>tiene una regla propia.</em></h2><p>Para la Student visa 500, el estudiante y los familiares incluidos deben mantener Overseas Student Health Cover (OSHC) de un proveedor australiano aprobado durante la estancia, salvo que resulte aplicable una excepción.</p><p>Por eso una póliza internacional contratada en España no debe presentarse como sustituto del OSHC cuando este sea obligatorio. Si existen necesidades adicionales antes, durante o después del periodo cubierto, pueden estudiarse por separado.</p><small>Los requisitos pueden cambiar y deben comprobarse siempre en la información oficial aplicable a la solicitud.</small></div></div></div></section>

        <section className={styles.workSection} aria-labelledby="work-title"><div className="container-shell"><div className={styles.workHeader}><div><Eyebrow>TRABAJAR EN AUSTRALIA</Eyebrow><h2 id="work-title">Dos maneras muy distintas<br /><em>de llegar por tu profesión.</em></h2></div><Photo src="australia-trabajo-commuters.webp" alt="Viajeros en una estación de tren de Sídney" className={styles.workPhoto} sizes="(max-width: 760px) 100vw, 30vw" /></div><div className={styles.workBranches}><div className={styles.branch}><span className={styles.branchLabel}>A · UNA EMPRESA TE NECESITA</span><div className={styles.branchLine}><strong>482</strong><span>Skills in Demand</span></div><p>Ruta temporal patrocinada para determinadas posiciones y condiciones.</p><div className={styles.branchLine}><strong>186</strong><span>Employer Nomination Scheme</span></div><p>Ruta permanente basada en nominación empresarial cuando se cumplen los requisitos aplicables.</p></div><div className={styles.branch}><span className={styles.branchLabel}>B · TU PERFIL ENCAJA EN UNA RUTA SKILLED</span><div className={styles.skillNumbers}><div><strong>189</strong><span>Independent</span><p>Ruta permanente basada en invitación para determinados perfiles cualificados.</p></div><div><strong>190</strong><span>Nominated</span><p>Ruta permanente con nominación de un estado o territorio.</p></div><div><strong>491</strong><span>Regional</span><p>Ruta provisional para vivir y trabajar en Australia regional, sujeta a nominación o patrocinio familiar elegible y demás requisitos.</p><small>5 AÑOS · PROVISIONAL</small></div></div></div></div><div className={styles.graduateBridge}><span>DESPUÉS DE ESTUDIAR</span><strong>485</strong><div><b>Temporary Graduate</b><p>Determinados graduados internacionales pueden acceder a una estancia temporal posterior a sus estudios si cumplen los requisitos de la subclase y del stream correspondiente.</p></div></div></div></section>

        <section className={styles.familySection} aria-labelledby="family-title"><div className="container-shell"><div className={styles.familyGrid}><div className={styles.familyHead}><Eyebrow>PAREJA · FAMILIA</Eyebrow><h2 id="family-title">A veces Australia<br />no es donde vas.<br /><em>Es donde ya está alguien.</em></h2></div><div className={styles.familyPhoto}><Image src="/images/internacional/joeyy-lee-H4A30mABrD4-unsplash.jpg" alt="Pareja compartiendo un momento cotidiano en Australia" fill sizes="(max-width: 800px) 100vw, 40vw" style={{ objectFit: 'cover' }} /></div><div className={styles.familyBody}><div className={styles.familyRoutes}><div><strong>300</strong><span>Prospective Marriage</span></div><i>↓</i><div><strong>820 → 801</strong><span>Aplicación de pareja con etapa temporal/permanente asociada a solicitudes desde Australia.</span></div><i>↓</i><div><strong>309 → 100</strong><span>Ruta provisional/permanente asociada a solicitudes iniciadas desde fuera de Australia.</span></div></div><p className={styles.familyNote}>Las rutas de pareja cambian según la situación, el lugar desde el que se solicita y el tipo de relación.</p></div></div></div></section>

        <section className={styles.migrationSection} aria-labelledby="migration-title"><div className="container-shell"><Eyebrow>ASESORAMIENTO MIGRATORIO</Eyebrow><h2 id="migration-title">La parte migratoria necesita<br /><em>el profesional adecuado.</em></h2><div className={styles.migrationGrid}><p>Esta página sirve para orientarte sobre las grandes familias de visa y ordenar las preguntas iniciales. Cuando un caso requiere asistencia migratoria, esa parte debe ser revisada por un profesional habilitado para prestarla en Australia.</p><p>VPI se centra en la preparación aseguradora y en ayudarte a separar los requisitos migratorios de las coberturas adicionales que puedan tener sentido.</p></div><a href="#contacto" className={styles.primaryCta}>Contarnos mi situación <ArrowRight aria-hidden="true" /></a></div></section>

        <section className={styles.lifeSection} aria-labelledby="life-title"><div className="container-shell"><Eyebrow>VIVIR AUSTRALIA</Eyebrow><h2 id="life-title">El visado abre la puerta.<br /><em>Después viene el día a día.</em></h2><div className={styles.lifeGrid}><figure className={styles.lifeMove}><Photo src="australia-moverte-ferry.webp" alt="Ferry y trayecto cotidiano en Australia" className={styles.lifePhoto} sizes="(max-width: 760px) 100vw, 48vw" /><figcaption><b>01 · MOVERTE</b><span>Ferries, trenes y grandes distancias forman parte de una rutina muy distinta según la ciudad en la que empieces.</span></figcaption></figure><figure className={styles.lifeCity}><Photo src="australia-ciudad-melbourne.webp" alt="Escena urbana en Melbourne, Australia" className={styles.lifePhoto} sizes="(max-width: 760px) 100vw, 42vw" /><figcaption><b>02 · HACER CIUDAD</b><span>Sydney no es Melbourne, y Melbourne no es Brisbane. Elegir dónde vivir también cambia cómo se siente Australia.</span></figcaption></figure><figure className={styles.lifeBreathe}><Photo src="australia-respirar-bondi.webp" alt="Vida cotidiana junto a la costa en Sídney" className={styles.lifePhoto} sizes="(max-width: 760px) 100vw, 32vw" /><figcaption><b>03 · RESPIRAR</b><span>En algunas ciudades, costa, parques y vida urbana comparten el mismo mapa cotidiano.</span></figcaption></figure></div></div></section>

        <section className={styles.processSection} aria-labelledby="process-title"><div className="container-shell"><Eyebrow>DE ESPAÑA A AUSTRALIA</Eyebrow><h2 id="process-title">Antes del vuelo,<br /><em>hay decisiones que conviene ordenar.</em></h2><div className={styles.processGrid}>{[['01', 'POR QUÉ VAS', 'Estudiar, trabajar, viajar, pareja o migración cualificada parten de necesidades distintas.'], ['02', 'QUÉ RUTA ESTÁS REVISANDO', 'Identificamos qué escenario afecta al seguro y qué cuestiones necesitan revisión migratoria profesional.'], ['03', 'QUÉ COBERTURA NECESITAS', 'Separamos requisitos obligatorios de coberturas adicionales que puedan tener sentido.'], ['04', 'PREPARAMOS LA SALIDA', 'Cuando sabemos qué necesitas, podemos organizar la parte aseguradora con mucha más precisión.']].map(([number, title, copy]) => <div key={number} className={styles.processStep}><span>{number}</span><h3>{title}</h3><p>{copy}</p></div>)}</div></div></section>

        <section className={styles.faqSection} aria-labelledby="faq-title"><div className="container-shell"><Eyebrow>PREGUNTAS QUE CONVIENE HACERSE</Eyebrow><h2 id="faq-title">Australia cambia según<br /><em>la pregunta con la que empiezas.</em></h2><div className={styles.faqList}>{faqs.map(([question, answer]) => <details key={question}><summary>{question}<ArrowDown aria-hidden="true" /></summary><p>{answer}</p></details>)}</div><p className={styles.sourceNote}>Información orientativa basada en las principales categorías publicadas por el Department of Home Affairs de Australia. Los requisitos, condiciones y denominaciones pueden cambiar. Comprueba siempre la información oficial vigente y, cuando corresponda, consulta a un profesional habilitado para prestar asistencia migratoria.</p></div></section>

        <section id="contacto" className={styles.contactSection} aria-labelledby="contact-title"><div className="container-shell"><Image src={`${imageRoot}/bandera-australia.jpg`} alt="Bandera de Australia" width={400} height={206} className={styles.contactFlag} /><Eyebrow>AUSTRALIA · VPI INTERNACIONAL</Eyebrow><h2 id="contact-title">Cuéntanos por qué vas.<br /><em>El resto empieza a ordenarse desde ahí.</em></h2><p>No necesitamos que conozcas el número de tu visa. Cuéntanos qué quieres hacer en Australia, cuándo imaginas viajar y cuánto tiempo piensas quedarte.</p><div className={styles.contactActions}><a href="#rutas" className={styles.primaryCta}>Contar mi caso <ArrowRight aria-hidden="true" /></a><a href={whatsappHref} className={styles.textCta}><MessageCircle aria-hidden="true" /> Hablar por WhatsApp <span>↗</span></a></div></div></section>
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </div>
  );
}
