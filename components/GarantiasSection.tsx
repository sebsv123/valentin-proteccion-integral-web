'use client';

import Image from 'next/image';
import { Clock, ClipboardCheck, UserCircle } from 'lucide-react';

interface GarantiasSectionProps {
  brandColor?: string;
}

export default function GarantiasSection({ brandColor = '#e23b4a' }: GarantiasSectionProps) {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-6xl">
        
        {/* Titular */}
        <div className="text-center mb-16">
          <h2 className="text-[40px] sm:text-[48px] lg:text-[56px] font-semibold text-gray-900 leading-tight tracking-tight">
            La garantía que <span style={{ color: brandColor }}>nadie más da</span>
          </h2>
        </div>

        {/* 3 Cards horizontales */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          
          {/* Card 1 */}
          <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-[0_2px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_30px_rgba(0,0,0,0.08)] transition-shadow">
            <div 
              className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
              style={{ backgroundColor: `${brandColor}15` }}
            >
              <Clock className="w-7 h-7" style={{ color: brandColor }} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3 leading-tight">
              30 minutos o llamamos nosotros
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Si no respondemos en 30 minutos, Rosa o Sebastián te llaman directamente. Sin esperas. Sin excusas.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-[0_2px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_30px_rgba(0,0,0,0.08)] transition-shadow">
            <div 
              className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
              style={{ backgroundColor: `${brandColor}15` }}
            >
              <ClipboardCheck className="w-7 h-7" style={{ color: brandColor }} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3 leading-tight">
              Revisión anual gratuita
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Cada año revisamos tu póliza sin que tengas que pedirlo. Si encontramos algo mejor, te lo decimos.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-[0_2px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_30px_rgba(0,0,0,0.08)] transition-shadow">
            <div 
              className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
              style={{ backgroundColor: `${brandColor}15` }}
            >
              <UserCircle className="w-7 h-7" style={{ color: brandColor }} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3 leading-tight">
              Gestor personal de por vida
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Desde el primer día tienes a Rosa o Sebastián asignados. No robots. No centralitas. Personas reales.
            </p>
          </div>
        </div>

        {/* Bloque diferencial */}
        <div 
          className="rounded-3xl p-10 md:p-14 mb-16"
          style={{ backgroundColor: `${brandColor}08` }}
        >
          <div className="max-w-3xl">
            <h3 
              className="text-2xl md:text-3xl font-semibold mb-4"
              style={{ color: brandColor }}
            >
              ¿Y si no cumplimos lo que prometemos?
            </h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
              Si no te contactamos en 30 minutos, te ofrecemos una <strong>cita presencial gratuita</strong> en nuestra oficina de Boadilla del Monte.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Así de seguros estamos de lo que prometemos. Nadie en el sector ofrece esta garantía. Nosotros sí.
            </p>
          </div>
        </div>

        {/* Firma */}
        <div className="flex flex-col sm:flex-row items-center gap-4 pt-8 border-t border-gray-100">
          <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-gray-100">
            <Image
              src="/images/rosa_y_sebastian.jpeg"
              alt="Rosa y Sebastián Valentín"
              fill
              className="object-cover object-[center_20%]"
            />
          </div>
          <div className="text-center sm:text-left">
            <p className="font-semibold text-gray-900">Rosa Valentín</p>
            <p className="text-sm text-gray-500">Mediadora DGSFP · NIF 79234434D</p>
          </div>
        </div>

      </div>
    </section>
  );
}
