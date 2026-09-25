'use client';
import { Shield, CheckCircle } from 'lucide-react';

const guarantees: Record<string, { title: string; subtitle: string }> = {
  vida: {
    title: "Revisión de tu seguro de vida",
    subtitle: "Capital, garantías y condiciones según póliza"
  },
  dental: {
    title: "Dental según modalidad",
    subtitle: "Actos, tarifas y condiciones que conviene revisar"
  },
  salud: {
    title: "Salud según modalidad",
    subtitle: "Cuadro médico, carencias y condiciones que conviene revisar"
  },
  'salud-extranjeros': {
    title: "Requisitos de extranjería",
    subtitle: "Certificado y condiciones según producto y expediente"
  },
  mascotas: {
    title: "Protección para tu mascota",
    subtitle: "Responsabilidad civil y asistencia según póliza"
  },
  viaje: {
    title: "Asistencia de viaje",
    subtitle: "Límites, franquicias y ámbito según póliza"
  },
  autonomos: {
    title: "Cobertura y fiscalidad separadas",
    subtitle: "El tratamiento fiscal depende de la norma y tu caso"
  },
  zonas: {
    title: "Orientación cercana",
    subtitle: "Contacto personal en horario de atención"
  },
  familias: {
    title: "Decisión familiar más clara",
    subtitle: "Personas, uso y condiciones según modalidad"
  },
  decesos: {
    title: "Servicio de decesos",
    subtitle: "Prestaciones y límites según póliza"
  },
  accidentes: {
    title: "Accidentes según modalidad",
    subtitle: "Capitales, garantías y ámbito según póliza"
  },
  'accidentes-decesos': {
    title: "Doble protección",
    subtitle: "Accidente + Decesos en una póliza"
  },
  senior: {
    title: "Especialistas en +65",
    subtitle: "Coberturas según modalidad"
  },
  default: {
    title: "Respuesta personal",
    subtitle: "Rosa o Sebastián en horario de atención"
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
