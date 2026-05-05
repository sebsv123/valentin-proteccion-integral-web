import type { Metadata } from 'next';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { StickyWhatsApp } from '@/components/sticky-whatsapp';

export const metadata: Metadata = {
  title: 'Aviso Legal | Valentín Protección Integral',
  description: 'Aviso legal e información sobre el titular del sitio web valentinproteccionintegral.com.',
  robots: { index: false, follow: false },
  alternates: { canonical: 'https://valentinproteccionintegral.com/aviso-legal' },
};

export const dynamic = 'force-static';

export default function AvisoLegalPage() {
  return (
    <>
      <Header />
      <main className="section-pad pt-6 md:pt-10">
        <div className="container-shell">
          <Breadcrumbs items={[{ label: 'Inicio', href: '/' }, { label: 'Aviso Legal' }]} />
          <div className="soft-card p-8 md:p-12 prose prose-slate max-w-none">
            <p className="kicker">Legal</p>
            <h1 className="mt-3 section-title">Aviso Legal</h1>
            <p className="section-copy mt-2">Última actualización: abril de 2026</p>

            <h2>1. Datos identificativos del titular</h2>
            <p>
              En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio,
              de Servicios de la Sociedad de la Información y del Comercio
              Electrónico (LSSI-CE), se facilitan los siguientes datos:
            </p>
            <ul>
              <li><strong>Titular:</strong> Rosa Valentín</li>
              <li><strong>NIF:</strong> 79234434D</li>
              <li><strong>Clave de registro DGSFP:</strong> C012479234434D</li>
              <li><strong>Co-titular / Colaborador:</strong> Sebastián Sifontes Valentín (NIF: 72295271S — Clave DGSFP: C046172295271S)</li>
              <li><strong>Denominación comercial:</strong> Valentín Protección Integral</li>
              <li><strong>Domicilio:</strong> C. de los Reyes Católicos, 1, 28660 Boadilla del Monte, Madrid, España</li>
              <li><strong>Teléfono:</strong> +34 603 44 87 65</li>
              <li><strong>Email:</strong> hola@valentinproteccionintegral.com</li>
              <li><strong>Web:</strong> https://valentinproteccionintegral.com</li>
              <li>
                <strong>Registro DGSFP:</strong> Inscritos en el Registro de Mediadores de
                Seguros y Reaseguros de la Dirección General de Seguros y Fondos de Pensiones (DGSFP).
                Consulta pública disponible en{' '}
                <a href="https://rrpp.dgsfp.mineco.es/Mediador" target="_blank" rel="noreferrer">rrpp.dgsfp.mineco.es/Mediador</a>.
              </li>
            </ul>

            <h2>2. Objeto y ámbito de aplicación</h2>
            <p>
              El presente Aviso Legal regula el acceso y uso del sitio web{' '}
              <strong>valentinproteccionintegral.com</strong> (en adelante, «el Sitio»),
              titularidad de Rosa Valentín. El acceso al Sitio implica la aceptación
              expresa de las condiciones aquí descritas.
            </p>

            <h2>3. Propiedad intelectual e industrial</h2>
            <p>
              Todos los contenidos del Sitio — incluyendo textos, fotografías, gráficos,
              imágenes, logotipos, iconos, código fuente y diseño — son propiedad de
              Rosa Valentín o de sus legítimos licenciantes, y están protegidos por la
              legislación vigente en materia de propiedad intelectual e industrial.
            </p>
            <p>
              Queda expresamente prohibida la reproducción, distribución, comunicación
              pública o transformación de cualquier elemento del Sitio sin autorización
              escrita previa del titular.
            </p>

            <h2>4. Exclusión de responsabilidad</h2>
            <p>
              El titular no se hace responsable de los daños de cualquier naturaleza que
              pudieran derivarse del acceso o uso del Sitio, incluyendo los causados por
              virus o elementos lesivos, interrupciones del servicio o fallos técnicos
              ajenos a su voluntad.
            </p>
            <p>
              Los contenidos del Sitio tienen carácter orientativo y no constituyen
              asesoramiento jurídico, fiscal ni financiero vinculante. Para una orientación
              personalizada, contacta directamente con el equipo de Valentín Protección Integral.
            </p>

            <h2>5. Política de enlaces</h2>
            <p>
              El Sitio puede contener enlaces a webs de terceros. Valentín Protección
              Integral no controla ni se responsabiliza del contenido, políticas de
              privacidad o prácticas de dichos sitios externos.
            </p>

            <h2>6. Legislación aplicable y jurisdicción</h2>
            <p>
              Las presentes condiciones se rigen por la legislación española. Para la
              resolución de cualquier controversia derivada del uso del Sitio, las partes
              se someten a los Juzgados y Tribunales de Madrid, con renuncia expresa a
              cualquier otro fuero que pudiera corresponderles.
            </p>
          </div>
        </div>
      </main>
      <Footer />
      <StickyWhatsApp />
    </>
  );
}
