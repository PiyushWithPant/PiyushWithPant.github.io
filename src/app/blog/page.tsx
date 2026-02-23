// BLOG PAGE

"use client";
import React, { useMemo } from 'react';
import { Bookmark, Calendar, ArrowRight, PenTool } from "lucide-react";
import Starfield from "@/components/Starfield";
import { blogPosts } from "@/data/blogs";
import Link from 'next/link';

const hexColorMap = {
  cyan: "#22d3ee",
  purple: "#a855f7",
  rose: "#f43f5e",
  amber: "#fbbf24",
  emerald: "#10b981",
  blue: "#3b82f6"
};

export default function BlogPage() {
  const sortedPosts = useMemo(() => {
    return [...blogPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">
      <Starfield />

      <div className="max-w-ultra mx-auto px-6 pt-44 pb-40 relative z-10">
        
        {/* HEADER */}
        <div className="flex items-center gap-6 mb-20 group/section">
          <div className="p-4 bg-white/5 rounded-2xl border border-white/10 section-header-icon">
            <PenTool size={40} className="text-brand-cyan" />
          </div>
          <h1 className="text-5xl font-black text-white tracking-tighter opacity-80 group-hover/section:opacity-100 transition-opacity">
            Logs & Reflections
          </h1>
        </div>

        {/* BLOG GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {sortedPosts.map((post) => (
            <Link 
              href={`/blogs/${post.slug}`} 
              key={post.id} 
              className="blog-card group"
              style={{ "--blog-accent": hexColorMap[post.color] } as any}
            >
              {/* Gradient Header */}
              <div className="h-40 relative overflow-hidden">
                <div className="blog-gradient-bg absolute inset-0 transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                <Bookmark className="absolute top-6 left-6 text-white/50 group-hover:text-white transition-colors" size={20} />
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-4 text-[10px] font-bold tracking-[0.2em] text-[var(--blog-accent)] uppercase">
                  <Calendar size={12} /> {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                </div>
                
                <h3 className="text-2xl font-black text-white mb-4 uppercase italic tracking-tighter leading-tight group-hover:text-white transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed font-light mb-10 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="mt-auto">
                   <div className="blog-read-btn">
                      <span>Read Entry</span>
                      <ArrowRight size={16} />
                   </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}