# Publicación y rollback · plan no ejecutado

## Candidato aislado

Base `0a876909d5815b831306f6f1ef18f9b9ac917a07`, rama local `codex/salud-release-b-final-readiness-20261102`. Main incluye Release A (`d1b3d3a702dd996021f423a5603005610f2cf44f`); su árbol coincide con ese commit. El patch se aplicó a un worktree nuevo desde origin/main, sin conflictos. No se copiaron archivos antiguos de A ni sus correcciones se reaplicaron.

32 archivos fuente/pruebas/recursos, más los documentos mínimos de esta carpeta. Consultar FILE_AUDIT.md y MANIFEST.json. Se excluyen el módulo híbrido inerte, sus dos referencias y los ocho informes históricos del patch original. No se incluyen capturas, trazas, informes HTML/JSON Lighthouse, experimentos, node_modules o builds. Las nueve fuentes y las dos licencias OFL sí se incluyen.

Sin dependencias nuevas, lockfile modificado, secretos, variables de entorno, configuración Vercel ni cambios de backend. No se han creado commits, push, PR, preview, merge o despliegue.

## Puertas antes de integrar

1. Obtener autorización expresa del usuario para publicar este conjunto concreto. El trabajo presente solo autoriza preparación local.
2. Fetch y verificar de nuevo main y producción. Si avanzan, incorporar de forma segura sobre una base limpia y repetir pruebas afectadas. Conservar ambos worktrees anteriores.
3. Verificar hashes/manifiesto y diff, incluidos los binarios/licencias. Añadir únicamente rutas explícitas del manifiesto, nunca git add . indiscriminadamente. Crear commit aislado y push a una rama de trabajo; abrir PR a main.
4. Esperar CI GitHub completamente verde para el SHA exacto: instalación, TypeScript, lint, ISFAS, importes, entrega CSS/fuentes, contrato negativo, related, hardening, leads, build y contrato servido de Extranjeros. No saltar checks ni protecciones. El CI local no sustituye al remoto.
5. Preview del SHA validado mediante el procedimiento habitual. Comprobar HTTP/2/CDN, fuentes, caché y Google real con configuración existente, sin copiar secretos al entorno local. Cinco mediciones por variante equivalentes, cold cache y perfil documentado. No comparar HTTP/1 local con producción como si fueran el mismo escenario.
6. Regresión visual de Hero y nueve estados, Estudio y ambos contextos sanitarios, simulador, formulario interceptado sin leads, cookies, Aurora y cuatro rutas. Revisar CLS durante carga y navegación SPA. Si aparece regresión, detener.
7. Resolver el deployment sano actual y confirmar permisos/mecanismo de rollback antes de integrar. Integrar por el procedimiento normal del repositorio, sin push directo o bypass. Confirmar producción READY para el SHA validado y aliases públicos correctos.

## Referencia de rollback verificada en esta revisión

- Deployment `dpl_GkV7Xp2yEcsf5FdJpzWh3iX6Etde`, target production, READY.
- SHA `0a876909d5815b831306f6f1ef18f9b9ac917a07`.
- URL inmutable `https://valentin-proteccion-integral-gcwncxo47-sebsv123s-projects.vercel.app`.
- Proyecto `prj_znwM3Z2Lpq6BXqHfdFusgFzINYct`.
- Alias `valentinproteccionintegral.com`, www y aliases del proyecto.

Se consultaron metadatos de Vercel en lectura. El rollback NO se ejecutó ni se probaron permisos de mutación. Revalidar referencia/disponibilidad antes de publicar. Restaurar el deployment sano mediante el mecanismo oficial de Vercel (por ejemplo `vercel rollback <URL-inmutable-verificada>` en el proyecto correcto), nunca reset/force-push. Si no está disponible, no publicar.

## Comprobación posterior y activación de rollback

En la URL pública verificar HTTPS/200, SHA y deployment, carga de fuentes/fotos/Valentín, ausencia de errores críticos e hidratación, Hero y comparador, Estudio, Google auténtico, importes 65,50/65.50 e inválidos, cookies con foco/contraste, Aurora sin bucle, formulario disponible sin envío real. Revisar Home, Empresas y Extranjeros; 1440/1024/768/390; cinco muestras de laboratorio públicas con dispersión.

Ante regresión grave atribuible al release en carga, navegación, leads, cálculo o recursos esenciales: registrar evidencia, restaurar deployment sano, comprobar alias público y versión anterior tras recarga, repetir comprobaciones esenciales y comunicar resultado. La rama puede conservar el commit para investigar posteriormente. No introducir parches improvisados durante rollback.

El LCP sigue pendiente como objetivo, aunque se autorice publicar una mejora incremental. No anunciar un LCP público de 2,5 s ni resultados de campo a partir del laboratorio local.
