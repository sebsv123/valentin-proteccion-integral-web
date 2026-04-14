'use client';
import { useEffect, useState } from 'react';
import { MessageCircle, Phone } from 'lucide-react';
import { buildWhatsAppHref, site } from '@/lib/products';

export function StickyWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowTooltip(true), 5000);
    const hideTimer = setTimeout(() => setShowTooltip(false), 10000);
    return () => { clearTimeout(timer); clearTimeout(hideTimer); };
  }, []);

  return (
    <>
      {/* Desktop: botón flotante esquina inferior derecha */}
      <div className="hidden md:block fixed bottom-6 right-6 z-50">
        {showTooltip && (
          <div className="absolute bottom-16 right-0 bg-white text-gray-800 text-sm font-semibold px-4 py-2 rounded-xl shadow-lg whitespace-nowrap animate-fade-in border border-green-100">
            💬 ¿Hablamos sin compromiso?
            <div className="absolute bottom-[-6px] right-5 w-3 h-3 bg-white border-r border-b border-green-100 rotate-45" />
          </div>
        )}
        <a
          href={buildWhatsAppHref('Hola, quiero orientación sobre un seguro.')}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contactar por WhatsApp"
          className="group flex items-center gap-3 bg-[#128C7E] hover:bg-[#0e6b60] text-white pl-4 pr-6 py-3 rounded-full shadow-2xl font-semibold transition-all duration-300 hover:scale-105"
          style={{ boxShadow: '0 4px 24px 0 rgba(18,140,126,0.45)' }}
        >
          {/* Icono con anillo pulse */}
          <span className="relative flex h-9 w-9 items-center justify-center">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-20" />
            <span className="relative flex items-center justify-center bg-white/20 rounded-full h-9 w-9">
              <MessageCircle className="h-5 w-5" />
            </span>
          </span>
          <span className="text-base">WhatsApp</span>
        </a>
      </div>

      {/* Móvil: barra fija en el bottom */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/20 bg-white/85 p-3 shadow-2xl backdrop-blur-xl md:hidden">
        <div className="grid grid-cols-2 gap-3 max-w-md mx-auto">
          <a
            href={buildWhatsAppHref('Hola, quiero orientación sobre un seguro.')}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-[#128C7E] hover:bg-[#0e6b60] text-white font-bold py-4 rounded-2xl shadow-lg text-base transition-all active:scale-95"
            style={{ boxShadow: '0 2px 16px 0 rgba(18,140,126,0.4)' }}
          >
            <MessageCircle className="h-5 w-5" /> WhatsApp
          </a>
          <a
            href={`tel:${site.phoneHref}`}
            className="flex items-center justify-center gap-2 bg-white border-2 border-gray-200 hover:border-gray-300 text-gray-800 font-bold py-4 rounded-2xl shadow-lg text-base transition-all active:scale-95"
          >
            <Phone className="h-5 w-5" /> Llamar
          </a>
        </div>
      </div>
    </>
  );
}
