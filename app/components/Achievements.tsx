"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";

// --- TYPESCRIPT DEFINITIONS ---
type AchievementItem = {
  title?: string;
  date?: string;
  image?: string;
  name?: string;
  role?: string;
  linkedin?: string;
  memberId?: string;
  guide?: string;     // <-- NEW: Added guide property
  students?: string;  // <-- NEW: Added students property
};

const categories = ["Awards", "Student Projects", "Student Internships", "Paper Publications", "Active Student Members"];

// 1. DATA OBJECT
const Achievement: Record<string, AchievementItem[]> = {
  "Awards": [
    {
      title: "Receiving Parimal Biswas Memorial Award for Academic year 2025",
      date: "January 2026",
      image: "/acheivements/achi.jpeg",
    },
  ],
  "Student Projects": [
    {
      title: "Friction Stir Welding Of AA6061-T651 on Traditional Milling Machine: Understanding Effect Of Processing Parameters",
      
      guide: "Dr. Gaurang Joshi, Prof. Vivek Pathak",
      students: "Utsav Dangi, Akash Verma, Khushal Joshi", 
    },
  ],
  "Student Internships": [
    {
      title: "Research Internship at IIT Gandhinagar",
      date: "MAY 2025 - JULY 2025",
      name: "Akash Verma, Khushal Joshi, Utsav Dangi", 
    },
    {
      title: "Weekend Industrial Internship PGSPL",
      date: "OCTOBER 2025 - APRIL 2025",
      name: "Akash Verma", 
    },
  ],
  "Paper Publications": [
    {
      title: "TITLE : Producing friction stir channel on AA6061-T651 aluminium alloy for establishing the role of tool tilt angle and tool traverse speed",
      date: "JANUARY 2026",
      image: "/acheivements/publications.jpeg",
    }
  ],
  // 2. ACTIVE MEMBERS ARRAY
  "Active Student Members": [
    { name: "Akash Verma", memberId: "BAR/ST/R-14729" },
    { name: "Mohammed Shahid Mohammed Aybani", memberId: "BAR/ST/R-15277" },
    { name: "Rao Vishal Singh", memberId: "BAR/ST/R-15296" },
    { name: "Mayank Gambhir", memberId: "BAR/ST/R-15290" },
    { name: "Aaryan Karibindi", memberId: "BAR/ST/R-15273" },
    { name: "Adithya Musale", memberId: "BAR/ST/R-15275" },
    { name: "Aditya Shah", memberId: "BAR/ST/R-15274" },
    { name: "Arabinda Kotal", memberId: "BAR/ST/R-15276" },
    { name: "Chandra Vikas Pindi", memberId: "BAR/ST/R-15278" },
    { name: "Dulam Sohan", memberId: "BAR/ST/R-15280" },
    { name: "Gowtham Sai", memberId: "BAR/ST/R-15279" },
    { name: "Gompa Chanikya Venkata", memberId: "BAR/ST/R-15281" },
    { name: "Happy Maheta", memberId: "BAR/ST/R-15305" },
    { name: "Ashish Jha", memberId: "BAR/ST/R-15285" },
    { name: "Karthik Sukine", memberId: "BAR/ST/R-15282" },
    { name: "Katakamsetti Rama Achuta", memberId: "BAR/ST/R-15283" },
    { name: "Koduru Venkata Sandeep", memberId: "BAR/ST/R-15284" },
    { name: "Kshitiz Swarnn", memberId: "BAR/ST/R-15286" },
    { name: "Nithin Loka", memberId: "BAR/ST/R-15287" },
    { name: "Lalam Harsha vardhan", memberId: "BAR/ST/R-15289" },
    { name: "Marito Mario", memberId: "BAR/ST/R-15288" },
    { name: "Neela Akambareshwar", memberId: "BAR/ST/R-15292" },
    { name: "Nilay Ghaghda", memberId: "BAR/ST/R-15294" },
    { name: "Meet Jadav", memberId: "BAR/ST/R-15291" },
    { name: "Noorul Islam", memberId: "BAR/ST/R-15293" },
    { name: "Rachit KagdaKarthik Sukine", memberId: "BAR/ST/R-15295" },
    { name: "Surya Sai Ganesh", memberId: "BAR/ST/R-15296" },
    { name: "Suvvari Akash", memberId: "BAR/ST/R-15298" },
    { name: "Tamma Deva Veera", memberId: "BAR/ST/R-15299" },
    { name: "Taraviya Nisharg", memberId: "BAR/ST/R-15300" },
    { name: "Uma Shankar Anati", memberId: "BAR/ST/R-15301" },
    { name: "Vardha Jaswant", memberId: "BAR/ST/R-15302" },
    { name: "Arsh Yadav", memberId: "BAR/ST/R-15304" },
    { name: "Yallameli Aditya", memberId: "BAR/ST/R-15303" },
    { name: "Thun Thingyan Oo ", memberId: "BAR/ST/R-14730" },
  ],
};

