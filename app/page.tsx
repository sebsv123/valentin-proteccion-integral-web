import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { StickyWhatsApp } from '@/components/sticky-whatsapp';
import { AgentTrustBlock, BlogPreviewSection, FinalCTASection, GeneralFaqSection, HeroLeadSection, ProductCategoryGrid, StatsSection, TrustBadgesSection } from '@/components/home-sections';
import { TestimonialsCarousel } from '@/components/testimonials-carousel';
import type { Metadata } from 'next';
import { site } from '@/lib/products';
import SchemaBreadcrumb from '@/components/seo/schema-breadcrumb';

export const metadata: Metadata = {
  title: "Asesora de Seguros en Madrid · Consulta Gratis | Valentín",
  description: "¿Cansado de no entender tu seguro? Rosa Valentín lleva +10 años explicando sin letra pequeña. Salud, vida, mascotas y más. Primera consulta gratis.",
  alternates: {
    canonical: site.domain,
  },
  openGraph: {
    title: "Asesora de Seguros en Madrid · Consulta Gratis | Valentín",
    description: "¿Cansado de no entender tu seguro? Rosa Valentín lleva +10 años explicando sin letra pequeña. Salud, vida, mascotas y más. Primera consulta gratis.",
    images: [{ url: `${site.domain}/og-image.png`, alt: "Valentín Protección Integral - Asesora de Seguros" }],
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
