import { motion } from "motion/react";
import { Mail, MapPin, Github, Linkedin, ExternalLink, Send, MessageCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

export default function ContactSection() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "tharunmopada@gmail.com",
      href: "mailto:tharunmopada@gmail.com",
      color: "text-red-400",
      bgColor: "bg-red-600/20"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Andhra Pradesh, India",
      color: "text-green-400",
      bgColor: "bg-green-600/20"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/TharunMopada",
      href: "https://github.com/TharunMopada",
      color: "from-gray-400 to-gray-600",
      bgColor: "bg-gray-600/20",
      borderColor: "border-gray-500/30"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/tharun-mopada",
      href: "https://linkedin.com/in/tharun-mopada",
      color: "from-blue-400 to-blue-600",
      bgColor: "bg-blue-600/20",
      borderColor: "border-blue-500/30"
    }
  ];

  const liveProjects = [
    {
      name: "DocGenie",
      url: "https://doc-genie-hazel.vercel.app",
      description: "Smart PDF Analysis & Chat"
    },
    {
      name: "Langie",
      url: "https://langie.vercel.app",
      description: "AI Workflow Orchestrator"
    },
    {
      name: "FitBuddy",
      url: "https://fit-buddy-six.vercel.app",
      description: "AI-Powered Fitness Tracker"
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
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Open to exciting opportunities, collaborations, and conversations about technology, AI, and innovation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-cyan-600/20 rounded-xl">
                <MessageCircle className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">Get in Touch</h3>
            </div>

            {contactInfo.map((contact, index) => (
              <motion.div
                key={contact.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="bg-slate-900/50 border-slate-700 hover:border-cyan-500/50 transition-all duration-300">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${contact.bgColor}`}>
                        <contact.icon className={`w-5 h-5 ${contact.color}`} />
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">{contact.label}</p>
                        {contact.href ? (
                          <a
                            href={contact.href}
                            className="text-white hover:text-cyan-400 transition-colors"
                          >
                            {contact.value}
                          </a>
                        ) : (
                          <p className="text-white">{contact.value}</p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}

            {/* Social Links */}
            <div className="space-y-4 pt-4">
              <h4 className="font-semibold text-white">Social Profiles</h4>
              {socialLinks.map((social, index) => (
                <motion.div
                  key={social.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5 }}
                >
                  <Card className={`bg-slate-900/50 ${social.borderColor} border hover:shadow-lg transition-all duration-300 cursor-pointer`}
                    onClick={() => window.open(social.href, '_blank')}>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className={`p-2 rounded-lg ${social.bgColor}`}>
                            <social.icon className={`w-5 h-5 bg-gradient-to-r ${social.color} bg-clip-text text-transparent`} />
                          </div>
                          <div>
                            <p className="font-medium text-white">{social.label}</p>
                            <p className="text-sm text-gray-400">{social.value}</p>
                          </div>
                        </div>
                        <ExternalLink className="w-4 h-4 text-gray-400" />
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Live Projects */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-blue-600/20 rounded-xl">
                <ExternalLink className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">Live Projects</h3>
            </div>

            {liveProjects.map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -3 }}
              >
                <Card className="bg-slate-900/50 border-slate-700 hover:border-blue-500/50 transition-all duration-300 cursor-pointer"
                  onClick={() => window.open(project.url, '_blank')}>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold text-white mb-1">{project.name}</h4>
                        <p className="text-sm text-gray-400">{project.description}</p>
                      </div>
                      <ExternalLink className="w-4 h-4 text-blue-400" />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Card className="bg-gradient-to-br from-cyan-600/10 to-blue-600/10 border-cyan-500/30 border-2">
              <CardHeader>
                <CardTitle className="text-2xl bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Ready to Collaborate?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-gray-300">
                  I'm always interested in discussing new opportunities, innovative projects, 
                  and ways to leverage technology for meaningful impact.
                </p>

                <div className="space-y-3">
                  <Badge variant="secondary" className="bg-green-600/20 text-green-300 border-green-500/30">
                    🟢 Available for work
                  </Badge>
                  <Badge variant="secondary" className="bg-blue-600/20 text-blue-300 border-blue-500/30">
                    💼 Open to collaborations
                  </Badge>
                  <Badge variant="secondary" className="bg-purple-600/20 text-purple-300 border-purple-500/30">
                    🚀 Excited about AI projects
                  </Badge>
                </div>

                <div className="space-y-3 pt-4">
                  <Button
                    className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white"
                    onClick={() => window.open('mailto:tharunmopada@gmail.com?subject=Let\'s Connect&body=Hi Tharun, I\'d like to discuss...', '_blank')}
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send Email
                  </Button>
                  
                  <Button
                    variant="outline"
                    className="w-full bg-blue-600/20 border-blue-500/50 text-blue-200 hover:bg-blue-600/30"
                    onClick={() => window.open('https://linkedin.com/in/tharun-mopada', '_blank')}
                  >
                    <Linkedin className="w-4 h-4 mr-2" />
                    Connect on LinkedIn
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Quote */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-slate-900/30 rounded-xl border border-slate-700"
            >
              <blockquote className="text-gray-300 italic mb-2">
                "Technology is best when it brings people together and solves real problems."
              </blockquote>
              <p className="text-cyan-400 text-sm">- My Development Philosophy</p>
            </motion.div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-slate-700 text-center"
        >
          <p className="text-gray-400">
            Built with ❤️ using React, TypeScript, and TailwindCSS
          </p>
          <p className="text-gray-500 text-sm mt-2">
            © 2025 Tharun Mopada. All rights reserved.
          </p>
        </motion.div>
      </div>
    </section>
  );
}