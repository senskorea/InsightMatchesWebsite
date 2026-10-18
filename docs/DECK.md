# Researcher deck

## Architecture

The editable presentation lives in deck/. Vite builds deck/index.html as a separate page alongside the unchanged website entry. GitHub Pages serves /deck/ directly and redirects /deck to the directory. The deck does not import site styles, routing, authentication or database clients. Main-site visitors do not load deck assets.

Source components and CSS are in deck/. Static assets are in public/deck-assets/. Edit these files for future revisions, not generated dist files or the historical prototype. Scene order is sceneMap in deck/swiss.jsx. npm run dev serves /deck/. npm run build produces both site and deck.

## Plan and acceptance

Base: 67f100c8f4812177dd2da7ae4925e02dc3c243de.
Preserve the approved 16:9 presentation, keyboard and wheel controls, flyer hover zoom and mailing QR. Replace the hypothetical connection slide with approved Option 2 and supplied Synapse International/Phi Hub images. Add touch-friendly navigation outside the canvas. Audit build, local direct entry, source paths, image loading, and visual navigation before publishing.

No homepage redesign, backend changes or mailing-list implementation. Existing /mailing destination was previously reported as 404 and requires separate work. Estimates and unverified event details remain qualified in the deck.

## Publishing and rollback

## Initial audit, 18 October 2026

Build passed. JSX lint passed. Asset and separate-entry checks passed. Browser checks covered entry, button navigation at 390x844, keyboard navigation, preparation layout, and new partnership layout. Phone portrait retains 16:9 framing, so landscape is recommended for reading detailed slides. Original screenshot text is available through click-through full-size assets. No physical-device or assistive-technology certification, and no frame-rate benchmark.

The unchanged dependency lockfile reports 37 npm advisories (2 low, 8 moderate, 27 high). Dependency remediation is outside this deck change. Existing site backend and forms were not modified or exercised.

Review changes through a PR. Merging to main triggers the existing GitHub Pages workflow. Verify the deployed URL after completion. Revert the integration commit to roll back; future deck-only edits follow the same PR process.
