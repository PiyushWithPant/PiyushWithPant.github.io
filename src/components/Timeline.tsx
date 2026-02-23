import React from 'react';
import { timelineData } from '@/data/timeline';
import { FaMapMarkerAlt } from 'react-icons/fa';

export default function Timeline() {
  // A unique theme for every possible index to ensure variety
  const planetThemes = [
    { core: "from-cyan-400 via-cyan-600 to-black", glow: "shadow-[0_0_50px_rgba(34,211,238,0.6)]", ring: "border-cyan-400/50", year: "text-cyan-400" },
    { core: "from-purple-400 via-purple-600 to-black", glow: "shadow-[0_0_50px_rgba(168,85,247,0.6)]", ring: "border-purple-400/50", year: "text-purple-400" },
    { core: "from-rose-400 via-rose-600 to-black", glow: "shadow-[0_0_50px_rgba(244,63,94,0.6)]", ring: "border-rose-400/50", year: "text-rose-400" },
    { core: "from-emerald-400 via-emerald-600 to-black", glow: "shadow-[0_0_50px_rgba(52,211,153,0.6)]", ring: "border-emerald-400/50", year: "text-emerald-400" },
    { core: "from-amber-400 via-amber-600 to-black", glow: "shadow-[0_0_50px_rgba(251,191,36,0.6)]", ring: "border-amber-400/50", year: "text-amber-400" },
  ];

  return (
    <div className="relative space-y-40 before:absolute before:inset-0 before:ml-8 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-[1px] before:bg-gradient-to-b before:from-transparent before:via-white/20 before:to-transparent">
      {timelineData.map((item, index) => {
        const theme = planetThemes[index % planetThemes.length];
        
        return (
          <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
            
            {/* Planetary Node Container */}
            <div className="flex items-center justify-center w-16 h-16 absolute left-0 md:left-1/2 md:-translate-x-1/2 z-20">
              
              {/* 1. ATMOSPHERE: Intensifies and expands on hover */}
              <div className={`absolute inset-0 rounded-full transition-all duration-700 opacity-20 group-hover:opacity-60 group-hover:scale-150 ${theme.glow}`}></div>
              
              {/* 2. ORBITAL RING: Speeds up and glows white on hover */}
              <div className={`absolute -inset-4 border-t-2 border-b-2 border-dashed rounded-full scale-90 opacity-0 group-hover:scale-110 group-hover:opacity-100 transition-all duration-700 group-hover:animate-spin-fast ${theme.ring}`}></div>
              
              {/* 3. THE PLANET BODY */}
              <div className={`planet-body relative w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-tr ${theme.core} border border-white/20 overflow-hidden group-hover:scale-125 group-hover:border-white/60 transition-all duration-500`}>
                
                {/* INTERNAL LENS FLARE: Moves on hover to create 3D depth */}
                <div className="absolute top-1 left-2 w-6 h-6 bg-white/40 rounded-full blur-[4px] group-hover:translate-x-2 group-hover:translate-y-1 transition-transform duration-700"></div>

                {/* SURFACE TEXTURE: Carbon parallax */}
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-overlay group-hover:scale-150 transition-transform duration-1000"></div>

                {/* RADIAL SHADOW: Makes it look like a sphere */}
                <div className="absolute inset-0 bg-black/30 shadow-[inset_-6px_-6px_20px_rgba(0,0,0,0.8)] group-hover:shadow-[inset_-10px_-10px_30px_rgba(0,0,0,0.9)] transition-all"></div>
              </div>
            </div>

            {/* Content Column */}
            <div className="w-[calc(100%-8rem)] md:w-[40%] transition-all duration-500 ml-auto md:ml-0">
              <div className="flex flex-col transition-all duration-500">
                
                {/* Year */}
                <time className={`font-mono text-xl font-black ${theme.year} tracking-widest drop-shadow-[0_0_10px_currentColor] group-hover:drop-shadow-[0_0_20px_currentColor] transition-all duration-500`}>
                  {item.year}
                </time>

                {/* Title */}
                <h4 className="text-3xl font-black text-white mt-4 mb-3 tracking-tighter group-hover:drop-shadow-[0_0_15px_white] transition-all duration-500">
                  {item.title}
                </h4>

                {/* Location with Icon */}
                <div className={`flex items-center gap-2 text-s tracking-[0.3em] mb-6 ${theme.year} opacity-70 group-hover:opacity-100 transition-opacity`}>
                   <FaMapMarkerAlt className="text-sm" />
                   <span>{item.location}</span>
                </div>

                {/* Description */}
                <p className="text-gray-400 text-base leading-relaxed font-light group-hover:text-gray-200 transition-all duration-500">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}