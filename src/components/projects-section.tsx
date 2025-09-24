import { motion } from "motion/react";
import { ExternalLink, Github, Calendar, Zap, Database, Brain, FileText, Activity } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

export default function ProjectsSection() {
  const projects = [
    {
      title: "FitBuddy – AI-Powered Fitness Tracker",
      date: "07/2025",
      icon: Activity,
      description: "Designed and deployed a fitness tracking web app with authentication, workout logging, and progress tracking. Built scalable Django REST API + PostgreSQL backend. Integrated AI-driven workout & meal plan recommendations using OpenAI API.",
      tech: ["React", "TypeScript", "Django REST", "PostgreSQL", "Docker", "JWT", "OpenAI API"],
      liveUrl: "https://fit-buddy-six.vercel.app",
      gradient: "from-green-400 to-emerald-600",
      bgColor: "bg-green-600/10",
      borderColor: "border-green-500/30"
    },
    {
      title: "Langie – AI Workflow Orchestrator",
      date: "05/2025",
      icon: Zap,
      description: "Built a graph-based orchestration tool modeling workflows as stages with branching, persistence, and conditional transitions. Developed a real-time visualization UI for executing and monitoring AI agent workflows.",
      tech: ["React", "TypeScript", "TailwindCSS", "shadcn-ui"],
      liveUrl: "https://langie.vercel.app",
      gradient: "from-blue-400 to-cyan-600",
      bgColor: "bg-blue-600/10",
      borderColor: "border-blue-500/30"
    },
    {
      title: "DocGenie – Smart PDF Analysis & Chat",
      date: "03/2025",
      icon: FileText,
      description: "Developed a PDF analysis and chat application with AI/NLP integration. Implemented document parsing, context retrieval, and intelligent Q&A using LangChain & LlamaIndex. Built a responsive multi-page UI with dark mode and managed storage via PostgreSQL.",
      tech: ["React.js", "TailwindCSS", "FastAPI", "PostgreSQL", "LangChain", "LlamaIndex", "OpenAI API"],
      liveUrl: "https://doc-genie-hazel.vercel.app",
      gradient: "from-purple-400 to-pink-600",
      bgColor: "bg-purple-600/10",
      borderColor: "border-purple-500/30"
    },
    {
      title: "Smart PDF Chat (FastAPI + LangChain)",
      date: "2025",
      icon: Database,
      description: "Full-stack app enabling document upload and interactive Q&A. Backend: FastAPI, LangChain, SQLite/Postgres | Frontend: React.js. Integrated LLM-powered Q&A with secure file storage.",
      tech: ["FastAPI", "LangChain", "SQLite", "PostgreSQL", "React.js"],
      gradient: "from-yellow-400 to-orange-600",
      bgColor: "bg-yellow-600/10",
      borderColor: "border-yellow-500/30"
    },
    {
      title: "BrainSync – AI Mental Health Diagnostics",
      date: "2025",
      icon: Brain,
      description: "Capstone project focused on AI-based depression detection using behavioral & lifestyle data. Achieved 94.69% accuracy using Random Forest; compared SVM, KNN, Decision Tree, Logistic Regression, CNN. Built an interactive dashboard providing personalized insights & recommendations.",
      tech: ["Python", "Machine Learning", "Random Forest", "Data Analysis", "Dashboard"],
      gradient: "from-red-400 to-rose-600",
      bgColor: "bg-red-600/10",
      borderColor: "border-red-500/30"
    }
  ];

  return (
    <section className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-orange-500 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="h-full"
            >
              <Card className={`bg-slate-900/80 ${project.borderColor} border-2 hover:shadow-2xl transition-all duration-300 h-full`}>
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${project.bgColor}`}>
                        <project.icon className={`w-6 h-6 bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`} />
                      </div>
                      <div>
                        <CardTitle className={`text-lg bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent leading-tight`}>
                          {project.title}
                        </CardTitle>
                        <div className="flex items-center gap-2 text-gray-400 mt-1">
                          <Calendar className="w-3 h-3" />
                          <span className="text-xs">{project.date}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="space-y-3">
                    <p className="text-xs text-gray-400 font-medium">Technologies Used:</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <motion.div
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: techIndex * 0.03, duration: 0.3 }}
                          viewport={{ once: true }}
                        >
                          <Badge 
                            variant="outline" 
                            className="bg-slate-800/50 border-slate-600 text-gray-300 text-xs"
                          >
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3 pt-4 border-t border-slate-700">
                    {project.liveUrl && (
                      <Button
                        variant="outline"
                        size="sm"
                        className={`${project.bgColor} ${project.borderColor} hover:bg-opacity-20 transition-colors`}
                        onClick={() => window.open(project.liveUrl, '_blank')}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                    )}
                    <Button
                      variant="outline"
                      size="sm"
                      className="bg-gray-600/20 border-gray-500/30 hover:bg-gray-600/30 transition-colors"
                      onClick={() => window.open('https://github.com/TharunMopada', '_blank')}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* View More Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button
            variant="outline"
            size="lg"
            className="bg-gradient-to-r from-yellow-600/20 to-orange-600/20 border-yellow-500/50 text-yellow-200 hover:bg-gradient-to-r hover:from-yellow-600/30 hover:to-orange-600/30"
            onClick={() => window.open('https://github.com/TharunMopada', '_blank')}
          >
            <Github className="w-5 h-5 mr-2" />
            View All Projects on GitHub
          </Button>
        </motion.div>
      </div>
    </section>
  );
}