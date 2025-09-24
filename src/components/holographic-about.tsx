import { motion } from "motion/react";
import { Code2, Database, Brain, Palette, Target, Zap } from "lucide-react";
import HolographicPanel from "./holographic-panel";
import profileImage from "figma:asset/f0b7abb30caa6ee7a031a41dc159d57dc097ea23.png";

export default function HolographicAbout() {
  const interests = [
    {
      icon: Code2,
      title: "Full Stack Development",
      description: "End-to-end application development with modern frameworks",
      color: "emerald-500",
      bgColor: "bg-emerald-500/20"
    },
    {
      icon: Database,
      title: "Data Engineering", 
      description: "Building scalable data pipelines and analytics systems",
      color: "blue-500",
      bgColor: "bg-blue-500/20"
    },
    {
      icon: Brain,
      title: "Applied AI",
      description: "Implementing intelligent solutions with machine learning",
      color: "purple-500",
      bgColor: "bg-purple-500/20"
    },
    {
      icon: Palette,
      title: "UX/UI Design",
      description: "Creating intuitive and aesthetically pleasing interfaces",
      color: "pink-500",
      bgColor: "bg-pink-500/20"
    }
  ];

  const currentFocus = [
    "AI-powered systems",
    "Predictive analytics", 
    "Scalable web applications",
    "React & MERN stack",
    "Python & R",
    "Apache Spark"
  ];

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-5xl md:text-6xl font-bold mb-6 tracking-wider"
            style={{
              fontFamily: "'Orbitron', monospace",
              textShadow: "0 0 30px rgba(155, 77, 255, 0.6)",
              background: "linear-gradient(45deg, #ffffff, #9b4dff, #22d3ee)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            ABOUT_ME.exe
          </motion.h2>
          
          <motion.div
            className="w-32 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto"
            animate={{
              boxShadow: [
                "0 0 20px rgba(155, 77, 255, 0.5)",
                "0 0 40px rgba(155, 77, 255, 1)",
                "0 0 20px rgba(155, 77, 255, 0.5)",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <HolographicPanel delay={0.2} glowColor="cyan-500">
              <div className="relative overflow-hidden rounded-xl">
                {/* Holographic image container */}
                <div className="relative">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-cyan-600/20 z-10"
                    animate={{
                      opacity: [0.3, 0.7, 0.3],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  
                  {/* Main image with holographic effects */}
                  <motion.img
                    src={profileImage}
                    alt="Tharun Mopada - Professional"
                    className="w-full h-[500px] object-cover"
                    style={{
                      filter: "contrast(1.1) brightness(1.1)",
                    }}
                    animate={{
                      filter: [
                        "contrast(1.1) brightness(1.1) hue-rotate(0deg)",
                        "contrast(1.2) brightness(1.2) hue-rotate(5deg)",
                        "contrast(1.1) brightness(1.1) hue-rotate(0deg)",
                      ],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />

                  {/* Holographic scan lines */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent z-20"
                    animate={{
                      y: ['-100%', '200%'],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    style={{
                      height: '200%',
                      width: '100%',
                    }}
                  />
                </div>

                {/* Status overlay */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-sm rounded-lg p-3 border border-cyan-500/30"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white font-mono font-semibold">THARUN MOPADA</p>
                      <p className="text-cyan-400 text-sm font-mono">Computer Science Graduate</p>
                    </div>
                    <motion.div
                      className="flex items-center gap-2"
                      animate={{
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <div className="w-2 h-2 bg-green-400 rounded-full" />
                      <span className="text-green-400 text-xs font-mono">ACTIVE</span>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </HolographicPanel>
          </motion.div>

          {/* Right Column - About Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Main Bio */}
            <HolographicPanel delay={0.4} glowColor="purple-500">
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-4">
                  <Target className="w-6 h-6 text-purple-400" />
                  <h3 className="text-xl font-bold text-white font-mono tracking-wide">
                    PROFILE_OVERVIEW
                  </h3>
                </div>
                
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                    I'm a Computer Science graduate passionate about building{" "}
                    <span className="text-purple-400 font-medium">intelligent</span>,{" "}
                    <span className="text-cyan-400 font-medium">scalable</span>, and{" "}
                    <span className="text-pink-400 font-medium">user-friendly</span> applications. 
                    My expertise lies in Full Stack Development, Data Engineering, and Applied AI.
                  </p>
                  
                  <p>
                    With hands-on experience in developing end-to-end projects, I enjoy solving 
                    real-world problems through technology. I also bring a strong interest in 
                    UX/UI design, having explored wireframing, prototyping, and user research 
                    to craft solutions that are both functional and aesthetically pleasing.
                  </p>
                </div>
              </div>
            </HolographicPanel>

            {/* Current Focus */}
            <HolographicPanel delay={0.6} glowColor="emerald-500">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Zap className="w-6 h-6 text-emerald-400" />
                  <h3 className="text-xl font-bold text-white font-mono tracking-wide">
                    CURRENT_FOCUS
                  </h3>
                </div>
                
                <p className="text-gray-300 mb-4">
                  Currently exploring these cutting-edge technologies:
                </p>
                
                <div className="grid grid-cols-2 gap-3">
                  {currentFocus.map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.4 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-2 p-2 bg-emerald-500/10 border border-emerald-500/20 rounded"
                    >
                      <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                      <span className="text-gray-300 text-sm font-mono">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </HolographicPanel>

            {/* Interest Areas */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {interests.map((interest, index) => (
                <HolographicPanel 
                  key={interest.title}
                  delay={0.8 + index * 0.1}
                  glowColor={interest.color}
                >
                  <div className="text-center">
                    <motion.div
                      className={`inline-flex p-3 rounded-xl ${interest.bgColor} border border-${interest.color}/30 mb-3`}
                      animate={{
                        boxShadow: [
                          `0 0 15px rgba(155, 77, 255, 0.3)`,
                          `0 0 25px rgba(155, 77, 255, 0.6)`,
                          `0 0 15px rgba(155, 77, 255, 0.3)`,
                        ],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <interest.icon className={`w-5 h-5 text-${interest.color}`} />
                    </motion.div>
                    
                    <h4 className={`text-sm font-bold text-${interest.color} mb-2 font-mono`}>
                      {interest.title}
                    </h4>
                    
                    <p className="text-xs text-gray-400 leading-relaxed">
                      {interest.description}
                    </p>
                  </div>
                </HolographicPanel>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}