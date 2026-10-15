"use client";

import Link from 'next/link';
import { LeadForm } from './lead-form';
import { buildWhatsAppHref, WHATSAPP_MESSAGE_DEFAULT } from '@/lib/products';
import { WhatsAppIcon } from './ui/whatsapp-icon';
import { WhatsAppLink } from '@/components/whatsapp-link';
import { useLocale } from 'next-intl';

export function HeroLeadForm() {
  return (
    <div 
      id="lead-form"
      style={{
        animationName: 'hero-fade-in-right',
        animationDuration: '0.42s',
        animationDelay: '0.05s',
        animationFillMode: 'forwards',
        animationTimingFunction: 'ease-out',
        opacity: 0,
      }}
    >
      <LeadForm defaultProduct="salud" compact homeVariant />
    </div>
  );
}

export function HeroContentClient() {
  const isEnglish = useLocale() === 'en';

  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col items-center text-center">
      <p className="text-[10px] font-bold tracking-[0.19em] text-[#1268c4] sm:text-xs md:text-[13px]">
        {isEnglish ? 'INSURANCE · PERSONAL GUIDANCE' : 'SEGUROS · ACOMPAÑAMIENTO PERSONAL'}
      </p>
      <h1 id="hero-title" className="mt-4 font-heading text-[39px] font-extrabold leading-[1.03] tracking-[-0.035em] text-[#0b2e6b] sm:text-5xl md:mt-5 md:text-[58px] lg:text-[64px]">
        {isEnglish ? <>Choosing the right insurance<br />should be easier.</> : <>Elegir bien tu seguro<br />debería ser <span className="text-[#1268c4]">más fácil.</span></>}
      </h1>
      <p className="mt-4 max-w-2xl text-[15px] leading-6 text-[#40536c] sm:mt-5 sm:text-lg sm:leading-8">
        {isEnglish ? 'We help you understand your options and choose clearly.' : 'Te ayudamos a entender tus opciones y elegir con claridad.'}
      </p>
      <div className="mt-6 flex w-full max-w-[430px] flex-col items-stretch gap-2.5 sm:w-auto sm:max-w-none sm:flex-row sm:items-center sm:gap-3 md:mt-7">
        <Link href={isEnglish ? '/en/contact' : '/contacto'} className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#1268c4] px-7 py-3 text-sm font-bold text-white shadow-[0_10px_24px_rgba(18,104,196,0.2)] transition hover:-translate-y-0.5 hover:bg-[#0e58a7] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1268c4] focus-visible:ring-offset-2 sm:text-base">
          {isEnglish ? 'Tell us what you need' : 'Cuéntanos qué necesitas'}
        </Link>
        <WhatsAppLink
          href={buildWhatsAppHref(isEnglish ? 'Hello, I would like clear insurance guidance.' : WHATSAPP_MESSAGE_DEFAULT)}
          target="_blank"
          rel="noreferrer"
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#0b2e6b]/15 bg-white/35 px-6 py-3 text-sm font-bold text-[#0b2e6b] transition hover:bg-white/65 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1268c4] focus-visible:ring-offset-2 sm:text-base"
        >
          <WhatsAppIcon className="h-5 w-5 text-[#128c7e]" />
          WhatsApp
        </WhatsAppLink>
      </div>
    </div>
  );
}
