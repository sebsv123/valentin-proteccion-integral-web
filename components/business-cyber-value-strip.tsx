import { Activity, ShieldCheck, Siren } from 'lucide-react';
import styles from './business-cyber-value-strip.module.css';

const values = [
  ['01', 'RESPUESTA', 'Coordinación especializada cuando el incidente altera la actividad.', Siren],
  ['02', 'CONTINUIDAD', 'Apoyo para contener la interrupción y ordenar la recuperación.', Activity],
  ['03', 'PROTECCIÓN', 'Coberturas técnicas, legales y económicas según modalidad.', ShieldCheck],
] as const;

export function BusinessCyberValueStrip() {
  return <section className={styles.section} aria-label="Valor de la ciberprotección"><div className={styles.inner}><p className={styles.kicker}>TRES CAPAS DE VALOR</p><div className={styles.grid}>{values.map(([number, title, text, Icon]) => <div className={styles.item} key={title}><span className={styles.number}>{number}</span><Icon aria-hidden="true" /><div><h2>{title}</h2><p>{text}</p></div></div>)}</div><p className={styles.note}>Las prestaciones, límites y servicios dependen de la solución contratada y de sus condiciones.</p></div></section>;
}
