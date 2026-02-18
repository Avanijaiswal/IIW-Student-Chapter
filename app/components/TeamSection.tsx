"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";

const categories = ["Chairman", "Lead", "Technical", "Management"];

const teamData: any = {
  Chairman: [
    {
      name: "Dr. Gaurang Joshi",
      role: "Chairman",
      linkedin: "https://www.linkedin.com/in/dr-gaurang-rajendraprasad-joshi?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
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
      linkedin: "https://www.linkedin.com/in/thun-thingyan-oo-707397328?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      image: "/team/lead2.jpeg",
    },
  ],
  Technical: [
    {
      name: "Aditya Prajkash Yallamelli",
      role: "Technical",
      linkedin: "https://www.linkedin.com/in/adithya-prakash-yallamelli-59b621349?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      image: "/team/tech1.jpeg",
    },
    {
      name: "Akambareshwar Neela",
      role: "Technical",
      linkedin: "https://www.linkedin.com/in/akambareswar-neela-65a496383?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      image: "/team/tech2.jpeg",
    },
    {
      name: "Arsh Yadav",
      role: "Technical", 
      linkedin: "https://www.linkedin.com/in/arsh-yadav-4682923a0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      image: "/team/tech3.jpeg",
    },
  ],
  Management: [
    {
      name: "Kshitiz Sawarnn",
      role: "Treasurer",
      linkedin: "https://www.linkedin.com/in/kshitiz-sawarnn-a8a17419a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      image: "/team/treasurer.jpeg",
    },
    {
      name: "Mohammad Shahid Mohammad Aybani",
      role: "Secretary",
      linkedin: "https://www.linkedin.com/in/mohammed-shahid-aybani-8014a3393?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      image: "/team/secretary.png"
    },
    {
      name: "Rao Vishal Singh",
      role: "Conveyor",
      linkedin: "https://www.linkedin.com/in/rao-vishal-singh-6636b4375?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      image: "/team/conv.jpeg"
    }
  ]
};

export default function TeamSection() {
  const [active, setActive] = useState("Chairman");

  return (
    <section id="team" className="relative min-h-screen text-white py-32 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <div className="w-[600px] h-[600px] bg-purple-600 opacity-20 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">

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
        {/* Cards Grid - Changed to Flexbox for auto-centering */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.5 }}
            // CHANGE HERE: Used 'flex' instead of 'grid'
            className="flex flex-wrap justify-center gap-10"
          >
            {teamData[active].map((member: any, index: number) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                // Kept width fixed so they don't stretch weirdly
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
  {/* Wrap the icon in an anchor tag so it becomes a clickable link */}
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