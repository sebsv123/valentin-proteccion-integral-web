import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, BadgeCheck, BriefcaseBusiness, Check, ChartNoAxesColumnIncreasing, HeartPulse, ListChecks, MessageCircle, Scale, ShieldCheck, Users, UsersRound } from 'lucide-react';
import type { Product } from '@/lib/products';
import type { ReactNode } from 'react';
import { buildWhatsAppHref } from '@/lib/products';
import styles from './editorial-product-hero.module.css';
import { useLocale } from 'next-intl';

const reviewItems = ['Copagos', 'Hospitalización', 'Cuadro médico', 'Reembolso'];

export function EditorialProductHero({ product, breadcrumbs }: { product: Product; breadcrumbs?: ReactNode }) {
  const en = useLocale() === 'en';
  if (!en) return <HealthEditorialHero breadcrumbs={breadcrumbs} />;
  return (
    <section className={styles.hero} aria-labelledby="salud-hero-title">
      <div className={styles.backdrop} aria-hidden="true"><span className={styles.dotField} /><span className={styles.orbitOne} /><span className={styles.orbitTwo} /></div>
      <div className={`container-shell ${styles.shell}`}>
        {breadcrumbs ? <div className={styles.healthBreadcrumbRow}>{breadcrumbs}</div> : null}
        <div className={styles.layout}>
          <div className={styles.copy}>
            <p className={styles.eyebrow}>{en ? 'HEALTH INSURANCE · MEDICAL CARE' : 'SEGUROS DE SALUD · ASISTENCIA MÉDICA'}</p>
            <h1 id="salud-hero-title">{en ? 'Choose your health insurance ' : 'Elige tu seguro de salud '}<em>{en ? 'with confidence' : 'sin decidir a ciegas'}</em></h1>
            <p className={styles.intro}>{en ? 'We compare co-payments, hospitalisation, provider networks, reimbursement and plan types with you, so you know what you are choosing.' : 'Comparamos contigo copagos, hospitalización, cuadro médico, reembolso y modalidades para que elijas con criterio y sepas qué estás contratando.'}</p>
            <div className={styles.actions}>
              <Link href={en ? '/en/contact' : '/contacto'} className="btn-primary"><MessageCircle aria-hidden="true" className="h-5 w-5" /> {en ? 'Ask for guidance' : 'Solicitar orientación'}</Link>
              <a href={buildWhatsAppHref(en ? 'Hello, I would like guidance choosing health insurance.' : product.whatsappMessage)} className={styles.whatsapp}><MessageCircle aria-hidden="true" className="h-5 w-5" /> {en ? 'Talk on WhatsApp' : 'Hablar por WhatsApp'}</a>
            </div>
            <div className={styles.entryCards}>
              <EntryCard eyebrow={en ? 'INDIVIDUALS' : 'PARTICULARES'} title={en ? 'I need cover for myself or my family' : 'Busco cobertura para mí o mi familia'} copy={en ? 'We guide you according to your profile and the type of cover you need.' : 'Te orientamos según tu perfil y el tipo de cobertura que necesitas.'} tags={en ? ['Comprehensive', 'Families', 'Senior', 'Reimbursement'] : ['Completa', 'Familias', 'Senior', 'Reembolso']} href={en ? '/en/contact' : '/contacto'} action={en ? 'Review my situation' : 'Revisar mi situación'} icon={HeartPulse} />
              <EntryCard eyebrow={en ? 'BUSINESSES / SELF-EMPLOYED' : 'EMPRESAS / AUTÓNOMOS'} title={en ? 'I need cover for my business or activity' : 'Busco cobertura para mi empresa o actividad'} copy={en ? 'We review options for self-employed professionals, small teams and business health needs.' : 'Estudiamos opciones para autónomos, pequeños equipos y necesidades de salud para empresa.'} tags={en ? ['Self-employed', 'SMEs', 'Groups', 'Partnerships'] : ['Autónomos', 'Pymes', 'Colectivos', 'Colaboración']} href="/empresas/salud" action={en ? 'See options' : 'Ver opciones'} icon={BriefcaseBusiness} />
            </div>
          </div>
          <div className={styles.visual}>
            <div className={styles.photoHalo} aria-hidden="true" />
            <div className={styles.photoFrame}><Image src={product.heroImage} alt={en ? 'Doctor speaking with a patient during a consultation' : 'Médica conversando con una paciente durante una consulta'} fill priority sizes="(max-width: 767px) 94vw, (max-width: 1100px) 47vw, 570px" className={styles.photo} /></div>
            <div className={styles.floatingCards} aria-label={en ? 'How we help you compare' : 'Cómo te ayudamos a comparar'}><FloatingCard icon={Scale} text={en ? 'Without making price the only factor' : 'Sin centrarlo todo en el precio'} /><FloatingCard icon={ChartNoAxesColumnIncreasing} text={en ? 'Real differences between policies' : 'Diferencias reales entre pólizas'} /><FloatingCard icon={UsersRound} text={en ? 'Support before and after you buy' : 'Acompañamiento antes y después'} /></div>
            <aside className={styles.reviewCard} aria-label={en ? 'What we review with you' : 'Qué revisamos contigo'}><div className={styles.reviewHeading}><span aria-hidden="true"><ListChecks /></span><h2>{en ? 'What we review with you' : 'Qué revisamos contigo'}</h2></div><ul>{(en ? ['Co-payments', 'Hospitalisation', 'Provider network', 'Reimbursement'] : reviewItems).map((item) => <li key={item}><Check aria-hidden="true" />{item}</li>)}</ul></aside>
          </div>
        </div>
        <div className={styles.trustRow} aria-label={en ? 'Experience and trust' : 'Experiencia y confianza'}><p><span aria-hidden="true"><ShieldCheck /></span><strong>{en ? '+10 years' : '+10 años'}</strong> {en ? 'of experience' : 'de experiencia'}</p><p><span aria-hidden="true"><Users /></span><strong>+1.200</strong> {en ? 'families protected' : 'familias protegidas'}</p><p><span aria-hidden="true"><BadgeCheck /></span>{en ? 'Officially registered insurance guidance' : 'Orientación de seguros con registro oficial'}</p></div>
      </div>
    </section>
  );
}

