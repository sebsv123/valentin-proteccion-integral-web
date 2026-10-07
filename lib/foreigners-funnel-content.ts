import type { ForeignersIntakeLocale, ForeignersIntakeSituation } from './foreigners-intake';

export type ForeignersFunnelLocale = ForeignersIntakeLocale;

export type SituationCard = {
  key: ForeignersIntakeSituation;
  title: string;
  description: string;
  image: string;
  primaryLabel: string;
  evidenceLabel: string;
  evidenceHref: string;
};

export type ForeignersFunnelCopy = {
  metaTitle: string;
  metaDescription: string;
  heroEyebrow: string;
  heroTitle: string;
  heroDescription: string;
  primaryCta: string;
  whatsappCta: string;
  heroReassurance: string;
  heroAlt: string;
  trust: string[];
  trustReviews: string;
  selectorEyebrow: string;
  selectorTitle: string;
  selectorDescription: string;
  situations: SituationCard[];
  quickAnswerEyebrow: string;
  quickAnswerTitle: string;
  quickAnswer: string;
  quickAnswerFacts: string[];
  quickAnswerFactTitles: string[];
  quickAnswerLinks: { label: string; href: string }[];
  processEyebrow: string;
  processTitle: string;
  process: { title: string; description: string }[];
  benefitsEyebrow: string;
  benefitsTitle: string;
  benefits: { title: string; description: string }[];
  partnerEyebrow: string;
  partnerTitle: string;
  partnerDescription: string;
  partnerCta: string;
  partnerWhatsappCta: string;
  reviewsEyebrow: string;
  reviewsTitle: string;
  faqEyebrow: string;
  faqTitle: string;
  faqDescription: string;
  faq: { q: string; a: string }[];
  finalEyebrow: string;
  finalTitle: string;
  finalDescription: string;
  finalCta: string;
  finalReassurance: string;
};

