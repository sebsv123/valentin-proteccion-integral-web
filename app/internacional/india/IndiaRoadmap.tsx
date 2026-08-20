import type { ComponentType } from 'react';
import { Search, Landmark, FilePenLine, BadgeCheck, ShieldCheck, Luggage } from 'lucide-react';
import styles from './IndiaRoadmap.module.css';

type Role = 'aara' | 'both' | 'vpi';

type Step = {
  number: string;
  title: string;
  desc: string;
  role: Role;
  roleLabel: string;
  icon: ComponentType<{ 'aria-hidden'?: boolean }>;
};

const STEPS_AARA: Step[] = [
  { number: '01', title: 'DISCOVER', desc: 'Define tu objetivo académico.', role: 'aara', roleLabel: 'AARA', icon: Search },
  { number: '02', title: 'SHORTLIST', desc: 'Selecciona universidades y programas.', role: 'aara', roleLabel: 'AARA', icon: Landmark },
  { number: '03', title: 'APPLY', desc: 'Prepara documentación y solicitud.', role: 'aara', roleLabel: 'AARA', icon: FilePenLine },
];

const STEPS_VPI: Step[] = [
  { number: '04', title: 'VISA', desc: 'Organiza la fase de visado.', role: 'both', roleLabel: 'AARA + VPI', icon: BadgeCheck },
  { number: '05', title: 'INSURE', desc: 'Resuelve el seguro médico para España.', role: 'vpi', roleLabel: 'VPI', icon: ShieldCheck },
  { number: '06', title: 'ARRIVE', desc: 'Prepárate para empezar tu nueva etapa.', role: 'vpi', roleLabel: 'VPI', icon: Luggage },
];

function roleClass(role: Role) {
  return role === 'vpi' ? styles.roleVpi : role === 'both' ? styles.roleBoth : styles.roleAara;
}

function RoadmapStep({ step }: { step: Step }) {
  const Icon = step.icon;
  return (
    <div className={styles.step}>
      <span className={styles.stepNumber}>{step.number}</span>
      <div className={styles.stepRow}>
        <div className={`${styles.stepIcon} ${roleClass(step.role)}`}>
          <Icon aria-hidden />
        </div>
        <div className={styles.stepBody}>
          <h3 className={styles.stepTitle}>{step.title}</h3>
          <p className={styles.stepDesc}>{step.desc}</p>
          <span className={`${styles.chip} ${roleClass(step.role)}`}>{step.roleLabel}</span>
        </div>
      </div>
    </div>
  );
}

export function IndiaRoadmap() {
  return (
    <section className={styles.section} aria-labelledby="india-roadmap-title">
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>INDIA <span className={styles.eyebrowArrow}>→</span> SPAIN</p>
          <h2 id="india-roadmap-title" className={styles.title}>De India a España,<br /><em>paso a paso.</em></h2>
          <p className={styles.intro}>Un recorrido claro, acompañado de principio a fin. Aara te guía desde India y VPI resuelve contigo la parte española.</p>
        </div>

        <div className={styles.roadmap}>
          <div className={styles.grid}>
            {STEPS_AARA.map((step) => <RoadmapStep key={step.number} step={step} />)}
          </div>

          <div className={styles.transition}>
            <span className={`${styles.transitionLine} ${styles.transitionLineAara}`} aria-hidden="true" />
            <span className={styles.transitionBadge}><b>INDIA</b> <i aria-hidden="true">→</i> <em>SPAIN</em></span>
            <span className={`${styles.transitionLine} ${styles.transitionLineVpi}`} aria-hidden="true" />
          </div>

          <div className={styles.grid}>
            {STEPS_VPI.map((step) => <RoadmapStep key={step.number} step={step} />)}
          </div>
        </div>

        <div className={styles.support}>
          <div className={styles.supportCol}>
            <strong className={styles.labelAara}>AARA CONSULTANCY</strong>
            <p>Acompañamiento académico, selección, aplicaciones, documentación, visado y preparación desde India.</p>
          </div>
          <div className={styles.supportDivider} aria-hidden="true" />
          <div className={styles.supportCol}>
            <strong className={styles.labelVpi}>VPI</strong>
            <p>Especialistas en seguro médico para España y apoyo desde tu llegada.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
