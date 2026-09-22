import Link from 'next/link';

type Locale = 'es' | 'en';

const providerChecks: Record<Locale, Array<{ title: string; copy: string }>> = {
  es: [
    { title: 'Profesional o centro elegible', copy: 'Comprueba que el profesional o centro puede acogerse al reembolso de la póliza concreta.' },
    { title: 'Servicio cubierto', copy: 'Que un proveedor sea elegible no significa que todos sus servicios lo sean. Revisa la prestación.' },
    { title: 'Porcentaje y límites', copy: 'Consulta el porcentaje aplicable y los límites anuales o por servicio antes de utilizarlo.' },
    { title: 'Documentación y autorización', copy: 'Confirma si necesitas factura, justificante, informe, prescripción o autorización previa.' },
  ],
  en: [
    { title: 'Eligible provider or centre', copy: 'Check that the provider or centre can be used under the reimbursement terms of the specific policy.' },
    { title: 'Covered service', copy: 'An eligible provider does not mean that every service is eligible. Check the treatment or service.' },
    { title: 'Percentage and limits', copy: 'Check the applicable percentage and any annual or per-service limits before using the service.' },
    { title: 'Documents and authorisation', copy: 'Confirm whether you need an invoice, proof of payment, report, prescription or prior authorisation.' },
  ],
};

const workflow: Record<Locale, Array<{ title: string; copy: string }>> = {
  es: [
    { title: '1. Comprueba antes de usarlo', copy: 'Verifica proveedor, servicio, ámbito geográfico y autorización según la póliza.' },
    { title: '2. Utiliza el servicio', copy: 'Sigue el procedimiento indicado por la aseguradora y conserva la documentación que te pida.' },
    { title: '3. Guarda las pruebas', copy: 'Conserva factura, justificante de pago y documentación clínica o administrativa cuando corresponda.' },
    { title: '4. Solicita el reintegro', copy: 'Presenta la solicitud mediante el canal vigente de la aseguradora y consulta sus requisitos.' },
  ],
  en: [
    { title: '1. Check before using it', copy: 'Verify the provider, service, geographic scope and authorisation requirements under the policy.' },
    { title: '2. Use the service', copy: 'Follow the insurer’s procedure and keep the documents it requires.' },
    { title: '3. Keep the evidence', copy: 'Keep the invoice, proof of payment and any clinical or administrative documents required.' },
    { title: '4. Request reimbursement', copy: 'Submit the request through the insurer’s current channel and check its requirements.' },
  ],
};

