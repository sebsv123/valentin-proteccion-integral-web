import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, BadgeCheck, BadgePercent, Building2, HeartHandshake, Instagram, ShieldCheck, Stethoscope } from 'lucide-react';
import { LeadForm } from './lead-form';
import { buildWhatsAppHref, products, site } from '@/lib/products';
import { blogPosts } from '@/lib/blog';
import { FAQAccordion } from './faq-accordion';
import { WhatsAppIcon } from './ui/whatsapp-icon';
import { AdeslasAgentLink } from './adeslas-agent-link';
import productGridStyles from './product-category-grid.module.css';
import { getHomeContent, type HomeLocale } from './home-content';


export function ProductAccessSection() {
  const productSlugs = ['salud', 'mascotas', 'dental', 'accidentes', 'viaje', 'decesos'];
  return (
    <section aria-label="Accesos a seguros" className="bg-[var(--off-white)] py-8 md:py-10">
      <div className="container-shell">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6 lg:gap-4">
          {products.filter((product) => productSlugs.includes(product.slug)).map((product) => (
            <Link key={product.slug} href={`/seguros/${product.slug}`} className="group flex min-h-32 flex-col items-center justify-center gap-3 rounded-xl border border-[var(--border)] bg-white p-4 text-center shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-[var(--blue)]/35 hover:shadow-md focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[var(--blue)]/20">
              <Stethoscope className="h-8 w-8 text-[var(--blue)]" aria-hidden="true" />
              <span className="text-sm font-bold tracking-wide text-[var(--blue-deep)]">{product.label}</span>
            </Link>
          ))}
        </div>
        <div className="mt-5 grid gap-3 md:grid-cols-2">
          <Link href="/empresas/salud" className="group flex items-center justify-between gap-5 rounded-2xl border border-[rgba(15,94,156,0.16)] bg-white px-5 py-4 transition hover:-translate-y-0.5 hover:border-[var(--blue)]/40 hover:shadow-md focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[var(--blue)]/20">
            <span className="flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-full bg-[#e8f7f4] text-[var(--blue)]"><Building2 className="h-5 w-5" aria-hidden="true" /></span><span><span className="block text-[11px] font-bold tracking-[0.16em] text-[#2fa59b]">SALUD PARA EMPRESAS</span><strong className="mt-1 block font-heading text-xl text-[var(--blue-deep)]">Salud para tu equipo</strong><span className="mt-1 block text-sm leading-6 text-[var(--muted)]">Coberturas desde dos asegurados y distintas modalidades.</span></span></span><ArrowRight className="h-5 w-5 shrink-0 text-[var(--blue)] transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </Link>
          <Link href="/empresas/ciberseguridad" className="group flex items-center justify-between gap-5 rounded-2xl border border-[rgba(15,94,156,0.16)] bg-[#edf6f8] px-5 py-4 transition hover:-translate-y-0.5 hover:border-[var(--blue)]/40 hover:shadow-md focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[var(--blue)]/20">
            <span className="flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-full bg-white text-[var(--blue)]"><ShieldCheck className="h-5 w-5" aria-hidden="true" /></span><span><span className="block text-[11px] font-bold tracking-[0.16em] text-[#287a91]">CIBERSEGURIDAD PARA EMPRESAS</span><strong className="mt-1 block font-heading text-xl text-[var(--blue-deep)]">Continuidad del negocio</strong><span className="mt-1 block text-sm leading-6 text-[var(--muted)]">Respuesta ante incidentes e interrupciones de actividad.</span></span></span><ArrowRight className="h-5 w-5 shrink-0 text-[var(--blue)] transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export function TrustBadgesSection({ imageSrc = '/images/home/handshake-enhanced.png', locale = 'es' }: { imageSrc?: string; locale?: HomeLocale } = {}) {
  const content = getHomeContent(locale).trust;
  const icons = [ShieldCheck, HeartHandshake, Stethoscope, BadgeCheck, BadgePercent];
  return (
     <section className="section-pad pb-6" style={{ background: 'linear-gradient(180deg, rgba(15,94,156,0.03), transparent 75%)' }}>
      <div className="container-shell">
        <div className="soft-card overflow-hidden fade-up">
            <div className="grid gap-0 xl:grid-cols-[1.05fr_0.95fr]">
              <div className="p-7 md:p-10">
                <p className="kicker">{content.kicker}</p>
                <h2 className="mt-3 section-title">{content.title}</h2>
                <div className="mt-8 grid gap-5 md:grid-cols-2">
                  {content.badges.map((badge, index) => {
                    const Icon = icons[index % icons.length];
                    return (
                      <div key={badge.title} className="rounded-[26px] border border-[var(--border)] bg-[var(--off-white)] p-5">
                        <div className="mb-4 inline-flex rounded-2xl bg-white p-3 text-[var(--blue)] shadow-sm"><Icon className="h-6 w-6" /></div>
                        <h3 className="font-heading text-2xl font-semibold text-[var(--blue-deep)]">{badge.title}</h3>
                        <p className="mt-3 text-base leading-8 text-[var(--muted)]">{badge.copy}</p>
                      </div>
                    );
                  })}
                </div>
                <div className="mt-8 flex items-start gap-4 rounded-[22px]
                                border-2 border-[var(--blue)]/20 bg-[var(--blue)]/5 p-5">
                  <span className="text-2xl flex-none">⏱️</span>
                  <p className="text-base font-semibold text-[var(--blue-deep)] leading-relaxed">
                    {content.response}
                  </p>
                </div>
              </div>
              <div className="relative min-h-[360px] xl:min-h-full">
                <Image
                  src={imageSrc}
                  alt={content.imageAlt}
                  fill
                  sizes="(max-width: 1280px) 100vw, 50vw"
                  className="object-cover object-center"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(18,59,104,0.08),rgba(18,59,104,0.36))]" />
                <div className="absolute inset-x-0 bottom-0 p-7 text-white">
                  <p className="font-heading text-3xl font-bold">{content.imageTitle}</p>
                  <p className="mt-2 max-w-md text-base leading-7 text-white/88">{content.imageCopy}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
}

