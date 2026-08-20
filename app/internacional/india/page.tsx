import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { buildWhatsAppHref } from '@/lib/products';
import { IndiaRoadmap } from './IndiaRoadmap';
import { IndiaHandoff } from './IndiaHandoff';
import { IndiaStudyEssentials } from './IndiaStudyEssentials';
import styles from './india.module.css';

const baseUrl = 'https://valentinproteccionintegral.com';
const imageRoot = '/images/internacional/india';

export const metadata: Metadata = {
  title: 'Estudiar en España desde India | Aara Consultancy × VPI',
  description: 'Información y acompañamiento para estudiantes de India que quieren estudiar en España, con Aara Consultancy y VPI.',
  alternates: { canonical: `${baseUrl}/internacional/india` },
  openGraph: {
    title: 'Estudiar en España desde India | Aara Consultancy × VPI',
    description: 'Aara te acompaña desde India en la elección académica, la solicitud y el visado. VPI completa el recorrido desde España con el seguro médico y la llegada.',
    url: `${baseUrl}/internacional/india`,
    type: 'article',
    images: [{ url: `${imageRoot}/india-hero-estudiantes.jpg`, width: 1600, height: 1067, alt: 'Estudiantes consultando material académico en una biblioteca en India' }],
  },
  twitter: { card: 'summary_large_image', title: 'Estudiar en España desde India | Aara Consultancy × VPI', description: 'Aara Consultancy y VPI: un mismo proceso, dos equipos especializados.', images: [`${imageRoot}/india-hero-estudiantes.jpg`] },
};

function Eyebrow({ children, withFlag = false }: { children: React.ReactNode; withFlag?: boolean }) {
  return (
    <p className={styles.eyebrow}>
      {withFlag ? <i className={styles.flagMark} aria-hidden="true" /> : null}
      {children}
    </p>
  );
}

const aaraSteps = [
  ['01', 'CONSULT', 'Orientación inicial y perfil académico.'],
  ['02', 'CHOOSE', 'Universidades, programas y estrategia.'],
  ['03', 'APPLY', 'Aplicación, documentación, tests y SOP/LOR.'],
  ['04', 'PREPARE', 'Visado, financiación y preparación previa al viaje.'],
];

