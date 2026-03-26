"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Get In <span className="text-gradient">Touch</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: 80 }}
            viewport={{ once: true }}
            className="h-1.5 bg-primary mx-auto rounded-full"
          ></motion.div>
        </div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-muted-foreground mb-12 text-lg">
              I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>

            <div className="grid md:grid-cols-2 gap-6 text-left">
              <a href="mailto:niravrajput0008@gmail.com" className="flex items-center group glass p-4 rounded-2xl hover:border-primary/50 transition-all">
                <div className="p-3 rounded-full bg-primary/10 text-primary mr-4 group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-black uppercase text-muted-foreground">Email Me</p>
                  <p className="font-bold">niravrajput0008@gmail.com</p>
                </div>
              </a>

              <a href="tel:+917600944264" className="flex items-center group glass p-4 rounded-2xl hover:border-primary/50 transition-all">
                <div className="p-3 rounded-full bg-primary/10 text-primary mr-4 group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-black uppercase text-muted-foreground">Call Me</p>
                  <p className="font-bold">+91-7600944264</p>
                </div>
              </a>

              <div className="flex items-center group glass p-4 rounded-2xl">
                <div className="p-3 rounded-full bg-primary/10 text-primary mr-4">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-black uppercase text-muted-foreground">Location</p>
                  <p className="font-bold">Ahmedabad, Gujarat, India</p>
                </div>
              </div>

              <a href="https://linkedin.com/in/nirav-kadia" target="_blank" className="flex items-center group glass p-4 rounded-2xl hover:border-primary/50 transition-all">
                <div className="p-3 rounded-full bg-primary/10 text-primary mr-4 group-hover:scale-110 transition-transform">
                  <Linkedin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-black uppercase text-muted-foreground">LinkedIn</p>
                  <p className="font-bold">linkedin.com/in/nirav-kadia</p>
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
