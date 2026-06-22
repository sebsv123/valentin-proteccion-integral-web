"use client";

import Link from 'next/link';
import type { ReactNode } from 'react';
import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { AlertCircle, CheckCircle2, Loader2, Send, ShieldCheck } from 'lucide-react';
import { trackForeignersPartner } from '@/lib/foreigners-partner-analytics';

const professionalReferralSchema = z.object({
  professionalName: z.string().trim().min(2, 'Indica el nombre del profesional').max(120),
  organization: z.string().trim().min(2, 'Indica la empresa o entidad').max(160),
  professionalEmail: z.string().trim().email('Indica un correo profesional válido').max(180),
  clientName: z.string().trim().min(2, 'Indica el nombre del cliente').max(120),
  clientContact: z.string().trim().min(6, 'Indica un contacto válido del cliente').max(120),
  procedureType: z.string().trim().min(2, 'Selecciona el tipo aproximado de trámite').max(120),
  clientAuthorization: z.boolean().refine((value) => value, 'Confirma la autorización del cliente'),
  sensitiveNotice: z.boolean().refine((value) => value, 'Confirma que no adjuntarás documentación sensible'),
  website: z.string().optional(),
});

type ProfessionalReferralValues = z.infer<typeof professionalReferralSchema>;

const defaultValues: ProfessionalReferralValues = {
  professionalName: '',
  organization: '',
  professionalEmail: '',
  clientName: '',
  clientContact: '',
  procedureType: '',
  clientAuthorization: false,
  sensitiveNotice: false,
  website: '',
};

