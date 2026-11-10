"use client";

import { useEffect, useId, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { formSchema, type FormValues } from '@/lib/lead-form-schema';
import { Loader2, ShieldCheck } from 'lucide-react';
import { buildWhatsAppHref } from '@/lib/products';
import { captureUTMs, getStoredUTMs, trackLeadFormSubmit } from '@/lib/analytics';
import { useLocale } from 'next-intl';

const CONTACT_EMAIL = 'contacto@valentinproteccionintegral.com';
const FORM_DELIVERY_ERROR = `No hemos podido enviar el formulario. Escríbenos por WhatsApp o a ${CONTACT_EMAIL}.`;

export function LeadForm({ defaultProduct = 'salud', compact = false, homeVariant = false }: { defaultProduct?: string; compact?: boolean; homeVariant?: boolean }) {
  const router = useRouter();
  const isEnglish = useLocale() === 'en';
  const formId = useId();
  const pending = useRef(false);
  const errorRef = useRef<HTMLDivElement>(null);
  const deliveryError = isEnglish ? `We could not send the form. Write to us on WhatsApp or at ${CONTACT_EMAIL}.` : FORM_DELIVERY_ERROR;
  const [serverMessage, setServerMessage] = useState<string | null>(null);
  const [serverError, setServerError] = useState<string | null>(null);
  useEffect(() => {
    if (serverError) errorRef.current?.focus();
  }, [serverError]);

  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormValues>({
    resolver: zodResolver(formSchema(isEnglish)),
    defaultValues: { fullName: '', phone: '', productInterest: defaultProduct, notes: '', consent: false, website: '' },
  });

  const onSubmit = async (values: FormValues) => {
    if (pending.current) return;
    pending.current = true;
    setServerMessage(null);
    setServerError(null);

    const capturedUTMs = captureUTMs();
    const storedUTMs = getStoredUTMs();

    const payload = {
      source: 'lead-form',
      name: values.fullName,
      phone: values.phone,
      interest: values.productInterest,
      message: values.notes || '',
      consent: values.consent,
      website: values.website || '',
      pageUrl: typeof window !== 'undefined' ? window.location.href : '',
      referrer: typeof document !== 'undefined' ? document.referrer || '' : '',
      utm: { ...storedUTMs, ...capturedUTMs },
    };

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error(deliveryError);

      trackLeadFormSubmit({
        product_slug: values.productInterest,
        lead_type: 'form',
        page_location: typeof window !== 'undefined' ? window.location.href : '',
      });
      if (typeof window !== 'undefined') {
        try {
          sessionStorage.setItem('valentin_conversion_fired', '1');
        } catch { /* ignore */ }
      }

      reset({ fullName: '', phone: '', productInterest: defaultProduct, notes: '', consent: false, website: '' });
      router.push('/gracias');
    } catch {
      setServerError(deliveryError);
    } finally {
      pending.current = false;
    }
  };

  return (
    <div className={`soft-card p-6 md:p-8 ${homeVariant ? 'h-full rounded-[28px] border border-[var(--line)] shadow-xl' : ''}`}>
      <div className="mb-6 flex items-start justify-between gap-4">
        <div>
          {!homeVariant ? <p className="kicker">{isEnglish ? 'No-obligation consultation' : 'Consulta sin compromiso'}</p> : null}
          <h2 className={`${homeVariant ? '' : 'mt-2 '}font-heading text-3xl font-bold text-[var(--blue-deep)] md:text-4xl`}>{isEnglish ? 'Tell us what you need' : 'Cuéntanos qué necesitas'}</h2>
          <p className="mt-3 text-base leading-8 text-[var(--muted)]">
            {homeVariant ? (isEnglish ? 'We will give you clear, no-obligation initial guidance.' : 'Te damos una primera orientación clara y sin compromiso.') : (isEnglish ? 'We will give you clear initial guidance to help you decide with confidence.' : 'Te respondemos con una primera orientación clara para ayudarte a decidir con criterio.')}
          </p>
        </div>
        {!homeVariant ? (
          <div className="hidden rounded-2xl bg-[var(--bg)] p-3 text-[var(--blue)] md:block">
            <ShieldCheck className="h-7 w-7" />
          </div>
        ) : null}
      </div>

      <div className="mb-6 rounded-[24px] bg-[var(--bg)] p-4 text-sm leading-7 text-[var(--muted)] md:text-base">
        {isEnglish ? 'If you prefer a quicker answer, you can also write to us on ' : 'Si prefieres ir más rápido, también puedes escribirnos por '}
        <a
          className="font-semibold text-[var(--blue)] underline underline-offset-4"
          href={buildWhatsAppHref(isEnglish ? `Hello, I would like clear guidance about ${defaultProduct === 'salud' ? 'health' : defaultProduct} insurance.` : `Hola, quiero una orientación clara sobre el seguro de ${defaultProduct}.`)}
          onClick={() => {
            if (typeof window !== 'undefined' && window.fbq) {
              window.fbq('track', 'Contact', { content_name: 'WhatsApp CTA' });
            }
          }}
        >
          WhatsApp
        </a>.
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4" noValidate aria-busy={isSubmitting}>
        <input type="hidden" {...register('website')} />

        <div className={compact ? 'grid gap-4 md:grid-cols-2' : 'grid gap-4'}>
          <div>
            <label htmlFor={`${formId}-fullName`} className="mb-2 block text-sm font-semibold text-[var(--text)]">{isEnglish ? 'Full name' : 'Nombre y apellidos'}</label>
            <input id={`${formId}-fullName`} type="text" autoComplete="name" required aria-invalid={!!errors.fullName} aria-describedby={errors.fullName ? `${formId}-fullName-error` : undefined} className="input-ui scroll-mt-24" placeholder={isEnglish ? 'Your name' : 'Tu nombre'} {...register('fullName')} />
            {errors.fullName ? <p id={`${formId}-fullName-error`} role="alert" className="mt-2 text-sm text-red-600">{errors.fullName.message}</p> : null}
          </div>
          <div>
            <label htmlFor={`${formId}-phone`} className="mb-2 block text-sm font-semibold text-[var(--text)]">{isEnglish ? 'Phone' : 'Teléfono'}</label>
            <input id={`${formId}-phone`} type="tel" inputMode="tel" autoComplete="tel" required aria-invalid={!!errors.phone} aria-describedby={errors.phone ? `${formId}-phone-error` : undefined} className="input-ui scroll-mt-24" placeholder={isEnglish ? 'e.g. +44 20 7946 0958' : 'Ej. +34 603 448 765'} {...register('phone')} />
            {errors.phone ? <p id={`${formId}-phone-error`} role="alert" className="mt-2 text-sm text-red-600">{errors.phone.message}</p> : null}
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label htmlFor={`${formId}-productInterest`} className="mb-2 block text-sm font-semibold text-[var(--text)]">{isEnglish ? 'Product' : 'Producto'}</label>
            <select id={`${formId}-productInterest`} required aria-invalid={!!errors.productInterest} aria-describedby={errors.productInterest ? `${formId}-productInterest-error` : undefined} className="select-ui scroll-mt-24" {...register('productInterest')}>
              <option value="salud">{isEnglish ? 'HEALTH (Basic, Senior, Reimbursement...)' : 'SALUD (Básico, Senior, Reembolso...)'}</option>
              <option value="vida">{isEnglish ? 'LIFE' : 'VIDA'}</option>
              <option value="negocio">{isEnglish ? 'BUSINESS / SME' : 'NEGOCIO / PYME'}</option>
              <option value="proteccion-juridica">{isEnglish ? 'LEGAL PROTECTION' : 'PROTECCIÓN JURÍDICA'}</option>
              <option value="electrodomesticos">{isEnglish ? 'HOME APPLIANCES' : 'ELECTRODOMÉSTICOS'}</option>
              <option value="mascotas">{isEnglish ? 'PETS' : 'MASCOTAS'}</option>
              <option value="accidentes">{isEnglish ? 'ACCIDENTS' : 'ACCIDENTES'}</option>
              <option value="dental">DENTAL</option>
              <option value="decesos">{isEnglish ? 'FUNERAL' : 'DECESOS'}</option>
              <option value="viaje">{isEnglish ? 'TRAVEL' : 'VIAJE'}</option>
            </select>
            {errors.productInterest ? <p id={`${formId}-productInterest-error`} role="alert" className="mt-2 text-sm text-red-600">{errors.productInterest.message}</p> : null}
          </div>
          <div>
            <label htmlFor={`${formId}-notes`} className="mb-2 block text-sm font-semibold text-[var(--text)]">{isEnglish ? 'Useful detail' : 'Detalle útil'}</label>
            <input id={`${formId}-notes`} type="text" className="input-ui scroll-mt-24" placeholder={isEnglish ? 'Family, self-employed, pet, one-off trip...' : 'Familia, autónomo, mascota, viaje puntual...'} {...register('notes')} />
          </div>
        </div>

        <label htmlFor={`${formId}-consent`} className="mt-2 flex items-start gap-3 rounded-[22px] bg-[var(--bg)] p-4 text-sm leading-6 text-[var(--muted)] md:text-base">
          <input id={`${formId}-consent`} type="checkbox" required aria-invalid={!!errors.consent} aria-describedby={errors.consent ? `${formId}-consent-error` : undefined} className="scroll-mt-24 mt-1 h-4 w-4 rounded border-[var(--border)]" {...register('consent')} />
          <span>{isEnglish ? 'I agree that my data may be used to answer my enquiry and guide me towards suitable options.' : 'Acepto que mis datos se utilicen para responder a mi consulta y orientarme sobre opciones que puedan encajar conmigo.'}</span>
        </label>
        {errors.consent ? <p id={`${formId}-consent-error`} role="alert" className="text-sm text-red-600">{errors.consent.message}</p> : null}

        <div className="mt-2">
          <button type="submit" disabled={isSubmitting} className="btn-primary w-full">
            {isSubmitting ? <Loader2 aria-hidden="true" className="h-4 w-4 animate-spin" /> : null}
            {isSubmitting ? (isEnglish ? 'Sending…' : 'Enviando…') : (isEnglish ? 'Request guidance' : 'Solicitar orientación')}
          </button>
        </div>

        <span className="sr-only" role="status">{isSubmitting ? (isEnglish ? 'Sending your enquiry' : 'Enviando tu consulta') : ''}</span>
        {serverMessage ? <div role="status" className="rounded-2xl bg-emerald-50 px-4 py-3 text-sm text-emerald-700">{serverMessage}</div> : null}
        {serverError ? <div ref={errorRef} role="alert" tabIndex={-1} className="scroll-mt-24 rounded-2xl bg-red-50 px-4 py-3 text-sm text-red-700">{serverError}</div> : null}
      </form>
    </div>
  );
}
