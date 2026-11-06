# Auditoría de archivos de Release B

Se revisan los 33 archivos de código/pruebas/recursos del patch congelado. El patch original tiene además ocho documentos: 41 entradas en total, 470189 bytes. No incluye PNG, HTML Lighthouse, trazas, vídeos o los 672 MB de evidencias.

| Archivo | Clasificación | Decisión | Uso / motivo |
|---|---|---|---|
| `.github/workflows/ci.yml` | Prueba automatizada | INCLUIR | Añade test:lcp-delivery; conserva todos los checks anteriores. |
| `.gitignore` | Recurso tipográfico y licencia | INCLUIR | Dos excepciones exactas para distribuir las licencias OFL; sin ampliar otras reglas. |
| `app/globals.css` | Optimización de rendimiento necesaria | INCLUIR | Importa caras locales y excluye documentos/archivos font del escaneo de utilidades. |
| `app/layout.tsx` | Optimización de rendimiento necesaria | INCLUIR | Registro local y hints por ruta; mismo HTML de negocio, familias y variables. |
| `app/root-fonts.css` | Recurso tipográfico y licencia | INCLUIR | 34 caras/rangos, pesos y fallback exactos; nueve URLs locales. |
| `components/business-health-rebuild/coverage-scene-delivery.module.css` | Optimización de rendimiento necesaria | INCLUIR | Consumido por CoverageScene; mantiene estados e imágenes con menos CSS importado. |
| `components/business-health-rebuild/coverage-scene-delivery.tsx` | Optimización de rendimiento necesaria | INCLUIR | CoverageExplorer lo importa desde interactions.tsx; función idéntica a la original. |
| `components/business-health-rebuild/editorial-delivery.module.css` | Optimización de rendimiento necesaria | INCLUIR | experience.tsx importa e; clases editoriales, Hero, foco, tipografía y media queries activas. |
| `components/business-health-rebuild/experience.tsx` | Optimización de rendimiento necesaria | INCLUIR | Consumidor real de subsets y TaxReading; imagen eager con fetchPriority auto; sin cambiar copy/imagen. |
| `components/business-health-rebuild/hybrid-delivery.module.css` | Cambio no relacionado que debe excluirse | EXCLUIR | Import nominal h.hybrid, pero las cuatro variables no tienen consumidores ni los keyframes referencias. Se excluyen archivo, import y token inertes. |
| `components/business-health-rebuild/interactions.tsx` | Optimización de rendimiento necesaria | INCLUIR | Solo imports de styles-delivery y CoverageScene; parser, cálculo, formularios y tracking idénticos. |
| `components/business-health-rebuild/premium-delivery.module.css` | Optimización de rendimiento necesaria | INCLUIR | premium de main y clases de opiniones/rating consumidas por experience/PremiumReviews. |
| `components/business-health-rebuild/premium-reviews.tsx` | Optimización de rendimiento necesaria | INCLUIR | Solo import CSS; datos, autores, textos y carrusel permanecen originales. |
| `components/business-health-rebuild/styles-delivery.module.css` | Optimización de rendimiento necesaria | INCLUIR | Clases s de página, comparador, simulador y formulario; subconjunto con declaraciones originales. |
| `components/business-health-rebuild/tax-reading-delivery.module.css` | Optimización de rendimiento necesaria | INCLUIR | TaxReading aplica a.taxReading en la divulgación fiscal; evita traer brand-art completo. |
| `components/business-health-rebuild/tax-reading-delivery.tsx` | Optimización de rendimiento necesaria | INCLUIR | Import directo usado en experience.tsx para empresa/autónomo; función original intacta. |
| `components/route-font-preloads.tsx` | Optimización de rendimiento necesaria | INCLUIR | RootLayout lo renderiza en head; preload SSR de Montserrat low solo en Salud y dos hints fuera. |
| `lib/root-fonts.ts` | Optimización de rendimiento necesaria | INCLUIR | URLs y política por pathname consumidas por RouteFontPreloads y pruebas. |
| `package.json` | Prueba automatizada | INCLUIR | Dos scripts; dependencias, lockfile y scripts de Release A conservados. |
| `public/static/fonts/vpi-global/14e23f9b59180572-s.9c448f3c.woff2` | Recurso tipográfico y licencia | INCLUIR | Binario auténtico, hash contrastado con main; referenciado por @font-face y su rango Unicode (no solo primera pantalla). |
| `public/static/fonts/vpi-global/2a65768255d6b625-s.p.d19752fb.woff2` | Recurso tipográfico y licencia | INCLUIR | Binario auténtico, hash contrastado con main; referenciado por @font-face y su rango Unicode (no solo primera pantalla). |
| `public/static/fonts/vpi-global/2b402d8aebffd579-s.ec7e94a5.woff2` | Recurso tipográfico y licencia | INCLUIR | Binario auténtico, hash contrastado con main; referenciado por @font-face y su rango Unicode (no solo primera pantalla). |
| `public/static/fonts/vpi-global/44fac91e6f2d2b1b-s.0a39a854.woff2` | Recurso tipográfico y licencia | INCLUIR | Binario auténtico, hash contrastado con main; referenciado por @font-face y su rango Unicode (no solo primera pantalla). |
| `public/static/fonts/vpi-global/65c558afe41e89d6-s.e2c8389a.woff2` | Recurso tipográfico y licencia | INCLUIR | Binario auténtico, hash contrastado con main; referenciado por @font-face y su rango Unicode (no solo primera pantalla). |
| `public/static/fonts/vpi-global/8298327da6d5bcce-s.fb2d5852.woff2` | Recurso tipográfico y licencia | INCLUIR | Binario auténtico, hash contrastado con main; referenciado por @font-face y su rango Unicode (no solo primera pantalla). |
| `public/static/fonts/vpi-global/ASSET_MANIFEST.json` | Recurso tipográfico y licencia | INCLUIR | Manifiesto de origen, SHA256, caras/métricas y licencias, leído por las pruebas. |
| `public/static/fonts/vpi-global/Montserrat-OFL.txt` | Recurso tipográfico y licencia | INCLUIR | Copyright y SIL Open Font License 1.1 necesarios para redistribución; presentes y no ignorados. |
| `public/static/fonts/vpi-global/Playfair-Display-OFL.txt` | Recurso tipográfico y licencia | INCLUIR | Copyright y SIL Open Font License 1.1 necesarios para redistribución; presentes y no ignorados. |
| `public/static/fonts/vpi-global/a88409fdd7dc121c-s.62b55a98.woff2` | Recurso tipográfico y licencia | INCLUIR | Binario auténtico, hash contrastado con main; referenciado por @font-face y su rango Unicode (no solo primera pantalla). |
| `public/static/fonts/vpi-global/b49b0d9b851e4899-s.4f3fa681.woff2` | Recurso tipográfico y licencia | INCLUIR | Binario auténtico, hash contrastado con main; referenciado por @font-face y su rango Unicode (no solo primera pantalla). |
| `public/static/fonts/vpi-global/e8f2fbee2754df70-s.p.9b7a96b4.woff2` | Recurso tipográfico y licencia | INCLUIR | Binario auténtico, hash contrastado con main; referenciado por @font-face y su rango Unicode (no solo primera pantalla). |
| `scripts/business-health-delivery.test.ts` | Prueba automatizada | INCLUIR | CI valida declaraciones/media y dos funciones; se elimina solo el contrato del archivo excluido. |
| `scripts/root-font-assets.test.ts` | Prueba automatizada | INCLUIR | CI valida bytes, 34 caras/métricas, Unicode y prioridad por ruta. |

## Editorial frente a hybrid

editorial-delivery es parte real del Hero y sus media queries. No es un archivo sobrante ni se recupera una composición histórica. Se conserva.

hybrid-delivery solo mantiene cuatro variables sin var(--hybrid-...) consumidores y dos keyframes sin uso. El token h.hybrid es nominal y no activa otros estilos: CSS Modules los acota a su módulo. Se retira únicamente de la copia aislada. El archivo congelado y todos los prototipos permanecen intactos. No se cambia ninguna composición.

## Documentación y evidencias

Los ocho MD históricos pertenecen a la revisión anterior y se conservan allí; no se copian al candidato limpio ni se proponen para el commit definitivo. Esta entrega los sustituye por el informe ejecutivo, esta auditoría, revisión de mediciones, validación y plan de release. Las evidencias nuevas se guardan fuera del worktree, en /home/_sebastian/VPI_RELEASE_B_FINAL_READINESS_20261102/.

Las fuentes no latinas no se excluyen por no descargarse en la primera pantalla: forman parte de las caras/rangos originales que se preservan en todas las rutas. OFL y copyright acompañan todos los binarios.
