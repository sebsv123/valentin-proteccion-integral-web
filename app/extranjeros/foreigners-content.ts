export type ForeignersLocale = 'es' | 'en';

export const foreignersContent = {
  es: {
    reviewItems: ['Modalidad sin copagos cuando el trámite lo exige.', 'Certificado o documentación comercial disponible.', 'Cobertura sanitaria privada y ámbito territorial.', 'Plazos de contratación compatibles con la cita.'],
    faq: [
      { q: '¿La póliza sirve para los trámites de estudios o residencia en España?', a: 'Sí. La modalidad está diseñada para los trámites habituales de estudios, visado y residencia en España, con cobertura médica completa, sin copagos y sin periodos de carencia. También emitimos la documentación necesaria para incorporar al expediente.' },
      { q: '¿Puedo contratarla solo con mi pasaporte?', a: 'Sí. Podemos tramitar la póliza con el pasaporte, aunque todavía no dispongas de NIE o TIE.' },
      { q: '¿Qué documentación recibiré para presentar en mi trámite?', a: 'Una vez emitida la póliza, recibirás el certificado del seguro y la documentación correspondiente para que puedas incorporarla a tu expediente.' },
      { q: '¿La póliza tiene copagos o periodos de carencia?', a: 'No. La modalidad que utilizamos para estos trámites no tiene copagos ni periodos de carencia.' },
      { q: '¿Puedo contratar el seguro antes de viajar a España?', a: 'Sí. La contratación puede realizarse antes del viaje, de manera que puedas disponer de la póliza y de la documentación necesaria para avanzar con el trámite.' },
      { q: '¿Me ayudáis a elegir la opción adecuada para mi caso?', a: 'Sí. Revisamos contigo si se trata de estudios, residencia, renovación o llegada familiar y te explicamos la opción aseguradora que puede encajar con tu situación.' },
    ],
  },
  en: {
    reviewItems: ['A no-co-payment plan when the process requires it.', 'Certificate or commercial documentation available.', 'Private healthcare cover and territorial scope.', 'Timing compatible with your appointment.'],
    process: [
      { title: 'Tell us about the process', copy: 'Tell us whether this is for studies, residence, renewal, family or a professional referral.' },
      { title: 'We review the requirements', copy: 'We organise what to check before arranging cover and avoid asking for sensitive documents at the first contact.' },
      { title: 'You receive clear guidance', copy: 'We explain the insurance option and next steps in direct language, with follow-up.' },
    ],
    professionalSteps: [
      { number: '01', title: 'You share the case', copy: 'We only need the minimum details and permission to make contact.' },
      { number: '02', title: 'We support the client', copy: 'We explain the insurance option and the documentation needed.' },
      { number: '03', title: 'We keep you informed', copy: 'You can follow progress without taking on the insurance work.' },
    ],
    professionalBenefits: [
      { title: 'You keep the client relationship', copy: 'We follow the case without interfering with your professional support.' },
      { title: 'We manage the insurance side', copy: 'We guide, arrange cover and answer insurance-related questions.' },
    ],
    faq: [
      { q: 'Can the policy support study or residence applications in Spain?', a: 'Yes. This type of policy is designed for the usual study, visa and residence processes in Spain, with comprehensive medical cover and the documentation needed for the application.' },
      { q: 'Can I arrange it with only my passport?', a: 'Yes. We can arrange the policy using your passport even if you do not yet have an NIE or TIE.' },
      { q: 'What documentation will I receive?', a: 'Once the policy is issued, you receive the insurance certificate and the relevant documentation for your application.' },
      { q: 'Does the policy have co-payments or waiting periods?', a: 'No. The option we use for these processes has no co-payments or waiting periods.' },
      { q: 'Can I arrange the insurance before travelling to Spain?', a: 'Yes. You can arrange it before travelling so that you have the policy and documents ready for the process.' },
      { q: 'Can you help me choose the right option?', a: 'Yes. We review whether your case involves studies, residence, renewal or family arrival and explain the option that may fit.' },
    ],
  },
} as const;
