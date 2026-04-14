import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, BadgeCheck, HeartHandshake, Instagram, MessageCircle, ShieldCheck, Stethoscope } from 'lucide-react';
import { LeadForm } from './lead-form';
import { buildWhatsAppHref, comparisonProfiles, generalFaqs, products, site, trustBadges } from '@/lib/products';
import { blogPosts } from '@/lib/blog';
import { FAQAccordion } from './faq-accordion';
import RevealLight from './ui/reveal-light';

const cardImages: Record<string, string> = {
  salud: '/images/premium/hero-family.png',
  vida: '/images/products/vida-hero.png',
  mascotas: '/images/premium/happy-pets.png',
  dental: '/images/products/dental-hero.png',
  viaje: '/images/products/viaje-hero.png',
  accidentes: '/images/products/accidentes-hero.png',
  electrodomesticos: '/images/products/electrodomesticos.png',
  'proteccion-juridica': '/images/products/proteccion-juridica.png',
  negocio: '/images/products/negocio.png',
  decesos: '/images/products/decesos-hero.png',
};

const sectionTints: Record<string, string> = {
  salud: 'from-[rgba(15,94,156,0.12)] to-[rgba(123,198,126,0.04)]',
  vida: 'from-[rgba(18,59,104,0.09)] to-[rgba(242,140,40,0.05)]',
  mascotas: 'from-[rgba(123,198,126,0.12)] to-[rgba(15,94,156,0.04)]',
  viaje: 'from-[rgba(15,94,156,0.08)] to-[rgba(15,94,156,0.02)]',
  dental: 'from-[rgba(242,140,40,0.08)] to-[rgba(15,94,156,0.04)]',
  accidentes: 'from-[rgba(18,59,104,0.08)] to-[rgba(242,140,40,0.05)]',
  electrodomesticos: 'from-[rgba(242,140,40,0.06)] to-[rgba(34,197,94,0.04)]',
  'proteccion-juridica': 'from-[rgba(15,94,156,0.08)] to-[rgba(18,59,104,0.04)]',
  negocio: 'from-[rgba(34,197,94,0.08)] to-[rgba(15,94,156,0.04)]',
  decesos: 'from-[rgba(18,59,104,0.08)] to-[rgba(123,198,126,0.03)]',
};

const productBadges: Record<string, string> = {
  salud: '⭐ Más consultado',
  mascotas: '🐾 Ley vigente 2024',
  vida: '🏠 Para hipotecas',
  dental: '✨ Gran ahorro',
  accidentes: '⚡ Para autónomos',
  'proteccion-juridica': '⚖️ Muy valorado',
  negocio: '🏢 Pymes y locales',
  decesos: '💛 Para familias',
  viaje: '✈️ Sin sorpresas',
  electrodomesticos: '🔧 Reparación incluida',
}


export function TrustBadgesSection() {
  const icons = [ShieldCheck, HeartHandshake, Stethoscope, BadgeCheck];
  return (
     <section className="section-pad pb-6" style={{ background: 'linear-gradient(180deg, rgba(15,94,156,0.03), transparent 75%)' }}>
      <div className="container-shell">
        <RevealLight>
          <div className="soft-card overflow-hidden">
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
              </div>
              <div className="relative min-h-[360px] xl:min-h-full">
                <Image src="/images/home/handshake-real.jpg" alt="Apretón de manos que transmite confianza y acompañamiento" fill className="object-cover object-center" />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(18,59,104,0.08),rgba(18,59,104,0.36))]" />
                <div className="absolute inset-x-0 bottom-0 p-7 text-white">
                  <p className="font-heading text-3xl font-bold">Protegemos tu tranquilidad</p>
                  <p className="mt-2 max-w-md text-base leading-7 text-white/88">Más de 10 años ayudando a familias y particulares a sentirse seguros con sus decisiones.</p>
                </div>
              </div>
            </div>
          </div>
        </RevealLight>
      </div>
    </section>
  );
}

