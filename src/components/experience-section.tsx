import { motion } from "motion/react";
import { Calendar, MapPin, TrendingUp, Code2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { useTheme } from "./theme-context";

export default function ExperienceSection() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const experiences = [
    {
      title: "Data Analyst Intern",
      company: "Remote",
      duration: "05/2025 – 06/2025",
      location: "Remote",
      type: "Internship",
      icon: TrendingUp,
      achievements: [
        "Analyzed large datasets to extract insights on user behavior, performance, and trends, contributing to data-driven decision-making",
        "Developed interactive dashboards and visualizations using Power BI, Tableau, and Python (Matplotlib, Seaborn)",
        "Built and optimized ETL pipelines for data cleaning, transformation, and loading into SQL/PostgreSQL databases",
        "Applied predictive analytics and machine learning models (Regression, Random Forest, Classification techniques) to identify risk patterns",
        "Automated reporting workflows, reducing manual effort by 30%"
      ],
      skills: ["Power BI", "Tableau", "Python", "SQL", "PostgreSQL", "ETL", "Machine Learning"]
    },
    {
      title: "Web Development Intern",
      company: "LaMiCons Edutech Pvt. Ltd",
      duration: "06/2024 – 07/2024",
      location: "Remote",
      type: "Internship",
      icon: Code2,
      achievements: [
        "Contributed to Mindery Kids, an interactive educational platform built with React.js, TailwindCSS, and Vite",
        "Enhanced user experience with responsive layouts and reusable UI components",
        "Implemented authentication flows (Sign In/Sign Up), interactive dashboards, and navigation features",
        "Improved usability for students and parents through intuitive interface design",
        "Optimized code structure with modular components and hooks, ensuring scalability and maintainability"
      ],
      skills: ["React.js", "TailwindCSS", "Vite", "Authentication", "UI/UX", "JavaScript"]
    }
  ];

  return (
    <section className={isDark ? "py-20 bg-slate-800" : "py-20 bg-white"}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">
            Work Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-cyan-500 hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 top-8 w-4 h-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full border-4 border-slate-800 z-10 hidden md:block"></div>

                <div className="md:ml-20">
                  <Card className={isDark ? "bg-slate-900/80 border-slate-700 hover:border-blue-500/50" : "bg-white border-slate-200 hover:border-blue-300/70" + " transition-all duration-200 hover:shadow-xl"}>
                    <CardHeader>
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-blue-600/20 rounded-lg">
                            <exp.icon className="w-6 h-6 text-blue-400" />
                          </div>
                          <div>
                            <CardTitle className={isDark ? "text-xl text-white" : "text-xl text-gray-900"}>{exp.title}</CardTitle>
                            <p className={isDark ? "text-blue-400 font-medium" : "text-blue-700 font-semibold"}>{exp.company}</p>
                          </div>
                        </div>
                        
                        <div className="flex flex-col gap-2">
                          <div className={isDark ? "flex items-center gap-2 text-gray-400" : "flex items-center gap-2 text-gray-700"}>
                            <Calendar className="w-4 h-4" />
                            <span className="text-sm">{exp.duration}</span>
                          </div>
                          <div className={isDark ? "flex items-center gap-2 text-gray-400" : "flex items-center gap-2 text-gray-700"}>
                            <MapPin className="w-4 h-4" />
                            <span className="text-sm">{exp.location}</span>
                          </div>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      <Badge variant="secondary" className={isDark ? "bg-blue-600/20 text-blue-300 border-blue-500/30" : "bg-blue-50 text-blue-700 border-blue-200"}>
                        {exp.type}
                      </Badge>

                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <motion.li
                            key={achIndex}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: achIndex * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className={isDark ? "flex items-start gap-3 text-gray-300" : "flex items-start gap-3 text-gray-800"}
                          >
                            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm leading-relaxed">{achievement}</span>
                          </motion.li>
                        ))}
                      </ul>

                      <div className="pt-4 border-t border-slate-700">
                        <p className={isDark ? "text-sm text-gray-400 mb-3" : "text-sm text-gray-700 mb-3"}>Key Technologies:</p>
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill, skillIndex) => (
                            <motion.div
                              key={skill}
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ delay: skillIndex * 0.05, duration: 0.3 }}
                              viewport={{ once: true }}
                            >
                              <Badge 
                                variant="outline" 
                                className={isDark ? "bg-slate-800/50 border-slate-600 text-gray-300 hover:border-blue-400 hover:text-blue-300 transition-colors" : "bg-blue-50 border-blue-200 text-blue-800 hover:border-blue-300 hover:text-blue-900 transition-colors"}
                              >
                                {skill}
                              </Badge>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}