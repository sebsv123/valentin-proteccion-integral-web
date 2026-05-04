// Server Component — Hero SSR para LCP óptimo
// HeroImage se renderiza en el servidor (visible en View Source)
// El contenido con animaciones es client-only

import { HeroImageServer } from '@/components/hero-server';
import { HeroContentClient, HeroLeadForm } from '@/components/hero-content-client';
import { StatsSection } from '@/components/stats-section-client';
export { StatsSection };

// Hero completo — imagen SSR + contenido cliente
export function HeroLeadSection() {
  return (
    <section id="hero" aria-labelledby="hero-title" className="section-pad pt-4 md:pt-8 overflow-hidden bg-white-pure relative">
      <div className="container-shell hero-grid items-stretch gap-8">
        {/* Card principal con imagen SSR y contenido cliente */}
        <div className="soft-card glass relative overflow-hidden p-8 md:p-12 xl:p-16 border-white/40 shadow-2xl bg-premium-glow">
          {/* IMAGEN — SSR, aparece en View Source */}
          <div className="absolute inset-0 overflow-hidden" style={{ willChange: 'transform' }}>
            <div className="absolute inset-0 scale-110">
              <HeroImageServer />
            </div>
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(248,250,252,0.94)_0%,rgba(248,250,252,0.88)_42%,rgba(248,250,252,0.68)_70%,rgba(248,250,252,0.18)_100%)]" />
          </div>
          
          {/* CONTENIDO — Cliente con CSS animations */}
          <div className="relative z-10">
            <HeroContentClient />
          </div>
        </div>
        
        {/* Lead Form — separado del card principal */}
        <HeroLeadForm />
      </div>
    </section>
  );
}
