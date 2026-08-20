import Image from 'next/image';
import styles from './IndiaHandoff.module.css';

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

export function IndiaHandoff() {
  return (
    <section className={styles.section} aria-labelledby="handoff-title">
      <div className="container-shell">
        <div className={styles.header}>
          <p className={styles.eyebrow}>ONE JOURNEY · TWO TEAMS</p>
          <h2 id="handoff-title" className={styles.title}>Un proceso. Dos equipos.<br /><em>Cada uno donde más valor aporta.</em></h2>
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
                {aaraGroups.map((group) => (
                  <div className={styles.group} key={group.title}>
                    <span className={`${styles.groupTitle} ${styles.aaraAccent}`}>{group.title}</span>
                    <p className={styles.groupDesc}>{group.desc}</p>
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
                {vpiGroups.map((group) => (
                  <div className={styles.group} key={group.title}>
                    <span className={`${styles.groupTitle} ${styles.vpiAccent}`}>{group.title}</span>
                    <p className={styles.groupDesc}>{group.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <p className={styles.closing}>Aara prepara el camino desde India. VPI ayuda a resolver desde España una de las piezas clave del proceso.</p>
      </div>
    </section>
  );
}
