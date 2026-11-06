# Revisión de rendimiento · evidencia y límites

## Resultado anterior recalculado, no una nueva promesa

Se recalcularon las medianas, mínimo/máximo e IQR desde los JSON crudos del escenario final `image-auto`, cinco muestras por variante y método; coinciden con los informes guardados. Se verificó igualdad de configuración dentro de cada método e integridad de CSS/fuentes/foto antes del LCP. El candidato histórico era de 33 archivos; el candidato definitivo tiene 32 tras excluir únicamente una clase/variables/keyframes sin consumidores. La comprobación puente de ambos se documenta aparte.

LCP/FCP en segundos, TBT en milisegundos; CLS sin unidades. Corchetes = rango de cinco muestras, no intervalo de confianza.

| Método | Métrica | Main actual | B histórico de 33 archivos | Cambio de mediana |
|---|---|---:|---:|---:|
| devtools | LCP | 3.354 [3.330–3.397] | 2.604 [2.515–2.667] | -22.4 % |
| devtools | FCP | 3.354 [3.330–3.397] | 2.604 [2.515–2.667] | -22.4 % |
| devtools | TBT | 301.527 [272.045–377.886] | 301.913 [278.855–375.227] | +0.1 % |
| devtools | CLS | 0.00000 [0.00000–0.00000] | 0.00004 [0.00004–0.00004] | N/A (base cero) |
| simulate | LCP | 5.547 [5.273–5.613] | 5.259 [3.487–5.271] | -5.2 % |
| simulate | FCP | 1.808 [1.807–1.812] | 1.816 [1.813–1.837] | +0.4 % |
| simulate | TBT | 305.403 [99.723–494.755] | 110.500 [78.000–225.606] | -63.8 % |
| simulate | CLS | 0.00000 [0.00000–0.00000] | 0.00004 [0.00004–0.00004] | N/A (base cero) |

CSS transferido durante la navegación: **80.216 → 55.368 bytes**, −31,0 %; seis hojas iniciales pasan a tres. Bytes transferidos incluyen cabeceras/compresión, no equivalen al tamaño del fuente CSS: aproximadamente 531.133 → 378.453 bytes sin compresión. TTFB mediano del insight observado: main 42,0 → B 49,6 ms (+7,6 ms; ruido local sin mejora atribuible). JS solicitado antes del LCP observado: 125.714 → 133.770 bytes (+8.056; +6,4 %), por lo que no se afirma reducir todo el JS inicial. Transferencia total de auditoría, incluyendo prefetch normal: 1.282.961 → 1.254.564 bytes (−2,2 %). Estas fronteras de tiempo no equivalen al total JS de una sesión. Los valores citados pertenecen al escenario histórico. No se afirma que quitar el archivo inerte produzca otra mejora relevante.

La reducción observada del LCP DevTools es 750 ms (−22,4 %); los rangos de esas cinco muestras no se solapan. La simulación Lighthouse mejora 289 ms (−5,2 %). El TBT simulado 305→110 ms tiene alta dispersión: main 99,7–494,8 ms, candidato 78–225,6 ms, con solapamiento. **No demuestra por sí solo una reducción consistente de CPU**: el TBT DevTools permanece prácticamente igual, 301,53→301,91 ms. FCP simulado empeora ~7,3 ms, diferencia pequeña frente a la variabilidad. No utilizar el 64 % de TBT simulado como garantía de producto.

## Condiciones y reproducibilidad

Lighthouse 13.5.0, Chromium 154.0.8037.97, Node 24.22.1; mobile 412×823, DPR 1,75, CPU slowdown 4. RTT 150 ms, request latency 562,5 ms, descarga 1474,56 kbps/subida 675 kbps según perfil Lighthouse. Chrome nuevo, caché de navegador vacía por ejecución; optimizador de imagen del servidor precalentado para ambas variantes. Mismo build de producción, sin dev, métodos `devtools` y `simulate` separados. Ejecución secuencial con orden alternado. Conservar benchmarkIndex y carga del host: mismo perfil no garantiza idéntica velocidad física de CPU.

Las 120 navegaciones válidas anteriores cubren línea base e incrementos controlados; no se repiten. Las navegaciones con errores esenciales de red/Chrome se conservan como inválidas con motivo, no se sustituyen por haber dado una cifra desfavorable. No se excluyen outliers numéricos de muestras válidas. Configuraciones, índices de CPU, logs y trazas están en la evidencia histórica, fuera del candidato publicable.

No comparar causalmente el main público HTTP/2 con el servidor local HTTP/1: CDN, latencia, imágenes/caché y credenciales de Google difieren. Tampoco comparar directamente 2,60 DevTools con 5,26 simulado. No hay CrUX/INP de campo suficiente para esta decisión.

## Elemento real y causa pendiente

El LCP de las veinte muestras finales históricas es el **párrafo introductorio del Hero**, `p.*__lead`, no la fotografía. Rectángulo medido a 412 px: x22/y379, 345×105. No se cambian texto, tamaño, geometría visible o familias. La fotografía sigue eager con idénticos src/sizes/calidad y dimensiones; la prioridad pasa de high a auto por el experimento de contención de recursos, sin ocultarla ni retrasarla por interacción.

En la muestra DevTools candidata cuya LCP coincide con la mediana: TTFB 30,119 ms (**1,16 %**), espera hasta pintar el texto 2.573,567 ms (**98,84 %**). Resource load delay y duration no aplican como fases de una imagen LCP: es texto; las fuentes/CSS sí son dependencias del render. Último CSS finaliza alrededor de 1.929 ms frente a 2.771 en main. Después hay una tarea de ~623 ms (1.956–2.579), incluyendo ~85 ms de estilos y **~495 ms de Layout** a CPU4. Main tiene una tarea equivalente de ~548 ms, estilos ~86 y Layout ~419. Se adelanta la disponibilidad de CSS; no se ha eliminado todo ese coste de layout.

