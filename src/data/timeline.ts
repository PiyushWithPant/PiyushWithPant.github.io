// src/data/timeline.ts
export interface TimelineItem {
  year: string;
  title: string;
  location: string;
  description: string;
}

export const timelineData: TimelineItem[] = [
  {
    year: "May 2024 - Aug 2026",
    title: "Graduate AI Research Assistant",
    location: "CISPA, Germany",
    description: "Deep diving into Adversarial ML and LLM security under Prof. Dr. Xiao Zhang."
  },
  {
    year: "2023 - Present",
    title: "M.Sc. Computer Science",
    location: "Saarland University, Germany",
    description: "Specializing in Artificial Intelligence and Machine Learning, focused on RLHF, RAG, Fine-tuning and robustness in large language models."
  },
  {
    year: "2020 - 2023",
    title: "Research Assistant",
    location: "School of Computer Science & Engineering, Sandip University, India",
    description: "Exposure in the field of AI & ML, and AI Research, worked on both AI & software development projects."
  },
  {
    year: "2020 - 2023",
    title: "B.Sc. Computer Science",
    location: "Sandip University, India",
    description: "Completed my Bachelor's in Computer Science with specialization in Artificial Intelligence and Machine Learning, laying the foundation for my research journey."
  },
  {
    year: "2008 - 2020",
    title: "School Life",
    location: "K.V.S., India",
    description: "Honored to have received my education at Kendriya Vidyalaya Sangathan, a prestigious institution in India where I completed my schooling."
  },
  {
    year: "Origins",
    title: "The Himalayan Roots",
    location: "Uttarakhand, India",
    description: "Born and raised near the peaks, Lived almost in half of India"
  }
];