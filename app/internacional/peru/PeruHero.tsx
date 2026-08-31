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
import type { PeruContent } from './peru-content';
import { peruContent } from './peru-content';

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

export function PeruHero({ content = peruContent.es.hero }: { content?: PeruContent['hero'] }) {
  return (
    <section className={styles.hero} aria-labelledby="peru-hero-title">
      <div className={styles.inner}>
        <div className={styles.main}>
          <div className={styles.copy}>
            <div className={styles.eyebrowRow}>
              <span className={styles.peruFlag} aria-label={content.eyebrow.split(' · ')[0]} role="img" />
              <p className={styles.eyebrow}>{content.eyebrow}</p>
            </div>
            <h1 id="peru-hero-title" className={styles.title}>
              <span>{content.title[0]}</span>
              <span>{content.title[1]}</span>
              <em>{content.title[2]}</em>
            </h1>
            <p className={styles.intro}>
              {content.intro}
              <span>{content.introSupport}</span>
            </p>
            <div className={styles.actions}>
              <a className={styles.primaryAction} href="#contacto">
                {content.primary} <span aria-hidden="true">→</span>
              </a>
              <a className={styles.secondaryAction} href="#contacto">
                {content.secondary}
              </a>
            </div>
            <a className={styles.destinationLink} href="#residencia-peru">
              {content.tertiary}
            </a>
          </div>

          <div className={styles.visual}>
            <div className={styles.photo}>
              <Image
                src={`${imageRoot}/peru-hero-lima.jpg`}
                alt={content.imageAlt}
                fill
                priority
                sizes="(max-width: 767px) 100vw, 65vw"
              />
            </div>

            <div className={styles.destinations}>
              <p className={styles.destinationsLabel}>{content.eyebrow.startsWith('PERU') ? 'DESTINATIONS FROM PERU' : 'DESTINOS DESDE PERÚ'}</p>
              <div className={styles.destinationGrid}>
                {content.destinations.map(({ name, descriptor, Icon }) => (
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
          {content.capabilities.map(({ label, description, Icon }) => (
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
