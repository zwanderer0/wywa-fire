---
title: "Hyperlocal alert routing tests in Lassen County"
description: "Stress-testing mesh routing with staged ignition drills and refining the alert UX for first responders."
date: 2025-02-21
author: "Field Ops"
heroImage: "/images/tech-vlms.webp"
heroImageAlt: "WYWA command terminal showing live wildfire inference"
tags:
  - Mesh Network
  - Field Test
  - UX
featured: true
---

## What shipped

- Simulated twelve simultaneous ignition events across a 6 km² zone; mesh routing resolved within 2.7 seconds on average.
- Automated alert escalation now bundles audio snapshots, thermal frames, and a short event synopsis for dispatch leads.
- Added responder acknowledgement flow in the mobile UI—two taps to confirm, one to request additional confirmation loops.

## Observations

> “Being able to hear the sizzle before the flame front arrives is disorienting at first, but it’s more actionable than the full sensor readout.”  
> — Captain Morales, Lassen County Fire

- High-wind cross-talk still causes duplicate packets when the canopy resonates; we plan to tune the debounce logic in firmware.
- Operators asked for a “steady state” heartbeat dashboard they can leave on in the truck—adding to the backlog for March.

## Next up

- Integrate weather telemetry overlays into the WYWA command terminal.
- Coordinate with state forestry to map their radio repeaters as fallback nodes.
- Finalize accessibility review for the alert interface before opening the beta.
