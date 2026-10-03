export type AsisaForeignersProductKey = 'students' | 'residents';
export type ProductLocale = 'es' | 'en';

const base = 'https://valentinproteccionintegral.com';

type Localized<T> = { es: T; en: T };

export type AsisaForeignersProduct = {
  key: AsisaForeignersProductKey;
  sourceUrl: string;
  paths: Localized<string>;
  metadata: Localized<{ title: string; description: string }>;
  breadcrumb: Localized<string>;
  h1: Localized<string>;
  answer: Localized<string>;
  facts: Localized<Array<{ label: string; value: string }>>;
  beforeContracting: Localized<string>;
  beforeMovingQuestion: Localized<string>;
  beforeMovingAnswer: Localized<string>;
  related: Localized<Array<{ label: string; href: string }>>;
  cta: Localized<string>;
  whatsappMessage: Localized<string>;
};

export const asisaForeignersProducts: Record<AsisaForeignersProductKey, AsisaForeignersProduct> = {
  students: {
    key: 'students',
    sourceUrl: 'https://www.asisa.es/seguros-medicos/extranjeros/estudios',
    paths: {
      es: '/seguros/salud-extranjeros/asisa-health-students',
      en: '/en/insurance/health/foreigners/asisa-health-students',
    },
    metadata: {
      es: {
        title: 'ASISA Health Students para estudiantes internacionales | VPI',
        description: 'Información y orientación para contratar ASISA Health Students antes de estudiar en España. ASISA emite la póliza y el certificado; la mediación se realiza a través de Sebastián Sifontes Valentín, agente exclusivo de ASISA.',
      },
      en: {
        title: 'ASISA Health Students for International Students | VPI',
        description: 'Guidance for arranging ASISA Health Students before studying in Spain. ASISA issues the policy and certificate; mediation is carried out through Sebastián Sifontes Valentín, an ASISA exclusive insurance agent.',
      },
    },
    breadcrumb: { es: 'ASISA Health Students', en: 'ASISA Health Students' },
    h1: {
      es: 'ASISA Health Students: seguro médico para estudiantes internacionales en España',
      en: 'ASISA Health Students for international students in Spain',
    },
    answer: {
      es: 'ASISA Health Students es un seguro médico privado con asistencia sanitaria completa para estudiantes internacionales y docentes que vienen a España por estudios. ASISA es la aseguradora: define las condiciones, emite la póliza y facilita el certificado tras la contratación. VPI ofrece orientación y acompañamiento durante el proceso. Para este producto, la mediación de seguros se realiza a través de Sebastián Sifontes Valentín, cofundador de VPI y agente exclusivo de seguros de ASISA. La autoridad competente o el consulado decide si la documentación sirve para tu trámite migratorio.',
      en: 'ASISA Health Students is comprehensive private health insurance for international students and teachers coming to Spain for studies. ASISA is the insurer: it defines the terms, issues the policy and supplies the certificate after contracting. VPI provides guidance and customer support throughout the process. For this product, insurance mediation is carried out through Sebastián Sifontes Valentín, VPI co-founder and ASISA exclusive insurance agent. The competent authority or consulate decides whether the documents satisfy your immigration procedure.',
    },
    facts: {
      es: [
        { label: 'Duración', value: 'De 2 a 12 meses' },
        { label: 'Copagos', value: 'Sin copagos' },
        { label: 'Carencias', value: 'Sin periodos de carencia' },
        { label: 'Red médica', value: 'Cuadro médico específico de ASISA para este producto' },
        { label: 'Pago', value: 'Pago con tarjeta' },
        { label: 'Certificado', value: 'ASISA emite el certificado tras contratar' },
      ],
      en: [
        { label: 'Duration', value: 'From 2 to 12 months' },
        { label: 'Co-payments', value: 'No co-payments' },
        { label: 'Waiting periods', value: 'No waiting periods' },
        { label: 'Medical network', value: 'Specific ASISA medical network for this product' },
        { label: 'Payment', value: 'Payment by card' },
        { label: 'Certificate', value: 'ASISA issues the certificate after contracting' },
      ],
    },
    beforeContracting: {
      es: 'Confirma las fechas de inicio y fin, comprueba el cuadro médico específico de ASISA en la provincia de destino y revisa los requisitos aplicables de tu visado o consulado. Las fechas no pueden cambiarse simplemente después de emitir la póliza y las devoluciones son limitadas. ASISA Health Students no se renueva automáticamente; después puede formalizarse una nueva póliza si hace falta. ASISA publica límites para la contratación anticipada; consulta su página oficial para conocer la ventana vigente.',
      en: 'Confirm the start and end dates, check the specific ASISA medical network in your destination province and review the requirements that apply to your visa or consulate. Dates cannot simply be changed after the policy is issued and refunds are limited. ASISA Health Students is not automatically renewed; a new policy can be arranged afterwards if needed. ASISA publishes advance-contracting limits; check its official page for the current window.',
    },
    beforeMovingQuestion: {
      es: '¿Puedo contratarlo antes de trasladarme a España?',
      en: 'Can I arrange it before moving to Spain?',
    },
    beforeMovingAnswer: {
      es: 'ASISA indica actualmente que la contratación online puede completarse desde el extranjero sin NIE ni cuenta bancaria española. ASISA emite la póliza y el certificado después de contratar; VPI puede orientarte durante el proceso.',
      en: 'ASISA currently states that online contracting can be completed from abroad without a NIE or Spanish bank account. ASISA issues the policy and certificate after contracting; VPI can guide you through the process.',
    },
    related: {
      es: [
        { label: 'Seguro médico para visado de estudios', href: '/visados/seguro-medico/estudios' },
        { label: 'Requisitos del seguro según consulado', href: '/visados/seguro-medico/requisitos-consulares' },
      ],
      en: [
        { label: 'Student visa insurance guidance', href: '/en/visa-health-insurance/student-visa' },
        { label: 'Consulate-specific insurance requirements', href: '/en/visa-health-insurance/consulate-requirements' },
      ],
    },
    cta: { es: 'Revisar ASISA Health Students con VPI', en: 'Review ASISA Health Students with VPI' },
    whatsappMessage: { es: 'Hola, quiero revisar ASISA Health Students con VPI.', en: 'Hello, I would like to review ASISA Health Students with VPI.' },
  },
  residents: {
    key: 'residents',
    sourceUrl: 'https://www.asisa.es/seguros-medicos/extranjeros/residencia',
    paths: {
      es: '/seguros/salud-extranjeros/asisa-health-residents',
      en: '/en/insurance/health/foreigners/asisa-health-residents',
    },
    metadata: {
      es: {
        title: 'ASISA Health Residents para residencia en España | VPI',
        description: 'Información y orientación para valorar ASISA Health Residents en un trámite de residencia o larga estancia. ASISA emite la póliza y el certificado; VPI acompaña el proceso.',
      },
      en: {
        title: 'ASISA Health Residents for Residence in Spain | VPI',
        description: 'Guidance for reviewing ASISA Health Residents for a residence or long-stay process. ASISA issues the policy and certificate; VPI supports the insurance process.',
      },
    },
    breadcrumb: { es: 'ASISA Health Residents', en: 'ASISA Health Residents' },
    h1: {
      es: 'ASISA Health Residents: seguro médico para residencia en España',
      en: 'ASISA Health Residents for residence in Spain',
    },
    answer: {
      es: 'ASISA Health Residents es un seguro médico privado con asistencia sanitaria completa para personas extranjeras que necesitan cobertura para un trámite de residencia o larga estancia cuando ese procedimiento la exige. ASISA es la aseguradora: define las condiciones, emite la póliza y facilita el certificado tras la contratación. VPI ofrece orientación y acompañamiento durante el proceso. Para este producto, la mediación de seguros se realiza a través de Sebastián Sifontes Valentín, cofundador de VPI y agente exclusivo de seguros de ASISA. La autoridad competente o el consulado decide si la documentación cumple tu trámite migratorio.',
      en: 'ASISA Health Residents is comprehensive private health insurance for foreigners who need cover for a residence or long-stay process where that procedure requires it. ASISA is the insurer: it defines the terms, issues the policy and supplies the certificate after contracting. VPI provides guidance and customer support throughout the process. For this product, insurance mediation is carried out through Sebastián Sifontes Valentín, VPI co-founder and ASISA exclusive insurance agent. The competent authority or consulate decides whether the documents satisfy your immigration procedure.',
    },
    facts: {
      es: [
        { label: 'Duración', value: 'Un año' },
        { label: 'Copagos', value: 'Sin copagos' },
        { label: 'Carencias', value: 'Sin periodos de carencia' },
        { label: 'Red médica', value: 'Cuadro médico específico de ASISA para este producto' },
        { label: 'Pago', value: 'Pago con tarjeta' },
        { label: 'Certificado', value: 'ASISA emite el certificado tras contratar' },
      ],
      en: [
        { label: 'Duration', value: 'One year' },
        { label: 'Co-payments', value: 'No co-payments' },
        { label: 'Waiting periods', value: 'No waiting periods' },
        { label: 'Medical network', value: 'Specific ASISA medical network for this product' },
        { label: 'Payment', value: 'Payment by card' },
        { label: 'Certificate', value: 'ASISA issues the certificate after contracting' },
      ],
    },
    beforeContracting: {
      es: 'Confirma las fechas del proceso de residencia, comprueba el cuadro médico específico de ASISA en la provincia de destino y revisa los requisitos aplicables de tu vía y consulado. La póliza tiene una duración de un año; el manual de 2026 describe una vía de renovación desde el segundo año mediante IBAN español. La autoridad decide si la documentación sirve para tu trámite.',
      en: 'Confirm the dates for your residence process, check the specific ASISA medical network in your destination province and review the requirements that apply to your route and consulate. The policy lasts one year; the 2026 manual describes a renewal route from the second year using a Spanish IBAN. The authority decides whether the documents satisfy your procedure.',
    },
    beforeMovingQuestion: {
      es: '¿Puedo contratarlo antes de trasladarme a España?',
      en: 'Can I arrange it before moving to Spain?',
    },
    beforeMovingAnswer: {
      es: 'ASISA indica actualmente que la contratación online puede completarse desde el extranjero sin NIE ni cuenta bancaria española. ASISA emite la póliza y el certificado después de contratar; VPI puede orientarte durante el proceso.',
      en: 'ASISA currently states that online contracting can be completed from abroad without a NIE or Spanish bank account. ASISA issues the policy and certificate after contracting; VPI can guide you through the process.',
    },
    related: {
      es: [
        { label: 'Seguro para residencia no lucrativa', href: '/visados/seguro-medico/residencia-no-lucrativa' },
        { label: 'Comprueba cuándo se requiere seguro para teletrabajo internacional', href: '/visados/seguro-medico/teletrabajo-internacional' },
        { label: 'Requisitos del seguro según consulado', href: '/visados/seguro-medico/requisitos-consulares' },
      ],
      en: [
        { label: 'Non-lucrative residence insurance guidance', href: '/en/visa-health-insurance/non-lucrative-residence' },
        { label: 'Check when private insurance is required for international telework', href: '/en/visa-health-insurance/digital-nomad' },
        { label: 'Consulate-specific insurance requirements', href: '/en/visa-health-insurance/consulate-requirements' },
      ],
    },
    cta: { es: 'Revisar ASISA Health Residents con VPI', en: 'Review ASISA Health Residents with VPI' },
    whatsappMessage: { es: 'Hola, quiero revisar ASISA Health Residents con VPI.', en: 'Hello, I would like to review ASISA Health Residents with VPI.' },
  },
};

export function getAsisaForeignersProduct(key: AsisaForeignersProductKey) {
  return asisaForeignersProducts[key];
}

export function getAsisaForeignersProductMetadata(key: AsisaForeignersProductKey, locale: ProductLocale) {
  const product = getAsisaForeignersProduct(key);
  const path = product.paths[locale];
  const alternateLanguages = {
    es: `${base}${product.paths.es}`,
    en: `${base}${product.paths.en}`,
    'x-default': `${base}${product.paths.es}`,
  };
  return {
    title: product.metadata[locale].title,
    description: product.metadata[locale].description,
    alternates: { canonical: `${base}${path}`, languages: alternateLanguages },
    openGraph: {
      title: product.metadata[locale].title,
      description: product.metadata[locale].description,
      url: `${base}${path}`,
      siteName: 'Valentín Protección Integral',
      locale: locale === 'en' ? 'en_GB' : 'es_ES',
      type: 'website' as const,
    },
  };
}
