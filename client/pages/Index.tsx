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

                {/* Development focus */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="sketch-border bg-card p-6 md:p-8 mb-6 transform rotate-1"
                >
                  <p className="text-base md:text-lg lg:text-xl text-foreground leading-relaxed mb-4">
                    We are designing an AI-powered system to detect and act on
                    wildfires as they start.
                  </p>
                  <Button
                    size="lg"
                    className="sketch-border transform -rotate-1 hover:rotate-0 transition-transform"
                    onClick={() =>
                      document
                        .getElementById("technology")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                  >
                    See how it works
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

          {/* Technology Cards */}
          <TechnologyCards />

          {/* Process Rail */}
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

// Technology Cards Component
function TechnologyCards() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const cards = [
    {
      title: "Sensors",
      content: {
        hardware: "Gas array, temperature, humidity, camera",
        sampling: "1Hz continuous, 10Hz on anomaly",
        power: "2.4W average, 4.1W peak",
      },
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F2891faa92b574a07a8369948a9a1f207%2F131dac3b4f3e40b0bd5819fd93ecab5c?format=webp&width=800",
      caption:
        "Exploded view of Mother/Daughter node assembly with labeled components.",
    },
    {
      title: "Edge AI",
      content: {
        input: "Multi-modal sensor vectors + visual frames",
        model: "YOLOv8 + custom LoRA, 47MB",
        output: "Smoke probability (0-1), 23ms inference",
      },
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F2891faa92b574a07a8369948a9a1f207%2Fdc10538fe7bc44fea19f318a6ce1e6ef?format=webp&width=800",
      caption:
        "Flow diagram showing sensor fusion and on-device classification.",
    },
    {
      title: "Mesh and Alerts",
      content: {
        network: "LoRa mesh, 915MHz, 1km+ range",
        latency: "Node to gateway: 2-8 seconds",
        alerts: "API → email/dispatch feed, 15-45 second total",
      },
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F2891faa92b574a07a8369948a9a1f207%2F98c0087d75cf4cdeb427c469d0f6a0b6?format=webp&width=800",
      caption:
        "Network topology showing packet routing and alert dispatch flow.",
    },
  ];

  return (
    <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-12">
      {cards.map((card, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="sketch-border bg-card p-6 transform hover:scale-105 transition-all duration-300 cursor-pointer border rounded"
          onClick={() => setExpandedCard(expandedCard === index ? null : index)}
        >
          <h3 className="text-xl font-bold mb-4 text-primary">{card.title}</h3>

          <div className="h-48 w-full mb-4 border rounded overflow-hidden">
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          <p className="text-xs text-gray-600 mb-4 italic">{card.caption}</p>

          {expandedCard === index && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="space-y-3"
            >
              {Object.entries(card.content).map(([key, value]) => (
                <div key={key}>
                  <div className="text-xs font-mono text-muted-foreground uppercase">
                    {key}
                  </div>
                  <div className="text-sm">{value}</div>
                </div>
              ))}
            </motion.div>
          )}
        </motion.div>
      ))}
    </div>
  );
}

// Process Rail Component
function ProcessRail() {
  const steps = [
    { number: 1, title: "Sense", description: "Multi-modal data collection" },
    {
      number: 2,
      title: "Classify on device",
      description: "Edge AI inference",
    },
    {
      number: 3,
      title: "Confirm across peers",
      description: "Mesh validation",
    },
    {
      number: 4,
      title: "Notify county dispatch",
      description: "Alert routing",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-gray-50 border rounded-lg p-6 md:p-8"
    >
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {steps.map((step, index) => (
          <div key={index} className="text-center">
            <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-3">
              {step.number}
            </div>
            <h4 className="font-bold text-sm mb-2">{step.title}</h4>
            <p className="text-xs text-gray-600">{step.description}</p>
            {index < steps.length - 1 && (
              <div className="hidden md:block absolute top-6 left-full w-full h-0.5 bg-gray-300 transform translate-x-4" />
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );
}

// Field Results Cards Component
function FieldResultsCards() {
  return (
    <div className="grid md:grid-cols-2 gap-6 md:gap-8">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="sketch-border bg-card p-6 md:p-8 transform rotate-1 border rounded"
      >
        <h3 className="text-2xl font-bold mb-4 text-primary">Model Accuracy</h3>
        <div className="text-4xl font-black text-primary mb-2">93%</div>
        <p className="text-gray-600 mb-4">
          True positive on controlled burns, 7% false positive rate.
        </p>
        <div className="h-24 bg-gradient-to-r from-green-100 to-green-200 rounded mb-3 flex items-end p-3">
          <div className="grid grid-cols-10 gap-1 w-full h-full">
            {Array.from({ length: 10 }).map((_, i) => (
              <div
                key={i}
                className={`rounded-sm ${i < 9 ? "bg-green-500" : "bg-red-400"}`}
                style={{ height: `${60 + Math.random() * 40}%` }}
              />
            ))}
          </div>
        </div>
        <p className="text-xs text-gray-500">
          <sup>2</sup> Test report: controlled-burn-validation-oct2024.pdf
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="sketch-border bg-card p-6 md:p-8 transform -rotate-1 border rounded"
      >
        <h3 className="text-2xl font-bold mb-4 text-primary">Uptime</h3>
        <div className="text-4xl font-black text-primary mb-2">637</div>
        <p className="text-gray-600 mb-4">
          Node-hours logged since April, zero packet loss events longer than
          three minutes.
        </p>
        <div className="h-24 bg-gradient-to-r from-blue-100 to-blue-200 rounded mb-3 flex items-end p-3">
          <div className="grid grid-cols-12 gap-1 w-full h-full">
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className="bg-blue-500 rounded-sm"
                style={{ height: `${80 + Math.random() * 20}%` }}
              />
            ))}
          </div>
        </div>
        <p className="text-xs text-gray-500">
          <sup>3</sup> Network monitoring dashboard, April-November 2024
        </p>
      </motion.div>
    </div>
  );
}

// Team Section Component
function TeamSection() {
  return (
    <div className="grid md:grid-cols-2 gap-8 md:gap-12">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <p className="text-base md:text-lg text-gray-600 leading-relaxed">
          Shared background in field science and embedded hardware. Team
          combines academic research experience with deployment expertise in
          remote environments. Previous work spans sensor networks, computer
          vision, and environmental monitoring systems.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="space-y-3"
      >
        <div className="flex justify-between items-center border-b border-gray-200 pb-2">
          <span className="font-medium">Navya Veeturi</span>
          <span className="text-sm text-gray-500">embedded engineer</span>
        </div>
        <div className="flex justify-between items-center border-b border-gray-200 pb-2">
          <span className="font-medium">Jaspreet Riar</span>
          <span className="text-sm text-gray-500">data scientist</span>
        </div>
        <div className="flex justify-between items-center border-b border-gray-200 pb-2">
          <span className="font-medium">Anirudh Sharma</span>
          <span className="text-sm text-gray-500">product lead</span>
        </div>
        <div className="flex justify-between items-center border-b border-gray-200 pb-2">
          <span className="font-medium">Dan Fitzgerald</span>
          <span className="text-sm text-gray-500">field ops</span>
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
