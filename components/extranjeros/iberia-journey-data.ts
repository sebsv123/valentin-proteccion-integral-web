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

export type IberiaJourneyStepData = (typeof iberiaJourneySteps)[number];
