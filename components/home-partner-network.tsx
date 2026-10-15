'use client';

import type { ForeignersPartnerLogo } from '@/lib/foreigners-partners';
import type { CSSProperties, KeyboardEvent } from 'react';
import styles from './home-partner-network.module.css';

type HomePartnerNetworkProps = {
  locale: 'es' | 'en';
  logos: ForeignersPartnerLogo[];
};

const logoScaleClass: Record<NonNullable<ForeignersPartnerLogo['visualScale']>, string> = {
  large: styles.logoLarge,
  standard: styles.logoStandard,
  compact: styles.logoCompact,
};

export function HomePartnerNetwork({ locale, logos }: HomePartnerNetworkProps) {
  const en = locale === 'en';
  if (logos.length === 0) return null;

  const marqueeStyle = {
    '--home-partner-marquee-duration': `${Math.max(34, Math.round(logos.length * 4.2))}s`,
  } as CSSProperties;

  const handleRailKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const step = Math.max(180, Math.round(event.currentTarget.clientWidth * 0.6));

    if (event.key === 'ArrowRight') {
      event.preventDefault();
      event.currentTarget.scrollBy({ left: step, behavior: 'smooth' });
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault();
      event.currentTarget.scrollBy({ left: -step, behavior: 'smooth' });
    } else if (event.key === 'Home') {
      event.preventDefault();
      event.currentTarget.scrollTo({ left: 0, behavior: 'smooth' });
    } else if (event.key === 'End') {
      event.preventDefault();
      event.currentTarget.scrollTo({ left: event.currentTarget.scrollWidth, behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.section} data-home-section="partners">
      <div className="container-shell">
        <ul className={styles.proofRow} aria-label={en ? 'VPI experience and reach' : 'Trayectoria y alcance de VPI'}>
          <li className={styles.proofItem}>
            <p className={styles.proofValue}>{en ? '10+ years' : '+10 años'}</p>
            <p className={styles.proofCopy}>{en ? 'of experience' : 'de experiencia'}</p>
          </li>
          <li className={styles.proofItem}>
            <p className={styles.proofValue}>{en ? '1,200+ families' : '+1.200 familias'}</p>
            <p className={styles.proofCopy}>{en ? 'trust VPI in Spain' : 'confían en VPI en España'}</p>
          </li>
          <li className={styles.proofItem}>
            <p className={styles.proofValue}>{en ? '20+ countries' : '+20 países'}</p>
            <p className={styles.proofCopy}>
              {en ? 'Professionals in more than 20 countries trust our work.' : 'con colaboradores que confían en nuestro trabajo'}
            </p>
          </li>
        </ul>

        <div className={styles.partnerHeading}>
          <p className="kicker">{en ? 'INTERNATIONAL PARTNER NETWORK' : 'RED INTERNACIONAL DE COLABORADORES'}</p>
          <h3>{en ? 'Professionals in different countries also trust VPI.' : 'Profesionales de distintos países también confían en VPI.'}</h3>
          <p className={styles.partnerCopy}>
            {en
              ? 'Advisers, schools, relocation teams and other professionals work with us to support their clients.'
              : 'Asesorías, escuelas, relocation y otros profesionales trabajan con nosotros para acompañar a sus clientes.'}
          </p>
        </div>
        <div
          className={styles.viewport}
          role="region"
          tabIndex={0}
          onKeyDown={handleRailKeyDown}
          aria-label={en ? 'Partner organisations' : 'Organizaciones colaboradoras'}
        >
          <div className={styles.track} style={marqueeStyle}>
            {[false, true].map((duplicate) => (
              <div
                key={duplicate ? 'duplicate' : 'primary'}
                className={`${styles.sequence} ${duplicate ? styles.duplicate : ''}`}
                aria-hidden={duplicate || undefined}
              >
                {logos.map((logo) => (
                  <div key={`${duplicate ? 'duplicate-' : ''}${logo.name}`} className={styles.logoItem}>
                    <span className={logo.surface === 'dark' ? styles.darkSurface : styles.logoSurface}>
                      <img
                        src={logo.logo}
                        alt={duplicate ? '' : logo.alt}
                        loading="lazy"
                        decoding="async"
                        className={`${styles.logo} ${logoScaleClass[logo.visualScale ?? 'standard']}`}
                      />
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
