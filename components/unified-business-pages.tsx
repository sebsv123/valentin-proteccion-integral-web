import Link from 'next/link';
import Script from 'next/script';
import { ArrowRight, BriefcaseBusiness, Building2, CheckCircle2, ShieldCheck } from 'lucide-react';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { BusinessHealthLeadFormSection } from '@/components/business-health-lead-form-section';
import { buildWhatsAppHref, site } from '@/lib/products';

type Locale = 'es' | 'en';

const copy = {
  es: {
    branchLabel: 'EMPRESAS Y AUTÓNOMOS',
    branchTitle: 'Soluciones para empresas y autónomos',
    branchIntro: 'VPI te ayuda a revisar las soluciones que realmente distribuye para proteger a tu equipo, tu actividad y la continuidad de tu negocio. Hoy esta rama reúne salud y ciberseguridad; cada propuesta depende del producto y de sus condiciones.',
    healthLabel: 'SALUD PARA EMPRESAS Y AUTÓNOMOS',
    healthTitle: 'Seguro de salud para autónomos y pymes',
    healthIntro: 'La decisión empieza por el uso que esperas hacer del seguro y por quién necesita cobertura. Después se revisan la modalidad, la composición del colectivo, la documentación y la forma de asumir el coste.',
    cyberLabel: 'CIBERPROTECCIÓN PARA EMPRESAS',
    cyberTitle: 'Preparar la respuesta ante un incidente digital',
    cyberText: 'Una solución de ciberseguridad debe estudiarse según la actividad, los sistemas y el nivel de exposición de cada negocio.',
    caseTitle: '¿Cuál es tu caso?',
    solo: 'Soy autónomo',
    company: 'Represento una empresa',
    soloTitle: 'Si eres autónomo',
    soloText: 'Si buscas cobertura solo para ti, no necesitas encajar a la fuerza en una solución colectiva. Puedes revisar primero la salud individual y, si quieres asegurar a otra persona, estudiar la opción de salud para autónomos y pymes.',
    groupTitle: 'Si quieres asegurar a más personas',
    groupText: 'En la familia de productos ASISA PYMES que estamos revisando, la contratación se estudia desde un mínimo de 2 asegurados. La composición admitida, la documentación y la modalidad concreta deben confirmarse antes de preparar la propuesta.',
    companyTitle: 'Si representas una empresa',
    companyText: 'Conviene concretar cuántas personas participarán, a quién se quiere asegurar, la modalidad de cobertura, la provincia, la fecha prevista y cómo se plantea la aportación de la empresa y del equipo.',
    coverageTitle: 'Una decisión común de cobertura',
    coverageIntro: 'Autónomos y empresas pueden volver a la misma pregunta: qué uso esperan hacer del seguro. Estas son las tres familias de decisión; la cobertura final siempre depende del producto y la póliza.',
    outpatient: 'AMBULATORIA', outpatientText: 'Consultas, especialistas y pruebas según la modalidad, sin asumir que incluye hospitalización.',
    comprehensive: 'COMPLETA', comprehensiveText: 'Puede añadir hospitalización y cirugía según las condiciones de la modalidad elegida.',
    reimbursement: 'REEMBOLSO', reimbursementText: 'Puede combinar cuadro médico y uso de profesionales elegibles fuera del cuadro, conforme a la póliza.',
    taxTitle: 'Seguro y fiscalidad son dos decisiones distintas',
    taxIntro: 'Primero comprueba que la cobertura encaja contigo o con tu equipo. Después revisa si la prima puede recibir el tratamiento fiscal aplicable. Un límite de gasto deducible no equivale a una devolución automática.',
    selfTaxTitle: 'Autónomo: el marco de estimación directa',
    selfTaxText: 'La regla de IRPF para determinar el rendimiento neto en estimación directa puede considerar las primas pagadas por el contribuyente para su cobertura, la de su cónyuge y la de hijos menores de 25 años que convivan con él. El límite es de 500 € por cada persona elegible y de 1.500 € cuando existe discapacidad, siempre sujeto a requisitos y circunstancias.',
    companyTaxTitle: 'Empresa y trabajador: otro encaje fiscal',
    companyTaxText: 'Cuando la empresa paga primas de enfermedad para una persona trabajadora, la exención de retribución en especie tiene sus propios requisitos y límites legales, incluida la cobertura del trabajador, cónyuge y descendientes en los términos aplicables. No es automáticamente la misma situación que la del autónomo.',
    taxWarning: 'Los 500 € o 1.500 € son límites de gasto o de exención según el supuesto legal; no significan que Hacienda devuelva esa cantidad ni que reduzcan la cuota euro por euro. VPI orienta sobre el seguro, pero VPI no presta asesoramiento fiscal individual ni presenta la declaración.',
    sources: 'Fuentes oficiales para revisar el alcance',
    aeat: 'Agencia Tributaria — primas de seguro de enfermedad',
    boe: 'BOE — Ley del IRPF, artículo 30',
    boeWork: 'BOE — Ley del IRPF, artículo 42',
    boeWorkDetail: 'BOE — Reglamento del IRPF, artículo 46',
    cta: 'Solicitar estudio',
    ctaText: 'Revisamos contigo el perfil, el número de personas, el uso previsto y las condiciones que conviene comprobar.',
    audienceTitle: 'Seguros y soluciones para autónomos',
    audienceIntro: 'Si trabajas por cuenta propia, VPI te ayuda a ordenar primero la necesidad y después la solución real que puede estudiarse. Salud para tu actividad y ciberseguridad son caminos distintos dentro de la rama Empresas y Autónomos.',
    audienceHealth: 'Ver salud para autónomos y pymes',
    audienceHealthText: 'Si necesitas salud para ti y otra persona, o para un pequeño colectivo, empieza por la experiencia unificada de salud.',
    audienceCyber: 'Ver ciberseguridad',
    audienceCyberText: 'Si tu consulta trata de sistemas, datos o incidentes digitales, revisa esta solución específica.',
    audienceTax: 'La fiscalidad se revisa después de elegir cobertura. El marco de estimación directa, la composición familiar y quién paga la prima pueden cambiar el análisis. Consulta la fuente oficial o a tu asesor fiscal.',
    branchCta: 'Hablar sobre mi caso',
  },
  en: {
    branchLabel: 'BUSINESSES & SELF-EMPLOYED',
    branchTitle: 'Solutions for businesses and self-employed professionals',
    branchIntro: 'VPI helps you review the solutions it actually distributes to protect your team, activity and business continuity. This branch currently brings together health insurance and cybersecurity; each proposal depends on its product terms.',
    healthLabel: 'HEALTH FOR BUSINESSES & SELF-EMPLOYED',
    healthTitle: 'Health insurance for self-employed professionals and SMEs',
    healthIntro: 'The decision starts with how you expect to use the policy and who needs cover. Then we review the modality, group composition, documentation and how the cost may be shared.',
    cyberLabel: 'CYBERSECURITY FOR BUSINESSES',
    cyberTitle: 'Prepare to respond to a digital incident',
    cyberText: 'A cybersecurity solution should be assessed against each business activity, system and level of exposure.',
    caseTitle: 'Which best describes you?',
    solo: 'I am self-employed',
    company: 'I represent a business',
    soloTitle: 'If you are self-employed',
    soloText: 'If you need cover only for yourself, you do not need to force your situation into a group solution. You can first review individual health insurance and, if you want to cover another person, explore the health route for self-employed professionals and SMEs.',
    groupTitle: 'If you want to cover more people',
    groupText: 'For the ASISA PYMES product family we are reviewing, contracting is studied from a minimum of 2 insured people. The permitted composition, documents and specific modality must be confirmed before a proposal is prepared.',
    companyTitle: 'If you represent a business',
    companyText: 'It helps to define the approximate number of people, who will be insured, the cover level, province, expected start date and how the business and team may share the cost.',
    coverageTitle: 'One shared coverage decision',
    coverageIntro: 'Self-employed professionals and businesses can return to the same question: how will they use the policy? These are the three decision families; final cover always depends on the product and policy.',
    outpatient: 'OUTPATIENT', outpatientText: 'Consultations, specialists and tests according to the modality; do not assume hospital cover is included.',
    comprehensive: 'COMPREHENSIVE', comprehensiveText: 'May add hospital treatment and surgery according to the selected modality terms.',
    reimbursement: 'REIMBURSEMENT', reimbursementText: 'May combine network cover with eligible outside-network providers under the policy terms.',
    taxTitle: 'Insurance and tax treatment are separate questions',
    taxIntro: 'First check that the cover fits you or your team. Then review whether the premium may receive the applicable tax treatment. A deductible-expense limit is not an automatic refund.',
    selfTaxTitle: 'Self-employed: the direct-estimation framework',
    selfTaxText: 'The Spanish personal income tax rule for calculating net income under direct estimation may consider premiums paid by the taxpayer for their own cover, their spouse and children under 25 who live with them. The limit is €500 per eligible person and €1,500 per eligible person with a disability, subject to the applicable requirements and circumstances.',
    companyTaxTitle: 'Business and employee: a different tax framework',
    companyTaxText: 'When a business pays illness-insurance premiums for an employee, the in-kind employment-income exemption has its own legal requirements and limits, including cover for the employee, spouse and descendants under the applicable terms. It is not automatically the same situation as a self-employed taxpayer.',
    taxWarning: 'The €500 and €1,500 figures are statutory expense or exemption limits depending on the legal case; they do not mean that the tax authority refunds that amount or reduces tax payable euro for euro. VPI guides customers on insurance, but does not provide individual tax advice or file tax returns.',
    sources: 'Official sources for checking the scope',
    aeat: 'Spanish Tax Agency — health-insurance premiums',
    boe: 'BOE — Spanish Personal Income Tax Act, Article 30',
    boeWork: 'BOE — Spanish Personal Income Tax Act, Article 42',
    boeWorkDetail: 'BOE — Spanish Personal Income Tax Regulations, Article 46',
    cta: 'Request a review',
    ctaText: 'We can review your profile, number of people, expected use and the policy conditions worth checking.',
    audienceTitle: 'Insurance and solutions for self-employed professionals',
    audienceIntro: 'If you work for yourself, VPI helps you clarify the need first and then the real solution that can be reviewed. Health insurance for your activity and cybersecurity are different paths within the Businesses & Self-employed branch.',
    audienceHealth: 'View health for self-employed professionals and SMEs',
    audienceHealthText: 'If you need health cover for yourself and another person, or for a small group, start with the unified health experience.',
    audienceCyber: 'View cybersecurity',
    audienceCyberText: 'If your question concerns systems, data or digital incidents, review this specific solution.',
    audienceTax: 'Tax treatment comes after the coverage decision. The direct-estimation framework, family composition and who pays the premium may change the analysis. Check the official source or ask your tax adviser.',
    branchCta: 'Discuss my situation',
  },
} as const;

