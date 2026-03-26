"use client";

import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 border-t border-border mt-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold tracking-tighter mb-2">
              <span className="text-gradient">NK.</span>
            </h2>
            <p className="text-muted-foreground text-sm max-w-xs">
              Building the future of web-based solutions and AI automation.
            </p>
          </div>

          <div className="flex items-center space-x-6">
            <a href="https://linkedin.com/in/nirav-kadia" target="_blank" className="p-3 rounded-full glass hover:text-primary transition-all">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:niravrajput0008@gmail.com" className="p-3 rounded-full glass hover:text-primary transition-all">
              <Mail className="w-5 h-5" />
            </a>
            <a href="#" className="p-3 rounded-full glass hover:text-primary transition-all">
              <Github className="w-5 h-5" />
            </a>
          </div>

          <button 
            onClick={scrollToTop}
            className="p-4 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all group shadow-inner"
          >
            <ArrowUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        <div className="mt-12 pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between text-xs font-medium text-muted-foreground">
          <p>© {currentYear} Nirav Kadia. All rights reserved.</p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
