import { z } from 'zod';

export const businessHealthSchema = z.object({
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

export type BusinessHealthValues = z.infer<typeof businessHealthSchema>;

export function buildBusinessHealthLeadPayload(values: BusinessHealthValues, locale: 'es' | 'en', page: { url: string; referrer: string }) {
  const en = locale === 'en';
  const profileLabel = values.profile === 'autonomo' ? (en ? 'self-employed' : 'autónomo') : (en ? 'business' : 'empresa');
  const notes = [`Origen: /${en ? 'en/business/health-insurance' : 'empresas/salud'}`, `Perfil: ${profileLabel}`, values.company ? `Empresa: ${values.company}` : '', `Email: ${values.email}`, `Provincia: ${values.province}`, `Personas: ${values.teamSize}`, `Cobertura: ${values.coverage}`, values.startDate ? `Implantación: ${values.startDate}` : '', values.financing ? `Financiación: ${values.financing}` : '', values.message ? `Observaciones: ${values.message}` : ''].filter(Boolean).join('\n');
  return {
    source: 'business-health-form',
    name: values.fullName,
    phone: values.phone,
    email: values.email,
    interest: 'salud-empresas-autonomos',
    message: notes,
    consent: values.consent,
    website: values.website || '',
    pageUrl: page.url,
    referrer: page.referrer,
  };
}

export function isBusinessHealthLeadSuccess(httpOk: boolean, data: unknown): boolean {
  return httpOk && typeof data === 'object' && data !== null && 'success' in data && data.success === true;
}
