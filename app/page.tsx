import dynamicImport from 'next/dynamic';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { StickyWhatsApp } from '@/components/sticky-whatsapp';
import Link from 'next/link';
import { TrendingUp, Users, Heart, Briefcase } from 'lucide-react';
import { ProductCategoryGrid } from '@/components/home-sections';
import { getLocalPexelsImage } from '@/lib/pexels';

// Framer-motion components isolated via 'use client' wrapper (ssr:false)
import { HeroLeadSection, ProductAccessSection, StatsSection } from '@/components/hero-sections-wrapper';
const GoogleReviewsWidget = dynamicImport(() => import('@/components/GoogleReviewsWidget'));
const TrustBadgesSection = dynamicImport(() => import('@/components/home-sections').then(m => m.TrustBadgesSection));
const MascotHelperSection = dynamicImport(() => import('@/components/home-sections').then(m => m.MascotHelperSection));
const ComparisonCardsSection = dynamicImport(() => import('@/components/home-sections').then(m => m.ComparisonCardsSection));
const AgentTrustBlock = dynamicImport(() => import('@/components/home-sections').then(m => m.AgentTrustBlock));
const HowItWorksSection = dynamicImport(() => import('@/components/HowItWorksSection'));
const BlogPreviewSection = dynamicImport(() => import('@/components/home-sections').then(m => m.BlogPreviewSection));
const GeneralFaqSection = dynamicImport(() => import('@/components/home-sections').then(m => m.GeneralFaqSection));
const FinalCTASection = dynamicImport(() => import('@/components/home-sections').then(m => m.FinalCTASection));
const CredentialsBar = dynamicImport(() => import('@/components/CredentialsBar'));
const GarantiaPrecio = dynamicImport(() => import('@/components/garantia-precio').then(m => m.GarantiaPrecio));
import type { Metadata } from 'next';
import { site } from '@/lib/products';
import SchemaBreadcrumb from '@/components/seo/schema-breadcrumb';
import { zonas } from '@/lib/zonas';
import { getHomeContent } from '@/components/home-content';

export const metadata: Metadata = {
  title: "Asesor de Seguros en Madrid — Salud, Vida y Más | VPI",
  description:
    "Agente de seguros registrado DGSFP en Madrid. Salud, vida, dental y mascotas con criterio profesional y registro en la DGSFP. Sin presión comercial.",
  keywords: "asesor de seguros madrid, asesores de seguros madrid, seguro de salud madrid, seguro de vida madrid, agente seguros registrado DGSFP madrid, consulta seguros gratis madrid",
  authors: [{ name: "Rosa Valentín" }],
  publisher: "Valentín Protección Integral",
  openGraph: {
    title: "Asesor de Seguros en Madrid — Salud, Vida y Más | VPI",
    description: "Agente de seguros registrado DGSFP en Madrid. Seguros de salud, vida, dental y mascotas con criterio profesional y registro en la DGSFP.",
    url: "https://valentinproteccionintegral.com",
    siteName: "Valentín Protección Integral",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Asesor de Seguros en Madrid — Salud, Vida y Más | VPI",
    description: "Agente de seguros registrado DGSFP en Madrid. Seguros de salud, vida, dental y mascotas con criterio profesional y registro en la DGSFP.",
  },
  alternates: {
    canonical: "https://valentinproteccionintegral.com",
    languages: {
      es: "https://valentinproteccionintegral.com",
      en: "https://valentinproteccionintegral.com/en",
      "x-default": "https://valentinproteccionintegral.com",
    },
  },
};

export const dynamic = 'force-static';

