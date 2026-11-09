# Exposición y mitigaciones

Base: main 811acdb5f2f00c92f975b47589c23254fc54e22a. No se enviaron exploits, imágenes manipuladas ni solicitudes maliciosas a producción. No hay evidencia de ataque o explotación real observada contra VPI.

| Aviso | Paquete afectado en main | Alcanzabilidad y condiciones | Corrección de la rama |
|---|---|---|---|
| GHSA-2464-fhr4-w9xw | Next 16.1.6 | Image Optimization y decodificación SVG/libvips/librsvg en Linux glibc. La configuración de rechazo SVG no excluye por sí misma bypasses anteriores. | Next 16.4.5 + sharp 0.35.5 y librsvg 2.63.2 cargado |
| GHSA-2xp9-vwfh-vxw4 | Next 16.1.6 / sharp 0.34.5 | Entrada AVIF hacia libheif. No hay archivos .avif en public, pero el procesamiento de imágenes y orígenes externos existe. | Next parcheado; libheif 1.23.5 cargado; mitigación Vercel AVIF documentada separadamente |
| GHSA-673q-mjm6-r5xr | Next 16.1.6 | Requiere Cache Components y use cache que devuelva múltiples typed arrays. No se hallan use cache ni cacheComponents en la app. | Framework actualizado igualmente, sin habilitar Cache Components |
| GHSA-wq5f-xc86-pv6w | sharp 0.34.5 | Decodificar SVG con librsvg vulnerable y condiciones específicas del runtime; posible RCE en Linux glibc. | sharp 0.35.5 y librsvg 2.63.2 verificados |

## Código real inspeccionado

Next Image está activo. images.formats conserva image/avif y image/webp; son formatos de **salida**, no una prueba de input AVIF controlado por un atacante. remotePatterns conserva https://images.pexels.com/photos/**. No se cambia calidad, anchuras, TTL, fuentes, Hero ni estrategia de imágenes para silenciar alertas. La app usa SVG legítimos como isotipo, banderas y mapa; se entregan directamente. Se probó su entrega y un rechazo benigno por /_next/image en local/Preview. No se declaró el rechazo de un SVG benigno como prueba suficiente contra todos los bypasses.

No se hallan llamadas directas a sharp en app/components/lib, next/og, ImageResponse, Server Actions con use server o Cache Components. El pipeline potencial principal es el optimizador de Next, no un endpoint de upload nuevo. Hay cuatro archivos SVG y ningún AVIF fuente en public. Se probó el encoding/decoding benigno de SVG, WebP y AVIF con la biblioteca real corregida.

## Diferencias entre local y Vercel

Local: next start ejecuta el optimizador con el sharp resuelto y permite observar sharp.versions. La prueba CI exige la versión mínima de Next, sharp, librsvg y libheif, y realiza conversiones benignas.

Vercel: Next Image utiliza un servicio central gestionado con caché. La [documentación del servicio](https://vercel.com/docs/image-optimization) describe validación de patrones y respuestas HIT/MISS/STALE. Esas cabeceras y tipos de respuesta se registran al validar Preview; no revelan su binario privado.

**Mitigación confirmada documentalmente:** [Vercel publicó la desactivación central del procesamiento de entrada AVIF](https://vercel.com/blog/reproducing-disclosing-and-fixing-the-libheif-vulnerability-with-hacktron-and-the-maintainers), aplicada en agosto de 2026. Esto protege ese vector en el servicio central; no equivale a parchear paquetes locales ni todos los avisos SVG o de framework.

**No confirmado por esta investigación:** versión exacta de librsvg/libheif en el servicio privado, ni una exención general de SVG para este proyecto. No se asume protección WAF universal: el [boletín de mayo](https://vercel.com/changelog/next-js-may-2026-security-release) indica que varios fixes no se bloquean fiablemente mediante WAF. La aprobación se apoya en actualizar los paquetes de la app, pruebas de bibliotecas y pipeline legítimo; no en una supuesta inmunidad de Vercel.

Se mantienen separados: paquete vulnerable; código potencialmente alcanzable; mitigación de plataforma publicada; riesgo residual de servicio gestionado; explotación observada (ninguna acreditada). READY no prueba seguridad. No se ha solicitado ni aplicado configuración de terceros.

Fuentes primarias: [Next octubre](https://nextjs.org/blog/nextjs-security-update-october-14-2026), [avisos Next](https://github.com/vercel/next.js/security/advisories), [avisos sharp](https://github.com/lovell/sharp/security/advisories).
