import Image from 'next/image';
import a from './brand-art.module.css';

type Pose = 'presenta' | 'lee' | 'orienta';
type Coverage = 'ambulatoria' | 'completa' | 'reembolso';

export function Valentin({ pose, className = '', priority = false }: { pose: Pose; className?: string; priority?: boolean }) {
  const descriptions = { presenta: 'Valentín presenta el estudio de salud VPI', lee: 'Valentín revisa un documento para orientar la lectura', orienta: 'Valentín señala las diferencias entre modalidades' };
  return <Image className={className} src={`/brand/valentin/salud-v3/valentin-${pose}.webp`} alt={descriptions[pose]} width={1312} height={1199} sizes={pose === 'presenta' ? '(max-width: 500px) 260px, 390px' : pose === 'lee' ? '(max-width: 500px) 120px, 200px' : '100px'} priority={priority} />;
}

/** Original wing and forked-tail strokes, independent of the global logo. */
export function BrandFlight({ className = '' }: { className?: string }) {
  return <svg className={className} viewBox="0 0 400 300" aria-hidden="true" focusable="false" fill="none"><path d="M28 232C77 83 216 39 361 58M42 249C131 124 220 119 368 128" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /><path d="m313 214 48 30-60 17" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

export function HeroBrandArtwork() {
  return <div className={a.heroStage}>
    <BrandFlight className={a.heroFlight} />
    <div className={a.heroPaper}>
      <div className={a.paperLabel}><span>VPI</span><span>ESTUDIO DE SALUD</span></div>
      <p className={a.heroPaperTitle}>Una elección<br />{' '}con contexto.</p>
      <div className={a.heroPaperLines}>{['Tu equipo', 'La cobertura', 'La aportación', 'Las condiciones'].map((t,i)=><p key={t}><span>0{i+1}</span>{t}</p>)}</div>
      <p className={a.heroPaperFoot}>Entender antes de decidir.</p>
    </div>
    <span className={a.heroGround} aria-hidden="true" />
    <Valentin pose="presenta" className={a.heroValentin} priority />
    <span className={a.stageCaption}>ILUSTRACIÓN EDITORIAL VPI</span>
  </div>;
}

export function CoverageGuide() {
  return <div className={a.coverageGuide}><Valentin pose="orienta" /><p>Empieza por el alcance. Después revisamos juntos los detalles de cada póliza.</p></div>;
}

/** Each composition shares a document motif; its geometry explains the extra scope. */
export function CoverageArt({ mode }: { mode: Coverage }) {
  return <span className={a.coverageArt} data-coverage-art={mode}>
    <svg viewBox="0 0 300 174" fill="none" aria-hidden="true" focusable="false">
      <path d="M23 140c58-89 162-105 251-76M35 151c65-58 155-58 234-24" stroke="#8daabf" strokeWidth="1.5" />
      {mode === 'ambulatoria' ? <>
        <rect x="65" y="24" width="164" height="130" rx="10" fill="#d0e2ed" transform="rotate(-6 65 24)" />
        <rect x="73" y="19" width="155" height="130" rx="10" fill="#fffdf7" />
        <path d="M73 56h155" stroke="#c4d5df" /><path d="M107 16v13M194 16v13" stroke="#12344a" strokeWidth="5" strokeLinecap="round" />
        <circle cx="100" cy="80" r="7" fill="#1d57b6" /><circle cx="100" cy="105" r="7" fill="#c78754" /><circle cx="100" cy="130" r="7" fill="#1d57b6" />
        <path d="M120 80h78M120 105h58M120 130h69" stroke="#607e91" strokeWidth="3" strokeLinecap="round" />
      </> : mode === 'completa' ? <>
        <rect x="43" y="43" width="111" height="113" rx="9" fill="#d0e2ed" transform="rotate(-6 43 43)" />
        <rect x="50" y="40" width="104" height="112" rx="8" fill="#fffdf7" /><path d="M67 64h68M67 83h48M67 102h58" stroke="#8da7b9" strokeWidth="3" strokeLinecap="round" />
        <rect x="126" y="17" width="112" height="135" rx="10" fill="#fffdf7" stroke="#a7bfce" strokeWidth="1.5" />
        <path d="M146 45h72M146 65h50" stroke="#6a879a" strokeWidth="3" strokeLinecap="round" />
        <path d="M145 128V99h73v29M145 113h73M150 99v-9h21v9M192 99v-9h21v9" stroke="#24558f" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M245 50v24m-12-12h24" stroke="#c78754" strokeWidth="3" strokeLinecap="round" />
      </> : <>
        <rect x="87" y="28" width="123" height="126" rx="10" fill="#fffdf7" stroke="#b0c6d3" strokeWidth="1.5" />
        <path d="M107 52h63M107 70h83M107 88h50" stroke="#7895a8" strokeWidth="3" strokeLinecap="round" />
        <path d="M173 122c36-1 60-21 63-45M103 114C67 116 44 95 42 69" stroke="#24558f" strokeWidth="2" strokeLinecap="round" strokeDasharray="5 5" />
        <circle cx="236" cy="52" r="22" fill="#d8e6ee" stroke="#24558f" strokeWidth="1.5" /><circle cx="42" cy="47" r="17" fill="#efd3bb" stroke="#a46d40" strokeWidth="1.5" />
        <circle cx="164" cy="119" r="23" fill="#f6d4b7" /><path d="M173 111a12 12 0 1 0 1 16m-18-12h15m-16 7h14" stroke="#8b552c" strokeWidth="2" strokeLinecap="round" />
        <path d="m231 98 5-15 11 11" stroke="#24558f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </>}
    </svg>
  </span>;
}

const reading = [
  { title: 'Qué podría utilizar el equipo.', text: <>Cuadro médico, consultas y pruebas.{' '}<mark>Con el alcance de la modalidad.</mark></>, noteTitle: 'Empezar por el uso', note: 'Zonas, personas y necesidades que merece la pena revisar.' },
  { title: 'Qué hay al lado del precio.', text: <><mark>Prima + copagos + aportación.</mark>{' '}El coste se entiende poniendo las piezas juntas.</>, noteTitle: 'Un matiz importante', note: '«Sin copago» no significa que todos los servicios estén incluidos.' },
  { title: 'Qué confirmar antes de empezar.', text: <>Carencias, límites, exclusiones y aceptación.{' '}<mark>También la fecha de efecto.</mark></>, noteTitle: 'Quién confirma qué', note: 'La aseguradora confirma la aceptación y las condiciones de la póliza.' },
];

export function StudyDossier() {
  return <figure className={a.dossier}>
    <div className={a.dossierMast}><span>VPI / UNA LECTURA COMPARADA</span><span>EJEMPLO CONCEPTUAL</span></div>
    <div className={a.dossierBody}>
      <div className={a.readerColumn}><p className={a.readerTitle}>Leer bien.<br />{' '}Elegir mejor.</p><Valentin pose="lee" /><p>Tu empresa aporta el contexto. Nosotros ponemos las diferencias en palabras comprensibles.</p><BrandFlight className={a.readerFlight} /></div>
      <div className={a.documentCore}>
        <div className={a.docHeading}><p>EL ESTUDIO, EN LO QUE IMPORTA</p><h3>Tu estudio de salud.<br />{' '}Explicado punto por punto.</h3></div>
        <div className={a.annotatedReading}>{reading.map((item,i)=><div className={a.readingRow} key={item.title}><div className={a.readingText}><span className={a.readingIndex}>0{i+1}</span><h4>{item.title}</h4><p>{item.text}</p></div><div role="note" className={a.marginNote}><strong>{item.noteTitle}</strong><p>{item.note}</p></div></div>)}</div>
        <div className={a.studyOutcome}><p>Qué cambia, qué supone y qué debes confirmar.</p></div>
      </div>
    </div>
    <figcaption>Representación conceptual de los criterios de revisión de VPI. No es una oferta, una cotización ni una aplicación.</figcaption>
  </figure>;
}

export function TaxReading({ kind }: { kind: 'empresa' | 'autonomo' }) {
  return <div className={a.taxReading}><span>Prima elegible</span><span aria-hidden="true">→</span><span>Requisitos legales</span><span aria-hidden="true">→</span><strong>{kind === 'empresa' ? 'Posible exención' : 'Posible deducción'}</strong></div>;
}
