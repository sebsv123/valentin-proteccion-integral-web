import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, BadgeCheck, BadgePercent, HeartHandshake, Instagram, ShieldCheck, Stethoscope } from 'lucide-react';
import { LeadForm } from './lead-form';
import { buildWhatsAppHref, comparisonProfiles, generalFaqs, products, site, trustBadges } from '@/lib/products';
import { blogPosts } from '@/lib/blog';
import { FAQAccordion } from './faq-accordion';
import { WhatsAppIcon } from './ui/whatsapp-icon';

const cardImages: Record<string, string> = {
  salud: '/images/premium/hero-family.webp',
  vida: '/images/products/vida-hero.webp',
  mascotas: '/images/premium/happy-pets.webp',
  dental: '/images/products/dental-hero.webp',
  viaje: '/images/products/viaje-hero.webp',
  accidentes: '/images/products/accidentes-hero.webp',
  decesos: '/images/products/decesos-hero.webp',
};

const sectionTints: Record<string, string> = {
  salud: 'from-[rgba(15,94,156,0.12)] to-[rgba(123,198,126,0.04)]',
  vida: 'from-[rgba(18,59,104,0.09)] to-[rgba(242,140,40,0.05)]',
  mascotas: 'from-[rgba(123,198,126,0.12)] to-[rgba(15,94,156,0.04)]',
  viaje: 'from-[rgba(15,94,156,0.08)] to-[rgba(15,94,156,0.02)]',
  dental: 'from-[rgba(242,140,40,0.08)] to-[rgba(15,94,156,0.04)]',
  accidentes: 'from-[rgba(18,59,104,0.08)] to-[rgba(242,140,40,0.05)]',
  decesos: 'from-[rgba(18,59,104,0.08)] to-[rgba(123,198,126,0.03)]',
};

const productBadges: Record<string, string> = {
  salud: '⭐ Más consultado',
  mascotas: '🐾 Ley vigente 2024',
  vida: '🏠 Para hipotecas',
  dental: '✨ Gran ahorro',
  accidentes: '⚡ Para autónomos',
  decesos: '💛 Para familias',
  viaje: '✈️ Sin sorpresas',
}


