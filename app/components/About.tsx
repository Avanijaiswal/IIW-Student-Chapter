"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Map, 
  UserPlus, 
  Camera, 
  Box, 
  LayoutGrid 
} from 'lucide-react';

const aboutData = [
  {
    title: "Our Mission",
    desc: "Skill Development: Equip students with expert technical knowledge and hands-on problem-solving skills. <br><br> Industry Synergy: Foster research, innovation, and strong collaborations to meet real-world industrial challenges.",
    icon: <Map className="w-8 h-8 text-black" />,
  },
  {
    title: "Our Vision",
    desc: "To be a global center of excellence that shapes competent engineers and promotes sustainable manufacturing technologies.",
    icon: <UserPlus className="w-8 h-8 text-black" />,
  },
  {
    title: "Our Values",
    desc: "Excellence & Integrity: High technical standards paired with ethical professional conduct. <br><br> Innovation & Sustainability: Adopting modern, environmentally responsible engineering practices.",
    icon: <Camera className="w-8 h-8 text-black" />,
  },
  {
    title: "Our Community",
    desc: "Practical Learning: Hands-on technical workshops and real-time industrial site visits. <br><br> Knowledge Sharing: Expert talks, seminars, and webinars featuring global industry leaders.",
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
    <section id="about" className="scroll-mt-[84px] py-24 px-6 bg-transparent">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Title */}
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center text-white mb-4 tracking-tight"
        >
          About MU-IIW Student Chapter
        </motion.h2>

        {/* Client Requested Line */}
        <motion.p 
  initial={{ opacity: 0, y: 10 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, delay: 0.2 }}
  className="mt-3 text-sm md:text-base text-center text-gray-400 font-medium tracking-wide mb-14"
>
  MU-IIW Student Chapter, Department of Mechanical Engineering, Marwadi University
</motion.p>

        {/* Cards Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {aboutData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-[32px] p-8 flex flex-col items-center text-center shadow-2xl hover:scale-105 transition-all duration-300"
            >
              {/* Icon Container */}
              <div className="mb-6 p-4 bg-gray-50 rounded-2xl">
                {item.icon}
              </div>

              {/* Card Title */}
              <h3 className="text-black text-xl font-bold mb-4">
                {item.title}
              </h3>

              {/* Card Description (Using dangerouslySetInnerHTML to render <br> tags) */}
              <p 
                className="text-gray-600 text-sm leading-relaxed"
                dangerouslySetInnerHTML={{ __html: item.desc }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}