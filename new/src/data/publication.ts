export interface Publication {
    id: string;
    title: string;
    authors: string[];
    venue: string;
    date: string; // YYYY-MM-DD
    link: string;
    thumbnail?: string;
    tags: string[];
  }
  
  export const publications: Publication[] = [
    {
      id: "pub-1",
      title: "Advancing Robustness in Large Language Models",
      authors: ["Piyush Pant", "Xiao Zhang"],
      venue: "arXiv Pre-print",
      date: "2024-11-15",
      link: "https://arxiv.org/...",
      tags: ["LLM", "Robustness", "Safety"],
    },
    // Add more here...
  ];