export function ProductCategoryGrid() {
  const list = products.map((product) => ({ ...product, image: cardImages[product.slug] || product.cardImage }));
  return (
     <section id="productos" aria-labelledby="products-title" className="section-pad bg-white-pure">
      <div className="container-shell">
        <RevealLight>
          <div className="mb-12 max-w-3xl">
            <p className="kicker">Nuestras especialidades</p>
            <h2 id="products-title" className="mt-4 section-title">Encuentra el seguro que realmente encaje con tu vida</h2>
             <p className="section-copy mt-4">Selecciona la categoría para la que necesitas cobertura y descubre las mejores opciones analizadas para tu perfil.</p>
          </div>
        </RevealLight>
        <div className="grid gap-8 lg:grid-cols-2 2xl:grid-cols-4">
          {list.map((product, index) => (
            <RevealLight key={product.slug} delay={index * 0.05}>
              <article className="soft-card overflow-hidden hover-lift border-white/20 shadow-lg h-full flex flex-col group">
                <div className="relative h-72">
                  <Image src={product.image} alt={product.cardAlt} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
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
                    <Link href={`/seguros/${product.slug}`} className="btn-secondary w-full justify-center">Comparar {product.label} <ArrowRight className="h-4 w-4" /></Link>
                    <a href={buildWhatsAppHref(product.whatsappMessage)} className="btn-ghost w-full justify-center">Consultar por WhatsApp</a>
                  </div>
                 </div>
              </article>
            </RevealLight>
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
        <RevealLight>
          <div className="mb-8 max-w-3xl">
            <p className="kicker">Cómo decidir mejor</p>
            <h2 className="mt-3 section-title">Compara opciones con acompañamiento real</h2>
             <p className="section-copy mt-4">No se trata solo de ver coberturas. Se trata de entender qué encaja contigo, qué cambia entre modalidades y cómo empezar por el canal que te resulte más cómodo.</p>
          </div>
        </RevealLight>
        <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
          <div className="grid gap-6 xl:grid-cols-3">
            {comparisonProfiles.map((profile, index) => (
              <RevealLight key={profile.title} delay={index * 0.1}>
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
              </RevealLight>
            ))}
          </div>
          <RevealLight direction="left">
            <div className="soft-card overflow-hidden h-full">
              <div className="relative min-h-[520px] h-full">
                <Image src="/images/agent/rosa-exterior.jpg" alt="Rosa Valentín, tu asesora de seguros de confianza" fill className="object-cover object-top" />
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
          </RevealLight>
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
          <RevealLight direction="left">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[40px] border-4 border-white/40 shadow-2xl">
              <Image src="/images/agent/rosa-oficina.jpg" alt="Rosa Valentín, asesora de seguros experta en Madrid, atendiendo en su oficina" fill className="object-cover object-top" />
            </div>
          </RevealLight>
          <RevealLight direction="right">
            <div>
              <p className="kicker">Atención humana y experta</p>
              <h2 id="agent-title" className="mt-4 section-title tracking-tight">Rosa Valentín: Más de 10 años comparando por ti para que elijas con total seguridad</h2>
              <p className="mt-6 text-base leading-8 text-[var(--muted)] md:text-lg">Nuestro equipo, liderado por Rosa Valentín, acompaña cada caso con una mirada transparente y profesional. No se trata solo de vender una póliza, sino de garantizar que tienes la mejor respuesta frente a un imprevisto.</p>
              <div className="mt-8 grid gap-4">
                <div className="flex items-center gap-4 rounded-[22px] bg-[var(--bg)] p-5"><div className="h-2 w-2 rounded-full bg-[var(--blue)]" /><p className="text-base font-semibold text-[var(--blue-deep)]">Asesoría según tu etapa y prioridades</p></div>
                <div className="flex items-center gap-4 rounded-[22px] bg-[var(--bg)] p-5"><div className="h-2 w-2 rounded-full bg-[var(--blue)]" /><p className="text-base font-semibold text-[var(--blue-deep)]">Comparativa real entre compañías</p></div>
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/contacto" className="btn-primary">Consulta sin compromiso</Link>
                 <a href={site.instagram} target="_blank" rel="noreferrer" className="btn-ghost"><Instagram className="h-4 w-4" /> Instagram</a>
              </div>
            </div>
          </RevealLight>
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
          <RevealLight direction="right">
            <div>
              <p className="kicker">Resolvemos tus dudas</p>
              <h2 id="faq-title" className="mt-3 section-title">¿Tienes preguntas antes de empezar?</h2>
              <p className="section-copy mt-4">Aquí respondemos con más detalle a preguntas habituales. Y si prefieres una explicación más personal, puedes escribirnos por WhatsApp o pedir orientación.</p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row xl:flex-col">
                <a href={buildWhatsAppHref('Hola, tengo una duda sobre seguros y quiero una orientación.')} className="btn-whatsapp sm:w-auto xl:w-fit">Hablar por WhatsApp</a>
                <Link href="/contacto" className="btn-secondary sm:w-auto xl:w-fit">Pedir orientación</Link>
              </div>
            </div>
          </RevealLight>
          <RevealLight direction="left">
            <FAQAccordion items={generalFaqs} contextualLinks />
          </RevealLight>
        </div>
      </div>
    </section>
  );
}

export function FinalCTASection() {
  return (
     <section id="cta-final" aria-labelledby="cta-title" className="section-pad pt-0 mb-12">
      <div className="container-shell">
        <RevealLight>
          <div className="soft-card relative overflow-hidden bg-[var(--blue-deep)] p-12 text-center text-white md:p-20">
            <div className="absolute inset-0">
              <Image src="/images/agent/sebastian.jpg" alt="Sebastián, asesor colaborador en seguros de vida y accidentes" fill className="object-cover opacity-25 brightness-50" />
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--blue-deep)] via-[var(--blue-deep)]/90 to-transparent" />
            </div>
            <div className="relative z-10 mx-auto max-w-4xl">
              <h2 id="cta-title" className="font-heading text-4xl font-extrabold tracking-tight md:text-6xl lg:text-7xl leading-tight">¿Hablamos sobre lo que te preocupa?</h2>
              <p className="mt-6 text-lg text-white/80 md:text-xl">Una llamada breve suele ser el camino más rápido para despejar dudas. Desde ahí vemos juntos qué producto tiene sentido para ti de forma directa y profesional.</p>
              <div className="mt-10 flex flex-col gap-4 justify-center sm:flex-row">
                <Link href="/contacto" className="btn-primary bg-white text-[var(--blue-deep)] hover:bg-white/90">Elegir mi seguro con Rosa</Link>
                <a href={buildWhatsAppHref('Hola, quiero una consulta sin compromiso para revisar qué seguro me encaja mejor.')} className="btn-whatsapp bg-[#4CAF50] text-white border-none">Hablar por WhatsApp</a>
              </div>
            </div>
          </div>
        </RevealLight>
      </div>
    </section>
  );
}


export function MascotHelperSection() {
  return (
     <section className="section-pad bg-white-pure pt-10">
      <div className="container-shell">
        <RevealLight>
          <div className="soft-card glass overflow-hidden border-white/60 shadow-2xl bg-white-pure">
            <div className="grid gap-0 xl:grid-cols-[0.85fr_1.15fr]">
              <div className="relative min-h-[360px] bg-gradient-to-br from-[#81C784]/20 to-[#003366]/10 flex items-center justify-center p-12">
                <div className="relative w-full h-full max-w-[280px]">
                  <Image src="/images/home/mascota-vpi.png" alt="Tortuga protectora — Mascota de Valentín Protección Integral" fill className="object-contain drop-shadow-2xl" />
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
        </RevealLight>
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
        <RevealLight>
          <div className="mb-12 text-center flex flex-col items-center">
            <p className="kicker">Tu seguridad es lo primero</p>
            <h2 id="trust-title" className="mt-4 section-title mx-auto max-w-3xl">Por qué más de 1.200 familias confían en Valentín</h2>
            <p className="section-copy mt-4 mx-auto">Te ayudamos a resolver dudas reales y a mantenerte al día sobre seguros con nuestros artículos especializados.</p>
          </div>
        </RevealLight>
        <div className="grid gap-5 lg:grid-cols-3">
          {posts.map((post, idx) => (
            <RevealLight key={post.slug} delay={idx * 0.1}>
              <article className="soft-card overflow-hidden h-full flex flex-col">
                <Link href={`/blog/${post.slug}`} className="block h-full flex flex-col">
                  <div className="relative h-56">
                    <Image src={post.image} alt={post.imageAlt} fill className="object-cover transition-transform duration-500 hover:scale-105" />
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="font-heading text-2xl font-semibold text-[var(--blue-deep)]">{post.title}</h3>
                    <p className="mt-3 text-base leading-8 text-[var(--muted)] flex-grow">{post.excerpt}</p>
                    <div className="btn-ghost mt-5 w-fit">Ir al blog <ArrowRight className="h-4 w-4" /></div>
                   </div>
                </Link>
              </article>
            </RevealLight>
          ))}
        </div>
      </div>
    </section>
  );
}
