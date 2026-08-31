import Image from 'next/image';
import styles from './PeruToWorld.module.css';
import type { PeruContent } from './peru-content';
import { peruContent } from './peru-content';

const imageRoot = '/images/internacional/peru';

const routeGroups = [
  {
    label: 'Visados de destino',
    routes: [
      { name: 'Estados Unidos', note: 'Asesoría y preparación del expediente para visado americano.' },
      { name: 'Canadá', note: 'Evaluación del caso y documentación para el proceso canadiense.' },
      { name: 'China', note: 'Gestión documental para estancias superiores a 90 días.' },
      { name: 'Australia', note: 'Preparación del expediente para estancias prolongadas.' },
      { name: 'España', note: 'Visado de estudiante, con VPI reforzando la parte del seguro médico.' },
    ],
  },
  {
    label: 'Programas especiales',
    routes: [
      { name: 'Tarjeta APEC', note: 'Facilita viajes de negocios entre economías de Asia-Pacífico.' },
      { name: 'Ciudadanía italiana', note: 'Orientación y preparación documental para el proceso.' },
    ],
  },
];

export function PeruToWorld({ content = peruContent.es.toWorld }: { content?: PeruContent['toWorld'] }) {
  return (
    <section className={styles.section} aria-labelledby="peru-world-title">
      <div className="container-shell">
        <div className={styles.grid}>
          <div className={styles.photo}>
            <Image src={`${imageRoot}/peru-aeropuerto.jpg`} alt={content.imageAlt} fill sizes="(max-width: 1023px) 100vw, 45vw" />
          </div>
          <div className={styles.copy}>
            <p className={styles.eyebrow}>{content.eyebrow}</p>
            <h2 id="peru-world-title" className={styles.title}>{content.title[0]} <em>{content.title[1]}</em></h2>
            <p className={styles.intro}>{content.intro}</p>
            <div className={styles.panel}>
              {content.groups.map((group) => (
                <div className={styles.group} key={group.label}>
                  <span className={styles.groupLabel}>{group.label}</span>
                  <div className={styles.routeList}>
                    {group.routes.map((route) => (
                      <div className={styles.route} key={route.name}>
                        <span className={styles.routeDot} aria-hidden="true" />
                        <span className={styles.routeName}>{route.name}</span>
                        <span className={styles.routeNote}>{route.note}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
