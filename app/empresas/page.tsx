import type { Metadata } from 'next';
import Image from 'next/image';
import { ArrowRight, ArrowDown, HeartPulse, ListChecks, SlidersHorizontal, MessageCircle, Star, Calculator, Globe2, ChevronDown } from 'lucide-react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { getGoogleReviews, type GoogleReviewsData } from '@/lib/server/google-reviews';
import { BusinessJourney, DecisionCenter, DigitalExplorer, PageBehavior, ProposalForm } from '@/components/empresas/interactions';
import { AbsencePreview, ContributionTool, EverydayOperations } from '@/components/empresas/commercial-tools';
import ReviewsCarouselWrapper from '@/components/ReviewsCarouselWrapper';
import { sources } from '@/components/empresas/content';
import s from '@/components/empresas/final.module.css';

export const metadata: Metadata = {
  title: 'Seguro de salud para tu equipo, con VPI | Empresas y autónomos',
  description: 'Salud para autónomos, equipos y empresas. Descubre cómo se utiliza, cómo se gestiona y cómo plantear la aportación. Empieza por una conversación con VPI.',
  alternates: { canonical: 'https://valentinproteccionintegral.com/empresas' },
  openGraph: { title: 'Cuida de tu equipo. El seguro, más fácil.', description: 'Salud para tu equipo. Orientación para elegir y un camino para gestionarlo.', url: 'https://valentinproteccionintegral.com/empresas', images: ['/images/business/vpi-business-hero.webp'], type: 'website' },
};
function validReviews(data: GoogleReviewsData | null): data is GoogleReviewsData {
  return Boolean(data && Number.isFinite(data.rating) && data.rating > 0 && data.rating <= 5 && Number.isInteger(data.user_ratings_total) && data.user_ratings_total > 0 && Array.isArray(data.reviews) && data.reviews.length > 0);
}
async function currentReviews() {
  const direct = await getGoogleReviews();
  if (validReviews(direct)) return direct;
  // Existing Home development fallback: live source, never fixtures.
  if (process.env.NODE_ENV === 'development') {
    try {
      const res = await fetch('https://valentinproteccionintegral.com/api/reviews', { cache: 'no-store', signal: AbortSignal.timeout(7000) });
      if (res.ok) { const data: GoogleReviewsData = await res.json(); if (validReviews(data)) return data; }
    } catch { /* No invented rating when the source is unavailable. */ }
  }
  return null;
}
const startSteps = [
  ['Nos cuentas lo que necesitas.', 'Tamaño del equipo, situación actual, zonas y presupuesto orientativo. También si es solo para ti y tu familia.'],
  ['Revisamos las opciones adecuadas.', 'Explicamos diferencias, cuadro médico, límites, carencias y condiciones de las propuestas que podamos distribuir.'],
  ['Decides cobertura y aportación.', 'Acordamos quién se incorpora, qué paga cada parte y cómo se coordina con tu gestión de nómina.'],
  ['Organizamos el inicio.', 'Orientamos con la documentación y la comunicación al equipo. La aseguradora confirma la aceptación y la fecha de efecto.'],
];

