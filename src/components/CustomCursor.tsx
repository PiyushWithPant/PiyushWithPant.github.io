"use client";
import React, { useEffect, useState, useRef } from 'react';

export default function FlickerFlameCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [sprinkles, setSprinkles] = useState<{ id: number; x: number; y: number; size: number }[]>([]);
  const [isDesktop, setIsDesktop] = useState(false); // New State
  const lastSprinkleTime = useRef(0);

  useEffect(() => {
    // 1. Check if device has a mouse/trackpad (fine pointer)
    const mediaQuery = window.matchMedia("(pointer: fine)");
    setIsDesktop(mediaQuery.matches);

    if (!mediaQuery.matches) return; // Exit if mobile

    const moveCursor = (e: MouseEvent) => {
      const { clientX: x, clientY: y } = e;
      setPosition({ x, y });

      const now = Date.now();
      if (now - lastSprinkleTime.current > 20) {
        const newSprinkle = { 
          id: Math.random(), 
          x: x + (Math.random() * 10 - 5), 
          y: y + (Math.random() * 10 - 5),
          size: Math.random() * 3 + 1
        };
        setSprinkles((prev) => [...prev.slice(-45), newSprinkle]); 
        lastSprinkleTime.current = now;
      }
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  // 2. Do not render anything if it's not a desktop/mouse device
  if (!isDesktop) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[999999]">
      {sprinkles.map((s) => (
        <div
          key={s.id}
          className="absolute rounded-full bg-cyan-400 animate-stardust"
          style={{ 
            left: s.x, 
            top: s.y, 
            width: s.size,
            height: s.size,
            boxShadow: '0 0 10px #00f0ff',
            transform: 'translate(-50%, -50%)' 
          }}
        />
      ))}

      <div 
        className="absolute flex items-center justify-center"
        style={{ 
          left: position.x, 
          top: position.y, 
          transform: 'translate(-50%, -50%)',
          width: '40px',
          height: '40px' 
        }}
      >
        <div className="absolute w-10 h-10 bg-cyan-500/40 blur-md animate-flicker-flame" />
        <div className="absolute w-4 h-4 bg-cyan-200 rounded-full shadow-[0_0_20px_#00f0ff] z-10 animate-core-pulse" />
        <div className="absolute w-1 h-1 bg-white rounded-full z-20" />
      </div>
    </div>
  );
}