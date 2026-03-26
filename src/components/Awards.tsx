"use client";

import { motion } from "framer-motion";
import { Trophy, Medal, Star, CheckCircle } from "lucide-react";

const awards = [
  {
    title: "National Seminar",
    description: "Attended National Seminar on 'Deep Learning for Computer Vision' to explore advanced AI techniques.",
    date: "2021",
    icon: <Star className="w-6 h-6 text-yellow-400" />,
  },
  {
    title: "Gully Cricket State-Level Winner",
    description: "Secured first place in the State-Level Gully Cricket Competition at Techkaushalya 2020.",
    date: "2020",
    icon: <Trophy className="w-6 h-6 text-primary" />,
  },
  {
    title: "Inter-departmental Kabaddi",
    description: "Finished in 2nd Place at the Inter-departmental Kabaddi Competition during Sports Fest 2019.",
    date: "2019",
    icon: <Medal className="w-6 h-6 text-orange-400" />,
  },
  {
    title: "Advanced English - Grade 'A'",
    description: "Achieved the highest grade 'A' in the Advanced English Speaking Course at VIP Academy.",
    date: "2020",
    icon: <CheckCircle className="w-6 h-6 text-green-400" />,
  },
];

export default function Awards() {
  return (
    <section id="awards" className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Achievements & <span className="text-gradient">Awards</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: 80 }}
            viewport={{ once: true }}
            className="h-1.5 bg-primary mx-auto rounded-full"
          ></motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {awards.map((award, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass p-6 rounded-2xl flex flex-col items-center text-center hover:scale-105 transition-transform"
            >
              <div className="p-4 rounded-full bg-background mb-6 shadow-xl ring-1 ring-border">
                {award.icon}
              </div>
              <h3 className="text-lg font-bold mb-2">{award.title}</h3>
              <p className="text-muted-foreground text-sm line-clamp-3">
                {award.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
