import React from 'react';
import { notFound } from 'next/navigation';
import { Calendar, ArrowLeft, User } from 'lucide-react';
import Link from 'next/link';
import Starfield from '@/components/Starfield';
import { blogPosts } from '@/data/blogs';
import ReactMarkdown from 'react-markdown';
import fs from 'fs';
import path from 'path';

// 1. GITHUB PAGES REQUIREMENT
export function generateStaticParams() {
  return blogPosts
    .filter((post) => post.slug) 
    .map((post) => ({
      slug: post.slug,
    }));
}

// 2. SEO METADATA
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = blogPosts.find((p) => p.slug === resolvedParams.slug);
  if (!post) return { title: 'Post Not Found' };

  return {
    title: `${post.title} | Piyush Pant`,
    description: post.excerpt,
  };
}

// 3. THE PAGE UI
export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = blogPosts.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    notFound();
  }

  let markdownContent = '';
  try {
    const filePath = path.join(process.cwd(), 'src', 'content', 'blogs', `${resolvedParams.slug}.md`);
    markdownContent = fs.readFileSync(filePath, 'utf8');
  } catch (error) {
    markdownContent = `Error: Could not load the blog content. Make sure ${resolvedParams.slug}.md exists in src/content/blogs/`;
  }

  // Map the color prop to an actual hex code for glowing effects
  const accentHex = 
    post.color === 'purple' ? '#a855f7' :
    post.color === 'rose' ? '#f43f5e' :
    post.color === 'amber' ? '#fbbf24' :
    post.color === 'emerald' ? '#10b981' :
    post.color === 'blue' ? '#3b82f6' : '#22d3ee'; // cyan default

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden text-white selection:bg-[var(--accent)]/30"
         style={{ '--accent': accentHex } as React.CSSProperties}>
      
      {/* Background stays persistent and is now the direct canvas for the text */}
      <Starfield />

      {/* Main container: Kept wide, but centered for optimal readability */}
      <main className="max-w-6xl mx-auto px-6 pt-32 pb-32 relative z-10 w-full">
        
        {/* Back Button */}
        <div className="w-full flex justify-start mb-12">
          <Link 
            href="/blogs" 
            className="inline-flex items-center gap-2 text-gray-400 hover:text-[var(--accent)] transition-all font-mono text-[10px] uppercase tracking-[0.2em] no-underline group hover:[text-shadow:0_0_15px_rgba(255,255,255,0.5)]"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            Back to Logs
          </Link>
        </div>

        {/* Removed all glassmorphism classes. The article is now completely transparent. */}
        <article className="relative overflow-hidden group/article pb-10">
          
          {/* Header Section */}
          <header className="mb-16 border-b border-white/10 pb-12">
            
            {/* Meta tags: Date and Author (with added glow) */}
            <div className="flex flex-wrap items-center gap-4 mb-8 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase">
              <span className="flex items-center gap-2 text-[var(--accent)] drop-shadow-[0_0_10px_var(--accent)]">
                <Calendar size={20} /> 
                {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </span>
              <span className="text-gray-600">|</span>
              <span className="flex items-center gap-2 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">
                <User size={20} />
                Piyush Pant
              </span>
            </div>
            
            {/* Title: Intensified the glow since there is no dark background box anymore */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[1.1] mb-8 text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]">
              {post.title}
            </h1>
            
            {/* Excerpt */}
            <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed italic border-l-2 pl-6 border-[var(--accent)] drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
              {post.excerpt}
            </p>
          </header>

          {/* 
            Markdown Content 
          */}
          <div className="text-white/90 font-light leading-loose text-lg md:text-xl [text-shadow:0_0_15px_rgba(255,255,255,0.5)]
                          
                          [&>h2]:text-white [&>h2]:text-3xl [&>h2]:font-black [&>h2]:mt-20 [&>h2]:mb-8 [&>h2]:tracking-tight [&>h2]:drop-shadow-[0_0_3px_rgba(255,255,255,0.5)]
                          [&>h3]:text-white [&>h3]:text-2xl [&>h3]:font-bold [&>h3]:mt-16 [&>h3]:mb-6 [&>h3]:drop-shadow-[0_0_3px_rgba(255,255,255,0.4)]
                          
                          [&>p]:mb-8 [&>p]:last:mb-0
                          
                          [&>ul]:list-none [&>ul]:pl-0 [&>ul]:my-10 
                          [&>ul>li]:relative [&>ul>li]:pl-8 [&>ul>li]:mb-4 
                          [&>ul>li::before]:content-[''] [&>ul>li::before]:absolute [&>ul>li::before]:left-0 [&>ul>li::before]:top-[0.8rem] [&>ul>li::before]:h-2 [&>ul>li::before]:w-2 [&>ul>li::before]:rounded-full [&>ul>li::before]:bg-[var(--accent)] [&>ul>li::before]:shadow-[0_0_10px_var(--accent)]
                          
                          [&>ol]:list-decimal [&>ol]:pl-8 [&>ol]:my-10 [&>ol>li]:mb-4 [&>ol>li]:marker:text-[var(--accent)] [&>ol>li]:marker:font-bold
                          
                          [&>blockquote]:border-l-4 [&>blockquote]:border-[var(--accent)] [&>blockquote]:pl-8 [&>blockquote]:py-2 [&>blockquote]:my-12 [&>blockquote]:text-gray-200 [&>blockquote]:italic [&>blockquote]:bg-white/[0.03] [&>blockquote]:rounded-r-2xl [&>blockquote]:shadow-[inset_30px_0_30px_-30px_var(--accent)]
                          
                          [&>strong]:text-white [&>strong]:font-bold [&>strong]:drop-shadow-[0_0_10px_rgba(255,255,255,0.6)]
                          
                          [&_a]:text-[var(--accent)] [&_a]:underline [&_a]:underline-offset-4 [&_a]:decoration-[var(--accent)]/40 hover:[&_a]:decoration-[var(--accent)] hover:[&_a]:drop-shadow-[0_0_12px_var(--accent)] [&_a]:transition-all">
            <ReactMarkdown>
              {markdownContent}
            </ReactMarkdown>
          </div>
          
        </article>
      </main>
    </div>
  );
}