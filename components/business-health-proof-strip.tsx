import { CirclePercent, Plane, ShieldCheck, UsersRound } from 'lucide-react';
import styles from './business-health-proof-strip.module.css';

const proofItems = [
  { Icon: UsersRound, value: 'Desde 2 asegurados', copy: 'Para pequeños equipos' },
  { Icon: Plane, value: 'Hasta 20.000 €', copy: 'Asistencia en viaje' },
  { Icon: CirclePercent, value: 'Hasta el 90 %', copy: 'Reembolso en España' },
  { Icon: ShieldCheck, value: 'Hasta 180.000 €', copy: 'Límite anual de reembolso' },
];

export function BusinessHealthProofStrip() {
  return <section className={styles.section} aria-label="Datos orientativos de salud para empresas"><div className={`container-shell ${styles.shell}`}><div className={styles.strip}>{proofItems.map(({ Icon, value, copy }) => <div className={styles.item} key={value}><span aria-hidden="true"><Icon /></span><div><strong>{value}</strong><p>{copy}</p></div></div>)}</div><p className={styles.disclaimer}>Límites y coberturas según modalidad y condiciones de contratación.</p></div></section>;
}
