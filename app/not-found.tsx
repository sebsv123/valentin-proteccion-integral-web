import Link from 'next/link';
import type { Metadata } from 'next';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { site } from '@/lib/products';

export const metadata: Metadata = {
  title: 'Página no encontrada | Valentín Protección Integral',
  description: 'Lo sentimos, la página que buscas no existe. Puedes volver al inicio para encontrar el seguro que necesitas.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="flex min-h-[70vh] items-center justify-center section-pad">
        <div className="container-shell text-center">
          <div className="mx-auto max-w-2xl">
            <h1 className="font-heading text-6xl font-extrabold text-[var(--blue-deep)] md:text-8xl">404</h1>
            <p className="mt-6 text-2xl font-bold text-[var(--text)] md:text-3xl">Página no encontrada</p>
            <p className="mt-4 text-lg leading-8 text-[var(--muted)]">
              Lo sentimos, parece que el enlace que has seguido ya no está disponible o la dirección es incorrecta. 
              No te preocupes, Rosa Valentín sigue aquí para ayudarte.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link href="/" className="btn-primary px-10 py-4">Volver al inicio</Link>
              <Link href="/seguros" className="btn-secondary px-10 py-4">Ver todos los seguros</Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
