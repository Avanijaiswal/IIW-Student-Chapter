"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";

const categories = ["Faculty Corner", "Lead", "Technical", "Management"];

const teamData: any = {
  "Faculty Corner": [
    {
      name: "Prof. Ramesh Bhoraniya",
      role: "Head Of Department",
      linkedin: "https://www.linkedin.com/in/ramesh-bhoraniya-phd-0aa853142/",
      image: "/team/hod.jpg",
    },
    {
      name: "Dr. Gaurang Joshi",
      role: "Founder & Chairman",
      linkedin: "https://www.linkedin.com/in/dr-gaurang-rajendraprasad-joshi",
      image: "/team/cm.jpeg",
    },
    {
      name: "Prof. Mukhtar Sama",
      role: "Life Member & Ex-Chairman",
      linkedin: "https://www.linkedin.com/in/mukhtar-sama-3b5898a2/",
      image: "/team/lm1.jpg",
    },
    {
      name: "Prof. Vivek Pathak",
      role: "Life Member",
      linkedin: "https://www.linkedin.com/in/vivekjpathak",
      image: "/team/lm2.jpg",
    },
  ],
  Lead: [
    {
      name: "Akash Verma",
      role: "President",
      linkedin: "https://www.linkedin.com/in/akash-verma-b90537346/",
      image: "/team/lead1.jpg",
    },
    {
      name: "Thun Thingyan Oo",
      role: "Vice President",
      linkedin: "https://www.linkedin.com/in/thun-thingyan-oo-707397328",
      image: "/team/lead2.jpeg",
    },
  ],
  Technical: [
    {
      name: "Aditya Prajkash Yallamelli",
      role: "Technical",
      linkedin: "https://www.linkedin.com/in/adithya-prakash-yallamelli-59b621349",
      image: "/team/tech1.jpeg",
    },
    {
      name: "Akambareshwar Neela",
      role: "Technical",
      linkedin: "https://www.linkedin.com/in/akambareswar-neela-65a496383",
      image: "/team/tech2.jpeg",
    },
    {
      name: "Arsh Yadav",
      role: "Technical",
      linkedin: "https://www.linkedin.com/in/arsh-yadav-4682923a0",
      image: "/team/tech3.jpeg",
    },
  ],
  Management: [
    {
      name: "Kshitiz Sawarnn",
      role: "Treasurer",
      linkedin: "https://www.linkedin.com/in/kshitiz-sawarnn-a8a17419a",
      image: "/team/treasurer.jpeg",
    },
    {
      name: "Mohammad Shahid Mohammad Aybani",
      role: "Secretary",
      linkedin: "https://www.linkedin.com/in/mohammed-shahid-aybani-8014a3393",
      image: "/team/secretary.png",
    },
    {
      name: "Rao Vishal Singh",
      role: "Conveyor",
      linkedin: "https://www.linkedin.com/in/rao-vishal-singh-6636b4375",
      image: "/team/conv.jpeg",
    },
  ],
};

export default function TeamSection() {
  const [active, setActive] = useState("Faculty Corner");

  return (
<section id="team" className="scroll-mt-[84px] relative z-10 min-h-screen text-white py-32 overflow-hidden scroll-mt-28">      
      {/* Background Glow */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <div className="w-[600px] h-[600px] bg-purple-600 opacity-20 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto text-center px-4">

        {/* 1. SCROLL ANIMATION: Title */}
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-5xl font-bold mb-12"
        >
          Core Team
        </motion.h2>

        {/* 2. SCROLL ANIMATION: Category pills */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="flex justify-center gap-4 flex-wrap mb-16"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                active === cat
                  ? "bg-white text-black"
                  : "bg-white/10 hover:bg-white/20"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* 3. SCROLL ANIMATION: The cards container */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.5 }}
              className="flex flex-wrap justify-center gap-6"
            >
              {(teamData[active] || []).map((member: any, index: number) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="relative w-[300px] bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 transition"
                >
                  <div className="overflow-hidden rounded-2xl mb-6">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-[350px] object-cover transition duration-500 hover:scale-110"
                    />
                  </div>

                  <h3 className="text-xl font-semibold">
                    {member.name}
                  </h3>

                  <p className="text-gray-400 mb-4">
                    {member.role}
                  </p>

                  <div className="flex justify-center gap-6 text-xl">
                    <a 
                      href={member.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-blue-400 transition-colors duration-300"
                    >
                      <FaLinkedin className="cursor-pointer" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}