export function TrustBadgesSection() {
  const icons = [ShieldCheck, HeartHandshake, Stethoscope, BadgeCheck, BadgePercent];
  return (
     <section className="section-pad pb-6" style={{ background: 'linear-gradient(180deg, rgba(15,94,156,0.03), transparent 75%)' }}>
      <div className="container-shell">
        <div className="soft-card overflow-hidden fade-up">
            <div className="grid gap-0 xl:grid-cols-[1.05fr_0.95fr]">
              <div className="p-7 md:p-10">
                <p className="kicker">Más de 10 años protegiendo lo importante</p>
                <h2 className="mt-3 section-title">Confianza, experiencia y cuidado personalizado</h2>
                <div className="mt-8 grid gap-5 md:grid-cols-2">
                  {trustBadges.map((badge, index) => {
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
                    Respondemos en menos de 30 minutos o te explicamos por qué.
                    Siempre. Sin excusas. Sin call centers.
                  </p>
                </div>
              </div>
              <div className="relative min-h-[360px] xl:min-h-full">
                <Image
                  src="/images/home/handshake-enhanced.png"
                  alt="Apretón de manos profesional que simboliza el compromiso, la transparencia y el acompañamiento experto de Valentín Protección Integral"
                  fill
                  sizes="(max-width: 1280px) 100vw, 50vw"
                  className="object-cover object-center"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(18,59,104,0.08),rgba(18,59,104,0.36))]" />
                <div className="absolute inset-x-0 bottom-0 p-7 text-white">
                  <p className="font-heading text-3xl font-bold">Protegemos tu tranquilidad</p>
                  <p className="mt-2 max-w-md text-base leading-7 text-white/88">Más de 10 años ayudando a familias y particulares a sentirse seguros con sus decisiones.</p>
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
  eyebrow?: string;
  label: string;
  summary?: string;
  whatsappMessage?: string;
  cardImage?: string;
  pexelsImage: string;
}

export function ProductCategoryGrid({ productsWithImages }: { productsWithImages: ProductWithImage[] }) {
  return (
     <section id="productos" aria-labelledby="products-title" className="section-pad bg-white-pure">
      <div className="container-shell">
        <div className="mb-12 max-w-3xl fade-up">
            <p className="kicker">Nuestras especialidades</p>
            <h2 id="products-title" className="mt-4 section-title">Encuentra el seguro que realmente encaje con tu vida</h2>
             <p className="section-copy mt-4">Selecciona la categoría para la que necesitas cobertura y descubre las mejores opciones analizadas para tu perfil.</p>
          </div>
        <div className="grid gap-8 lg:grid-cols-2 2xl:grid-cols-4">
          {productsWithImages.map((product, index) => (
            <div className="fade-up" key={product.slug} style={{ transitionDelay: `${index * 0.08}s` }}>
              <article className="soft-card overflow-hidden hover-lift border-white/20 shadow-lg h-full flex flex-col group">
                <div className="relative h-72">
                  <Image
                    src={product.pexelsImage}
                    alt={product.cardAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  {productBadges[product.slug] && (
                    <span
                      className="absolute top-3 right-3 z-10 rounded-full
                                 bg-[#f97316] px-2.5 py-1 text-[10px] md:text-xs font-black
                                 text-white shadow-lg uppercase tracking-wide md:top-4 md:right-4 md:px-3 md:py-1.5"
                    >
                      {productBadges[product.slug]}
                    </span>
                  )}
                  <div className={`absolute inset-0 bg-gradient-to-t ${sectionTints[product.slug] || 'from-[rgba(18,59,104,0.6)] to-transparent'}`} />
                  <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                    <p className="kicker !text-white/80">{product.eyebrow}</p>
                    <h3 className="mt-2 font-heading text-4xl font-bold tracking-wide">{product.label}</h3>
                  </div>
                </div>
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <p className="text-base leading-8 text-[var(--muted)]">{product.summary}</p>
                  <p className="mt-3 text-xs text-[var(--blue)] font-semibold
                                uppercase tracking-widest">
                    Consulta gratuita · Sin compromiso
                  </p>
                  <div className="mt-5 flex flex-col gap-3">
                    <a
                      href={buildWhatsAppHref(product.whatsappMessage || `Hola, quiero información sobre ${product.label}`)}
                      className="btn-whatsapp w-full justify-center font-bold"
                    >
                      Consultar por WhatsApp
                    </a>
                    <Link
                      href={`/seguros/${product.slug}`}
                      className="btn-ghost w-full justify-center text-sm opacity-70 hover:opacity-100"
                    >
                      Ver más información <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                 </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ComparisonCardsSection() {
  const actions = [
    { href: '/seguros', wa: buildWhatsAppHref('Hola, quiero una primera orientación para saber por dónde empezar.'), cta: 'Quiero una primera orientación' },
    { href: '/seguros/salud', wa: buildWhatsAppHref('Hola, ya sé el ramo pero quiero afinar qué modalidad me encaja.'), cta: 'Afina tu modalidad' },
    { href: '/contacto', wa: buildWhatsAppHref('Hola, quiero resolverlo rápido y con orientación real.'), cta: 'Empezar ahora' },
  ];

  return (
     <section className="section-pad" style={{ background: 'linear-gradient(180deg, rgba(18,59,104,0.03), rgba(123,198,126,0.04))' }}>
      <div className="container-shell">
        <div className="mb-8 max-w-3xl fade-up">
            <p className="kicker">Cómo decidir mejor</p>
            <h2 className="mt-3 section-title">Compara opciones con acompañamiento real</h2>
             <p className="section-copy mt-4">No se trata solo de ver coberturas. Se trata de entender qué encaja contigo, qué cambia entre modalidades y cómo empezar por el canal que te resulte más cómodo.</p>
          </div>
        <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
          <div className="grid gap-6 xl:grid-cols-3">
            {comparisonProfiles.map((profile, index) => (
              <div className="fade-up" key={profile.title} style={{ transitionDelay: `${index * 0.08}s` }}>
                <div className="soft-card glass h-full group p-8 transition-all hover-lift border-white/40 shadow-xl flex flex-col">
                  <div className="mb-6 inline-flex w-fit rounded-full bg-[var(--blue-deep)] px-5 py-2 text-[10px] font-black uppercase tracking-[0.3em] text-white shadow-lg">
                    Paso {index + 1}
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
                      {actions[index].cta}
                    </Link>
                    <a href={actions[index].wa} className="btn-ghost w-full justify-center border-white/40 bg-white/40 backdrop-blur">
                      Hablar por WhatsApp
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
                  src="/images/agent/rosa-exterior-enhanced.png"
                  alt="Rosa Valentín, asesora experta en seguros, en una actitud cercana y profesional lista para ayudarte en Madrid"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-top"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(248,250,252,0.08),rgba(18,59,104,0.58))]" />
                <div className="absolute inset-x-0 bottom-0 p-7 text-white md:p-8">
                  <p className="kicker !text-white/70">Una decisión mejor empieza con una conversación clara</p>
                  <h3 className="mt-3 font-heading text-4xl font-bold">Te escuchamos, aterrizamos opciones y te acompañamos de verdad</h3>
                  <div className="mt-5 grid gap-3">
                    {['Escuchamos tu situación y tus prioridades', 'Traducimos coberturas y matices a lenguaje claro', 'Te guiamos hacia SALUD, VIDA, ELECTRODOMÉSTICOS o NEGOCIOS'].map((item) => (
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

export function AgentTrustBlock() {
  return (
    <section id="asesora" aria-labelledby="agent-title" className="section-pad bg-alternate">
       <div className="container-shell">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="fade-up" style={{ transitionDelay: '0.08s' }}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-[40px] border-4 border-white/40 shadow-2xl">
              <Image
                src="/images/agent/rosa-oficina-enhanced.png"
                alt="Rosa Valentín asesorando de forma personalizada en su despacho, garantizando claridad y confianza en cada póliza"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover object-top"
                loading="lazy"
              />
            </div>
          </div>
          <div className="fade-up">
            <div>
              <p className="kicker">Atención humana y experta</p>
              <h2 id="agent-title" className="mt-4 section-title tracking-tight">Rosa Valentín: Más de 10 años comparando por ti para que elijas con total seguridad</h2>
              <p className="mt-6 text-base leading-8 text-[var(--muted)] md:text-lg">Nuestro equipo, liderado por Rosa Valentín, acompaña cada caso con una mirada transparente y profesional. No se trata solo de vender una póliza, sino de garantizar que tienes la mejor respuesta frente a un imprevisto.</p>
              <div className="mt-8 grid gap-4">
                <div className="flex items-center gap-4 rounded-[22px] bg-[var(--bg)] p-5"><div className="h-2 w-2 rounded-full bg-[var(--blue)]" /><p className="text-base font-semibold text-[var(--blue-deep)]">Asesoría según tu etapa y prioridades</p></div>
                <div className="flex items-center gap-4 rounded-[22px] bg-[var(--bg)] p-5"><div className="h-2 w-2 rounded-full bg-[var(--blue)]" /><p className="text-base font-semibold text-[var(--blue-deep)]">Análisis detallado de coberturas y modalidades</p></div>
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/contacto" className="btn-primary" aria-label="Contactar para consulta sin compromiso">Consulta sin compromiso</Link>
                 <a href={site.instagram} target="_blank" rel="noreferrer" className="btn-ghost"><Instagram className="h-4 w-4" /> Instagram</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function GeneralFaqSection() {
  return (
    <section id="preguntas-frecuentes" aria-labelledby="faq-title" className="section-pad bg-alternate overflow-hidden">
      <div className="container-shell">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] items-start">
          <div className="fade-up">
            <div>
              <p className="kicker">Resolvemos tus dudas</p>
              <h2 id="faq-title" className="mt-3 section-title">¿Tienes preguntas antes de empezar?</h2>
              <p className="section-copy mt-4">Aquí respondemos con más detalle a preguntas habituales. Y si prefieres una explicación más personal, puedes escribirnos por WhatsApp o pedir orientación.</p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row xl:flex-col">
                <a href={buildWhatsAppHref('Hola, tengo una duda sobre seguros y quiero una orientación.')} className="btn-whatsapp sm:w-auto xl:w-fit" aria-label="Hablar con Rosa Valentín por WhatsApp">Hablar por WhatsApp</a>
                <Link href="/contacto" className="btn-secondary sm:w-auto xl:w-fit" aria-label="Solicitar consulta sin compromiso por formulario">Consulta sin compromiso</Link>
              </div>
            </div>
          </div>
          <div className="fade-up" style={{ transitionDelay: '0.08s' }}>
            <FAQAccordion items={generalFaqs} contextualLinks />
          </div>
        </div>
      </div>
    </section>
  );
}

export function FinalCTASection() {
  return (
     <section id="cta-final" aria-labelledby="cta-title" className="section-pad pt-0 mb-12">
      <div className="container-shell">
        <div className="fade-up">
          <div className="soft-card relative overflow-hidden bg-[var(--blue-deep)] p-12 text-center text-white md:p-20">
            <div className="absolute inset-0">
              <Image
                src="/images/agent/sebastian-enhanced.png"
                alt="Sebastián, asesor del equipo de Valentín especializado en vida y salud, aportando cercanía y rigor técnico"
                fill
                sizes="100vw"
                className="object-cover opacity-25 brightness-50"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--blue-deep)] via-[var(--blue-deep)]/90 to-transparent" />
            </div>
            <div className="relative z-10 mx-auto max-w-4xl">
              <h2 id="cta-title" className="font-heading text-4xl font-extrabold tracking-tight md:text-6xl lg:text-7xl leading-tight">¿Hablamos sobre lo que te preocupa?</h2>
              <p className="mt-6 text-lg text-white/80 md:text-xl">Una llamada breve suele ser el camino más rápido para despejar dudas. Desde ahí vemos juntos qué producto tiene sentido para ti de forma directa y profesional.</p>
              <div className="mt-6 mb-2 inline-flex items-center gap-2 px-5 py-2.5
                              rounded-full bg-white/15 border border-white/25
                              backdrop-blur text-sm font-semibold text-white/90">
                <span className="h-2 w-2 rounded-full bg-[#4CAF50] animate-pulse" />
                Tiempo medio de respuesta hoy: menos de 18 minutos
              </div>
              <div className="mt-10 flex flex-col gap-4 justify-center sm:flex-row">
                <Link href="/contacto" className="btn-primary bg-white text-[var(--blue-deep)] hover:bg-white/90">Elegir mi seguro con Rosa</Link>
                <a href={buildWhatsAppHref('Hola, quiero una consulta sin compromiso para revisar qué seguro me encaja mejor.')} className="btn-whatsapp bg-[#4CAF50] text-white border-none">Hablar por WhatsApp</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


export function MascotHelperSection() {
  return (
     <section className="section-pad bg-white-pure pt-10">
      <div className="container-shell">
        <div className="fade-up">
          <div className="soft-card glass overflow-hidden border-white/60 shadow-2xl bg-white-pure">
            <div className="grid gap-0 lg:grid-cols-2 items-stretch">
              <div className="relative min-h-[360px] lg:min-h-[520px] bg-gradient-to-br from-[#81C784]/20 to-[#003366]/10">
                <Image
                  src="https://images.pexels.com/photos/7681091/pexels-photo-7681091.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                  alt="Asesor de seguros acompañando a una familia en Madrid durante una consulta personalizada"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  loading="lazy"
                  className="object-cover object-center"
                />
                {/* Overlay decorativo + badge */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#003366]/30 via-transparent to-transparent" />
                <div className="absolute top-6 left-6 inline-flex items-center gap-2 rounded-full bg-white/95 backdrop-blur px-4 py-2 shadow-lg">
                  <ShieldCheck className="h-4 w-4 text-[var(--green)]" />
                  <span className="text-xs font-bold uppercase tracking-wider text-[var(--blue-deep)]">+10 años orientando</span>
                </div>
              </div>
              <div className="p-8 md:p-12 xl:p-16">
                <p className="kicker font-bold tracking-[0.3em]">Tu punto de apoyo</p>
                <h2 className="mt-4 section-title leading-tight">Orientación humana para decisiones importantes</h2>
                <p className="section-copy mt-6 text-xl">Hemos diseñado esta experiencia para que te sientas acompañado en cada paso. Sin tecnicismos, sin presiones y con una mirada experta sobre lo que de verdad importa.</p>
                <div className="mt-10 grid gap-4 md:grid-cols-2">
                  {[
                    'Ordenamos prioridades antes de comparar.',
                    'Aterrizamos coberturas a lenguaje claro.',
                    'Te señalamos qué conviene revisar de verdad.',
                    'Acompañamiento por WhatsApp o llamada.',
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-4 rounded-2xl border border-white/40 bg-white/40 p-5 text-base font-bold text-[var(--blue-deep)] shadow-sm backdrop-blur">
                      <div className="h-2 w-2 rounded-full bg-[#4CAF50]" />
                      {item}
                    </div>
                  ))}
                </div>
                <div className="mt-12 flex flex-col gap-4 sm:flex-row">
                  <Link href="/como-te-ayudamos" className="btn-primary hover-lift px-8">Explorar cómo ayudamos</Link>
                  <a href={buildWhatsAppHref('Hola, quiero una orientación para entender mejor qué seguro me conviene.')} className="btn-whatsapp animate-pulse-soft px-8 font-extrabold">Hablar con Rosa</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function BlogPreviewSection() {
  // Obtener los 3 posts más recientes
  const posts = [...blogPosts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  return (
     <section id="confianza" aria-labelledby="trust-title" className="section-pad bg-alternate">
      <div className="container-shell">
        <div className="fade-up">
          <div className="mb-12 text-center flex flex-col items-center">
            <p className="kicker">Tu seguridad es lo primero</p>
            <h2 id="trust-title" className="mt-4 section-title mx-auto max-w-3xl">Por qué más de 1.200 familias confían en Valentín</h2>
            <p className="section-copy mt-4 mx-auto">Te ayudamos a resolver dudas reales y a mantenerte al día sobre seguros con nuestros artículos especializados.</p>
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
                    <div className="btn-ghost mt-5 w-fit">Ir al blog <ArrowRight className="h-4 w-4" /></div>
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
