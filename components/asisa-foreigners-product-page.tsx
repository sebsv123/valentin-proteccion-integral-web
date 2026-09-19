import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { Header } from '@/components/header';
import { buildWhatsAppHref } from '@/lib/products';
import {
  getAsisaForeignersProduct,
  getAsisaForeignersProductMetadata,
  type AsisaForeignersProductKey,
  type ProductLocale,
} from '@/lib/asisa-foreigners-products';

const base = 'https://valentinproteccionintegral.com';
const organizationId = `${base}/#organization`;

export function getAsisaProductMetadata(key: AsisaForeignersProductKey, locale: ProductLocale): Metadata {
  return getAsisaForeignersProductMetadata(key, locale);
}

function getRoleRows(locale: ProductLocale) {
  return locale === 'en'
    ? [
        ['ASISA', 'The insurer. ASISA defines the product terms and issues the policy and certificate.'],
        ['VPI', 'Commercial brand/project providing customer guidance and support around the insurance process.'],
        ['Sebastián Sifontes Valentín', 'VPI co-founder and ASISA exclusive insurance agent. Insurance mediation for these ASISA products is carried out through him.'],
        ['Authority / consulate', 'Decides whether the submitted documents satisfy the immigration procedure.'],
      ]
    : [
        ['ASISA', 'La aseguradora. ASISA define las condiciones del producto y emite la póliza y el certificado.'],
        ['VPI', 'Marca/proyecto comercial que ofrece orientación y acompañamiento al cliente durante el proceso del seguro.'],
        ['Sebastián Sifontes Valentín', 'Cofundador de VPI y agente exclusivo de seguros de ASISA. La mediación de estos productos ASISA se realiza a través de él.'],
        ['Autoridad / consulado', 'Decide si la documentación presentada cumple los requisitos del trámite migratorio.'],
      ];
}

