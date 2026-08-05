import Link from 'next/link';
import { ArrowRight, BriefcaseBusiness, Globe2, TrendingUp, UsersRound } from 'lucide-react';
import styles from './business-health-company-profiles-section.module.css';

const profiles = [
  {
    number: '01',
    label: 'PEQUEÑOS EQUIPOS',
    title: 'Empezar con una cobertura asumible',
    copy: 'Pueden estudiarse opciones desde dos asegurados, siempre que la composición del colectivo cumpla las condiciones de contratación.',
    highlight: 'Desde 2 asegurados',
    highlightCopy: 'Según composición y modalidad',
    Icon: UsersRound,
    className: 'stageOne',
  },
  {
    number: '02',
    label: 'AUTÓNOMOS CON EQUIPO',
    title: 'Proteger la actividad y al equipo',
    copy: 'Revisamos quién formará parte del colectivo y cómo quiere asumir el coste la empresa o el profesional.',
    highlight: 'Tres formas de financiación',
    highlightCopy: 'Empresa, trabajador o aportación compartida',
    Icon: BriefcaseBusiness,
    className: 'stageTwo',
  },
  {
    number: '03',
    label: 'EMPRESAS EN CRECIMIENTO',
    title: 'Definir cómo gestionar nuevas incorporaciones',
    copy: 'La cobertura, la aportación empresarial y el procedimiento de altas deben quedar definidos antes de ampliar el equipo.',
    highlight: 'Altas posteriores',
    highlightCopy: 'Sujetas a condiciones y fechas de incorporación',
    Icon: TrendingUp,
    className: 'stageThree',
  },
  {
    number: '04',
    label: 'EQUIPOS INTERNACIONALES',
    title: 'Combinar cobertura en España y apoyo durante viajes',
    copy: 'Pueden estudiarse opciones de asistencia nacional, asistencia durante desplazamientos o reembolso fuera del cuadro médico.',
    highlight: 'España y desplazamientos',
    highlightCopy: 'La residencia permanente fuera de España requiere revisión específica',
    Icon: Globe2,
    className: 'stageFour',
  },
];

export function BusinessHealthCompanyProfilesSection() {
  return (
    <section className={styles.section} aria-labelledby="business-health-profiles-title">
      <div className={`container-shell ${styles.shell}`}>
        <header className={styles.heading}>
          <p className={styles.eyebrow}>PERFILES EMPRESARIALES</p>
          <h2 id="business-health-profiles-title">Cuatro escenarios que requieren decisiones diferentes</h2>
          <p>El tamaño del equipo es solo una parte de la decisión. También revisamos quién estará asegurado, el nivel de cobertura, el presupuesto y la forma en que la empresa quiere asumir el coste.</p>
        </header>

        <div className={styles.sequence}>
          {profiles.map(({ number, label, title, copy, highlight, highlightCopy, Icon, className }) => (
            <article className={`${styles.band} ${styles[className]}`} key={number}>
              <div className={styles.identity}>
                <span className={styles.number}>{number}</span>
                <Icon className={styles.icon} aria-hidden="true" />
              </div>
              <div className={styles.profile}>
                <p className={styles.label}>{label}</p>
                <h3>{title}</h3>
              </div>
              <p className={styles.copy}>{copy}</p>
              <div className={styles.highlight}>
                <strong>{highlight}</strong>
                <span>{highlightCopy}</span>
              </div>
            </article>
          ))}
        </div>

        <p className={styles.disclaimer}>La viabilidad y las condiciones dependen de la modalidad, la composición del colectivo y la aceptación de la contratación.</p>

        <div className={styles.close}>
          <div>
            <h3>Revisamos qué estructura admite cada modalidad</h3>
            <p>Cuéntanos cuántas personas podrían asegurarse, la provincia y el nivel de cobertura que estás valorando.</p>
          </div>
          <Link href="#solicitar-estudio" className={styles.cta}>Revisar mi caso <ArrowRight aria-hidden="true" /></Link>
        </div>
      </div>
    </section>
  );
}