export function HealthReimbursementGuidance({ locale }: { locale: Locale }) {
  const en = locale === 'en';
  const links = en
    ? {
        parent: '/en/insurance/health',
        comprehensive: '/en/insurance/health-insurance/comprehensive',
        asisa: 'https://www.asisa.es/preguntas-frecuentes/que-ofrece-asisa/asisa-tiene-algun-seguro-de-reembolso',
        adeslas: 'https://www.segurcaixaadeslas.es/particulares/seguros-medicos/preguntas-frecuentes-reembolsos',
      }
    : {
        parent: '/seguros/salud',
        comprehensive: '/seguros/salud/completa',
        asisa: 'https://www.asisa.es/preguntas-frecuentes/que-ofrece-asisa/asisa-tiene-algun-seguro-de-reembolso',
        adeslas: 'https://www.segurcaixaadeslas.es/particulares/seguros-medicos/preguntas-frecuentes-reembolsos',
      };

  return (
    <>
      <section className="section-pad bg-alternate" aria-labelledby="reimbursement-provider-title">
        <div className="container-shell">
          <p className="kicker">{en ? 'THE PROVIDER DECISION' : 'LA DECISIÓN SOBRE EL PROFESIONAL'}</p>
          <h2 id="reimbursement-provider-title" className="mt-3 section-title">{en ? 'I have a doctor outside the network: what should I check?' : 'Tengo un médico fuera del cuadro: ¿qué debo comprobar?'}</h2>
          <p className="section-copy mt-4 max-w-3xl">{en ? 'Being outside the standard network does not automatically create a reimbursement right. Check the provider, service, percentage, limits and procedure in the policy you are considering.' : 'Estar fuera del cuadro médico no crea automáticamente un derecho al reembolso. Comprueba el profesional, el servicio, el porcentaje, los límites y el procedimiento de la póliza que estés valorando.'}</p>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {providerChecks[locale].map((item) => (
              <article key={item.title} className="rounded-[22px] border border-[var(--border)] bg-white p-6 shadow-sm">
                <h3 className="font-heading text-xl font-bold leading-tight text-[var(--blue-deep)]">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white-pure" aria-labelledby="reimbursement-cashflow-title">
        <div className="container-shell">
          <p className="kicker">{en ? 'CASH FLOW AND LIMITS' : 'PAGO Y LÍMITES'}</p>
          <h2 id="reimbursement-cashflow-title" className="mt-3 section-title">{en ? 'What may you pay first, and what may the policy reimburse?' : '¿Qué puedes tener que pagar primero y qué puede reembolsar la póliza?'}</h2>
          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            <article className="rounded-[24px] border border-[var(--border)] bg-[var(--bg)] p-7">
              <h3 className="font-heading text-2xl font-bold text-[var(--blue-deep)]">{en ? 'Do you have to pay first?' : '¿Tienes que pagar primero?'}</h3>
              <p className="mt-3 text-base leading-8 text-[var(--muted)]">{en ? 'With outside-network reimbursement, you may need to pay the provider first and then request reimbursement under the policy procedure. Timing and documents vary, so check this cash-flow effect before choosing the modality.' : 'Con un reembolso fuera del cuadro puedes tener que pagar primero al proveedor y solicitar después el reintegro conforme al procedimiento de la póliza. Los plazos y documentos varían: comprueba este efecto sobre tu liquidez antes de elegir la modalidad.'}</p>
            </article>
            <article className="rounded-[24px] border border-[var(--border)] bg-[var(--bg)] p-7">
              <h3 className="font-heading text-2xl font-bold text-[var(--blue-deep)]">{en ? 'A percentage is not the same as a limit' : 'Porcentaje no es lo mismo que límite'}</h3>
              <p className="mt-3 text-base leading-8 text-[var(--muted)]">{en ? 'A stated reimbursement percentage does not by itself tell you how much you can recover. Annual, per-service or other contractual limits may also apply.' : 'Un porcentaje de reembolso no indica por sí solo cuánto podrás recuperar. También pueden aplicarse límites anuales, por servicio u otros límites contractuales.'}</p>
            </article>
          </div>
          <div className="mt-8 rounded-[24px] border border-[var(--border)] bg-white p-7">
            <h3 className="font-heading text-2xl font-bold text-[var(--blue-deep)]">{en ? 'Network cover and reimbursement are different mechanisms' : 'Cuadro médico y reembolso son mecanismos distintos'}</h3>
            <p className="mt-3 max-w-4xl text-base leading-8 text-[var(--muted)]">{en ? 'Network-based cover uses contracted providers under the selected product. Reimbursement may allow eligible outside-network use subject to policy terms, and some products combine both mechanisms.' : 'La asistencia mediante cuadro médico utiliza proveedores concertados por el producto. El reembolso puede permitir usar proveedores externos elegibles según las condiciones de la póliza, y algunos productos combinan ambos mecanismos.'}</p>
            <div className="mt-5 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold">
              <Link className="text-[var(--blue)] underline underline-offset-4" href={links.parent}>{en ? 'Back to health insurance decisions' : 'Volver a las decisiones de salud'}</Link>
              <Link className="text-[var(--blue)] underline underline-offset-4" href={links.comprehensive}>{en ? 'Review hospital cover as another structure' : 'Revisar la cobertura con hospitalización'}</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-alternate" aria-labelledby="reimbursement-workflow-title">
        <div className="container-shell">
          <p className="kicker">{en ? 'PRACTICAL CHECKLIST' : 'COMPROBACIÓN PRÁCTICA'}</p>
          <h2 id="reimbursement-workflow-title" className="mt-3 section-title">{en ? 'How to review the reimbursement procedure' : 'Cómo revisar el procedimiento de reembolso'}</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {workflow[locale].map((item) => (
              <article key={item.title} className="rounded-[22px] border border-[var(--border)] bg-white p-6">
                <h3 className="font-heading text-xl font-bold leading-tight text-[var(--blue-deep)]">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{item.copy}</p>
              </article>
            ))}
          </div>
          <p className="mt-7 max-w-4xl text-base leading-8 text-[var(--muted)]">{en ? 'VPI can guide you to where your policy procedure is checked. VPI does not approve reimbursement, determine the claim outcome or pay the reimbursement.' : 'VPI puede orientarte sobre dónde comprobar el procedimiento de tu póliza. VPI no aprueba el reembolso, no decide el resultado de la solicitud ni paga el reintegro.'}</p>
          <div className="mt-8 border-t border-[var(--border)] pt-6">
            <p className="text-sm font-extrabold tracking-wide text-[var(--blue-deep)]">{en ? 'Official sources consulted' : 'Fuentes oficiales consultadas'}</p>
            <div className="mt-3 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold">
              <a className="text-[var(--blue)] underline underline-offset-4" href={links.asisa} target="_blank" rel="noreferrer">{en ? 'ASISA — official reimbursement information' : 'ASISA — información oficial sobre reembolso'}</a>
              <a className="text-[var(--blue)] underline underline-offset-4" href={links.adeslas} target="_blank" rel="noreferrer">{en ? 'SegurCaixa Adeslas — official reimbursement information' : 'SegurCaixa Adeslas — información oficial sobre reembolso'}</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
