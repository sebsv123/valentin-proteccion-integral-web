"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2, ShieldCheck } from "lucide-react";
import { buildWhatsAppHref } from "@/lib/products";
import { siteConfig } from "@/lib/site-config";
import {
  captureUTMs,
  getStoredUTMs,
  trackFormStart,
  trackFormSubmit,
  trackLeadFormSubmit,
} from "@/lib/analytics";

const CONTACT_EMAIL = siteConfig.contact.email;
const FORM_DELIVERY_ERROR = `No hemos podido enviar tu solicitud. Escríbenos por WhatsApp o a ${CONTACT_EMAIL}.`;

const formSchema = z
  .object({
    fullName: z.string().min(2, "Indícanos tu nombre"),
    phone: z.string().optional().or(z.literal("")),
    email: z.string().email("Email no válido").optional().or(z.literal("")),
    contactPreference: z.enum(["whatsapp", "llamada", "email"]),
    housingProfile: z.enum(["estudiante", "profesional", "familia", "colaborador"]),
    destinationCity: z.string().min(2, "Indica la ciudad"),
    arrivalDate: z.string().optional(),
    stayDuration: z.string().optional(),
    monthlyBudget: z.string().optional(),
    occupants: z.string().optional(),
    preferredArea: z.string().optional(),
    universityOrWorkplace: z.string().optional(),
    furnishedPreference: z.enum(["indiferente", "amueblado", "sin-amueblar"]),
    needsInsurance: z.enum(["no-lo-se", "si", "no"]),
    comments: z.string().max(1500, "El comentario es demasiado largo").optional(),
    consent: z.boolean().refine((v) => v, "Necesitamos tu consentimiento para responderte"),
    website: z.string().optional(), // honeypot
  })
  // Validación condicional del canal de contacto:
  // - WhatsApp o llamada -> teléfono obligatorio.
  // - Email -> email obligatorio (no se obliga a teléfono).
  .superRefine((data, ctx) => {
    const phoneOk = !!data.phone && data.phone.replace(/\D/g, "").length >= 6;
    if ((data.contactPreference === "whatsapp" || data.contactPreference === "llamada") && !phoneOk) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["phone"],
        message: "Añade un teléfono válido para contactarte por ese canal",
      });
    }
    if (data.contactPreference === "email" && !data.email) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["email"],
        message: "Indica tu email para contactarte por ese canal",
      });
    }
  });

type FormValues = z.infer<typeof formSchema>;

const PROFILE_LABEL: Record<FormValues["housingProfile"], string> = {
  estudiante: "Estudiante internacional",
  profesional: "Profesional",
  familia: "Familia",
  colaborador: "Colaborador / partner",
};
const PREF_LABEL: Record<FormValues["contactPreference"], string> = {
  whatsapp: "WhatsApp",
  llamada: "Llamada",
  email: "Email",
};
const FURNISHED_LABEL: Record<FormValues["furnishedPreference"], string> = {
  indiferente: "Indiferente",
  amueblado: "Amueblado",
  "sin-amueblar": "Sin amueblar",
};
const INSURANCE_LABEL: Record<FormValues["needsInsurance"], string> = {
  "no-lo-se": "Aún no lo sé",
  si: "Sí, también seguro",
  no: "No, solo vivienda",
};

