import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { visaKnowledgeLastVerified, visaKnowledgePages, type VisaKnowledgePage, type VisaKnowledgePageKey } from '@/lib/visa-health-knowledge';
import { trackerFieldLabels, visaTrackerRecords, visaTypeLabels, type VisaType } from '@/lib/visa-health-tracker';

const base = 'https://valentinproteccionintegral.com';
const relatedLinks = {
  es: [
    { label: 'Seguro de salud para extranjeros (página de producto)', href: '/seguros/salud-extranjeros' },
    { label: 'Orientación para extranjeros', href: '/extranjeros' },
    { label: 'Contactar con VPI', href: '/contacto' },
  ],
  en: [
    { label: 'Health insurance for foreigners (product page)', href: '/en/insurance/health/foreigners' },
    { label: 'Guidance for people moving to Spain', href: '/en/foreigners' },
    { label: 'Contact VPI', href: '/en/contact' },
  ],
};

function getPath(key: VisaKnowledgePageKey, locale: 'es' | 'en') {
  return visaKnowledgePages[key].path[locale];
}

export function getVisaKnowledgeMetadata(key: VisaKnowledgePageKey, locale: 'es' | 'en'): Metadata {
  const page = visaKnowledgePages[key];
  const canonical = `${base}${page.path[locale]}`;
  const es = `${base}${page.path.es}`;
  const en = `${base}${page.path.en}`;
  const title = page.title[locale];
  const description = page.description[locale];
  return {
    title: `${title} | Valentín Protección Integral`,
    description,
    alternates: { canonical, languages: { es, en, 'x-default': es } },
    robots: { index: true, follow: true },
    openGraph: { title, description, url: canonical, type: 'website', locale: locale === 'en' ? 'en_GB' : 'es_ES' },
  };
}

function trackerLabel(locale: 'es' | 'en', type: VisaType) {
  return visaTypeLabels[locale][type];
}

function evidenceStatusLabel(locale: 'es' | 'en', status: string) {
  const es: Record<string, string> = { stated: 'indicado por la fuente', not_stated_in_source: 'no indicado en esta fuente revisada', unknown: 'no confirmado', conditional: 'condicional', local_check_required: 'confirmar localmente' };
  const en: Record<string, string> = { stated: 'stated by source', not_stated_in_source: 'not stated in reviewed source', unknown: 'unconfirmed', conditional: 'conditional', local_check_required: 'local confirmation required' };
  return (locale === 'es' ? es : en)[status] ?? status;
}

