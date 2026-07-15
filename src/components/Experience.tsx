"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    role: "Python Developer",
    company: "Creole Studios Pvt Ltd.",
    period: "December 2025 – Present",
    location: "Ahmedabad, India",
    bullets: [
      "Built AI-powered automation workflows using OpenClaw and CrewAI to build intelligent agents and improve development efficiency.",
      "Designed and implemented high-performance backend APIs using FastAPI for scalable microservice-based architectures.",
      "Worked on e-commerce platform development, including shopping cart functionality and Stripe payment integration.",
      "Built and maintained backend systems using Python, Django, and Django REST Framework.",
      "Integrated Docker-based deployment workflows and CI/CD pipelines to improve reliability and deployment efficiency.",
    ],
    technologies: ["Python", "FastAPI", "Django", "Django REST Framework", "OpenClaw", "CrewAI", "Docker", "CI/CD", "Stripe", "Microservices"],
  },
  {
    role: "Python Developer",
    company: "Clickaway IT Solution Pvt Ltd.",
    period: "May 2025 – December 2025",
    location: "Ahmedabad, India",
    bullets: [
      "Implemented backend systems using Python and Django, along with PostgreSQL, focusing on clean code, reusable components, and optimized database queries.",
      "Developed a Python-based application for college students, applying modular programming and problem-solving to deliver real-world solutions.",
      "Managed and supported a production-level Django project, ensuring performance, reliability, and smooth backend operations.",
      "Designed and built a Django web application, following MVC architecture and best practices for scalable and maintainable development.",
    ],
    technologies: ["Python", "Django", "PostgreSQL", "MVC Architecture", "Database Optimization", "Clean Code"],
  },
  {
    role: "Junior Python Developer",
    company: "Intellial Solutions Pvt Ltd.",
    period: "May 2022 – March 2025",
    location: "Ahmedabad, India",
    bullets: [
      "Developed scalable backend systems using Python, Django, and Django REST Framework.",
      "Designed and implemented RESTful APIs for web applications and third-party integrations.",
      "Managed application data using PostgreSQL and MongoDB while improving query efficiency.",
      "Implemented secure authentication systems using JWT tokens for user management.",
    ],
    technologies: ["Python", "Django", "Django REST Framework", "PostgreSQL", "MongoDB", "JWT", "REST APIs", "Integrations"],
  },
  {
    role: "Junior Python Developer Intern",
    company: "Intellial Solutions Pvt Ltd.",
    period: "Feb 2022 – May 2022",
    location: "Ahmedabad, India",
    bullets: [
      "Assisted in developing backend modules using Python and Django.",
      "Supported API development and database integration for web applications.",
      "Participated in debugging, testing, and performance optimization of application features.",
    ],
    technologies: ["Python", "Django", "API Development", "Database Integration", "Debugging", "Testing", "Performance Optimization"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-secondary/30 relative">
      <div className="max-w-4xl mx-auto px-6">
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

        <div className="relative border-l border-border/70 ml-4 md:ml-8 pl-8 md:pl-12 space-y-12">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative"
            >
              {/* Timeline dot with icon */}
              <span className="absolute -left-[45px] md:-left-[61px] top-2 flex h-8 w-8 items-center justify-center rounded-full bg-background border-2 border-primary shadow-md z-10">
                <Briefcase className="w-3.5 h-3.5 text-primary" />
              </span>

              <div className="glass p-6 md:p-8 rounded-3xl hover:border-primary/50 transition-all duration-300 group">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 border-b border-border/50 pb-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold group-hover:text-primary transition-colors">
                      {exp.role}
                    </h3>
                    <div className="text-muted-foreground font-semibold mt-1">
                      {exp.company}
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs font-semibold text-muted-foreground md:text-right">
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary font-bold tracking-wide">
                      <Calendar className="w-3.5 h-3.5 mr-1.5" />
                      {exp.period}
                    </span>
                    <span className="inline-flex items-center">
                      <MapPin className="w-3.5 h-3.5 mr-1.5" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Bullet Points */}
                <ul className="space-y-3.5 mb-8">
                  {exp.bullets.map((bullet, bulletIdx) => (
                    <li key={bulletIdx} className="flex items-start text-muted-foreground leading-relaxed text-sm md:text-base">
                      {/* Custom accent color bullet dot */}
                      <span className="mr-3 mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/80"></span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 pt-2 border-t border-border/30">
                  {exp.technologies.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground text-[10px] md:text-xs font-bold border border-border/80 group-hover:bg-primary/5 group-hover:border-primary/20 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
