import Link from 'next/link';
import { ArrowRight, Heart, HeartHandshake, MessageCircle, Phone, ShieldCheck, UsersRound } from 'lucide-react';
import { buildWhatsAppHref } from '@/lib/products';
import styles from './health-final-guidance-section.module.css';

const steps = [
  ['01', 'Cuéntanos', 'Tu situación, qué quieres cubrir y cómo piensas utilizar el seguro.'],
  ['02', 'Comparamos', 'Revisamos modalidades, diferencias y condiciones relevantes.'],
  ['03', 'Decides tú', 'Te explicamos las opciones con claridad y tú eliges sin presión.'],
];

const trustRows = [
  { Icon: UsersRound, value: '1.200+', detail: 'familias atendidas' },
  { Icon: ShieldCheck, value: '+10 años', detail: 'de experiencia y formación continua' },
  { Icon: Heart, value: 'Orientación sin compromiso', detail: 'claridad, cercanía y criterio profesional' },
  { Icon: Phone, label: '¿Prefieres hablar?', value: '+34 603 448 765', detail: '', href: 'tel:+34603448765' },
];

export function HealthFinalGuidanceSection({ whatsappMessage }: { whatsappMessage: string }) {
  return <section className={styles.section} aria-labelledby="salud-guidance-title">
    <div className={`container-shell ${styles.shell}`}><div className={styles.card}>
      <div className={styles.bluePanel}>
        <div className={styles.bluePattern} aria-hidden="true"><svg viewBox="0 0 720 520" preserveAspectRatio="none"><path d="M-44 449c102-75 215-53 270 22s141 68 212 9 173-68 270 22" /><path d="M-35 390c98-82 223-72 293 11s132 87 211 18 169-73 260 5" /><path d="M-20 335c115-81 242-75 320 15" /></svg></div>
        <p className={styles.eyebrow}><span><HeartHandshake aria-hidden="true" /></span>CUANDO QUIERAS</p>
        <h2 id="salud-guidance-title">¿Lo revisamos contigo?</h2>
        <p className={styles.intro}>Nos cuentas qué necesitas, comparamos las opciones que realmente pueden encajar y tú decides con toda la información, sin presión.</p>
        <div className={styles.steps}>{steps.map(([number,title,copy]) => <div key={number} className={styles.step}><span>{number}</span><div><h3>{title}</h3><p>{copy}</p></div></div>)}</div>
        <div className={styles.actions}><Link href="/contacto">Solicitar orientación <ArrowRight aria-hidden="true" /></Link><a href={buildWhatsAppHref(whatsappMessage)}><MessageCircle aria-hidden="true" />Hablar con Rosa Valentín</a></div>
      </div>
      <aside className={styles.trustPanel} aria-label="Experiencia y contacto">
        {trustRows.map(({ Icon, label, value, detail, href }) => <div key={value} className={styles.trustRow}><span><Icon aria-hidden="true" /></span><div>{label ? <p className={styles.label}>{label}</p> : null}{href ? <a href={href}>{value}</a> : <strong>{value}</strong>}{detail ? <p>{detail}</p> : null}</div></div>)}
      </aside>
    </div></div>
  </section>;
}
