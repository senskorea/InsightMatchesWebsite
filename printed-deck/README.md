# InsightMatches · HTML review deck

Phase 3, HTML portion only. Thirteen complete static slides at `/printed-deck/`, with Korean won formatting throughout the deck’s financial figures. The current main `/deck/` and tailored `/cit/` remain separate.

## Build

```sh
node scripts/build-printed-deck.mjs
npm run build -- --config vite.deploy.config.ts
```

Sources: `slides.mjs`, `styles.css`, `viewer.js`. Output: `public/printed-deck/index.html`. The builder embeds existing local image assets and reuses the licensed Inter font from `cit/assets`. The saved HTML works without asset network requests. A shared SVG logo definition prevents repeating the same embedded image on every slide.

Navigation: arrows, Page Up/Down, Home/End, slide selector, and All slides overview. Save HTML downloads a standalone review copy. No print stylesheet, page-break rules, PDF generation or PDF/Print controls are implemented for this new deck. Those follow HTML review. Existing website deployment tasks for the other decks are unchanged.

## Currency

Financial display uses Korean won units, e.g. 350만원 and 510만원. No USD or EUR equivalents are shown. Pricing reuses the general deck’s fixed 14 October 2026 conversion rates and rounds offers upwards to 10만원 increments. Consultancy and hiring benchmarks are rounded estimates. Annual salary and per-proposal fees use separate chart scales. Authentic platform captures retain the actual demo interface.

## Content basis

Approved Phase 2 structure, updated by the second HTML review and user supplied figures and biographies. Evidence research is deferred as requested. The 30% share, 165 → 52 hour comparison and 30% → 9.5% proportional scenario remain visibly labelled as estimates or scenarios. Whole-consortium funding is not presented as an individual organisation’s grant. Optional claims about 82% of projects and 30–40% faster expansion are not needed in this version.

## Next

User reviews the HTML. Print layout/PDF implementation and the formal Phase 4 check against the notes remain pending.

## Second HTML review

Expanded the network list with universities and research labs; Korea and Europe positioning with Paris, France and Austria; minimal organisation icons; market entry emphasis; removed the duplicate preparation slide while retaining More time for research; the 510만원 team plan includes one year of platform access. Thirteen slides, HTML only.

## Third HTML review

Matching South Korea, France and Austria location panels now show Seoul/Busan, Paris and Vienna. Organisation types use an aligned row beneath them. A deck-wide readability pass improves small text contrast, caption sizes, supporting copy and spacing. Natural Earth source information is in `assets/README.md`. Other slide copy and figures are unchanged.
