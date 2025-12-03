"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export default function Index() {
  const [typedText, setTypedText] = useState("");
  const [showInviteModal, setShowInviteModal] = useState(false);
  const fullText = "AI for the wilderness";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);
    return () => clearInterval(timer);
  }, []);

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
              <button
                onClick={() => setShowInviteModal(true)}
                className="text-gray-600 hover:text-gray-900"
              >
                Platform Preview <span className="text-xs text-gray-400">(New*)</span>
              </button>
              <a href="#prototypes" className="text-gray-600 hover:text-gray-900">Prototypes</a>
              <a href="#hardware" className="text-gray-600 hover:text-gray-900">Hardware</a>
              <a href="#team" className="text-gray-600 hover:text-gray-900">Team</a>
              <a href="/science" className="text-gray-600 hover:text-gray-900">Science</a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="h-[calc(100vh-60px)] overflow-hidden">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-8 lg:px-12 xl:px-16 h-full">
          <div className="grid lg:grid-cols-2 gap-4 lg:gap-8 h-full">
            {/* Left: Text - vertically centered */}
            <div className="flex flex-col justify-center py-8">
              <div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
                  <span>{typedText}</span>
                  <span className="animate-pulse text-gray-400">_</span>
                </h1>
                <p className="text-gray-700 leading-relaxed mb-4">
                  At WYWA (While You Were Away) we research and build Physical AI systems
                  that smell and see wildfires. No batteries. No internet required. Open Source.
                </p>

                <div className="flex flex-wrap gap-3">
                  <Button
                    className="bg-gray-900 text-white hover:bg-gray-800"
                    onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    Get involved
                  </Button>
                  <a href="/science">
                    <Button variant="outline" className="border-gray-400">
                      The Science
                    </Button>
                  </a>
                </div>
              </div>

              <div className="text-xs text-gray-500 pt-10">
                <div className="mb-2">
                  <span className="mr-2">Featured at:</span>
                  <a
                    href="https://www.ai-infra-summit.com/speakers/navya-veeturi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-gray-900 underline mr-3"
                  >
                    AI Infra Summit 2025
                  </a>
                  <a
                    href="https://www.linkedin.com/posts/rupabhagwat_while-sf-is-celebrating-the-tech-week-if-activity-7381082144426823680-5W00/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-gray-900 underline"
                  >
                    SF Tech Week 2025
                  </a>
                </div>
                <div className="flex items-center gap-4 mt-3">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/0/0c/MIT_logo.svg" alt="MIT" className="h-4 opacity-60" />
                  <img src="https://upload.wikimedia.org/wikipedia/commons/9/9b/Carnegie_Mellon_wordmark.svg" alt="CMU" className="h-4 opacity-60" />
                </div>
              </div>
            </div>

            {/* Right: SNIFFR Image - fills available height, aligned right */}
            <div className="flex items-center justify-center lg:justify-end py-4 h-full">
              <div className="relative rounded-xl overflow-hidden shadow-lg">
                <img
                  src="/images/sniffr-sensor.png"
                  alt="SNIFFR 0.1 Sensor Node"
                  className="max-h-[50vh] lg:h-[calc(100vh-120px)] lg:max-h-none w-auto object-contain"
                />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-xs text-white/90 bg-black/50 backdrop-blur-sm p-3 rounded-lg">
                    <span className="font-medium">SNIFFR 0.1</span> — Detects combustion signatures passively.
                    Battery free design. 10-mile radio range.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-8 lg:px-12 xl:px-16">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-gray-900">
                22 fires start in California every day.
              </h2>
              <p className="text-gray-700 leading-relaxed text-sm">
                <a href="https://www.fire.ca.gov/our-impact/statistics" target="_blank" rel="noopener noreferrer" className="underline">8,000+ wildfires per year</a>.
                Satellites take 15-45 minutes to detect. Cameras wait for visible smoke.
                By then, wind turns a spark into a wall of fire. We studied the fuel—Red Brome,
                Medusahead, Wild oats, Cheatgrass—invasive grasses that release distinct
                VOC signatures when they ignite. Not dust. Not diesel. Not fog.
                Combustion chemistry that our sensors detect in real-time, before anything is visible.
              </p>
            </div>
            <div>
              <ProblemSlider />
            </div>
          </div>
        </div>
      </section>

      {/* Prototypes Section - Tab Based Videos */}
      <section id="prototypes" className="py-12 md:py-16 bg-gray-100">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-8 lg:px-12 xl:px-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 text-gray-900">
              Working Prototypes
            </h2>
          </div>

          <PrototypeDemos />
        </div>
      </section>

      {/* How It Works Section */}
      <section id="hardware" className="py-12 md:py-16 bg-white">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-8 lg:px-12 xl:px-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
              How It Works
            </h2>
          </div>

          <HowItWorksTabs />
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-12 md:py-16 bg-gray-100">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-8 lg:px-12 xl:px-16">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
              Who We Are
            </h2>
            <p className="text-gray-600 mb-4">
              WYWA started in San Francisco—engineers, scientists, and researchers
              from NVIDIA, Amazon Lab126, CMU, and MIT who wanted to understand the environment better.
              Advised by climate scientists and first responders.
            </p>
            <p className="text-gray-600 mb-4">
              We're building sensors and AI that give communities, governments, and responders
              real-time environmental data. Ground-level detection. Local inference.
              Alerts that work where cell towers don't.
            </p>
            <p className="text-gray-600">
              The goal: a sensing network that makes wildfire response faster and
              communities safer. All open source.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 bg-white border-t">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-xl md:text-2xl font-bold mb-6 text-center text-gray-900">
            Get Involved
          </h2>
          <ContactForm />
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
              <a href="/science" className="hover:text-white">Science</a>
              <a href="mailto:nveeturi@wywa.ai" className="hover:text-white">nveeturi@wywa.ai</a>
              <a href="https://linkedin.com/company/wywa-ai" target="_blank" rel="noopener noreferrer" className="hover:text-white">LinkedIn</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Invite Code Modal */}
      {showInviteModal && (
        <InviteModal onClose={() => setShowInviteModal(false)} />
      )}
    </div>
  );
}

