"use client";

import { useEffect } from "react";
import { onLCP, onINP, onCLS } from "web-vitals";

export function WebVitals() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Registrar métricas en consola para depuración
      onLCP((metric) => console.log('LCP:', metric.value, metric.name));
      onINP((metric) => console.log('INP:', metric.value, metric.name));
      onCLS((metric) => console.log('CLS:', metric.value, metric.name));
      
      // Aquí se podrían enviar a Vercel Analytics u otro servicio
      // Ejemplo: va.track('WebVitals', { name: metric.name, value: metric.value })
    }
  }, []);

  return null;
}
