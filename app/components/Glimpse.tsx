"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const glimpses = [
  {
    title: "Hands-on workshop on 3D Printing and Modeling",
    image: "/glimpse/jan.jpeg",
    date: "31ST JANUARY 2026",
    year: "2026",
  },
  {
    title: "Industrial Visit to Anup Engineering – Kheda Plant",
    image: "/glimpse/feb.jpeg",
    date: "3RD FEBRUARY 2026",
    year: "2026",
  },
  {
    title: "MS WORD and AI Workshop",
    image: "/glimpse/march.jpeg",
    date: "MARCH 2026",
    year: "2026",
  },
  {
    title: "One-Day workshop on FSW at PDEU",
    image: "/glimpse/glimpse1.png",
    date: "JANUARY 2025",
    year: "2025",
  },
  {
    title: "Workshop on Weld 4.0",
    image: "/glimpse/glimpse2.jpg",
    date: "JANUARY 2025",
    year: "2025",
  },
  {
    title: "Reconfigurable Robotics For Industry 4.0",
    image: "/glimpse/glimpse3.png",
    date: "FEBRUARY 2025",
    year: "2025",
  },
  {
    title: "Collaboration for research on welding at IIT Mandi",
    image: "/glimpse/glimpse4.png",
    date: "MARCH 2025",
    year: "2025",
  },
  {
    title: "Industrial Visit to ONGC Baroda Plant",
    image: "/glimpse/glimpse5.png",
    date: "MARCH 2025",
    year: "2025",
  },
  {
    title: "Participation in YPIC INDIA-2025 at NSUT Delhi",
    image: "/glimpse/glimpse17.png",
    date: "SEPTEMBER 2025",
    year: "2025",
  },
  {
    title: "Workshop on Smorphi Robots",
    image: "/glimpse/event5.jpg",
    date: "SEPTEMBER 2025",
    year: "2025",
  },
  {
    title: "Automotive Welding Seminar",
    image: "/glimpse/event4.jpg",
    date: "OCTOBER 2025",
    year: "2025",
  },
  {
    title: "Attending 1st year Anniversary of IIW Ahmedabad Centre",
    image: "/glimpse/event3.jpg",
    date: "DECEMBER 2025",
    year: "2025",
  },
  {
    title: "Visit to IIT Gandhinagar for Project Engagements",
    image: "/glimpse/glimpse.jpeg",
    date: "DECEMBER 2025",
    year: "2025",
  },
  {
    title: "Visiting ENGIMACH Gandhinagar",
    image: "/glimpse/Dec.jpeg",
    date: "DECEMBER 2025",
    year: "2025",
  },
  {
    title: "Visit to ISRO SAC Ahmedabad",
    image: "/glimpse/isro.jpeg",
    date: "DECEMBER 2025",
    year: "2025",
  },
  {
    title: "Industrial visit to Indian Institute of Packaging",
    image: "/glimpse/glimpse6.jpg",
    date: "FEBRUARY 2024",
    year: "2024",
  },
  {
    title: "Expert talk on 5S Awareness",
    image: "/glimpse/glimpse7.png",
    date: "JULY 2024",
    year: "2024",
  },
  {
    title: "Latest Techniques in Fabrication of Process Equipment",
    image: "/glimpse/glimpse8.jpg",
    date: "SEPTEMBER 2024",
    year: "2024",
  },
  {
    title: "Expert talk on Latest Welding Techniques",
    image: "/glimpse/oct.jpeg",
    date: "OCTOBER 2024",
    year: "2024",
  },
  {
    title: "Industrial visit to Jyoti CNC Automation Pvt. Ltd.",
    image: "/glimpse/glimpse10.png",
    date: "NOVEMBER 2024",
    year: "2024",
  },
  {
    title: "One-day arc-welding workshop",
    image: "/glimpse/glimpse11.jpg",
    date: "JANUARY 2023",
    year: "2023",
  },
  {
    title: "Industrial visit to Jyoti CNC Automation Ltd.",
    image: "/glimpse/glimpse12.png",
    date: "APRIL 2023",
    year: "2023",
  },
  {
    title: "Expert talk by Dr. Luqman Hakim Bin Ahmad Shah.",
    image: "/glimpse/glimpse13.png",
    date: "AUGUST 2023",
    year: "2023",
  },
  {
    title: "Industrial visit to Wanakbori Thermal Power station",
    image: "/glimpse/glimpse14.jpg",
    date: "SEPTEMBER 2023",
    year: "2023",
  },
  {
    title: "One-day Additive manufacturing with welding workshop.",
    image: "/glimpse/glimpse15.jpg",
    date: "MARCH 2022",
    year: "2022",
  },
  {
    title: "Industrial visit to Kalptaru Power Transmission LTD.",
    image: "/glimpse/glimpse16.jpg",
    date: "OCTOBER 2022",
    year: "2022",
  },
  {
    title: "Young Professional Seminar organized by IIW Student Chapter, PDPU",
    image: "/glimpse/glimpse19.jpg",
    date: "JANUARY 2019",
    year: "2019",
  },
  {
    title: "Establishment of IIW Student Chapter at MEFGI",
    image: "/glimpse/glimpse20.jpg",
    date: "JANUARY 2019",
    year: "2019",
  },
  {
    title: "Industrial Visit to L&T Shipbuilding Ltd., Hazira Plant",
    image: "/glimpse/glimpse18.jpg",
    date: "FEBRUARY 2019",
    year: "2019",
  },
  {
    title: "Industrial Visit to Kalpataru Power Transmission Ltd., Gandhinagar",
    image: "/glimpse/glimpse21.png",
    date: "FEBRUARY 2018",
    year: "2018",
  },
  {
    title: "Inauguration of IIW Student Chapter at ITM Universe",
    image: "/glimpse/glimpse22.png",
    date: "SEPTEMBER 2017",
    year: "2017",
  },
  {
    title: "69th IIW Annual Assembly & International Conference",
    image: "/glimpse/glimpse23.jpg",
    date: "SEPTEMBER 2016",
    year: "2016",
  },
];

export default function Glimpse() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    "2026",
    "2025",
    "2024",
    "2023",
    "2022",
    "2019",
    "2018",
    "2017",
    "2016",
  ];

  const filteredGlimpses =
    activeCategory === "All"
      ? glimpses
      : glimpses.filter((g) => g.year === activeCategory);

  return (
    <section id="glimpses" className="py-24 px-6 bg-transparent">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-5xl font-bold text-white mb-6">
          Event Glimpse
          <div className="h-1 w-24 mx-auto bg-red-600 mt-4" />
        </h2>

        <p className="text-gray-400 mb-16">
          A quick look at some memorable moments from the Chapter.
        </p>

        {/* CATEGORY PILLS */}

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-8 py-3 rounded-full backdrop-blur-md text-sm font-semibold transition ${
                activeCategory === cat
                  ? "bg-white text-black"
                  : "bg-white/10 text-white hover:bg-white/20"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* HORIZONTAL SLIDING CARDS FOR ALL CATEGORIES */}
        <div
          className={`flex w-full gap-8 overflow-x-auto pb-8 px-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden ${
            ["All", "2025", "2024"].includes(activeCategory)
              ? "justify-start"
              : "justify-center"
          }`}
        >
          {filteredGlimpses.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="w-[280px] shrink-0 bg-white/5 backdrop-blur-md rounded-3xl overflow-hidden border border-white/10 hover:scale-105 transition"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-56 object-cover"
              />

              <div className="p-6 text-left">
                <p className="text-red-500 font-bold text-sm mb-2">
                  {item.date}
                </p>

                <h3 className="text-xl font-semibold text-white">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
