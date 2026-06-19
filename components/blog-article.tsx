"use client";

import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Calendar, CheckCircle, Clock, FileText, ChevronRight } from 'lucide-react';
import { BlogPost, getRelatedPosts } from '@/lib/blog';
import { buildWhatsAppHref } from '@/lib/products';
import { FAQAccordion } from '@/components/faq-accordion';
import RevealLight from '@/components/ui/reveal-light';
import { WhatsAppIcon } from '@/components/ui/whatsapp-icon';

export function BlogArticle({ post }: { post: BlogPost }) {
  const related = getRelatedPosts(post.slug);

  return (
    <article id="blog-post">
      {/* Hero */}
      <header className="section-pad pt-6 md:pt-10">
        <div className="container-shell">
          <Link href="/blog" className="mb-4 inline-flex items-center gap-2 text-sm font-semibold text-[var(--blue)] hover:text-[var(--blue-deep)]">
            <ArrowLeft className="h-4 w-4" /> Volver al blog
          </Link>
          <div className="mt-4 glass-card-premium overflow-hidden border-none shadow-2xl">
            <div className="relative h-72 md:h-[500px]">
              <Image src={post.image} alt={post.imageAlt} fill className="object-cover transition-transform duration-1000 group-hover:scale-105" priority />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,34,68,0.95)] via-[rgba(0,34,68,0.4)] to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-8 md:p-12">
                <div className="flex flex-wrap items-center gap-6 text-sm font-bold text-white/90 uppercase tracking-widest">
                  <span className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full border border-white/20"><Calendar className="h-4 w-4 text-[var(--orange)]" /> {new Date(post.date).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                  <span className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full border border-white/20"><Clock className="h-4 w-4 text-[var(--orange)]" /> {post.readTime} lectura</span>
                </div>
                <h1 className="mt-6 max-w-4xl font-heading text-4xl font-extrabold tracking-tight text-white md:text-6xl leading-[1.1]">{post.title}</h1>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <section aria-label="Contenido del artículo" className="section-pad pt-0">
        <div className="container-shell">
          <div className="grid gap-8 xl:grid-cols-[1fr_340px]">
            {/* Article body */}
            <div className="space-y-8">
              {post.sections.map((section, idx) => (
                <RevealLight key={section.heading} delay={idx * 0.03}>
                  <div className="glass-card-premium p-8 md:p-12 hover:translate-y-0">
                    <h2 className="font-heading text-3xl font-extrabold text-[var(--blue-deep)] md:text-4xl leading-tight">{section.heading}</h2>
                    <div className="mt-7 space-y-6">
                      {section.content.map((paragraph, pIdx) => (
                        <p key={pIdx} className="text-lg leading-relaxed text-[var(--muted)] md:text-xl font-medium opacity-90">{paragraph}</p>
                      ))}
                    </div>
                  </div>
                </RevealLight>
              ))}

              {/* ── FAQ con acordeón ── */}
              {post.faqs && post.faqs.length > 0 && (
                <RevealLight>
                  <div className="glass-card-premium p-8 md:p-12 hover:translate-y-0">
                    <p className="kicker !text-[var(--blue)]">Preguntas frecuentes</p>
                    <h2 className="font-heading mt-3 mb-8 text-3xl font-extrabold text-[var(--blue-deep)] md:text-4xl leading-tight">
                      Resolvemos tus dudas sobre este tema
                    </h2>
                    <div className="bg-white/40 rounded-[24px] p-2 border border-white/60">
                      <FAQAccordion
                        items={post.faqs.map(f => ({ q: f.question, a: f.answer }))}
                        contextualLinks={true}
                      />
                    </div>
                  </div>
                </RevealLight>
              )}

              {/* CTA - Editorial premium */}
              <RevealLight>
                <div className="relative overflow-hidden rounded-[32px] bg-[var(--blue-deep)] p-8 md:p-12 lg:p-14">
                  {/* Decorative gradient orbs */}
                  <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[var(--blue)]/20 blur-3xl" />
                  <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-[var(--orange)]/10 blur-3xl" />
                  
                  <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
                    {/* Left column: text content */}
                    <div className="max-w-2xl">
                      <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-white/80 backdrop-blur-sm">
                        <ChevronRight className="h-3 w-3 text-[var(--orange)]" />
                        ¿Te ha resultado útil?
                      </p>
                      <h3 className="mt-6 font-heading text-3xl font-extrabold leading-tight text-white md:text-4xl lg:text-5xl">
                        Aterriza esta información a tu caso concreto
                      </h3>
                      <p className="mt-4 text-lg leading-relaxed text-white/70 md:text-xl">
                        Cada persona tiene una situación distinta. Lo que has leído es una guía general, pero si quieres saber cómo aplicarlo a tu caso, podemos ayudarte sin compromiso.
                      </p>
                      
                      {/* Bullet list */}
                      <ul className="mt-6 space-y-3">
                        {[
                          'Orientación 100% personalizada y sin compromiso',
                          'Te explicamos las opciones que mejor se adaptan a ti',
                          'Resolvemos tus dudas en menos de 5 minutos por WhatsApp',
                        ].map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-white/80">
                            <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-[var(--orange)]" />
                            <span className="text-base font-medium leading-relaxed md:text-lg">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Right column: buttons */}
                    <div className="flex shrink-0 flex-col gap-4 lg:min-w-[260px]">
                      <a
                        href={buildWhatsAppHref(`Hola, vengo del artículo "${post.title}" y quiero una orientación personalizada.`)}
                        className="inline-flex items-center justify-center gap-3 rounded-2xl bg-white px-8 py-4 text-base font-bold text-[var(--blue-deep)] shadow-lg transition-all hover:bg-white/90 hover:shadow-xl active:scale-[0.98]"
                      >
                        <WhatsAppIcon className="h-5 w-5" />
                        Hablar por WhatsApp
                      </a>
                      <Link
                        href="/contacto"
                        className="inline-flex items-center justify-center gap-3 rounded-2xl border-2 border-white/25 bg-white/5 px-8 py-4 text-base font-bold text-white backdrop-blur-sm transition-all hover:border-white/40 hover:bg-white/10 active:scale-[0.98]"
                      >
                        <FileText className="h-5 w-5" />
                        Solicitar consulta
                      </Link>
                      <Link
                        href="/blog"
                        className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-white/60 transition-all hover:text-white"
                      >
                        Más artículos <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </RevealLight>
            </div>

            {/* Sidebar */}
            <aside className="space-y-6">
              {/* Mascot tips */}
              <div className="soft-card overflow-hidden">
                <div className="relative h-48 bg-[linear-gradient(180deg,rgba(76,175,80,0.15),rgba(0,51,102,0.05))]">
                  <Image
                    src="/images/home/mascota-vpi.webp"
                    alt="Mascota de ayuda VPI"
                    fill
                    className="object-contain p-4"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <p className="font-heading text-xl font-bold text-[var(--blue-deep)]">Consejos rápidos</p>
                  <div className="mt-4 space-y-3">
                    {post.tips.map((tip, idx) => (
                      <div key={idx} className="rounded-[18px] bg-[var(--bg)] px-4 py-3 text-sm leading-7 text-[var(--text)]">
                        💡 {tip}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Quick contact */}
              <div className="soft-card p-5">
                <p className="font-heading text-xl font-bold text-[var(--blue-deep)]">¿Prefieres resolverlo en persona?</p>
                <p className="mt-2 text-sm leading-7 text-[var(--muted)]">Puedes escribirnos por WhatsApp y te ayudamos a aterrizar cualquier información a tu caso concreto.</p>
                <div className="mt-4 grid gap-3">
                  <a href={buildWhatsAppHref('Hola, vengo del blog y quiero una orientación.')} className="btn-whatsapp w-full justify-center"><WhatsAppIcon className="h-4 w-4" /> WhatsApp</a>
                  <Link href="/contacto" className="btn-ghost w-full justify-center">Formulario</Link>
                </div>
              </div>

              {/* Related posts */}
              {related.length > 0 && (
                <div className="soft-card p-5">
                  <p className="font-heading text-xl font-bold text-[var(--blue-deep)]">Más artículos</p>
                  <div className="mt-4 space-y-4">
                    {related.map((relPost) => (
                      <Link key={relPost.slug} href={`/blog/${relPost.slug}`} className="group block">
                        <div className="rounded-[18px] border border-[var(--border)] bg-white p-4 transition-all hover:border-[var(--blue)] hover:shadow-sm">
                          <p className="font-heading text-lg font-semibold text-[var(--blue-deep)] group-hover:text-[var(--blue)]">{relPost.title}</p>
                          <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{relPost.excerpt}</p>
                          <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-[var(--blue)]">Leer más <ArrowRight className="h-3.5 w-3.5" /></span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </aside>
          </div>
        </div>
      </section>
    </article>
  );
}
