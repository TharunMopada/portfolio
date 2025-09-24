import { motion } from "motion/react";
import { Github, Linkedin, Mail, Download, Sparkles } from "lucide-react";
import HolographicPanel from "./holographic-panel";
import GlowingButton from "./glowing-button";
import { useTheme } from "./theme-context";

export default function HolographicHero() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section className="min-h-screen flex items-center justify-center relative px-4 py-20">
      {/* Central Holographic Display */}
      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Floating particles around the main display */}
        <motion.div
          className={`absolute -top-20 -left-20 w-4 h-4 ${
            isDark ? 'bg-purple-400' : 'bg-blue-400'
          } rounded-full`}
          animate={{
            y: [0, -20, 0],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            boxShadow: isDark 
              ? "0 0 20px rgba(155, 77, 255, 0.8)"
              : "0 0 15px rgba(59, 130, 246, 0.6)",
          }}
        />
        
        <motion.div
          className={`absolute -top-32 right-16 w-2 h-2 ${
            isDark ? 'bg-cyan-400' : 'bg-purple-400'
          } rounded-full`}
          animate={{
            y: [0, -15, 0],
            x: [0, 10, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          style={{
            boxShadow: isDark 
              ? "0 0 15px rgba(34, 211, 238, 0.6)"
              : "0 0 12px rgba(147, 51, 234, 0.5)",
          }}
        />

        <motion.div
          className={`absolute bottom-10 -right-24 w-3 h-3 ${
            isDark ? 'bg-pink-400' : 'bg-indigo-400'
          } rounded-full`}
          animate={{
            y: [0, 15, 0],
            opacity: [0.4, 0.9, 0.4],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
          style={{
            boxShadow: isDark 
              ? "0 0 18px rgba(244, 114, 182, 0.7)"
              : "0 0 15px rgba(129, 140, 248, 0.6)",
          }}
        />

        <HolographicPanel delay={0.2} className="max-w-3xl mx-auto">
          {/* Status Indicator */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex items-center justify-center gap-2 mb-6"
          >
            <motion.div
              className="w-3 h-3 bg-green-400 rounded-full"
              animate={{
                opacity: [0.5, 1, 0.5],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                boxShadow: "0 0 10px rgba(74, 222, 128, 0.8)",
              }}
            />
            <span className={`${
              isDark ? 'text-green-400' : 'text-emerald-600'
            } text-sm font-mono tracking-wider`}>
              SYSTEM_ONLINE
            </span>
          </motion.div>

          {/* Main Name Display */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mb-8"
          >
            <motion.h1 
              className={`text-6xl md:text-8xl font-bold mb-4 tracking-wider ${
                isDark
                  ? 'bg-gradient-to-r from-white via-purple-400 to-cyan-400 bg-clip-text text-transparent'
                  : 'bg-gradient-to-r from-gray-800 via-blue-600 to-purple-600 bg-clip-text text-transparent'
              }`}
              style={{
                fontFamily: "'Orbitron', 'Space Mono', monospace",
                textShadow: isDark 
                  ? "0 0 30px rgba(155, 77, 255, 0.8), 0 0 60px rgba(155, 77, 255, 0.4)"
                  : "0 0 20px rgba(59, 130, 246, 0.6), 0 0 40px rgba(59, 130, 246, 0.3)",
              }}
              animate={{
                textShadow: isDark
                  ? [
                      "0 0 30px rgba(155, 77, 255, 0.8), 0 0 60px rgba(155, 77, 255, 0.4)",
                      "0 0 40px rgba(155, 77, 255, 1), 0 0 80px rgba(155, 77, 255, 0.6)",
                      "0 0 30px rgba(155, 77, 255, 0.8), 0 0 60px rgba(155, 77, 255, 0.4)",
                    ]
                  : [
                      "0 0 20px rgba(59, 130, 246, 0.6), 0 0 40px rgba(59, 130, 246, 0.3)",
                      "0 0 30px rgba(59, 130, 246, 0.8), 0 0 50px rgba(59, 130, 246, 0.5)",
                      "0 0 20px rgba(59, 130, 246, 0.6), 0 0 40px rgba(59, 130, 246, 0.3)",
                    ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              THARUN MOPADA
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.3, duration: 0.6 }}
              className="flex items-center justify-center gap-3 mb-4"
            >
              <Sparkles className={`w-6 h-6 ${
                isDark ? 'text-purple-400' : 'text-blue-500'
              }`} />
              <h2 className={`text-2xl md:text-3xl font-mono ${
                isDark ? 'text-purple-300' : 'text-blue-700'
              } tracking-widest`}>
                FULL STACK DEVELOPER
              </h2>
              <Sparkles className={`w-6 h-6 ${
                isDark ? 'text-cyan-400' : 'text-purple-500'
              }`} />
            </motion.div>
            
            <motion.h3
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6, duration: 0.6 }}
              className={`text-lg md:text-xl ${
                isDark ? 'text-cyan-300' : 'text-purple-600'
              } font-mono tracking-wide`}
            >
              AI & DATA ENTHUSIAST
            </motion.h3>
          </motion.div>

          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.9, duration: 0.8 }}
            className={`mb-8 p-6 ${
              isDark 
                ? 'bg-black/20 border border-purple-500/20'
                : 'bg-white/30 border border-blue-200/30'
            } rounded-lg`}
          >
            <p className={`${
              isDark ? 'text-gray-300' : 'text-gray-700'
            } text-lg leading-relaxed max-w-2xl mx-auto font-light`}>
              Passionate about building{" "}
              <span className={`${
                isDark ? 'text-purple-400' : 'text-blue-600'
              } font-medium glow`}>intelligent</span>,{" "}
              <span className={`${
                isDark ? 'text-cyan-400' : 'text-purple-600'
              } font-medium glow`}>scalable</span>, and{" "}
              <span className={`${
                isDark ? 'text-pink-400' : 'text-indigo-600'
              } font-medium glow`}>user-friendly</span> applications. 
              Specializing in Full Stack Development, Data Engineering, and Applied AI.
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.2, duration: 0.8 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <GlowingButton
              variant="primary"
              size="lg"
              onClick={() => window.open('mailto:tharunmopada@gmail.com')}
            >
              <Mail className="w-5 h-5" />
              Contact Me
            </GlowingButton>
            
            <GlowingButton
              variant="secondary"
              size="lg"
              onClick={() => window.open('https://github.com/TharunMopada', '_blank')}
            >
              <Github className="w-5 h-5" />
              GitHub
            </GlowingButton>
            
            <GlowingButton
              variant="ghost"
              size="lg"
              onClick={() => window.open('https://linkedin.com/in/tharun-mopada', '_blank')}
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </GlowingButton>
          </motion.div>
        </HolographicPanel>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className={`flex flex-col items-center ${
              isDark ? 'text-purple-300' : 'text-blue-600'
            } cursor-pointer`}
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="text-sm mb-2 font-mono tracking-wider">EXPLORE_ABOUT</span>
            <motion.div
              className={`w-0.5 h-8 ${
                isDark 
                  ? 'bg-gradient-to-b from-purple-500 to-transparent'
                  : 'bg-gradient-to-b from-blue-500 to-transparent'
              }`}
              animate={{
                scaleY: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// Add custom CSS for glow effect
const style = document.createElement('style');
style.textContent = `
  .glow {
    text-shadow: 0 0 10px currentColor;
  }
  
  @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Space+Mono:wght@400;700&display=swap');
`;
document.head.appendChild(style);