const es: ForeignersFunnelCopy = {
  metaTitle: 'Seguro médico para extranjeros en España | Valentín Protección Integral',
  metaDescription: 'Orientación sobre seguro médico en España para estudios, residencia, renovación y familia. Empieza por tu situación y cuéntanos tu caso.',
  heroEyebrow: 'SEGURO MÉDICO · EXTRANJERÍA',
  heroTitle: 'Tu seguro médico para venir a España, con una ruta clara',
  heroDescription: 'Te ayudamos a revisar la opción aseguradora y la documentación relacionada con tu proceso de estudios, residencia u otros trámites en España.',
  primaryCta: 'Obtener mi propuesta',
  whatsappCta: 'Hablar por WhatsApp',
  heroReassurance: 'Te llevará unos 2 minutos · Sin pago · Revisamos personalmente tu caso',
  heroAlt: 'Personas preparando su llegada a España',
  trust: ['+10 años de experiencia', 'Atención humana y seguimiento'],
  trustReviews: 'Clientes satisfechos y reseñas verificadas',
  selectorEyebrow: 'EMPIEZA POR TU SITUACIÓN',
  selectorTitle: '¿Por qué vienes a España?',
  selectorDescription: 'Elige el punto de partida más parecido a tu caso. Te llevaremos al intake en español y, cuando corresponda, a la información detallada.',
  situations: [
    { key: 'studies', title: 'Estudios en España', description: 'Para visado de estudios, formación o estancias académicas.', image: '/images/extranjeros/situations/estudios.png', primaryLabel: 'Empezar', evidenceLabel: 'Ver guía del visado', evidenceHref: '/visados/seguro-medico/estudios' },
    { key: 'residence', title: 'Residencia en España', description: 'Para residencia o larga estancia cuando el trámite requiere seguro privado.', image: '/images/extranjeros/situations/residencia.png', primaryLabel: 'Empezar', evidenceLabel: 'Ver guía de residencia', evidenceHref: '/visados/seguro-medico/residencia-no-lucrativa' },
    { key: 'renewal-family', title: 'Renovación / Familia', description: 'Para renovaciones, modificaciones o llegada de familiares.', image: '/images/extranjeros/situations/renovacion-familia.png', primaryLabel: 'Empezar', evidenceLabel: 'Revisar requisitos', evidenceHref: '/visados/seguro-medico' },
  ],
  quickAnswerEyebrow: 'RESPUESTA RÁPIDA',
  quickAnswerTitle: '¿Puedo empezar antes de viajar a España?',
  quickAnswer: 'En algunos productos es posible iniciar la contratación desde el extranjero. La aseguradora emite la póliza y el certificado; revisamos contigo las fechas y los documentos, pero la autoridad competente decide si cumplen tu trámite.',
  quickAnswerFacts: ['Primero revisamos qué póliza encaja con tu trámite.', 'Comprobamos contigo las fechas y la documentación antes de avanzar.', 'La decisión final del expediente corresponde a la autoridad competente.'],
  quickAnswerFactTitles: ['Póliza adecuada', 'Fechas y documentos', 'Decisión final'],
  quickAnswerLinks: [
    { label: 'Obtener mi propuesta', href: '/start' },
    { label: 'Ver requisitos para visados', href: '/visados/seguro-medico' },
  ],
  processEyebrow: 'CÓMO FUNCIONA',
  processTitle: 'Tres pasos para ordenar tu caso',
  process: [
    { title: 'Cuéntanos tu situación', description: 'Nos explicas si vienes por estudios, residencia, renovación o familia.' },
    { title: 'Revisamos tu caso', description: 'Comprobamos contigo el trámite, las fechas y la opción aseguradora adecuada.' },
    { title: 'Recibes una propuesta clara', description: 'Te explicamos la opción y el siguiente paso antes de contratar.' },
  ],
  benefitsEyebrow: 'POR QUÉ VPI',
  benefitsTitle: 'La parte aseguradora, explicada con claridad',
  benefits: [
    { title: 'Revisión individual', description: 'Revisamos contigo tu situación y las condiciones relevantes, sin un proceso genérico.' },
    { title: 'Acompañamiento humano', description: 'Puedes hablar con nosotros desde el extranjero y resolver las dudas del proceso.' },
    { title: 'Claridad documental', description: 'Te ayudamos a entender qué emite la aseguradora y qué conviene comprobar.' },
    { title: 'Experiencia internacional', description: 'Conocemos las dudas habituales de estudios, residencia y llegada familiar.' },
  ],
  partnerEyebrow: 'CANAL PROFESIONAL',
  partnerTitle: '¿Acompañas a estudiantes o clientes extranjeros?',
  partnerDescription: 'Para abogados, asesores de extranjería, empresas de relocation, academias y asesores educativos. Un canal separado para derivar clientes con su autorización.',
  partnerCta: 'Referir un cliente',
  partnerWhatsappCta: 'Consultar una colaboración',
  reviewsEyebrow: 'PRUEBA SOCIAL',
  reviewsTitle: 'Lo que dicen nuestros clientes',
  faqEyebrow: 'PREGUNTAS ÚTILES',
  faqTitle: 'Antes de empezar',
  faqDescription: 'Información inicial para orientarte. Los detalles finales dependen de la modalidad, la aseguradora y el trámite concreto.',
  faq: [
    { q: '¿Puedo empezar con mi pasaporte si todavía no tengo NIE o TIE?', a: 'En algunas modalidades sí. La contratación puede iniciarse con pasaporte, dependiendo del producto y de los requisitos de la aseguradora. Antes de avanzar, revisamos contigo qué documentación necesitas en tu caso.' },
    { q: '¿Quién emite el certificado del seguro?', a: 'La aseguradora emite la póliza y el certificado correspondiente. VPI te orienta durante el proceso.' },
    { q: '¿El seguro garantiza que acepten mi expediente?', a: 'No. La administración o el consulado decide si la documentación cumple los requisitos aplicables a tu trámite.' },
    { q: '¿Dónde puedo consultar requisitos más concretos?', a: 'En las guías de visado y requisitos consulares de VPI, que deben contrastarse con la oficina competente y su información vigente.' },
  ],
  finalEyebrow: 'SIGUIENTE PASO',
  finalTitle: 'Cuéntanos tu caso',
  finalDescription: 'Déjanos los datos básicos y revisaremos personalmente qué opción encaja con tu trámite.',
  finalCta: 'Obtener mi propuesta',
  finalReassurance: 'Unos 2 minutos · Sin pago · Sin compromiso',
};

