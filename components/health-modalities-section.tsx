import Link from 'next/link';
import {
  ArrowRight,
  BedDouble,
  BriefcaseBusiness,
  Globe2,
  MessageCircleMore,
  Stethoscope,
  UserRound,
  UsersRound,
  WalletCards,
} from 'lucide-react';
import { useLocale } from 'next-intl';
import styles from './health-modalities-section.module.css';

type DecisionOption = {
  eyebrow: string;
  title: string;
  copy: string;
  action: string;
  href: string;
  icon: typeof Stethoscope;
};

const coverageOptions: Record<'es' | 'en', DecisionOption[]> = {
  es: [
    {
      eyebrow: 'AMBULATORIO',
      title: 'Ambulatorio: especialistas y pruebas',
      copy: 'Para quien busca consultas, especialistas y pruebas diagnósticas sin tomar la hospitalización como necesidad principal. Los servicios concretos dependen del producto.',
      action: 'Revisar esta opción',
      href: '/contacto',
      icon: Stethoscope,
    },
    {
      eyebrow: 'HOSPITALIZACIÓN',
      title: 'Completa: asistencia y hospitalización',
      copy: 'Añade la dimensión de hospitalización y cirugía, que conviene revisar por separado del acceso ambulatorio.',
      action: 'Explorar salud completa',
      href: '/seguros/salud/completa',
      icon: BedDouble,
    },
    {
      eyebrow: 'LIBRE ELECCIÓN',
      title: 'Reembolso: más libertad de elección',
      copy: 'Útil si quieres revisar la posibilidad de acudir a profesionales fuera del cuadro médico, según las condiciones de la póliza.',
      action: 'Entender el reembolso',
      href: '/seguros/salud/reembolso',
      icon: WalletCards,
    },
  ],
  en: [
    {
      eyebrow: 'OUTPATIENT',
      title: 'Outpatient: specialists and tests',
      copy: 'For people mainly seeking consultations, specialists and diagnostic services without making hospitalisation the primary need. Exact services depend on the plan.',
      action: 'Review this option',
      href: '/en/contact',
      icon: Stethoscope,
    },
    {
      eyebrow: 'HOSPITALISATION',
      title: 'Comprehensive: everyday care and hospitalisation',
      copy: 'Adds the hospitalisation and surgery dimension, which should be reviewed separately from outpatient access.',
      action: 'Explore comprehensive health cover',
      href: '/en/insurance/health-insurance/comprehensive',
      icon: BedDouble,
    },
    {
      eyebrow: 'FREE CHOICE',
      title: 'Reimbursement: more freedom of choice',
      copy: 'Useful to review when you want the possibility of seeing providers outside the standard medical network, subject to the policy terms.',
      action: 'Understand reimbursement',
      href: '/en/insurance/health-insurance/reimbursement',
      icon: WalletCards,
    },
  ],
};

const profileOptions: Record<'es' | 'en', DecisionOption[]> = {
  es: [
    {
      eyebrow: 'SITUACIÓN',
      title: 'Familias',
      copy: 'La frecuencia de uso, la pediatría y los patrones de utilización del hogar pueden cambiar qué conviene revisar.',
      action: 'Ver salud para familias',
      href: '/seguros/salud/familias',
      icon: UsersRound,
    },
    {
      eyebrow: 'SITUACIÓN',
      title: 'Autónomos',
      copy: 'Revisa las necesidades de cobertura médica junto con tu situación profesional.',
      action: 'Ver salud para autónomos y pymes',
      href: '/empresas/salud',
      icon: BriefcaseBusiness,
    },
    {
      eyebrow: 'SITUACIÓN',
      title: 'Senior',
      copy: 'La edad, la aceptación y las condiciones disponibles deben comprobarse para el producto concreto.',
      action: 'Ver salud senior',
      href: '/seguros/salud/senior',
      icon: UserRound,
    },
    {
      eyebrow: 'SITUACIÓN',
      title: 'Extranjeros',
      copy: 'Los estudios, la residencia o una estancia larga pueden requerir una ruta propia de producto y documentación.',
      action: 'Ver salud para extranjeros',
      href: '/seguros/salud-extranjeros',
      icon: Globe2,
    },
  ],
  en: [
    {
      eyebrow: 'SITUATION',
      title: 'Families',
      copy: 'Expected use, paediatric care and household usage patterns can change what is worth reviewing.',
      action: 'View family health cover',
      href: '/en/insurance/health-insurance/families',
      icon: UsersRound,
    },
    {
      eyebrow: 'SITUATION',
      title: 'Self-employed',
      copy: 'Review your health-cover needs alongside your self-employed situation.',
      action: 'View business health for self-employed professionals and SMEs',
      href: '/en/business/health-insurance',
      icon: BriefcaseBusiness,
    },
    {
      eyebrow: 'SITUATION',
      title: 'Senior',
      copy: 'Age, acceptance and available conditions should be checked for the specific product.',
      action: 'View senior health cover',
      href: '/en/insurance/health-insurance/senior',
      icon: UserRound,
    },
    {
      eyebrow: 'SITUATION',
      title: 'Foreigners',
      copy: 'Study, residence or long-stay processes may require their own product and documentation path.',
      action: 'View health insurance for foreigners',
      href: '/en/insurance/health/foreigners',
      icon: Globe2,
    },
  ],
};

