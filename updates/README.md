# WYWA FI-RE Updates (Astro + Decap CMS)

This directory contains the static blog used for weekly FI-RE updates. Astro renders the public content, while Decap CMS supplies a GitHub-backed visual editor for non-technical contributors.

## How it works

- **Content** lives in `src/content/updates/` as Markdown with typed frontmatter (see `src/content/config.ts`).
- **Styling** is handled via the custom layout and `src/styles/global.css`, delivering the modern card layout for `/updates` and individual posts.
- **Media** uploads are saved under `public/uploads/` and published at `/updates/uploads/<file>`.
- **Admin** interface is available at `/updates/admin/` and configured via `public/admin/config.yml`.
- The root build (`npm run build`) runs `npm --prefix updates run build` and syncs the output into `dist/updates`, which the Express server serves alongside the React SPA.

## Local editing

```bash
npm run dev:updates        # Run Astro dev server (http://localhost:4321/updates)
npm run dev                # Run the main app (React + Express)
```

While the React app is running on port 8080, the Astro dev server runs separately on 4321. Use Astro for live previews of Markdown posts; re-run `npm run build` to sync static output into `dist/updates` for the Express runtime.

## Decap CMS setup

1. Create a GitHub OAuth app (or Netlify OAuth) for Decap CMS.
2. Deploy an auth proxy (Netlify Identity, Decap Auth Gateway, or your own function) and update the placeholders in `public/admin/config.yml`:
   - `base_url`
   - `auth_endpoint`
   - `app_id`
3. Restrict the OAuth app to the correct organisation/team. Only approved GitHub accounts will see the editor.

The CMS uses **editorial workflow**, meaning posts enter review as pull requests and must be merged to publish. Commit messages are automatically generated.

## Frontmatter schema

```yaml
title: Title of the update
description: Optional summary shown on the listing
date: 2025-02-14
author: WYWA FI-RE Engineering
heroImage: /updates/uploads/hero.webp
heroImageAlt: Short alt text for accessibility
heroVideo: /updates/uploads/clip.mp4
tags: [Field Test, Sensors]
featured: false
draft: false
```

## Useful scripts

- `npm run build:astro` – builds the Astro site and syncs it into `dist/updates`
- `npm run sync:updates` – copies `updates/dist` into the root `dist/updates` directory
- `npm --prefix updates run preview` – preview Astro production build at `localhost:4321`

## Content guidelines

- Optimise hero images to 1600×900 (WebP preferred).
- Videos should be short MP4 clips (≤ 25 MB) to keep the static bundle light.
- Use Markdown headings for structure; figures and blockquotes are styled automatically.
- Set `draft: true` to keep a post out of production while still visible in the CMS preview.
