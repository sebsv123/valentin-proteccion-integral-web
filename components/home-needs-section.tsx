import Link from 'next/link';
import Image from 'next/image';
import styles from './home-needs-section.module.css';

type HomeNeedsSectionProps = {
  locale: 'es' | 'en';
};

const needs = [
  { label: 'Vivir o estudiar en España', labelEn: 'Moving to or studying in Spain', href: '/extranjeros', hrefEn: '/en/foreigners' },
  { label: 'Cuidar mi salud', labelEn: 'Take care of my health', href: '/seguros/salud', hrefEn: '/en/insurance/health' },
  { label: 'Proteger a mi familia', labelEn: 'Protect my family', href: '/para/familias', hrefEn: '/en/for/families' },
  { label: 'Vida o hipoteca', labelEn: 'Life or mortgage', href: '/contacto', hrefEn: '/en/contact' },
  { label: 'Proteger mi negocio', labelEn: 'Protect my business', href: '/empresas', hrefEn: '/en/business' },
  { label: 'Tengo otra necesidad', labelEn: 'I have another need', href: '/contacto', hrefEn: '/en/contact' },
] as const;

export function HomeNeedsSection({ locale }: HomeNeedsSectionProps) {
  const en = locale === 'en';

  return (
    <section className={styles.section} aria-labelledby="home-needs-title" data-home-section="needs">
      <div className={`container-shell ${styles.layout}`}>
        <header className={styles.heading}>
          <p className={styles.eyebrow}>{en ? 'START WITH YOUR SITUATION' : 'EMPIEZA POR TU SITUACIÓN'}</p>
          <h2 id="home-needs-title" className={styles.title}>
            {en ? 'The right insurance starts with the right question.' : 'El seguro correcto empieza por una buena pregunta.'}
          </h2>
          <figure className={styles.imageFrame}>
            <Image
              src="/images/home/needs-consultation.webp"
              alt={en ? 'Two people reviewing options together in a bright office' : 'Dos personas revisan opciones juntas en una oficina luminosa'}
              width={1672}
              height={941}
              sizes="(max-width: 820px) calc(100vw - 32px), (max-width: 1100px) 36vw, 34vw"
              className={styles.image}
            />
          </figure>
        </header>

        <nav className={styles.list} aria-label={en ? 'Choose what you need' : 'Elige lo que necesitas'}>
          {needs.map((need, index) => (
            <Link key={`${need.href}-${index}`} href={en ? need.hrefEn : need.href} className={styles.row}>
              <span className={styles.number} aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
              <span className={styles.label}>{en ? need.labelEn : need.label}</span>
              <span className={styles.arrow} aria-hidden="true">→</span>
            </Link>
          ))}
        </nav>
      </div>
    </section>
  );
}
