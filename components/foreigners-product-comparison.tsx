import Link from 'next/link';

type ForeignersProductComparisonProps = { locale: 'es' | 'en' };

const products = {
  es: [
    { name: 'ASISA Health Students', forWho: 'Visado de estudiante y estancias de estudios.', copay: 'Sin copagos', waiting: 'Sin carencias', term: 'De 2 meses a 1 año; producto inicial no renovable.' },
    { name: 'ASISA Health Residents', forWho: 'Trámites de residencia o visado de larga estancia.', copay: 'Sin copagos', waiting: 'Sin carencias', term: 'Un año; condiciones de renovación según producto.' },
    { name: 'ASISA Health Premium', forWho: 'Situaciones de visado o residencia que requieren otra modalidad.', copay: 'Sin copagos', waiting: 'Sin carencias', term: 'De 2 meses a 1 año; producto inicial no renovable.' },
    { name: 'ASISA Health Residents Premium', forWho: 'Personas que ya tienen residencia o visado y necesitan esta modalidad.', copay: 'Sin copagos', waiting: 'Con carencias', term: 'Un año; renovación automática según las condiciones aplicables.' },
  ],
  en: [
    { name: 'For study stays', forWho: 'Students preparing an application and their stay in Spain.', copay: 'Check the cover required by your study procedure.', waiting: 'Review any waiting periods against the applicable requirements.', term: 'Confirm cover dates, renewal and payment conditions before purchase.' },
    { name: 'For residence applications', forWho: 'Applicants arranging insurance for a specific residence or long-stay process.', copay: 'Review the policy against the relevant consular instructions.', waiting: 'Confirm that the selected policy meets the requirements for your procedure.', term: 'The individual offer must confirm dates, documents and payment terms.' },
    { name: 'For people already resident', forWho: 'People already authorised to live in Spain who are reviewing everyday health cover.', copay: 'Some policies may have co-payments.', waiting: 'Some policies may have waiting periods.', term: 'Monthly or instalment payments may be available; this does not automatically make the plan suitable for an initial visa.' },
    { name: 'For applicants over 70', forWho: 'Senior applicants who need an individual insurance review.', copay: 'Cover depends on the eligible product and the procedure.', waiting: 'Underwriting, health assessment and policy conditions may apply.', term: 'Confirm the actual maximum entry age and an offer suitable for your application; availability is not guaranteed.' },
  ],
} as const;

export function ForeignersProductComparison({ locale }: ForeignersProductComparisonProps) {
  const en = locale === 'en';
  const copy = en ? {
    eyebrow: 'Decision guide',
    title: 'Choose insurance around your situation',
    intro: 'We review the insurance solutions we can arrange for your circumstances, comparing requirements, cover and price. These starting points guide our conversation; they are not automatic eligibility or acceptance decisions.',
    forWho: 'Designed for',
    copay: 'Co-payments',
    waiting: 'Waiting periods',
    term: 'Duration and renewal',
    note: 'The insurer issues the policy and certificate. Payment options, travel assistance, refund terms and advance contracting depend on the selected policy. We explain the conditions before you buy.',
    decision: 'A simple starting point',
    steps: ['Tell us your procedure and relevant dates.', 'Compare available cover and price with personal advice.', 'Ask about monthly payments or age eligibility where relevant.', 'Confirm the selected policy and documents before buying.'],
    cta: 'Ask which plan fits my process',
    contact: '/en/contact',
  } : {
    eyebrow: 'Guía de decisión',
    title: '¿Qué modalidad ASISA puede encajar con tu trámite?',
    intro: 'Estas son diferencias de producto tomadas del manual ASISA 2026. No sustituyen la decisión migratoria ni determinan automáticamente la elegibilidad: revisamos tu trámite y las condiciones de la póliza antes de contratar.',
    forWho: 'Pensado para',
    copay: 'Copagos',
    waiting: 'Carencias',
    term: 'Duración y renovación',
    note: 'La aseguradora emite el certificado. La asistencia, repatriación, devolución y contratación anticipada dependen del producto y de la póliza concreta.',
    decision: 'Un punto de partida sencillo',
    steps: ['Visado de estudiante o estudios → empieza revisando Students.', 'Residencia o larga estancia → revisa Residents y sus condiciones.', 'Necesitas otra estructura → pregunta por las modalidades Premium.', 'Antes de contratar, confirma fechas, certificado y condiciones del trámite.'],
    cta: 'Preguntar qué modalidad encaja',
    contact: '/contacto',
  };

  return (
    <section className="border-y border-slate-200 bg-white py-12 md:py-16" aria-labelledby="foreigners-product-comparison-title">
      <div className="container-shell">
        <p className="kicker">{copy.eyebrow}</p>
        <h2 id="foreigners-product-comparison-title" className="mt-2 max-w-4xl text-2xl font-bold tracking-tight text-[var(--blue-deep)] md:text-3xl">{copy.title}</h2>
        <p className="mt-4 max-w-4xl text-base leading-7 text-slate-700">{copy.intro}</p>
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {products[locale].map((product) => (
            <article key={product.name} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <h3 className="text-lg font-bold leading-snug text-[var(--blue-deep)]">{product.name}</h3>
              <dl className="mt-4 space-y-3 text-sm leading-6 text-slate-700">
                <div><dt className="font-semibold text-slate-900">{copy.forWho}</dt><dd>{product.forWho}</dd></div>
                <div><dt className="font-semibold text-slate-900">{copy.copay}</dt><dd>{product.copay}</dd></div>
                <div><dt className="font-semibold text-slate-900">{copy.waiting}</dt><dd>{product.waiting}</dd></div>
                <div><dt className="font-semibold text-slate-900">{copy.term}</dt><dd>{product.term}</dd></div>
              </dl>
            </article>
          ))}
        </div>
        <p className="mt-6 max-w-4xl text-sm leading-6 text-slate-600">{copy.note}</p>
        <div className="mt-10 rounded-2xl bg-slate-900 p-6 text-white md:p-8">
          <h3 className="text-xl font-bold">{copy.decision}</h3>
          <ul className="mt-4 grid gap-3 text-sm leading-6 text-slate-200 md:grid-cols-2">
            {copy.steps.map((step) => <li key={step} className="rounded-xl border border-white/10 px-4 py-3">{step}</li>)}
          </ul>
          <Link href={copy.contact} className="mt-6 inline-flex rounded-xl bg-emerald-500 px-5 py-3 text-sm font-bold text-slate-950 hover:bg-emerald-400">{copy.cta} →</Link>
        </div>
      </div>
    </section>
  );
}
