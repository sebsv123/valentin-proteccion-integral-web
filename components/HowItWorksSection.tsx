'use client'
import { useEffect } from 'react'
import { Search, FileCheck, HeartHandshake } from 'lucide-react'
import { WhatsAppIcon } from './ui/whatsapp-icon'
import Link from 'next/link'
import { buildWhatsAppHref } from '@/lib/products'

const steps = [
  {
    num: '01',
    icon: WhatsAppIcon,
    title: 'Cuéntanos tu situación',
    desc: 'Dinos qué te preocupa y qué quieres proteger. Sin formularios kilométricos, sin presión y a tu ritmo.',
  },
  {
    num: '02',
    icon: Search,
    title: 'Analizamos opciones reales',
    desc: 'Comparamos según tu perfil y prioridades. Te explicamos qué cambia entre modalidades con total claridad.',
  },
  {
    num: '03',
    icon: FileCheck,
    title: 'Sin letra pequeña oculta',
    desc: 'Traducimos coberturas y exclusiones a lenguaje claro. Las preguntas son siempre bienvenidas.',
  },
  {
    num: '04',
    icon: HeartHandshake,
    title: 'Decides tú, con todo claro',
    desc: 'Cuando tienes el contexto completo, decides. Y si algo cambia en el futuro, seguimos contigo.',
  },
]

export default function HowItWorksSection() {
  useEffect(() => {
    const els = document.querySelectorAll('.fade-up');
    if (!els.length) return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('is-visible');
          observer.unobserve(e.target);
        }
      }),
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    els.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="como-funciona"
      aria-labelledby="hiw-title"
      className="section-pad bg-[#0f172a] overflow-hidden"
    >
      <div className="container-shell">
        <div className="fade-up mb-14 text-center">
            <p className="kicker !text-[#81C784]">Cómo trabajamos contigo</p>
            <h2
              id="hiw-title"
              className="mt-4 font-heading text-4xl font-extrabold
                         tracking-tight text-white md:text-6xl"
            >
              Cuatro pasos para proteger lo que importa
            </h2>
            <p className="mt-4 mx-auto max-w-2xl text-base text-white/90
                          leading-8">
              Un proceso claro, humano y sin presiones. Así trabajamos
              en Valentín Protección Integral.
            </p>
          </div>
        </div>

        <div className="relative">
          {/* Línea conectora desktop */}
          <div
            className="absolute top-14 left-[12.5%] right-[12.5%] hidden h-px
                        border-t-2 border-dashed border-white/10 lg:block"
            aria-hidden="true"
          />

          <div className="grid gap-6 lg:grid-cols-4">
            {steps.map(({ num, icon: Icon, title, desc }, index) => (
              <div className="fade-up" key={num} style={{ transitionDelay: `${index * 0.08}s` }}>
                <div
                  className="relative flex flex-col items-center text-center
                             rounded-[28px] bg-white/10 backdrop-blur p-8
                             border border-white/10
                             hover:border-[#81C784]/30 hover:bg-white/[0.08]
                             transition-all duration-300 group"
                >
                  <span
                    className="absolute top-4 right-5 font-heading text-7xl
                               font-extrabold text-white/[0.04] select-none
                               leading-none"
                    aria-hidden="true"
                  >
                    {num}
                  </span>
                  <div
                    className="relative z-10 mb-6 inline-flex rounded-2xl
                               bg-[#81C784]/15 p-4 text-[#81C784]
                               group-hover:bg-[#81C784]/25 transition-colors"
                  >
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3
                    className="relative z-10 font-heading text-xl font-bold
                               text-white leading-tight"
                  >
                    {title}
                  </h3>
                  <p
                    className="relative z-10 mt-4 text-sm leading-7 text-white/90"
                  >
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA inferior */}
        <div className="fade-up" style={{ transitionDelay: '0.24s' }}>
          <div
            className="mt-12 flex flex-col gap-4 items-center sm:flex-row
                       sm:justify-center"
          >
            <Link
              href="/como-te-ayudamos"
              className="btn-secondary !border-white/20 !text-white
                         hover:!bg-white hover:!text-[var(--blue-deep)]"
            >
              Cómo te ayudamos en detalle
            </Link>
            <a
              href={buildWhatsAppHref(
                'Hola, quiero entender cómo funciona el proceso de asesoría.'
              )}
              className="btn-whatsapp"
            >
              Empezar ahora por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
