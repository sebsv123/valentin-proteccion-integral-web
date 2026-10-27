import Image from 'next/image';
import { ArrowRight, MessageCircle, Plus } from 'lucide-react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { PremiumReviews } from './premium-reviews';
import { getGoogleReviews, type GoogleReviewsData } from '@/lib/server/google-reviews';
import { buildWhatsAppHref } from '@/lib/products';
import { HealthJourney, CoverageExplorer, ContributionCalculator, HealthProposalForm } from './interactions';
import { questions, googleUrl } from './content';
import s from './styles.module.css';
import { TaxReading } from './brand-art';
import { BodyStudy } from './body-scenes';
import b from './body.module.css';
import { PremiumMotion } from './premium-motion';
import p from './premium.module.css';
import h from './hybrid.module.css';
import localFont from 'next/font/local';
import e from './editorial.module.css';

const heading = localFont({ src: '../../public/fonts/vpi-editorial/manrope.woff2', variable: '--font-editorial-heading', weight: '700 800', display: 'swap' });
const body = localFont({ src: '../../public/fonts/vpi-editorial/dm-sans.woff2', variable: '--font-editorial-body', weight: '400 700', display: 'swap' });

const whatsapp = buildWhatsAppHref('Hola, quiero estudiar un seguro de salud para mi empresa o como autónomo.');
function isValid(data: GoogleReviewsData | null): data is GoogleReviewsData { return Boolean(data && data.rating > 0 && data.rating <= 5 && data.user_ratings_total > 0 && data.reviews?.length); }
async function reviewsData() {
  const direct = await getGoogleReviews();
  if (isValid(direct)) return direct;
  if (process.env.NODE_ENV === 'development') {
    try { const r = await fetch('https://valentinproteccionintegral.com/api/reviews', { cache: 'no-store', signal: AbortSignal.timeout(7000) }); if (r.ok) { const d = await r.json() as GoogleReviewsData; if (isValid(d)) return d; } } catch { /* Only real source data; no static fallback. */ }
  }
  return null;
}
export async function BusinessHealthExperience() {
  const reviews = await reviewsData();
  const schema = { '@context': 'https://schema.org', '@graph': [{ '@type': 'WebPage', '@id': 'https://valentinproteccionintegral.com/empresas/salud#webpage', name: 'Salud para pymes y autónomos | VPI', url: 'https://valentinproteccionintegral.com/empresas/salud', inLanguage: 'es' }, { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://valentinproteccionintegral.com' }, { '@type': 'ListItem', position: 2, name: 'Empresas', item: 'https://valentinproteccionintegral.com/empresas' }, { '@type': 'ListItem', position: 3, name: 'Salud', item: 'https://valentinproteccionintegral.com/empresas/salud' }] }, { '@type': 'FAQPage', mainEntity: questions.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) }] };
  return <div className={s.page}>
    <a className={s.skip} href="#salud-contenido">Ir al contenido de salud para empresas</a><Header />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }} />
    <HealthJourney><PremiumMotion><main id="salud-contenido" tabIndex={-1} className={`${p.premium} ${h.hybrid} ${e.editorial} ${heading.variable} ${body.variable}`}>
      <section className={`${e.chapter} ${e.hero}`} aria-labelledby="health-title" data-health-hero>
        <div className={e.heroTop}><p className={e.eyebrow}>SEGURO DE SALUD · PYMES Y AUTÓNOMOS</p><h1 id="health-title">Cuida a tu equipo.<br /><span>Elige con criterio.</span></h1></div>
        <div className={e.heroScene}>
          <div className={e.heroCopy}><p className={e.lead}>Un seguro de salud que encaje con vosotros. VPI te ayuda a entender las opciones y decidir qué merece la pena contratar.</p><a className={e.primary} href="#solicitar-estudio" data-health-cta="hero">Quiero estudiar mi caso <ArrowRight size={22} aria-hidden="true" /></a><p className={e.micro}>Empezamos por cuántos sois y qué queréis cubrir.</p><a className={e.secondary} href="#beneficios">Qué puede aportar a tu equipo <span aria-hidden="true">↓</span></a></div>
          <figure className={e.heroPhoto}><Image src="/images/business-health-hybrid/team-everyday.webp" alt="Dos profesionales colaboran en un espacio de trabajo luminoso. Fotografía representativa de biblioteca." width={1800} height={1183} sizes="(max-width: 650px) 100vw, 65vw" loading="eager" fetchPriority="high" /><figcaption>Cada equipo tiene su forma de trabajar.<span>Fotografía representativa · Ketut Subiyanto / Pexels</span></figcaption></figure>
          <div className={e.brandLine} aria-hidden="true"><svg viewBox="0 0 200 160" fill="none"><path d="M5 130C28 130 12 20 70 26C118 32 63 149 129 137C164 131 151 57 191 55" stroke="currentColor" strokeWidth="5" strokeLinecap="round" /><path d="m172 42 20 12-8 22" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" /></svg></div>
        </div>
        <div className={e.heroEnd}><span>Para ti, si trabajas por tu cuenta. Para vosotros, si ya sois un equipo.</span><span aria-hidden="true">01 / ELEGIR BIEN EMPIEZA AQUÍ</span></div>
      </section>
      <section className={`${b.section} ${b.benefits}`} id="beneficios" aria-labelledby="benefits-title"><div className={b.shell}>
        <div className={b.benefitHead}><div><p className={b.kicker}>UN BENEFICIO QUE EMPIEZA EN LAS PERSONAS</p><h2 id="benefits-title" className={b.title}>Para tu gente.<br /><span>Y para tu empresa.</span></h2></div><p>Una cobertura que el equipo pueda utilizar. Una decisión que tú puedas entender.</p></div>
        <div className={b.benefitScene}><figure className={b.teamPhoto}><Image src="/images/business-health-hybrid/team-human-moment.webp" alt="Un equipo comparte un momento de trabajo en un espacio luminoso; fotografía representativa de biblioteca" width={1600} height={1067} sizes="(max-width: 767px) 100vw, 65vw" /><figcaption>Fotografía representativa · Tima Miroshnichenko / Pexels</figcaption></figure>
          <div className={b.benefitNotes}><div><small>PARA EL EQUIPO</small><h3>Saber dónde acudir.</h3><p>Consultas, especialistas y pruebas, según la modalidad elegida.</p></div><div><small>PARA LA EMPRESA</small><h3>Saber qué está contratando.</h3><p>Cobertura, coste y condiciones, antes de decidir.</p></div></div>
        </div><div className={b.benefitBridge}><p>Autónomos, microequipos y pymes: partimos de vuestra situación.</p><a href="#coberturas">Ahora, el alcance que queréis cubrir. <span aria-hidden="true">↓</span></a></div>
      </div></section>
      <section className={s.coverageSection} id="coberturas" aria-labelledby="coverage-title">
        <div className={s.shell}><div className={s.sectionHeading}><div><p className={s.kicker}>ELIGE EL ALCANCE, NO SOLO LA CUOTA</p><h2 id="coverage-title">Tres formas de cubrir<br />{' '}<em>lo que importa.</em></h2></div><p>Empieza por el alcance. Después revisamos juntos los detalles de cada póliza.</p></div><CoverageExplorer /></div>
      </section>


      <section className={`${b.section} ${b.study}`} id="criterio-vpi" aria-labelledby="guidance-title"><div className={b.shell}>
        <div className={b.studyHead}><div><p className={b.kicker}>EL ESTUDIO VPI</p><h2 id="guidance-title" className={b.title}>Entiende las diferencias.<br /><span>Antes de decidir.</span></h2></div><p>El estudio VPI, en tres momentos.</p></div>
        <BodyStudy />
        <div className={b.studyClosing}><p>El estudio empieza por saber cómo es vuestro equipo.</p><a className={b.primary} href="#solicitar-estudio" data-health-cta="study">Quiero estudiar mi caso <ArrowRight size={20} aria-hidden="true" /></a></div>
      </div></section>
      <section className={`${b.section} ${b.finance}`} id="aportacion" aria-labelledby="finance-title"><div className={b.shell}>
        <div className={b.financeHead}><div><p className={b.kicker}>CÓMO PLANTEAR LA APORTACIÓN</p><h2 id="finance-title" className={b.title}>Un coste conocido.<br /><span>Vuestra forma de repartirlo.</span></h2></div><p>Explora cuánto asumiría la empresa y cuánto el trabajador. Solo necesitas una prima que ya conozcas.</p></div>
        <div className={b.financeExperience}><ContributionCalculator /></div>
        <details className={b.moneyDisclosure}><summary>Cómo puede pagarse <span aria-hidden="true">+</span></summary><div className={b.financeModels} aria-label="Formas de aportación">
          <details name="vpi-funding-model"><summary><h3>Beneficio social</h3><span>Aporta la empresa</span></summary><p>La empresa asume la prima como beneficio para el equipo.</p></details>
          <details name="vpi-funding-model"><summary><h3>Retribución flexible</h3><span>Parte del salario bruto</span></summary><p>El trabajador destina voluntariamente parte de su salario bruto, mediante el acuerdo correspondiente.</p></details>
          <details name="vpi-funding-model"><summary><h3>Aportación compartida</h3><span>Empresa y trabajador</span></summary><p>La empresa aporta una parte y el trabajador completa el resto, si la solución lo permite.</p></details>
        </div></details>
        <details className={b.moneyDisclosure}><summary>Qué necesitamos para estudiar una prima real <span aria-hidden="true">+</span></summary><p>Personas y edades, provincia, cobertura, copagos y fecha de inicio. No hay una tarifa única para todas las empresas.</p></details>
        <details className={b.moneyDisclosure} data-finance-legal><summary>Fiscalidad: qué conviene revisar <span aria-hidden="true">+</span></summary><div className={b.financeLegal}><div className={p.financeLegal}><div className={`${s.shell} ${s.taxArea}`} id="fiscalidad"><div className={s.taxHeading}><p className={s.kicker}>Y SOBRE LA FISCALIDAD…</p><p>Primero, una cobertura que encaje.<br />{' '}<strong>Después, el tratamiento fiscal que corresponda.</strong></p></div><div className={s.taxDetails}><details><summary>Empresa y trabajador <Plus size={18} aria-hidden="true" /></summary><TaxReading kind="empresa" /><dl className={s.taxLimits}><div><dt>Por persona elegible</dt><dd>500 €<span>/ año</span></dd></div><div><dt>Con discapacidad</dt><dd>1.500 €<span>/ año</span></dd></div></dl><p className={s.taxLimitNote}>Límites de prima sujetos a requisitos; no son importes de ahorro.</p><p>En régimen común, las primas pagadas por la empresa pueden quedar exentas de IRPF como retribución en especie si cumplen los requisitos del artículo 42.3.c de la Ley del IRPF. El límite es de 500 € anuales por cada persona elegible y de 1.500 € si tiene discapacidad. Se contempla al trabajador, su cónyuge y descendientes según los requisitos legales. El exceso constituye retribución en especie.</p><p>Son límites de prima, no cantidades de ahorro garantizado. La instrumentación laboral y el tratamiento para la empresa deben validarse con su asesoría.</p><a href="https://www.boe.es/buscar/act.php?id=BOE-A-2006-20764#a42" target="_blank" rel="noreferrer">Consultar artículo 42 en el BOE ↗</a></details><details id="autonomos"><summary>Si trabajas por tu cuenta <Plus size={18} aria-hidden="true" /></summary><TaxReading kind="autonomo" /><dl className={s.taxLimits}><div><dt>Por persona elegible</dt><dd>500 €<span>/ año</span></dd></div><div><dt>Con discapacidad</dt><dd>1.500 €<span>/ año</span></dd></div></dl><p className={s.taxLimitNote}>Límites de gasto deducible sujetos a requisitos; no son una devolución.</p><p>En estimación directa, el artículo 30.2.5.ª permite considerar determinadas primas de enfermedad para el contribuyente, su cónyuge e hijos menores de 25 años que convivan con él. El límite es de 500 € por persona elegible, o 1.500 € para cada una con discapacidad, sujeto a requisitos y circunstancias.</p><p>Una deducción de gasto no equivale a una devolución ni reduce la cuota euro por euro. VPI no presta asesoramiento fiscal individual ni presenta declaraciones.</p><a href="https://www.boe.es/buscar/act.php?id=BOE-A-2006-20764#a30" target="_blank" rel="noreferrer">Consultar artículo 30 en el BOE ↗</a></details><p className={s.taxFoot}>Información general de régimen común. Los territorios forales pueden establecer otras reglas. Revisa la aplicación con tu asesoría fiscal y laboral.</p></div></div></div></div></details>
      </div></section>
      <section className={`${b.section} ${b.trust}`} id="personas-vpi" aria-labelledby="human-title"><div className={b.shell}>
        <div className={b.trustScene}><div className={b.trustHeading}><p className={b.kicker}>TU INTERLOCUCIÓN EN VPI</p><h2 id="human-title" className={b.title}>Aquí tienes a Rosa.<br /><span>Y a Sebastián.</span></h2></div>
          <figure className={b.portrait}><Image src="/images/rosa_y_sebastian.jpeg" alt="Rosa y Sebastián, responsables de Valentín Protección Integral" width={896} height={1195} sizes="(max-width: 767px) 85vw, 490px" /><figcaption>Rosa y Sebastián · Valentín Protección Integral</figcaption></figure>
          <div className={b.trustCopy}><p>Puedes preguntar por una condición, revisar una propuesta o entender el siguiente paso.</p><p>Para elegir y para las dudas que aparezcan después. Con nombres, apellidos y una forma directa de contactar.</p></div>
          <div className={b.trustActions}><a className={b.primary} href={whatsapp} target="_blank" rel="noreferrer" data-health-cta="team-whatsapp">Hablar con VPI <ArrowRight size={20} aria-hidden="true" /></a><a href="/sobre-nosotros">Conoce al equipo ↗</a></div>
          <div className={b.googleMoment}>{reviews ? <PremiumReviews data={reviews} /> : <a className={b.textLink} href={googleUrl} target="_blank" rel="noreferrer">Leer las opiniones en Google ↗</a>}</div>
        </div>
      </div></section>
      <section className={`${b.section} ${b.conversation}`} id="solicitar-estudio" aria-labelledby="proposal-title"><div className={b.shell}>
        <div className={b.contactHead}><div><p className={b.kicker}>EMPEZAMOS POR VUESTRO EQUIPO</p><h2 id="proposal-title" className={b.title}>Cuéntanos cómo<br /><span>es tu equipo.</span></h2></div><p>Para empezar: quiénes sois, cuántos sois y qué queréis cubrir.</p></div>
        <div className={b.contactScene}><div className={b.contactGuide}><h3 className={b.guideTitle}>Qué ocurre después</h3><ol><li><span>01</span>Revisamos tu información.</li><li><span>02</span>Hablamos para completar lo necesario.</li><li><span>03</span>Te explicamos opciones y condiciones antes de decidir.</li></ol><a className={b.textLink} href={whatsapp} target="_blank" rel="noreferrer" data-health-cta="form-whatsapp"><MessageCircle size={18} aria-hidden="true" />También puedes escribirnos</a><svg className={b.contactMark} viewBox="0 0 200 160" fill="none" aria-hidden="true"><path d="M5 130C28 130 12 20 70 26C118 32 63 149 129 137C164 131 151 57 191 55" stroke="currentColor" strokeWidth="5" strokeLinecap="round" /><path d="m172 42 20 12-8 22" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" /></svg></div><div className={b.formSurface}><HealthProposalForm /></div></div>
        <p className={b.privacyNote}>Sin documentación médica en esta primera consulta. Tus datos se utilizan para responder a tu solicitud.</p>
        <details className={b.faq}><summary><span id="faq-title">¿Te queda alguna duda?</span><Plus size={20} aria-hidden="true" /></summary><section className={b.faqList} aria-labelledby="faq-title">{questions.map(([q,a])=><details key={q}><summary><h3>{q}</h3><Plus size={18} aria-hidden="true" /></summary><p>{a}</p></details>)}</section></details>
      </div></section>
    </main></PremiumMotion></HealthJourney><Footer />
  </div>;
}
