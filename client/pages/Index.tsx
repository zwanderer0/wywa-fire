"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b-2 border-primary bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-3 md:py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="sketch-border bg-primary text-primary-foreground px-2 py-1 transform -rotate-2">
                <span className="font-black text-sm md:text-base sketch-text">
                  FI-RE
                </span>
              </div>
            </div>
            {/* Navigation */}
            <div className="hidden md:flex space-x-6 lg:space-x-8">
              {["Problem", "Technology", "Field Results", "Team"].map(
                (item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase().replace(/\s+/g, "")}`}
                    className="text-muted-foreground hover:text-foreground transition-colors font-normal"
                  >
                    {item}
                  </a>
                ),
              )}
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
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-8 tracking-tight text-primary">
                  Detect
                  <br />
                  wildfires
                  <br />
                  early
                  <br />
                </h1>

                {/* Tagline and mission */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="sketch-border bg-card p-6 md:p-8 mb-6 transform rotate-1"
                >
                  <p className="text-base md:text-lg text-foreground leading-relaxed mb-4">
                    AI enabled sensor network to detect wildfires as they begin
                  </p>
                  <Button
                    size="lg"
                    className="sketch-border transform -rotate-1 hover:rotate-0 transition-transform bg-primary text-primary-foreground hover:bg-primary/90"
                    onClick={() =>
                      document
                        .getElementById("team")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                  >
                    Join the mission
                  </Button>
                </motion.div>
              </div>
            </motion.div>

            {/* Right: Sensor Node Image */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="sketch-border bg-card p-4 md:p-6 transform rotate-1 shadow-lg border rounded overflow-hidden">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F2891faa92b574a07a8369948a9a1f207%2Fbc63e564e9774affadbc8282539649af?format=webp&width=800"
                  alt="Sensor node deployment during golden hour with mountain landscape"
                  className="w-full h-auto rounded-lg"
                  loading="eager"
                />
                <div className="absolute bottom-6 left-6 bg-black/70 text-white px-3 py-1 rounded text-sm font-mono">
                  Live deployment
                </div>
              </div>
              <div className="text-center mt-4">
                <p className="text-sm text-gray-600 italic sketch-text">
                  Sensor node in natural habitat
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problem" className="py-16 md:py-24 bg-muted/30">
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
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-6 md:mb-8 text-primary sketch-text transform -rotate-1"
              >
                About 25 wildfires start every day in California
              </motion.h2>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="sketch-border bg-card p-4 md:p-6 mb-6 transform rotate-1"
              >
                <p className="text-base md:text-lg text-gray-600 mb-4 leading-relaxed">
                  Detection delays cost critical minutes during fire spread.
                  Satellite coverage has 2-6 hour latency in remote areas.
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
              <div className="h-64 md:h-80 lg:h-96 w-full relative sketch-border bg-white transform -rotate-2 overflow-hidden border border-gray-200 rounded">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F2891faa92b574a07a8369948a9a1f207%2Fc5a33b1c6ebe4fe98a728ee5c6fcca7a?format=webp&width=800"
                  alt="Landscape showing wildfire detection challenges"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 sketch-border bg-white/90 p-3 transform rotate-2">
                  <p className="text-xs text-muted-foreground sketch-text">
                    Early detection challenge
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="technology" className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-50px" }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-6 md:mb-8 text-primary sketch-text transform -rotate-1">
              Multimodal AI under the hood
            </h2>
          </motion.div>

          {/* What We're Building */}
          <WhatWereBuilding />

          {/* Mock Dashboard */}
          <MockDashboard />
        </div>
      </section>

      {/* Field Results Section */}
      <section id="fieldresults" className="py-16 md:py-24 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-50px" }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-6 md:mb-8 text-primary sketch-text transform -rotate-1">
              Development Status
            </h2>
          </motion.div>

          <DevelopmentStatusCards />
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-50px" }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-6 md:mb-8 text-primary sketch-text transform rotate-1">
              Team
            </h2>
          </motion.div>

          <TeamSection />
        </div>
      </section>

      {/* Contact Strip */}
      <ContactForm />

      {/* Footer */}
      <footer className="py-8 md:py-12 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div>
              <div className="text-lg font-bold mb-2">
                First Responder Initiative
              </div>
              <p className="text-sm text-gray-300">
                © 2024 WYWA. All rights reserved.
              </p>
            </div>
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <a
                href="mailto:navya@wywa.ai"
                className="text-sm text-gray-300 hover:text-white transition-colors"
              >
                navya@wywa.ai
              </a>
              <a
                href="https://linkedin.com/company/wywa-ai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-300 hover:text-white transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/wywa-ai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-300 hover:text-white transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Hero Detection Demo Component
function HeroDetectionDemo() {
  const [currentAlert, setCurrentAlert] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const alerts = [
    {
      time: "13:04:07",
      location: "Sonoma County",
      node: "Node 47",
      reading: "High PM2.5 detected",
      context: "Vehicle dust pattern + road proximity",
      action: "IGNORE - dust from car",
      color: "text-muted-foreground",
      bgColor: "bg-muted/20",
    },
    {
      time: "13:06:55",
      location: "Napa Valley",
      node: "Node 23",
      reading: "Thin grey column detected",
      context: "Campground area + weekend pattern",
      action: "WARNING - likely campfire",
      color: "text-yellow-600",
      bgColor: "bg-yellow-50",
    },
    {
      time: "13:09:14",
      location: "Paradise Area",
      node: "Node 12",
      reading: "Heat + smoke + wind analysis",
      context: "Remote area + dry conditions + spreading",
      action: "ALERT - wildfire confirmed",
      color: "text-red-600",
      bgColor: "bg-red-50",
    },
  ];

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrentAlert((prev) => (prev + 1) % alerts.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <div className="w-full space-y-6">
      {/* Caption */}
      <div className="text-center"></div>

      {/* Main Detection Card */}
      <div className="sketch-border bg-card p-6 md:p-8 lg:p-10 transform -rotate-1 shadow-lg border rounded">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm md:text-base font-bold text-primary">
              REAL-TIME ANALYSIS
            </span>
          </div>
        </div>

        {/* Current Alert */}
        <div className={`p-4 rounded-lg mb-4 ${alerts[currentAlert].bgColor}`}>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <div className="font-mono text-xs text-muted-foreground">
                TIME
              </div>
              <div className="font-medium">{alerts[currentAlert].time}</div>
            </div>
            <div>
              <div className="font-mono text-xs text-muted-foreground">
                NODE
              </div>
              <div className="font-medium">{alerts[currentAlert].node}</div>
            </div>
          </div>
          <div className="mt-3">
            <div className="font-mono text-xs text-muted-foreground">
              READING
            </div>
            <div className="font-medium">{alerts[currentAlert].reading}</div>
          </div>
          <div className="mt-3">
            <div className="font-mono text-xs text-muted-foreground">
              CONTEXT
            </div>
            <div className="text-sm">{alerts[currentAlert].context}</div>
          </div>
          <div className="mt-3">
            <div className={`font-medium ${alerts[currentAlert].color}`}>
              {alerts[currentAlert].action}
            </div>
          </div>
        </div>

        {/* Progress indicators */}
        <div className="flex space-x-2">
          {alerts.map((_, i) => (
            <div
              key={i}
              className={`h-2 flex-1 rounded-full transition-all duration-500 ${
                i === currentAlert ? "bg-primary scale-110" : "bg-muted"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// Technology Cards Component - Visual & Interactive
function TechnologyCards() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const cards = [
    {
      title: "Edge Sensors",
      gradient: "from-blue-400 to-cyan-400",
      stats: [
        { label: "Temperature", value: "±0.1°C" },
        { label: "Air Quality", value: "PM2.5" },
        { label: "Humidity", value: "±2%" },
        { label: "Wind", value: "Real-time" },
      ],
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F2891faa92b574a07a8369948a9a1f207%2F131dac3b4f3e40b0bd5819fd93ecab5c?format=webp&width=800",
    },
    {
      title: "Small VLMs/AI Models",
      gradient: "from-purple-400 to-pink-400",
      stats: [
        { label: "Model Size", value: "47MB" },
        { label: "Inference", value: "23ms" },
        { label: "Accuracy", value: "94%" },
        { label: "Power", value: "2.4W" },
      ],
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F2891faa92b574a07a8369948a9a1f207%2Fdc10538fe7bc44fea19f318a6ce1e6ef?format=webp&width=800",
    },
    {
      title: "LoRa Mesh Network",
      gradient: "from-green-400 to-emerald-400",
      stats: [
        { label: "Range", value: "1km+" },
        { label: "Frequency", value: "915MHz" },
        { label: "Latency", value: "2-8s" },
        { label: "Nodes", value: "Scalable" },
      ],
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F2891faa92b574a07a8369948a9a1f207%2F98c0087d75cf4cdeb427c469d0f6a0b6?format=webp&width=800",
    },
  ];

  return (
    <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-12">
      {cards.map((card, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: index * 0.2 }}
          viewport={{ once: true }}
          className="group relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
          onMouseEnter={() => setHoveredCard(index)}
          onMouseLeave={() => setHoveredCard(null)}
        >
          {/* Gradient Background */}
          <div
            className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-500`}
          />

          {/* Card Content */}
          <div className="relative p-6">
            {/* Header */}
            <div
              className={`w-12 h-12 rounded-full bg-gradient-to-r ${card.gradient} flex items-center justify-center text-white font-bold mb-4`}
            >
              {index + 1}
            </div>

            <h3 className="text-lg font-bold mb-6 text-gray-800">
              {card.title}
            </h3>

            {/* Interactive Image */}
            <div className="h-32 w-full mb-6 rounded-lg overflow-hidden bg-gray-100">
              <motion.img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover"
                loading="lazy"
                animate={{
                  scale: hoveredCard === index ? 1.1 : 1,
                  filter:
                    hoveredCard === index ? "brightness(1.1)" : "brightness(1)",
                }}
                transition={{ duration: 0.3 }}
              />
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-3">
              {card.stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  className="bg-gray-50 rounded-lg p-3 border border-gray-100"
                  initial={{ opacity: 0.7, y: 10 }}
                  animate={{
                    opacity: hoveredCard === index ? 1 : 0.8,
                    y: hoveredCard === index ? 0 : 5,
                  }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <div>
                    <div className="text-xs text-gray-500">{stat.label}</div>
                    <div className="text-sm font-semibold text-gray-800">
                      {stat.value}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Hover Indicator */}
            <motion.div
              className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: hoveredCard === index ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
}

// Visual Process Rail Component based on reference image
function ProcessRail() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      number: 1,
      title: "Data Collection",
      description:
        "Edge sensors continuously monitor environmental conditions including:",
      details: [
        { label: "Temperature", color: "text-red-500" },
        { label: "Humidity", color: "text-blue-500" },
        { label: "Wind Speed", color: "text-gray-500" },
        { label: "Air Quality", color: "text-purple-500" },
      ],
    },
    {
      number: 2,
      title: "Edge Processing",
      description:
        "Small VLMs/AI models analyze sensor readings to detect anomalies:",
      details: [
        {
          label: "Smoke detected, thermal anomaly confirmed",
          color: "text-red-600",
        },
      ],
    },
    {
      number: 3,
      title: "Gateway Analysis",
      description: "Mother node validates with additional data:",
      details: [
        {
          label: "Visual confirmation via camera feed",
          color: "text-yellow-600",
        },
      ],
    },
    {
      number: 4,
      title: "Coordinated Response",
      description: "Cloud system triggers appropriate response:",
      details: [
        {
          label: "Fire teams dispatched to precise coordinates",
          color: "text-green-600",
        },
      ],
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-white border-2 border-blue-200 rounded-lg p-6 md:p-8"
    >
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className={`relative ${activeStep === index ? "scale-105" : "scale-100"} transition-all duration-500`}
            initial={{ opacity: 0.6 }}
            animate={{ opacity: activeStep === index ? 1 : 0.7 }}
          >
            {/* Step Number */}
            <div
              className={`w-16 h-16 rounded-full flex items-center justify-center font-bold text-xl mb-4 mx-auto transition-all duration-500 ${
                activeStep === index
                  ? "bg-blue-500 text-white shadow-lg"
                  : "bg-blue-100 text-blue-600"
              }`}
            >
              {step.number}
            </div>

            {/* Connecting Line */}
            {index < steps.length - 1 && (
              <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-blue-200 transform translate-x-4 -translate-y-1/2">
                <motion.div
                  className="h-full bg-blue-500"
                  initial={{ width: "0%" }}
                  animate={{ width: activeStep > index ? "100%" : "0%" }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            )}

            {/* Content */}
            <div className="text-center">
              <h4 className="font-bold text-lg mb-3 text-gray-800">
                {step.title}
              </h4>
              <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                {step.description}
              </p>

              {/* Details */}
              <div className="space-y-2">
                {step.details.map((detail, idx) => (
                  <motion.div
                    key={idx}
                    className={`flex items-center justify-center space-x-2 p-2 rounded ${
                      activeStep === index ? "bg-blue-50" : "bg-gray-50"
                    }`}
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{
                      scale: activeStep === index ? 1 : 0.95,
                      opacity: activeStep === index ? 1 : 0.7,
                    }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <span className={`text-sm font-medium ${detail.color}`}>
                      {detail.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Progress Dots */}
      <div className="flex justify-center space-x-2 mt-8">
        {steps.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveStep(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              activeStep === index ? "bg-blue-500 scale-125" : "bg-blue-200"
            }`}
          />
        ))}
      </div>
    </motion.div>
  );
}

