import { motion } from "motion/react";
import { Monitor, Server, Database, Brain, BarChart3, Settings } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

export default function SkillsSection() {
  const skillCategories = [
    {
      icon: Monitor,
      title: "Frontend",
      color: "from-green-400 to-blue-500",
      bgColor: "bg-green-600/20",
      borderColor: "border-green-500/30",
      skills: ["React.js", "TypeScript", "TailwindCSS", "HTML5", "CSS3", "JavaScript (ES6+)", "Responsive Design", "Figma"]
    },
    {
      icon: Server,
      title: "Backend",
      color: "from-blue-400 to-purple-500",
      bgColor: "bg-blue-600/20",
      borderColor: "border-blue-500/30",
      skills: ["Node.js", "Express.js", "FastAPI", "Django REST Framework", "RESTful APIs"]
    },
    {
      icon: Database,
      title: "Databases",
      color: "from-purple-400 to-pink-500",
      bgColor: "bg-purple-600/20",
      borderColor: "border-purple-500/30",
      skills: ["PostgreSQL", "MongoDB", "SQLite", "MySQL"]
    },
    {
      icon: Brain,
      title: "AI & Data",
      color: "from-pink-400 to-red-500",
      bgColor: "bg-pink-600/20",
      borderColor: "border-pink-500/30",
      skills: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit-learn", "R", "LangChain", "LlamaIndex", "OpenAI API", "Apache Spark", "Hadoop"]
    },
    {
      icon: BarChart3,
      title: "Data Analytics",
      color: "from-red-400 to-orange-500",
      bgColor: "bg-red-600/20",
      borderColor: "border-red-500/30",
      skills: ["Power BI", "Tableau", "SQL", "ETL Pipelines", "Data Visualization", "Predictive Analytics", "Reporting Automation"]
    },
    {
      icon: Settings,
      title: "DevOps & Tools",
      color: "from-orange-400 to-yellow-500",
      bgColor: "bg-orange-600/20",
      borderColor: "border-orange-500/30",
      skills: ["Docker", "GitHub", "Vercel", "Heroku", "Postman"]
    }
  ];

  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent mb-4">
            Skills & Tools
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="h-full"
            >
              <Card className={`bg-slate-800/50 ${category.borderColor} border-2 hover:shadow-2xl transition-all duration-300 h-full`}>
                <CardHeader className="text-center pb-4">
                  <div className={`inline-flex p-3 rounded-xl ${category.bgColor} mb-4`}>
                    <category.icon className={`w-8 h-8 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`} />
                  </div>
                  <CardTitle className={`text-xl bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                    {category.title}
                  </CardTitle>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: skillIndex * 0.05, duration: 0.3 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <Badge 
                          variant="secondary" 
                          className="bg-slate-700/50 text-gray-300 hover:bg-slate-600/50 transition-colors cursor-default text-xs"
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6"
        >
          {[
            { number: "5+", label: "Featured Projects", color: "text-green-400" },
            { number: "2", label: "Internships", color: "text-blue-400" },
            { number: "6", label: "Skill Categories", color: "text-purple-400" },
            { number: "3", label: "Certifications", color: "text-pink-400" }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className={`text-3xl md:text-4xl font-bold ${stat.color} mb-2`}>
                {stat.number}
              </div>
              <div className="text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}