export function AsisaForeignersProductPage({
  productKey,
  locale,
}: {
  productKey: AsisaForeignersProductKey;
  locale: ProductLocale;
}) {
  const product = getAsisaForeignersProduct(productKey);
  const en = locale === 'en';
  const path = product.paths[locale];
  const breadcrumbItems = [
    { label: en ? 'Home' : 'Inicio', href: en ? '/en' : '/' },
    { label: en ? 'Insurance' : 'Seguros', href: en ? '/en/insurance' : '/seguros' },
    { label: en ? 'Health insurance for foreigners' : 'Seguro de salud para extranjeros', href: en ? '/en/insurance/health/foreigners' : '/seguros/salud-extranjeros' },
    { label: product.breadcrumb[locale] },
  ];
  const breadcrumbSchema = breadcrumbItems.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.label,
    item: item.href ? `${base}${item.href}` : `${base}${path}`,
  }));
  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${base}${path}#webpage`,
    url: `${base}${path}`,
    name: product.metadata[locale].title,
    description: product.metadata[locale].description,
    inLanguage: locale,
  };
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${base}${path}#service`,
    name: en ? `${product.breadcrumb.en} guidance` : `Orientación sobre ${product.breadcrumb.es}`,
    description: en
      ? 'VPI provides customer guidance and support around the insurance process; ASISA defines and issues the insurance product.'
      : 'VPI ofrece orientación y acompañamiento al cliente durante el proceso del seguro; ASISA define y emite el producto asegurador.',
    provider: { '@id': organizationId },
    areaServed: 'Spain',
    serviceType: en ? 'Insurance process guidance' : 'Orientación durante el proceso del seguro',
  };

  return (
    <>
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            webPageSchema,
            { '@context': 'https://schema.org', '@type': 'BreadcrumbList', inLanguage: locale, itemListElement: breadcrumbSchema },
            serviceSchema,
          ]),
        }}
      />
      <main className="bg-white text-slate-800">
        <section className="border-b border-slate-200 bg-slate-50 py-8 md:py-12">
          <div className="container-shell">
            <Breadcrumbs items={breadcrumbItems} />
            <p className="kicker">{en ? 'ASISA HEALTH INSURANCE' : 'SEGURO MÉDICO ASISA'}</p>
            <h1 className="mt-3 max-w-4xl font-heading text-4xl font-bold leading-tight text-[var(--blue-deep)] md:text-5xl">
              {product.h1[locale]}
            </h1>
            <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-700">{product.answer[locale]}</p>
          </div>
        </section>

        <section className="border-b border-slate-200 py-10 md:py-14" aria-labelledby="asisa-key-facts">
          <div className="container-shell">
            <h2 id="asisa-key-facts" className="font-heading text-2xl font-bold text-[var(--blue-deep)]">
              {en ? 'Key facts' : 'Datos principales'}
            </h2>
            <dl className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {product.facts[locale].map((fact) => (
                <div key={fact.label} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <dt className="text-sm font-semibold text-slate-600">{fact.label}</dt>
                  <dd className="mt-1 font-semibold leading-6 text-slate-900">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="border-b border-slate-200 py-10 md:py-14" aria-labelledby="asisa-before-moving">
          <div className="container-shell max-w-4xl">
            <h2 id="asisa-before-moving" className="font-heading text-2xl font-bold text-[var(--blue-deep)]">
              {product.beforeMovingQuestion[locale]}
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-700">{product.beforeMovingAnswer[locale]}</p>
            <p className="mt-4 text-sm leading-6 text-slate-600">
              {en ? 'Official product source: ' : 'Fuente oficial del producto: '}
              <a className="font-semibold text-[var(--blue)] underline underline-offset-4" href={product.sourceUrl}>
                {product.breadcrumb[locale]}
              </a>
            </p>
          </div>
        </section>

        <section className="border-b border-slate-200 py-10 md:py-14" aria-labelledby="asisa-roles">
          <div className="container-shell">
            <h2 id="asisa-roles" className="font-heading text-2xl font-bold text-[var(--blue-deep)]">
              {en ? 'Who does what?' : '¿Quién hace qué?'}
            </h2>
            <dl className="mt-6 grid gap-5 md:grid-cols-2">
              {getRoleRows(locale).map(([role, description]) => (
                <div key={role}>
                  <dt className="font-semibold text-slate-900">{role}</dt>
                  <dd className="mt-1 leading-7 text-slate-700">{description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="border-b border-slate-200 py-10 md:py-14" aria-labelledby="asisa-before-contracting">
          <div className="container-shell max-w-4xl">
            <h2 id="asisa-before-contracting" className="font-heading text-2xl font-bold text-[var(--blue-deep)]">
              {en ? 'Before contracting' : 'Antes de contratar'}
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-700">{product.beforeContracting[locale]}</p>
          </div>
        </section>

        <section className="border-b border-slate-200 py-10 md:py-14" aria-labelledby="asisa-related">
          <div className="container-shell max-w-4xl">
            <h2 id="asisa-related" className="font-heading text-2xl font-bold text-[var(--blue-deep)]">
              {en ? 'Evidence and related guidance' : 'Fuentes y orientación relacionada'}
            </h2>
            <ul className="mt-5 space-y-3 text-lg leading-8">
              {product.related[locale].map((item) => (
                <li key={item.href}>
                  <Link className="font-semibold text-[var(--blue)] underline underline-offset-4" href={item.href}>{item.label}</Link>
                </li>
              ))}
              <li>
                <a className="font-semibold text-[var(--blue)] underline underline-offset-4" href={product.sourceUrl}>{en ? 'Official ASISA product page' : 'Página oficial del producto ASISA'}</a>
              </li>
            </ul>
          </div>
        </section>

        <section className="py-10 md:py-14">
          <div className="container-shell">
            <a className="btn-whatsapp inline-flex" href={buildWhatsAppHref(product.whatsappMessage[locale])}>
              {product.cta[locale]}
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
