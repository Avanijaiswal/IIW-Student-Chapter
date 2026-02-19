"use client";

import dynamic from "next/dynamic";
import { Mail, MapPin, Phone } from "lucide-react";
// Importing the social icons
import { FaInstagram, FaLinkedin, FaWhatsapp, FaDiscord } from "react-icons/fa";

// Import Map dynamically (same as page.tsx)
const Map = dynamic(() => import("./Map"), {
  ssr: false,
  loading: () => (
    <div className="h-full w-full bg-white/5 animate-pulse flex items-center justify-center text-gray-400">
      Loading Map...
    </div>
  ),
});

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    // Kept the top padding (pt-20) for breathing room, but kept bottom padding (pb-6) tight
    <footer className="bg-white text-black rounded-t-[60px] px-5 pt-20 pb-6 mt-32">
      <div className="max-w-7xl mx-auto">

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* LEFT SIDE */}
          <div className="space-y-10">

            {/* Branding */}
            <div>
              <h3 className="text-2xl font-extrabold tracking-tight">
                MU-IIW Student Chapter
              </h3>
              <p className="text-gray-500 text-sm">
                Marwadi University
              </p>
            </div>

            {/* Location */}
            <div className="space-y-3">
              <h4 className="text-lg font-bold flex items-center gap-2">
                <MapPin className="w-5 h-5 text-red-500" />
                Location
              </h4>

              <div className="text-gray-600 leading-relaxed">
                <p>Marwadi University,</p>
                <p>Rajkot-Morbi Highway, Rajkot</p>
                <p className="font-semibold mt-2">Pin: 360003</p>
              </div>
            </div>

            {/* Contact */}
            <div className="space-y-3">
              <h4 className="text-lg font-bold flex items-center gap-2">
                <Mail className="w-5 h-5 text-red-500" />
                Contact
              </h4>

              <p className="text-gray-600 hover:text-red-500 transition cursor-pointer">
                <a href="mailto:muiiwstudentchapter@gmail.com" className="hover:underline">
                   muiiwstudentchapter@gmail.com
                </a>
              </p>

              <div className="text-gray-600 flex items-center gap-2 text-sm font-medium">
                <Phone className="w-4 h-4 text-red-500" />
                <div className="flex gap-4">
                  <span className="text-gray-300">|</span>
                  <a href="tel:+916353362642" className="hover:text-red-500 transition-colors">
                  +91 63533 62642
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT SIDE MAP */}
          <div className="h-[380px] w-full rounded-[40px] overflow-hidden border-[10px] border-gray-50 shadow-inner">
            <Map />
          </div>

        </div>

        {/* --- BOTTOM SECTION --- */}
        {/* Reduced mt-20 to mt-12, and pt-10 to pt-6 to kill the dead whitespace */}
        <div className="border-t border-gray-200 mt-12 pt-6 flex flex-col items-center justify-center gap-4 text-sm text-gray-500">
          
          {/* SOCIAL ICONS */}
          <div className="flex items-center gap-6 text-2xl text-black mb-2">
            <a href="https://www.instagram.com/muiiwstudentchapter?igsh=ZnVlbHJ5NzcxcDU5" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF3131] hover:scale-110 transition-all duration-300">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/company/mu-iiw-student-chapter/" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF3131] hover:scale-110 transition-all duration-300">
              <FaLinkedin />
            </a>



          </div>

          <p className="text-center">
            Built with ❤️ by{" "}
            <span className="font-semibold text-blue-600">
              <a 
                href="https://www.linkedin.com/in/avani-jaiswalll/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:underline"
              >
                Avani Jaiswal
              </a>
            </span>{" "}
            © 2026
          </p>
        </div>

      </div>
    </footer>
  );
}