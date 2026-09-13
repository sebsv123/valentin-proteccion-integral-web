export type VisaType = 'student' | 'nonLucrative' | 'digitalNomad';
export type EvidenceStatus = 'stated' | 'not_stated_in_source' | 'unknown' | 'conditional' | 'local_check_required';

export type TrackedField = {
  status: EvidenceStatus;
  value: string;
};

export type VisaTrackerRecord = {
  jurisdiction: string;
  jurisdictionCode: string;
  visaType: VisaType;
  officialSourceUrl: string;
  officialSourceLabel: string;
  nationalRuleSourceUrl: string;
  nationalRuleSourceLabel: string;
  insuranceRequirement: TrackedField;
  insurerAuthorisation: TrackedField;
  copayment: TrackedField;
  waitingPeriod: TrackedField;
  reimbursementOrDeductible: TrackedField;
  repatriation: TrackedField;
  coverageStartEnd: TrackedField;
  paymentProof: TrackedField;
  certificate: TrackedField;
  lastVerified: string;
  notes: string;
};

const verifiedOn = '2026-09-13';
const notStated: TrackedField = { status: 'unknown', value: 'Not confirmed from the complete linked official source; check the competent consulate.' };

const sources = {
  us: {
    student: ['https://www.exteriores.gob.es/es/ServiciosAlCiudadano/Paginas/Servicios-consulares.aspx?scca=Visados&scco=Estados+Unidos&scd=48&scs=Visados+Nacionales+-+Visado+de+estudios', 'Embajada/servicios consulares de España en Estados Unidos — estudios'],
    nonLucrative: ['https://www.exteriores.gob.es/Consulados/houston/es/ServiciosConsulares/Paginas/index.aspx?scca=Visados&scco=Estados+Unidos&scd=155&scs=Visados+Nacionales+-+Visado+de+residencia+no+lucrativa', 'Consulado de España en Houston — residencia no lucrativa'],
    digitalNomad: ['https://www.exteriores.gob.es/Consulados/nuevayork/es/ServiciosConsulares/Paginas/index.aspx?scca=Visados&scco=Estados+Unidos&scd=215&scs=Visados+Nacionales+-+Visado+de+residencia+para+teletrabajo+%28n%C3%B3mada+digital%29', 'Consulado de España en Nueva York — teletrabajo internacional'],
  },
  mexico: {
    student: ['https://www.exteriores.gob.es/Consulados/mexico/es/ServiciosConsulares/Paginas/index.aspx?scca=Visados&scco=M%C3%A9xico&scd=195&scs=Visados+Nacionales+-+Visado+de+estudios', 'Consulado de España en México — estudios'],
    nonLucrative: ['https://www.exteriores.gob.es/Consulados/mexico/es/ServiciosConsulares/Paginas/index.aspx?scca=Visados&scco=M%C3%A9xico&scd=195&scs=Visados+Nacionales+-+Visado+de+residencia+no+lucrativa', 'Consulado de España en México — residencia no lucrativa'],
    digitalNomad: ['https://ciudadaniaexterior.inclusion.gob.es/es/web/unidadgrandesempresas/autorizaciones-y-requisitos', 'UGE — autorizaciones y requisitos'],
  },
  colombia: {
    student: ['https://www.exteriores.gob.es/es/ServiciosAlCiudadano/Paginas/Servicios-consulares.aspx?scca=Visados&scco=Colombia&scd=31&scs=Visados+Nacionales+-+Visado+de+estudios', 'Consulado de España en Bogotá — estudios'],
    nonLucrative: ['https://www.exteriores.gob.es/Consulados/bogota/es/ServiciosConsulares/Paginas/index.aspx?scca=Visados&scco=Colombia&scd=31&scs=Visados+Nacionales+-+Visado+de+residencia+no+lucrativa', 'Consulado de España en Bogotá — residencia no lucrativa'],
    digitalNomad: ['https://www.exteriores.gob.es/Consulados/bogota/es/ServiciosConsulares/Paginas/index.aspx?scca=Visados&scco=Colombia&scd=31&scs=Visado+de+residencia+para+teletrabajo+%28n%C3%B3mada+digital%29', 'Consulado de España en Bogotá — teletrabajo internacional'],
  },
  peru: {
    student: ['https://www.exteriores.gob.es/Consulados/lima/es/ServiciosConsulares/Paginas/index.aspx?scca=Visados&scco=Per%C3%BA&scd=174&scs=Visados+Nacionales+-+Visado+de+estudios', 'Consulado de España en Lima — estudios'],
    nonLucrative: ['https://exteriores.gob.es/Consulados/lima/es/ServiciosConsulares/Paginas/index.aspx?scca=Visados&scco=Per%C3%BA&scd=174&scs=Visados+Nacionales+-+Visado+de+residencia+no+lucrativa', 'Consulado de España en Lima — residencia no lucrativa'],
    digitalNomad: ['https://www.exteriores.gob.es/Consulados/lima/es/ServiciosConsulares/Paginas/index.aspx?scca=Visados&scco=Per%C3%BA&scd=174&scs=Visado+de+residencia+para+teletrabajo+%28n%C3%B3mada+digital%29', 'Consulado de España en Lima — teletrabajo internacional'],
  },
  canada: {
    student: ['https://www.exteriores.gob.es/Embajadas/ottawa/es/ServiciosConsulares/Paginas/index.aspx?scca=Visados&scco=Canad%C3%A1&scd=219&scs=Visados+Nacionales+-+Visado+de+estudios', 'Embajada de España en Ottawa — estudios'],
    nonLucrative: ['https://www.exteriores.gob.es/Embajadas/ottawa/es/ServiciosConsulares/Paginas/index.aspx?scca=Visados&scco=Canad%C3%A1&scd=219&scs=Visados+Nacionales+-+Visado+de+residencia+no+lucrativa', 'Embajada de España en Ottawa — residencia no lucrativa'],
    digitalNomad: ['https://www.exteriores.gob.es/Embajadas/ottawa/es/ServiciosConsulares/Paginas/index.aspx?scca=Visados&scco=Canad%C3%A1&scd=219&scs=Visados+Nacionales+-+Visado+de+residencia+para+teletrabajo+%28n%C3%B3mada+digital%29', 'Embajada de España en Ottawa — teletrabajo internacional'],
  },
  argentina: {
    student: ['https://www.exteriores.gob.es/Consulados/buenosaires/es/ServiciosConsulares/Paginas/index.aspx?scca=Visados&scco=Argentina&scd=40&scs=Visados+Nacionales+-+Visado+de+estudios', 'Consulado de España en Buenos Aires — estudios'],
    nonLucrative: ['https://www.exteriores.gob.es/Consulados/buenosaires/es/ServiciosConsulares/Paginas/index.aspx?scca=Visados&scco=Argentina&scd=40&scs=Visados+Nacionales+-+Visado+de+residencia+no+lucrativa', 'Consulado de España en Buenos Aires — residencia no lucrativa'],
    digitalNomad: ['https://www.exteriores.gob.es/Consulados/buenosaires/es/ServiciosConsulares/Paginas/index.aspx?scca=Visados&scco=Argentina&scd=40&scs=Visado+de+residencia+para+teletrabajo+%28n%C3%B3mada+digital%29', 'Consulado de España en Buenos Aires — teletrabajo internacional'],
  },
} as const;

