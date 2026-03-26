"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen } from "lucide-react";

const education = [
  {
    degree: "Master of Science in Big Data Analytics",
    school: "St. Xavier's College, Ahmedabad",
    period: "2020 – 2022",
    grade: "7.1 / 10 GPA",
    icon: <BookOpen className="w-6 h-6 text-primary" />,
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    school: "St. Xavier's College, Ahmedabad",
    period: "2017 – 2020",
    grade: "6.7 / 10 GPA",
    icon: <GraduationCap className="w-6 h-6 text-primary" />,
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    school: "H.H. Patel High School, Ahmedabad",
    period: "2017",
    grade: "7.0 / 10 GPA",
    icon: <Award className="w-6 h-6 text-primary" />,
  },
  {
    degree: "Secondary School Certificate (SSC)",
    school: "H.H. Patel High School, Ahmedabad",
    period: "2015",
    grade: "6.3 / 10 GPA",
    icon: <Award className="w-6 h-6 text-primary" />,
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            About <span className="text-gradient">Me</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: 80 }}
            viewport={{ once: true }}
            className="h-1.5 bg-primary mx-auto rounded-full"
          ></motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6">Who is Nirav?</h3>
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                As a dedicated <span className="text-foreground font-medium">Python Developer</span>, I specialize in building scalable web applications and AI-powered solutions. I have strong expertise in backend development using <span className="text-foreground font-medium">FastAPI, Django, and Django REST Framework</span>.
              </p>
              <p>
                I am passionate about integrating AI and automation frameworks such as <span className="text-foreground font-medium">OpenClaw and CrewAI</span> to build automated workflows. My goal is to deliver high-quality, innovative software solutions while continuously learning emerging technologies.
              </p>
              <div className="pt-4 grid grid-cols-2 gap-4 text-sm font-medium">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span>AI & Automation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span>Backend Architect</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span>Cloud & DevOps</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span>Big Data Analytics</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6">Education Journey</h3>
            <div className="space-y-8 relative before:absolute before:inset-0 before:left-3 before:border-l before:border-border before:z-0">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative pl-10 z-10"
                >
                  <div className="absolute left-0 top-0 p-1.5 rounded-full bg-background border border-border shadow-sm">
                    {edu.icon}
                  </div>
                  <div className="p-6 glass rounded-2xl hover:border-primary/50 transition-colors">
                    <span className="text-primary text-sm font-bold block mb-1">{edu.period}</span>
                    <h4 className="text-xl font-bold mb-1">{edu.degree}</h4>
                    <p className="text-muted-foreground font-medium mb-3">{edu.school}</p>
                    <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
                      GPA: {edu.grade}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
