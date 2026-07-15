"use client";

import { motion } from "framer-motion";
import { ArrowRight, Terminal, Code2, Database } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 -z-10 h-full w-full">
        <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(56,189,248,0.15)] opacity-50 blur-[80px]"></div>
        <div className="absolute bottom-0 left-0 right-auto top-auto h-[500px] w-[500px] -translate-y-[20%] translate-x-[20%] rounded-full bg-[rgba(168,85,247,0.15)] opacity-50 blur-[80px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-xs font-bold uppercase tracking-wider">Available for new opportunities</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            Hi, I'm <span className="text-gradient">Nirav Kadia</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            A dedicated <span className="text-foreground font-semibold">Python Developer</span> specializing in <span className="text-foreground font-semibold">Scalable Web Applications</span> and <span className="text-foreground font-semibold">AI-Powered Solutions</span>.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold flex items-center group transition-all hover:scale-105"
            >
              View My Work
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="px-8 py-4 rounded-full border border-border hover:bg-secondary transition-all font-semibold"
            >
              Get In Touch
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden md:block"
        >
          <div className="relative z-10 p-8 glass rounded-3xl border-border/50 animate-float">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="space-y-4 font-mono text-sm">
              <p className="text-blue-400">class <span className="text-purple-400">Developer</span>:</p>
              <div className="pl-4 space-y-2">
                <p className="text-blue-400">def <span className="text-yellow-400">__init__</span>(self):</p>
                <p className="pl-4"><span className="text-purple-400">self</span>.name = <span className="text-green-400">"Nirav Kadia"</span></p>
                <p className="pl-4"><span className="text-purple-400">self</span>.role = <span className="text-green-400">"Python Developer"</span></p>
                <p className="pl-4"><span className="text-purple-400">self</span>.frameworks = [<span className="text-green-400">"Django"</span>]</p>
                <p className="pl-4"><span className="text-purple-400">self</span>.focus = [<span className="text-green-400">"AI Automation"</span>]</p>
              </div>
            </div>
            <div className="mt-8 flex justify-around">
              <div className="flex flex-col items-center space-y-1">
                <Code2 className="w-8 h-8 text-primary" />
                <span className="text-[10px] uppercase font-bold text-muted-foreground">Frontend</span>
              </div>
              <div className="flex flex-col items-center space-y-1">
                <Terminal className="w-8 h-8 text-purple-400" />
                <span className="text-[10px] uppercase font-bold text-muted-foreground">Backend</span>
              </div>
              <div className="flex flex-col items-center space-y-1">
                <Database className="w-8 h-8 text-orange-400" />
                <span className="text-[10px] uppercase font-bold text-muted-foreground">Database</span>
              </div>
            </div>
          </div>
          {/* Decorative shapes */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/20 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl"></div>
        </motion.div>
      </div>
    </section>
  );
}
