"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, ShoppingBag, Zap, FileText, Database } from "lucide-react";

const projects = [
  {
    title: "AI-Assisted E-Commerce (OpenClaw E-Store)",
    category: "Full-Stack & AI",
    description: "Built a full-stack e-commerce app with an AI-assisted workflow to accelerate task automation. Integrated Stripe Checkout for payments and ReportLab for automated PDF invoice generation.",
    tags: ["Django", "OpenClaw AI", "Tailwind CSS", "Stripe API", "PostgreSQL"],
    icon: <ShoppingBag className="w-10 h-10 text-blue-400" />,
    link: "#",
    repo: "#",
  },
  {
    title: "Zoho Projects Automation Engine",
    category: "Automation Engineering",
    description: "Synchronized task data between Google Sheets and Zoho Projects using OAuth 2.0. Developed a custom duration parsing engine to eliminate manual data entry errors.",
    tags: ["FastAPI", "Zoho Projects API", "Google Sheets API", "Docker", "OAuth 2.0"],
    icon: <Zap className="w-10 h-10 text-yellow-400" />,
    link: "#",
    repo: "#",
  },
  {
    title: "FastAPI Blog CMS",
    category: "Backend Development",
    description: "High-performance Blog Content Management System with JWT authentication and secure CRUD operations. Uses Pydantic for validation and SQLAlchemy ORM.",
    tags: ["FastAPI", "JWT", "SQLAlchemy", "PostgreSQL", "Pydantic"],
    icon: <FileText className="w-10 h-10 text-purple-400" />,
    link: "#",
    repo: "#",
  },
  {
    title: "Production-Ready Expense Tracker API",
    category: "API Development",
    description: "Developed a backend API using FastAPI and MongoDB for personal financial tracking. Implemented secure JWT authentication and category-based expense tracking.",
    tags: ["FastAPI", "MongoDB", "JWT", "Asynchronous Architecture"],
    icon: <Database className="w-10 h-10 text-orange-400" />,
    link: "#",
    repo: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Featured <span className="text-gradient">Projects</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: 80 }}
            viewport={{ once: true }}
            className="h-1.5 bg-primary mx-auto rounded-full"
          ></motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group glass rounded-3xl overflow-hidden hover:border-primary/50 transition-all duration-500"
            >
              <div className="aspect-video bg-secondary/50 flex items-center justify-center relative overflow-hidden">
                <div className="group-hover:scale-110 transition-transform duration-500">
                  {project.icon}
                </div>
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <a href={project.link} className="p-3 rounded-full bg-background/80 hover:bg-primary hover:text-primary-foreground transition-all">
                    <ExternalLink className="w-5 h-5" />
                  </a>
                  <a href={project.repo} className="p-3 rounded-full bg-background/80 hover:bg-primary hover:text-primary-foreground transition-all">
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <div className="p-8">
                <span className="text-[10px] uppercase font-bold tracking-widest text-primary mb-2 block">
                  {project.category}
                </span>
                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-6 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2 py-0.5 rounded-md bg-secondary text-secondary-foreground text-[10px] font-bold border border-border">
                      {tag}
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
