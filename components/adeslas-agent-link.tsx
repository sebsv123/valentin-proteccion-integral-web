"use client";

import Image from "next/image";
import { ExternalLink, ShieldCheck } from "lucide-react";
import { trackAdeslasAgentClick } from "@/lib/analytics";
import { ADESLAS_ROSA_AGENT_URL } from "@/lib/external-links";

type AdeslasAgentLinkProps = {
  location: string;
  variant?: "card" | "compact" | "button" | "preview" | "mini-preview";
  title?: string;
  description?: string;
  linkLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  showDisclaimer?: boolean;
};

type AdeslasAgentExclusiveBadgeProps = {
  compact?: boolean;
  showLogo?: boolean;
  className?: string;
};

// Activa esta ruta únicamente cuando se incorpore al repositorio un asset
// oficial/autorizado de Adeslas. Hasta entonces se muestra el fallback textual.
const ADESLAS_AUTHORIZED_LOGO_SRC: string | null = null;

const DEFAULT_DISCLAIMER = "Al continuar, accederás a una página externa de SegurCaixa Adeslas. Los datos que introduzcas allí se tratarán conforme a la política de privacidad de dicha entidad.";

export function AdeslasAgentExclusiveBadge({ compact = false, showLogo = true, className = "" }: AdeslasAgentExclusiveBadgeProps) {
  const logoSrc = showLogo ? ADESLAS_AUTHORIZED_LOGO_SRC : null;

  return (
    <div className={`inline-flex max-w-full flex-wrap items-center gap-x-3 gap-y-2 rounded-xl border border-[#C8A45D]/35 bg-white px-3.5 text-[#0B2745] shadow-[0_7px_20px_rgba(0,34,68,0.09)] ${compact ? "min-h-10 py-2" : "min-h-12 py-2.5 sm:px-4"} ${className}`}>
      <span className={`font-bold tracking-[0.04em] ${compact ? "text-xs" : "text-sm"}`}>Agente Exclusivo</span>
      <span className="h-5 w-px bg-[#0B2745]/20" aria-hidden="true" />
      {logoSrc ? (
        <Image src={logoSrc} alt="Adeslas" width={112} height={32} className="h-auto max-h-7 w-auto max-w-[112px] object-contain" />
      ) : (
        <span className={`font-heading font-extrabold tracking-tight ${compact ? "text-base" : "text-lg"}`}>Adeslas</span>
      )}
      <span className="rounded-full bg-[#0B2745]/[0.07] px-2 py-1 text-[9px] font-bold uppercase tracking-[0.12em] text-[#496985]">Canal oficial</span>
    </div>
  );
}

