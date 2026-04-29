'use client';
import { useEffect, useState, MouseEvent } from 'react';
import { WhatsAppIcon } from './ui/whatsapp-icon';
import { buildWhatsAppHref, site } from '@/lib/products';
import { trackWhatsAppClick } from '@/lib/analytics';

export function StickyWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowTooltip(true), 5000);
    const hideTimer = setTimeout(() => setShowTooltip(false), 10000);
    return () => { clearTimeout(timer); clearTimeout(hideTimer); };
  }, []);

  const handleClick = (e: MouseEvent<HTMLAnchorElement>, location: string, href: string) => {
    e.preventDefault();
    trackWhatsAppClick(location);
    setTimeout(() => {
      window.open(href, '_blank', 'noopener,noreferrer');
    }, 200);
  };

  const desktopHref = buildWhatsAppHref('Hola, quiero orientación sobre un seguro.');
  const mobileHref = 'https://wa.me/34603448765?text=Hola%2C%20quiero%20una%20consulta%20gratuita%20sobre%20seguros.';

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
          href={desktopHref}
          onClick={(e) => handleClick(e, 'sticky-desktop', desktopHref)}
          aria-label="Contactar por WhatsApp"
          className="group flex items-center gap-3 bg-[#128C7E] hover:bg-[#0e6b60] text-white pl-4 pr-6 py-3 rounded-full shadow-2xl font-semibold transition-all duration-300 hover:scale-105"
          style={{ boxShadow: '0 4px 24px 0 rgba(18,140,126,0.45)' }}
        >
          {/* Icono con anillo pulse */}
          <span className="relative flex h-9 w-9 items-center justify-center">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-20" />
            <span className="relative flex items-center justify-center bg-white/20 rounded-full h-9 w-9">
              <WhatsAppIcon className="h-5 w-5" />
            </span>
          </span>
          <span className="text-base">WhatsApp</span>
        </a>
      </div>

      {/* Móvil: barra sticky fija en la parte inferior */}
      <div 
        suppressHydrationWarning={true} 
        className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-[#25D366]"
      >
        <a
          href={mobileHref}
          onClick={(e) => handleClick(e, 'sticky-mobile', mobileHref)}
          className="flex items-center justify-center gap-2 w-full text-white py-3 px-4 text-sm font-semibold"
        >
          <WhatsAppIcon className="h-5 w-5 flex-none" />
          Escríbenos por WhatsApp
        </a>
      </div>
    </>
  );
}
