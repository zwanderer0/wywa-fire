---
title: "Night run thermal calibration & wildfire smoke lab"
description: "Validating thermal lenses after extreme temperature cycling and logging new smoke signatures."
date: 2025-02-07
author: "Hardware"
heroImage: "/images/thermal-signature.webp"
heroImageAlt: "Thermal overlay of controlled burn plume"
tags:
  - Sensors
  - Calibration
  - Lab
---

## Lab session

- Put the Gen3 thermal lenses through repeated freeze-thaw cycles (-10 °C to 45 °C) and measured focus drift < 0.4%.
- Recorded 36 new smoke plume profiles using a controlled smoldering setup; shipped data to the VLM team for annotation.
- Added thermal “null tests” to detect lens fogging—if the baseline drifts by more than 2%, the node requests a purge cycle.

## Field notes

- Overnight dew still creeps into the cable gaskets after six hours. Ordering a different silicone blend for the next batch.
- For night deployments, the LoRa heartbeat needs to flash a subtle blue LED—current red indicator feels too alarming.

## Actions

- Integrate the new smoke profiles into the inference pipeline.
- Prototype the updated gasket design before the March burn.
- Update maintenance docs with the new purge cycle procedure.
