// RESULTS & PUBLICATIONS PAGE

"use client";
import React, { useMemo, useState } from 'react';
import { 
  Cpu, ShieldCheck, Microscope, BookOpen, FileText, 
  ImageIcon, Github, Layers, Globe, Database, 
  FileDown, Quote, MessageSquare, X, Copy, Check 
} from "lucide-react"; 

import { publications } from "@/data/publication";
import Starfield from "@/components/Starfield";

const researchInterests = [
  {
    title: "Adversarial Machine Learning",
    desc: "Investigating vulnerabilities in LLMs and Reinforcement Learning agents against intentional perturbations.",
    icon: <ShieldCheck size={32} />,
    color: "rose"
  },
  {
    title: "Trustworthy & Safe AI",
    desc: "Building alignment protocols and safety guardrails to ensure AI systems behave reliably in edge cases.",
    icon: <Cpu size={32} />,
    color: "cyan"
  },
  {
    title: "NLP Robustness",
    desc: "Analyzing the linguistic limits of foundational models and improving their generalization in medical and legal domains.",
    icon: <Microscope size={32} />,
    color: "purple"
  }
];

const venueColorMap: Record<string, string> = {
  cyan: "border-cyan-500/50 text-cyan-400",
  purple: "border-purple-500/50 text-purple-400",
  rose: "border-rose-500/50 text-rose-400",
  green: "border-emerald-500/50 text-emerald-400",
};

const hexColorMap: Record<string, string> = {
  cyan: "#22d3ee",
  purple: "#a855f7",
  rose: "#f43f5e",
  green: "#10b981",
};

