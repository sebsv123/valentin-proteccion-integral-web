# VPI × Blueprint — revisión visual y editorial

> Informe histórico de preparación. La autorización y el estado de publicación actuales se documentan en [RELEASE.md](RELEASE.md). La revisión del formulario ya no es un bloqueo y Forms/Sheets quedan fuera del alcance por instrucción expresa de Sebastián.

Estado: **listo para revisión; publicación no autorizada**. Rama `codex/blueprint-spain-collaboration`, misma PR #25. No merge ni despliegue. La desactivación de despliegues automáticos en `vercel.json` permanece intacta.

## Resultado

La bienvenida condicional usa el logo oficial de Blueprint, «Recommended by Blueprint Spain» y la bienvenida previamente aprobada, en una franja con borde cálido y separación clara. VPI conserva la cabecera, el titular y los CTA principales. El único cambio en la landing es esa bienvenida y sus estilos específicos. La variante sin referral conserva su contenido, diseño y red de colaboradores existentes. No se modifica el formulario, referral, atribución, WhatsApp, rutas canónicas, garantías ni condiciones de producto.

Dos artículos completos en inglés utilizan la ruta editorial existente, Header, Footer, Breadcrumbs, FAQAccordion, enlaces de referral, botones y tipografía globales de VPI. El nuevo componente editorial es de servidor: hero dividido, introducción directa, proceso numerado, índice, texto a anchura de lectura, consejos/advertencias, checklist semántica, FAQ, fuentes y CTA contextual de seguros. Las recomendaciones externas y la FAQ que menciona Blueprint se ocultan con `partner=blueprint`; los enlaces internos de este recorrido conservan el código.

El artículo del FBI cambia el enfoque del borrador: organiza el expediente de residencia y la coordinación de fechas/documentos con el seguro. Añade un registro de tareas y responsables y una comprobación conjunta; no reproduce el tutorial operativo, las tarifas o los plazos de Sophia. Deriva a Blueprint para el servicio de huellas. Las dos guías de referencia se estudiaron por su orden, pasos y consejos; no se reutilizó texto, fotografías ni gráficos.

## URLs previstas y revisión local

| Artículo | Ruta prevista | Captura completa escritorio | Captura completa móvil |
| --- | --- | --- | --- |
| FBI background checks for Spanish residence: plan the whole file | `/en/blog/fbi-background-check-spain` | [Escritorio](screenshots/desktop-fbi-article-full.png) | [Móvil](screenshots/mobile-fbi-article-full.png) |
| Moving from the USA to Spain: your documents & insurance plan | `/en/blog/moving-usa-spain-documents-insurance` | [Escritorio](screenshots/desktop-moving-article-full.png) | [Móvil](screenshots/mobile-moving-article-full.png) |
| Landing Blueprint | `/en/foreigners?partner=blueprint` | [Escritorio](screenshots/desktop-blueprint-landing-full.png) | [Móvil](screenshots/mobile-blueprint-landing-full.png) |
| Landing normal (control) | `/en/foreigners` | [Escritorio](screenshots/desktop-ordinary-landing-full.png) | [Móvil](screenshots/mobile-ordinary-landing-full.png) |

También hay capturas `*-top.png` de las ocho vistas para revisar rápidamente el primer pantallazo.

Para revisar interactivamente en el equipo local, después de `npm run build`:

```bash
VPI_EDITORIAL_PREVIEW=1 npm run start -- --hostname 127.0.0.1 --port 3145
```

Abrir las rutas anteriores bajo `http://127.0.0.1:3145`. La variable es de servidor y deliberadamente no se configura en Vercel ni en archivos de entorno versionados.

## Bloqueo de publicación y SEO preparado

- Sin flag: **404**, incluidos intentos con `?preview=1` y `?partner=blueprint`.
- Con flag y `VERCEL` o `VERCEL_ENV`: **404**. Solo la revisión local puede mostrar el contenido.
- Los borradores permanecen fuera del catálogo, listado del blog, sitemap y parámetros estáticos. No hay enlaces públicos nuevos hacia ellos.
- Preview: `noindex, nofollow, noarchive`, un solo canonical a la futura URL inglesa y ningún hreflang español inventado.
- Título y descripción propios, Open Graph y Twitter con imágenes sociales locales de 1200×630.
- Un `Article` por borrador, con `creativeWorkStatus: Draft`, autor corporativo, fuentes y fecha de revisión. No se inventa `datePublished` ni un revisor individual. No se emite un segundo Article ni un FAQPage duplicado.
- Aprobar requerirá un cambio explícito del catálogo y del estado editorial, revisión de metadatos/datos estructurados con la fecha real y autorización independiente de integración/despliegue. Activar el flag de revisión no publica los artículos en Vercel.

