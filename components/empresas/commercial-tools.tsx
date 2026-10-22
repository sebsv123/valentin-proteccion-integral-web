'use client';

import { useId, useRef, useState, type ReactNode } from 'react';
import { ArrowRight, ChevronDown, SlidersHorizontal } from 'lucide-react';
import { trackB2BEvent } from '@/lib/analytics';
import s from './final.module.css';

const situations = [
  { id: 'joiner', label: 'Entra alguien nuevo', title: 'Su incorporación empieza por saber qué aportar.', company: 'Comunica la incorporación y aporta los datos y documentos requeridos por el canal acordado.', vpi: 'Orienta sobre los requisitos y ayuda a ordenar la documentación y el siguiente paso.', insurer: 'Revisa la solicitud y confirma aceptación, condiciones y fecha de efecto.', employee: 'Debe conocer su fecha de alta, cómo acceder a su tarjeta y dónde consultar el cuadro médico.' },
  { id: 'help', label: 'Surge una duda', title: 'Una pregunta no tiene por qué pasar por todo RRHH.', company: 'Comparte los canales de uso con el equipo y la persona de contacto para la gestión.', vpi: 'Orienta cuando alguien no sabe qué trámite necesita, qué documentación aportar o a quién dirigirse.', insurer: 'Atiende la gestión y resuelve las cuestiones médicas, de cobertura o de autorización.', employee: 'Puede utilizar los canales digitales contratados y acudir a VPI para orientarse sobre cómo seguir.' },
  { id: 'growth', label: 'El equipo cambia', title: 'Más personas, nuevas necesidades o una salida.', company: 'Comunica los cambios previstos y revisa personas, presupuesto y aportación. Las bajas siguen los plazos de la póliza.', vpi: 'Ayuda a plantear los requisitos de los cambios y a identificar el circuito de comunicación.', insurer: 'Confirma requisitos, prima y fecha de efecto de las altas, bajas o cambios que admita la póliza.', employee: 'Recibe la información que le corresponde y la fecha de efecto. No se presuponen cambios automáticos.' },
];
const operationFlow = [
  ['Comunica la incorporación.', 'Ordena requisitos y documentos.', 'Confirma el alta y su fecha.', 'Conoce cómo empezar a usarlo.'],
  ['Comparte los canales de ayuda.', 'Orienta sobre el siguiente paso.', 'Resuelve la gestión que corresponda.', 'Sabe dónde consultar su duda.'],
  ['Revisa personas y presupuesto.', 'Orienta el circuito del cambio.', 'Confirma condiciones y fechas.', 'Recibe la información del cambio.'],
];
export function EverydayOperations({ children }: { children: ReactNode }) {
  const [active, setActive] = useState(0);
  const item = situations[active];
  const detail = useRef<HTMLDetailsElement>(null);
  return <div className={s.everyday}>
    <div className={s.operationChoices} aria-label="Situaciones de gestión">{situations.map((option, i) => <button type="button" key={option.id} aria-pressed={active === i} aria-controls="operation-detail" onClick={() => { setActive(i); if (detail.current) detail.current.open = false; trackB2BEvent('b2b_admin_scenario_selected', { scenario: option.id }); }}>{option.label}</button>)}</div>
    <div id="operation-detail" className={s.operationDetail}>
      <h3>{item.title}</h3>
      <ol className={s.operationFlow}>{['EMPRESA', 'VPI', 'ASEGURADORA', 'PERSONA'].map((role, i) => <li key={role}><span>{role}</span><p>{operationFlow[active][i]}</p>{i < 3 ? <ArrowRight size={17} aria-hidden="true" /> : null}</li>)}</ol>
      <details ref={detail} className={s.operationMore}><summary>Ver qué hace cada parte <ChevronDown size={16} aria-hidden="true" /></summary>
        <dl className={s.operationFull}>{[['Empresa', item.company], ['VPI', item.vpi], ['Aseguradora', item.insurer], ['Persona asegurada', item.employee]].map(([role, text]) => <div key={role}><dt>{role}</dt><dd>{text}</dd></div>)}</dl>
        {children}
      </details>
    </div>
  </div>;
}

export function AbsencePreview() {
  return <a href="/empresas/recursos#calculadora-absentismo" className={s.toolLaunch} data-empresas-event="b2b_resource_clicked" data-location="absence-calculator"><span className={s.absenceEquation}>Personas × salario × tasa</span><span>Calcular con mis datos <ArrowRight size={17} aria-hidden="true" /></span></a>;
}

export function ContributionTool() {
  const [share, setShare] = useState(70);
  const id = useId();
  return <div className={s.contributionEntry}>
    <span className={s.toolNumber}>02 <SlidersHorizontal size={25} strokeWidth={1.5} aria-hidden="true" /></span><h3 className={s.toolTitle}>¿Cómo repartir<br />un coste conocido?</h3><p className={s.toolDescription}>Introduce una prima y prueba cuánto aportaría cada parte.</p>
    <div className={s.sharePreview}><label htmlFor={`${id}-preview`}>Empresa <strong>{share} %</strong><span>Empleado <strong>{100 - share} %</strong></span></label><input id={`${id}-preview`} type="range" min="0" max="100" value={share} onChange={e => setShare(Number(e.target.value))} aria-label="Reparto previo: porcentaje de la empresa" /><small>Elige un reparto. Después, introduce tu importe.</small></div>

    <details onToggle={e => { if (e.currentTarget.open) trackB2BEvent('b2b_resource_clicked', { location: 'contribution-calculator' }); }}>
      <summary className={s.toolSummary}><span className={s.arrowLink}>Calcular con mi importe <ArrowRight size={17} aria-hidden="true" /></span><small>Solo aritmética. Sin cálculo fiscal.</small></summary>
      <ContributionCalculator share={share} onShareChange={setShare} />
    </details>
  </div>;
}

