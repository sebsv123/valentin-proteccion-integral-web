'use client';
import { motion } from 'framer-motion';

const guarantees: Record<string, string> = {
  vida: "Mejoramos tu Seguro Banco/Hipoteca · 18k€ Mín · Suicidio Año 1",
  dental: "Sin Espera: Cobertura Inmediata",
  salud: "Cita sin Listas de Espera · Respuesta Personal 24h",
  'salud-extranjeros': "Póliza Cumple Requisitos Residencia · +100 Clientes Aprobados",
  mascotas: "Vacunas + Pasaporte Europeo Cubiertos · Cumple RD 2026",
  viaje: "Cobertura Médica Inmediata · Sin Franquicia Inicial",
  autonomos: "Deducciones Fiscales 2026 Verificadas · Hasta 500€ Ahorro",
  zonas: "Servicio Domicilio Boadilla · Respuesta Local 1h",
  familias: "Paquete Familiar: Vida + Salud 5% dto",
  default: "Respuesta Personal de Rosa o Sebastián en 30min",
};

export default function GuaranteeBadge({ type = 'default' }: { type?: string }) {
  const text = guarantees[type] ?? guarantees.default;
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-br from-emerald-600 to-blue-700 text-white px-10 py-10 rounded-3xl shadow-2xl border-4 border-white/30 mx-auto max-w-2xl mb-12 text-center font-bold"
    >
      <div className="text-6xl mb-4">🛡️</div>
      <h3 className="text-3xl md:text-4xl font-black text-yellow-100 uppercase tracking-wider mb-4">
        GARANTÍA EXCLUSIVA
      </h3>
      <p className="text-xl md:text-2xl leading-snug mb-4">{text}</p>
      <p className="text-base md:text-lg opacity-90 font-semibold">
        +10 años · Independientes Madrid
      </p>
    </motion.div>
  );
}
