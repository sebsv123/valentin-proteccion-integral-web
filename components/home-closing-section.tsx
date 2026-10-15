import Image from 'next/image';
import Link from 'next/link';
import { localizedPath } from '@/i18n/navigation';

type HomeClosingSectionProps = {
  locale: 'es' | 'en';
};

export function HomeClosingSection({ locale }: HomeClosingSectionProps) {
  const en = locale === 'en';

  return (
    <section id="cta-final" aria-labelledby="home-closing-title" className="relative">
      <div className="relative aspect-[1672/941] w-full">
        <Image
          src="/images/home/valentin-mediterranean-closing.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-contain"
        />
      </div>
      <div className="bg-[#eaf3f8] px-6 py-8 md:absolute md:right-[2%] md:top-[30%] md:flex md:w-[44%] md:translate-y-0 md:items-start md:bg-transparent md:px-0 md:py-0">
        <div className="mx-auto w-full max-w-[460px] text-left">
          <h2
            id="home-closing-title"
            className="font-heading text-[2.75rem] font-semibold leading-[1.02] tracking-[-0.04em] text-[var(--blue-deep)] sm:text-5xl md:text-[4rem] lg:text-[clamp(4rem,4.5vw,4.5rem)]"
          >
            {en ? 'Shall we look at it together?' : '¿Lo vemos juntos?'}
          </h2>
          <p className="mt-4 max-w-[460px] text-lg leading-[1.45] text-[#173553] sm:text-lg md:text-xl md:leading-[1.45]">
            {en
              ? 'Tell us about your situation and we’ll help you make sense of your options.'
              : 'Cuéntanos tu caso y te ayudamos a poner orden en las opciones.'}
          </p>
          <div className="mt-6 flex flex-col items-start">
            <Link
              href={localizedPath(locale, '/contact')}
              className="inline-flex min-h-[52px] max-w-[calc(100vw-3rem)] items-center justify-center rounded-full bg-[var(--blue-deep)] px-8 py-3 text-center text-lg font-semibold text-white transition-colors hover:bg-[#123b68] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--blue)]"
            >
              {en ? 'Tell us what you need' : 'Cuéntanos qué necesitas'}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
