# Changelog

## 2025-02-16

- Embedded an Astro blog in `/updates/` with Chiri-inspired styling, local assets, and responsive layout synchronized with the Express server build.
- Wired Decap CMS admin (`/updates/admin/`) for GitHub-backed editorial workflow, including preview styling and media uploads under `updates/public/uploads/`.
- Replaced all external Builder.io imagery with repository-local assets served from `public/images/`.
- Added image zoom (medium-zoom) and responsive YouTube embeds within posts; populated five example dispatch entries to showcase the archive.
- Extended build scripts (`npm run build`, `npm run build:astro`, `npm run sync:updates`) and navigation link on the WYWA homepage to surface the Updates feed.
