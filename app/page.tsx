"use client";
import React, { useEffect, useRef } from "react";
import TeamSection from "./components/TeamSection";
import CursorGlow from "./components/CursorGlow";
import { motion, useScroll, useTransform } from "framer-motion";
import { Target, Eye, ShieldCheck, Users, Calendar } from 'lucide-react';

export default function Home() {
  const { scrollY } = useScroll();
  const interactiveRef = useRef<HTMLDivElement>(null);

  // --- BACKGROUND ANIMATION LOGIC ---
  useEffect(() => {
  const handleMouseMove = (event: MouseEvent) => {
    const { clientX, clientY } = event;

    
    document.documentElement.style.setProperty(
  "--mouse-x",
  `${clientX}px`
);
document.documentElement.style.setProperty(
  "--mouse-y",
  `${clientY}px`
);


    if (!interactiveRef.current) return;

    interactiveRef.current.animate(
      {
        left: `${clientX}px`,
        top: `${clientY}px`
      },
      { duration: 3000, fill: "forwards" }
    );
  };

  window.addEventListener("mousemove", handleMouseMove);
  return () => window.removeEventListener("mousemove", handleMouseMove);
}, []);


  return (
    // MAIN CONTAINER: No bg-black here!
<div className="relative min-h-screen w-full text-white overflow-hidden">

      {/* ================= YOUR CONTENT (Z-10 to sit on top) ================= */}
      <div className="relative z-10">
        <CursorGlow />

        {/* NAVBAR - Glass Effect */}
        
            {/* REVRAGE STYLE NAVBAR */}
      
        
{/* HERO */}
{/* HERO - Background set to transparent to show global background */}
<section className="relative min-h-screen flex items-center overflow-hidden px-16 bg-transparent">

  {/* 1. REMOVED the deep red/black radial gradient div that was blocking the view */}

  {/* 2. Subtle grid overlay - optional, kept low opacity so it doesn't block background */}
  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,0,0,0.02)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

  <div className="relative z-10 w-full">
    {/* Mouse Follow Glow Effect */}
    <div
      className="pointer-events-none absolute w-[600px] h-[600px] rounded-full blur-[150px] opacity-20"
      style={{
        background: "radial-gradient(circle at center, rgba(255,0,0,0.4) 0%, transparent 70%)",
        left: "var(--mouse-x)",
        top: "var(--mouse-y)",
        transform: "translate(-50%, -50%)",
      }}
    />

    <h1 className="font-[var(--font-antonio)] uppercase leading-[0.8] select-none">
      <span
        className="block text-[120px] md:text-[200px] lg:text-[250px] font-extrabold tracking-[-0.04em] text-transparent bg-gradient-to-r from-[#f2f2f2] via-[#ff5a5a] to-[#ff0000] bg-clip-text transition-all duration-300 hover:drop-shadow-[0_0_50px_rgba(255,0,0,0.6)]"
        style={{ transform: "scaleY(0.85)" }}
      >
        LIMITLESS
      </span>

      <span
        className="block text-[120px] md:text-[200px] lg:text-[250px] font-extrabold tracking-[-0.04em] text-transparent bg-gradient-to-r from-[#f2f2f2] via-[#ff5a5a] to-[#ff0000] bg-clip-text transition-all duration-300 hover:drop-shadow-[0_0_60px_rgba(255,0,0,0.7)]"
        style={{ transform: "scaleY(0.85)" }}
      >
        ENGINEER
      </span>
    </h1>

  </div>
</section>



        {/* ABOUT - Glass Effect */}
      {/* NEW ABOUT SECTION - White Card Style */}
        <section id="about" className="py-24 px-6 bg-transparent">
          <div className="max-w-7.2xl mx-auto">
            {/* Title */}
            <h2 className="text-5xl font-bold text-center text-white mb-16 tracking-tight">
              About IIW Student Chapter
            </h2>

            {/* Cards Container */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-9">
              {[
                {
                  title: "Our Mission",
                  desc: "Empowering students with technical mastery, innovation, and industry-ready skills.",
                  icon: <Target className="w-9 h-9 text-black" />, // Refined stroke icon                
                },
                {
                  title: "Our Vision",
                  desc: "To be a global center of excellence for sustainable engineering leadership.",
                  icon: <Eye className="w-9 h-9 text-black" />,
                },
                {
                  title: "Our Values",
                  desc: "Excellence, innovation, sustainability, collaboration, and professional integrity.",
                  icon: <ShieldCheck className="w-9 h-9 text-black" />,
                },
                {
                  title: "Our Community",
                  desc: "A vibrant group of dreamers and doers united by innovation, creativity, and teamwork.",
                  icon: <Users className="w-9 h-9 text-black" />,
                },
                {
                  title: "Our Events",
                  desc: "Hands-on workshops, hackathons, and sessions that turn ideas into real-world impact.",
                  icon: <Calendar className="w-9 h-9 text-black" />,
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-[40px] p-8 flex flex-col items-center text-center shadow-xl hover:scale-105 transition-transform"
                >
                  {/* Icon Placeholder - You can replace these with <img /> or Lucide icons */}
                  <div className="text-4xl mb-6 grayscale text-black">
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

        {/* EVENTS */}
        <section className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center">Upcoming Events</h2>
            <div className="grid md:grid-cols-3 gap-10 mt-12">
              <div className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 transition">
                <h3 className="text-xl font-semibold">Event 1</h3>
                <p className="mt-3 text-gray-400">Details.</p>
              </div>
              <div className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 transition">
                <h3 className="text-xl font-semibold">Event 2</h3>
                <p className="mt-3 text-gray-400">Details.</p>
              </div>
              <div className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 transition">
                <h3 className="text-xl font-semibold">Event 3</h3>
                <p className="mt-3 text-gray-400">Details.</p>
              </div>
            </div>
          </div>
        </section>

        {/* TEAM SECTION (Make sure TeamSection component doesn't have bg-black inside it!) */}
        <TeamSection />

        {/* FOOTER */}
        <footer className="text-gray-500 text-center py-8 border-t border-white/10 bg-black/40 backdrop-blur-md">
          <div className="py-12 border-t border-gray-50 text-center">
        <div className="flex justify-center gap-8 mb-8">
          {/* Instagram Link */}
      <a 
        href="https://www.instagram.com/muiiwstudentchapter?igsh=ZnVlbHJ5NzcxcDU5"
        target="_blank" 
        rel="noopener noreferrer"
      >
          <img src="https://cdn-icons-png.flaticon.com/512/174/174855.png" className="w-6 opacity-70 grayscale hover:grayscale-0 cursor-pointer" alt="Instagram" />
          </a>
          <a 
        href="https://www.linkedin.com/company/mu-iiw-student-chapter/" 
        target="_blank" 
        rel="noopener noreferrer"
      >
          <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" className="w-6 opacity-70 grayscale hover:grayscale-0 cursor-pointer" alt="LinkedIn" />
        </a>
        </div>
        </div>
        <p className="text-gray-400 font-medium">
          Made with ❤️ by <span className="text-[#4285F4]">Avani Jaiswal</span> | © 2026
        </p>
        </footer>
      </div>
    </div>
  );
}