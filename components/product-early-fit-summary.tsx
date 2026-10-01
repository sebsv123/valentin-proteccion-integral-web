import Link from 'next/link';
import { ArrowRight, Check, CircleHelp } from 'lucide-react';

type EarlyFitKind = 'families' | 'comprehensive' | 'reimbursement';
type Locale = 'es' | 'en';

const content: Record<Locale, Record<EarlyFitKind, {
  eyebrow: string;
  title: string;
  intro: string;
  positiveLabel?: string;
  positive: string[];
  cautionLabel?: string;
  caution?: string[];
  note?: string;
  action: string;
}>> = {
  es: {
    families: {
      eyebrow: 'COMPRUEBA EL ENCAJE',
      title: '¿Encaja contigo?',
      intro: 'Antes de entrar en el detalle, estas son tres señales para saber si merece la pena revisar la opción familiar.',
      positive: [
        'Buscas cubrir a varias personas de la familia.',
        'Quieres valorar el uso previsto de cada miembro, incluida la pediatría si aplica.',
        'Necesitas comparar modalidad, condiciones y coste total del caso familiar.',
      ],
      action: 'Revisar mi caso familiar',
    },
    comprehensive: {
      eyebrow: 'DECISIÓN RÁPIDA',
      title: '¿Cuándo tiene sentido añadir hospitalización?',
      intro: 'La respuesta depende de cómo esperas usar la sanidad privada y de las condiciones concretas de la póliza.',
      positiveLabel: 'Puede encajarte si',
      positive: [
        'Te importan los ingresos hospitalarios y la cirugía.',
        'Buscas algo más que consultas y pruebas ambulatorias.',
        'Aceptas revisar carencias, autorizaciones y cuestionario antes de decidir.',
      ],
      cautionLabel: 'Quizá no sea tu prioridad si',
      caution: ['Buscas principalmente especialistas y pruebas sin que la hospitalización sea una necesidad central.'],
      action: 'Revisar si necesito hospitalización',
    },
    reimbursement: {
      eyebrow: 'COMPRUEBA EL ENCAJE',
      title: '¿Te encaja el reembolso?',
      intro: 'Responde estas preguntas antes de comparar una modalidad de reembolso. La póliza concreta fija el alcance y los límites.',
      positive: [
        '¿Quieres acudir a un médico o centro fuera del cuadro médico?',
        '¿Has revisado el porcentaje de reembolso y los límites económicos de la póliza concreta?',
        '¿Te encaja adelantar el pago y solicitar después el reembolso con la documentación requerida?',
      ],
      note: 'VPI no aprueba el reembolso: la aseguradora y la póliza determinan las condiciones aplicables.',
      action: 'Revisar si el reembolso encaja conmigo',
    },
  },
  en: {
    families: {
      eyebrow: 'CHECK THE FIT',
      title: 'Could this fit your family?',
      intro: 'Before the detail, these are three signals that it may be worth reviewing family cover.',
      positive: [
        'You want to cover several people in your family.',
        'You want to review expected use for each person, including paediatric care where relevant.',
        'You need to compare the plan, conditions and total cost for your family situation.',
      ],
      action: 'Review my family situation',
    },
    comprehensive: {
      eyebrow: 'A QUICK DECISION',
      title: 'When does hospital cover make sense?',
      intro: 'The answer depends on how you expect to use private healthcare and the specific policy terms.',
      positiveLabel: 'It may fit if',
      positive: [
        'Hospital admission and surgery matter to you.',
        'You want more than outpatient consultations and tests.',
        'You are prepared to review waiting periods, authorisations and the health questionnaire before deciding.',
      ],
      cautionLabel: 'It may not be your priority if',
      caution: ['You mainly want specialists and tests, without hospital cover being a central need.'],
      action: 'Review whether I need hospital cover',
    },
    reimbursement: {
      eyebrow: 'CHECK THE FIT',
      title: 'Could reimbursement fit you?',
      intro: 'Answer these questions before comparing a reimbursement plan. The specific policy sets its scope and limits.',
      positive: [
        'Do you want to see a doctor or centre outside the insurer network?',
        'Have you checked the reimbursement percentage and financial limits of the specific policy?',
        'Are you comfortable paying first and then requesting reimbursement with the required documents?',
      ],
      note: 'VPI does not approve reimbursement: the insurer and policy determine the applicable terms.',
      action: 'Review whether reimbursement fits me',
    },
  },
};

export function ProductEarlyFitSummary({ kind, locale }: { kind: EarlyFitKind; locale: Locale }) {
  const copy = content[locale][kind];
  const isCaution = Boolean(copy.caution?.length);

  return (
    <section className="border-y border-slate-200 bg-slate-50/80 py-8 md:py-10" aria-labelledby={`early-fit-${kind}-title`}>
      <div className="container-shell">
        <div className="soft-card border border-slate-200 bg-white p-5 shadow-sm md:p-7">
          <div className="max-w-4xl">
            <p className="kicker">{copy.eyebrow}</p>
            <h2 id={`early-fit-${kind}-title`} className="mt-2 text-2xl font-bold tracking-tight text-[var(--blue-deep)] md:text-3xl">{copy.title}</h2>
            <p className="mt-3 max-w-3xl text-base leading-7 text-slate-700 md:text-lg">{copy.intro}</p>
          </div>

          <div className={`mt-5 grid gap-4 ${isCaution ? 'md:grid-cols-2' : ''}`}>
            <div className={isCaution ? '' : 'md:col-span-2'}>
              {copy.positiveLabel ? <p className="mb-2 text-sm font-bold text-[var(--blue-deep)]">{copy.positiveLabel}</p> : null}
              <ul className={`${isCaution ? 'space-y-2' : 'grid gap-2 md:grid-cols-3'}`}>
                {copy.positive.map((item) => <li key={item} className="flex gap-2 rounded-xl bg-slate-50 px-3 py-3 text-sm leading-6 text-slate-700"><Check aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-emerald-600" />{item}</li>)}
              </ul>
            </div>
            {copy.caution ? <div><p className="mb-2 text-sm font-bold text-[var(--blue-deep)]">{copy.cautionLabel}</p><ul className="space-y-2">{copy.caution.map((item) => <li key={item} className="flex gap-2 rounded-xl border border-amber-200 bg-amber-50/70 px-3 py-3 text-sm leading-6 text-slate-700"><CircleHelp aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-amber-600" />{item}</li>)}</ul></div> : null}
          </div>

          {copy.note ? <p className="mt-4 text-sm leading-6 text-slate-600">{copy.note}</p> : null}
          <Link href={locale === 'en' ? '/en/contact' : '/contacto'} className="btn-primary mt-5 inline-flex min-h-11 items-center gap-2 px-5" data-mobile-primary-cta>
            {copy.action}<ArrowRight aria-hidden="true" className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
