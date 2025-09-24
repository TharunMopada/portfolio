import { motion } from "motion/react";
import { ExternalLink, Github, Zap, Database, Brain, FileText, Activity } from "lucide-react";
import HolographicPanel from "./holographic-panel";
import GlowingButton from "./glowing-button";

export default function HolographicProjects() {
  const projects = [
    {
      title: "FitBuddy",
      subtitle: "AI-Powered Fitness Tracker",
      icon: Activity,
      description: "Intelligent fitness tracking with AI-driven workout & meal recommendations. Features authentication, progress tracking, and scalable Django REST API backend.",
      tech: ["React", "TypeScript", "Django REST", "PostgreSQL", "OpenAI API"],
      liveUrl: "https://fit-buddy-six.vercel.app",
      glowColor: "emerald-500",
      accentColor: "text-emerald-400"
    },
    {
      title: "Langie",
      subtitle: "AI Workflow Orchestrator",
      icon: Zap,
      description: "Graph-based orchestration tool for AI agent workflows. Real-time visualization with branching, persistence, and conditional transitions.",
      tech: ["React", "TypeScript", "TailwindCSS", "shadcn-ui"],
      liveUrl: "https://langie.vercel.app",
      glowColor: "blue-500",
      accentColor: "text-blue-400"
    },
    {
      title: "DocGenie",
      subtitle: "Smart PDF Analysis & Chat",
      icon: FileText,
      description: "AI-powered PDF analysis with intelligent Q&A. Document parsing, context retrieval using LangChain & LlamaIndex with dark mode UI.",
      tech: ["React.js", "FastAPI", "LangChain", "PostgreSQL", "OpenAI API"],
      liveUrl: "https://doc-genie-hazel.vercel.app",
      glowColor: "purple-500",
      accentColor: "text-purple-400"
    },
    {
      title: "BrainSync",
      subtitle: "AI Mental Health Diagnostics",
      icon: Brain,
      description: "AI-based depression detection using behavioral data. Achieved 94.69% accuracy with Random Forest. Interactive dashboard with personalized insights.",
      tech: ["Python", "Machine Learning", "Random Forest", "Data Analysis"],
      glowColor: "rose-500",
      accentColor: "text-rose-400"
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
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
            FEATURED_PROJECTS
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

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <HolographicPanel 
              key={project.title}
              delay={index * 0.2}
              glowColor={project.glowColor}
              className="h-full"
            >
              <div className="h-full flex flex-col">
                {/* Project Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <motion.div
                      className={`p-3 rounded-xl bg-${project.glowColor}/20 border border-${project.glowColor}/30`}
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
                      <project.icon className={`w-7 h-7 ${project.accentColor}`} />
                    </motion.div>
                    
                    <div>
                      <h3 className="text-2xl font-bold text-white font-mono tracking-wide">
                        {project.title}
                      </h3>
                      <p className={`text-sm ${project.accentColor} font-mono`}>
                        {project.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Status indicator */}
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
                    <div className={`w-2 h-2 bg-${project.glowColor} rounded-full`} />
                    <span className="text-xs text-gray-400 font-mono">LIVE</span>
                  </motion.div>
                </div>

                {/* Description */}
                <p className="text-gray-300 mb-6 leading-relaxed flex-grow">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-6">
                  <p className="text-xs text-gray-400 font-mono mb-3 tracking-wider">
                    TECH_STACK:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: techIndex * 0.1, duration: 0.3 }}
                        viewport={{ once: true }}
                        className={`px-3 py-1 text-xs font-mono bg-${project.glowColor}/10 border border-${project.glowColor}/30 rounded text-gray-300`}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 mt-auto">
                  <GlowingButton
                    variant="primary"
                    size="sm"
                    onClick={() => window.open(project.liveUrl, '_blank')}
                  >
                    <ExternalLink className="w-4 h-4" />
                    Launch
                  </GlowingButton>
                  
                  <GlowingButton
                    variant="ghost"
                    size="sm"
                    onClick={() => window.open('https://github.com/TharunMopada', '_blank')}
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </GlowingButton>
                </div>
              </div>
            </HolographicPanel>
          ))}
        </div>

        {/* More Projects Link */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <GlowingButton
            variant="secondary"
            size="lg"
            onClick={() => window.open('https://github.com/TharunMopada', '_blank')}
          >
            <Github className="w-5 h-5" />
            Explore All Projects
          </GlowingButton>
        </motion.div>
      </div>
    </section>
  );
}