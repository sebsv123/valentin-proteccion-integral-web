# VPI 360° · Sprint 02 · Atribución comercial

Base: `main` en `5c595141b20a3064c71b2bf2fd4df9d006d5ffd4`. Inspección: 16-11-2026.

Resultado: origen conservado en los enlaces del recorrido acotado hasta `/start`.
**No existe atribución verificable de respuesta recibida, póliza o comisión en el
recorrido Google Forms. Abrir un formulario no es enviar una solicitud.**

## Diagnóstico y evidencia

| Límite | Comportamiento en la base | Resultado del sprint |
|---|---|---|
| Entrada ES/EN → CTA | Los enlaces se generan sin copiar la query. `partner` y UTMs se pierden en el primer clic. | Los CTA de extranjeros y las guías de visados propagan códigos públicos permitidos. |
| Selección de trámite | La ruta distingue estudios, residencia y renovación/familia. | Se conservan las rutas públicas y su selección. No se inventa una selección para CTA genéricos. |
| Página comercial → guía → CTA | Los enlaces de evidencia tampoco conservaban origen. | Evidencias, navegación entre guías y CTA conservan origen. |
| Cambio ES/EN | El selector generaba un enlace sin origen. | Activación del selector con JavaScript conserva los códigos permitidos; el idioma es el de la ruta de destino. |
| `/start` → Google Forms | Las cuatro páginas leen `partner`, pero redirigen sin usarlo. `getForeignersIntakeUrl` ignora explícitamente `situation`. | Continúa el mismo 307 al formulario público de cada idioma. Se documenta el corte: ni partner, ni campaña, ni trámite llegan como respuesta técnica. Fallback filtra partner. |
| Formulario abierto → respuesta | No hay callback de envío, webhook o importador conectado a este recorrido en el repo. | No se emite evento de envío ni se crea lead al abrir. No se consultaron respuestas ni datos de clientes. |
| Respuesta → póliza → comisión | No hay clave de unión ni integración comercial comprobada en este embudo. | Modelo propuesto abajo; integración pendiente. No se tocaron hojas. |

Código inspeccionado: `lib/foreigners-intake.ts`, las cuatro páginas de `/start`,
`app/extranjeros/page.tsx`, `components/visa-health-knowledge-page.tsx`,
`components/extranjeros/foreigners-tracked-link.tsx`, `lib/analytics.ts`,
ambas variantes de `foreigners-partner-analytics`, `components/tracking-scripts.tsx`,
`components/lead-form.tsx`, `app/api/professional-referral/route.ts` y esquemas/envío SMTP.

### UTMs y eventos que realmente existen

- `captureUTMs` guarda `utm_source`, `utm_medium`, `utm_campaign`, `utm_term` y
  `utm_content` en `sessionStorage` (`valentin_utm`) cuando un componente lo llama.
  No es una captura global de entrada y no se llama en el recorrido actual de
  extranjeros hacia Google Forms. No guarda partner, idioma ni trámite. Si recibe
  UTMs parciales, sustituye el objeto anterior completo. Esto no prueba atribución
  de una respuesta externa. No se altera este helper ni el consentimiento en este sprint.
- Los CTA de extranjeros llaman a `trackForeignersPartner`: necesita `window.gtag`.
  No hace push alternativo a dataLayer. Las acciones CTA, WhatsApp y reseñas tienen
  traducción a evento; `section_view`, `email_click` y `dgsfp_click` están en el tipo,
  pero no tienen evento resuelto. La presencia del código no demuestra recepción en GA4.
- `TrackingScripts` carga GTM y los proveedores existentes tras el consentimiento
  `accepted`. GTM necesita además configurar GA4/gtag y sus etiquetas; no se ha
  accedido al contenedor ni se certifica su configuración. La PR #16 sigue separada.
- `trackEvent` de otros componentes ofrece dataLayer y gtag; una etiqueta que lea
  ambos caminos podría duplicar eventos. No se modifica esa configuración externa.
- El formulario profesional existente tiene eventos de inicio, éxito y error de
  su propia API SMTP; un éxito significa aceptación por el transporte, no póliza.
  El endpoint devuelve `messageId`, no un identificador comercial de oportunidad.
  La página actual de extranjeros ofrece mail/WhatsApp en el canal profesional.
- `/gracias` dispara `lead_form_submit` por visita con una guarda de sesión. No
  demuestra una respuesta de Google Forms ni es un callback de estos formularios.
  No se usa como prueba de conversión en este sprint.
