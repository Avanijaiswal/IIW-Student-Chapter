"use client";

import { useEffect, useState } from "react";

export default function CursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [smoothPosition, setSmoothPosition] = useState({ x: 0, y: 0 });

  // Track real mouse position
  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  // Smooth trailing effect
  useEffect(() => {
    const animate = () => {
      setSmoothPosition(prev => ({
        x: prev.x + (position.x - prev.x) * 0.1,
        y: prev.y + (position.y - prev.y) * 0.1
      }));
      requestAnimationFrame(animate);
    };

    animate();
  }, [position]);

  return (
    <div
      className="fixed top-0 left-0 pointer-events-none z-50 mix-blend-screen"
      style={{
        transform: `translate(${smoothPosition.x - 200}px, ${smoothPosition.y - 200}px)`
      }}
    >
      <div className="w-[400px] h-[400px] rounded-full bg-gradient-to-r from-blue-500 via-purple-500 via-pink-500 to-yellow-400 blur-[160px] opacity-80"></div>
    </div>
  );
}
