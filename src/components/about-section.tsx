import { motion } from "motion/react";
import { Code, Database, Brain, Palette } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export default function AboutSection() {
  const interests = [
    {
      icon: Code,
      title: "Full Stack Development",
      description: "MERN stack, React, TypeScript, and modern web technologies"
    },
    {
      icon: Database,
      title: "Data Engineering",
      description: "ETL pipelines, SQL/PostgreSQL, and data visualization"
    },
    {
      icon: Brain,
      title: "Applied AI",
      description: "Machine learning, LangChain, OpenAI API, and predictive analytics"
    },
    {
      icon: Palette,
      title: "UX/UI Design",
      description: "Wireframing, prototyping, and user research"
    }
  ];

  return (
    <section id="about" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1566915896913-549d796d2166?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjB3b3Jrc3BhY2UlMjBkZXZlbG9wZXJ8ZW58MXx8fHwxNzU4NDg5ODA0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Developer workspace"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
            </div>
            
            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
              className="absolute -bottom-6 -right-6 bg-purple-600/90 backdrop-blur-sm rounded-xl p-4 border border-purple-500/30"
            >
              <p className="text-white font-medium">Computer Science Graduate</p>
              <p className="text-purple-200 text-sm">B.Tech 2021-2025</p>
            </motion.div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a Computer Science graduate passionate about building intelligent, scalable, 
                and user-friendly applications. My expertise lies in <span className="text-purple-400 font-semibold">Full Stack Development</span>, 
                <span className="text-purple-400 font-semibold"> Data Engineering</span>, and <span className="text-purple-400 font-semibold">Applied AI</span>.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                With hands-on experience in developing end-to-end projects, I enjoy solving real-world 
                problems through technology. I also bring a strong interest in UX/UI design, having 
                explored wireframing, prototyping, and user research to craft solutions that are both 
                functional and aesthetically pleasing.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed">
                Currently, I'm exploring AI-powered systems, predictive analytics, and scalable web 
                applications, while applying my skills in React, MERN stack, Python, R, and Spark.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              {interests.map((interest, index) => (
                <motion.div
                  key={interest.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 * index, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-slate-800/50 border-slate-700 hover:border-purple-500/50 transition-colors duration-300">
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-3">
                        <div className="flex-shrink-0">
                          <interest.icon className="w-6 h-6 text-purple-400" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-white mb-1">{interest.title}</h4>
                          <p className="text-sm text-gray-400">{interest.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}