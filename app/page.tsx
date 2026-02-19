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
        <Navbar />

        {/* 1. HERO SECTION */}
        <section className="relative min-h-screen flex items-center overflow-hidden px-16 bg-transparent">
          {/* Grid Background */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,0,0,0.02)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
          
          <div className="relative z-10 w-full">
            <h1 className="font-[var(--font-antonio)] uppercase leading-[0.8] select-none">
              <span className="block text-[120px] md:text-[200px] lg:text-[250px] font-extrabold tracking-[-0.04em] text-transparent bg-gradient-to-r from-[#f2f2f2] via-[#ff5a5a] to-[#ff0000] bg-clip-text transition-all duration-300 hover:drop-shadow-[0_0_50px_rgba(255,0,0,0.6)]"
                style={{ transform: "scaleY(0.85)" }}>
                LIMITLESS
              </span>
              <span className="block text-[120px] md:text-[200px] lg:text-[250px] font-extrabold tracking-[-0.04em] text-transparent bg-gradient-to-r from-[#f2f2f2] via-[#ff5a5a] to-[#ff0000] bg-clip-text transition-all duration-300 hover:drop-shadow-[0_0_60px_rgba(255,0,0,0.7)]"
                style={{ transform: "scaleY(0.85)" }}>
                ENGINEER
              </span>
            </h1>

            {/* TAGLINE */}
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="mt-8 text-xl md:text-3xl font-light tracking-[0.3em] uppercase text-white/80 select-none pl-4 border-l-4 border-red-600"
            >
              Forging the Future, One Weld at a Time.
            </motion.p>
          </div>
        </section>

        {/* 2. ABOUT SECTION */}
        <section id="about" className="py-24 px-6 bg-transparent">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-5xl font-bold mb-16 tracking-tight">About MU-IIW Student Chapter</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-9">
              {[
                { title: "Our Mission", desc: "Empowering students with technical mastery and industry skills.", icon: <Target className="w-9 h-9 text-black" /> },
                { title: "Our Vision", desc: "To be a global center of excellence for engineering leadership.", icon: <Eye className="w-9 h-9 text-black" /> },
                { title: "Our Values", desc: "Excellence, innovation, sustainability, and integrity.", icon: <ShieldCheck className="w-9 h-9 text-black" /> },
                { title: "Our Community", desc: "A vibrant group of dreamers and doers united by innovation.", icon: <Users className="w-9 h-9 text-black" /> },
                { title: "Our Events", desc: "Workshops, Expert Talks and Industrial Visits that turn ideas into impact.", icon: <Calendar className="w-9 h-9 text-black" /> },
              ].map((item, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-[40px] p-8 flex flex-col items-center shadow-xl hover:scale-105 transition-transform">
                  <div className="text-4xl mb-6 text-black">{item.icon}</div>
                  <h3 className="text-black text-xl font-bold mb-4">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. EVENTS SECTION */}
        {/* Wrapped with ID so Navbar link works */}
        <section id="events">
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