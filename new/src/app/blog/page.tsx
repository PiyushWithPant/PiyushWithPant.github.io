export default function BlogPage() {
    const posts = [
      { title: "The Philosophy of AI Alignment", date: "Jan 12, 2026", excerpt: "Exploring how ancient Kumaon wisdom can inform modern AI safety..." },
    ];
  
    return (
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-12">Logs & Reflections</h1>
        <div className="space-y-12">
          {posts.map((post) => (
            <article key={post.title} className="border-b border-white/5 pb-8 group cursor-pointer">
              <p className="text-sm text-cyan-500 font-mono mb-2">{post.date}</p>
              <h2 className="text-2xl font-bold group-hover:text-cyan-400 transition-colors mb-3">{post.title}</h2>
              <p className="text-gray-400 leading-relaxed">{post.excerpt}</p>
            </article>
          ))}
        </div>
      </div>
    );
  }