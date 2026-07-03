import Link from 'next/link';
import { buildWhatsAppHref, mainNav, products, site } from '@/lib/products';
import { siteConfig } from '@/lib/site-config';
import { WhatsAppButton } from './whatsapp-button';
import { BrandLockup } from './ui/brand-lockup';
import { CookieAwareMap } from './cookie-aware-map';

export function Footer() {
  return (
    <footer className="mt-20 border-t border-[var(--border)] bg-white/92">
      <div className="container-shell py-14">
        <div className="grid gap-8 xl:grid-cols-[1.35fr_1fr_1fr_1fr_1fr]">
          <div className="space-y-4">
            <div className="space-y-3">
              <BrandLockup variant="dark" size="default" />
              <p className="text-[var(--muted)]">{site.brandLine}</p>
            </div>
            <p className="max-w-xl text-base leading-8 text-[var(--muted)]">Valentín Protección Integral ofrece orientación cercana en seguros y acompañamiento antes y después de contratar.</p>
            <div className="flex flex-wrap gap-3">
              <WhatsAppButton href={buildWhatsAppHref('Hola, quiero hablar por WhatsApp con Valentín Protección Integral.')} location="footer-cta" className="btn-whatsapp !px-5 !py-3">WhatsApp</WhatsAppButton>
              <Link href="/contacto" className="btn-ghost !px-5 !py-3">Formulario</Link>
            </div>
          </div>
          <div>
            <p className="font-heading text-lg font-semibold text-[var(--blue-deep)]">¿Quién eres tú?</p>
            <div className="mt-4 space-y-3 text-[var(--muted)]">
              <Link className="block hover:text-[var(--blue)]" href="/para/jovenes-profesionales">Soy joven profesional</Link>
              <Link className="block hover:text-[var(--blue)]" href="/para/familias">Tengo familia que proteger</Link>
              <Link className="block hover:text-[var(--blue)]" href="/para/seniors">Soy senior o prejubilado</Link>
              <Link className="block hover:text-[var(--blue)]" href="/para/autonomos">Soy autónomo</Link>
            </div>
          </div>
          <div>
            <p className="font-heading text-lg font-semibold text-[var(--blue-deep)]">Seguros</p>
            <div className="mt-4 space-y-3 text-[var(--muted)]">
              <Link className="block tracking-wide hover:text-[var(--blue)]" href="/extranjeros">EXTRANJEROS</Link>
              {products.map((product) => <Link className="block tracking-wide hover:text-[var(--blue)]" key={product.slug} href={`/seguros/${product.slug}`}>{product.label}</Link>)}
            </div>
          </div>
          <div>
            <p className="font-heading text-lg font-semibold text-[var(--blue-deep)]">Navegación</p>
            <div className="mt-4 space-y-3 text-[var(--muted)]">
              <Link className="block hover:text-[var(--blue)]" href="/zonas">Zonas que atendemos</Link>
              {mainNav.map((item) => <Link className="block hover:text-[var(--blue)]" key={item.href} href={item.href}>{item.label}</Link>)}
              <Link className="block hover:text-[var(--blue)]" href="/privacidad">Privacidad</Link>
              <Link className="block hover:text-[var(--blue)]" href="/cookies">Cookies</Link>
              <Link className="block hover:text-[var(--blue)]" href="/aviso-legal">Aviso legal</Link>
            </div>
          </div>
          <div>
            <p className="font-heading text-lg font-semibold text-[var(--blue-deep)]">Contacto</p>
            <div className="mt-4 space-y-3 text-[var(--muted)]">
              <a href="tel:+34603448765" className="block hover:text-[var(--blue)] text-sm">+34 603 448 765</a>
              <a href="mailto:contacto@valentinproteccionintegral.com" className="block hover:text-[var(--blue)] text-sm">contacto@valentinproteccionintegral.com</a>
              <p className="font-medium text-[var(--blue-deep)] text-sm">Boadilla del Monte, Madrid</p>
              <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="block hover:text-[var(--blue)] text-sm">@segurosvalentin</a>
              <WhatsAppButton href={buildWhatsAppHref('Hola, quiero una orientación sobre seguros.')} location="footer-contacto" className="block hover:text-[var(--blue)] text-sm">Abrir WhatsApp</WhatsAppButton>
            </div>
            <div className="mt-6 overflow-hidden rounded-2xl border border-[var(--border)] shadow-sm">
              <CookieAwareMap />
            </div>
          </div>
        </div>
        <div className="mt-10 grid gap-4 border-t border-[var(--border)] pt-6 text-sm leading-7 text-[var(--muted)] md:grid-cols-3">
          <p>La información mostrada es orientativa y no sustituye a la documentación contractual final de cada aseguradora.</p>
          <p>Las coberturas, límites, primas y condiciones pueden variar según modalidad, edad, provincia y aceptación del riesgo.</p>
          <p>Valentín Protección Integral ofrece orientación cercana en seguros y acompañamiento antes y después de contratar.</p>
        </div>
        <div className="mt-6 border-t border-[var(--border)] pt-6 text-sm leading-7 text-[var(--muted)]">
          <p>
            <strong>{siteConfig.brand.name}</strong> es una marca comercial de mediación de
            seguros; no es una compañía aseguradora. Responsable de la actividad:{' '}
            <strong>{siteConfig.responsiblePerson.fullName}</strong>, agente de seguros con NIF{' '}
            {siteConfig.responsiblePerson.nif} e inscripción en la DGSFP nº{' '}
            {siteConfig.responsiblePerson.dgsfpCode} (comprobable en el{' '}
            <a
              href={siteConfig.responsiblePerson.dgsfpRegistryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-[var(--blue)]"
            >
              registro público de la DGSFP
            </a>
            ). Las aseguradoras son entidades terceras: la aceptación del riesgo, las coberturas y
            el pago de prestaciones corresponden a cada aseguradora según las condiciones,
            límites, exclusiones y carencias de la póliza.
          </p>
          <p className="mt-4 text-center">
            © {new Date().getFullYear()} {site.name}. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
