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
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-3xl font-bold tracking-tight text-primary sketch-text">
              WYWA
            </div>
            <div className="hidden md:flex space-x-8">
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
        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
          <motion.div {...fadeInUp}>
            <h1 className="text-7xl md:text-9xl font-black mb-6 tracking-tight">
              <span className="text-primary">WYWA</span>
              <br />
              <span className="text-forest-600 text-3xl md:text-4xl sketch-text transform -rotate-1 inline-block">
                while you were away
              </span>
            </h1>
            <div className="sketch-border bg-card p-6 max-w-2xl mx-auto mb-8 transform rotate-1">
              <p className="text-xl md:text-2xl text-foreground leading-relaxed sketch-text">
                Environmental AI that never sleeps.
                <span className="sketch-highlight">
                  First responder technology
                </span>
                for wildfires, smoke, and environmental threats.
              </p>
            </div>
            <Button
              size="lg"
              className="text-lg px-8 py-6 sketch-border transform -rotate-1 hover:rotate-0 transition-transform"
            >
              See How It Works ↓
            </Button>
          </motion.div>
        </div>

        {/* Hand-drawn landscape background inspired by first sketch */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none">
            {/* Mountains */}
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
            {/* Smoke plumes */}
            <path
              d="M300,450 Q305,400 310,380 Q315,360 320,350 Q325,340 330,335 Q335,340 340,350 Q345,360 350,380 Q355,400 360,450"
              stroke="currentColor"
              strokeWidth="4"
              fill="none"
              className="text-muted-foreground opacity-60"
            />
            <path
              d="M800,300 Q805,250 810,230 Q815,210 820,200 Q825,190 830,185 Q835,190 840,200 Q845,210 850,230 Q855,250 860,300"
              stroke="currentColor"
              strokeWidth="4"
              fill="none"
              className="text-muted-foreground opacity-60"
            />
          </svg>
        </div>
      </section>

      {/* Problem Section - Inspired by the landscape sketch */}
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
              <h2 className="text-5xl md:text-6xl font-black mb-8 text-primary sketch-text transform -rotate-1">
                THE PROBLEM
              </h2>
              <div className="sketch-border bg-card p-6 mb-6 transform rotate-1">
                <p className="text-xl text-foreground mb-4 leading-relaxed sketch-text">
                  Wildfires are difficult to spot early across vast, remote
                  areas.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  By the time smoke is visible to human observers or satellites,
                  precious hours have been lost. Early detection can mean the
                  difference between containment and catastrophe.
                </p>
              </div>
            </div>
            <div className="relative">
              {/* Hand-drawn wildfire illustration inspired by sketches */}
              <div className="h-96 w-full relative sketch-border bg-gradient-to-b from-sky-100 to-earth-100 transform -rotate-2">
                <svg
                  className="w-full h-full p-4"
                  viewBox="0 0 400 350"
                  fill="none"
                >
                  {/* Mountain range with hand-drawn style */}
                  <path
                    d="M0,250 Q50,200 100,220 Q150,180 200,200 Q250,160 300,180 Q350,140 400,160 L400,350 L0,350 Z"
                    fill="currentColor"
                    className="text-forest-300"
                    strokeWidth="2"
                    stroke="currentColor"
                  />
                  <path
                    d="M0,280 Q80,220 160,240 Q240,200 320,220 Q360,210 400,215 L400,350 L0,350 Z"
                    fill="currentColor"
                    className="text-forest-400"
                    strokeWidth="2"
                    stroke="currentColor"
                  />

                  {/* Fire and smoke with sketchy style */}
                  <g className="hand-drawn-arrow">
                    {/* Flames */}
                    <path
                      d="M180,240 Q185,220 190,210 Q195,200 200,195 Q205,200 210,210 Q215,220 220,240"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                      className="text-destructive"
                    />
                    <circle
                      cx="200"
                      cy="250"
                      r="12"
                      fill="currentColor"
                      className="text-destructive opacity-70"
                    />

                    {/* Smoke plume */}
                    <path
                      d="M200,195 Q205,180 210,170 Q215,160 220,155 Q225,150 230,148 Q235,150 240,155 Q245,160 250,170 Q255,180 260,195"
                      stroke="currentColor"
                      strokeWidth="3"
                      fill="none"
                      className="text-muted-foreground opacity-60"
                    />
                  </g>

                  {/* Detection sensor (simple box) */}
                  <rect
                    x="320"
                    y="300"
                    width="30"
                    height="20"
                    fill="currentColor"
                    className="text-primary"
                    strokeWidth="2"
                    stroke="currentColor"
                    transform="rotate(-2)"
                  />

                  {/* Detection radius circles */}
                  <circle
                    cx="200"
                    cy="230"
                    r="60"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeDasharray="8,4"
                    fill="none"
                    className="text-sky-500 opacity-40"
                  />
                  <circle
                    cx="200"
                    cy="230"
                    r="90"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeDasharray="8,4"
                    fill="none"
                    className="text-sky-500 opacity-30"
                  />

                  {/* Hand-drawn annotations */}
                  <text
                    x="50"
                    y="50"
                    className="text-xs fill-current text-muted-foreground sketch-text"
                  >
                    Too late to detect
                  </text>
                  <path
                    d="M120,60 Q140,80 160,120"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-muted-foreground hand-drawn-arrow"
                    fill="none"
                    markerEnd="url(#arrowhead)"
                  />
                </svg>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solution Section - Inspired by the technical sketches */}
      <section id="solution" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-black mb-8 text-primary sketch-text transform rotate-1">
              FIRST RESPONDER
            </h2>
            <div className="sketch-border bg-card p-6 max-w-3xl mx-auto transform -rotate-1">
              <p className="text-xl text-foreground sketch-text">
                AI-powered sensor network that detects, analyzes, and alerts in
                real-time
              </p>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="sketch-border bg-card p-8 transform rotate-2">
                <div className="text-sm text-primary font-mono mb-4 sketch-text transform -rotate-1">
                  🔍 DETECTION LOG
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
                    🚨 Alert dispatched to first responders
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
              {/* Hand-drawn sensor network inspired by the technical sketches */}
              <div className="h-96 w-full relative sketch-border bg-gradient-to-br from-earth-50 to-forest-50 transform -rotate-1">
                <svg
                  className="w-full h-full p-6"
                  viewBox="0 0 400 350"
                  fill="none"
                >
                  {/* Mother Node - inspired by the "Mother Node" sketch */}
                  <g className="sketch-text">
                    {/* Main housing */}
                    <rect
                      x="50"
                      y="120"
                      width="45"
                      height="80"
                      fill="currentColor"
                      className="text-card"
                      stroke="currentColor"
                      strokeWidth="2"
                      rx="8"
                    />
                    <rect
                      x="55"
                      y="125"
                      width="35"
                      height="12"
                      fill="currentColor"
                      className="text-primary"
                      rx="2"
                    />
                    <rect
                      x="55"
                      y="142"
                      width="35"
                      height="12"
                      fill="currentColor"
                      className="text-primary"
                      rx="2"
                    />
                    <rect
                      x="55"
                      y="159"
                      width="35"
                      height="12"
                      fill="currentColor"
                      className="text-primary"
                      rx="2"
                    />
                    <rect
                      x="55"
                      y="176"
                      width="35"
                      height="12"
                      fill="currentColor"
                      className="text-primary"
                      rx="2"
                    />

                    {/* Solar panel on top */}
                    <rect
                      x="45"
                      y="105"
                      width="55"
                      height="15"
                      fill="currentColor"
                      className="text-sky-600"
                      stroke="currentColor"
                      strokeWidth="2"
                      rx="3"
                    />
                    <line
                      x1="50"
                      y1="110"
                      x2="95"
                      y2="110"
                      stroke="currentColor"
                      strokeWidth="1"
                      className="text-sky-800"
                    />
                    <line
                      x1="50"
                      y1="115"
                      x2="95"
                      y2="115"
                      stroke="currentColor"
                      strokeWidth="1"
                      className="text-sky-800"
                    />

                    {/* LoRa Antenna */}
                    <line
                      x1="72"
                      y1="105"
                      x2="72"
                      y2="85"
                      stroke="currentColor"
                      strokeWidth="3"
                      className="text-foreground"
                    />
                    <circle
                      cx="72"
                      cy="82"
                      r="3"
                      fill="currentColor"
                      className="text-foreground"
                    />

                    {/* Labels */}
                    <text
                      x="105"
                      y="135"
                      className="text-xs fill-current text-muted-foreground"
                    >
                      MOTHER NODE
                    </text>
                    <text
                      x="105"
                      y="150"
                      className="text-xs fill-current text-muted-foreground"
                    >
                      JETSON ORIN
                    </text>
                    <text
                      x="105"
                      y="165"
                      className="text-xs fill-current text-muted-foreground"
                    >
                      360° CAM
                    </text>
                    <text
                      x="105"
                      y="180"
                      className="text-xs fill-current text-muted-foreground"
                    >
                      CONTROL &
                    </text>
                    <text
                      x="105"
                      y="195"
                      className="text-xs fill-current text-muted-foreground"
                    >
                      OTHER MODULE
                    </text>
                  </g>

                  {/* Daughter Nodes - inspired by sensor node sketches */}
                  <g className="sketch-text">
                    {/* Node 1 */}
                    <rect
                      x="220"
                      y="80"
                      width="25"
                      height="40"
                      fill="currentColor"
                      className="text-card"
                      stroke="currentColor"
                      strokeWidth="2"
                      rx="4"
                    />
                    <circle
                      cx="232"
                      cy="90"
                      r="4"
                      fill="currentColor"
                      className="text-forest-500"
                    />
                    <rect
                      x="225"
                      y="100"
                      width="15"
                      height="8"
                      fill="currentColor"
                      className="text-primary"
                      rx="1"
                    />
                    <text
                      x="250"
                      y="90"
                      className="text-xs fill-current text-muted-foreground"
                    >
                      GAS
                    </text>
                    <text
                      x="250"
                      y="105"
                      className="text-xs fill-current text-muted-foreground"
                    >
                      SENSOR
                    </text>

                    {/* Node 2 */}
                    <rect
                      x="320"
                      y="140"
                      width="25"
                      height="40"
                      fill="currentColor"
                      className="text-card"
                      stroke="currentColor"
                      strokeWidth="2"
                      rx="4"
                    />
                    <circle
                      cx="332"
                      cy="150"
                      r="4"
                      fill="currentColor"
                      className="text-forest-500"
                    />
                    <rect
                      x="325"
                      y="160"
                      width="15"
                      height="8"
                      fill="currentColor"
                      className="text-primary"
                      rx="1"
                    />
                    <text
                      x="280"
                      y="150"
                      className="text-xs fill-current text-muted-foreground"
                    >
                      MANUAL
                    </text>
                    <text
                      x="280"
                      y="165"
                      className="text-xs fill-current text-muted-foreground"
                    >
                      TRIGGER
                    </text>

                    {/* Node 3 */}
                    <rect
                      x="260"
                      y="220"
                      width="25"
                      height="40"
                      fill="currentColor"
                      className="text-card"
                      stroke="currentColor"
                      strokeWidth="2"
                      rx="4"
                    />
                    <circle
                      cx="272"
                      cy="230"
                      r="4"
                      fill="currentColor"
                      className="text-forest-500"
                    />
                    <rect
                      x="265"
                      y="240"
                      width="15"
                      height="8"
                      fill="currentColor"
                      className="text-primary"
                      rx="1"
                    />
                    <text
                      x="200"
                      y="235"
                      className="text-xs fill-current text-muted-foreground"
                    >
                      DAUGHTER
                    </text>
                    <text
                      x="200"
                      y="250"
                      className="text-xs fill-current text-muted-foreground"
                    >
                      NODE
                    </text>
                  </g>

                  {/* Connections with hand-drawn style */}
                  <g className="hand-drawn-arrow">
                    <path
                      d="M95,160 Q150,120 220,100"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeDasharray="4,2"
                      className="text-primary opacity-60"
                      fill="none"
                    />
                    <path
                      d="M95,160 Q200,150 320,160"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeDasharray="4,2"
                      className="text-primary opacity-60"
                      fill="none"
                    />
                    <path
                      d="M95,160 Q180,200 260,240"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeDasharray="4,2"
                      className="text-primary opacity-60"
                      fill="none"
                    />
                  </g>

                  {/* Detection waves */}
                  <circle
                    cx="232"
                    cy="100"
                    r="20"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeDasharray="2,2"
                    fill="none"
                    className="text-sky-500 opacity-40"
                  />
                  <circle
                    cx="332"
                    cy="160"
                    r="25"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeDasharray="2,2"
                    fill="none"
                    className="text-sky-500 opacity-40"
                  />
                  <circle
                    cx="272"
                    cy="240"
                    r="30"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeDasharray="2,2"
                    fill="none"
                    className="text-sky-500 opacity-40"
                  />
                </svg>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Alert Network Section */}
      <section className="py-24 bg-gradient-to-br from-destructive/5 to-sky-50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-black mb-8 text-primary sketch-text transform -rotate-1">
              ALERT NETWORK
            </h2>
            <div className="sketch-border bg-card p-6 max-w-3xl mx-auto transform rotate-1">
              <p className="text-xl text-foreground sketch-text">
                Smart alerts to the right people at the right time
              </p>
            </div>
          </motion.div>

          <AlertNetworkDemo />
        </div>
      </section>

      {/* Technology Section - Enhanced with sketch aesthetics */}
      <section className="py-24 bg-gradient-to-br from-earth-50 to-forest-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center sketch-border bg-card p-8 transform rotate-1"
            >
              <div className="h-32 w-32 mx-auto mb-6 relative">
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
              <h3 className="text-xl font-bold mb-3 sketch-text">Edge AI</h3>
              <p className="text-muted-foreground sketch-text">
                Computer vision processing at the edge for instant analysis
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center sketch-border bg-card p-8 transform -rotate-1"
            >
              <div className="h-32 w-32 mx-auto mb-6 relative">
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
              <h3 className="text-xl font-bold mb-3 sketch-text">
                Multi-Sensor
              </h3>
              <p className="text-muted-foreground sketch-text">
                Temperature, humidity, air quality, and visual spectrum
                monitoring
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center sketch-border bg-card p-8 transform rotate-2"
            >
              <div className="h-32 w-32 mx-auto mb-6 relative">
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
              <h3 className="text-xl font-bold mb-3 sketch-text">
                Mesh Network
              </h3>
              <p className="text-muted-foreground sketch-text">
                Self-healing network topology for remote area coverage
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Progress Section - Matching the infographic style */}
      <section id="progress" className="py-24 bg-muted/30">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-black mb-8 text-primary sketch-text transform -rotate-1">
              PROGRESS
            </h2>
            <div className="sketch-border bg-card p-6 max-w-3xl mx-auto transform rotate-1">
              <p className="text-xl text-foreground sketch-text">
                Building the future of environmental monitoring
              </p>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="sketch-border bg-card p-8 transform rotate-2"
            >
              <div className="text-8xl font-black text-primary mb-4 sketch-text transform -rotate-3">
                2
              </div>
              <h3 className="text-2xl font-bold mb-4 sketch-text">
                PROTOTYPES BUILT
              </h3>
              <p className="text-muted-foreground mb-6 sketch-text">
                Working sensor nodes deployed in test environments, collecting
                real-world data and validating our approach.
              </p>
              <div className="sketch-border bg-accent/20 p-4 font-mono text-sm transform -rotate-1">
                <div className="text-primary">
                  ✓ Solar panel integration complete
                </div>
                <div className="text-primary">
                  ✓ LoRa antenna tested 5km range
                </div>
                <div className="text-primary">✓ Weather sealing verified</div>
                <div className="text-primary">
                  ✓ Edge AI processing validated
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="sketch-border bg-card p-8 transform -rotate-1"
            >
              <div className="text-8xl font-black text-primary mb-4 sketch-text transform rotate-2">
                1
              </div>
              <h3 className="text-2xl font-bold mb-4 sketch-text">
                AI MODEL IN DEVELOPMENT
              </h3>
              <p className="text-muted-foreground mb-6 sketch-text">
                Computer vision model trained on wildfire and smoke detection
                with thermal data correlation.
              </p>
              <div className="sketch-border bg-accent/20 p-4 font-mono text-sm transform rotate-1">
                <div className="text-forest-600">
                  → 95% accuracy on test dataset
                </div>
                <div className="text-forest-600">
                  → False positive rate &lt; 0.1%
                </div>
                <div className="text-forest-600">
                  → Edge deployment optimized
                </div>
                <div className="text-destructive font-bold">
                  → Ready for field testing
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-black mb-8 text-primary sketch-text transform rotate-1">
              WHO WE ARE
            </h2>
            <div className="sketch-border bg-card p-6 max-w-4xl mx-auto transform -rotate-1">
              <p className="text-xl text-foreground sketch-text mb-4">
                Engineers and scientists who love nature, believing technology
                and AI have a role to play in fighting disasters
              </p>
            </div>
          </motion.div>

          {/* Team Members */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="sketch-border bg-card p-8 transform rotate-1"
            >
              <h3 className="text-2xl font-bold mb-4 sketch-text text-primary">
                CORE TEAM
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <span className="text-2xl">👩‍💻</span>
                  </div>
                  <div>
                    <div className="font-bold text-foreground">
                      Navya Veeturi
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Lead Engineer
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <span className="text-2xl">👨‍🔬</span>
                  </div>
                  <div>
                    <div className="font-bold text-foreground">
                      Jaspreet Riar
                    </div>
                    <div className="text-sm text-muted-foreground">
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
              className="sketch-border bg-card p-8 transform -rotate-1"
            >
              <h3 className="text-2xl font-bold mb-4 sketch-text text-primary">
                ADVISORS
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <div>
                    <div className="font-bold text-foreground">
                      Anirudh Sharma
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Technology Advisor
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🌍</span>
                  </div>
                  <div>
                    <div className="font-bold text-foreground">
                      Dan Fitzgerald
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Environmental Advisor
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* University Logos */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="sketch-border bg-card p-8 transform rotate-1">
              <h3 className="text-xl font-bold mb-6 sketch-text text-primary">
                BACKED BY
              </h3>
              <div className="flex justify-center items-center space-x-12">
                {/* MIT Logo */}
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-2 bg-gradient-to-br from-red-600 to-red-700 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">MIT</span>
                  </div>
                  <div className="text-sm text-muted-foreground sketch-text">
                    MIT
                  </div>
                </div>
                {/* CMU Logo */}
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-2 bg-gradient-to-br from-red-800 to-red-900 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">CMU</span>
                  </div>
                  <div className="text-sm text-muted-foreground sketch-text">
                    Carnegie Mellon
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section
        id="getinvolved"
        className="py-24 bg-gradient-to-br from-primary/5 to-forest-50"
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="sketch-border bg-card p-12 transform rotate-1">
              <h2 className="text-5xl md:text-6xl font-black mb-8 text-primary sketch-text transform -rotate-2">
                GET INVOLVED
              </h2>
              <p className="text-xl text-foreground mb-8 leading-relaxed sketch-text">
                Join our mission to protect communities and environments through
                early detection technology. Whether you're a researcher,
                engineer, or just passionate about our cause - there's a place
                for you.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button
                  size="lg"
                  className="text-lg px-8 py-6 sketch-border transform -rotate-1 hover:rotate-0 transition-transform"
                >
                  Contribute Code 🔧
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 py-6 sketch-border transform rotate-1 hover:rotate-0 transition-transform"
                >
                  Learn More 📚
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t-2 border-primary bg-muted/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            <div className="text-3xl font-black text-primary mb-4 sketch-text">
              WYWA
            </div>
            <p className="text-muted-foreground mb-4 sketch-text">
              While You Were Away - Environmental AI Initiative
            </p>
            <p className="text-sm text-muted-foreground sketch-text">
              Building first responder technology for environmental threats
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Interactive Detection Demo Component
function InteractiveDetectionDemo() {
  const [currentAlert, setCurrentAlert] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const alerts = [
    {
      time: "13:04:07",
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
      type: "critical",
      sensor: "VISION + THERMAL",
      reading: "bright orange cluster",
      description: "heat pattern matches wildfire",
      action: "FULL ALERT PUSHED",
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
    <div className="sketch-border bg-card p-6 transform -rotate-1">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold sketch-text text-primary">
          🎯 LIVE DETECTION
        </h3>
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="text-sm text-muted-foreground hover:text-foreground"
        >
          {isPlaying ? "⏸️" : "▶️"}
        </button>
      </div>

      <div className="space-y-3">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentAlert}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className={`p-4 rounded-lg ${alerts[currentAlert].bgColor}`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono text-muted-foreground">
                [{alerts[currentAlert].time}]
              </span>
              <span
                className={`text-xs font-mono ${alerts[currentAlert].color}`}
              >
                {alerts[currentAlert].sensor}
              </span>
            </div>
            <div className="text-sm">
              <div className={`font-bold ${alerts[currentAlert].color}`}>
                {alerts[currentAlert].reading}
              </div>
              <div className="text-muted-foreground">
                {alerts[currentAlert].description}
              </div>
              <div
                className={`font-mono text-xs mt-2 ${alerts[currentAlert].color}`}
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
              className={`h-2 flex-1 rounded-full transition-colors ${
                i === currentAlert ? "bg-primary" : "bg-muted"
              }`}
            />
          ))}
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
      stage: "Alert Dispatch",
      desc: "Multi-channel notification sent",
      stakeholders: [
        "🚒 Fire Department",
        "📡 HAM Operators",
        "🚁 Drone Teams",
      ],
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
      <div className="grid md:grid-cols-3 gap-8">
        {alertFlow.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
            viewport={{ once: true }}
            className={`sketch-border bg-card p-6 transform ${i % 2 === 0 ? "rotate-1" : "-rotate-1"} ${
              activeAlert === i ? "ring-2 ring-primary ring-offset-2" : ""
            }`}
          >
            <div className="text-center">
              <div
                className={`text-4xl mb-4 ${
                  activeAlert === i ? "scale-110" : "scale-100"
                } transition-transform`}
              >
                {i === 0 ? "🔥" : i === 1 ? "🌪️" : "📢"}
              </div>
              <h3 className="text-xl font-bold mb-3 sketch-text text-primary">
                {step.stage}
              </h3>
              <p className="text-muted-foreground sketch-text mb-4">
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
                      className="text-sm font-mono bg-accent/20 px-3 py-1 rounded"
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
      <div className="mt-8 bg-muted h-2 rounded-full overflow-hidden">
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
