'use client';

import { createContext, useContext, useEffect, useRef, useState, type ReactNode, type KeyboardEvent, type CSSProperties } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ArrowRight, ArrowLeft, Check, Loader2, CheckCircle2 } from 'lucide-react';
import { businessHealthSchema, buildBusinessHealthLeadPayload, isBusinessHealthLeadSuccess, type BusinessHealthValues } from '@/lib/business-health-lead';
import { trackB2BEvent } from '@/lib/analytics';
import { parseMonthlyPremium, splitContributionCents } from '@/lib/business-health-money';
import { plans } from './content';
import s from './styles.module.css';
import { CoverageScene } from './scenes';

const HealthContext = createContext<{ coverage: string; setCoverage: (v: string) => void } | null>(null);
export function HealthJourney({ children }: { children: ReactNode }) {
  const [coverage, setCoverage] = useState('');
  const viewed = useRef(false);
  useEffect(() => {
    if (!viewed.current) { viewed.current = true; trackB2BEvent('b2b_solution_viewed', { page: 'business-health' }); }
    const click = (e: MouseEvent) => { const el = (e.target as Element).closest<HTMLElement>('[data-health-cta]'); if (el) trackB2BEvent('b2b_cta_clicked', { page: 'business-health', location: el.dataset.healthCta }); };
    document.addEventListener('click', click); return () => document.removeEventListener('click', click);
  }, []);
  return <HealthContext.Provider value={{ coverage, setCoverage }}>{children}</HealthContext.Provider>;
}
function useHealth() { const context = useContext(HealthContext); if (!context) throw new Error('HealthJourney is required'); return context; }

export function CoverageExplorer() {
  const [active, setActive] = useState(1);
  const { setCoverage } = useHealth();
  const plan = plans[active];
  const choose = (i: number) => { setActive(i); trackB2BEvent('b2b_segment_selected', { segment: plans[i].id, location: 'health-coverage' }); };
  function keyboard(e: KeyboardEvent<HTMLButtonElement>, i: number) {
    const next = e.key === 'ArrowRight' || e.key === 'ArrowDown' ? (i + 1) % 3 : e.key === 'ArrowLeft' || e.key === 'ArrowUp' ? (i + 2) % 3 : e.key === 'Home' ? 0 : e.key === 'End' ? 2 : null;
    if (next === null) return; e.preventDefault(); choose(next); document.getElementById(`health-plan-${next}`)?.focus();
  }
  return <div className={s.coverageExplorer}>
    <div className={s.planTabs} role="tablist" aria-label="Niveles de cobertura" aria-orientation="horizontal">{plans.map((p, i) => <button type="button" key={p.id} id={`health-plan-${i}`} role="tab" aria-selected={i === active} aria-controls="health-plan-panel" tabIndex={i === active ? 0 : -1} onClick={() => choose(i)} onKeyDown={e => keyboard(e, i)}><span className={s.planTabLabel}><span>0{i + 1}</span><strong>{p.label}</strong></span><small>{p.short}</small></button>)}</div>
    <div className={s.planPanel} id="health-plan-panel" role="tabpanel" tabIndex={0} aria-labelledby={`health-plan-${active}`}>
      <div className={s.coverageExperience}><CoverageScene active={plan.id} />
      <div className={s.planSummary}><div><p className={s.kicker}>{plan.focus}</p><h3>{plan.title}</h3><p>{plan.text}</p></div><a className={s.textLink} href="#solicitar-estudio" data-health-cta="coverage" onClick={() => setCoverage(plan.form)}>Estudiar esta opción <ArrowRight size={18} aria-hidden="true" /></a></div>
      </div>
      <div className={s.coverageMatrix}>
        <table><caption className={s.srOnly}>Comparación orientativa de familias de cobertura. Consulta las condiciones de cada póliza.</caption><thead><tr><th scope="col">Qué cambia</th>{plans.map((p,i)=><th key={p.id} scope="col" data-selected={i===active}>{p.label}</th>)}</tr></thead><tbody>{[
          ['Consultas y pruebas', 'Según cobertura', 'Según cobertura', 'Según cobertura'],
          ['Hospitalización', 'No es su alcance', 'Incluida según póliza', 'Según modalidad'],
          ['Elección de profesional', 'Cuadro médico', 'Cuadro médico', 'Fuera del cuadro, si es elegible'],
          ['Importe que recuperas', 'No es reembolso', 'No es reembolso', 'Porcentaje y límites'],
        ].map(([label,...values])=><tr key={label}><th scope="row">{label}</th>{values.map((value,i)=><td key={i} data-selected={i===active}>{value}</td>)}</tr>)}</tbody></table>
      </div>

      <details className={s.planDetail}><summary>Qué conviene revisar en {plan.label.toLowerCase()} <span aria-hidden="true">+</span></summary><div className={s.coverageSheet}><dl>{plan.rows.map(([label, detail]) => <div key={label}><dt>{label}</dt><dd>{detail}</dd></div>)}</dl><p className={s.sheetFoot}><Check size={16} aria-hidden="true" />{plan.check}</p></div></details>
    </div>
    <noscript><div className={s.noScriptCoverages}>{plans.map(p=><section key={p.id}><h3>{p.label}</h3><p>{p.text}</p><p>{p.check}</p></section>)}</div></noscript>
    <details className={s.coverageFine}><summary>Lo que siempre hay que comprobar, elijas lo que elijas <span aria-hidden="true">+</span></summary><p>Cuadro médico y centros, prima, copagos, carencias, exclusiones, autorizaciones, aceptación y renovación. Las modalidades no son equivalentes y la cobertura definitiva es la que figure en la póliza.</p></details>
  </div>;
}

