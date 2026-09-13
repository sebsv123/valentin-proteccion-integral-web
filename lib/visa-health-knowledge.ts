import { site } from '@/lib/products';

export type VisaKnowledgePageKey = 'hub' | 'student' | 'nonLucrative' | 'digitalNomad' | 'tracker';
export type OfficialSource = { label: string; url: string; scope: string };

export type VisaKnowledgePage = {
  path: { es: string; en: string };
  title: { es: string; en: string };
  description: { es: string; en: string };
  answer: { es: string; en: string };
  officialRequirement: { es: string[]; en: string[] };
  practical: { es: string[]; en: string[] };
  dates: { es: string[]; en: string[] };
  documents: { es: string[]; en: string[] };
  consulates: { es: string; en: string };
  sources: OfficialSource[];
};

const law = 'https://www.boe.es/eli/es/rd/2024/11/19/1155';
const teleworkLaw = 'https://www.boe.es/buscar/act.php?id=BOE-A-2013-10074';
const uge = 'https://ciudadaniaexterior.inclusion.gob.es/es/web/unidadgrandesempresas/autorizaciones-y-requisitos';
const ugeEvidence = 'https://www.inclusion.gob.es/documents/d/unidadgrandesempresas/informacion-documentacion-titulares';
const productES = '/seguros/salud-extranjeros';
const productEN = '/en/insurance/health/foreigners';
const hubES = '/visados/seguro-medico';
const hubEN = '/en/visa-health-insurance';
const trackerES = `${hubES}/requisitos-consulares`;
const trackerEN = `${hubEN}/consulate-requirements`;