Los cuatro archivos tipográficos de la carga observada siguen sumando 137.472 bytes: la mejora procede de orden y competencia de descarga, no de fingir que ya no se necesitan. Manrope y DM Sans mantienen recursos/configuración; Montserrat y Playfair se sirven localmente con los mismos binarios, pesos, rangos y fallbacks. Salud no precarga la serif no necesaria en su primer viewport y baja la prioridad del hint de Montserrat; otras rutas conservan ambos hints. El CSS global restante y el layout inicial de la página siguen siendo el factor medido que impide llegar a 2,5 s en el escenario original.

## Por qué Lighthouse sigue en ~5,26 s

Se reprodujo el cálculo Lantern con las trazas/red originales y el código instalado de Lighthouse 13.5, sin nuevas navegaciones. Para las muestras cuya LCP simulada es la mediana:

| Variante | Optimista | Pesimista | Promedio Lantern | LCP informado | Diferencia del replay |
|---|---:|---:|---:|---:|---:|
| Main | 5.170,479 ms | 5.923,976 ms | 5.547,2275 ms | 5.547,2275 ms | 0 |
| B histórico | 4.733,561 ms | 5.783,561 ms | 5.258,561 ms | 5.258,561 ms | 0 |

Lantern combina las estimaciones optimista/pesimista del grafo de red y CPU; no es el instante observado del PerformanceObserver. En el candidato, los nodos finales incluyen un chunk JS de prioridad Low (`3d2c93a741436f56.js`) con final simulado 4.686,561/5.736,561 ms, seguido de una RunTask de 47 ms. La rama pesimista incluye más dependencias de layout. Main contiene el mismo chunk y termina más tarde. Esto explica por qué el valor simulado no converge automáticamente a la mejora de CSS observada ni puede descomponerse usando los milisegundos observados del insight como si sumaran 5,26 s.

No se concluye que ese chunk concreto sea culpable causal y pueda eliminarse: su presencia en el grafo exige un experimento posterior selectivo de entrega JS/hidratación y carga del layout, con regresión comercial. **No se implementa ahora**; no se desmontan formularios, Google o navegación para manipular Lighthouse. El replay exacto, nodos/timings y script se guardan en `lantern-replay.json` y `scripts/replay-lantern.mjs` externos.

## Comparación de alcance y beneficio

El ensayo CSS-only anterior mejoraba DevTools ~3,397→3,119 s (−8,2 %); la política inicial de diferir ambas fuentes deterioraba FCP simulado y fue descartada. El conjunto actual conserva el hint UI de Montserrat y obtiene un beneficio mayor sin cambios visibles. No se incluye ese experimento descartado ni se inicia otra ronda de optimización.

**Objetivo 2,5 s no alcanzado en las condiciones originales.** Publicar esta mejora, si se autoriza, sería incremental; debe quedar un seguimiento explícito del LCP y una validación remota equivalente.

## Comprobación puente del candidato definitivo (20 navegaciones nuevas)

Se comparó el candidato congelado de 33 archivos (3065) con el aislado de 32 (3075): cinco pares alternados por método, mismas configuraciones completas dentro de cada método, navegadores fríos y foto AVIF precalentada e idéntica (23.482 bytes, 750×493). No hubo ejecuciones inválidas ni fallos de recursos esenciales. Todas las LCP siguen siendo el mismo párrafo introductorio. No son nuevas optimizaciones.

| Método | Variante | LCP mediana [mín–máx], ms | TBT mediana [mín–máx], ms | CPU benchmark mediana |
|---|---|---:|---:|---:|
| simulate | frozen33 | 4591.9 [3994.5–4596.1] | 32.5 [19.0–46.0] | 3838 |
| simulate | isolated32 | 4590.6 [4367.1–5240.2] | 42.5 [32.0–66.0] | 3708 |
| devtools | frozen33 | 2328.2 [2266.9–2478.4] | 96.2 [78.2–209.8] | 4021 |
| devtools | isolated32 | 2275.9 [2248.8–2380.8] | 62.9 [52.5–251.0] | 3962 |

La diferencia de medianas tras retirar el archivo inerte es pequeña y los rangos se solapan: no se presenta como otra optimización ni como garantía estadística de equivalencia. No se observa regresión material de LCP en estas muestras. La CPU disponible fue distinta de la campaña original (benchmark aproximadamente 3.700–4.000 frente a ~1.880), aunque se mantuviera CPU4; por ello **las cifras absolutas más bajas de esta comprobación no demuestran haber alcanzado el objetivo original de 2,5 s**, ni se mezclan con las medianas de main anteriores. Los valores válidos extremos se conservan, incluido el TBT alto del último par.

En la copia definitiva el CSS inicial medido es 55.247 bytes transferidos y 378.093 sin comprimir, tres hojas; frente a 55.368/378.453 del candidato congelado. La pequeña diferencia se debe a la exclusión inerte y al CSS generado; no justifica afirmar una mejora adicional apreciable. CLS de Salud se mantiene de orden 0,00004. Los JSON/trazas originales de las veinte muestras, perfil y script están en `evidence/bridge/` y `scripts/bridge.py` externos. Se pueden repetir con los dos servidores de producción indicados; no usar el servidor dev de Google para rendimiento.
