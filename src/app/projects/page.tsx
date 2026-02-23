// PROJECTS PAGE

"use client";
import React from 'react';
import { Github, Globe, Code2, Rocket, Layers } from "lucide-react";
import Starfield from "@/components/Starfield";
import { projects } from "@/data/projects";

const hexColorMap = {
  cyan: "#22d3ee",
  purple: "#a855f7",
  rose: "#f43f5e",
  green: "#10b981",
};

export default function ProjectsPage() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">
      <Starfield />

      <div className="max-w-ultra mx-auto px-6 pt-44 pb-40 relative z-10 ">
        
        {/* HEADER */}
        <div className="flex items-center gap-6 mb-20 group/section">
          <div className="p-4 bg-white/5 rounded-2xl border border-white/10 section-header-icon">
            {/* This SVG will now spin infinitely */}
            <Code2 size={40} className="text-brand-cyan" />
          </div>
          <h1 className="text-5xl font-black text-white tracking-tighter opacity-80 group-hover/section:opacity-100 transition-opacity">
            Projects
          </h1>
        </div>

        {/* PROJECTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="project-card group"
              style={{ "--project-accent": hexColorMap[project.color] } as any}
            >
              {/* Visual Header */}
              <div className="relative h-56 overflow-hidden bg-neutral-900">
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
                  />
                ) : (
                  <div className="project-placeholder h-full w-full flex items-center justify-center relative">
                    <Layers size={48} className="text-white/10 group-hover:scale-110 transition-transform duration-500" />
                    {/* Dynamic Gradient Overlay */}
                    <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity bg-gradient-to-br from-transparent via-transparent to-[var(--project-accent)]" />
                  </div>
                )}
                {/* Tag Overlay */}
                <div className="absolute top-4 right-4 flex flex-wrap justify-end gap-2 max-w-[80%]">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-black/60 backdrop-blur-md border border-white/10 text-[9px] font-black uppercase tracking-widest text-white/70">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-2xl font-black text-white mb-4 tracking-tighter group-hover:text-[var(--project-accent)] transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed font-light mb-8">
                  {project.description}
                </p>

                {/* Footer Buttons (Unified with Research style) */}
                <div className="flex gap-4 mt-auto">
                  <a 
                    href={project.links.github} 
                    className="project-btn"
                  >
                    <Github size={16} />
                    <span>Source</span>
                  </a>
                  {project.links.demo && (
                    <a 
                      href={project.links.demo} 
                      className="project-btn"
                    >
                      <Globe size={16} />
                      <span>Live</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}