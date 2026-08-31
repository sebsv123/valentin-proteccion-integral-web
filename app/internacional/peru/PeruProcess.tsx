import Image from 'next/image';

import styles from './PeruProcess.module.css';

const operatingLayers = [
  {
    number: '01',
    eyebrow: 'ESTRATEGIA',
    title: 'Diagnóstico y ruta',
    description: 'Evaluación del caso · objetivo · requisitos · planificación',
  },
  {
    number: '02',
    eyebrow: 'EXPEDIENTE',
    title: 'Preparación y ejecución',
    description: 'Documentación · solicitudes · citas · entrevistas · seguimiento',
  },
  {
    number: '03',
    eyebrow: 'COORDINACIÓN LOCAL',
    title: 'Gestión institucional',
    description: 'Registros · ministerios · legalizaciones · notarías · traducciones',
  },
] as const;

const capabilityGroups = [
  {
    title: 'ENTIDADES Y DOCUMENTACIÓN',
    tags: ['RENIEC', 'MTC', 'Relaciones Exteriores', 'SUNEDU', 'MINEDU'],
  },
  {
    title: 'LEGALIZACIÓN',
    tags: ['Apostillas', 'Notarías'],
  },
  {
    title: 'IDIOMAS',
    tags: ['Traducciones oficiales'],
  },
] as const;

const processSteps = ['Diagnóstico', 'Documentación', 'Expediente', 'Citas', 'Seguimiento', 'Resolución'];

export function PeruProcess() {
  return (
    <section className={styles.section} aria-labelledby="process-title">
      <div className="container-shell">
        <div className={styles.main}>
          <div className={styles.introduction}>
            <p className={styles.eyebrow}>VIP GLOBAL PERÚ</p>
            <Image
              className={styles.logo}
              src="/images/internacional/vip-global-peru-official.jpeg"
              alt="Logo oficial de VIP Global Perú"
              width={250}
              height={94}
            />
            <h2 id="process-title" className={styles.title}>
              <span>Un visado es el resultado.</span>
              <em>Detrás hay mucho más.</em>
            </h2>
            <p className={styles.intro}>
              Cada caso combina estrategia migratoria, documentación, coordinación institucional y seguimiento. VIP Global Perú conecta esas piezas para convertir un proceso complejo en un expediente organizado.
            </p>
          </div>

          <div className={styles.operation}>
            <div className={styles.layers}>
              {operatingLayers.map((layer) => (
                <article className={styles.layer} key={layer.number}>
                  <span className={styles.layerNumber}>{layer.number}</span>
                  <div className={styles.layerContent}>
                    <p className={styles.layerEyebrow}>{layer.eyebrow}</p>
                    <h3>{layer.title}</h3>
                    <p>{layer.description}</p>
                  </div>
                </article>
              ))}
            </div>

            <div className={styles.network}>
              <p className={styles.networkTitle}>RED OPERATIVA EN PERÚ</p>
              <div className={styles.capabilityGroups}>
                {capabilityGroups.map((group) => (
                  <div className={styles.capabilityGroup} key={group.title}>
                    <h4>{group.title}</h4>
                    <div className={styles.capabilityTags}>
                      {group.tags.map((tag) => <span className={styles.capabilityTag} key={tag}>{tag}</span>)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className={styles.timeline} aria-label="Línea secundaria del proceso">
          {processSteps.map((step, index) => (
            <span key={step}>
              {step}
              {index < processSteps.length - 1 && <b aria-hidden="true">→</b>}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
