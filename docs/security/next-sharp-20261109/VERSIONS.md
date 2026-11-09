# Versiones y alcance

Consulta ejecutada el 2026-11-09T13:25:13.729288+00:00. npm dist-tag latest y release oficial coinciden: **Next.js 16.4.5**, estable publicada el 3 de noviembre de 2026, es la última estable verificada; canary/preview no se seleccionan. No se interpreta «latest» como garantía universal de seguridad futura.

| Componente | Main | Rama de seguridad |
|---|---|---|
| Next.js | 16.1.6 | 16.4.5 exacta |
| sharp | 0.34.5, rango ^0.34.5 | 0.35.5 exacta |
| @next/bundle-analyzer | 16.2.4 | 16.4.5 exacta |
| React / React DOM | 19.2.0 | 19.2.0, sin cambio |
| next-intl resuelto | 4.14.1 | 4.14.1, sin cambio |
| Node de instalación/CI | 24.22.2 local / major 24 remoto | mismo major 24 |
| TypeScript | 5.9.3 | sin cambio |
| librsvg nativo | 2.61.2 | 2.63.2 |
| libheif nativo | 1.20.2 | 1.23.5 |
| libvips nativo | 8.17.3 | 8.18.7 |

Next 16.4.5 admite React ^19 y next-intl instalado admite Next ^16; no se fuerza una migración React. Next requiere sharp ^0.35.5 como dependencia opcional. Aunque la entrada directa de sharp sigue en devDependencies, también se instala por Next en producción: se comprobó npm ci --omit=dev, npm ls next sharp y carga real de sus decodificadores corregidos. Se comprobó npm ci completo reproducible, sin audit fix ni force.

Los cambios del lock abarcan dependencias necesarias de Next/analyzer/sharp: SWC/env/helpers, binarios nativos y libvips, semver de sharp, PostCSS anidado de Next y nanoid. Los nuevos nodos WASM anidados de Tailwind son reubicaciones de las mismas versiones por el nuevo hoisting de emnapi; no se actualizó Tailwind. DEPENDENCY_DELTA.json enumera los 49 cambios de ubicación/versión. No cambian Swiper, shell-quote, Nodemailer, Zod ni otras dependencias directas.

Fuente: [release 16.4.5](https://github.com/vercel/next.js/releases/tag/v16.4.5), registro npm consultado y lockfile. La release añade siete fixes de noviembre, incluido rechazo SVG, además de las correcciones acumuladas de agosto/octubre.