export default function Achievements() {
  const [active, setActive] = useState("Awards");

  return (
    <section id="achiev" className="relative z-10 min-h-screen text-white py-32 overflow-hidden scroll-mt-28">      
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <div className="w-[600px] h-[600px] bg-purple-600 opacity-20 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto text-center px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-5xl font-bold mb-12"
        >
          Achievements
          <div className="h-1 w-24 mx-auto bg-red-600 mt-4" />
        </motion.h2>

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
              {active === "Active Student Members" ? (
                
                // --- 3A. COMPACT GRID FOR ACTIVE MEMBERS ---
                <div className="w-full max-w-6xl grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-4">
                  {(Achievement[active] || []).map((student: AchievementItem, index: number) => (
                    <div 
                      key={index} 
                      className="relative flex flex-col items-center justify-center px-4 py-3 bg-gradient-to-br from-white/[0.05] to-transparent backdrop-blur-sm border border-white/10 rounded-lg hover:border-red-500/40 hover:shadow-[0_0_20px_rgba(239,68,68,0.15)] hover:-translate-y-1 transition-all duration-300 group overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-red-500/0 via-red-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                      <span className="relative z-10 text-sm font-medium text-gray-300 group-hover:text-white transition-colors text-center">
                        {student.name}
                      </span>
                      <span className="relative z-10 text-xs text-red-500/80 font-mono mt-1 text-center tracking-wider group-hover:text-red-400 transition-colors">
                        {student.memberId}
                      </span>
                    </div>
                  ))}
                </div>

              ) : (
                
                // --- 3B. LARGE CARDS FOR EVERYTHING ELSE ---
                (Achievement[active] || []).map((member: AchievementItem, index: number) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="relative w-[350px] min-h-[160px] bg-[#111111] border border-white/10 rounded-2xl overflow-hidden transition flex flex-col text-left"
                  >
                    {member.image && (
                      <div className="w-full h-[240px] overflow-hidden shrink-0">
                        <img
                          src={member.image}
                          alt={member.title || member.name}
                          className="w-full h-full object-cover transition duration-500 hover:scale-110"
                        />
                      </div>
                    )}

                    <div className="p-6 flex flex-col flex-grow justify-center">
                      
                      {/* --- UPDATED: DYNAMIC RED TOP TEXT --- */}
                      {/* If 'guide' exists, it prints "GUIDED BY- [Name]". Otherwise, it prints the date/role. */}
                      <p className="text-red-500 font-bold text-sm tracking-wide uppercase mb-3">
                        {member.guide ? `GUIDED BY- ${member.guide}` : (member.date || member.role)} 
                      </p>
                      
                      <h3 className="text-2xl font-bold text-white leading-tight">
                        {member.title || member.name}
                      </h3>

                      {/* --- INTERNSHIP RENDER BLOCK --- */}
                      {active === "Student Internships" && member.name && (
                        <div className="mt-5 pt-4 border-t border-white/10">
                          <p className="text-sm text-gray-400">
                            Intern(s): <span className="text-white font-medium tracking-wide">{member.name}</span>
                          </p>
                        </div>
                      )}

                      {/* --- NEW: STUDENT PROJECTS RENDER BLOCK --- */}
                      {active === "Student Projects" && member.students && (
                        <div className="mt-5 pt-4 border-t border-white/10">
                          <p className="text-sm text-gray-400">
                            Students: <span className="text-white font-medium tracking-wide">{member.students}</span>
                          </p>
                        </div>
                      )}

                    </div>
                  </motion.div>
                ))

              )}
            </motion.div>
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}