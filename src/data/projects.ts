export interface Project {
    id: string;
    title: string;
    description: string;
    image?: string;
    color: 'cyan' | 'purple' | 'rose' | 'green';
    tags: string[];
    links: {
      github: string;
      demo?: string;
    };
  }
  
  export const projects: Project[] = [
    {
      id: "proj-1",
      title: "Martial Arts Tracker",
      description: "A specialized performance tracking dashboard for Judo and BJJ practitioners to log rounds, techniques, and recovery.",
      color: "purple",
      tags: ["Next.js", "Firebase", "Recharts", "Python"],
      links: {
        github: "https://github.com/...",
        demo: "https://tracker.demo"
      }
    },
    {
      id: "proj-2",
      title: "Neuro-Adversarial Vision",
      description: "Research-oriented implementation of adversarial attacks on CNNs with real-time perturbation visualization.",
      color: "cyan",
      tags: ["PyTorch", "OpenCV", "FastAPI"],
      links: {
        github: "https://github.com/..."
      }
    },
    {
        id: "proj-3",
        title: "Martial Arts Tracker",
        description: "A specialized performance tracking dashboard for Judo and BJJ practitioners to log rounds, techniques, and recovery.",
        color: "rose",
        tags: ["Next.js", "Firebase", "Recharts"],
        links: {
          github: "https://github.com/...",
          demo: "https://tracker.demo"
        }
      },
      {
        id: "proj-4",
        title: "Neuro-Adversarial Vision",
        description: "Research-oriented implementation of adversarial attacks on CNNs with real-time perturbation visualization.",
        color: "green",
        tags: ["PyTorch", "OpenCV", "FastAPI"],
        links: {
          github: "https://github.com/..."
        }
      }
  ];