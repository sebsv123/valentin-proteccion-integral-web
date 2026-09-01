export const iberiaJourneySteps = [
  {
    number: '01',
    title: 'Entendemos tu trámite',
    copy: 'Nos cuentas si vienes por estudios, residencia, renovación o llegada familiar, junto con tus fechas previstas.',
    icon: 'passport',
  },
  {
    number: '02',
    title: 'Revisamos lo que necesitas',
    copy: 'Comprobamos la modalidad, la cobertura, los copagos, las carencias y la documentación disponible.',
    icon: 'checklist',
  },
  {
    number: '03',
    title: 'Elegimos contigo',
    copy: 'Te explicamos las opciones con claridad para que puedas decidir con información suficiente.',
    icon: 'shield',
  },
  {
    number: '04',
    title: 'Emitimos y seguimos contigo',
    copy: 'Gestionamos la póliza, te entregamos la documentación y resolvemos las dudas que puedan surgir después.',
    icon: 'certificate',
  },
] as const;

export const iberiaJourneyStepsEn = [
  { number: '01', title: 'We understand your process', copy: 'Tell us whether you are coming for studies, residence, renewal or family arrival, along with your expected dates.', icon: 'passport' },
  { number: '02', title: 'We review what you need', copy: 'We check the plan type, cover, co-payments, waiting periods and available documentation.', icon: 'checklist' },
  { number: '03', title: 'We choose with you', copy: 'We explain the options clearly so you can decide with enough information.', icon: 'shield' },
  { number: '04', title: 'We issue and stay with you', copy: 'We arrange the policy, provide the documentation and answer any questions afterwards.', icon: 'certificate' },
] as const;

export type IberiaJourneyStepData = { number: string; title: string; copy: string; icon: 'passport' | 'checklist' | 'shield' | 'certificate' };
