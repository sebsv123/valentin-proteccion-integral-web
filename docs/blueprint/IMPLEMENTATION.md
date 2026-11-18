# Blueprint Spain × VPI — revisión de implementación

> Informe histórico de preparación. La autorización y el estado de publicación actuales se documentan en [RELEASE.md](RELEASE.md). La revisión del formulario ya no es un bloqueo y Forms/Sheets quedan fuera del alcance por instrucción expresa de Sebastián.

Estado: PR Draft; sin autorización para integrar, desplegar ni publicar artículos.
Base limpia: `main` / `ad4c017158b14ebed278ac5a4cf4265d2e4f451a`.
Rama: `codex/blueprint-spain-collaboration`.
Comprobaciones: 18 de noviembre de 2026.

La entrega visual y editorial actual se documenta en [EDITORIAL-REVIEW.md](EDITORIAL-REVIEW.md), con capturas completas, URLs previstas, modo local de revisión, SEO, licencias y pruebas.

## Cambios

| Cambio | Motivo | Evidencia |
| --- | --- | --- |
| Variante `/en/foreigners?partner=blueprint` y equivalente ES | Bienvenida discreta y presupuesto por el canal acordado | HTML renderizado, navegación Chromium y capturas |
| Contexto público en CTA, selector, cambio ES/EN y diez guías existentes | Conservar origen en el recorrido de consulta, sin cookies, almacenamiento ni identificadores personales | Pruebas unitarias y de redirección |
| `/start` elige el formulario exclusivo para `blueprint` | No mezclar la primera consulta con contratación o con formularios genéricos | URL pública y consentimiento comprobados en lectura |
| WhatsApp de consulta, cabecera, pie y botón flotante identifica Blueprint | Facilitar identificación por el equipo receptor | Inspección de enlaces; ningún mensaje enviado |
| Recomendaciones editoriales en las guías generales de visado/residencia | Apoyo de traslado y antecedentes de EEUU en contexto, sin directorio | Dos destinos externos comprobados; ocultos con `partner=blueprint` |
| Dos artículos web completos y copias Markdown para revisión | Revisar contenido y diseño antes de publicarlo | Solo preview local explícita; 404 por defecto, fuera del catálogo y sitemap |

La estructura y textos comerciales de la landing se conservan; solo se mejora la bienvenida condicional con el logo oficial de Blueprint. El logo de Blueprint se omite del carrusel en su propio recorrido. La recomendación general y el enlace de huellas se muestran en contenido general, no en el recorrido referido. No se han cambiado los archivos de producto revisados en PR #24 ni las PR #16/#21/#22/#23.

## Formulario exclusivo verificado

