"use client";

import { motion } from "framer-motion";
import { Code2, Globe, Database, Cpu, Layout, Server } from "lucide-react";

const skillCategories = [
  {
    title: "Backend Frameworks",
    icon: <Server className="w-8 h-8 text-blue-400" />,
    skills: ["Python", "FastAPI", "Django", "Django REST Framework", "Microservices"],
  },
  {
    title: "AI & Automation",
    icon: <Cpu className="w-8 h-8 text-green-400" />,
    skills: ["OpenClaw", "CrewAI", "Automated Workflows"],
  },
  {
    title: "Databases & Storage",
    icon: <Database className="w-8 h-8 text-orange-400" />,
    skills: ["PostgreSQL", "MongoDB", "MySQL", "Neo4j", "MinIO Object Storage"],
  },
  {
    title: "Cloud & DevOps",
    icon: <Globe className="w-8 h-8 text-red-400" />,
    skills: ["Docker", "AWS", "CI/CD Pipelines", "Pulumi (Python)", "Git / GitHub"],
  },
  {
    title: "Frontend & Security",
    icon: <Layout className="w-8 h-8 text-purple-400" />,
    skills: ["JavaScript", "jQuery", "Tailwind CSS", "JWT Authentication", "AJAX"],
  },
  {
    title: "Data Libraries",
    icon: <Code2 className="w-8 h-8 text-primary" />,
    skills: ["Pandas", "NumPy", "ReportLab (PDF)", "Pydantic", "SQLAlchemy"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Technical <span className="text-gradient">Skillset</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: 80 }}
            viewport={{ once: true }}
            className="h-1.5 bg-primary mx-auto rounded-full"
          ></motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass p-8 rounded-3xl group hover:border-primary/50 transition-all duration-300"
            >
              <div className="mb-6 block group-hover:scale-110 transition-transform duration-300">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-semibold border border-border group-hover:bg-primary/10 group-hover:border-primary/30 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
