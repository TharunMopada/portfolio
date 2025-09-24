import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { ThemeProvider, useTheme } from "./components/theme-context";
import ThemeToggle from "./components/theme-toggle";
import HolographicBackground from "./components/holographic-background";
import HolographicHero from "./components/holographic-hero";
import HolographicAbout from "./components/holographic-about";
import HolographicExperience from "./components/holographic-experience";
import HolographicProjects from "./components/holographic-projects";
import HolographicSkills from "./components/holographic-skills";
import HolographicContact from "./components/holographic-contact";
import logoImage from "figma:asset/cfc881fdcfef36309ccadb546cdd2bcbcb8d6e87.png";

function AppContent() {
  const [loading, setLoading] = useState(true);
  const { theme } = useTheme();
  const isDark = theme === "dark";

  useEffect(() => {
    // Load Google Fonts
    const fontLink = document.createElement('link');
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Space+Mono:wght@400;700&display=swap';
    fontLink.rel = 'stylesheet';
    document.head.appendChild(fontLink);

    // Simulate loading with holographic boot sequence
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className={`min-h-screen ${
        isDark ? 'bg-black' : 'bg-gradient-to-br from-blue-50 to-purple-50'
      } flex items-center justify-center relative overflow-hidden`}>
        {/* Background effects */}
        <div className="absolute inset-0">
          <div className={`absolute inset-0 ${
            isDark 
              ? 'bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20'
              : 'bg-gradient-to-br from-blue-100/30 via-white to-purple-100/30'
          }`} />
          <motion.div
            className={`absolute inset-0 ${
              isDark 
                ? 'bg-[linear-gradient(rgba(155,77,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(155,77,255,0.1)_1px,transparent_1px)]'
                : 'bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)]'
            } bg-[size:50px_50px]`}
            animate={{
              backgroundPosition: ['0px 0px', '50px 50px'],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>

        {/* Loading sequence */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-8 relative z-10"
        >
          {/* Holographic logo */}
          <motion.div
            className="relative"
            animate={{
              boxShadow: isDark
                ? [
                    "0 0 20px rgba(155, 77, 255, 0.5)",
                    "0 0 40px rgba(155, 77, 255, 1)",
                    "0 0 20px rgba(155, 77, 255, 0.5)",
                  ]
                : [
                    "0 0 20px rgba(59, 130, 246, 0.3)",
                    "0 0 40px rgba(59, 130, 246, 0.6)",
                    "0 0 20px rgba(59, 130, 246, 0.3)",
                  ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className={`w-32 h-32 border-4 ${
              isDark ? 'border-purple-500/50' : 'border-blue-400/50'
            } rounded-full mx-auto relative overflow-hidden`}>
              <motion.div
                className={`absolute inset-0 ${
                  isDark 
                    ? 'bg-gradient-to-r from-transparent via-purple-500/30 to-transparent'
                    : 'bg-gradient-to-r from-transparent via-blue-400/30 to-transparent'
                }`}
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              <div className={`absolute inset-4 border-2 ${
                isDark ? 'border-cyan-500/50' : 'border-purple-400/50'
              } rounded-full`}>
                <motion.div
                  className={`w-full h-full ${
                    isDark 
                      ? 'bg-gradient-to-br from-purple-600/30 to-cyan-600/30'
                      : 'bg-gradient-to-br from-blue-400/20 to-purple-400/20'
                  } rounded-full`}
                  animate={{
                    scale: [0.8, 1.2, 0.8],
                    opacity: [0.3, 0.8, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>
            </div>
          </motion.div>

          {/* Loading text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="space-y-4"
          >
            <h1 
              className={`text-3xl font-bold tracking-wider ${
                isDark 
                  ? 'bg-gradient-to-r from-white via-purple-400 to-cyan-400 bg-clip-text text-transparent'
                  : 'bg-gradient-to-r from-gray-800 via-blue-600 to-purple-600 bg-clip-text text-transparent'
              }`}
              style={{
                fontFamily: "'Orbitron', monospace",
                textShadow: isDark 
                  ? "0 0 20px rgba(155, 77, 255, 0.8)"
                  : "0 0 10px rgba(59, 130, 246, 0.5)",
              }}
            >
              INITIALIZING HOLOGRAM
            </h1>
            
            {/* Loading progress */}
            <div className="space-y-2">
              <motion.div
                className={`w-64 h-1 ${
                  isDark ? 'bg-purple-900/50' : 'bg-blue-200/50'
                } rounded-full mx-auto overflow-hidden`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                <motion.div
                  className={`h-full ${
                    isDark 
                      ? 'bg-gradient-to-r from-purple-500 to-cyan-500'
                      : 'bg-gradient-to-r from-blue-500 to-purple-500'
                  }`}
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 1, duration: 2, ease: "easeInOut" }}
                />
              </motion.div>
              
              <motion.p
                className={`${
                  isDark ? 'text-purple-300' : 'text-blue-600'
                } font-mono text-sm tracking-widest`}
                animate={{
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                LOADING PORTFOLIO MATRIX...
              </motion.p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${
      isDark ? 'bg-black text-white' : 'bg-gradient-to-br from-blue-50 to-purple-50 text-gray-800'
    } relative overflow-x-hidden transition-colors duration-500`}>
      {/* Holographic Background */}
      <HolographicBackground />

      {/* Navigation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className={`fixed top-0 left-0 right-0 z-50 ${
          isDark 
            ? 'bg-black/40 border-b border-purple-500/30'
            : 'bg-white/60 border-b border-blue-200/50 shadow-lg'
        } backdrop-blur-md transition-colors duration-500`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative group cursor-pointer flex items-center"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <motion.div
                className="relative"
                animate={{
                  filter: isDark
                    ? [
                        "drop-shadow(0 0 10px rgba(155, 77, 255, 0.8)) drop-shadow(0 0 20px rgba(34, 211, 238, 0.4))",
                        "drop-shadow(0 0 20px rgba(155, 77, 255, 1)) drop-shadow(0 0 30px rgba(34, 211, 238, 0.6))",
                        "drop-shadow(0 0 10px rgba(155, 77, 255, 0.8)) drop-shadow(0 0 20px rgba(34, 211, 238, 0.4))",
                      ]
                    : [
                        "drop-shadow(0 0 5px rgba(59, 130, 246, 0.6)) drop-shadow(0 0 10px rgba(147, 51, 234, 0.3))",
                        "drop-shadow(0 0 10px rgba(59, 130, 246, 0.8)) drop-shadow(0 0 20px rgba(147, 51, 234, 0.5))",
                        "drop-shadow(0 0 5px rgba(59, 130, 246, 0.6)) drop-shadow(0 0 10px rgba(147, 51, 234, 0.3))",
                      ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <img
                  src={logoImage}
                  alt="TM Logo"
                  className="w-12 h-12 object-contain"
                  style={{
                    filter: "contrast(1.2) brightness(1.3)",
                  }}
                />
                
                {/* Holographic overlay */}
                <motion.div
                  className={`absolute inset-0 ${
                    isDark 
                      ? 'bg-gradient-to-r from-purple-500/20 to-cyan-500/20'
                      : 'bg-gradient-to-r from-blue-400/15 to-purple-400/15'
                  } rounded-lg`}
                  animate={{
                    opacity: [0, 0.5, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                
                {/* Scanning line */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100"
                  animate={{
                    x: ['-100%', '200%'],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  style={{ width: '200%' }}
                />
              </motion.div>
              
              {/* Corner accents */}
              <motion.div
                className={`absolute -inset-1 ${
                  isDark ? 'border border-purple-500/30' : 'border border-blue-400/30'
                } rounded-lg opacity-0 group-hover:opacity-100`}
                animate={{
                  borderColor: isDark 
                    ? ["rgba(155, 77, 255, 0.3)", "rgba(155, 77, 255, 0.8)", "rgba(155, 77, 255, 0.3)"]
                    : ["rgba(59, 130, 246, 0.3)", "rgba(59, 130, 246, 0.8)", "rgba(59, 130, 246, 0.3)"],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
            
            {/* Navigation Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {[
                { name: 'ABOUT', href: '#about' },
                { name: 'EXPERIENCE', href: '#experience' },
                { name: 'PROJECTS', href: '#projects' },
                { name: 'SKILLS', href: '#skills' },
                { name: 'CONTACT', href: '#contact' }
              ].map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className={`relative ${
                    isDark 
                      ? 'text-gray-300 hover:text-purple-400' 
                      : 'text-gray-600 hover:text-blue-600'
                  } transition-colors text-sm font-mono tracking-wider cursor-pointer group`}
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  {item.name}
                  <motion.div
                    className={`absolute bottom-0 left-0 w-full h-0.5 ${
                      isDark ? 'bg-purple-500' : 'bg-blue-500'
                    } scale-x-0 group-hover:scale-x-100 transition-transform origin-left`}
                  />
                </motion.a>
              ))}
              
              {/* Theme Toggle */}
              <ThemeToggle />
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Main Content */}
      <main>
        <HolographicHero />
        <div id="about">
          <HolographicAbout />
        </div>
        <div id="experience">
          <HolographicExperience />
        </div>
        <div id="projects">
          <HolographicProjects />
        </div>
        <div id="skills">
          <HolographicSkills />
        </div>
        <div id="contact">
          <HolographicContact />
        </div>
      </main>

      {/* Floating Action Menu */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 4 }}
        className="fixed bottom-8 right-8 z-50"
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={`relative p-4 ${
            isDark 
              ? 'bg-gradient-to-r from-purple-600 to-cyan-600'
              : 'bg-gradient-to-r from-blue-500 to-purple-500'
          } rounded-full shadow-lg transition-all duration-300 group`}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          animate={{
            boxShadow: isDark
              ? [
                  "0 0 20px rgba(155, 77, 255, 0.5)",
                  "0 0 30px rgba(155, 77, 255, 0.8)",
                  "0 0 20px rgba(155, 77, 255, 0.5)",
                ]
              : [
                  "0 0 20px rgba(59, 130, 246, 0.3)",
                  "0 0 30px rgba(59, 130, 246, 0.6)",
                  "0 0 20px rgba(59, 130, 246, 0.3)",
                ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
          
          {/* Scanning lines */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 rounded-full"
            animate={{
              x: ['-100%', '200%'],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{ width: '200%' }}
          />
        </motion.button>
      </motion.div>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}