"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const onSubmit = async (event: any) => {
    event.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(event.target);
    // Use the key you just found in your dashboard
    formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setShowPopup(true);
        event.target.reset();
        // Hide popup automatically after 5 seconds
        setTimeout(() => setShowPopup(false), 5000);
      } else {
        alert("Submission failed. Please try again.");
      }
    } catch (error) {
      alert("Check your internet connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
<section id="contact" className="scroll-mt-[84px] relative py-24 px-6 z-10 scroll-mt-28">
        <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl md:text-6xl font-bold tracking-tighter text-white mb-4">Get in touch</h2>
        <p className="text-gray-400 text-lg mb-12">Have questions? Send us a message.</p>

        <form onSubmit={onSubmit} className="space-y-6 text-left">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input type="text" name="name" required placeholder="Name" className="w-full bg-white text-black rounded-2xl px-6 py-4 outline-none text-lg font-medium" />
            <input type="email" name="email" required placeholder="Email" className="w-full bg-white text-black rounded-2xl px-6 py-4 outline-none text-lg font-medium" />
          </div>
          <textarea name="message" required rows={6} placeholder="Message" className="w-full bg-white text-black rounded-2xl px-6 py-4 outline-none text-lg font-medium resize-none"></textarea>

          <button
            type="submit"
            disabled={isSubmitting}
            className="group relative bg-white text-black px-10 py-4 rounded-2xl font-bold text-lg hover:bg-red-600 hover:text-white transition-all duration-300 disabled:opacity-50"
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin group-hover:border-white"></div>
                Sending...
              </span>
            ) : "Send message"}
          </button>
        </form>
      </div>

      {/* SUCCESS POPUP */}
      <AnimatePresence>
        {showPopup && (
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-10 right-10 z-50 bg-green-500 text-white px-8 py-4 rounded-2xl shadow-2xl flex items-center gap-4"
          >
            <div className="bg-white/20 p-2 rounded-full font-bold text-xl">✓</div>
            <div>
              <p className="font-bold">Success!</p>
              <p className="text-sm opacity-90">Message sent to MU-IIW Team.</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}