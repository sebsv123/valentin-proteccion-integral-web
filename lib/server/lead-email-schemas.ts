import { z } from "zod";

const textField = (fieldName: string, max = 500) =>
  z
    .string({ required_error: `${fieldName} es obligatorio.` })
    .trim()
    .min(2, `${fieldName} es obligatorio.`)
    .max(max, `${fieldName} es demasiado largo.`);

const optionalTextField = (max = 1000) =>
  z
    .string()
    .trim()
    .max(max, "El campo es demasiado largo.")
    .optional()
    .default("");

const optionalUrl = z
  .string()
  .trim()
  .max(1200, "La URL es demasiado larga.")
  .optional()
  .default("");

export const leadEmailSchema = z
  .object({
    source: z.string().trim().max(120).optional().default("lead-form"),
    name: textField("Nombre", 160),
    // Teléfono opcional a nivel de esquema: se exige al menos un canal de
    // contacto (teléfono o email) mediante el refine inferior. Los formularios
    // existentes siguen enviando teléfono, por lo que la compatibilidad se
    // mantiene.
    phone: z.string().trim().max(80, "Teléfono demasiado largo.").optional().default(""),
    email: z.string().trim().email("Email no válido.").max(180).optional().or(z.literal("")).default(""),
    interest: textField("Interés", 180),
    message: optionalTextField(1500),
    consent: z.literal(true, {
      errorMap: () => ({ message: "El consentimiento es obligatorio." }),
    }),
    website: z.string().trim().max(0, "Solicitud no válida.").optional().default(""),
    pageUrl: optionalUrl,
    referrer: optionalUrl,
    subject: z.string().trim().min(4).max(160).optional(),
    utm: z.record(z.string().trim().max(120), z.string().trim().max(300)).optional().default({}),
    // Campos estructurados adicionales (p. ej. formulario de vivienda). No
    // rompen a los formularios existentes: es opcional y con defecto vacío.
    metadata: z
      .record(z.string().trim().max(80), z.string().trim().max(500))
      .optional()
      .default({}),
  })
  .refine((data) => Boolean((data.phone && data.phone.length >= 6) || data.email), {
    message: "Indica un teléfono o un email de contacto.",
    path: ["phone"],
  });

export const professionalReferralSchema = z
  .object({
    nombreProfesional: z.string().trim().max(160).optional(),
    empresa: z.string().trim().max(180).optional(),
    correo: z.string().trim().email("Email no válido.").max(180).optional(),
    nombreCliente: z.string().trim().max(160).optional(),
    contactoCliente: z.string().trim().max(180).optional(),
    tipoTramite: z.string().trim().max(180).optional(),
    autorizacion: z.boolean().optional(),
    professionalName: z.string().trim().max(160).optional(),
    organization: z.string().trim().max(180).optional(),
    professionalEmail: z.string().trim().email("Email no válido.").max(180).optional(),
    clientName: z.string().trim().max(160).optional(),
    clientContact: z.string().trim().max(180).optional(),
    procedureType: z.string().trim().max(180).optional(),
    clientAuthorization: z.boolean().optional(),
    sensitiveNotice: z.boolean().optional(),
    website: z.string().trim().max(0, "Solicitud no válida.").optional().default(""),
    pageUrl: optionalUrl,
    referrer: optionalUrl,
  })
  .transform((payload, ctx) => {
    const normalized = {
      nombreProfesional: payload.nombreProfesional || payload.professionalName || "",
      empresa: payload.empresa || payload.organization || "",
      correo: payload.correo || payload.professionalEmail || "",
      nombreCliente: payload.nombreCliente || payload.clientName || "",
      contactoCliente: payload.contactoCliente || payload.clientContact || "",
      tipoTramite: payload.tipoTramite || payload.procedureType || "",
      autorizacion: payload.autorizacion ?? payload.clientAuthorization ?? false,
      sensitiveNotice: payload.sensitiveNotice ?? true,
      website: payload.website || "",
      pageUrl: payload.pageUrl,
      referrer: payload.referrer,
    };

    const parsed = z
      .object({
        nombreProfesional: textField("Nombre profesional", 160),
        empresa: textField("Empresa", 180),
        correo: z.string().trim().email("Email no válido.").max(180),
        nombreCliente: textField("Nombre del cliente", 160),
        contactoCliente: textField("Contacto del cliente", 180),
        tipoTramite: textField("Tipo de trámite", 180),
        autorizacion: z.literal(true, {
          errorMap: () => ({ message: "La autorización es obligatoria." }),
        }),
        sensitiveNotice: z.literal(true, {
          errorMap: () => ({ message: "La confirmación de datos sensibles es obligatoria." }),
        }),
        website: z.string().trim().max(0, "Solicitud no válida.").optional().default(""),
        pageUrl: optionalUrl,
        referrer: optionalUrl,
      })
      .safeParse(normalized);

    if (!parsed.success) {
      for (const issue of parsed.error.issues) {
        ctx.addIssue(issue);
      }
      return z.NEVER;
    }

    return parsed.data;
  });

export type LeadEmailPayload = z.infer<typeof leadEmailSchema>;
export type ProfessionalReferralPayload = z.infer<typeof professionalReferralSchema>;

export function professionalReferralToLeadEmail(payload: ProfessionalReferralPayload): LeadEmailPayload {
  return {
    source: "professional-referral",
    name: payload.nombreProfesional,
    phone: payload.contactoCliente,
    email: payload.correo,
    interest: `Colaboración profesional: ${payload.tipoTramite}`,
    message: [
      `Empresa o entidad: ${payload.empresa}`,
      `Alumno o cliente: ${payload.nombreCliente}`,
      `Contacto del alumno o cliente: ${payload.contactoCliente}`,
      `Tipo de trámite: ${payload.tipoTramite}`,
      `Confirmación de no enviar documentación sensible: ${payload.sensitiveNotice ? "Sí" : "No"}`,
    ].join("\n"),
    consent: true,
    website: "",
    pageUrl: payload.pageUrl,
    referrer: payload.referrer,
    utm: {},
    metadata: {},
  };
}
