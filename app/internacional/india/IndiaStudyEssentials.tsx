import { Home, Briefcase, Compass } from 'lucide-react';
import styles from './IndiaStudyEssentials.module.css';

const quickFacts = ['Bachelor / Master', 'Spanish or English', '€800–€1.200 / month', 'Study + life planning'];

const admissionGroups = [
  {
    label: 'Bachelor',
    points: [
      'Certificado académico válido.',
      'Para estudiantes no UE/EEE pueden aplicar procesos de reconocimiento u homologación.',
      'Según programa y universidad pueden existir requisitos adicionales.',
    ],
  },
  {
    label: 'Master',
    points: [
      'Titulación universitaria relevante.',
      'Requisitos específicos según institución.',
    ],
  },
];

const budgetStats = [
  { value: '€750–€2.500', label: 'Bachelor público / año' },
  { value: '€1.000–€3.500', label: 'Master público / año' },
  { value: '€800–€1.200', label: 'Coste de vida / mes' },
];

const lifeItems = [
  { icon: Home, label: 'LIVE', desc: 'Alojamiento y vida universitaria.' },
  { icon: Briefcase, label: 'WORK', desc: 'Trabajo compatible con estudios cuando la normativa lo permita.' },
  { icon: Compass, label: 'NEXT', desc: 'Planificación de la etapa posterior a los estudios.' },
];

export function IndiaStudyEssentials() {
  return (
    <section className={styles.section} aria-labelledby="essentials-title">
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.left}>
            <p className={styles.eyebrow}>STUDY IN SPAIN</p>
            <h2 id="essentials-title" className={styles.title}>Lo esencial que conviene entender<br /><em>antes de empezar.</em></h2>
            <p className={styles.intro}>Antes de aplicar conviene tener claros cuatro frentes: requisitos académicos, idioma, presupuesto y vida práctica en España.</p>
            <div className={styles.quickFacts}>
              {quickFacts.map((fact) => <span className={styles.quickFact} key={fact}>{fact}</span>)}
            </div>
            <p className={styles.disclaimer}>Las cifras de presupuesto son orientativas, no precios garantizados. Los requisitos concretos dependen siempre del programa y de la universidad.</p>
          </div>

          <div className={styles.chapters}>
            <div className={styles.chapter}>
              <div className={styles.chapterHead}>
                <span className={styles.chapterNumber}>01</span>
                <h3 className={styles.chapterTitle}>Admission</h3>
              </div>
              <div className={styles.chapterBody}>
                <div className={styles.admissionGrid}>
                  {admissionGroups.map((group) => (
                    <div key={group.label}>
                      <span className={styles.subLabel}>{group.label}</span>
                      <ul className={styles.bulletList}>
                        {group.points.map((point) => <li key={point}>{point}</li>)}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className={styles.chapter}>
              <div className={styles.chapterHead}>
                <span className={styles.chapterNumber}>02</span>
                <h3 className={styles.chapterTitle}>Language</h3>
              </div>
              <div className={styles.chapterBody}>
                <div className={styles.langChipRow}>
                  <span className={styles.langChip}>SPANISH</span>
                  <span className={styles.langChip}>ENGLISH</span>
                </div>
                <p className={styles.langPrimary}>DELE · IELTS · TOEFL · otras acreditaciones aceptadas</p>
                <p className={styles.langSecondary}>Los requisitos concretos dependen del programa y la universidad.</p>
              </div>
            </div>

            <div className={styles.chapter}>
              <div className={styles.chapterHead}>
                <span className={styles.chapterNumber}>03</span>
                <h3 className={styles.chapterTitle}>Budget</h3>
              </div>
              <div className={styles.chapterBody}>
                <div className={styles.budgetGrid}>
                  {budgetStats.map((stat) => (
                    <div className={styles.budgetStat} key={stat.label}>
                      <span className={styles.budgetValue}>{stat.value}</span>
                      <span className={styles.budgetLabel}>{stat.label}</span>
                    </div>
                  ))}
                </div>
                <p className={styles.budgetNote}>Las universidades privadas pueden superar ampliamente estas cifras.</p>
              </div>
            </div>

            <div className={styles.chapter}>
              <div className={styles.chapterHead}>
                <span className={styles.chapterNumber}>04</span>
                <h3 className={styles.chapterTitle}>Life in Spain</h3>
              </div>
              <div className={styles.chapterBody}>
                <div className={styles.lifeGrid}>
                  {lifeItems.map((item) => (
                    <div className={styles.lifeItem} key={item.label}>
                      <span className={styles.lifeIcon}><item.icon aria-hidden /></span>
                      <span className={styles.lifeLabel}>{item.label}</span>
                      <p className={styles.lifeDesc}>{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