// Sound icon component
function SoundIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="inline-block ml-1"
    >
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
      <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
      <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
    </svg>
  );
}

// Prototype Demos - Tab-based video section
function PrototypeDemos() {
  const [activeTab, setActiveTab] = useState("incense");
  const radioVideoRef = useRef<HTMLVideoElement>(null);

  const demos = [
    {
      id: "incense",
      label: "Incense Rejection",
      video: "/videos/incense-reject-test.mov",
      caption: "Incense smoke correctly rejected. Sensor distinguishes combustion signatures from non-threats."
    },
    {
      id: "brushfire",
      label: "Brush Fire",
      video: "/videos/brush-fire-test.mov",
      caption: "Brush fire detected. Alert triggered within seconds of ignition."
    },
    {
      id: "radio",
      label: "Radio Output",
      video: "/videos/radioout.mov",
      caption: "Sensor data translated to speech, broadcast via SDR. No internet.",
      hasAudio: true
    }
  ];

  // Play radio video with audio when tab switches to it
  useEffect(() => {
    if (activeTab === "radio" && radioVideoRef.current) {
      radioVideoRef.current.muted = false;
      radioVideoRef.current.currentTime = 0;
      radioVideoRef.current.play();
    }
  }, [activeTab]);

  return (
    <Tabs defaultValue="incense" value={activeTab} onValueChange={setActiveTab} className="w-full">
      <TabsList className="w-full justify-start bg-gray-200 p-1 rounded-lg mb-4">
        {demos.map(d => (
          <TabsTrigger
            key={d.id}
            value={d.id}
            className="font-mono text-sm data-[state=active]:bg-white data-[state=active]:shadow-sm flex items-center"
          >
            {d.label}
            {d.id === "radio" && <SoundIcon />}
          </TabsTrigger>
        ))}
      </TabsList>
      {demos.map(d => (
        <TabsContent key={d.id} value={d.id}>
          <div className="rounded-lg overflow-hidden border border-gray-300 bg-black relative">
            <video
              ref={d.id === "radio" ? radioVideoRef : undefined}
              src={d.video}
              autoPlay
              loop
              muted={d.id !== "radio" || activeTab !== "radio"}
              playsInline
              className="w-full aspect-video object-contain"
            />
          </div>
          <p className="mt-3 text-sm text-gray-600">{d.caption}</p>
        </TabsContent>
      ))}
    </Tabs>
  );
}

