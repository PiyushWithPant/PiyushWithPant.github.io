// ABOUT PAGE

"use client";
import React, { useEffect, useRef, useState } from 'react';
import { 
  FaMapMarkerAlt, FaEnvelope, FaGithub, FaLinkedin, 
  FaGraduationCap, FaWhatsapp, FaUniversity, FaBuilding 
} from "react-icons/fa";
import { SiOrcid } from "react-icons/si";
import { ChevronRight, Sparkles, Zap, Activity, Fingerprint, Brain } from "lucide-react"; 
import Starfield from "@/components/Starfield";
import Timeline from "@/components/Timeline";

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const nav = document.querySelector('nav');
      if (nav) {
        if (window.scrollY > 50) nav.classList.add('nav-scrolled');
        else nav.classList.remove('nav-scrolled');
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const x = (e.clientX - window.innerWidth / 2) / 25;
      const y = (e.clientY - window.innerHeight / 2) / 25;
      containerRef.current.style.setProperty("--mouse-x", `${x}`);
      containerRef.current.style.setProperty("--mouse-y", `${y}`);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative min-h-screen w-full overflow-x-hidden">
      <Starfield />

      <div className="max-w-ultra mx-auto px-6 pt-44 pb-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-24">
          
          {/* Sidebar */}
          <div className="lg:col-span-4 xl:col-span-3">
            <div className="sticky top-32 space-y-12 flex flex-col items-center">
              <div className="flex flex-col items-center space-y-6 group">
                <img src="/img1.jpg" alt="Piyush Pant" className="w-64 h-auto ellipse-shape" />
                <div className="text-center">
                  <h2 className="text-4xl font-bold tracking-tighter text-white uppercase leading-tight">Piyush Pant</h2>
                  <p className="tagline-text font-mono text-[11px] mt-2">
                    AI Researcher | Developer | Martial Artist
                  </p>
                </div>
              </div>

              {/* LINKS */}
              <div className="flex flex-col gap-4 pl-2 w-full max-w-[280px]">
                 <SidebarLink icon={<FaMapMarkerAlt />} text="Saarbrücken, Germany" link="https://g.co/kgs/VJt4AyM" />
                 <SidebarLink icon={<FaUniversity />} text="Universität des Saarlandes" link="https://www.uni-saarland.de/en/home.html" />
                 <SidebarLink icon={<FaBuilding />} text="CISPA Helmholtz Center" link="https://cispa.de/en" />
                 <SidebarLink icon={<FaEnvelope />} text="piyushpant15@gmail.com" link="mailto:piyushpant15@gmail.com" />
                 <SidebarLink icon={<FaGithub />} text="PiyushWithPant | GitHub" link="https://github.com/PiyushWithPant" />
                 <SidebarLink icon={<FaLinkedin />} text="LinkedIn Profile" link="https://linkedin.com/in/piyush-pant" />
                 <SidebarLink icon={<FaGraduationCap />} text="Google Scholar" link="https://scholar.google.com/citations?user=I3-AR5MAAAAJ&hl=en" />
                 <SidebarLink icon={<SiOrcid />} text="ORCID iD" link="https://orcid.org/0000-0003-0991-9454" />
                 <SidebarLink icon={<FaWhatsapp />} text="Whatsapp" link="https://wa.me/919145728659" />
              </div>

              
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-8 xl:col-span-9 space-y-20">
            
            {/* Section: Who I Am */}
            <section className="group">
              <div className="flex items-center gap-6 mb-10">
                <div className="p-3 rounded-full bg-white/5 rotate-icon">
                  <Fingerprint size={32} className="text-cyan-400" />
                </div>
                <h2 className="text-4xl font-black text-white tracking-tighter uppercase italic opacity-40 group-hover:opacity-100 transition-opacity">Who I Am</h2>
              </div>
              <div className="narrative-section main-text-highlight">
                <p className="mb-6">
                    I come from a small Himalayan village near the <a href="https://g.co/kgs/NukWjwa" target="_blank" className="text-white underline decoration-white/20 underline-offset-4 hover:decoration-white transition-all"><span className="text-brand-cyan">Panchachuli peaks</span></a>  in the <a href="https://www.google.com/search?q=uttarakhand" target="_blank" className="text-white underline decoration-white/20 underline-offset-4 hover:decoration-white transition-all"><span className="text-brand-cyan">Kumaon region of Uttarakhand, India </span></a>. My journey is defined by a leap of faith, leaving my roots to seek new challenges and expand my horizons in the pursuit of professional excellence.
                </p>
                
              </div>
            </section>



            {/* Section: Journey */}
            <section className="group">
              <div className="flex items-center gap-6 mb-16">
                <div className="p-3 rounded-full bg-white/5 rotate-icon">
                  <Activity size={32} className="text-purple-400" />
                </div>
                <h2 className="text-4xl font-black text-white tracking-tighter uppercase italic opacity-40 group-hover:opacity-100 transition-opacity">My Journey</h2>
              </div>
              <div className="pl-4">
                <Timeline />
              </div>
            </section>

            {/* Section: What I Work On */}
          <section className="group">
              <div className="flex items-center gap-6 mb-10">
                <div className="p-3 rounded-full bg-white/5 rotate-icon">
                  <Brain size={32} className="text-emerald-400" />
                </div>
                <h2 className="text-4xl font-black text-white tracking-tighter uppercase italic opacity-40 group-hover:opacity-100 transition-opacity">What I Work On</h2>
              </div>
              <div className="narrative-section main-text-highlight">
                <p className="mb-8">
                    I am deeply passionate about advancing AI in a safe, ethical, and impactful direction. My research interests lie at the intersection of language, learning, and robustness. Lately, I've been drawn to the challenges of building <span className="text-emerald-400 font-medium">Trustworthy AI</span> and <span className="text-emerald-400 font-medium">Adversarial Machine Learning</span>, especially in the context of Large Language Models and Reinforcement Learning.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <WorkFeature text="Exploring the intersection of NLP, RL, and Computer Vision" />
                    <WorkFeature text="Building safe, reliable, and trustworthy AI systems" />
                    <WorkFeature text="Studying adversarial attacks and defenses in language models" />
                    <WorkFeature text="Improving model alignment, robustness, and generalization" />
                </div>
                <p className="mt-8 italic text-lg opacity-80">
                    "I aspire to pursue a PhD and contribute to meaningful research in AI safety and alignment. I enjoy working in collaborative, research-driven environments."
                </p>
              </div>
            </section>

            {/* Section 4: Beyond the Code */}
            <section className="group pb-40">
              {/* Header with Rotating Icon */}
              <div className="flex items-center gap-6 mb-12">
                <div className="p-3 rounded-full bg-white/5 rotate-icon">
                  <Zap size={32} className="text-rose-400" />
                </div>
                <h2 className="text-5xl font-black text-white tracking-tighter uppercase italic opacity-40 group-hover:opacity-100 transition-opacity">
                  Beyond the Code
                </h2>
              </div>
              
              {/* Single Column Narrative Flow */}
              <div className="main-text-highlight pl-8  space-y-12 max-w-5xl">
                <div className="space-y-10">
                    <p className="flex items-start gap-6 group-hover:text-white transition-all duration-500">
                      <ChevronRight size={28} className="text-rose-400 mt-1 shrink-0" />
                      <span>
                        
                        I love Martial Arts because of Goku ❤️. I have trained in various arts of combat in the last few years at my University and Clubs like <span className="text-rose-400">Judo, BJJ, Boxing, Kickboxing and Wrestling</span>. Currently, I am focusing on my Harai Goshi 🥋 :-)
                      </span>
                    </p>

                    <p className="flex items-start gap-6 group-hover:text-white transition-all duration-500">
                      <ChevronRight size={28} className="text-rose-400 mt-1 shrink-0" />
                      <span>
                        
                        I often find myself dwelling in the domain of Spirituality. I enjoy reading and discussing about the ancient wisdom of the <span className="text-rose-400 italic">Vedas, Yoga, and Bhagavad Gita</span>. 
                      </span>
                    </p>
                    
                    
                 </div>

                 

                 {/* QUOTE */}
                 
                  <section className="pt-20 pb-40 flex justify-center lg:justify-start">
                    <div className="group cursor-default max-w-3xl">
                      <p className="text-rose-400 text-lg font-bold italic leading-relaxed text-center lg:text-left tracking-wide group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] transition-all duration-500">
                        
                        
                        "Even the gods desire to dominate others. Then why should I stop Shivji? 
                        <br /><br />
                        Because a true warrior doesn’t seek to dominate, but to discipline his own spirit. 
                        He knows nothing about surpassing others, only how to outdo himself. 
                        As he knows that -
                        A strong man stands above and conquers all."
                       
                      </p>
                      
                      {/* Subtle animated underline that grows from center */}
                      <div className="mt-4 h-px w-0 bg-gradient-to-r from-transparent via-rose-500 to-transparent group-hover:w-full transition-all duration-1000 opacity-30"></div>
                    </div>
                  </section>


              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
}

function SidebarLink({ icon, text, link }: { icon: React.ReactNode, text: string, link: string }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-500 hover:text-white transition-all duration-300 group no-underline">
      <span className="text-white/20 group-hover:text-white group-hover:drop-shadow-[0_0_12px_white] transition-all text-xl">{icon}</span>
      <span className="text-[11px] font-bold tracking-widest uppercase no-underline">{text}</span>
    </a>
  );
}

function WorkFeature({ text }: { text: string }) {
    return (
        <div className="flex items-center gap-3 bg-white/[0.03] p-4 rounded-xl border border-white/5 hover:border-emerald-400/30 transition-all">
            <Sparkles size={16} className="text-emerald-400 shrink-0" />
            <span className="text-base font-light">{text}</span>
        </div>
    )
}