import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { StickyWhatsApp } from '@/components/sticky-whatsapp';
import { AgentTrustBlock, BlogPreviewSection, FinalCTASection, GeneralFaqSection, HeroLeadSection, ProductCategoryGrid, StatsSection, TrustBadgesSection } from '@/components/home-sections';
import { TestimonialsCarousel } from '@/components/testimonials-carousel';
import type { Metadata } from 'next';
import { site } from '@/lib/products';
import SchemaBreadcrumb from '@/components/seo/schema-breadcrumb';

export const metadata: Metadata = {
  title: "Tu Asesora de Seguros en Madrid · Rosa Valentín | Valentín",
  description: "¿Buscas asesora de seguros en Madrid? Rosa Valentín ofrece asesoramiento independiente en salud, vida, mascotas y negocios. Consulta gratis sin letra pequeña.",
  alternates: {
    canonical: site.domain,
  },
  openGraph: {
    title: "Tu Asesora de Seguros en Madrid · Rosa Valentín | Valentín",
    description: "¿Buscas asesora de seguros en Madrid? Rosa Valentín ofrece asesoramiento independiente en salud, vida, mascotas y negocios. Consulta gratis sin letra pequeña.",
    images: [{ url: `${site.domain}/og-image.png`, alt: "Tu Asesora de Seguros en Madrid - Rosa Valentín" }],
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
        <TrustBadgesSection />
        <ProductCategoryGrid />
        <AgentTrustBlock />
        <BlogPreviewSection />
        <GeneralFaqSection />
        <TestimonialsCarousel />
        <FinalCTASection />
      </main>
      <Footer />
      <StickyWhatsApp />
    </>
  );
}