function DecisionCard({ option, cardStyles }: { option: DecisionOption; cardStyles: typeof styles }) {
  const Icon = option.icon;
  return (
    <article className={cardStyles.modalityCard}>
      <span className={cardStyles.modalityIcon} aria-hidden="true"><Icon /></span>
      <p className={cardStyles.modalityEyebrow}>{option.eyebrow}</p>
      <h3>{option.title}</h3>
      <p className={cardStyles.modalityCopy}>{option.copy}</p>
      <Link href={option.href} className={cardStyles.textAction}>{option.action}<ArrowRight aria-hidden="true" /></Link>
    </article>
  );
}

export function HealthModalitiesSection() {
  const locale = useLocale() === 'en' ? 'en' : 'es';
  const en = locale === 'en';
  const coverage = coverageOptions[locale];
  const profiles = profileOptions[locale];

  return (
    <>
      <section className={styles.section} aria-labelledby="health-coverage-axis-title">
        <div className={styles.topography} aria-hidden="true">
          <svg viewBox="0 0 1440 880" preserveAspectRatio="none">
            <path d="M-80 680c244-118 394 86 646-38s379-97 579 37 268 85 465-44" />
            <path d="M-56 728c229-111 391 95 641-27s370-104 557 29 267 89 456-35" />
            <path d="M1196 365c119 44 142 135 58 211-78 71-40 165 69 198" />
          </svg>
        </div>
        <div className={`container-shell ${styles.shell}`}>
          <div className={styles.intro}>
            <p className={styles.eyebrow}>{en ? 'FIRST: COVER' : 'PRIMERO: COBERTURA'}</p>
            <h2 id="health-coverage-axis-title">{en ? 'First: what type of cover do you need?' : 'Primero: ¿qué tipo de cobertura necesitas?'}</h2>
            <div className={styles.curve} aria-hidden="true"><svg viewBox="0 0 164 24"><path d="M2 8c30 0 39 13 78 13 34 0 45-8 69-8" /><circle cx="157" cy="13" r="3" /></svg></div>
            <p className={styles.introCopy}>{en ? 'Start with the cover structure. Then apply your situation.' : 'Primero distingue la estructura de cobertura. Después aplica tu situación personal.'}</p>
          </div>
          <div className={styles.decisionGrid}>
            {coverage.map((option) => <DecisionCard key={option.title} option={option} cardStyles={styles} />)}
          </div>
        </div>
      </section>

      <section className={styles.profileSection} aria-labelledby="health-profile-axis-title">
        <div className={`container-shell ${styles.shell}`}>
          <div className={styles.profileIntro}>
            <p className={styles.eyebrow}>{en ? 'SECOND: SITUATION' : 'DESPUÉS: SITUACIÓN'}</p>
            <h2 id="health-profile-axis-title">{en ? 'Then: apply your situation' : 'Después: aplica tu situación'}</h2>
            <p className={styles.introCopy}>{en ? 'Your profile changes what should be checked within the cover structure.' : 'Tu perfil cambia qué conviene revisar dentro de la estructura de cobertura.'}</p>
          </div>
          <div className={styles.profileGrid}>
            {profiles.map((option) => <DecisionCard key={option.title} option={option} cardStyles={styles} />)}
          </div>
          <aside className={styles.guidance} aria-labelledby="health-guidance-title">
            <span className={styles.guidanceIcon} aria-hidden="true"><MessageCircleMore /></span>
            <div><h3 id="health-guidance-title">{en ? 'Not sure which one to choose?' : '¿No sabes cuál elegir?'}</h3><p>{en ? 'Tell us what you need and we will help you distinguish which options make sense for your situation and which you can rule out.' : 'Cuéntanos qué buscas y te ayudaremos a distinguir qué opciones tienen sentido para tu caso y cuáles puedes descartar.'}</p></div>
            <Link href={en ? '/en/contact' : '/contacto'} className={styles.guidanceAction}>{en ? 'Review my situation' : 'Revisar mi caso'} <ArrowRight aria-hidden="true" /></Link>
          </aside>
        </div>
      </section>
    </>
  );
}
