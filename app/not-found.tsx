import Link from 'next/link';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { ShieldAlert, Home, BookOpen } from 'lucide-react';
import { WhatsAppIcon } from '@/components/ui/whatsapp-icon';

export const metadata = {
  title: 'Página no encontrada | Valentín Protección Integral',
  description: 'Lo sentimos, la página que buscas no existe. Puedes volver al inicio para encontrar el seguro que necesitas.',
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="min-h-[85vh] flex items-center justify-center section-pad bg-premium-glow">
        <div className="container-shell">
          <div className="soft-card glass max-w-4xl mx-auto overflow-hidden shadow-2xl border-white/40">
            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-14 flex flex-col justify-center bg-white/40 backdrop-blur-sm">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-red-600 border border-red-100 w-fit mb-6">
                  <ShieldAlert className="h-4 w-4" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Incidencia Detectada</span>
                </div>
                <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-[var(--blue-deep)] leading-tight mb-4">
                  Vaya... <br />
                  Parece que esta póliza no existe.
                </h1>
                <p className="text-lg text-[var(--muted)] leading-relaxed mb-8">
                  Lo sentimos, la página que buscas no está disponible o ha sido movida. Pero no te preocupes, estamos aquí para ayudarte a encontrar el camino de vuelta a la seguridad.
                </p>
                <div className="flex flex-col gap-4">
                  <Link href="/" className="btn-primary w-full justify-center gap-2 group py-4">
                    <Home className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
                    Volver al Inicio
                  </Link>
                  <div className="grid grid-cols-2 gap-4">
                    <Link href="/blog" className="btn-secondary h-auto py-3 text-sm justify-center gap-2 bg-white hover:bg-white/80">
                      <BookOpen className="h-4 w-4" />
                      Blog Experto
                    </Link>
                    <Link href="/contacto" className="btn-ghost h-auto py-3 text-sm justify-center gap-2 border-white/60 bg-white/20">
                      <WhatsAppIcon className="h-4 w-4" />
                      Contacto
                    </Link>
                  </div>
                </div>
              </div>
              <div className="relative bg-[var(--blue-deep)] hidden md:flex items-center justify-center p-12 overflow-hidden shadow-inner">
                <div className="absolute inset-0 opacity-20 pointer-events-none">
                  <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]" />
                </div>
                <div className="relative z-10 text-center text-white">
                  <div className="text-[12rem] font-black opacity-10 leading-none mb-4 select-none animate-pulse-soft">404</div>
                  <p className="text-xl font-heading font-semibold tracking-wide uppercase">Protección Integral</p>
                  <p className="text-white/60 text-sm mt-2 italic px-8">"Cualquier camino te lleva a Roma, pero nosotros te llevamos a Boadilla con el mejor seguro."</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
