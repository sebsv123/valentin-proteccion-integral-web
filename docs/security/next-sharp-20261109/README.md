# Seguridad Next.js / sharp · 9 de noviembre de 2026

Corrección aislada desde main 811acdb: Next 16.4.5, sharp 0.35.5 y analyzer 16.4.5, con React/next-intl conservados. Recomendación local: **APTA CON LIMITACIONES EXPLÍCITAS**, sujeta a CI/Preview del SHA final y aprobación independiente. No se declara el repositorio completamente seguro.

- [Versiones y dependencias](VERSIONS.md), [delta del lock](DEPENDENCY_DELTA.json).
- [Exposición, avisos y mitigaciones Vercel](EXPOSURE.md).
- [Audit antes/después y riesgos residuales](AUDIT.md), [delta](AUDIT_DELTA.json).
- [CI, regresión visual y rendimiento](VALIDATION.md), [CI local](CI_LOCAL.json).
- [Plan de integración y rollback](PLAN_ROLLBACK.md).

Los cuatro avisos priorizados se cubren con versiones corregidas y decodificadores reales verificados. npm audit baja de 15 paquetes/3 critical a 12/2: Swiper y shell-quote siguen críticos sin vía remota demostrada en el uso inspeccionado. No se los exime por herencia. Se documenta además el fallo heredado del analizador Webpack/ISFAS; producción usa Turbopack y pasa.

Las capturas y registros pesados, las matrices completas y resultados de Preview se conservan en el paquete de entrega local y en la descripción/checks de PR. Este documento no afirma un resultado remoto antes de ejecutarlo. No se publican secretos, rutas personales o datos de clientes.

Sin merge, producción, cambios en #16/#17, leads, emails, WhatsApp reales, eventos comerciales o pruebas ofensivas.
