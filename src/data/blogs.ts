export interface BlogPost {
    id: string;
    slug?: string; // We will use this to find the .md file (e.g., "whispers-of-the-cosmos")
    title: string;
    date: string;
    excerpt: string;
    color: 'cyan' | 'purple' | 'rose' | 'amber' | 'emerald' | 'blue';
    pdfUrl?: string; 
}
  
export const blogPosts: BlogPost[] = [
  {
    id: "rag-deeplearning-notes",
    title: "My Handwritten RAG Notes",
    excerpt: "A comprehensive compilation of my handwritten notes on Retrieval-Augmented Generation (RAG).",
    date: "2026-05-18",
    color: "cyan",
    pdfUrl: "/blogs/rag-notes-deeplearning-ai-piyush-pant.pdf" 
  },
  {
    id: "space-reflections-1",
    slug: "stars-will-disappear-forever", // Must match the .md filename exactly (without the .md)
    title: "The Stars Will Disappear Forever",
    date: "2026-07-27",
    excerpt: "Our view of the universe has an expiration date.",
    color: "purple"
  },
  {
    id: "superpower-1",
    slug: "the-superpower-id-ask-for", // Must match the .md filename exactly (without the .md)
    title: "The Superpower I'd Ask For",
    date: "2026-09-01",
    excerpt: "Before you read this, ask yourself the same question: what superpower would you ask for?",
    color: "rose"
  }
];