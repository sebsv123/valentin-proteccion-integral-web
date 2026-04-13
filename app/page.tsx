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
