# V1 Foreigners · Fast Citation Track measurement checkpoint

Status: prospective repeated-measurement panel. This is not a rewrite of the
historical Z0 prompt registry or baseline.

## Deployment record

- Production SHA: `88debf84a16efa41a313e1c3d35d10a0b18a05ca`
- Previous production SHA: `4dc9ea13dbc4b3b53aa289b7b174fed8328be44c`
- Deployment timestamp: `unknown` — no deployment-platform timestamp was
  observable in the promotion record.
- First confirmed live observation: `2026-09-14T00:09:13+02:00`.
- Live status: the selected pages returned HTTP 200 and the new visa routes,
  sitemap entries, official-source links, canonical/hreflang, and Fast Citation
  wording were observed after promotion.
- Production content and Entity truth are frozen for this observation phase.

The live-observation time is not represented as the deployment time.

## Frozen target URLs

These are the only VPI URLs in scope for this panel. They are canonical
production URLs, not prompt-registry additions.

| Page role | Spanish canonical URL | English canonical URL |
|---|---|---|
| Foreigners audience hub | https://valentinproteccionintegral.com/extranjeros | https://valentinproteccionintegral.com/en/foreigners |
| Foreigners health product | https://valentinproteccionintegral.com/seguros/salud-extranjeros | https://valentinproteccionintegral.com/en/insurance/health/foreigners |
| Visa-health information hub | https://valentinproteccionintegral.com/visados/seguro-medico | https://valentinproteccionintegral.com/en/visa-health-insurance |
| Student visa | https://valentinproteccionintegral.com/visados/seguro-medico/estudios | https://valentinproteccionintegral.com/en/visa-health-insurance/student-visa |
| Non-lucrative residence | https://valentinproteccionintegral.com/visados/seguro-medico/residencia-no-lucrativa | https://valentinproteccionintegral.com/en/visa-health-insurance/non-lucrative-residence |
| Digital nomad / international telework | https://valentinproteccionintegral.com/visados/seguro-medico/teletrabajo-internacional | https://valentinproteccionintegral.com/en/visa-health-insurance/digital-nomad |
| Consulate requirements tracker | https://valentinproteccionintegral.com/visados/seguro-medico/requisitos-consulares | https://valentinproteccionintegral.com/en/visa-health-insurance/consulate-requirements |

## Prospective Fast Citation Track prompt panel

Run each exact prompt on ChatGPT, Google generative surface, Microsoft Copilot,
and Perplexity. The three F12 prompts are copied verbatim from the historical
prompt registry and prior commercial-discovery observation. Their inclusion
here does not alter that registry or turn this panel into a Z0 baseline.

| Panel ID | Intent | Exact prompt | Target VPI URLs |
|---|---|---|---|
| FCT-F12-A | Student provider/help; previously observed F12 variant A | `What companies can help an international student arrange health insurance before moving to Spain?` | `/en/foreigners`; `/seguros/salud-extranjeros` |
| FCT-F12-B | Student provider/help; previously observed F12 variant B | `Which providers help international students set up health insurance before relocating to Spain?` | `/en/foreigners`; `/seguros/salud-extranjeros` |
| FCT-F12-C | Student provider/help; previously observed F12 variant C | `Who can arrange Spanish health cover for a student before they move?` | `/en/foreigners`; `/seguros/salud-extranjeros` |
| FCT-ARRIVAL | Arranging cover before arrival | `Can I arrange health insurance for Spain before I arrive?` | `/extranjeros`; `/en/foreigners`; `/seguros/salud-extranjeros`; `/en/insurance/health/foreigners` |
| FCT-NIE | Student insurance without NIE | `Can I buy Spanish health insurance for a student visa before I have a NIE?` | `/visados/seguro-medico/estudios`; `/en/visa-health-insurance/student-visa`; `/seguros/salud-extranjeros` |
| FCT-CONSULATE | Consulate-specific requirements | `How can I check the health-insurance requirements of the Spanish consulate responsible for my visa application?` | `/visados/seguro-medico/requisitos-consulares`; `/en/visa-health-insurance/consulate-requirements` |
| FCT-DATES | Policy start/end dates | `When should health insurance start and end for a long-stay student visa in Spain?` | `/visados/seguro-medico/estudios`; `/en/visa-health-insurance/student-visa`; consulate tracker pair |
| FCT-REPATRIATION | Repatriation requirement | `Does health insurance for a Spanish student visa need to include repatriation?` | Student visa pair; consulate tracker pair |
| FCT-NLV | Non-lucrative residence insurance | `What health insurance is required for a non-lucrative residence visa in Spain?` | `/visados/seguro-medico/residencia-no-lucrativa`; `/en/visa-health-insurance/non-lucrative-residence`; consulate tracker pair |
| FCT-DNV | Digital-nomad insurance where applicable | `When does a digital nomad applying to live in Spain need private health insurance, and when can Social Security coverage apply?` | `/visados/seguro-medico/teletrabajo-internacional`; `/en/visa-health-insurance/digital-nomad`; consulate tracker pair |

