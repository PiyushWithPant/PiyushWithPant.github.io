export interface BlogPost {
    id: string;
    slug: string; // The URL path
    title: string;
    date: string;
    excerpt: string;
    color: 'cyan' | 'purple' | 'rose' | 'amber' | 'emerald' | 'blue';
    content: string; // Markdown string
  }
  
  export const blogPosts: BlogPost[] = [
    {
      id: "blog-1",
      slug: "philosophy-of-ai-alignment",
      title: "The Philosophy of AI Alignment",
      date: "2026-01-12",
      excerpt: "Exploring how ancient Kumaon wisdom and Himalayan stoicism can inform modern AI safety guardrails...",
      color: "amber",
      content: "Full markdown content goes here..."
    },
    {
      id: "blog-2",
      slug: "judo-and-neural-nets",
      title: "Judo and Neural Networks",
      date: "2026-02-05",
      excerpt: "What off-balancing an opponent in Randori taught me about gradient descent and optimization stability.",
      color: "blue",
      content: "Full markdown content goes here..."
    }
  ];