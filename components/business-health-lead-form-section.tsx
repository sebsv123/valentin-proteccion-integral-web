'use client';

import { useState } from 'react';
import type { ReactNode } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { ArrowRight, Loader2, MessageCircle, ShieldCheck } from 'lucide-react';
import { buildWhatsAppHref } from '@/lib/products';
import styles from './business-health-lead-form-section.module.css';

const schema = z.object({
  profile: z.enum(['autonomo', 'empresa'], { message: 'Selecciona tu perfil' }),
  fullName: z.string().min(2, 'Indica tu nombre y apellidos'),
  company: z.string().optional(),
  email: z.string().email('Añade un email válido'),
  phone: z.string().min(6, 'Añade un teléfono válido'),
  province: z.string().min(2, 'Indica la provincia'),
  teamSize: z.string().min(1, 'Selecciona una opción'),
  coverage: z.string().min(1, 'Selecciona una opción'),
  startDate: z.string().optional(),
  financing: z.string().optional(),
  message: z.string().max(1000).optional(),
  consent: z.boolean().refine(Boolean, 'Necesitamos tu consentimiento para responderte'),
  website: z.string().max(0).optional(),
}).superRefine((values, context) => {
  if (values.profile === 'empresa' && (!values.company || values.company.trim().length < 2)) {
    context.addIssue({ code: z.ZodIssueCode.custom, path: ['company'], message: 'Indica el nombre de la empresa' });
  }
});

type Values = z.infer<typeof schema>;
type Locale = 'es' | 'en';

const inputClass = styles.input;

