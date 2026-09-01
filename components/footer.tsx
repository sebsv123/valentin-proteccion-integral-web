import Link from 'next/link';
import { buildWhatsAppHref, mainNav, products, site } from '@/lib/products';
import { siteConfig } from '@/lib/site-config';
import { useLocale } from 'next-intl';
import { localizedPath } from '@/i18n/navigation';
import { localizedProductPath } from '@/lib/product-locales';
import { WhatsAppButton } from './whatsapp-button';
import { BrandLockup } from './ui/brand-lockup';
import { CookieAwareMap } from './cookie-aware-map';

export function Footer({ healthVariant = false }: { healthVariant?: boolean }) {
  const isEnglish = useLocale() === 'en';
  const linkHref = (href: string) => ['/', '/internacional', '/contacto', '/extranjeros', '/seguros', '/seguros/salud', '/seguros/salud-extranjeros'].includes(href) ? localizedPath(isEnglish ? 'en' : 'es', href as '/' | '/internacional' | '/contacto' | '/extranjeros' | '/seguros' | '/seguros/salud' | '/seguros/salud-extranjeros') : isEnglish ? ({ '/como-te-ayudamos': '/en/how-we-help', '/sobre-nosotros': '/en/about-us', '/opiniones': '/en/reviews', '/aviso-legal': '/en/legal-notice', '/privacidad': '/en/privacy', '/cookies': '/en/cookies', '/empresas': '/en/business', '/empresas/salud': '/en/business/health-insurance', '/empresas/ciberseguridad': '/en/business/cybersecurity', '/para/autonomos': '/en/for/self-employed', '/para/familias': '/en/for/families', '/para/jovenes-profesionales': '/en/for/young-professionals', '/para/seniors': '/en/for/seniors', '/extranjeros/alquileres': '/en/foreigners/rentals' } as Record<string, string>)[href] ?? href : href;
  const footerLabel = (label: string) => isEnglish ? ({ Inicio: 'Home', Internacional: 'International', Seguros: 'Insurance', 'Cómo te ayudamos': 'How we help', 'Sobre nosotros': 'About us', Opiniones: 'Reviews', Zonas: 'Areas', Contacto: 'Contact' } as Record<string, string>)[label] ?? label : label;
  const productLabel = (label: string) => isEnglish ? ({ SALUD: 'HEALTH', MASCOTAS: 'PETS', DENTAL: 'DENTAL', ACCIDENTES: 'ACCIDENTS', VIAJE: 'TRAVEL', DECESOS: 'FUNERAL' } as Record<string, string>)[label] ?? label : label;
  return (
    <footer className="mt-20 border-t border-[var(--border)] bg-white/92">
      <div className="container-shell py-14">
        <div className="grid gap-8 xl:grid-cols-[1.35fr_1fr_1fr_1fr_1fr]">
          <div className="space-y-4">
            <div className="space-y-3">
              <BrandLockup variant="dark" size="default" href={linkHref('/')} />
              <p className="text-[var(--muted)]">{isEnglish ? 'Insurance explained clearly' : healthVariant ? 'Seguros explicados con claridad' : site.brandLine}</p>
            </div>
            <p className="max-w-xl text-base leading-8 text-[var(--muted)]">{isEnglish ? 'Valentín Protección Integral offers clear insurance guidance and support before and after you buy.' : healthVariant ? 'Te ayudamos a entender qué contratas y seguimos a tu lado cuando necesitas utilizar tu seguro.' : 'Valentín Protección Integral ofrece orientación cercana en seguros y acompañamiento antes y después de contratar.'}</p>
            <div className="flex flex-wrap gap-3">
              <WhatsAppButton href={buildWhatsAppHref(isEnglish ? 'Hello, I would like to speak with Valentín Protección Integral on WhatsApp.' : 'Hola, quiero hablar por WhatsApp con Valentín Protección Integral.')} location="footer-cta" className="btn-whatsapp !px-5 !py-3">WhatsApp</WhatsAppButton>
              <Link href={linkHref('/contacto')} className="btn-ghost !px-5 !py-3">{isEnglish ? 'Contact form' : 'Formulario'}</Link>
            </div>
          </div>
          <div>
            <p className="font-heading text-lg font-semibold text-[var(--blue-deep)]">{isEnglish ? 'Who are you?' : '¿Quién eres tú?'}</p>
            <div className="mt-4 space-y-3 text-[var(--muted)]">
              <Link className="block hover:text-[var(--blue)]" href={linkHref('/para/jovenes-profesionales')}>{isEnglish ? 'I am a young professional' : 'Soy joven profesional'}</Link>
              <Link className="block hover:text-[var(--blue)]" href={linkHref('/para/familias')}>{isEnglish ? 'I have a family to protect' : 'Tengo familia que proteger'}</Link>
              <Link className="block hover:text-[var(--blue)]" href={linkHref('/para/seniors')}>{isEnglish ? 'I am a senior or retiring' : 'Soy senior o prejubilado'}</Link>
              <Link className="block hover:text-[var(--blue)]" href={linkHref('/para/autonomos')}>{isEnglish ? 'I am self-employed' : 'Soy autónomo'}</Link>
            </div>
          </div>
          <div>
            <p className="font-heading text-lg font-semibold text-[var(--blue-deep)]">{isEnglish ? 'Insurance' : 'Seguros'}</p>
            <div className="mt-4 space-y-3 text-[var(--muted)]">
              <Link className="block tracking-wide hover:text-[var(--blue)]" href={linkHref('/extranjeros')}>{isEnglish ? 'FOREIGNERS' : 'EXTRANJEROS'}</Link>
              {products.map((product) => <Link className="block tracking-wide hover:text-[var(--blue)]" key={product.slug} href={product.slug === 'salud' ? linkHref('/seguros/salud') : localizedProductPath(product.slug, isEnglish ? 'en' : 'es')}>{productLabel(product.label)}</Link>)}
              <Link className="block tracking-wide hover:text-[var(--blue)]" href={linkHref('/empresas/salud')}>{isEnglish ? 'HEALTH FOR BUSINESSES' : 'SALUD PARA EMPRESAS'}</Link>
              <Link className="block tracking-wide hover:text-[var(--blue)]" href={linkHref('/empresas/ciberseguridad')}>{isEnglish ? 'CYBERSECURITY FOR BUSINESSES' : 'CIBERSEGURIDAD PARA EMPRESAS'}</Link>
            </div>
          </div>
          <div>
            <p className="font-heading text-lg font-semibold text-[var(--blue-deep)]">{isEnglish ? 'Navigation' : 'Navegación'}</p>
            <div className="mt-4 space-y-3 text-[var(--muted)]">
              <Link className="block tracking-wide hover:text-[var(--blue)]" href={linkHref('/empresas/salud')}>{isEnglish ? 'HEALTH FOR BUSINESSES' : 'SALUD PARA EMPRESAS'}</Link>
              <Link className="block tracking-wide hover:text-[var(--blue)]" href={linkHref('/empresas/ciberseguridad')}>{isEnglish ? 'CYBERSECURITY FOR BUSINESSES' : 'CIBERSEGURIDAD PARA EMPRESAS'}</Link>
              <Link className="block hover:text-[var(--blue)]" href="/zonas">{isEnglish ? 'Areas we cover' : 'Zonas que atendemos'}</Link>
              {mainNav.filter((item) => item.label !== 'Empresas').map((item) => <Link className="block hover:text-[var(--blue)]" key={item.href} href={linkHref(item.href)}>{footerLabel(item.label)}</Link>)}
              <Link className="block hover:text-[var(--blue)]" href={linkHref('/privacidad')}>{isEnglish ? 'Privacy' : 'Privacidad'}</Link>
              <Link className="block hover:text-[var(--blue)]" href={linkHref('/cookies')}>Cookies</Link>
              <Link className="block hover:text-[var(--blue)]" href={linkHref('/aviso-legal')}>{isEnglish ? 'Legal notice' : 'Aviso legal'}</Link>
            </div>
          </div>
          <div>
            <p className="font-heading text-lg font-semibold text-[var(--blue-deep)]">{isEnglish ? 'Contact' : 'Contacto'}</p>
            <div className="mt-4 space-y-3 text-[var(--muted)]">
              <a href="tel:+34603448765" className="block hover:text-[var(--blue)] text-sm">+34 603 448 765</a>
              <a href="mailto:contacto@valentinproteccionintegral.com" className="block hover:text-[var(--blue)] text-sm">contacto@valentinproteccionintegral.com</a>
              <p className="font-medium text-[var(--blue-deep)] text-sm">Boadilla del Monte, Madrid</p>
              <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="block hover:text-[var(--blue)] text-sm">@segurosvalentin</a>
              <WhatsAppButton href={buildWhatsAppHref(isEnglish ? 'Hello, I would like clear insurance guidance.' : 'Hola, quiero una orientación sobre seguros.')} location="footer-contacto" className="block hover:text-[var(--blue)] text-sm">{isEnglish ? 'Open WhatsApp' : 'Abrir WhatsApp'}</WhatsAppButton>
            </div>
            <div className="mt-6 overflow-hidden rounded-2xl border border-[var(--border)] shadow-sm">
              <CookieAwareMap />
            </div>
          </div>
        </div>
        <div className="mt-10 grid gap-4 border-t border-[var(--border)] pt-6 text-sm leading-7 text-[var(--muted)] md:grid-cols-3">
          <p>{isEnglish ? 'The information shown is for guidance and does not replace the final contractual documentation from each insurer.' : 'La información mostrada es orientativa y no sustituye a la documentación contractual final de cada aseguradora.'}</p>
          <p>{isEnglish ? 'Cover, limits, premiums and conditions may vary by product, age, province and underwriting.' : 'Las coberturas, límites, primas y condiciones pueden variar según modalidad, edad, provincia y aceptación del riesgo.'}</p>
          <p>{isEnglish ? 'Valentín Protección Integral offers clear insurance guidance and support before and after you buy.' : 'Valentín Protección Integral ofrece orientación cercana en seguros y acompañamiento antes y después de contratar.'}</p>
        </div>
        <div className="mt-6 border-t border-[var(--border)] pt-6 text-sm leading-7 text-[var(--muted)]">
          <p>
            <strong>{siteConfig.brand.name}</strong> {isEnglish ? 'is a commercial insurance intermediary brand; it is not an insurer. Activity responsible person:' : 'es una marca comercial de mediación de seguros; no es una compañía aseguradora. Responsable de la actividad:'}{' '}
            <strong>{siteConfig.responsiblePerson.fullName}</strong>, {isEnglish ? 'insurance agent with tax ID' : 'agente de seguros con NIF'}{' '}
            {siteConfig.responsiblePerson.nif} {isEnglish ? 'and registered with the DGSFP under no.' : 'e inscripción en la DGSFP nº'}{' '}
            {siteConfig.responsiblePerson.dgsfpCode} ({isEnglish ? 'checkable in the' : 'comprobable en el'}{' '}
            <a
              href={siteConfig.responsiblePerson.dgsfpRegistryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-[var(--blue)]"
            >
              {isEnglish ? 'public DGSFP register' : 'registro público de la DGSFP'}
            </a>
            ). {isEnglish ? 'Insurers are third parties: risk acceptance, cover and benefit payments are governed by each insurer according to the policy conditions, limits, exclusions and waiting periods.' : 'Las aseguradoras son entidades terceras: la aceptación del riesgo, las coberturas y el pago de prestaciones corresponden a cada aseguradora según las condiciones, límites, exclusiones y carencias de la póliza.'}
          </p>
          <p className="mt-4 text-center">
            © {new Date().getFullYear()} {site.name}. {isEnglish ? 'All rights reserved.' : 'Todos los derechos reservados.'}
          </p>
        </div>
      </div>
    </footer>
  );
}
