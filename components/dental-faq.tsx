"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

const faqs = [
  {
    q: "¿Hay períodos de carencia?",
    a: "No. Toda la cobertura está disponible desde el primer día: revisiones, limpiezas, empastes, endodoncias e incluso implantes. Si en tu caso concreto existiera alguna excepción, te lo decimos antes de firmar. Sin letra pequeña, siempre."
  },
  {
    q: "¿Puedo incluir a toda mi familia?",
    a: "Sí. Gestionamos una póliza familiar donde cada miembro tiene su cobertura. Cuantos más miembros, mejor precio por persona."
  },
  {
    q: "¿Qué pasa si ya tengo un seguro dental?",
    a: "Lo revisamos gratis. Si el tuyo te conviene, te lo decimos. Si podemos mejorar tus condiciones, también te lo decimos."
  },
  {
    q: "¿Cuánto tarda en activarse?",
    a: "Una vez firmada la documentación, tu seguro se activa en 24-48 horas laborables."
  },
  {
    q: "¿Puedo cancelar cuando quiera?",
    a: "Sí, con el preaviso indicado en tu póliza (habitualmente 30 días). Sin penalizaciones ocultas de ningún tipo."
  },
  {
    q: "¿Hay ventajas si luego quiero ampliar mi cobertura?",
    a: "Sí. Los clientes que empiezan con dental tienen descuentos especiales garantizados al añadir salud completa. Con la misma gestión personal de Rosa y Sebastián, en una sola llamada."
  }
];

export function DentalFAQ() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section className="py-14 sm:py-20 lg:py-24">
      <div className="container max-w-5xl">
        <h2 className="text-3xl font-bold sm:text-6xl mb-10 text-center lg:hidden">Preguntas frecuentes</h2>
        <div className="grid lg:grid-cols-[0.8fr_1fr] gap-16 items-start">
          <div className="hidden lg:block lg:sticky lg:top-24">
            <h2 className="text-3xl font-bold sm:text-6xl mb-6 text-center">Preguntas frecuentes</h2>
            <div className="relative aspect-square rounded-3xl overflow-hidden border bg-muted">
              <Image 
                src="https://images.pexels.com/photos/3845623/pexels-photo-3845623.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="Cuidado dental profesional" 
                fill 
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={75}
              />
            </div>
          </div>
          <div className="space-y-4 sm:space-y-6">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="rounded-2xl border bg-card overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-4 sm:p-6 text-left hover:bg-accent/50 transition-colors"
                >
                  <span className="text-base sm:text-lg font-semibold pr-4">{faq.q}</span>
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 flex-shrink-0 transition-transform",
                      openFaq === i && "rotate-180"
                    )}
                  />
                </button>
                <div
                  className={cn(
                    "overflow-hidden transition-all duration-300",
                    openFaq === i ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  )}
                >
                  <p className="px-4 sm:px-6 pb-4 sm:pb-6 text-muted-foreground leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
