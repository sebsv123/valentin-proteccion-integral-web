import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight, ArrowUpRight, BadgeHelp, Building2, ClipboardCheck, CreditCard,
  FileCheck2, HeartPulse, MapPin, MessageCircle, Phone, Search, ShieldCheck,
} from 'lucide-react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { IsfasInteractions } from '@/components/mutualistas/isfas-interactions';
import { buildWhatsAppHref, site } from '@/lib/products';
import { siteConfig } from '@/lib/site-config';
import { isfasFaq, isfasGuide } from '@/lib/mutualistas/isfas';
import styles from './page.module.css';

const siteOrigin = 'https://valentinproteccionintegral.com';
const canonical = `${siteOrigin}${isfasGuide.path}`;
const title = 'ISFAS: ASISA, Adeslas, cuadro médico y ayuda | VPI';
const description = 'Guía práctica ISFAS: modalidades, cuadro médico, autorizaciones, tarjeta, urgencias y cambio de entidad. Enlaces oficiales y orientación humana de VPI.';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical },
  openGraph: { title, description, url: canonical, type: 'website', siteName: site.name, images: [{ url: '/og-image.png', width: 1200, height: 630, alt: site.name }] },
  twitter: { card: 'summary_large_image', title, description, images: ['/og-image.png'] },
};

export const dynamic = 'force-static';

function jsonLd(data: object) {
  return JSON.stringify(data).replace(/</g, '\\u003c');
}

const schemas = [
  {
    '@context': 'https://schema.org', '@type': 'WebPage', name: title, description,
    url: canonical, dateModified: isfasGuide.reviewedOn,
    isPartOf: { '@type': 'WebSite', name: site.name, url: siteOrigin },
    about: { '@type': 'Thing', name: 'Asistencia sanitaria ISFAS', url: isfasGuide.official.home },
  },
  {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Inicio', item: siteOrigin },
      { '@type': 'ListItem', position: 2, name: 'ISFAS', item: canonical },
    ],
  },
  {
    '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: isfasFaq.map(({ question, answer }) => ({
      '@type': 'Question', name: question, acceptedAnswer: { '@type': 'Answer', text: answer },
    })),
  },
];

function OfficialLink({ href, children, track }: { href: string; children: React.ReactNode; track?: string }) {
  const external = href.startsWith('https://');
  return <a href={href} target={external ? '_blank' : undefined} rel={external ? 'noopener noreferrer' : undefined} data-isfas-track={track} className={styles.textLink}>{children}{external && <ArrowUpRight aria-hidden="true" size={16} />}</a>;
}

function HelpWhatsApp({ message, children, context, entity, className = '' }: { message: string; children: React.ReactNode; context: string; entity?: 'asisa' | 'adeslas'; className?: string }) {
  return <a href={buildWhatsAppHref(message)} target="_blank" rel="noopener noreferrer" data-isfas-message={message} data-isfas-track="whatsapp_click" data-isfas-context={context} data-isfas-entity={entity} className={className || styles.textLink}>{children}</a>;
}

const quickActions = [
  { title: 'Acabo de obtener plaza', detail: 'Mis primeros pasos', href: '#nuevo-ingreso', icon: ShieldCheck, track: undefined },
  { title: 'Buscar médico o centro', detail: 'Ir al cuadro médico', href: '#buscar-medico', icon: Search, track: 'medical_directory_click' },
  { title: 'Necesito una autorización', detail: 'Saber dónde pedirla', href: '#autorizaciones', icon: ClipboardCheck, track: 'authorization_click' },
  { title: 'Tarjeta o app', detail: 'Accesos de mi entidad', href: '#tarjeta', icon: CreditCard, track: undefined },
  { title: 'Tengo una urgencia', detail: 'Teléfonos correctos', href: '#urgencias', icon: HeartPulse, track: 'emergency_click' },
  { title: 'Cambiar o entender mi modalidad', detail: 'Reglas de ISFAS', href: '#modalidad', icon: BadgeHelp, track: undefined },
] as const;

