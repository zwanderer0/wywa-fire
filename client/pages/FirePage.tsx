"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function FirePage() {
  return (
    <div className="min-h-screen bg-gray-100 font-mono">
      {/* Header */}
      <header className="border-b border-gray-300 bg-gray-100 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-3 md:py-4">
          <div className="flex items-center justify-between">
            {/* Logo - Clickable */}
            <a href="/fire" className="flex items-center space-x-3">
              <div className="font-black text-2xl md:text-3xl text-gray-900">
                FIRE
              </div>
              <div className="text-sm text-gray-600 italic">
                First Responder Initiative
              </div>
            </a>
            {/* Navigation */}
            <div className="hidden md:flex space-x-6 lg:space-x-8">
              {["Problem", "Technology", "Field Results", "Team"].map(
                (item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase().replace(/\s+/g, "")}`}
                    className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
                  >
                    {item}
                  </a>
                ),
              )}
              <a
                href="https://www.ai-infra-summit.com/speakers/navya-veeturi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-600 hover:text-red-800 transition-colors text-sm font-medium"
              >
                AI Infra Summit
              </a>
              <a
                href="/"
                className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
              >
                WYWA
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 md:py-24 lg:py-32 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left: Hero Content */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-8 tracking-tight text-gray-900">
                  Before
                  <br />
                  the smoke
                  <br />
                  rises
                </h1>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="border border-gray-300 bg-white p-6 md:p-8 mb-6 rounded-lg"
                >
                  <p className="text-base md:text-lg text-gray-800 leading-relaxed mb-4">
                    250 distributed sensors detecting chemical signatures before visible smoke.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Button
                      size="lg"
                      className="bg-gray-900 text-white hover:bg-gray-800"
                      onClick={() =>
                        document
                          .getElementById("team")
                          ?.scrollIntoView({ behavior: "smooth" })
                      }
                    >
                      Join the mission
                    </Button>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Right: Live Analysis Inference */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <HeroDetectionDemo />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problem" className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center"
          >
            <div>
              <motion.h2
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-6 md:mb-8 text-gray-900"
              >
                Every 57 minutes. Another one ignites.
              </motion.h2>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="border border-gray-300 bg-gray-50 p-4 md:p-6 mb-6 rounded-lg"
              >
                <p className="text-base md:text-lg text-gray-700 mb-4 leading-relaxed">
                  Current satellite detection: 2-6 hour latency.
                  Remote areas have coverage gaps. Our network provides continuous monitoring.
                </p>
                <p className="text-xs text-gray-500 mt-4">
                  <sup>1</sup> CAL FIRE 2023 Fire Statistics
                </p>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="h-64 md:h-80 lg:h-96 w-full relative bg-white overflow-hidden border border-gray-200 rounded-lg">
                <img
                  src="/images/problem-landscape.webp"
                  alt="Landscape showing wildfire detection challenges"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-white/90 p-3 rounded border border-gray-200">
                  <p className="text-xs text-gray-600">
                    Early detection challenge
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="technology" className="py-16 md:py-24 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-50px" }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-6 md:mb-8 text-gray-900">
              Sensor network
            </h2>
          </motion.div>

          <WhatWereBuilding />
          <SensorShowcase />
        </div>
      </section>

      {/* Development Status Section */}
      <section id="fieldresults" className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-50px" }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-6 md:mb-8 text-gray-900">
              Field Operations
            </h2>
          </motion.div>

          <DevelopmentStatusCards />
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-16 md:py-24 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-50px" }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-6 md:mb-8 text-gray-900">
              Team
            </h2>
          </motion.div>

          <TeamSection />
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm />

      {/* Footer */}
      <footer className="py-8 md:py-12 bg-gray-800 text-gray-200">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div>
              <div className="flex items-center space-x-3 mb-2">
                <span className="text-lg font-bold">FIRE</span>
                <span className="text-xs text-gray-400 italic">First Responder Initiative</span>
              </div>
              <p className="text-sm text-gray-300 mb-1">
                First Responder AI Initiative
              </p>
              <p className="text-xs text-gray-400">
                © 2024 WYWA. Open source under MIT License.
              </p>
            </div>
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <a
                href="mailto:nveeturi@wywa.ai"
                className="text-sm text-gray-300 hover:text-white transition-colors"
              >
                nveeturi@wywa.ai
              </a>
              <a
                href="https://linkedin.com/company/wywa-ai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-300 hover:text-white transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Hero Detection Demo Component - Simplified colors
function HeroDetectionDemo() {
  const [currentAlert, setCurrentAlert] = useState(0);

  const alerts = [
    {
      time: "13:04:07",
      location: "Sonoma County",
      node: "Node 047",
      reading: "PM2.5 spike detected",
      context: "Vehicle dust pattern identified. Non-combustion source.",
      action: "NO THREAT - Vehicle dust",
      color: "text-gray-600",
      bgColor: "bg-gray-50",
    },
    {
      time: "13:06:55",
      location: "Napa Valley",
      node: "Node 023",
      reading: "Smoke detected. Temperature increase.",
      context: "Campground proximity. Controlled burn signature.",
      action: "MONITORING - Campfire",
      color: "text-yellow-700",
      bgColor: "bg-yellow-50",
    },
    {
      time: "13:09:14",
      location: "Paradise Area",
      node: "Node 012",
      reading: "Rapid temperature increase. Smoke plume expanding.",
      context: "No containment structures. Wind 12mph NW. Low humidity.",
      action: "ALERT - Fire confirmed",
      color: "text-red-700",
      bgColor: "bg-red-50",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAlert((prev) => (prev + 1) % alerts.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full space-y-6">
      <div className="border border-gray-300 bg-white p-6 md:p-8 lg:p-10 shadow-lg rounded-lg">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="w-3 h-3 bg-gray-700 rounded-full animate-pulse"></div>
            <span className="text-sm md:text-base font-bold text-gray-900">
              THREAT ASSESSMENT
            </span>
          </div>
        </div>

        <div className={`p-4 rounded-lg mb-4 ${alerts[currentAlert].bgColor}`}>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <div className="text-xs text-gray-600">TIME</div>
              <div className="font-medium text-gray-900">{alerts[currentAlert].time}</div>
            </div>
            <div>
              <div className="text-xs text-gray-600">NODE</div>
              <div className="font-medium text-gray-900">{alerts[currentAlert].node}</div>
            </div>
          </div>
          <div className="mt-3">
            <div className="text-xs text-gray-600">READING</div>
            <div className="font-medium text-gray-900">{alerts[currentAlert].reading}</div>
          </div>
          <div className="mt-3">
            <div className="text-xs text-gray-600">CONTEXT</div>
            <div className="text-sm text-gray-700">{alerts[currentAlert].context}</div>
          </div>
          <div className="mt-3">
            <div className={`font-medium ${alerts[currentAlert].color}`}>
              {alerts[currentAlert].action}
            </div>
          </div>
        </div>

        <div className="flex space-x-2">
          {alerts.map((_, i) => (
            <div
              key={i}
              className={`h-2 flex-1 rounded-full transition-all duration-500 ${
                i === currentAlert ? "bg-gray-700" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// Development Status Cards - Consistent styling
function DevelopmentStatusCards() {
  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-8"
      >
        <div className="relative max-w-2xl mx-auto">
          <img
            src="/images/hardware-node.webp"
            alt="AI sensor node hardware development"
            className="w-full h-auto rounded-lg shadow-lg border border-gray-200"
            loading="lazy"
          />
          <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded text-sm">
            AI sensor node under development
          </div>
        </div>
        <p className="text-sm text-gray-600 mt-4 italic">
          Hardware prototype with integrated AI processing (In progress)
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 md:gap-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="border border-gray-300 bg-white p-6 md:p-8 rounded-lg"
        >
          <h3 className="text-xl font-bold mb-4 text-gray-900">VLM Training</h3>
          <div className="text-lg font-bold text-gray-700 mb-2">In Progress</div>
          <p className="text-gray-600 mb-4">
            Vision-Language Model under fine-tuning for wildfire detection and classification.
          </p>
          <div className="bg-gray-50 rounded p-3 border border-gray-200">
            <div className="text-sm text-gray-700">Dataset preparation & augmentation</div>
            <div className="text-sm text-gray-700">Multi-modal fusion testing</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="border border-gray-300 bg-white p-6 md:p-8 rounded-lg"
        >
          <h3 className="text-xl font-bold mb-4 text-gray-900">Hardware Build</h3>
          <div className="text-lg font-bold text-gray-700 mb-2">Testing</div>
          <p className="text-gray-600 mb-4">
            Solar-powered sensor nodes deployed for field validation in forest environments.
          </p>
          <div className="bg-gray-50 rounded p-3 border border-gray-200">
            <div className="text-sm text-gray-700">Field deployment & data collection</div>
            <div className="text-sm text-gray-700">Multi-node mesh testing</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="border border-gray-300 bg-white p-6 md:p-8 rounded-lg"
        >
          <h3 className="text-xl font-bold mb-4 text-gray-900">LoRa Mesh</h3>
          <div className="text-lg font-bold text-gray-700 mb-2">Building</div>
          <p className="text-gray-600 mb-4">
            Network topology and communication protocols being implemented.
          </p>
          <div className="bg-gray-50 rounded p-3 border border-gray-200">
            <div className="text-sm text-gray-700">Protocol stack development</div>
            <div className="text-sm text-gray-700">Range testing & optimization</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// What We're Building - Consistent colors
function WhatWereBuilding() {
  const [activeLayer, setActiveLayer] = useState(0);

  const aiLayers = [
    {
      name: "Chemical Detection",
      description:
        "Real-time monitoring of CO₂, humidity, and particulate levels. 250 sensors analyze combustion signatures locally before transmission.",
    },
    {
      name: "Pattern Analysis",
      description:
        "Differentiates smoke from dust, fog, and steam. Cross-references thermal data with visual feeds. Continuous 24/7 monitoring.",
    },
    {
      name: "Alert Protocol",
      description:
        "Sub-second classification and routing. Direct notification to first responders. 89% accuracy in early detection.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLayer((prev) => (prev + 1) % aiLayers.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="mb-12"
    >
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {aiLayers.map((layer, index) => (
            <motion.div
              key={index}
              className={`p-6 rounded-lg border transition-all duration-300 cursor-pointer ${
                activeLayer === index
                  ? "border-gray-400 bg-gray-50"
                  : "border-gray-200 bg-white hover:border-gray-300"
              }`}
              onClick={() => setActiveLayer(index)}
              whileHover={{ y: -2 }}
            >
              <div className="text-center">
                <div
                  className={`w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-4 ${
                    activeLayer === index ? "bg-gray-700" : "bg-gray-200"
                  }`}
                >
                  <div
                    className={`text-xl font-bold ${
                      activeLayer === index ? "text-white" : "text-gray-600"
                    }`}
                  >
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  {layer.name}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {layer.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="hidden md:flex justify-center items-center mt-8 space-x-8">
          <div className="text-sm text-gray-500">Edge Sensors</div>
          <div className="text-gray-400">→</div>
          <div className="text-sm text-gray-500">Visual AI</div>
          <div className="text-gray-400">→</div>
          <div className="text-sm text-gray-500">Smart Alerts</div>
        </div>
      </div>
    </motion.div>
  );
}

// Sensor Showcase - Consistent styling
function SensorShowcase() {
  const [showTerminal, setShowTerminal] = useState(true);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <div className="relative h-[60vh] overflow-hidden rounded-xl bg-gradient-to-br from-gray-800 to-gray-900">
          <img
            src="/images/sensor-showcase.webp"
            alt="Wildfire detection sensor deployment"
            className="w-full h-full object-cover object-right"
            loading="lazy"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/30"></div>

          <div className="absolute inset-0 flex items-center">
            <div className="max-w-6xl mx-auto px-4 md:px-6 w-full">
              <div className="max-w-xl">
                <motion.div
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="text-white"
                >
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    Distributed Intelligence
                  </h3>
                  <p className="text-lg text-white/90 leading-relaxed mb-6">
                    250 sensor nodes processing data locally. Real-time correlation across the network.
                    When one detects an anomaly, adjacent nodes verify. Miles of coverage, millisecond response.
                  </p>
                  <Button
                    onClick={() => setShowTerminal(!showTerminal)}
                    className="bg-white/20 backdrop-blur-sm text-white border border-white/20 hover:bg-white/30"
                  >
                    {showTerminal ? "Hide" : "View dashboard"} →
                  </Button>
                </motion.div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            viewport={{ once: true }}
            className="absolute bottom-1/3 right-1/4 w-4 h-4 bg-gray-700 rounded-full shadow-lg"
          >
            <div className="absolute inset-0 bg-gray-700 rounded-full animate-ping"></div>
          </motion.div>
        </div>
      </motion.div>

      {showTerminal && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <MockDashboard />
        </motion.div>
      )}
    </>
  );
}

// Mock Dashboard - Live inference visualization
function MockDashboard() {
  const [activeNode, setActiveNode] = useState(0);
  const [metrics, setMetrics] = useState({
    temp: 22.3,
    humidity: 45,
    pm25: 12.5,
    co2: 415,
  });

  const nodes = [
    { id: "N-047", status: "active", lat: 38.5234, lng: -122.6762 },
    { id: "N-023", status: "active", lat: 38.2919, lng: -122.4580 },
    { id: "N-012", status: "warning", lat: 39.7596, lng: -121.6219 },
    { id: "N-089", status: "active", lat: 38.7646, lng: -122.9874 },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveNode((prev) => (prev + 1) % nodes.length);
      // Simulate changing metrics
      setMetrics({
        temp: 20 + Math.random() * 10,
        humidity: 40 + Math.random() * 20,
        pm25: 10 + Math.random() * 15,
        co2: 410 + Math.random() * 20,
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white rounded-lg overflow-hidden border border-gray-300">
      <div className="p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-gray-900 rounded-full animate-pulse"></div>
            <span className="text-gray-900 text-xs font-bold tracking-wider">LIVE MONITORING</span>
          </div>
          <span className="text-gray-600 text-xs">250 sensors active</span>
        </div>

        {/* Main Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Left: Node Status */}
          <div className="space-y-4">
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <div className="text-gray-600 text-xs mb-2">ACTIVE SENSOR</div>
              <div className="text-gray-900 font-bold text-lg mb-3">{nodes[activeNode].id}</div>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div>
                  <div className="text-gray-600">Temperature</div>
                  <div className="text-gray-900 font-mono">{metrics.temp.toFixed(1)}°C</div>
                </div>
                <div>
                  <div className="text-gray-600">Humidity</div>
                  <div className="text-gray-900 font-mono">{metrics.humidity.toFixed(0)}%</div>
                </div>
                <div>
                  <div className="text-gray-600">Air Quality</div>
                  <div className="text-gray-900 font-mono">{metrics.pm25.toFixed(1)} µg/m³</div>
                </div>
                <div>
                  <div className="text-gray-600">CO₂ Level</div>
                  <div className="text-gray-900 font-mono">{metrics.co2.toFixed(0)} ppm</div>
                </div>
              </div>
            </div>

            {/* Node List */}
            <div className="space-y-2">
              {nodes.map((node, i) => (
                <div
                  key={i}
                  className={`bg-gray-50 rounded p-2 flex items-center justify-between transition-all border ${
                    i === activeNode ? "border-gray-400" : "border-gray-200"
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div
                      className={`w-2 h-2 rounded-full ${
                        node.status === "warning" ? "bg-gray-600" : "bg-gray-900"
                      }`}
                    />
                    <span className="text-gray-900 text-sm font-mono">{node.id}</span>
                  </div>
                  <span className="text-gray-600 text-xs">
                    {node.lat.toFixed(2)}°, {node.lng.toFixed(2)}°
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Analysis Stream */}
          <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
            <div className="text-gray-600 text-xs mb-3">ANALYSIS LOG</div>
            <div className="space-y-2 font-mono text-xs">
              <div className="text-gray-900">• Analyzing thermal signatures</div>
              <div className="text-gray-700">• Multi-spectral data received</div>
              <div className="text-gray-700">• Processing environmental patterns</div>
              <div className="text-gray-900">• Smoke detection: 89% confidence</div>
              <div className="text-gray-700">• Checking neighboring sensors</div>
              <div className="text-gray-700">• Wind direction: Northwest 12 km/h</div>
              <div className="text-gray-900">• Status: Controlled burn detected</div>
              <div className="text-gray-600">• Alert level: Low risk</div>
              <div className="text-gray-500">• Next analysis in 15 seconds...</div>
            </div>
          </div>
        </div>

        {/* Bottom Status Bar */}
        <div className="mt-6 pt-4 border-t border-gray-200 flex items-center justify-between text-xs">
          <div className="flex items-center space-x-4">
            <span className="text-gray-600">Edge AI Processing</span>
            <span className="text-gray-600">LoRa Network</span>
            <span className="text-gray-600">Solar Powered</span>
          </div>
          <span className="text-gray-500">Response time: 234ms</span>
        </div>
      </div>
    </div>
  );
}

// Team Section - Clean and consistent
function TeamSection() {
  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <div className="border border-gray-300 bg-white p-6 md:p-8 rounded-lg">
          <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-900">
            Contributors
          </h3>
          <p className="text-base md:text-lg text-gray-800 leading-relaxed mb-4">
            <span className="font-semibold text-gray-900">
              navya veeturi • anirudh sharma • dan fitzgerald
            </span>
          </p>
          <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-4">
            <strong className="text-gray-900">Open source initiative.</strong>{" "}
            Engineers from NVIDIA, Amazon.
            Building hardware for extreme environments.
            All code, schematics, and models publicly released.
            Community-driven development.
          </p>

          <Button
            size="lg"
            className="bg-gray-900 text-white hover:bg-gray-800"
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Join the mission
          </Button>
        </div>
      </motion.div>
    </div>
  );
}

// Contact Form - Consistent styling
function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    interest: "",
  });

  const handleMailto = () => {
    const subject = `FIRE Contact: ${formData.interest} - ${formData.name}`;
    const body = `Hi,

Name: ${formData.name}
Email: ${formData.email}
Area of Interest: ${formData.interest}

Message: [Please add your message here]

Best regards,
${formData.name}`;

    const mailtoLink = `mailto:nveeturi@wywa.ai?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  const handleCopyToClipboard = () => {
    const contactInfo = `Subject: FIRE Contact: ${formData.interest} - ${formData.name}
To: nveeturi@wywa.ai

Name: ${formData.name}
Email: ${formData.email}
Area of Interest: ${formData.interest}

Message: [Please add your message here]`;

    navigator.clipboard.writeText(contactInfo).then(() => {
      alert("Contact information copied to clipboard!");
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.interest) {
      alert("Please fill in all fields");
      return;
    }
    handleMailto();
  };

  return (
    <section id="contact" className="py-12 bg-gray-50 border-t">
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="flex flex-col md:flex-row gap-4 items-end"
        >
          <div className="flex-1">
            <input
              type="text"
              placeholder="Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-gray-500"
              required
            />
          </div>
          <div className="flex-1">
            <input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-gray-500"
              required
            />
          </div>
          <div className="flex-1">
            <select
              value={formData.interest}
              onChange={(e) =>
                setFormData({ ...formData, interest: e.target.value })
              }
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-gray-500"
              required
            >
              <option value="">Area of Interest</option>
              <option value="model-distillation">Model Distillation</option>
              <option value="edge-vlms">Edge VLMs</option>
              <option value="power-optimization">Power Optimization</option>
              <option value="radio-communication">Radio Communication</option>
              <option value="saas">SaaS Platform</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="flex gap-2">
            <Button type="submit" className="px-6 py-3 bg-gray-900 text-white hover:bg-gray-800">
              Send Email
            </Button>
            <Button
              type="button"
              variant="outline"
              className="px-4 py-3 text-sm"
              onClick={handleCopyToClipboard}
            >
              Copy
            </Button>
          </div>
        </motion.form>
        <p className="text-xs text-gray-500 text-center mt-4">
          Click "Send Email" to open your email client, or "Copy" to copy
          contact info to clipboard.
        </p>
        <p className="text-sm text-gray-700 text-center mt-2">
          nveeturi@wywa.ai
        </p>
      </div>
    </section>
  );
}