// src/components/ScrollFire.tsx
"use client";
import React, { useEffect, useRef } from 'react';

export default function ScrollFire() {
  const thumbRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const handleScroll = () => {
      if (!thumbRef.current || !containerRef.current) return;

      const scrollY = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollY / maxScroll) * (window.innerHeight - 100); // Adjusted for thumb height

      // Instant GPU-accelerated movement
      thumbRef.current.style.transform = `translate3d(0, ${scrollPercent}px, 0)`;
      containerRef.current.style.opacity = "1";

      clearTimeout(timeout);
      timeout = setTimeout(() => {
        if (containerRef.current) containerRef.current.style.opacity = "0";
      }, 1200);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div 
      ref={containerRef}
      className="fixed right-2 top-0 w-4 h-screen z-[9999] opacity-0 transition-opacity duration-500 pointer-events-none"
    >
      <div 
        ref={thumbRef}
        className="relative w-full rounded-full will-change-transform"
        style={{ 
          height: '100px',
          background: 'linear-gradient(to top, #00f0ff, #fff, #00f0ff)',
          boxShadow: `
            0 0 20px #00f0ff, 
            0 0 40px #0080ff, 
            inset 0 0 10px #fff
          `,
        }}
      >
        {/* Animated Heat Waves/Particles */}
        <div className="fire-ember e1" />
        <div className="fire-ember e2" />
        <div className="fire-ember e3" />
        <div className="fire-ember e4" />
        
        {/* The Core Flame Body */}
        <div className="absolute inset-0 bg-cyan-400 blur-md opacity-50 animate-pulse" />
      </div>
    </div>
  );
}