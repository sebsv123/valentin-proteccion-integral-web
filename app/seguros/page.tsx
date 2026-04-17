import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { MessageCircle, Phone } from 'lucide-react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { StickyWhatsApp } from '@/components/sticky-whatsapp';
import { buildWhatsAppHref, getSubpagesForProduct, products, site } from '@/lib/products';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import GoogleReviewsWidget from '@/components/GoogleReviewsWidget';
import RevealLight from '@/components/ui/reveal-light';
import { getPexelsImage } from '@/lib/pexels';

export const metadata: Metadata = {
  title: "Todos Nuestros Seguros en Madrid | Valentín Protección",
  description: "Salud, vida, dental, mascotas, viaje y mucho más. Comparamos las mejores opciones del mercado por ti, sin presión y sin complicaciones. Pide cita gratis.",
  keywords: "seguros madrid, comparar seguros madrid, asesor seguros madrid, tipos de seguros",
  openGraph: {
    title: "Todos Nuestros Seguros en Madrid | Valentín Protección",
    description: "Salud, vida, dental, mascotas, viaje y mucho más. Comparamos las mejores opciones del mercado por ti, sin presión y sin complicaciones.",
    url: "https://valentinproteccionintegral.com/seguros",
    siteName: "Valentín Protección Integral",
    locale: "es_ES",
    type: "website",
  },
  alternates: {
    canonical: "https://valentinproteccionintegral.com/seguros",
  },
};

export const dynamic = 'force-static';

export default async function SegurosHubPage() {
  // Obtener imágenes de Pexels para todos los productos (fallback a imagen local si falla)
  const productsWithImages = await Promise.all(
    products.map(async (product) => {
      const pexelsImage = await getPexelsImage(product.slug);
      return {
        ...product,
        pexelsImage: pexelsImage === '/images/blog/default.jpg' ? product.cardImage : pexelsImage,
      };
    })
  );

  return (
    <>
      <BreadcrumbSchema 
        items={[
          { name: 'Inicio', url: '/' },
          { name: 'Seguros', url: '/seguros' }
        ]} 
      />
      <Header />
      <main className="section-pad pt-6 md:pt-10">
        <div className="container-shell">
          <Breadcrumbs items={[{ label: 'Inicio', href: '/' }, { label: 'Seguros' }]} />
          <div className="mb-10 max-w-3xl">
            <p className="kicker">Nuestros seguros</p>
            <h1 className="mt-3 section-title">Encuentra el producto que mejor encaje con lo que quieres proteger</h1>
            <p className="section-copy mt-4">Cada producto tiene su propia página con ventajas, preguntas frecuentes y formas reales de pedir orientación.</p>
          </div>
          <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
            {productsWithImages.map((product, idx) => {
              const children = getSubpagesForProduct(product.slug);
              return (
                 <RevealLight key={product.slug} delay={idx * 0.1}>
                  <article className="glass-card-premium group overflow-hidden h-full flex flex-col">
                    <div className="relative h-64 overflow-hidden">
                      <Image 
                        src={product.pexelsImage} 
                        alt={product.cardAlt}
                        width={800}
                        height={450}
                        className="object-cover transition-transform duration-700 group-hover:scale-110 w-full h-full" 
                      />
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[rgba(18,59,104,0.85)] to-transparent p-5 text-white">
                        <p className="kicker !text-white/80 !mb-1">{product.label}</p>
                        <h2 className="font-heading text-3xl font-bold">{product.label}</h2>
                      </div>
                    </div>
                    <div className="p-7 flex-grow flex flex-col">
                      <p className="text-base leading-8 text-[var(--muted)] line-clamp-3 flex-grow">{product.summary}</p>
                      {children.length ? (
                        <div className="mt-5 flex flex-wrap gap-2">
                          {children.map((child) => (
                            <Link key={child.slug} href={`/seguros/${product.slug}/${child.slug}`} className="rounded-full bg-white/50 backdrop-blur-sm border border-[var(--border)] px-3 py-1.5 text-xs font-bold text-[var(--blue-deep)] hover:bg-[var(--blue)] hover:text-white transition-all">
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      ) : null}
                      <div className="mt-8 flex flex-col gap-3">
                        <Link href={`/seguros/${product.slug}`} className="btn-secondary w-full justify-center">Ver detalles de {product.label}</Link>
                        <Link href="/contacto" className="btn-ghost w-full justify-center opacity-70 hover:opacity-100">Solicitar orientación</Link>
                      </div>
                    </div>
                  </article>
                </RevealLight>
              );
            })}
          </div>

          <GoogleReviewsWidget title="Lo que dicen nuestros clientes" />

          {/* Rosa Trust Block — Conversión y cercanía */}
          <section className="mt-16 rounded-[32px] bg-gradient-to-br from-[#002244] to-[#0F5E9C] p-8 md:p-12 text-white overflow-hidden">
            <div className="grid gap-8 md:grid-cols-[280px_1fr] items-center">
              <div className="relative mx-auto md:mx-0 h-[320px] w-[260px] rounded-[24px] overflow-hidden border-4 border-white/20 shadow-2xl">
                <Image src="/images/agent/rosa-oficina.jpg" alt="Rosa Valentín — Asesora de seguros" fill className="object-cover object-top" />
              </div>
              <div className="space-y-5">
                <p className="font-heading text-lg font-semibold text-white/70 uppercase tracking-widest">Tu asesora de confianza</p>
                <h2 className="font-heading text-3xl md:text-4xl font-bold leading-tight">
                  Más de 10 años comparando por ti para que elijas con total seguridad
                </h2>
                <p className="text-lg leading-8 text-white/80 max-w-2xl">
                  Soy Rosa Valentín. Te acompaño personalmente en todo el proceso: escucho lo que necesitas, comparo las mejores opciones del mercado y te explico cada detalle con claridad. Sin presiones, sin letra pequeña, sin sorpresas.
                </p>
                <div className="flex flex-col gap-3 sm:flex-row pt-2">
                  <a href={buildWhatsAppHref('Hola Rosa, quiero una orientación personalizada sobre seguros.')} className="btn-whatsapp !text-base !px-8 !py-4 shadow-xl"><MessageCircle className="h-5 w-5" /> Hablar con Rosa</a>
                  <a href={`tel:${site.phoneHref}`} className="inline-flex items-center gap-2 rounded-[16px] border-2 border-white/30 bg-white/10 px-8 py-4 text-base font-semibold text-white hover:bg-white/20 transition-colors"><Phone className="h-4 w-4" /> {site.phone}</a>
                </div>
              </div>
            </div>
          </section>

        </div>
      </main>
      <Footer />
      <StickyWhatsApp />
    </>
  );
}