export function HomePageView({ content, locale }: { content?: unknown; locale?: 'es' | 'en' }) {
  void content;
  const currentLocale = locale || 'es';
  const home = getHomeContent(currentLocale);
  // Usar imágenes locales de Pexels para mejor rendimiento (LCP)
  const { products }: { products: import('@/lib/products').Product[] } = require('@/lib/products');
  const productsWithImages = products.map((product: import('@/lib/products').Product) => {
    const localImage = getLocalPexelsImage(product.slug);
    return {
      ...product,
      pexelsImage: localImage || product.cardImage,
    };
  });
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
            "description": currentLocale === 'en' ? home.meta.description : "Asesora de seguros en Madrid especializada en salud, vida, mascotas, dental, viaje, accidentes, protección jurídica y negocios. Más de 10 años de experiencia.",
            "url": currentLocale === 'en' ? "https://valentinproteccionintegral.com/en" : "https://valentinproteccionintegral.com",
            "inLanguage": currentLocale,
            "logo": "https://valentinproteccionintegral.com/brand/logo-vpi.webp",
            "sameAs": ["https://www.instagram.com/segurosvalentin/"],
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
              "ratingCount": "49"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": currentLocale === 'en' ? 'Insurance available' : "Seguros disponibles",
              "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": currentLocale === 'en' ? "Health insurance in Madrid" : "Seguro de Salud en Madrid" }},
                ...(['life', 'pets', 'dental', 'travel', 'accident', 'funeral'].map((name) => ({ "@type": "Offer", "itemOffered": { "@type": "Service", "name": currentLocale === 'en' ? ({ life: 'Life insurance in Madrid', pets: 'Pet insurance in Madrid', dental: 'Dental insurance in Madrid', travel: 'Travel insurance in Madrid', accident: 'Accident insurance in Madrid', funeral: 'Funeral insurance in Madrid' } as Record<string, string>)[name] : ({ life: 'Seguro de Vida en Madrid', pets: 'Seguro para Mascotas en Madrid', dental: 'Seguro Dental en Madrid', travel: 'Seguro de Viaje en Madrid', accident: 'Seguro de Accidentes en Madrid', funeral: 'Seguro de Decesos en Madrid' } as Record<string, string>)[name] } })))
              ]
            }
          })
        }}
      />
      <SchemaBreadcrumb
        items={[
          { name: currentLocale === 'en' ? 'Home' : 'Inicio', item: currentLocale === 'en' ? `${site.domain}/en` : site.domain, position: 1 }
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": home.faq.items.map((faq: { q: string; a: string }) => ({
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
        <HeroLeadSection locale={currentLocale} />
        <ProductAccessSection locale={currentLocale} />
        <StatsSection />
        <GoogleReviewsWidget locale={currentLocale} />
        <TrustBadgesSection locale={currentLocale} />
        <MascotHelperSection locale={currentLocale} />
        <ProductCategoryGrid productsWithImages={productsWithImages} locale={currentLocale} />

        {/* Sección ICP - Encuentra lo que necesitas según tu situación */}
        <section className="section-pad bg-[var(--bg-soft)]">
          <div className="container-shell">
            <h2 className="section-title text-center mb-4">{home.profiles.title}</h2>
            <p className="text-center text-[var(--muted)] mb-10 max-w-2xl mx-auto">
              {home.profiles.intro}
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
              {/* Joven Profesional */}
              <Link href={currentLocale === 'en' ? '/en/for/young-professionals' : '/para/jovenes-profesionales'} className="glass-card-premium p-6 hover:shadow-lg transition-all group text-center">
                <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-[var(--blue)]/10 flex items-center justify-center">
                  <TrendingUp className="h-7 w-7 text-[var(--blue)]" />
                </div>
                <h3 className="font-heading text-lg font-bold mb-2">{home.profiles.items[0].title}</h3>
                <p className="text-[var(--muted)] text-sm">
                  {home.profiles.items[0].copy}
                </p>
                <span className="inline-flex items-center gap-1 mt-4 text-[var(--blue)] font-medium text-sm group-hover:gap-2 transition-all">
                  {home.profiles.items[0].cta}
                </span>
              </Link>

              {/* Familias */}
              <Link href={currentLocale === 'en' ? '/en/for/families' : '/para/familias'} className="glass-card-premium p-6 hover:shadow-lg transition-all group text-center">
                <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-[var(--blue)]/10 flex items-center justify-center">
                  <Users className="h-7 w-7 text-[var(--blue)]" />
                </div>
                <h3 className="font-heading text-lg font-bold mb-2">{home.profiles.items[1].title}</h3>
                <p className="text-[var(--muted)] text-sm">
                  {home.profiles.items[1].copy}
                </p>
                <span className="inline-flex items-center gap-1 mt-4 text-[var(--blue)] font-medium text-sm group-hover:gap-2 transition-all">
                  {home.profiles.items[1].cta}
                </span>
              </Link>

              {/* Seniors */}
              <Link href={currentLocale === 'en' ? '/en/for/seniors' : '/para/seniors'} className="glass-card-premium p-6 hover:shadow-lg transition-all group text-center">
                <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-[var(--blue)]/10 flex items-center justify-center">
                  <Heart className="h-7 w-7 text-[var(--blue)]" />
                </div>
                <h3 className="font-heading text-lg font-bold mb-2">{home.profiles.items[2].title}</h3>
                <p className="text-[var(--muted)] text-sm">
                  {home.profiles.items[2].copy}
                </p>
                <span className="inline-flex items-center gap-1 mt-4 text-[var(--blue)] font-medium text-sm group-hover:gap-2 transition-all">
                  {home.profiles.items[2].cta}
                </span>
              </Link>

              {/* Autónomos */}
              <Link href={currentLocale === 'en' ? '/en/for/self-employed' : '/para/autonomos'} className="glass-card-premium p-6 hover:shadow-lg transition-all group text-center">
                <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-[var(--blue)]/10 flex items-center justify-center">
                  <Briefcase className="h-7 w-7 text-[var(--blue)]" />
                </div>
                <h3 className="font-heading text-lg font-bold mb-2">{home.profiles.items[3].title}</h3>
                <p className="text-[var(--muted)] text-sm">
                  {home.profiles.items[3].copy}
                </p>
                <span className="inline-flex items-center gap-1 mt-4 text-[var(--blue)] font-medium text-sm group-hover:gap-2 transition-all">
                  {home.profiles.items[3].cta}
                </span>
              </Link>
            </div>
          </div>
        </section>

        <ComparisonCardsSection locale={currentLocale} />
        <AgentTrustBlock locale={currentLocale} />
        <HowItWorksSection />
        <BlogPreviewSection locale={currentLocale} />
        <GeneralFaqSection locale={currentLocale} />
        <CredentialsBar />
        
        {/* Sección de zonas en la home */}
        <section className="bg-[var(--surface)] py-10 border-t">
          <div className="container-shell text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-[var(--muted)] mb-2">{home.zones.label}</p>
            <h2 className="font-heading text-xl sm:text-2xl font-bold text-[var(--blue-deep)] mb-6">
              {home.zones.title}
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {zonas.map(z => (
                <Link key={z.slug} href={`/zonas/${z.slug}`}
                  className="glass rounded-full border border-white/60 bg-white/40 px-5 py-3 text-sm font-semibold text-[var(--blue-deep)] hover:bg-white hover:border-[var(--blue)] transition-all">
                  {home.zones.linkPrefix}{z.nombre}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <GarantiaPrecio />
        <FinalCTASection locale={currentLocale} />
      </main>
      <Footer />
      <StickyWhatsApp />
    </>
  );
}

export default function HomePage() {
  return <HomePageView locale="es" />;
}
