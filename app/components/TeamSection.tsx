"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";

const categories = ["Chairman", "Lead", "Secretary", "Treasurer", "Technical"];

// FIX: Ensure every value here is an Array [ ... ], even if it has only one person.
const teamData: any = {
  Chairman: [
    {
      name: "Dr. Gaurang Rajendraprasad Joshi",
      role: "Chairman",
      image: "/team/cm.jpg",
    },
  ],
  Lead: [
    {
      name: "Akash Verma",
      role: "President",
      image: "/team/lead1.jpg",
    },
    {
      name: "Thun Thingyan Oo",
      role: "Vice President",
      image: "/team/lead2.jpg",
    },
  ],
  Secretary: [
    {
      name: "Khushal Joshi",
      role: "Secretary",
      image: "/team/secretary.jpg",
    },
  ],
  Treasurer: [
    {
      name: "Kshitiz Sawarnn",
      role: "Treasurer",
      image: "/team/treasurer.jpg",
    },
  ],
  Technical: [
    {
      name: "Aditya Prajkash Yallamelli",
      role: "Technical",
      image: "/team/tech1.jpg",
    },
    {
      name: "Akambareshwar Neela",
      role: "Technical",
      image: "/team/tech2.jpg",
    },
    {
      name: "Arsh Yadav",
      role: "Technical", 
      image: "/team/tech3.jpg",
    },
  ],
};

export default function TeamSection() {
  const [active, setActive] = useState("Lead");

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
                  <FaLinkedin className="cursor-pointer hover:text-blue-400 transition" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}