"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Map, 
  UserPlus, 
  Camera, 
  Box, 
  LayoutGrid 
} from 'lucide-react'; // Using Lucide for the icons

const aboutData = [
  {
    title: "Our Mission",
    desc: "Skill Development: Equip students with expert technical knowledge and hands-on problem-solving skills. <br> Industry Synergy: Foster research, innovation, and strong collaborations to meet real-world industrial challenges.",
    icon: <Map className="w-8 h-8 text-black" />,
  },
  {
    title: "Our Vision",
    desc: "To be a global center of excellence that shapes competent engineers and promotes sustainable manufacturing technologies.",
    icon: <UserPlus className="w-8 h-8 text-black" />,
  },
  {
    title: "Our Values",
    desc: "Excellence & Integrity: High technical standards paired with ethical professional conduct. Innovation & Sustainability: Adopting modern, environmentally responsible engineering practices. Collaboration: Building strong partnerships between students, faculty, and industry leaders.",
    icon: <Camera className="w-8 h-8 text-black" />,
  },
  {
    title: "Our Community",
    desc: "Practical Learning: Hands-on technical workshops and real-time industrial site visits. Knowledge Sharing: Expert talks, seminars, and webinars featuring global industry leaders.",
    icon: <Box className="w-8 h-8 text-black" />,
  },
  {
    title: "Our Events",
    desc: "Hands-on workshops and sessions that turn ideas into real-world impact.",
    icon: <LayoutGrid className="w-8 h-8 text-black" />,
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 bg-transparent">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-5xl font-bold text-center text-white mb-16 tracking-tight">
          About IIW Student Chapter
        </h2>

        {/* Cards Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {aboutData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-[40px] p-8 flex flex-col items-center text-center shadow-xl hover:scale-105 transition-transform"
            >
              {/* Icon */}
              <div className="mb-6">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-black text-xl font-bold mb-4">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}