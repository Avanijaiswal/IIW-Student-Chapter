"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const Navbar = () => {
  const { scrollY } = useScroll();

  const maxWidth = useTransform(scrollY, [0, 150], ["1100px", "950px"]);
  const backdropBlur = useTransform(scrollY, [0, 150], ["blur(14px)", "blur(20px)"]);
  const y = useTransform(scrollY, [0, 150], [0, -6]);

  const handleScroll = (
  e: React.MouseEvent<HTMLAnchorElement>,
  targetId: string
) => {
  e.preventDefault();
  const elem = document.getElementById(targetId);
  if (elem) {
    // This tells the browser to just go to the element
    // It will now respect the 'scroll-mt-28' you added to the sections!
    elem.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};

  return (
<div className="fixed top-6 left-0 right-0 z-[100] flex justify-center px-4">
      <motion.nav
        style={{
          maxWidth,
          backdropFilter: backdropBlur,
          y,
        }}
        className="
          pointer-events-auto
          w-full
          h-[60px]
          flex
          items-center
          justify-between
          px-6
          rounded-full
          bg-black/40 
          border border-white/10
          shadow-[0_4px_30px_rgba(0,0,0,0.5)]
          transition-all duration-300
        "
      >
        {/* LEFT SIDE */}
        <Link href="/" className="flex items-center gap-3 group h-full">
          <Image
            src="/IIW.png"
            alt="Logo"
            width={36}
            height={36}
            className="object-contain drop-shadow-[0_0_18px_rgba(255,49,49,0.8)]"
            priority
          />

          <div className="flex flex-col justify-center leading-tight border-l border-white/10 pl-3">
            <div className="flex items-center gap-1 uppercase font-semibold tracking-tight text-sm">
              <span className="text-white">MU-IIW</span>
              <span className="text-[#FF3131]">STUDENT CHAPTER</span>
            </div>
            <span className="text-[9px] text-gray-400 uppercase tracking-[0.25em] font-medium">
              MARWADI UNIVERSITY
            </span>
          </div>
        </Link>

        {/* RIGHT SIDE */}
        <div className="hidden md:flex items-center gap-6 text-white text-sm font-medium">
          <a
            href="#about"
            onClick={(e) => handleScroll(e, "about")}
            className="hover:text-[#FF3131] transition-colors"
          >
            About
          </a>

          <a
            href="#team"
            onClick={(e) => handleScroll(e, "team")}
            className="hover:text-[#FF3131] transition-colors"
          >
            Team
          </a>

          <a
            href="#contact"
            onClick={(e) => handleScroll(e, "contact")}
            className="hover:text-[#FF3131] transition-colors"
          >
            Contact
          </a>

          <a href="#events" onClick={(e) => handleScroll(e, "events")}>
            <button
              className="
                px-4 py-1.5
                bg-[#FF3131]
                text-white
                rounded-full
                text-xs
                font-semibold
                transition-colors
                hover:bg-[#D92020]
              "
            >
              UPCOMING EVENTS
            </button>
          </a>
        </div>
      </motion.nav>
    </div>
  );
};

export default Navbar;