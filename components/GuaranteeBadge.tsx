'use client';
import { Shield, CheckCircle } from 'lucide-react';

const guarantees: Record<string, { title: string; subtitle: string }> = {
  vida: { 
    title: "Mejoramos tu seguro del banco", 
    subtitle: "18.000€ mínimo · Suicidio cubierto año 1" 
  },
  dental: { 
    title: "Sin listas de espera", 
    subtitle: "Cobertura inmediata desde el primer día" 
  },
  salud: { 
    title: "Cita sin listas de espera", 
    subtitle: "Respuesta personal en 24h" 
  },
  'salud-extranjeros': { 
    title: "Cumple requisitos extranjería", 
    subtitle: "+100 clientes con NIE/TIE aprobado" 
  },
  mascotas: { 
    title: "Vacunas y pasaporte europeo", 
    subtitle: "Cumple normativa RD 2026" 
  },
  viaje: { 
    title: "Cobertura desde la salida de casa", 
    subtitle: "Sin franquicia · 60.000€ médica" 
  },
  autonomos: { 
    title: "Deducciones fiscales 2026", 
    subtitle: "Hasta 500€ de ahorro verificado" 
  },
  zonas: { 
    title: "Servicio a domicilio", 
    subtitle: "Respuesta local en 1 hora" 
  },
  familias: { 
    title: "Pack familiar completo", 
    subtitle: "Vida + Salud · 5% dto. adicional" 
  },
  decesos: { 
    title: "Todo incluido", 
    subtitle: "Servicio completo sin sorpresas" 
  },
  accidentes: { 
    title: "24h cobertura mundial", 
    subtitle: "Incapacidad permanente incluida" 
  },
  'accidentes-decesos': { 
    title: "Doble protección", 
    subtitle: "Accidente + Decesos en una póliza" 
  },
  senior: { 
    title: "Especialistas en +65", 
    subtitle: "Sin carencias · Sin copagos" 
  },
  default: { 
    title: "Respuesta personal garantizada", 
    subtitle: "Rosa o Sebastián en 30 minutos" 
  },
};

export default function GuaranteeBadge({ type = 'default' }: { type?: string }) {
  const guarantee = guarantees[type] ?? guarantees.default;
  
  return (
    <div className="inline-flex items-center gap-3 px-4 py-3 bg-white/90 backdrop-blur-sm rounded-xl border border-gray-200/80 shadow-sm">
      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex-shrink-0">
        <Shield className="w-4 h-4" />
      </div>
      <div className="flex flex-col items-start">
        <span className="text-sm font-semibold text-gray-900 leading-tight">
          {guarantee.title}
        </span>
        <span className="text-xs text-gray-500 leading-tight">
          {guarantee.subtitle}
        </span>
      </div>
      <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
    </div>
  );
}
