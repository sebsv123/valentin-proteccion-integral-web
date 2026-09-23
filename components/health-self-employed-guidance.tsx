import Link from 'next/link';

type Locale = 'es' | 'en';

const insuranceChecks: Record<Locale, Array<{ title: string; copy: string }>> = {
  es: [
    { title: 'Consultas y especialistas', copy: 'Revisa qué consultas, especialistas y frecuencia de uso esperas necesitar según la modalidad concreta.' },
    { title: 'Pruebas diagnósticas', copy: 'Comprueba qué pruebas pueden estar incluidas, con qué autorizaciones y bajo qué condiciones del plan.' },
    { title: 'Hospitalización y cirugía', copy: 'Si una intervención o un ingreso pueden ser relevantes para ti, revisa si forman parte de la modalidad y sus condiciones.' },
    { title: 'Copago y uso previsto', copy: 'Compara la prima y los copagos con el uso que prevés; no existe una opción universalmente mejor.' },
    { title: 'Médicos y hospitales', copy: 'Comprueba el cuadro médico vigente y la disponibilidad de los profesionales y centros que realmente te importan.' },
    { title: 'Disponibilidad y continuidad', copy: 'Valora horarios, ubicación y continuidad de la atención sin asumir que una póliza elimina esperas o garantiza disponibilidad.' },
  ],
  en: [
    { title: 'Consultations and specialists', copy: 'Review which consultations, specialists and frequency of use you expect under the specific plan.' },
    { title: 'Diagnostic tests', copy: 'Check which tests may be included, with which authorisations and under what plan conditions.' },
    { title: 'Hospitalisation and surgery', copy: 'If an operation or admission may matter to you, check whether it forms part of the plan and its conditions.' },
    { title: 'Co-payments and expected use', copy: 'Compare the premium and co-payments with your expected use; there is no universally best option.' },
    { title: 'Doctors and hospitals', copy: 'Check the current medical directory and the availability of the professionals and centres that matter to you.' },
    { title: 'Availability and continuity', copy: 'Consider opening hours, location and continuity without assuming a policy removes waiting or guarantees availability.' },
  ],
};

const practicalChecks: Record<Locale, Array<{ title: string; copy: string }>> = {
  es: [
    { title: 'Organizar citas alrededor del trabajo', copy: 'Tu agenda puede hacer especialmente relevante revisar horarios, ubicación y canales de atención del producto.' },
    { title: 'Prever la frecuencia', copy: 'Piensa si esperas un uso puntual o recurrente para valorar copagos, prima y acceso a especialistas.' },
    { title: 'Comprobar el hospital', copy: 'Si una hospitalización importa, revisa hospitales, carencias, autorizaciones y límites de la modalidad concreta.' },
    { title: 'Mantener la documentación', copy: 'Guarda la documentación de la póliza y de sus cambios; la cobertura depende siempre del producto contratado.' },
  ],
  en: [
    { title: 'Organise appointments around work', copy: 'Your schedule may make it especially useful to review opening hours, location and the product’s care channels.' },
    { title: 'Consider expected frequency', copy: 'Think about occasional or recurring use when comparing co-payments, premiums and specialist access.' },
    { title: 'Check the hospital', copy: 'If hospitalisation matters, review hospitals, waiting periods, authorisations and limits for the specific plan.' },
    { title: 'Keep the documentation', copy: 'Keep the policy documents and updates; cover always depends on the product you arrange.' },
  ],
};

const taxVerification: Record<Locale, Array<{ title: string; copy: string }>> = {
  es: [
    { title: 'Tu método de tributación', copy: 'Comprueba si tu situación encaja en el marco de estimación directa al que se refiere la regla.' },
    { title: 'Quién paga la prima', copy: 'Si la póliza la paga una sociedad, una empresa u otra persona, la revisión fiscal puede ser distinta.' },
    { title: 'Tu familia y convivencia', copy: 'La norma citada utiliza un alcance concreto para cónyuge e hijos menores de veinticinco años que convivan contigo.' },
    { title: 'Cambios y documentación', copy: 'Consulta a la Agencia Tributaria o a tu asesor fiscal si hay discapacidad, dudas de registro o cambios normativos.' },
  ],
  en: [
    { title: 'Your tax method', copy: 'Check whether your situation falls within the direct-estimation framework to which the rule refers.' },
    { title: 'Who pays the premium', copy: 'If a company, corporation or another person pays the policy, the tax analysis may be different.' },
    { title: 'Your family and residence', copy: 'The cited rule has a specific scope for a spouse and children under 25 who live with you.' },
    { title: 'Changes and records', copy: 'Check with the Spanish Tax Agency or your tax adviser if disability, bookkeeping or legal changes are relevant.' },
  ],
};

