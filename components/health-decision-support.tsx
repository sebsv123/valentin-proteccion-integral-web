import Link from 'next/link';
import { useLocale } from 'next-intl';
import styles from './health-decision-support.module.css';

const insurerDirectories = [
  { label: 'ASISA — Cuadro Médico', labelEn: 'ASISA — Medical directory', href: 'https://www.asisa.es/cuadro-medico?num=-1' },
  { label: 'SegurCaixa Adeslas — Cuadro Médico', labelEn: 'SegurCaixa Adeslas — Medical directory', href: 'https://www.segurcaixaadeslas.es/cuadromedico' },
];

type Locale = 'es' | 'en';

const usageScenarios: Record<Locale, Array<{ title: string; copy: string }>> = {
  es: [
    { title: 'Pocas consultas al año', copy: 'Si prevés un uso puntual, compara cuánto valoras una cuota fija predecible frente a pagar cuando utilizas servicios.' },
    { title: 'Seguimiento frecuente', copy: 'Si visitas especialistas o haces pruebas con regularidad, revisa cómo se acumulan los copagos y qué modalidad encaja con ese patrón.' },
    { title: 'Familia y uso recurrente', copy: 'La pediatría, las consultas repetidas y las pruebas del hogar pueden cambiar la comparación; revisa el uso esperado de todos.' },
    { title: 'Gasto predecible', copy: 'Si prefieres saber cuánto pagarás cada mes, compara las condiciones de las modalidades con y sin copagos.' },
  ],
  en: [
    { title: 'Few visits each year', copy: 'If you expect occasional use, compare how much you value a predictable fixed payment versus paying when you use services.' },
    { title: 'Frequent specialist follow-up', copy: 'If you regularly see specialists or have tests, review how co-payments add up and which plan fits that pattern.' },
    { title: 'Children and recurring use', copy: 'Paediatric care, repeat appointments and household tests can change the comparison; review the expected use for everyone covered.' },
    { title: 'Predictable spending', copy: 'If you prefer to know what you will pay each month, compare the terms of plans with and without co-payments.' },
  ],
};

export function HealthCopaymentSection() {
  const locale: Locale = useLocale() === 'en' ? 'en' : 'es';
  const en = locale === 'en';
  const scenarios = usageScenarios[locale];

  return (
    <section className={styles.section} aria-labelledby="health-copayment-title">
      <div className="container-shell">
        <p className={styles.eyebrow}>{en ? 'USE AND PAYMENT' : 'USO Y PAGO'}</p>
        <h2 id="health-copayment-title">{en ? 'Co-payment or no co-payment? It depends on how you expect to use the cover' : '¿Copago o sin copago? Depende de cómo esperas usar el seguro'}</h2>
        <p className={styles.lead}>{en ? 'The decision depends on the frequency and type of use you expect, not on one option being universally better. A lower fixed premium may come with charges when you use certain services, depending on the policy.' : 'La decisión depende de la frecuencia y el tipo de uso que prevés, no de una opción universalmente mejor. Una prima fija más baja puede ir acompañada de pagos al utilizar determinados servicios, según la póliza.'}</p>
        <div className={styles.scenarioGrid}>
          {scenarios.map((scenario) => (
            <article className={styles.scenario} key={scenario.title}>
              <h3>{scenario.title}</h3>
              <p>{scenario.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HealthNetworkSection() {
  const en = useLocale() === 'en';
  return (
    <section className={styles.networkSection} aria-labelledby="health-network-title">
      <div className="container-shell">
        <p className={styles.eyebrow}>{en ? 'CHECK ACCESS FIRST' : 'COMPRUEBA EL ACCESO'}</p>
        <h2 id="health-network-title">{en ? 'Do you want a specific doctor or hospital? Check before you buy' : '¿Quieres un médico u hospital concreto? Compruébalo antes de contratar'}</h2>
        <p className={styles.lead}>{en ? 'Medical networks vary by insurer and product. Check the current official directory for the option you are considering, then verify again before arranging cover because networks can change. Reimbursement is a different mechanism to review when provider freedom matters.' : 'El cuadro médico cambia según la aseguradora y el producto. Comprueba el cuadro médico oficial de la opción que estés valorando y vuelve a verificarlo antes de contratar, porque las redes pueden cambiar. El reembolso es un mecanismo distinto que conviene revisar si valoras la libertad de elección.'}</p>
        <div className={styles.networkActions}>
          {insurerDirectories.map((directory) => <a key={directory.href} className={styles.directoryLink} href={directory.href} target="_blank" rel="noreferrer">{en ? directory.labelEn : directory.label}</a>)}
          <Link href={en ? '/en/insurance/health-insurance/reimbursement' : '/seguros/salud/reembolso'}>{en ? 'Review reimbursement cover' : 'Revisar salud con reembolso'}</Link>
        </div>
      </div>
    </section>
  );
}