const en: ForeignersFunnelCopy = {
  metaTitle: 'Health insurance for foreigners in Spain | Valentín Protección Integral',
  metaDescription: 'Guidance on health insurance in Spain for study, residence, renewal and family processes. Start with your situation and tell us about your case.',
  heroEyebrow: 'HEALTH INSURANCE · IMMIGRATION',
  heroTitle: 'Health insurance for your move to Spain, with a clear route',
  heroDescription: 'We help you review the insurance option and related documentation for your study, residence or other process in Spain.',
  primaryCta: 'Get my personalised quote',
  whatsappCta: 'Talk to us on WhatsApp',
  heroReassurance: 'Takes around 2 minutes · No payment required · Reviewed personally by our team',
  heroAlt: 'People preparing for their move to Spain',
  trust: ['+10 years of experience', 'Human guidance and follow-up'],
  trustReviews: 'Satisfied clients and verified reviews',
  selectorEyebrow: 'START WITH YOUR SITUATION',
  selectorTitle: 'Why are you coming to Spain?',
  selectorDescription: 'Choose the starting point closest to your case. We will take you to the English intake and, where useful, to the detailed guidance.',
  situations: [
    { key: 'studies', title: 'Study in Spain', description: 'For study visas, training or academic stays.', image: '/images/extranjeros/situations/estudios.png', primaryLabel: 'Start', evidenceLabel: 'View the student visa guide', evidenceHref: '/en/visa-health-insurance/student-visa' },
    { key: 'residence', title: 'Residence in Spain', description: 'For residence or long-stay processes where private insurance is required.', image: '/images/extranjeros/situations/residencia.png', primaryLabel: 'Start', evidenceLabel: 'View the residence guide', evidenceHref: '/en/visa-health-insurance/non-lucrative-residence' },
    { key: 'renewal-family', title: 'Renewal / Family', description: 'For renewals, modifications or family arrivals.', image: '/images/extranjeros/situations/renovacion-familia.png', primaryLabel: 'Start', evidenceLabel: 'Review the requirements', evidenceHref: '/en/visa-health-insurance' },
  ],
  quickAnswerEyebrow: 'QUICK ANSWER',
  quickAnswerTitle: 'Can I start before travelling to Spain?',
  quickAnswer: 'Some products can be arranged from abroad. The insurer issues the policy and certificate; we help you review dates and documents, while the competent authority decides whether they meet your process requirements.',
  quickAnswerFacts: ['We first review which policy fits your process.', 'We check the dates and documentation with you before you proceed.', 'The competent authority makes the final decision on the immigration application.'],
  quickAnswerFactTitles: ['Right policy', 'Dates and documents', 'Final decision'],
  quickAnswerLinks: [
    { label: 'Get my personalised quote', href: '/en/start' },
    { label: 'View visa insurance requirements', href: '/en/visa-health-insurance' },
  ],
  processEyebrow: 'HOW IT WORKS',
  processTitle: 'Three steps to organise your case',
  process: [
    { title: 'Tell us about your situation', description: 'Tell us whether this is for studies, residence, renewal or family.' },
    { title: 'We review your case', description: 'We check the process, dates and the insurance option that fits your situation.' },
    { title: 'You receive a clear proposal', description: 'We explain the option and the next step before you arrange cover.' },
  ],
  benefitsEyebrow: 'WHY VPI',
  benefitsTitle: 'The insurance side, explained clearly',
  benefits: [
    { title: 'Individual review', description: 'We review your situation and the relevant conditions with you, not through a generic process.' },
    { title: 'Human guidance', description: 'You can speak to us from abroad and resolve questions about the process.' },
    { title: 'Clear documentation', description: 'We help you understand what the insurer issues and what to check.' },
    { title: 'International experience', description: 'We understand common questions around study, residence and family arrival.' },
  ],
  partnerEyebrow: 'PROFESSIONAL CHANNEL',
  partnerTitle: 'Do you support international students or clients?',
  partnerDescription: 'For immigration advisers, lawyers, relocation companies, academies and education consultants. A separate channel for authorised client referrals.',
  partnerCta: 'Refer a client',
  partnerWhatsappCta: 'Discuss a partnership',
  reviewsEyebrow: 'SOCIAL PROOF',
  reviewsTitle: 'What our clients say',
  faqEyebrow: 'USEFUL QUESTIONS',
  faqTitle: 'Before you start',
  faqDescription: 'Initial guidance to help you orientate yourself. Final details depend on the plan, insurer and specific process.',
  faq: [
    { q: 'Do I need an NIE or TIE to start?', a: 'Some plans may be started with a passport, depending on the product and insurer requirements. We confirm this before moving forward.' },
    { q: 'Who issues the insurance certificate?', a: 'The insurer issues the policy and corresponding certificate. VPI guides you through the process.' },
    { q: 'Does the insurance guarantee acceptance of my application?', a: 'No. The administration or consulate decides whether the documents meet the requirements that apply to your process.' },
    { q: 'Where can I check more specific requirements?', a: 'Use VPI’s visa and consular-requirement guides, then confirm the current information with the competent office.' },
  ],
  finalEyebrow: 'NEXT STEP',
  finalTitle: 'Tell us about your case',
  finalDescription: 'Share the basic details and we’ll personally review which option fits your situation.',
  finalCta: 'Get my personalised quote',
  finalReassurance: 'Around 2 minutes · No payment · No commitment',
};

export const foreignersFunnelContent: Record<ForeignersFunnelLocale, ForeignersFunnelCopy> = { es, en };
