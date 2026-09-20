import Link from 'next/link';
import { useLocale } from 'next-intl';
import styles from './health-decision-support.module.css';

const insurerGuidance = [
  {
    label: 'Guía oficial de citas y autorizaciones ASISA',
    labelEn: 'ASISA official appointment and authorisation guidance',
    href: 'https://www.asisa.es/preguntas-frecuentes/area-privada/pedir-cita/soy-nuevo-en-asisa-y-quiero-ir-al-medico-por-primera-vez',
  },
  {
    label: 'Preguntas frecuentes de salud Adeslas',
    labelEn: 'Adeslas official health FAQs',
    href: 'https://www.segurcaixaadeslas.es/particulares/seguros-medicos/preguntas-frecuentes',
  },
];

export function HealthUseGuidance() {
  const en = useLocale() === 'en';
  return (
    <section className={styles.useSection} aria-labelledby="health-use-title">
      <div className="container-shell">
        <p className={styles.eyebrow}>{en ? 'WHEN YOU NEED TO USE IT' : 'CUANDO NECESITES UTILIZARLO'}</p>
        <h2 id="health-use-title">{en ? 'Buying the policy is only the start: how health insurance is actually used' : 'Contratar es solo el principio: así se usa un seguro de salud'}</h2>
        <p className={styles.lead}>{en ? 'When you need to use your cover, follow the procedure for your insurer and product: arrange an appointment, check whether authorisation is needed and keep the documents the policy requires.' : 'Cuando necesites utilizarlo, sigue el procedimiento de la aseguradora y del producto: pide una cita, comprueba si hace falta autorización y conserva la documentación que te indique la póliza.'}</p>

        <div className={styles.processGrid}>
          <article className={styles.useCard}><strong>01</strong><h3>{en ? 'Check the professional or centre' : 'Comprueba el profesional o centro'}</h3><p>{en ? 'Verify the current provider directory for the option you have arranged.' : 'Verifica el cuadro médico vigente de la opción que has contratado.'}</p></article>
          <article className={styles.useCard}><strong>02</strong><h3>{en ? 'Book through the available channel' : 'Pide la cita por el canal disponible'}</h3><p>{en ? 'The private area, app or centre may offer different appointment channels depending on the insurer.' : 'El área privada, la app o el propio centro pueden ofrecer canales distintos según la aseguradora.'}</p></article>
          <article className={styles.useCard}><strong>03</strong><h3>{en ? 'Check whether authorisation is needed' : 'Comprueba si necesitas autorización'}</h3><p>{en ? 'Cover does not necessarily mean that a service can be carried out without prior authorisation.' : 'Que una prestación esté cubierta no significa necesariamente que pueda realizarse sin autorización previa.'}</p></article>
          <article className={styles.useCard}><strong>04</strong><h3>{en ? 'Keep the required documents' : 'Conserva la documentación'}</h3><p>{en ? 'Keep the prescription, authorisation, invoice or report when your policy procedure requires it.' : 'Guarda la prescripción, autorización, factura o informe cuando el procedimiento de tu póliza lo requiera.'}</p></article>
          <article className={styles.useCard}><strong>05</strong><h3>{en ? 'If it is reimbursement, check the process' : 'Si es reembolso, revisa el procedimiento'}</h3><p>{en ? 'You may need to pay the provider and submit the invoice and documents required by your policy.' : 'Puedes tener que pagar al proveedor y presentar la factura y la documentación exigida según tu póliza.'}</p></article>
        </div>

        <div className={styles.useNotes}>
          <article>
            <h3>{en ? 'Is an appointment the same as authorisation?' : '¿Pedir una cita es lo mismo que obtener una autorización?'}</h3>
            <p>{en ? 'No. A centre may give you an appointment while a particular test or treatment still requires approval from the insurer.' : 'No. Un centro puede darte hora y una prueba o tratamiento concreto seguir necesitando la aprobación de la aseguradora.'}</p>
          </article>
          <article>
            <h3>{en ? 'Need help finding the right channel?' : '¿No sabes qué canal usar?'}</h3>
            <p>{en ? 'If you do not know which channel to use or which document is requested, VPI can guide you to where your policy procedure is checked. VPI does not authorise medical services or decide claims.' : 'Si no sabes qué canal usar o qué documento te están pidiendo, VPI puede orientarte sobre dónde comprobar el procedimiento de tu póliza. VPI no autoriza servicios médicos ni decide siniestros.'}</p>
          </article>
        </div>

        <p className={styles.useEmergency}>{en ? 'For an emergency, use the insurer’s current emergency channels and the instructions for the applicable product; VPI is not an emergency service.' : 'Ante una urgencia, utiliza los canales de urgencias vigentes de la aseguradora y las instrucciones del producto aplicable; VPI no es un servicio de urgencias.'}</p>

        <div className={styles.useLinks}>
          <p className={styles.sourceLabel}>{en ? 'Official sources consulted' : 'Fuentes oficiales consultadas'}</p>
          <div className={styles.sourceLinks}>
            {insurerGuidance.map((source) => <a key={source.href} href={source.href} target="_blank" rel="noreferrer">{en ? source.labelEn : source.label}</a>)}
          </div>
          <Link className={styles.secondaryLink} href={en ? '/en/insurance/health-insurance/reimbursement' : '/seguros/salud/reembolso'}>{en ? 'Review reimbursement cover' : 'Revisar salud con reembolso'}</Link>
        </div>
      </div>
    </section>
  );
}
