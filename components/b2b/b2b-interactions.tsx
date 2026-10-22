'use client';

import { useEffect, useId, useMemo, useState } from 'react';
import { ArrowRight, BriefcaseBusiness, Building2, Check, Euro, HeartPulse, Loader2, Plane, UsersRound } from 'lucide-react';
import { trackB2BEvent } from '@/lib/analytics';
import styles from './b2b-pages.module.css';

type Locale = 'es' | 'en';

export function B2BPageView({ page, enabled = false }: { page: string; enabled?: boolean }) {
  useEffect(() => {
    if (enabled) trackB2BEvent('b2b_solution_viewed', { page });
  }, [enabled, page]);
  return null;
}

export function B2BMobileCta({ href, children }: { href: string; children: React.ReactNode }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const heroCta = document.querySelector<HTMLElement>('[data-b2b-hero-cta]');
    if (!heroCta || typeof IntersectionObserver === 'undefined') return;

    const observer = new IntersectionObserver(([entry]) => {
      setVisible(!entry.isIntersecting);
    }, { threshold: 0.01 });

    observer.observe(heroCta);
    return () => observer.disconnect();
  }, []);

  if (!visible) return null;
  return <a className={styles.mobileCta} href={href}>{children}</a>;
}

export function B2BEventLink({ href, eventName, children }: { href: string; eventName: string; children: React.ReactNode }) {
  void eventName;
  return <a className={styles.textButton} href={href}>{children}<ArrowRight size={16} aria-hidden="true" /></a>;
}

const problems = [
  { id: 'access', icon: HeartPulse, es: ['Facilitar el acceso sanitario', 'Que el equipo sepa a quién acudir y cómo usar su cobertura.'], en: ['Make healthcare easier to access', 'Give the team a clear route to the right care.'] },
  { id: 'benefit', icon: UsersRound, es: ['Ofrecer un beneficio valorado', 'Una decisión de personas, no solo una línea en la nómina.'], en: ['Offer a benefit people value', 'A people decision, not just another line on payroll.'] },
  { id: 'admin', icon: BriefcaseBusiness, es: ['Reducir carga administrativa', 'Ordenar altas, dudas y nuevas incorporaciones con apoyo.'], en: ['Reduce admin workload', 'Bring structure to joiners, questions and changes.'] },
  { id: 'cost', icon: Euro, es: ['Controlar coste y financiación', 'Estudiar quién aporta, cuánto y qué encaja en el presupuesto.'], en: ['Control cost and funding', 'Review contributions and options that fit the budget.'] },
  { id: 'mobility', icon: Plane, es: ['Cuidar equipos que se mueven', 'Separar viajes, movilidad frecuente, expatriación y equipos globales.'], en: ['Support mobile teams', 'Separate travel, frequent mobility, expats and global teams.'] },
] as const;

export function ProblemSelector({ locale = 'es' }: { locale?: Locale }) {
  const en = locale === 'en';
  const [active, setActive] = useState(0);
  const problem = problems[active];
  const copy = en ? problem.en : problem.es;
  return <div>
    <div className={styles.problemGrid} role="tablist" aria-label={en ? 'Business needs' : 'Necesidades empresariales'}>
      {problems.map((item, index) => {
        const Icon = item.icon;
        const labels = en ? item.en : item.es;
        return <button key={item.id} type="button" role="tab" aria-selected={active === index} className={`${styles.problemCard} ${active === index ? styles.problemCardActive : ''}`} onClick={() => setActive(index)}>
          <span className={styles.problemIcon}><Icon size={20} aria-hidden="true" /></span>
          <strong>{labels[0]}</strong><span>{labels[1]}</span>
        </button>;
      })}
    </div>
    <div className={styles.problemDetail} role="tabpanel">
      <div><strong>{en ? 'A clearer first conversation' : 'Una primera conversación más clara'}</strong><p>{copy[1]} {en ? 'VPI helps separate the need from the product.' : 'VPI ayuda a separar la necesidad del producto.'}</p></div>
      <a className={styles.textButton} href="#propuesta">{en ? 'Talk about my case' : 'Hablar de mi caso'} <ArrowRight size={16} aria-hidden="true" /></a>
    </div>
  </div>;
}

type FormValues = { name: string; email: string; phone: string; company: string; teamSize: string; profile: string; need: string; consent: boolean; website: string };

