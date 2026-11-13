# Consent renewal · technical candidate

Policy reference: `vpi-cookies-20261109-730d-r1`. Schema v2, maximum 730 days from explicit decision, no renewal by reads/navigation. This is a candidate reference, not an assertion that a legal policy has been approved. Publication is blocked until the external provider inventory and final ES/EN text are approved. The public /cookies and /en/cookies routes are deliberately unchanged while essential data remain unavailable; no placeholders are published.

Production evidence checked without executing SDKs: current deployment declares Meta Pixel and renders a nonempty Meta prop; Clarity is not declared and its prop is undefined. Do not infer production configuration from Preview. GTM and Maps remain under their existing joint-permission guards; Vercel remains Analytics-only. The GTM workspace export, effective tags/cookies/retention and contractual provider/transfer details are not verified. No unilateral GTM disablement was applied.

Conservative GTM option for a later explicit commercial/privacy decision: set a reviewed application-level switch to block all GTM loader execution, including 11, while preserving other providers and purpose guards; update both policies and assert zero GTM requests in all states. This is a proposal only. An authenticated accepted inventory is the other route to closing the blocker. Do not claim that blocking the loader removes cookies/data already held by third parties.

## Accountability procedure

1. Freeze the approved ES/EN policy texts and their hashes under a policy identifier; any material change needs a reviewed policy-version change. Candidate text is retained outside git at VPI_360_CYCLE_1_20261109/remote/consent-renewal/ and is not approved/public legal content.
2. At an authorised publication, record the exact main merge SHA, deployment ID, actual publication timestamp, approved policy ID and immutable text hashes. There is no publication timestamp yet.
3. Retain panel rules, original source revision, tests and the request-interception method. No real SDK receipt, lead delivery or comprehensive legal compliance is demonstrated by stubs.
4. A new explicit decision writes schema version, policy reference, decidedAt/expiresAt and purposes locally. Reads never update those dates. Previous denials are preserved without inventing timestamps. Expired/incompatible/malformed grants are denied, removed where possible and require a new choice; executed SDKs are stopped by the existing controlled reload.
5. The document monitor uses a short bounded timer and storage/focus/pageshow/visibility events. In a suspended tab execution resumes only when the browser permits it. A monotonic elapsed clock prevents a backwards wall-clock change extending grants within a live document. Future/backdated existing records fail closed where detectable. A new decision on a consistently wrong device clock cannot be independently authenticated without a trusted time source; none is introduced.
6. The local record is editable/removable and is not a signed historical ledger or proof of a particular person's consent. Framework/tests demonstrate the mechanism. They do not demonstrate identity, an immutable decision history or an independently certified decision time. No leads, email, phone, IP, advertising IDs or commercial history are linked or transmitted by this record.
7. Withdrawal reduces purpose grants, cleans known accessible first-party storage and reloads. It does not itself send an erasure request to providers. Assess the controller's further duties separately.

## Validation and rollback

The existing consent suite and native Next/sharp security tests remain required. New temporal tests exercise before/exact/after expiry, leap years, policy changes, old data, storage failure, clock changes, active/suspended/cross-tab documents and no renewal on reads.

Rollback of this candidate commit restores the previous consent implementation while keeping main security and PR17 untouched; it restores the known missing-expiry limitation and old parsing cannot treat v2 as positive legacy consent. Assess the visitor's ability to reopen/change preferences before production rollback; prefer a reviewed forward fix. Never convert dated partial choices into global accepted. No rollback or production publication is authorised by this document.
