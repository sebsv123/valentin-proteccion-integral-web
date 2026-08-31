import Image from 'next/image';
import styles from './PeruToWorld.module.css';

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

export function PeruToWorld() {
  return (
    <section className={styles.section} aria-labelledby="peru-world-title">
      <div className="container-shell">
        <div className={styles.grid}>
          <div className={styles.photo}>
            <Image src={`${imageRoot}/peru-aeropuerto.jpg`} alt="Viajera con pasaporte y maleta lista para un vuelo internacional" fill sizes="(max-width: 1023px) 100vw, 45vw" />
          </div>
          <div className={styles.copy}>
            <p className={styles.eyebrow}>PERÚ → MUNDO</p>
            <h2 id="peru-world-title" className={styles.title}>Perú también <em>conecta con otros destinos.</em></h2>
            <p className={styles.intro}>VIP Global Perú trabaja distintos corredores internacionales desde Lima, más allá de España.</p>
            <div className={styles.panel}>
              {routeGroups.map((group) => (
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
