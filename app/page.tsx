import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { StickyWhatsApp } from '@/components/sticky-whatsapp';
import Link from 'next/link';
import { HeroLeadSection, StatsSection } from '@/components/hero-animated';
import { AgentTrustBlock, BlogPreviewSection, FinalCTASection, GeneralFaqSection, ProductCategoryGrid, TrustBadgesSection, ComparisonCardsSection, MascotHelperSection } from '@/components/home-sections';
import GoogleReviewsWidget from '@/components/GoogleReviewsWidget';
import HowItWorksSection from '@/components/HowItWorksSection';
import CredentialsBar from '@/components/CredentialsBar';
import type { Metadata } from 'next';
import { site } from '@/lib/products';
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

export default function HomePage() {
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
            "logo": "https://valentinproteccionintegral.com/brand/logo-vpi.jpeg",
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
              "ratingCount": "30"
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
      <Header />
      <main>
        <HeroLeadSection />
        <StatsSection />
        <GoogleReviewsWidget />
        <TrustBadgesSection />
        <MascotHelperSection />
        <ProductCategoryGrid />
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
