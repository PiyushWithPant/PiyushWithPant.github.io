// SEARCH RESULTS PAGE

"use client";
import React, { useMemo, Suspense } from 'react'; // Added Suspense
import { useSearchParams } from 'next/navigation';
import { publications } from "@/data/publication";
import { projects } from "@/data/projects";
import { blogPosts } from "@/data/blogs";
import Starfield from "@/components/Starfield";
import { Search, ArrowRight, FileText, Code2, PenTool } from "lucide-react";
import Link from "next/link";

// 1. THIS IS YOUR ORIGINAL LOGIC (Renamed to SearchResults)
function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q')?.toLowerCase() || "";

  const results = useMemo(() => {
    if (!query) return { publications: [], projects: [], blogs: [] };
    
    return {
      publications: (publications || []).filter(p => 
        p.title?.toLowerCase().includes(query) || p.venue?.toLowerCase().includes(query)
      ),
      projects: (projects || []).filter(p => 
        p.title?.toLowerCase().includes(query) || p.description?.toLowerCase().includes(query)
      ),
      blogs: (blogPosts || []).filter(p => 
        p.title?.toLowerCase().includes(query) || p.excerpt?.toLowerCase().includes(query)
      )
    };
  }, [query]);

  const totalResults = results.publications.length + results.projects.length + results.blogs.length;

  return (
    <main className="relative min-h-screen w-full bg-black overflow-x-hidden">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Starfield />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 pt-32 md:pt-44 pb-20">
        <div className="mb-12">
          <h1 className="text-3xl md:text-6xl font-black text-white italic uppercase tracking-tighter break-words">
            Query: <span className="text-brand-cyan">"{query}"</span>
          </h1>
          <p className="text-gray-500 font-mono text-[10px] mt-4 uppercase tracking-[0.3em]">
            {totalResults} Match{totalResults === 1 ? '' : 'es'} located in repository
          </p>
        </div>

        <div className="space-y-12">
          {/* Research Results */}
          {results.publications.length > 0 && (
            <div>
              <h2 className="text-brand-cyan font-black text-xs uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                <FileText size={16} /> Research Papers
              </h2>
              <div className="flex flex-col gap-3">
                {results.publications.map((item, idx) => (
                  <SearchResultCard key={`pub-${idx}`} item={item} href="/research" color="cyan" />
                ))}
              </div>
            </div>
          )}

          {/* Project Results */}
          {results.projects.length > 0 && (
            <div>
              <h2 className="text-purple-400 font-black text-xs uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                <Code2 size={16} /> Engineering Projects
              </h2>
              <div className="flex flex-col gap-3">
                {results.projects.map((item, idx) => (
                  <SearchResultCard key={`proj-${idx}`} item={item} href="/projects" color="purple" />
                ))}
              </div>
            </div>
          )}

          {/* Blog Results */}
          {results.blogs.length > 0 && (
            <div>
              <h2 className="text-rose-400 font-black text-xs uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                <PenTool size={16} /> Logs & Reflections
              </h2>
              <div className="flex flex-col gap-3">
                {results.blogs.map((item, idx) => (
                  <SearchResultCard key={`blog-${idx}`} item={item} href="/blog" color="rose" />
                ))}
              </div>
            </div>
          )}

          {/* No Results View */}
          {totalResults === 0 && (
            <div className="py-20 text-center border border-white/5 bg-white/[0.02] rounded-3xl px-4">
              <Search size={40} className="mx-auto text-gray-800 mb-4" />
              <p className="text-gray-500 font-bold uppercase tracking-widest text-[10px]">
                Access Denied: No matching data found
              </p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

// 2. THIS IS THE EXPORTED PAGE (Wraps the content in Suspense)
export default function SearchResultsPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-black flex items-center justify-center">
        <p className="text-brand-cyan font-mono animate-pulse">INITIALIZING SEARCH...</p>
      </div>
    }>
      <SearchResults />
    </Suspense>
  );
}

function SearchResultCard({ item, href, color }: { item: any, href: string, color: string }) {
  const accentClass = color === "cyan" ? "group-hover:text-brand-cyan" : color === "purple" ? "group-hover:text-purple-400" : "group-hover:text-rose-400";
  const borderClass = color === "cyan" ? "group-hover:border-brand-cyan/30" : color === "purple" ? "group-hover:border-purple-400/30" : "group-hover:border-rose-400/30";

  return (
    <Link href={href} className={`flex items-center justify-between p-4 md:p-6 bg-white/[0.03] border border-white/10 rounded-2xl transition-all duration-300 no-underline group ${borderClass}`}>
      <div className="flex-1 pr-4 min-w-0"> {/* Added min-w-0 to allow truncation to work in flex */}
        <h3 className={`text-base md:text-xl font-bold italic uppercase tracking-tight transition-colors truncate ${accentClass}`}>
          {item.title || "Untitled Entry"}
        </h3>
        <p className="text-gray-500 text-[10px] font-mono mt-1 uppercase truncate w-full">
          {item.venue || item.description || item.excerpt || "View Details"}
        </p>
      </div>
      <ArrowRight size={18} className={`text-gray-700 transition-all shrink-0 transform group-hover:translate-x-1 ${accentClass}`} />
    </Link>
  );
}