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
    // El teléfono es el canal principal (atendemos por WhatsApp); siempre requerido.
    phone: z.string().min(6, "Añade un teléfono válido"),
    email: z.string().email("Email no válido").optional().or(z.literal("")),
    contactPref: z.enum(["whatsapp", "llamada", "email"]),
    profile: z.enum(["estudiante", "residente", "familia", "colaborador"]),
    city: z.string().optional(),
    arrival: z.string().optional(),
    duration: z.string().optional(),
    budget: z.string().optional(),
    people: z.string().optional(),
    needsInsurance: z.enum(["si", "no", "no-lo-se"]),
    notes: z.string().max(1500, "El comentario es demasiado largo").optional(),
    consent: z
      .boolean()
      .refine((v) => v, "Necesitamos tu consentimiento para responderte"),
    // Honeypot
    website: z.string().optional(),
  })
  // Validación condicional: si prefiere email, el email es obligatorio.
  .superRefine((data, ctx) => {
    if (data.contactPref === "email" && !data.email) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["email"],
        message: "Si prefieres contacto por email, indícanoslo aquí",
      });
    }
  });

type FormValues = z.infer<typeof formSchema>;

const PROFILE_LABEL: Record<FormValues["profile"], string> = {
  estudiante: "Estudiante internacional",
  residente: "Residente",
  familia: "Familia",
  colaborador: "Colaborador / partner",
};