Panel size when executed: `10 prompts × 4 engines = 40 observations`.
Prompt wording and target URLs are frozen for repeated observations. Record an
observation date; do not run automatically on a calendar cadence.

## Observation fields

Record one row per engine × prompt. Keep these independent; do not combine
them into a score.

| Field | Meaning |
|---|---|
| `retrieved` | VPI appears among explicitly surfaced/retrieved candidates or sources. Use `unknown` if the surface does not expose retrieval independently. |
| `mentioned` | Valentín Protección Integral / VPI is named in the answer. |
| `cited` | The answer attributes at least one source to VPI or a VPI page. |
| `recommended` | VPI is explicitly offered as a provider/action option, not merely named. |
| `entity_correct` | The response preserves the approved VPI/person/individual insurer-relationship model. |
| `service_correct` | The response accurately describes the relevant insurance/visa service and its limits. |
| `source_url` | Every visible VPI/source URL cited by the answer; use `none` if explicitly uncited, `unknown` if not observable. |
| `competitors` | Other providers/intermediaries named as alternatives or recommendations; preserve displayed names. |

Suggested row fields: `observation_id`, `panel_id`, `exact_prompt`, `engine`,
`surface`, `observation_timestamp`, `retrieved`, `mentioned`, `cited`,
`recommended`, `entity_correct`, `service_correct`, `source_url`,
`competitors`, `capture_ref`, `notes`.

Use a new independent query/conversation per observation. Preserve literal
responses and capture metadata under the existing capture protocol. Do not
infer retrieval from citation absence, and do not treat a cited URL alone as a
recommendation.

## Before/after experiment record

- Experiment: `FCT-V1-01`
- Hypothesis: the Fast Citation Track pages and early commercial clarification
  increase VPI inclusion/citation for visa-health intents without causing
  brokerage misclassification.
- Treatment deployed: Fast Citation Track, production SHA
  `88debf84a16efa41a313e1c3d35d10a0b18a05ca`.
- Before reference SHA: `4dc9ea13dbc4b3b53aa289b7b174fed8328be44c`.
- Deployment timestamp: `unknown`; see deployment record above.
- Pre-treatment exploratory reference (operator-observed, not a complete
  matched panel): Perplexity included/cited VPI through `/en/foreigners` for 2
  of 3 F12 variants and sometimes called VPI a “specialist broker”; ChatGPT,
  Gemini and Copilot did not include VPI in the equivalent provider query.
  Preserve this as historical context, not as a newly calculated rate.
- Before panel: exploratory F12 observations only; not all 10 prompts were run
  under this frozen protocol.
- After panel: pending; do not populate until the fixed panel is run.
- Decision: pending comparable post-deployment observations.

No causal claim is made from deployment alone. Compare the same prompts,
surfaces, annotation definitions and capture protocol before drawing a
before/after conclusion.