const helpCards = [
  { id: 'buscar-medico', title: 'Quiero buscar médico', answer: 'Elige tu entidad y comprueba el cuadro médico actualizado para ISFAS antes de pedir cita.', kind: 'doctors', track: 'medical_directory_click', message: 'Hola, soy mutualista ISFAS y necesito ayuda con el cuadro médico.' },
  { id: 'prueba', title: 'Me han mandado una prueba', answer: 'Si tienes A2 o A5, pregunta a tu entidad si requiere autorización. Con A1, consulta tu servicio público.', kind: 'authorizations', track: 'authorization_click', message: 'Hola, soy mutualista ISFAS y necesito ayuda para saber cómo gestionar una prueba prescrita.' },
  { id: 'tarjeta', title: 'No tengo mi tarjeta', answer: 'Consulta la app o área privada de tu entidad y sus instrucciones para identificarte.', kind: 'card', track: undefined, message: 'Hola, soy mutualista ISFAS y necesito ayuda con mi tarjeta.' },
  { id: 'autorizaciones', title: 'Necesito una autorización', answer: 'Si tienes A2 o A5, consulta los requisitos y solicita la autorización a tu entidad. Con A1, consulta tu servicio público.', kind: 'authorizations', track: 'authorization_click', message: 'Hola, soy mutualista ISFAS y necesito ayuda con una autorización.' },
  { id: 'donde-ir', title: 'No sé dónde ir', answer: 'Primero identifica tu modalidad; después usa el buscador de tu entidad o consulta a ISFAS si es A1.', kind: 'doctors', track: 'medical_directory_click', message: 'Hola, soy mutualista ISFAS y necesito ayuda para encontrar el canal de asistencia.' },
  { id: 'cobertura', title: 'Tengo una duda con mi cobertura', answer: 'Comprueba el concierto y consulta a tu entidad sobre la prestación concreta. Podemos ayudarte a localizar el canal correcto.', kind: 'help', track: undefined, message: 'Hola, soy mutualista ISFAS y necesito ayuda para localizar el canal de consulta sobre mi cobertura.' },
] as const;

type ResourceKind = (typeof helpCards)[number]['kind'];
function HelpResources({ kind, track }: { kind: ResourceKind; track?: string }) {
  const { asisa, adeslas } = isfasGuide.insurers;
  const urls = kind === 'doctors'
    ? [asisa.resources.doctors, adeslas.resources.doctors]
    : kind === 'authorizations'
      ? [asisa.resources.authorizations, adeslas.resources.authorizations]
      : kind === 'card'
        ? [asisa.resources.card, adeslas.resources.card]
        : [asisa.resources.help, adeslas.resources.help];
  return <div className={styles.resourceLinks}>
    <OfficialLink href={urls[0]} track={track}>ASISA</OfficialLink>
    <OfficialLink href={urls[1]} track={track}>Adeslas</OfficialLink>
    {(kind === 'doctors' || kind === 'authorizations') && <OfficialLink href={isfasGuide.official.modalities} track="official_isfas_click">A1 · ISFAS</OfficialLink>}
  </div>;
}