function Tracker({ locale }: { locale: 'es' | 'en' }) {
  const labels = trackerFieldLabels[locale];
  const fields = Object.keys(labels) as (keyof typeof labels)[];
  const countries = [...new Set(visaTrackerRecords.map((record) => record.jurisdiction))];
  return (
    <section aria-labelledby="tracker-records" className="mt-10">
      <h2 id="tracker-records" className="text-2xl font-bold text-[var(--blue-deep)]">{locale === 'es' ? 'Fuentes por jurisdicción y visado' : 'Sources by jurisdiction and visa'}</h2>
      <div className="mt-5 space-y-4">
        {countries.map((country) => (
          <details key={country} className="rounded-2xl border border-slate-200 bg-white p-5">
            <summary className="cursor-pointer text-lg font-bold text-[var(--blue-deep)]">{country}</summary>
            <div className="mt-4 space-y-4">
              {visaTrackerRecords.filter((record) => record.jurisdiction === country).map((record) => (
                <details key={`${record.jurisdictionCode}-${record.visaType}`} className="rounded-xl border border-slate-100 bg-slate-50 p-4">
                  <summary className="cursor-pointer font-semibold">{trackerLabel(locale, record.visaType)}</summary>
                  <dl className="mt-3 grid gap-x-6 gap-y-3 sm:grid-cols-2">
                    <div><dt className="font-semibold">{locale === 'es' ? 'Seguro exigido' : 'Insurance requirement'}</dt><dd>{record.insuranceRequirement.value}<span className="mt-1 block text-xs text-slate-500">{locale === 'es' ? 'Estado: ' : 'Status: '}{evidenceStatusLabel(locale, record.insuranceRequirement.status)}</span></dd></div>
                    {fields.slice(1).map((field) => <div key={field}><dt className="font-semibold">{labels[field]}</dt><dd>{record[field].value}<span className="mt-1 block text-xs text-slate-500">{locale === 'es' ? 'Estado: ' : 'Status: '}{evidenceStatusLabel(locale, record[field].status)}</span></dd></div>)}
                    <div><dt className="font-semibold">{locale === 'es' ? 'Estado de evidencia' : 'Evidence status'}</dt><dd>{locale === 'es' ? 'Resumen de la fuente oficial enlazada; “no indicado” no equivale a exención.' : 'Summary of the linked official source; “not stated” does not mean exempt.'}</dd></div>
                  </dl>
                  <p className="mt-3 text-sm text-slate-600">{record.notes}</p>
                  <p className="mt-2 text-sm">{locale === 'es' ? 'Última verificación:' : 'Last checked:'} <time dateTime={record.lastVerified}>{record.lastVerified}</time></p>
                  <p className="mt-2"><a className="font-semibold text-[var(--blue)] underline" href={record.officialSourceUrl} target="_blank" rel="noreferrer">{locale === 'es' ? 'Abrir fuente oficial: ' : 'Open official source: '}{record.officialSourceLabel}</a></p>
                  <p className="mt-1 text-sm"><a className="font-semibold text-[var(--blue)] underline" href={record.nationalRuleSourceUrl} target="_blank" rel="noreferrer">{locale === 'es' ? 'Norma / guía estatal: ' : 'National rule / guidance: '}{record.nationalRuleSourceLabel}</a></p>
                </details>
              ))}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}

function VisaPageBody({ page, locale, pageKey }: { page: VisaKnowledgePage; locale: 'es' | 'en'; pageKey: VisaKnowledgePageKey }) {
  const en = locale === 'en';
  const current = page.path[locale];
  const breadcrumb = [
    { label: en ? 'Home' : 'Inicio', href: en ? '/en' : '/' },
    { label: en ? 'Visa health insurance' : 'Seguro médico para visados', href: getPath('hub', locale) },
    ...(pageKey !== 'hub' ? [{ label: page.title[locale], href: current }] : []),
  ];
  const webPage = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${base}${current}#webpage`,
    url: `${base}${current}`,
    name: page.title[locale],
    description: page.description[locale],
    inLanguage: locale,
    dateModified: visaKnowledgeLastVerified,
  };
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumb.map((item, index) => ({ '@type': 'ListItem', position: index + 1, name: item.label, item: `${base}${item.href}` })),
  };
  const commonSections = [
    { title: en ? 'Official requirement' : 'Requisito oficial', items: page.officialRequirement[locale] },
    { title: en ? 'What this means in practice' : 'Qué significa en la práctica', items: page.practical[locale] },
    { title: en ? 'Dates and coverage period' : 'Fechas y periodo de cobertura', items: page.dates[locale] },
    { title: en ? 'Certificate and documents' : 'Certificado y documentación', items: page.documents[locale] },
  ];

  return (
    <>
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([webPage, breadcrumbSchema]) }} />
      <main className="section-pad min-h-screen bg-white pt-28">
        <div className="container-shell max-w-5xl">
          <nav aria-label={en ? 'Breadcrumb' : 'Migas de pan'} className="mb-5 text-sm text-slate-600">
            {breadcrumb.map((item, index) => <span key={item.href}>{index > 0 && ' / '}<Link href={item.href} className="underline underline-offset-4">{item.label}</Link></span>)}
          </nav>
          <header className="max-w-4xl">
            <p className="kicker">{en ? 'SPAIN VISA · HEALTH COVER' : 'VISADOS EN ESPAÑA · SEGURO MÉDICO'}</p>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-[var(--blue-deep)] md:text-5xl">{page.title[locale]}</h1>
            <p className="mt-6 rounded-xl border-l-4 border-[var(--green)] bg-slate-50 p-5 text-lg leading-relaxed text-slate-800">{page.answer[locale]}</p>
            <p className="mt-3 text-sm text-slate-600">{en ? 'Last reviewed:' : 'Última revisión:'} <time dateTime={visaKnowledgeLastVerified}>{new Date(`${visaKnowledgeLastVerified}T12:00:00Z`).toLocaleDateString(en ? 'en-GB' : 'es-ES', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' })}</time></p>
          </header>

          {pageKey === 'tracker' ? <Tracker locale={locale} /> : (
            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {commonSections.map((section) => (
                <section key={section.title} className="rounded-2xl border border-slate-200 p-5">
                  <h2 className="text-xl font-bold text-[var(--blue-deep)]">{section.title}</h2>
                  <ul className="mt-3 list-disc space-y-2 pl-5 leading-relaxed text-slate-700">{section.items.map((item) => <li key={item}>{item}</li>)}</ul>
                </section>
              ))}
            </div>
          )}

          <section className="mt-8 rounded-2xl bg-blue-50 p-5">
            <h2 className="text-xl font-bold text-[var(--blue-deep)]">{en ? 'Consulate differences' : 'Diferencias entre consulados'}</h2>
      <p className="mt-2 leading-relaxed text-slate-700">{page.consulates[locale]}</p>
          </section>

          {pageKey === 'hub' && (
            <section className="mt-8" aria-labelledby="visa-route-guides">
              <h2 id="visa-route-guides" className="text-xl font-bold text-[var(--blue-deep)]">{en ? 'Choose the immigration route' : 'Elige el trámite'}</h2>
              <div className="mt-3 grid gap-3 sm:grid-cols-3">
                {(['student', 'nonLucrative', 'digitalNomad'] as const).map((key) => <Link key={key} href={getPath(key, locale)} className="rounded-xl border border-slate-200 p-4 font-semibold text-[var(--blue)] underline underline-offset-4">{visaKnowledgePages[key].title[locale]} →</Link>)}
              </div>
            </section>
          )}

          {pageKey === 'hub' && (
            <section className="mt-8 rounded-2xl border border-slate-200 p-5" aria-labelledby="passport-process">
              <h2 id="passport-process" className="text-xl font-bold text-[var(--blue-deep)]">{en ? 'Before arrival and applying without an NIE' : 'Antes de llegar y consultas sin NIE'}</h2>
              <p className="mt-2 leading-relaxed text-slate-700">{en ? 'You can ask VPI about the operational process using your passport while your NIE is pending. This is practical guidance, not a statement that every insurer or consulate accepts the same documents. Confirm the identity details, effective dates and certificate format before issue.' : 'Puedes consultar con VPI el proceso operativo usando tu pasaporte mientras esperas el NIE. Esto es orientación práctica, no una afirmación de que todas las aseguradoras o consulados acepten los mismos documentos. Confirma los datos identificativos, fechas de efecto y formato del certificado antes de emitir.'}</p>
            </section>
          )}

          <section className="mt-8 rounded-2xl border border-slate-200 p-5" aria-labelledby="official-sources">
            <h2 id="official-sources" className="text-xl font-bold text-[var(--blue-deep)]">{en ? 'Official sources' : 'Fuentes oficiales'}</h2>
            <ul className="mt-3 space-y-3">{page.sources.map((source) => <li key={source.url} className="leading-relaxed"><a className="font-semibold text-[var(--blue)] underline underline-offset-4" href={source.url} target="_blank" rel="noreferrer">{source.label}</a><span className="block text-sm text-slate-600">{source.scope}</span></li>)}</ul>
          </section>

          <section className="mt-8 rounded-2xl bg-slate-50 p-5" aria-labelledby="vpi-interpretation">
            <h2 id="vpi-interpretation" className="text-xl font-bold text-[var(--blue-deep)]">{en ? 'VPI operational interpretation' : 'Orientación operativa de VPI'}</h2>
            <p className="mt-2 leading-relaxed text-slate-700">{pageKey === 'tracker'
              ? (en ? 'The tracker helps identify which insurance documents to confirm with the competent office. VPI can explain available insurance arrangements; the insurer issues the policy and the authority decides the immigration application. This page is not legal advice.' : 'El tracker ayuda a identificar qué documentos de seguro confirmar con la oficina competente. VPI puede explicar las modalidades disponibles; la aseguradora emite la póliza y la autoridad decide el expediente migratorio. Esta página no es asesoramiento jurídico.')
              : (en ? 'VPI is the commercial insurance mediation brand/project. We can help review available insurance arrangements; ASISA issues the ASISA policy. Product terms and the competent authority’s assessment remain separate.' : 'VPI es la marca/proyecto comercial de mediación de seguros. Podemos ayudar a revisar las modalidades disponibles; ASISA emite la póliza ASISA. Las condiciones del producto y la valoración de la autoridad competente son cuestiones distintas.')}</p>
          </section>

          <nav aria-label={en ? 'Related pages' : 'Páginas relacionadas'} className="mt-8 flex flex-wrap gap-x-6 gap-y-3 border-t border-slate-200 py-6">
            {relatedLinks[locale].map((link) => <Link key={link.href} href={link.href} className="font-semibold text-[var(--blue)] underline underline-offset-4">{link.label} →</Link>)}
            {pageKey !== 'tracker' && <Link href={getPath('tracker', locale)} className="font-semibold text-[var(--blue)] underline underline-offset-4">{en ? 'Open consulate tracker' : 'Abrir tracker consular'} →</Link>}
            {pageKey === 'tracker' && <Link href={getPath('hub', locale)} className="font-semibold text-[var(--blue)] underline underline-offset-4">{en ? 'Visa-health hub' : 'Hub de seguro para visados'} →</Link>}
          </nav>
        </div>
      </main>
      <Footer />
    </>
  );
}

export function VisaHealthKnowledgePage({ pageKey, locale }: { pageKey: VisaKnowledgePageKey; locale: 'es' | 'en' }) {
  return <VisaPageBody page={visaKnowledgePages[pageKey]} locale={locale} pageKey={pageKey} />;
}
