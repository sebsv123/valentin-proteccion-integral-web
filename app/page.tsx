import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { StickyWhatsApp } from '@/components/sticky-whatsapp';
import Link from 'next/link';
import { HeroLeadSection, StatsSection } from '@/components/hero-animated';
import { AgentTrustBlock, BlogPreviewSection, FinalCTASection, GeneralFaqSection, ProductCategoryGrid, TrustBadgesSection, ComparisonCardsSection, MascotHelperSection } from '@/components/home-sections';
import { getPexelsImage } from '@/lib/pexels';
import GoogleReviewsWidget from '@/components/GoogleReviewsWidget';
import HowItWorksSection from '@/components/HowItWorksSection';
import CredentialsBar from '@/components/CredentialsBar';
import type { Metadata } from 'next';
import { site, generalFaqs } from '@/lib/products';
import SchemaBreadcrumb from '@/components/seo/schema-breadcrumb';
import { zonas } from '@/lib/zonas';

export const metadata: Metadata = {
  title: "Asesores de Seguros en Madrid · Consulta Gratuita | Valentín",
  description: "Tus asesores de seguros en Madrid con +10 años de experiencia. Salud, vida, mascotas, dental, viaje y más. Sin letra pequeña. Primera consulta gratis.",
  keywords: "asesores de seguros madrid, asesora de seguros madrid, seguro de salud madrid, seguro de vida madrid, correduría seguros independiente madrid, consulta seguros gratis madrid",
  authors: [{ name: "Rosa Valentín" }],
  openGraph: {
    title: "Asesores de Seguros en Madrid · Consulta Gratuita | Valentín",
    description: "Tus asesores de seguros en Madrid con +10 años de experiencia. Salud, vida, mascotas, dental, viaje y más. Sin letra pequeña. Primera consulta gratis.",
    url: "https://valentinproteccionintegral.com",
    siteName: "Valentín Protección Integral",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Asesores de Seguros en Madrid · Consulta Gratuita | Valentín",
    description: "Tus asesores de seguros en Madrid. +10 años, +1.200 familias. Salud, vida, mascotas y más. Primera consulta gratis.",
  },
  alternates: {
    canonical: "https://valentinproteccionintegral.com",
  },
};

export const dynamic = 'force-static';

