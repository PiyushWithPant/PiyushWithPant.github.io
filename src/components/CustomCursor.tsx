"use client";
import React, { useEffect, useState, useRef } from 'react';

export default function FlickerFlameCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [sprinkles, setSprinkles] = useState<{ id: number; x: number; y: number; size: number }[]>([]);
  const lastSprinkleTime = useRef(0);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      const { clientX: x, clientY: y } = e;
      setPosition({ x, y });

      const now = Date.now();
      // Drop sprinkles frequently for a thick trail
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

  return (
    <div className="fixed inset-0 pointer-events-none z-[999999]">
      {/* 1. The Sprinkles Trail */}
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

      {/* 2. The Main Flaming Cursor */}
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
        {/* The Flickering Flame Aura */}
        <div className="absolute w-10 h-10 bg-cyan-500/40 blur-md animate-flicker-flame" />
        
        {/* The Glowing Core (Same color, bright) */}
        <div className="absolute w-4 h-4 bg-cyan-200 rounded-full shadow-[0_0_20px_#00f0ff] z-10 animate-core-pulse" />
        
        {/* Subtle Inner Heat Point */}
        <div className="absolute w-1 h-1 bg-white rounded-full z-20" />
      </div>
    </div>
  );
}