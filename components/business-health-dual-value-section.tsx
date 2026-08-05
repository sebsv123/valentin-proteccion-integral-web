import { BriefcaseBusiness, Check, UsersRound } from 'lucide-react';
import styles from './business-health-dual-value-section.module.css';

const sides = [
  { label: 'PARA LA EMPRESA', title: 'Qué puede obtener la empresa', copy: 'La empresa puede definir la cobertura y cómo asume el coste.', Icon: BriefcaseBusiness, points: ['Distintas formas de financiar la cobertura.', 'Modalidades adaptables al presupuesto.', 'Apoyo en la comparación y la implantación.'] },
  { label: 'PARA EL EQUIPO', title: 'Qué recibe el equipo', copy: 'El acceso a servicios médicos depende de la modalidad contratada.', Icon: UsersRound, points: ['Consultas, especialistas y pruebas.', 'Hospitalización en modalidades completas.', 'Reembolso y familiares cuando la contratación lo permita.'] },
];

export function BusinessHealthDualValueSection() {
  return <section className={styles.section} aria-labelledby="business-health-value-title"><div className={`container-shell ${styles.shell}`}><header className={styles.heading}><p className={styles.eyebrow}>VALOR PARA LA EMPRESA Y PARA EL EQUIPO</p><h2 id="business-health-value-title">Qué obtiene la empresa y qué recibe el equipo</h2><p>La empresa puede definir el nivel de cobertura y la forma de asumir el coste. El equipo accede a servicios médicos según la modalidad contratada.</p></header><div className={styles.composition}>{sides.map(({label,title,copy,Icon,points},index)=><article className={`${styles.side} ${index===0?styles.company:styles.team}`} key={label}><div className={styles.sideTop}><span aria-hidden="true"><Icon /></span><p>{label}</p></div><h3>{title}</h3><p className={styles.sideCopy}>{copy}</p><ul>{points.map((point)=><li key={point}><Check aria-hidden="true" />{point}</li>)}</ul></article>)}</div></div></section>;
}
