"use client";
import React, { useEffect, useRef } from 'react';
import { MapPin, School, Building, Mail, Github, GraduationCap } from "lucide-react";
import Starfield from "@/components/Starfield"; // Ensure this component exists from previous step

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Re-using your tilt logic for consistency
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const x = (e.clientX - window.innerWidth / 2) / 10;
      const y = (e.clientY - window.innerHeight / 2) / 10;
      containerRef.current.style.setProperty("--mouse-x", `${x}`);
      containerRef.current.style.setProperty("--mouse-y", `${y}`);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="relative min-h-screen w-full overflow-hidden selection:bg-brand-cyan/30">
      {/* Background Animation */}
      <Starfield />

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column - Sidebar */}
          <div className="lg:col-span-4 xl:col-span-3">
            <div className="glass-card p-8 sticky top-12">
              <img
                src="/img1.jpg"
                alt="Piyush Pant"
                className="w-full aspect-[3/4] sidebar-img mb-6"
              />
              <h2 className="text-3xl font-black text-white mb-1">Piyush Pant</h2>
              <p className="text-brand-cyan font-mono text-sm mb-8 tracking-tighter">AI Researcher // Developer</p>
              
              <div className="space-y-5">
                 <SidebarItem icon={<MapPin size={18}/>} text="Saarbrücken, Germany" link="https://g.co/kgs/VJt4AyM" />
                 <SidebarItem icon={<School size={18}/>} text="Saarland University" link="https://www.uni-saarland.de" />
                 <SidebarItem icon={<Building size={18}/>} text="CISPA Helmholtz Center" link="https://cispa.de" />
                 <SidebarItem icon={<Mail size={18}/>} text="piyushpant15@gmail.com" link="mailto:piyushpant15@gmail.com" />
                 <SidebarItem icon={<Github size={18}/>} text="PiyushWithPant" link="https://github.com/PiyushWithPant" />
              </div>

              <div className="mt-10 pt-6 border-t border-white/10">
                <p className="text-yellow-200/80 italic text-xs leading-relaxed font-serif">
                  "A true warrior doesn’t seek to dominate, but to discipline his own spirit..."
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Main Content */}
          <div className="lg:col-span-8 xl:col-span-9 space-y-8">
            {/* Bio Section */}
            <section className="glass-card p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-8 text-white flex items-center gap-3">
                <span className="text-brand-cyan">01.</span> Who I Am
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                I come from a small Himalayan village nestled near the <span className="text-white font-semibold underline decoration-brand-cyan underline-offset-4">Panchachuli peaks</span>. 
                My journey is defined by a leap of faith—leaving my roots to expand my technical horizons in Europe.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                <div className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-brand-cyan/50 transition-colors">
                  <h3 className="text-brand-cyan font-bold mb-2 flex items-center gap-2">
                    <GraduationCap size={20}/> Education
                  </h3>
                  <p className="text-sm text-gray-300">M.Sc. Computer Science at Universität des Saarlandes</p>
                </div>
                <div className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-brand-cyan/50 transition-colors">
                  <h3 className="text-brand-cyan font-bold mb-2 flex items-center gap-2">
                    <Building size={18}/> Current Research
                  </h3>
                  <p className="text-sm text-gray-300">Master's Thesis under Prof. Dr. Xiao Zhang at CISPA</p>
                </div>
              </div>
            </section>

            {/* Research Grid Section */}
            <section className="glass-card p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-8 text-white flex items-center gap-3">
                <span className="text-brand-cyan">02.</span> Research Focus
              </h2>
              <p className="text-gray-300 mb-8">I am deeply passionate about advancing AI in a safe, ethical, and impactful direction:</p>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {['Adversarial ML', 'LLM Alignment', 'Trustworthy AI', 'RL & Vision'].map((tag) => (
                  <div key={tag} className="bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan px-4 py-3 rounded-xl text-center text-xs font-bold uppercase tracking-widest hover:bg-brand-cyan hover:text-white transition-all duration-300">
                    {tag}
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

function SidebarItem({ icon, text, link }: { icon: React.ReactNode, text: string, link: string }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-400 hover:text-brand-cyan transition-all duration-300 group">
      <span className="text-white group-hover:text-brand-cyan transform group-hover:scale-110 transition-transform">{icon}</span>
      <span className="text-sm font-medium">{text}</span>
    </a>
  );
}