import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, MessageCircle, UsersRound } from 'lucide-react';
import { buildWhatsAppHref } from '@/lib/products';
import { BusinessHealthProofStrip } from './business-health-proof-strip';
import styles from './business-health-hero.module.css';

const businessWhatsApp = buildWhatsAppHref('Hola, quiero hablar con Sebastián sobre un seguro de salud para mi empresa o actividad.');

export function BusinessHealthHero() {
  return <>
    <section className={styles.hero} aria-labelledby="business-health-title">
      <div className={styles.backgroundLines} aria-hidden="true"><svg viewBox="0 0 1440 760" preserveAspectRatio="none"><path d="M820 0c120 70 126 171 51 239s-42 170 64 216 173 130 116 305" /><path d="M880-10c123 81 115 178 48 246s-26 145 80 199 142 157 103 325" /><path d="M0 664c204-85 335-47 476 26s281 67 399-18" /></svg></div>
      <div className={`container-shell ${styles.shell}`}>
        <div className={styles.grid}>
          <div className={styles.copy}>
            <p className={styles.eyebrow}>SEGURO DE SALUD PARA EMPRESAS Y AUTÓNOMOS</p>
            <h1 id="business-health-title">Cuida a tu equipo sin perder de vista el coste</h1>
            <p className={styles.intro}>Comparamos opciones ambulatorias, completas y con reembolso desde dos asegurados. Revisamos contigo las coberturas, el coste y las condiciones antes de presentar una propuesta.</p>
            <div className={styles.actions}><Link href="#solicitar-estudio" className={styles.primaryAction}>Solicitar estudio para mi empresa <ArrowRight aria-hidden="true" /></Link><a href={businessWhatsApp} className={styles.secondaryAction}><MessageCircle aria-hidden="true" />Hablar con Sebastián</a></div>
          </div>
          <div className={styles.visual} aria-label="Equipo reunido para revisar opciones de salud empresarial">
            <div className={styles.photoFrame}><Image src="/images/home/meeting-real.jpg" alt="Equipo reunido en un entorno luminoso para revisar una propuesta" fill priority sizes="(max-width: 767px) 92vw, (max-width: 1100px) 48vw, 620px" className={styles.photo} /></div>
            <div className={styles.photoWash} aria-hidden="true" />
            <div className={styles.visualTag}><span aria-hidden="true"><UsersRound /></span><strong>Desde 2 asegurados</strong><small>Para pequeños equipos</small></div>
          </div>
        </div>
      </div>
    </section>
    <BusinessHealthProofStrip />
  </>;
}
