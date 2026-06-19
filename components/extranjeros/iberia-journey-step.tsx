import { BadgeCheck, FileCheck2, FileText, ShieldCheck } from 'lucide-react';
import type { IberiaJourneyStepData } from './iberia-journey-data';
import styles from './iberia-journey-section.module.css';

type IberiaJourneyStepProps = {
  step: IberiaJourneyStepData;
  active: boolean;
  index: number;
  onHighlight: (index: number | null) => void;
  onActivate: (index: number) => void;
};

function StepIcon({ kind }: { kind: IberiaJourneyStepData['icon'] }) {
  const className = 'h-4 w-4';

  switch (kind) {
    case 'passport':
      return <FileText className={className} aria-hidden="true" />;
    case 'checklist':
      return <BadgeCheck className={className} aria-hidden="true" />;
    case 'shield':
      return <ShieldCheck className={className} aria-hidden="true" />;
    case 'certificate':
      return <FileCheck2 className={className} aria-hidden="true" />;
    default:
      return <FileText className={className} aria-hidden="true" />;
  }
}

export function IberiaJourneyStep({ step, active, index, onHighlight, onActivate }: IberiaJourneyStepProps) {
  return (
    <button
      type="button"
      className={`${styles.stepCard} ${active ? styles.stepCardActive : ''}`}
      data-step-index={index}
      aria-current={active ? 'step' : undefined}
      onPointerEnter={() => onHighlight(index)}
      onPointerLeave={() => onHighlight(null)}
      onFocus={() => onHighlight(index)}
      onBlur={() => onHighlight(null)}
      onClick={() => onActivate(index)}
    >
      <span className={styles.stepMeta}>
        <span className={styles.stepNumber}>{step.number}</span>
        <span className={styles.stepIcon} aria-hidden="true">
          <StepIcon kind={step.icon} />
        </span>
      </span>
      <div className={styles.stepCopy}>
        <div className={styles.stepHeadingRow}>
          <h3>{step.title}</h3>
        </div>
        <p>{step.copy}</p>
      </div>
    </button>
  );
}
