# V1 Foreigners — Intent → Canonical Page Map

Status: `FAST CITATION TRACK — in development; not deployed`

This registry maps the first Foreigners vertical to existing canonical pages. It does not create new routes or define an AI measurement run.

| Stage | User question / intent | Commercial intent | Canonical page | Evidence available | Gap / action |
|---|---|---|---|---|---|
| REQUIREMENT / ELIGIBILITY | What does Spain officially require for health insurance for my visa/residence route? | High | `/visados/seguro-medico` / `/en/visa-health-insurance` | BOE, UGE and linked official consular pages | New primary-source hub separates national rules from consular instructions. |
| REQUIREMENT / ELIGIBILITY | What insurance is required for a long-stay study authorisation? | High | `/visados/seguro-medico/estudios` / `/en/visa-health-insurance/student-visa` | RD 1155/2024 arts. 34–36; consular pages | State national baseline, then show consulate-specific documentary differences. |
| REQUIREMENT / ELIGIBILITY | What health insurance is required for non-lucrative residence? | High | `/visados/seguro-medico/residencia-no-lucrativa` / `/en/visa-health-insurance/non-lucrative-residence` | RD 1155/2024 arts. 61–64; official checklists | Separate statutory insurance requirement from locally specified policy details. |
| REQUIREMENT / ELIGIBILITY | Does a digital nomad applicant need private health insurance? | High | `/visados/seguro-medico/teletrabajo-internacional` / `/en/visa-health-insurance/digital-nomad` | Law 14/2013; UGE guidance; consular pages | Explain conditional Social Security/insurance routes; do not overstate universal private-insurance requirement. |
| REQUIREMENT / ELIGIBILITY | What does my consulate say about copays, dates and documents? | High | `/visados/seguro-medico/requisitos-consulares` / `/en/visa-health-insurance/consulate-requirements` | Official pages for US, Mexico, Colombia, Peru, Canada, Argentina | Keep field-level “not stated”/“local check required”; verify the competent district. |
| TRANSACTIONAL | Can I ask about arranging cover before arrival or before receiving an NIE? | High | `/extranjeros` / `/en/foreigners` → canonical product page | Existing VPI operational workflow; insurer/product conditions | Treat as an operational question, not a legal claim that NIE is never required. |
| DECISION | Which ASISA modality may suit my study/residence situation? | High | `/seguros/salud-extranjeros` / `/en/insurance/health/foreigners` | ASISA 2026 manual, pp. 66–71; administrative caveat | Product page owns plan selection and contract conditions; visa hub owns official requirements. |
| TRANSACTIONAL | Can I discuss arranging cover before arrival or without an NIE? | High | `/extranjeros` / `/en/foreigners` → product page | Existing first-party workflow and insurer issue conditions | Confirm identification, dates and issue documents with the insurer; do not imply a universal legal exemption. |
| DECISION | What is the difference between Students and Residents? | High | `/seguros/salud-extranjeros` | ASISA 2026 manual, pp. 67–69 | Keep the answer-first comparison product-specific. |
| COMPARISON | How does Residents Premium differ from Residents? | High | `/seguros/salud-extranjeros` | ASISA 2026 manual, pp. 67, 69–71 | State that Residents Premium has waiting periods; do not merge it with Residents. |
| DECISION | What are Health Premium and Residents Premium for? | Medium | `/seguros/salud-extranjeros` | ASISA 2026 manual, pp. 68–69 | Explain intended situation and conditions without price claims. |
| DECISION | What certificate and dates will I receive? | High | `/seguros/salud-extranjeros` | Insurer-issued certificate; product manual | Clarify that the insurer issues the document and the policy controls dates. |
| DECISION | Does the plan have copayments or waiting periods? | High | `/seguros/salud-extranjeros` | ASISA 2026 manual, pp. 67–71 | Name the product before stating the condition. |
| AFTER-SALE / POLICY | What happens if an official visa or residence application is refused? | High | `/seguros/salud-extranjeros` | Conditional refund wording in ASISA manual, pp. 67–68 | Explain that any refund depends on the named product, policy not being in force and official refusal evidence. |
| TRANSACTIONAL | I need help choosing and arranging the insurance | High | `/extranjeros` → `/seguros/salud-extranjeros` | Existing CTA and insurer/product evidence | Make the hub triage the situation and send product decisions to the canonical page. |
| TRANSACTIONAL | I am a student, resident, renewal applicant or family member | High | `/extranjeros` | First-party service flow; product evidence on canonical page | Keep the hub as audience triage, not a duplicate product page. |
| DECISION | What should I confirm with an immigration lawyer or adviser? | Medium | `/extranjeros` | Administrative caveat in current content | Clarify that VPI explains insurance; legal/immigration advice remains separate. |

## Contextual country-page links

| Existing page | Natural context | Destination |
|---|---|---|
| `/internacional/india` and `/en/international/india` | Student route from India to Spain | `/seguros/salud-extranjeros` and `/en/insurance/health/foreigners` |
| `/internacional/peru` and `/en/international/peru` | Mobility, study and residence routes involving Spain | `/seguros/salud-extranjeros` and `/en/insurance/health/foreigners` |
| South Korea and Australia pages | Current content is primarily outbound to those destinations, not a Spain immigration journey | Intentionally excluded |

## Intent families deliberately not split into further pages

- Family-member, renewals, NIE/TIE and pre-arrival questions remain sections on the hub or relevant route; no additional subpages are justified yet.
- The visa-requirements pages explain official legal/consular requirements and do not compete with the insurance product page, which owns product selection and policy terms.
- Country pages remain contextual discovery surfaces and should link to the canonical health page; they do not own separate insurance claims.
- No nationality × visa or city × product pages are justified by the current evidence.

## V1 content decisions

- Product facts are scoped to the named ASISA modality.
- The administration or consulate makes the final immigration decision.
- VPI does not promise visa approval, universal acceptance, a fixed issue time or a universal no-copayment/no-waiting-period policy.
- English follows the same intent ownership and qualification as Spanish on the localized routes.
