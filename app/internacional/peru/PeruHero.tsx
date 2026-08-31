import Image from 'next/image';
import {
  BriefcaseBusiness,
  CalendarDays,
  ClipboardCheck,
  FileText,
  FolderSearch,
  GraduationCap,
  Landmark,
  MessagesSquare,
  Plane,
  Ship,
} from 'lucide-react';

import styles from './PeruHero.module.css';

const imageRoot = '/images/internacional/peru';

const destinations = [
  { name: 'España', descriptor: 'Estudios y residencia', Icon: GraduationCap },
  { name: 'Estados Unidos', descriptor: 'Visados', Icon: Plane },
  { name: 'Canadá', descriptor: 'Turismo y trabajo', Icon: BriefcaseBusiness },
  { name: 'Australia', descriptor: 'Visados', Icon: Ship },
  { name: 'China', descriptor: 'Visados', Icon: Landmark },
  { name: 'Asia Pacífico (APEC)', descriptor: 'Business travel', Icon: BriefcaseBusiness },
  { name: 'Italia', descriptor: 'Ciudadanía', Icon: Landmark },
] as const;

const capabilities = [
  { label: 'VISADOS', description: 'Turismo, estudios, trabajo y más.', Icon: FileText },
  { label: 'EXPEDIENTES', description: 'Preparación y revisión experta.', Icon: FolderSearch },
  { label: 'CITAS', description: 'Embajadas y consulados.', Icon: CalendarDays },
  { label: 'ENTREVISTAS', description: 'Preparación personalizada.', Icon: MessagesSquare },
  { label: 'DOCUMENTACIÓN', description: 'Apostillas, notarías, traducciones.', Icon: ClipboardCheck },
  { label: 'CASOS COMPLEJOS', description: 'Familias, denegaciones y recursos.', Icon: FolderSearch },
] as const;

export function PeruHero() {
  return (
    <section className={styles.hero} aria-labelledby="peru-hero-title">
      <div className={styles.inner}>
        <div className={styles.main}>
          <div className={styles.copy}>
            <div className={styles.eyebrowRow}>
              <span className={styles.peruFlag} aria-label="Perú" role="img" />
              <p className={styles.eyebrow}>PERÚ · ESPAÑA · MOVILIDAD INTERNACIONAL</p>
            </div>
            <h1 id="peru-hero-title" className={styles.title}>
              <span>Perú puede ser</span>
              <span>el inicio.</span>
              <em>O el destino.</em>
            </h1>
            <p className={styles.intro}>
              Visados, documentación y asesoría para moverte entre Perú, España y los principales destinos del mundo.
              <span>Con el respaldo de VIP Global Perú y VPI.</span>
            </p>
            <div className={styles.actions}>
              <a className={styles.primaryAction} href="#contacto">
                Explorar mis opciones <span aria-hidden="true">→</span>
              </a>
              <a className={styles.secondaryAction} href="#contacto">
                Hablar con un asesor
              </a>
            </div>
            <a className={styles.destinationLink} href="#residencia-peru">
              ¿Quieres establecerte en Perú? Ver opciones de residencia, estudios y trabajo →
            </a>
          </div>

          <div className={styles.visual}>
            <div className={styles.photo}>
              <Image
                src={`${imageRoot}/peru-hero-lima.jpg`}
                alt="Costa de Lima, Perú"
                fill
                priority
                sizes="(max-width: 767px) 100vw, 65vw"
              />
            </div>

            <div className={styles.destinations}>
              <p className={styles.destinationsLabel}>DESTINOS DESDE PERÚ</p>
              <div className={styles.destinationGrid}>
                {destinations.map(({ name, descriptor, Icon }) => (
                  <div className={styles.destination} key={name}>
                    <Icon aria-hidden="true" strokeWidth={1.5} />
                    <strong>{name}</strong>
                    <span>{descriptor}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className={styles.capabilities} aria-label="Capacidades de servicio">
          {capabilities.map(({ label, description, Icon }) => (
            <div className={styles.capability} key={label}>
              <Icon aria-hidden="true" strokeWidth={1.5} />
              <div>
                <strong>{label}</strong>
                <span>{description}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
