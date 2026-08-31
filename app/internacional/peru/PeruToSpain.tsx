import Image from 'next/image';

import styles from './PeruToSpain.module.css';

const stages = [
  {
    number: '01',
    label: 'VIP GLOBAL PERÚ',
    title: 'Preparar el expediente',
    description: 'Visado de estudiante · documentación · estrategia del caso',
    tone: 'copper',
  },
  {
    number: '02',
    label: 'VIP GLOBAL PERÚ',
    title: 'Gestionar el proceso',
    description: 'Citas · entrevistas · seguimiento',
    tone: 'copper',
  },
  {
    number: '03',
    label: 'VIP GLOBAL + VPI',
    title: 'Resolver el seguro',
    description: 'Seguro médico para extranjería y visados en España · documentación del seguro',
    tone: 'transition',
  },
  {
    number: '04',
    label: 'ESPAÑA · VPI',
    title: 'Empezar la etapa en España',
    description: 'Apoyo desde España · llegada · alojamiento en Madrid',
    tone: 'teal',
  },
] as const;

export function PeruToSpain() {
  return (
    <section className={styles.section} aria-labelledby="peru-spain-title">
      <div className="container-shell">
        <header className={styles.header}>
          <p className={styles.eyebrow}>PERÚ → ESPAÑA</p>
          <h2 id="peru-spain-title" className={styles.title}>
            <span>Desde Perú hacia España,</span>
            <em>con el proceso mucho más claro.</em>
          </h2>
          <p className={styles.intro}>Del expediente en Perú al seguro médico y la llegada a España: cada etapa tiene un equipo especializado detrás.</p>
        </header>

        <div className={styles.routeArea}>
          <div className={styles.endpointOrigin}>
            <span className={styles.endpointLabel}>PERÚ</span>
            <Image className={styles.vipLogo} src="/images/internacional/vip-global-peru-official.jpeg" alt="Logo oficial de VIP Global Perú" width={138} height={52} />
            <span className={styles.endpointNote}>Origen y preparación</span>
          </div>

          <div className={styles.timeline}>
            <div className={styles.timelineLine} aria-hidden="true" />
            <div className={styles.stages}>
              {stages.map((stage) => (
                <article className={`${styles.stage} ${styles[stage.tone]}`} key={stage.number}>
                  <span className={styles.stageNode} aria-hidden="true" />
                  <span className={styles.stageNumber}>{stage.number}</span>
                  <p className={styles.stageLabel}>{stage.label}</p>
                  <h3>{stage.title}</h3>
                  <p className={styles.stageDescription}>{stage.description}</p>
                </article>
              ))}
            </div>
          </div>

          <div className={styles.endpointDestination}>
            <span className={styles.endpointLabel}>ESPAÑA</span>
            <span className={styles.vpiMedallion}>
                <Image src="/brand/vpi-isotipo.png" alt="Isotipo de VPI" width={70} height={70} />
            </span>
            <span className={styles.endpointNote}>Seguro y llegada</span>
          </div>
        </div>

        <p className={styles.closing}>Un mismo recorrido, con el equipo adecuado en cada lado.</p>
        <p className={styles.disclaimer}>Ningún proceso migratorio tiene una aprobación garantizada. Cada caso se revisa según su documentación y los requisitos vigentes de cada entidad.</p>
      </div>
    </section>
  );
}
