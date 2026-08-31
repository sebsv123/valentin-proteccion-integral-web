import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Globe2 } from 'lucide-react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Breadcrumbs } from '@/components/breadcrumbs';
import type { InternationalContent, InternationalLocale } from './international-content';
import styles from './internacional.module.css';

const baseUrl = 'https://valentinproteccionintegral.com';

export function InternationalPageView({ content, locale }: { content: InternationalContent; locale: InternationalLocale }) {
  const url = locale === 'en' ? `${baseUrl}/en/international` : `${baseUrl}/internacional`;
  const jsonLd = { '@context': 'https://schema.org', '@type': 'CollectionPage', inLanguage: locale, name: content.metadata.title, url, description: content.metadata.description, isPartOf: { '@type': 'WebSite', name: 'Valentín Protección Integral', url: baseUrl }, mainEntity: { '@type': 'Place', name: locale === 'en' ? 'South Korea' : 'Corea del Sur', url: `${baseUrl}/internacional/corea-del-sur` }, breadcrumb: { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: content.breadcrumbs.home, item: `${baseUrl}${locale === 'en' ? '/en' : '/'}` }, { '@type': 'ListItem', position: 2, name: content.breadcrumbs.international, item: url }] } };
  return (
    <div className={styles.route}>
      <Header />
      <main className={styles.page}>
        <div className="container-shell"><Breadcrumbs items={[{ label: content.breadcrumbs.home, href: locale === 'en' ? '/en' : '/' }, { label: content.breadcrumbs.international }]} /></div>
        <section className={styles.hubHero} aria-labelledby="international-title"><div className="container-shell"><div className={styles.heroGrid}>
          <div className={styles.heroCopy}><p className={styles.eyebrow}>{content.eyebrow}</p><h1 id="international-title">{content.title[0]}<br /><em>{content.title[1]}</em></h1><p className={styles.lead}>{content.lead}</p><a className={styles.textCta} href="#destinos">{content.discover} <ArrowRight aria-hidden="true" /></a></div>
          <div className={styles.heroImage}><Image src="/images/internacional/corea/corea-barrio-vida-local.webp" alt={content.heroImageAlt} fill priority sizes="(max-width: 900px) 100vw, 52vw" /><span className={styles.imageNote}>VPI × {locale === 'en' ? 'local partners' : 'colaboradores locales'}</span></div>
        </div></div></section>
        <section id="destinos" className={styles.destinationSection} aria-labelledby="destination-title"><div className="container-shell"><div className={styles.sectionIntro}><p className={styles.eyebrow}>{content.sectionEyebrow}</p><h2 id="destination-title">{content.sectionTitle}</h2></div>
          {content.destinations.map((destination) => { const href = locale === 'en' && destination.englishPath ? destination.englishPath : destination.fallbackPath; return <Link href={href} className={`${styles.destinationFeature} ${destination.key === 'australia' ? styles.destinationFeatureAustralia : destination.key === 'india' ? styles.destinationFeatureIndia : destination.key === 'peru' ? styles.destinationFeaturePeru : ''}`} key={destination.key}><div className={styles.destinationPhoto}><Image src={destination.image} alt={destination.imageAlt} fill sizes="(max-width: 900px) 100vw, 48vw" /></div><div className={styles.destinationCopy}><div className={styles.flagLine}>{destination.flag ? <Image src={destination.flag} alt={destination.flagAlt ?? ''} width={42} height={28} /> : <i className={`${styles.flagMark} ${destination.key === 'india' ? styles.flagMarkIndia : styles.flagMarkPeru}`} aria-hidden="true" />}<span>{destination.name}</span></div><h3>{destination.title[0]}<br /><em>{destination.title[1]}</em></h3><p>{destination.copy}</p><span className={styles.destinationCta}>{destination.cta} <ArrowRight aria-hidden="true" /></span></div></Link>; })}
        </div></section>
        <section className={styles.growingSection} aria-labelledby="upcoming-title"><div className={styles.upcomingInner}><p className={styles.eyebrow}>{content.upcomingEyebrow}</p><h2 id="upcoming-title">{content.upcomingTitle}</h2><p className={styles.upcomingLead}>{content.upcomingLead}</p><div className={styles.upcomingList} aria-label={content.upcomingAria}>{content.upcoming.map((destination, index) => <div className={styles.upcomingDestination} key={destination}><span>0{index + 1}</span><strong>{destination}</strong></div>)}</div></div></section>
        <section className={styles.growingSection} aria-labelledby="growing-title"><div className="container-shell"><Globe2 aria-hidden="true" className={styles.growingIcon} /><p className={styles.eyebrow}>{content.growingEyebrow}</p><h2 id="growing-title">{content.growingTitle}</h2></div></section>
      </main>
      <Footer /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </div>
  );
}