// Contact Form
function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    interest: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.interest) {
      alert("Please fill in all fields");
      return;
    }
    const subject = `WYWA: ${formData.interest} - ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\nInterest: ${formData.interest}`;
    window.location.href = `mailto:nveeturi@wywa.ai?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-3">
      <input
        type="text"
        placeholder="Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        className="flex-1 p-3 border border-gray-300 rounded focus:outline-none focus:border-gray-500 font-mono text-sm"
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        className="flex-1 p-3 border border-gray-300 rounded focus:outline-none focus:border-gray-500 font-mono text-sm"
        required
      />
      <select
        value={formData.interest}
        onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
        className="flex-1 p-3 border border-gray-300 rounded focus:outline-none focus:border-gray-500 font-mono text-sm"
        required
      >
        <option value="">Interest</option>
        <option value="hardware">Hardware</option>
        <option value="ml-models">ML Models</option>
        <option value="deployment">Deployment</option>
        <option value="research">Research</option>
        <option value="other">Other</option>
      </select>
      <Button type="submit" className="bg-gray-900 text-white hover:bg-gray-800">
        Send
      </Button>
    </form>
  );
}

// Invite Code Modal
function InviteModal({ onClose }: { onClose: () => void }) {
  const [inviteCode, setInviteCode] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(true);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg p-6 max-w-md w-full shadow-xl">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-bold">Platform Preview</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 text-xl">
            ×
          </button>
        </div>

        <p className="text-gray-600 text-sm mb-4">
          Enter your invite code to access the platform preview.
        </p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Invite code"
            value={inviteCode}
            onChange={(e) => {
              setInviteCode(e.target.value);
              setError(false);
            }}
            className="w-full p-3 border border-gray-300 rounded mb-3 font-mono text-sm focus:outline-none focus:border-gray-500"
          />

          {error && (
            <div className="bg-gray-100 border border-gray-300 rounded p-3 mb-3 text-sm">
              <p className="text-gray-700 mb-2">Invalid invite code.</p>
              <p className="text-gray-600">
                Email <a href="mailto:nveeturi@wywa.ai" className="text-gray-900 underline">nveeturi@wywa.ai</a> to request access.
              </p>
            </div>
          )}

          <Button type="submit" className="w-full bg-gray-900 text-white hover:bg-gray-800">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
}

// Problem Section Comparison Slider
function ProblemSlider() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleMouseDown = () => {
    isDragging.current = true;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging.current) {
      handleMove(e.clientX);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  return (
    <div className="relative">
      <div
        ref={containerRef}
        className="relative rounded-lg overflow-hidden border border-gray-200 h-64 md:h-80 cursor-ew-resize select-none"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
      >
        {/* Impact image (background) */}
        <img
          src="/images/goldengate.webp"
          alt="Wildfire impact"
          className="absolute inset-0 w-full h-full object-cover"
          draggable={false}
        />

        {/* Fuel image (foreground, clipped) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${sliderPosition}%` }}
        >
          <img
            src="/images/grass.png"
            alt="Fuel samples in lab"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ width: containerRef.current?.offsetWidth || "100%" }}
            draggable={false}
          />
        </div>

        {/* Slider line */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg"
          style={{ left: `${sliderPosition}%` }}
        >
          {/* Slider handle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
            <div className="flex gap-0.5">
              <div className="w-0.5 h-4 bg-gray-400 rounded"></div>
              <div className="w-0.5 h-4 bg-gray-400 rounded"></div>
            </div>
          </div>
        </div>

        {/* Labels */}
        <div className="absolute bottom-2 left-2 bg-black/60 text-white text-xs px-2 py-1 rounded">
          Fuel
        </div>
        <div className="absolute bottom-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded">
          Impact
        </div>
      </div>
      <p className="mt-2 text-xs text-gray-500 text-center">Drag to compare</p>
    </div>
  );
}

