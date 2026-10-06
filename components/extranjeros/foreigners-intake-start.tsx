import Link from 'next/link';
import { ArrowLeft, MessageCircle } from 'lucide-react';
import { buildWhatsAppHref } from '@/lib/products';
import { getForeignersIntakePath, getMissingForeignersIntakeVariables, type ForeignersIntakeLocale, type ForeignersIntakeSituation } from '@/lib/foreigners-intake';

type ForeignersIntakeStartProps = {
  locale: ForeignersIntakeLocale;
  situation?: ForeignersIntakeSituation;
  partner?: string;
};

export function ForeignersIntakeStart({ locale, situation, partner }: ForeignersIntakeStartProps) {
  const en = locale === 'en';
  const whatsapp = buildWhatsAppHref(en ? 'Hello, I would like guidance about health insurance for my process in Spain.' : 'Hola, quiero orientación sobre un seguro médico para mi trámite en España.');
  const backHref = locale === 'en' ? '/en/foreigners' : '/extranjeros';
  const missingVariables = getMissingForeignersIntakeVariables(locale);

  return (
    <main className="min-h-[70vh] bg-[var(--bg)] py-16 md:py-24">
      <div className="container-shell">
        <div className="mx-auto max-w-2xl rounded-[30px] border border-[var(--border)] bg-white p-7 shadow-[0_24px_70px_rgba(18,59,104,0.1)] md:p-10">
          <Link href={backHref} className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--blue)] underline underline-offset-4"><ArrowLeft className="h-4 w-4" aria-hidden="true" />{en ? 'Back to foreigners' : 'Volver a extranjeros'}</Link>
          <p className="kicker mt-8">{en ? 'START YOUR ENQUIRY' : 'INICIA TU CONSULTA'}</p>
          <h1 className="mt-3 font-heading text-4xl font-extrabold tracking-tight text-[var(--blue-deep)] md:text-5xl">{en ? 'The intake link is not connected yet' : 'El enlace del intake todavía no está conectado'}</h1>
          <p className="mt-5 text-base leading-8 text-[var(--muted)]">
            {en ? 'This controlled VPI route is ready to send you to the English Google Form as soon as its URL is configured. No form URL has been invented.' : 'Esta ruta controlada de VPI está preparada para enviarte al Google Form en español en cuanto se configure su URL. No se ha inventado ninguna URL.'}
          </p>
          {situation ? <p className="mt-4 rounded-2xl bg-[var(--bg)] px-4 py-3 text-sm font-semibold text-[var(--blue-deep)]">{en ? 'Selected route: ' : 'Ruta seleccionada: '}<span className="font-normal">{situation}</span>{partner ? <><br />{en ? 'Partner attribution: ' : 'Atribución de partner: '}<span className="font-normal">{partner}</span></> : null}</p> : null}
          <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50/70 p-4 text-sm leading-6 text-amber-900">
            <p className="font-bold">{en ? 'Configuration required before promotion' : 'Configuración necesaria antes de promocionar'}</p>
            <p className="mt-2">{en ? 'Provide these values in the deployment environment:' : 'Proporciona estos valores en el entorno de despliegue:'}</p>
            <code className="mt-2 block whitespace-pre-wrap text-xs leading-6">{missingVariables.join('\n')}</code>
          </div>
          <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="btn-whatsapp mt-7 min-h-12 w-full"><MessageCircle className="h-4 w-4" aria-hidden="true" />{en ? 'Talk to us on WhatsApp' : 'Hablar por WhatsApp'}</a>
          <p className="mt-4 text-center text-xs leading-5 text-[var(--muted)]">{en ? `Controlled route: ${getForeignersIntakePath(locale, situation)}` : `Ruta controlada: ${getForeignersIntakePath(locale, situation)}`}</p>
        </div>
      </div>
    </main>
  );
}
