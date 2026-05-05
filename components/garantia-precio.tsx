"use client";

import { Shield, BadgeCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { WhatsAppLink } from '@/components/whatsapp-link';

interface GarantiaPrecioProps {
  variant?: "default" | "compact" | "card";
  showCta?: boolean;
  className?: string;
}

export function GarantiaPrecio({
  variant = "default",
  showCta = true,
  className,
}: GarantiaPrecioProps) {
  if (variant === "compact") {
    return (
      <div
        className={cn(
          "rounded-2xl border border-blue-200 bg-blue-50 px-6 py-4",
          className
        )}
      >
        <div className="flex items-center gap-3">
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600/10 flex items-center justify-center">
            <BadgeCheck className="h-5 w-5 text-blue-600" />
          </div>
          <div>
            <p className="font-bold text-blue-900">Garantía de precio</p>
            <p className="text-sm text-blue-700">
              Tráenos cualquier presupuesto. Si no encontramos algo mejor, te lo decimos con honestidad.
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (variant === "card") {
    return (
      <div
        className={cn(
          "rounded-3xl border-2 border-blue-200 bg-white p-8 shadow-lg",
          className
        )}
      >
        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-full bg-blue-600/10 flex items-center justify-center mb-4">
            <Shield className="h-8 w-8 text-blue-600" />
          </div>
          <h3 className="text-2xl font-bold text-blue-900 mb-3">
            Garantía de precio
          </h3>
          <p className="text-muted-foreground mb-6 max-w-md">
            Tráenos cualquier presupuesto que tengas. En más de 10 años y 1.200
            familias asesoradas, siempre encontramos una opción mejor.
          </p>
          {showCta && (
            <WhatsAppLink
              href="https://wa.me/34603448765"
              className={cn(
                buttonVariants({ size: "lg" }),
                "bg-emerald-500 hover:bg-emerald-600 text-white gap-2"
              )}
            >
              <WhatsAppIcon className="h-5 w-5" />
              Solicitar comparación gratis
            </WhatsAppLink>
          )}
        </div>
      </div>
    );
  }

  // default variant
  return (
    <section className={cn("py-14 sm:py-20 bg-blue-50 border-y border-blue-200", className)}>
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 p-8 rounded-3xl bg-white border border-blue-200 shadow-lg">
          <div className="flex-shrink-0 w-16 h-16 rounded-full bg-blue-600/10 flex items-center justify-center">
            <Shield className="h-8 w-8 text-blue-600" />
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-blue-900 mb-2">
              Garantía de precio
            </h3>
            <p className="text-lg text-blue-800">
              Tráenos cualquier presupuesto que tengas. En más de 10 años y
              1.200 familias asesoradas, siempre encontramos una opción
              mejor.
            </p>
          </div>
          {showCta && (
            <a
              href="/como-te-ayudamos"
              className="flex-none text-sm font-bold text-blue-700 underline underline-offset-4 hover:text-blue-900 transition-colors"
            >
              Ver cómo funciona →
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
