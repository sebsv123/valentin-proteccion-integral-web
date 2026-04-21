"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { ChevronDown } from "lucide-react";

const DENTAL_WHATSAPP_MESSAGE = "Hola, me interesa un seguro dental. ¿Pueden asesorarme sin compromiso?";

export function DentalLeadForm() {
  const [form, setForm] = useState({ nombre: "", telefono: "", personas: "Solo yo" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Hola Rosa y Sebastián 👋\n\nMe llamo *${form.nombre}* y me gustaría información sobre el seguro dental.\n\n📞 Teléfono: ${form.telefono}\n👥 Para: ${form.personas}\n\nGracias.`
    );
    window.open(`https://wa.me/34603448765?text=${msg}`, "_blank");
    setSent(true);
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
        {sent ? (
          <div className="w-full py-5 rounded-xl bg-emerald-50 border border-emerald-200 text-center">
            <p className="text-emerald-700 font-bold text-lg">✅ ¡Perfecto! WhatsApp abierto.</p>
            <p className="text-emerald-600 text-sm mt-1">Rosa o Sebastián te responden en menos de 30 minutos.</p>
          </div>
        ) : (
          <button
            type="submit"
            className={cn(buttonVariants({ size: "lg" }), "w-full h-14 text-lg font-bold shadow-xl shadow-primary/20 hover:scale-[1.02] transition-transform gap-2")}
          >
            <WhatsAppIcon className="h-5 w-5" />
            Enviar por WhatsApp
          </button>
        )}
        <p className="text-center text-sm text-muted-foreground opacity-70">
          Al enviar, te abrimos WhatsApp con tus datos para que te llamemos en menos de 30 min.
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