export function B2BProposalForm({ locale = 'es', preselectedNeed = '' }: { locale?: Locale; preselectedNeed?: string }) {
  const en = locale === 'en';
  const [values, setValues] = useState<FormValues>({ name: '', email: '', phone: '', company: '', teamSize: '', profile: '', need: preselectedNeed, consent: false, website: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [error, setError] = useState('');
  const update = (key: keyof FormValues, value: string | boolean) => setValues((current) => ({ ...current, [key]: value }));
  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (values.website) return;
    if (!values.name.trim() || !values.email.includes('@') || values.phone.trim().length < 6 || !values.teamSize || !values.profile || !values.consent) {
      setError(en ? 'Complete the required fields and consent so we can reply.' : 'Completa los campos obligatorios y el consentimiento para poder responderte.');
      return;
    }
    setStatus('sending'); setError(''); trackB2BEvent('b2b_proposal_started', { profile: values.profile, team_size: values.teamSize });
    try {
      const message = [
        `Origen: ${window.location.pathname}`,
        `Perfil: ${values.profile}`,
        `Empresa: ${values.company || 'No indicado'}`,
        `Personas: ${values.teamSize}`,
        `Necesidad: ${values.need || 'Por definir'}`,
      ].join('\n');
      const response = await fetch('/api/leads', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ source: 'b2b-proposal-form', name: values.name, phone: values.phone, email: values.email, interest: 'salud-empresas-autonomos', message, consent: true, website: '', pageUrl: window.location.href, referrer: document.referrer || '', metadata: { profile: values.profile, teamSize: values.teamSize, need: values.need } }) });
      if (!response.ok) throw new Error(en ? 'We could not send your request. Please try WhatsApp.' : 'No hemos podido enviar la solicitud. Puedes escribirnos por WhatsApp.');
      setStatus('success'); trackB2BEvent('b2b_proposal_submitted', { profile: values.profile, team_size: values.teamSize });
    } catch (submissionError) { setStatus('error'); setError(submissionError instanceof Error ? submissionError.message : (en ? 'Unexpected error.' : 'Ha ocurrido un error inesperado.')); }
  };
  const field = (key: keyof FormValues, label: string, input: React.ReactNode, wide = false) => <div className={`${styles.field} ${wide ? styles.fieldWide : ''}`}><label htmlFor={`b2b-${key}`}>{label}</label>{input}</div>;
  const select = (key: keyof FormValues, options: string[]) => <select id={`b2b-${key}`} className={styles.input} value={String(values[key])} onFocus={() => trackB2BEvent('b2b_proposal_started', { field: key })} onChange={(event) => { update(key, event.target.value); if (key === 'profile') trackB2BEvent('b2b_segment_selected', { segment: event.target.value }); }}><option value="">{en ? 'Select an option' : 'Selecciona una opción'}</option>{options.map((option) => <option key={option} value={option}>{option}</option>)}</select>;
  return <div className={styles.formCard}>
    <h3>{en ? 'Request a proposal' : 'Solicitar propuesta'}</h3>
    <p className={styles.formIntro}>{en ? 'A short first step. We will help you clarify the case before discussing products.' : 'Un primer paso breve. Te ayudamos a ordenar el caso antes de hablar de productos concretos.'}</p>
    {status === 'success' ? <p className={styles.formMessage} role="status">{en ? 'Thanks. We have received your details and will contact you to understand the case.' : 'Gracias. Hemos recibido tus datos y te contactaremos para entender el caso.'}</p> : <form onSubmit={submit} noValidate>
      <input className={styles.honeypot} tabIndex={-1} autoComplete="off" value={values.website} onChange={(event) => update('website', event.target.value)} aria-hidden="true" />
      <div className={styles.formGrid}>
        {field('name', en ? 'Name' : 'Nombre', <input id="b2b-name" className={styles.input} autoComplete="name" value={values.name} onChange={(event) => update('name', event.target.value)} />)}
        {field('email', 'Email', <input id="b2b-email" className={styles.input} type="email" autoComplete="email" value={values.email} onChange={(event) => update('email', event.target.value)} />)}
        {field('phone', en ? 'Phone' : 'Teléfono', <input id="b2b-phone" className={styles.input} type="tel" autoComplete="tel" value={values.phone} onChange={(event) => update('phone', event.target.value)} />)}
        {field('company', en ? 'Company (if applicable)' : 'Empresa (si aplica)', <input id="b2b-company" className={styles.input} autoComplete="organization" value={values.company} onChange={(event) => update('company', event.target.value)} />)}
        {field('teamSize', en ? 'Approx. people' : 'Nº aproximado de personas', select('teamSize', en ? ['Only me', '2–5', '6–10', '11–25', 'More than 25', "I don't know yet"] : ['Solo para mí', '2–5', '6–10', '11–25', 'Más de 25', 'Aún no lo sé']))}
        {field('profile', en ? 'Your situation' : 'Tu situación', select('profile', en ? ['Self-employed', 'Microteam', 'SME', 'Company', 'International team'] : ['Autónomo', 'Microequipo', 'PYME', 'Empresa', 'Equipo internacional']))}
        {field('need', en ? 'What would you like to solve?' : '¿Qué quieres resolver?', select('need', en ? ['Access to healthcare', 'A valued benefit', 'Reduce HR admin', 'Cost and funding', 'Mobility and travel'] : ['Acceso a salud', 'Beneficio valorado', 'Gestión de RRHH', 'Coste y financiación', 'Movilidad y viajes']), true)}
      </div>
      <label className={styles.consent}><input type="checkbox" checked={values.consent} onChange={(event) => update('consent', event.target.checked)} /><span>{en ? <>I agree that VPI may use my details to answer this enquiry. See the <a href="/en/privacy">privacy policy</a>.</> : <>Acepto que VPI utilice mis datos para responder a esta consulta. Consulta la <a href="/privacidad">política de privacidad</a>.</>}</span></label>
      {error ? <p className={styles.formError} role="alert">{error}</p> : null}
      <button className={`${styles.primaryButton} ${styles.formSubmit}`} type="submit" disabled={status === 'sending'}>{status === 'sending' ? <Loader2 size={17} className="animate-spin" aria-hidden="true" /> : <ArrowRight size={17} aria-hidden="true" />}{en ? 'Request proposal' : 'Solicitar propuesta'}</button>
    </form>}
  </div>;
}

