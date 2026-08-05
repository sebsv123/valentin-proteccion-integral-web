import { ClipboardCheck, Files, SlidersHorizontal, UsersRound } from 'lucide-react';
import styles from './business-health-process-section.module.css';

const steps = [
  { number: '01', title: 'Entendemos la composición del equipo', copy: 'Revisamos cuántas personas podrían asegurarse, sus rangos de edad, la provincia y la fecha prevista.', resultLabel: 'DATOS DE PARTIDA', result: 'Tamaño aproximado del colectivo, edades, ubicación y calendario.', Icon: UsersRound },
  { number: '02', title: 'Definimos qué cobertura tiene sentido', copy: 'Aclaramos si la empresa busca asistencia ambulatoria, hospitalización, copagos, reembolso o cobertura durante viajes.', resultLabel: 'PRIORIDADES', result: 'Coberturas necesarias y nivel de coste que se quiere estudiar.', Icon: SlidersHorizontal },
  { number: '03', title: 'Comparamos las diferencias relevantes', copy: 'Presentamos alternativas indicando qué cambia en cobertura, condiciones, copagos y coste.', resultLabel: 'COMPARACIÓN', result: 'Opciones explicadas con sus principales diferencias.', Icon: Files },
  { number: '04', title: 'Preparamos la contratación y las altas', copy: 'Acompañamos la implantación, resolvemos las dudas del equipo y explicamos cómo gestionar las incorporaciones posteriores.', resultLabel: 'IMPLANTACIÓN', result: 'Proceso de contratación, comunicación y gestión posterior.', Icon: ClipboardCheck },
];

export function BusinessHealthProcessSection() {
  return (
    <section className={styles.section} aria-labelledby="business-health-process-title">
      <div className={`container-shell ${styles.shell}`}>
        <div className={styles.layout}>
          <div className={styles.editorial}>
            <header className={styles.heading}>
              <p className={styles.eyebrow}>CÓMO PREPARAMOS LA PROPUESTA</p>
              <h2 id="business-health-process-title">De los datos iniciales a una propuesta lista para presentar</h2>
              <span className={styles.rule} aria-hidden="true" />
              <p>Primero revisamos la composición del equipo y las prioridades de cobertura. Después comparamos las alternativas y dejamos claras las condiciones necesarias para implantar la solución.</p>
            </header>
            <div className={styles.outcome}>
              <p className={styles.outcomeLabel}>RESULTADO</p>
              <h3>Una comparación que la empresa puede revisar internamente</h3>
              <p>La propuesta recoge las diferencias de cobertura, coste, copagos, condiciones y forma de implantación.</p>
            </div>
          </div>
          <div className={styles.track}>
            {steps.map(({ number, title, copy, resultLabel, result, Icon }) => (
              <article className={styles.step} key={number}>
                <div className={styles.stepNumber}>{number}</div>
                <div className={styles.stepMain}><h3>{title}</h3><p>{copy}</p></div>
                <div className={styles.result}><Icon aria-hidden="true" /><div><p>{resultLabel}</p><span>{result}</span></div></div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
