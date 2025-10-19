import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function Fire() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800 flex items-center justify-center relative overflow-hidden">
      {/* Animated background circles */}
      <div className="absolute inset-0">
        <div className="absolute w-96 h-96 bg-white/10 rounded-full blur-3xl -top-20 -left-20 animate-pulse" />
        <div className="absolute w-96 h-96 bg-white/10 rounded-full blur-3xl -bottom-20 -right-20 animate-pulse" style={{ animationDelay: "2s" }} />
        <div className="absolute w-96 h-96 bg-white/5 rounded-full blur-3xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      {/* Main content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center z-10 px-4"
      >
        {/* Fire emoji with animation */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 15,
            delay: 0.2
          }}
          className="text-6xl md:text-8xl mb-6"
        >
          <motion.span
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            className="inline-block"
          >
            🔥
          </motion.span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-4"
          style={{ textShadow: "0 4px 12px rgba(0,0,0,0.3)" }}
        >
          Hello There!
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-xl md:text-2xl lg:text-3xl text-white/90 mb-8 font-light"
        >
          Welcome to WYWA FI-RE
        </motion.p>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="inline-block mb-8"
        >
          <div className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-full px-6 py-2 text-white/90 text-sm md:text-base">
            First Responder AI Initiative
          </div>
        </motion.div>

        {/* Action buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button
            size="lg"
            className="bg-white text-purple-700 hover:bg-white/90 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
            onClick={() => navigate("/")}
          >
            Back to Home →
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="bg-transparent text-white border-white/50 hover:bg-white/10 hover:border-white shadow-lg"
            onClick={() => navigate("/updates")}
          >
            View Updates
          </Button>
        </motion.div>

        {/* Easter egg message */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="text-white/50 text-sm mt-12"
        >
          🌲 Protecting forests with AI 🌲
        </motion.p>
      </motion.div>
    </div>
  );
}