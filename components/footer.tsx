import Link from 'next/link';
import Image from 'next/image';
import { buildWhatsAppHref, mainNav, products, site } from '@/lib/products';
import { WhatsAppButton } from './whatsapp-button';

export function Footer() {
  return (
    <footer className="mt-20 border-t border-[var(--border)] bg-white/92">
      <div className="container-shell py-14">
        <div className="grid gap-8 lg:grid-cols-[1.35fr_1fr_1fr_1fr_1fr]">
          <div className="space-y-4">
            <div className="space-y-3">
              <div className="relative h-20 w-[320px] max-w-full overflow-hidden rounded-2xl border border-[var(--border)] bg-white p-3 shadow-sm">
                <Image src="/brand/logo-vpi.webp" alt="Logotipo de Valentín Protección Integral - Asesoría de Seguros en Madrid" fill className="object-contain" />
              </div>
              <p className="text-[var(--muted)]">{site.brandLine}</p>
            </div>
            <p className="max-w-xl text-base leading-8 text-[var(--muted)]">Valentín Protección Integral ofrece asesoramiento personalizado para asegurar tu tranquilidad. Una firma especializada en proteger lo que de verdad importa, acompañándote con cercanía antes y después de contratar.</p>
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
              <a href="tel:+34603448765" className="block hover:text-[var(--blue)] text-sm">603 44 87 65</a>
              <a href="mailto:rosavalenting@gmail.com" className="block hover:text-[var(--blue)] text-sm">rosavalenting@gmail.com</a>
              <p className="font-medium text-[var(--blue-deep)] text-sm">Boadilla del Monte, Madrid</p>
              <a href={site.instagram} className="block hover:text-[var(--blue)] text-sm">@segurosrosavalentin</a>
              <WhatsAppButton href={buildWhatsAppHref('Hola, quiero una orientación sobre seguros.')} location="footer-contacto" className="block hover:text-[var(--blue)] text-sm">Abrir WhatsApp</WhatsAppButton>
            </div>
            <div className="mt-6 overflow-hidden rounded-2xl border border-[var(--border)] shadow-sm">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24320.79618946965!2d-3.892!3d40.407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4189ae3e2492e3%3A0x6e9e5e3b0c8e0c0a!2sBoadilla%20del%20Monte%2C%20Madrid!5e0!3m2!1ses!2ses!4v1700000000000!5m2!1ses!2ses"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación en Boadilla del Monte, Madrid"
              />
            </div>
          </div>
        </div>
        <div className="mt-10 grid gap-4 border-t border-[var(--border)] pt-6 text-sm leading-7 text-[var(--muted)] md:grid-cols-3">
          <p>La información mostrada es orientativa y no sustituye a la documentación contractual final de cada aseguradora.</p>
          <p>Las coberturas, límites, primas y condiciones pueden variar según modalidad, edad, provincia y aceptación del riesgo.</p>
          <p>Valentín Protección Integral es tu agencia de confianza para asesorar, comparar y acompañarte en cada paso.</p>
        </div>
        <div className="mt-6 border-t border-[var(--border)] pt-6 text-center text-sm text-[var(--muted)]">
          <p>© {new Date().getFullYear()} {site.name}. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

