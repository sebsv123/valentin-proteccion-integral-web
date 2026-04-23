import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { StickyWhatsApp } from '@/components/sticky-whatsapp';
import { site, buildWhatsAppHref } from '@/lib/products';
import { blogPosts } from '@/lib/blog';
import SchemaBreadcrumb from '@/components/seo/schema-breadcrumb';
import GoogleReviewsWidget from '@/components/GoogleReviewsWidget';
import { getPexelsImage } from '@/lib/pexels';
import { BlogGrid } from '@/components/blog-grid';

export const metadata: Metadata = {
  title: "Blog de Seguros · Consejos Sin Letra Pequeña | Valentín",
  description: "Guías, comparativas y consejos honestos sobre seguros. Todo lo que necesitas saber antes de contratar, explicado sin tecnicismos. ¡Léelo gratis!",
  keywords: "blog seguros madrid, consejos seguros, guia seguro salud madrid, comparativa seguros 2026",
  openGraph: {
    title: "Blog de Seguros · Consejos Sin Letra Pequeña | Valentín",
    description: "Guías, comparativas y consejos honestos sobre seguros. Todo lo que necesitas saber antes de contratar, explicado sin tecnicismos.",
    url: "https://valentinproteccionintegral.com/blog",
    siteName: "Valentín Protección Integral",
    locale: "es_ES",
    type: "website",
  },
  alternates: {
    canonical: "https://valentinproteccionintegral.com/blog",
  },
};

export const dynamic = 'force-static';

export default async function BlogPage() {
  // Obtener imágenes de Pexels para todos los posts
  const postsWithImages = await Promise.all(
    blogPosts.map(async (post) => ({
      ...post,
      pexelsImage: await getPexelsImage(post.slug),
    }))
  );

  return (
    <>
      <SchemaBreadcrumb
        items={[
          { name: 'Inicio', item: site.domain, position: 1 },
          { name: 'Blog', item: `${site.domain}/blog`, position: 2 }
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "Blog de Seguros · Valentín Protección Integral",
            "url": "https://valentinproteccionintegral.com/blog",
            "description": "Guías y consejos honestos sobre seguros explicados sin tecnicismos.",
            "publisher": {
              "@type": "Organization",
              "name": "Valentín Protección Integral",
              "url": "https://valentinproteccionintegral.com"
            },
            "blogPost": postsWithImages
              .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
              .slice(0, 10)
              .map(post => ({
                "@type": "BlogPosting",
                "headline": post.title,
                "description": post.excerpt,
                "url": `https://valentinproteccionintegral.com/blog/${post.slug}`,
                "datePublished": post.date,
                "image": post.pexelsImage.startsWith('http') ? post.pexelsImage : `https://valentinproteccionintegral.com${post.pexelsImage}`,
                "author": {
                  "@type": "Person",
                  "name": "Rosa Valentín"
                }
              }))
          })
        }}
      />
      <Header />
      <main>
        <section className="section-pad pt-6 md:pt-10">
          <div className="container-shell">
            <Breadcrumbs items={[{ label: 'Inicio', href: '/' }, { label: 'Blog' }]} />
            <div className="mt-6 soft-card overflow-hidden p-7 md:p-10">
              <p className="kicker">Blog</p>
              <h1 className="mt-3 font-heading text-5xl font-bold tracking-tight text-[var(--blue-deep)] md:text-6xl">Contenido útil para decidir con más criterio</h1>
              <p className="mt-4 max-w-3xl text-lg leading-9 text-[var(--muted)]">Aquí reunimos guías breves, consejos y preguntas que ayudan a entender mejor qué conviene revisar antes de contratar. Sin ruido, sin promesas grandilocuentes y con un lenguaje más claro.</p>
            </div>
          </div>
        </section>

        <BlogGrid posts={postsWithImages.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())} />

        <GoogleReviewsWidget title="Opiniones sobre nuestro asesoramiento" />

        <section className="section-pad pt-0">
          <div className="container-shell">
            <div className="soft-card bg-[linear-gradient(135deg,rgba(0,34,68,0.96),rgba(0,51,102,0.9))] p-8 text-white md:p-10">
              <p className="kicker !text-white/70">¿Prefieres resolverlo con una conversación?</p>
              <h2 className="mt-3 font-heading text-4xl font-bold tracking-tight md:text-5xl">Podemos pasar de la guía a tu caso concreto</h2>
              <p className="mt-4 max-w-3xl text-lg leading-9 text-white/80">Si quieres aterrizar lo que has leído a tu situación real, puedes escribirnos por WhatsApp o pedir orientación sin compromiso.</p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a href={buildWhatsAppHref('Hola, vengo del blog y quiero una orientación sobre seguros.')} className="btn-whatsapp !bg-white !text-[var(--blue-deep)]">Hablar por WhatsApp</a>
                <Link href="/contacto" className="btn-secondary !bg-transparent !border-white/30 !text-white hover:!bg-white hover:!text-[var(--blue-deep)]">Ir a contacto</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <StickyWhatsApp />
    </>
  );
}
