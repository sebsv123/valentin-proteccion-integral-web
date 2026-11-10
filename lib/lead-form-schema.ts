import { z } from 'zod';
import { isReasonablePhone } from './contact-phone.ts';

export const formSchema = (isEnglish: boolean) => z.object({
  fullName: z.string().trim().min(2, isEnglish ? 'Please enter your name' : 'Indícanos tu nombre'),
  phone: z.string().refine(isReasonablePhone, isEnglish
    ? 'Enter a valid phone number, including the country code if international.'
    : 'Añade un teléfono válido, con prefijo de país si es internacional.'),
  productInterest: z.string().min(2, isEnglish ? 'Choose a category' : 'Selecciona una categoría'),
  notes: z.string().optional(),
  consent: z.boolean().refine(Boolean, isEnglish ? 'We need your consent to reply' : 'Necesitamos tu consentimiento para responderte'),
  website: z.string().optional(),
});

export type FormValues = z.infer<ReturnType<typeof formSchema>>;