interface ProductWithImage {
  slug: string;
  cardAlt: string;
  label: string;
  benefits: string[];
}

const specialtyOrder = ['salud', 'mascotas', 'dental', 'accidentes', 'viaje', 'decesos'];

const specialtyPresentation = {
  salud: {
    image: '/images/pexels/salud-bienestar-pexels.webp',
    description: 'Salud privada según tu situación.',
    benefits: ['Criterio, no solo precio.', 'Copago y reembolso claros.'],
    objectPosition: '35% center',
    dark: false,
  },
  mascotas: {
    image: '/images/pexels/mascota-familia-pexels.webp',
    description: 'Veterinaria, RC y opciones para cuidar de los tuyos.',
    benefits: ['Prioriza veterinaria, RC o ambas.', 'Revisa límites y servicios.'],
    objectPosition: 'center',
    dark: true,
  },
  dental: {
    image: '/images/pexels/dental-salud-pexels.webp',
    description: 'Revisiones y tratamientos según tu modalidad.',
    benefits: ['Actos, descuentos y tarifas.', 'Todo explicado con claridad.'],
    objectPosition: '62% center',
    dark: false,
  },
  accidentes: {
    image: '/images/pexels/autonomo-trabajo-pexels.webp',
    description: 'Protección ante imprevistos personales.',
    benefits: ['Para quien no puede permitirse parar.', 'Contratación ágil.'],
    objectPosition: '70% center',
    dark: true,
  },
  viaje: {
    image: '/images/pexels/seguro-viaje-pexels.webp',
    description: 'Opciones para cada destino y viaje.',
    benefits: ['Aclara límites y destinos.', 'Elige según cada viaje.'],
    objectPosition: 'center',
    dark: false,
  },
  decesos: {
    image: '/images/products/decesos-hero.webp',
    description: 'Previsión para cada familia.',
    benefits: ['Menos gestiones en momentos delicados.', 'Previsión con serenidad.'],
    objectPosition: 'center',
    dark: true,
  },
} as const;

