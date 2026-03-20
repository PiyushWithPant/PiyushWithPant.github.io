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
      slug: "None",
      title: "None",
      date: "2026-01-12",
      excerpt: "None",
      color: "amber",
      content: "Full markdown content goes here..."
    },
    {
      id: "blog-2",
      slug: "None",
      title: "None",
      date: "2026-02-05",
      excerpt: "None",
      color: "blue",
      content: "Full markdown content goes here..."
    }
  ];