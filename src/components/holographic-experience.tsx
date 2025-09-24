import { motion } from "motion/react";
import { Calendar, MapPin, TrendingUp, Code2, CheckCircle, Zap } from "lucide-react";
import HolographicPanel from "./holographic-panel";

export default function HolographicExperience() {
  const experiences = [
    {
      title: "Data Analyst Intern",
      company: "Remote Position",
      duration: "05/2025 – 06/2025",
      location: "Remote",
      type: "Internship",
      icon: TrendingUp,
      status: "COMPLETED",
      color: "emerald-500",
      bgColor: "bg-emerald-500/20",
      textColor: "text-emerald-400",
      achievements: [
        "Analyzed large datasets to extract insights on user behavior, performance, and trends, contributing to data-driven decision-making",
        "Developed interactive dashboards and visualizations using Power BI, Tableau, and Python (Matplotlib, Seaborn)",
        "Built and optimized ETL pipelines for data cleaning, transformation, and loading into SQL/PostgreSQL databases",
        "Applied predictive analytics and machine learning models (Regression, Random Forest, Classification techniques) to identify risk patterns and recommend improvements",
        "Automated reporting workflows, reducing manual effort by 30%"
      ],
      technologies: ["Power BI", "Tableau", "Python", "SQL", "PostgreSQL", "ETL", "Machine Learning", "Matplotlib", "Seaborn"]
    },
    {
      title: "Web Development Intern",
      company: "LaMiCons Edutech Pvt. Ltd",
      duration: "06/2024 – 07/2024",
      location: "Remote",
      type: "Internship",
      icon: Code2,
      status: "COMPLETED",
      color: "blue-500",
      bgColor: "bg-blue-500/20",
      textColor: "text-blue-400",
      achievements: [
        "Contributed to Mindery Kids, an interactive educational platform built with React.js, TailwindCSS, and Vite",
        "Enhanced user experience with responsive layouts and reusable UI components",
        "Implemented authentication flows (Sign In/Sign Up), interactive dashboards, and navigation features",
        "Improved usability for students and parents through intuitive interface design",
        "Optimized code structure with modular components and hooks, ensuring scalability and maintainability"
      ],
      technologies: ["React.js", "TailwindCSS", "Vite", "Authentication", "UI/UX", "JavaScript", "Responsive Design"]
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 text-gray-900 light:text-gray-900">
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
            WORK_EXPERIENCE
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

        {/* Experience Timeline */}
        <div className="relative">
          {/* Central Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 via-cyan-500 to-purple-500 hidden lg:block">
            <motion.div
              className="absolute inset-0 bg-gradient-to-b from-purple-400 to-cyan-400"
              animate={{
                opacity: [0.5, 1, 0.5],
                scaleY: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-col gap-8 items-center`}
              >
                {/* Timeline Dot */}
                <motion.div
                  className="absolute left-1/2 transform -translate-x-1/2 z-10 hidden lg:block"
                  animate={{
                    boxShadow: [
                      `0 0 20px rgba(155, 77, 255, 0.5)`,
                      `0 0 30px rgba(155, 77, 255, 1)`,
                      `0 0 20px rgba(155, 77, 255, 0.5)`,
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <div className={`w-6 h-6 bg-gradient-to-r from-${exp.color} to-cyan-500 rounded-full border-4 border-black`}>
                    <motion.div
                      className="w-full h-full rounded-full bg-gradient-to-r from-purple-400 to-cyan-400"
                      animate={{
                        scale: [0.8, 1.2, 0.8],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  </div>
                </motion.div>

                {/* Experience Card */}
                <div className="lg:w-5/12 w-full">
                  <HolographicPanel delay={0.2} glowColor={exp.color}>
                    <div className="space-y-6">
                      {/* Header */}
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-4">
                          <motion.div
                            className={`p-3 rounded-xl ${exp.bgColor} border border-${exp.color}/30`}
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
                            <exp.icon className={`w-6 h-6 ${exp.textColor}`} />
                          </motion.div>
                          
                          <div>
                            <h3 className="text-xl font-bold text-white font-mono tracking-wide">
                              {exp.title}
                            </h3>
                            <p className={`${exp.textColor} font-mono text-sm`}>
                              {exp.company}
                            </p>
                          </div>
                        </div>

                        {/* Status Badge */}
                        <motion.div
                          className={`flex items-center gap-2 px-3 py-1 bg-${exp.color}/10 border border-${exp.color}/30 rounded-full`}
                          animate={{
                            opacity: [0.7, 1, 0.7],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        >
                          <CheckCircle className={`w-3 h-3 ${exp.textColor}`} />
                          <span className={`text-xs font-mono ${exp.textColor}`}>
                            {exp.status}
                          </span>
                        </motion.div>
                      </div>

                      {/* Duration & Location */}
                      <div className="flex flex-col gap-2 text-gray-400">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span className="text-sm font-mono">{exp.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span className="text-sm font-mono">{exp.location}</span>
                        </div>
                      </div>

                      {/* Achievements */}
                      <div>
                        <h4 className="text-sm font-mono text-gray-400 mb-3 tracking-wider">
                          KEY_ACHIEVEMENTS:
                        </h4>
                        <ul className="space-y-3">
                          {exp.achievements.map((achievement, achIndex) => (
                            <motion.li
                              key={achIndex}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: achIndex * 0.1, duration: 0.4 }}
                              viewport={{ once: true }}
                              className="flex items-start gap-3 text-gray-300"
                            >
                              <motion.div
                                className={`w-1.5 h-1.5 bg-${exp.color} rounded-full mt-2 flex-shrink-0`}
                                animate={{
                                  opacity: [0.5, 1, 0.5],
                                }}
                                transition={{
                                  duration: 2,
                                  repeat: Infinity,
                                  ease: "easeInOut",
                                  delay: achIndex * 0.2,
                                }}
                              />
                              <span className="text-sm leading-relaxed">{achievement}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="text-sm font-mono text-gray-400 mb-3 tracking-wider">
                          TECHNOLOGIES_USED:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <motion.span
                              key={tech}
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ delay: techIndex * 0.05, duration: 0.3 }}
                              viewport={{ once: true }}
                              className={`px-2 py-1 text-xs font-mono bg-${exp.color}/10 border border-${exp.color}/20 rounded text-gray-300 hover:border-${exp.color}/40 transition-colors`}
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </HolographicPanel>
                </div>

                {/* Spacer for alternating layout */}
                <div className="lg:w-5/12 w-full hidden lg:block" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Experience Summary */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <HolographicPanel delay={0.6} glowColor="purple-500" className="max-w-4xl mx-auto">
            <div className="text-center">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Zap className="w-8 h-8 text-purple-400" />
                <h3 className="text-2xl font-bold text-white font-mono tracking-wide">
                  EXPERIENCE_SUMMARY
                </h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                {[
                  { label: "Total Experience", value: "4+ Months", color: "text-emerald-400" },
                  { label: "Internships Completed", value: "2", color: "text-blue-400" },
                  { label: "Technologies Mastered", value: "15+", color: "text-purple-400" },
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
                      className={`text-3xl font-bold ${stat.color} font-mono`}
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
            </div>
          </HolographicPanel>
        </motion.div>
      </div>
    </section>
  );
}