export function AdeslasAgentLink({ location, variant = "card", title = "También puedes solicitar contacto desde la página de Adeslas", description = "Si lo prefieres, utiliza el buscador oficial de agentes de SegurCaixa Adeslas en Boadilla del Monte para dejar tus datos y solicitar contacto con Rosa Valentín. WhatsApp y el formulario de VPI siguen disponibles para una atención directa.", linkLabel = "Solicitar contacto desde Adeslas", secondaryHref, secondaryLabel, showDisclaimer = variant !== "button" }: AdeslasAgentLinkProps) {
  const link = (
    <a
      href={ADESLAS_ROSA_AGENT_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackAdeslasAgentClick(location)}
      className={
        variant === "button"
          ? "btn-ghost inline-flex items-center justify-center gap-2"
          : `inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--orange)] px-5 py-3 font-semibold text-white transition hover:brightness-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${variant === "preview" ? "w-full focus-visible:outline-white sm:w-auto" : "focus-visible:outline-[var(--blue-deep)]"}`
      }
      aria-label="Abrir buscador oficial de agentes de SegurCaixa Adeslas para contactar con Rosa Valentín"
    >
      {linkLabel}
      <ExternalLink className="h-4 w-4" aria-hidden="true" />
    </a>
  );

  if (variant === "button") return showDisclaimer ? <div>{link}<p className="mt-3 max-w-xl text-xs leading-5 text-[var(--muted)]">{DEFAULT_DISCLAIMER}</p></div> : link;

  if (variant === "preview") {
    const steps = [
      ["Página oficial", "Se abre en una nueva pestaña de SegurCaixa Adeslas."],
      ["Resultado de Rosa", "Verás el canal asociado a Rosa Valentín para Boadilla del Monte."],
      ["Solicitud de contacto", "Puedes dejar tus datos directamente en ese formulario externo."],
    ];

    return (
      <aside className="relative overflow-hidden rounded-[30px] border border-[#C8A45D]/35 bg-[#071D36] p-5 text-white shadow-[0_24px_70px_rgba(0,34,68,0.2)] sm:p-7 lg:p-9" aria-label="Puente hacia el canal oficial de SegurCaixa Adeslas">
        <div className="pointer-events-none absolute -left-16 top-8 h-40 w-40 rounded-full bg-[#C8A45D]/10 blur-3xl" aria-hidden="true" />
        <div className="relative grid gap-7 lg:grid-cols-[1.04fr_0.96fr] lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#E2C078]">Canal oficial adicional</p>
            <h2 className="mt-3 max-w-2xl font-heading text-3xl font-bold leading-tight sm:text-4xl">{title}</h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/75 sm:text-base">{description}</p>
            <ol className="mt-6 grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              {steps.map(([stepTitle, stepText], index) => (
                <li key={stepTitle} className="grid grid-cols-[32px_1fr] gap-3 rounded-2xl border border-white/10 bg-white/[0.055] p-3.5">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#E2C078]/45 text-sm font-bold text-[#E2C078]">{index + 1}</span>
                  <span><strong className="block text-sm text-white">{stepTitle}</strong><span className="mt-1 block text-xs leading-5 text-white/65">{stepText}</span></span>
                </li>
              ))}
            </ol>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              {link}
              {secondaryHref && secondaryLabel ? <a href={secondaryHref} className="inline-flex w-full items-center justify-center rounded-xl border border-white/25 px-5 py-3 font-semibold text-white transition hover:bg-white/10 sm:w-auto">{secondaryLabel}</a> : null}
            </div>
            <p className="mt-3 text-xs leading-5 text-white/55">Página externa. Sin iframe. Tus datos se introducirán en la web de SegurCaixa Adeslas.</p>
          </div>

          <div role="img" aria-label="Vista previa informativa del buscador oficial de agentes, con Rosa Isabel Valentín González en Boadilla del Monte" className="rounded-[24px] border border-white/15 bg-[#F5F7FA] p-3 text-[#0B2745] shadow-2xl sm:p-4">
            <div className="flex items-center gap-2 rounded-t-[17px] bg-white px-3 py-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#D97757]" /><span className="h-2.5 w-2.5 rounded-full bg-[#D8B66A]" /><span className="h-2.5 w-2.5 rounded-full bg-[#6EA59B]" />
              <span className="ml-2 min-w-0 flex-1 truncate rounded-full bg-slate-100 px-3 py-1.5 text-[11px] text-slate-500">segurcaixaadeslas.es/agentes</span>
            </div>
            <div className="relative overflow-hidden rounded-b-[17px] border-t border-slate-100 bg-[linear-gradient(150deg,#ffffff,#eef3f8)] p-4 sm:p-6">
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#55718E]">Vista previa del destino</p>
              <AdeslasAgentExclusiveBadge className="mt-3" />
              <div className="mt-4 rounded-2xl border border-[#C8A45D]/35 bg-white p-5 shadow-sm">
                <span className="inline-flex rounded-full bg-[#0B2745]/7 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-[#0B2745]">Resultado de agente</span>
                <p className="mt-4 text-lg font-extrabold leading-tight sm:text-xl">ROSA ISABEL VALENTIN GONZALEZ</p>
                <p className="mt-2 text-sm font-semibold text-[#496985]">Agente Exclusivo de Seguros</p>
                <p className="mt-1 text-sm text-slate-500">Boadilla del Monte · 28660 Madrid</p>
                <span aria-hidden="true" className="mt-5 inline-flex items-center gap-2 rounded-lg bg-[#0B2745] px-4 py-2.5 text-xs font-bold text-white">Información y contacto <ExternalLink className="h-3.5 w-3.5" /></span>
              </div>
              <div className="mt-4 flex items-center gap-2 text-xs leading-5 text-slate-500"><ShieldCheck className="h-4 w-4 shrink-0 text-[#6B8EA8]" aria-hidden="true" />Al pulsar el CTA real, se abrirá la página oficial en una nueva pestaña.</div>
            </div>
          </div>
        </div>
        <p className="relative mt-6 border-t border-white/10 pt-4 text-xs leading-5 text-white/55">{DEFAULT_DISCLAIMER}</p>
      </aside>
    );
  }

  if (variant === "mini-preview") {
    return (
      <aside className="overflow-hidden rounded-[24px] border border-[#C8A45D]/35 bg-white shadow-[0_16px_45px_rgba(0,34,68,0.10)]" aria-label="Canal oficial de SegurCaixa Adeslas">
        <div className="grid md:grid-cols-[minmax(0,1.15fr)_minmax(240px,0.85fr)] md:items-stretch">
          <div className="p-5 sm:p-6">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--blue-deep)] text-[#E2C078]">
                <ShieldCheck className="h-5 w-5" aria-hidden="true" />
              </span>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--blue-deep)]">Canal oficial adicional</p>
            </div>
            <p className="mt-4 font-heading text-xl font-bold leading-snug text-[var(--blue-deep)]">{title}</p>
            <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{description}</p>
            <div className="mt-5 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
              {link}
              {secondaryHref && secondaryLabel ? <a href={secondaryHref} className="btn-ghost inline-flex items-center justify-center">{secondaryLabel}</a> : null}
            </div>
          </div>

          <div role="img" aria-label="Vista previa informativa del resultado de Rosa Valentín en el buscador oficial de agentes para Boadilla del Monte" className="border-t border-slate-200 bg-[#071D36] p-4 text-white md:border-l md:border-t-0">
            <div className="h-full rounded-2xl border border-white/15 bg-white/[0.07] p-3.5">
              <div className="flex items-center gap-1.5" aria-hidden="true">
                <span className="h-2 w-2 rounded-full bg-[#D97757]" />
                <span className="h-2 w-2 rounded-full bg-[#D8B66A]" />
                <span className="h-2 w-2 rounded-full bg-[#6EA59B]" />
                <span className="ml-2 min-w-0 flex-1 truncate rounded-full bg-white/10 px-2.5 py-1 text-[10px] text-white/60">segurcaixaadeslas.es/agentes</span>
              </div>
              <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.15em] text-[#E2C078]">Vista previa del destino</p>
              <AdeslasAgentExclusiveBadge compact className="mt-2" />
              <div className="mt-2 rounded-xl bg-white p-3.5 text-[#0B2745] shadow-sm">
                <p className="text-sm font-extrabold leading-tight">ROSA ISABEL VALENTIN GONZALEZ</p>
                <p className="mt-1 text-xs font-semibold text-[#496985]">Agente Exclusivo de Seguros</p>
                <p className="mt-1 text-xs text-slate-500">Boadilla del Monte · 28660 Madrid</p>
              </div>
              <p className="mt-3 text-[11px] leading-4 text-white/65">El enlace real abre la página oficial en una pestaña nueva.</p>
            </div>
          </div>
        </div>
        {showDisclaimer ? <p className="border-t border-slate-200 px-5 py-3 text-[11px] leading-5 text-[var(--muted)] sm:px-6">{DEFAULT_DISCLAIMER}</p> : null}
      </aside>
    );
  }

  return (
    <aside
      className={`rounded-[24px] border border-[#C8A45D]/40 bg-[linear-gradient(135deg,rgba(0,34,68,0.04),rgba(15,94,156,0.07))] ${variant === "compact" ? "p-5" : "p-6"}`}
      aria-label="Canal oficial de SegurCaixa Adeslas"
    >
      <div className="flex items-start gap-4">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[var(--blue-deep)] text-[#E2C078]">
          <ShieldCheck className="h-5 w-5" aria-hidden="true" />
        </span>
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-[var(--blue-deep)]">
            Canal oficial adicional
          </p>
          <h2 className={`mt-2 font-heading font-bold text-[var(--blue-deep)] ${variant === "compact" ? "text-xl" : "text-2xl"}`}>{title}</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-[var(--muted)]">
            {description}
          </p>
          <div className="mt-5 flex flex-col items-start gap-3 sm:flex-row sm:items-center">{link}{secondaryHref && secondaryLabel ? <a href={secondaryHref} className="btn-ghost inline-flex items-center justify-center">{secondaryLabel}</a> : null}</div>
          {showDisclaimer ? <p className="mt-4 max-w-2xl text-xs leading-5 text-[var(--muted)]">{DEFAULT_DISCLAIMER}</p> : null}
        </div>
      </div>
    </aside>
  );
}
