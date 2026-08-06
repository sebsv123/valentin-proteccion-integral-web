import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, BadgeCheck, BriefcaseBusiness, Check, ChartNoAxesColumnIncreasing, HeartPulse, ListChecks, MessageCircle, Scale, ShieldCheck, Users, UsersRound } from 'lucide-react';
import type { Product } from '@/lib/products';
import { buildWhatsAppHref } from '@/lib/products';
import styles from './editorial-product-hero.module.css';

const reviewItems = ['Copagos', 'Hospitalización', 'Cuadro médico', 'Reembolso'];

export function EditorialProductHero({ product }: { product: Product }) {
  return (
    <section className={styles.hero} aria-labelledby="salud-hero-title">
      <div className={styles.backdrop} aria-hidden="true"><span className={styles.dotField} /><span className={styles.orbitOne} /><span className={styles.orbitTwo} /></div>
      <div className={`container-shell ${styles.shell}`}>
        <div className={styles.layout}>
          <div className={styles.copy}>
            <p className={styles.eyebrow}>SEGUROS DE SALUD · ASISTENCIA MÉDICA</p>
            <h1 id="salud-hero-title">Elige tu seguro de salud <em>sin decidir a ciegas</em></h1>
            <p className={styles.intro}>Comparamos contigo copagos, hospitalización, cuadro médico, reembolso y modalidades para que elijas con criterio y sepas qué estás contratando.</p>
            <div className={styles.actions}>
              <Link href="/contacto" className="btn-primary"><MessageCircle aria-hidden="true" className="h-5 w-5" /> Solicitar orientación</Link>
              <a href={buildWhatsAppHref(product.whatsappMessage)} className={styles.whatsapp}><MessageCircle aria-hidden="true" className="h-5 w-5" /> Hablar por WhatsApp</a>
            </div>
            <div className={styles.entryCards}>
              <EntryCard eyebrow="PARTICULARES" title="Busco cobertura para mí o mi familia" copy="Te orientamos según tu perfil y el tipo de cobertura que necesitas." tags={['Completa', 'Familias', 'Senior', 'Reembolso']} href="/contacto" action="Revisar mi situación" icon={HeartPulse} />
              <EntryCard eyebrow="EMPRESAS / AUTÓNOMOS" title="Busco cobertura para mi empresa o actividad" copy="Estudiamos opciones para autónomos, pequeños equipos y necesidades de salud para empresa." tags={['Autónomos', 'Pymes', 'Colectivos', 'Colaboración']} href="/empresas/salud" action="Ver opciones" icon={BriefcaseBusiness} />
            </div>
          </div>
          <div className={styles.visual}>
            <div className={styles.photoHalo} aria-hidden="true" />
            <div className={styles.photoFrame}><Image src={product.heroImage} alt="Médica conversando con una paciente durante una consulta" fill priority sizes="(max-width: 767px) 94vw, (max-width: 1100px) 47vw, 570px" className={styles.photo} /></div>
            <div className={styles.floatingCards} aria-label="Cómo te ayudamos a comparar"><FloatingCard icon={Scale} text="Sin centrarlo todo en el precio" /><FloatingCard icon={ChartNoAxesColumnIncreasing} text="Diferencias reales entre pólizas" /><FloatingCard icon={UsersRound} text="Acompañamiento antes y después" /></div>
            <aside className={styles.reviewCard} aria-label="Qué revisamos contigo"><div className={styles.reviewHeading}><span aria-hidden="true"><ListChecks /></span><h2>Qué revisamos contigo</h2></div><ul>{reviewItems.map((item) => <li key={item}><Check aria-hidden="true" />{item}</li>)}</ul></aside>
          </div>
        </div>
        <div className={styles.trustRow} aria-label="Experiencia y confianza"><p><span aria-hidden="true"><ShieldCheck /></span><strong>+10 años</strong> de experiencia</p><p><span aria-hidden="true"><Users /></span><strong>+1.200</strong> familias protegidas</p><p><span aria-hidden="true"><BadgeCheck /></span>Agentes registrados DGSFP</p></div>
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
