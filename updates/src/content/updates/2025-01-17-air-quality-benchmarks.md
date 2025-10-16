---
title: "Air-quality benchmarks & CO₂ threshold tuning"
description: "Comparing in-forest readings against CARB stations and tightening CO₂ alert thresholds before spring burn season."
date: 2025-01-17
author: "Data Science"
heroImage: "/images/problem-landscape.webp"
heroImageAlt: "Forest valley view during air quality benchmark test"
tags:
  - Data
  - Sensors
  - Calibration
---

## Benchmark sweep

- Mounted two sentinel kits adjacent to California Air Resources Board stations—90th percentile variance clocks in at 3.1 ppm.
- Derived new baseline corrections for high-altitude deployments; densification in pine canopy skews humidity by ~4%.
- Fed the updated benchmarks into the Bayesian stack so false positives on cool mornings drop by an estimated 18%.

## Key takeaways

- When humidity is above 78%, we now require consecutive spikes before escalating an alert.
- Portable reference sensors need a faster warmup hint; adding a visible countdown to the field UI.
- Regional wildfire smoke drifting from Oregon triggered several near alerts—VLM false positive rate held well under 1.5%.

## Next steps

- Release a calibration playbook for partner agencies.
- Schedule a cross-check with USFS sensors in early February.
- Continue coalescing humidity + CO₂ trends into the model feature set.