export default async function HomePage() {
  // Obtener imágenes de Pexels para todos los productos (fallback a imagen local si falla)
  const { products } = await import('@/lib/products');
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
      {/* === SEO: LocalBusiness Schema === */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["LocalBusiness", "InsuranceAgency"],
            "name": "Valentín Protección Integral",
            "description": "Asesora de seguros en Madrid especializada en salud, vida, mascotas, dental, viaje, accidentes, protección jurídica y negocios. Más de 10 años de experiencia.",
            "url": "https://valentinproteccionintegral.com",
            "logo": "https://valentinproteccionintegral.com/brand/logo-vpi.png",
            "sameAs": ["https://www.instagram.com/segurosrosavalentin"],
            "telephone": "+34-603-44-87-65",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "C. de los Reyes Católicos, 1",
              "addressLocality": "Boadilla del Monte",
              "postalCode": "28660",
              "addressRegion": "Madrid",
              "addressCountry": "ES"
            },
            "areaServed": { "@type": "City", "name": "Madrid" },
            "priceRange": "€€",
            "openingHoursSpecification": [{
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
              "opens": "09:00",
              "closes": "19:00"
            }],
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5.0",
              "bestRating": "5",
              "ratingCount": "47"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Seguros disponibles",
              "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Seguro de Salud en Madrid" }},
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Seguro de Vida en Madrid" }},
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Seguro para Mascotas en Madrid" }},
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Seguro Dental en Madrid" }},
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Seguro de Viaje en Madrid" }},
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Seguro de Accidentes en Madrid" }},
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Seguro de Protección Jurídica en Madrid" }},
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Seguros para Autónomos y Empresas en Madrid" }}
              ]
            }
          })
        }}
      />
      <SchemaBreadcrumb
        items={[
          { name: 'Inicio', item: site.domain, position: 1 }
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": generalFaqs.map((faq: { q: string; a: string }) => ({
              "@type": "Question",
              "name": faq.q,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.a
              }
            }))
          })
        }}
      />
      <Header />
      <main>
        <HeroLeadSection />
        <StatsSection />
        <GoogleReviewsWidget />
        <TrustBadgesSection />
        <MascotHelperSection />
        <ProductCategoryGrid productsWithImages={productsWithImages} />

        {/* Sección ICP - Encuentra lo que necesitas según tu situación */}
        <section className="section-pad bg-[var(--bg-soft)]">
          <div className="container-shell">
            <h2 className="section-title text-center mb-4">Encuentra lo que necesitas según tu situación</h2>
            <p className="text-center text-[var(--muted)] mb-10 max-w-2xl mx-auto">
              Cada etapa de la vida tiene sus prioridades. Elige el perfil que mejor te describe y descubre la protección que realmente necesitas.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
              {/* Joven Profesional */}
              <Link href="/para/jovenes-profesionales" className="glass-card-premium p-6 hover:shadow-lg transition-all group text-center">
                <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-[var(--blue)]/10 flex items-center justify-center">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="font-heading text-lg font-bold mb-2">Joven Profesional</h3>
                <p className="text-[var(--muted)] text-sm">
                  Acabas de emanciparte o tienes hipoteca reciente. Protege lo que estás construyendo.
                </p>
                <span className="inline-flex items-center gap-1 mt-4 text-[var(--blue)] font-medium text-sm group-hover:gap-2 transition-all">
                  Ver más →
                </span>
              </Link>

              {/* Familias */}
              <Link href="/para/familias" className="glass-card-premium p-6 hover:shadow-lg transition-all group text-center">
                <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-[var(--blue)]/10 flex items-center justify-center">
                  <span className="text-2xl">👨‍👩‍👧‍👦</span>
                </div>
                <h3 className="font-heading text-lg font-bold mb-2">Familias</h3>
                <p className="text-[var(--muted)] text-sm">
                  Protege a quienes más quieres. Salud, dental, vida y decesos para toda la familia.
                </p>
                <span className="inline-flex items-center gap-1 mt-4 text-[var(--blue)] font-medium text-sm group-hover:gap-2 transition-all">
                  Ver más →
                </span>
              </Link>

              {/* Seniors */}
              <Link href="/para/seniors" className="glass-card-premium p-6 hover:shadow-lg transition-all group text-center">
                <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-[var(--blue)]/10 flex items-center justify-center">
                  <span className="text-2xl">🌟</span>
                </div>
                <h3 className="font-heading text-lg font-bold mb-2">Seniors</h3>
                <p className="text-[var(--muted)] text-sm">
                  Más de 60 años y quieres tener todo en orden. Tranquilidad para ti y los tuyos.
                </p>
                <span className="inline-flex items-center gap-1 mt-4 text-[var(--blue)] font-medium text-sm group-hover:gap-2 transition-all">
                  Ver más →
                </span>
              </Link>

              {/* Autónomos */}
              <Link href="/para/autonomos" className="glass-card-premium p-6 hover:shadow-lg transition-all group text-center">
                <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-[var(--blue)]/10 flex items-center justify-center">
                  <span className="text-2xl">💼</span>
                </div>
                <h3 className="font-heading text-lg font-bold mb-2">Autónomos</h3>
                <p className="text-[var(--muted)] text-sm">
                  Dedúcete hasta 500€ en el IRPF. Aprovecha las ventajas fiscales que te corresponden.
                </p>
                <span className="inline-flex items-center gap-1 mt-4 text-[var(--blue)] font-medium text-sm group-hover:gap-2 transition-all">
                  Ver más →
                </span>
              </Link>
            </div>
          </div>
        </section>

        <ComparisonCardsSection />
        <AgentTrustBlock />
        <HowItWorksSection />
        <BlogPreviewSection />
        <GeneralFaqSection />
        <CredentialsBar />
        
        {/* Sección de zonas en la home */}
        <section className="bg-[var(--surface)] py-10 border-t">
          <div className="container-shell text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-[var(--muted)] mb-2">
              Cobertura local
            </p>
            <h2 className="font-heading text-xl sm:text-2xl font-bold text-[var(--blue-deep)] mb-6">
              Atendemos en todo el noroeste de Madrid
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {zonas.map(z => (
                <Link key={z.slug} href={`/zonas/${z.slug}`}
                  className="glass rounded-full border border-white/60 bg-white/40 px-5 py-3 text-sm font-semibold text-[var(--blue-deep)] hover:bg-white hover:border-[var(--blue)] transition-all">
                  Seguros en {z.nombre}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <FinalCTASection />
      </main>
      <Footer />
      <StickyWhatsApp />
    </>
  );
}
