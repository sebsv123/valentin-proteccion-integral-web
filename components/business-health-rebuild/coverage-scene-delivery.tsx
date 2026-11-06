import { SceneArtwork } from './artwork';
import { healthArtwork } from './art-assets';
import { plans } from './content';
import m from './coverage-scene-delivery.module.css';

type Mode = 'ambulatoria' | 'completa' | 'reembolso';

export function CoverageScene({ active }: { active: Mode }) {
  return <div className={m.coverageScene} data-current-scene={active}>
    {plans.map(p=><div className={m.careFrame} key={p.id} data-active={p.id===active} aria-hidden={p.id!==active} data-coverage-scene={p.id}><SceneArtwork asset={healthArtwork.coverage[p.id]} decorative={p.id!==active} fill sizes="(max-width: 800px) 100vw, 760px" /></div>)}
    <span className={m.sceneScope}>Escena conceptual · asistencia sanitaria de la aseguradora y su red</span>
  </div>;
}
