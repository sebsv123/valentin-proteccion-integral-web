# Validación y límites

Los doce comandos npm run de CI local pasan, junto a npm ls next sharp, npm ls --depth=0 y git diff --check. CI_LOCAL.json registra resultados y tiempos. Hay dos pruebas nuevas: mínimos de framework/decodificadores reales y conversiones benignas SVG → PNG → WebP/AVIF → píxeles. Se conserva todo el CI anterior: ISFAS, dinero, LCP/fonts, contratos metadata negativos/renderizados, hardening/Google Reviews, límites y seguridad/duplicados de leads. No se desactivan pruebas. npm audit devuelve 1 por los riesgos residuales descritos.

## Compatibilidad diagnosticada

El primer build de 16.4.5 rechazó cssChunking strict con Turbopack. La validación nueva de Next permite strict solo con Webpack. next.config.ts conserva el default true de Turbopack y strict en Webpack según el compilador. No cambia archivos CSS, fuentes, Hero o comparador; optimizeCss y optimizePackageImports se mantienen. El siguiente build Turbopack de producción pasa. Se conserva el aviso de Cache-Control heredado, sin modificar routing por una advertencia.

El build regenera next-env.d.ts para incorporar root-params.d.ts: cambio de tipos generado por Next, no cambio de rutas. No hay fetch de Google Fonts en build; se conservan los assets locales aprobados y sus pruebas. El primer npm ci en este equipo intentó usar un libvips global: se repitió con SHARP_IGNORE_GLOBAL_LIBVIPS=1 para utilizar los binarios revisados, como en las validaciones locales anteriores. No se añaden node-gyp ni compiladores al producto.

El analizador opcional se probó en copia aislada con Webpack y openAnalyzer false solo en el harness para evitar abrir ventanas. Emite informes, pero el build Webpack falla por el selector global no puro de ISFAS. Se reprodujo el mismo error en main con Next 16.1.6; es heredado. No se corrige ISFAS ni se afirma compatibilidad Webpack verde. El build de entrega usa Turbopack y sí pasa; @next/bundle-analyzer sigue siendo opcional y no genera su informe en ese compilador.

## Navegador, diseño y funcionamiento

Se verificaron 14 rutas: Home, Extranjeros ES/EN, Salud particular, Salud Pymes ES/EN, Empresas, Dental, Contacto ES/EN, Boadilla, Opiniones, Perú con SVG y Cookies. Son 56 navegaciones por versión (390/1440 y Chromium/Firefox), todas 200 y sin nuevos pageerror, hidratación u overflow local. Metadatos, JSON-LD, textos principales, idioma, familias tipográficas y WhatsApp coinciden con main en las 56 comparaciones. Las solicitudes a proveedores y todos los POST se interceptan; no se abren WhatsApp ni canales comerciales.

Se comprobaron formularios ES/EN con éxito y 503 simulados, pegado internacional, foco inicial, bloqueo de envío, persistencia de rechazo de cookies y los nueve estados reales del comparador (tres modalidades × 390/1024/1440). El harness inicial confundió tabs con radios; se corrigió aria-selected y se conservaron los logs. No fue un defecto del producto ni se relajó la selección esperada. Las reparaciones de consentimiento/LeadForm de #16/#17 no forman parte de esta rama: se conserva el comportamiento de main, incluidos sus hallazgos pendientes.

46 capturas originales por versión: todas mantienen dimensiones; diez son idénticas, incluidos tres recortes financieros. Como comprobación adicional de maquetación, se repitieron 18 capturas de Salud ocultando únicamente img/canvas en el navegador de pruebas (sin cambiar la app): las 18 son idénticas, incluidos los nueve estados del comparador. Esto separa la maquetación de la nueva rasterización. Las diferencias de AVIF se acotan visualmente a fotografías/ilustraciones y otras superficies dinámicas; no se promete igualdad universal de píxeles. Se conserva la imagen Dental externa con 404. Axe conserva contrastes/regiones heredados. Sin Safari, dispositivo físico, lector de pantalla o certificación WCAG completa.

Imágenes legítimas: WebP, PNG, JPEG externo, SVG directo y output AVIF 200, con dimensiones decodificables. Un SVG benigno hacia el optimizador sigue rechazado con 400, sin atribuirle una prueba de resistencia a exploits. No hay input AVIF en public; su encoding/decoding se prueba en memoria con sharp corregido. El output AVIF de muestra cambia de 19.540 a 13.904 bytes al cambiar el encoder, sin tocar calidad ni imágenes. La validación de Preview comprueba por separado el servicio central gestionado.

## Rendimiento básico

Se registraron LCP observado, DOMContentLoaded, load y bytes del documento en navegaciones locales de producción. Es una muestra por ruta/viewport sin throttling; no es Lighthouse, un ensayo estadístico ni certificación Core Web Vitals. Hay variación de caché y red. El simulador conserva píxeles; la comparación básica no muestra un deterioro visual o funcional atribuible a la actualización. No se optimiza LCP en esta tarea.

Los resultados remotos del SHA final, URLs y capturas pesadas se entregan fuera del commit y en la descripción/checks de la PR, una vez exista el Preview. No se almacenan tokens, HAR autenticados o credenciales como evidencia. Un Preview READY no sustituye las pruebas.
