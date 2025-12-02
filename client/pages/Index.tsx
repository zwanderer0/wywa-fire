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
    <div className="min-h-screen bg-gray-100 text-gray-900 font-mono p-8 flex items-center justify-center">
      <div className="max-w-3xl w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="inline-block">{typedText}</span>
            <span className="animate-pulse text-gray-500">_</span>
          </h1>
          <div className="text-sm text-gray-600">
            Ambient Intelligence Interest Group
          </div>
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="space-y-6 text-sm md:text-base"
        >
          {/* About */}
          <div className="border-l-2 border-gray-400 pl-4">
            <p className="text-gray-700 leading-relaxed">
              WYWA is an open-source nonprofit building embodied AI systems that
              understand physical world signals. We build and ship systems that observe,
              interpret, and act on environmental data to create meaningful change.
            </p>
          </div>

          {/* Project */}
          <div className="border-l-2 border-gray-400 pl-4">
            <div className="text-gray-600 mb-2 font-semibold">Current Project</div>
            <a
              href="/fire"
              className="block group hover:bg-gray-200 p-2 -ml-2 transition-colors"
            >
              <div className="text-blue-600 group-hover:text-blue-700 font-semibold">
                WYWA FIRE
              </div>
              <div className="text-gray-600 text-xs mt-1">
                First Responder AI Initiative - Wildfire detection using edge AI and sensor networks
              </div>
            </a>
          </div>

          {/* Recent Features */}
          <div className="border-l-2 border-gray-400 pl-4">
            <div className="text-gray-600 mb-2 font-semibold">Recent Features</div>
            <div className="space-y-1 text-sm">
              <div>
                <a
                  href="https://www.ai-infra-summit.com/speakers/navya-veeturi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-600 hover:text-red-700 underline"
                >
                  AI Infra Summit CA, 2025
                </a>
              </div>
              <div>
                <a
                  href="https://www.linkedin.com/posts/rupabhagwat_while-sf-is-celebrating-the-tech-week-if-activity-7381082144426823680-5W00/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-600 hover:text-red-700 underline"
                >
                  SF TechWalk 2025
                </a>
              </div>
            </div>
          </div>

          {/* Meetings */}
          <div className="border-l-2 border-gray-400 pl-4">
            <div className="text-gray-600 mb-2 font-semibold">Meetings</div>
            <p className="text-gray-700">
              Bay Area, California
              <br />
              <span className="text-gray-600 text-sm">Bi-weekly gatherings for builders and researchers</span>
            </p>
          </div>

          {/* Join */}
          <div className="border-l-2 border-gray-400 pl-4">
            <div className="text-gray-600 mb-2 font-semibold">Join Us</div>
            <div className="text-gray-700 space-y-1 text-sm">
              <p>We're looking for collaborators who:</p>
              <ul className="ml-4 space-y-0.5 text-gray-600">
                <li>- Build hardware for extreme environments</li>
                <li>- Train small, efficient models</li>
                <li>- Have ideas on scaling and strategy</li>
                <li>- Background in distributed sensing</li>
                <li>- Interaction designers/human factors</li>
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div className="border-l-2 border-gray-400 pl-4">
            <div className="text-gray-600 mb-2 font-semibold">Contact</div>
            <div className="space-y-1 text-sm">
              <div className="text-gray-700">
                <a
                  href="mailto:nveeturi@wywa.ai"
                  className="hover:text-gray-900 transition-colors underline"
                >
                  nveeturi@wywa.ai
                </a>
              </div>
              <div className="text-gray-700">
                <a
                  href="/updates"
                  className="hover:text-gray-900 transition-colors underline"
                >
                  Weekly Updates
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="mt-8 pt-6 border-t border-gray-300 text-gray-500 text-xs"
        >
          <div>WYWA - Open Source Ambient Intelligence</div>
          <div className="mt-1">California, USA</div>
        </motion.footer>
      </div>
    </div>
  );
}