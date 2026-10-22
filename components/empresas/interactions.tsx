'use client';

import { createContext, useContext, useEffect, useRef, useState, type ReactNode, type KeyboardEvent } from 'react';
import { ArrowRight, Check, ChevronDown, Search, CreditCard, Video, FileCheck2, MapPin, Building2, Loader2, CheckCircle2 } from 'lucide-react';
import { trackB2BEvent, getStoredUTMs } from '@/lib/analytics';
import { faqGroups, faqs, needs } from './content';
import s from './final.module.css';

type NeedId = typeof needs[number]['id'] | '' | 'other';
const JourneyContext = createContext<{ selectedNeed: NeedId; setSelectedNeed: (id: NeedId) => void } | null>(null);

export function BusinessJourney({ children }: { children: ReactNode }) {
  const [selectedNeed, setSelectedNeed] = useState<NeedId>('');
  return <JourneyContext.Provider value={{ selectedNeed, setSelectedNeed }}>{children}</JourneyContext.Provider>;
}
function useJourney() {
  const journey = useContext(JourneyContext);
  if (!journey) throw new Error('BusinessJourney is required');
  return journey;
}

function moveTab(event: KeyboardEvent<HTMLButtonElement>, index: number, count: number, choose: (i: number) => void) {
  let next: number | undefined;
  if (event.key === 'ArrowRight' || event.key === 'ArrowDown') next = (index + 1) % count;
  if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') next = (index - 1 + count) % count;
  if (event.key === 'Home') next = 0;
  if (event.key === 'End') next = count - 1;
  if (next === undefined) return;
  event.preventDefault();
  choose(next);
  const tabs = event.currentTarget.closest('[role="tablist"]')?.querySelectorAll<HTMLButtonElement>('[role="tab"]');
  tabs?.[next]?.focus();
}

export function PageBehavior() {
  const viewed = useRef(false);
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    if (!viewed.current) { trackB2BEvent('b2b_solution_viewed', { page: 'empresas-rebuild' }); viewed.current = true; }
    const hero = document.querySelector('[data-empresas-hero]');
    const proposal = document.getElementById('propuesta');
    const footer = document.querySelector('footer');
    const calculator = document.getElementById('herramientas');
    let heroVisible = true, formVisible = false, footerVisible = false, calculatorVisible = false;
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.target === hero) heroVisible = entry.isIntersecting;
        if (entry.target === proposal) formVisible = entry.isIntersecting;
        if (entry.target === footer) footerVisible = entry.isIntersecting;
        if (entry.target === calculator) calculatorVisible = entry.isIntersecting;
      }
      setSticky(!heroVisible && !formVisible && !footerVisible && !calculatorVisible);
    });
    for (const el of [hero, proposal, footer, calculator]) if (el) observer.observe(el);
    const click = (event: MouseEvent) => {
      const el = (event.target as Element).closest<HTMLElement>('[data-empresas-event]');
      if (el?.dataset.empresasEvent) trackB2BEvent(el.dataset.empresasEvent, { location: el.dataset.location || 'empresas' });
    };
    document.addEventListener('click', click);
    return () => { observer.disconnect(); document.removeEventListener('click', click); };
  }, []);
  return <nav className={s.journey} aria-label="Accesos de empresas" hidden={!sticky}>
    <a href="#experiencia" className={s.journeyLink}>El seguro en uso</a><a href="#puesta-en-marcha" className={s.journeyLink}>Gestión</a>
    <a className={s.navCta} href="#propuesta" data-empresas-event="b2b_cta_clicked" data-location="persistent">Hablar de mi empresa <ArrowRight size={16} aria-hidden="true" /></a>
  </nav>;
}

