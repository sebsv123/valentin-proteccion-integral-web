import type { Metadata } from 'next';
import Image from 'next/image';
import { ArrowRight, ClipboardCheck, FileSearch, Scale } from 'lucide-react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { WhatsAppIcon } from '@/components/ui/whatsapp-icon';
import { buildWhatsAppHref } from '@/lib/products';
import { PeruProcess } from './PeruProcess';
import { PeruToSpain } from './PeruToSpain';
import { PeruToWorld } from './PeruToWorld';
import { PeruHero } from './PeruHero';
import styles from './peru.module.css';

const baseUrl = 'https://valentinproteccionintegral.com';
const imageRoot = '/images/internacional/peru';

export const metadata: Metadata = {
  title: 'Perú, España y movilidad internacional | VIP Global Perú × VPI',
  description: 'Asesoría para visados, movilidad internacional y procesos entre Perú, España y otros destinos, con VIP Global Perú y Valentín Protección Integral.',
  alternates: { canonical: `${baseUrl}/internacional/peru`, languages: { es: `${baseUrl}/internacional/peru`, en: `${baseUrl}/en/international/peru`, 'x-default': `${baseUrl}/internacional/peru` } },
  openGraph: {
    title: 'Perú, España y movilidad internacional | VIP Global Perú × VPI',
    description: 'VIP Global Perú acompaña procesos de visado y movilidad internacional desde Perú. VPI refuerza especialmente la parte de España: seguro médico y llegada.',
    url: `${baseUrl}/internacional/peru`,
    type: 'article',
    images: [{ url: `${imageRoot}/peru-hero-lima.jpg`, width: 1600, height: 1067, alt: 'Vista de la costa de Miraflores en Lima, Perú' }],
  },
  twitter: { card: 'summary_large_image', title: 'Perú, España y movilidad internacional | VIP Global Perú × VPI', description: 'VIP Global Perú y VPI: visados, movilidad internacional y seguro médico para España.', images: [`${imageRoot}/peru-hero-lima.jpg`] },
};

const worldToPeruItems = [
  { title: 'Trabajo', desc: 'Orientación y acompañamiento para acceder a oportunidades laborales en Perú.' },
  { title: 'Estudios', desc: 'Apoyo documental para procesos académicos en instituciones peruanas.' },
  { title: 'Familia', desc: 'Procesos de reunificación y vínculo familiar.' },
  { title: 'Inversión', desc: 'Orientación para quienes buscan invertir y establecerse en Perú.' },
  { title: 'Rentista', desc: 'Acompañamiento documental para esta categoría migratoria.' },
  { title: 'Instalación', desc: 'Documentación y trámites para instalarte en el país.' },
];

const complexItems = [
  { icon: Scale, title: 'Denegaciones', desc: 'Redacción de recursos y respuestas fundamentadas ante una denegación de visado.' },
  { icon: FileSearch, title: 'Subsanaciones', desc: 'Revisión del caso y reorientación de la estrategia cuando algo no salió como se esperaba.' },
  { icon: ClipboardCheck, title: 'Documentación adicional', desc: 'Trámites que exigen mayor precisión, seguimiento y coordinación entre entidades.' },
];