export default function IsfasPage() {
  const { asisa, adeslas } = isfasGuide.insurers;
  return <>
    {schemas.map((schema) => <script key={schema['@type']} type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(schema) }} />)}
    <Header />
    <IsfasInteractions partners={isfasGuide.partners} whatsappNumber={siteConfig.contact.whatsappNumber} />
    <main data-isfas-page className={styles.page}>
      <div className={styles.breadcrumb}><Breadcrumbs items={[{ label: 'Inicio', href: '/' }, { label: 'ISFAS' }]} /></div>

      <section className={styles.hero} aria-labelledby="isfas-title">
        <div className={styles.heroText}>
          <p className={styles.eyebrow}>ISFAS · ASISTENCIA SANITARIA</p>
          <h1 id="isfas-title">Tu asistencia ISFAS, sin vueltas.</h1>
          <p className={styles.heroCopy}>Nuevo ingreso o mutualista: encuentra médicos, autorizaciones y el canal adecuado para tu modalidad.</p>
          <p className={styles.chooseLabel}>¿Cuál es tu situación?</p>
          <nav className={styles.heroChoices} aria-label="Elige tu modalidad">
            <a href="#asisa" data-isfas-track="entidad_asisa" data-isfas-entity="asisa">Soy ASISA <ArrowRight aria-hidden="true" size={17} /></a>
            <a href="#adeslas" data-isfas-track="entidad_adeslas" data-isfas-entity="adeslas">Soy Adeslas <ArrowRight aria-hidden="true" size={17} /></a>
            <a href="#modalidad" data-isfas-track="modalidad_desconocida" data-isfas-entity="unknown" aria-label="No sé qué modalidad tengo"><span className={styles.unknownLong}>No sé mi modalidad</span><span className={styles.unknownShort}>No lo sé</span><ArrowRight aria-hidden="true" size={17} /></a>
          </nav>
          <a href="#urgencias" data-isfas-track="emergency_click" className={styles.urgentShortcut}>¿Urgencia médica? Ver teléfonos →</a>
          <p className={styles.disclosure}>Valentín Protección Integral no es ISFAS. Los trámites oficiales se realizan ante el Instituto. ASISA y Adeslas tienen profesionales de VPI distintos.</p>
        </div>
        <nav className={styles.heroAside} aria-label="Accesos directos">
          <strong>Ir directo a</strong>
          <a href="#buscar-medico" data-isfas-track="medical_directory_click"><Search aria-hidden="true" size={19} /> Buscar médico <ArrowRight aria-hidden="true" size={17} /></a>
          <a href="#autorizaciones" data-isfas-track="authorization_click"><ClipboardCheck aria-hidden="true" size={19} /> Autorizaciones <ArrowRight aria-hidden="true" size={17} /></a>
          <a href="#urgencias" data-isfas-track="emergency_click"><HeartPulse aria-hidden="true" size={19} /> Urgencias <ArrowRight aria-hidden="true" size={17} /></a>
        </nav>
      </section>

      <section className={styles.section} aria-labelledby="resolver-title">
        <div className={styles.sectionHead}><p className={styles.eyebrow}>ACCESOS RÁPIDOS</p><h2 id="resolver-title">¿Qué necesitas resolver hoy?</h2><p>Elige una situación. Cada acceso te lleva directamente a la respuesta.</p></div>
        <div className={styles.quickGrid}>{quickActions.map(({ title, detail, href, icon: Icon, track }) => <a key={title} href={href} data-isfas-track={track} className={styles.quickCard}><Icon aria-hidden="true" size={23} strokeWidth={1.8} /><span><strong>{title}</strong><small>{detail}</small></span><ArrowRight aria-hidden="true" size={18} /></a>)}</div>
      </section>

      <section id="nuevo-ingreso" className={`${styles.section} ${styles.softSection}`} aria-labelledby="nuevo-title">
        <div className={styles.sectionHead}><p className={styles.eyebrow}>NUEVO INGRESO</p><h2 id="nuevo-title">Acabas de incorporarte: empieza por aquí</h2><p>Comprueba lo esencial antes de buscar un profesional o usar la tarjeta.</p></div>
        <ol className={styles.steps}>
          <li><span>01</span><div><h3>Comprueba tu alta en ISFAS</h3><p>Verifica tu situación de afiliación y la de tus beneficiarios, si corresponde.</p></div></li>
          <li><span>02</span><div><h3>Identifica tu modalidad</h3><p>Consulta si tu asistencia es pública, con Adeslas, con ASISA o combinada con Sanidad Militar.</p></div></li>
          <li><span>03</span><div><h3>Guarda tus accesos</h3><p>Si tienes entidad concertada, localiza su cuadro médico, autorizaciones, app y teléfono de urgencias.</p></div></li>
        </ol>
        <p className={styles.smallNote}>ISFAS incluye, entre otros supuestos, a militares de carrera, tropa y marinería en servicio, alumnado de centros militares y determinados miembros de la Guardia Civil. <OfficialLink href={isfasGuide.official.affiliation}>Consulta la lista oficial y sus excepciones</OfficialLink>.</p>
        <div className={styles.inlineActions}><OfficialLink href={isfasGuide.official.procedures} track="official_isfas_click">Consultar trámites oficiales de ISFAS</OfficialLink><HelpWhatsApp context="new" message="Hola, acabo de obtener plaza y necesito orientación para entender mi asistencia sanitaria ISFAS.">Pedir orientación a VPI <ArrowRight aria-hidden="true" size={16} /></HelpWhatsApp></div>
      </section>

      <section id="modalidad" className={styles.section} aria-labelledby="modalidad-title">
        <div className={styles.sectionHead}><p className={styles.eyebrow}>TU PUNTO DE PARTIDA</p><h2 id="modalidad-title">Identifica tu modalidad</h2><p>Estos códigos indican quién presta tu asistencia sanitaria completa.</p></div>
        <div className={styles.modalityNext}><strong>¿No sabes cuál tienes o quieres cambiar?</strong><p>Comprueba tu documentación de afiliación y las reglas de cambio en ISFAS antes de elegir un canal de entidad.</p><OfficialLink href={isfasGuide.official.modalities} track="official_isfas_click">Consultar modalidades y cambios en ISFAS</OfficialLink> · <OfficialLink href={isfasGuide.official.procedures} track="official_isfas_click">Abrir Sede ISFAS</OfficialLink></div>
        <div className={styles.modalities}>
          <article><span>A1</span><h3>Red Sanitaria Pública</h3><p>Asistencia completa a través de la red pública.</p></article>
          <article><span>A2</span><h3>SegurCaixa Adeslas</h3><p>Asistencia completa a través de Adeslas.</p></article>
          <article><span>A5</span><h3>ASISA</h3><p>Asistencia completa a través de ASISA.</p></article>
        </div>
        <p className={styles.smallNote}>También existen modalidades combinadas con Sanidad Militar, sujetas a condiciones específicas. <OfficialLink href={isfasGuide.official.militaryCare} track="official_isfas_click">Ver detalle oficial de Sanidad Militar</OfficialLink></p>
      </section>

      <section className={`${styles.section} ${styles.softSection}`} aria-labelledby="entidad-title">
        <div className={styles.sectionHead}><p className={styles.eyebrow}>SI YA TIENES ENTIDAD</p><h2 id="entidad-title">Tu entidad, tus accesos</h2><p>Usa los canales propios de la entidad para gestiones de asistencia. VPI puede orientarte si te pierdes.</p></div>
        <div className={styles.insurerGrid}>
          {([['asisa', asisa], ['adeslas', adeslas]] as const).map(([key, insurer]) => <article key={key} id={key} className={styles.insurerCard}>
            <div className={styles.insurerTop}><span>{insurer.code}</span><h3>{insurer.label}</h3></div>
            <div className={styles.insurerLinks}>
              <OfficialLink href={insurer.resources.doctors} track="medical_directory_click"><Search aria-hidden="true" size={17} /> Cuadro médico</OfficialLink>
              <OfficialLink href={insurer.resources.authorizations} track="authorization_click"><ClipboardCheck aria-hidden="true" size={17} /> Autorizaciones</OfficialLink>
              <OfficialLink href={insurer.resources.card}><CreditCard aria-hidden="true" size={17} /> Tarjeta y app</OfficialLink>
              <OfficialLink href={insurer.resources.emergency} track="emergency_click"><HeartPulse aria-hidden="true" size={17} /> Urgencias</OfficialLink>
              <OfficialLink href={insurer.resources.help}><BadgeHelp aria-hidden="true" size={17} /> Dudas de uso</OfficialLink>
            </div>
            <div className={styles.advisor}><p><strong>{insurer.advisor}</strong><br />{insurer.advisorRole}</p><HelpWhatsApp context={key} entity={key} message={`Hola, soy mutualista ISFAS y estoy con ${key === 'asisa' ? 'ASISA' : 'Adeslas'}. Necesito ayuda con el uso de mi asistencia.`} className={styles.advisorCta}>Pedir orientación <MessageCircle aria-hidden="true" size={17} /></HelpWhatsApp></div>
          </article>)}
        </div>
        <p className={styles.smallNote}>El WhatsApp de VPI es un punto de entrada general, no el número directo de ambos agentes. Indica tu entidad para que podamos trasladar la consulta al profesional correspondiente; no incluyas información médica.</p>
      </section>

      <section className={styles.section} aria-labelledby="ayuda-title">
        <div className={styles.sectionHead}><p className={styles.eyebrow}>CENTRO DE AYUDA RÁPIDA</p><h2 id="ayuda-title">Una duda, un siguiente paso</h2></div>
        <div className={styles.helpGrid}>{helpCards.map((card) => <article id={card.id} key={card.title} className={styles.helpCard}><h3>{card.title}</h3><p>{card.answer}</p><div className={styles.helpCardBottom}><span>Ir a la fuente oficial</span><HelpResources kind={card.kind} track={card.track} /><HelpWhatsApp context={card.id} message={card.message}>Si necesitas orientación, VPI te ayuda <ArrowRight aria-hidden="true" size={15} /></HelpWhatsApp></div></article>)}</div>
      </section>

      <section id="urgencias" className={styles.emergency} aria-labelledby="urgencias-title">
        <div className={styles.emergencyIntro}><p className={styles.emergencyEyebrow}>ATENCIÓN INMEDIATA</p><h2 id="urgencias-title">¿Es una urgencia médica?<br />No esperes un WhatsApp.</h2><p>Si hay una emergencia, llama al 112. Para una urgencia asistencial con entidad concertada, llama a su centro coordinador.</p></div>
        <div className={styles.emergencyNumbers}>
          <a href="tel:112" data-isfas-track="emergency_click" data-isfas-context="112"><strong>112</strong><span>Emergencias generales</span><Phone aria-hidden="true" size={20} /></a>
          <a href={asisa.emergencyHref} data-isfas-track="emergency_click" data-isfas-context="asisa"><strong>{asisa.emergencyPhone}</strong><span>Urgencias ASISA</span><Phone aria-hidden="true" size={20} /></a>
          <a href={adeslas.emergencyHref} data-isfas-track="emergency_click" data-isfas-context="adeslas"><strong>{adeslas.emergencyPhone}</strong><span>Urgencias Adeslas</span><Phone aria-hidden="true" size={20} /></a>
        </div>
        <p className={styles.emergencyFoot}>Para dudas administrativas o sobre el uso de tu cobertura, sí podemos ayudarte por WhatsApp. <OfficialLink href={asisa.resources.emergency}>Fuente ASISA</OfficialLink> · <OfficialLink href={adeslas.resources.emergency}>Fuente Adeslas</OfficialLink> · <OfficialLink href={isfasGuide.official.emergency112}>Fuente 112</OfficialLink></p>
      </section>

      <section className={styles.section} aria-labelledby="tramites-title">
        <div className={styles.procedures}><div><p className={styles.eyebrow}>TRÁMITES OFICIALES</p><h2 id="tramites-title">Esto lo gestiona ISFAS, no VPI.</h2><p>Altas de beneficiarios, certificados, afiliación y cambio ordinario de modalidad se consultan en la Sede Electrónica de ISFAS.</p></div><OfficialLink href={isfasGuide.official.procedures} track="official_isfas_click">Abrir Sede Electrónica <ArrowRight aria-hidden="true" size={16} /></OfficialLink></div>
      </section>

      <section id="cambio" className={`${styles.section} ${styles.softSection}`} aria-labelledby="cambio-title"><div className={styles.sectionHead}><p className={styles.eyebrow}>CAMBIO DE MODALIDAD</p><h2 id="cambio-title">¿Cuándo puedo cambiar?</h2></div><div className={styles.changeGrid}><div><strong>Periodo ordinario</strong><p>ISFAS permite solicitar un cambio de modalidad durante enero. Solo puede hacerse un cambio ordinario al año.</p></div><div><strong>Supuestos extraordinarios</strong><p>Existen situaciones excepcionales con condiciones propias. Comprueba siempre los requisitos concretos con ISFAS.</p></div></div><OfficialLink href={isfasGuide.official.modalities} track="official_isfas_click">Ver reglas y supuestos en ISFAS</OfficialLink></section>

      <section className={styles.section} aria-labelledby="faq-title"><div className={styles.sectionHead}><p className={styles.eyebrow}>RESPUESTAS BREVES</p><h2 id="faq-title">Preguntas frecuentes</h2></div><div className={styles.faqList}>{isfasFaq.map((item) => <details key={item.question}><summary>{item.question}<span aria-hidden="true">+</span></summary><p>{item.answer} {'secondarySource' in item ? <><OfficialLink href={item.source}>ASISA</OfficialLink> · <OfficialLink href={item.secondarySource}>Adeslas</OfficialLink></> : <OfficialLink href={item.source}>Ver fuente</OfficialLink>}</p></details>)}</div></section>

      <section className={styles.finalCta} aria-labelledby="final-title"><div><p className={styles.eyebrow}>TE AYUDAMOS A ORIENTARTE</p><h2 id="final-title">¿Sigues sin saber qué hacer?</h2><p>Cuéntanos tu modalidad y te indicamos el siguiente paso. Así podremos dirigir tu consulta al profesional de tu entidad. No envíes diagnósticos, informes ni datos sanitarios por este primer contacto.</p></div><div className={styles.finalActions}><HelpWhatsApp context="final" message="Hola, soy mutualista ISFAS y necesito ayuda para saber cuál es el siguiente paso." className={styles.primaryAction}><MessageCircle aria-hidden="true" size={18} /> Hablar por WhatsApp</HelpWhatsApp><a href={`tel:${siteConfig.contact.phoneHref}`} data-isfas-track="phone_click" data-isfas-context="final" className={styles.secondaryAction}><Phone aria-hidden="true" size={18} /> Prefiero una llamada</a></div></section>

      <aside className={styles.trust}><div><FileCheck2 aria-hidden="true" size={21} /><p>Información contrastada con <OfficialLink href={isfasGuide.official.home}>ISFAS</OfficialLink>, el <OfficialLink href={isfasGuide.official.concert}>concierto BOE 2025–2026</OfficialLink> y los canales oficiales de las entidades. Última revisión: 23 de septiembre de 2026.</p></div><div><Building2 aria-hidden="true" size={21} /><p>VPI es una marca de mediación de seguros, no un organismo público. <Link href="/sobre-nosotros">Conoce al equipo y su registro profesional</Link>.</p></div><div className={styles.related}><MapPin aria-hidden="true" size={21} /><p>También puedes consultar <Link href="/seguros/salud">Salud</Link> o <Link href="/contacto">Contacto</Link>.</p></div></aside>
    </main>
    <Footer />
  </>;
}