export function NeedSelector() {
  const { selectedNeed, setSelectedNeed } = useJourney();
  const active = Math.max(0, needs.findIndex(n => n.id === selectedNeed));
  const n = needs[active];
  const other = selectedNeed === 'other';
  const choose = (i: number) => { setSelectedNeed(needs[i].id); trackB2BEvent('b2b_problem_selected', { problem: needs[i].id, location: 'conversation-guide' }); };
  return <div className={s.needGuide}>
    <div className={s.needTabs} role="tablist" aria-label="¿Qué quieres resolver?">
      {needs.map((need, i) => <button key={need.id} id={`need-tab-${i}`} type="button" role="tab" aria-selected={!other && active === i} aria-controls="need-panel" tabIndex={active === i ? 0 : -1} onClick={() => choose(i)} onKeyDown={e => moveTab(e, i, needs.length, choose)}>{need.label}</button>)}
    </div>
    <div id="need-panel" role="tabpanel" aria-labelledby={other ? undefined : `need-tab-${active}`} aria-label={other ? 'Otra necesidad' : undefined} tabIndex={0} className={s.needPanel}>
      {other ? <p>Puedes explicar tu situación en el campo de otra necesidad.</p> : <><h4>{n.title}</h4><p>{n.text}</p><ul>{n.steps.map(step => <li key={step}>{step}</li>)}</ul><p>{n.tip}</p><a href={n.anchor} className={s.arrowLink} onClick={() => { if (n.anchor === '#respuestas') window.dispatchEvent(new CustomEvent('vpi:faq-group', { detail: n.id === 'budget' ? 1 : 0 })); if (n.anchor === '#movilidad') { const el = document.getElementById('movilidad'); if (el instanceof HTMLDetailsElement) { el.open = true; let parent = el.parentElement; while (parent) { if (parent instanceof HTMLDetailsElement) parent.open = true; parent = parent.parentElement; } } } }}>{n.link}<ArrowRight size={15} aria-hidden="true" /></a></>}
    </div>
  </div>;
}

const priorityQuestions = ['small', 'shared', 'joiner', 'coverage', 'travel', 'help'];
export function DecisionCenter() {
  const [expanded, setExpanded] = useState(false);
  const [group, setGroup] = useState(-1);
  const [open, setOpen] = useState<string | null>(null);
  useEffect(() => {
    const showGroup = (event: Event) => {
      const next = (event as CustomEvent<number>).detail;
      if (Number.isInteger(next) && next >= 0 && next <= 3) { setExpanded(true); setGroup(next); setOpen(null); }
    };
    window.addEventListener('vpi:faq-group', showGroup);
    return () => window.removeEventListener('vpi:faq-group', showGroup);
  }, []);
  const sorted = [...faqs].sort((a, b) => {
    const ai = priorityQuestions.indexOf(a.id), bi = priorityQuestions.indexOf(b.id);
    return (ai < 0 ? 99 : ai) - (bi < 0 ? 99 : bi);
  });
  return <div className={s.decisionCenter}>
    <div id="faq-categories" className={s.faqTabs} role="group" aria-label="Temas que conviene aclarar" hidden={!expanded}>
      {['Todas', ...faqGroups].map((label, i) => <button key={label} id={`faq-tab-${i - 1}`} type="button" aria-pressed={group === i - 1} onClick={() => { setGroup(i - 1); setOpen(null); }}>{label}</button>)}
    </div>
    <div className={s.faqList} id="faq-list">
      {sorted.map(f => <div key={f.id} className={s.faqItem} hidden={expanded ? group !== -1 && f.group !== group : !priorityQuestions.includes(f.id)}>
        <h3><button id={`question-${f.id}`} type="button" aria-expanded={open === f.id} aria-controls={`answer-${f.id}`} onClick={() => { const next = open === f.id ? null : f.id; setOpen(next); if (next) trackB2BEvent('b2b_faq_opened', { question: f.id }); }}>{f.q}<ChevronDown aria-hidden="true" size={19} /></button></h3>
        <div id={`answer-${f.id}`} role="region" aria-labelledby={`question-${f.id}`} hidden={open !== f.id} className={s.answer}><p>{f.a}</p><p>{f.detail}</p>{f.source?.startsWith('https://www.boe.es/') ? <a href={f.source} target="_blank" rel="noreferrer">{f.sourceLabel || 'Consultar la norma'} ↗</a> : null}</div>
      </div>)}
    </div>
    <button className={s.allQuestions} type="button" aria-expanded={expanded} aria-controls="faq-list faq-categories" onClick={() => { setExpanded(!expanded); setGroup(-1); setOpen(null); }}>{expanded ? 'Mostrar las seis preguntas principales' : 'Ver todas las preguntas (21)'}<ArrowRight size={16} aria-hidden="true" /></button>
  </div>;
}

