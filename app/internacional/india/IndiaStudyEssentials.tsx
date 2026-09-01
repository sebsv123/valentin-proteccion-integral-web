import { Home, Briefcase, Compass } from 'lucide-react';
import styles from './IndiaStudyEssentials.module.css';
import type { IndiaContent } from './india-content';

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

export function IndiaStudyEssentials({ content }: { content: IndiaContent['essentials'] }) {
  return (
    <section className={styles.section} aria-labelledby="essentials-title">
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.left}>
            <p className={styles.eyebrow}>{content.eyebrow}</p>
            <h2 id="essentials-title" className={styles.title}>{content.title[0]}<br /><em>{content.title[1]}</em></h2>
            <p className={styles.intro}>{content.intro}</p>
            <div className={styles.quickFacts}>
              {content.facts.map((fact: string) => <span className={styles.quickFact} key={fact}>{fact}</span>)}
            </div>
            <p className={styles.disclaimer}>{content.disclaimer}</p>
          </div>

          <div className={styles.chapters}>
            <div className={styles.chapter}>
              <div className={styles.chapterHead}>
                <span className={styles.chapterNumber}>01</span>
                <h3 className={styles.chapterTitle}>Admission</h3>
              </div>
              <div className={styles.chapterBody}>
                <div className={styles.admissionGrid}>
                  {content.admission.map((group: [string,string[]]) => (
                    <div key={group[0]}>
                      <span className={styles.subLabel}>{group[0]}</span>
                      <ul className={styles.bulletList}>
                        {group[1].map((point: string) => <li key={point}>{point}</li>)}
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
                <p className={styles.langPrimary}>{content.language[3]}</p>
                <p className={styles.langSecondary}>{content.language[4]}</p>
              </div>
            </div>

            <div className={styles.chapter}>
              <div className={styles.chapterHead}>
                <span className={styles.chapterNumber}>03</span>
                <h3 className={styles.chapterTitle}>Budget</h3>
              </div>
              <div className={styles.chapterBody}>
                <div className={styles.budgetGrid}>
                  {content.budget.map((stat: [string,string]) => (
                    <div className={styles.budgetStat} key={stat[1]}>
                      <span className={styles.budgetValue}>{stat[0]}</span>
                      <span className={styles.budgetLabel}>{stat[1]}</span>
                    </div>
                  ))}
                </div>
                <p className={styles.budgetNote}>{content.budgetNote}</p>
              </div>
            </div>

            <div className={styles.chapter}>
              <div className={styles.chapterHead}>
                <span className={styles.chapterNumber}>04</span>
                <h3 className={styles.chapterTitle}>Life in Spain</h3>
              </div>
              <div className={styles.chapterBody}>
                <div className={styles.lifeGrid}>
                  {lifeItems.map((item, i) => (
                    <div className={styles.lifeItem} key={item.label}>
                      <span className={styles.lifeIcon}><item.icon aria-hidden /></span>
                      <span className={styles.lifeLabel}>{item.label}</span>
                      <p className={styles.lifeDesc}>{content.life[i][1]}</p>
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
