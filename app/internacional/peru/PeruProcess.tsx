import Image from 'next/image';

import styles from './PeruProcess.module.css';
import type { PeruContent } from './peru-content';
import { peruContent } from './peru-content';

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

export function PeruProcess({ content = peruContent.es.process }: { content?: PeruContent['process'] }) {
  return (
    <section className={styles.section} aria-labelledby="process-title">
      <div className="container-shell">
        <div className={styles.main}>
          <div className={styles.introduction}>
            <p className={styles.eyebrow}>{content.eyebrow}</p>
            <Image
              className={styles.logo}
              src="/images/internacional/vip-global-peru-official.jpeg"
              alt={content.logoAlt}
              width={250}
              height={94}
            />
            <h2 id="process-title" className={styles.title}>
              <span>{content.title[0]}</span>
              <em>{content.title[1]}</em>
            </h2>
            <p className={styles.intro}>
              {content.intro}
            </p>
          </div>

          <div className={styles.operation}>
            <div className={styles.layers}>
              {content.layers.map((layer) => (
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
              <p className={styles.networkTitle}>{content.networkTitle}</p>
              <div className={styles.capabilityGroups}>
                {content.groups.map((group) => (
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
          {content.steps.map((step, index) => (
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