function Field({ label, error, children }: { label: string; error?: string; children: ReactNode }) {
  return <div className={styles.field}><label>{label}{children}</label>{error ? <p className={styles.error} role="alert">{error}</p> : null}</div>;
}
export function BusinessHealthLeadFormSection({ locale = 'es' }: { locale?: Locale }) {
  const en = locale === 'en';
  const [message, setMessage] = useState<string | null>(null);
  const [serverError, setServerError] = useState<string | null>(null);
  const { register, handleSubmit, watch, formState: { errors, isSubmitting }, reset } = useForm<Values>({ resolver: zodResolver(schema), defaultValues: { consent: false, website: '' } });
  const profile = watch('profile');

  const onSubmit = async (values: Values) => {
    setMessage(null);
    setServerError(null);
    const profileLabel = values.profile === 'autonomo' ? (en ? 'self-employed' : 'autónomo') : (en ? 'business' : 'empresa');
    const notes = [`Origen: /${en ? 'en/business/health-insurance' : 'empresas/salud'}`, `Perfil: ${profileLabel}`, values.company ? `Empresa: ${values.company}` : '', `Email: ${values.email}`, `Provincia: ${values.province}`, `Personas: ${values.teamSize}`, `Cobertura: ${values.coverage}`, values.startDate ? `Implantación: ${values.startDate}` : '', values.financing ? `Financiación: ${values.financing}` : '', values.message ? `Observaciones: ${values.message}` : ''].filter(Boolean).join('\n');
    try {
      const response = await fetch('/api/leads', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ fullName: values.fullName, phone: values.phone, productInterest: 'salud-empresas-autonomos', notes, consent: values.consent, website: values.website || '', page: { url: window.location.href, referrer: document.referrer || '' }, timestamp: new Date().toISOString() }) });
      const data = await response.json() as { ok?: boolean; message?: string };
      if (!response.ok || !data.ok) throw new Error(data.message || (en ? 'We could not send your request. You can contact us on WhatsApp.' : 'No hemos podido enviar tu solicitud. Puedes escribirnos por WhatsApp.'));
      setMessage(en ? 'Thank you. We have received your details and can prepare an initial review.' : 'Gracias. Hemos recibido tus datos y podremos preparar una primera orientación.');
      reset({ consent: false, website: '' });
    } catch (error) {
      setServerError(error instanceof Error ? error.message : (en ? 'An unexpected error occurred.' : 'Ha ocurrido un error inesperado.'));
    }
  };

  const whatsapp = buildWhatsAppHref(en ? 'Hello, I want to review health insurance for a self-employed professional or business.' : 'Hola, quiero revisar salud para un autónomo o una empresa.');
  return <section id="solicitar-estudio" className={styles.section} aria-labelledby="business-health-form-title"><div className={`container-shell ${styles.shell}`}><div className={styles.layout}><div className={styles.info}><p className={styles.eyebrow}>{en ? 'REQUEST A REVIEW' : 'SOLICITAR ESTUDIO'}</p><h2 id="business-health-form-title">{en ? 'Tell us which situation you are reviewing' : 'Cuéntanos qué situación estás valorando'}</h2><p>{en ? 'With a few details we can understand your profile, the people to cover and the type of health insurance you want to review.' : 'Con unos pocos datos podremos entender tu perfil, las personas a asegurar y el tipo de salud que quieres revisar.'}</p><p className={styles.safe}>{en ? 'Do not send medical information or health data in this first enquiry.' : 'No necesitas enviar documentación médica ni datos de salud en esta primera consulta.'}</p><div className={styles.next}><h3>{en ? 'What happens next?' : '¿Qué ocurre después?'}</h3><ol><li>{en ? 'We review the initial information.' : 'Revisamos la información inicial.'}</li><li>{en ? 'We contact you to complete the relevant details.' : 'Te contactamos para completar los datos necesarios.'}</li><li>{en ? 'We explain the product conditions before any decision.' : 'Te explicamos las condiciones antes de decidir.'}</li></ol><p>{en ? 'You can also write directly on WhatsApp.' : 'También puedes escribir directamente por WhatsApp.'}</p><a href={whatsapp} className={styles.whatsapp}><MessageCircle aria-hidden="true" /> {en ? 'Talk to VPI' : 'Hablar con VPI'}</a></div></div><div className={styles.formCard}><div className={styles.formHead}><div><p className={styles.formEyebrow}>{en ? 'FIRST REVIEW' : 'PRIMERA ORIENTACIÓN'}</p><h3>{en ? 'Request a review' : 'Solicitar estudio'}</h3></div><span><ShieldCheck aria-hidden="true" /></span></div><form onSubmit={handleSubmit(onSubmit)} noValidate><input type="text" tabIndex={-1} autoComplete="off" className={styles.honeypot} {...register('website')} /><div className={styles.grid}><Field label={en ? 'Profile' : 'Perfil'} error={errors.profile?.message}><select className={inputClass} {...register('profile')}><option value="">{en ? 'Select a profile' : 'Selecciona tu perfil'}</option><option value="autonomo">{en ? "I'm self-employed" : 'Soy autónomo'}</option><option value="empresa">{en ? 'I represent a business' : 'Represento una empresa'}</option></select></Field><Field label={en ? 'Full name' : 'Nombre y apellidos'} error={errors.fullName?.message}><input className={inputClass} autoComplete="name" {...register('fullName')} /></Field><Field label={en ? 'Business name (if relevant)' : 'Empresa (si aplica)'} error={errors.company?.message}><input className={inputClass} autoComplete="organization" {...register('company')} /></Field><Field label="Email" error={errors.email?.message}><input className={inputClass} type="email" autoComplete="email" {...register('email')} /></Field><Field label={en ? 'Phone' : 'Teléfono'} error={errors.phone?.message}><input className={inputClass} type="tel" autoComplete="tel" {...register('phone')} /></Field><Field label={en ? 'Province' : 'Provincia'} error={errors.province?.message}><input className={inputClass} autoComplete="address-level1" {...register('province')} /></Field><Field label={en ? 'Approximate number of people' : 'Número aproximado de personas'} error={errors.teamSize?.message}><select className={inputClass} {...register('teamSize')}><option value="">{en ? 'Select an option' : 'Selecciona una opción'}</option><option>{en ? 'Only me' : 'Solo para mí'}</option><option>2</option><option>3–5</option><option>6–10</option><option>11–25</option><option>{en ? 'More than 25' : 'Más de 25'}</option><option>{en ? "I don't know yet" : 'Aún no lo sé'}</option></select></Field><Field label={en ? 'Coverage to review' : 'Cobertura que quieres revisar'} error={errors.coverage?.message}><select className={inputClass} {...register('coverage')}><option value="">{en ? 'Select an option' : 'Selecciona una opción'}</option><option>{en ? 'Outpatient' : 'Ambulatoria'}</option><option>{en ? 'Comprehensive with hospital cover' : 'Completa con hospitalización'}</option><option>{en ? 'Reimbursement' : 'Reembolso'}</option><option>{en ? 'I want to compare options' : 'Quiero comparar opciones'}</option><option>{en ? "I don't know yet" : 'Aún no lo sé'}</option></select></Field><Field label={en ? 'Expected start date' : 'Fecha prevista'}><select className={inputClass} {...register('startDate')}><option value="">{en ? 'Select an option' : 'Selecciona una opción'}</option><option>{en ? 'As soon as possible' : 'Lo antes posible'}</option><option>{en ? 'Within 3 months' : 'En los próximos 3 meses'}</option><option>{en ? 'Later' : 'Más adelante'}</option><option>{en ? 'Information only' : 'Solo estoy recabando información'}</option></select></Field><Field label={en ? 'How the business may contribute (if relevant)' : 'Cómo puede aportar la empresa (si aplica)'}><select className={inputClass} {...register('financing')}><option value="">{en ? 'Select an option' : 'Selecciona una opción'}</option><option>{en ? 'Business pays all or part' : 'La empresa asume todo o parte'}</option><option>{en ? 'Flexible remuneration' : 'Retribución flexible'}</option><option>{en ? 'Shared contribution' : 'Aportación compartida'}</option><option>{en ? 'Not decided' : 'Todavía no está decidido'}</option></select></Field></div>{profile === 'autonomo' ? <p className="mt-3 text-sm text-slate-600">{en ? 'If you only need cover for yourself, you can also review individual health insurance.' : 'Si solo necesitas cobertura para ti, también puedes revisar salud individual.'} <a className="font-semibold text-indigo-700" href={en ? '/en/insurance/health' : '/seguros/salud'}>{en ? 'View individual health' : 'Ver salud individual'}</a></p> : null}<Field label={en ? 'Notes' : 'Observaciones'}><textarea className={styles.textarea} placeholder={en ? 'Tell us what you are considering' : 'Cuéntanos qué estás valorando'} {...register('message')} /></Field><label className={styles.consent}><input type="checkbox" {...register('consent')} /><span>{en ? 'I agree that my data may be used to answer my enquiry and guide me about relevant options. See the ' : 'Acepto que mis datos se utilicen para responder a mi consulta y orientarme sobre opciones que puedan encajar. Consulta la '}<a href={en ? '/en/privacy' : '/privacidad'}>{en ? 'privacy policy' : 'política de privacidad'}</a>.</span></label>{errors.consent ? <p className={styles.error} role="alert">{errors.consent.message}</p> : null}<button type="submit" disabled={isSubmitting} className={styles.submit}>{isSubmitting ? <Loader2 className="animate-spin" aria-hidden="true" /> : <ArrowRight aria-hidden="true" />}{en ? 'Request a review' : 'Solicitar estudio'}</button><p className={styles.legal}>{en ? 'This enquiry does not imply a contract or automatic acceptance of risk.' : 'La solicitud no implica contratación ni aceptación automática del riesgo.'}</p>{message ? <p className={styles.success} role="status">{message}</p> : null}{serverError ? <p className={styles.error} role="alert">{serverError}</p> : null}</form></div></div></div></section>;
}
