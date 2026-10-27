import Image from 'next/image';
import b from './body.module.css';
import a from './study-art.module.css';

const moments = [
  { id: 'alternativas', art: 'alternatives', label: 'Vuestra situación' },
  { id: 'ordenar', art: 'analysis', label: 'Las diferencias' },
  { id: 'decidir', art: 'clarity', label: 'Para decidir' },
] as const;

/** Existing illustrations support the reading; they are not medical services or offers by VPI. */
export function BodyStudy() {
  return <>
    <fieldset className={`${b.studyCore} ${a.illustrated}`}>
      <legend className={b.srOnly}>Los tres momentos del estudio de salud VPI</legend>
      {moments.map((moment, i) => <input key={moment.id} className={b.studyRadio} type="radio" name="vpi-study-story" id={`study-${moment.id}`} value={moment.id} data-study-art={moment.art} defaultChecked={i === 1} data-health-cta={`study-${moment.id}`} />)}
      <div className={b.studyTabs}>{moments.map((moment, i) => <label key={moment.id} htmlFor={`study-${moment.id}`}><span>0{i + 1}</span><strong>{moment.label}</strong><span className={b.tabArrow} aria-hidden="true">→</span></label>)}</div>
      <div className={`${b.studyPanels} ${a.artPanels}`} data-study-canvas>
        <div className={`${b.studyPanel} ${a.panel}`} data-study-layer="alternatives">
          <div className={a.contextLayout}>
            <figure className={a.sceneFrame}><Image src="/brand/valentin/salud-v5/study-alternatives.webp" alt="Valentín reflexiona entre varias alternativas representadas en documentos ilustrativos" width={1448} height={1086} sizes="(max-width: 767px) 100vw, (max-width: 1100px) 45vw, 560px" /><figcaption>Una situación distinta. Un punto de partida propio.</figcaption></figure>
            <div className={a.contextText}><p className={b.panelLabel}>01 / EL PUNTO DE PARTIDA</p><h3>Primero,<br />vuestro equipo.</h3><dl className={b.contextList}><div><dt>Quiénes sois</dt><dd>Personas, edades y provincias.</dd></div><div><dt>Qué necesitáis</dt><dd>Centros, uso previsto y cobertura.</dd></div><div><dt>Qué queréis plantear</dt><dd>Presupuesto, aportación y lo que ya tenéis.</dd></div></dl></div>
          </div>
          <p className={b.panelFoot}>Si sois pocos, estáis creciendo o ya tenéis seguro, el punto de partida cambia.</p>
        </div>
        <div className={`${b.studyPanel} ${a.panel}`} data-study-layer="analysis">
          <div className={a.analysisLayout}>
            <fieldset className={a.careExamples}>
              <legend className={b.srOnly}>Dos contextos de uso para comprender por qué importa revisar la cobertura</legend>
              <input className={b.studyRadio} type="radio" name="vpi-study-medical-context" id="study-care-consulta" value="consulta" defaultChecked aria-controls="study-example-consulta" />
              <input className={b.studyRadio} type="radio" name="vpi-study-medical-context" id="study-care-hospital" value="hospital" aria-controls="study-example-hospital" />
              <div className={a.careScenes}>
                <figure className={`${a.sceneFrame} ${a.dailyScene}`} id="study-example-consulta"><Image src="/brand/valentin/salud-v5/coverage-ambulatoria.webp" alt="Escena conceptual de Valentín conversando con una médica en consulta" width={1448} height={1086} sizes="(max-width: 767px) 100vw, (max-width: 1100px) 43vw, 540px" /><figcaption>Atención cotidiana</figcaption></figure>
                <figure className={`${a.sceneFrame} ${a.hospitalScene}`} id="study-example-hospital"><Image src="/brand/valentin/salud-v5/coverage-completa.webp" alt="Escena conceptual de Valentín junto a una cama en una habitación hospitalaria" width={1448} height={1086} sizes="(max-width: 767px) 100vw, (max-width: 1100px) 43vw, 540px" /><figcaption>Atención hospitalaria</figcaption></figure>
              </div>
              <div className={a.careChoices}><label htmlFor="study-care-consulta">Ver consulta <span aria-hidden="true">↗</span></label><label htmlFor="study-care-hospital">Ver hospital <span aria-hidden="true">↗</span></label></div>
              <p className={a.careScope}>Servicios de la aseguradora, según póliza. Ilustración conceptual.</p>
            </fieldset>
            <div className={a.criteriaText}><p className={b.panelLabel}>02 / COMPARAR CON CONTEXTO</p><h3>El precio cuenta.<br /><span>Esto también.</span></h3><p className={a.criteriaIntro}>Revisamos las opciones que podemos distribuir.</p>
              <div className={a.criteria}>
                <details className={a.criterion} name="vpi-study-criterion" open><summary><span><strong>Cobertura</strong><small>Qué incluye y qué queda fuera.</small></span><span className={a.plus} aria-hidden="true" /></summary><div className={a.criterionBody}><p>Servicios, cuadro médico y alcance de la modalidad. <span className={a.dailyScope}>En el día a día, revisa qué consultas y pruebas incluye la póliza.</span><span className={a.hospitalScope}>Para un ingreso, revisa si incluye hospitalización y con qué condiciones.</span></p></div></details>
                <details className={a.criterion} name="vpi-study-criterion"><summary><span><strong>Coste</strong><small>Qué pagas y cuándo.</small></span><span className={a.plus} aria-hidden="true" /></summary><div className={a.criterionBody}><p>Prima, copagos y forma de aportación. Se estudian juntos para entender qué coste asume cada parte.</p></div></details>
                <details className={a.criterion} name="vpi-study-criterion"><summary><span><strong>Condiciones</strong><small>Qué conviene confirmar.</small></span><span className={a.plus} aria-hidden="true" /></summary><div className={a.criterionBody}><p>Carencias, límites, exclusiones y aceptación. La aseguradora confirma las condiciones y la fecha de efecto.</p></div></details>
              </div>
            </div>
          </div>
          <p className={b.panelFoot}>Ejemplo conceptual de criterios de comparación. Sin primas ni ofertas ficticias.</p>
        </div>
        <div className={`${b.studyPanel} ${a.panel}`} data-study-layer="clarity">
          <div className={a.conclusionLayout}>
            <figure className={a.sceneFrame}><Image src="/brand/valentin/salud-v5/study-clarity.webp" alt="Valentín presenta una lista ilustrativa de aspectos revisados, sin información contractual" width={1448} height={1086} sizes="(max-width: 767px) 100vw, (max-width: 1100px) 45vw, 560px" /><figcaption>La información, ordenada para decidir.</figcaption></figure>
            <div><div className={`${b.decisionIntro} ${a.decisionText}`}><p className={b.panelLabel}>03 / UNA DECISIÓN INFORMADA</p><h3>Antes de elegir,<br /><span>que quede claro.</span></h3><p>VPI explica las diferencias. Vosotros decidís qué merece la pena contratar.</p></div>
              <ol className={`${b.decisionList} ${a.decisionPoints}`}><li><span aria-hidden="true">✓</span><div><h4>Qué queda cubierto.</h4><p>El alcance que se confirma en la propuesta y la póliza.</p></div></li><li><span aria-hidden="true">✓</span><div><h4>Qué coste asumís.</h4><p>Prima, copagos y reparto de aportaciones.</p></div></li><li><span aria-hidden="true">✓</span><div><h4>Qué falta por confirmar.</h4><p>Aceptación, condiciones y fecha de efecto de la aseguradora.</p></div></li></ol>
            </div>
          </div>
          <p className={b.panelFoot}>La decisión es vuestra. No hay una recomendación automática.</p>
        </div>
      </div>
    </fieldset>
    <p className={b.studyScope}>Representación conceptual del asesoramiento. VPI orienta; la aseguradora confirma las condiciones y presta los servicios sanitarios.</p>
    <details className={b.studyDetails}><summary>Todo lo que revisamos <span aria-hidden="true">+</span></summary><div className={b.studyCriteria}>
      <div><h3>Uso cotidiano y cobertura</h3><p>Cuadro médico, consultas, pruebas y servicios con el alcance de la modalidad. Partimos de las personas, sus zonas y sus necesidades.</p><p>Hospitalización, si se contrata. Revisar el alcance real.</p></div>
      <div><h3>Coste y copagos</h3><p>Prima, copagos y aportación se miran juntos. «Sin copago» no significa que todos los servicios estén incluidos.</p><p>Copagos por determinados usos. Aportación de empresa y equipo. Importes por confirmar.</p></div>
      <div><h3>Condiciones y puesta en marcha</h3><p>Carencias, límites, exclusiones, aceptación y fecha de efecto. La aseguradora confirma la aceptación y las condiciones; VPI ayuda a entender y preparar el siguiente paso.</p></div>
    </div><div className={b.detailedRoles}><p><strong>La aseguradora</strong> presta los servicios sanitarios y decide sobre cobertura y autorizaciones.</p><p><strong>VPI</strong> orienta la elección y ayuda con documentación, implantación y siguientes pasos. La aseguradora confirma aceptación y fecha de efecto.</p></div></details>
  </>;
}
