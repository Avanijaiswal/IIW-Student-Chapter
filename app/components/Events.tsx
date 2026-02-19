"use client";
import { motion } from "framer-motion";

// 1. ADDED 'link' PROPERTY TO ALL EVENTS
const upcomingEvents = [
  { 
    title: "Coming Soon", 
    date: "Coming Soon", 
    img: "/events/upevent.png",
    //link: "YOUR_LINKEDIN_URL_HERE" 
  },
];

const pastEvents = [
  { 
    title: "Industrial Visit to Anup Engineering", 
    date: "February 2026", 
    img: "/events/event1.jpg",
    link: "https://www.linkedin.com/posts/mu-iiw-student-chapter_muiiwstudentchapter-industrialvisit-anupengineering-activity-7429935223313874944-RGNI?utm_source=share&utm_medium=member_desktop&rcm=ACoAADh1PfYBCRKQp4D0XLSzWrmmRFoy3NYLSRY" 
  },
  { 
    title: "Workshop on 3D Printing & Modelling", 
    date: "January 2026", 
    img: "/events/event22.jpg",
    link: "https://www.linkedin.com/posts/mu-iiw-student-chapter_muiiw-student-chapter-successfully-conducted-activity-7425799338615898112-MHrj?utm_source=share&utm_medium=member_desktop&rcm=ACoAADh1PfYBCRKQp4D0XLSzWrmmRFoy3NYLSRY" 
  },
  { 
    title: "Industrial Visit to IIT Gandhinagar", 
    date: "December 2025", 
    img: "/events/event3.jpg",
    link: "https://www.linkedin.com/posts/mu-iiw-student-chapter_on-6th-december-2025-students-and-faculty-activity-7403759360457453568-Lzdc?utm_source=share&utm_medium=member_desktop&rcm=ACoAADh1PfYBCRKQp4D0XLSzWrmmRFoy3NYLSRY" 
  },
  { 
    title: "Automotive Welding Seminar", 
    date: "October 2025", 
    img: "/events/event4.jpg",
    link: "https://www.linkedin.com/posts/mu-iiw-student-chapter_postevent-weldingseminar-automotiveengineering-activity-7382381384402780160-kAB_?utm_source=share&utm_medium=member_desktop&rcm=ACoAADh1PfYBCRKQp4D0XLSzWrmmRFoy3NYLSRY" 
  },
  { 
    title: "Workshop on Smorphi Robots", 
    date: "September 2025", 
    img: "/events/event5.jpg",
    link: "https://www.linkedin.com/posts/mu-iiw-student-chapter_mu-iiw-studentchapter-activity-7375567081481736192-D4nO?utm_source=share&utm_medium=member_desktop&rcm=ACoAADh1PfYBCRKQp4D0XLSzWrmmRFoy3NYLSRY" 
  }
];

export default function EventsSection() {
  return (
    <section className="scroll-mt-[84px] py-24 relative z-10 overflow-hidden space-y-24">
      
      {/* ================= UPCOMING EVENTS SECTION ================= */}
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Heading */}
        <div className="flex flex-col items-center justify-center mb-12 text-center">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white">
                Upcoming Events
            </h2>
            <div className="h-1 w-24 bg-red-600 mt-4" />
        </div>

        {/* Scroll Container */}
        <div 
          className="flex justify-center overflow-x-auto gap-10 pb-12 no-scrollbar snap-x snap-mandatory flex-row"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {upcomingEvents.map((event, index) => (
            <motion.div
              key={index}
              initial={{ rotateY: -30, rotateX: 45, opacity: 0, y: 100 }}
              whileInView={{ rotateY: 0, rotateX: 0, opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1.0] }}
              style={{ perspective: "1500px", transformStyle: "preserve-3d" }}
              className="w-[350px] md:w-[450px] shrink-0 aspect-[4/5] bg-white/5 backdrop-blur-xl border border-white/10 rounded-[3rem] overflow-hidden snap-center group flex flex-col"            >
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
                {/* 2. EXPLORE BUTTON CONVERTED TO A LINK */}
                <a 
                 // href={event.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mx-auto text-xs font-bold uppercase tracking-widest border-b-2 border-red-600 pb-1 hover:text-red-500 transition-colors cursor-pointer"
                >
                  
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ================= PAST EVENTS SECTION ================= */}
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Heading */}
        <div className="flex flex-col items-center justify-center mb-12 text-center">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white">
                Past Events
            </h2>
            <div className="h-1 w-24 bg-red-600 mt-4" />
        </div>

        {/* Scroll Container */}
        <div 
          className="flex overflow-x-auto gap-10 pb-12 no-scrollbar snap-x snap-mandatory flex-row"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {pastEvents.map((event, index) => (
            <motion.div
              key={index}
              initial={{ rotateY: -30, rotateX: 45, opacity: 0, y: 100 }}
              whileInView={{ rotateY: 0, rotateX: 0, opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1.0] }}
              style={{ perspective: "1500px", transformStyle: "preserve-3d" }}
              className="min-w-[350px] md:min-w-[450px] aspect-[4/5] bg-white/5 backdrop-blur-xl border border-white/10 rounded-[3rem] overflow-hidden snap-center group flex flex-col"
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
                {/* 2. EXPLORE BUTTON CONVERTED TO A LINK */}
                <a 
                  href={event.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mx-auto text-xs font-bold uppercase tracking-widest border-b-2 border-red-600 pb-1 hover:text-red-500 transition-colors cursor-pointer"
                >
                    Explore
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  );
}