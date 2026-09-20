import { useLocale } from 'next-intl';
import { buildWhatsAppHref } from '@/lib/products';
import styles from './health-decision-support.module.css';

const boeArticle22 = 'https://www.boe.es/buscar/act.php?id=BOE-A-1980-22501#a22';

export function HealthSwitchingGuidance() {
  const en = useLocale() === 'en';
  const whatsapp = buildWhatsAppHref(en ? 'I want to review my current policy before switching.' : 'Quiero revisar mi póliza actual antes de cambiar.');

  return (
    <section className={styles.policySection} aria-labelledby="health-switching-title">
      <div className="container-shell">
        <p className={styles.eyebrow}>{en ? 'IF YOU ALREADY HAVE COVER' : 'SI YA TIENES SEGURO'}</p>
        <h2 id="health-switching-title">{en ? 'Already have health insurance? Review what you have before switching' : '¿Ya tienes seguro? Antes de cambiar, revisa qué tienes y qué podría cambiar'}</h2>
        <p className={styles.lead}>{en ? 'Changing health insurance is not only a price comparison. Before cancelling, review your current premium and renewal date, co-payments, hospitalisation, provider network, reimbursement if relevant, waiting periods, exclusions or particular limitations, underwriting conditions and renewal or cancellation deadlines. Your current policy may already fit your situation.' : 'Cambiar de seguro no es solo comparar el precio. Antes de cancelar, revisa la prima y la fecha de renovación, los copagos, la hospitalización, el cuadro médico, el reembolso si aplica, las carencias, las exclusiones o limitaciones, las condiciones de suscripción y los plazos de renovación o cancelación. Tu póliza actual puede seguir encajando con tu situación.'}</p>

        <div className={styles.policyGrid}>
          <article className={styles.policyCard}>
            <h3>{en ? 'Before switching' : 'Antes de cambiar'}</h3>
            <p>{en ? 'Check what would change in waiting periods, exclusions, underwriting, provider network, effective dates and renewal timing before cancelling the current policy.' : 'Comprueba qué cambiaría en las carencias, las exclusiones, la suscripción, el cuadro médico, las fechas de efecto y la renovación antes de cancelar la póliza actual.'}</p>
          </article>
          <article className={styles.policyCard}>
            <h3>{en ? 'Renewal and cancellation timing' : 'Renovación y cancelación'}</h3>
            <p>{en ? 'As a general rule, Article 22 of Ley 50/1980 gives the policyholder at least one month to oppose renewal in writing and the insurer at least two months. Insurer contract changes must also be notified at least two months before the end of the current period. Check the actual policy and renewal date.' : 'Como regla general, el artículo 22 de la Ley 50/1980 establece que el tomador debe oponerse por escrito a la prórroga con al menos un mes de antelación y la aseguradora, con dos meses. Las modificaciones del contrato propuestas por la aseguradora también deben comunicarse con dos meses de antelación. Comprueba tu póliza y su fecha de renovación.'}</p>
            <a className={styles.sourceLink} href={boeArticle22} target="_blank" rel="noreferrer">{en ? 'Read Article 22 in the official BOE' : 'Consultar el artículo 22 en el BOE oficial'}</a>
          </article>
        </div>

        <div className={styles.policyTerms}>
          <h3>{en ? 'Waiting periods, pre-existing conditions and prior authorisation are different' : 'Carencias, preexistencias y autorizaciones previas son conceptos distintos'}</h3>
          <div className={styles.termGrid}>
            <div><strong>{en ? 'Waiting period' : 'Carencia'}</strong><p>{en ? 'A period after the policy starts during which a particular covered service may not yet be available under its terms.' : 'Un periodo posterior al inicio de la póliza durante el que un servicio cubierto puede no estar todavía disponible según sus condiciones.'}</p></div>
            <div><strong>{en ? 'Pre-existing condition' : 'Preexistencia'}</strong><p>{en ? 'A health condition existing before contracting that may be relevant to underwriting and the policy treatment.' : 'Una condición de salud existente antes de contratar que puede ser relevante para la suscripción y el tratamiento de la póliza.'}</p></div>
            <div><strong>{en ? 'Exclusion' : 'Exclusión'}</strong><p>{en ? 'Something the policy does not cover under its terms or a particular underwriting decision.' : 'Algo que la póliza no cubre según sus condiciones o una decisión concreta de suscripción.'}</p></div>
            <div><strong>{en ? 'Prior authorisation' : 'Autorización previa'}</strong><p>{en ? 'Administrative approval that may be required before certain services, tests or procedures.' : 'Una aprobación administrativa que puede ser necesaria antes de determinados servicios, pruebas o procedimientos.'}</p></div>
          </div>
          <p className={styles.policyNote}>{en ? 'If arranging cover includes a health questionnaire, answer it accurately and according to what the insurer asks. The insurer then applies its underwriting criteria and the policy terms; VPI cannot predict acceptance or give a universal coverage answer.' : 'Si la contratación incluye un cuestionario de salud, respóndelo con exactitud y conforme a lo que pregunte la aseguradora. La aseguradora aplica después sus criterios de suscripción y las condiciones de la póliza; VPI no puede anticipar la aceptación ni dar una respuesta universal sobre la cobertura.'}</p>
        </div>

        <a className={styles.policyCta} href={whatsapp}>{en ? 'I want to review my current policy before switching' : 'Quiero revisar mi póliza actual antes de cambiar'}</a>
      </div>
    </section>
  );
}
