import { motion } from "framer-motion";
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
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold tracking-tight text-primary">
              WYWA
            </div>
            <div className="hidden md:flex space-x-8">
              <a
                href="#problem"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Problem
              </a>
              <a
                href="#solution"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Solution
              </a>
              <a
                href="#progress"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Progress
              </a>
              <a
                href="#team"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Team
              </a>
              <a
                href="#involve"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Get Involved
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative pt-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.div {...fadeInUp}>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
              <span className="text-primary">WYWA</span>
              <br />
              <span className="text-muted-foreground text-4xl md:text-5xl">
                while you were away
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
              Environmental AI that never sleeps. First responder technology for
              wildfires, smoke, and environmental threats.
            </p>
            <Button size="lg" className="text-lg px-8 py-6">
              See How It Works
            </Button>
          </motion.div>
        </div>

        {/* Hand-drawn landscape background */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 600'%3E%3Cpath d='M0,400 Q200,350 400,380 T800,400 L800,600 L0,600 Z' fill='%23134e4a' opacity='0.3'/%3E%3Cpath d='M0,450 Q150,400 300,430 T600,450 T800,440 L800,600 L0,600 Z' fill='%23065f46' opacity='0.5'/%3E%3C/svg%3E")`,
            backgroundSize: "cover",
            backgroundPosition: "bottom",
          }}
        />
      </section>

      {/* Problem Section */}
      <section id="problem" className="py-24 bg-muted/30">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
                THE PROBLEM
              </h2>
              <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                Wildfires are difficult to spot early across vast, remote areas.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                By the time smoke is visible to human observers or satellites,
                precious hours have been lost. Early detection can mean the
                difference between containment and catastrophe.
              </p>
            </div>
            <div className="relative">
              {/* Hand-drawn wildfire illustration */}
              <div className="h-80 w-full relative">
                <svg
                  className="w-full h-full"
                  viewBox="0 0 400 300"
                  fill="none"
                >
                  {/* Mountain silhouette */}
                  <path
                    d="M0,200 Q50,150 100,160 Q150,140 200,155 Q250,135 300,150 Q350,140 400,155 L400,300 L0,300 Z"
                    fill="currentColor"
                    className="text-forest-600 opacity-40"
                  />
                  {/* Fire/smoke */}
                  <path
                    d="M180,160 Q185,140 190,130 Q195,120 200,115 Q205,120 210,130 Q215,140 220,160"
                    stroke="currentColor"
                    strokeWidth="3"
                    fill="none"
                    className="text-destructive"
                  />
                  <circle
                    cx="200"
                    cy="170"
                    r="8"
                    fill="currentColor"
                    className="text-destructive opacity-60"
                  />
                  {/* Dashed lines showing detection area */}
                  <circle
                    cx="200"
                    cy="160"
                    r="50"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                    fill="none"
                    className="text-primary opacity-50"
                  />
                  <circle
                    cx="200"
                    cy="160"
                    r="80"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                    fill="none"
                    className="text-primary opacity-30"
                  />
                </svg>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
              FIRST RESPONDER
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              AI-powered sensor network that detects, analyzes, and alerts in
              real-time
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-card border border-border rounded-lg p-8">
                <div className="text-sm text-primary font-mono mb-2">
                  DETECTION LOG
                </div>
                <div className="space-y-4 text-sm font-mono">
                  <div className="text-destructive">
                    → PM2.5 observed, confirmed it's dust from car
                  </div>
                  <div className="text-sky-600">
                    → Temperature spike +15°C in sector 7
                  </div>
                  <div className="text-destructive font-bold">
                    → Smoke observed, confirmed with thermal data, triggering
                    mini alert...
                  </div>
                  <div className="text-primary">
                    → Alert dispatched to first responders
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
              {/* Hand-drawn sensor network */}
              <div className="h-80 w-full relative">
                <svg
                  className="w-full h-full"
                  viewBox="0 0 400 300"
                  fill="none"
                >
                  {/* Mother node */}
                  <rect
                    x="50"
                    y="100"
                    width="40"
                    height="60"
                    fill="currentColor"
                    className="text-primary opacity-20"
                    rx="8"
                  />
                  <rect
                    x="55"
                    y="105"
                    width="30"
                    height="10"
                    fill="currentColor"
                    className="text-primary"
                    rx="2"
                  />
                  <rect
                    x="55"
                    y="120"
                    width="30"
                    height="10"
                    fill="currentColor"
                    className="text-primary"
                    rx="2"
                  />
                  <rect
                    x="55"
                    y="135"
                    width="30"
                    height="10"
                    fill="currentColor"
                    className="text-primary"
                    rx="2"
                  />
                  <text
                    x="95"
                    y="120"
                    className="text-xs fill-current text-muted-foreground"
                  >
                    MOTHER NODE
                  </text>
                  <text
                    x="95"
                    y="135"
                    className="text-xs fill-current text-muted-foreground"
                  >
                    JETSON ORIN
                  </text>

                  {/* Daughter nodes */}
                  <circle
                    cx="200"
                    cy="80"
                    r="15"
                    fill="currentColor"
                    className="text-forest-500 opacity-60"
                  />
                  <circle
                    cx="300"
                    cy="120"
                    r="15"
                    fill="currentColor"
                    className="text-forest-500 opacity-60"
                  />
                  <circle
                    cx="250"
                    cy="180"
                    r="15"
                    fill="currentColor"
                    className="text-forest-500 opacity-60"
                  />

                  {/* Connections */}
                  <line
                    x1="90"
                    y1="130"
                    x2="185"
                    y2="80"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeDasharray="3,3"
                    className="text-primary opacity-50"
                  />
                  <line
                    x1="90"
                    y1="130"
                    x2="285"
                    y2="120"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeDasharray="3,3"
                    className="text-primary opacity-50"
                  />
                  <line
                    x1="90"
                    y1="130"
                    x2="235"
                    y2="180"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeDasharray="3,3"
                    className="text-primary opacity-50"
                  />

                  {/* Detection waves */}
                  <circle
                    cx="200"
                    cy="80"
                    r="25"
                    stroke="currentColor"
                    strokeWidth="1"
                    fill="none"
                    className="text-sky-500 opacity-40"
                  />
                  <circle
                    cx="200"
                    cy="80"
                    r="35"
                    stroke="currentColor"
                    strokeWidth="1"
                    fill="none"
                    className="text-sky-500 opacity-30"
                  />
                </svg>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="h-32 w-32 mx-auto mb-6 relative">
                <svg
                  className="w-full h-full"
                  viewBox="0 0 100 100"
                  fill="none"
                >
                  {/* Camera icon */}
                  <rect
                    x="20"
                    y="30"
                    width="60"
                    height="40"
                    fill="currentColor"
                    className="text-primary opacity-20"
                    rx="8"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="12"
                    fill="currentColor"
                    className="text-primary"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="8"
                    fill="currentColor"
                    className="text-background"
                  />
                  <rect
                    x="65"
                    y="35"
                    width="8"
                    height="5"
                    fill="currentColor"
                    className="text-primary"
                    rx="2"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Edge AI</h3>
              <p className="text-muted-foreground">
                Computer vision processing at the edge for instant analysis
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="h-32 w-32 mx-auto mb-6 relative">
                <svg
                  className="w-full h-full"
                  viewBox="0 0 100 100"
                  fill="none"
                >
                  {/* Sensor array */}
                  <circle
                    cx="30"
                    cy="40"
                    r="8"
                    fill="currentColor"
                    className="text-forest-500"
                  />
                  <circle
                    cx="70"
                    cy="40"
                    r="8"
                    fill="currentColor"
                    className="text-forest-500"
                  />
                  <circle
                    cx="50"
                    cy="60"
                    r="8"
                    fill="currentColor"
                    className="text-forest-500"
                  />
                  <line
                    x1="30"
                    y1="40"
                    x2="70"
                    y2="40"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-primary"
                  />
                  <line
                    x1="30"
                    y1="40"
                    x2="50"
                    y2="60"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-primary"
                  />
                  <line
                    x1="70"
                    y1="40"
                    x2="50"
                    y2="60"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-primary"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Multi-Sensor</h3>
              <p className="text-muted-foreground">
                Temperature, humidity, air quality, and visual spectrum
                monitoring
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="h-32 w-32 mx-auto mb-6 relative">
                <svg
                  className="w-full h-full"
                  viewBox="0 0 100 100"
                  fill="none"
                >
                  {/* Network icon */}
                  <circle
                    cx="20"
                    cy="30"
                    r="6"
                    fill="currentColor"
                    className="text-sky-500"
                  />
                  <circle
                    cx="80"
                    cy="30"
                    r="6"
                    fill="currentColor"
                    className="text-sky-500"
                  />
                  <circle
                    cx="50"
                    cy="70"
                    r="6"
                    fill="currentColor"
                    className="text-sky-500"
                  />
                  <circle
                    cx="50"
                    cy="15"
                    r="6"
                    fill="currentColor"
                    className="text-primary"
                  />
                  <line
                    x1="20"
                    y1="30"
                    x2="50"
                    y2="15"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-primary"
                  />
                  <line
                    x1="80"
                    y1="30"
                    x2="50"
                    y2="15"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-primary"
                  />
                  <line
                    x1="50"
                    y1="70"
                    x2="50"
                    y2="15"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-primary"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Mesh Network</h3>
              <p className="text-muted-foreground">
                Self-healing network topology for remote area coverage
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Progress Section */}
      <section id="progress" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
              PROGRESS
            </h2>
            <p className="text-xl text-muted-foreground">
              Building the future of environmental monitoring
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-lg p-8"
            >
              <div className="text-6xl font-bold text-primary mb-4">2</div>
              <h3 className="text-2xl font-semibold mb-3">PROTOTYPES BUILT</h3>
              <p className="text-muted-foreground mb-4">
                Working sensor nodes deployed in test environments, collecting
                real-world data and validating our approach.
              </p>
              <div className="text-sm font-mono text-accent-foreground bg-accent/20 p-3 rounded">
                → Solar panel integration complete
                <br />
                → LoRa antenna tested 5km range
                <br />→ Weather sealing verified
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-lg p-8"
            >
              <div className="text-6xl font-bold text-primary mb-4">1</div>
              <h3 className="text-2xl font-semibold mb-3">
                AI MODEL IN DEVELOPMENT
              </h3>
              <p className="text-muted-foreground mb-4">
                Computer vision model trained on wildfire and smoke detection
                with thermal data correlation.
              </p>
              <div className="text-sm font-mono text-accent-foreground bg-accent/20 p-3 rounded">
                → 95% accuracy on test dataset
                <br />
                → False positive rate &lt; 0.1%
                <br />→ Edge deployment optimized
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-24 bg-muted/30">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
              TEAM
            </h2>
            <p className="text-xl text-muted-foreground">
              Scientists, engineers, and hackers united by purpose
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="text-5xl mb-4">🔬</div>
              <h3 className="text-xl font-semibold mb-3">SCIENTISTS</h3>
              <p className="text-muted-foreground">
                Environmental researchers and climate specialists driving our
                mission with deep domain expertise
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-3">ENGINEERS</h3>
              <p className="text-muted-foreground">
                Hardware and software engineers building robust, scalable
                solutions for extreme environments
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="text-5xl mb-4">💻</div>
              <h3 className="text-xl font-semibold mb-3">HACKERS</h3>
              <p className="text-muted-foreground">
                Creative problem solvers pushing boundaries and finding
                innovative paths forward
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section id="involve" className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
              GET INVOLVED
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Join our mission to protect communities and environments through
              early detection technology. Whether you're a researcher, engineer,
              or just passionate about our cause - there's a place for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6">
                Contribute Code
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                Learn More
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary mb-4">WYWA</div>
            <p className="text-muted-foreground mb-4">
              While You Were Away - Environmental AI Initiative
            </p>
            <p className="text-sm text-muted-foreground">
              Building first responder technology for environmental threats
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
