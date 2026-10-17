import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import styles from './health-modalities-section.module.css';
import { useLocale } from 'next-intl';

const modalities = [
  {
    eyebrow: 'AMBULATORIO',
    title: 'Acceso médico sin hospitalización',
    copy: 'Consultas, especialistas y pruebas diagnósticas sin hospitalización.',
    action: 'Ver opción ambulatoria',
    href: '/contacto',
  },
  {
    eyebrow: 'SENIOR',
    title: 'Cobertura adaptada a partir de los 55 años',
    copy: 'Alternativas cuya cobertura y condiciones dependen de la edad y el perfil.',
    action: 'Consultar opciones senior',
    href: '/seguros/salud/senior',
  },
  {
    eyebrow: 'REEMBOLSO',
    title: 'Más libertad para elegir médico',
    copy: 'Permite combinar cuadro médico y, según la póliza, acudir a profesionales externos recuperando parte de la factura.',
    action: 'Entender el reembolso',
    href: '/seguros/salud/reembolso',
  },
] as const;

export function HealthModalitiesSection() {
  const en = useLocale() === 'en';
  const visibleModalities = en ? modalities.map((item, index) => ({ ...item, ...([
    { eyebrow: 'OUTPATIENT', title: 'Medical access without hospitalisation', copy: 'Consultations, specialists and diagnostic tests without hospitalisation.', action: 'View outpatient option' },
    { eyebrow: 'SENIOR', title: 'Cover adapted from age 55', copy: 'Cover and conditions depend on age and personal profile.', action: 'Ask about senior options' },
    { eyebrow: 'REIMBURSEMENT', title: 'More freedom to choose your doctor', copy: 'Combine the provider network with eligible external professionals and recover part of the bill, depending on the policy.', action: 'Understand reimbursement' },
  ][index]) })) : modalities;
  return (
    <section className={styles.section} aria-labelledby="health-modalities-title">
      <div className={styles.topography} aria-hidden="true">
        <svg viewBox="0 0 1440 880" preserveAspectRatio="none">
          <path d="M-80 680c244-118 394 86 646-38s379-97 579 37 268 85 465-44" />
          <path d="M-56 728c229-111 391 95 641-27s370-104 557 29 267 89 456-35" />
          <path d="M1196 365c119 44 142 135 58 211-78 71-40 165 69 198" />
        </svg>
      </div>
      <div className={`container-shell ${styles.shell}`}>
        <div className={styles.topRow}>
          <div className={styles.intro}>
            <p className={styles.eyebrow}>{en ? 'HEALTH PLAN TYPES' : 'MODALIDADES DE SALUD'}</p>
            <h2 id="health-modalities-title">{en ? 'Health insurance plans do not all cover the same things' : 'No todos los seguros de salud cubren lo mismo'}</h2>
            <div className={styles.curve} aria-hidden="true"><svg viewBox="0 0 164 24"><path d="M2 8c30 0 39 13 78 13 34 0 45-8 69-8" /><circle cx="157" cy="13" r="3" /></svg></div>
            <p className={styles.introCopy}>{en ? 'The difference is not just the price. Hospitalisation, co-payments, provider networks, free choice and how you use the policy can all change.' : 'La diferencia no está solo en el precio. Cambian la hospitalización, los copagos, el cuadro médico, la libre elección y la forma en que utilizarás la póliza.'}</p>
          </div>

          <article className={styles.featuredPlan}>
            <div className={styles.featuredContent}>
              <p className={styles.featuredTag}>{en ? 'COMPREHENSIVE HEALTH' : 'SALUD COMPLETA'}</p>
              <h3>{en ? 'Complete cover for everyday care and hospitalisation' : 'Cobertura completa para el día a día y la hospitalización'}</h3>
              <p>{en ? 'Consultations, specialists, tests and hospitalisation within one policy. A complete option for those who want outpatient and hospital care together.' : 'Consultas, especialistas, pruebas y hospitalización dentro de una misma póliza. Una opción completa para quienes quieren reunir asistencia ambulatoria y hospitalización en una misma póliza.'}</p>
              <ul>
                {(en ? ['Hospitalisation included', 'With or without co-payments', 'For individuals and families'] : ['Hospitalización incluida', 'Con o sin copagos', 'Para particulares y familias']).map((item) => <li key={item}><span aria-hidden="true"><Check /></span>{item}</li>)}
              </ul>
              <Link href="/seguros/salud/completa" className={styles.primaryAction}>{en ? 'Explore comprehensive health cover' : 'Explorar salud completa'} <ArrowRight aria-hidden="true" /></Link>
            </div>
          </article>
        </div>

        <div className={styles.modalityGrid}>
          {visibleModalities.map(({ eyebrow, title, copy, action, href }) => (
            <article className={styles.modalityCard} key={eyebrow}>
              <p className={styles.modalityEyebrow}>{eyebrow}</p>
              <h3>{title}</h3>
              <p className={styles.modalityCopy}>{copy}</p>
              <Link href={href} className={styles.textAction}>{action}<ArrowRight aria-hidden="true" /></Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
