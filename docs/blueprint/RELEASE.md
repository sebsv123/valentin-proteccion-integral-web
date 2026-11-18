# VPI × Blueprint Spain — publicación autorizada

Sebastián ha aprobado la implementación visual y editorial y ha autorizado expresamente el merge de la PR #25 en `main` y su despliegue en Vercel. Ha confirmado además los textos comerciales del formulario exclusivo: Google Forms y Sheets quedan fuera del alcance y no se abren ni modifican durante esta publicación. Esta autorización sustituye los bloqueos editoriales y del formulario registrados en los informes históricos.

## Publicaciones

Fecha de publicación: **18 de noviembre de 2026**.

- `/en/foreigners?partner=blueprint`: bienvenida, logo, formulario exclusivo, WhatsApp, propagación y canonical conservados.
- `/en/blog/fbi-background-check-spain`.
- `/en/blog/moving-usa-spain-documents-insurance`.

Los dos artículos se registran mediante `blogCatalog`, con renderer editorial y contenido solo inglés. Se retira el acceso limitado por variable de preview, el aviso de borrador y el noindex. Los artículos usan `index, follow`, Article con estado Published y fecha real, metadatos Open Graph/Twitter y las imágenes aprobadas. El listado inglés usa las imágenes locales y presenta primero las publicaciones recientes. El sitemap incluye ambas URLs una sola vez y no crea URLs ni hreflang españoles para contenido sin traducción. El blog mantiene 32 entradas españolas y ahora 31 inglesas (34 entradas totales).

Se retira solo el bloqueo temporal de despliegue de esta rama en `vercel.json`; no se cambian ajustes de proyecto, variables de entorno, condiciones comerciales de PR #24 ni la lógica del referral. La prueba editorial pasa a verificar la publicación real tanto en modo local como con el entorno Vercel de producción.

## Referencias oficiales comprobadas

Las referencias que devolvían 403 se sustituyen por fuentes oficiales verificadas directamente:

1. [Ministerio de Inclusión — Hoja 6, autorización inicial de residencia temporal no lucrativa](https://www.inclusion.gob.es/web/migraciones/w/autorizacion-inicial-de-residencia-temporal-no-lucrativa): requisitos, documentos y oficina competente; secciones «Documentación exigible» y «Procedimiento». Sustituye el ejemplo de la checklist de Los Ángeles. El texto aclara que deben comprobarse las instrucciones de presentación del consulado responsable y no generaliza esa hoja a otros procedimientos.
2. [BOE — Orden AUC/213/2025, artículo 6](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-4519): identifica el registro de traductores e intérpretes jurados y su enlace oficial. Sustituye el buscador como referencia directa; se ajusta el texto a «official guidance on the sworn-translator register». No se afirma haber consultado resultados individuales del buscador bloqueado.

Ambas páginas devolvieron contenido completo accesible en la revisión de publicación. No se añaden plazos, importes ni garantías. Las fuentes FBI/Department of State y los destinos de Blueprint se mantienen.

## Verificación y evidencias

- TypeScript, lint, build y suite de regresiones: Blueprint, metadatos, fuentes/LCP, ISFAS, importes, hardening, leadform y leads en modo de prueba sin entregas reales.
- Contratos renderizados: extranjeros ES/EN, copy comercial de PR #24, referral y publicación editorial.
- Chromium real, escritorio 1440×1000 y móvil 390×844: ocho vistas, imágenes, índice, FAQ con teclado, enlaces internos, ausencia de desbordamiento y auditoría Axe del contenido principal. Los destinos externos y solicitudes de escritura se bloquean; el presupuesto se comprueba mediante respuesta 307 local y Location, sin visitar el formulario.
- Evidencia de la versión publicada: [visual-QA-results.json](visual-QA-results.json) y capturas `desktop/mobile-*-full/top.png` en [screenshots](screenshots).
- El historial de diseño y las mediciones Lighthouse anteriores se conservan en [EDITORIAL-REVIEW.md](EDITORIAL-REVIEW.md); corresponden a la revisión previa. [Procedencia y licencia de imágenes](ASSETS.md).

La PR contiene este informe y las pruebas de publicación. El cierre de la PR y la respuesta final registrarán el SHA de merge, CI, GitGuardian, deployment Vercel y comprobaciones reales en producción. La comprobación de producción usa GET y navegación sin enviar formularios ni mensajes, con Forms/Sheets excluidos.