type CountryKey = keyof typeof sources;
type SourcePair = readonly [string, string];

const countryNames: Record<CountryKey, { name: string; code: string }> = {
  us: { name: 'United States', code: 'US' },
  mexico: { name: 'Mexico', code: 'MX' },
  colombia: { name: 'Colombia', code: 'CO' },
  peru: { name: 'Peru', code: 'PE' },
  canada: { name: 'Canada', code: 'CA' },
  argentina: { name: 'Argentina', code: 'AR' },
};

function record(country: CountryKey, visaType: VisaType): VisaTrackerRecord {
  const [officialSourceUrl, officialSourceLabel] = sources[country][visaType] as SourcePair;
  const isStudent = visaType === 'student';
  const isDnv = visaType === 'digitalNomad';
  const nationalRuleSourceUrl = isDnv ? 'https://www.inclusion.gob.es/documents/d/unidadgrandesempresas/informacion-documentacion-titulares' : 'https://www.boe.es/eli/es/rd/2024/11/19/1155';
  const nationalRuleSourceLabel = isDnv ? 'UGE — Documentación de titulares' : 'Real Decreto 1155/2024 — BOE';
  const insuranceRequirement: TrackedField = isStudent
    ? { status: 'stated', value: 'Required for long-stay study authorisation; national rule specifies an insurer authorised to operate in Spain, comparable basic SNS benefits and validity for the planned stay.' }
    : isDnv
      ? { status: 'conditional', value: 'The official route allows public/social-security coverage evidence in applicable cases; otherwise public or private health insurance may be required. Check the exact route and coverage basis.' }
      : { status: 'stated', value: 'A health-insurance requirement is stated for the initial non-lucrative residence authorisation; the linked consular checklist supplies the local documentary detail.' };

  const insurerAuthorisation: TrackedField = isStudent
    ? { status: 'stated', value: 'National rule: insurer must be authorised to operate in Spain.' }
    : isDnv
      ? { status: 'conditional', value: 'For the private-insurance route, the official guidance specifies an insurer authorised to operate in Spain; social-security coordination evidence may apply instead.' }
      : country === 'us' || country === 'canada'
        ? { status: 'stated', value: 'The linked consular instructions refer to public/private health insurance with an insurer authorised to operate in Spain.' }
        : { status: 'not_stated_in_source', value: 'Not stated in the linked jurisdiction-specific page; the national rule requires health insurance. Confirm with the competent consulate.' };

  const base: VisaTrackerRecord = {
    jurisdiction: countryNames[country].name,
    jurisdictionCode: countryNames[country].code,
    visaType,
    officialSourceUrl,
    officialSourceLabel,
    nationalRuleSourceUrl,
    nationalRuleSourceLabel,
    insuranceRequirement,
    insurerAuthorisation,
    copayment: notStated,
    waitingPeriod: notStated,
    reimbursementOrDeductible: notStated,
    repatriation: notStated,
    coverageStartEnd: isStudent
      ? { status: 'stated', value: 'National rule: cover the planned stay. Exact start/end treatment and any transition days depend on the current consular checklist.' }
      : isDnv
        ? { status: 'conditional', value: 'Cover or qualifying social-security evidence must match the applicable authorisation period; local page may set document/date details.' }
        : { status: 'local_check_required', value: 'Confirm the policy period and effective date against the current consular checklist and requested residence period.' },
    paymentProof: notStated,
    certificate: isStudent && ['us', 'mexico', 'colombia', 'canada'].includes(country)
      ? { status: 'stated', value: 'The linked official checklist asks for a certificate or proof of insurance; confirm acceptable original/copy and document format locally.' }
      : isDnv && ['us', 'colombia', 'peru', 'canada', 'argentina'].includes(country)
        ? { status: 'stated', value: 'The linked official checklist asks for a certificate or proof of insurance/coverage; confirm acceptable original/copy and document format locally.' }
      : notStated,
    lastVerified: verifiedOn,
    notes: 'This is the cited page for one consular jurisdiction, not a universal country-wide rule. Consular districts and checklist updates matter. Some official pages were available only through their indexed extracts during this build; unconfirmed fields remain unknown. “Not stated” is reserved for a fully reviewed source that is silent; it never means the requirement is absent.',
  };

  if (country === 'canada' && isStudent) {
    base.copayment = { status: 'stated', value: 'Ottawa checklist says no copayment or deductible.' };
    base.reimbursementOrDeductible = { status: 'stated', value: 'Ottawa checklist says no deductible and no coverage limit.' };
    base.repatriation = { status: 'stated', value: 'Ottawa checklist says repatriation/evacuation cover is not required for this study-insurance checklist.' };
    base.coverageStartEnd = { status: 'stated', value: 'Ottawa gives study-period rules, including different treatment below/above six months; see the linked current checklist and confirm entry-date details.' };
  }
  if (country === 'colombia' && isStudent) {
    base.copayment = { status: 'stated', value: 'Bogotá checklist says no copayment.' };
    base.waitingPeriod = { status: 'stated', value: 'Bogotá checklist says no waiting period.' };
    base.reimbursementOrDeductible = { status: 'stated', value: 'Bogotá checklist says no reimbursements, limits or franchises; full medical-cost cover is requested.' };
    base.certificate = { status: 'stated', value: 'The checklist requires an original and copy of public/private insurance evidence; a quotation or intermediary-issued document is not accepted in place of policy proof.' };
    base.coverageStartEnd = { status: 'stated', value: 'The checklist describes the study period and additional days in its date rules; check the current official page for the exact case.' };
  }
  if (country === 'mexico' && isStudent) {
    base.copayment = { status: 'stated', value: 'The linked Mexico consular instructions state no copayment/deductible for the specified study-insurance checklist.' };
    base.waitingPeriod = { status: 'stated', value: 'The linked Mexico consular instructions state no waiting periods for the specified study-insurance checklist.' };
    base.reimbursementOrDeductible = { status: 'stated', value: 'The linked Mexico consular instructions state full cover without limits/reimbursements and request proof of payment.' };
    base.paymentProof = { status: 'stated', value: 'The linked Mexico checklist requests proof of payment for the insurance period/first year under its stated renewal condition.' };
    base.coverageStartEnd = { status: 'stated', value: 'Mexico checklist gives a start/end window around studies; check the current official page and any stated waiver for stays up to 180 days.' };
  }
  if ((country === 'us' || country === 'canada' || country === 'colombia' || country === 'peru') && isDnv) {
    base.insuranceRequirement = { status: 'conditional', value: 'Official consular guidance requests proof of public or private health insurance, with an alternative social-security coverage certificate where an applicable coordination agreement covers the worker.' };
    base.certificate = { status: 'stated', value: 'The consular page requests an insurance certificate or, where applicable, a certificate of entitlement to social-security coverage.' };
  }
  if (country === 'canada' && visaType === 'nonLucrative') {
    base.coverageStartEnd = { status: 'stated', value: 'Ottawa states that the policy must cover at least the full visa duration.' };
    base.certificate = { status: 'stated', value: 'Ottawa requests an original and copy of the public/private health-insurance certificate.' };
  }
  if (country === 'argentina' && visaType === 'nonLucrative') {
    base.certificate = { status: 'stated', value: 'Buenos Aires requests an original and copy of the public/private health-insurance certificate.' };
  }
  if ((country === 'peru' || country === 'argentina') && isStudent) {
    base.certificate = { status: 'local_check_required', value: 'The exact insurance-certificate requirement was not confirmed from the selected source view; check the linked consular checklist.' };
  }
  if (country === 'mexico' && isDnv) {
    base.certificate = { status: 'local_check_required', value: 'No Mexico-specific digital-nomad checklist was verified in this pass; check the consulate responsible for residence.' };
  }
  if (country === 'us' && visaType === 'nonLucrative') {
    base.insuranceRequirement = { status: 'stated', value: 'Houston checklist: health insurance must cover all risks insured by Spain’s public health system.' };
    base.certificate = { status: 'stated', value: 'Houston requests a public/private health-insurance certificate.' };
  }
  return base;
}

