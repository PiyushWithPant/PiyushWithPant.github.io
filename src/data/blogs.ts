export interface BlogPost {
    id: string;
    slug?: string; // Optional: Only needed for markdown blogs
    title: string;
    date: string;
    excerpt: string;
    color: 'cyan' | 'purple' | 'rose' | 'amber' | 'emerald' | 'blue';
    content?: string; // Optional: Only needed for markdown blogs
    pdfUrl?: string; // New Optional Property: Route link to public/pdfs/
}
  
export const blogPosts: BlogPost[] = [
  {
    id: "rag-deeplearning-notes",
    title: "My Handwritten RAG Notes",
    excerpt: "A comprehensive compilation of my handwritten notes on Retrieval-Augmented Generation (RAG) from RAG course by DeepLearning.AI.",
    date: "2026-05-18",
    color: "cyan",
    pdfUrl: "/blogs/rag-notes-deeplearning-ai-piyush-pant.pdf" // Put this PDF file in your public/pdfs/ directory
  },
  // {
  //   id: "blog-1",
  //   slug: "adversarial-robustness-foundations",
  //   title: "An Analysis of Adversarial Robustness in LLMs",
  //   date: "2026-01-12",
  //   excerpt: "Diving into modern techniques for analyzing foundational model security boundaries and distribution shifts.",
  //   color: "amber",
  //   content: "Full markdown content goes here..."
  // }
];