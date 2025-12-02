---
title: "First controlled burn telemetry locked in"
description: "Deploying the FI-RE sensor stack alongside CAL FIRE partners and closing the loop on thermal alerts."
date: 2025-02-14
author: "WYWA FI-RE Engineering"
heroImage: "/images/hardware-node.webp"
heroImageAlt: "FI-RE sensor node mounted on a tripod during a controlled burn"
tags:
  - Field Test
  - Sensors
  - AI Stack
featured: true
---

## What shipped

- Routed the LoRa mesh through a temporary repeater to span a full kilometer ridge line with < 6 second latency.
- Deployed the thermal + optical stack on two sentinel towers; both survived eight hours of continuous exposure without thermal throttling.
- Completed the first edge model refresh push directly from the WYWA command terminal; bundle install took just 18 seconds over the mesh.

## Field learnings

> "The ability to stream annotated frames and Bayesian scores to the crew chief in near real-time is the game changer. We caught the staged ignition plume at 29 seconds."  
> — Sara Dominguez, Field Ops

- Ambient smoke caused intermittent false positives until we dialed in the CO₂ thresholds on-scene; we are rolling those coefficients into the next weekly release.
- The thermal shield condensation issue from last week resurfaced overnight. We mitigated with disposable desiccant packs—long-term fix is underway.

## Media

![Mesh deployment map drawn on a tablet](/images/tech-edge-sensors.webp)

<figure>
  <img src="/images/tech-lora-mesh.webp" alt="FI-RE telematics dashboard showing live network health" loading="lazy" />
  <figcaption>Live network health during ignition window. Packet loss stayed below 2%.</figcaption>
</figure>

## Next up

- Finish integrating edge audio cues into the alert pipeline so operators can review a five second sound bite before dispatching.
- Fabricate the updated weatherized enclosure and prep for next week's 30-node forest install.
- Publish the public-facing playbook for local agencies that want to trial the FI-RE kit.
