"use client";

import Link from 'next/link';
import { useMemo, useState, type ReactNode } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  ArrowRight,
  BadgeEuro,
  BriefcaseBusiness,
  Globe2,
  Loader2,
  LockKeyhole,
  MessageCircle,
  RefreshCcw,
  ShieldCheck,
  UserRound,
  UsersRound,
} from 'lucide-react';
import type { Product } from '@/lib/products';
import { buildWhatsAppHref } from '@/lib/products';
import styles from './health-contact-profiles-section.module.css';
import { useLocale } from 'next-intl';

const formSchema = (en: boolean) => z.object({
  fullName: z.string().min(2, en ? 'Please enter your name' : 'Indícanos tu nombre'),
  phone: z.string().min(6, en ? 'Please enter a valid phone number' : 'Añade un teléfono válido'),
  productInterest: z.string().min(2, en ? 'Choose a category' : 'Selecciona una categoría'),
  notes: z.string().optional(),
  consent: z.boolean().refine((value) => value, en ? 'We need your consent to reply' : 'Necesitamos tu consentimiento para responderte'),
  website: z.string().optional(),
});

type FormValues = z.infer<ReturnType<typeof formSchema>>;

const profiles = [
  { id: 'particular-familia', label: 'Particular o familia', Icon: UsersRound },
  { id: 'autonomo-empresa', label: 'Autónomo o empresa', Icon: BriefcaseBusiness },
  { id: 'senior', label: 'Senior', Icon: UserRound },
  { id: 'extranjero', label: 'Extranjero', Icon: Globe2 },
] as const;

const useModes = [
  { id: 'sin-copagos', label: 'Sin copagos', Icon: ShieldCheck },
  { id: 'con-copagos', label: 'Con copagos', Icon: BadgeEuro },
  { id: 'reembolso', label: 'Reembolso', Icon: RefreshCcw },
] as const;

