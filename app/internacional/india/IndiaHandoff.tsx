import Image from 'next/image';
import styles from './IndiaHandoff.module.css';
import type { IndiaContent } from './india-content';

const aaraGroups = [
  { title: 'EXPLORE', desc: 'Counselling · University selection' },
  { title: 'PREPARE', desc: 'Test preparation · SOP / LOR' },
  { title: 'APPLY', desc: 'Applications · Documentation' },
  { title: 'DEPART', desc: 'Student visa guidance · Education loan guidance · Pre-departure support' },
];

const vpiGroups = [
  { title: 'INSURE', desc: 'Orientación y soluciones de seguro médico para España.' },
  { title: 'DOCUMENT', desc: 'Documentación de seguro para el proceso.' },
  { title: 'SUPPORT', desc: 'Asistencia especializada desde España.' },
  { title: 'ARRIVE', desc: 'Acompañamiento relacionado con la llegada y necesidades locales.' },
];

export function IndiaHandoff({ content }: { content: IndiaContent['handoff'] }) {
  return (
    <section className={styles.section} aria-labelledby="handoff-title">
      <div className="container-shell">
        <div className={styles.header}>
          <p className={styles.eyebrow}>{content.eyebrow}</p>
          <h2 id="handoff-title" className={styles.title}>{content.title[0]}<br /><em>{content.title[1]}</em></h2>
        </div>

        <div className={styles.grid}>
          <div className={styles.side}>
            <span className={`${styles.ghostWord} ${styles.ghostIndia}`} aria-hidden="true">INDIA</span>
            <div className={styles.sideContent}>
              <div className={styles.sideHead}>
                <span className={styles.logoCard}>
                  <Image src="/images/internacional/aara-logo-white-bg.jpg" alt="Logo de Aara Consultancy" width={110} height={49} />
                </span>
                <span className={styles.originLabel}>INDIA</span>
              </div>
              <h3 className={styles.sideTitle}>Aara Consultancy</h3>
              <div className={styles.groupGrid}>
                {content.aara.map((group: [string,string]) => (
                  <div className={styles.group} key={group[0]}>
                    <span className={`${styles.groupTitle} ${styles.aaraAccent}`}>{group[0]}</span>
                    <p className={styles.groupDesc}>{group[1]}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.handoff}>
            <span className={`${styles.handoffLine} ${styles.handoffLineTop}`} aria-hidden="true" />
            <span className={`${styles.handoffDot} ${styles.handoffDotTop}`} aria-hidden="true" />
            <div className={styles.handoffCapsule}>
              <strong>AARA <i aria-hidden="true">+</i> VPI</strong>
              <span className={styles.handoffRoute}><em>INDIA</em><i aria-hidden="true">→</i><em>SPAIN</em></span>
            </div>
            <span className={`${styles.handoffLine} ${styles.handoffLineBottom}`} aria-hidden="true" />
            <span className={`${styles.handoffDot} ${styles.handoffDotBottom}`} aria-hidden="true" />
          </div>

          <div className={styles.side}>
            <span className={`${styles.ghostWord} ${styles.ghostSpain}`} aria-hidden="true">ESPAÑA</span>
            <div className={styles.sideContent}>
              <div className={styles.sideHead}>
                <span className={styles.vpiMark}>
                  <Image src="/brand/isotipo-valentin.png" alt="Isotipo de Valentín Protección Integral" width={52} height={40} />
                </span>
                <span className={styles.originLabelVpi}>ESPAÑA</span>
              </div>
              <h3 className={styles.sideTitle}>VPI</h3>
              <div className={styles.groupGrid}>
                {content.vpi.map((group: [string,string]) => (
                  <div className={styles.group} key={group[0]}>
                    <span className={`${styles.groupTitle} ${styles.vpiAccent}`}>{group[0]}</span>
                    <p className={styles.groupDesc}>{group[1]}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <p className={styles.closing}>{content.closing}</p>
      </div>
    </section>
  );
}
