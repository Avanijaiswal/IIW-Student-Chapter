"use client";
import React, { useEffect, useRef } from "react";
import TeamSection from "./components/TeamSection";
import CursorGlow from "./components/CursorGlow";
import { motion, useScroll, useTransform } from "framer-motion";

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
       <nav className="fixed w-full top-0 left-0 z-50 bg-white/5 backdrop-blur-md border-b border-white/10">
          <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex flex-col">
            <div className="flex items-center gap-1 text-xl font-black tracking-tighter uppercase">
              <span>IIW</span>
              <span className="text-[#E32626]">Student Chapter</span>
            </div>
            <span className="text-[10px] text-white tracking-[0.2em] uppercase font-bold leading-tight">
              Marwadi University
            </span>
          </div>
            <div className="space-x-8 hidden md:flex">
              <a href="#" className="hover:text-gray-400 transition">About</a>
              <a href="#" className="hover:text-gray-400 transition">Events</a>
              <a href="#" className="hover:text-gray-400 transition">Team</a>
              <a href="#" className="hover:text-gray-400 transition">Contact</a>
            </div>
            </div>
        </nav>

        
{/* HERO */}
<section className="relative min-h-screen flex items-center overflow-hidden bg-black px-16">

  {/* Deep red gradient background */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,#3b0000,transparent_60%)]" />

  {/* Subtle grid overlay */}
  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,0,0,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,0,0,0.04)_1px,transparent_1px)] bg-[size:60px_60px]" />

  <div className="relative z-10">
    <div
  className="pointer-events-none absolute w-[600px] h-[600px] rounded-full blur-[150px] opacity-30"
  style={{
    background:
      "radial-gradient(circle at center, rgba(255,0,0,0.6) 0%, transparent 70%)",
    left: "var(--mouse-x)",
    top: "var(--mouse-y)",
    transform: "translate(-50%, -50%)",
  }}
/>


    <h1 className="font-[var(--font-antonio)] uppercase leading-[0.8] select-none">

  <span
    className="block text-[180px] md:text-[300px] font-extrabold tracking-[-0.04em] text-transparent bg-gradient-to-r from-[#f2f2f2] via-[#ff5a5a] to-[#ff0000] bg-clip-text animate-slideLeft transition-all duration-300 hover:drop-shadow-[0_0_90px_rgba(255,0,0,0.9)]"
    style={{ transform: "scaleY(0.80)" }}
  >
    LIMITLESS
  </span>

  <span
    className="block text-[180px] md:text-[300px] font-extrabold tracking-[-0.04em] text-transparent bg-gradient-to-r from-[#f2f2f2] via-[#ff5a5a] to-[#ff0000] bg-clip-text animate-slideLeft delay-200 transition-all duration-300 hover:drop-shadow-[0_0_110px_rgba(255,0,0,1)]"
    style={{ transform: "scaleY(0.80)" }}
  >
    ENGINEER
  </span>

</h1>





    <p className="mt-10 text-gray-400 text-lg max-w-xl">
      The official off-road racing division of Marwadi University.
      We don't just build cars; we engineer performance.
    </p>

  </div>
</section>



        {/* ABOUT - Glass Effect */}
        <section className="py-24 px-6">
          <div className="max-w-5xl mx-auto text-center bg-white/5 backdrop-blur-lg border border-white/10 p-10 rounded-3xl">
            <h2 className="text-4xl font-bold">About Chapter</h2>
            <p className="mt-6 text-gray-300 text-lg">
              IIW Student Chapter helps students explore technology through workshops, hackathons, and real-world projects.
            </p>
          </div>
        </section>

        {/* FEATURES - Glass Cards */}
        <section className="py-32 px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-16 text-center">
            {/* Manual Card 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              className="bg-white/5 backdrop-blur-md p-12 rounded-2xl border border-white/10"
            >
              <h3 className="text-xl font-semibold">Workshops</h3>
              <p className="mt-4 text-gray-400">Learn modern technologies with hands-on sessions.</p>
            </motion.div>

            {/* Manual Card 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ delay: 0.2 }}
              className="bg-white/5 backdrop-blur-md p-12 rounded-2xl border border-white/10"
            >
              <h3 className="text-xl font-semibold">Hackathons</h3>
              <p className="mt-4 text-gray-400">Build innovative projects and compete with peers.</p>
            </motion.div>

            {/* Manual Card 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ delay: 0.4 }}
              className="bg-white/5 backdrop-blur-md p-12 rounded-2xl border border-white/10"
            >
              <h3 className="text-xl font-semibold">Community</h3>
              <p className="mt-4 text-gray-400">Connect with developers, mentors, and industry leaders.</p>
            </motion.div>
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
          <img src="https://cdn-icons-png.flaticon.com/512/174/174855.png" className="w-6 opacity-70 grayscale hover:grayscale-0 cursor-pointer" alt="Instagram" />
          <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" className="w-6 opacity-70 grayscale hover:grayscale-0 cursor-pointer" alt="LinkedIn" />
          <img src="https://cdn-icons-png.flaticon.com/512/733/733585.png" className="w-6 opacity-70 grayscale hover:grayscale-0 cursor-pointer" alt="WhatsApp" />
          <img src="https://cdn-icons-png.flaticon.com/512/5968/5968756.png" className="w-6 opacity-70 grayscale hover:grayscale-0 cursor-pointer" alt="Discord" />
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