import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export default function Index() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/90 backdrop-blur-md border-b-2 border-primary">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="sketch-border bg-primary text-primary-foreground px-3 py-2 transform rotate-1">
                <div className="text-lg md:text-xl font-black tracking-tight">
                  <span className="text-destructive">FI</span>
                  <span className="text-accent">RE</span>
                </div>
              </div>
              <div className="hidden sm:block text-sm font-medium text-muted-foreground">
                Initiative
              </div>
            </div>
            <div className="hidden md:flex space-x-6 lg:space-x-8">
              {["Problem", "Solution", "Progress", "Team", "Get Involved"].map(
                (item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase().replace(" ", "")}`}
                    className="text-muted-foreground hover:text-foreground transition-colors font-medium"
                  >
                    {item}
                  </a>
                ),
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative pt-20 bg-gradient-to-b from-sky-50 to-earth-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left: Title and Mission */}
            <motion.div {...fadeInUp} className="space-y-6 md:space-y-8">
              <div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-8 tracking-tight text-primary">
                  First Responder Initiative
                </h1>

                {/* Who We Are - People Focused */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="sketch-border bg-card p-6 md:p-8 mb-6 transform rotate-1"
                >
                  <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-primary mb-4 sketch-text">
                    WHO WE ARE
                  </h2>
                  <p className="text-base md:text-lg lg:text-xl text-foreground leading-relaxed sketch-text mb-4">
                    Interdisciplinary researchers bridging nature and
                    technology. Field scientists who spend weeks in wilderness.
                    Hardware engineers building for extreme environments.
                  </p>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed sketch-text">
                    We believe breakthroughs happen at intersections.{" "}
                    <span className="font-bold text-primary">
                      Policy, tech, impact
                    </span>{" "}
                    through collaboration.
                  </p>
                </motion.div>

                {/* Research Focus */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="sketch-border bg-accent/20 p-4 md:p-6 transform -rotate-1"
                >
                  <h3 className="text-sm md:text-base font-bold text-primary mb-3 sketch-text">
                    RESEARCH FOCUS
                  </h3>
                  <p className="text-sm md:text-base lg:text-lg text-foreground sketch-text">
                    <span className="font-bold text-primary">Vision AI</span>{" "}
                    for environmental monitoring.{" "}
                    <span className="font-bold text-primary">
                      Sensor networks
                    </span>{" "}
                    for remote detection. Real-world deployment at scale.
                  </p>
                </motion.div>
              </div>
            </motion.div>

            {/* Right: Enhanced Interactive Demo */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="w-full"
            >
              <EnhancedDetectionDemo />
            </motion.div>
          </div>
        </div>

        {/* Hand-drawn landscape background */}
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none">
            <path
              d="M0,600 Q100,400 200,450 Q300,350 400,400 Q500,300 600,350 Q700,250 800,300 Q900,200 1000,250 Q1100,180 1200,220 L1200,800 L0,800 Z"
              fill="currentColor"
              className="text-forest-400"
            />
            <path
              d="M0,650 Q150,500 300,550 Q450,450 600,500 Q750,400 900,450 Q1050,350 1200,400 L1200,800 L0,800 Z"
              fill="currentColor"
              className="text-forest-500"
            />
          </svg>
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
                className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-6 md:mb-8 text-primary sketch-text transform -rotate-1"
              >
                THE PROBLEM
              </motion.h2>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="sketch-border bg-card p-4 md:p-6 mb-6 transform rotate-1"
              >
                <p className="text-base md:text-lg lg:text-xl text-foreground mb-4 leading-relaxed sketch-text">
                  Wildfires devastate millions of acres annually. Early
                  detection remains unsolved at scale.
                </p>
                <p className="text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed mb-4">
                  Current systems fail in remote areas where fires start. By the
                  time smoke is visible to satellites or observers, precious
                  hours are lost.
                </p>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  California's 33 million acres of forest need intelligent
                  monitoring across{" "}
                  <span className="font-bold text-primary">
                    thousands of miles
                  </span>{" "}
                  of unmonitored wilderness.
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
              {/* Actual landscape sketch */}
              <div className="h-64 md:h-80 lg:h-96 w-full relative sketch-border bg-white transform -rotate-2 overflow-hidden">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F2891faa92b574a07a8369948a9a1f207%2F752115d793c74cf1b1bcf1759d4eac1e?format=webp&width=800"
                  alt="Hand-drawn landscape showing wildfire detection challenges across vast remote areas with smoke plumes and monitoring equipment"
                  className="w-full h-full object-cover"
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

      {/* Solution Section */}
      <section id="solution" className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-12 md:mb-16"
          >
            <motion.h2
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-6 md:mb-8 text-primary sketch-text transform rotate-1"
            >
              FIRST RESPONDER
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="sketch-border bg-card p-4 md:p-6 max-w-3xl mx-auto transform -rotate-1"
            >
              <p className="text-base md:text-lg lg:text-xl text-foreground sketch-text">
                AI-powered sensor network that detects, analyzes, and reports to
                government agencies in real-time
              </p>
            </motion.div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center mb-12 md:mb-16">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="sketch-border bg-card p-6 md:p-8 transform rotate-2">
                <div className="text-sm text-primary font-mono mb-4 sketch-text transform -rotate-1">
                  DETECTION LOG
                </div>
                <div className="space-y-4 text-sm font-mono">
                  <div className="text-sky-600 sketch-highlight transform rotate-0.5">
                    → PM2.5 observed, confirmed it's dust from car
                  </div>
                  <div className="text-forest-600">
                    → Temperature normal, humidity 65%
                  </div>
                  <div className="text-destructive font-bold sketch-highlight transform -rotate-0.5">
                    → Smoke observed, confirmed with thermal data, triggering
                    mini alert...
                  </div>
                  <div className="text-primary font-bold">
                    Report sent to government agencies
                  </div>
                  <div className="text-muted-foreground text-xs">
                    Response time: 4.2 seconds
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {/* Actual Mother/Daughter node technical sketch */}
              <div className="h-64 md:h-80 lg:h-96 w-full relative sketch-border bg-white transform -rotate-1 overflow-hidden">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F2891faa92b574a07a8369948a9a1f207%2Fea745fc9294a4ca7b5c81d5dd1f919ea?format=webp&width=800"
                  alt="Hand-drawn technical diagram showing Mother Node with Jetson Orin, 360° camera, LoRa antenna, solar panel, and Daughter Node with gas sensor and manual trigger"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 right-4 sketch-border bg-white/90 p-3 transform -rotate-2">
                  <p className="text-xs text-muted-foreground sketch-text">
                    Network architecture
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Alert Network Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-destructive/5 to-sky-50">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-50px" }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-6 md:mb-8 text-primary sketch-text transform -rotate-1">
              ALERT NETWORK
            </h2>
            <div className="sketch-border bg-card p-4 md:p-6 max-w-3xl mx-auto transform rotate-1">
              <p className="text-base md:text-lg lg:text-xl text-foreground sketch-text">
                Smart reporting to the right authorities at the right time
              </p>
            </div>
          </motion.div>

          <AlertNetworkDemo />
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-earth-50 to-forest-50">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-50px" }}
            className="grid md:grid-cols-3 gap-6 md:gap-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 60, rotateZ: 0 }}
              whileInView={{ opacity: 1, y: 0, rotateZ: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center sketch-border bg-card p-4 md:p-6 lg:p-8 transform"
            >
              <div className="h-24 md:h-32 w-24 md:w-32 mx-auto mb-4 md:mb-6 relative">
                <svg
                  className="w-full h-full"
                  viewBox="0 0 100 100"
                  fill="none"
                >
                  <rect
                    x="15"
                    y="30"
                    width="70"
                    height="45"
                    fill="currentColor"
                    className="text-card"
                    stroke="currentColor"
                    strokeWidth="3"
                    rx="8"
                  />
                  <circle
                    cx="50"
                    cy="52"
                    r="15"
                    stroke="currentColor"
                    strokeWidth="3"
                    className="text-primary"
                    fill="none"
                  />
                  <circle
                    cx="50"
                    cy="52"
                    r="8"
                    fill="currentColor"
                    className="text-primary"
                  />
                  <rect
                    x="70"
                    y="35"
                    width="10"
                    height="6"
                    fill="currentColor"
                    className="text-destructive"
                    rx="2"
                  />
                  <text
                    x="25"
                    y="85"
                    className="text-xs fill-current text-muted-foreground sketch-text"
                  >
                    360° CAM
                  </text>
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-3 sketch-text">
                Edge AI
              </h3>
              <p className="text-sm md:text-base text-muted-foreground sketch-text">
                Computer vision processing at the edge for instant analysis
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 60, rotateZ: 0 }}
              whileInView={{ opacity: 1, y: 0, rotateZ: -1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center sketch-border bg-card p-4 md:p-6 lg:p-8 transform"
            >
              <div className="h-24 md:h-32 w-24 md:w-32 mx-auto mb-4 md:mb-6 relative">
                <svg
                  className="w-full h-full"
                  viewBox="0 0 100 100"
                  fill="none"
                >
                  <circle
                    cx="30"
                    cy="40"
                    r="10"
                    fill="currentColor"
                    className="text-forest-500"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <circle
                    cx="70"
                    cy="40"
                    r="10"
                    fill="currentColor"
                    className="text-forest-500"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <circle
                    cx="50"
                    cy="65"
                    r="10"
                    fill="currentColor"
                    className="text-forest-500"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <text
                    x="15"
                    y="25"
                    className="text-xs fill-current text-muted-foreground sketch-text"
                  >
                    PM2.5
                  </text>
                  <text
                    x="55"
                    y="25"
                    className="text-xs fill-current text-muted-foreground sketch-text"
                  >
                    GAS
                  </text>
                  <text
                    x="35"
                    y="85"
                    className="text-xs fill-current text-muted-foreground sketch-text"
                  >
                    TEMP
                  </text>
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-3 sketch-text">
                Multi-Sensor
              </h3>
              <p className="text-sm md:text-base text-muted-foreground sketch-text">
                Temperature, humidity, air quality, and visual spectrum
                monitoring
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 60, rotateZ: 0 }}
              whileInView={{ opacity: 1, y: 0, rotateZ: 2 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="text-center sketch-border bg-card p-4 md:p-6 lg:p-8 transform"
            >
              <div className="h-24 md:h-32 w-24 md:w-32 mx-auto mb-4 md:mb-6 relative">
                <svg
                  className="w-full h-full"
                  viewBox="0 0 100 100"
                  fill="none"
                >
                  <line
                    x1="20"
                    y1="30"
                    x2="50"
                    y2="15"
                    stroke="currentColor"
                    strokeWidth="3"
                    className="text-primary"
                  />
                  <line
                    x1="80"
                    y1="30"
                    x2="50"
                    y2="15"
                    stroke="currentColor"
                    strokeWidth="3"
                    className="text-primary"
                  />
                  <line
                    x1="50"
                    y1="70"
                    x2="50"
                    y2="15"
                    stroke="currentColor"
                    strokeWidth="3"
                    className="text-primary"
                  />
                  <circle
                    cx="20"
                    cy="30"
                    r="8"
                    fill="currentColor"
                    className="text-sky-500"
                  />
                  <circle
                    cx="80"
                    cy="30"
                    r="8"
                    fill="currentColor"
                    className="text-sky-500"
                  />
                  <circle
                    cx="50"
                    cy="70"
                    r="8"
                    fill="currentColor"
                    className="text-sky-500"
                  />
                  <circle
                    cx="50"
                    cy="15"
                    r="8"
                    fill="currentColor"
                    className="text-primary"
                  />
                  <text
                    x="20"
                    y="85"
                    className="text-xs fill-current text-muted-foreground sketch-text"
                  >
                    LoRa MESH
                  </text>
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-3 sketch-text">
                Mesh Network
              </h3>
              <p className="text-sm md:text-base text-muted-foreground sketch-text">
                Self-healing network topology for remote area coverage
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Progress Section */}
      <section id="progress" className="py-16 md:py-24 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-50px" }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-6 md:mb-8 text-primary sketch-text transform -rotate-1">
              PROGRESS
            </h2>
            <div className="sketch-border bg-card p-4 md:p-6 max-w-3xl mx-auto transform rotate-1">
              <p className="text-base md:text-lg lg:text-xl text-foreground sketch-text">
                Building the future of environmental monitoring
              </p>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="sketch-border bg-card p-6 md:p-8 transform rotate-2"
            >
              <div className="flex items-center mb-4">
                <div className="text-4xl md:text-6xl font-black text-primary mr-4 sketch-text transform -rotate-3">
                  AI
                </div>
                <div className="h-12 w-12 md:h-16 md:w-16 relative">
                  <svg
                    className="w-full h-full"
                    viewBox="0 0 64 64"
                    fill="none"
                  >
                    {/* Brain/AI visualization */}
                    <path
                      d="M20,15 Q25,10 32,10 Q39,10 44,15 Q48,20 48,28 Q48,35 44,40 Q40,44 35,46 Q29,48 25,46 Q20,44 16,40 Q12,35 12,28 Q12,20 16,15 Q18,12 20,15"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      className="text-primary"
                    />
                    <circle
                      cx="25"
                      cy="25"
                      r="2"
                      fill="currentColor"
                      className="text-accent"
                    />
                    <circle
                      cx="35"
                      cy="22"
                      r="2"
                      fill="currentColor"
                      className="text-accent"
                    />
                    <circle
                      cx="30"
                      cy="35"
                      r="2"
                      fill="currentColor"
                      className="text-accent"
                    />
                    <path
                      d="M25,25 Q30,20 35,22 M25,25 Q28,30 30,35 M35,22 Q32,30 30,35"
                      stroke="currentColor"
                      strokeWidth="1"
                      className="text-forest-500"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-4 sketch-text">
                AI MODELS
              </h3>
              <p className="text-sm md:text-base text-muted-foreground mb-6 sketch-text">
                VLM finetuning and field testing for wildfire detection with
                advanced vision capabilities.
              </p>
              <div className="sketch-border bg-accent/20 p-4 font-mono text-sm transform -rotate-1">
                <div className="text-primary">→ VLM finetuning in progress</div>
                <div className="text-primary">
                  → Field testing phase initiated
                </div>
                <div className="text-forest-600">
                  → 95% accuracy on test dataset
                </div>
                <div className="text-destructive font-bold">
                  → Real-world validation ongoing
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="sketch-border bg-card p-6 md:p-8 transform -rotate-1"
            >
              <div className="flex items-center mb-4">
                <div className="text-3xl md:text-5xl font-black text-primary mr-4 sketch-text transform rotate-2">
                  MESH
                </div>
                <div className="h-12 w-12 md:h-16 md:w-16 relative">
                  <svg
                    className="w-full h-full"
                    viewBox="0 0 64 64"
                    fill="none"
                  >
                    {/* Mesh network visualization */}
                    <circle
                      cx="16"
                      cy="16"
                      r="4"
                      fill="currentColor"
                      className="text-sky-500"
                    />
                    <circle
                      cx="48"
                      cy="16"
                      r="4"
                      fill="currentColor"
                      className="text-sky-500"
                    />
                    <circle
                      cx="32"
                      cy="32"
                      r="4"
                      fill="currentColor"
                      className="text-primary"
                    />
                    <circle
                      cx="16"
                      cy="48"
                      r="4"
                      fill="currentColor"
                      className="text-sky-500"
                    />
                    <circle
                      cx="48"
                      cy="48"
                      r="4"
                      fill="currentColor"
                      className="text-sky-500"
                    />

                    {/* Connection lines */}
                    <line
                      x1="16"
                      y1="16"
                      x2="32"
                      y2="32"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-primary opacity-60"
                      strokeDasharray="2,2"
                    />
                    <line
                      x1="48"
                      y1="16"
                      x2="32"
                      y2="32"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-primary opacity-60"
                      strokeDasharray="2,2"
                    />
                    <line
                      x1="32"
                      y1="32"
                      x2="16"
                      y2="48"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-primary opacity-60"
                      strokeDasharray="2,2"
                    />
                    <line
                      x1="32"
                      y1="32"
                      x2="48"
                      y2="48"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-primary opacity-60"
                      strokeDasharray="2,2"
                    />
                    <line
                      x1="16"
                      y1="16"
                      x2="48"
                      y2="16"
                      stroke="currentColor"
                      strokeWidth="1"
                      className="text-forest-500 opacity-40"
                      strokeDasharray="1,1"
                    />
                    <line
                      x1="16"
                      y1="48"
                      x2="48"
                      y2="48"
                      stroke="currentColor"
                      strokeWidth="1"
                      className="text-forest-500 opacity-40"
                      strokeDasharray="1,1"
                    />

                    {/* Signal waves */}
                    <circle
                      cx="32"
                      cy="32"
                      r="8"
                      stroke="currentColor"
                      strokeWidth="1"
                      fill="none"
                      className="text-primary opacity-30"
                    />
                    <circle
                      cx="32"
                      cy="32"
                      r="12"
                      stroke="currentColor"
                      strokeWidth="1"
                      fill="none"
                      className="text-primary opacity-20"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-4 sketch-text">
                SENSOR MESH DESIGN
              </h3>
              <p className="text-sm md:text-base text-muted-foreground mb-6 sketch-text">
                Advanced mesh network architecture for seamless communication
                across vast wilderness areas.
              </p>
              <div className="sketch-border bg-accent/20 p-4 font-mono text-sm transform rotate-1">
                <div className="text-forest-600">
                  → Self-healing topology designed
                </div>
                <div className="text-forest-600">
                  → LoRa 5km range validated
                </div>
                <div className="text-primary">→ Mesh protocols optimized</div>
                <div className="text-destructive font-bold">
                  → Development phase active
                </div>
              </div>
            </motion.div>
          </div>
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
              OUR TEAM
            </h2>
            <div className="sketch-border bg-card p-4 md:p-6 max-w-4xl mx-auto transform -rotate-1">
              <p className="text-base md:text-lg lg:text-xl text-foreground sketch-text mb-4">
                The people behind the First Responder Initiative. Field experts
                and tech builders.
              </p>
            </div>
          </motion.div>

          {/* Team Members */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="sketch-border bg-card p-6 md:p-8 transform rotate-1"
            >
              <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 sketch-text text-primary">
                CORE TEAM
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/20 rounded-full flex items-center justify-center sketch-border">
                    <div className="w-5 h-5 md:w-6 md:h-6 bg-primary rounded-full"></div>
                  </div>
                  <div>
                    <div className="font-bold text-foreground text-sm md:text-base">
                      Navya Veeturi
                    </div>
                    <div className="text-xs md:text-sm text-muted-foreground">
                      Lead Engineer
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/20 rounded-full flex items-center justify-center sketch-border">
                    <div className="w-5 h-5 md:w-6 md:h-6 bg-forest-500 rounded-full"></div>
                  </div>
                  <div>
                    <div className="font-bold text-foreground text-sm md:text-base">
                      Jaspreet Riar
                    </div>
                    <div className="text-xs md:text-sm text-muted-foreground">
                      AI Researcher
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="sketch-border bg-card p-6 md:p-8 transform -rotate-1"
            >
              <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 sketch-text text-primary">
                ADVISORS
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-accent/20 rounded-full flex items-center justify-center sketch-border">
                    <div className="w-5 h-5 md:w-6 md:h-6 bg-accent rounded-full"></div>
                  </div>
                  <div>
                    <div className="font-bold text-foreground text-sm md:text-base">
                      Anirudh Sharma
                    </div>
                    <div className="text-xs md:text-sm text-muted-foreground">
                      Technology Advisor
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-accent/20 rounded-full flex items-center justify-center sketch-border">
                    <div className="w-5 h-5 md:w-6 md:h-6 bg-earth-500 rounded-full"></div>
                  </div>
                  <div>
                    <div className="font-bold text-foreground text-sm md:text-base">
                      Dan Fitzgerald
                    </div>
                    <div className="text-xs md:text-sm text-muted-foreground">
                      Environmental Advisor
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section
        id="getinvolved"
        className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-forest-50"
      >
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              {/* Join WhatsApp */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="sketch-border bg-card p-6 md:p-8 transform rotate-1"
              >
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4 md:mb-6 text-primary sketch-text transform -rotate-2">
                  GET INVOLVED
                </h2>
                <p className="text-sm md:text-base lg:text-lg text-foreground mb-6 leading-relaxed sketch-text">
                  Join our WhatsApp group to stay updated on California wildfire
                  prevention efforts and contribute to our mission.
                </p>
                <Button
                  size="lg"
                  className="w-full text-sm md:text-base lg:text-lg px-6 md:px-8 py-4 md:py-6 sketch-border transform -rotate-1 hover:rotate-0 transition-transform mb-4"
                  onClick={() =>
                    window.open(
                      "https://chat.whatsapp.com/your-group-link",
                      "_blank",
                    )
                  }
                >
                  Join our WhatsApp Group
                </Button>
                <p className="text-xs md:text-sm text-muted-foreground sketch-text">
                  Connect with researchers, engineers, and California residents
                  working together on wildfire early detection
                </p>
              </motion.div>

              {/* Contact Card */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="sketch-border bg-card p-6 md:p-8 transform -rotate-1"
              >
                <h3 className="text-2xl md:text-3xl font-black mb-4 md:mb-6 text-primary sketch-text transform rotate-2">
                  CONTACT US
                </h3>
                <div className="space-y-4">
                  <div className="sketch-border bg-accent/20 p-3 md:p-4 transform rotate-1">
                    <p className="text-xs md:text-sm text-muted-foreground sketch-text mb-2">
                      Lead Engineer
                    </p>
                    <p className="font-bold text-foreground text-sm md:text-base">
                      Navya Veeturi
                    </p>
                    <a
                      href="mailto:navya@wywa.ai"
                      className="text-primary hover:text-primary/80 transition-colors font-mono text-xs md:text-sm"
                    >
                      navya@wywa.ai
                    </a>
                  </div>
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full text-sm md:text-base lg:text-lg px-6 md:px-8 py-4 md:py-6 sketch-border transform rotate-1 hover:rotate-0 transition-transform"
                    onClick={() =>
                      (window.location.href =
                        "mailto:navya@wywa.ai?subject=First Responder Initiative - California Wildfire Detection&body=Hi Navya, I am interested in learning more about the First Responder Initiative wildfire detection project.")
                    }
                  >
                    Send Email
                  </Button>
                  <p className="text-xs md:text-sm text-muted-foreground sketch-text">
                    Questions about deployment, partnerships, or technical
                    details? We'd love to hear from you.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 md:py-12 border-t-2 border-primary bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center">
            <div className="text-xl md:text-2xl font-black text-primary mb-4 sketch-text">
              First Responder Initiative
            </div>
            <p className="text-sm md:text-base text-muted-foreground mb-4 sketch-text">
              Environmental AI for wildfire detection
            </p>
            <p className="text-xs md:text-sm text-muted-foreground sketch-text">
              Building first responder technology for environmental threats
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Enhanced Detection Demo Component (Simplified)
function EnhancedDetectionDemo() {
  const [currentAlert, setCurrentAlert] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const alerts = [
    {
      time: "13:04:07",
      location: "Sonoma County",
      type: "normal",
      sensor: "PM2.5",
      reading: "80 µg/m³",
      description: "dust plume from passing car",
      action: "no alert",
      color: "text-muted-foreground",
      bgColor: "bg-muted/20",
    },
    {
      time: "13:06:55",
      location: "Napa Valley",
      type: "warning",
      sensor: "THERMAL",
      reading: "+5°C uptick",
      description: "thin grey column detected",
      action: "mini alert queued",
      color: "text-yellow-600",
      bgColor: "bg-yellow-50",
    },
    {
      time: "13:09:14",
      location: "Paradise Area",
      type: "critical",
      sensor: "VISION + THERMAL",
      reading: "bright orange cluster",
      description: "heat pattern matches wildfire",
      action: "REPORTED TO GOVERNMENT AGENCIES",
      color: "text-destructive",
      bgColor: "bg-destructive/10",
    },
  ];

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentAlert((prev) => (prev + 1) % alerts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <div className="w-full">
      {/* Live Detection Feed */}
      <div className="sketch-border bg-card p-4 md:p-6 lg:p-8 transform -rotate-1">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg md:text-xl font-bold sketch-text text-primary">
            LIVE AI DETECTION
          </h3>
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="text-xs md:text-sm text-muted-foreground hover:text-foreground sketch-border px-2 md:px-3 py-1 rounded"
          >
            {isPlaying ? "PAUSE" : "PLAY"}
          </button>
        </div>

        <div className="space-y-3">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentAlert}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className={`p-3 md:p-4 rounded-lg ${alerts[currentAlert].bgColor} sketch-border`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono text-muted-foreground">
                  [{alerts[currentAlert].time}] {alerts[currentAlert].location}
                </span>
                <span
                  className={`text-xs font-mono ${alerts[currentAlert].color} sketch-highlight`}
                >
                  {alerts[currentAlert].sensor}
                </span>
              </div>
              <div className="text-sm">
                <div
                  className={`font-bold text-sm md:text-lg ${alerts[currentAlert].color}`}
                >
                  {alerts[currentAlert].reading}
                </div>
                <div className="text-muted-foreground text-xs md:text-sm">
                  {alerts[currentAlert].description}
                </div>
                <div
                  className={`font-mono text-xs md:text-sm mt-2 font-bold ${alerts[currentAlert].color}`}
                >
                  → {alerts[currentAlert].action}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Progress indicators */}
          <div className="flex space-x-2">
            {alerts.map((_, i) => (
              <div
                key={i}
                className={`h-2 md:h-3 flex-1 rounded-full transition-colors sketch-border ${
                  i === currentAlert ? "bg-primary" : "bg-muted"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Alert Network Demo Component
function AlertNetworkDemo() {
  const [activeAlert, setActiveAlert] = useState(0);

  const alertFlow = [
    {
      stage: "Detection",
      desc: "Wildfire confirmed",
      stakeholders: [],
      color: "destructive",
    },
    {
      stage: "Analysis",
      desc: "Wind speed 15mph NE, low humidity 20%, high risk",
      stakeholders: [],
      color: "yellow-600",
    },
    {
      stage: "Government Verification",
      desc: "Alert sent to agencies for verification and response",
      stakeholders: ["Fire Department", "Emergency Services", "Forest Service"],
      color: "primary",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveAlert((prev) => (prev + 1) % alertFlow.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      <div className="grid md:grid-cols-3 gap-6 md:gap-8">
        {alertFlow.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
            viewport={{ once: true }}
            className={`sketch-border bg-card p-4 md:p-6 transform ${i % 2 === 0 ? "rotate-1" : "-rotate-1"} ${
              activeAlert === i ? "ring-2 ring-primary ring-offset-2" : ""
            }`}
          >
            <div className="text-center">
              <div
                className={`mb-4 ${
                  activeAlert === i ? "scale-110" : "scale-100"
                } transition-transform h-12 md:h-16 w-12 md:w-16 mx-auto rounded-lg bg-gradient-to-br ${
                  i === 0
                    ? "from-destructive/20 to-destructive/40"
                    : i === 1
                      ? "from-yellow-200 to-yellow-400"
                      : "from-primary/20 to-primary/40"
                } flex items-center justify-center`}
              >
                <div className="w-6 md:w-8 h-6 md:h-8 border-2 border-current rounded-full"></div>
              </div>
              <h3 className="text-base md:text-lg lg:text-xl font-bold mb-3 sketch-text text-primary">
                {step.stage}
              </h3>
              <p className="text-xs md:text-sm text-muted-foreground sketch-text mb-4">
                {step.desc}
              </p>

              {step.stakeholders.length > 0 && (
                <div className="space-y-2">
                  {step.stakeholders.map((stakeholder, j) => (
                    <motion.div
                      key={j}
                      initial={{ opacity: 0, x: -20 }}
                      animate={
                        activeAlert === i
                          ? { opacity: 1, x: 0 }
                          : { opacity: 0.3, x: 0 }
                      }
                      transition={{ delay: j * 0.2 }}
                      className="text-xs md:text-sm font-mono bg-accent/20 px-2 md:px-3 py-1 rounded"
                    >
                      {stakeholder}
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Progress bar */}
      <div className="mt-6 md:mt-8 bg-muted h-2 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-primary"
          initial={{ width: "0%" }}
          animate={{
            width: `${((activeAlert + 1) / alertFlow.length) * 100}%`,
          }}
          transition={{ duration: 0.5 }}
        />
      </div>
    </div>
  );
}
