# ISFAS help centre — source and copy review

Reviewed: 2026-09-23. Scope: `/mutualistas/isfas` only. This record supports the short page copy; it is not a substitute for the current ISFAS procedure or the insurer's instructions for an individual case.

| Claim or link | Primary source | Editorial decision |
| --- | --- | --- |
| A1 public network, A2 SegurCaixa Adeslas, A5 ASISA; combined military care | [ISFAS modalities](https://www.defensa.gob.es/isfas/destacados/ASanitaria/) | Show only the three complete modes in cards and link combined modes to ISFAS. |
| Military care has territorial limits | [ISFAS military care](https://www.defensa.gob.es/isfas/destacados/ASanitaria/DetalleAsistencia/SanidadMilitar.html) | Do not imply it is selectable anywhere. |
| Ordinary change is in January, once per year; exceptional cases exist | [ISFAS modalities](https://www.defensa.gob.es/isfas/destacados/ASanitaria/), [ordinary change detail](https://www.defensa.gob.es/isfas/destacados/ASanitaria/DetalleAsistencia/DetalleCordinario.html) | Do not promise an unrestricted switch at another time. |
| Concerted entities for 2025–2026 | [BOE-A-2025-3596](https://www.boe.es/buscar/doc.php?id=BOE-A-2025-3596) | Cite both ASISA and SegurCaixa Adeslas. The BOE also had a one-time 2025 extraordinary window; omit it because it is no longer current. |
| Compulsory affiliation and exceptions | [ISFAS titular list](https://www.defensa.gob.es/isfas/afiliacion/titulares/) | Mention examples only; send detailed eligibility questions to ISFAS. |
| Beneficiary registration, certificates and ordinary change | [ISFAS e-office catalogue](https://sede.isfas.gob.es/sede-web/catalogo) | Link to ISFAS; VPI does not present these as its own services. |
| ASISA doctor search, authorizations, card, emergencies | [ASISA doctor search](https://www.asisa.es/cuadro-medico), [mutualist authorization guide](https://www.asisa.es/mutualistas/mutuas-medicas/informacion/autorizaciones-medicas), [mutualist card guide](https://www.asisa.es/mutualistas/mutuas-medicas/informacion/asegurados), [mutualist emergencies](https://www.asisa.es/mutualistas/mutuas-medicas/informacion/urgencias) | Do not claim a specific prescribed test is free of authorization; show the insurer's current guide. Emergency number displayed: 900 900 118. |
| Adeslas doctor search, digital services and emergencies | [Adeslas ISFAS page](https://www.segurcaixaadeslas.es/mutualidades/isfas), [client services](https://www.segurcaixaadeslas.es/servicios-para-clientes), [app](https://www.segurcaixaadeslas.es/descarga-app-adeslas) | Emergency number displayed: 900 322 237. The page links to its official ISFAS resources. |
| 112 in Spain | [Government emergency number page](https://administracion.gob.es/tu-espacio-europeo/derechos-obligaciones/ciudadanos/asistencia-sanitaria/numeros-urgencia) | Treat as emergency guidance, separate from VPI contact. |
| VPI identity and insurer relationships | `lib/site-config.ts` and `/sobre-nosotros` | Rosa is listed for SegurCaixa Adeslas, Sebastián for ASISA. The site publishes one general VPI number, so the page does not present unverified direct adviser lines. |

Commercial source copy was not used for provider counts, superiority claims, broad coverage promises or blanket authorization rules. ASISA's public pages show different provider counts (40,000 and 50,000 in different pages), so no count is repeated. The 2025 BOE one-time change window is excluded from 2026 guidance.

`academia-combate` is a configured referral example from the brief. Confirm the partner's display name before sharing that URL externally. Additional real partners should be added by explicit slug/name mapping; arbitrary `ref` values must never become analytics labels or WhatsApp text.

The route-specific proxy allows a single configured `ref` and redirects requests with other query parameters to the cleaned URL before global analytics loads. The guide also uses a fixed `page_path` and fixed event names; no medical text is collected or emitted by its own tracking.

Automated link check on 2026-09-23: local routes, ASISA, BOE and the government 112 page returned HTTP 200. The ISFAS e-office loaded with HTTP 200 in Chromium; the API client did not trust its certificate chain. `defensa.gob.es` returned an automated-client block page (HTTP 500) and `segurcaixaadeslas.es` returned a challenge (HTTP 403). Their URLs and content were corroborated through the official indexed pages; a human browser should recheck those destinations before publication.
