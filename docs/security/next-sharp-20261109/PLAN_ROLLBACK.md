# Plan de PR, integración y rollback

Rama independiente security/next-sharp-20261109 desde main 811acdb. Cambios limitados a Next/sharp/analyzer, lockfile, adaptación estrictamente necesaria de configuración y tipos de Next, prueba de seguridad y CI, y esta documentación. No se actualizan paquetes ajenos para borrar avisos; no hay cambios comerciales, legales, páginas o imágenes.

Antes de integrar: revisar riesgos residuales y la validación remota del SHA exacto; aprobar esta PR de seguridad de forma independiente. No merge ni producción están autorizados en esta entrega. Swiper/shell-quote requieren evaluación de riesgo residual por el responsable; no confundir la corrección Next/sharp con npm audit completamente verde.

Solo después de una autorización posterior y de integrar seguridad: actualizar cada rama #16/#17 contra main sin perder sus cambios; resolver package.json y ci.yml conservando test:security-images más test:consent/test:leadform, y los tres pasos de CI cuando correspondan. Repetir instalaciones, TypeScript/build, unidades, rutas, Preview y compuertas de consentimiento/servidor. No integrar las tres juntas ni dar por validado un conjunto todavía inexistente. #16/#17 permanecen intactas en esta entrega.

Rollback ahora: sin merge, cerrar la PR no cambia producción. No se elimina ni resetea ningún trabajo.

Rollback tras una integración futura autorizada: revertir exclusivamente el commit de seguridad o su merge/squash, conservando cambios de otras PR y sus scripts. Restablecer package.json/lockfile como pareja, revisar next-env generado y configuración del compilador de la versión restaurada. npm ci, CI y Preview de la reversión antes de cualquier despliegue autorizado. Volver a 16.1.6/0.34.5 reabre las vulnerabilidades: no ejecutar ese rollback automáticamente por una diferencia cosmética; considerar un forward fix o mitigación revisada. No usar git reset --hard, audit fix --force o un deploy de producción en esta tarea.
