import Image from 'next/image';
import h from './hybrid.module.css';

const moments = [
  { id: 'alternativas', art: 'alternatives', label: 'Vuestro punto de partida' },
  { id: 'ordenar', art: 'analysis', label: 'Las diferencias' },
  { id: 'decidir', art: 'clarity', label: 'Lo que hay que decidir' },
] as const;

/** Native controls keep this reading experience usable without JavaScript. */
export function HybridStudy() {
  return <div>
    <fieldset className={h.studyFieldset}>
      <legend className={h.srOnly}>Los tres momentos del estudio de salud VPI</legend>
      {moments.map((moment, i) => <input key={moment.id} className={h.studyRadio} type="radio" name="vpi-study-story" id={`study-${moment.id}`} value={moment.id} data-study-art={moment.art} defaultChecked={i === 1} data-health-cta={`study-${moment.id}`} />)}
      <div className={h.studyTabs}>{moments.map((moment, i) => <label key={moment.id} htmlFor={`study-${moment.id}`}><span>0{i + 1}</span><strong>{moment.label}</strong></label>)}</div>
      <div className={h.studyCanvas} data-study-canvas>
        <figure className={h.studyPhoto}>
          <Image src="/images/business-health-hybrid/reading-together.webp" alt="Profesionales revisando documentos en una escena representativa de trabajo; fotografía de biblioteca" width={1800} height={1200} sizes="(max-width: 767px) 100vw, (max-width: 1024px) 60vw, 760px" />
          <figcaption>Una lectura compartida · Escena representativa.</figcaption>
        </figure>
        <div className={h.studyPanels}>
          <div className={h.studyPanel} data-study-layer="alternatives">
            <span className={h.paperEyebrow}>01 / VUESTRA SITUACIÓN</span>
            <h3>Personas.<br />Necesidades.<br /><em>Prioridades.</em></h3>
            <p>Quiénes sois, dónde estáis y qué queréis cubrir. Si ya tenéis seguro, también qué os gustaría conservar o cambiar.</p>
            <ul><li>Personas, edades y provincias.</li><li>Centros y uso previsto.</li><li>Presupuesto y forma de aportación.</li></ul>
            <span className={h.studySignature}>Empezamos por vosotros.</span>
          </div>
          <div className={h.studyPanel} data-study-layer="analysis">
            <div className={h.paperTop}><span>VPI / NOTAS DE ESTUDIO</span><span>Ejemplo conceptual</span></div>
            <h3>Lo importante,<br /><em>sobre la mesa.</em></h3>
            <dl className={h.readingRows}>
              <div><dt>Cobertura</dt><dd>Qué incluye.<em>Y qué queda fuera.</em></dd></div>
              <div><dt>Coste</dt><dd>La prima.<em>También los copagos.</em></dd></div>
              <div><dt>Condiciones</dt><dd>Lo que conviene leer.<em>Antes de decidir.</em></dd></div>
            </dl>
            <span className={h.studySignature}>Explicado contigo.</span>
          </div>
          <div className={h.studyPanel} data-study-layer="clarity">
            <span className={h.paperEyebrow}>03 / PARA DECIDIR CON CONTEXTO</span>
            <h3>Qué encaja.<br />Qué supone.<br /><em>Qué confirmar.</em></h3>
            <p>Qué encaja con vuestras prioridades y qué conviene confirmar antes de contratar. VPI lo explica; la decisión es vuestra.</p>
            <p>La aseguradora confirma la aceptación y las condiciones. VPI te ayuda a entender el siguiente paso.</p>
            <span className={h.studySignature}>La decisión sigue siendo tuya.</span>
          </div>
        </div>
      </div>
    </fieldset>
    <p className={h.studyScope}>Ejemplo conceptual de los criterios de estudio. Las opciones y condiciones definitivas se confirman en la propuesta y en la póliza. <strong>VPI orienta; la aseguradora confirma las condiciones y presta los servicios sanitarios.</strong></p>
    <details className={h.studyDetails}><summary>Ver todo lo que revisamos <span aria-hidden="true">+</span></summary><div className={h.studyCriteria}>
      <div><h3>Uso cotidiano y cobertura</h3><p>Cuadro médico, consultas, pruebas y servicios con el alcance de la modalidad. Partimos de las personas, sus zonas y sus necesidades.</p><p>Hospitalización, si se contrata. Revisar el alcance real.</p></div>
      <div><h3>Coste y copagos</h3><p>Prima, copagos y aportación se miran juntos. «Sin copago» no significa que todos los servicios estén incluidos.</p><p>Copagos por determinados usos. Aportación de empresa y equipo. Importes por confirmar.</p></div>
      <div><h3>Condiciones y puesta en marcha</h3><p>Carencias, límites, exclusiones, aceptación y fecha de efecto. La aseguradora confirma la aceptación y las condiciones; VPI ayuda a entender y preparar el siguiente paso.</p></div>
    </div><div className={h.detailedRoles}><p><strong>La aseguradora</strong> presta los servicios sanitarios y decide sobre cobertura y autorizaciones.</p><p><strong>VPI</strong> orienta la elección y ayuda con documentación, implantación y siguientes pasos. La aseguradora confirma aceptación y fecha de efecto.</p></div></details>
  </div>;
}
