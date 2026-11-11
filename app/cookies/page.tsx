import type { Metadata } from 'next';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { StickyWhatsApp } from '@/components/sticky-whatsapp';

export const metadata: Metadata = {
  title: 'Política de Cookies | Valentín Protección Integral',
  description: 'Información sobre el uso de cookies en valentinproteccionintegral.com.',
  robots: { index: false, follow: false },
  alternates: { canonical: 'https://valentinproteccionintegral.com/cookies', languages: { es: 'https://valentinproteccionintegral.com/cookies', en: 'https://valentinproteccionintegral.com/en/cookies', 'x-default': 'https://valentinproteccionintegral.com/cookies' } },
};

export const dynamic = 'force-static';

export default function CookiesPage() {
  return (
    <>
      <Header variant="solid" />
      <main className="section-pad pt-6 md:pt-10">
        <div className="container-shell">
          <Breadcrumbs items={[{ label: 'Inicio', href: '/' }, { label: 'Cookies' }]} />
          <div className="soft-card p-8 md:p-12 prose prose-slate max-w-none">
            <p className="kicker">Legal</p>
            <h1 className="mt-3 section-title">Política de Cookies</h1>
            <p className="section-copy mt-2">Última actualización: abril de 2026</p>

            <h2>1. ¿Qué son las cookies y el almacenamiento local?</h2>
            <p>Las cookies y el almacenamiento local son mecanismos que un sitio puede utilizar para guardar información en el dispositivo. En este sitio, el almacenamiento local recuerda la elección de preferencias para aplicarla en visitas posteriores. Las preferencias se conservan durante un máximo de 730 días desde la decisión expresa; las visitas y recargas no amplían ese plazo.</p>

            <h2>2. Preferencias de cookies</h2>
            <p>El panel distingue entre almacenamiento necesario para recordar y aplicar tus preferencias y analítica opcional de visitas mediante Vercel Web Analytics. La analítica solo se habilita si la aceptas. Puedes rechazarla, aceptarla o cambiar tu elección en cualquier momento desde el control permanente de preferencias.</p>
            <p>Si la elección no existe, ha vencido, no puede validarse o corresponde a una versión de política incompatible, las finalidades opcionales permanecen desactivadas hasta que elijas de nuevo. Retirar la autorización impide futuras cargas de analítica desde el sitio. No borra información que un proveedor ya hubiera recibido.</p>

            <h2>3. Analítica de visitas</h2>
            <p>Vercel Web Analytics se carga únicamente después de autorizar la finalidad analítica. La integración transmite eventos de navegación para generar estadísticas de uso. Según la documentación pública de Vercel, el servicio puede utilizar un identificador temporal de visitante derivado mediante hash; la documentación también describe que no utiliza cookies de terceros para este servicio. Estas descripciones del proveedor no identifican por sí mismas todos los datos que pudiera contener una solicitud concreta del sitio.</p>
            <p>La ventana de informes indica durante cuánto tiempo los datos están garantizados como disponibles para consulta, no un plazo máximo de eliminación. La información disponible del plan Hobby indica una ventana de informes de un mes y que Vercel puede conservar datos durante más tiempo. No se afirma aquí un plazo efectivo de borrado.</p>
            <p><a href="https://vercel.com/docs/analytics/privacy-policy" target="_blank" rel="noreferrer">Información de privacidad de Vercel Analytics</a> · <a href="https://vercel.com/docs/analytics/limits-and-pricing" target="_blank" rel="noreferrer">Ventanas de informes y precios</a>.</p>

            <h2>4. Enlaces externos</h2>
            <p>La ubicación se ofrece mediante un enlace externo para abrir Google Maps. El sitio no carga un mapa incrustado automáticamente. Al abrir el enlace, Google trata la solicitud conforme a sus propias condiciones y políticas.</p>

            <h2>5. Responsable y privacidad</h2>
            <p>La información sobre los responsables del tratamiento y el ejercicio de derechos se encuentra en nuestra <a href="/privacidad">Política de privacidad</a>.</p>

            <h2>6. Gestión y retirada</h2>
            <p>Puedes rechazar la analítica desde el panel, modificar la preferencia con el control permanente del sitio o retirar una autorización previamente concedida. También puedes borrar el almacenamiento del sitio desde tu navegador; en ese caso volveremos a solicitar tu elección. La retirada no elimina datos que ya se hayan transmitido a un proveedor.</p>
            <ul>
              <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noreferrer">Google Chrome</a></li>
              <li><a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" target="_blank" rel="noreferrer">Mozilla Firefox</a></li>
              <li><a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noreferrer">Safari</a></li>
              <li><a href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noreferrer">Microsoft Edge</a></li>
            </ul>

            <h2>7. Actualizaciones</h2>
            <p>Podemos actualizar esta política cuando cambien las funciones o servicios descritos. La fecha indicada al inicio identifica la versión vigente.</p>
          </div>
        </div>
      </main>
      <Footer />
      <StickyWhatsApp />
    </>
  );
}
