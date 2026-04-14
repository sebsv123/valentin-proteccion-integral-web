import type { Metadata } from 'next';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { StickyWhatsApp } from '@/components/sticky-whatsapp';

export const metadata: Metadata = {
  title: 'Política de Cookies | Valentín Protección Integral',
  description: 'Información sobre el uso de cookies en valentinproteccionintegral.com.',
  robots: { index: false, follow: false },
  alternates: { canonical: 'https://valentinproteccionintegral.com/cookies' },
};

export const dynamic = 'force-static';

export default function CookiesPage() {
  return (
    <>
      <Header />
      <main className="section-pad pt-6 md:pt-10">
        <div className="container-shell">
          <Breadcrumbs items={[{ label: 'Inicio', href: '/' }, { label: 'Cookies' }]} />
          <div className="soft-card p-8 md:p-12 prose prose-slate max-w-none">
            <p className="kicker">Legal</p>
            <h1 className="mt-3 section-title">Política de Cookies</h1>
            <p className="section-copy mt-2">Última actualización: abril de 2026</p>

            <h2>1. ¿Qué son las cookies?</h2>
            <p>
              Las cookies son pequeños archivos de texto que los sitios web almacenan en tu
              dispositivo cuando los visitas. Sirven para que el sitio funcione correctamente,
              para recordar tus preferencias y para recopilar información estadística sobre el uso.
            </p>

            <h2>2. Cookies que utiliza esta web</h2>
            <p>Este sitio web utiliza únicamente las siguientes cookies:</p>
            <div className="overflow-x-auto mt-4">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-[var(--bg)] text-left">
                    <th className="p-3 border border-[var(--border)] font-semibold">Nombre</th>
                    <th className="p-3 border border-[var(--border)] font-semibold">Proveedor</th>
                    <th className="p-3 border border-[var(--border)] font-semibold">Tipo</th>
                    <th className="p-3 border border-[var(--border)] font-semibold">Finalidad</th>
                    <th className="p-3 border border-[var(--border)] font-semibold">Duración</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-3 border border-[var(--border)]">_clck, _clsk</td>
                    <td className="p-3 border border-[var(--border)]">Microsoft Clarity</td>
                    <td className="p-3 border border-[var(--border)]">Analítica</td>
                    <td className="p-3 border border-[var(--border)]">
                      Registro de comportamiento de navegación (mapas de calor, grabaciones
                      de sesión) para mejorar la usabilidad del sitio. No recoge datos
                      personales identificables.
                    </td>
                    <td className="p-3 border border-[var(--border)]">1 año / sesión</td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-[var(--border)]">va_* (Vercel Analytics)</td>
                    <td className="p-3 border border-[var(--border)]">Vercel Inc.</td>
                    <td className="p-3 border border-[var(--border)]">Analítica</td>
                    <td className="p-3 border border-[var(--border)]">
                      Métricas de rendimiento y visitas agregadas del sitio web.
                      Diseñado para ser respetuoso con la privacidad (sin cookies de
                      seguimiento entre sitios).
                    </td>
                    <td className="p-3 border border-[var(--border)]">Sesión</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4">
              <strong>No utilizamos cookies publicitarias, de remarketing ni de seguimiento entre sitios.</strong>
            </p>

            <h2>3. Base legal</h2>
            <p>
              Las cookies analíticas se instalan bajo tu <strong>consentimiento</strong>{' '}
              (Art. 6.1.a RGPD y Art. 22 LSSI-CE). Al continuar navegando por este sitio
              sin rechazarlas, aceptas su uso. Puedes retirar tu consentimiento en cualquier
              momento siguiendo las instrucciones del apartado siguiente.
            </p>

            <h2>4. Cómo gestionar o eliminar las cookies</h2>
            <p>
              Puedes configurar tu navegador para rechazar o eliminar las cookies en cualquier
              momento. Ten en cuenta que deshabilitar ciertas cookies puede afectar a la
              funcionalidad del sitio.
            </p>
            <ul>
              <li>
                <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noreferrer">
                  Google Chrome
                </a>
              </li>
              <li>
                <a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" target="_blank" rel="noreferrer">
                  Mozilla Firefox
                </a>
              </li>
              <li>
                <a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noreferrer">
                  Safari
                </a>
              </li>
              <li>
                <a href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noreferrer">
                  Microsoft Edge
                </a>
              </li>
            </ul>
            <p>
              Para inhabilitar específicamente Microsoft Clarity, visita:{' '}
              <a href="https://privacy.microsoft.com/es-es/privacystatement" target="_blank" rel="noreferrer">
                Privacidad de Microsoft
              </a>.
            </p>

            <h2>5. Actualizaciones de esta política</h2>
            <p>
              Podemos revisar esta política cuando añadamos o eliminemos herramientas que usen
              cookies. La fecha indicada al inicio refleja siempre la versión vigente.
            </p>
          </div>
        </div>
      </main>
      <Footer />
      <StickyWhatsApp />
    </>
  );
}