[Health Insurance Intake Form — Blueprint Spain](https://docs.google.com/forms/d/e/1FAIpQLSeRH-NPSLCwX5eQKqiW0BKIgByM0BIF-4BtZOp3nNFYCOBffA/viewform)

Se localizó mediante la conexión autenticada de Drive, en el conjunto de recursos de Blueprint. El acceso público de respuesta devuelve HTTP 200. Se contrastó su estructura con las cabeceras de la hoja asociada, sin leer respuestas de clientes. El consentimiento nombra expresamente Blueprint Spain, Valentín Protección Integral y la finalidad de información y presupuesto personalizado. Es distinto de «Blueprint Spain | Health Insurance Documentation Form», que no se utiliza.

Solicita composición familiar, nombres y fechas de nacimiento, tipo de visado/residencia, fechas de cobertura, ciudad/código postal, correo y confirmaciones. No se encontraron cargas de pasaporte, documentos de contratación, datos bancarios ni cuestionario sanitario. Estos datos permanecen en el formulario externo; no se incorporan a URLs, pruebas, eventos ni repositorio. No se modificó ningún formulario, hoja o permiso.

El formulario está en inglés y se conserva también al cambiar la web a español: no hay un formulario exclusivo español verificado ni se deriva al genérico. El equipo de VPI ofrece atención en ambos idiomas.

**Revisión externa pendiente antes de promoción:** la introducción del formulario contiene afirmaciones generales de aceptación migratoria y devolución por cancelación/denegación. Su alcance puede exceder las condiciones particulares del producto. Sebastián debe revisar ese texto con el responsable del formulario y autorizar separadamente cualquier modificación. No se ha copiado esa promesa a la web ni se ha alterado el formulario. El consentimiento también describe una comunicación de Blueprint a VPI: confirmar que su redacción cubre la entrada directa desde esta landing.

## Qué demuestra la atribución

`blueprint` es un código público de organización; no contiene datos de un cliente. Se acepta únicamente el valor exacto; valores desconocidos, mayúsculas o parámetros repetidos no activan la variante. No se copian UTMs arbitrarias, ni se crean identificadores de solicitud.

El contexto se transporta por URL en la landing ES/EN, las guías de visado y sus CTA a `/start`. No se crea persistencia entre sesiones ni se instrumentan todas las áreas ajenas al recorrido (otros productos, blog, etc.). Salir de este recorrido y regresar sin el parámetro no conserva el origen; no se presenta como atribución global del sitio.

El formulario exclusivo identifica el canal de recepción. **Una redirección no acredita una respuesta enviada**. No se han inventado campos `entry.*`, claves compartidas ni conversiones completas. No se transmite el trámite seleccionado a una pregunta de Forms: permanece en la ruta interna; el formulario pregunta el procedimiento al solicitante. No se afirma que el código pruebe quién recomendó a una persona ni se vincula una respuesta con una visita individual. Identificación de respuestas, deduplicación y conciliación comercial siguen fuera de esta PR.

## Artículos para revisión

- [How to Get an FBI Background Check in Spain](../editorial-drafts/blueprint/fbi-background-check-spain.md).
- [Moving from the USA to Spain: Essential Documents and Insurance](../editorial-drafts/blueprint/moving-usa-spain-documents-insurance.md).

Las fuentes oficiales se enlazan junto a las afirmaciones: FBI, Department of State, consulado español y buscador oficial de traductores. Las páginas de Blueprint se usan únicamente para comprobar sus servicios, sin repetir precios, plazos ni promesas de aceptación. El acceso completo a la página del consulado de Los Ángeles devolvió 403; se comprobó su extracto indexado oficial y se deja indicada la revisión directa previa a publicación. No se generaliza su checklist a otros consulados. No se incorpora una garantía comercial ampliada de VPI.

## Validación

TypeScript, lint, build y regresiones existentes: ISFAS, importes, LCP/fuentes, metadatos, extranjeros, hardening, leads en modo de prueba sin SMTP real, leadform y seguridad de imágenes. También contratos renderizados de extranjeros y de copy EN de PR #24.

Nuevas pruebas: `npm run test:blueprint` y `npm run test:blueprint:rendered`. Verifican código válido/inválido, ocho rutas de inicio, destinos originales sin referral, diez guías, canonical sin parámetros, separación editorial y mensajes de WhatsApp. CI ejecuta ambas.

Chromium: escritorio 1440×1000 y móvil 390×844; bienvenida, CTA, selector, navegación real a la guía de residencia, cambio ES/EN, ausencia de desbordamiento horizontal y de errores de navegador. Solicitudes no GET y destinos externos bloqueados durante QA local. La comprobación externa del formulario permitió únicamente GET; no se rellenó ni envió.

[Resultados de Chromium](QA-results.json). El clic real del CTA se siguió hasta la petición GET al formulario exclusivo, interceptada antes de salir durante QA local.

Capturas de la compilación local:

- [Escritorio: bienvenida](screenshots/desktop-welcome.png) y [selector](screenshots/desktop-situations.png).
- [Móvil: bienvenida](screenshots/mobile-welcome.png) y [selector](screenshots/mobile-situations.png).

## Aprobaciones pendientes

1. Sebastián: revisión del diff, bienvenida, recomendaciones y artículos.
2. Responsable del formulario: revisar afirmaciones introductorias y alcance del consentimiento; cualquier escritura externa requiere autorización.
3. Aprobar por separado integración/despliegue. `vercel.json` desactiva únicamente el despliegue automático de esta rama; no cambia variables ni ajustes del proyecto ni otras ramas. Debe retirarse en una integración autorizada. No hay Preview desplegado en este encargo.

No se ha hecho merge, despliegue, envío de formularios/mensajes, cambios en Forms/Sheets/GTM/GA4 ni operaciones sobre clientes.
