import { SceneArtwork } from './artwork';
import { healthArtwork, studyArtworkForMoment } from './art-assets';
import { plans } from './content';
import m from './scenes.module.css';

type Mode = 'ambulatoria' | 'completa' | 'reembolso';


export function HeroScene() {
  return <div className={m.heroScene} data-hero-scene>
    <SceneArtwork asset={healthArtwork.hero} fill priority sizes="100vw" />
  </div>;
}

export function CoverageScene({ active }: { active: Mode }) {
  return <div className={m.coverageScene} data-current-scene={active}>
    {plans.map(p=><div className={m.careFrame} key={p.id} data-active={p.id===active} aria-hidden={p.id!==active} data-coverage-scene={p.id}><SceneArtwork asset={healthArtwork.coverage[p.id]} decorative={p.id!==active} fill sizes="(max-width: 800px) 100vw, 760px" /></div>)}
    <span className={m.sceneScope}>Escena conceptual · asistencia sanitaria de la aseguradora y su red</span>
  </div>;
}

const story = [
  { id: 'alternativas', title: 'Hay alternativas.', text: 'No todas incluyen lo mismo. Tampoco se utilizan ni se pagan igual.' },
  { id: 'ordenar', title: 'Ponemos orden.', text: 'Separamos cobertura, coste y condiciones. Destacamos las diferencias que importan.' },
  { id: 'decidir', title: 'Decides con contexto.', text: 'Sabes qué podrías utilizar, qué pagarías y qué necesitas confirmar.' },
] as const;

/** Native radios + CSS: the sequence remains operable with JavaScript disabled. */
export function StudyStory() {
  return <figure className={m.studyFigure}>
    <fieldset className={m.storyTheater}>
      <legend className={m.srOnly}>De la complejidad a una decisión entendida</legend>
      {story.map((step,i)=><input className={m.storyInput} type="radio" name="vpi-study-story" id={`study-${step.id}`} value={step.id} data-study-art={studyArtworkForMoment[step.id]} key={step.id} defaultChecked={i===2} data-health-cta={`study-${step.id}`} />)}
      <div className={m.storyLayout}>
        <div className={m.storyControls}>{story.map((step,i)=><label className={m.storyChoice} key={step.id} htmlFor={`study-${step.id}`}><span className={m.storyNumber}>0{i+1}</span><span><strong>{step.title}</strong><span className={m.storyCopy}>{step.text}</span></span></label>)}</div>
        <div className={m.studyCanvas} data-study-canvas>
          <StudyStageArtwork />
          <span className={m.canvasStamp}>ESTUDIO VPI · ESCENAS CONCEPTUALES</span>
        </div>
      </div>
    </fieldset>
    <figcaption>Representación conceptual del estudio VPI. No es una oferta, una cotización ni una plataforma digital.</figcaption>
    <details className={m.studyDepth}><summary>Qué revisamos contigo <span aria-hidden="true">+</span></summary><div className={m.documentGrid}>          <div className={m.documentArticle}><span className={m.paperEyebrow}>ALTERNATIVA / COBERTURA</span><h3>Lo que podrías<br />{' '}utilizar.</h3><p>Consultas y pruebas.</p><p>Hospitalización, si se contrata.</p><p>Cuadro médico y centros.</p><span className={m.paperMark}>Revisar el alcance real.</span></div>
          <div className={m.documentArticle}><span className={m.paperEyebrow}>ALTERNATIVA / COSTE</span><h3>Al lado<br />{' '}de la prima.</h3><p>Copagos por determinados usos.</p><p>Aportación de empresa y equipo.</p><p>Importes por confirmar.</p><span className={m.paperMark}>Poner las cifras en contexto.</span></div>
          <div className={m.documentArticle}><span className={m.paperEyebrow}>ALTERNATIVA / CONDICIONES</span><h3>La parte que<br />{' '}hay que leer.</h3><p>Carencias y límites.</p><p>Exclusiones y aceptación.</p><p>Documentación y fecha de efecto.</p><span className={m.paperMark}>Confirmar antes de decidir.</span></div>
          <div className={m.documentArticle}><span className={m.paperEyebrow}>ESTUDIO VPI / SÍNTESIS ILUSTRATIVA</span><h3>Ahora sabes<br />{' '}qué valorar.</h3><dl><div><dt>Qué encaja</dt><dd>Personas, zonas y uso esperado.</dd></div><div><dt>Qué supone</dt><dd>Cobertura, prima, copagos y aportación.</dd></div><div><dt>Qué confirmar</dt><dd>Límites, aceptación y condiciones.</dd></div></dl><p className={m.decisionUnderline}>La decisión, contigo.</p></div>
</div><div><h3>Uso cotidiano y cobertura</h3><p>Cuadro médico, consultas, pruebas y servicios con el alcance de la modalidad. Partimos de las personas, sus zonas y sus necesidades.</p><h3>Coste y copagos</h3><p>Prima, copagos y aportación se miran juntos. «Sin copago» no significa que todos los servicios estén incluidos.</p><h3>Condiciones y puesta en marcha</h3><p>Carencias, límites, exclusiones, aceptación y fecha de efecto. La aseguradora confirma la aceptación y las condiciones; VPI ayuda a entender y preparar el siguiente paso.</p></div></details>
  </figure>;
}

/** Native radio selection changes the scene; no autoplay or fictitious platform. */
function StudyStageArtwork() {
  return <>{Object.entries(healthArtwork.study).map(([key, asset]) => <div className={m.studyArtLayer} data-study-layer={key} key={key}><SceneArtwork asset={asset} fill decorative sizes="(max-width: 800px) 100vw, 900px" /></div>)}</>;
}

export function ContributionArtwork() {
  return <figure className={m.contributionGuide}><SceneArtwork asset={healthArtwork.contribution} sizes="(max-width: 800px) 160px, 300px" /><figcaption>Ilustración conceptual. El reparto lo eliges en el simulador.</figcaption></figure>;
}
