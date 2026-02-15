"use client";
import React, { useEffect, useRef, useState } from 'react';
import { FaMapMarkerAlt, FaUniversity, FaBuilding, FaEnvelope, FaGithub } from "react-icons/fa";
import { Shield, Zap, Target } from "lucide-react"; 
import Starfield from "@/components/Starfield";

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [viewCount, setViewCount] = useState(0);

  // Visitor Counter Logic (Simulated or via LocalStorage/API)
  useEffect(() => {
    const count = localStorage.getItem("page_views") || "1248";
    const newCount = parseInt(count) + 1;
    localStorage.setItem("page_views", newCount.toString());
    setViewCount(newCount);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const x = (e.clientX - window.innerWidth / 2) / 20;
      const y = (e.clientY - window.innerHeight / 2) / 20;
      containerRef.current.style.setProperty("--mouse-x", `${x}`);
      containerRef.current.style.setProperty("--mouse-y", `${y}`);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="relative min-h-screen w-full overflow-x-hidden selection:bg-white/20">
      <Starfield />

      <div className="container mx-auto px-6 pt-40 pb-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Sidebar */}
          <div className="lg:col-span-4 xl:col-span-3">
            <div className="sticky top-40 flex flex-col items-center lg:items-start space-y-8">
              
              <div className="relative group">
                <img
                  src="/img1.jpg"
                  alt="Piyush Pant"
                  className="w-64 md:w-72 ellipse-shape border-2 border-white/10 group-hover:border-white/40 transition-all duration-700 shadow-2xl"
                />
              </div>

              <div className="space-y-6 text-center lg:text-left w-full">
                <div>
                  <h2 className="text-4xl font-black text-white tracking-tighter">Piyush Pant</h2>
                  <p className="text-white font-mono text-xs mt-1 tracking-[0.3em] uppercase opacity-60">AI Researcher // DE</p>
                </div>
                
                <div className="space-y-4 inline-block lg:block">
                   <SidebarMetadata icon={<FaMapMarkerAlt />} text="Saarbrücken, Germany" />
                   <SidebarMetadata icon={<FaUniversity />} text="Saarland University" />
                   <SidebarMetadata icon={<FaBuilding />} text="CISPA Helmholtz Center" />
                   <SidebarLink icon={<FaEnvelope />} text="Email Me" link="mailto:piyushpant15@gmail.com" />
                   <SidebarLink icon={<FaGithub />} text="GitHub Profile" link="https://github.com/PiyushWithPant" />
                </div>

                
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-8 xl:col-span-9 space-y-10">
            <section className="obsidian-card p-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-[2px] w-8 bg-white shadow-[0_0_10px_#fff]"></div>
                <h3 className="text-white font-mono text-xs tracking-[0.4em] uppercase opacity-70">System.Identity</h3>
              </div>
              <h2 className="text-3xl font-bold text-white mb-6 tracking-tight">Computational Journey</h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                Hailing from the Himalayas near the <span className="text-white font-semibold italic">Panchachuli peaks</span>, 
                I explore the boundaries of <span className="text-white font-medium">Trustworthy AI</span>. 
                My research focuses on ensuring Large Language Models remain robust against adversarial exploitation while maintaining ethical alignment.
              </p>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ObsidianNode 
                icon={<Shield className="text-white" size={24} />} 
                title="Adversarial ML" 
                desc="Securing neural architectures against malicious perturbation." 
              />
              <ObsidianNode 
                icon={<Zap className="text-white" size={24} />} 
                title="LLM Alignment" 
                desc="Mathematically directing generative agents toward safety." 
              />
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

function SidebarMetadata({ icon, text }: { icon: React.ReactNode, text: string }) {
  return (
    <div className="flex items-center gap-4 text-gray-500 hover:text-white transition-all duration-300 py-1 cursor-default group">
      <span className="text-white/40 group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all">{icon}</span>
      <span className="text-sm font-medium tracking-tight group-hover:drop-shadow-[0_0_5px_rgba(255,255,255,0.5)] transition-all">{text}</span>
    </div>
  );
}

function SidebarLink({ icon, text, link }: { icon: React.ReactNode, text: string, link: string }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-400 hover:text-white transition-all duration-300 group py-1 no-underline">
      <span className="text-white/40 group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all">{icon}</span>
      <span className="text-sm font-medium no-underline group-hover:drop-shadow-[0_0_5px_rgba(255,255,255,0.5)] transition-all">{text}</span>
    </a>
  );
}

function ObsidianNode({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="obsidian-card p-8 group transition-all duration-500 hover:bg-white/5">
      <div className="mb-4 opacity-50 group-hover:opacity-100 group-hover:drop-shadow-[0_0_8px_white] transition-all">{icon}</div>
      <h4 className="text-white font-bold text-lg mb-2">{title}</h4>
      <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">{desc}</p>
    </div>
  );
}