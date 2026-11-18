/** Approved editorial content, published through the existing blog catalogue. */
export type EditorialArticleContent = {
 slug: string; title: string; intro: string; eyebrow: string;
 metaTitle: string; metaDescription: string; image: string; imageAlt: string;
 imageCredit: string; socialImage: string; readTime: string; reviewed: string; published: string;
 summary: string; summaryText: string; process: string[][];
 checklistTitle: string; checklist: string[][];
 sections: {id: string; heading: string; content: string[]}[];
 callouts: Record<number, string[]>; faqs: {q: string; a: string}[]; sources: string[][];
};
export const blueprintEditorialArticles: EditorialArticleContent[] = [
  {
    "slug": "fbi-background-check-spain",
    "intro": "If your Spanish residence procedure requires an FBI Identity History Summary, plan it as one part of a wider document file. Confirm the receiving authority’s checklist first, then coordinate fingerprints, any required apostille and translation, and the separate health-insurance evidence. This guide helps you organise those dependencies while you are in Spain.",
    "sections": [
      {
        "id": "step-1",
        "heading": "First, identify the right document",
        "content": [
          "The FBI calls its personal-record document an **Identity History Summary**. It is different from a local police certificate. Whether you need this document, additional countries’ records or another certificate depends on your particular application and residence history. Use the checklist of the Spanish consulate or immigration authority handling your case. Do not order documents solely because a friend needed them for a different visa.",
          "The [FBI’s official request page](https://www.fbi.gov/how-we-can-help-you/more-fbi-services-and-information/identity-history-summary-checks) explains the available routes: direct online requests, mail and FBI-approved channelers. Check any eligibility restrictions before choosing an intermediary."
        ]
      },
      {
        "id": "step-2",
        "heading": "Arrange fingerprints; keep the request traceable",
        "content": [
          "For a direct electronic request made from outside the United States, the FBI describes mailing a completed fingerprint card with the confirmation-email printout to the address supplied in that confirmation. Registering online does not remove the fingerprint requirement. Follow the instructions issued for your request rather than an address copied from an old article.",
          "Use the FBI’s current card guidance and make sure the identity details match your application. Its [fingerprint FAQs](https://www.fbi.gov/how-we-can-help-you/more-fbi-services-and-information/identity-history-summary-checks/identity-history-summary-checks-faqs) explain card requirements and the importance of legible prints. Poor impressions can create additional work, so ask the technician how they check quality and what happens if a new set is needed.",
          "If you need practical help locally, consider [Blueprint Spain’s Madrid fingerprinting service](https://blueprint-spain.com/madrid-fbi-background-fingerprints). Blueprint is a VPI collaborator offering a private service. Confirm the appointment, identity documents to bring, request method, fees and handling of your documents directly with them. The service provider does not issue the FBI result or decide your Spanish application.",
          "Keep a simple request log: the route selected, confirmation reference, dispatch date, tracking details and the next action. If someone handles a stage for you, agree who receives the result and who organises the following stage. Do not assume a fingerprint appointment includes authentication or translation."
        ]
      },
      {
        "id": "step-3",
        "heading": "Plan authentication separately",
        "content": [
          "Receiving the FBI result does not necessarily finish the document process. The [US Department of State’s criminal-record guidance](https://travel.state.gov/en/international-travel/living-abroad/criminal-records.html) explains that using a background check abroad may require authentication. Its [apostille guidance](https://travel.state.gov/en/replace-certify/authenticate-documents/apostille-certificate.html) distinguishes federal documents from state documents; FBI records belong to the federal route.",
          "Check the receiving authority’s requirements before arranging an apostille. Keep the result, authentication and any later translation together. Ask whether originals or copies are required and avoid replacing the required authentication with an unrelated notarisation."
        ]
      },
      {
        "id": "step-4",
        "heading": "Confirm translation and document freshness",
        "content": [
          "A translation is another distinct task. Where a sworn Spanish translation is required, use Spain’s [official guidance on the sworn-translator register](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-4519) to check the professional’s language and accreditation. Confirm with the receiving office which parts of the document package must be translated.",
          "There is no single document-age rule to assume across every procedure. Work backwards from the current checklist and your appointment, allowing room for fingerprint problems, shipping, authentication and translation. Do not treat a provider’s estimated turnaround as a government deadline or a promise of acceptance.",
          "Use one shared planning calendar, with separate entries for the record request, any authentication, the translator and the insurance start date. If your filing date changes, recheck document freshness and policy conditions rather than assuming everything can move automatically."
        ]
      },
      {
        "id": "step-5",
        "heading": "Keep insurance on its own checklist",
        "content": [
          "Your background check and your health insurance solve different requirements. While organising documents, review VPI’s [non-lucrative residence insurance guide](/en/visa-health-insurance/non-lucrative-residence) for the insurance side. VPI is the commercial brand of exclusive insurance agents, with personal guidance in fluent English and Spanish. We can review available insurance options for your circumstances; the competent authority decides the application.",
          "For an initial conversation, [tell VPI about your insurance needs](/en/foreigners). Do not send fingerprint records or criminal-history documents through an insurance enquiry unless a specific, justified private process has been agreed.",
          "Planning the rest of the move too? Use our [USA-to-Spain document and insurance checklist](/en/blog/moving-usa-spain-documents-insurance) to bring the individual tasks into one working plan."
        ]
      }
    ],
    "title": "FBI background checks for Spanish residence: plan the whole file",
    "eyebrow": "US documents · Spanish residence",
    "metaTitle": "FBI Check for Spanish Residence: Documents & Insurance | VPI",
    "metaDescription": "Plan an FBI background check from Spain alongside apostille, translation and residence health insurance. A practical document checklist, with official sources.",
    "image": "/images/editorial/fingerprint-preparation.webp",
    "imageAlt": "Original editorial illustration of a hand on a fingerprint reader",
    "imageCredit": "Original illustration created for VPI with AI. Conceptual scene; no official documents or endorsement.",
    "readTime": "7 min",
    "summary": "One residence file. Two workstreams.",
    "summaryText": "Prepare the background-check package and the insurance evidence in parallel. Bring them together for a final check against your own authority’s instructions.",
    "process": [
      [
        "Confirm",
        "Procedure & receiving office"
      ],
      [
        "Prepare",
        "Record, authentication & translation"
      ],
      [
        "Coordinate",
        "Insurance evidence & dates"
      ],
      [
        "Review",
        "One consistent submission file"
      ]
    ],
    "checklistTitle": "Your document coordination sheet",
    "checklist": [
      [
        "Receiving office",
        "Save the current checklist and its date. Note the exact certificate requested."
      ],
      [
        "Background-check package",
        "Record the request route, dispatch tracking and any authentication or translation still pending."
      ],
      [
        "Insurance evidence",
        "Check each applicant’s name, cover dates and certificate wording against the relevant requirements."
      ],
      [
        "Final cross-check",
        "Resolve inconsistent names, missing pages and date questions before filing."
      ]
    ],
    "callouts": {
      "0": [
        "tip",
        "Start with the requirement",
        "Ask which record and residence-history period your procedure requires before paying for fingerprints."
      ],
      "2": [
        "warning",
        "A result is only one part of the file",
        "The certificate, authentication and translation are separate tasks. Confirm the required sequence and format with the receiving office."
      ],
      "4": [
        "tip",
        "Share the checklist, not your criminal record",
        "VPI needs your procedure, dates and insurance requirements for an initial enquiry. Keep biometric and criminal-history records out of the insurance form."
      ]
    },
    "faqs": [
      {
        "q": "Should I wait for the FBI result before discussing insurance?",
        "a": "You can review the insurance requirements while the record is being prepared. Before purchase, confirm the proposed cover dates, documentation and written policy conditions. A provider’s processing estimate is not a filing deadline."
      },
      {
        "q": "Can an insurance certificate replace a criminal-record certificate?",
        "a": "No. They address different requirements. Check both against the current instructions for your own procedure and receiving office."
      },
      {
        "q": "Who can help with fingerprints in Madrid?",
        "a": "Blueprint Spain offers a private fingerprinting service. Confirm its current scope, appointments, fees and document handling directly. The FBI issues its result; the Spanish authority decides your application."
      }
    ],
    "sources": [
      [
        "FBI · Identity History Summary requests",
        "https://www.fbi.gov/how-we-can-help-you/more-fbi-services-and-information/identity-history-summary-checks"
      ],
      [
        "FBI · Fingerprint and request FAQs",
        "https://www.fbi.gov/how-we-can-help-you/more-fbi-services-and-information/identity-history-summary-checks/identity-history-summary-checks-faqs"
      ],
      [
        "US Department of State · Criminal records abroad",
        "https://travel.state.gov/en/international-travel/living-abroad/criminal-records.html"
      ],
      [
        "US Department of State · Federal apostilles",
        "https://travel.state.gov/en/replace-certify/authenticate-documents/apostille-certificate.html"
      ],
      [
        "Spain · Sworn-translator register (BOE, Article 6)",
        "https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-4519"
      ]
    ],
    "reviewed": "2026-11-18",
    "socialImage": "/images/editorial/fbi-background-check-spain-social.jpg",
    "published": "2026-11-18"
  },
  {
    "slug": "moving-usa-spain-documents-insurance",
    "intro": "A move to Spain becomes easier to organise when you separate three questions: which immigration route fits your plans, which documents that route requires, and which insurance arrangements suit both your application and your life after arrival. Buying a policy first and checking the paperwork later can leave important questions unanswered.",
    "sections": [
      {
        "id": "step-1",
        "heading": "Start with the procedure and the responsible office",
        "content": [
          "Studying, non-lucrative residence, working and joining family are different processes. Identify the route and the office responsible for your application before paying for certificates or insurance. Your citizenship alone does not determine every requirement; your circumstances and the place where you apply also matter.",
          "For example, the [Spanish Ministry’s non-lucrative residence information sheet](https://www.inclusion.gob.es/web/migraciones/w/autorizacion-inicial-de-residencia-temporal-no-lucrativa) explains that procedure’s requirements and documentation. Use it as a route-specific starting point, then check the current filing instructions of the consular office responsible for your application. It is not a checklist for every American moving to Spain."
        ]
      },
      {
        "id": "step-2",
        "heading": "Build a document plan before collecting everything",
        "content": [
          "Make a working list with the issuing body, required format, authentication, translation and any freshness requirement for each document. Depending on the route, the checklist may include a passport, application forms, evidence of resources or the purpose of your stay, civil-status records, a medical certificate, criminal-record certificates and insurance evidence. Treat this as a planning framework; your competent authority’s list controls what you submit.",
          "Keep a separate note of questions you cannot resolve from the official instructions. For a family move, check each person’s documentation rather than assuming one applicant’s paperwork covers everyone.",
          "For help coordinating the wider move, you can explore [Blueprint Spain](https://blueprint-spain.com/), a VPI collaborator offering relocation and residence support. Agree their service scope and fees directly. VPI handles insurance advice; neither a relocation service nor an insurance adviser can promise the administrative outcome.",
          "For each line, add an owner and a next action: requested, awaiting issue, awaiting authentication, with the translator, or ready for review. This makes a missing step visible without treating an unfinished document as ready to submit."
        ]
      },
      {
        "id": "step-3",
        "heading": "Schedule US records, authentication and translation together",
        "content": [
          "If a criminal-record certificate is required, establish which record is needed and whether your residence history creates additional requirements. The [US Department of State’s criminal-record guidance](https://travel.state.gov/en/international-travel/living-abroad/criminal-records.html) explains the distinction between local records and FBI summaries, and the possibility of authentication for use abroad.",
          "For FBI records, follow the [FBI’s request instructions](https://www.fbi.gov/how-we-can-help-you/more-fbi-services-and-information/identity-history-summary-checks). Where needed, plan the federal apostille separately using the [Department of State’s official guidance](https://travel.state.gov/en/replace-certify/authenticate-documents/apostille-certificate.html). State-issued civil records follow a different authentication route. Check the document issuer before selecting a service.",
          "Where the checklist calls for a sworn Spanish translation, verify the translator in the [official guidance on Spain’s sworn-translator register](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-4519). Confirm the required translation scope rather than assuming the certificate and its authentication are interchangeable.",
          "If an FBI record is part of your file, see our [document coordination guide](/en/blog/fbi-background-check-spain) for a parallel plan covering the record and insurance evidence. It complements the official instructions and keeps each task with the appropriate provider."
        ]
      },
      {
        "id": "step-4",
        "heading": "Review insurance against the actual application",
        "content": [
          "A travel policy, access to US healthcare and a policy intended for residence in Spain should not be treated as equivalent without checking the requirements. Share the procedure, competent office, proposed dates and relevant checklist with your insurance adviser.",
          "VPI’s [visa health-insurance guide](/en/visa-health-insurance) links procedure-specific evidence, including [student visas](/en/visa-health-insurance/student-visa) and [non-lucrative residence](/en/visa-health-insurance/non-lucrative-residence). Before purchase, ask about the certificate, cover dates, exclusions, waiting periods, copayments, payment requirements and written cancellation or refund conditions for the proposed product.",
          "VPI is a commercial brand of exclusive insurance agents. Our team offers personal guidance in fluent English and Spanish and helps international clients consider the options we can commercialise. Monthly payment may be available on eligible products; it must also suit your application’s requirements. Applicants over 70 can ask us to explore age-eligible options, subject to availability and underwriting. Medical-provider and insurer service languages depend on the policy."
        ]
      },
      {
        "id": "step-5",
        "heading": "Keep the final check practical",
        "content": [
          "Compare names and dates across your documents, retain the versions you submit, and confirm any remaining questions before purchase or filing. Insurance-document suitability and approval of the overall application are separate decisions. [Speak to VPI about your insurance needs](/en/foreigners) with your procedure and planned dates so we can help you prepare the insurance part of your move.",
          "Check practical healthcare needs as well as the application: nearby providers, how to request appointments and the language support available under the proposed policy. Keep the insurer’s contact details and the evidence of cover accessible after arrival."
        ]
      }
    ],
    "title": "Moving from the USA to Spain: your documents & insurance plan",
    "eyebrow": "Relocation · Practical planning",
    "metaTitle": "Moving USA to Spain: Documents & Health Insurance | VPI",
    "metaDescription": "Organise your move from the USA to Spain: a practical checklist for residence documents, authentication, translations and health-insurance evidence.",
    "image": "/images/editorial/moving-to-madrid.webp",
    "imageAlt": "Madrid rooftops and the Metropolis Building in warm evening light",
    "imageCredit": "Madrid photograph: Alex Azabache / Pexels. Used under the Pexels License.",
    "readTime": "8 min",
    "summary": "Build your move around the procedure.",
    "summaryText": "A useful relocation checklist connects each document to an issuer, an owner and a next action. Insurance has its own evidence, dates and product conditions.",
    "process": [
      [
        "Choose",
        "Route & competent office"
      ],
      [
        "Map",
        "Documents for each person"
      ],
      [
        "Schedule",
        "Records & translations"
      ],
      [
        "Check",
        "Insurance & final file"
      ]
    ],
    "checklistTitle": "A practical checklist for your move",
    "checklist": [
      [
        "Identity & application",
        "Check passport validity, forms and identity details against your own procedure’s instructions."
      ],
      [
        "Purpose & resources",
        "Record which evidence your route asks for, its format and who must provide it."
      ],
      [
        "Records & translations",
        "Track civil or criminal records where required, the correct authentication route and translation scope."
      ],
      [
        "Health insurance",
        "Confirm the relevant insurance evidence, beneficiaries, dates and written product conditions."
      ],
      [
        "Family file",
        "Check each applicant individually. Note shared evidence and documents needed for each person."
      ],
      [
        "Submission copy",
        "Save the final versions, unanswered questions and current official checklist together."
      ]
    ],
    "callouts": {
      "0": [
        "tip",
        "One nationality does not mean one checklist",
        "The route, family circumstances, residence history and receiving office can change what you need."
      ],
      "2": [
        "warning",
        "Check the issuer before arranging authentication",
        "Federal FBI records and state-issued civil records follow different routes. Choose the route for the actual document."
      ],
      "3": [
        "tip",
        "Make the insurance enquiry useful",
        "Bring the procedure, responsible office, proposed cover dates and the current checklist. Ask for the proposed product’s written terms before purchase."
      ]
    },
    "faqs": [
      {
        "q": "Is there one document list for every American moving to Spain?",
        "a": "No. Use the instructions for your procedure and competent office. A student, a non-lucrative resident and a person joining family can have different requirements."
      },
      {
        "q": "Does my US or travel insurance automatically meet residence requirements?",
        "a": "Do not assume equivalence. Check the applicable procedure and the proposed policy’s evidence, cover dates and conditions before buying."
      },
      {
        "q": "What should I ask before buying a health policy?",
        "a": "Ask about the certificate, exclusions, waiting periods, copayments, cover dates, payment requirements and written cancellation or refund conditions. Requirements and terms are product- and procedure-specific."
      }
    ],
    "sources": [
      [
        "Spain · Ministry guidance on initial non-lucrative residence",
        "https://www.inclusion.gob.es/web/migraciones/w/autorizacion-inicial-de-residencia-temporal-no-lucrativa"
      ],
      [
        "FBI · Request an Identity History Summary",
        "https://www.fbi.gov/how-we-can-help-you/more-fbi-services-and-information/identity-history-summary-checks"
      ],
      [
        "US Department of State · Criminal records abroad",
        "https://travel.state.gov/en/international-travel/living-abroad/criminal-records.html"
      ],
      [
        "US Department of State · Apostille certificates",
        "https://travel.state.gov/en/replace-certify/authenticate-documents/apostille-certificate.html"
      ],
      [
        "Spain · Sworn-translator register (BOE, Article 6)",
        "https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-4519"
      ]
    ],
    "reviewed": "2026-11-18",
    "socialImage": "/images/editorial/moving-usa-spain-documents-insurance-social.jpg",
    "published": "2026-11-18"
  }
];
