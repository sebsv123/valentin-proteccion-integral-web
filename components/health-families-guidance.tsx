import Link from 'next/link';

type Locale = 'es' | 'en';

const householdChecks: Record<Locale, Array<{ title: string; copy: string }>> = {
  es: [
    { title: 'Personas aseguradas', copy: 'Anota quiénes utilizarían el seguro y si sus necesidades son parecidas o muy diferentes.' },
    { title: 'Uso previsto', copy: 'Compara las consultas esperadas de cada persona, incluidos seguimientos pediátricos, especialistas y pruebas.' },
    { title: 'Uso concentrado', copy: 'Si una persona prevé muchas más visitas que las demás, tenlo en cuenta al revisar la modalidad.' },
  ],
  en: [
    { title: 'People covered', copy: 'Note who would use the policy and whether their needs are similar or very different.' },
    { title: 'Expected use', copy: 'Compare the expected consultations for each person, including paediatric follow-up, specialists and tests.' },
    { title: 'Use concentrated in one person', copy: 'If one person expects many more visits than the others, include that pattern when reviewing the plan.' },
  ],
};

const copaymentChecks: Record<Locale, Array<{ title: string; copy: string }>> = {
  es: [
    { title: 'Una persona con uso puntual', copy: 'Un usuario ocasional genera un patrón distinto al de una familia con consultas repetidas.' },
    { title: 'Varios usuarios recurrentes', copy: 'Las visitas pediátricas o los seguimientos frecuentes pueden hacer más relevante cómo se acumulan los copagos.' },
    { title: 'Gasto predecible o pago por uso', copy: 'Compara la previsibilidad de la prima con los cargos por utilización previstos en la póliza.' },
  ],
  en: [
    { title: 'One occasional user', copy: 'One occasional user creates a different pattern from a family with repeated appointments.' },
    { title: 'Several recurring users', copy: 'Paediatric visits or frequent follow-up can make it more important to understand how co-payments add up.' },
    { title: 'Predictable spending or pay per use', copy: 'Compare the predictability of the premium with the usage charges set out in the policy.' },
  ],
};

const networkChecks: Record<Locale, Array<{ title: string; copy: string }>> = {
  es: [
    { title: 'Pediatra y especialidades', copy: 'Comprueba que el pediatra o las especialidades infantiles que necesitas aparecen en el cuadro médico vigente del producto.' },
    { title: 'Hospital infantil', copy: 'Si tienes un centro concreto, revisa su disponibilidad y el alcance de la modalidad antes de contratar.' },
    { title: 'Urgencias y autorizaciones', copy: 'Comprueba el canal de urgencias y si la prestación concreta puede tener carencia o requerir autorización.' },
  ],
  en: [
    { title: 'Paediatrician and specialities', copy: 'Check that the paediatrician or children’s specialities you need appear in the current directory for the product.' },
    { title: 'Children’s hospital', copy: 'If you have a specific centre in mind, check its availability and the plan’s scope before arranging cover.' },
    { title: 'Emergency care and authorisations', copy: 'Check the emergency channel and whether the specific service may have a waiting period or require authorisation.' },
  ],
};

