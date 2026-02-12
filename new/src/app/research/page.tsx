"use client";
import { publications } from "@/data/publication";
import { sortPublications } from "@/lib/utils";
import { ExternalLink, FileText, Quote } from "lucide-react";
import React from 'react';

export default function ResearchPage() {
  const sortedPubs = sortPublications(publications);

  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-2">Research & Publications</h1>
      <p className="text-gray-400 mb-12">A chronological list of my research work and pre-prints.</p>

      <div className="space-y-8">
        {sortedPubs.map((pub) => (
          <article key={pub.id} className="glass-card p-6 hover:border-cyan-500/50 transition-all group">
            <div className="flex flex-col md:flex-row gap-6">
              {/* Thumbnail Placeholder */}
              <div className="w-full md:w-48 h-32 bg-white/5 rounded-lg flex items-center justify-center border border-white/5 group-hover:bg-cyan-500/5 transition-colors">
                <FileText className="text-gray-600 group-hover:text-cyan-400" size={40} />
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold leading-tight group-hover:text-cyan-400 transition-colors">
                    {pub.title}
                  </h3>
                  <span className="text-sm font-mono text-gray-500">{new Date(pub.date).getFullYear()}</span>
                </div>
                
                <p className="text-gray-300 text-sm mb-2">
                  {pub.authors.map((author, i) => (
                    <span key={author} className={author === "Piyush Pant" ? "font-bold text-white" : ""}>
                      {author}{i < pub.authors.length - 1 ? ", " : ""}
                    </span>
                  ))}
                </p>
                
                <p className="text-cyan-500/80 text-sm font-medium italic mb-4">{pub.venue}</p>

                <div className="flex gap-4">
                  <a href={pub.link} target="_blank" className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider hover:text-cyan-400 transition-colors">
                    <ExternalLink size={14} /> Paper
                  </a>
                  <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider hover:text-cyan-400 transition-colors">
                    <Quote size={14} /> Cite
                  </button>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}