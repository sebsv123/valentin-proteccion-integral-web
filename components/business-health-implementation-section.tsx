import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import styles from './business-health-implementation-section.module.css';

const models = [
  { number: '01', label: 'BENEFICIO SOCIAL', title: 'La empresa asume la prima', copy: 'La empresa asume total o parcialmente la prima como parte de su política retributiva.' },
  { number: '02', label: 'RETRIBUCIÓN FLEXIBLE', title: 'El trabajador destina parte de su salario bruto', copy: 'El trabajador destina voluntariamente parte de su salario bruto al seguro.' },
  { number: '03', label: 'APORTACIÓN COMPARTIDA', title: 'La empresa y el trabajador comparten el coste', copy: 'La empresa fija una aportación y el trabajador completa el resto cuando la solución lo permite.' },
];

export function BusinessHealthImplementationSection() {
  return <section className={styles.section} aria-labelledby="business-health-implementation-title"><div className={`container-shell ${styles.shell}`}><header className={styles.heading}><p className={styles.eyebrow}>CÓMO PUEDE IMPLANTARSE</p><h2 id="business-health-implementation-title">Tres formas de asumir el coste</h2><p>La empresa puede pagar la prima, facilitar retribución flexible o compartir el coste con el trabajador.</p></header><div className={styles.track}>{models.map(({number,label,title,copy})=><article className={styles.model} key={number}><div className={styles.modelHead}><span>{number}</span><p>{label}</p></div><h3>{title}</h3><p className={styles.modelCopy}>{copy}</p></article>)}</div><Link href="#solicitar-estudio" className={styles.cta}>Estudiar la mejor fórmula para mi empresa <ArrowRight aria-hidden="true" /></Link></div></section>;
}
