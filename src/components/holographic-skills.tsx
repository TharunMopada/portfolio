import { motion } from "motion/react";
import { Code2, Database, Brain, Server, Palette, Settings } from "lucide-react";
import HolographicPanel from "./holographic-panel";

export default function HolographicSkills() {
  const skillCategories = [
    {
      icon: Code2,
      title: "Frontend",
      skills: ["React.js", "TypeScript", "TailwindCSS", "JavaScript", "HTML5", "CSS3"],
      color: "emerald-500",
      bgColor: "bg-emerald-500/20",
      textColor: "text-emerald-400"
    },
    {
      icon: Server,
      title: "Backend",
      skills: ["Node.js", "Express.js", "FastAPI", "Django REST", "RESTful APIs"],
      color: "blue-500",
      bgColor: "bg-blue-500/20",
      textColor: "text-blue-400"
    },
    {
      icon: Database,
      title: "Databases",
      skills: ["PostgreSQL", "MongoDB", "SQLite", "MySQL"],
      color: "purple-500",
      bgColor: "bg-purple-500/20",
      textColor: "text-purple-400"
    },
    {
      icon: Brain,
      title: "AI & ML",
      skills: ["Python", "LangChain", "OpenAI API", "Scikit-learn", "TensorFlow"],
      color: "pink-500",
      bgColor: "bg-pink-500/20",
      textColor: "text-pink-400"
    },
    {
      icon: Palette,
      title: "Design",
      skills: ["Figma", "UI/UX", "Responsive Design", "Prototyping"],
      color: "cyan-500",
      bgColor: "bg-cyan-500/20",
      textColor: "text-cyan-400"
    },
    {
      icon: Settings,
      title: "DevOps",
      skills: ["Docker", "GitHub", "Vercel", "Heroku", "CI/CD"],
      color: "orange-500",
      bgColor: "bg-orange-500/20",
      textColor: "text-orange-400"
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
            SKILL_MATRIX
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

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <HolographicPanel 
              key={category.title}
              delay={index * 0.15}
              glowColor={category.color}
              className="h-full"
            >
              <div className="text-center">
                {/* Category Icon */}
                <motion.div
                  className={`inline-flex p-4 rounded-full ${category.bgColor} border border-${category.color}/30 mb-6`}
                  animate={{
                    boxShadow: [
                      `0 0 20px rgba(155, 77, 255, 0.3)`,
                      `0 0 30px rgba(155, 77, 255, 0.6)`,
                      `0 0 20px rgba(155, 77, 255, 0.3)`,
                    ],
                    rotate: [0, 360],
                  }}
                  transition={{
                    boxShadow: {
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                    rotate: {
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }
                  }}
                >
                  <category.icon className={`w-8 h-8 ${category.textColor}`} />
                </motion.div>

                {/* Category Title */}
                <h3 className={`text-xl font-bold ${category.textColor} mb-6 font-mono tracking-wide`}>
                  {category.title}
                </h3>

                {/* Skills List */}
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: skillIndex * 0.1, duration: 0.4 }}
                      viewport={{ once: true }}
                      className="relative group"
                    >
                      {/* Skill Item */}
                      <div className={`relative p-3 bg-black/20 border border-${category.color}/20 rounded-lg hover:border-${category.color}/50 transition-all duration-300`}>
                        {/* Scanning line effect */}
                        <motion.div
                          className={`absolute inset-0 bg-gradient-to-r from-transparent via-${category.color}/20 to-transparent opacity-0 group-hover:opacity-100`}
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
                        
                        <span className="relative z-10 text-gray-300 font-mono text-sm">
                          {skill}
                        </span>

                        {/* Skill level indicator */}
                        <motion.div
                          className={`absolute left-0 bottom-0 h-0.5 bg-${category.color}`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${Math.random() * 40 + 60}%` }}
                          transition={{ delay: skillIndex * 0.1, duration: 1 }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Proficiency Indicator */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  viewport={{ once: true }}
                  className={`mt-6 inline-flex items-center gap-2 px-3 py-1 bg-${category.color}/10 border border-${category.color}/30 rounded-full`}
                >
                  <div className={`w-2 h-2 bg-${category.color} rounded-full animate-pulse`} />
                  <span className="text-xs font-mono text-gray-400">PROFICIENT</span>
                </motion.div>
              </div>
            </HolographicPanel>
          ))}
        </div>

        {/* Experience Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <HolographicPanel delay={0.6} className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              {[
                { label: "Languages", value: "8+", color: "text-emerald-400" },
                { label: "Frameworks", value: "12+", color: "text-blue-400" },
                { label: "Projects", value: "15+", color: "text-purple-400" },
                { label: "Experience", value: "2+ Years", color: "text-cyan-400" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="space-y-2"
                >
                  <motion.div 
                    className={`text-3xl md:text-4xl font-bold ${stat.color} font-mono`}
                    animate={{
                      textShadow: [
                        "0 0 10px currentColor",
                        "0 0 20px currentColor",
                        "0 0 10px currentColor",
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-gray-400 text-sm font-mono tracking-wider">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </HolographicPanel>
        </motion.div>
      </div>
    </section>
  );
}