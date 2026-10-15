import Image from 'next/image';

type HomeClarityTeamSectionProps = {
  locale: 'es' | 'en';
};

export function HomeClarityTeamSection({ locale }: HomeClarityTeamSectionProps) {
  const en = locale === 'en';

  return (
    <section
      id="claridad"
      aria-labelledby="home-simon-title"
      className="bg-[#fbfaf7] py-14 sm:py-16 lg:py-20"
      data-home-section="simon-team"
    >
      <div className="container-shell">
        <div className="mx-auto grid max-w-[1240px] items-center gap-8 md:gap-10 lg:grid-cols-[minmax(0,1.18fr)_minmax(300px,0.82fr)] lg:gap-16">
          <div>
            <p className="kicker">{en ? 'UNDERSTAND BEFORE YOU CHOOSE' : 'ENTENDER ANTES DE ELEGIR'}</p>
            <h2
              id="home-simon-title"
              className="mt-5 max-w-[780px] font-heading text-[clamp(2.5rem,8.2vw,4.25rem)] font-bold leading-[0.99] tracking-[-0.045em] text-[var(--blue-deep)] md:text-[clamp(3.5rem,6.2vw,4.25rem)] lg:text-[clamp(3.75rem,4.65vw,4.25rem)]"
            >
              {en
                ? 'More information does not always mean a better decision.'
                : 'Más información no siempre significa una mejor decisión.'}
            </h2>
          </div>

          <div className="max-w-[560px] lg:pt-12">
            <p className="max-w-[440px] text-[1.1rem] leading-[1.5] text-[#526273] sm:text-[1.125rem] lg:text-[1.3rem]">
              {en ? (
                <>
                  <span className="font-semibold text-[var(--blue-deep)]">Herbert Simon</span> explained how too much information consumes our attention. Insurance is no different: cover, exclusions, co-payments, waiting periods, prices and fine print.
                </>
              ) : (
                <>
                  <span className="font-semibold text-[var(--blue-deep)]">Herbert Simon</span> explicó cómo el exceso de información consume nuestra atención. En seguros ocurre igual: coberturas, exclusiones, copagos, carencias, precios y letra pequeña.
                </>
              )}
            </p>
            <p className="mt-4 font-heading text-[clamp(1.8rem,3.6vw,2.5rem)] font-semibold leading-[1.08] tracking-[-0.03em] text-[var(--blue-deep)] lg:mt-5">
              {en ? (
                <>Our work is to turn all of that into an <span className="text-[var(--blue)]">understandable decision.</span></>
              ) : (
                <>Nuestro trabajo es convertir todo eso en una decisión <span className="text-[var(--blue)]">comprensible.</span></>
              )}
            </p>
          </div>
        </div>

        <figure className="relative mx-auto mt-12 max-w-[1200px] sm:mt-14 lg:mt-16" data-home-section="team">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl sm:aspect-[2.2/1]">
            <Image
              src="/images/rosa_y_sebastian_conversando.png"
              alt={en ? 'Rosa and Sebastián discussing an insurance decision together' : 'Rosa y Sebastián conversando mientras revisan opciones juntos'}
              fill
              sizes="(max-width: 767px) 100vw, 92vw"
              className="object-cover object-center sm:object-[center_43%]"
              loading="lazy"
            />
          </div>
          <figcaption
            id="home-team"
            className="relative mx-auto -mt-2 w-[calc(100%-1.5rem)] max-w-[620px] bg-[#fbfaf7] px-5 py-5 sm:absolute sm:bottom-0 sm:right-0 sm:mt-0 sm:w-[min(42%,520px)] sm:translate-y-[1px] sm:px-8 sm:py-7 lg:px-10 lg:py-8"
          >
            <p className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-[var(--blue)] sm:text-xs">
              {en ? 'THE PEOPLE BEHIND VPI' : 'LAS PERSONAS DETRÁS DE VPI'}
            </p>
            <h3 className="mt-2 font-heading text-3xl font-semibold leading-tight tracking-[-0.035em] text-[var(--blue-deep)] sm:text-4xl lg:text-[2.75rem]">
              {en ? 'Rosa and Sebastián.' : 'Rosa y Sebastián.'}
            </h3>
            <p className="mt-3 max-w-[440px] text-base leading-6 text-[var(--muted)] sm:text-lg sm:leading-7">
              {en
                ? 'Two generations, one way of working: explain before selling.'
                : 'Dos generaciones, una misma forma de trabajar: explicar antes de vender.'}
            </p>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
