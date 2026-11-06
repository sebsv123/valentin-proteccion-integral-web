# Validación del candidato aislado

## Entorno y CI

Worktree nuevo `/home/_sebastian/vpi-salud-release-b-final-readiness-20261102`; Node 24.22.1. Se ejecutaron secuencialmente los 12 comandos del workflow actual, con instalación limpia (`npm ci`) y build de producción. Todos terminaron con código 0. Logs, duración y RSS muestreado: carpeta externa `evidence/ci/`, índice `results.json`.

Comandos: `npm ci`; `npm run typecheck`; `npm run lint`; `npm run test:isfas`; `npm run test:health-money`; `npm run test:lcp-delivery`; `npm run test:related:contract`; `npm run test:related`; `npm run test:hardening`; `npm run test:leads`; `npm run build`; `npm run test:related:rendered` (reporte fuera del repo).

Las pruebas de entrega son 11: cinco pares CSS, equivalencia de CoverageScene y TaxReading, cuatro pruebas de fuentes/identidad/hints. Al excluir el módulo híbrido inerte se elimina únicamente su prueba de equivalencia; no se omite ningún gate anterior. La instalación no cambia package-lock ni dependencias.

Para utilizar el binario oficial precompilado de Sharp ante la libvips global de este host se estableció `SHARP_IGNORE_GLOBAL_LIBVIPS=1` solo en los procesos de instalación/build, sin modificar archivos de entorno, configuración o variables de Vercel. Se conserva el aviso no fatal de Node sobre MODULE_TYPELESS_PACKAGE_JSON; no se cambia el tipo del proyecto por ese motivo. No se observó exit 137; build con RSS agregado muestreado máximo de aproximadamente 3,07 GB, no equivalente a una medición de memoria total del sistema.

## Pruebas de navegador ejecutadas

Producción local en `http://127.0.0.1:3075/empresas/salud`, Chromium 154 y Firefox 151 para importes. Post comerciales interceptados/abortados; ningún lead real enviado.

- Salud: 1440/1024/768/390, H1 único, overflow 0, imágenes completas, consola e hidratación sin errores en las navegaciones ejecutadas. Comparador, detalles, anclas y CTA funcionales.
- Importes: cuatro combinaciones navegador/viewport, 136 entradas por teclado/inserción y cuatro pegados reales. `65,50` y `65.50` conservan 65,50; entradas vacías, cero, negativas, ambiguas, >2 decimales, no numéricas y excesivas no dan resultados engañosos. Repartos 0/25/50/70/75/100, suma monetaria comprobada.
- Formulario empresa/autónomo: validaciones, consentimiento, campos, payload y tracking; tres envíos simulados, incluyendo error 503 y recuperación 200, sin conexión al endpoint real de leads.
- Aurora: seis ventanas de 4 s, desktop/móvil y reduced motion. Cero callbacks requestAnimationFrame y cero tareas largas durante esas ventanas en reposo. Esto no significa cero CPU durante toda la carga.
- Cookies: cuatro rutas × 1440/390, contraste 6,52:1 en normal/hover/foco/activo, foco visible y objetivo 44 px, sin violaciones axe del control.
- Estudio: tres momentos, consulta/hospital y criterios, en cuatro anchuras. Paneles de altura estable (delta 0), teclado, escenas conceptuales y casos sin JS/con movimiento reducido. Sin errores/overflow.
- Home, Empresas, Salud y Extranjeros: respuestas 200, encabezados e imágenes; cargas frías adicionales. Menú móvil, Escape y navegación SPA en 390/768: ocho casos correctos. Metadatos servidos de Extranjeros comprobados tras el build, sin modificar su ruta.
- Árbol accesible estable: delta 0 frente a main. Diez snapshots axe de Salud y estados del Estudio sin violaciones dentro de los ámbitos comprobados. No es una certificación WCAG de toda la web: el enlace de WhatsApp del Footer mantiene el contraste preexistente aproximado 4,13:1, ajeno al release.

## Regresión visual y fuentes

18 capturas equivalentes contra main: Hero, financiación, full page en 1440/1024/390 y tres coberturas × esas tres anchuras. Cero píxeles distintos en las 18. Fuentes cargadas, imágenes decodificadas, reduced motion y cookies rechazadas en ambos lados. Se abrieron Hero desktop/móvil a resolución real. Es evidencia de estados estabilizados; no demuestra por sí sola ausencia de shifts durante carga.

Para la carga se realizaron además 18 navegaciones frías alternadas, Home/Empresas/Extranjeros × tres pares, CPU4/red móvil: geometría final de Header/Footer/H1/H2 sin diferencias, sin errores y fuentes finales correctas. CLS de Home incluye un desplazamiento tardío preexistente de ~0,02936 (mediana igual); no se atribuye causalidad ni se afirma CLS universalmente cero. En Empresas/Extranjeros los registros de esta muestra no tienen shifts. Salud mantiene CLS de orden 0,00004 en las mediciones anteriores. Fallbacks, métricas y binarios tipográficos son idénticos a los aprobados; esto no sustituye el gate remoto de HTTP/2/CDN.

Las funciones de experiencia, interacciones y reseñas se compararon con main normalizando únicamente fetchPriority y la clase raíz inerte; 20 archivos protegidos —incluidos backend, parser, Aurora, cookies, Header/Footer, configuración y lock— permanecen byte a byte iguales. No se retrocede ninguna reparación de A.

## Google y límites

El build local aislado no contiene claves privadas de producción; su fallback sin datos no se presenta como éxito de integración autenticada. Se comprueba por separado la API pública real y su representación mediante el fallback de desarrollo ya existente, sin fixtures. La prueba real se ejecutó a 1440/390: rating 5,0 y 85 reseñas observadas en ese momento; cinco autores y textos comparados exactamente contra la API pública, carrusel por teclado y expansión correctos, cero errores y cero POST reales. Son datos observados, no valores introducidos en la aplicación. Capturas `review-google-1440.png` / `review-google-390.png` y JSON `google-live.json` externos. El servidor dev temporal se ejecutó en http://127.0.0.1:3076/empresas/salud y se cerró al terminar; no se utilizó para cifras de rendimiento. Queda disponible el servidor de producción local en 3075. Se restauró únicamente el archivo generado next-env.d.ts al contenido de HEAD tras la prueba, excluyendo su cambio automático de rutas dev del release. La verificación SSR de Google con la configuración real corresponde al preview/producción antes de integrar.

CI remoto, preview, despliegue, permisos efectivos de rollback y métricas de usuarios reales NO ejecutados en esta fase. No hay autorización para publicar.

## Evidencia

Todo el material pesado, scripts de reproducción, JSON y logs se conserva fuera del repo: `/home/_sebastian/VPI_RELEASE_B_FINAL_READINESS_20261102/`. Las evidencias históricas permanecen en el worktree congelado; no se copiaron al candidato. Ver MANIFEST.json para el conjunto publicable exacto.
