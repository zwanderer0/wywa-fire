---
title: "Command terminal refresh & alert triage shortcuts"
description: "Streamlining the WYWA terminal UI to keep triage under 30 seconds even on low-bandwidth connections."
date: 2025-01-31
author: "Product"
heroImage: "/images/sensor-showcase.webp"
heroImageAlt: "WYWA command terminal overlaying deployment map"
tags:
  - Product
  - UX
  - Alerts
---

## Highlights

- Replaced heavy map tiles with vector layers; load time on satellite hotspots dropped from 7.2 s to 1.9 s.
- Introduced keyboard triage shortcuts (Acknowledge = `A`, Escalate = `E`, Flag = `F`) after shadowing dispatch operators.
- Added contextual “confidence summaries” that combine VLM output with air chemistry anomalies—removes guesswork on borderline alerts.

<div class="video-embed">
  <iframe
    src="https://www.youtube.com/embed/hoayS069X9I"
    title="Command terminal walk-through"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
  ></iframe>
</div>

## Feedback

- Testing crews loved the slimmer signal panel but asked for a persistent link to the raw sensor feed. Mockups are ready for review.
- Auto-dark mode proved distracting in the field; we’ll revert to manual theme toggles like chiri to keep the UI predictable.

## Metrics

- Alert triage median time: **27 s** (down from 42 s).
- Data transfer per alert: **-38%** after the vector tile switch.

## Open questions

- Should the confidence summary note the exact VLM version? Field ops leaned yes; product is cautious about noise.
- How aggressively do we collapse historical alerts on narrow screens?