export const visaKnowledgePages: Record<VisaKnowledgePageKey, VisaKnowledgePage> = {
  hub: {
    path: { es: hubES, en: hubEN },
    title: { es: 'Seguro médico para visados y residencia en España', en: 'Health insurance for Spanish visas and residence' },
    description: {
      es: 'Requisitos oficiales de seguro médico para estudios, residencia no lucrativa y teletrabajo internacional en España, con fuentes consulares y fecha de revisión.',
      en: 'Official health-insurance requirements for study, non-lucrative residence and international telework in Spain, with consular sources and review dates.',
    },
    answer: {
      es: 'El seguro exigible depende de la autorización y del consulado competente. Para la estancia de larga duración por estudios, el Reglamento exige un seguro concertado con una entidad autorizada para operar en España, con prestaciones similares a la cartera básica común del Sistema Nacional de Salud y válido para la estancia prevista. La residencia no lucrativa también requiere seguro de enfermedad; en teletrabajo internacional puede aplicar una alternativa de cobertura de Seguridad Social. La página del consulado concreta la documentación.',
      en: 'The insurance requirement depends on the authorisation and the competent consulate. For long-stay studies, Spain’s regulation requires insurance from an insurer authorised to operate in Spain, with benefits comparable to the basic common National Health System portfolio and valid for the planned stay. Non-lucrative residence also requires health insurance; international telework may allow qualifying Social Security coverage instead. The competent consulate’s checklist determines the documents to submit.',
    },
    officialRequirement: {
      es: [
        'Estudios: el artículo 35 del Real Decreto 1155/2024 define la autorización de aseguradora, el nivel general de prestaciones y la duración prevista.',
        'Residencia no lucrativa: el artículo 61 exige contar con seguro de enfermedad; las especificaciones documentales se contrastan con la oficina consular.',
        'Teletrabajo internacional: la vía depende de la cobertura de Seguridad Social aplicable; consulta la Ley 14/2013 y la documentación orientativa de UGE.',
      ],
      en: [
        'Studies: Article 35 of Royal Decree 1155/2024 sets the insurer-authorisation, general benefit-level and planned-duration requirements.',
        'Non-lucrative residence: Article 61 requires health insurance; documentary details must be checked with the competent consulate.',
        'International telework: the route depends on applicable Social Security coverage; consult Law 14/2013 and UGE supporting-document guidance.',
      ],
    },
    practical: {
      es: ['Identifica el tipo exacto de autorización, la demarcación consular y las fechas que debe cubrir el documento.', 'No extrapoles una condición de copago o carencia de un consulado a otro.', 'El seguro respalda el expediente; no garantiza la concesión del visado o autorización.'],
      en: ['Identify the exact authorisation, consular district and dates the document must cover.', 'Do not transfer a copayment or waiting-period rule from one consulate to another.', 'Insurance supports an application; it does not guarantee a visa or residence decision.'],
    },
    dates: {
      es: ['El reglamento de estudios exige cobertura válida para la estancia prevista; artículos 35 y 55 regulan el requisito y la vigencia de la autorización.', 'Para residencia no lucrativa, el artículo 61 establece un año para la autorización inicial; las fechas de póliza se deben cotejar con el consulado.'],
      en: ['The study regulation requires cover valid for the planned stay; Articles 35 and 55 address the insurance condition and authorisation period.', 'For non-lucrative residence, Article 61 sets a one-year initial authorisation; check policy dates against the consulate’s checklist.'],
    },
    documents: {
      es: ['El consulado puede pedir póliza o certificado, original/copia, prueba de pago u otros documentos. Revisa el listado vigente antes de emitir.', 'Para empezar una consulta operativa con VPI se puede preguntar por el proceso con pasaporte aunque todavía no se tenga NIE; el formato aceptable para el expediente lo determina la autoridad.'],
      en: ['A consulate may ask for a policy or certificate, original/copy, proof of payment or other documents. Check its current list before the policy is issued.', 'You can ask VPI about the operational process using a passport before receiving an NIE; the authority determines which document format is acceptable for the application.'],
    },
    consulates: {
      es: 'Los requisitos de seguro publicados por las oficinas consulares pueden añadir condiciones documentales y de fechas. El tracker resume fuentes de las demarcaciones enlazadas; no sustituye la página de la oficina que tramitará tu solicitud.',
      en: 'Consular offices may add documentary and date conditions to the published insurance requirements. The tracker summarises linked consular-district sources; it does not replace the page of the office handling your application.',
    },
    sources: [
      { label: 'Real Decreto 1155/2024 — BOE', url: law, scope: 'Estudios, residencia no lucrativa y procedimientos generales; arts. 34–39, 52–55 and 61–64.' },
      { label: 'Ley 14/2013 — BOE', url: teleworkLaw, scope: 'International telework authorisation; arts. 74 quater and 74 quinquies.' },
      { label: 'UGE — Autorizaciones y requisitos', url: uge, scope: 'Official route and supporting information for international teleworkers.' },
      { label: 'UGE — Documentación de titulares', url: ugeEvidence, scope: 'Evidence guidance including the insurance/Social Security coverage route.' },
    ],
  },
  student: {
    path: { es: `${hubES}/estudios`, en: `${hubEN}/student-visa` },
    title: { es: 'Seguro médico para visado de estudios en España', en: 'Health insurance for a Spanish student visa' },
    description: {
      es: 'Qué establece la norma estatal sobre seguro médico para estancias de estudios y qué debes verificar en tu consulado.',
      en: 'What Spain’s national rule says about health insurance for long-stay studies and what to check with your consulate.',
    },
    answer: {
      es: 'Para una estancia de larga duración por estudios, el artículo 35 del Real Decreto 1155/2024 exige un seguro de enfermedad contratado con una entidad aseguradora autorizada para operar en España, con prestaciones similares a la cartera básica común del Sistema Nacional de Salud y válido para la estancia prevista. La lista consular puede precisar copagos, fechas, certificado y justificante de pago; esos detalles no deben generalizarse entre países.',
      en: 'For long-stay study authorisation, Article 35 of Royal Decree 1155/2024 requires health insurance from an insurer authorised to operate in Spain, with benefits comparable to the basic common National Health System portfolio and valid for the planned stay. The consular checklist may specify copayments, dates, certificate format and proof of payment; those details should not be generalised across countries.',
    },
    officialRequirement: {
      es: ['La norma estatal regula seguro, autorización de la entidad, nivel general de prestaciones y cobertura para la estancia prevista.', 'El reglamento no convierte por sí solo cada detalle de póliza (copagos, carencias, reembolso o repatriación) en una regla idéntica para todos los consulados.'],
      en: ['The national rule addresses insurance, insurer authorisation, general benefit level and cover for the planned stay.', 'The regulation does not by itself make every policy detail (copayments, waiting periods, reimbursement or repatriation) identical across consulates.'],
    },
    practical: {
      es: ['Compara el certificado y las fechas con la lista de tu consulado, incluidos posibles días previos/posteriores.', 'Algunos consulados concretan no copago/no carencia; otros publican instrucciones diferentes. Comprueba la fuente territorial antes de contratar.', 'La autoridad de inmigración decide si el expediente cumple; VPI solo orienta sobre la parte aseguradora.'],
      en: ['Compare the certificate and dates with your consulate’s list, including any stated days before or after the course.', 'Some consulates specify no copayment/no waiting period; others publish different instructions. Check the territorial source before arranging cover.', 'The immigration authority decides whether the application meets its requirements; VPI guides only on the insurance side.'],
    },
    dates: {
      es: ['La solicitud de visado de estudios debe presentarse, como regla general, con al menos dos meses de antelación al comienzo, salvo causa justificada (art. 36).', 'El seguro debe ser válido para la duración prevista de la estancia; la oficina consular puede detallar cómo computa el inicio y el final.'],
      en: ['As a general rule, the study-visa application is filed at least two months before the activity begins, unless justified reasons prevent this (Article 36).', 'Insurance must be valid for the planned stay; the consulate may specify how it calculates the start and end dates.'],
    },
    documents: {
      es: ['La norma contempla acreditar los requisitos documentales del expediente; el consulado indica el tipo de certificado/póliza, copias y pago exigidos.', 'Pregunta por el trámite con pasaporte si todavía no tienes NIE. La exigencia legal de seguro no establece por sí misma que el NIE sea imprescindible para iniciar una cotización o emisión.'],
      en: ['The application must document the applicable requirements; the consulate specifies the acceptable policy/certificate, copies and payment evidence.', 'Ask about arranging cover with a passport if you do not yet have an NIE. The insurance rule itself does not establish that an NIE is required to begin a quote or issue process.'],
    },
    consulates: {
      es: 'Bogotá, Ottawa y México publican detalles propios sobre copagos, franquicias, límites o duración. Consulta la demarcación donde resides legalmente y no copies un requisito de otra oficina.',
      en: 'Bogotá, Ottawa and Mexico publish their own detail on copayments, deductibles, limits or duration. Check the consular district where you legally reside; do not copy another office’s requirement.',
    },
    sources: [
      { label: 'Real Decreto 1155/2024 — BOE, arts. 34–36', url: law, scope: 'National student-visa and long-stay study requirements.' },
      { label: 'Consulado de España en Bogotá — estudios', url: 'https://www.exteriores.gob.es/es/ServiciosAlCiudadano/Paginas/Servicios-consulares.aspx?scca=Visados&scco=Colombia&scd=31&scs=Visados+Nacionales+-+Visado+de+estudios', scope: 'Colombian consular instructions; source may vary by jurisdiction.' },
      { label: 'Embajada de España en Ottawa — estudios', url: 'https://www.exteriores.gob.es/Embajadas/ottawa/es/ServiciosConsulares/Paginas/index.aspx?scca=Visados&scco=Canad%C3%A1&scd=219&scs=Visados+Nacionales+-+Visado+de+estudios', scope: 'Ottawa district checklist and its stated insurance details.' },
      { label: 'Consulado de España en México — estudios', url: 'https://www.exteriores.gob.es/Consulados/mexico/es/ServiciosConsulares/Paginas/index.aspx?scca=Visados&scco=M%C3%A9xico&scd=195&scs=Visados+Nacionales+-+Visado+de+estudios', scope: 'Mexico consular checklist; district and current page matter.' },
    ],
  },
  nonLucrative: {
    path: { es: `${hubES}/residencia-no-lucrativa`, en: `${hubEN}/non-lucrative-residence` },
    title: { es: 'Seguro médico para residencia no lucrativa en España', en: 'Health insurance for non-lucrative residence in Spain' },
    description: {
      es: 'Requisito estatal de seguro de enfermedad y comprobaciones consulares para la residencia temporal no lucrativa.',
      en: 'The national health-insurance requirement and consular checks for Spain’s non-lucrative temporary residence route.',
    },
    answer: {
      es: 'El artículo 61 del Real Decreto 1155/2024 incluye contar con seguro de enfermedad entre los requisitos de la autorización inicial de residencia temporal no lucrativa. La norma citada no detalla todos los términos de póliza; las oficinas consulares publican qué certificado, entidad, fechas y documentos aceptan para sus solicitudes. Por eso, valida la lista del consulado competente antes de elegir o emitir una póliza.',
      en: 'Article 61 of Royal Decree 1155/2024 includes health insurance among the requirements for initial non-lucrative temporary residence. The cited provision does not set out every policy term; consular offices publish which certificate, insurer, dates and documents they accept for applications. Check the competent consulate’s list before choosing or issuing a policy.',
    },
    officialRequirement: {
      es: ['La norma nacional establece el requisito de contar con seguro de enfermedad; no atribuye una garantía de aprobación a una póliza concreta.', 'Listas oficiales de Houston, Ottawa, México y Buenos Aires ofrecen instrucciones documentales locales. Sus formulaciones no deben fusionarse en una regla única.'],
      en: ['The national rule requires health insurance; it does not guarantee approval for any particular policy.', 'Official checklists from Houston, Ottawa, Mexico and Buenos Aires provide local documentary instructions. Their wording should not be collapsed into one universal rule.'],
    },
    practical: {
      es: ['Comprueba si la oficina pide seguro público o privado, autorización para operar en España y cobertura/fechas específicas.', 'No des por supuestos copagos, carencias, repatriación o límites: deben aparecer en la fuente aplicable.', 'La solicitud también está sujeta a otros requisitos migratorios que VPI no evalúa.'],
      en: ['Check whether the office specifies public/private insurance, authorisation to operate in Spain, and particular coverage or dates.', 'Do not assume rules about copayments, waiting periods, repatriation or limits unless they appear in the applicable source.', 'The application has other immigration requirements that VPI does not assess.'],
    },
    dates: {
      es: ['La autorización inicial de residencia no lucrativa dura un año según el artículo 61.4; contrasta con el consulado qué periodo debe reflejar el seguro y cuándo debe empezar.', 'Las condiciones de renovación requieren mantener seguro de enfermedad (art. 64).'],
      en: ['The initial non-lucrative residence authorisation lasts one year under Article 61(4); ask the consulate what policy period and start date it expects.', 'Renewal conditions include maintaining health insurance (Article 64).'],
    },
    documents: {
      es: ['Algunas de las listas consulares enlazadas piden certificado o justificante del seguro; revisa original/copia, traducción y prueba de vigencia según tu oficina.', 'No se afirma que la legislación nacional exija aportar un documento concreto con un nombre universal; verifica la lista local vigente.'],
      en: ['Some of the linked consular checklists request an insurance certificate or other proof; check originals/copies, translation and proof of validity for your office.', 'The national rule does not establish one universally named document; verify the current local checklist.'],
    },
    consulates: {
      es: 'El tracker enlaza ejemplos oficiales por jurisdicción. Las demarcaciones de Estados Unidos, México y Canadá tienen varias oficinas; usa la que corresponde a tu residencia legal.',
      en: 'The tracker links official jurisdiction examples. The United States, Mexico and Canada have multiple offices; use the one covering your legal residence.',
    },
    sources: [
      { label: 'Real Decreto 1155/2024 — BOE, arts. 61–64', url: law, scope: 'National requirement, one-year initial authorisation and renewal.' },
      { label: 'Consulado de España en Houston — residencia no lucrativa', url: 'https://www.exteriores.gob.es/Consulados/houston/es/ServiciosConsulares/Paginas/index.aspx?scca=Visados&scco=Estados+Unidos&scd=155&scs=Visados+Nacionales+-+Visado+de+residencia+no+lucrativa', scope: 'Local United States consular checklist.' },
      { label: 'Embajada de España en Ottawa — residencia no lucrativa', url: 'https://www.exteriores.gob.es/Embajadas/ottawa/es/ServiciosConsulares/Paginas/index.aspx?scca=Visados&scco=Canad%C3%A1&scd=219&scs=Visados+Nacionales+-+Visado+de+residencia+no+lucrativa', scope: 'Ottawa district requirements and policy-period language.' },
      { label: 'Consulado de España en México — residencia no lucrativa', url: 'https://www.exteriores.gob.es/Consulados/mexico/es/ServiciosConsulares/Paginas/index.aspx?scca=Visados&scco=M%C3%A9xico&scd=195&scs=Visados+Nacionales+-+Visado+de+residencia+no+lucrativa', scope: 'Mexico City district checklist; confirms local insurance-document requirements.' },
      { label: 'Consulado de España en Buenos Aires — residencia no lucrativa', url: 'https://www.exteriores.gob.es/Consulados/buenosaires/es/ServiciosConsulares/Paginas/index.aspx?scca=Visados&scco=Argentina&scd=40&scs=Visados+Nacionales+-+Visado+de+residencia+no+lucrativa', scope: 'Local Argentine consular requirements.' },
    ],
  },
  digitalNomad: {
    path: { es: `${hubES}/teletrabajo-internacional`, en: `${hubEN}/digital-nomad` },
    title: { es: 'Seguro médico para teletrabajo internacional en España', en: 'Health insurance for Spain’s digital nomad route' },
    description: {
      es: 'Cuándo puede ser aplicable el seguro de enfermedad en la autorización de teletrabajo internacional y qué confirmar con UGE o el consulado.',
      en: 'When health insurance may apply to Spain’s international telework authorisation and what to confirm with UGE or the consulate.',
    },
    answer: {
      es: 'En teletrabajo internacional no hay una regla simple de “Seguridad Social o seguro privado”. Según la guía de documentación de UGE, si el sistema extranjero aplicable reconoce el derecho a asistencia sanitaria pública en España, se acredita mediante el certificado oficial de cobertura. Si el convenio o régimen aplicable no da ese derecho, también se debe acreditar un seguro de enfermedad con cobertura equiparable a la del Sistema Nacional de Salud. La guía indica además que no se exige esa documentación de seguro cuando, tras obtener la autorización, la persona vaya a afiliarse a la Seguridad Social española. Confirma qué vía corresponde a tu caso y a tu trámite.',
      en: 'International telework does not follow a simple “Social Security or private insurance” rule. Under UGE’s supporting-document guidance, if the applicable foreign system grants entitlement to healthcare under Spain’s public system, the applicant provides the official coverage certificate. If the applicable agreement or system does not grant that healthcare entitlement, health insurance with cover comparable to Spain’s National Health System is also required. UGE also says this insurance documentation is not required where the worker will join Spanish Social Security after authorisation. Confirm which route applies to your circumstances and application.',
    },
    officialRequirement: {
      es: ['La Ley 14/2013 regula el visado y la residencia de teletrabajo internacional.', 'La guía documental de UGE diferencia entre certificado extranjero que da derecho a asistencia sanitaria pública en España, seguro cuando ese derecho no existe y afiliación prevista a la Seguridad Social española tras la autorización.', 'No se determina aquí si un convenio resulta aplicable al caso personal: depende del país, empleo y régimen de cobertura.'],
      en: ['Law 14/2013 governs the international telework visa and residence route.', 'UGE’s supporting-document guidance distinguishes a foreign certificate granting Spanish public-healthcare entitlement, insurance where that entitlement is absent, and planned affiliation to Spanish Social Security after authorisation.', 'This page does not determine whether a coordination agreement applies to an individual case; that depends on country, employment and coverage status.'],
    },
    practical: {
      es: ['Confirma primero si solicitas visado consular o autorización desde España.', 'Si te amparas en Seguridad Social extranjera, pregunta qué certificado oficial de cobertura exige la oficina.', 'Si necesitas póliza, contrasta fechas, certificado y alcance con el checklist oficial; no se promete aprobación.'],
      en: ['First confirm whether you are applying for a consular visa or an in-country residence authorisation.', 'If relying on foreign Social Security, ask which official coverage certificate the office requires.', 'If you need a policy, compare its dates, certificate and scope with the official checklist; approval is not promised.'],
    },
    dates: {
      es: ['La Ley 14/2013 prevé una duración máxima de un año para el visado, salvo que el trabajo dure menos; la autorización de residencia puede alcanzar tres años, con las condiciones legales aplicables.', 'La vigencia del seguro o certificado debe alinearse con la ruta concreta indicada por la autoridad.'],
      en: ['Law 14/2013 sets a maximum one-year visa term unless the work period is shorter; residence authorisation may last up to three years, subject to statutory conditions.', 'Insurance or coverage evidence must match the route specified by the authority.'],
    },
    documents: {
      es: ['La fuente oficial puede pedir certificado de seguro o certificado de derecho de cobertura del sistema de Seguridad Social aplicable.', 'NIE/documentación de identidad y presentación dependen de la oficina y del itinerario; comprueba la página oficial antes de contratar.'],
      en: ['The official source may request an insurance certificate or a certificate of entitlement under the applicable Social Security system.', 'NIE/identity-document and filing requirements depend on the office and route; check the official page before arranging cover.'],
    },
    consulates: {
      es: 'Las páginas oficiales de EE. UU., Colombia, Perú, Canadá y Argentina incluyen indicaciones específicas; el tracker enlaza las consultadas. Para México, el MVP enlaza UGE y deja pendiente la guía consular específica.',
      en: 'Official pages for the United States, Colombia, Peru, Canada and Argentina include route-specific instructions; the tracker links the pages reviewed. For Mexico, this MVP links UGE and flags the country-specific consular checklist for follow-up.',
    },
    sources: [
      { label: 'Ley 14/2013 — BOE, arts. 74 quater y quinquies', url: teleworkLaw, scope: 'Statutory visa and residence route, duration and renewal framework.' },
      { label: 'UGE — Autorizaciones y requisitos', url: uge, scope: 'Official unit responsible for Law 14/2013 authorisations.' },
      { label: 'UGE — Documentación de titulares', url: ugeEvidence, scope: 'Official supporting-document route for Social Security/health coverage.' },
      { label: 'Consulado de España en Bogotá — teletrabajo', url: 'https://www.exteriores.gob.es/Consulados/bogota/es/ServiciosConsulares/Paginas/index.aspx?scca=Visados&scco=Colombia&scd=31&scs=Visado+de+residencia+para+teletrabajo+%28n%C3%B3mada+digital%29', scope: 'Example of country-specific filing and insurance/coverage evidence.' },
      { label: 'Consulado de España en Lima — teletrabajo', url: 'https://www.exteriores.gob.es/Consulados/lima/es/ServiciosConsulares/Paginas/index.aspx?scca=Visados&scco=Per%C3%BA&scd=174&scs=Visado+de+residencia+para+teletrabajo+%28n%C3%B3mada+digital%29', scope: 'Peru-specific consular requirements.' },
    ],
  },
  tracker: {
    path: { es: trackerES, en: trackerEN },
    title: { es: 'Requisitos consulares de seguro médico: tracker', en: 'Consulate health-insurance requirements tracker' },
    description: {
      es: 'Comparativa trazable de fuentes oficiales enlazadas para estudios, residencia no lucrativa y teletrabajo internacional en seis jurisdicciones.',
      en: 'Traceable comparison of linked official sources for study, non-lucrative residence and international telework across six jurisdictions.',
    },
    answer: {
      es: 'Este tracker resume lo que se ha podido confirmar en fuentes oficiales enlazadas para seis jurisdicciones y tres tipos de trámite. Cada ficha distingue los datos confirmados de los campos desconocidos o pendientes de confirmar. La falta de un dato no significa que un requisito no exista: comprueba la oficina consular competente y su versión vigente antes de contratar o presentar documentos.',
      en: 'This tracker summarises what could be confirmed from linked official sources for six jurisdictions and three application types. Each record distinguishes confirmed details from fields that remain unknown or unconfirmed. Missing information does not mean a requirement does not exist: check the competent consular office and its current version before arranging cover or filing documents.',
    },
    officialRequirement: {
      es: ['La norma estatal y las instrucciones consulares son fuentes de alcance distinto; se enlazan por separado en cada ficha.', 'Se muestran Estados Unidos, México, Colombia, Perú, Canadá y Argentina, vinculados a las páginas oficiales de la demarcación consultada.'],
      en: ['National legislation and consular instructions have different scope; each record links the relevant source separately.', 'The MVP covers the United States, Mexico, Colombia, Peru, Canada and Argentina, using official pages for the cited consular district.'],
    },
    practical: {
      es: ['Usa la fila del tipo de trámite correcto y confirma que el enlace cubre tu lugar de residencia.', 'Cuando un campo diga “no indicado”, pregunta a la oficina consular en vez de inferir una respuesta.', 'Las condiciones del producto asegurador son distintas de los requisitos legales del expediente.'],
      en: ['Use the row for the correct application type and confirm that the linked office covers your place of residence.', 'If a field says “not stated”, ask the consulate rather than infer an answer.', 'Insurance-product terms are distinct from immigration-file requirements.'],
    },
    dates: {
      es: ['Última comprobación de fuentes incluidas: 13 de septiembre de 2026. Algunas páginas oficiales solo pudieron revisarse mediante extractos indexados; los campos no confirmados aparecen como desconocidos.', 'Las páginas consulares pueden cambiar sin que cambie la norma estatal; vuelve a abrir la fuente enlazada antes de presentar la solicitud.'],
      en: ['Sources in this version were last checked on 13 September 2026. Some official pages were reviewable only through indexed extracts; unconfirmed fields are marked unknown.', 'Consular pages can change independently of national legislation; reopen the linked source before filing.'],
    },
    documents: {
      es: ['“Desconocido” significa que no se confirmó en la fuente completa; “no indicado” solo se usa cuando una fuente revisada guarda silencio. Ninguno equivale a una exención.', 'El campo de certificado resume lo observado; el formato final lo define la oficina consular.'],
      en: ['“Unknown” means not confirmed from the complete source; “not stated” is used only when a reviewed source is silent. Neither status means exempt.', 'The certificate field summarises what was observed; the consular office sets the final format.'],
    },
    consulates: {
      es: 'Los ejemplos de EE. UU., México y Canadá corresponden a oficinas con demarcaciones específicas. Si resides fuera de ellas, selecciona la oficina que tenga competencia sobre tu domicilio. En México, la fila de estudios usa la página de la demarcación de Ciudad de México; la página de teletrabajo nacional de UGE no reemplaza un checklist consular.',
      en: 'The United States, Mexico and Canada examples refer to offices with specific consular districts. If you live elsewhere, use the office responsible for your residence. The Mexico study row links the Mexico City district; national UGE guidance for telework does not replace a consular checklist.',
    },
    sources: [
      { label: 'Real Decreto 1155/2024 — BOE', url: law, scope: 'National provisions for study and non-lucrative residence.' },
      { label: 'Ley 14/2013 — BOE', url: teleworkLaw, scope: 'International telework visa and residence provisions.' },
      { label: 'UGE — Autorizaciones y requisitos', url: uge, scope: 'Official international telework authorisation information.' },
    ],
  },
};

export const visaKnowledgeLastVerified = '2026-09-13';
export const visaKnowledgeSite = site.domain;
