# Release B · revisión final para decisión de publicación

Fecha: 2 de noviembre de 2026. **Preparado para revisión local; publicación NO autorizada ni ejecutada.**

## Recomendación técnica: A, mejora incremental con LCP pendiente

Recomiendo presentar para publicación el candidato auditado de **32 archivos fuente/pruebas/recursos**, más seis archivos mínimos de entrega (incluido el manifiesto). Se excluye el CSS híbrido sin efecto, sin perder ninguna mejora medida; no se propone publicar el patch original sin revisar.

La decisión se basa en una reducción reproducida del LCP observado **3,35→2,60 s (−22,4 %)** y de CSS transferido **80.216→55.368 bytes (−31,0 %)**, con 12 comandos CI local correctos y regresión visual estabilizada de cero píxeles en Hero, página completa, financiación y nueve estados del comparador. La reducción simulada es menor: **5,55→5,26 s (−5,2 %)**. **El objetivo de 2,5 s no está alcanzado y no debe anunciarse como resuelto.** No hay resultados de campo que permitan prometer ese valor público.

El TBT simulado 305→110 ms tiene dispersión y no se acompaña de reducción del TBT DevTools (~302 ms en ambas variantes). El JS solicitado antes del LCP observado sube ~8 KB. Estos límites se incluyen en la decisión, no se ocultan detrás del check verde.

### Alternativas consideradas

- **A, conjunto medido con depuración de archivo inerte:** beneficio observado mayor, sin diferencias visibles ni funcionales en los casos ejecutados. Riesgo moderado por entrega global de fuentes y mantenimiento de subconjuntos CSS; exige preview/CI remoto antes de integrar.
- **B, solo CSS:** el experimento anterior mejora ~8,2 % en DevTools frente al 22,4 % del conjunto; reduce la superficie global de fuentes, pero renuncia a una parte sustancial del beneficio. No lo recomiendo como primera opción dado que identidades tipográficas, fuentes, fallbacks, tres rutas externas y carga/CLS ya se comprobaron sin regresión atribuible. Si el preview detectase un problema real de fuentes o CSP/caché, esta alternativa debe reabrirse con un candidato propio y pruebas, no improvisarse durante el despliegue.
- **C, conservar todo en local:** sería la decisión si faltaran pruebas relevantes o existiera una regresión. La evidencia local disponible no muestra ese impedimento; sí quedan gates remotos obligatorios. La recomendación A no autoriza a saltarlos ni a publicar ahora.

## Estado preservado y alcance

Main remoto y despliegue público consultados corresponden a `0a876909d5815b831306f6f1ef18f9b9ac917a07`, e incluyen Release A. Deployment READY `dpl_GkV7Xp2yEcsf5FdJpzWh3iX6Etde`. Se aplicó B sin conflictos sobre un worktree nuevo de esa base, sin copiar versiones antiguas del parser, Aurora, cookies o contrato de Extranjeros.

Candidato final: `/home/_sebastian/vpi-salud-release-b-final-readiness-20261102`, rama `codex/salud-release-b-final-readiness-20261102`. El worktree original `vpi-salud-release-b-lcp-20261102` está congelado: 33 hashes coinciden. Los **1.092 archivos pendientes** del worktree mixto anterior conservan todos sus hashes. No se hizo reset, clean, stash ni borrado de recursos originales.

La única depuración del candidato original elimina `hybrid-delivery.module.css`, su import y clase raíz inertes, y la prueba asociada al módulo eliminado. `editorial-delivery.module.css` sí tiene consumidores reales y se conserva. Auditoría individual: [FILE_AUDIT.md](FILE_AUDIT.md). No se incluyen los ocho documentos históricos ni ~672 MB de evidencia. Las licencias OFL de Montserrat/Playfair siguen incluidas. No hay nuevos paquetes ni cambio de lockfile.

## Validación y límites para aprobar

- CI local completo, TypeScript, build, seguridad y leads: correctos. Extranjeros servido y su contrato real correctos, sin cambio funcional de esa ruta.
- Importes Chrome/Firefox, pegado y ambiguos; cookies 6,52:1/foco; Aurora en reposo sin bucle; formulario con interceptación; Estudio y escenas de Valentín; responsive y navegación: comprobados. Ver [VALIDATION.md](VALIDATION.md).
- Fuentes finales y geometría preservadas; CLS no se presenta como cero universal. Home conserva un shift preexistente ~0,02936 en ambos builds; Salud tiene un shift diminuto ~0,00004. Footer WhatsApp mantiene una incidencia de contraste preexistente fuera del alcance.
- Google real se comprueba mediante API pública y el fallback de desarrollo existente; el build local sin credenciales privadas no verifica por sí solo SSR autenticado. Repetir en preview con la configuración habitual, sin introducir secretos nuevos.
- Rendimiento histórico recalculado, variabilidad, replay exacto Lantern y comprobación puente: [PERFORMANCE_REVIEW.md](PERFORMANCE_REVIEW.md). Restan CSS global y trabajo de layout; el modelo simulado también depende del grafo de red/CPU. No se inicia una nueva ronda especulativa.
- CI GitHub remoto, preview HTTP/2/CDN y validación pública de este candidato aún no ejecutados. Sin commit ni SHA nuevo publicable. No se afirma equivalencia de laboratorio con usuarios reales.

## Riesgos concretos y mitigación

1. **Fuentes globales:** registro local y hints por ruta afectan al layout común. Se conserva identidad binaria y fallbacks; tests de hash/rangos/pesos y rutas externas. El preview debe confirmar caché/CSP/HTTP2 y carga en navegación directa/SPA. Otros usos preexistentes de next/font/google siguen dependiendo del proveedor durante build; no se promete compilación completamente offline.
2. **CSS derivado:** subconjuntos de entrega y dos componentes extraídos deben mantenerse coordinados con los originales. CI prueba equivalencia de declaraciones/cuerpos actuales; no detecta automáticamente cualquier regla futura omitida. Todo cambio de diseño posterior requiere actualizar la entrega y su regresión visual.
3. **Rendimiento residual:** cinco muestras por escenario permiten una comparación de laboratorio, no una garantía estadística general. Medir el preview y después producción con cinco muestras equivalentes; conservar outliers y configuración. No compensar LCP ocultando contenido o degradando el Hero.
4. **Rollback:** hay deployment sano identificado; antes de integrar hay que revalidar su vigencia y los permisos del mecanismo oficial. No se probó una mutación sobre producción.

## Paquete de decisión

- [MANIFEST.json](MANIFEST.json): lista exacta, hashes y categorías del conjunto.
- [RELEASE_PLAN.md](RELEASE_PLAN.md): gates de PR/CI remoto/preview, despliegue condicionado y rollback.
- Diff completo y scripts/evidencia pesada fuera del repositorio: `/home/_sebastian/VPI_RELEASE_B_FINAL_READINESS_20261102/`.
- URL local: http://127.0.0.1:3075/empresas/salud (producción local del candidato aislado).

**No se ha realizado commit, push, merge o deploy. La siguiente decisión corresponde al usuario sobre este candidato y sus límites.**
