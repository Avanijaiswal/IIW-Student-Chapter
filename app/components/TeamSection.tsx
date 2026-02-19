"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";

const categories = ["Faculty Corner", "Lead", "Technical", "Management"];

const teamData: any = {
  "Faculty Corner": [
    {
      name: "Dr. Ramesh Bhoraniya",
      role: "Head Of Department",
      linkedin: "https://www.linkedin.com/in/dr-gaurang-rajendraprasad-joshi",
      image: "/team/cm.jpeg",
    },
    {
      name: "Dr. Gaurang Joshi",
      role: "Chairman",
      linkedin: "https://www.linkedin.com/in/dr-gaurang-rajendraprasad-joshi",
      image: "/team/cm.jpeg",
    },
    {
      name: "Mr. Mukhtar Sama",
      role: "Life Member & Ex-Chairman",
      linkedin: "https://www.linkedin.com/in/dr-gaurang-rajendraprasad-joshi",
      image: "/team/cm.jpeg",
    },
    {
      name: "Mr. Vivek Pathak",
      role: "Life Member",
      linkedin: "https://www.linkedin.com/in/dr-gaurang-rajendraprasad-joshi",
      image: "/team/cm.jpeg",
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
    <section id="team" className="relative z-10 min-h-screen text-white py-32 overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <div className="w-[600px] h-[600px] bg-purple-600 opacity-20 blur-[120px] rounded-full" />
      </div>

      {/* FIX 1: Changed 'max-w-6xl' to 'max-w-[1400px]' 
         This gives the container enough width to hold 4 cards 
      */}
      <div className="relative z-10 max-w-[1400px] mx-auto text-center px-4">

        <h2 className="text-5xl font-bold mb-12">Core Team</h2>

        {/* Category Pills */}
        <div className="flex justify-center gap-4 flex-wrap mb-16">
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
        </div>

        {/* Cards Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.5 }}
            /* FIX 2: Reduced gap from 'gap-10' to 'gap-6'.
               This saves space so the 4th card doesn't get pushed down.
            */
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

      </div>
    </section>
  );
}