export function ForeignersPartnerForm() {
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [serverMessage, setServerMessage] = useState<string | null>(null);
  const startedRef = useRef(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ProfessionalReferralValues>({
    resolver: zodResolver(professionalReferralSchema),
    defaultValues,
  });

  const markStarted = () => {
    if (startedRef.current) return;
    startedRef.current = true;
    trackForeignersPartner({ action: 'form_start', label: 'professional_referral' });
  };

  const onSubmit = async (values: ProfessionalReferralValues) => {
    setStatus('idle');
    setServerMessage(null);

    try {
      const response = await fetch('/api/professional-referral', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...values,
          pageUrl: typeof window !== 'undefined' ? window.location.href : '',
          referrer: typeof document !== 'undefined' ? document.referrer || '' : '',
        }),
      });

      const data = (await response.json()) as { ok?: boolean; success?: boolean; message?: string; error?: string };
      if (!response.ok || (!data.ok && !data.success)) {
        throw new Error(data.message || 'No hemos podido enviar la derivación.');
      }

      trackForeignersPartner({ action: 'form_submit_success', label: 'professional_referral' });
      setStatus('success');
      setServerMessage('Derivación recibida. Revisaremos la información y contactaremos utilizando los datos autorizados.');
      reset(defaultValues);
      startedRef.current = false;
    } catch (error) {
      trackForeignersPartner({ action: 'form_submit_error', label: 'professional_referral' });
      setStatus('error');
      setServerMessage('No hemos podido enviar la derivación. Puedes intentarlo de nuevo o consultarnos por WhatsApp.');
    }
  };

  return (
    <form className="grid gap-5" onFocusCapture={markStarted} onSubmit={handleSubmit(onSubmit)} noValidate>
      <input type="text" className="hidden" tabIndex={-1} autoComplete="off" {...register('website')} />

      <div className="grid items-center gap-1.5 rounded-[18px] border border-[var(--border)] bg-[var(--bg)] px-3 py-2.5 text-xs font-extrabold uppercase tracking-[0.12em] text-[var(--blue-deep)] sm:flex sm:flex-wrap sm:gap-2 sm:py-2">
        <span>01 Tus datos</span>
        <span className="rotate-90 justify-self-start text-[var(--blue)]/45 sm:rotate-0">→</span>
        <span>02 Datos del caso</span>
        <span className="rotate-90 justify-self-start text-[var(--blue)]/45 sm:rotate-0">→</span>
        <span>03 Confirmación</span>
      </div>

      <section className="rounded-[22px] border border-[var(--border)] bg-white p-4" aria-labelledby="professional-data-title">
        <h3 id="professional-data-title" className="font-heading text-xl font-bold text-[var(--blue-deep)]">Tus datos profesionales</h3>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <Field label="Nombre del profesional" error={errors.professionalName?.message}>
            <input className="input-ui min-h-[52px]" aria-label="Nombre del profesional" autoComplete="name" maxLength={120} {...register('professionalName')} />
          </Field>
          <Field label="Empresa o entidad" error={errors.organization?.message}>
            <input className="input-ui min-h-[52px]" aria-label="Empresa o entidad" autoComplete="organization" maxLength={160} {...register('organization')} />
          </Field>
          <Field label="Correo profesional" error={errors.professionalEmail?.message} className="md:col-span-2">
            <input className="input-ui min-h-[52px]" aria-label="Correo profesional" type="email" autoComplete="email" maxLength={180} {...register('professionalEmail')} />
          </Field>
        </div>
      </section>

      <section className="rounded-[22px] border border-[var(--border)] bg-white p-4" aria-labelledby="case-data-title">
        <h3 id="case-data-title" className="font-heading text-xl font-bold text-[var(--blue-deep)]">Datos mínimos del caso</h3>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <Field label="Nombre del cliente" error={errors.clientName?.message}>
            <input className="input-ui min-h-[52px]" aria-label="Nombre del cliente" autoComplete="off" maxLength={120} {...register('clientName')} />
          </Field>
          <Field label="Contacto autorizado del cliente" error={errors.clientContact?.message}>
            <input className="input-ui min-h-[52px]" aria-label="Contacto autorizado del cliente" autoComplete="off" placeholder="Teléfono o correo autorizado" maxLength={120} {...register('clientContact')} />
          </Field>
          <Field label="Tipo aproximado de trámite" error={errors.procedureType?.message} className="md:col-span-2">
            <select className="select-ui min-h-[52px]" aria-label="Tipo aproximado de trámite" {...register('procedureType')}>
              <option value="">Selecciona una opción</option>
              <option value="estancia-estudios">Estancia por estudios</option>
              <option value="residencia-no-lucrativa">Residencia no lucrativa</option>
              <option value="arraigo">Arraigo u otro trámite de residencia</option>
              <option value="renovacion">Renovación o modificación</option>
              <option value="otro">Otro trámite de extranjería</option>
            </select>
          </Field>
        </div>
      </section>

      <div className="flex items-start gap-3 rounded-[16px] border border-amber-100 bg-amber-50/70 px-3 py-2.5 text-sm leading-6 text-amber-900">
        <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
        <p>No adjuntes pasaportes, informes médicos, resoluciones administrativas ni otra documentación sensible. En este primer contacto solo necesitamos los datos mínimos del caso.</p>
      </div>

      <div className="grid divide-y divide-[var(--border)] border-y border-[var(--border)]">
        <label className="flex items-start gap-3 py-3 text-sm leading-6 text-[var(--muted)]">
          <input type="checkbox" className="mt-1 h-4 w-4 shrink-0 rounded border-[var(--border)]" {...register('clientAuthorization')} />
          <span>Confirmo que el cliente ha autorizado que Valentín Protección Integral contacte con él para orientarle sobre seguro médico para extranjería.</span>
        </label>
        {errors.clientAuthorization ? <p className="text-sm text-red-600">{errors.clientAuthorization.message}</p> : null}

        <label className="flex items-start gap-3 py-3 text-sm leading-6 text-[var(--muted)]">
          <input type="checkbox" className="mt-1 h-4 w-4 shrink-0 rounded border-[var(--border)]" {...register('sensitiveNotice')} />
          <span>Confirmo que no enviaré documentación sensible mediante este formulario y he revisado la <Link className="font-semibold text-[var(--blue)] underline underline-offset-4" href="/privacidad">política de privacidad</Link>.</span>
        </label>
        {errors.sensitiveNotice ? <p className="text-sm text-red-600">{errors.sensitiveNotice.message}</p> : null}
      </div>

      <div className="grid gap-2">
        <button type="submit" disabled={isSubmitting} className="btn-primary w-full justify-center sm:w-fit">
          {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
          Enviar derivación
        </button>
        <p className="text-sm leading-6 text-[var(--muted)]">Revisaremos la información y contactaremos por los datos indicados.</p>
      </div>

      {serverMessage ? (
        <div
          className={`flex items-start gap-3 rounded-2xl px-4 py-3 text-sm ${status === 'success' ? 'bg-emerald-50 text-emerald-800' : 'bg-red-50 text-red-700'}`}
          role={status === 'error' ? 'alert' : 'status'}
          aria-live="polite"
        >
          {status === 'success' ? <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" /> : <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />}
          <p>{serverMessage}</p>
        </div>
      ) : null}
    </form>
  );
}

function Field({ label, error, children, className = '' }: { label: string; error?: string; children: ReactNode; className?: string }) {
  return (
    <div className={className}>
      <label className="mb-2 block text-sm font-semibold text-slate-700">{label}</label>
      {children}
      {error ? <p className="mt-2 text-sm text-red-600">{error}</p> : null}
    </div>
  );
}