// How It Works - Tab-based journey
function HowItWorksTabs() {
  const [activeStep, setActiveStep] = useState("deploy");

  const steps = [
    {
      id: "deploy",
      label: "1. Deploy",
      title: "SNIFFR Nodes",
      description: "Deploy-and-forget sensors. Gas detection distinguishes brush fire from incense, diesel, dust. Solar-powered, battery-free.",
      specs: ["VOC, CO2, particulate detection", "LoRa mesh networking", "Solar harvesting, supercapacitor storage"],
      image: "/images/u3mount.jpg",
      imageAlt: "SNIFFR node mounted in field"
    },
    {
      id: "collect",
      label: "2. Collect",
      title: "Sentinel Hub",
      description: "Receives data from distributed nodes. Hosts VLA, classifiers, SDR, Sat Link. 10-mile range. Works offline.",
      specs: ["On-device ML models", "Software-defined radio transmission", "Camera for visual confirmation"],
      image: "/images/sentinel-system.jpg",
      imageAlt: "Sentinel hub setup"
    },
    {
      id: "process",
      label: "3. Process",
      title: "Edge Inference",
      description: "Local compute runs classification. Cross-attention transformer fuses chemical, visual, and temporal signals. No cloud dependency.",
      specs: ["Real-time VOC pattern matching", "Visual smoke/flame detection", "Multi-modal sensor fusion"],
      image: "/images/sentinel-edge.jpg",
      imageAlt: "Edge compute unit with SDR antennas"
    },
    {
      id: "alert",
      label: "4. Alert",
      title: "Live Dashboard",
      description: "Real-time monitoring of all nodes. Temperature, humidity, GPS, signal strength. Alerts broadcast via SDR radio.",
      specs: ["Text-to-speech radio broadcast", "No internet required", "Instant alert to responders"],
      image: "/images/sentinel-monitor.jpg",
      imageAlt: "Live monitoring dashboard"
    }
  ];

  const currentStep = steps.find(s => s.id === activeStep) || steps[0];

  return (
    <div>
      {/* Tab buttons - horizontal scroll on mobile */}
      <div className="flex overflow-x-auto gap-2 pb-4 mb-6 scrollbar-hide">
        {steps.map((step) => (
          <button
            key={step.id}
            onClick={() => setActiveStep(step.id)}
            className={`flex-shrink-0 px-4 py-2 text-sm font-mono rounded-lg transition-colors ${
              activeStep === step.id
                ? "bg-gray-900 text-white"
                : "bg-gray-200 text-gray-600 hover:bg-gray-300"
            }`}
          >
            {step.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        <div className="order-2 lg:order-1">
          <h3 className="text-xl md:text-2xl font-bold mb-3 text-gray-900">
            {currentStep.title}
          </h3>
          <p className="text-gray-700 mb-4">
            {currentStep.description}
          </p>
          <ul className="space-y-2 text-sm text-gray-600">
            {currentStep.specs.map((spec, i) => (
              <li key={i} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-gray-800 rounded-full flex-shrink-0"></span>
                {spec}
              </li>
            ))}
          </ul>
        </div>
        <div className="order-1 lg:order-2">
          <div className="rounded-lg overflow-hidden border border-gray-200 bg-gray-100">
            <img
              src={currentStep.image}
              alt={currentStep.imageAlt}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>

      {/* Step indicator dots */}
      <div className="flex justify-center gap-2 mt-6">
        {steps.map((step) => (
          <button
            key={step.id}
            onClick={() => setActiveStep(step.id)}
            className={`w-2 h-2 rounded-full transition-colors ${
              activeStep === step.id ? "bg-gray-900" : "bg-gray-300"
            }`}
            aria-label={step.label}
          />
        ))}
      </div>
    </div>
  );
}
