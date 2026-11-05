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