const PREF_LABEL: Record<FormValues["contactPref"], string> = {
  whatsapp: "WhatsApp",
  llamada: "Llamada",
  email: "Email",
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
      contactPref: "whatsapp",
      profile: "estudiante",
      city: "",
      arrival: "",
      duration: "",
      budget: "",
      people: "",
      needsInsurance: "no-lo-se",
      notes: "",
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

    // Empaquetamos los campos específicos de vivienda en el mensaje, reutilizando
    // el endpoint /api/leads (misma validación de servidor, honeypot y entrega).
    const message = [
      `Perfil: ${PROFILE_LABEL[values.profile]}`,
      `Contacto preferido: ${PREF_LABEL[values.contactPref]}`,
      values.city ? `Ciudad o zona de interés: ${values.city}` : null,
      values.arrival ? `Fecha estimada de llegada: ${values.arrival}` : null,
      values.duration ? `Duración prevista: ${values.duration}` : null,
      values.budget ? `Presupuesto aproximado: ${values.budget}` : null,
      values.people ? `Nº de personas: ${values.people}` : null,
      `¿Necesita también seguro?: ${values.needsInsurance}`,
      values.notes ? `Comentarios: ${values.notes}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    const payload = {
      source: "alquileres-extranjeros",
      name: values.fullName,
      phone: values.phone,
      email: values.email || "",
      interest: `Alquileres / vivienda — ${PROFILE_LABEL[values.profile]}`,
      message,
      consent: values.consent,
      website: values.website || "",
      subject: "Solicitud de orientación en vivienda (extranjeros)",
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

      // No simulamos éxito: si el endpoint falla, mostramos un error real.
      if (!response.ok) throw new Error(FORM_DELIVERY_ERROR);

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
    "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20";
  const labelCls = "mb-1.5 block text-sm font-semibold text-slate-700";
  const errCls = "mt-1.5 text-sm text-red-600";

  return (
    <div className="rounded-3xl border border-slate-100 bg-white p-6 sm:p-8 shadow-sm">
      <div className="mb-6 flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-semibold text-emerald-600">Sin compromiso</p>
          <h2 className="mt-1 text-2xl sm:text-3xl font-bold text-slate-900">
            Cuéntanos qué necesitas
          </h2>
          <p className="mt-2 text-slate-600 leading-relaxed">
            Revisamos tu caso y te orientamos según tu perfil, fechas y zona. Sin
            promesas de vivienda garantizada.
          </p>
        </div>
        <div className="hidden rounded-2xl bg-emerald-50 p-3 text-emerald-600 sm:block">
          <ShieldCheck className="h-7 w-7" />
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} onChange={markStarted} className="grid gap-4" noValidate>
        {/* Honeypot antispam */}
        <input
          type="text"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="hidden"
          {...register("website")}
        />

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="al-name" className={labelCls}>Nombre</label>
            <input id="al-name" className={inputCls} placeholder="Tu nombre" {...register("fullName")} />
            {errors.fullName ? <p className={errCls}>{errors.fullName.message}</p> : null}
          </div>
          <div>
            <label htmlFor="al-phone" className={labelCls}>WhatsApp / teléfono</label>
            <input id="al-phone" className={inputCls} placeholder="Ej. 603 448 765" inputMode="tel" {...register("phone")} />
            {errors.phone ? <p className={errCls}>{errors.phone.message}</p> : null}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="al-email" className={labelCls}>Email <span className="font-normal text-slate-400">(opcional)</span></label>
            <input id="al-email" className={inputCls} placeholder="tucorreo@email.com" inputMode="email" {...register("email")} />
            {errors.email ? <p className={errCls}>{errors.email.message}</p> : null}
          </div>
          <div>
            <label htmlFor="al-pref" className={labelCls}>¿Cómo prefieres que te contactemos?</label>
            <select id="al-pref" className={inputCls} {...register("contactPref")}>
              <option value="whatsapp">WhatsApp</option>
              <option value="llamada">Llamada</option>
              <option value="email">Email</option>
            </select>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="al-profile" className={labelCls}>Tu perfil</label>
            <select id="al-profile" className={inputCls} {...register("profile")}>
              <option value="estudiante">Estudiante internacional</option>
              <option value="residente">Residente</option>
              <option value="familia">Familia</option>
              <option value="colaborador">Colaborador / partner</option>
            </select>
          </div>
          <div>
            <label htmlFor="al-city" className={labelCls}>Ciudad o zona de interés <span className="font-normal text-slate-400">(opcional)</span></label>
            <input id="al-city" className={inputCls} placeholder="Ej. Madrid, Boadilla…" {...register("city")} />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <label htmlFor="al-arrival" className={labelCls}>Llegada estimada</label>
            <input id="al-arrival" className={inputCls} placeholder="Ej. sept. 2026" {...register("arrival")} />
          </div>
          <div>
            <label htmlFor="al-duration" className={labelCls}>Duración prevista</label>
            <input id="al-duration" className={inputCls} placeholder="Ej. curso, 1 año…" {...register("duration")} />
          </div>
          <div>
            <label htmlFor="al-budget" className={labelCls}>Presupuesto aprox.</label>
            <input id="al-budget" className={inputCls} placeholder="Ej. 500–700 €/mes" {...register("budget")} />
          </div>
          <div>
            <label htmlFor="al-people" className={labelCls}>Nº de personas</label>
            <input id="al-people" className={inputCls} placeholder="Ej. 1, 2, 4…" inputMode="numeric" {...register("people")} />
          </div>
        </div>

        <div>
          <label htmlFor="al-needs" className={labelCls}>¿Necesitas también seguro?</label>
          <select id="al-needs" className={inputCls} {...register("needsInsurance")}>
            <option value="no-lo-se">Aún no lo sé</option>
            <option value="si">Sí, también quiero orientación de seguro</option>
            <option value="no">No, solo vivienda</option>
          </select>
        </div>

        <div>
          <label htmlFor="al-notes" className={labelCls}>Comentarios <span className="font-normal text-slate-400">(opcional)</span></label>
          <textarea id="al-notes" rows={3} className={inputCls} placeholder="Cuéntanos cualquier detalle útil de tu caso" {...register("notes")} />
          {errors.notes ? <p className={errCls}>{errors.notes.message}</p> : null}
        </div>

        {/* Primera capa informativa de privacidad */}
        <label className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4 text-sm leading-6 text-slate-600">
          <input type="checkbox" className="mt-1 h-4 w-4 rounded border-slate-300" {...register("consent")} />
          <span>
            Acepto que <strong>{siteConfig.responsiblePerson.fullName}</strong> ({siteConfig.brand.name})
            trate mis datos para responder a mi solicitud de orientación en vivienda y seguro.
            Base jurídica: mi consentimiento. No se ceden a terceros salvo obligación legal.
            Puedo ejercer mis derechos escribiendo a {CONTACT_EMAIL}. Más información en la{" "}
            <a href={siteConfig.legalLinks.privacidad} className="font-semibold text-emerald-700 underline">
              política de privacidad
            </a>.
          </span>
        </label>
        {errors.consent ? <p className={errCls}>{errors.consent.message}</p> : null}

        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-6 py-4 text-base font-semibold text-white transition-all hover:bg-emerald-500 disabled:opacity-60"
        >
          {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
          Solicitar orientación
        </button>

        <p className="text-center text-sm text-slate-500">
          ¿Prefieres escribir directamente?{" "}
          <a
            href={buildWhatsAppHref("Hola, además del seguro me gustaría orientación sobre alquiler / vivienda para mi llegada a España.")}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-emerald-700 underline"
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
