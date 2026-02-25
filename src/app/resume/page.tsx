// RESUME PAGE

"use client";
import React from 'react';
import { FileDown, Lock, ShieldAlert, ArrowUpRight } from "lucide-react";
import Starfield from "@/components/Starfield";

export default function ResumePage() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">
      <Starfield />

      <div className="max-w-4xl mx-auto px-6 pt-44 pb-20 relative z-10 flex flex-col items-center">
        
        {/* HEADER AREA */}
        <div className="flex flex-col items-center mb-16 group/section">
          <div className="p-6 bg-white/5 rounded-3xl border border-white/10 section-header-icon mb-8 shadow-2xl">
            <FileDown className="text-brand-cyan" size={42} />
          </div>
          <h1 className="text-xl md:text-7xl font-black text-white tracking-tighter opacity-90 group-hover/section:opacity-100 transition-opacity text-center">
            Curriculum Vitae
          </h1>
        </div>

        {/* CV ACCESS MODULE */}
        <div className="cv-access-card group">
          <div className="w-15 h-15 bg-brand-cyan/10 rounded-full flex items-center justify-center mb-4 border border-brand-cyan/20">
            <ShieldAlert className="text-brand-cyan" size={28} />
          </div>

  

          <p className="text-gray-400 text-sm leading-relaxed font-light max-w-md mx-auto mb-10 text-center">
            For privacy reasons and to ensure you receive the most up-to-date technical dossier, 
            my full resume is hosted on a secure Google Drive. Access is available via request.
          </p>

          {/* THE BUTTON */}
          <a 
            href="https://drive.google.com/drive/folders/1XxM58ny7tP-xgIlqpsaQz86sr9VY4ymW?usp=sharing" 
            className="cv-download-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Request CV</span>
            <ArrowUpRight size={18} />
          </a>

          {/* BOTTOM SECURITY STAMP */}
          <div className="mt-10 pt-8 border-t border-white/5 w-full flex justify-center">
             <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-gray-600 group-hover:text-brand-cyan/50 transition-colors">
                <Lock size={12} /> Cloud Verification Required
             </div>
          </div>
        </div>

      </div>
    </div>
  );
}