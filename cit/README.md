# Global CIT presentation

A standalone HTML presentation at `/cit/`, independent of the general `/deck/` presentation.

## Update

Edit `cit/slides.mjs` and `cit/styles.css`, then run:

```sh
node scripts/build-cit-deck.mjs
npm run build -- --config vite.deploy.config.ts
DECK_BROWSER_CHANNEL=chrome node scripts/export-cit-pdf.mjs
```

The HTML embeds its eight local image assets and needs no network connection. Its Save HTML button downloads that standalone copy. The PDF is generated from the exact deployment HTML and published at `/cit/InsightMatches-CIT.pdf`. GitHub Pages generates it on every deployment.

Fourteen main slides and two annex slides. Native PDF text and SVG preserve sharpness. Print size is 16 × 9 inches, one slide per page.

## Content decisions

Primary source links are in the presentation and `sources` in `slides.mjs`. Checked 2 November 2026 against the official September 2026 Cluster 4 work programme.

* HUMAN 01 has a €39M topic budget, superseding €35M in the initial brief.
* DATA 09 and MAT PROD 22 are IAs; 70% is the standard commercial beneficiary rate. HUMAN 01 is an RIA, normally 100% eligible costs.
* Topic budgets and expected consortium contributions are not CIT allocations. No speculative CIT grant is presented as available or secured.
* Technology fits, technical performance, TRL and prospective partner roles need validation. No coordinator or industrial partner is presented as committed.
* Association applies to Korean participation in Pillar II; topic restrictions still apply.
* IP, reporting, ownership and exploitation obligations remain. No promise of unrestricted IP retention or automatic funding.
* Standard support plans are orientation prices converted from the existing deck, not a bespoke commercial quotation.

FX: ECB 14 October 2026, €1 = ₩1,496.54 and US$1.1195. KRW values rounded; EUR programme amounts authoritative.

## Story revision, 2 November 2026

The cover now sells InsightMatches’ funding, partner and proposal support. CIT’s technology pillars and a three topic comparison lead directly into the three opportunity details. Generic research network, programme hierarchy and Korean association opening slides were removed. Korea’s participation conditions remain in the sources annex. New product and value slides explain how the platform and team support preparation. The team slide pairs each person’s documented expertise with its relevance to CIT. Team background source: internal October 2026 leadership announcement and the general deck; no invented track record, award totals or success rates.

## Design polish, 3 November 2026

See `DESIGN-REVIEW-2026-11-03.md` for the slide by slide audit. Story and copy are retained. Inter is embedded from `cit/assets/Inter.ttf`, with its SIL Open Font License included in the source and standalone HTML. The PDF and HTML therefore share typography without a font network request.

## Merged HTML review · 5 November 2026

The current `/cit/` deck has 19 main slides plus two annex slides. It reuses the printed deck design, organisation logos, product screens, preparation scenario, leadership profiles, pricing and community material, with dedicated CIT technology and funding pages preserved from `opportunity-source.mjs`. These source opportunity records retain their original evidence date and conditions; this revision does not claim a fresh funding audit.

The original InsightMatches logo is embedded through the shared logo symbol. CIT logo source: https://englobalcit.imweb.me/ (official header image https://cdn.imweb.me/thumbnail/20240901/8a3dc743bc365.png), retrieved 5 November 2026, preserved in `assets/Global_CIT_Logo_Official.png`.

Build: `node scripts/build-cit-deck.mjs`. Browser viewer supports arrow keys, slide selector, overview and Save HTML. PDF and print controls are omitted during HTML review. The automatic CIT PDF job is disabled until the user requests final PDF work; the independent main-deck PDF job remains active.

## Approved refinement · 5 November 2026

20 slides: 18 main plus two annex. Combined technology/opportunity overview; authentic CIT imagery; KRW-only indicative funding scenarios on the three detailed opportunity pages; consortium planning ranges; updated problem, sponsorship and next-step copy. Logo marks retain colours on a common white panel, with readable organisation names; OrtCloud uses the original symbol crop plus a text name rather than a dark tile.

Approved scenario assumptions (not award forecasts): AI and materials CIT eligible costs €0.5–1M, modelled 70% EU contribution €0.35–0.7M, displayed as approximately 5억–10.5억원. Antenna eligible costs/contribution €0.3–0.6M at 100%, displayed 4.5억–9억원. Fixed deck rate ₩1,496.54/EUR; display ranges deliberately rounded. Consortium planning ranges: AI 8–12, materials 12–20, antenna 8–12 organisations. These are judgement-based planning ranges, not topic requirements, equal allocation calculations, or measured percentiles. Conditional on project selection, agreed role, eligible costs, consortium agreement and topic conditions.

Evidence reviewed: https://cordis.europa.eu/project/id/101070178 (ADOPTION), https://cordis.europa.eu/project/id/101136156 (MODERATOR), https://cordis.europa.eu/project/id/101003785 (SALEMA), https://cordis.europa.eu/project/id/101298672 (IRIS-XR), https://rea.ec.europa.eu/horizon-europe-how-apply_en (rates). CORDIS participants lists must be distinguished from separately listed coordinator and associated partners.

Authentic image provenance, retrieved 5 November 2026, originals preserved without generative editing:
- `CIT_Glass_Substrate_Official.png`: https://englobalcit.imweb.me/SemiconductorGlassSubstrate ; https://cdn.imweb.me/upload/S202310241972110d1f98e/f627cee55fdad.png (generic official glass-substrate image, not a new verified CuFlat product capture).
- `CIT_ASE_Process_Official.png`: https://englobalcit.imweb.me/TECHNOLOGIES ; https://cdn.imweb.me/thumbnail/20240908/e596968e7145f.png
- `CIT_Transparent_Antenna_Official.png`: https://englobalcit.imweb.me/transparentantenna ; https://cdn.imweb.me/upload/S202310241972110d1f98e/04c7e3908c8a7.png

PDF generation remains deferred.

## Company-first hierarchy · approved 5 November 2026

19 slides: 18 main plus sources annex. Cover now leads with the approved Global CIT value statement; former headline becomes subtitle. Replaced 12-million world statistic with a labelled conceptual connection diagram. Removed the funding-amounts annex; opportunity-level assumptions and caveats remain. Rebuilt all three detailed opportunity pages to prioritise indicative funding for CIT, consortium planning range and deadline, followed by contribution/evidence/partner copy and smaller supporting product imagery and programme budgets. Closing heading is “Next steps.” Existing research amounts, source dates and assumptions are unchanged. HTML only; PDF remains deferred.
