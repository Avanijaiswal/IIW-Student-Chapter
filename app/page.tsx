"use client";
import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Target, Eye, ShieldCheck, Users, Calendar } from 'lucide-react';

// --- COMPONENT IMPORTS ---
import Navbar from "./components/Navbar"; 
import TeamSection from "./components/TeamSection";
import Contact from "./components/Contact"; 
import Events from "./components/Events"; 
import Footer from "./components/Footer";
import CursorGlow from "./components/CursorGlow";


export default function Home() {
  const { scrollY } = useScroll();
  const interactiveRef = useRef<HTMLDivElement>(null);

  // --- BACKGROUND ANIMATION LOGIC ---
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      document.documentElement.style.setProperty("--mouse-x", `${clientX}px`);
      document.documentElement.style.setProperty("--mouse-y", `${clientY}px`);

      if (!interactiveRef.current) return;
      interactiveRef.current.animate(
        { left: `${clientX}px`, top: `${clientY}px` },
        { duration: 3000, fill: "forwards" }
      );
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen w-full text-white overflow-hidden bg-[#0a0a0a]">
      <div className="relative z-10">
        <CursorGlow />
        
        {/* NAVBAR - Now properly included */}
        

        {/* 1. HERO SECTION */}
        {/* 1. HERO SECTION */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-12 bg-transparent">
          {/* Grid Background */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,0,0,0.02)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
          
          {/* CHANGED: We now use flex and justify-center to perfectly center the entire text block on the screen */}
          <div className="relative z-10 w-full flex justify-center">
            
            {/* This inner div groups the text and tagline so they align neatly with each other, but stay mathematically centered on the screen */}
            <div className="flex flex-col items-start">
              
              <motion.h1 
                initial={{ opacity: 0, x: -500 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ type: "spring", damping: 20, stiffness: 150 }}
                className="group uppercase leading-[0.85] md:leading-[0.85] select-none flex flex-col items-start cursor-default"
                style={{ fontFamily: "var(--font-syne), sans-serif" }}
              >
                
                {/* CHANGED: Swapped #000000 to #FF0000 for a sharp, pure red drop-shadow */}
                <span className="block text-[18vw] sm:text-[16vw] md:text-[14vw] xl:text-[165px] font-extrabold tracking-[-0.04em] text-transparent bg-gradient-to-r from-[#f2f2f2] via-[#ff5a5a] to-[#ff0000] bg-clip-text transition-all duration-300 group-hover:drop-shadow-[-6px_6px_0px_#FF0000]">
                  LIMITLESS
                </span>
                
                <span className="block text-[18vw] sm:text-[16vw] md:text-[14vw] xl:text-[165px] font-extrabold tracking-[-0.04em] text-transparent bg-gradient-to-r from-[#f2f2f2] via-[#ff5a5a] to-[#ff0000] bg-clip-text transition-all duration-300 group-hover:drop-shadow-[-6px_6px_0px_#FF0000]">
                  ENGINEER
                </span>

              </motion.h1>

              {/* TAGLINE */}
              <motion.p 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="mt-6 md:mt-8 text-xs sm:text-sm md:text-xl lg:text-2xl font-light tracking-[0.3em] uppercase text-white/80 select-none pl-3 md:pl-4 border-l-2 md:border-l-4 border-red-600"
              >
                Forging the Future, One Weld at a Time.
              </motion.p>
            </div>
          </div>
        </section>

        {/* 2. ABOUT SECTION */}
<section id="about" className="py-24 px-6 bg-transparent">
  <div className="max-w-7xl mx-auto text-center">

    {/* Section Title */}
    <h2 className="text-5xl font-bold mb-6 tracking-tight text-white">
      About MU-IIW Student Chapter
    </h2>

    {/* Client Requested Line */}
    <p className="text-sm md:text-base text-gray-400 font-medium tracking-wide max-w-4xl mx-auto mb-14">
      MU-IIW Student Chapter, Department of Mechanical Engineering, Marwadi University
    </p>

    {/* Cards Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-9">
      {[
        {
          title: "Our Mission",
          desc: "Empowering students with technical mastery and industry skills.",
          icon: <Target className="w-9 h-9 text-black" />
        },
        {
          title: "Our Vision",
          desc: "To be a global center of excellence for engineering leadership.",
          icon: <Eye className="w-9 h-9 text-black" />
        },
        {
          title: "Our Values",
          desc: "Excellence, innovation, sustainability, and integrity.",
          icon: <ShieldCheck className="w-9 h-9 text-black" />
        },
        {
          title: "Our Community",
          desc: "A vibrant group of dreamers and doers united by innovation.",
          icon: <Users className="w-9 h-9 text-black" />
        },
        {
          title: "Our Events",
          desc: "Workshops, Expert Talks and Industrial Visits that turn ideas into impact.",
          icon: <Calendar className="w-9 h-9 text-black" />
        },
      ].map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="bg-white rounded-[40px] p-8 flex flex-col items-center shadow-xl hover:scale-105 transition-transform duration-300"
        >
          <div className="mb-6 p-4 bg-gray-50 rounded-2xl">
            {item.icon}
          </div>

          <h3 className="text-black text-xl font-bold mb-4">
            {item.title}
          </h3>

          <p className="text-gray-600 text-sm leading-relaxed">
            {item.desc}
          </p>
        </motion.div>
      ))}
    </div>

  </div>
</section>


        {/* 3. EVENTS SECTION */}
        {/* Wrapped with ID so Navbar link works */}
        <section id="events" className="scroll-mt-28">
           <Events />
        </section>

        {/* 4. CORE TEAM SECTION */}
        {/* Ensure TeamSection.tsx has <section id="team"> inside it */}
        <TeamSection />

        {/* 5. CONTACT SECTION */}
        {/* Ensure Contact.tsx has <section id="contact"> inside it */}
        <Contact />

        {/* FOOTER */}
        <Footer />        

      </div>
    </div>
  );
}