import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="fixed top-6 left-0 right-0 z-[100] flex justify-center px-4">
      {/* The Oval/Pill Container */}
      <div className="flex items-center justify-between w-full max-w-6xl px-6 py-2 bg-white/10 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl">
        
        {/* LEFT SIDE: Logo then Text Branding */}
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-3">
            {/* 1. Your Logo */}
            <Image 
              src="/IIW.png" 
              alt="Logo" 
              width={38} 
              height={38} 
              className="object-contain"
              priority 
            />
            
            {/* 2. IIW Branding - Styled exactly like your previous version */}
            <div className="flex flex-col leading-tight border-l border-white/20 pl-3">
              <div className="flex items-center gap-1.5 uppercase font-bold tracking-tight text-sm md:text-base">
                <span className="text-white">IIW</span>
                <span className="text-[#FF3131]">STUDENT CHAPTER</span>
              </div>
              <span className="text-[10px] text-gray-400 uppercase tracking-[0.3em] font-semibold">
                MARWADI UNIVERSITY
              </span>
            </div>
          </Link>
        </div>

        {/* RIGHT SIDE: Navigation Sections */}
        <div className="hidden md:flex items-center gap-8 text-white text-sm font-medium">
          <Link href="#about" className="hover:text-[#FF3131] transition-colors">About</Link>
          <Link href="#events" className="hover:text-[#FF3131] transition-colors">Events</Link>
          <Link href="#team" className="hover:text-[#FF3131] transition-colors">Team</Link>
          <Link href="#contact" className="hover:text-[#FF3131] transition-colors">Contact</Link>
          
          {/* Action Button */}
          <button className="px-6 py-2 bg-[#FF3131] text-white rounded-full text-xs font-bold hover:bg-red-700 transition-all">
            JOIN
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;