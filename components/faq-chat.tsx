'use client';

import { useState } from 'react';
import { MessageCircle, User, ChevronDown } from 'lucide-react';

interface FAQItem {
  q: string;
  a: string;
}

interface FAQChatProps {
  items: FAQItem[];
  title?: string;
  subtitle?: string;
  brandColor?: string;
}

export function FAQChat({ 
  items, 
  title = "Preguntas frecuentes",
  subtitle = "Resolvemos tus dudas",
  brandColor = "emerald"
}: FAQChatProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const colorVariants: Record<string, { question: string; answer: string; accent: string }> = {
    emerald: {
      question: "bg-emerald-50 border-emerald-200 text-emerald-900",
      answer: "bg-slate-50 border-slate-200 text-slate-700",
      accent: "text-emerald-500"
    },
    blue: {
      question: "bg-blue-50 border-blue-200 text-blue-900",
      answer: "bg-slate-50 border-slate-200 text-slate-700",
      accent: "text-blue-500"
    },
    indigo: {
      question: "bg-indigo-50 border-indigo-200 text-indigo-900",
      answer: "bg-slate-50 border-slate-200 text-slate-700",
      accent: "text-indigo-500"
    },
    amber: {
      question: "bg-amber-50 border-amber-200 text-amber-900",
      answer: "bg-slate-50 border-slate-200 text-slate-700",
      accent: "text-amber-500"
    },
    coral: {
      question: "bg-rose-50 border-rose-200 text-rose-900",
      answer: "bg-slate-50 border-slate-200 text-slate-700",
      accent: "text-rose-500"
    },
    orange: {
      question: "bg-orange-50 border-orange-200 text-orange-900",
      answer: "bg-slate-50 border-slate-200 text-slate-700",
      accent: "text-orange-500"
    }
  };

  const colors = colorVariants[brandColor] || colorVariants.emerald;

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <span className={`inline-flex items-center gap-2 ${colors.accent} text-sm font-medium mb-3`}>
            <MessageCircle className="w-4 h-4" />
            {subtitle}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
            {title}
          </h2>
        </div>

        {/* Chat conversation */}
        <div className="space-y-4">
          {items.map((item, index) => {
            const isOpen = openIndex === index;
            const isEven = index % 2 === 0;

            return (
              <div 
                key={index}
                className={`flex flex-col gap-2 ${isEven ? 'items-start' : 'items-end'}`}
              >
                {/* Question bubble */}
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className={`group flex items-start gap-3 max-w-[90%] md:max-w-[80%] text-left transition-all duration-300 ${
                    isOpen ? 'scale-[1.02]' : 'hover:scale-[1.01]'
                  }`}
                >
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full ${colors.question} border flex items-center justify-center`}>
                    <User className="w-4 h-4" />
                  </div>
                  <div className={`px-5 py-3.5 rounded-2xl border shadow-sm ${colors.question} ${
                    isEven ? 'rounded-tl-sm' : 'rounded-tr-sm'
                  }`}>
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-sm md:text-base">{item.q}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                    </div>
                  </div>
                </button>

                {/* Answer bubble - appears when open */}
                <div 
                  className={`flex items-start gap-3 max-w-[90%] md:max-w-[80%] transition-all duration-300 ${
                    isEven ? 'ml-11' : 'mr-11'
                  } ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 h-0 overflow-hidden'}`}
                >
                  <div className={`px-5 py-4 rounded-2xl border shadow-sm ${colors.answer} rounded-tl-sm`}>
                    <div className="flex items-start gap-3">
                      <div className={`flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br ${
                        brandColor === 'emerald' ? 'from-emerald-400 to-emerald-600' :
                        brandColor === 'blue' ? 'from-blue-400 to-blue-600' :
                        brandColor === 'indigo' ? 'from-indigo-400 to-indigo-600' :
                        brandColor === 'amber' ? 'from-amber-400 to-amber-600' :
                        brandColor === 'orange' ? 'from-orange-400 to-orange-600' :
                        'from-rose-400 to-rose-600'
                      } flex items-center justify-center mt-0.5`}>
                        <span className="text-white text-xs font-bold">V</span>
                      </div>
                      <p className="text-sm md:text-base leading-relaxed">{item.a}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Chat input style CTA */}
        <div className="mt-12 text-center">
          <p className="text-slate-500 text-sm mb-4">¿Tienes más preguntas?</p>
          <div className="inline-flex items-center gap-3 bg-white border border-slate-200 rounded-full px-6 py-3 shadow-sm">
            <div className={`w-2 h-2 rounded-full ${
              brandColor === 'emerald' ? 'bg-emerald-500' :
              brandColor === 'blue' ? 'bg-blue-500' :
              brandColor === 'indigo' ? 'bg-indigo-500' :
              brandColor === 'amber' ? 'bg-amber-500' :
              brandColor === 'orange' ? 'bg-orange-500' :
              'bg-rose-500'
            } animate-pulse`} />
            <span className="text-slate-600 text-sm">Habla con nosotros por WhatsApp</span>
            <span className="text-slate-400">•</span>
            <span className="text-slate-500 text-sm">Respuesta en 30 min</span>
          </div>
        </div>
      </div>
    </section>
  );
}