const services = [
  { id: 'network', label: 'Encontrar un médico', icon: Search, question: '¿Dónde puedo atenderme?', title: 'Busca por especialidad y zona.', steps: ['Accede al cuadro médico oficial.', 'Filtra la especialidad y tu ubicación.', 'Comprueba centro, profesional y forma de pedir cita.'], note: 'La disponibilidad se confirma en el cuadro médico de tu producto.' },
  { id: 'card', label: 'Tarjeta digital', icon: CreditCard, question: '¿Necesito llevar la tarjeta?', title: 'Tu identificación, en el móvil.', steps: ['Entra en el área de cliente o app.', 'Abre la tarjeta del asegurado.', 'Sigue las indicaciones para identificarte en el centro.'], note: 'Comprueba los medios de identificación admitidos por tu centro.' },
  { id: 'video', label: 'Consulta a distancia', icon: Video, question: '¿Puedo consultar sin desplazarme?', title: 'Revisa las consultas digitales.', steps: ['Comprueba los servicios de tu modalidad.', 'Consulta las especialidades y canales disponibles.', 'Accede a la consulta por el canal de la aseguradora.'], note: 'El canal, los horarios y el alcance dependen del servicio contratado.' },
  { id: 'authorization', label: 'Autorizaciones', icon: FileCheck2, question: '¿Cómo tramito una autorización?', title: 'Prepara la documentación y sigue su estado.', steps: ['Comprueba si el acto requiere autorización.', 'Presenta la documentación por el canal de la aseguradora.', 'Consulta el estado y la resolución de la solicitud.'], note: 'La aprobación corresponde a la aseguradora según las condiciones de la póliza.' },
];

export function DigitalExplorer() {
  const [active, setActive] = useState(0);
  const [stage, setStage] = useState(0);
  const service = services[active]; const Icon = service.icon;
  const choose = (i: number) => { setActive(i); setStage(0); trackB2BEvent('b2b_digital_service_selected', { service: services[i].id }); };
  const chooseStage = (i: number) => { setStage(i); trackB2BEvent('b2b_digital_demo_interaction', { service: service.id, step: i + 1 }); };
  return <div className={s.digitalExplorer}>
    <div className={s.serviceTabs} role="tablist" aria-label="Explora servicios digitales de la aseguradora">
      {services.map((item, i) => { const ItemIcon = item.icon; return <button key={item.id} type="button" role="tab" id={`service-tab-${i}`} aria-selected={active === i} aria-controls="service-panel" tabIndex={active === i ? 0 : -1} onClick={() => choose(i)} onKeyDown={(e) => moveTab(e, i, services.length, choose)}><ItemIcon size={20} aria-hidden="true" /><span>{item.label}</span></button>; })}
    </div>
    <div className={s.servicePanel} role="tabpanel" id="service-panel" aria-labelledby={`service-tab-${active}`} tabIndex={0}>
      <div className={s.serviceTop}><span className={s.serviceIcon}><Icon size={27} aria-hidden="true" /></span><span>SERVICIO DE LA ASEGURADORA</span></div>
      <p className={s.serviceQuestion}>{service.question}</p><h3>{service.title}</h3>
      <div className={s.taskDemo}>
        <p className={s.conceptLabel}>REPRESENTACIÓN CONCEPTUAL · NO ES UNA CAPTURA DE APP</p>
        <div className={s.taskVisual} aria-hidden="true">
          <div className={s.taskCanvas} data-stage={stage}><span className={s.taskGlyph}><Icon size={36} strokeWidth={1.4} /></span>
            {service.id === 'network' ? <>{stage === 0 ? <div className={s.taskResult}><Search size={24} /><span>Cuadro médico oficial<small>El buscador de tu aseguradora</small></span></div> : stage === 1 ? <div className={s.taskChips}><span>Especialidad</span><span><MapPin size={13} /> Zona</span></div> : <div className={s.taskResult}><Building2 size={22} /><span>Profesional y centro<small>Comprobar producto y pedir cita</small></span></div>}</> : service.id === 'card' ? <>{stage === 1 ? <div className={s.digitalCard}><span>IDENTIFICACIÓN DEL ASEGURADO</span><CreditCard size={30} /><div className={s.cardLines}><i /><i /></div><small>En el canal de tu aseguradora</small></div> : <div className={s.taskResult}><CreditCard size={24} /><span>{stage === 0 ? 'Acceso personal' : 'Identificación en el centro'}<small>{stage === 0 ? 'Área de cliente o app de la aseguradora' : 'Confirmar el medio admitido'}</small></span></div>}</> : service.id === 'authorization' ? <div className={s.documentFlow}><span><FileCheck2 size={24} />{['¿Necesita autorización?', 'Presentar documentación', 'Consultar resolución'][stage]}</span>{stage === 1 ? <><ArrowRight size={18} /><span>Canal de la aseguradora</span></> : null}</div> : <div className={s.consultVisual}><Video size={29} /><span>{['Servicios de tu modalidad', 'Canal y especialidad', 'Acceso a la consulta'][stage]}<small>Según el servicio contratado</small></span></div>}

          </div><div className={s.taskProgress}>{service.steps.map((step, i) => <span key={step} data-active={stage === i} />)}</div>
        </div>
        <div className={s.taskSteps} aria-label={`Pasos: ${service.label}`}>
          {service.steps.map((step, i) => <button key={step} type="button" aria-pressed={stage === i} onClick={() => chooseStage(i)}><span>{i + 1}</span>{step}</button>)}
        </div>
        <p className={s.currentStep} role="status">Paso {stage + 1}: {service.steps[stage]}</p>
      </div>
      <a className={s.arrowLink} href="#respuestas" onClick={() => window.dispatchEvent(new CustomEvent('vpi:faq-group', { detail: 2 }))}>Revisar coberturas y condiciones<ArrowRight size={16} aria-hidden="true" /></a>
      <p className={s.serviceNote}>{service.note}</p>
    </div>
    <p className={s.schemeNote}>Estas gestiones se realizan en los canales de la aseguradora. La visualización explica tareas, no reproduce su interfaz. Funciones según producto y modalidad.</p>
  </div>;
}

