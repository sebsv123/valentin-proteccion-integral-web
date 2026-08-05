import styles from './health-sections-transition.module.css';

export function HealthSectionsTransition() {
  return (
    <div className={styles.transition} aria-hidden="true">
      <svg className={styles.art} viewBox="0 0 620 260" preserveAspectRatio="xMaxYMid meet">
        <path vectorEffect="non-scaling-stroke" d="M620 24C530 27 503 76 449 106c-59 33-103 40-164 26-76-17-104 7-139 55-22 30-55 44-102 43" />
        <g className={styles.family}>
          <path vectorEffect="non-scaling-stroke" d="M194 34c-15 0-24 13-24 28 0 10 5 18 13 22l-5 31-24 33 14 8 16-22 4 64h18l4-64 17 22 14-8-25-34-5-30c8-5 13-13 13-23 0-15-9-28-24-28Z" />
          <path vectorEffect="non-scaling-stroke" d="M328 34c-15 0-24 13-24 28 0 10 5 18 13 22l-5 31-24 34 14 8 16-22 4 63h18l4-63 17 22 14-8-25-34-5-31c8-4 13-12 13-22 0-15-9-28-24-28Z" />
          <path vectorEffect="non-scaling-stroke" d="M252 83c-11 0-18 9-18 20 0 8 4 14 10 17l-4 23-17 23 11 7 11-15 3 43h14l3-43 11 15 11-7-17-23-4-23c6-3 10-9 10-17 0-11-7-20-18-20Z" />
          <path vectorEffect="non-scaling-stroke" d="M284 103c-8 0-13 7-13 15 0 6 3 10 7 13l-3 17-13 17 9 6 8-11 2 31h11l2-31 8 11 9-6-13-17-3-17c4-3 7-7 7-13 0-8-5-15-13-15Z" />
        </g>
      </svg>
    </div>
  );
}
