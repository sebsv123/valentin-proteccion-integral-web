# npm audit antes/después y riesgo residual

| Estado | Total paquetes | Critical | High | Moderate | Low |
|---|---:|---:|---:|---:|---:|
| Main / antes | 15 | 3 | 9 | 2 | 1 |
| Rama / después | 12 | 2 | 7 | 2 | 1 |

78 advisories únicos antes; 34 después. Se eliminan 44 avisos asociados a Next, sharp y nanoid. No aparecen avisos nuevos. El PostCSS vulnerable anidado de Next se sustituye por 8.5.23; permanece la copia directa dev 8.5.8. npm audit sigue devolviendo 1: **no se declara verde ni repositorio completamente seguro**. El informe refleja avisos conocidos consultados en esta fecha, no todas las vulnerabilidades posibles.

## Paquetes que permanecen

### @babel/core 7.29.0 · low

Compilación; transitiva del árbol React Native/Metro de react-spring, aunque el lock no la marca dev. No se halló importación en app ni chunks servidor. Requiere compilar código controlado por atacante, leer salida y conocer ruta del source map. Solo se compila código revisado del repo; no hay endpoint de compilación. Sin vía remota identificada; riesgo de cadena de suministro/CI permanece.

Parche disponible por aviso; requiere validación de compatibilidad antes de otra actualización:

