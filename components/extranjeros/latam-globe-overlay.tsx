"use client";

import { useState } from 'react';
import { CheckCircle2, FileText, ShieldCheck } from 'lucide-react';
import styles from '@/app/extranjeros/extranjeros-hero.module.css';

const cities = [
  { id: 'mx', flag: '🇲🇽', name: 'Ciudad de México', cityClass: styles.cityMx, routeClass: styles.routeMx, path: 'M 336 586 L 410 612 C 452 580, 438 438, 458 305' },
  { id: 'co', flag: '🇨🇴', name: 'Bogotá', cityClass: styles.cityCo, routeClass: styles.routeCo, path: 'M 336 636 L 410 622 C 448 588, 442 448, 458 305' },
  { id: 'pe', flag: '🇵🇪', name: 'Lima', cityClass: styles.cityPe, routeClass: styles.routePe, path: 'M 336 686 L 410 632 C 446 598, 444 456, 458 305' },
  { id: 'cl', flag: '🇨🇱', name: 'Santiago', cityClass: styles.cityCl, routeClass: styles.routeCl, path: 'M 336 736 L 410 642 C 444 606, 446 466, 458 305' },
  { id: 'ar', flag: '🇦🇷', name: 'Buenos Aires', cityClass: styles.cityAr, routeClass: styles.routeAr, path: 'M 336 786 L 410 652 C 442 616, 448 474, 458 305' },
] as const;

export function LatamGlobeOverlay() {
  const [activeCity, setActiveCity] = useState<string | null>(null);

  return (
    <div className={styles.internationalOverlay} aria-hidden="true">
      <svg className={styles.internationalRoutes} viewBox="0 0 1000 900" preserveAspectRatio="xMidYMid meet">
        <defs>
          <linearGradient id="latam-route-gradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#6aa0c1" stopOpacity="0.34" />
            <stop offset="58%" stopColor="#d4a830" stopOpacity="0.46" />
            <stop offset="100%" stopColor="#f4d17c" stopOpacity="0.62" />
          </linearGradient>
        </defs>
        <circle className={styles.routeConvergence} cx="410" cy="632" r="4.4" />
        {cities.map((city) => (
          <path
            key={city.id}
            className={[
              styles.latamRoute,
              city.routeClass,
              activeCity && activeCity !== city.id ? styles.routeDimmed : '',
              activeCity === city.id ? styles.routeActive : '',
            ].filter(Boolean).join(' ')}
            style={activeCity ? {
              opacity: activeCity === city.id ? 0.88 : 0.2,
              strokeWidth: activeCity === city.id ? 1.55 : 1.15,
              filter: activeCity === city.id ? 'drop-shadow(0 0 6px rgba(244, 209, 124, 0.32))' : undefined,
            } : undefined}
            d={city.path}
          />
        ))}
      </svg>
      <span className={`${styles.spainPing} ${activeCity ? styles.spainPingActive : ''}`} aria-hidden="true" />
      <div className={styles.latamCityList} aria-hidden="true">
        <p className={styles.cityListTitle}>Rutas desde Latinoamérica</p>
        {cities.map((city) => (
          <span
            key={city.id}
            className={[
              styles.cityLabel,
              city.cityClass,
              activeCity === city.id ? styles.cityActive : '',
            ].filter(Boolean).join(' ')}
            onMouseEnter={() => setActiveCity(city.id)}
            onMouseLeave={() => setActiveCity(null)}
            onFocus={() => setActiveCity(city.id)}
            onBlur={() => setActiveCity(null)}
            aria-hidden="true"
          >
            <span className={styles.cityFlag}>{city.flag}</span>
            <span>{city.name}</span>
            <span className={styles.cityGuide} />
            <span className={styles.cityNode} />
          </span>
        ))}
      </div>
      <div className={styles.visadoGuide} aria-hidden="true">
        <svg viewBox="0 0 560 270" preserveAspectRatio="none">
          <path
            className={styles.visadoGuidePath}
            d="M 548 48 C 500 56, 470 72, 432 94 C 386 122, 356 154, 320 182 C 283 211, 250 228, 210 234"
          />
          <circle className={styles.visadoGuideDot} cx="432" cy="94" r="2.8" />
        </svg>
      </div>
      <div className={styles.benefitCluster} aria-hidden="true">
        <div className={styles.benefitPrimary}>
          <span className={styles.benefitIcon}>
            <FileText className="h-4 w-4" />
          </span>
          <span>
            <strong>Certificado para visado</strong>
            <small>Documentación para incorporar a tu expediente</small>
          </span>
        </div>
        <div className={styles.benefitSecondaryRow}>
          <span>
            <ShieldCheck className="h-4 w-4" /> Sin copagos
          </span>
          <span>
            <CheckCircle2 className="h-4 w-4" /> Sin carencias
          </span>
        </div>
      </div>
    </div>
  );
}