export function HealthFamiliesGuidance({ locale }: { locale: Locale }) {
  const en = locale === 'en';
  const sources = [
    { label: en ? 'ASISA — Official medical directory' : 'ASISA — Cuadro Médico oficial', href: 'https://www.asisa.es/cuadro-medico?num=-1' },
    { label: en ? 'SegurCaixa Adeslas — Official medical directory' : 'SegurCaixa Adeslas — Cuadro Médico oficial', href: 'https://www.segurcaixaadeslas.es/cuadromedico' },
  ];

  return (
    <>
      <section className="section-pad bg-alternate" aria-labelledby="families-household-title">
        <div className="container-shell">
          <p className="kicker">{en ? 'HOUSEHOLD USE' : 'USO EN EL HOGAR'}</p>
          <h2 id="families-household-title" className="section-title mt-3">{en ? 'Who will actually use the health insurance, and how often?' : '¿Quiénes van a usar realmente el seguro y con qué frecuencia?'}</h2>
          <p className="section-copy mt-4 max-w-3xl">{en ? 'Family use is not simply one person’s use multiplied. Adults and children may need care at different frequencies, so review the expected pattern for each person before comparing the policy.' : 'El uso familiar no consiste simplemente en multiplicar el uso de una persona. Los adultos y los niños pueden necesitar atención con frecuencias distintas, así que revisa el patrón previsto de cada persona antes de comparar la póliza.'}</p>
          <p className="mt-5 max-w-3xl text-base leading-7 text-[var(--muted)]">{en ? 'Family composition affects two separate questions: the expected healthcare use across several people and the possible pricing effects of the number of insured members. Review both questions rather than treating them as the same calculation.' : 'La composición familiar afecta a dos preguntas distintas: el uso sanitario previsto de varias personas y los posibles efectos sobre el precio del número de asegurados. Revisa ambas cuestiones por separado en lugar de tratarlas como un mismo cálculo.'}</p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {householdChecks[locale].map((item) => (
              <article key={item.title} className="rounded-[22px] border border-[var(--border)] bg-white p-6 shadow-sm">
                <h3 className="font-heading text-xl font-bold leading-tight text-[var(--blue-deep)]">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white-pure" aria-labelledby="families-copayment-title">
        <div className="container-shell">
          <p className="kicker">{en ? 'MULTI-USER PAYMENT DECISION' : 'DECISIÓN DE PAGO CUANDO SOIS VARIOS'}</p>
          <h2 id="families-copayment-title" className="section-title mt-3">{en ? 'Co-payments when several people are covered' : 'Copagos cuando sois varios'}</h2>
          <p className="section-copy mt-4 max-w-3xl">{en ? 'Co-payments are usage-related charges set by the policy. Several recurring users can create a different pattern from one occasional user, so compare expected use with the balance between predictable spending and paying when services are used.' : 'Los copagos son cargos por utilización fijados por la póliza. Varios usuarios recurrentes generan un patrón distinto al de una sola persona con uso puntual, así que compara el uso previsto con el equilibrio entre gasto predecible y pago al utilizar servicios.'}</p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {copaymentChecks[locale].map((item) => (
              <article key={item.title} className="rounded-[22px] border border-[var(--border)] bg-[var(--bg)] p-6">
                <h3 className="font-heading text-xl font-bold leading-tight text-[var(--blue-deep)]">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{item.copy}</p>
              </article>
            ))}
          </div>
          <p className="mt-6 text-sm leading-7 text-[var(--muted)]">{en ? 'The actual premium and co-payment amounts must be checked in the selected product and policy. No structure is universally better for every family.' : 'La prima y los importes de copago deben comprobarse en el producto y la póliza seleccionados. Ninguna estructura es universalmente mejor para todas las familias.'}</p>
        </div>
      </section>

      <section className="section-pad bg-alternate" aria-labelledby="families-network-title">
        <div className="container-shell">
          <p className="kicker">{en ? 'CHECK CHILDREN’S ACCESS' : 'COMPRUEBA EL ACCESO INFANTIL'}</p>
          <h2 id="families-network-title" className="section-title mt-3">{en ? 'Do you have a specific paediatrician or children’s hospital in mind?' : '¿Tienes un pediatra o un hospital infantil concreto?'}</h2>
          <p className="section-copy mt-4 max-w-3xl">{en ? 'Before arranging cover, check the current official directory for the product you are considering. Networks, paediatric specialities, emergency channels and authorisation rules depend on the insurer, product and policy.' : 'Antes de contratar, comprueba el cuadro médico oficial vigente del producto que estés valorando. La red, las especialidades infantiles, los canales de urgencias y las autorizaciones dependen de la aseguradora, el producto y la póliza.'}</p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {networkChecks[locale].map((item) => (
              <article key={item.title} className="rounded-[22px] border border-[var(--border)] bg-white p-6 shadow-sm">
                <h3 className="font-heading text-xl font-bold leading-tight text-[var(--blue-deep)]">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{item.copy}</p>
              </article>
            ))}
          </div>
          <div className="mt-8 rounded-[22px] border border-[var(--border)] bg-white p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">{en ? 'Official sources for checking current information' : 'Fuentes oficiales para comprobar información'}</p>
            <div className="mt-4 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold">
              {sources.map((source) => <a key={source.href} className="text-[var(--blue)] underline underline-offset-4" href={source.href} target="_blank" rel="noreferrer">{source.label}</a>)}
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-white-pure" aria-labelledby="families-conditions-title">
        <div className="container-shell">
          <p className="kicker">{en ? 'OTHER CONDITIONS TO SEPARATE' : 'OTRAS CONDICIONES QUE CONVIENE SEPARAR'}</p>
          <h2 id="families-conditions-title" className="section-title mt-3">{en ? 'If hospital cover, pregnancy or a newborn also matters' : 'Si también te preocupa la hospitalización, el embarazo o un recién nacido'}</h2>
          <p className="section-copy mt-4 max-w-3xl">{en ? 'Hospitalisation, surgery, waiting periods and authorisations belong to the selected cover. Pregnancy, delivery and adding a newborn have their own conditions and timing; they do not work in the same way as covering a child who is already included.' : 'La hospitalización, la cirugía, las carencias y las autorizaciones dependen de la cobertura seleccionada. El embarazo, el parto y la incorporación de un recién nacido tienen sus propias condiciones y plazos; no funcionan igual que asegurar a un hijo que ya está incluido.'}</p>
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold">
            <Link className="text-[var(--blue)] underline underline-offset-4" href={en ? '/en/insurance/health-insurance/comprehensive' : '/seguros/salud/completa'}>{en ? 'Review hospital cover' : 'Revisar la cobertura con hospitalización'}</Link>
            <Link className="text-[var(--blue)] underline underline-offset-4" href={en ? '/en/for/families' : '/para/familias'}>{en ? 'See other family protection areas' : 'Ver otras áreas de protección para familias'}</Link>
          </div>
        </div>
      </section>
    </>
  );
}