export function HealthSelfEmployedGuidance({ locale }: { locale: Locale }) {
  const en = locale === 'en';
  const links = en
    ? {
        parent: '/en/insurance/health',
        comprehensive: '/en/insurance/health-insurance/comprehensive',
        aeat: 'https://sede.agenciatributaria.gob.es/Sede/ayuda/manuales-videos-folletos/manuales-ayuda-presentacion/irpf-2025/7-cumplimentacion-irpf/7_4-rendimientos-actividades-economicas/7_4_2-regimen-estimacion-directa/7_4_2_3-gastos-fiscalmente-deducibles/otros-gastos-personal.html',
        boe: 'https://www.boe.es/eli/es/l/2006/11/28/35/con',
      }
    : {
        parent: '/seguros/salud',
        comprehensive: '/seguros/salud/completa',
        aeat: 'https://sede.agenciatributaria.gob.es/Sede/ayuda/manuales-videos-folletos/manuales-ayuda-presentacion/irpf-2025/7-cumplimentacion-irpf/7_4-rendimientos-actividades-economicas/7_4_2-regimen-estimacion-directa/7_4_2_3-gastos-fiscalmente-deducibles/otros-gastos-personal.html',
        boe: 'https://www.boe.es/eli/es/l/2006/11/28/35/con',
      };

  return (
    <>
      <section className="section-pad bg-alternate" aria-labelledby="self-employed-insurance-title">
        <div className="container-shell">
          <p className="kicker">{en ? 'THE INSURANCE DECISION' : 'LA DECISIÓN SOBRE EL SEGURO'}</p>
          <h2 id="self-employed-insurance-title" className="mt-3 section-title">{en ? 'Being self-employed does not change the main question: how will you use the policy?' : 'Ser autónomo no cambia la pregunta principal: ¿cómo vas a usar el seguro?'}</h2>
          <p className="section-copy mt-4 max-w-4xl">{en ? 'Self-employed status does not create a universal medical package. Start with your expected use and then review the cover, network, authorisations, waiting periods and limits in the specific policy.' : 'Ser autónomo no crea un paquete sanitario universal. Empieza por el uso que esperas hacer y después revisa las coberturas, el cuadro médico, las autorizaciones, las carencias y los límites de la póliza concreta.'}</p>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {insuranceChecks[locale].map((item) => (
              <article key={item.title} className="rounded-[22px] border border-[var(--border)] bg-white p-6 shadow-sm">
                <h3 className="font-heading text-xl font-bold leading-tight text-[var(--blue-deep)]">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white-pure" aria-labelledby="self-employed-practical-title">
        <div className="container-shell">
          <p className="kicker">{en ? 'WORK AND PRACTICAL USE' : 'TRABAJO Y USO PRÁCTICO'}</p>
          <h2 id="self-employed-practical-title" className="mt-3 section-title">{en ? 'What can be different when you organise healthcare around your work?' : '¿Qué puede cambiar cuando organizas la atención sanitaria alrededor de tu trabajo?'}</h2>
          <p className="section-copy mt-4 max-w-4xl">{en ? 'Being self-employed may change how you plan appointments, but it does not turn a policy into a promise of faster recovery, no waiting or uninterrupted business activity. Those questions must be checked against the product and your own circumstances.' : 'Ser autónomo puede cambiar cómo organizas tus citas, pero no convierte una póliza en una promesa de recuperación más rápida, ausencia de esperas o continuidad garantizada del negocio. Esas cuestiones deben comprobarse en el producto y en tus circunstancias.'}</p>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {practicalChecks[locale].map((item) => (
              <article key={item.title} className="rounded-[22px] border border-[var(--border)] bg-[var(--bg)] p-6">
                <h3 className="font-heading text-xl font-bold leading-tight text-[var(--blue-deep)]">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-alternate" aria-labelledby="self-employed-tax-separation-title">
        <div className="container-shell">
          <p className="kicker">{en ? 'TWO DIFFERENT QUESTIONS' : 'DOS PREGUNTAS DISTINTAS'}</p>
          <h2 id="self-employed-tax-separation-title" className="mt-3 section-title">{en ? 'Insurance and tax treatment are separate questions' : 'Seguro y fiscalidad: conviene separarlos'}</h2>
          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            <article className="rounded-[24px] border border-[var(--border)] bg-white p-7">
              <h3 className="font-heading text-2xl font-bold text-[var(--blue-deep)]">{en ? 'Coverage first' : 'Primero la cobertura'}</h3>
              <p className="mt-3 text-base leading-8 text-[var(--muted)]">{en ? 'First decide whether the policy fits your doctors, expected use and practical needs. Do not choose a weak health policy only because you are considering a tax treatment.' : 'Primero decide si la póliza encaja con tus médicos, el uso previsto y tus necesidades prácticas. No elijas una cobertura sanitaria débil solo porque estés valorando un tratamiento fiscal.'}</p>
            </article>
            <article className="rounded-[24px] border border-[var(--border)] bg-white p-7">
              <h3 className="font-heading text-2xl font-bold text-[var(--blue-deep)]">{en ? 'Tax treatment second' : 'Después, la fiscalidad'}</h3>
              <p className="mt-3 text-base leading-8 text-[var(--muted)]">{en ? 'Then check whether the premium may receive the tax treatment applicable to your taxpayer profile, tax method and circumstances.' : 'Después revisa si la prima puede recibir el tratamiento fiscal aplicable a tu perfil, método de tributación y circunstancias.'}</p>
            </article>
          </div>
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold">
            <Link className="text-[var(--blue)] underline underline-offset-4" href={links.parent}>{en ? 'Back to health insurance decisions' : 'Volver a las decisiones de salud'}</Link>
            <Link className="text-[var(--blue)] underline underline-offset-4" href={links.comprehensive}>{en ? 'Review hospital cover separately' : 'Revisar la cobertura con hospitalización'}</Link>
          </div>
        </div>
      </section>

      <section className="section-pad bg-white-pure" aria-labelledby="self-employed-tax-rule-title">
        <div className="container-shell">
          <p className="kicker">{en ? 'OFFICIAL IRPF SCOPE' : 'ALCANCE OFICIAL EN EL IRPF'}</p>
          <h2 id="self-employed-tax-rule-title" className="mt-3 section-title">{en ? 'What does the IRPF rule actually say?' : '¿Qué dice realmente la regla del IRPF?'}</h2>
          <div className="mt-8 rounded-[26px] border border-[var(--border)] bg-[var(--bg)] p-7 md:p-9">
            <p className="text-base leading-8 text-[var(--muted)]">{en ? 'Under the direct-estimation method, the rule treats health-insurance premiums paid by the taxpayer for their own cover and that of their spouse and children under 25 who live with them as a deductible expense when determining net income, subject to the applicable requirements.' : 'En estimación directa, la regla contempla las primas de seguro de enfermedad satisfechas por el contribuyente para su propia cobertura y la de su cónyuge e hijos menores de veinticinco años que convivan con él como gasto deducible para determinar el rendimiento neto, sujeto a los requisitos aplicables.'}</p>
            <div className="mt-7 grid gap-4 md:grid-cols-2">
              <article className="rounded-[20px] border border-[var(--border)] bg-white p-6">
                <h3 className="font-heading text-2xl font-bold text-[var(--blue-deep)]">{en ? '€500 per eligible person' : '500 € por cada persona elegible'}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{en ? 'The statutory maximum is €500 for each person covered by the stated scope, subject to the rule and the amount actually paid.' : 'El límite máximo previsto es de 500 € por cada persona incluida en el alcance indicado, sujeto a la norma y al importe efectivamente pagado.'}</p>
              </article>
              <article className="rounded-[20px] border border-[var(--border)] bg-white p-6">
                <h3 className="font-heading text-2xl font-bold text-[var(--blue-deep)]">{en ? '€1,500 per eligible person with a disability' : '1.500 € por cada persona elegible con discapacidad'}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{en ? 'The higher statutory limit applies where the person has a disability, subject to the requirements and evidence that apply.' : 'El límite legal superior se aplica cuando la persona tiene una discapacidad, sujeto a los requisitos y la acreditación que correspondan.'}</p>
              </article>
            </div>
            <div className="mt-7 rounded-[20px] border border-[var(--blue)]/20 bg-white p-6">
              <h3 className="font-heading text-2xl font-bold text-[var(--blue-deep)]">{en ? 'A deductible-expense limit is not a €500 tax refund' : 'Un límite de gasto deducible no es una devolución de 500 €'}</h3>
              <p className="mt-3 text-base leading-8 text-[var(--muted)]">{en ? 'No. A €500 deductible-expense limit does not mean that the tax authority refunds €500 or reduces tax due euro for euro. The actual effect depends on your tax situation, applicable method, requirements and the amount paid.' : 'No. Un límite de gasto deducible de 500 € no significa que Hacienda te devuelva 500 € ni que reduzca el impuesto a pagar euro por euro. El efecto real depende de tu situación fiscal, el método aplicable, los requisitos y el importe pagado.'}</p>
            </div>
            <div className="mt-7 border-t border-[var(--border)] pt-6">
              <h3 className="font-heading text-xl font-bold text-[var(--blue-deep)]">{en ? 'Mechanism example' : 'Ejemplo del mecanismo'}</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{en ? 'If an eligible person’s annual premium is €420, the deductible expense cannot exceed the amount actually paid. If it is €700, the statutory limit may cap the amount considered under this rule, subject to the applicable requirements. This does not calculate the resulting tax effect.' : 'Si la prima anual de una persona que cumple los requisitos es de 420 €, el gasto deducible no puede superar lo efectivamente pagado. Si es de 700 €, el límite legal puede hacer que solo se considere hasta el límite aplicable, sujeto a los requisitos. Este ejemplo no calcula el efecto final en el impuesto.'}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-alternate" aria-labelledby="self-employed-verification-title">
        <div className="container-shell">
          <p className="kicker">{en ? 'CHECK YOUR CASE' : 'COMPRUEBA TU CASO'}</p>
          <h2 id="self-employed-verification-title" className="mt-3 section-title">{en ? 'Who should verify their tax case?' : '¿Quién debería verificar su caso fiscal?'}</h2>
          <p className="section-copy mt-4 max-w-4xl">{en ? 'Check with the Spanish Tax Agency or a tax adviser if your method, policy structure or family circumstances do not clearly match the cited rule.' : 'Consulta a la Agencia Tributaria o a un asesor fiscal si tu método, la estructura de la póliza o tus circunstancias familiares no encajan claramente con la regla citada.'}</p>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {taxVerification[locale].map((item) => (
              <article key={item.title} className="rounded-[22px] border border-[var(--border)] bg-white p-6">
                <h3 className="font-heading text-xl font-bold leading-tight text-[var(--blue-deep)]">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{item.copy}</p>
              </article>
            ))}
          </div>
          <p className="mt-7 max-w-4xl text-base leading-8 text-[var(--muted)]">{en ? 'VPI mediates insurance and can help you review policy documentation. VPI does not provide individual tax advice, apply a deduction or file your tax treatment.' : 'VPI media seguros y puede ayudarte a revisar la documentación de la póliza. VPI no presta asesoramiento fiscal individual, no aplica deducciones ni presenta tu tratamiento fiscal.'}</p>
          <div className="mt-8 border-t border-[var(--border)] pt-6">
            <p className="text-sm font-extrabold tracking-wide text-[var(--blue-deep)]">{en ? 'Official sources consulted' : 'Fuentes oficiales consultadas'}</p>
            <div className="mt-3 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold">
              <a className="text-[var(--blue)] underline underline-offset-4" href={links.aeat} target="_blank" rel="noreferrer">{en ? 'Spanish Tax Agency — health-insurance premiums' : 'Agencia Tributaria — primas de seguro de enfermedad'}</a>
              <a className="text-[var(--blue)] underline underline-offset-4" href={links.boe} target="_blank" rel="noreferrer">{en ? 'BOE — Spanish Personal Income Tax Act, Article 30' : 'BOE — Ley del IRPF, artículo 30'}</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