function JsonLd({ locale, type }: { locale: Locale; type: 'branch' | 'health' | 'audience' }) {
  const en = locale === 'en';
  const url = type === 'branch' ? `${site.domain}${en ? '/en/business' : '/empresas'}` : type === 'health' ? `${site.domain}${en ? '/en/business/health-insurance' : '/empresas/salud'}` : `${site.domain}${en ? '/en/for/self-employed' : '/autonomos'}`;
  const name = type === 'branch' ? (en ? 'Solutions for businesses and self-employed professionals' : 'Soluciones para empresas y autónomos') : type === 'health' ? (en ? 'Health insurance for self-employed professionals and SMEs' : 'Seguro de salud para autónomos y pymes') : (en ? 'Insurance and solutions for self-employed professionals' : 'Seguros y soluciones para autónomos');
  return <Script id={`unified-business-${type}-${locale}-jsonld`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': type === 'audience' ? 'WebPage' : type === 'branch' ? 'CollectionPage' : 'Service', name, url, provider: { '@id': `${site.domain}/#organization` }, isPartOf: { '@id': `${site.domain}/#website` } }) }} />;
}
function Shell({ children, locale, crumb }: { children: React.ReactNode; locale: Locale; crumb: string }) {
  const c = copy[locale];
  return <><Header /><main className="min-h-screen bg-white"><div className="container-shell pt-6 md:pt-8"><Breadcrumbs items={[{ label: locale === 'en' ? 'Home' : 'Inicio', href: locale === 'en' ? '/en' : '/' }, { label: locale === 'en' ? 'Businesses & Self-employed' : 'Empresas y Autónomos', href: locale === 'en' ? '/en/business' : '/empresas' }, ...(crumb ? [{ label: crumb }] : [])]} /></div>{children}</main><Footer /></>;
}

export function BusinessBranchPage({ locale }: { locale: Locale }) {
  const c = copy[locale];
  const en = locale === 'en';
  return <Shell locale={locale} crumb=""><JsonLd locale={locale} type="branch" /><section className="container-shell py-16 md:py-24"><p className="mb-4 text-sm font-semibold tracking-[0.18em] text-indigo-700">{c.branchLabel}</p><h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-slate-950 md:text-6xl">{c.branchTitle}</h1><p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">{c.branchIntro}</p><div className="mt-12 grid gap-6 md:grid-cols-2"><article className="rounded-3xl border border-slate-200 bg-slate-50 p-8"><Building2 className="h-8 w-8 text-indigo-700" aria-hidden="true" /><p className="mt-6 text-sm font-semibold tracking-[0.16em] text-indigo-700">{c.healthLabel}</p><h2 className="mt-3 text-2xl font-semibold text-slate-950">{c.healthTitle}</h2><p className="mt-4 leading-7 text-slate-600">{en ? 'A shared health path for self-employed professionals, teams and SMEs, with the modality and composition reviewed case by case.' : 'Una ruta común de salud para autónomos, equipos y pymes, revisando la modalidad y la composición caso por caso.'}</p><Link className="mt-7 inline-flex items-center gap-2 font-semibold text-indigo-700" href={en ? '/en/business/health-insurance' : '/empresas/salud'}>{en ? 'Review business health' : 'Revisar salud para empresas y autónomos'} <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link></article><article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"><ShieldCheck className="h-8 w-8 text-indigo-700" aria-hidden="true" /><p className="mt-6 text-sm font-semibold tracking-[0.16em] text-indigo-700">{c.cyberLabel}</p><h2 className="mt-3 text-2xl font-semibold text-slate-950">{c.cyberTitle}</h2><p className="mt-4 leading-7 text-slate-600">{c.cyberText}</p><Link className="mt-7 inline-flex items-center gap-2 font-semibold text-indigo-700" href={en ? '/en/business/cybersecurity' : '/empresas/ciberseguridad'}>{en ? 'Review cybersecurity' : 'Revisar ciberseguridad'} <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link></article></div><div className="mt-10 rounded-2xl border border-indigo-100 bg-indigo-50 p-6 text-slate-700"><p className="font-semibold text-slate-950">{en ? 'Need help choosing the right path?' : '¿No sabes por dónde empezar?'}</p><p className="mt-2">{c.branchIntro}</p><a className="mt-4 inline-flex items-center gap-2 font-semibold text-indigo-700" href={buildWhatsAppHref(en ? 'Hello, I would like guidance on business and self-employed solutions.' : 'Hola, quiero orientación sobre soluciones para empresas y autónomos.')}>{c.branchCta} <ArrowRight className="h-4 w-4" aria-hidden="true" /></a></div></section></Shell>;
}

function TaxBlock({ locale }: { locale: Locale }) {
  const c = copy[locale];
  return <section id="fiscalidad" className="container-shell border-t border-slate-200 py-16" aria-labelledby="tax-title"><p className="text-sm font-semibold tracking-[0.16em] text-indigo-700">{locale === 'en' ? 'TAX SCOPE' : 'ALCANCE FISCAL'}</p><h2 id="tax-title" className="mt-3 max-w-3xl text-3xl font-semibold text-slate-950 md:text-4xl">{c.taxTitle}</h2><p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">{c.taxIntro}</p><div className="mt-10 grid gap-6 lg:grid-cols-2"><article className="rounded-3xl bg-slate-950 p-7 text-white"><h3 className="text-xl font-semibold">{c.selfTaxTitle}</h3><p className="mt-4 leading-7 text-slate-200">{c.selfTaxText}</p><p className="mt-4 font-semibold text-indigo-200">{locale === 'en' ? '€500 per eligible person · €1,500 per eligible person with a disability' : '500 € por cada persona elegible · 1.500 € por cada persona elegible con discapacidad'}</p></article><article className="rounded-3xl border border-slate-200 bg-white p-7"><h3 className="text-xl font-semibold text-slate-950">{c.companyTaxTitle}</h3><p className="mt-4 leading-7 text-slate-600">{c.companyTaxText}</p></article></div><div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-6 text-slate-800"><p className="font-semibold">{c.taxWarning}</p></div><div className="mt-8"><h3 className="text-lg font-semibold text-slate-950">{c.sources}</h3><div className="mt-4 flex flex-wrap gap-3"><a className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-indigo-700 hover:bg-slate-50" href="https://sede.agenciatributaria.gob.es/Sede/ayuda/manuales-videos-folletos/manuales-ayuda-presentacion/irpf-2025/7-cumplimentacion-irpf/7_4-rendimientos-actividades-economicas/7_4_2-regimen-estimacion-directa/7_4_2_3-gastos-fiscalmente-deducibles/otros-gastos-personal.html" target="_blank" rel="noopener noreferrer">{c.aeat}</a><a className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-indigo-700 hover:bg-slate-50" href="https://www.boe.es/eli/es/l/2006/11/28/35/con" target="_blank" rel="noopener noreferrer">{c.boe}</a><a className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-indigo-700 hover:bg-slate-50" href="https://boe.es/buscar/act.php?id=BOE-A-2006-20764&p=20221222&tn=1" target="_blank" rel="noopener noreferrer">{c.boeWork}</a><a className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-indigo-700 hover:bg-slate-50" href="https://boe.es/buscar/act.php?id=BOE-A-2007-6820&p=20231228&tn=0" target="_blank" rel="noopener noreferrer">{c.boeWorkDetail}</a></div></div></section>;
}

export function UnifiedBusinessHealthPage({ locale }: { locale: Locale }) {
  const c = copy[locale];
  const en = locale === 'en';
  return <Shell locale={locale} crumb={en ? 'Health' : 'Salud'}><JsonLd locale={locale} type="health" /><section className="container-shell py-14 md:py-20"><p className="text-sm font-semibold tracking-[0.16em] text-indigo-700">{c.healthLabel}</p><h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-slate-950 md:text-6xl">{c.healthTitle}</h1><p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">{c.healthIntro}</p><div className="mt-9 flex flex-wrap gap-3" role="group" aria-label={c.caseTitle}><a href="#autonomos" className="rounded-full bg-indigo-700 px-5 py-3 font-semibold text-white">{c.solo}</a><a href="#empresa" className="rounded-full border border-slate-300 px-5 py-3 font-semibold text-slate-900">{c.company}</a></div><p className="mt-4 text-sm text-slate-500">{en ? 'These are accessible page links; no script is needed to reach either path.' : 'Son enlaces accesibles dentro de la página; no necesitas activar ningún script para seguir cada ruta.'}</p></section><section className="container-shell grid gap-6 border-t border-slate-200 py-16 md:grid-cols-2" aria-labelledby="case-title"><h2 id="case-title" className="md:col-span-2 text-3xl font-semibold text-slate-950">{c.caseTitle}</h2><article id="autonomos" className="scroll-mt-24 rounded-3xl border border-indigo-200 bg-indigo-50 p-8"><BriefcaseBusiness className="h-8 w-8 text-indigo-700" aria-hidden="true" /><h3 className="mt-6 text-2xl font-semibold text-slate-950">{c.soloTitle}</h3><p className="mt-4 leading-7 text-slate-700">{c.soloText}</p><div className="mt-6 flex flex-wrap gap-3"><Link href={en ? '/en/insurance/health' : '/seguros/salud'} className="rounded-full bg-indigo-700 px-4 py-2 font-semibold text-white">{en ? 'Review individual health' : 'Revisar salud individual'}</Link><a href="#solicitar-estudio" className="rounded-full border border-indigo-300 px-4 py-2 font-semibold text-indigo-800">{c.cta}</a></div><div className="mt-7 rounded-2xl bg-white/70 p-5"><h4 className="font-semibold text-slate-950">{c.groupTitle}</h4><p className="mt-2 text-sm leading-6 text-slate-700">{c.groupText}</p></div></article><article id="empresa" className="scroll-mt-24 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"><Building2 className="h-8 w-8 text-indigo-700" aria-hidden="true" /><h3 className="mt-6 text-2xl font-semibold text-slate-950">{c.companyTitle}</h3><p className="mt-4 leading-7 text-slate-700">{c.companyText}</p><ul className="mt-6 space-y-3 text-slate-700"><li className="flex gap-3"><CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-indigo-700" aria-hidden="true" />{en ? 'People and expected composition' : 'Personas y composición prevista'}</li><li className="flex gap-3"><CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-indigo-700" aria-hidden="true" />{en ? 'Coverage level and province' : 'Nivel de cobertura y provincia'}</li><li className="flex gap-3"><CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-indigo-700" aria-hidden="true" />{en ? 'Expected date and contribution model' : 'Fecha prevista y forma de aportación'}</li></ul><a href="#solicitar-estudio" className="mt-7 inline-flex rounded-full bg-slate-950 px-5 py-3 font-semibold text-white">{c.cta}</a></article></section><section className="container-shell border-t border-slate-200 py-16" aria-labelledby="coverage-title"><h2 id="coverage-title" className="text-3xl font-semibold text-slate-950">{c.coverageTitle}</h2><p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">{c.coverageIntro}</p><div className="mt-8 grid gap-5 md:grid-cols-3"><CoverageCard title={c.outpatient} text={c.outpatientText} /><CoverageCard title={c.comprehensive} text={c.comprehensiveText} /><CoverageCard title={c.reimbursement} text={c.reimbursementText} /></div></section><TaxBlock locale={locale} /><section className="container-shell border-t border-slate-200 py-16" aria-labelledby="next-title"><h2 id="next-title" className="text-3xl font-semibold text-slate-950">{en ? 'What happens next?' : '¿Qué ocurre después?'}</h2><p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">{c.ctaText}</p><div className="mt-7 flex flex-wrap gap-4"><a href="#solicitar-estudio" className="rounded-full bg-indigo-700 px-5 py-3 font-semibold text-white">{c.cta}</a><a href={buildWhatsAppHref(en ? 'Hello, I want to review health insurance for self-employed professionals or a business.' : 'Hola, quiero revisar salud para autónomos o una empresa.')} className="rounded-full border border-slate-300 px-5 py-3 font-semibold text-slate-900">WhatsApp</a></div></section><BusinessHealthLeadFormSection locale={locale} /></Shell>;
}

function CoverageCard({ title, text }: { title: string; text: string }) { return <article className="rounded-3xl border border-slate-200 bg-slate-50 p-6"><p className="text-sm font-bold tracking-[0.16em] text-indigo-700">{title}</p><p className="mt-4 leading-7 text-slate-700">{text}</p></article>; }

export function SelfEmployedAudiencePage({ locale }: { locale: Locale }) {
  const c = copy[locale];
  const en = locale === 'en';
  return <Shell locale={locale} crumb=""><JsonLd locale={locale} type="audience" /><section className="container-shell py-16 md:py-24"><p className="text-sm font-semibold tracking-[0.16em] text-indigo-700">{en ? 'FOR SELF-EMPLOYED PROFESSIONALS' : 'PARA AUTÓNOMOS'}</p><h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-slate-950 md:text-6xl">{c.audienceTitle}</h1><p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">{c.audienceIntro}</p><div className="mt-10 grid gap-5 md:grid-cols-2"><article className="rounded-3xl border border-indigo-200 bg-indigo-50 p-8"><Building2 className="h-8 w-8 text-indigo-700" aria-hidden="true" /><h2 className="mt-5 text-2xl font-semibold text-slate-950">{c.audienceHealth}</h2><p className="mt-3 leading-7 text-slate-700">{c.audienceHealthText}</p><Link href={en ? '/en/business/health-insurance' : '/empresas/salud'} className="mt-6 inline-flex items-center gap-2 font-semibold text-indigo-700">{c.audienceHealth} <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link></article><article className="rounded-3xl border border-slate-200 p-8"><ShieldCheck className="h-8 w-8 text-indigo-700" aria-hidden="true" /><h2 className="mt-5 text-2xl font-semibold text-slate-950">{c.audienceCyber}</h2><p className="mt-3 leading-7 text-slate-700">{c.audienceCyberText}</p><Link href={en ? '/en/business/cybersecurity' : '/empresas/ciberseguridad'} className="mt-6 inline-flex items-center gap-2 font-semibold text-indigo-700">{c.audienceCyber} <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link></article></div><section className="mt-8 rounded-3xl border border-slate-200 bg-white p-8" aria-labelledby="audience-tax-title"><h2 id="audience-tax-title" className="text-2xl font-semibold text-slate-950">{en ? 'Coverage first. Tax treatment second.' : 'Primero la cobertura. Después, la fiscalidad.'}</h2><p className="mt-4 max-w-3xl leading-7 text-slate-700">{c.audienceTax}</p><Link href={en ? '/en/business/health-insurance#fiscalidad' : '/empresas/salud#fiscalidad'} className="mt-5 inline-flex items-center gap-2 font-semibold text-indigo-700">{en ? 'Review the tax scope' : 'Revisar el alcance fiscal'} <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link></section></section></Shell>;
}