- No se añaden eventos, píxeles, proveedores, almacenamiento ni conversiones nuevas.
  No hay acceso a GA4 para confirmar ingestión. Un clic no certifica ni apertura
  completa, ni envío, ni recepción, ni emisión.

### Verificación pública de Google Forms

Se hicieron únicamente GET públicos a los destinos configurados en
`foreignersIntakeForms` (ES y EN). Ambos respondieron HTTP 200; se inspeccionó la
estructura pública `FB_PUBLIC_LOAD_DATA_` de sus preguntas, sin leer respuestas.

Los formularios contienen preguntas de contacto, composición familiar, tipo de
visado/residencia, fechas de cobertura, localización y confirmaciones/consentimientos.
No se encontraron preguntas dedicadas a fuente, canal, campaña, colaborador o ID
interno de lead. La mención fija a Studentpro+ en un consentimiento **no identifica
el colaborador de cada solicitud**. El idioma se conoce por el formulario utilizado,
pero no une por sí solo una visita con una respuesta.

No se reutilizan preguntas personales ni la pregunta de visado como campos técnicos.
No se inventan `entry.*`, no se añaden parámetros arbitrarios al formulario ni se
modifica su estructura. Una UTM en la URL de Google Forms no se convierte por ello
en una columna de respuesta. Tampoco hay evidencia de que un referrer permita
atribución individual. No se ha accedido a edición, respuestas o automatizaciones.

Dependencia externa pendiente: el propietario debe autorizar y verificar un contrato
real de captura e importación, con campos técnicos dedicados si se elige prefill,
IDs de campo comprobados y una clave de respuesta estable. Un prefill editable es
un dato declarado, no prueba inmutable de origen. La vinculación fiable requiere
reconciliación en recepción con una clave aceptada por ambos sistemas. Si no se
puede establecer, conservar `origin_quality=unknown`; nunca rellenar con el último clic.

## Contrato implementado y alcance

`lib/commercial-attribution.ts` define un catálogo revisable, con coincidencia exacta:

- Canal: par `utm_source` + `utm_medium` (no inferir directo/orgánico si faltan).
- Campaña: `utm_campaign`. `vpi-360-sprint-02` es un código disponible para enlaces
  nuevos de este sprint; no implica que haya una campaña activa ni resultados.
- Colaborador: `partner`, códigos de organizaciones públicas del catálogo del sitio.
  Su inclusión no certifica actividad contractual ni autoriza una derivación.
- Idioma y trámite: determinados por las rutas ES/EN y el segmento de `/start`.
  Renovación/familia conserva el código conjunto existente `renewal-family`.

Las UTMs desconocidas, repetidas, libres y los parámetros `utm_term`/`utm_content`
no se trasladan. No se aceptan cadenas solo por tener aspecto de slug: podrían
contener datos personales. Antes de distribuir otros códigos hay que incorporarlos
al catálogo. Las reglas no corrigen datos personales que alguien introduzca por
su cuenta en una URL entrante; el código no los copia a enlaces ni añade eventos.

Ejemplo reproducible, sin datos personales:

```
/extranjeros?utm_source=partner&utm_medium=referral&utm_campaign=vpi-360-sprint-02&partner=student-pro-plus
→ /visados/seguro-medico/estudios?[mismos códigos]
→ /start/estudios?[mismos códigos]
→ formulario ES original (sin atribución técnica en la respuesta)
```

Los valores válidos del destino prevalecen. Se conservan queries y fragmentos propios
del enlace de destino. No se decoran URLs externas, WhatsApp, mailto o anclas locales.
Los enlaces principales de extranjeros/visados están renderizados en servidor,
sin depender de JavaScript para conservar origen. La activación del selector de
idioma depende de JavaScript; copiar su enlace desde el menú contextual o desactivar
JS no garantiza conservación. No se añade persistencia entre sesiones o pestañas.

Alcance: `/extranjeros`, `/en/foreigners`, las diez páginas de guías/tracker de
visados ES/EN y sus enlaces de contenido. Cabecera, pie, resto de páginas comerciales,
formularios internos y salidas por WhatsApp/mail no tienen propagación global nueva.
Salir de este recorrido puede perder origen; no se afirma cobertura universal.
Las páginas que leen `searchParams` pasan a renderizarse por petición para producir
los enlaces correctos. Canonicals, metadata y contenido editorial permanecen estables.

## Modelo comercial mínimo propuesto (sin crear tablas ni modificar hojas)

Una oportunidad representa una solicitud comercial, no una persona ni una visita.
Una persona puede tener varias solicitudes/productos. Los contactos y documentos
personales permanecen en el sistema privado existente; aquí solo se referencia su clave.

