'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { 
  MessageCircle, 
  Phone, 
  ShieldCheck, 
  Clock, 
  Users, 
  CircleCheck, 
  ArrowRight, 
  Sparkles, 
  HeartHandshake,
  ChevronDown,
  Percent,
  CalendarCheck
} from 'lucide-react';
import { BlurText } from './ui/blur-text';
import { ParticlesBg } from './ui/particles-bg';
import { FadeSection } from './ui/fade-section';
import { ClickSpark } from './ui/click-spark';
import CountUp from './ui/count-up';

const WHATSAPP_LINK = "https://wa.me/34603448765?text=Hola%2C%20me%20interesa%20el%20seguro%20dental.%20%C2%BFPodemos%20hablar%3F";
const PHONE_NUMBER = "603 448 765";

export function DentalLanding() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: "¿Realmente no hay carencias para limpiezas?",
      a: "Correcto. Desde el minuto uno en que tu póliza está activa, puedes solicitar tu primera limpieza y revisión. Sin esperas de 3 o 6 meses como en otras compañías."
    },
    {
      q: "¿Qué hospitales o clínicas puedo usar en Madrid?",
      a: "Trabajamos con una red de clínicas dentales de primer nivel en toda la Comunidad de Madrid. Al contactar con nosotros, te facilitaremos el cuadro médico más cercano a tu domicilio o lugar de trabajo."
    },
    {
      q: "¿Cómo funciona el mantenimiento de la antigüedad?",
      a: "Si ya tienes un seguro dental, nosotros respetamos el tiempo que lleves en él. Esto te permite acceder a tratamientos complejos (como endodoncias o implantes) mucho antes que si empezaras de cero."
    },
    {
      q: "¿Qué pasa si necesito una urgencia un fin de semana?",
      a: "Nuestras pólizas incluyen un servicio de urgencias 24h. Solo tienes que llamar al número de asistencia que te proporcionaremos y te indicarán a qué centro acudir."
    },
    {
      q: "¿Puedo incluir a mis hijos en la póliza?",
      a: "Por supuesto. De hecho, tenemos modalidades familiares muy ventajosas donde la ortodoncia y los tratamientos preventivos infantiles tienen coberturas especiales."
    },
    {
      q: "¿Cómo se hace el pago?",
      a: "El pago se domicilia mensualmente en tu cuenta bancaria. Sin cuotas de alta ni gastos de gestión ocultos. Transparencia total."
    }
  ];

  return (
    <div className="bg-[#0a0f1e] text-white overflow-x-hidden selection:bg-blue-500/30">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-20 pb-16 overflow-hidden">
        <ParticlesBg count={60} color="59, 130, 246" />
        <div className="container-shell relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <FadeSection direction="none">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/5 mb-8 dental-badge-glow">
                <Sparkles className="w-4 h-4 text-blue-400" />
                <span className="text-sm font-semibold tracking-wide text-blue-400 uppercase">Sin carencias desde el primer día</span>
              </div>
            </FadeSection>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">
              <BlurText text="Seguro Dental Premium en Madrid" className="block text-white" />
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 mt-2">
                Sin esperas, sin letra pequeña.
              </span>
            </h1>

            <FadeSection delay={0.4}>
              <p className="text-xl md:text-2xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
                Protege tu sonrisa con la confianza de una correduría familiar. Rosa y Sebastián gestionan tu póliza personalmente.
              </p>
            </FadeSection>

            <FadeSection delay={0.6} className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <ClickSpark>
                <a 
                  href={WHATSAPP_LINK}
                  className="btn-whatsapp !py-4 !px-8 !text-lg !w-full sm:!w-auto flex items-center gap-3 bg-[#25D366] hover:bg-[#128C7E] transition-all duration-300 rounded-full"
                >
                  <MessageCircle className="w-6 h-6" />
                  Hablar por WhatsApp
                </a>
              </ClickSpark>
              <a 
                href={`tel:+34${PHONE_NUMBER.replace(/\s/g, '')}`}
                className="btn-ghost !border-white/10 !bg-white/5 !text-white !py-4 !px-8 !text-lg !w-full sm:!w-auto flex items-center gap-3 hover:!bg-white/10 transition-all rounded-full"
              >
                <Phone className="w-5 h-5 text-blue-400" />
                Llamar a Rosa: {PHONE_NUMBER}
              </a>
            </FadeSection>
          </div>
        </div>

        {/* Hero bottom gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0f1e] to-transparent" />
      </section>

      {/* Trust Bar */}
      <section className="py-12 border-y border-white/5 bg-white/[0.02]">
        <div className="container-shell">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <FadeSection direction="up" delay={0.1}>
              <div className="flex flex-col gap-1">
                <span className="text-4xl font-bold text-white">
                  <CountUp to={355} duration={2} />
                </span>
                <span className="text-slate-500 font-medium uppercase tracking-wider text-xs">Familias protegidas</span>
              </div>
            </FadeSection>
            <FadeSection direction="up" delay={0.2}>
              <div className="flex flex-col gap-1">
                <span className="text-4xl font-bold text-white">
                  <CountUp to={11} duration={1.5} suffix=" Años" />
                </span>
                <span className="text-slate-500 font-medium uppercase tracking-wider text-xs">En el sector</span>
              </div>
            </FadeSection>
            <FadeSection direction="up" delay={0.3}>
              <div className="flex flex-col gap-1">
                <span className="text-4xl font-bold text-white">
                  &lt; <CountUp to={30} duration={1} /> min
                </span>
                <span className="text-slate-500 font-medium uppercase tracking-wider text-xs">Tiempo de respuesta</span>
              </div>
            </FadeSection>
          </div>
        </div>
      </section>

      {/* Así de fácil Section */}
      <section className="section-pad relative">
        <div className="container-shell">
          <FadeSection className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Tu póliza activa en 3 pasos</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">Olvídate de formularios infinitos y esperas tediosas. Lo hacemos simple para ti.</p>
          </FadeSection>

          <div className="grid md:grid-cols-3 gap-12 relative lg:px-12">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-[40px] left-[15%] right-[15%] h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
            
            <FadeSection direction="up" delay={0.1} className="relative z-10 text-center">
              <div className="w-20 h-20 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mx-auto mb-8 relative group hover:border-blue-500/40 transition-colors">
                <MessageCircle className="w-8 h-8 text-blue-400" />
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-sm font-bold">1</div>
              </div>
              <h3 className="text-xl font-bold mb-4">Escribes por WhatsApp</h3>
              <p className="text-slate-400 leading-relaxed">Nos cuentas qué necesitas. Sin bots, Rosa o Sebastián te atenderán directamente.</p>
            </FadeSection>

            <FadeSection direction="up" delay={0.2} className="relative z-10 text-center">
              <div className="w-20 h-20 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto mb-8 relative group hover:border-emerald-500/40 transition-colors">
                <Users className="w-8 h-8 text-emerald-400" />
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-sm font-bold">2</div>
              </div>
              <h3 className="text-xl font-bold mb-4">Recibes respuesta</h3>
              <p className="text-slate-400 leading-relaxed">En menos de 30 minutos resolvemos tus dudas y te enviamos la mejor opción personalizada.</p>
            </FadeSection>

            <FadeSection direction="up" delay={0.3} className="relative z-10 text-center">
              <div className="w-20 h-20 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mx-auto mb-8 relative group hover:border-amber-500/40 transition-colors">
                <ShieldCheck className="w-8 h-8 text-amber-400" />
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center text-sm font-bold">3</div>
              </div>
              <h3 className="text-xl font-bold mb-4">Póliza activada</h3>
              <p className="text-slate-400 leading-relaxed">Si decides avanzar, tramitamos todo. Tu protección dental comienza ese mismo día.</p>
            </FadeSection>
          </div>
        </div>
      </section>

      {/* Savings Section */}
      <section className="section-pad bg-white/[0.02]">
        <div className="container-shell">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeSection direction="left">
              <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
                El ahorro real de estar <span className="text-blue-400">bien asegurado</span>
              </h2>
              <p className="text-lg text-slate-400 mb-8">
                No es solo tranquilidad, es una inversión inteligente en tu salud y tu bolsillo. Así cambian los costes en Madrid con nosotros.
              </p>
              
              <div className="flex flex-col gap-6">
                {[
                  { label: "Revisiones y Limpiezas", without: "Desde 80€", with: "GRATIS", highlight: true },
                  { label: "Radiografías e Intralinguales", without: "Desde 45€", with: "GRATIS", highlight: true },
                  { label: "Empastes y Obturaciones", without: "Desde 120€", with: "GRATIS", highlight: true },
                  { label: "Implante dental completo", without: "2.500€", with: "Desde 550€" },
                  { label: "Ortodoncia (Ahorro medio)", without: "Tarifa Clínica", with: "-40% Descuento" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-4 rounded-xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-colors group">
                    <span className="font-semibold">{item.label}</span>
                    <div className="flex items-center gap-6">
                      <span className="text-slate-500 line-through text-sm">{item.without}</span>
                      <span className={`font-bold ${item.highlight ? 'text-emerald-400' : 'text-blue-400'}`}>{item.with}</span>
                    </div>
                  </div>
                ))}
              </div>
            </FadeSection>

            <FadeSection direction="right" className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden glass-card-premium p-8 flex flex-col justify-center">
                <div className="bg-blue-500/10 rounded-2xl p-6 mb-8 border border-blue-500/20">
                  <div className="flex items-center gap-3 mb-4">
                    <CircleCheck className="text-blue-400 w-6 h-6" />
                    <span className="text-xl font-bold">Cobertura Total desde el día 1</span>
                  </div>
                  <p className="text-slate-400">Disfruta de más de 40 servicios gratuitos incluidos en tu cuota mensual. Sin sorpresas al salir de la clínica.</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                    <div className="text-3xl font-bold text-white mb-1">0€</div>
                    <div className="text-xs uppercase text-slate-500 tracking-wider">Copago en Básicos</div>
                  </div>
                  <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                    <div className="text-3xl font-bold text-white mb-1">100%</div>
                    <div className="text-xs uppercase text-slate-500 tracking-wider">Transparencia</div>
                  </div>
                </div>
              </div>
              
              {/* Decorative glows */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/20 blur-[80px] rounded-full" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-emerald-500/10 blur-[80px] rounded-full" />
            </FadeSection>
          </div>
        </div>
      </section>

      {/* Equipo Section */}
      <section className="section-pad">
        <div className="container-shell">
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 items-center">
            <FadeSection direction="left">
              <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl">
                <Image 
                  src="/images/equipo/rosa-y-sebastian.jpg" 
                  alt="Rosa y Sebastián Valentín" 
                  fill 
                  className="object-cover"
                />
              </div>
            </FadeSection>
            
            <FadeSection direction="right">
              <div className="inline-flex items-center gap-2 text-blue-400 font-bold tracking-widest uppercase text-xs mb-6">
                <Users className="w-4 h-4" />
                Correduría Familiar
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
                Hay personas reales <span className="text-emerald-400">detrás de tu póliza.</span>
              </h2>
              <div className="space-y-6 text-lg text-slate-400 leading-relaxed">
                <p>
                  Somos Rosa y Sebastián Valentín. Madre e hijo trabajando codo con codo desde Boadilla del Monte para proteger a familias de todo Madrid.
                </p>
                <p>
                  No somos un call center frío ni un algoritmo. Cuando nos escribes, recibimos nosotros el mensaje. Cuando tienes un problema en la clínica, somos nosotros quienes peleamos por ti ante la aseguradora.
                </p>
                <p className="text-white font-medium italic border-l-2 border-emerald-500/50 pl-6 italic">
                  "Llevamos 11 años gestionando seguros como si fueran para nuestra propia familia. Si algo no es bueno para nosotros, no lo será para ti."
                </p>
              </div>
              <div className="mt-12 flex flex-wrap gap-8 items-center">
                <div className="flex flex-col">
                  <span className="text-white font-bold text-xl uppercase tracking-tighter">Rosa Valentín</span>
                  <span className="text-slate-500 text-sm">Directora Técnica</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-white font-bold text-xl uppercase tracking-tighter">Sebastián Valentín</span>
                  <span className="text-slate-500 text-sm">Asesor de Seguros</span>
                </div>
              </div>
            </FadeSection>
          </div>
        </div>
      </section>

      {/* Garantías Section */}
      <section className="section-pad relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-500/[0.02]" />
        <div className="container-shell relative z-10">
          <FadeSection className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Nuestras garantías agresivas</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">Porque estamos tan seguros de nuestro servicio que podemos permitirnos ser claros.</p>
          </FadeSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                icon: Clock, 
                title: "Respuesta en <30 min", 
                desc: "Garantizado por contrato. Si nos escribes en horario laboral, te respondemos en menos de media hora." 
              },
              { 
                icon: ShieldCheck, 
                title: "14 días de prueba", 
                desc: "Si en las primeras dos semanas no estás satisfecho, te ayudamos a cancelar sin coste adicional." 
              },
              { 
                icon: CalendarCheck, 
                title: "Respetamos Antigüedad", 
                desc: "Vengas de donde vengas, mantenemos tu antigüedad para que no pierdas tus derechos adquiridos." 
              },
              { 
                icon: CheckCircle2, 
                title: "Sin Carencias de Bienvenida", 
                desc: "Revisiones, limpiezas y curas de urgencia desde el primer minuto. Sin periodos de espera." 
              }
            ].map((item, i) => (
              <FadeSection key={i} direction="up" delay={i * 0.1} className="guarantee-card h-full p-8 rounded-[2rem] bg-white/[0.03] border border-white/5 hover:border-blue-500/30 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <item.icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-lg font-bold mb-3">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      {/* Oferta Sorpresa Section */}
      <section className="section-pad">
        <div className="container-shell">
          <FadeSection direction="up">
            <div className="relative rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-blue-600 to-indigo-700 p-8 md:p-16 text-center text-white">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <HeartHandshake className="w-64 h-64" />
              </div>
              
              <div className="relative z-10 max-w-3xl mx-auto">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 text-white font-bold text-xs tracking-widest uppercase mb-8">
                  <Percent className="w-3 h-3" /> Oferta Exclusiva Madrid
                </div>
                <h2 className="text-4xl md:text-6xl font-bold mb-8">¿Planeas cuidar tu salud al completo?</h2>
                <p className="text-xl md:text-2xl text-blue-50/80 mb-12 leading-relaxed">
                  Si contratas tu seguro dental hoy y decides ampliar a **Salud Completa** en los próximos 30 días, te aplicamos condiciones de **cliente antiguo** desde el primer minuto.
                </p>
                <a 
                  href={WHATSAPP_LINK}
                  className="inline-flex items-center gap-3 bg-white text-blue-600 font-bold py-5 px-10 rounded-full text-xl hover:bg-blue-50 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
                >
                  Me interesa esta oferta
                  <ArrowRight className="w-6 h-6" />
                </a>
              </div>
            </div>
          </FadeSection>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="section-pad">
        <div className="container-shell max-w-4xl">
          <FadeSection className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Dudas que podrías tener</h2>
            <p className="text-slate-400 text-lg">Hablamos claro para que decidas con tranquilidad.</p>
          </FadeSection>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <FadeSection key={i} direction="up" delay={i * 0.05}>
                <button 
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full p-6 text-left rounded-2xl bg-white/[0.03] border border-white/5 hover:border-white/10 transition-all flex items-center justify-between group"
                >
                  <span className="text-lg font-semibold">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-slate-500 transition-transform ${activeFaq === i ? 'rotate-180' : ''}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${activeFaq === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="p-6 text-slate-400 leading-relaxed bg-white/[0.01] rounded-b-2xl -mt-2">
                    {faq.a}
                  </div>
                </div>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section-pad pb-32">
        <div className="container-shell">
          <FadeSection direction="up" className="text-center bg-gradient-to-b from-white/[0.03] to-transparent p-12 md:p-24 rounded-[3rem] border border-white/5 relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-bold mb-8">¿Empezamos hoy mismo?</h2>
              <p className="text-xl text-slate-400 mb-12 max-w-xl mx-auto">
                No dejes que una molestia dental se convierta en un problema grave. Rosa y Sebastián están al otro lado para ayudarte.
              </p>
              
              <div className="flex flex-col items-center gap-8">
                <ClickSpark>
                  <a 
                    href={WHATSAPP_LINK}
                    className="btn-whatsapp !py-6 !px-12 !text-2xl flex items-center gap-4 bg-[#25D366] hover:bg-[#128C7E] transition-all rounded-full shadow-[0_20px_40px_rgba(37,211,102,0.3)]"
                  >
                    <MessageCircle className="w-8 h-8" />
                    WhatsApp Directo
                  </a>
                </ClickSpark>
                <div className="flex flex-col gap-2">
                  <span className="text-slate-500 uppercase tracking-widest text-sm font-bold">O llámanos directamente</span>
                  <a href={`tel:+34${PHONE_NUMBER.replace(/\s/g, '')}`} className="text-3xl font-bold hover:text-blue-400 transition-colors">
                    {PHONE_NUMBER}
                  </a>
                </div>
                <div className="mt-12 pt-12 border-t border-white/5 w-full flex flex-col items-center gap-4">
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4, 5].map(i => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-[#0a0f1e] bg-slate-800 flex items-center justify-center overflow-hidden">
                         <span className="text-[10px] text-slate-400">★</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-slate-500 text-sm">Rosa y Sebastián Valentín · Correduría de Seguros en Madrid</p>
                </div>
              </div>
            </div>
            
            {/* Background element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />
          </FadeSection>
        </div>
      </section>
    </div>
  );
}
