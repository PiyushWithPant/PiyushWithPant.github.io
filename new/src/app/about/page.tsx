import { MapPin, School, Building, Mail, Github, GraduationCap, Linkedin } from "lucide-react";
import React from 'react';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        
        {/* Left Column (30%) - Sidebar */}
        <div className="md:col-span-4 lg:col-span-3">
          <div className="glass-card p-6 sticky top-24">
            <img
              src="/img1.jpg"
              alt="Piyush Pant"
              className="w-48 h-48 rounded-full mx-auto mb-4 object-cover border-2 border-cyan-500/30"
            />
            <h2 className="text-2xl font-bold text-center">Piyush Pant</h2>
            <p className="text-gray-400 text-center text-sm mb-6">AI Researcher | Developer</p>
            
            <div className="space-y-4 text-sm">
               <SidebarItem icon={<MapPin size={18}/>} text="Saarbrücken, Germany" link="https://g.co/kgs/VJt4AyM" />
               <SidebarItem icon={<School size={18}/>} text="Saarland University" link="https://www.uni-saarland.de" />
               <SidebarItem icon={<Building size={18}/>} text="CISPA Helmholtz Center" link="https://cispa.de" />
               <SidebarItem icon={<Mail size={18}/>} text="piyushpant15@gmail.com" link="mailto:piyushpant15@gmail.com" />
               <SidebarItem icon={<Github size={18}/>} text="PiyushWithPant" link="https://github.com/PiyushWithPant" />
            </div>

            <blockquote className="mt-8 border-l-2 border-yellow-200 pl-4 italic text-yellow-100 text-xs">
              "A true warrior doesn’t seek to dominate, but to discipline his own spirit..."
            </blockquote>
          </div>
        </div>

        {/* Right Column (70%) - Content */}
        <div className="md:col-span-8 lg:col-span-9 bg-[#D1B2FF] text-[#171724] rounded-3xl p-8 md:p-12">
          <section className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">🧑‍💻 Who I Am</h2>
            <p className="mb-6 leading-relaxed">
              I come from a small Himalayan village near the <span className="font-bold underline">Panchachuli peaks</span>. 
              My journey is defined by a leap of faith, leaving my roots to expand my technical horizons.
            </p>

            <div className="h-[1px] bg-[#171724]/20 my-8" />

            <h2 className="text-3xl font-bold mb-6">📚 Where I Am Now</h2>
            <ul className="list-disc ml-6 space-y-4 font-medium">
              <li>M.Sc. Computer Science at <strong>Universität des Saarlandes</strong></li>
              <li>Master's Thesis under <strong>Prof. Dr. Xiao Zhang</strong> at CISPA</li>
            </ul>

            <div className="h-[1px] bg-[#171724]/20 my-8" />

            <h2 className="text-3xl font-bold mb-6">🧠 Research Focus</h2>
            <p className="mb-4">I am deeply passionate about Advancing AI in a safe, ethical, and impactful direction:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {['Adversarial ML', 'LLM Alignment', 'Trustworthy AI', 'RL & Vision'].map((tag) => (
                <div key={tag} className="bg-[#171724] text-white px-4 py-2 rounded-xl text-center text-sm font-bold">
                  {tag}
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

// Helper component for Sidebar links
function SidebarItem({ icon, text, link }: { icon: React.ReactNode, text: string, link: string }) {
  return (
    <a href={link} target="_blank" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
      <span className="text-cyan-400">{icon}</span>
      <span>{text}</span>
    </a>
  );
}