export function ContributionCalculator() {
  const [premium, setPremium] = useState('');
  const [share, setShare] = useState(70);
  const last = useRef('');
  const [touched, setTouched] = useState(false);
  const parsed = parseMonthlyPremium(premium);
  const valid = parsed.ok;
  const cents = parsed.ok ? parsed.cents : 0;
  const { employer, employee } = valid ? splitContributionCents(cents, share) : { employer: 0, employee: 0 };
  const inputError = !parsed.ok && (premium !== '' || touched)
    ? parsed.reason === 'empty' ? 'Introduce una prima mensual conocida para ver el reparto.'
      : parsed.reason === 'range' ? 'Introduce un importe mayor que cero y de hasta 100.000 € (100000,00).'
      : 'Usa un importe como 65,50 o 65.50, sin símbolos ni separadores de miles y con hasta dos decimales.'
    : '';
  const euro = (v: number) => (v / 100).toLocaleString('es-ES', { style: 'currency', currency: 'EUR' });
  function recordFor(nextShare: number) { const key = `${premium}|${nextShare}`; if (valid && key !== last.current) { last.current = key; trackB2BEvent('b2b_resource_clicked', { location: 'health-contribution', employer_share: nextShare }); } }
  function record() { recordFor(share); }
  function scenario(nextShare: number) { setShare(nextShare); recordFor(nextShare); }
  const circumference = 2 * Math.PI * 70;
  return <div className={s.contribution} data-contribution-root>
    <div className={s.contributionHeading} data-contribution-heading><p className={s.kicker}>UNA PRIMA CONOCIDA. UN REPARTO A TU MEDIDA.</p><h3>¿Quién aporta<br />{' '}qué parte?</h3></div>
    <div className={s.contributionScenarios} data-contribution-scenarios role="group" aria-label="Escenarios de aportación"><button type="button" aria-pressed={share===100} onClick={()=>scenario(100)} aria-label="Empresa aporta el 100 %"><span>Empresa</span><small>100 %</small></button><button type="button" aria-pressed={share>0&&share<100} onClick={()=>scenario(70)} aria-label="Aportación compartida"><span>Compartido</span><small>Elegir reparto</small></button><button type="button" aria-pressed={share===0} onClick={()=>scenario(0)} aria-label="Empleado aporta el 100 %"><span>Empleado</span><small>100 %</small></button></div>
    <div className={s.contributionWorkbench} data-contribution-workbench>
      <div className={s.contributionWheel} data-contribution-wheel aria-hidden="true"><svg viewBox="0 0 200 200" focusable="false"><defs><linearGradient id="vpi-share-blue" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#287ce4"/><stop offset="100%" stopColor="#1554ba"/></linearGradient><linearGradient id="vpi-share-orange" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#e8b68a"/><stop offset="100%" stopColor="#bf7b46"/></linearGradient></defs><circle cx="100" cy="100" r="70" fill="none" stroke="url(#vpi-share-orange)" strokeWidth="20" /><circle cx="100" cy="100" r="70" fill="none" stroke="url(#vpi-share-blue)" strokeWidth="20" strokeDasharray={`${circumference*share/100} ${circumference}`} transform="rotate(-90 100 100)" /><text x="100" y="101" textAnchor="middle">{share}<tspan>%</tspan></text><text x="100" y="123" textAnchor="middle" className={s.wheelCaption}>empresa</text></svg><span>El reparto que estás probando</span></div>
      <div className={s.contributionControls} data-contribution-controls>
        <label className={s.amountLabel} htmlFor="health-premium">Prima mensual por persona</label><div className={s.amountInput}><input id="health-premium" type="text" inputMode="decimal" data-currency-input autoComplete="off" spellCheck={false} placeholder="Introduce tu importe" value={premium} onChange={e => setPremium(e.target.value)} onBlur={() => { setTouched(true); record(); }} aria-invalid={Boolean(inputError)} aria-describedby={`health-calculator-scope${inputError ? ' health-premium-error' : ''}`} /><span>€ / mes</span></div>
        {inputError ? <p id="health-premium-error" className={s.fieldError} role="status">{inputError}</p> : null}
        <div className={s.shareLabels}><label htmlFor="health-share">Empresa <strong>{share} %</strong></label><span>Empleado <strong>{100 - share} %</strong></span></div><input className={s.shareSlider} style={{ '--employer-share': `${share}%` } as CSSProperties} id="health-share" aria-valuetext={`${share} % empresa, ${100-share} % empleado`} type="range" min="0" max="100" value={share} onChange={e => setShare(Number(e.target.value))} onPointerUp={record} onKeyUp={record} />
      </div>
    </div>
    <p className={s.contributionContext} data-contribution-context>{share === 100 ? 'La empresa asume el importe introducido por persona.' : share === 0 ? 'El trabajador asume el importe introducido. La forma de pago se confirma con la contratación.' : `La empresa aporta el ${share} %; el empleado completa el ${100-share} %. Ajusta el reparto para estudiar otras opciones.`}</p>
    <div className={s.splitResults} data-contribution-results aria-live="polite" aria-atomic="true"><div><span>Empresa / persona / mes</span><strong data-health-result="company">{valid ? euro(employer) : '—'}</strong></div><div><span>Empleado / persona / mes</span><strong data-health-result="employee">{valid ? euro(employee) : '—'}</strong></div></div>
    <p className={s.calculatorScope} data-contribution-scope id="health-calculator-scope">Solo repartimos tu cifra, redondeada al céntimo. No calculamos una prima ni efectos fiscales. El importe y las condiciones reales dependen de la propuesta.</p>
  </div>;
}