function HealthEditorialHero({ breadcrumbs }: { breadcrumbs?: ReactNode }) {
  return (
    <section className={styles.healthHero} aria-labelledby="salud-hero-title">
      <div className={styles.healthScene}>
        <Image src="/images/health/vpi-health-hero.webp" alt="Una familia conversa con su doctora junto a Valentín, la mascota de VPI" fill priority sizes="100vw" className={styles.healthSceneImage} />
      </div>
      {breadcrumbs ? <div className={`container-shell ${styles.healthBreadcrumbRow}`}>{breadcrumbs}</div> : null}
      <div className={`container-shell ${styles.healthContent}`}>
        <div className={styles.healthCopy}>
          <p className={styles.healthEyebrow}>SEGUROS DE SALUD</p>
          <h1 id="salud-hero-title">Elige tu seguro de<br />salud sin decidir<br />a ciegas.</h1>
          <p className={styles.healthIntro}>Comparamos contigo copagos, hospitalización, cuadro médico y reembolso para que entiendas las diferencias antes de elegir.</p>
          <Link href="/contacto" className={`btn-primary ${styles.healthCta}`}>Solicitar orientación</Link>
          <Link href="/empresas/salud" className={styles.businessLink}>¿Eres empresa o autónomo? Ver opciones <ArrowRight aria-hidden="true" /></Link>
          <p className={styles.healthCriteria}>Copagos <span>·</span> Hospitalización <span>·</span> Cuadro médico <span>·</span> Reembolso</p>
        </div>
      </div>
    </section>
  );
}

function EntryCard({ eyebrow, title, copy, tags, href, action, icon: Icon }: { eyebrow: string; title: string; copy: string; tags: string[]; href: string; action: string; icon: typeof HeartPulse }) {
  return <article className={styles.entryCard}><div className={styles.cardTop}><span className={styles.cardIcon} aria-hidden="true"><Icon /></span><p>{eyebrow}</p></div><h2>{title}</h2><p className={styles.cardCopy}>{copy}</p><div className={styles.tags}>{tags.map((tag) => <span key={tag}>{tag}</span>)}</div><Link href={href} className={styles.cardLink}>{action}<ArrowRight aria-hidden="true" /></Link></article>;
}

function FloatingCard({ icon: Icon, text }: { icon: typeof Scale; text: string }) {
  return <div className={styles.floatingCard}><span aria-hidden="true"><Icon /></span><p>{text}</p></div>;
}
