export interface Publication {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  date: string;
  thumbnail?: string;
  color: string; 
  links: {
    arxiv?: string;
    pdf?: string;
    code?: string;
    hf?: string;
    cite?: string;
    openreview?: string;
    project?: string;
  };
}

export const publications: Publication[] = [
  {
    id: "pub-2",
    title: "Advancing Robustness in Large Language Models via Adversarial Alignment",
    authors: ["Piyush Pant", "Xiao Zhang", "John Doe"],
    venue: "arXiv Pre-print",
    date: "2024-11-15",
    color: "cyan",
    links: {
      arxiv: "https://arxiv.org/...",
      pdf: "#",
      code: "https://github.com/...",
      hf: "https://huggingface.co/...",
      cite: "#",
    }
  },

  {
    id: "pub-1",
    title: "Robustness in Large Language Models via Adversarial Alignment",
    authors: ["Piyush Pant", "Xiao Zhang", "John Doe"],
    venue: "arXiv Pre-print",
    date: "2025-11-18",
    color: "green",
    links: {
      arxiv: "https://arxiv.org/...",
      pdf: "#",
      code: "https://github.com/...",
      hf: "https://huggingface.co/...",
      cite: "#"
    }
  }
];