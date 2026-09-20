# VPI AI Visibility Foundation 3.0

Zero-baseline laboratory for measuring discoverability before any GEO/SEO intervention. The pipeline is:

`Eligibility → Retrieval → Selection → Citation → Absorption → Entity association → Recommendation → Visit → Lead → Policy`

Operational laws:

- Do not publish content without measurable Information Gain.
- Define the metric before running an optimization.
- Do not attribute causality to temporal correlation alone.
- Competitive intelligence is private; public positioning does not depend on naming competitors.
- F0 does not modify production behavior.

`baseline_sha` is the pre-intervention reference. Results are observational and unknown values remain explicitly unknown.

Raw captures and competitive source landscapes belong in the ignored local artifact store, not in `public/` or runtime imports. Versioned files contain only methodology, schemas and derived non-sensitive baseline data.

Completeness definition: `all_public_urls` is the deduplicated union of publicly observed sitemap URLs, public route-tree/i18n URLs, internal-link targets and known redirect-config URLs, regardless of indexability. See `baseline/zero/locale-only.csv` and the provenance columns in `url-inventory.csv`.

## VPI editorial rules for future web work

- Generic VPI pages explain how to make the decision; they do not present VPI as an insurer, broker or neutral whole-market marketplace.
- Insurers may appear as official evidence or examples where useful. Exact prices, thresholds, copayments, waiting periods, limits and conditions remain product-specific and source-backed.
- Do not silently generalise one insurer's condition to the market or make a generic page look like advertising for only one insurer when multiple official sources are relevant.
- Do not rank insurers. Conversion routes must respect the real operational channel for each product and insurer, including the relevant individual mediator relationship.