| Entidad | Claves y campos mínimos | Regla |
|---|---|---|
| Oportunidad | `lead_id` UUID interno; `source_system`; `source_record_id`; `received_at` UTC; `requested_at` si consta; `product_code`; `channel_source`; `channel_medium`; `campaign_code`; `partner_code`; `language`; `procedure_code`; `origin_quality` (`unknown`, `declared`, `verified`); `status`; `status_updated_at`; `contact_ref` privado opcional | Crear solo al recibir evidencia de solicitud. Único `(source_system, source_record_id)`. Estados: `recibido`, `contactado`, `propuesta`, `emitido`, `perdido`. Ausencia de origen = unknown/null, nunca un origen inventado. |
| Póliza | `policy_id` interno; `lead_id` FK; `insurer_code`; `external_policy_ref` privada; `issued_at`; `product_code`; `issued_premium_cents`; `currency`; `premium_period` | Una oportunidad puede generar varias pólizas. Único `(insurer_code, external_policy_ref)`; acordar tratamiento de suplementos y renovaciones antes de importar. `emitido` requiere evidencia de emisión. |
| Comisión | `commission_id` interno; `policy_id` FK; `source_system`; `external_transaction_id`; `recognized_at`; `period`; `net_commission_cents` firmado; `currency`; `movement_type` | Único `(source_system, external_transaction_id)`. Ajustes/extornos como movimientos firmados; la comisión neta es su suma, no una tasa estimada ni una copia por cada importación. |

Importes en céntimos enteros, nunca float ni formatos locales ambiguos. Distinguir
fecha de solicitud, recepción, emisión y reconocimiento. No sumar primas de periodos
distintos ni comisiones previstas con reconocidas. Conservar `created_at`/`updated_at`
y versión de importación para trazabilidad; las correcciones no crean duplicados.

Integración futura Sheets ↔ VPI OS: mantener los IDs como columnas estables y una
única autoridad para asignarlos. Usar una tabla de correspondencias privada si los
sistemas ya tienen claves. Importaciones con upsert por clave externa; ejecuciones
repetidas deben ser idempotentes. No usar número de fila, timestamp aislado, email,
nombre o teléfono como clave de lead ni como unión automática de venta.

Para Google Forms, usar cuando exista acceso autorizado la clave estable de respuesta
junto con la del formulario (incluir el ID del formulario en el namespace de
`source_system`, por ejemplo `google_forms:<form_id>`); una hoja que solo tenga timestamp/contacto necesitará
una clave persistente asignada una vez al ingerir. `messageId` SMTP puede ser una
referencia de entrega, pero no sustituye a `lead_id`. Para enlazar una venta se requiere
`lead_id` explícito en el proceso privado de emisión o reconciliación humana verificada.
Sin clave común, no se declara atribuida. Ninguno de estos IDs se publica en URLs o
analítica. No se crea un ID de lead al pulsar CTA.

## Validación

- Entorno local: Node 26.13.1; CI del repositorio usa Node 24.
- `npm run typecheck`, `npm run build`, `npm run lint`: PASS local.
- Regresiones CI existentes: ISFAS, importes salud, LCP/fuentes, contrato de metadata,
  related, hardening, leads (modo simulado y bloqueo de envío real), leadform e imágenes: PASS.
- `npm run test:attribution`: 5 pruebas; catálogos, exclusión de valores libres/repetidos,
  navegación ES/EN y trámites, prioridad/fragmentos, destinos externos y Forms intactos.
- `npm run test:attribution:rendered`: producción local; ambas landings y diez guías,
  CTA, pasos por evidencia, los ocho redirects públicos, 404 para trámite inválido,
  entrada sin query y exclusión de datos no permitidos. Solo GET, sin seguir a Google.
- `npm run test:related:rendered`: contrato de metadata previo intacto.
- Chromium local: ES y EN landing → guía → CTA → `/start`; destino externo interceptado
  antes de la petición a Google Forms. Cambio ES → EN → ES conserva códigos. Cero POST,
  cero peticiones a proveedores de analítica sin consentimiento, cero errores JavaScript.
  Herramienta de navegador instalada solo en `/tmp`, sin dependencias de producto nuevas.
- Las dos pruebas nuevas de atribución están incorporadas al workflow de CI existente.

No merge, despliegue productivo, edición de la PR #16, hojas, facturación, datos de
clientes ni dashboard. CI remota y Preview se informan con sus enlaces en la PR.
