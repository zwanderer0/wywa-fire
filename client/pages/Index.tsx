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
                  First Responder Initiative
                </h1>

                {/* Tagline and mission */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="sketch-border bg-card p-6 md:p-8 mb-6 transform rotate-1"
                >
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 text-primary">
                    Detect wildfires early
                  </h2>
                  <p className="text-base md:text-lg text-foreground leading-relaxed mb-4">
                    Non-profit initiative developing AI-powered early detection
                    systems for California Bay Area communities.
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
                    Help join the mission
                  </Button>
                </motion.div>
              </div>
            </motion.div>

            {/* Right: Console Mockup */}
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
              System Overview
            </h2>
          </motion.div>

          {/* Mock Dashboard */}
          <MockDashboard />

          {/* Technology Cards */}
          <TechnologyCards />

          {/* Reference Process Flow */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <div className="max-w-2xl mx-auto">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F2891faa92b574a07a8369948a9a1f207%2F3f07fd4a71334858a87ede111e8a73fa?format=webp&width=800"
                alt="Technical process flow: Data Collection, Edge Processing, Gateway Analysis, Coordinated Response"
                className="w-full h-auto rounded-lg border-2 border-primary/20 shadow-lg"
                loading="lazy"
              />
              <p className="text-sm text-gray-500 mt-4 italic">
                Technical workflow: From sensor data to emergency response
              </p>
            </div>
          </motion.div>

          {/* Interactive Process Rail */}
          <ProcessRail />
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
      <div className="text-center">
        <p className="text-sm md:text-base text-muted-foreground">
          Sensor read-out, five second refresh.
        </p>
      </div>

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
      icon: "🌡️",
      gradient: "from-blue-400 to-cyan-400",
      stats: [
        { label: "Temperature", value: "±0.1°C", icon: "🌡️" },
        { label: "Air Quality", value: "PM2.5", icon: "☁️" },
        { label: "Humidity", value: "±2%", icon: "💧" },
        { label: "Wind", value: "Real-time", icon: "💨" },
      ],
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F2891faa92b574a07a8369948a9a1f207%2F131dac3b4f3e40b0bd5819fd93ecab5c?format=webp&width=800",
    },
    {
      title: "Small VLMs/AI Models",
      icon: "🧠",
      gradient: "from-purple-400 to-pink-400",
      stats: [
        { label: "Model Size", value: "47MB", icon: "📊" },
        { label: "Inference", value: "23ms", icon: "⚡" },
        { label: "Accuracy", value: "94%", icon: "🎯" },
        { label: "Power", value: "2.4W", icon: "🔋" },
      ],
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F2891faa92b574a07a8369948a9a1f207%2Fdc10538fe7bc44fea19f318a6ce1e6ef?format=webp&width=800",
    },
    {
      title: "LoRa Mesh Network",
      icon: "📡",
      gradient: "from-green-400 to-emerald-400",
      stats: [
        { label: "Range", value: "1km+", icon: "📏" },
        { label: "Frequency", value: "915MHz", icon: "📻" },
        { label: "Latency", value: "2-8s", icon: "⏱️" },
        { label: "Nodes", value: "Scalable", icon: "🔗" },
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
                  <div className="flex items-center space-x-2">
                    <span className="text-sm">{stat.icon}</span>
                    <div>
                      <div className="text-xs text-gray-500">{stat.label}</div>
                      <div className="text-sm font-semibold text-gray-800">
                        {stat.value}
                      </div>
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
        { icon: "🌡️", label: "Temperature", color: "text-red-500" },
        { icon: "💧", label: "Humidity", color: "text-blue-500" },
        { icon: "💨", label: "Wind Speed", color: "text-gray-500" },
        { icon: "☁️", label: "Air Quality", color: "text-purple-500" },
      ],
    },
    {
      number: 2,
      title: "Edge Processing",
      description:
        "Small VLMs/AI models analyze sensor readings to detect anomalies:",
      details: [
        {
          icon: "🔥",
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
          icon: "��",
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
          icon: "🚒",
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
                    <span className="text-lg">{detail.icon}</span>
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
        <h3 className="text-xl font-bold mb-4 text-primary">Hardware Build</h3>
        <div className="text-lg font-bold text-blue-600 mb-2">Development</div>
        <p className="text-gray-600 mb-4">
          Sensor arrays and environmental housing being assembled and tested.
        </p>
        <div className="bg-blue-100 rounded p-3">
          <div className="text-sm text-blue-800">
            Current: Prototype assembly
          </div>
          <div className="text-sm text-blue-800">
            Next: Field testing in controlled environment
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
  );
}

// Mock Dashboard Component
function MockDashboard() {
  const [activeDetection, setActiveDetection] = useState(0);

  const detections = [
    {
      id: "DET-001",
      location: "Sonoma County, CA",
      riskScore: 94,
      action: "DISPATCH_CREWS",
      actionLabel: "Fire crews dispatched",
      keyInsight: "Thermal anomaly + smoke pattern in dry conditions",
      sensors: { temp: 43, humidity: 8, pm25: 67, wind: "NE 12mph" },
      timestamp: "13:42:07",
      status: "CRITICAL",
    },
    {
      id: "DET-002",
      location: "Napa Valley, CA",
      riskScore: 31,
      action: "MONITOR",
      actionLabel: "Continued monitoring",
      keyInsight: "Controlled burn signature detected in managed area",
      sensors: { temp: 28, humidity: 45, pm25: 23, wind: "SW 4mph" },
      timestamp: "13:38:22",
      status: "NORMAL",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveDetection((prev) => (prev + 1) % detections.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const current = detections[activeDetection];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="mb-12 sketch-border bg-slate-900 text-white p-6 md:p-8 rounded-lg transform -rotate-1"
    >
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-bold text-emerald-400">
          🔥 WILDFIRE EARLY DETECTION DASHBOARD
        </h3>
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
          <span className="text-sm text-gray-300">LIVE</span>
        </div>
      </div>

      <div className="grid lg:grid-cols-4 gap-6">
        {/* Risk Score - Large Visual */}
        <div className="lg:col-span-1 border border-gray-600 rounded p-6 text-center bg-gray-800/50">
          <div className="text-xs text-gray-400 font-mono mb-2">RISK SCORE</div>
          <div
            className={`text-5xl font-black mb-3 ${current.riskScore > 80 ? "text-red-400" : current.riskScore > 50 ? "text-yellow-400" : "text-green-400"}`}
          >
            {current.riskScore}
          </div>
          <div className="w-full bg-gray-700 rounded-full h-3 mb-3">
            <div
              className={`h-3 rounded-full transition-all duration-1000 ${current.riskScore > 80 ? "bg-gradient-to-r from-red-500 to-red-600" : current.riskScore > 50 ? "bg-gradient-to-r from-yellow-500 to-orange-500" : "bg-gradient-to-r from-green-500 to-emerald-500"}`}
              style={{ width: `${current.riskScore}%` }}
            ></div>
          </div>
          <div
            className={`text-sm font-bold ${current.status === "CRITICAL" ? "text-red-400" : "text-green-400"}`}
          >
            {current.status}
          </div>
        </div>

        {/* Key Insight */}
        <div className="lg:col-span-2 border border-gray-600 rounded p-4 bg-gray-800/50">
          <div className="text-xs text-gray-400 font-mono mb-2">
            🧠 KEY INSIGHT
          </div>
          <div className="text-lg font-medium mb-3 text-white">
            {current.keyInsight}
          </div>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-gray-400">Location:</span>
              <span className="ml-2 text-blue-300">{current.location}</span>
            </div>
            <div>
              <span className="text-gray-400">Time:</span>
              <span className="ml-2 text-blue-300">{current.timestamp}</span>
            </div>
          </div>
        </div>

        {/* Action Taken */}
        <div className="lg:col-span-1 border border-gray-600 rounded p-4 bg-gray-800/50">
          <div className="text-xs text-gray-400 font-mono mb-2">
            ⚡ ACTION TAKEN
          </div>
          <div
            className={`text-lg font-bold mb-2 ${current.action === "DISPATCH_CREWS" ? "text-red-400" : "text-yellow-400"}`}
          >
            {current.actionLabel}
          </div>
          <div className="text-xs text-gray-400">ID: {current.id}</div>
        </div>
      </div>

      {/* Sensor Data Row */}
      <div className="grid grid-cols-4 gap-4 mt-6 p-4 bg-gray-800/30 rounded border border-gray-700">
        <div className="text-center">
          <div className="text-xs text-gray-400 mb-1">🌡️ TEMP</div>
          <div
            className={`text-lg font-bold ${current.sensors.temp > 35 ? "text-red-400" : "text-blue-300"}`}
          >
            {current.sensors.temp}°C
          </div>
        </div>
        <div className="text-center">
          <div className="text-xs text-gray-400 mb-1">💧 HUMIDITY</div>
          <div
            className={`text-lg font-bold ${current.sensors.humidity < 15 ? "text-red-400" : "text-blue-300"}`}
          >
            {current.sensors.humidity}%
          </div>
        </div>
        <div className="text-center">
          <div className="text-xs text-gray-400 mb-1">☁️ PM2.5</div>
          <div
            className={`text-lg font-bold ${current.sensors.pm25 > 50 ? "text-red-400" : "text-green-400"}`}
          >
            {current.sensors.pm25}
          </div>
        </div>
        <div className="text-center">
          <div className="text-xs text-gray-400 mb-1">💨 WIND</div>
          <div className="text-lg font-bold text-blue-300">
            {current.sensors.wind}
          </div>
        </div>
      </div>

      <div className="mt-4 text-xs text-gray-500 text-center">
        Live dashboard showing AI analysis with risk assessment • Development
        prototype
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
              navya veeturi, jaspreet riar, anirudh sharma, dan fitzgerald
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
              🧠 AI/ML Engineers
            </div>
            <div className="text-gray-600">
              Computer vision, edge AI, model optimization
            </div>
          </div>
          <div className="bg-white/70 rounded p-3 border border-primary/20">
            <div className="font-semibold text-primary mb-1">
              🔧 Hardware Engineers
            </div>
            <div className="text-gray-600">
              Sensor networks, embedded systems, IoT
            </div>
          </div>
          <div className="bg-white/70 rounded p-3 border border-primary/20">
            <div className="font-semibold text-primary mb-1">
              🌲 Field Partners
            </div>
            <div className="text-gray-600">
              Pilot deployments, community connections
            </div>
          </div>
        </div>
        <p className="text-sm text-gray-500">
          Modern timelines. Remote-friendly. Impact-driven work.
        </p>
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