export function B2BAbsenceCalculator({ locale = 'es' }: { locale?: Locale }) {
  const en = locale === 'en';
  const calculatorId = useId();
  const [employees, setEmployees] = useState(12);
  const [salary, setSalary] = useState(28000);
  const [absenceRate, setAbsenceRate] = useState(5);
  const [workingDays, setWorkingDays] = useState(220);
  const result = useMemo(() => {
    const days = employees * workingDays * (absenceRate / 100);
    const directCost = employees ? (salary / workingDays) * days : 0;
    return { days, directCost, perEmployee: directCost / Math.max(employees, 1) };
  }, [employees, salary, absenceRate, workingDays]);
  const money = new Intl.NumberFormat(en ? 'en-GB' : 'es-ES', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 });
  const range = (label: string, value: number, min: number, max: number, step: number, setValue: (value: number) => void, format: (value: number) => string) => <div className={styles.rangeField}><label htmlFor={`${calculatorId}-${label.replace(/\s+/g, '-')}`}><span>{label}</span><output>{format(value)}</output></label><input id={`${calculatorId}-${label.replace(/\s+/g, '-')}`} type="range" min={min} max={max} step={step} value={value} onChange={(event) => setValue(Number(event.target.value))} /></div>;
  return <div className={styles.calculator}>
    <div className={styles.calculatorGrid}>
      <div className={styles.calculatorControls}><p className={styles.eyebrow}>{en ? 'B2B TOOL' : 'HERRAMIENTA B2B'}</p><h3>{en ? 'Make the impact visible' : 'Haz visible el impacto'}</h3><p>{en ? 'An indicative estimate of direct salary cost linked to absence.' : 'Una estimación orientativa del coste salarial directo asociado al absentismo.'}</p>
        {range(en ? 'Employees' : 'Empleados', employees, 1, 100, 1, (value) => setEmployees(value), (value) => `${value}`)}
        {range(en ? 'Average gross salary' : 'Salario bruto medio', salary, 12000, 100000, 1000, (value) => setSalary(value), (value) => money.format(value))}
        {range(en ? 'Absence rate' : 'Tasa de absentismo', absenceRate, 0, 20, .5, (value) => setAbsenceRate(value), (value) => `${value}%`)}
        {range(en ? 'Working days/year' : 'Días laborables/año', workingDays, 180, 250, 1, (value) => setWorkingDays(value), (value) => `${value}`)}
      </div>
      <div className={styles.calculatorResult}><p className={styles.eyebrow}>{en ? 'ESTIMATE' : 'ESTIMACIÓN'}</p><div className={styles.resultGrid}><div className={styles.resultCard}><span>{en ? 'Estimated days/year' : 'Días estimados/año'}</span><strong>{Math.round(result.days)}</strong></div><div className={styles.resultCard}><span>{en ? 'Direct salary cost/year' : 'Coste salarial directo/año'}</span><strong>{money.format(result.directCost)}</strong></div><div className={styles.resultCard}><span>{en ? 'Average per employee' : 'Media por empleado'}</span><strong>{money.format(result.perEmployee)}</strong></div><div className={styles.resultCard}><span>{en ? 'Daily cost per employee' : 'Coste diario por empleado'}</span><strong>{money.format(salary / workingDays)}</strong></div></div><p className={styles.methodology}>{en ? 'Method: employees × working days × absence rate. Direct salary cost is estimated from average gross salary and excludes replacement, productivity, overtime and other indirect costs. It does not claim that health insurance reduces absence by a specific percentage.' : 'Método: empleados × días laborables × tasa de absentismo. El coste salarial directo se estima con el salario bruto medio y no incluye sustitución, productividad, horas extra ni otros costes indirectos. No implica que un seguro médico reduzca el absentismo en un porcentaje concreto.'}</p><a className={`${styles.primaryButton} ${styles.formSubmit}`} href="#propuesta">{en ? 'Study a solution for my team' : 'Estudiar una solución para mi equipo'} <ArrowRight size={16} aria-hidden="true" /></a></div>
    </div>
  </div>;
}