// Development Status Cards Component
function DevelopmentStatusCards() {
  return (
    <div className="space-y-8">
      {/* Real Hardware Photo */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-8"
      >
        <div className="relative max-w-2xl mx-auto">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F2891faa92b574a07a8369948a9a1f207%2F17493cbb65a5405a9c31ee973001362b?format=webp&width=800"
            alt="Wildfire detection sensor node deployed on tree with solar panel in forest environment"
            className="w-full h-auto rounded-lg shadow-lg border border-gray-200"
            loading="lazy"
          />
          <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded text-sm">
            Field Deployment
          </div>
        </div>
        <p className="text-sm text-gray-600 mt-4 italic">
          Lab level sensor node deployed for testing (In progress)
        </p>
      </motion.div>

      {/* Status Cards */}
      <div className="grid md:grid-cols-3 gap-6 md:gap-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="sketch-border bg-card p-6 md:p-8 transform rotate-1 border rounded"
        >
          <h3 className="text-xl font-bold mb-4 text-primary">VLM Training</h3>
          <div className="text-lg font-bold text-yellow-600 mb-2">
            In Progress
          </div>
          <p className="text-gray-600 mb-4">
            Vision-Language Model under fine-tuning for wildfire detection and
            classification.
          </p>
          <div className="bg-yellow-100 rounded p-3">
            <div className="text-sm text-yellow-800">
              Current: Dataset preparation & augmentation
            </div>
            <div className="text-sm text-yellow-800">
              Next: Multi-modal fusion testing
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="sketch-border bg-card p-6 md:p-8 transform -rotate-1 border rounded"
        >
          <h3 className="text-xl font-bold mb-4 text-primary">
            Hardware Build
          </h3>
          <div className="text-lg font-bold text-blue-600 mb-2">Testing</div>
          <p className="text-gray-600 mb-4">
            Solar-powered sensor nodes deployed for field validation in forest
            environments.
          </p>
          <div className="bg-blue-100 rounded p-3">
            <div className="text-sm text-blue-800">
              Current: Field deployment & data collection
            </div>
            <div className="text-sm text-blue-800">
              Next: Multi-node mesh testing
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="sketch-border bg-card p-6 md:p-8 transform rotate-1 border rounded"
        >
          <h3 className="text-xl font-bold mb-4 text-primary">LoRa Mesh</h3>
          <div className="text-lg font-bold text-green-600 mb-2">Building</div>
          <p className="text-gray-600 mb-4">
            Network topology and communication protocols being implemented.
          </p>
          <div className="bg-green-100 rounded p-3">
            <div className="text-sm text-green-800">
              Current: Protocol stack development
            </div>
            <div className="text-sm text-green-800">
              Next: Range testing & optimization
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// What We're Building Component
function WhatWereBuilding() {
  const [activeLayer, setActiveLayer] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const aiLayers = [
    {
      name: "Edge AI Sensors",
      description:
        "Sensors monitor humidity and CO2 signatures across 200-250 nodes per sentinel. Edge classifiers identify chemical combustion patterns locally on sensor node, and transmit inference.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "Multimodal Fusion",
      description:
        " Correlate Sensor data with visual smoke plumes, differentiating between fire, dust, fog. Understands movement patterns and environmental context, all processed locally.",
      color: "from-purple-500 to-pink-500",
    },
    {
      name: "Context Engine",
      description:
        "Decides what to do with the information. Generates mobile, Emergency Radio alerts to first responders who verify before community notification. All runs locally on Jetson hardware.",
      color: "from-orange-500 to-red-500",
    },
  ];

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setActiveLayer((prev) => (prev + 1) % aiLayers.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isHovered, aiLayers.length]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="mb-12"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Header */}

      {/* Interactive AI Layers */}
      <div className="relative">
        {/* Simplified Flow */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {aiLayers.map((layer, index) => (
              <motion.div
                key={index}
                className={`p-6 rounded-lg border transition-all duration-300 ${
                  activeLayer === index
                    ? "border-blue-300 bg-blue-50"
                    : "border-gray-200 bg-white hover:border-gray-300"
                }`}
                onClick={() => setActiveLayer(index)}
                whileHover={{ y: -2 }}
              >
                <div className="text-center">
                  <div
                    className={`w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-4 ${
                      activeLayer === index ? "bg-blue-500" : "bg-gray-100"
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

          {/* Simple Flow Arrows */}
          <div className="hidden md:flex justify-center items-center mt-8 space-x-8">
            <div className="text-sm text-gray-500">Edge Sensors</div>
            <div className="text-gray-400">→</div>
            <div className="text-sm text-gray-500">Visual AI</div>
            <div className="text-gray-400">→</div>
            <div className="text-sm text-gray-500">Smart Alerts</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Tactical Dashboard Component (inspired by command center interfaces)
function MockDashboard() {
  const [activeDetection, setActiveDetection] = useState(0);
  const [alertLevel, setAlertLevel] = useState("NORMAL");
  const [logs, setLogs] = useState([]);
  const [logIndex, setLogIndex] = useState(0);
  const [isInferenceComplete, setIsInferenceComplete] = useState(false);

  const detections = [
    {
      id: "SENT-002",
      location: "Sonoma County",
      coords: "38.2911°N, 122.4583°W",
      confidence: 0.94,
      sensors: { humidity: 23, co2: 850, wind: "SSW" },
      status: "CONFIRMED FIRE",
      timestamp: "12:47:51 PM",
      aiStage: "CONFIRMED",
      bayesianScore: 0.92,
      sensorCount: 247,
      alerts: [
        { time: "12:47:51 PM", event: "Confirmed fire", sensor: "Sensor 4" },
        { time: "12:46:51 PM", event: "Smoke detected", sensor: "Sensor 4" },
      ],
    },
    {
      id: "SENT-001",
      location: "Napa Valley",
      coords: "38.5025°N, 122.2654°W",
      confidence: 0.67,
      sensors: { humidity: 45, co2: 420, wind: "NW" },
      status: "MONITORING",
      timestamp: "12:38:22 PM",
      aiStage: "MONITORING",
      bayesianScore: 0.31,
      sensorCount: 203,
      alerts: [
        { time: "12:38:22 PM", event: "Anomaly detected", sensor: "Sensor 2" },
      ],
    },
  ];

  const inferenceStreams = [
    [
      "12:47:49 [EDGE] Classifier detecting gas signature across 247 sensors...",
      "12:47:49 [EDGE] CO2: 850ppm (elevated), VOCs: combustion signature",
      "12:47:50 [VISUAL] VLM analyzing smoke plume geometry...",
      "12:47:50 [VISUAL] Pattern: vertical column, velocity: slow rise",
      "12:47:50 [VISUAL] Background: forest canopy, no dust sources",
      "12:47:51 [CONTEXT] Weather: dry conditions, wind SSW 12mph",
      "12:47:51 [CONTEXT] Proximity: 0.3mi to residential area",
      "12:47:51 [CONTEXT] Bayesian score: 0.92 (high confidence)",
      "12:47:51 [DECISION] FIRE CONFIRMED - first responder alert",
      "12:47:51 [ALERT] First responders notified for confirmation",
      "12:47:52 [SYSTEM] Human verification required before community alert",
      "12:47:52 [STATUS] Awaiting field confirmation...",
    ],
    [
      "12:38:20 [EDGE] Classifier scanning 203 sensors for anomalies...",
      "12:38:21 [EDGE] CO2: 420ppm (normal atmospheric), no VOCs",
      "12:38:21 [VISUAL] VLM scanning for visual confirmation...",
      "12:38:22 [VISUAL] No visible smoke plume detected",
      "12:38:22 [CONTEXT] Weather: moderate humidity 45%",
      "12:38:22 [CONTEXT] Wind: NW direction, normal patterns",
      "12:38:22 [CONTEXT] Bayesian score: 0.31 (low confidence)",
      "12:38:22 [DECISION] Below fire threshold - monitoring",
      "12:38:22 [STATUS] Sensor network SENT-001 continuing surveillance",
    ],
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      const newIndex = (activeDetection + 1) % detections.length;
      setActiveDetection(newIndex);
      setAlertLevel(
        detections[newIndex].status === "CONFIRMED FIRE"
          ? "CRITICAL"
          : "NORMAL",
      );
      setLogs([]);
      setLogIndex(0);
      setIsInferenceComplete(false);
    }, 15000); // Increased from 8000 to 15000 for better readability
    return () => clearInterval(interval);
  }, [activeDetection]);

  useEffect(() => {
    const currentStream = inferenceStreams[activeDetection];
    if (logIndex < currentStream.length) {
      const timer = setTimeout(
        () => {
          setLogs((prev) => [...prev, currentStream[logIndex]]);
          setLogIndex((prev) => prev + 1);

          // Check if this is the last log entry to mark inference as complete
          if (logIndex + 1 === currentStream.length) {
            setTimeout(() => setIsInferenceComplete(true), 500);
          }
        },
        400 + Math.random() * 300, // Slightly slower typing for readability
      );
      return () => clearTimeout(timer);
    }
  }, [logIndex, activeDetection, inferenceStreams]);

  const current = detections[activeDetection];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="mb-12 bg-gray-50 rounded-xl overflow-hidden shadow-lg border border-gray-200"
    >
      {/* Header */}
      <div className="bg-white p-4 flex items-center justify-between border-b border-gray-200">
        <div className="flex items-center space-x-3">
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
          <div className="font-mono text-lg text-gray-800">
            WYWA Command Terminal
          </div>
          <div className="text-xs text-gray-500 font-mono">
            [{current.location}]
          </div>
        </div>
        <div
          className={`px-3 py-1 rounded text-xs font-mono ${
            alertLevel === "CRITICAL"
              ? "bg-red-100 text-red-800 border border-red-200"
              : `bg-gray-100 text-gray-600 border border-gray-200 ${isInferenceComplete && alertLevel === "NORMAL" ? "animate-pulse" : ""}`
          }`}
        >
          {alertLevel}
        </div>
      </div>

      <div className="grid lg:grid-cols-[1.8fr,1.2fr,1.3fr] h-[500px]">
        {/* Left: Streaming Inference Logs */}
        <div className="bg-gray-50 p-4 overflow-y-auto border-r border-gray-200">
          <div className="text-gray-500 text-xs font-mono mb-3">
            $ wywa-inference --stream --node={current.id}
          </div>
          <div className="space-y-1">
            {logs.map((log, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className={`text-xs font-mono leading-relaxed ${
                  log.includes("[EDGE]")
                    ? "text-gray-700"
                    : log.includes("[VISUAL]")
                      ? "text-gray-700"
                      : log.includes("[CONTEXT]")
                        ? "text-gray-700"
                        : log.includes("[DECISION]")
                          ? "text-gray-800 font-medium"
                          : log.includes("[ALERT]") &&
                              log.includes("First responders")
                            ? "text-red-600 font-medium"
                            : log.includes("[ALERT]")
                              ? "text-gray-800 font-medium"
                              : log.includes("[SYSTEM]")
                                ? "text-gray-600"
                                : "text-gray-500"
                } ${isInferenceComplete && (log.includes("normal") || log.includes("continuing surveillance")) ? "animate-pulse" : ""}`}
              >
                {log}
              </motion.div>
            ))}
            {logIndex < inferenceStreams[activeDetection].length && (
              <div className="text-gray-600 animate-pulse">▋</div>
            )}
          </div>
        </div>

        {/* Center: Key Interpretation */}
        <div className="bg-white p-4 border-r border-gray-200">
          <div className="text-gray-700 text-sm font-mono mb-4 border-b border-gray-200 pb-2">
            LOCAL EDGE AI ANALYSIS
          </div>

          <div className="space-y-3">
            {/* Network Status */}
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <div className="text-xs text-gray-600 mb-2">Network Status</div>
              <div className="text-sm text-gray-800 mb-1">
                {current.sensorCount} sensors → 1 sentinel
              </div>
              <div className="text-xs text-gray-500">
                {current.location} • {current.timestamp}
              </div>
            </div>

            {/* Bayesian Score */}
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <div className="text-xs text-gray-600 mb-2">Bayesian Score</div>
              <div className="flex items-center space-x-3">
                <div className="text-lg font-semibold text-gray-800">
                  {(current.bayesianScore * 100).toFixed(0)}%
                </div>
                <div className="flex-1 bg-gray-200 h-2 rounded">
                  <div
                    className={`h-2 rounded ${current.bayesianScore > 0.8 ? "bg-blue-500" : "bg-gray-400"}`}
                    style={{ width: `${current.bayesianScore * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Processing Status */}
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <div className="text-xs text-gray-600 mb-2">Local Processing</div>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-700">Edge Classifiers</span>
                  <span className="text-gray-600">ACTIVE</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Visual AI</span>
                  <span className="text-gray-600">PROCESSING</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">
                    CO2: {current.sensors.co2}ppm
                  </span>
                  <span
                    className={
                      current.sensors.co2 > 600
                        ? "text-red-600"
                        : `text-gray-600 ${isInferenceComplete && current.sensors.co2 <= 600 ? "animate-pulse" : ""}`
                    }
                  >
                    {current.sensors.co2 > 600 ? "ELEVATED" : "NORMAL"}
                  </span>
                </div>
              </div>
            </div>

            {/* Alert Status */}
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <div className="text-xs text-gray-600 mb-2">Alert Protocol</div>
              <div className="space-y-2 text-xs">
                <div
                  className={`flex justify-between ${current.status === "CONFIRMED FIRE" ? "text-red-600 font-medium" : "text-gray-500"}`}
                >
                  <span>First Responders</span>
                  <span>
                    {current.status === "CONFIRMED FIRE"
                      ? "NOTIFIED"
                      : "STANDBY"}
                  </span>
                </div>
                <div className="flex justify-between text-gray-500">
                  <span>Community Alerts</span>
                  <span>AWAITING CONFIRMATION</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Visual Confirmation & Alert */}
        <div className="bg-gray-100 p-4">
          <div className="text-gray-700 text-sm font-mono mb-4 border-b border-gray-200 pb-2">
            VISUAL CONFIRMATION
          </div>

          {current.status === "CONFIRMED FIRE" ? (
            <div className="space-y-4">
              {/* Thermal Image Display */}
              <div className="bg-white rounded-lg p-3 border border-gray-200">
                <div className="text-xs text-gray-600 mb-2">
                  Thermal Signature
                </div>
                <div className="relative rounded h-24 overflow-hidden border border-gray-200">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F2891faa92b574a07a8369948a9a1f207%2Fdaff0af9ddf84f06995f2f1da2b2b465?format=webp&width=800"
                    alt="Thermal signature showing fire detection"
                    className="w-full h-full object-cover"
                  />
                  {/* Direction indicator */}
                  <div className="absolute bottom-1 right-1 text-xs text-white font-mono bg-black bg-opacity-50 px-1 rounded">
                    SE
                  </div>
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  Heat signature detected SE direction
                </div>
              </div>

              {/* First Responder Phone */}
              <div className="bg-white rounded-lg p-3 border border-gray-200">
                <div className="text-xs text-gray-600 mb-2">
                  First Responder Alert
                </div>

                {/* Phone with actual content */}
                <div className="mx-auto w-40 h-72 border-2 border-gray-300 rounded-xl relative bg-gray-900">
                  {/* Screen area */}
                  <div className="absolute inset-2 bg-white rounded-lg">
                    {/* Status bar */}
                    <div className="h-6 bg-gray-100 rounded-t-lg flex justify-between items-center px-2 text-xs">
                      <span>9:41</span>
                      <span>100%</span>
                    </div>

                    {/* Alert content */}
                    <div className="p-3 space-y-2">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        <span className="text-xs font-bold text-red-600">
                          FIRE ALERT
                        </span>
                      </div>
                      <div className="text-xs text-gray-700 space-y-1">
                        <div>📍 {current.location}</div>
                        <div>🎯 {current.coords}</div>
                        <div>
                          📊 {(current.bayesianScore * 100).toFixed(0)}%
                          confidence
                        </div>
                        <div>🔥 CO2: {current.sensors.co2}ppm</div>
                      </div>
                      <div className="text-xs text-gray-600 bg-yellow-50 p-2 rounded">
                        Field verification needed
                      </div>
                    </div>

                    {/* Action buttons */}
                    <div className="absolute bottom-3 left-3 right-3 grid grid-cols-2 gap-2">
                      <div className="bg-red-500 text-white text-xs py-2 px-2 rounded text-center font-medium">
                        CONFIRM
                      </div>
                      <div className="bg-gray-300 text-gray-700 text-xs py-2 px-2 rounded text-center font-medium">
                        FALSE
                      </div>
                    </div>
                  </div>

                  {/* Home indicator */}
                  <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-gray-400 rounded-full"></div>
                </div>

                <div className="text-xs text-gray-500 mt-2 text-center">
                  Alert sent for verification
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
              <div className="text-gray-600 text-sm mb-2">
                No Active Detection
              </div>
              <div
                className={`text-xs text-gray-500 ${isInferenceComplete ? "animate-pulse" : ""}`}
              >
                Visual monitoring normal
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
// Team Section Component
function TeamSection() {
  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-8"
      >
        <div className="sketch-border bg-card p-6 md:p-8 transform rotate-1 mb-6">
          <p className="text-base md:text-lg text-foreground leading-relaxed mb-4">
            <span className="font-semibold text-primary">
              navya veeturi, anirudh sharma, jaspreet riar, dan fitzgerald
            </span>
          </p>
          <p className="text-sm md:text-base text-gray-600 leading-relaxed">
            People passionate about environment. Background in entrepreneurship,
            leading large projects at NVIDIA, Amazon, and research labs.
            Interdisciplinary researchers bridging nature and technology. Field
            scientists who spend weeks in wilderness. Hardware engineers
            building for extreme environments.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="sketch-border bg-accent/20 p-4 md:p-6 transform -rotate-1"
        >
          <p className="text-sm md:text-base text-foreground leading-relaxed">
            We believe breakthroughs happen at intersections.
            <span className="font-bold text-primary">
              {" "}
              Policy, tech, impact
            </span>{" "}
            through collaboration.
          </p>
        </motion.div>
      </motion.div>

      {/* Call to Action for Contributors */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
        className="text-center bg-primary/5 rounded-lg p-6 md:p-8 border-2 border-primary/20"
      >
        <h3 className="text-xl md:text-2xl font-bold mb-4 text-primary">
          Join Our Mission
        </h3>
        <p className="text-base md:text-lg text-gray-700 mb-6 leading-relaxed">
          We're looking for passionate individuals with backgrounds in AI,
          hardware engineering, and field deployment to help bring early
          wildfire detection to California communities.
        </p>
        <div className="grid md:grid-cols-3 gap-4 mb-6 text-sm">
          <div className="bg-white/70 rounded p-3 border border-primary/20">
            <div className="font-semibold text-primary mb-1">
              AI/ML Engineers
            </div>
            <div className="text-gray-600">edge AI, model distillation</div>
          </div>
          <div className="bg-white/70 rounded p-3 border border-primary/20">
            <div className="font-semibold text-primary mb-1">
              Hardware Engineers
            </div>
            <div className="text-gray-600">
              Sensor networks, embedded systems
            </div>
          </div>
          <div className="bg-white/70 rounded p-3 border border-primary/20">
            <div className="font-semibold text-primary mb-1">
              Field Partners
            </div>
            <div className="text-gray-600">
              Pilot deployments, community connections
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

// Contact Form Component
function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    interest: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement /api/contact endpoint
    console.log("Form submitted:", formData);
  };

  return (
    <section className="py-12 bg-gray-50 border-t">
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
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-primary"
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
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-primary"
              required
            />
          </div>
          <div className="flex-1">
            <select
              value={formData.interest}
              onChange={(e) =>
                setFormData({ ...formData, interest: e.target.value })
              }
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-primary"
              required
            >
              <option value="">Area of Interest</option>
              <option value="deployment">Deployment Partnership</option>
              <option value="technical">Technical Collaboration</option>
              <option value="research">Research Interest</option>
              <option value="other">Other</option>
            </select>
          </div>
          <Button type="submit" className="px-6 py-3">
            Submit
          </Button>
        </motion.form>
        <p className="text-xs text-gray-500 text-center mt-4">
          We share quarterly deployment notes; no marketing mail.
        </p>
      </div>
    </section>
  );
}
