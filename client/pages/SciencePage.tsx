"use client";

import { motion } from "framer-motion";

export default function SciencePage() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 font-mono">
      {/* Header */}
      <header className="border-b border-gray-300 bg-gray-100 sticky top-0 z-50">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-8 lg:px-12 xl:px-16 py-3 md:py-4">
          <div className="flex items-center justify-between">
            <a href="/" className="font-black text-xl md:text-2xl text-gray-900">
              WYWA
            </a>
            <div className="hidden md:flex space-x-6 text-sm">
              <a href="/#prototypes" className="text-gray-600 hover:text-gray-900">Prototypes</a>
              <a href="/#hardware" className="text-gray-600 hover:text-gray-900">Hardware</a>
              <a href="/#team" className="text-gray-600 hover:text-gray-900">Team</a>
              <a href="/science" className="text-gray-900 font-medium">Science</a>
              <a href="/#contact" className="text-gray-600 hover:text-gray-900">Contact</a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="py-12 md:py-20">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-8 lg:px-12 xl:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              The Science
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl">
              Autonomous systems that analyse, interpret, and act.
              On-device ML for wildfire detection.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Analyse / Interpret / Act - Visual Pipeline */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-8 lg:px-12 xl:px-16">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Analyse */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="border border-gray-300 rounded-lg p-6"
            >
              <div className="text-6xl font-bold text-gray-200 mb-4">01</div>
              <h2 className="text-2xl font-bold mb-3">Analyse</h2>
              <p className="text-gray-600 mb-4">
                Sensors sample air chemistry every 500ms.
                VOCs, CO2, particulates, temperature, humidity.
              </p>
              <div className="bg-gray-100 p-4 rounded font-mono text-sm">
                <div className="text-gray-500">// raw sensor data</div>
                <div>voc: 847 ppb</div>
                <div>co2: 1240 ppm</div>
                <div>temp: 34.2°C</div>
                <div>humidity: 23%</div>
              </div>
            </motion.div>

            {/* Interpret */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="border border-gray-300 rounded-lg p-6"
            >
              <div className="text-6xl font-bold text-gray-200 mb-4">02</div>
              <h2 className="text-2xl font-bold mb-3">Interpret</h2>
              <p className="text-gray-600 mb-4">
                On-device ML classifies patterns.
                Distinguishes fire from diesel, dust, incense.
              </p>
              <div className="bg-gray-100 p-4 rounded font-mono text-sm">
                <div className="text-gray-500">// ml inference</div>
                <div>pattern: combustion</div>
                <div>confidence: 0.94</div>
                <div>class: brush_fire</div>
                <div>false_positive: 0.02</div>
              </div>
            </motion.div>

            {/* Act */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="border border-gray-300 rounded-lg p-6"
            >
              <div className="text-6xl font-bold text-gray-200 mb-4">03</div>
              <h2 className="text-2xl font-bold mb-3">Act</h2>
              <p className="text-gray-600 mb-4">
                Autonomous alert via radio.
                Text-to-speech broadcast. No human in the loop.
              </p>
              <div className="bg-gray-100 p-4 rounded font-mono text-sm">
                <div className="text-gray-500">// radio broadcast</div>
                <div>"Node 23 detected</div>
                <div>brush fire signature.</div>
                <div>Wind NW at 12 mph.</div>
                <div>Alert level: HIGH"</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Multimodal Fusion */}
      <section className="py-12 md:py-16 bg-gray-100">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-8 lg:px-12 xl:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Multimodal Fusion
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl">
              Three signal types. Cross-attention transformer.
              Each modality catches what the others miss.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white border border-gray-300 rounded-lg p-5">
                <div className="text-sm text-gray-500 mb-2 font-mono">ENCODER 1</div>
                <h3 className="text-xl font-bold mb-2">Chemical</h3>
                <p className="text-gray-600 text-sm">
                  VOC time-series. 1D convolutions capture gas concentration slopes.
                  Leads visual detection by 45 seconds.
                </p>
              </div>

              <div className="bg-white border border-gray-300 rounded-lg p-5">
                <div className="text-sm text-gray-500 mb-2 font-mono">ENCODER 2</div>
                <h3 className="text-xl font-bold mb-2">Visual</h3>
                <p className="text-gray-600 text-sm">
                  Camera feed. Vision transformer extracts spatial features.
                  Anomaly regions identified.
                </p>
              </div>

              <div className="bg-white border border-gray-300 rounded-lg p-5">
                <div className="text-sm text-gray-500 mb-2 font-mono">ENCODER 3</div>
                <h3 className="text-xl font-bold mb-2">Temporal</h3>
                <p className="text-gray-600 text-sm">
                  Motion vectors across 5-second clips.
                  Distinguishes rising smoke from drifting fog.
                </p>
              </div>
            </div>

            <div className="bg-gray-800 text-white p-6 rounded-lg">
              <div className="text-sm text-gray-400 mb-2 font-mono">FUSION LAYER</div>
              <p className="text-gray-200">
                Cross-attention transformer fuses encodings.
                Model learns contextual weighting — chemical data weighted higher at dawn,
                visual data weighted higher in dry conditions.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Hard Problem */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-8 lg:px-12 xl:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              The Hard Problem
            </h2>

            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                Detecting fire sounds simple until you realize what the model must ignore:
                fog drifting across a valley, insects crossing the lens, bright reflections off
                metal roofs, headlights on a winding road, printed fire graphics on delivery trucks,
                construction workers in orange vests. A single bright frame means nothing.
                Real fire flickers and grows. Real smoke rises, drifts, expands.
              </p>

              <p>
                The system must understand <span className="font-medium">temporal patterns</span>—not
                just what's in the frame, but how it changes across 3-5 second windows.
                We train on video clips, not images. The model learns motion signatures:
                the characteristic flicker of flames, the turbulent rise of smoke plumes,
                versus the smooth drift of fog or the linear motion of a passing car.
              </p>

              <div className="bg-gray-100 border border-gray-300 rounded-lg p-5 my-6">
                <h3 className="font-bold text-gray-900 mb-3">What we balance for:</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-gray-400 mt-1">→</span>
                    <span><span className="font-medium">True positives:</span> Real flames with visible growth/flicker. Smoke plumes that rise or drift naturally.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-400 mt-1">→</span>
                    <span><span className="font-medium">Hard negatives:</span> Fog, dust clouds, vehicle exhaust, bright glare, night reflections, yellow/orange clothing, printed fire graphics.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-400 mt-1">→</span>
                    <span><span className="font-medium">Edge cases:</span> Dawn/dusk lighting shifts, rain on lens, wildlife movement, construction equipment.</span>
                  </li>
                </ul>
              </div>

              <p>
                The VLM layer adds reasoning. It reads sensor trends—VOC spikes, temperature
                anomalies, humidity drops—alongside weather data and camera feeds.
                A sudden VOC spike with rising visual smoke in dry conditions with wind
                from the northwest? High confidence alert. The same visual pattern during
                morning fog with stable sensors? Suppressed.
              </p>

              <div className="bg-gray-100 border border-gray-300 rounded-lg p-5 my-6">
                <h3 className="font-bold text-gray-900 mb-3">The data problem:</h3>
                <p className="text-sm text-gray-700 mb-3">
                  Public fire datasets are limited—mostly close-up footage, controlled burns,
                  news clips. Real wildfire monitoring happens from distant tower cameras
                  at odd angles, through haze, at dawn when fog looks like smoke.
                </p>
                <p className="text-sm text-gray-700">
                  We use game engines (Unreal, Unity) to generate synthetic training data:
                  realistic smoke plumes at various distances, camera angles from 0.5 to 10 miles,
                  fog banks drifting through valleys, sun glare at golden hour, headlights on mountain roads.
                  Thousands of hours of labeled video that would be impossible to capture in the real world.
                </p>
              </div>

              <div className="bg-gray-800 text-gray-100 rounded-lg p-5 mt-6">
                <h3 className="font-bold mb-3">Detection Classes</h3>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <div className="text-gray-400 mb-1">Class A</div>
                    <div>Real fire flames — visible growth or flicker</div>
                  </div>
                  <div>
                    <div className="text-gray-400 mb-1">Class B</div>
                    <div>Real smoke plumes — rising, drifting, expanding</div>
                  </div>
                  <div>
                    <div className="text-gray-400 mb-1">Class C</div>
                    <div>Fire + Smoke — combined detection</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Field Tests */}
      <section className="py-12 md:py-16 bg-gray-100">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-8 lg:px-12 xl:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Lab Tests (Early)
            </h2>
            <p className="text-gray-600 mb-8">
              Incense rejected. Brush fire detected.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-lg overflow-hidden border border-gray-300 bg-black">
                <video
                  src="/videos/incense-reject-test.mov"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full aspect-video object-contain"
                />
                <div className="bg-white p-3 text-sm text-gray-600">
                  Incense smoke — <span className="font-bold">Rejected</span>
                </div>
              </div>

              <div className="rounded-lg overflow-hidden border border-gray-300 bg-black">
                <video
                  src="/videos/brush-fire-test.mov"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full aspect-video object-contain"
                />
                <div className="bg-white p-3 text-sm text-gray-600">
                  Brush fire — <span className="font-bold text-gray-900">Alert triggered</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-800 text-gray-300">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-8 lg:px-12 xl:px-16">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm">
              WYWA AI
            </div>
            <div className="flex gap-6 text-sm">
              <a href="/" className="hover:text-white">Home</a>
              <a href="mailto:nveeturi@wywa.ai" className="hover:text-white">nveeturi@wywa.ai</a>
              <a href="https://linkedin.com/company/wywa-ai" target="_blank" rel="noopener noreferrer" className="hover:text-white">LinkedIn</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
