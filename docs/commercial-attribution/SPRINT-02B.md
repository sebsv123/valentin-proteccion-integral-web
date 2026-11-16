# VPI 360° · Sprint 02B — recepción y atribución

Base independiente: `main` `5c595141b20a3064c71b2bf2fd4df9d006d5ffd4`.
Referencia: [PR #21](https://github.com/sebsv123/valentin-proteccion-integral-web/pull/21),
SHA `1a182cc4b04e84020814e8b7107e724b672cd015`, todavía Draft;
[modelo precedente](https://github.com/sebsv123/valentin-proteccion-integral-web/blob/1a182cc4b04e84020814e8b7107e724b672cd015/docs/commercial-attribution/SPRINT-02.md).
Inspección: 16-11-2026. No incorpora ni modifica la PR #21 o #16.

**Resultado:** se localizaron los formularios nativos, dos hojas de respuestas
consistentes con ellos y un seguimiento privado existente con ID propio. No hay
un identificador compartido comprobado entre visita web y respuesta. No se ha
conectado producción. El contrato ejecutable local prueba conciliación de fixtures,
no envíos ni atribución real. La propuesta principal mantiene Forms y acepta
atribución declarada; requiere acceso/confirmación del propietario y cambios autorizados.

## A. Inventario comprobado

| Ref. | URL pública / idioma | Lectura y posibilidades | Hoja candidata / límites |
|---|---|---|---|
| F_ES | [Formulario ES](https://docs.google.com/forms/d/e/1FAIpQLSfgJ8nTRnvW8onuF0Mq_1fBKyUb2z-of5a5yIXnxpc39ROv9g/viewform) · español | HTTP 200; documento nativo localizado con Drive autenticado. Su viewform nativo redirige exactamente a este ID público. Email recogido y obligatorio; 10 preguntas de contenido y dos separadores de paso. | S_ES: título correspondiente a la página ES más “respuestas”, misma carpeta; esquema coincidente. Acceso de lectura a metadatos y cabeceras. Destino configurado aún no certificado. |
| F_EN | [Formulario EN](https://docs.google.com/forms/d/e/1FAIpQLSe83dajswVIh-96JvpQpsGayvjZFQdL9KU8S65Hq-4ihEvfhQ/viewform) · inglés | HTTP 200; documento nativo y correspondencia pública confirmados de la misma forma. Email obligatorio; 9 preguntas de contenido y dos separadores de paso. | S_EN: título correspondiente a la página EN más “respuestas”, misma carpeta; esquema coincidente. Mismo límite. |

Los IDs públicos son los segmentos `1FAIp…` de esas URLs; no son IDs de respuesta,
ni los IDs nativos de Drive/API. Las referencias privadas completas se conservan
fuera del repositorio público en el inventario local entregado al responsable.
No se publican URLs/IDs de hojas, respuestas, clientes, importes o convenios privados.

### Estructura pública, contrastada con las cabeceras autenticadas

| Dato (etiquetas resumidas) | Tipo observado | Obligatorio ES / EN |
|---|---|---|
| Email del solicitante | Recogida de email, aparte de las preguntas enumeradas | Sí / Sí |
| Número de familiares asegurados | Elección única; opciones numéricas y otra | Sí / Sí |
| Personas a cubrir y fechas de nacimiento | Texto corto | Sí / Sí |
| Visado/residencia solicitado | Casillas: no lucrativo, nómada digital, UE, familiar, estudios, otra | Sí / Sí |
| Inicio y fin de cobertura | Dos fechas | Sí / Sí |
| Ciudad/código postal | Texto corto | Sí / Sí |
| Emails de adultos adicionales | Texto corto | No / No |
| Confirmación de veracidad | Elección única | Sí / Sí |
| Consentimiento para comunicación Studentpro+ → VPI | Elección única; texto inglés en ambos | Sí / Sí |
| Consentimiento adicional en español para compartir con VPI | Elección única | Sí / No existe |

La primera página muestra email y botón de siguiente. El esquema público incluye
los pasos de contacto/cobertura y confirmación; navegación secuencial por defecto,
sin saltos condicionales encontrados. No se avanzó con datos ficticios ni se envió
ninguna respuesta. El texto fijo de Studentpro+ no acredita el origen de cada lead.
No se modifican consentimientos ni se evalúa aquí su validez jurídica.

Prerrelleno comprobado **solo mediante GET**: el ID existente de la pregunta de
visado se extrajo de la estructura pública (no se inventó); los dos formularios
reconocieron el valor permitido de estudios en `data-response` y marcaron
`data-is-prepopulated=true`. No se añade ese ID al código de redirección. La
prueba no convierte la pregunta de visado en referencia técnica ni confirma envío.
Los valores de un prefill siguen siendo editables; no hay un campo público oculto
e inmutable. No existen preguntas dedicadas de campaña, canal, partner o lead ID
entre las preguntas observadas.

### Acceso: alcance exacto

Se priorizó Drive/Sheets autenticado para localizar recursos y leer cabeceras.
El buscador general de Drive impone un filtro que excluye Forms: su búsqueda vacía
no significaba ausencia de formularios. El listado de la carpeta sí mostró ambos
nativos; metadatos individuales y GET corroboraron la correspondencia pública.
No hay herramienta Forms API/Apps Script disponible. No se extrajeron credenciales
ni se confundió lectura de metadatos con permiso de edición. No se leyeron respuestas.

Falta verificar `linkedSheetId` con Forms API o `getDestinationId()` desde un entorno
autorizado. Las capacidades se apoyan en [Form](https://developers.google.com/workspace/forms/api/reference/rest/v1/forms)
y [FormApp](https://developers.google.com/apps-script/reference/forms/form);
no se afirma haber ejecutado esas APIs. Falta inspeccionar ajustes, integraciones,
triggers y recepción efectiva con el propietario; no se declara que no existan.

## B. Hojas y mapa de recepción

S_ES y S_EN tienen una pestaña visible de respuestas, una fila congelada y 12/11
cabeceras pobladas respectivamente. Se leyeron **solo** fila 1 (A1:R1 / A1:Q1).
Las dimensiones de grid no son conteos de solicitudes ni prueba de actividad.

- A: marca temporal; B: email; C–I: familia, asegurados, visado, fechas,
  localización y emails adicionales; J: veracidad; K: consentimiento; ES añade L.
- No aparece `response_id`, `lead_id`, colaborador, canal o campaña en estas cabeceras.
  Timestamp y contacto no forman una clave primaria estable.
- Esto describe la estructura de recepción, no la cantidad, contenido o entrega
  de solicitudes. No se consultaron filas de clientes.

También se encontró S_TRACK, seguimiento privado de comisiones ya existente:

| Pestaña | Estructura comprobada (solo cabeceras) | Implicación |
|---|---|---|
| FUENTES | Activación, colaborador, URL/ID de origen, ramo/canal, pestaña, última actualización/resultado, registros cerrados | Hay configuración para leer fuentes; no es evidencia de una ejecución satisfactoria. |
| PAGOS | ID único, colaborador, cliente, ramo, prima/comisión, efecto, periodo, archivo/pestaña/fila, estado origen, estado/fecha de pago | Ya existe una identidad privada: no reemplazarla ni crear otra oportunidad hasta comprobar equivalencias. |
| HISTÓRICO_PAGOS | ID único, colaborador, cliente, ramo, importes, periodo, fecha de pago, origen | Hay histórico estructurado; no se leyeron movimientos ni cifras. |
| LOG | Tiempo, fuente, filas leídas/cerradas/creadas/actualizadas, errores | Sugiere importador; código, triggers y ejecuciones no inspeccionados. |

La búsqueda exacta de los IDs de S_ES/S_EN en la columna de fuentes C1:C1000,
acotada por metadatos (1.000 celdas), no encontró coincidencias. No prueba ausencia
de transferencia indirecta, referencias abreviadas o automatizaciones fuera de esa hoja.
No se examinó el contenido del dashboard existente ni se creó otro.

```
Web → /start → F_ES/F_EN                         COMPROBADO (GET y Chromium)
F_ES/F_EN → S_ES/S_EN                            PARCIAL: carpeta/título/esquema
S_ES/S_EN → seguimiento S_TRACK                  NO COMPROBADO; sin referencia directa encontrada
Fuentes privadas → PAGOS/HISTÓRICO/LOG           ESTRUCTURA comprobada; ejecución no comprobada
Respuesta → oportunidad VPI OS → póliza          SIN ACCESO al contrato/API y sin unión comprobada
```

Ausencia comprobada en este código: no hay receptor/importador de respuestas Forms
que haga esa unión. Los endpoints web SMTP existentes no equivalen a integración
Forms. No se concluye que VPI carezca de automatizaciones privadas.

## C. Decisión de arquitectura

| Criterio | A · Forms + preguntas técnicas | B · Referencia antes de Forms | C · Formulario VPI propio |
|---|---|---|---|
| Fiabilidad | Respuesta identificable por API/trigger; origen declarado mientras el prefill sea editable | Insuficiente sin transportar referencia a una pregunta y recuperarla de la respuesta | Puede unir recepción/origen en servidor; códigos públicos aún no autentican al colaborador |
| Esfuerzo | Bajo/medio, condicionado al propietario y consumidor existente | Medio/alto; exige mecanismo compartido, expiración y conciliación | Alto: ampliar campos, operación de recepción, seguridad y migración |
| Operación/coste | Conserva Forms/Workspace; un consumidor autorizado e idempotente | Añade estado sin beneficio si no se resuelve el retorno | Requiere persistencia/recuperación y soporte de disponibilidad |
| Pérdida de solicitudes | Menor con campos técnicos opcionales y piloto | Más pasos y punto de fallo previo | Riesgo durante sustitución y cambio de enlaces de colaboradores |
| Seguridad/datos | Minimizar exportación; proteger claves y permisos; prefill alterable | Referencia enlazable requiere control, retención y tratamiento como dato potencialmente personal | Responsabilidad directa de validación, abuso, acceso y protección de la recepción |
| Mantenimiento | Mapeo por IDs/versiones, recuperación de fallos y propietario del worker | Lo anterior más registro de referencias y prevención de reutilización | Más superficie propia y dependencias de entrega |
| Cientos de colaboradores | Mismo par de Forms y catálogo privado/publicación acotada | No resuelve identidad del colaborador por sí mismo | Escalable técnicamente con operación y registro privado adecuados |
| VPI OS | Importación por `(formId,responseId)` y equivalencias privadas | Solo útil si existe unión demostrada | Integración directa posible, aún no demostrada en el repo |

**Recomendación principal: A, por fases**, con origen declarado y conciliación
comercial antes de atribuir una comisión. Preserva URLs, preguntas y recepción
actual. No recomendar B para “resolver” este corte: registrar redirects no prueba
solicitudes y no existe referencia compartida actual. Si VPI exige atribución
inmutable/autenticada, A sola no cumple; requiere una derivación autenticada y
verificable, o reevaluar C en otro sprint. Un token firmado impediría alterar su
contenido, pero no evitaría copiarlo/reutilizarlo ni demostraría por sí solo el origen.

C podría reutilizar React Hook Form/Zod, `/api/leads`, límites de body, honeypot,
consentimiento obligatorio y envío SMTP con destinatario aceptado, bloqueo local/Preview
y transporte de test. La aceptación SMTP no garantiza lectura, no es almacenamiento
durable ni un ID comercial. En estos endpoints no se encontró idempotencia durable,
cola/reintento ni protección específica de tasa suficiente para certificar una
recepción nueva. Habría que verificar acceso, recuperación, monitorización y spam,
ampliar el contrato de intake y pilotar/mantener enlaces de colaboradores. No se
implementa una sustitución ni se crea infraestructura.

## D. Identidad y conciliación con la operativa existente

| Entidad | Contrato mínimo / evidencia |
|---|---|
| Solicitud recibida | `source_system=google_forms:<formId nativo>`, `source_record_id=responseId` real, `requested_at=createTime`, última versión de envío y `received_at` de ingestión. No usar ID público, timestamp o fila como responseId. |
| Oportunidad | `lead_id`, claves anteriores, `received_at`, `product_code`, `channel_source`, `channel_medium`, `campaign_code`, `partner_code`, `language`, `procedure_code`, `origin_quality`, `status`. Un lead por solicitud comercial, no por clic/persona. |
| Póliza | `policy_id`, `lead_id` explícito, `insurer_code`, `external_policy_ref` privada, `issued_at`, `issued_premium_cents`, `currency`, `premium_period` y referencia privada de evidencia de emisión. |
| Comisión | `commission_id`, `policy_id`, `recognized_at`, `net_commission_cents` firmado, `movement_type`, `source_system`, `external_transaction_id`, moneda y evidencia privada. Reconocida/estimada/cobrada son hechos distintos; conservar estado y evidencia de cobro por separado. |

Estados: recibido → contactado → propuesta → emitido; perdido como alternativa.
La emisión requiere evidencia. Importaciones no restablecen estados ni pisotean
correcciones humanas. Desconocido no se convierte en “directo”. Idioma por formulario;
trámite declarado por respuesta con mapeo revisado, sin asumir que varias casillas
equivalen a una selección única. Conservar solicitado/confirmado por separado si difieren.

[Forms API](https://developers.google.com/workspace/forms/api/reference/rest/v1/forms.responses)
define `formId`, `responseId`, `createTime`, `lastSubmittedTime`: es la clave candidata
real, aún no leída aquí. [El evento de Forms](https://developers.google.com/apps-script/guides/triggers/events#google_forms_events)
expone `e.response`; el de Sheets expone rango/valores, sin ese contrato de responseId.
No generar una clave nueva por cada disparo ni identificar por fila.

Primero revisar cómo se genera el `ID único` ya existente en S_TRACK y si VPI OS
lo reconoce. Mantenerlo como alias canónico si es estable; registrar correspondencias
privadas con `lead_id`/`policy_id`, sin reemplazar registros ni usar cliente/email/teléfono
como unión automática. Si depende de filas o datos personales, migración explícita
y revisión humana antes de importar. Un posible duplicado de cliente/producto no
se fusiona automáticamente: dos respuestas pueden ser dos solicitudes distintas.

Unicidad durable: solicitud `(source_system,source_record_id)`; póliza
`(insurer_code,external_policy_ref)`; comisión `(source_system,external_transaction_id)`.
Conflictos de contenido o revisiones van a conciliación; no insertar otro registro.
Extornos/ajustes son movimientos firmados. Céntimos enteros y moneda/periodo explícitos.
No interpretar comisión prevista como cobrada ni recalcular porcentajes contractuales.

VPI OS/hoja privada será la autoridad de IDs y upsert **solo tras comprobar que
ofrece esas garantías**. Si el consumidor es Apps Script sobre Sheets, requiere
un escritor coordinado, bloqueo y registro persistente; un lock local no protege
otros escritores. Reintentos/catch-up por responseId, watermark solapado y paginación,
sin perder respuestas editadas. No crear otra CRM/DB por defecto ni reutilizar
LOG como almacén de clientes sin aprobación. No añadir columnas en este sprint.

## E. Colaboradores y campañas

Registro privado propuesto: `partner_id` inmutable, `public_code` único sin datos
personales, categoría (estudiantes, despacho, relocation, institución educativa,
otro), estado candidato/activo/suspendido/inactivo, canal permitido, `agreement_ref`
privado opcional, alta/desactivación y alias históricos. Estado de derivación y
vigencia contractual son distintos. Comisión/convenio nunca en catálogo público.

Publicar solo un manifiesto de códigos aprobados/versión, con validación de unicidad
y última versión válida; no consultar una hoja en cada clic ni ampliar el catálogo
a ciegas. Desactivar no reasigna códigos ni borra atribución histórica. Un código
válido no prueba convenio ni autentica una derivación. Campañas se administran con
código, propietario, canal, fechas/estado; no nombres de destinatarios o listas.
Orgánico, email, social, colaborador y directo son valores distintos; falta de UTM
significa desconocido, no directo. PR #21 sigue siendo la base acotada, sin ampliar códigos.

## F. Contrato local y límites de la prueba

`scripts/commercial-reception/contract.ts` es un contrato de aceptación offline,
fuera de `app/` y `lib/`: no red, credenciales, archivos de clientes, endpoint ni
base de datos. Solo acepta `synthetic=true` e IDs `fixture-*`; rechaza IDs reales,
campos personales, entradas de clic y promociones a `origin_quality=verified`.

Seis pruebas comprueban identidad determinista por namespace/formulario/respuesta,
reimportación sin duplicado ni reinicio de estado, copias defensivas, origen unknown
o declared, conflicto de revisión, póliza con referencia de evidencia sintética,
transacciones idempotentes, extorno/ajuste, enteros, signo, huérfanos y overflow.
El flujo sintético produce una oportunidad, una póliza y tres movimientos; comisión
neta de prueba 5.200 céntimos. No es una comisión real ni cobrada.

Esto **no es una PoC completa de atribución**: pasos web/Forms se verifican aparte,
y el fixture empieza en una respuesta hipotéticamente recibida con ID de prueba.
No se copian códigos de un clic al fixture para simular un enlace. No hay adaptador
Google ni consumidor VPI OS; el origen ausente sigue unknown. El mapa en memoria
no garantiza persistencia, concurrencia o reinicio de producción. El hash interno
versionado prueba estabilidad del contrato; la autoridad final de IDs sigue pendiente.

## G. Pruebas y preservación

- Local Node 26.13.1: TypeScript, build y lint PASS. Regresiones existentes del
  workflow: ISFAS, importes, LCP/fuentes, metadata/related, hardening, leads con
  entrega simulada/bloqueada, leadform e imágenes PASS.
- `npm run test:reception-contract`: 6 pruebas PASS; incorporadas a CI.
- `npm run test:reception-boundary`: ambas landings y ocho redirects `/start`,
  destinos públicos intactos, query externa vacía y trámite inválido 404; solo GET.
  Compatible con enlaces de la PR #21, sin integrarla. Incorporado a CI.
- `npm run test:related:rendered`: metadata aprobada intacta.
- Chromium sobre build local: ES/EN landing → guía → trámite → `/start` → Forms
  interceptado; ES → EN → ES compatible. Cero POST, errores JS o peticiones de
  seguimiento sin consentimiento. Base main todavía pierde origen antes de `/start`;
  no atribuirle aquí las correcciones de la PR #21.
- GET públicos de prerrelleno reconocidos. El intento de inspeccionar con Chromium
  la casilla del paso posterior quedó sin acceso a ese paso: requería avanzar con
  email. No se hizo POST ni se rellenó email. No se afirma edición probada en navegador.
- Sin cambios en UI, rutas, formularios, consentimiento, hojas, comisiones o clientes.
  El contrato no usa analítica; una solicitud operativa no depende del consentimiento
  de seguimiento. No se cambia ni se certifica la futura PR #16.
- Preview protegido: no se repiten intentos de autenticación. CI/Preview de esta
  rama se entregarán solo si se publica, sin confundir estado READY con prueba remota.

## H. Plan exacto pendiente de decisión/autorización

1. **Lectura faltante:** propietario confirma `formId/responderUri/linkedSheetId`,
   IDs y tipos de preguntas, destino por idioma, integraciones/triggers y generación
   de `ID único`. Usar Forms API de lectura o un entorno del propietario; no ejecutar
   código remoto ni pedir credenciales en el chat. Identificar contrato/API y autoridad de VPI OS.
2. **Decisión:** aceptar atribución declarada en A o exigir identidad verificada de
   derivación. En ningún caso liquidar automáticamente por un prefill editable.
3. **Autorizar recursos de prueba:** dos formularios y hojas de prueba sin respuestas
   ni datos reales, creados por propietario o con autorización específica. Validar
   envío en ese entorno, responseId, mapping, recuperación y reimportación; cero
   modificación de recursos actuales. No se han creado ni copiado recursos externos.
4. **Solo tras piloto y nueva autorización expresa sobre F_ES/F_EN:** añadir al
   final preguntas técnicas opcionales y visibles de partner, source, medium,
   campaign, procedure y versión de esquema, sin reutilizar preguntas/consentimientos
   existentes. Idioma por ID del formulario. Obtener IDs reales y enlaces prefill
   desde el propietario; comprobar que esas preguntas llegan como columnas. Los
   códigos históricos desconocidos se conservan en privado o pasan a revisión,
   sin convertirlos en valores públicos aceptados.
5. **Autorizar receptor/destino privado:** preferir ampliar el consumidor existente
   tras revisar su código, en vez de dos importadores. Un trigger de Forms o lectura
   periódica autenticada recupera responseId y solo metadatos necesarios; primer
   modo dry-run, equivalencias con IDs existentes, exclusión de PII en logs y prueba
   de unicidad/concurrencia/recuperación. Programación, permisos y retención deben
   aprobarse antes de instalar. Mantener la entrega comercial actual como respaldo.
6. **Cambios web posteriores:** activar mapeo prefill verificado y revisión independiente
   de la PR #21. Sin referencias de persona/visita ni IDs de respuesta en URLs. Si
   faltan mappings, conservar formulario original y marcar origen unknown. Una
   reversión deja campos opcionales y Forms operativo, y desactiva solo el receptor
   nuevo; cualquier borrado/deduplicación requiere decisión humana.

### Campos propuestos para el piloto (no creados)

Todos: texto corto opcional, sección final visible; vacío significa desconocido.
Estos nombres son claves del contrato propuesto, **no IDs `entry.*`**. Etiquetas
bilingües equivalentes, mapeo privado por ID de pregunta real y versión.

| Clave propuesta | Etiqueta ES / EN | Valor permitido en piloto |
|---|---|---|
| `vpi_partner_code` | Código de colaborador / Partner code | Código ya aprobado del catálogo; sin convenio ni importes |
| `vpi_channel_source` | Código de origen / Source code | Fuente aprobada del catálogo de PR #21 |
| `vpi_channel_medium` | Código de canal / Medium code | Medio aprobado del mismo catálogo |
| `vpi_campaign_code` | Código de campaña / Campaign code | Campaña aprobada; vacío si no existe |
| `vpi_procedure_code` | Trámite de navegación / Selected web procedure | `studies`, `residence`, `renewal-family` o vacío; no sustituye al visado declarado |
| `vpi_attribution_schema` | Versión de referencia / Reference version | `v1` o vacío |

No proponer un lead ID público ni un ID aleatorio por clic. El consumidor asigna
identidad privada a la respuesta recibida; conserva los seis campos como declarados.
En sandbox se comprobarán columnas añadidas y scripts que dependan de posiciones
antes de autorizar el cambio equivalente en los dos formularios actuales.

No se ha autorizado aquí modificar formularios, hojas ni crear automatizaciones.
La publicación de la rama/PR solicitada no autoriza esas acciones. Las condiciones
no observables siguen pendientes; este sprint no declara resuelta la atribución
comercial de solicitudes reales.