## Contenido y fuentes

Versiones web: [contenido](../../lib/blueprint-editorial-content.ts) y [renderer](../../components/editorial-article.tsx). Los Markdown originales se actualizan como copias revisables del contenido final: [FBI](../editorial-drafts/blueprint/fbi-background-check-spain.md) y [mudanza](../editorial-drafts/blueprint/moving-usa-spain-documents-insurance.md).

Fuentes oficiales enlazadas junto a las afirmaciones: FBI (solicitud y FAQ), Department of State (antecedentes y apostilla federal), Exteriores (traductores y checklist consular concreto). La checklist de Los Ángeles se presenta como ejemplo de su jurisdicción. El acceso directo automatizado a ambas fuentes españolas devolvió 403; se contrastaron sus resultados oficiales indexados. **Requieren comprobación directa antes de publicación**. No se incorporan precios, promesas de plazo, aceptación universal ni nuevas garantías de seguros.

Imágenes, dimensiones, licencia y prompt: [ASSETS.md](ASSETS.md).

## Validación

- `npm run typecheck`, `npm run lint`, `npm run build`: PASS.
- Unitarias: Blueprint (4), contrato de metadatos (6), fuentes globales (4) y seguridad de imágenes (2): PASS.
- Renderizado de producción: Blueprint ES/EN, sus ocho rutas de inicio y diez guías; copy/condiciones comerciales de PR #24; contrato SEO de extranjeros: PASS.
- Nueva prueba `npm run test:blueprint:editorial`, añadida a CI: PASS; comprueba 404 por defecto, bloqueo en Vercel, preview noindex, canonical único, schema Draft, imágenes, enlaces de referral y ausencia del catálogo/sitemap.
- Chromium real 1440×1000 y 390×844: ocho vistas con capturas completas; imágenes visibles durante el recorrido, enlaces internos de ambos artículos, navegación por índice, FAQ con ratón/teclado y conservación del referral. GET locales; los destinos externos y solicitudes de escritura se bloquean. Informe: [visual-QA-results.json](visual-QA-results.json).
- Axe WCAG A/AA y 2.1 A/AA sobre `main` en las ocho vistas. El contraste del CTA se ajustó solo dentro del nuevo renderer. El análisis automático complementa la revisión visual; no equivale a una certificación de accesibilidad de todo el sitio.
- Rendimiento: [performance-QA.json](performance-QA.json). Lighthouse sobre build de producción local, móvil simulado, una ejecución por URL y red externa bloqueada. Son mediciones de laboratorio, sin atribuir resultados a datos de campo.
- Advertencias existentes del build: Cache-Control personalizado, deprecación de Node y ausencia de clave Pexels para artículos anteriores. Las nuevas imágenes son locales y no requieren API.

## Aprobación pendiente

Sebastián: diseño, textos e imágenes de esta entrega. Comprobar directamente las fuentes españolas antes de publicar y mantener la revisión externa del formulario ya documentada en [IMPLEMENTATION.md](IMPLEMENTATION.md). En este encargo no se abre, rellena ni envía el formulario; tampoco se modifican Forms/Sheets, GA4/GTM, contratos o garantías. Integración y producción requieren autorización posterior.

Para reproducir QA visual y de rendimiento sin añadir dependencias al producto:

```bash
npm install --prefix /tmp/vpi-blueprint-qa --no-audit --no-fund playwright @axe-core/playwright lighthouse
# Si Chromium no está instalado: /tmp/vpi-blueprint-qa/node_modules/.bin/playwright install chromium
VPI_QA_MODULES=/tmp/vpi-blueprint-qa VPI_QA_START=1 node scripts/review-blueprint-browser.mjs
VPI_QA_MODULES=/tmp/vpi-blueprint-qa node scripts/measure-blueprint-performance.mjs
```

`VPI_QA_CHROME` permite indicar un ejecutable Chromium existente. Los scripts arrancan y cierran sus propios servidores locales; no usan servicios de producción. Las cuatro mediciones Lighthouse obtuvieron **100/100**, LCP 1,2–1,4 s y CLS 0 bajo las condiciones anteriores.