export default function PeruPage() {
  const whatsappHref = buildWhatsAppHref('Hola, quiero información sobre movilidad internacional desde Perú con VIP Global Perú y VPI.');
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    inLanguage: 'es',
    name: 'Perú, España y movilidad internacional | VIP Global Perú × VPI',
    url: `${baseUrl}/internacional/peru`,
    description: metadata.description,
    about: { '@type': 'Country', name: 'Perú' },
    provider: { '@type': 'Organization', name: 'Valentín Protección Integral', url: baseUrl },
  };

  return (
    <div className={styles.route}>
      <Header />
      <main className={styles.page}>
        <PeruHero />

        <section className={styles.editorialSection} aria-labelledby="editorial-title">
          <span className={styles.editorialGhost} aria-hidden="true">PERÚ</span>
          <div className="container-shell">
            <div className={styles.editorialGrid}>
              <div className={styles.editorialPhoto}>
                <Image src={`${imageRoot}/peru-cusco.jpg`} alt="Mujer con vestimenta tradicional caminando por una calle de Cusco" fill sizes="(max-width: 1100px) 100vw, 58vw" />
              </div>
              <div className={styles.editorialCopy}>
                <p className={styles.eyebrow}>ORIGEN</p>
                <h2 id="editorial-title">Perú no es solo<br /><em>un punto de partida.</em></h2>
                <p>Millones de personas mantienen su vínculo con Perú incluso cuando su proyecto de vida avanza en otro país. Este bloque conecta ese origen con nuevas oportunidades, procesos internacionales y acompañamiento real desde el primer paso.</p>
                <p>VIP Global Perú acompaña desde origen; VPI refuerza especialmente la parte de España, el seguro médico y la llegada.</p>
                <div className={styles.partnership}>
                  <div className={styles.partnershipFlow}>
                    <div className={styles.partnershipOrigin}>
                      <Image className={styles.partnershipVipLogo} src="/images/internacional/vip-global-peru-official.jpeg" alt="Logo oficial de VIP Global Perú" width={230} height={86} />
                      <strong>DESDE PERÚ</strong>
                      <span>Visados · documentación · movilidad</span>
                    </div>
                    <div className={styles.partnershipConnector} aria-hidden="true">
                      <i />
                    </div>
                    <div className={styles.partnershipDestination}>
                      <div className={styles.vpiMedallion}>
                        <Image src="/brand/vpi-isotipo.png" alt="Isotipo de VPI" width={74} height={74} />
                      </div>
                      <strong>EN ESPAÑA</strong>
                      <span>Seguro · apoyo · llegada</span>
                    </div>
                  </div>
                  <p>Acompañamiento internacional desde Perú hasta España.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <PeruToSpain />

        <PeruToWorld />

        <PeruProcess />

        <section className={styles.worldSection} aria-labelledby="world-peru-title">
          <div className="container-shell">
            <div className={styles.worldGrid}>
              <div className={styles.worldCopy}>
                <p className={styles.eyebrow}><span className={styles.worldFlag} aria-hidden="true" /> MUNDO → PERÚ</p>
                <h2 id="world-peru-title">Y si el destino es Perú,<br /><em>también hay camino.</em></h2>
                <p>VIP Global Perú también acompaña a quienes quieren vivir, estudiar o trabajar en Perú.</p>
                <div className={styles.worldList}>
                  {worldToPeruItems.map((item, index) => (
                    <div className={styles.worldItem} key={item.title}>
                      <span className={styles.worldIndex}>{String(index + 1).padStart(2, '0')}</span>
                      <div>
                        <strong>{item.title}</strong>
                        <span>{item.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <p className={styles.worldNote}>El apoyo laboral se ofrece como orientación y acompañamiento; no implica una colocación garantizada.</p>
              </div>
              <div className={styles.worldPhoto}>
                <Image src={`${imageRoot}/peru-profesional.jpg`} alt="Profesionales dándose la mano en una oficina" fill sizes="(max-width: 1100px) 100vw, 52vw" />
                <span className={styles.worldPhotoLabel}>PERÚ · ACOMPAÑAMIENTO</span>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.complexSection} aria-labelledby="complex-title">
          <div className="container-shell">
            <p className={styles.eyebrow}>CASOS COMPLEJOS</p>
            <h2 id="complex-title">Cuando el proceso se complica,<br /><em>también hay acompañamiento.</em></h2>
            <p className={styles.complexIntro}>No todos los procesos son lineales. VIP Global Perú también gestiona los casos que requieren una segunda vuelta.</p>
            <div className={styles.complexGrid}>
              {complexItems.map((item) => (
                <div className={styles.complexItem} key={item.title}>
                  <div className={styles.complexIcon}><item.icon aria-hidden /></div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.culturalSection} aria-labelledby="cultural-title">
          <div className={styles.culturalImage}>
            <Image src={`${imageRoot}/peru-machu-picchu.jpg`} alt="Vista de Machu Picchu entre montañas y niebla" fill sizes="100vw" />
          </div>
          <div className={styles.culturalOverlay}>
            <h2 id="cultural-title">Perú no es solo origen o destino.<br /><em>También es posibilidad.</em></h2>
          </div>
        </section>

        <section id="contacto" className={styles.ctaSection} aria-labelledby="cta-title">
          <div className="container-shell">
            <div className={styles.ctaHeader}>
              <p className={styles.eyebrow}>TU SIGUIENTE PASO</p>
              <h2 id="cta-title">Dos caminos. <em>Un mismo acompañamiento.</em></h2>
              <p>VIP Global Perú y VPI pueden ayudarte a ordenar el proceso, sea cual sea la dirección en la que te muevas.</p>
            </div>
            <div className={styles.ctaPaths}>
              <div className={styles.ctaPath}>
                <span>01 · DESDE PERÚ</span>
                <h3>Quiero ir desde Perú a España o al extranjero</h3>
                <p>Visados, documentación y asesoría para moverte entre Perú, España y los principales destinos del mundo.</p>
                <a href={whatsappHref} className={styles.primaryCta}>Explorar esta ruta <ArrowRight aria-hidden="true" /></a>
              </div>
              <div className={styles.ctaPath}>
                <span>02 · HACIA PERÚ</span>
                <h3>Quiero vivir, trabajar o estudiar en Perú</h3>
                <p>VIP Global Perú también acompaña a quienes quieren vivir, estudiar o trabajar en Perú.</p>
                <a href={whatsappHref} className={styles.primaryCta}>Explorar esta ruta <ArrowRight aria-hidden="true" /></a>
              </div>
            </div>
            <div className={styles.ctaFooter}>
              <div className={styles.ctaBrand}>
                <Image src="/images/internacional/vip-global-peru-logo.png" alt="Logo de VIP Global Perú" width={110} height={48} />
                <span>VIP Global Perú × Valentín Protección Integral</span>
              </div>
              <div className={styles.ctaContact}>
                <p>¿Prefieres hablar directamente?</p>
                <a href={whatsappHref} className={styles.ctaGhost}><WhatsAppIcon aria-hidden="true" /> Hablar por WhatsApp</a>
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