export default async function EmpresasPage() {
  const reviews = await currentReviews();
  return <div className={s.page}>
    <a className={s.skipLink} href="#contenido-empresas">Ir al contenido de empresas</a>
    <Header />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@graph': [{ '@type': 'WebPage', '@id': 'https://valentinproteccionintegral.com/empresas#webpage', name: 'Salud para empresas y autónomos | VPI', url: 'https://valentinproteccionintegral.com/empresas', inLanguage: 'es', description: metadata.description }, { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://valentinproteccionintegral.com' }, { '@type': 'ListItem', position: 2, name: 'Empresas', item: 'https://valentinproteccionintegral.com/empresas' }] }] }) }} />
    <BusinessJourney><main id="contenido-empresas" tabIndex={-1}>
      <section className={s.hero} aria-labelledby="empresas-title" data-empresas-hero>
        <div className={s.heroScene}><Image src="/images/business/vpi-business-hero.webp" alt="Equipo trabajando en una oficina moderna junto a Valentín" fill priority sizes="100vw" className={s.heroImage} /></div>
        <div className={s.heroInner}>
          <div className={s.breadcrumb}><Breadcrumbs items={[{ label: 'Inicio', href: '/' }, { label: 'Empresas' }]} /></div>
          <div className={s.heroCopy}>
            <p className={s.eyebrow}>SALUD PARA TU EQUIPO · VPI EMPRESAS</p>
            <h1 id="empresas-title">Cuida de tu equipo.<br />{' '}<em>El seguro,<br />más fácil.</em></h1>
            <p className={s.heroText}>Salud para autónomos y empresas. Te orientamos para elegir y organizar la gestión desde el primer día.</p>
            <div className={s.heroActions}><a className={s.primary} href="#propuesta" data-empresas-event="b2b_cta_clicked" data-location="hero">Hablar de mi empresa <ArrowRight size={18} aria-hidden="true" /></a><a className={s.secondary} href="#experiencia">Ver cómo se utiliza <ArrowDown size={16} aria-hidden="true" /></a></div>
            <p className={s.heroNote}>Para empezar: cuántos sois y si ya tenéis seguro.<br />También si trabajas por tu cuenta.</p>
          </div>
        </div>
      </section>
      <section className={s.earlyTrust} aria-label="Para quién, reputación y equipo VPI">
        <div className={`${s.shell} ${s.trustGrid}`}>
          <p className={s.trustAudience}>Autónomos <span>·</span> Microequipos <span>·</span> Pymes <span>·</span> Empresas</p>
          <a className={s.trustRating} href={sources.google} target="_blank" rel="noreferrer" data-empresas-event="b2b_trust_interaction" data-location="google">{reviews ? <><Star size={16} fill="currentColor" aria-hidden="true" /><strong>{reviews.rating.toLocaleString('es-ES', { minimumFractionDigits: 1 })} / 5</strong><span>Google · {reviews.user_ratings_total} reseñas</span></> : <span>Opiniones de VPI en Google ↗</span>}</a>
          <a href="/sobre-nosotros" className={s.trustPeople} data-empresas-event="b2b_trust_interaction" data-location="team"><MessageCircle size={17} aria-hidden="true" /><span>Rosa y Sebastián <small>Conoce al equipo ↗</small></span></a>
        </div>
      </section>
      <PageBehavior />

      <section className={`${s.section} ${s.valueSection}`} id="valor" aria-labelledby="value-title">
        <div className={s.shell}>
          <div className={s.valueHeading}><p className={s.eyebrow}>UN BENEFICIO PARA EL EQUIPO. UNA DECISIÓN DE NEGOCIO.</p><h2 id="value-title">Que funcione para tu gente.<br />{' '}<em>Y para quien lo gestiona.</em></h2></div>
          <div className={s.outcomes}>
            <article><HeartPulse size={24} strokeWidth={1.5} aria-hidden="true" /><h3>Que sepan dónde acudir.</h3><p>Servicios de salud que puedan utilizar, según la cobertura elegida.</p></article>
            <article><ListChecks size={24} strokeWidth={1.5} aria-hidden="true" /><h3>Que gestionarlo no sea otro trabajo.</h3><p>Altas, cambios y dudas con un camino claro.</p></article>
            <article><SlidersHorizontal size={24} strokeWidth={1.5} aria-hidden="true" /><h3>Que sepas qué estás pagando.</h3><p>Cobertura, aportación y responsabilidades claras antes de decidir.</p></article>
          </div>
        </div>
      </section>

      <section className={`${s.section} ${s.digitalSection}`} id="experiencia" aria-labelledby="digital-title">
        <div className={s.shell}>
          <div className={s.digitalGrid}><div className={s.digitalIntro}><p className={s.eyebrow}>EL SEGURO, EN EL DÍA A DÍA</p><h2 id="digital-title">Así utilizará<br />{' '}tu equipo<br />{' '}<em>su seguro.</em></h2><p>Encontrar un médico. Identificarse. Hacer una gestión. Explora cómo se utilizan los servicios digitales de la aseguradora.</p><p className={s.digitalDisclaimer}>Confirmamos las funciones disponibles en la modalidad que se estudie.</p></div><DigitalExplorer /></div>
          <div className={s.humanLayer}><MessageCircle size={24} aria-hidden="true" /><p><strong>Los canales digitales, para gestionar.</strong><br />VPI, para entender qué necesitas hacer y por dónde seguir.</p><a href="#puesta-en-marcha" className={s.arrowLink}>Así interviene VPI <ArrowRight size={17} aria-hidden="true" /></a></div>
        </div>
      </section>

      <section className={`${s.section} ${s.managementSection}`} id="puesta-en-marcha" aria-labelledby="admin-title">
        <div className={s.shell}>
          <div className={s.splitHeading}><div><p className={s.eyebrow}>FÁCIL DE ENTENDER. ORDENADO PARA GESTIONAR.</p><h2 id="admin-title">Tu equipo cambia.<br />{' '}<em>La gestión tiene un camino.</em></h2></div><p>Con RRHH o sin departamento propio: acordamos quién comunica los cambios, qué documentación hace falta y qué debe confirmar la aseguradora.</p></div>
          <EverydayOperations>
          <div className={s.managementDetails}>
            <details className={s.secondaryDetails}><summary>¿Cómo se pone en marcha? <ChevronDown size={18} aria-hidden="true" /></summary><ol className={s.startSteps}>{startSteps.map(([title, text]) => <li key={title}><strong>{title}</strong><p>{text}</p></li>)}</ol></details>
            <details className={s.secondaryDetails} id="movilidad"><summary><span><Globe2 size={18} aria-hidden="true" /> ¿El equipo viaja o trabaja entre países?</span><ChevronDown size={18} aria-hidden="true" /></summary><div className={s.mobilityContent}><p>Un viaje, una expatriación y empezar a trabajar en España necesitan revisiones distintas.</p><ul><li><strong>Viajes de trabajo y viajeros frecuentes.</strong> Destino, duración y límites de la asistencia.</li><li><strong>Desplazamientos y expatriación.</strong> Residencia, ámbito territorial y necesidad de una solución específica.</li><li><strong>Equipos internacionales en España.</strong> Documentación, uso de servicios y requisitos del caso.</li></ul><p>No asumimos cobertura internacional universal. Se confirma según producto y modalidad.</p><a href="#propuesta" className={s.arrowLink} data-empresas-event="b2b_international_clicked">Incluir movilidad en mi consulta <ArrowRight size={16} aria-hidden="true" /></a></div></details>
          </div>
          </EverydayOperations>
        </div>
      </section>

      <section className={`${s.section} ${s.proofSection}`} id="confianza" aria-labelledby="proof-title">
        <div className={s.shell}><div className={s.proofHeading}><p className={s.eyebrow}>OPINIONES PUBLICADAS EN GOOGLE</p><h2 id="proof-title">La atención, contada<br />{' '}<em>por quien la recibe.</em></h2></div><div className={s.googleProof} aria-label="Opiniones de clientes en Google">{reviews ? <ReviewsCarouselWrapper reviews={reviews.reviews} rating={reviews.rating} user_ratings_total={reviews.user_ratings_total} locale="es" /> : <a href={sources.google} target="_blank" rel="noreferrer" className={s.arrowLink}>Ver las opiniones originales en Google <ArrowRight size={17} aria-hidden="true" /></a>}</div></div>
      </section>

      <section className={`${s.section} ${s.toolsSection}`} id="herramientas" aria-labelledby="tools-title">
        <div className={s.shell}>
          <div className={s.splitHeading}><div><p className={s.eyebrow}>ÚTIL ANTES DE HABLAR</p><h2 id="tools-title">Haz números<br />{' '}<em>antes de decidir.</em></h2></div><p>Dos herramientas para explorar tus propios datos. Sin registro.</p></div>
          <div className={s.toolsGrid}><article className={s.toolEntry}><span className={s.toolNumber}>01 <Calculator size={25} strokeWidth={1.5} aria-hidden="true" /></span><h3>¿Qué representa<br />el absentismo?</h3><p>Estima su coste salarial directo con personas, salario y tasa de absentismo.</p><AbsencePreview /><small>No estima el ahorro que produciría un seguro.</small></article><ContributionTool /></div>
        </div>
      </section>

      <section className={`${s.section} ${s.faqSection}`} id="respuestas" aria-labelledby="answers-title">
        <div className={`${s.shell} ${s.faqGrid}`}><div className={s.faqIntro}><p className={s.eyebrow}>LO QUE CONVIENE SABER</p><h2 id="answers-title">¿Te queda<br />{' '}<em>alguna duda?</em></h2><p>Empieza por estas seis. Las demás siguen aquí cuando quieras profundizar.</p><a href="/empresas/salud" className={s.arrowLink}>Más sobre salud empresarial <ArrowRight size={16} aria-hidden="true" /></a></div><DecisionCenter /></div>
      </section>

      <section className={`${s.section} ${s.proposalSection}`} id="propuesta" aria-labelledby="proposal-title">
        <div className={`${s.shell} ${s.proposalGrid}`}><div className={s.proposalIntro}><p className={s.eyebrow}>EMPECEMOS POR UNA CONVERSACIÓN</p><h2 id="proposal-title">Veamos si tiene sentido<br />{' '}<em>para vuestro caso.</em></h2><p>Cuántas personas sois, si ya tenéis seguro y qué os gustaría mejorar. Ese es el punto de partida.</p><p className={s.existingCover}>¿Ya tenéis salud? Empezamos por lo que queréis mantener y lo que necesitáis revisar. También si es vuestro primer seguro o trabajas por tu cuenta.</p><div className={s.nextSteps}><span>QUÉ OCURRE DESPUÉS</span><ol><li>Revisamos la información que nos envíes.</li><li>Si hace falta completar algo, hablamos contigo.</li><li>Estudiamos las opciones aplicables y te explicamos las condiciones antes de que decidas.</li></ol></div></div><ProposalForm /></div>
      </section>
    </main></BusinessJourney>
    <Footer />
  </div>;
}