export function ProposalForm() {
  const { selectedNeed, setSelectedNeed } = useJourney();
  const [needDetail, setNeedDetail] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [error, setError] = useState('');
  const started = useRef(false);
  const inFlight = useRef(false);
  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault(); if (inFlight.current) return;
    const form = e.currentTarget;
    const contactField = form.elements.namedItem('contact') as HTMLInputElement;
    contactField.setCustomValidity('');
    const contact = contactField.value.trim();
    const email = contact.includes('@') ? contact : '';
    const phone = email ? '' : contact;
    const validContact = email ? /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) : /^\+?[\d () .-]+$/.test(phone) && phone.replace(/\D/g, '').length >= 6 && phone.length <= 80;
    if (!validContact) contactField.setCustomValidity('Indica un email válido o un teléfono de al menos seis cifras.');
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    if (data.get('website')) return;
    inFlight.current = true; setStatus('sending'); setError('');
    const size = String(data.get('teamSize') || '');
    const need = selectedNeed === 'other' ? String(data.get('needDetail') || 'Otra necesidad') : needs.find(n => n.id === selectedNeed)?.label || 'Por definir';
    const company = String(data.get('company') || 'No indicada');
    const alreadyInsured = String(data.get('alreadyInsured') || 'Aún no lo sé');
    try {
      const response = await fetch('/api/leads', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ source: 'b2b-proposal-form', name: data.get('name'), email, phone, interest: 'salud-empresas-autonomos', message: `Empresa: ${company}\nPersonas: ${size}\nSeguro actual: ${alreadyInsured}\nNecesidad: ${need}`, consent: data.get('consent') === 'on', website: '', pageUrl: window.location.href, referrer: document.referrer || '', utm: getStoredUTMs(), metadata: { company, teamSize: size, need, alreadyInsured, profile: 'Por confirmar' } }) });
      const result = await response.json();
      if (!response.ok || result.success !== true) throw new Error('No se ha podido enviar. Tus datos siguen en el formulario; puedes intentarlo de nuevo o contactar desde /contacto.');
      setStatus('success'); trackB2BEvent('b2b_proposal_submitted', { team_size: size });
    } catch (e) { setStatus('error'); setError(e instanceof Error ? e.message : 'No se ha podido enviar. Inténtalo de nuevo.'); }
    finally { inFlight.current = false; }
  }
  return <div className={s.formCard}>
    {status === 'success' ? <div className={s.formSuccess} role="status" tabIndex={-1}><CheckCircle2 size={40} aria-hidden="true" /><h3>Ya tenemos tu consulta.</h3><p>Nos pondremos en contacto contigo para entender la situación y ver qué opciones merece la pena estudiar.</p><p>No has contratado ningún seguro con este envío.</p></div> : <form onSubmit={submit} onFocusCapture={() => { if (!started.current) { started.current = true; trackB2BEvent('b2b_proposal_started', { page: 'empresas' }); } }}>
      <h3>Un primer paso sencillo.</h3><div className={s.formStarting}><p>PARA EMPEZAR SOLO NECESITAMOS</p><span><span>Cuántos sois</span><b aria-hidden="true">·</b><span>Si ya tenéis seguro</span><b aria-hidden="true">·</b><span>Qué queréis mejorar</span></span></div>
      <div className={s.honeypot} aria-hidden="true"><label htmlFor="proposal-website">Deja este campo vacío</label><input id="proposal-website" name="website" tabIndex={-1} autoComplete="off" /></div>
      <div className={s.formGrid}>
        <div><label htmlFor="proposal-name">Tu nombre <span>*</span></label><input id="proposal-name" name="name" autoComplete="name" required minLength={2} maxLength={160} /></div>
        <div><label htmlFor="proposal-company">Empresa <small>(si tienes)</small></label><input id="proposal-company" name="company" autoComplete="organization" maxLength={180} /></div>
        <div className={s.fieldWide}><label htmlFor="proposal-contact">Email o teléfono <span>*</span></label><input id="proposal-contact" name="contact" type="text" required maxLength={180} autoComplete="off" onInput={e => e.currentTarget.setCustomValidity('')} placeholder="El canal por el que prefieres que hablemos" /></div>
        <div className={s.fieldWide}><label htmlFor="proposal-size">¿Cuántas personas, aproximadamente? <span>*</span></label><select id="proposal-size" name="teamSize" required defaultValue=""><option value="" disabled>Elige la opción más cercana</option>{['Solo para mí / mi familia', '2–5 personas', '6–10 personas', '11–50 personas', 'Más de 50 personas', 'Aún no lo sé'].map(x => <option key={x}>{x}</option>)}</select></div>
        <div className={s.fieldWide}><label htmlFor="proposal-insured">¿Ya tenéis seguro de salud? <small>(opcional)</small></label><select id="proposal-insured" name="alreadyInsured" defaultValue=""><option value="">Elige si lo sabes</option><option>Sí, ya tenemos seguro</option><option>No, sería el primero</option><option>Solo algunas personas</option><option>Aún no lo sé</option></select></div>
        <div className={s.fieldWide}><label htmlFor="proposal-need">¿Qué queréis mejorar? <small>(opcional)</small></label><select id="proposal-need" name="need" value={selectedNeed} onChange={(e) => { const id = e.target.value as NeedId; setSelectedNeed(id); if (id) trackB2BEvent('b2b_problem_selected', { problem: id, location: 'proposal' }); }}><option value="">Aún no lo tengo claro</option>{needs.map(n => <option key={n.id} value={n.id}>{n.label}</option>)}<option value="other">Otra necesidad</option></select>{selectedNeed && selectedNeed !== 'other' ? <p className={s.formContext}>Te interesa: {needs.find(n => n.id === selectedNeed)?.label.toLowerCase()}. Puedes cambiarlo aquí.</p> : null}</div>
        {selectedNeed === 'other' ? <div className={s.fieldWide}><label htmlFor="proposal-detail">Cuéntanos qué necesitas <small>(opcional)</small></label><textarea id="proposal-detail" name="needDetail" rows={2} maxLength={500} value={needDetail} onChange={e => setNeedDetail(e.target.value)} /></div> : null}
      </div>
      <details className={s.needDetails}><summary>¿Qué conviene revisar en mi situación?<ChevronDown size={16} aria-hidden="true" /></summary><NeedSelector /></details>
      <label className={s.consent}><input type="checkbox" name="consent" required /><span>Acepto que VPI utilice mis datos para responder a esta consulta. He leído la <a href="/privacidad">política de privacidad</a>. <span aria-hidden="true">*</span></span></label>
      {error ? <p className={s.formError} role="alert">{error} <a href="/contacto">Contactar con VPI</a></p> : null}
      <button className={s.primary} type="submit" disabled={status === 'sending'}>{status === 'sending' ? <>Enviando <Loader2 className={s.spinner} size={18} aria-hidden="true" /></> : <>Hablar de mi empresa <ArrowRight size={18} aria-hidden="true" /></>}</button>
      <p className={s.formFoot}>Este envío abre una conversación; no contrata un seguro. Campos con * obligatorios. Sin datos médicos.</p>
    </form>}
  </div>;
}
