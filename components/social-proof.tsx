"use client";

import { useEffect, useState } from 'react';
import { ShieldCheck, X } from 'lucide-react';

const TIPS = [
  { text: 'Más de 1.200 familias ya han confiado en nuestra orientación', icon: '👨‍👩‍👧‍👦' },
  { text: 'Asesoramiento en 8 ramos de seguro diferentes', icon: '🛡️' },
  { text: 'Consulta sin compromiso por WhatsApp o teléfono', icon: '💬' },
  { text: 'Más de 10 años de experiencia en asesoría de seguros', icon: '⭐' },
];

export function SocialProof() {
  const [current, setCurrent] = useState<number>(-1);
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (dismissed) return;
    const timer = setTimeout(() => {
      setCurrent(0);
      setVisible(true);
    }, 6000);

    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % TIPS.length);
        setVisible(true);
      }, 1000);
    }, 18000);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, [dismissed]);

  if (current === -1 || dismissed) return null;

  return (
    <div
      className={`fixed bottom-24 left-6 z-[60] hidden md:flex items-center gap-4 glass p-4 rounded-3xl border border-white/30 shadow-2xl max-w-sm
        transition-all duration-500 ease-out
        ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8 pointer-events-none'}`}
    >
      <div className="bg-[var(--blue-deep)] p-2.5 rounded-2xl text-white shadow-lg">
        <ShieldCheck className="h-5 w-5" />
      </div>
      <div className="flex-1 pr-6">
        <p className="text-sm font-bold text-[var(--blue-deep)] leading-tight">
          {TIPS[current].icon} {TIPS[current].text}
        </p>
      </div>
      <button
        onClick={() => setDismissed(true)}
        className="absolute top-2 right-2 p-1 text-[var(--muted)] hover:text-[var(--blue-deep)]"
        aria-label="Cerrar"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
}
