import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight, ArrowUpRight, BadgeHelp, Building2, ClipboardCheck, CreditCard,
  FileCheck2, HeartPulse, MapPin, MessageCircle, Phone, Search,
} from 'lucide-react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { IsfasInteractions } from '@/components/mutualistas/isfas-interactions';
import { buildWhatsAppHref, site } from '@/lib/products';
import { siteConfig } from '@/lib/site-config';
import { isfasFaq, isfasFaqGroups, isfasGuide } from '@/lib/mutualistas/isfas';
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

function FaqQuestion({ item }: { item: (typeof isfasFaq)[number] }) {
  return <details>
    <summary>{item.question}<span aria-hidden="true">+</span></summary>
    <p>{item.answer} <OfficialLink href={item.source}>{item.cta}</OfficialLink></p>
  </details>;
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
          <h1 id="isfas-title">Tu asistencia<br />ISFAS, sin vueltas.</h1>
          <p className={styles.heroCopy}>Encuentra médicos, autorizaciones y los canales correctos según tu modalidad ISFAS.</p>
          <p className={styles.chooseLabel}>¿Cuál es tu situación?</p>
          <nav className={styles.heroChoices} aria-label="Elige tu modalidad">
            <a href="#asisa" data-isfas-track="entidad_asisa" data-isfas-entity="asisa">Soy ASISA <ArrowRight aria-hidden="true" size={17} /></a>
            <a href="#adeslas" data-isfas-track="entidad_adeslas" data-isfas-entity="adeslas">Soy Adeslas <ArrowRight aria-hidden="true" size={17} /></a>
            <a href="#modalidad" data-isfas-track="modalidad_desconocida" data-isfas-entity="unknown" aria-label="No sé qué modalidad tengo"><span className={styles.unknownLong}>No sé mi modalidad</span><span className={styles.unknownShort}>No lo sé</span><ArrowRight aria-hidden="true" size={17} /></a>
          </nav>
          <nav className={styles.heroUtility} aria-label="Accesos directos">
            <a href="#buscar-medico"><Search aria-hidden="true" size={19} /> Cuadro médico ASISA / Adeslas</a>
            <a href="#autorizaciones"><ClipboardCheck aria-hidden="true" size={19} /> Autorizaciones</a>
            <a href="#urgencias" data-isfas-track="emergency_click"><HeartPulse aria-hidden="true" size={19} /> Urgencias</a>
          </nav>
          <p className={styles.disclosure}>Valentín Protección Integral no es ISFAS. Los trámites oficiales se realizan ante el Instituto. ASISA y Adeslas tienen profesionales de VPI distintos.</p>
        </div>
        <figure className={styles.heroPhoto}>
          <Image src="/mutualistas/isfas/ejercito_aire.jpg" alt="Grupo de militares reunidos durante un acto" fill sizes="(max-width: 900px) 100vw, 44vw" className={styles.heroImage} priority />
        </figure>
      </section>

      <section className={`${styles.section} ${styles.softSection} ${styles.entitySection}`} aria-labelledby="entidad-title">
        <div id="buscar-medico" className={`${styles.sectionHead} ${styles.serviceAnchor}`}><p className={styles.eyebrow}>SI YA CONOCES TU ENTIDAD</p><h2 id="entidad-title">Tu entidad, tus accesos</h2></div>
        <div id="autorizaciones" className={`${styles.insurerGrid} ${styles.serviceAnchor}`}>
          {([['asisa', asisa], ['adeslas', adeslas]] as const).map(([key, insurer]) => <article key={key} id={key} className={styles.insurerCard} data-insurer={key}>
            <div className={styles.insurerTop}>
              <div className={styles.brandSlot} data-logo-approval="pending"><h3>{insurer.label}</h3></div>
              <p>Mutualistas ISFAS · {insurer.code}</p>
            </div>
            <nav className={styles.insurerLinks} aria-label={`Accesos para mutualistas ISFAS con ${insurer.label}`}>
              <OfficialLink href={insurer.resources.doctors} track="medical_directory_click"><Search aria-hidden="true" size={18} /><span>Buscar en cuadro médico</span></OfficialLink>
              <OfficialLink href={insurer.resources.authorizations} track="authorization_click"><ClipboardCheck aria-hidden="true" size={18} /><span>Autorizaciones</span></OfficialLink>
              <OfficialLink href={insurer.resources.card}><CreditCard aria-hidden="true" size={18} /><span>Tarjeta y app</span></OfficialLink>
              <a href="#urgencias" data-isfas-track="emergency_click" className={styles.textLink}><HeartPulse aria-hidden="true" size={18} /><span>Urgencias</span><ArrowRight aria-hidden="true" size={16} /></a>
              <a href={`#faq-${key}`} data-isfas-faq-target={`faq-${key}`} className={styles.textLink}><BadgeHelp aria-hidden="true" size={18} /><span>Preguntas frecuentes</span><ArrowRight aria-hidden="true" size={16} /></a>
            </nav>
            <div className={styles.advisor}><div className={styles.advisorIdentity}><span className={styles.advisorEyebrow}>Te atiende</span><p><strong>{insurer.advisor}</strong><br />{insurer.advisorRole}</p></div><HelpWhatsApp context={key} entity={key} message={`Hola, soy mutualista ISFAS y estoy con ${key === 'asisa' ? 'ASISA' : 'Adeslas'}. Necesito ayuda con el uso de mi asistencia.`} className={styles.advisorCta}>Pedir orientación <ArrowRight aria-hidden="true" size={16} /></HelpWhatsApp></div>
          </article>)}
        </div>
        <p className={styles.routingNote}>El WhatsApp general de VPI deriva tu consulta al profesional correspondiente según tu entidad.</p>
      </section>

      <section id="nuevo-ingreso" className={`${styles.section} ${styles.onboarding}`} aria-labelledby="nuevo-title">
        <div className={styles.onboardingContent}>
          <div className={styles.sectionHead}><p className={styles.eyebrow}>NUEVO INGRESO</p><h2 id="nuevo-title">¿Acabas de obtener plaza?</h2></div>
          <ol className={styles.steps}>
            <li><span>01</span>Comprueba tu alta</li><li><span>02</span>Identifica tu modalidad</li><li><span>03</span>Guarda tus accesos</li>
          </ol>
          <details className={styles.onboardingMore}><summary>Ver primeros pasos <ArrowRight aria-hidden="true" size={16} /></summary><p>Comprueba tu afiliación y beneficiarios, identifica la modalidad asignada y guarda los canales de asistencia de tu entidad. <OfficialLink href={isfasGuide.official.affiliation}>Quién pertenece a ISFAS</OfficialLink>.</p><div className={styles.inlineActions}><OfficialLink href={isfasGuide.official.procedures} track="official_isfas_click">Trámites oficiales de ISFAS</OfficialLink><HelpWhatsApp context="new" message="Hola, acabo de obtener plaza y necesito orientación para entender mi asistencia sanitaria ISFAS.">Orientación de VPI <ArrowRight aria-hidden="true" size={16} /></HelpWhatsApp></div></details>
        </div>
      </section>

      <section id="modalidad" className={`${styles.section} ${styles.modalityStrip}`} aria-labelledby="modalidad-title">
        <div className={styles.modalityIntro}><p className={styles.eyebrow}>MODALIDAD DESCONOCIDA</p><h2 id="modalidad-title">¿No sabes qué modalidad tienes?</h2><p>Si no sabes qué modalidad tienes asignada, confírmala con ISFAS antes de utilizar los canales de ASISA o Adeslas.</p></div>
        <div className={styles.modalityCodes}><span><strong>A1</strong> Red pública</span><span><strong>A2</strong> Adeslas</span><span><strong>A5</strong> ASISA</span><p className={styles.modalityA1}>Si estás en A1, utilizas la red pública. Si no sabes cómo acceder en tu destino, <OfficialLink href={isfasGuide.official.contact} track="official_isfas_click">pide orientación a ISFAS</OfficialLink>.</p></div>
        <div className={styles.modalityActions}><span className={styles.modalityPrimary}><OfficialLink href={isfasGuide.official.contact} track="official_isfas_click">Confirmar mi modalidad con ISFAS</OfficialLink></span><OfficialLink href={isfasGuide.official.modalities} track="official_isfas_click">Ver qué significa A1, A2 y A5</OfficialLink><small>Hay modalidades combinadas con Sanidad Militar. <OfficialLink href={isfasGuide.official.militaryCare} track="official_isfas_click">Ver detalle de modalidades combinadas</OfficialLink></small></div>
      </section>

      <section id="urgencias" className={styles.emergency} aria-labelledby="urgencias-title">
        <div className={styles.emergencyInner}>
        <div className={styles.emergencyIntro}><p className={styles.emergencyEyebrow}>ATENCIÓN INMEDIATA</p><h2 id="urgencias-title">¿Es una urgencia médica?<br />No esperes un WhatsApp.</h2><p>Emergencia general: 112. Si tienes entidad concertada, llama a su centro coordinador.</p></div>
        <div className={styles.emergencyNumbers}>
          <a href="tel:112" data-isfas-track="emergency_click" data-isfas-context="112"><strong>112</strong><span>Emergencias generales</span><Phone aria-hidden="true" size={20} /></a>
          <a href={asisa.emergencyHref} data-isfas-track="emergency_click" data-isfas-context="asisa"><strong>{asisa.emergencyPhone}</strong><span>Urgencias ASISA</span><Phone aria-hidden="true" size={20} /></a>
          <a href={adeslas.emergencyHref} data-isfas-track="emergency_click" data-isfas-context="adeslas"><strong>{adeslas.emergencyPhone}</strong><span>Urgencias Adeslas</span><Phone aria-hidden="true" size={20} /></a>
        </div>
        <p className={styles.emergencyFoot}>Para dudas administrativas o sobre el uso de tu cobertura, sí podemos ayudarte por WhatsApp. <OfficialLink href={asisa.resources.emergency}>Fuente ASISA</OfficialLink> · <OfficialLink href={adeslas.resources.emergency}>Fuente Adeslas</OfficialLink> · <OfficialLink href={isfasGuide.official.emergency112}>Fuente 112</OfficialLink></p>
        </div>
      </section>

      <section id="cambio" className={`${styles.section} ${styles.proceduresSection}`} aria-labelledby="tramites-title">
        <div className={styles.procedures}>
          <div className={styles.procedureIntro}>
            <p className={styles.eyebrow}>TRÁMITES OFICIALES</p>
            <h2 id="tramites-title">Gestiones que dependen de ISFAS</h2>
            <p>Beneficiarios, certificados, afiliación y cambio de modalidad se gestionan directamente ante ISFAS.</p>
          </div>
          <ul className={styles.procedureCategories} aria-label="Gestiones de ISFAS">
            <li>Beneficiarios</li><li>Certificados</li><li>Afiliación</li><li>Cambio de modalidad</li>
          </ul>
          <div className={styles.procedureLinks}>
            <OfficialLink href={isfasGuide.official.procedures} track="official_isfas_click">Abrir Sede Electrónica <ArrowRight aria-hidden="true" size={16} /></OfficialLink>
            <OfficialLink href={isfasGuide.official.modalities} track="official_isfas_click">Ver reglas de cambio</OfficialLink>
          </div>
          <p className={styles.procedureTiming}>El cambio ordinario se solicita en enero, una vez al año. Fuera de ese periodo hay supuestos extraordinarios con requisitos propios.</p>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="faq-title">
        <div className={styles.sectionHead}><p className={styles.eyebrow}>RESPUESTAS BREVES</p><h2 id="faq-title">Resuelve tus dudas según tu asistencia</h2></div>
        <nav className={styles.faqTabs} aria-label="Preguntas según tu asistencia" data-isfas-faq-tabs hidden>
          {isfasFaqGroups.map((group, index) => <button key={group.id} type="button" data-isfas-faq-tab={group.id} aria-controls={group.id} aria-pressed={index === 0}>{group.label}</button>)}
        </nav>
        <div className={styles.faqGroups} data-isfas-faq-groups>
          {isfasFaqGroups.map((group, index) => <details key={group.id} id={group.id} name="isfas-faq-group" open={index === 0} className={styles.faqGroup}>
            <summary><h3>{group.label}</h3></summary>
            <p className={styles.faqIntro}>{group.intro}</p>
            <div className={styles.faqList}>{group.items.slice(0, 4).map((item) => <FaqQuestion key={item.question} item={item} />)}</div>
            {group.items.length > 4 && <details className={styles.faqMore}><summary>Ver más preguntas <ArrowRight aria-hidden="true" size={16} /></summary><div className={styles.faqList}>{group.items.slice(4).map((item) => <FaqQuestion key={item.question} item={item} />)}</div></details>}
          </details>)}
        </div>
      </section>

      <section className={styles.finalCta} aria-labelledby="final-title"><h2 id="final-title">¿No has encontrado lo que necesitabas?</h2><HelpWhatsApp context="final" message="Hola, soy mutualista ISFAS y necesito ayuda para saber cuál es el siguiente paso." className={styles.primaryAction}><MessageCircle aria-hidden="true" size={18} /> Hablar con VPI</HelpWhatsApp></section>

      <aside className={styles.trust}><div><FileCheck2 aria-hidden="true" size={21} /><p>Información contrastada con <OfficialLink href={isfasGuide.official.home}>ISFAS</OfficialLink>, el <OfficialLink href={isfasGuide.official.concert}>concierto BOE 2025–2026</OfficialLink> y los canales oficiales de las entidades. Última revisión: {isfasGuide.reviewedOnLabel}.</p></div><div><Building2 aria-hidden="true" size={21} /><p>VPI es una marca de mediación de seguros, no un organismo público. <Link href="/sobre-nosotros">Conoce al equipo y su registro profesional</Link>.</p></div><div className={styles.related}><MapPin aria-hidden="true" size={21} /><p>También puedes consultar <Link href="/seguros/salud">Salud</Link> o <Link href="/contacto">Contacto</Link>.</p></div></aside>
    </main>
    <Footer />
  </>;
}
