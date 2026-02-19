"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect } from "react";

const upcomingEvents = [
  { title: "Advanced Arc Welding", date: "March 2026", img: "/events/weld1.jpg" },
  { title: "Robotic Automation", date: "April 2026", img: "/events/robot.jpg" },
  { title: "Metal Metallurgy 101", date: "May 2026", img: "/events/metal.jpg" },
];

const pastEvents = [
  { title: "Induction Ceremony", date: "Jan 2026", img: "/events/past1.jpg" },
  { title: "Expert Talk: Industry 4.0", date: "Dec 2025", img: "/events/past2.jpg" },
  { title: "Workshop on Safety", date: "Nov 2025", img: "/events/past3.jpg" },
];

export default function EventsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track horizontal scroll progress
  const { scrollXProgress } = useScroll({
    container: containerRef
  });

  // Centered Heading logic: Swaps based on scroll position
  // 0 is far left (Past), 1 is far right (Upcoming)
  const headingText = useTransform(
    scrollXProgress,
    [0, 0.45, 0.55, 1],
    ["Past Events", "Past Events", "Upcoming Events", "Upcoming Events"]
  );

  // This ensures the page starts at the "Upcoming Events" (right side)
  useEffect(() => {
    if (containerRef.current) {
      const el = containerRef.current;
      el.scrollLeft = el.scrollWidth;
    }
  }, []);

  return (
    <section className="py-24 relative z-10 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* CENTERED HEADING: Matching "About" Style */}
        <div className="flex flex-col items-center justify-center mb-16 text-center">
            <motion.h2 
                className="text-5xl md:text-7xl font-bold tracking-tighter text-white"
            >
                {headingText}
            </motion.h2>
            <div className="h-1 w-24 bg-red-600 mt-4" />
        </div>

        {/* Horizontal Scroll Area - flex-row ensures Past is Left, Upcoming is Right */}
        <div 
          ref={containerRef}
          className="flex overflow-x-auto gap-10 pb-12 no-scrollbar snap-x snap-mandatory flex-row"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {/* We put Past Events first so they are on the left side of the scroll */}
          {[...pastEvents, ...upcomingEvents].map((event, index) => (
            <motion.div
              key={index}
              // THE "WAKING UP" ANIMATION: 90deg (sleeping) to 0deg (face-to-face)
              initial={{ rotateY: -30, rotateX: 45, opacity: 0, y: 100 }}
              whileInView={{ rotateY: 0, rotateX: 0, opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ 
                duration: 0.8, 
                ease: [0.215, 0.61, 0.355, 1.0] 
              }}
              style={{ perspective: "1500px", transformStyle: "preserve-3d" }}
              className="min-w-[350px] md:min-w-[450px] aspect-[4/5] bg-white/5 backdrop-blur-xl border border-white/10 rounded-[3rem] overflow-hidden snap-center group"
            >
              <div className="h-2/3 w-full overflow-hidden relative">
                <img 
                  src={event.img} 
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              </div>

              <div className="p-8 flex flex-col justify-between h-1/3">
                <div className="text-center">
                    <span className="text-red-500 font-bold tracking-widest text-sm uppercase">
                        {event.date}
                    </span>
                    <h3 className="text-3xl font-bold tracking-tight mt-1 group-hover:text-red-500 transition-colors">
                        {event.title}
                    </h3>
                </div>
                <button className="mx-auto text-xs font-bold uppercase tracking-widest border-b-2 border-red-600 pb-1">
                    Explore
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}