export default function IndiaPage() {
  const whatsappHref = buildWhatsAppHref('Hola, quiero información para estudiar en España desde India con Aara Consultancy y VPI.');
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Estudiar en España desde India | Aara Consultancy × VPI',
    url: `${baseUrl}/internacional/india`,
    description: metadata.description,
    about: { '@type': 'Country', name: 'India' },
    provider: { '@type': 'Organization', name: 'Valentín Protección Integral', url: baseUrl },
  };

  return (
    <div className={styles.route}>
      <Header />
      <main className={styles.page}>
        <section className={styles.hero} aria-labelledby="india-title">
          <div className="container-shell">
            <div className={styles.heroBreadcrumb}>
              <Breadcrumbs items={[{ label: 'Inicio', href: '/' }, { label: 'Internacional', href: '/internacional' }, { label: 'India' }]} />
            </div>
            <div className={styles.heroGrid}>
              <div className={styles.heroContent}>
                <Eyebrow withFlag>INDIA · STUDY IN SPAIN</Eyebrow>
                <h1 id="india-title">Tu camino de India <em>a España</em><br />empieza mucho antes del vuelo.</h1>
                <p className={styles.heroCopy}>Aara te acompaña desde India en la elección académica, la solicitud y el visado. VPI completa el recorrido desde España con apoyo especializado en seguro médico y llegada.</p>
                <div className={styles.heroActions}>
                  <a href="#contacto" className={styles.primaryCta}>Empezar mi proceso <ArrowRight aria-hidden="true" /></a>
                  <a href={whatsappHref} className={styles.secondaryCta}><MessageCircle aria-hidden="true" /> Hablar con un asesor</a>
                </div>
              </div>
              <div className={styles.heroMedia}>
                <div className={styles.heroMediaFrame} aria-hidden="true" />
                <div className={styles.heroPhoto}>
                  <Image src={`${imageRoot}/india-hero-estudiantes.jpg`} alt="Estudiantes consultando material académico en una biblioteca en India" fill priority sizes="(max-width: 900px) 100vw, 40vw" />
                </div>
                <div className={styles.heroFloatCard}>
                  <strong>Aara Consultancy <i aria-hidden="true">×</i> VPI</strong>
                  <span>Admissions · Visa · Health Insurance</span>
                  <div className={styles.heroRoute}><em>IN</em><i aria-hidden="true" /><em>ES</em></div>
                </div>
              </div>
              <p className={styles.trustCues}>Orientación universitaria<i aria-hidden="true">·</i>Apoyo con el visado<i aria-hidden="true">·</i>Seguro médico para España</p>
              <div className={styles.partnerSignature}>
                <Image src="/images/internacional/aara-logo-white-bg.jpg" alt="Logo de Aara Consultancy" width={92} height={40} className={styles.partnerSignatureLogo} />
                <i aria-hidden="true">×</i>
                <span>Valentín Protección Integral</span>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.indiaSection} aria-labelledby="india-origin-title">
          <span className={styles.indiaGhost} aria-hidden="true">INDIA</span>
          <div className="container-shell">
            <div className={styles.indiaGrid}>
              <div className={styles.indiaPhoto}>
                <Image src={`${imageRoot}/india-hawa-mahal.jpg`} alt="Fachada del Hawa Mahal en Jaipur, India" fill sizes="(max-width: 900px) 100vw, 58vw" />
              </div>
              <div className={styles.indiaCopy}>
                <Eyebrow>ORIGEN</Eyebrow>
                <h2 id="india-origin-title">Todo viaje internacional empieza en algún sitio.<br /><em>Este empieza en India.</em></h2>
                <p>Cada estudiante llega con un perfil distinto, pero cuando el objetivo es estudiar en España, entender bien el camino desde el principio cambia por completo la experiencia.</p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.aaraSection} aria-labelledby="aara-title">
          <div className="container-shell">
            <div className={styles.aaraIntro}>
              <div>
                <Eyebrow>DESDE INDIA</Eyebrow>
                <h2 id="aara-title">Antes de España,<br /><em>hay muchas decisiones que tomar bien.</em></h2>
              </div>
              <div className={styles.aaraLogoCard}>
                <Image src="/images/internacional/aara-logo-white-bg.jpg" alt="Logo de Aara Consultancy" width={220} height={98} />
              </div>
            </div>
            <p className={styles.aaraCopy}>Aara Consultancy acompaña al estudiante desde la exploración inicial hasta la preparación del viaje, ayudando a convertir un proceso complejo en una secuencia mucho más clara y organizada.</p>
            <div className={styles.aaraSteps}>
              {aaraSteps.map(([number, label, desc]) => (
                <div className={styles.aaraStep} key={number}>
                  <span>{number}</span>
                  <h3>{label}</h3>
                  <p>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <IndiaStudyEssentials />

        <section className={styles.spainSection} aria-labelledby="spain-title">
          <div className="container-shell">
            <div className={styles.spainGrid}>
              <div className={styles.spainCopy}>
                <Eyebrow>INDIA → SPAIN</Eyebrow>
                <h2 id="spain-title">Y entonces España<br /><em>deja de ser una idea.</em></h2>
                <p>Se convierte en universidad, ciudad, documentos, una nueva rutina y un lugar donde empezar otra etapa.</p>
                <p className={styles.spainSecondary}>España combina formación universitaria, experiencia internacional y un entorno cultural que ofrece al estudiante mucho más que un programa académico.</p>
              </div>
              <div className={styles.spainPhoto}>
                <Image src={`${imageRoot}/india-espana-barcelona.jpg`} alt="Estudiantes caminando junto a un edificio universitario en Barcelona" fill sizes="(max-width: 900px) 100vw, 52vw" />
              </div>
            </div>
          </div>
        </section>

        <IndiaHandoff />

        <section className={styles.culturalSection} aria-labelledby="cultural-title">
          <div className={styles.culturalImage}>
            <Image src={`${imageRoot}/india-holi.jpg`} alt="Celebración de Holi con color y multitud en India" fill sizes="100vw" />
          </div>
          <div className={styles.culturalOverlay}>
            <h2 id="cultural-title">No dejas India atrás.<br /><em>Amplías tu mundo.</em></h2>
            <p>Estudiar fuera no significa borrar tu punto de partida. Significa añadir otra ciudad, otra cultura y otra experiencia a la historia que ya traes contigo.</p>
          </div>
        </section>

        <IndiaRoadmap />

        <section id="contacto" className={styles.ctaSection} aria-labelledby="cta-title">
          <div className={styles.ctaImage}>
            <Image src={`${imageRoot}/india-cta-madrid.jpg`} alt="Vista aérea del centro de Madrid" fill sizes="100vw" />
          </div>
          <div className={styles.ctaOverlay}>
            <div className="container-shell">
              <Eyebrow>YOUR NEXT STEP</Eyebrow>
              <h2 id="cta-title">India es donde empieza el plan.<br /><em>España puede ser donde empieza lo siguiente.</em></h2>
              <p>Aara Consultancy y VPI pueden ayudarte a convertir ese objetivo en un proceso mucho más claro.</p>
              <div className={styles.ctaActions}>
                <Link href="/contacto" className={styles.primaryCta}>Empezar mi proceso <ArrowRight aria-hidden="true" /></Link>
                <a href={whatsappHref} className={styles.ctaGhost}><MessageCircle aria-hidden="true" /> Hablar por WhatsApp</a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </div>
  );
}
