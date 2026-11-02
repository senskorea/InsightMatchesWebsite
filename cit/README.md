# Global CIT presentation

A standalone HTML presentation at `/cit/`, independent of the general `/deck/` presentation.

## Update

Edit `cit/slides.mjs` and `cit/styles.css`, then run:

```sh
node scripts/build-cit-deck.mjs
npm run build -- --config vite.deploy.config.ts
DECK_BROWSER_CHANNEL=chrome node scripts/export-cit-pdf.mjs
```

The HTML embeds its six local image assets and needs no network connection. Its Save HTML button downloads that standalone copy. The PDF is generated from the exact deployment HTML and published at `/cit/InsightMatches-CIT.pdf`. GitHub Pages generates it on every deployment.

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