export function ContributionCalculator({ share, onShareChange }: { share: number; onShareChange: (share: number) => void }) {
  const id = useId();
  const [premium, setPremium] = useState('');
  const [people, setPeople] = useState('1');
  const tracked = useRef('');
  const amount = Number(premium);
  const count = Number(people);
  const validPremium = /^\d+(?:[.,]\d{1,2})?$/.test(premium) && Number.isFinite(amount) && amount > 0 && amount <= 100000;
  const validPeople = /^\d+$/.test(people) && Number.isInteger(count) && count >= 1 && count <= 10000;
  const valid = validPremium && validPeople;
  const cents = valid ? Math.round(amount * 100) : 0;
  const employer = Math.round(cents * share / 100);
  const employee = cents - employer;
  const euro = (value: number) => (value / 100).toLocaleString('es-ES', { style: 'currency', currency: 'EUR' });
  function record(nextShare = share) {
    if (!valid) return;
    const signature = `${premium}|${people}|${nextShare}`;
    if (tracked.current === signature) return;
    tracked.current = signature;
    trackB2BEvent('b2b_contribution_calculator_used', { employer_share: nextShare, team_band: count === 1 ? 'one' : count <= 5 ? '2-5' : count <= 50 ? '6-50' : '50+' });
  }
  return <div className={s.contribution} id="calculadora-aportacion">
    <div className={s.contributionIntro}><span className={s.miniLabel}>UNA CIFRA CONOCIDA. DISTINTAS FORMAS DE REPARTIRLA.</span><h3>¿Cuánto pagaría cada parte?</h3><p>Introduce una prima que ya conozcas. Prueba qué ocurre si la empresa paga todo, una parte o nada.</p><p className={s.contributionScope}>Solo repartimos un importe. No calculamos el precio de un seguro ni efectos fiscales.</p></div>
    <div className={s.contributionBody}>
      <div className={s.contributionInputs}>
        <div><label htmlFor={`${id}-premium`}>Prima mensual por persona (€)</label><input id={`${id}-premium`} type="number" inputMode="decimal" min="0.01" max="100000" step="0.01" value={premium} onChange={e => setPremium(e.target.value)} onBlur={() => record()} placeholder="Introduce tu cifra" aria-invalid={premium !== '' && !validPremium} aria-describedby={`${id}-note`} /></div>
        <div><label htmlFor={`${id}-people`}>Personas incluidas</label><input id={`${id}-people`} type="number" inputMode="numeric" min="1" max="10000" step="1" value={people} onChange={e => setPeople(e.target.value)} onBlur={() => record()} aria-invalid={!validPeople} /></div>
      </div>
      {(premium !== '' && !validPremium) || !validPeople ? <p className={s.calculatorError} role="status">Usa una prima mayor que 0 y de hasta 100.000 €, con un máximo de dos decimales, y entre 1 y 10.000 personas enteras.</p> : null}
      <div className={s.shareHeader}><label htmlFor={`${id}-share`}>Aporta la empresa</label><output htmlFor={`${id}-share`}>{share} %</output></div>
      <input className={s.shareRange} id={`${id}-share`} type="range" min="0" max="100" step="1" value={share} onChange={e => onShareChange(Number(e.target.value))} onPointerUp={() => record()} onKeyUp={() => record()} />
      <div className={s.sharePresets} aria-label="Repartos de aportación">{[0, 25, 50, 75, 100].map(percent => <button type="button" key={percent} aria-pressed={share === percent} onClick={() => { onShareChange(percent); record(percent); }}>{percent} %</button>)}</div>
      <div className={s.contributionResult} aria-live="polite" aria-atomic="true"><p className={s.miniLabel}>POR PERSONA / MES</p><div className={s.splitCost}><div><span>Empresa · {share} %</span><strong data-contribution="employer">{valid ? euro(employer) : '—'}</strong></div><div><span>Empleado · {100 - share} %</span><strong data-contribution="employee">{valid ? euro(employee) : '—'}</strong></div></div><div className={s.costBar} aria-hidden="true"><span style={{ width: `${share}%` }} /></div>{valid ? <div className={s.collectiveCost}><p><strong>Empresa · {count} {count === 1 ? 'persona' : 'personas'}</strong><span>{euro(employer * count)} / mes · {euro(employer * count * 12)} / año</span></p><p><strong>Empleados · total</strong><span>{euro(employee * count)} / mes · {euro(employee * count * 12)} / año</span></p></div> : <p className={s.calculatorEmpty}>Introduce una prima conocida para ver el reparto.</p>}</div>
      <p id={`${id}-note`} className={s.calculatorDisclaimer}>Cálculo orientativo a partir de tu cifra, con redondeo por persona al céntimo. La proyección anual supone 12 mensualidades iguales y el mismo número de personas. La prima y las condiciones reales dependen de la propuesta y la modalidad; la forma de aportación se confirma con la empresa y su asesoría.</p>
      <a href="#propuesta" className={s.arrowLink} data-empresas-event="b2b_cta_clicked" data-location="contribution-calculator">Hablar de mi empresa <ArrowRight size={16} aria-hidden="true" /></a>
    </div>
  </div>;
}
