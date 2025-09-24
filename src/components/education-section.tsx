import { motion } from "motion/react";
import { GraduationCap, Award, Calendar, MapPin, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

export default function EducationSection() {
  const education = {
    degree: "B.Tech in Computer Science",
    university: "Lovely Professional University",
    duration: "08/2021 – 05/2025",
    location: "Phagwara, Punjab",
    status: "Computer Science Graduate"
  };

  const certifications = [
    {
      title: "SQL Advanced",
      issuer: "HackerRank",
      date: "2025",
      type: "Advanced",
      color: "from-blue-400 to-cyan-500",
      bgColor: "bg-blue-600/20"
    },
    {
      title: "Java Programming",
      issuer: "HackerRank",
      date: "02/2024",
      type: "Programming",
      color: "from-orange-400 to-red-500",
      bgColor: "bg-orange-600/20"
    },
    {
      title: "HTML, CSS, JavaScript",
      issuer: "freeCodeCamp",
      date: "2024",
      type: "Web Development",
      color: "from-green-400 to-blue-500",
      bgColor: "bg-green-600/20"
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
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent mb-4">
            Education & Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-indigo-600/20 rounded-xl">
                <GraduationCap className="w-8 h-8 text-indigo-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">Education</h3>
            </div>

            <Card className="bg-slate-800/50 border-indigo-500/30 border-2 hover:shadow-2xl hover:shadow-indigo-500/20 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  {education.degree}
                </CardTitle>
                <p className="text-indigo-300 font-medium">{education.university}</p>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2 text-gray-400">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{education.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{education.location}</span>
                  </div>
                </div>

                <Badge 
                  variant="secondary" 
                  className="bg-indigo-600/20 text-indigo-300 border-indigo-500/30"
                >
                  {education.status}
                </Badge>

                <div className="pt-4 border-t border-slate-700">
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Comprehensive curriculum covering software engineering, data structures, 
                    algorithms, database systems, machine learning, and modern web technologies. 
                    Developed strong foundation in computer science principles and practical application development.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-purple-600/20 rounded-xl">
                <Award className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">Certifications</h3>
            </div>

            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5 }}
                >
                  <Card className="bg-slate-800/50 border-slate-700 hover:border-purple-500/50 transition-all duration-300">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className={`p-2 rounded-lg ${cert.bgColor}`}>
                            <Award className={`w-5 h-5 bg-gradient-to-r ${cert.color} bg-clip-text text-transparent`} />
                          </div>
                          <div>
                            <h4 className="font-semibold text-white">{cert.title}</h4>
                            <p className="text-sm text-gray-400">{cert.issuer}</p>
                          </div>
                        </div>
                        
                        <div className="text-right">
                          <Badge 
                            variant="outline" 
                            className="bg-slate-700/50 border-slate-600 text-gray-300 mb-1"
                          >
                            {cert.type}
                          </Badge>
                          <p className="text-xs text-gray-400">{cert.date}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Achievement Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
              className="mt-8 p-6 bg-gradient-to-r from-purple-600/10 to-indigo-600/10 rounded-xl border border-purple-500/20"
            >
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-purple-400">4</div>
                  <div className="text-sm text-gray-400">Years of Study</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-indigo-400">3</div>
                  <div className="text-sm text-gray-400">Certifications</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Additional Learning */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Card className="bg-slate-800/30 border-slate-700">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold text-white mb-4">Continuous Learning</h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Always eager to learn new technologies and expand my skillset. Currently exploring 
                advanced AI/ML concepts, cloud technologies, and modern development practices.
              </p>
              <div className="flex justify-center gap-4">
                <Button
                  variant="outline"
                  className="bg-blue-600/20 border-blue-500/50 text-blue-200 hover:bg-blue-600/30"
                  onClick={() => window.open('https://linkedin.com/in/tharun-mopada', '_blank')}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View LinkedIn Profile
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}