export function HealthContactProfilesSection({ product }: { product: Product }) {
  const en = useLocale() === 'en';
  const visibleProfiles = en ? [{ id: 'particular-familia', label: 'Individual or family', Icon: UsersRound }, { id: 'autonomo-empresa', label: 'Self-employed or business', Icon: BriefcaseBusiness }, { id: 'senior', label: 'Senior', Icon: UserRound }, { id: 'extranjero', label: 'Foreigner', Icon: Globe2 }] : profiles;
  const visibleModes = en ? [{ id: 'sin-copagos', label: 'No co-payments', Icon: ShieldCheck }, { id: 'con-copagos', label: 'With co-payments', Icon: BadgeEuro }, { id: 'reembolso', label: 'Reimbursement', Icon: RefreshCcw }] : useModes;
  const [selectedProfile, setSelectedProfile] = useState<string | null>(null);
  const [selectedMode, setSelectedMode] = useState<string | null>(null);
  const [serverMessage, setServerMessage] = useState<string | null>(null);
  const [serverError, setServerError] = useState<string | null>(null);
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormValues>({
    resolver: zodResolver(formSchema(en)),
    defaultValues: { fullName: '', phone: '', productInterest: 'salud', notes: '', consent: false, website: '' },
  });

  const selectionDetail = useMemo(() => {
    const profile = visibleProfiles.find((item) => item.id === selectedProfile)?.label;
    const mode = visibleModes.find((item) => item.id === selectedMode)?.label;
    return [profile && `${en ? 'Profile' : 'Perfil'}: ${profile}`, mode && `${en ? 'Preferred use' : 'Uso preferido'}: ${mode}`].filter(Boolean).join(' · ');
  }, [en, selectedMode, selectedProfile, visibleModes, visibleProfiles]);

  const whatsappHref = buildWhatsAppHref(
    en ? `Hello, I would like clear guidance about health insurance.${selectionDetail ? ` ${selectionDetail}.` : ''}` : `Hola, quiero una orientación clara sobre el seguro de salud.${selectionDetail ? ` ${selectionDetail}.` : ''}`,
  );

  const onSubmit = async (values: FormValues) => {
    setServerMessage(null);
    setServerError(null);
    const detail = [selectionDetail, values.notes?.trim()].filter(Boolean).join(' — ');
    const payload = {
      ...values,
      notes: detail,
      page: typeof window !== 'undefined' ? { url: window.location.href, referrer: document.referrer || '' } : {},
      timestamp: new Date().toISOString(),
    };
    try {
      const response = await fetch('/api/leads', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
      const data = (await response.json()) as { ok?: boolean; message?: string };
      if (!response.ok || !data.ok) throw new Error(data.message || (en ? 'We could not send your request. Write to us on WhatsApp and we will help you.' : 'No hemos podido enviar tu solicitud. Escríbenos por WhatsApp y lo resolvemos contigo.'));
      setServerMessage(en ? 'Thank you. We have received your request and will reply with initial guidance as soon as possible.' : 'Gracias. Hemos recibido tu solicitud y te responderemos con una orientación inicial lo antes posible.');
      reset({ fullName: '', phone: '', productInterest: 'salud', notes: '', consent: false, website: '' });
      setSelectedProfile(null);
      setSelectedMode(null);
    } catch (error) {
      setServerError(error instanceof Error ? error.message : 'Ha ocurrido un error inesperado.');
    }
  };

  return (
    <section className={styles.section} aria-labelledby="salud-perfiles-title">
      <div className={styles.topography} aria-hidden="true"><svg viewBox="0 0 1440 760" preserveAspectRatio="none"><path d="M1090 38c155 6 258 78 300 178s12 207-99 251-212-4-290 55 18 157 104 206" /><path d="M1035 5c188 20 307 119 328 244s-55 217-148 246-143 83-51 180" /><path d="M10 605c142-62 282-17 332 70s148 96 234 32 190-80 300-28" /></svg></div>
      <div className={`container-shell ${styles.shell}`}>
        <div className={styles.layout}>
          <div className={styles.leftColumn}>
            <p className={styles.eyebrow}>{en ? 'PROFILES AND USE CASES' : 'PERFILES Y CASOS DE USO'}</p>
            <h2 id="salud-perfiles-title">{en ? 'What type of cover could fit you?' : 'Qué tipo de cobertura puede encajar contigo'}</h2>
            <span className={styles.wave} aria-hidden="true"><svg viewBox="0 0 156 18"><path d="M2 12c20-13 38 5 57-3s31-9 45 0 29 6 50-5" /></svg></span>
            <p className={styles.intro}>{en ? 'The right cover depends on who is insured, how you plan to use it and the level of protection you need. Start with the profile closest to your situation.' : 'La cobertura adecuada depende de quién se asegura, cómo piensa utilizarla y qué nivel de protección necesita. Empieza por el perfil que más se acerque a tu situación.'}</p>

            <div className={styles.profileArea}>
              <svg className={styles.profileLine} aria-hidden="true" viewBox="0 0 680 330" preserveAspectRatio="none"><path d="M88 72C180 40 245 61 288 126s106 53 157 4 126-40 165 33c18 33 18 78 1 111" /><circle cx="88" cy="72" r="4" /><circle cx="288" cy="126" r="4" /><circle cx="445" cy="130" r="4" /><circle cx="610" cy="270" r="4" /><path d="M611 270c20 6 29 13 41 27" /><path d="M642 287l10 10-14 2" /></svg>
              <div className={styles.profiles} aria-label={en ? 'Select the profile closest to your situation' : 'Selecciona el perfil que más se parece a tu situación'}>
                {visibleProfiles.map(({ id, label, Icon }) => <button key={id} type="button" className={`${styles.profile} ${selectedProfile === id ? styles.isSelected : ''}`} aria-pressed={selectedProfile === id} onClick={() => setSelectedProfile(selectedProfile === id ? null : id)}><span className={styles.profileIcon}><Icon aria-hidden="true" /></span><span>{label}</span><ArrowRight aria-hidden="true" className={styles.profileArrow} /></button>)}
              </div>
            </div>

            <fieldset className={styles.modeFieldset}>
              <legend>{en ? 'HOW DO YOU WANT TO USE THE INSURANCE?' : '¿CÓMO QUIERES UTILIZAR EL SEGURO?'}</legend>
              <div className={styles.modes}>
                {visibleModes.map(({ id, label, Icon }) => <button key={id} type="button" className={`${styles.mode} ${selectedMode === id ? styles.isSelected : ''}`} aria-pressed={selectedMode === id} onClick={() => setSelectedMode(selectedMode === id ? null : id)}><Icon aria-hidden="true" /><span>{label}</span><ArrowRight aria-hidden="true" /></button>)}
              </div>
            </fieldset>

            <p className={styles.note}><ShieldCheck aria-hidden="true" />{en ? 'This selection is only a starting point. We will review the actual conditions with you before recommending a plan.' : 'Esta selección es solo un punto de partida. Revisaremos contigo las condiciones reales antes de recomendar una modalidad.'}</p>
          </div>

          <div className={styles.formWrap}>
            <div className={styles.formHalo} aria-hidden="true" />
            <div className={styles.formCard}>
              <div className={styles.formHeading}>
                <div><p className={styles.eyebrow}>{en ? 'INITIAL GUIDANCE' : 'ORIENTACIÓN INICIAL'}</p><h3>{en ? 'Tell us about your case' : 'Cuéntanos tu caso'}</h3><span className={styles.formWave} aria-hidden="true"><svg viewBox="0 0 112 16"><path d="M2 11c15-11 28 5 43-2s23-8 33 0 19 4 32-5" /></svg></span><p>{en ? 'With a few details, we can understand what you are looking for and give you initial guidance before preparing specific options.' : 'Con unos pocos datos podremos entender qué buscas y darte una primera orientación antes de preparar opciones concretas.'}</p></div>
                <span className={styles.formShield}><ShieldCheck aria-hidden="true" /></span>
              </div>
              <div className={styles.whatsappNotice}>{en ? 'For a quick enquiry, you can also write to us directly on ' : 'Para una consulta rápida, también puedes escribirnos directamente por '}<a href={whatsappHref}>WhatsApp</a>.</div>
              <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <input type="hidden" {...register('website')} />
                <div className={styles.fields}>
                  <Field label={en ? 'Full name' : 'Nombre y apellidos'} error={errors.fullName?.message}><input autoComplete="name" placeholder={en ? 'Your name' : 'Tu nombre'} {...register('fullName')} /></Field>
                  <Field label={en ? 'Phone' : 'Teléfono'} error={errors.phone?.message}><input autoComplete="tel" inputMode="tel" placeholder={en ? 'e.g. 603 448 765' : 'Ej. 603 448 765'} {...register('phone')} /></Field>
                  <Field label={en ? 'Product' : 'Producto'} error={errors.productInterest?.message}><select {...register('productInterest')}><option value="salud">{en ? 'HEALTH (Basic, Senior, Reimbursement...)' : 'SALUD (Básico, Senior, Reembolso...)'}</option><option value="vida">{en ? 'LIFE' : 'VIDA'}</option><option value="negocio">{en ? 'BUSINESS / SME' : 'NEGOCIO / PYME'}</option><option value="proteccion-juridica">{en ? 'LEGAL PROTECTION' : 'PROTECCIÓN JURÍDICA'}</option><option value="electrodomesticos">{en ? 'HOME APPLIANCES' : 'ELECTRODOMÉSTICOS'}</option><option value="mascotas">{en ? 'PETS' : 'MASCOTAS'}</option><option value="accidentes">{en ? 'ACCIDENTS' : 'ACCIDENTES'}</option><option value="dental">DENTAL</option><option value="decesos">{en ? 'FUNERAL' : 'DECESOS'}</option><option value="viaje">{en ? 'TRAVEL' : 'VIAJE'}</option></select></Field>
                  <Field label={en ? 'Useful detail' : 'Detalle útil'}><input placeholder={en ? 'Family, self-employed, age, intended use...' : 'Familia, autónomo, edad, uso previsto...'} {...register('notes')} /></Field>
                </div>
                <label className={styles.consent}><input type="checkbox" {...register('consent')} /><span>{en ? 'I agree that my data may be used to answer my enquiry and guide me towards suitable options.' : 'Acepto que mis datos se utilicen para responder a mi consulta y orientarme sobre opciones que puedan encajar conmigo.'}</span></label>
                {errors.consent ? <p className={styles.error}>{errors.consent.message}</p> : null}
                <div className={styles.formActions}><button type="submit" disabled={isSubmitting}>{isSubmitting ? <Loader2 aria-hidden="true" className={styles.spinner} /> : <ArrowRight aria-hidden="true" />}{en ? 'Request guidance' : 'Solicitar orientación'}</button><a href={whatsappHref}><MessageCircle aria-hidden="true" />{en ? 'Talk on WhatsApp' : 'Hablar por WhatsApp'}</a></div>
                <p className={styles.privacy}><LockKeyhole aria-hidden="true" />{en ? 'We handle your data confidentially and according to our ' : 'Tratamos tus datos con confidencialidad y conforme a nuestra '}<Link href={en ? '/en/privacy' : '/privacidad'}>{en ? 'privacy policy' : 'política de privacidad'}</Link>.</p>
                {serverMessage ? <p className={styles.success}>{serverMessage}</p> : null}
                {serverError ? <p className={styles.errorBox}>{serverError}</p> : null}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: ReactNode }) {
  return <label className={styles.field}><span>{label}</span>{children}{error ? <em>{error}</em> : null}</label>;
}
