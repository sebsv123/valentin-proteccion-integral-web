import Link from 'next/link';
import { ArrowRight, Building2, CalendarClock, Coins, FileChartColumn, RefreshCw, ShieldCheck, UsersRound } from 'lucide-react';
import styles from './business-health-cost-section.module.css';

const factors = [
  { number: '01', title: 'Nivel de cobertura', copy: 'Añadir hospitalización o reembolso suele elevar la prima.', Icon: ShieldCheck, area: 'level' },
  { number: '02', title: 'Copagos', copy: 'Pagar una cantidad por uso puede reducir la cuota.', Icon: Coins, area: 'copay' },
  { number: '03', title: 'Reembolso', copy: 'La libre elección médica amplía la cobertura y el coste.', Icon: RefreshCw, area: 'refund' },
  { number: '04', title: 'Composición del equipo', copy: 'La edad, la provincia y el número de personas influyen en la propuesta.', Icon: UsersRound, area: 'team' },
  { number: '05', title: 'Forma de pago', copy: 'La periodicidad puede aplicar descuentos según modalidad.', Icon: CalendarClock, area: 'payment' },
];

function CostBoard() {
  return <div className={styles.boardWrap}>
    <div className={styles.board}>
      <div className={styles.decorativeRing} aria-hidden="true" />
      <div className={styles.center} style={{ gridArea: 'center' }}><div className={styles.centerCircle}><Building2 aria-hidden="true" /><small>TU EMPRESA</small><strong>Coste de la cobertura</strong></div></div>
      {factors.map(({ number, title, copy, Icon, area }) => <article className={`${styles.factor} ${styles[area]}`} style={{ gridArea: area }} key={number}><div className={styles.factorIcon}><Icon aria-hidden="true" /></div><div className={styles.factorText}><div className={styles.factorTitle}><span>{number}</span><h3>{title}</h3></div><p>{copy}</p></div></article>)}
    </div>
    <p className={styles.commonNote}>El efecto exacto de cada factor depende de la modalidad y de las condiciones de contratación.</p>
  </div>;
}

export function BusinessHealthCostSection() {
  return <section className={styles.section} aria-labelledby="business-health-cost-title"><div className={`container-shell ${styles.shell}`}>
    <div className={styles.layout}><div className={styles.intro}><p className={styles.eyebrow}>CONTROL DEL COSTE</p><h2 id="business-health-cost-title"><span>La prima cambia</span><span>según las decisiones</span><span>que tome la empresa</span></h2><span className={styles.rule} /><p>El precio no depende únicamente del número de personas aseguradas.</p><p>También influyen la edad, la provincia, el nivel de cobertura, los copagos, el reembolso y la forma de pago.</p></div><CostBoard /></div>
    <div className={styles.close}><div className={styles.closeIcon}><FileChartColumn aria-hidden="true" /></div><div className={styles.closeCopy}><h3>Primero definimos la cobertura. Después calculamos el coste.</h3><p>Con el número aproximado de personas, sus edades, la provincia y el nivel de cobertura, preparamos una comparación clara para la empresa.</p></div><Link href="#solicitar-estudio">Solicitar una comparación <ArrowRight aria-hidden="true" /></Link></div>
  </div></section>;
}