export function HealthProposalForm() {
  const { coverage, setCoverage } = useHealth();
  const [step, setStep] = useState(1);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [serverError, setServerError] = useState('');
  const started = useRef(false);
  const success = useRef<HTMLDivElement>(null);
  const { register, handleSubmit, trigger, watch, setValue, setFocus, formState: { errors, isSubmitting } } = useForm<BusinessHealthValues>({ resolver: zodResolver(businessHealthSchema), defaultValues: { consent: false, website: '', coverage: '' }, shouldFocusError: true });
  const profile = watch('profile');
  useEffect(() => { if (coverage) setValue('coverage', coverage, { shouldValidate: false }); }, [coverage, setValue]);
  useEffect(() => { if (step === 2) setFocus('fullName'); }, [step, setFocus]);
  useEffect(() => { if (status === 'success') success.current?.focus(); }, [status]);
  async function next() { if (await trigger(['profile', 'company', 'teamSize', 'province', 'coverage'], { shouldFocus: true })) setStep(2); }
  async function send(values: BusinessHealthValues) {
    if (values.website) return;
    setServerError(''); setStatus('idle');
    try {
      const response = await fetch('/api/leads', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(buildBusinessHealthLeadPayload(values, 'es', { url: window.location.href, referrer: document.referrer || '' })) });
      const data: unknown = await response.json();
      if (!isBusinessHealthLeadSuccess(response.ok, data)) throw new Error('No hemos podido enviar la solicitud. Conservamos tus datos para que puedas intentarlo de nuevo.');
      setStatus('success'); trackB2BEvent('b2b_proposal_submitted', { page: 'business-health', profile: values.profile, team_size: values.teamSize });
    } catch (e) { setStatus('error'); setServerError(e instanceof Error ? e.message : 'No hemos podido enviar la solicitud.'); }
  }
  function error(name: keyof BusinessHealthValues) { const message = errors[name]?.message; return message ? <p id={`health-error-${name}`} className={s.fieldError} role="alert">{message}</p> : null; }
  function a11y(name: keyof BusinessHealthValues) { return { 'aria-invalid': Boolean(errors[name]), 'aria-describedby': errors[name] ? `health-error-${name}` : undefined }; }
  return <div className={s.formCard}>
    {status === 'success' ? <div className={s.formSuccess} role="status" tabIndex={-1} ref={success}><CheckCircle2 size={38} aria-hidden="true" /><p className={s.kicker}>CONSULTA RECIBIDA</p><h3>Ya podemos empezar<br />{' '}a entender vuestro caso.</h3><p>Revisaremos la información y contactaremos contigo para completar lo necesario. Te explicaremos las opciones y sus condiciones antes de que decidas.</p><p>Este envío no contrata un seguro ni implica aceptación del riesgo.</p></div> : <>
      <div className={s.formSteps} aria-label={`Paso ${step} de 2`}><span data-active={step === 1}>01 · Tu equipo</span><span data-active={step === 2}>02 · Hablemos</span></div>
      <form noValidate aria-label="Solicitud de estudio de salud" onFocusCapture={() => { if (!started.current) { started.current = true; trackB2BEvent('b2b_proposal_started', { page: 'business-health' }); } }} onSubmit={e => { if (step === 1) { e.preventDefault(); void next(); } else void handleSubmit(send)(e); }}>
        <div className={s.honeypot} aria-hidden="true"><label htmlFor="health-website">Deja este campo vacío</label><input id="health-website" tabIndex={-1} autoComplete="off" {...register('website')} /></div>
        <div hidden={step !== 1}>
          <h3>Primero, tu equipo.</h3><p className={s.formHint}>No hace falta tener decidida la cobertura.</p>
          <div className={s.formGrid}>
            <div><label htmlFor="health-profile">Tu perfil <span>*</span></label><select id="health-profile" {...register('profile')} {...a11y('profile')}><option value="">Selecciona</option><option value="empresa">Represento una empresa</option><option value="autonomo">Soy autónomo</option></select>{error('profile')}</div>
            <div><label htmlFor="health-company">Empresa {profile === 'empresa' ? <span>*</span> : <small>(si aplica)</small>}</label><input id="health-company" autoComplete="organization" {...register('company')} {...a11y('company')} />{error('company')}</div>
            <div><label htmlFor="health-size">Personas a incluir <span>*</span></label><select id="health-size" {...register('teamSize')} {...a11y('teamSize')}><option value="">Selecciona</option>{['Solo para mí', '2', '3–5', '6–10', '11–25', 'Más de 25', 'Aún no lo sé'].map(t => <option key={t}>{t}</option>)}</select>{error('teamSize')}</div>
            <div><label htmlFor="health-province">Provincia <span>*</span></label><input id="health-province" autoComplete="address-level1" {...register('province')} {...a11y('province')} />{error('province')}</div>
            <div className={s.wideField}><label htmlFor="health-coverage">Cobertura a estudiar <span>*</span></label><select id="health-coverage" {...register('coverage', { onChange: e => setCoverage(e.target.value) })} {...a11y('coverage')}><option value="">Selecciona</option>{['Ambulatoria', 'Completa con hospitalización', 'Reembolso', 'Quiero comparar opciones', 'Aún no lo sé'].map(t => <option key={t}>{t}</option>)}</select>{error('coverage')}</div>
          </div>
          {profile === 'autonomo' ? <p className={s.soloHelp}>Si solo es para ti, también puedes revisar <a href="/seguros/salud">salud individual</a>.</p> : null}
          <button type="button" className={s.primary} onClick={() => void next()}>Continuar con mi contacto <ArrowRight size={18} aria-hidden="true" /></button>
          <p className={s.formFoot}>En este paso no se envía ningún dato.</p>
        </div>
        <div hidden={step !== 2}>
          <h3>¿Cómo hablamos contigo?</h3><p className={s.formHint}>Para revisar el caso y completar la información.</p>
          <div className={s.formGrid}>
            <div className={s.wideField}><label htmlFor="health-name">Nombre y apellidos <span>*</span></label><input id="health-name" autoComplete="name" {...register('fullName')} {...a11y('fullName')} />{error('fullName')}</div>
            <div><label htmlFor="health-email">Email <span>*</span></label><input id="health-email" type="email" autoComplete="email" {...register('email')} {...a11y('email')} />{error('email')}</div>
            <div><label htmlFor="health-phone">Teléfono <span>*</span></label><input id="health-phone" type="tel" autoComplete="tel" {...register('phone')} {...a11y('phone')} />{error('phone')}</div>
          </div>
          <details className={s.optionalFields}><summary>Añadir fecha, aportación u observaciones <span aria-hidden="true">+</span></summary><div className={s.formGrid}><div><label htmlFor="health-date">Fecha prevista <small>(opcional)</small></label><select id="health-date" {...register('startDate')}><option value="">Por decidir</option>{['Lo antes posible', 'En 1–3 meses', 'En la próxima renovación'].map(t => <option key={t}>{t}</option>)}</select></div><div><label htmlFor="health-financing">Aportación <small>(opcional)</small></label><select id="health-financing" {...register('financing')}><option value="">Por decidir</option>{['Paga la empresa', 'Aportación compartida', 'Paga el empleado', 'Estudiar retribución flexible'].map(t => <option key={t}>{t}</option>)}</select></div><div className={s.wideField}><label htmlFor="health-message">Observaciones <small>(opcional)</small></label><textarea id="health-message" rows={3} maxLength={1000} placeholder="Qué os gustaría mejorar. Sin datos médicos." {...register('message')} {...a11y('message')} />{error('message')}</div></div></details>
          <label className={s.consent}><input type="checkbox" aria-required="true" {...register('consent')} {...a11y('consent')} /><span>Acepto que VPI utilice mis datos para responder a esta consulta. He leído la <a href="/privacidad">política de privacidad</a>.</span></label>{error('consent')}
          {status === 'error' ? <p className={s.serverError} role="alert">{serverError} También puedes <a href="/contacto">contactar con VPI</a>.</p> : null}
          <div className={s.formActions}><button className={s.backButton} type="button" onClick={() => setStep(1)} disabled={isSubmitting}><ArrowLeft size={16} aria-hidden="true" />Volver</button><button className={s.primary} type="submit" disabled={isSubmitting} aria-busy={isSubmitting}>{isSubmitting ? <>Enviando <Loader2 size={18} className={s.spinner} aria-hidden="true" /></> : <>Solicitar estudio <ArrowRight size={18} aria-hidden="true" /></>}</button></div>
          <p className={s.formFoot}>La solicitud no implica contratación ni aceptación automática del riesgo. No adjuntes documentación médica.</p>
        </div>
      </form>
    </>}
  </div>;
}