export default function AlquileresForm() {
  const router = useRouter();
  const [serverError, setServerError] = useState<string | null>(null);
  const [started, setStarted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      contactPreference: "whatsapp",
      housingProfile: "estudiante",
      destinationCity: siteConfig.housingService.scopeCity,
      arrivalDate: "",
      stayDuration: "",
      monthlyBudget: "",
      occupants: "",
      preferredArea: "",
      universityOrWorkplace: "",
      furnishedPreference: "indiferente",
      needsInsurance: "no-lo-se",
      comments: "",
      consent: false,
      website: "",
    },
  });

  const markStarted = () => {
    if (!started) {
      setStarted(true);
      trackFormStart("alquileres");
    }
  };

  const onSubmit = async (values: FormValues) => {
    setServerError(null);
    const capturedUTMs = captureUTMs();
    const storedUTMs = getStoredUTMs();

    // Campos estructurados (se envían al backend además del resumen legible).
    const metadata: Record<string, string> = {
      "Perfil de vivienda": PROFILE_LABEL[values.housingProfile],
      "Ciudad destino": values.destinationCity,
      "Contacto preferido": PREF_LABEL[values.contactPreference],
      Amueblado: FURNISHED_LABEL[values.furnishedPreference],
      "¿Necesita seguro?": INSURANCE_LABEL[values.needsInsurance],
    };
    if (values.arrivalDate) metadata["Fecha de llegada"] = values.arrivalDate;
    if (values.stayDuration) metadata["Duración prevista"] = values.stayDuration;
    if (values.monthlyBudget) metadata["Presupuesto mensual"] = values.monthlyBudget;
    if (values.occupants) metadata["Nº de personas"] = values.occupants;
    if (values.preferredArea) metadata["Zona preferida"] = values.preferredArea;
    if (values.universityOrWorkplace) metadata["Universidad / trabajo"] = values.universityOrWorkplace;

    // Resumen legible para el email.
    const message = Object.entries(metadata)
      .map(([k, v]) => `${k}: ${v}`)
      .concat(values.comments ? [`Comentarios: ${values.comments}`] : [])
      .join("\n");

    const payload = {
      source: "alquileres-extranjeros",
      name: values.fullName,
      phone: values.phone || "",
      email: values.email || "",
      interest: `Alquileres / vivienda en ${values.destinationCity} — ${PROFILE_LABEL[values.housingProfile]}`,
      message,
      metadata,
      consent: values.consent,
      website: values.website || "",
      subject: `Solicitud de vivienda (${values.destinationCity}) — ${PROFILE_LABEL[values.housingProfile]}`,
      pageUrl: typeof window !== "undefined" ? window.location.href : "",
      referrer: typeof document !== "undefined" ? document.referrer || "" : "",
      utm: { ...storedUTMs, ...capturedUTMs },
    };

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!response.ok) throw new Error(FORM_DELIVERY_ERROR); // sin éxito simulado

      trackFormSubmit("alquileres", true);
      trackLeadFormSubmit({
        product_slug: "alquileres-extranjeros",
        lead_type: "form",
        page_location: typeof window !== "undefined" ? window.location.href : "",
      });

      reset();
      router.push("/gracias");
    } catch (error) {
      trackFormSubmit("alquileres", false);
      setServerError(error instanceof Error ? error.message : FORM_DELIVERY_ERROR);
    }
  };

  const inputCls =
    "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-[var(--green)] focus:outline-none focus:ring-2 focus:ring-[var(--green)]/20";
  const labelCls = "mb-1.5 block text-sm font-semibold text-slate-700";
  const errCls = "mt-1.5 text-sm text-red-600";
  const optional = <span className="font-normal text-slate-400">(opcional)</span>;

  return (
    <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm sm:p-8">
      <div className="mb-6 flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-semibold text-[var(--blue-deep)]">Sin compromiso</p>
          <h2 className="mt-1 text-2xl font-bold text-slate-900 sm:text-3xl">
            Cuéntanos qué vivienda necesitas
          </h2>
          <p className="mt-2 leading-relaxed text-slate-600">
            Revisamos tu caso y te orientamos según tu perfil, fechas, presupuesto y zona.
            Sin prometer vivienda garantizada.
          </p>
        </div>
        <div className="hidden rounded-2xl bg-[#F7F3EA] p-3 text-[var(--blue-deep)] sm:block">
          <ShieldCheck className="h-7 w-7" />
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} onChange={markStarted} className="grid gap-4" noValidate>
        <input type="text" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" {...register("website")} />

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="al-name" className={labelCls}>Nombre</label>
            <input
              id="al-name"
              className={inputCls}
              placeholder="Tu nombre"
              aria-invalid={errors.fullName ? true : undefined}
              aria-describedby={errors.fullName ? "al-name-error" : undefined}
              {...register("fullName")}
            />
            {errors.fullName ? <p id="al-name-error" role="alert" className={errCls}>{errors.fullName.message}</p> : null}
          </div>
          <div>
            <label htmlFor="al-pref" className={labelCls}>¿Cómo prefieres que te contactemos?</label>
            <select id="al-pref" className={inputCls} {...register("contactPreference")}>
              <option value="whatsapp">WhatsApp</option>
              <option value="llamada">Llamada</option>
              <option value="email">Email</option>
            </select>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="al-phone" className={labelCls}>WhatsApp / teléfono</label>
            <input
              id="al-phone"
              className={inputCls}
              placeholder="Ej. 603 448 765"
              inputMode="tel"
              aria-invalid={errors.phone ? true : undefined}
              aria-describedby={errors.phone ? "al-phone-error" : undefined}
              {...register("phone")}
            />
            {errors.phone ? <p id="al-phone-error" role="alert" className={errCls}>{errors.phone.message}</p> : null}
          </div>
          <div>
            <label htmlFor="al-email" className={labelCls}>Email</label>
            <input
              id="al-email"
              className={inputCls}
              placeholder="tucorreo@email.com"
              inputMode="email"
              aria-invalid={errors.email ? true : undefined}
              aria-describedby={errors.email ? "al-email-error" : undefined}
              {...register("email")}
            />
            {errors.email ? <p id="al-email-error" role="alert" className={errCls}>{errors.email.message}</p> : null}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="al-profile" className={labelCls}>Tu perfil</label>
            <select id="al-profile" className={inputCls} {...register("housingProfile")}>
              <option value="estudiante">Estudiante internacional</option>
              <option value="profesional">Profesional</option>
              <option value="familia">Familia</option>
              <option value="colaborador">Colaborador / partner</option>
            </select>
          </div>
          <div>
            <label htmlFor="al-city" className={labelCls}>Ciudad destino</label>
            <input
              id="al-city"
              className={inputCls}
              placeholder="Madrid"
              aria-invalid={errors.destinationCity ? true : undefined}
              aria-describedby={errors.destinationCity ? "al-city-error" : undefined}
              {...register("destinationCity")}
            />
            {errors.destinationCity ? <p id="al-city-error" role="alert" className={errCls}>{errors.destinationCity.message}</p> : null}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="al-area" className={labelCls}>Zona preferida {optional}</label>
            <input id="al-area" className={inputCls} placeholder="Ej. Chamberí, Moncloa…" {...register("preferredArea")} />
          </div>
          <div>
            <label htmlFor="al-uni" className={labelCls}>Universidad o lugar de trabajo {optional}</label>
            <input id="al-uni" className={inputCls} placeholder="Ej. UCM, oficina en Nuevos Ministerios…" {...register("universityOrWorkplace")} />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <label htmlFor="al-arrival" className={labelCls}>Llegada estimada</label>
            <input id="al-arrival" className={inputCls} placeholder="Ej. sept. 2026" {...register("arrivalDate")} />
          </div>
          <div>
            <label htmlFor="al-duration" className={labelCls}>Duración prevista</label>
            <input id="al-duration" className={inputCls} placeholder="Ej. curso, 1 año…" {...register("stayDuration")} />
          </div>
          <div>
            <label htmlFor="al-budget" className={labelCls}>Presupuesto mensual</label>
            <input id="al-budget" className={inputCls} placeholder="Ej. 500–700 €" {...register("monthlyBudget")} />
          </div>
          <div>
            <label htmlFor="al-occupants" className={labelCls}>Nº de personas</label>
            <input id="al-occupants" className={inputCls} placeholder="Ej. 1, 2, 4…" inputMode="numeric" {...register("occupants")} />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="al-furnished" className={labelCls}>¿Amueblado?</label>
            <select id="al-furnished" className={inputCls} {...register("furnishedPreference")}>
              <option value="indiferente">Indiferente</option>
              <option value="amueblado">Amueblado</option>
              <option value="sin-amueblar">Sin amueblar</option>
            </select>
          </div>
          <div>
            <label htmlFor="al-needs" className={labelCls}>¿Necesitas también seguro?</label>
            <select id="al-needs" className={inputCls} {...register("needsInsurance")}>
              <option value="no-lo-se">Aún no lo sé</option>
              <option value="si">Sí, también quiero orientación de seguro</option>
              <option value="no">No, solo vivienda</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="al-comments" className={labelCls}>Comentarios {optional}</label>
          <textarea
            id="al-comments"
            rows={3}
            className={inputCls}
            placeholder="Cuéntanos cualquier detalle útil de tu caso"
            aria-invalid={errors.comments ? true : undefined}
            aria-describedby={errors.comments ? "al-comments-error" : undefined}
            {...register("comments")}
          />
          {errors.comments ? <p id="al-comments-error" role="alert" className={errCls}>{errors.comments.message}</p> : null}
        </div>

        <label htmlFor="al-consent" className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4 text-sm leading-6 text-slate-600">
          <input
            id="al-consent"
            type="checkbox"
            className="mt-1 h-4 w-4 rounded border-slate-300"
            aria-invalid={errors.consent ? true : undefined}
            aria-describedby={errors.consent ? "al-consent-error" : undefined}
            {...register("consent")}
          />
          <span>
            Acepto que <strong>{siteConfig.responsiblePerson.fullName}</strong> ({siteConfig.brand.name})
            trate mis datos para responder a mi solicitud de orientación en vivienda y seguro.
            Base jurídica: mi consentimiento. No se ceden a terceros salvo obligación legal.
            Puedo ejercer mis derechos escribiendo a {CONTACT_EMAIL}. Más información en la{" "}
            <a href={siteConfig.legalLinks.privacidad} className="font-semibold text-[var(--blue-deep)] underline">
              política de privacidad
            </a>.
          </span>
        </label>
        {errors.consent ? <p id="al-consent-error" role="alert" className={errCls}>{errors.consent.message}</p> : null}

        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--green)] px-6 py-4 text-base font-semibold text-[var(--blue-deep)] transition-all hover:brightness-105 disabled:opacity-60"
        >
          {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
          Solicitar orientación
        </button>

        <p className="text-center text-sm text-slate-500">
          ¿Prefieres escribir directamente?{" "}
          <a
            href={buildWhatsAppHref("Hola, me gustaría orientación sobre alquiler de vivienda en Madrid para mi llegada a España.")}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-[var(--blue-deep)] underline"
          >
            Hablar por WhatsApp
          </a>
        </p>

        {serverError ? (
          <div className="rounded-2xl bg-red-50 px-4 py-3 text-sm text-red-700" role="alert" aria-live="assertive">
            {serverError}
          </div>
        ) : null}
      </form>
    </div>
  );
}
