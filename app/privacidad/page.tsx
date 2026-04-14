import type { Metadata } from 'next';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { StickyWhatsApp } from '@/components/sticky-whatsapp';

export const metadata: Metadata = {
  title: 'Política de Privacidad | Valentín Protección Integral',
  description: 'Política de privacidad y tratamiento de datos personales conforme al RGPD.',
  robots: { index: false, follow: false },
  alternates: { canonical: 'https://valentinproteccionintegral.com/privacidad' },
};

export const dynamic = 'force-static';

export default function PrivacidadPage() {
  return (
    <>
      <Header />
      <main className="section-pad pt-6 md:pt-10">
        <div className="container-shell">
          <Breadcrumbs items={[{ label: 'Inicio', href: '/' }, { label: 'Privacidad' }]} />
          <div className="soft-card p-8 md:p-12 prose prose-slate max-w-none">
            <p className="kicker">Legal</p>
            <h1 className="mt-3 section-title">Política de Privacidad</h1>
            <p className="section-copy mt-2">Última actualización: abril de 2026</p>

            <h2>1. Responsable del tratamiento</h2>
            <p>
              <strong>Responsable:</strong> Rosa Valentín (Valentín Protección Integral)<br />
              <strong>NIF:</strong> 79234434D<br />
              <strong>Actividad:</strong> Mediación de seguros — inscrita en el Registro de Mediadores de la DGSFP (Clave: C012479234434D)<br />
              <strong>Dirección:</strong> C. de los Reyes Católicos, 1, 28660 Boadilla del Monte, Madrid<br />
              <strong>Teléfono:</strong> +34 603 44 87 65<br />
              <strong>Email:</strong> hola@valentinproteccionintegral.com<br />
              <strong>Web:</strong> https://valentinproteccionintegral.com
            </p>

            <h2>2. Datos que recogemos y con qué finalidad</h2>
            <p>A través del formulario de contacto recogemos los siguientes datos:</p>
            <ul>
              <li><strong>Nombre y apellidos</strong> — para identificarte y personalizar la respuesta.</li>
              <li><strong>Teléfono</strong> — para contactar contigo y orientarte sobre el producto de interés.</li>
              <li><strong>Producto de interés y notas adicionales</strong> — para preparar una orientación útil y relevante a tu situación.</li>
              <li><strong>URL de la página de origen y referrer</strong> — datos técnicos de navegación recogidos automáticamente para mejorar el servicio.</li>
              <li><strong>Fecha y hora del envío</strong> — registro interno del formulario.</li>
            </ul>
            <p>
              La base legal del tratamiento es el <strong>consentimiento explícito</strong> que otorgas
              al marcar la casilla del formulario (Art. 6.1.a RGPD), así como la ejecución de medidas
              precontractuales a petición del interesado (Art. 6.1.b RGPD).
            </p>
            <p>
              Los datos <strong>no se utilizan para elaborar perfiles comerciales automatizados</strong>,
              no se ceden a terceros salvo obligación legal,
              y no se transfieren fuera del Espacio Económico Europeo.
            </p>

            <h2>3. Plazo de conservación</h2>
            <p>
              Tus datos se conservarán durante el tiempo necesario para gestionar tu consulta y,
              en su caso, la relación contractual derivada.
              Una vez finalizada la relación, se conservarán bloqueados durante los plazos legalmente
              exigibles (máximo 3 años para reclamaciones civiles) y posteriormente se eliminarán
              de forma segura.
            </p>

            <h2>4. Tus derechos</h2>
            <p>En cualquier momento puedes ejercer los siguientes derechos ante el responsable:</p>
            <ul>
              <li><strong>Acceso:</strong> conocer qué datos tenemos sobre ti.</li>
              <li><strong>Rectificación:</strong> corregir datos inexactos o incompletos.</li>
              <li><strong>Supresión («derecho al olvido»):</strong> solicitar que eliminemos tus datos.</li>
              <li><strong>Limitación del tratamiento:</strong> solicitar que suspendamos el uso de tus datos.</li>
              <li><strong>Portabilidad:</strong> recibir tus datos en formato estructurado y legible.</li>
              <li><strong>Oposición:</strong> oponerte al tratamiento en determinadas circunstancias.</li>
              <li><strong>Retirar el consentimiento</strong> en cualquier momento, sin que ello afecte a la licitud del tratamiento previo.</li>
            </ul>
            <p>
              Para ejercer cualquiera de estos derechos, envía un correo a{' '}
              <a href="mailto:hola@valentinproteccionintegral.com">hola@valentinproteccionintegral.com</a>{' '}
              indicando el derecho que deseas ejercer y adjuntando una copia de tu DNI u otro documento
              identificativo. Responderemos en el plazo máximo de 30 días hábiles.
            </p>
            <p>
              Si consideras que el tratamiento no se ajusta a la normativa vigente, tienes derecho a
              presentar una reclamación ante la{' '}
              <strong>Agencia Española de Protección de Datos (AEPD)</strong>:{' '}
              <a href="https://www.aepd.es" target="_blank" rel="noreferrer">www.aepd.es</a>.
            </p>

            <h2>5. Seguridad de los datos</h2>
            <p>
              Hemos adoptado las medidas técnicas y organizativas necesarias para garantizar la
              seguridad de tus datos personales y evitar su alteración, pérdida, tratamiento o
              acceso no autorizado, habida cuenta del estado de la tecnología, la naturaleza de
              los datos almacenados y los riesgos a que están expuestos.
            </p>

            <h2>6. Cambios en esta política</h2>
            <p>
              Podemos actualizar esta política para adaptarla a cambios normativos o de servicio.
              La fecha de «Última actualización» en la cabecera refleja siempre la versión vigente.
            </p>
          </div>
        </div>
      </main>
      <Footer />
      <StickyWhatsApp />
    </>
  );
}