export default function ResearchPage() {
  const [selectedCite, setSelectedCite] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const handleCopy = async (text: string) => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const sortedPublications = useMemo(() => {
    return [...publications]
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .map(pub => ({
        ...pub,
        uiColor: pub.color || (pub.venue.toLowerCase().includes('arxiv') ? 'cyan' : 'purple')
      }));
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">
      <Starfield />

      <div className="max-w-ultra mx-auto px-6 pt-44 pb-40 relative z-10">
        
        <section className="mb-20 group/section">
          <div className="flex items-center gap-6 mb-16">
            <div className="p-4 bg-white/5 rounded-2xl border border-white/10 section-header-icon">
              <BookOpen size={40} className="text-brand-cyan" />
            </div>
            <h1 className="text-5xl font-black text-white tracking-tighter opacity-80 group-hover/section:opacity-100 transition-opacity">
              Research Interests
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {researchInterests.map((interest, i) => (
              <div key={i} className="interest-card group">
                <div className={`mb-8 rotate-icon-research w-fit ${
                   interest.color === 'rose' ? 'text-rose-400' : 
                   interest.color === 'cyan' ? 'text-cyan-400' : 'text-purple-400'
                }`}>
                  {interest.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 transition-all duration-500 tracking-tight">
                  {interest.title}
                </h3>
                <p className="text-gray-300 text-base leading-relaxed font-light">
                  {interest.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="group/section">
          <div className="flex items-center gap-6 mb-16">
            <div className="p-4 bg-white/5 rounded-2xl border border-white/10 section-header-icon">
              <FileText size={40} className="text-purple-400" />
            </div>
            <h2 className="text-5xl font-black text-white tracking-tighter opacity-80 group-hover/section:opacity-100 transition-opacity">
              Publications
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-12">
            {sortedPublications.map((pub) => (
              <div key={pub.id} className={`pub-card-v2 group/pub border-l-4 ${venueColorMap[pub.uiColor] || venueColorMap.cyan}`}>
                
                <div className="relative w-full md:w-80 h-56 md:h-auto overflow-hidden shrink-0 bg-black/40">
                  {pub.thumbnail ? (
                    <img src={pub.thumbnail} alt={pub.title} className="w-full h-full object-cover grayscale-100 group-hover/pub:grayscale-0 transition-all duration-700" />
                  ) : (
                    <div className="pub-placeholder-pattern h-full">
                       <Layers size={64} className="opacity-10 group-hover/pub:opacity-30 transition-opacity" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent md:bg-gradient-to-l" />
                </div>
                
                <div className="flex-1 p-8 flex flex-col justify-center">
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-white/30 font-mono text-[10px] tracking-[0.4em] uppercase">{pub.venue}</span>
                    <span className={`font-mono text-lg font-black ${venueColorMap[pub.uiColor]?.split(' ')[1]}`}>{pub.date.split('/')[0]}</span>
                  </div>

                  <h3 className="text-xl md:text-3xl font-black text-white group-hover/pub:text-white transition-colors mb-4 leading-tight tracking-tighter">
                    {pub.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm font-bold mb-10 tracking-wide">
                    {pub.authors.map((author, i) => (
                      <span key={i} className={author === "Piyush Pant" ? "text-white" : ""}>
                        {author}{i !== pub.authors.length - 1 ? ", " : ""}
                      </span>
                    ))}
                  </p>
                  
                  <div className="flex flex-wrap gap-4 mt-auto">
                    {pub.links.pdf && (
                      <a href={pub.links.pdf} target="_blank" rel="noopener noreferrer" style={{"--accent-color": hexColorMap[pub.uiColor]} as any} className="pub-action-btn">
                        <FileDown size={16} /> <span>PDF</span>
                      </a>
                    )}
                    {pub.links.arxiv && (
                      <a href={pub.links.arxiv} target="_blank" rel="noopener noreferrer" style={{"--accent-color": hexColorMap[pub.uiColor]} as any} className="pub-action-btn">
                        <FileText size={16} /> <span>arXiv</span>
                      </a>
                    )}
                    {pub.links.hf && (
                      <a href={pub.links.hf} target="_blank" rel="noopener noreferrer" style={{"--accent-color": hexColorMap[pub.uiColor]} as any} className="pub-action-btn">
                        <Database size={16} /> <span>HuggingFace</span>
                      </a>
                    )}
                    {pub.links.code && (
                      <a href={pub.links.code} target="_blank" rel="noopener noreferrer" style={{"--accent-color": hexColorMap[pub.uiColor]} as any} className="pub-action-btn">
                        <Github size={16} /> <span>Code</span>
                      </a>
                    )}
                    {pub.links.openreview && (
                      <a href={pub.links.openreview} target="_blank" rel="noopener noreferrer" style={{"--accent-color": hexColorMap[pub.uiColor]} as any} className="pub-action-btn">
                        <MessageSquare size={16} /> <span>OpenReview</span>
                      </a>
                    )}
                    {pub.links.cite && (
                      <button onClick={() => setSelectedCite(pub.links.cite || '')} style={{"--accent-color": hexColorMap[pub.uiColor]} as any} className="pub-action-btn cursor-pointer">
                        <Quote size={16} /> <span>Cite</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {selectedCite && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/90 backdrop-blur-xl">
          <div className="relative w-full max-w-3xl bg-[#080808] border border-white/10 rounded-[2.5rem] p-10 shadow-2xl overflow-hidden scale-105">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-white font-black italic uppercase tracking-[0.2em] text-base flex items-center gap-3">
                <Quote size={22} className="text-brand-cyan" /> BibTeX Citation
              </h3>
              <button onClick={() => setSelectedCite(null)} className="text-gray-500 hover:text-white transition-all hover:rotate-90">
                <X size={28} />
              </button>
            </div>
            
            <div className="relative group mt-4">
              <pre className="bg-black/80 border border-white/5 rounded-2xl p-8 text-gray-300 font-mono text-sm overflow-x-auto leading-relaxed min-h-[250px] pt-16">
                {selectedCite}
              </pre>
              <button 
                onClick={() => handleCopy(selectedCite)}
                className="absolute top-6 right-6 p-4 bg-white/5 hover:bg-brand-cyan/10 border border-white/10 hover:border-brand-cyan/30 rounded-2xl transition-all flex items-center gap-3 group/copy active:scale-95"
              >
                {copied ? <Check size={20} className="text-green-400" /> : <Copy size={20} className="text-brand-cyan group-hover/copy:scale-110 transition-transform" />}
                <span className="text-xs font-black text-white uppercase tracking-widest">{copied ? "Copied!" : "Copy"}</span>
              </button>
            </div>
            
            <p className="mt-8 text-[14px] font-mono text-gray-500 uppercase tracking-[0.4em] text-center">
              Thank you for citing us ❤️😊
            </p>
          </div>
        </div>
      )}
    </div>
  );
}