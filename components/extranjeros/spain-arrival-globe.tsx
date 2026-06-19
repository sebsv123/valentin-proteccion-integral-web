"use client";

import Image from "next/image";
import styles from "./spain-arrival-globe.module.css";

const ROUTES = [
  {
    id: "route-mx",
    path: "M 58 356 C 178 250, 305 244, 458 305",
    duration: "5.8s",
    delay: "0s",
  },
  {
    id: "route-co",
    path: "M 86 515 C 220 390, 325 332, 458 305",
    duration: "6.4s",
    delay: "-1.6s",
  },
  {
    id: "route-pe",
    path: "M 104 616 C 240 472, 344 362, 458 305",
    duration: "7.1s",
    delay: "-3.2s",
  },
  {
    id: "route-ar",
    path: "M 162 731 C 282 548, 372 414, 458 305",
    duration: "7.8s",
    delay: "-4.7s",
  },
] as const;

export default function SpainArrivalGlobe() {
  return (
    <div
      className={styles.root}
      role="img"
      aria-label="Globo terrestre con rutas internacionales que convergen en España"
    >
      <div className={styles.ambientGlow} aria-hidden="true" />

      <div className={styles.globeMotion} aria-hidden="true">
        <Image
          src="/images/extranjeros/globe/globe-cutout-v3.webp"
          alt=""
          fill
          priority
          sizes="(max-width: 640px) 96vw, (max-width: 1139px) 82vw, 50vw"
          className={styles.globeImage}
        />
      </div>

      <svg
        className={styles.routes}
        viewBox="0 0 1000 900"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="vpi-route-gradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#D4A830" stopOpacity="0.08" />
            <stop offset="55%" stopColor="#E8B84C" stopOpacity="0.58" />
            <stop offset="100%" stopColor="#F4D17C" stopOpacity="0.96" />
          </linearGradient>

          <radialGradient id="vpi-spain-glow">
            <stop offset="0%" stopColor="#FFF7D9" stopOpacity="1" />
            <stop offset="42%" stopColor="#D4A830" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#D4A830" stopOpacity="0" />
          </radialGradient>

          <filter id="vpi-soft-glow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="3.2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {ROUTES.map((route) => (
          <g key={route.id}>
            <path
              id={route.id}
              d={route.path}
              className={styles.routeBase}
            />
            <path
              d={route.path}
              className={styles.routeFlow}
            />
            <circle
              r="4.2"
              className={styles.routeParticle}
              filter="url(#vpi-soft-glow)"
            >
              <animateMotion
                dur={route.duration}
                begin={route.delay}
                repeatCount="indefinite"
                path={route.path}
              />
            </circle>
          </g>
        ))}

        <circle
          cx="458"
          cy="305"
          r="10"
          fill="url(#vpi-spain-glow)"
          filter="url(#vpi-soft-glow)"
        />

        <circle
          cx="458"
          cy="305"
          r="17"
          className={styles.spainPulse}
        />

        <circle
          cx="458"
          cy="305"
          r="17"
          className={`${styles.spainPulse} ${styles.spainPulseDelayed}`}
        />
      </svg>
    </div>
  );
}
