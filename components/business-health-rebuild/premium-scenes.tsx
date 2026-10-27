import Image, { getImageProps } from 'next/image';
import p from './premium.module.css';

export function HumanHeroImage() {
  const mobile = getImageProps({ src: '/images/business-health-premium/team-human-mobile.webp', width: 1000, height: 571, alt: '', sizes: '100vw' }).props;
  return <figure className={p.heroImage}>
    <picture><source media="(max-width: 767px)" srcSet={mobile.srcSet} sizes="100vw" width={1000} height={571} /><Image src="/images/business-health-premium/team-human.webp" alt="Escena fotográfica ilustrativa generada con IA de tres profesionales conversando sobre documentos en un estudio de trabajo" width={1942} height={809} sizes="(max-width: 1440px) 94vw, 1240px" loading="eager" fetchPriority="high" /></picture>
    <figcaption><span>Detrás de cada empresa, personas.</span><span>Escena ilustrativa generada con IA.</span></figcaption>
  </figure>;
}

const moments = [
  { id: 'alternativas', art: 'alternatives', label: 'Partimos de vosotros', text: 'Personas, situación y objetivo. Antes de hablar de una póliza.' },
  { id: 'ordenar', art: 'analysis', label: 'Miramos las diferencias', text: 'Cobertura, coste y condiciones, leídos en el mismo contexto.' },
  { id: 'decidir', art: 'clarity', label: 'Lo entiendes antes de elegir', text: 'Qué encaja, qué supone y qué queda por confirmar.' },
] as const;

export function PremiumStudy() {
  return <div className={p.studyExperience}>
    <fieldset className={p.studyFieldset}>
      <legend className={p.screenReader}>Así se prepara el estudio VPI: tres momentos de una decisión informada</legend>
      {moments.map((m,i)=><input className={p.studyRadio} key={m.id} type="radio" name="vpi-study-story" id={`study-${m.id}`} value={m.id} data-study-art={m.art} defaultChecked={i===2} data-health-cta={`study-${m.id}`} />)}
      <div className={p.studyTabs}>{moments.map((m,i)=><label htmlFor={`study-${m.id}`} key={m.id}><span className={p.studyStep}>0{i+1}</span><strong>{m.label}</strong><span className={p.studyTabText}>{m.text}</span></label>)}</div>
      <div className={p.studyStage} data-study-canvas>
        <div className={`${p.studyPanel} ${p.questionsPanel}`} data-study-layer="alternatives">
          <span className={p.sceneIndex}>01 / TU PUNTO DE PARTIDA</span>
          <div className={p.questionMap}><span className={p.questionTop}>Personas y edades</span><span className={p.questionLeft}>Provincias<br />y centros</span><h3>¿Qué tiene sentido<br /><em>para vosotros?</em></h3><span className={p.questionRight}>Uso previsto</span><span className={p.questionBottom}>Presupuesto y aportación</span><svg className={p.mapLines} viewBox="0 0 1000 400" aria-hidden="true"><path d="M500 25V95M140 200H270M730 200H870M500 305V375"/><circle cx="500" cy="200" r="182"/></svg></div>
          <p className={p.sceneFoot}>Si sois dos, si estáis creciendo o si ya tenéis seguro: el contexto cambia la conversación.</p>
        </div>
        <div className={`${p.studyPanel} ${p.analysisPanel}`} data-study-layer="analysis">
          <span className={p.sceneIndex}>02 / UNA LECTURA COMPARADA</span>
          <div className={p.analysisHeading}><h3>El precio importa.<br /><em>Lo que incluye, también.</em></h3><span>VPI<br />Notas de lectura</span></div>
          <div className={p.annotationRows}>
            <div><span>01</span><h4>Qué podrías utilizar</h4><p>Consultas, pruebas, centros y hospitalización, si se contrata.</p><small>REVISAR EL ALCANCE</small></div>
            <div><span>02</span><h4>Qué hay junto a la prima</h4><p>Copagos por determinados usos y aportación de empresa y equipo.</p><small>PONER EL COSTE EN CONTEXTO</small></div>
            <div><span>03</span><h4>Qué hay que confirmar</h4><p>Carencias, límites, exclusiones, aceptación y fecha de efecto.</p><small>LEER ANTES DE DECIDIR</small></div>
          </div>
        </div>
        <div className={`${p.studyPanel} ${p.decisionPanel}`} data-study-layer="clarity">
          <div className={p.decisionSide}><span className={p.sceneIndex}>03 / DECIDIR CON CONTEXTO</span><h3>Entender qué eliges.<br /><em>Saber por qué.</em></h3><p>Una lectura de cobertura, coste y condiciones, explicada contigo antes de decidir.</p><span className={p.decisionSignature}>VPI<span>Una conversación.<br />Una lectura con criterio.</span></span></div>
          <article className={p.studyPrint}><div className={p.printTop}><span>VPI / ESTUDIO DE SALUD</span><span>Lectura ilustrativa</span></div><h4>Tu decisión,<br />punto por punto.</h4><dl><div><dt>Qué encaja</dt><dd>Personas, zonas y uso esperado.</dd></div><div><dt>Qué supone</dt><dd>Cobertura, prima, copagos y aportación.</dd></div><div><dt>Qué confirmar</dt><dd>Límites, aceptación y condiciones.</dd></div></dl><p>Explicado contigo.</p></article>
        </div>
      </div>
    </fieldset>
    <p className={p.studyScope}>Ejemplo conceptual de los criterios de estudio. Las opciones y condiciones definitivas se confirman en la propuesta y en la póliza.</p>
    <details className={p.studyDetails}><summary>Ver todo lo que revisamos <span aria-hidden="true">+</span></summary><div className={p.studyCriteria}>
      <div><h3>Uso cotidiano y cobertura</h3><p>Cuadro médico, consultas, pruebas y servicios con el alcance de la modalidad. Partimos de las personas, sus zonas y sus necesidades.</p><p>Hospitalización, si se contrata. Revisar el alcance real.</p></div>
      <div><h3>Coste y copagos</h3><p>Prima, copagos y aportación se miran juntos. «Sin copago» no significa que todos los servicios estén incluidos.</p><p>Copagos por determinados usos. Aportación de empresa y equipo. Importes por confirmar.</p></div>
      <div><h3>Condiciones y puesta en marcha</h3><p>Carencias, límites, exclusiones, aceptación y fecha de efecto. La aseguradora confirma la aceptación y las condiciones; VPI ayuda a entender y preparar el siguiente paso.</p></div>
    </div></details>
  </div>;
}
