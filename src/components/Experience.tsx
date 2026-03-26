"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    role: "Python Developer",
    company: "Creole Studios Pvt Ltd.",
    period: "May 2024 – Present",
    location: "Ahmedabad, India",
    description: "Developing AI-powered automation workflows using OpenClaw and CrewAI. Designing high-performance APIs using FastAPI and maintaining backend systems using Django REST Framework.",
    technologies: ["Python", "FastAPI", "Django", "OpenClaw", "CrewAI", "Docker", "AWS", "CI/CD"],
  },
  {
    role: "Junior Python Developer",
    company: "Intellial Solutions Pvt Ltd.",
    period: "May 2022 – May 2024",
    location: "Ahmedabad, India",
    description: "Developed backend applications using Django and DRF. Designed RESTful APIs and optimized data management with PostgreSQL and MongoDB.",
    technologies: ["Python", "Django", "DRF", "PostgreSQL", "MongoDB", "JWT", "Git"],
  },
  {
    role: "Junior Python Developer Intern",
    company: "Intellial Solutions Pvt Ltd.",
    period: "Feb 2022 – May 2022",
    location: "Ahmedabad, India",
    description: "Assisted in developing backend modules and supported database integration. Focused on debugging and performance optimization.",
    technologies: ["Python", "Django", "PostgreSQL", "Version Control"],
  },
  {
    role: "Python Developer Intern",
    company: "Clickaway IT Solution Pvt Ltd.",
    period: "April 2020 – July 2020",
    location: "Ahmedabad, India",
    description: "Developed web-based applications using Python and Django. Managed backend logic and database operations using SQLite.",
    technologies: ["Python", "Django", "SQLite", "Backend Logic"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-secondary/30 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Work <span className="text-gradient">Experience</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: 80 }}
            viewport={{ once: true }}
            className="h-1.5 bg-primary mx-auto rounded-full"
          ></motion.div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2 hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`relative flex flex-col md:flex-row items-center ${
                  idx % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Dot */}
                <div className="absolute left-0 md:left-1/2 top-10 w-4 h-4 rounded-full bg-primary -translate-x-1/2 z-10 border-4 border-background hidden md:block"></div>

                {/* Content */}
                <div className={`w-full md:w-1/2 ${idx % 2 === 0 ? "md:pl-12" : "md:pr-12"}`}>
                  <div className="glass p-8 rounded-3xl hover:border-primary/50 transition-all group">
                    <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                      <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{exp.role}</h3>
                      <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] uppercase font-black">
                        {exp.period}
                      </span>
                    </div>
                    
                    <div className="flex flex-col space-y-2 mb-6">
                      <div className="flex items-center text-muted-foreground text-sm">
                        <Briefcase className="w-4 h-4 mr-2" />
                        {exp.company}
                      </div>
                      <div className="flex items-center text-muted-foreground text-sm">
                        <MapPin className="w-4 h-4 mr-2" />
                        {exp.location}
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span key={tech} className="text-[11px] font-bold text-muted-foreground">
                          #{tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