export const visaTrackerRecords: VisaTrackerRecord[] = (Object.keys(sources) as CountryKey[]).flatMap((country) =>
  (['student', 'nonLucrative', 'digitalNomad'] as VisaType[]).map((visaType) => record(country, visaType)),
);

export const visaTypeLabels = {
  es: { student: 'Estudios de larga duración', nonLucrative: 'Residencia no lucrativa', digitalNomad: 'Teletrabajo internacional (nómada digital)' },
  en: { student: 'Long-stay study', nonLucrative: 'Non-lucrative residence', digitalNomad: 'International telework (digital nomad)' },
} as const;

export const trackerFieldLabels = {
  es: {
    insuranceRequirement: 'Seguro exigido', insurerAuthorisation: 'Aseguradora autorizada en España', copayment: 'Copagos', waitingPeriod: 'Carencias', reimbursementOrDeductible: 'Reembolso / franquicia / límites', repatriation: 'Repatriación', coverageStartEnd: 'Inicio y fin de cobertura', paymentProof: 'Justificante de pago', certificate: 'Certificado / prueba documental',
  },
  en: {
    insuranceRequirement: 'Insurance requirement', insurerAuthorisation: 'Insurer authorised in Spain', copayment: 'Copayments', waitingPeriod: 'Waiting periods', reimbursementOrDeductible: 'Reimbursement / deductible / limits', repatriation: 'Repatriation', coverageStartEnd: 'Coverage start and end', paymentProof: 'Proof of payment', certificate: 'Certificate / documentary proof',
  },
} as const;