- [GHSA-4x5r-pxfx-6jf8](https://github.com/advisories/GHSA-4x5r-pxfx-6jf8): primer parche 7.29.6, 8.0.0-rc.6.

### baseline-browser-mapping 2.10.19 · moderate

Herramienta de compatibilidad usada por Next/build; transitiva, instalada prod. Terminación del proceso ante entrada inválida; no se expone CLI/consulta a visitantes. Sin entrada remota hacia ese cálculo observada.

Parche disponible por aviso; requiere validación de compatibilidad antes de otra actualización:

- [GHSA-w5vr-8v7q-w6rv](https://github.com/advisories/GHSA-w5vr-8v7q-w6rv): primer parche 2.11.0.

### browserslist 4.28.2 · high

Transitivia de Babel/compilación; instalada prod, uso de build. Consultas distintas sin límite de caché, o fichero stats no confiable/prototipos que causa excepción. Configuración del repo, no datos de formularios. Sin consulta/stats controlada por visitante observada.

Parche disponible por aviso; requiere validación de compatibilidad antes de otra actualización:

- [GHSA-c83g-rgw3-j3cx](https://github.com/advisories/GHSA-c83g-rgw3-j3cx): primer parche 4.28.7.
- [GHSA-73wf-gq98-2v4g](https://github.com/advisories/GHSA-73wf-gq98-2v4g): primer parche 4.28.7.

### image-size 1.2.1 · high

Transitivia de Metro/React Native; instalada prod, no importada por las rutas VPI. JXL/HEIF/ICNS manipulados que bloquean parsers. No hay carga pública de archivos ni uso directo de ese parser en app. No se demuestra llegada de archivo atacante a image-size; no confundir con sharp de Next.

Parche disponible por aviso; requiere validación de compatibilidad antes de otra actualización:

- [GHSA-5p2g-fcmc-qvqq](https://github.com/advisories/GHSA-5p2g-fcmc-qvqq): primer parche 2.0.3.
- [GHSA-w3rx-r6r6-pgpr](https://github.com/advisories/GHSA-w3rx-r6r6-pgpr): primer parche 2.0.3.

### nodemailer 9.0.1 · high

Directa de producción 9.0.1; send-lead-email activo. Parsers de destinatarios/IDN/comentarios y grandes listas; DNS/TLS compartido; respuestas SMTP maliciosas; resolveContent y headers DKIM. Destino/host/from vienen de configuración; replyTo recibe email validado con límite 180, subject 160, body JSON limitado. No hay adjuntos, URLs/paths de contenido arbitrarios ni DKIM explícito. Entrada real existe en replyTo, por lo que no es exención completa. Dirección fija limita redirección de to, pero parsers y dependencia SMTP merecen parche separado. Sin emails ni ataques de parser reales.

Parche disponible por aviso; requiere validación de compatibilidad antes de otra actualización:

- [GHSA-8m3c-c648-2xjj](https://github.com/advisories/GHSA-8m3c-c648-2xjj): primer parche 9.1.1.
- [GHSA-wmmp-3585-3rmp](https://github.com/advisories/GHSA-wmmp-3585-3rmp): primer parche 9.1.0.
- [GHSA-2x7j-588g-ccc2](https://github.com/advisories/GHSA-2x7j-588g-ccc2): primer parche 9.1.0.
- [GHSA-cc9r-2j5m-2m83](https://github.com/advisories/GHSA-cc9r-2j5m-2m83): primer parche 9.1.0.
- [GHSA-6vj9-mwq6-2f5v](https://github.com/advisories/GHSA-6vj9-mwq6-2f5v): primer parche 10.0.2.
- [GHSA-8vvx-rff5-p5rq](https://github.com/advisories/GHSA-8vvx-rff5-p5rq): primer parche 10.0.2.
- [GHSA-v53p-9fqp-m79j](https://github.com/advisories/GHSA-v53p-9fqp-m79j): primer parche 10.0.6.
- [GHSA-39m8-27wv-hr27](https://github.com/advisories/GHSA-39m8-27wv-hr27): primer parche 10.0.10.
- [GHSA-8c8m-p3m8-cjg8](https://github.com/advisories/GHSA-8c8m-p3m8-cjg8): primer parche 10.1.4.
- [GHSA-m943-m63m-w62w](https://github.com/advisories/GHSA-m943-m63m-w62w): primer parche 10.1.4.
- [GHSA-85x2-q946-cp5h](https://github.com/advisories/GHSA-85x2-q946-cp5h): primer parche 10.1.4.
- [GHSA-4ffr-jq9g-5ffx](https://github.com/advisories/GHSA-4ffr-jq9g-5ffx): primer parche 10.0.13.
- [GHSA-g73g-hqqh-jr95](https://github.com/advisories/GHSA-g73g-hqqh-jr95): primer parche 10.0.13.
- [GHSA-4g23-2xm8-66gc](https://github.com/advisories/GHSA-4g23-2xm8-66gc): primer parche 10.0.10.

### postcss 8.5.8 · high

La copia vulnerable actual es solo la entrada directa dev 8.5.8, usada en build. La copia de producción de Next se corrige. CSS y source maps proceden del repo, no de uploads de visitantes. Se mantiene riesgo de código no confiable en CI.

Parche disponible por aviso; requiere validación de compatibilidad antes de otra actualización:

- [GHSA-qx2v-qp2m-jg93](https://github.com/advisories/GHSA-qx2v-qp2m-jg93): primer parche 8.5.10.
- [GHSA-6g55-p6wh-862q](https://github.com/advisories/GHSA-6g55-p6wh-862q): primer parche 8.5.12.
- [GHSA-fxqj-rqcc-2cmp](https://github.com/advisories/GHSA-fxqj-rqcc-2cmp): primer parche 8.5.23.
- [GHSA-r28c-9q8g-f849](https://github.com/advisories/GHSA-r28c-9q8g-f849): primer parche 8.5.18.

### qs 6.15.1 · moderate

Transitivia producción googleapis → googleapis-common → qs. Objetos manipulados hacia stringify (isBuffer, toString, arrays comma) o claves bracket/comma contra límites del parser. No se llama qs con JSON arbitrario de leads; datos de configuración de Google son server-side. No hay ruta pública a esas opciones demostrada. Mantener límites de JSON y revisar usos de Google al parchear.

Parche disponible por aviso; requiere validación de compatibilidad antes de otra actualización:

- [GHSA-q8mj-m7cp-5q26](https://github.com/advisories/GHSA-q8mj-m7cp-5q26): primer parche 6.15.2.
- [GHSA-x5fp-wj9c-mxmx](https://github.com/advisories/GHSA-x5fp-wj9c-mxmx): primer parche 6.16.0.
- [GHSA-4mjr-xmp4-gh2g](https://github.com/advisories/GHSA-4mjr-xmp4-gh2g): primer parche 6.16.0.
- [GHSA-6pq8-jhm2-2vcw](https://github.com/advisories/GHSA-6pq8-jhm2-2vcw): primer parche 6.16.1.

### shell-quote 1.8.3 · critical

Transitivia instalada prod: react-spring → @react-spring/native → react-native → react-devtools-core → shell-quote. Sin importación app/chunk encontrada. quote con token objeto .op controlado y ejecución posterior en shell; también parse con cadenas adversarias puede costar tiempo cuadrático. No existe deserialización pública a tokens ni shell con esos valores en app. No se demuestra camino explotable en VPI. Sigue siendo paquete crítico instalado; parche aislado viable, no seguro por herencia.

Parche disponible por aviso; requiere validación de compatibilidad antes de otra actualización:

- [GHSA-w7jw-789q-3m8p](https://github.com/advisories/GHSA-w7jw-789q-3m8p): primer parche 1.8.4.
- [GHSA-395f-4hp3-45gv](https://github.com/advisories/GHSA-395f-4hp3-45gv): primer parche 1.9.0.

### source-map-js 1.2.1 · high

Transitivia de PostCSS/Next/Tailwind, uso de herramientas. Source maps indexados con offsets manipulados pueden monopolizar event loop. No se procesan source maps subidos por visitantes. Sin frontera pública observada; riesgo CI/supply chain residual.

Parche disponible por aviso; requiere validación de compatibilidad antes de otra actualización:

- [GHSA-68fv-2mgg-jv7q](https://github.com/advisories/GHSA-68fv-2mgg-jv7q): primer parche 1.2.2.

### swiper 11.2.10 · critical

Directa de producción declarada 11.2.10; sin importaciones app/components/lib o texto en chunks servidor hallados. extendDefaults con objeto atacante, incluyendo __proto__ y condiciones de contaminación de Array.prototype.indexOf. No hay configuración Swiper deserializada de entrada pública. Sin vía de contaminación demostrada; no equivale a eliminar dependencia. Parche mínimo del aviso 12.1.2 requiere migración major revisada.

Parche disponible por aviso; requiere validación de compatibilidad antes de otra actualización:

- [GHSA-hmx5-qpq5-p643](https://github.com/advisories/GHSA-hmx5-qpq5-p643): primer parche 12.1.2.

### ws 7.5.10 · high

Transitivia instalada prod por react-spring/React Native/devtools y webpack-bundle-analyzer dev. No hay servidor WebSocket de app. Peer WS atacante enviando fragmentos/datos pequeños hasta agotar memoria. Devtools/Metro no se levantan en Next start; ANALYZE está desactivado. No se halló socket público ws 7.x de app; no confundir cadenas ws genéricas de chunks con uso real del paquete vulnerable.

Parche disponible por aviso; requiere validación de compatibilidad antes de otra actualización:

- [GHSA-96hv-2xvq-fx4p](https://github.com/advisories/GHSA-96hv-2xvq-fx4p): primer parche 5.2.5, 6.2.4, 7.5.11, 8.21.0.

### zod 3.25.76 · high

Directa de producción 3.25.76; validación de leads expuesta. Grandes arrays/colecciones sin límite con muchos errores de validación. Los schemas de leads usan strings/records y tipos fijos, sin z.array; body limitado antes de Zod a 64KiB. Sin caso de array vulnerable demostrado con este esquema. El endpoint sigue expuesto: límites y nuevas reglas lineales se conservan; migrar a 4.6.7 no es actualización trivial autorizada aquí.

Parche disponible por aviso; requiere validación de compatibilidad antes de otra actualización:

- [GHSA-mrhx-c7xc-m3w5](https://github.com/advisories/GHSA-mrhx-c7xc-m3w5): primer parche 4.6.6.

## Dos critical residuales

Swiper 11.2.10 está declarado en producción pero no se hallan imports o configuración extendDefaults con datos de visitantes. Su contaminación de prototipos requiere las condiciones del advisory; no hay vía remota demostrada en el uso inspeccionado. shell-quote 1.8.3 llega por react-spring → native → react-native → react-devtools-core; no se hallan imports de la app ni un sink que lleve tokens .op de un visitante a shell. No se consideran seguros por ser heredados: quedan como dependencias críticas instaladas, con revisión futura acotada. No se amplía aquí la actualización a Swiper major ni al árbol móvil de react-spring.

Nodemailer y Zod sí tienen fronteras con leads: las direcciones y strings están limitadas, el cuerpo se limita antes de validar y no hay schema array ilimitado en leads. Esto reduce condiciones concretas, no demuestra inmunidad de esas librerías. Se conservan transportes y destinatarios; las pruebas no envían correo.

En los avisos que permanecen todos tienen versión corregida publicada según los datos consultados. No se identifica uno sin parche disponible. Algunos parches implican major o revisar dependencias transitivas; se preparan como mantenimiento separado, sin npm audit fix --force. La rama no añade endpoints, uploads, Server Actions, trackers ni nueva entrada remota hacia esas APIs.