export function ProductCategoryGrid({ productsWithImages, locale = 'es' }: { productsWithImages: ProductWithImage[]; locale?: HomeLocale }) {
  const content = getHomeContent(locale).products;
  const specialties = productsWithImages
    .filter((product) => product.slug in specialtyPresentation)
    .sort((a, b) => specialtyOrder.indexOf(a.slug) - specialtyOrder.indexOf(b.slug));

  return (
     <section id="productos" aria-labelledby="products-title" className={productGridStyles.section}>
      <div className={productGridStyles.container}>
        <header className={productGridStyles.heading}>
          <div>
            <p className={productGridStyles.eyebrow}>{content.eyebrow}</p>
            <h2 id="products-title" className={productGridStyles.title}>{content.title}</h2>
          </div>
          <p className={productGridStyles.intro}>{content.intro}</p>
        </header>
        <div className={productGridStyles.grid}>
          {specialties.map((product) => {
            const presentation = specialtyPresentation[product.slug as keyof typeof specialtyPresentation];
            const toneClass = presentation.dark ? productGridStyles.dark : productGridStyles.light;

            return (
              <article className={`${productGridStyles.card} ${toneClass}`} key={product.slug}>
                <div className={productGridStyles.mediaPanel}>
                  <Image
                    src={presentation.image}
                    alt={locale === 'en' ? ({ salud: 'Private health insurance', mascotas: 'Pet insurance and veterinary care', dental: 'Dental insurance and treatment', accidentes: 'Accident protection', viaje: 'Travel insurance', decesos: 'Funeral insurance planning' }[product.slug] || product.cardAlt) : product.cardAlt}
                    fill
                    sizes="(max-width: 640px) calc(100vw - 36px), (max-width: 1179px) 45vw, 190px"
                    className={productGridStyles.image}
                    style={{ objectPosition: presentation.objectPosition }}
                    loading="lazy"
                  />
                </div>
                <div className={productGridStyles.contentPanel}>
                  <p className={productGridStyles.categoryLabel}>{locale === 'en' ? ({ salud: 'HEALTH', mascotas: 'PETS', dental: 'DENTAL', accidentes: 'ACCIDENTS', viaje: 'TRAVEL', decesos: 'FUNERAL' }[product.slug] || product.label) : product.label}</p>
                  <h3>{locale === 'en' ? ({ salud: 'HEALTH', mascotas: 'PETS', dental: 'DENTAL', accidentes: 'ACCIDENTS', viaje: 'TRAVEL', decesos: 'FUNERAL' }[product.slug] || product.label) : product.label}</h3>
                  <p className={productGridStyles.description}>{content.descriptions[product.slug] || presentation.description}</p>
                  <ul className={productGridStyles.benefits}>
                    {(content.benefits[product.slug] || presentation.benefits).map((benefit) => <li key={benefit}>{benefit}</li>)}
                  </ul>
                  <Link href={`/seguros/${product.slug}`} className={productGridStyles.productLink}>
                    {content.cta} <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function ComparisonCardsSection({ imageSrc = '/images/agent/rosa-exterior-enhanced.png', locale = 'es' }: { imageSrc?: string; locale?: HomeLocale } = {}) {
  const content = getHomeContent(locale).comparison;
  const actions = locale === 'en' ? [
    { href: '/seguros', wa: buildWhatsAppHref('Hello, I would like initial guidance on where to start.'), cta: 'Get initial guidance' },
    { href: '/seguros/salud', wa: buildWhatsAppHref('Hello, I know the type of cover I need but would like help choosing the right option.'), cta: 'Refine your option' },
    { href: '/contacto', wa: buildWhatsAppHref('Hello, I would like to resolve this quickly with real guidance.'), cta: 'Get started' },
  ] : [
    { href: '/seguros', wa: buildWhatsAppHref('Hola, quiero una primera orientación para saber por dónde empezar.'), cta: 'Quiero una primera orientación' },
    { href: '/seguros/salud', wa: buildWhatsAppHref('Hola, ya sé el ramo pero quiero afinar qué modalidad me encaja.'), cta: 'Afina tu modalidad' },
    { href: '/contacto', wa: buildWhatsAppHref('Hola, quiero resolverlo rápido y con orientación real.'), cta: 'Empezar ahora' },
  ];

  return (
     <section className="section-pad" style={{ background: 'linear-gradient(180deg, rgba(18,59,104,0.03), rgba(123,198,126,0.04))' }}>
      <div className="container-shell">
        <div className="mb-8 max-w-3xl fade-up">
            <p className="kicker">{content.kicker}</p>
            <h2 className="mt-3 section-title">{content.title}</h2>
             <p className="section-copy mt-4">{content.intro}</p>
          </div>
        <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
          <div className="grid gap-6 xl:grid-cols-3">
            {content.profiles.map((profile, index) => (
              <div className="fade-up" key={profile.title} style={{ transitionDelay: `${index * 0.08}s` }}>
                <div className="soft-card glass h-full group p-8 transition-all hover-lift border-white/40 shadow-xl flex flex-col">
                  <div className="mb-6 inline-flex w-fit rounded-full bg-[var(--blue-deep)] px-5 py-2 text-[10px] font-black uppercase tracking-[0.3em] text-white shadow-lg">
                    {locale === 'en' ? `Step ${index + 1}` : `Paso ${index + 1}`}
                  </div>
                  <h3 className="font-heading text-3xl font-bold text-[var(--blue-deep)] leading-tight">{profile.title}</h3>
                  <p className="mt-4 text-base leading-8 text-[var(--muted)]">{profile.description}</p>
                  <div className="mt-6 grid gap-4 flex-grow">
                    {profile.bullets.map((bullet) => (
                      <div key={bullet} className="rounded-2xl border border-white/60 bg-white/60 px-5 py-4 text-sm font-semibold text-[var(--text)] shadow-sm backdrop-blur">
                        {bullet}
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 flex flex-col gap-4">
                    <Link href={actions[index].href} className="btn-secondary w-full justify-center shadow-lg hover:shadow-2xl">
                      {content.cta[index]}
                    </Link>
                    <a href={actions[index].wa} className="btn-ghost w-full justify-center border-white/40 bg-white/40 backdrop-blur">
                      <WhatsAppIcon className="h-4 w-4" /> {locale === 'en' ? 'Chat on WhatsApp' : 'Hablar por WhatsApp'}
                     </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="fade-up" style={{ transitionDelay: '0.08s' }}>
            <div className="soft-card overflow-hidden h-full">
              <div className="relative min-h-[520px] h-full">
                <Image
                  src={imageSrc}
                  alt={content.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-top"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(248,250,252,0.08),rgba(18,59,104,0.58))]" />
                <div className="absolute inset-x-0 bottom-0 p-7 text-white md:p-8">
                  <p className="kicker !text-white/70">{content.imageKicker}</p>
                  <h3 className="mt-3 font-heading text-4xl font-bold">{content.imageTitle}</h3>
                  <div className="mt-5 grid gap-3">
                    {content.imageBullets.map((item) => (
                      <div key={item} className="rounded-[22px] bg-white/14 px-4 py-4 text-sm leading-7 text-white/92 backdrop-blur md:text-base">{item}</div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function AgentTrustBlock({ locale = 'es' }: { locale?: HomeLocale } = {}) {
  const content = getHomeContent(locale).agent;
  return (
    <section id="asesora" aria-labelledby="agent-title" className="section-pad bg-alternate">
       <div className="container-shell">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="fade-up" style={{ transitionDelay: '0.08s' }}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-[40px] border-4 border-white/40 shadow-2xl">
              <Image
                src="/images/agent/rosa-oficina-enhanced.png"
                alt={content.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover object-top"
                loading="lazy"
              />
            </div>
          </div>
          <div className="fade-up">
            <div>
              <p className="kicker">{content.kicker}</p>
              <h2 id="agent-title" className="mt-4 section-title tracking-tight">{content.title}</h2>
              <p className="mt-6 text-base leading-8 text-[var(--muted)] md:text-lg">{content.copy}</p>
              <div className="mt-8 grid gap-4">
                {content.bullets.map((bullet) => <div key={bullet} className="flex items-center gap-4 rounded-[22px] bg-[var(--bg)] p-5"><div className="h-2 w-2 rounded-full bg-[var(--blue)]" /><p className="text-base font-semibold text-[var(--blue-deep)]">{bullet}</p></div>)}
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/contacto" className="btn-primary" aria-label={content.aria}>{content.cta}</Link>
                 <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="btn-ghost"><Instagram className="h-4 w-4" /> Instagram</a>
              </div>
              <div className="mt-6">
                <AdeslasAgentLink locale={locale} location="home_compact_trust" variant="mini-preview" title={content.adeslasTitle} description={content.adeslasDescription} linkLabel={content.adeslasCta} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function GeneralFaqSection({ locale = 'es' }: { locale?: HomeLocale } = {}) {
  const content = getHomeContent(locale).faq;
  return (
    <section id="preguntas-frecuentes" aria-labelledby="faq-title" className="section-pad bg-alternate overflow-hidden">
      <div className="container-shell">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] items-start">
          <div className="fade-up">
            <div>
              <p className="kicker">{content.kicker}</p>
              <h2 id="faq-title" className="mt-3 section-title">{content.title}</h2>
              <p className="section-copy mt-4">{content.intro}</p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row xl:flex-col">
                <a href={buildWhatsAppHref(content.whatsapp)} className="btn-whatsapp sm:w-auto xl:w-fit" aria-label={content.whatsappAria}><WhatsAppIcon className="h-4 w-4" /> {locale === 'en' ? 'Chat on WhatsApp' : 'Hablar por WhatsApp'}</a>
                <Link href="/contacto" className="btn-secondary sm:w-auto xl:w-fit" aria-label={content.contactAria}>{content.contact}</Link>
              </div>
            </div>
          </div>
          <div className="fade-up" style={{ transitionDelay: '0.08s' }}>
            <FAQAccordion items={content.items} contextualLinks locale={locale} />
          </div>
        </div>
      </div>
    </section>
  );
}

export function FinalCTASection({ locale = 'es' }: { locale?: HomeLocale } = {}) {
  const content = getHomeContent(locale).finalCta;
  return (
     <section id="cta-final" aria-labelledby="cta-title" className="section-pad pt-0 mb-12">
      <div className="container-shell">
        <div className="fade-up">
          <div className="soft-card relative overflow-hidden bg-[var(--blue-deep)] p-12 text-center text-white md:p-20">
            <div className="absolute inset-0">
              <Image
                src="/images/agent/sebastian-enhanced.png"
                alt={content.imageAlt}
                fill
                sizes="100vw"
                className="object-cover opacity-25 brightness-50"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--blue-deep)] via-[var(--blue-deep)]/90 to-transparent" />
            </div>
            <div className="relative z-10 mx-auto max-w-4xl">
              <h2 id="cta-title" className="font-heading text-4xl font-extrabold tracking-tight md:text-6xl lg:text-7xl leading-tight">{content.title}</h2>
              <p className="mt-6 text-lg text-white/80 md:text-xl">{content.body}</p>
              <div className="mt-6 mb-2 inline-flex items-center gap-2 px-5 py-2.5
                              rounded-full bg-white/15 border border-white/25
                              backdrop-blur text-sm font-semibold text-white/90">
                <span className="h-2 w-2 rounded-full bg-[#4CAF50] animate-pulse" />
                {content.response}
              </div>
              <div className="mt-10 flex flex-col gap-4 justify-center sm:flex-row">
                <Link href="/contacto" className="btn-primary bg-white text-[var(--blue-deep)] hover:bg-white/90">{content.contact}</Link>
                <a href={buildWhatsAppHref(content.whatsapp)} className="btn-whatsapp bg-[#4CAF50] text-white border-none"><WhatsAppIcon className="h-4 w-4" /> {locale === 'en' ? 'Chat on WhatsApp' : 'Hablar por WhatsApp'}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


export function MascotHelperSection({ locale = 'es' }: { locale?: HomeLocale } = {}) {
  const content = getHomeContent(locale).mascot;
  return (
     <section className="section-pad bg-white-pure pt-10">
      <div className="container-shell">
        <div className="fade-up">
          <div className="soft-card glass overflow-hidden border-white/60 shadow-2xl bg-white-pure">
            <div className="grid gap-0 lg:grid-cols-2 items-stretch">
              <div className="relative min-h-[360px] lg:min-h-[520px] bg-gradient-to-br from-[#81C784]/20 to-[#003366]/10">
                <Image
                  src="https://images.pexels.com/photos/7681091/pexels-photo-7681091.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                  alt={content.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  loading="lazy"
                  className="object-cover object-center"
                />
                {/* Overlay decorativo + badge */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#003366]/30 via-transparent to-transparent" />
                <div className="absolute top-6 left-6 inline-flex items-center gap-2 rounded-full bg-white/95 backdrop-blur px-4 py-2 shadow-lg">
                  <ShieldCheck className="h-4 w-4 text-[var(--green)]" />
                  <span className="text-xs font-bold uppercase tracking-wider text-[var(--blue-deep)]">{content.badge}</span>
                </div>
              </div>
              <div className="p-8 md:p-12 xl:p-16">
                <p className="kicker font-bold tracking-[0.3em]">{content.kicker}</p>
                <h2 className="mt-4 section-title leading-tight">{content.title}</h2>
                <p className="section-copy mt-6 text-xl">{content.body}</p>
                <div className="mt-10 grid gap-4 md:grid-cols-2">
                  {content.bullets.map((item) => (
                    <div key={item} className="flex items-center gap-4 rounded-2xl border border-white/40 bg-white/40 p-5 text-base font-bold text-[var(--blue-deep)] shadow-sm backdrop-blur">
                      <div className="h-2 w-2 rounded-full bg-[#4CAF50]" />
                      {item}
                    </div>
                  ))}
                </div>
                <div className="mt-12 flex flex-col gap-4 sm:flex-row">
                  <Link href="/como-te-ayudamos" className="btn-primary hover-lift px-8">{content.cta}</Link>
                  <a href={buildWhatsAppHref(content.whatsapp)} className="btn-whatsapp animate-pulse-soft px-8 font-extrabold"><WhatsAppIcon className="h-4 w-4" /> {locale === 'en' ? 'Chat with Rosa' : 'Hablar con Rosa'}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function BlogPreviewSection({ locale = 'es' }: { locale?: HomeLocale } = {}) {
  const content = getHomeContent(locale).blog;
  // Obtener los 3 posts más recientes
  const posts = [...blogPosts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  return (
     <section id="confianza" aria-labelledby="trust-title" className="section-pad bg-alternate">
      <div className="container-shell">
        <div className="fade-up">
          <div className="mb-12 text-center flex flex-col items-center">
            <p className="kicker">{content.kicker}</p>
            <h2 id="trust-title" className="mt-4 section-title mx-auto max-w-3xl">{content.title}</h2>
            <p className="section-copy mt-4 mx-auto">{content.intro}</p>
          </div>
        </div>
        <div className="grid gap-5 lg:grid-cols-3">
          {posts.map((post, idx) => (
            <div className="fade-up" key={post.slug} style={{ transitionDelay: `${idx * 0.08}s` }}>
              <article className="soft-card overflow-hidden h-full flex flex-col">
                <Link href={`/blog/${post.slug}`} className="block h-full flex flex-col">
                  <div className="relative h-56">
                    <Image
                      src={post.image}
                      alt={post.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-500 hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="font-heading text-2xl font-semibold text-[var(--blue-deep)]">{post.title}</h3>
                    <p className="mt-3 text-base leading-8 text-[var(--muted)] flex-grow">{post.excerpt}</p>
                    <div className="btn-ghost mt-5 w-fit">{content.cta} <ArrowRight className="h-4 w-4" /></div>
                   </div>
                </Link>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
