"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Index() {
  const [typedText, setTypedText] = useState("");
  const fullText = "While You Were Away";

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
    <div className="min-h-screen bg-black text-green-400 font-mono p-8 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h1 className="text-2xl md:text-3xl font-bold mb-2">
            <span className="inline-block">{typedText}</span>
            <span className="animate-pulse">_</span>
          </h1>
          <div className="text-sm text-green-300 opacity-80">
            Ambient Intelligence Interest Group
          </div>
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="space-y-8 text-sm md:text-base"
        >
          {/* About Section */}
          <div className="border-l-2 border-green-400 pl-4">
            <div className="text-green-500 mb-2">$ cat about.txt</div>
            <p className="text-green-300 leading-relaxed">
              WYWA is an open-source nonprofit connecting physical world signals
              into impactful understanding. We build systems that observe, interpret,
              and act on environmental data to create meaningful change.
            </p>
          </div>

          {/* Projects */}
          <div className="border-l-2 border-green-400 pl-4">
            <div className="text-green-500 mb-4">$ ls projects/</div>
            <div className="space-y-3">
              <a
                href="/fire"
                className="block group hover:bg-green-400/10 p-2 -ml-2 transition-colors"
              >
                <div className="text-green-400 group-hover:text-green-300">
                  <span className="text-green-500">[01]</span> WYWA FI-RE
                </div>
                <div className="text-green-300/70 text-xs mt-1 ml-5">
                  First Responder AI Initiative - Wildfire detection using edge AI and sensor networks
                </div>
              </a>
            </div>
          </div>

          {/* Meetings */}
          <div className="border-l-2 border-green-400 pl-4">
            <div className="text-green-500 mb-2">$ cal meetings</div>
            <p className="text-green-300">
              Bay Area, California
              <br />
              <span className="text-green-300/70">Bi-weekly gatherings for builders and researchers</span>
            </p>
          </div>

          {/* Join */}
          <div className="border-l-2 border-green-400 pl-4">
            <div className="text-green-500 mb-2">$ join</div>
            <div className="text-green-300 space-y-2">
              <p>We're looking for collaborators who:</p>
              <ul className="ml-4 space-y-1 text-green-300/80">
                <li>- Build hardware for extreme environments</li>
                <li>- Train small, efficient models</li>
                <li>- Have ideas on scaling and strategy</li>
                <li>- Care about environmental impact</li>
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div className="border-l-2 border-green-400 pl-4">
            <div className="text-green-500 mb-2">$ contact</div>
            <div className="space-y-1">
              <div className="text-green-300">
                <a
                  href="mailto:nveeturi@wywa.ai"
                  className="hover:text-green-200 transition-colors underline"
                >
                  nveeturi@wywa.ai
                </a>
              </div>
              <div className="text-green-300">
                <a
                  href="/updates"
                  className="hover:text-green-200 transition-colors underline"
                >
                  Weekly Updates
                </a>
              </div>
            </div>
          </div>

          {/* Status */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="pt-8 border-t border-green-400/30"
          >
            <div className="text-green-500 mb-2">$ status</div>
            <div className="text-green-300/60 text-xs">
              <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
              501(c)(3) Nonprofit Organization
            </div>
          </motion.div>
        </motion.div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="mt-16 pt-8 border-t border-green-400/20 text-green-300/50 text-xs"
        >
          <div>WYWA (While You Were Away) - Open Source Ambient Intelligence</div>
          <div className="mt-1">California, USA</div>
        </motion.footer>
      </div>
    </div>
  );
}