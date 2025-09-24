import { motion } from "motion/react";
import { Mail, Github, Linkedin, MapPin, Send, ExternalLink, Terminal } from "lucide-react";
import HolographicPanel from "./holographic-panel";
import GlowingButton from "./glowing-button";

export default function HolographicContact() {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "tharunmopada@gmail.com",
      href: "mailto:tharunmopada@gmail.com",
      color: "emerald-500",
      bgColor: "bg-emerald-500/20",
      textColor: "text-emerald-400",
      description: "Primary contact for business inquiries"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/TharunMopada",
      href: "https://github.com/TharunMopada",
      color: "purple-500",
      bgColor: "bg-purple-500/20",
      textColor: "text-purple-400",
      description: "Source code and project repositories"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/tharun-mopada",
      href: "https://linkedin.com/in/tharun-mopada",
      color: "blue-500",
      bgColor: "bg-blue-500/20",
      textColor: "text-blue-400",
      description: "Professional networking and updates"
    }
  ];

  const liveProjects = [
    {
      name: "DocGenie",
      url: "https://doc-genie-hazel.vercel.app",
      status: "ACTIVE"
    },
    {
      name: "Langie",
      url: "https://langie.vercel.app",
      status: "ACTIVE"
    },
    {
      name: "FitBuddy",
      url: "https://fit-buddy-six.vercel.app",
      status: "ACTIVE"
    }
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
            ESTABLISH_CONNECTION
          </motion.h2>
          
          <motion.div
            className="w-32 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mb-6"
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
          
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light">
            Ready to collaborate on exciting projects and innovative solutions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Methods */}
          <div className="lg:col-span-2 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-8"
            >
              <Terminal className="w-8 h-8 text-cyan-400" />
              <h3 className="text-2xl font-bold text-white font-mono tracking-wide">
                COMMUNICATION_CHANNELS
              </h3>
            </motion.div>

            {contactMethods.map((contact, index) => (
              <HolographicPanel 
                key={contact.label}
                delay={index * 0.2}
                glowColor={contact.color}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <motion.div
                      className={`p-3 rounded-xl ${contact.bgColor} border border-${contact.color}/30`}
                      animate={{
                        boxShadow: [
                          `0 0 20px rgba(155, 77, 255, 0.3)`,
                          `0 0 30px rgba(155, 77, 255, 0.6)`,
                          `0 0 20px rgba(155, 77, 255, 0.3)`,
                        ],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <contact.icon className={`w-6 h-6 ${contact.textColor}`} />
                    </motion.div>
                    
                    <div>
                      <h4 className="text-lg font-bold text-white font-mono">
                        {contact.label}
                      </h4>
                      <p className="text-sm text-gray-400 mb-1">
                        {contact.description}
                      </p>
                      <motion.a
                        href={contact.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${contact.textColor} hover:text-white transition-colors font-mono text-sm`}
                        whileHover={{ scale: 1.02 }}
                      >
                        {contact.value}
                      </motion.a>
                    </div>
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <GlowingButton
                      variant="ghost"
                      size="sm"
                      onClick={() => window.open(contact.href, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </GlowingButton>
                  </motion.div>
                </div>
              </HolographicPanel>
            ))}

            {/* Location */}
            <HolographicPanel delay={0.6} glowColor="cyan-500">
              <div className="flex items-center gap-4">
                <motion.div
                  className="p-3 rounded-xl bg-cyan-500/20 border border-cyan-500/30"
                  animate={{
                    boxShadow: [
                      "0 0 20px rgba(34, 211, 238, 0.3)",
                      "0 0 30px rgba(34, 211, 238, 0.6)",
                      "0 0 20px rgba(34, 211, 238, 0.3)",
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <MapPin className="w-6 h-6 text-cyan-400" />
                </motion.div>
                
                <div>
                  <h4 className="text-lg font-bold text-white font-mono">
                    Location
                  </h4>
                  <p className="text-cyan-400 font-mono">
                    Andhra Pradesh, India
                  </p>
                  <p className="text-sm text-gray-400">
                    Available for remote collaboration worldwide
                  </p>
                </div>
              </div>
            </HolographicPanel>
          </div>

          {/* Status Panel */}
          <div className="space-y-6">
            <HolographicPanel delay={0.8} glowColor="emerald-500">
              <div className="text-center">
                <motion.div
                  className="flex items-center justify-center gap-2 mb-4"
                  animate={{
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse" />
                  <span className="text-emerald-400 font-mono text-sm tracking-wider">
                    STATUS: AVAILABLE
                  </span>
                </motion.div>

                <h4 className="text-lg font-bold text-white font-mono mb-4">
                  READY FOR PROJECTS
                </h4>

                <div className="space-y-3 text-sm text-gray-300">
                  <div className="flex items-center justify-between">
                    <span>Full Stack Development</span>
                    <span className="text-emerald-400">✓</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>AI/ML Integration</span>
                    <span className="text-emerald-400">✓</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Remote Collaboration</span>
                    <span className="text-emerald-400">✓</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Consulting</span>
                    <span className="text-emerald-400">✓</span>
                  </div>
                </div>

                <div className="mt-6">
                  <GlowingButton
                    variant="primary"
                    size="md"
                    onClick={() => window.open('mailto:tharunmopada@gmail.com?subject=Project Collaboration&body=Hi Tharun, I\'d like to discuss a project...', '_blank')}
                  >
                    <Send className="w-4 h-4" />
                    Start Project
                  </GlowingButton>
                </div>
              </div>
            </HolographicPanel>

            {/* Live Projects Status */}
            <HolographicPanel delay={1} glowColor="blue-500">
              <h4 className="text-lg font-bold text-white font-mono mb-4 text-center">
                LIVE_PROJECTS
              </h4>
              
              <div className="space-y-3">
                {liveProjects.map((project, index) => (
                  <motion.div
                    key={project.name}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    viewport={{ once: true }}
                    className="flex items-center justify-between p-2 bg-black/20 rounded border border-blue-500/20 hover:border-blue-500/40 transition-colors cursor-pointer"
                    onClick={() => window.open(project.url, '_blank')}
                  >
                    <span className="text-white font-mono text-sm">
                      {project.name}
                    </span>
                    <div className="flex items-center gap-2">
                      <motion.div
                        className="w-2 h-2 bg-emerald-400 rounded-full"
                        animate={{
                          opacity: [0.5, 1, 0.5],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                      <span className="text-xs text-emerald-400 font-mono">
                        {project.status}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </HolographicPanel>
          </div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <HolographicPanel delay={1.2} className="max-w-2xl mx-auto">
            <div className="text-center">
              <h4 className="text-xl font-bold text-white font-mono mb-4">
                "Building the future, one line of code at a time"
              </h4>
              <p className="text-gray-400 font-mono text-sm">
                © 2025 THARUN_MOPADA.EXE | ALL_RIGHTS_RESERVED
              </p>
            </div>
          </HolographicPanel>
        </motion.div>
      </div>
    </section>
  );
}