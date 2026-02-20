"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Lottie, { LottieRefCurrentProps } from "lottie-react";

// You will put your downloaded animation file in the public folder!
import welcomeAnimation from "./Welcome (1).json";

export default function SplashScreen({ onComplete }: { onComplete: () => void }) {
  const [isVisible, setIsVisible] = useState(true);
  const lottieRef = useRef<LottieRefCurrentProps>(null);

  useEffect(() => {
    // 1. Wait a moment, then tell the animation to play BACKWARDS to erase
    const reverseTimer = setTimeout(() => {
      if (lottieRef.current) {
        lottieRef.current.setDirection(-1); // Reverses the animation
        lottieRef.current.play();
      }
    }, 3100); // Adjust this based on how long your specific animation takes!

    // 2. Wait for it to erase, then fade out the black screen
    const hideTimer = setTimeout(() => setIsVisible(false), 6200);

    // 3. Reveal the main website
    const completeTimer = setTimeout(() => onComplete(), 6000);

    return () => {
      clearTimeout(reverseTimer);
      clearTimeout(hideTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-black"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {/* This player handles the perfect, looping, handwriting vector graphic */}
          <div className="w-64 md:w-96">
            <Lottie
              lottieRef={lottieRef}
              animationData={welcomeAnimation}
              loop={false}
              autoplay={true}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}