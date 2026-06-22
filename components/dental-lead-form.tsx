"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { ChevronDown } from "lucide-react";
import { captureUTMs, getStoredUTMs, trackLeadFormSubmit } from "@/lib/analytics";

export function DentalLeadForm() {
  const router = useRouter();
  const [form, setForm] = useState({ nombre: "", telefono: "", personas: "Solo yo" });
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    setSubmitError(null);

    const capturedUTMs = captureUTMs();
    const storedUTMs = getStoredUTMs();

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source: "dental-lead-form",
          name: form.nombre.trim(),
          phone: form.telefono.trim(),
          interest: "dental",
          message: `Personas: ${form.personas}`,
          consent: true,
          website: "",
          pageUrl: typeof window !== "undefined" ? window.location.href : "",
          referrer: typeof document !== "undefined" ? document.referrer || "" : "",
          utm: { ...storedUTMs, ...capturedUTMs },
        }),
      });

      if (!response.ok) {
        throw new Error("No hemos podido enviar el formulario.");
      }

      trackLeadFormSubmit({
        product_slug: "dental",
        lead_type: "form",
        page_location: typeof window !== "undefined" ? window.location.href : "",
      });
      if (typeof window !== "undefined") {
        try {
          sessionStorage.setItem("valentin_conversion_fired", "1");
        } catch { /* ignore */ }
      }

      router.push("/gracias");
    } catch {
      setSubmitError("No hemos podido enviar el formulario. Escríbenos por WhatsApp o a contacto@valentinproteccionintegral.com.");
      setSubmitting(false);
    }
  };

  const whatsappHref = () => {
    const msg = encodeURIComponent(
      `Hola Rosa y Sebastián 👋\n\nMe llamo *${form.nombre}* y me gustaría información sobre el seguro dental.\n\n📞 Teléfono: ${form.telefono}\n👥 Para: ${form.personas}\n\nGracias.`
    );
    return `https://wa.me/34603448765?text=${msg}`;
  };

  return (
    <div className="bg-background border rounded-[2rem] p-5 sm:p-8 md:p-10 shadow-2xl shadow-primary/5">
      <div className="mb-8">
        <h2 className="text-2xl font-bold tracking-tight mb-2">Recibe tu presupuesto en 30 min</h2>
        <p className="text-muted-foreground">Sin compromiso. Sin letra pequeña.</p>
      </div>
      <form className="space-y-5" onSubmit={handleSubmit}>
        <div className="space-y-2">
          <label className="text-sm font-bold uppercase tracking-widest opacity-70">Nombre completo</label>
          <input
            type="text"
            placeholder="Tu nombre completo"
            value={form.nombre}
            onChange={e => setForm(p => ({ ...p, nombre: e.target.value }))}
            className="w-full h-14 px-6 rounded-xl border bg-muted/30 focus:bg-background focus:ring-2 focus:ring-primary outline-none transition-all"
            required
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-bold uppercase tracking-widest opacity-70">Teléfono</label>
          <input
            type="tel"
            placeholder="Ej: 600 000 000"
            value={form.telefono}
            onChange={e => setForm(p => ({ ...p, telefono: e.target.value }))}
            className="w-full h-14 px-6 rounded-xl border bg-muted/30 focus:bg-background focus:ring-2 focus:ring-primary outline-none transition-all"
            required
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-bold uppercase tracking-widest opacity-70">¿Para cuántas personas?</label>
          <div className="relative">
            <select
              value={form.personas}
              onChange={e => setForm(p => ({ ...p, personas: e.target.value }))}
              className="w-full h-14 px-6 pr-12 rounded-xl border bg-muted/30 focus:bg-background focus:ring-2 focus:ring-primary outline-none transition-all appearance-none"
            >
              <option>Solo yo</option>
              <option>Pareja</option>
              <option>Familia con hijos</option>
              <option>Más de 4 personas</option>
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground pointer-events-none" />
          </div>
        </div>
        <button
          type="submit"
          disabled={submitting}
          className={cn(buttonVariants({ size: "lg" }), "w-full h-14 text-lg font-bold shadow-xl shadow-primary/20 hover:scale-[1.02] transition-transform gap-2 disabled:cursor-not-allowed disabled:opacity-70")}
        >
          <WhatsAppIcon className="h-5 w-5" />
          {submitting ? "Enviando..." : "Solicitar orientación dental"}
        </button>
        {submitError ? (
          <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-center text-sm text-red-700">
            <p>{submitError}</p>
            <a href={whatsappHref()} target="_blank" rel="noopener noreferrer" className="mt-2 inline-block font-semibold underline underline-offset-4">
              Abrir WhatsApp
            </a>
          </div>
        ) : null}
        <p className="text-center text-sm text-muted-foreground opacity-70">
          Al enviar, recibimos tu consulta y te contactamos en horario de atención.
        </p>
        <p className="text-center text-xs font-semibold text-emerald-600 flex items-center justify-center gap-1.5">
          <span>🎁</span>
          <span>Al contratar dental, obtienes descuentos especiales si añades salud en el futuro</span>
        </p>
        <p className="text-center text-xs text-muted-foreground/60">
          🔒 Consulta sin compromiso. Si decides no contratar, no te llamamos más.
        </p>
      </form>
    </div>
  );
}
