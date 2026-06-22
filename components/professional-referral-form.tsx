"use client";

import { useState, useRef, useCallback } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { trackFormStart, trackFormSubmit } from "@/lib/analytics";

const FORM_ID = "professional-referral";
const CONTACT_EMAIL = "contacto@valentinproteccionintegral.com";
const DELIVERY_ERROR = `No hemos podido enviar el formulario. Escríbenos por WhatsApp o a ${CONTACT_EMAIL}.`;

interface FormData {
  nombreProfesional: string;
  empresa: string;
  correo: string;
  nombreCliente: string;
  contactoCliente: string;
  tipoTramite: string;
  autorizacion: boolean;
}

const initialFormData: FormData = {
  nombreProfesional: "",
  empresa: "",
  correo: "",
  nombreCliente: "",
  contactoCliente: "",
  tipoTramite: "",
  autorizacion: false,
};

type SubmitStatus =
  | { type: "idle" }
  | { type: "sending" }
  | { type: "success" }
  | { type: "error"; message: string };

export default function ProfessionalReferralForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [status, setStatus] = useState<SubmitStatus>({ type: "idle" });
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [trackedStart, setTrackedStart] = useState(false);
  const honeypotRef = useRef<HTMLInputElement>(null);

  const validate = useCallback((): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};

    if (!formData.nombreProfesional.trim()) {
      newErrors.nombreProfesional = "Indica tu nombre o el de tu organización.";
    }
    if (!formData.empresa.trim()) {
      newErrors.empresa = "Indica el nombre de tu empresa o entidad.";
    }
    if (!formData.correo.trim()) {
      newErrors.correo = "Indica tu correo profesional.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.correo)) {
      newErrors.correo = "El formato del correo no es válido.";
    }
    if (!formData.nombreCliente.trim()) {
      newErrors.nombreCliente = "Indica el nombre de tu alumno o cliente.";
    }
    if (!formData.contactoCliente.trim()) {
      newErrors.contactoCliente = "Indica un medio de contacto del cliente.";
    }
    if (!formData.tipoTramite.trim()) {
      newErrors.tipoTramite = "Indica el tipo de trámite aproximado.";
    }
    if (!formData.autorizacion) {
      newErrors.autorizacion = "Debes confirmar que tu cliente ha autorizado el contacto.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData]);

  const handleChange = useCallback(
    (field: keyof FormData, value: string | boolean) => {
      if (!trackedStart) {
        setTrackedStart(true);
        trackFormStart(FORM_ID);
      }
      setFormData((prev) => ({ ...prev, [field]: value }));
      // Clear error on change
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    },
    [trackedStart]
  );

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();

      // Honeypot check
      if (honeypotRef.current?.value) {
        // Bot detected — silently "succeed" to avoid revealing the check
        setStatus({ type: "success" });
        return;
      }

      if (!validate()) return;

      setStatus({ type: "sending" });

      try {
        const payload = {
          nombreProfesional: formData.nombreProfesional.trim(),
          empresa: formData.empresa.trim(),
          correo: formData.correo.trim(),
          nombreCliente: formData.nombreCliente.trim(),
          contactoCliente: formData.contactoCliente.trim(),
          tipoTramite: formData.tipoTramite.trim(),
          autorizacion: formData.autorizacion,
          website: honeypotRef.current?.value || "",
          pageUrl: typeof window !== "undefined" ? window.location.href : "",
          referrer: typeof document !== "undefined" ? document.referrer || "" : "",
        };

        // Attempt to send via API
        const res = await fetch("/api/professional-referral", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });

        if (!res.ok) throw new Error(DELIVERY_ERROR);

        trackFormSubmit(FORM_ID, true);
        setStatus({ type: "success" });
      } catch (error) {
        trackFormSubmit(FORM_ID, false);
        setStatus({
          type: "error",
          message: error instanceof Error ? error.message : DELIVERY_ERROR,
        });
      }
    },
    [formData, validate]
  );

  if (status.type === "success") {
    return (
      <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center">
        <div className="w-16 h-16 rounded-2xl bg-emerald-100 flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-8 h-8 text-emerald-600" />
        </div>
        <h3 className="text-xl font-bold text-emerald-900 mb-2">
          Recibido correctamente
        </h3>
        <p className="text-emerald-700 text-sm leading-relaxed max-w-md mx-auto">
          Gracias por confiar en nosotros. Te responderemos en menos de 24 horas para
          coordinar los siguientes pasos.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      {/* Honeypot — invisible to humans */}
      <div aria-hidden="true" className="absolute -left-[9999px] opacity-0">
        <label htmlFor="hp-field">No rellenar</label>
        <input
          ref={honeypotRef}
          id="hp-field"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <p className="text-sm text-slate-500 leading-relaxed">
        Rellena este formulario y te contactaremos para coordinar la atención de tu
        alumno o cliente. No adjuntes documentos sensibles ni datos médicos.
      </p>

      {/* Nombre del profesional */}
      <div>
        <label htmlFor="nombreProfesional" className="block text-sm font-medium text-slate-700 mb-1">
          Tu nombre o el de tu organización <span className="text-red-500">*</span>
        </label>
        <input
          id="nombreProfesional"
          type="text"
          value={formData.nombreProfesional}
          onChange={(e) => handleChange("nombreProfesional", e.target.value)}
          className={`w-full rounded-xl border ${errors.nombreProfesional ? "border-red-300 bg-red-50" : "border-slate-200"} px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/40 transition-colors`}
          placeholder="Ej: María García"
        />
        {errors.nombreProfesional && (
          <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
            <AlertCircle className="w-3 h-3" />
            {errors.nombreProfesional}
          </p>
        )}
      </div>

      {/* Empresa */}
      <div>
        <label htmlFor="empresa" className="block text-sm font-medium text-slate-700 mb-1">
          Empresa o entidad <span className="text-red-500">*</span>
        </label>
        <input
          id="empresa"
          type="text"
          value={formData.empresa}
          onChange={(e) => handleChange("empresa", e.target.value)}
          className={`w-full rounded-xl border ${errors.empresa ? "border-red-300 bg-red-50" : "border-slate-200"} px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/40 transition-colors`}
          placeholder="Ej: Academia de Idiomas Madrid"
        />
        {errors.empresa && (
          <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
            <AlertCircle className="w-3 h-3" />
            {errors.empresa}
          </p>
        )}
      </div>

      {/* Correo profesional */}
      <div>
        <label htmlFor="correo" className="block text-sm font-medium text-slate-700 mb-1">
          Tu correo profesional <span className="text-red-500">*</span>
        </label>
        <input
          id="correo"
          type="email"
          value={formData.correo}
          onChange={(e) => handleChange("correo", e.target.value)}
          className={`w-full rounded-xl border ${errors.correo ? "border-red-300 bg-red-50" : "border-slate-200"} px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/40 transition-colors`}
          placeholder="maria@academia.es"
        />
        {errors.correo && (
          <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
            <AlertCircle className="w-3 h-3" />
            {errors.correo}
          </p>
        )}
      </div>

      {/* Nombre del cliente */}
      <div>
        <label htmlFor="nombreCliente" className="block text-sm font-medium text-slate-700 mb-1">
          Nombre de tu alumno o cliente <span className="text-red-500">*</span>
        </label>
        <input
          id="nombreCliente"
          type="text"
          value={formData.nombreCliente}
          onChange={(e) => handleChange("nombreCliente", e.target.value)}
          className={`w-full rounded-xl border ${errors.nombreCliente ? "border-red-300 bg-red-50" : "border-slate-200"} px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/40 transition-colors`}
          placeholder="Ej: John Smith"
        />
        {errors.nombreCliente && (
          <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
            <AlertCircle className="w-3 h-3" />
            {errors.nombreCliente}
          </p>
        )}
      </div>

      {/* Contacto del cliente */}
      <div>
        <label htmlFor="contactoCliente" className="block text-sm font-medium text-slate-700 mb-1">
          Contacto del cliente (teléfono o email) <span className="text-red-500">*</span>
        </label>
        <input
          id="contactoCliente"
          type="text"
          value={formData.contactoCliente}
          onChange={(e) => handleChange("contactoCliente", e.target.value)}
          className={`w-full rounded-xl border ${errors.contactoCliente ? "border-red-300 bg-red-50" : "border-slate-200"} px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/40 transition-colors`}
          placeholder="Ej: +34 600 00 00 00"
        />
        {errors.contactoCliente && (
          <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
            <AlertCircle className="w-3 h-3" />
            {errors.contactoCliente}
          </p>
        )}
      </div>

      {/* Tipo de trámite */}
      <div>
        <label htmlFor="tipoTramite" className="block text-sm font-medium text-slate-700 mb-1">
          Tipo aproximado de trámite <span className="text-red-500">*</span>
        </label>
        <select
          id="tipoTramite"
          value={formData.tipoTramite}
          onChange={(e) => handleChange("tipoTramite", e.target.value)}
          className={`w-full rounded-xl border ${errors.tipoTramite ? "border-red-300 bg-red-50" : "border-slate-200"} px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/40 transition-colors bg-white`}
        >
          <option value="">Selecciona una opción...</option>
          <option value="visado_estudios">Visado de estudios</option>
          <option value="residencia">Residencia / NIE / TIE</option>
          <option value="renovacion">Renovación de estancia o residencia</option>
          <option value="familia">Reagrupación familiar</option>
          <option value="practicas">Prácticas o formación no reglada</option>
          <option value="otro">Otro / No estoy seguro</option>
        </select>
        {errors.tipoTramite && (
          <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
            <AlertCircle className="w-3 h-3" />
            {errors.tipoTramite}
          </p>
        )}
      </div>

      {/* Checkbox de autorización */}
      <div className="flex items-start gap-3">
        <input
          id="autorizacion"
          type="checkbox"
          checked={formData.autorizacion}
          onChange={(e) => handleChange("autorizacion", e.target.checked)}
          className="mt-1 h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
        />
        <label htmlFor="autorizacion" className="text-sm text-slate-600 leading-relaxed">
          <span className="text-red-500">*</span> Confirmo que mi alumno o cliente ha
          autorizado el contacto para recibir orientación sobre seguro médico vinculado a
          su trámite.
        </label>
      </div>
      {errors.autorizacion && (
        <p className="text-xs text-red-600 flex items-center gap-1">
          <AlertCircle className="w-3 h-3" />
          {errors.autorizacion}
        </p>
      )}

      {/* Privacy link */}
      <p className="text-xs text-slate-400 leading-relaxed">
        Al enviar este formulario aceptas que tratemos tus datos según nuestra{" "}
        <a href="/privacidad" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-600">
          política de privacidad
        </a>
        . No adjuntes documentos sensibles ni datos médicos en este formulario.
      </p>

      {/* Submit button */}
      <button
        type="submit"
        disabled={status.type === "sending"}
        className="w-full inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white px-6 py-3.5 rounded-xl text-base font-semibold transition-all shadow-lg shadow-blue-600/20 disabled:cursor-not-allowed"
      >
        {status.type === "sending" ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Enviando...
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            Enviar derivación
          </>
        )}
      </button>

      {/* Error message */}
      {status.type === "error" && (
        <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-sm text-red-700 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
          <span>{status.message}</span>
        </div>
      )}
    </form>
  );
}
