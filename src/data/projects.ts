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

  // COLORS: cyan, purple, rose, green
  
  export const projects: Project[] = [
    {
      id: "proj-1",
      title: "TextUtils",
      description: "TextUtils is a React App which provides with basic text editing along with dark mode feature.",
      color: "purple",
      image: "projects/textutils.png",
      tags: ["React.js", "JavaScript", "HTML", "CSS"],
      links: {
        github: "https://github.com/PiyushWithPant/TextUtils",
        demo: "https://piyushwithpant.github.io/TextUtils/"
      }
    },
    {
      id: "proj-2",
      title: "NewsApp",
      description: "NewsApp is a react app for daily news with categories & features like infinite scroll, loading bar, etc.",
      color: "cyan",
      tags: ["React.js", "JavaScript", "HTML"],
      links: {
        github: "https://github.com/PiyushWithPant/NewsApp-Project-ReactJS"
      }
    },
    {
        id: "proj-3",
        title: "YDSF Main Webapp",
        description: "Main web application for YDSF",
        color: "rose",
        tags: ["Pug", "JavaScript", "CSS"],
        links: {
          github: "https://github.com/PiyushWithPant/ydsf-project",
        }
      },
      {
        id: "proj-4",
        title: "iNotebook",
        description: "An Application where user can create, update, delete their notes and user's workspace is secured.",
        color: "green",
        tags: ["PyTorch", "OpenCV", "FastAPI"],
        links: {
          github: "https://github.com/PiyushWithPant/iNotebook"
        }
      },
      {
        id: "proj-5",
        title: "WebApp - MyIndia",
        description: "Hackathon project Theme - 'Cultural Heritage and Traditions of India'. ",
        color: "purple",
        tags: ["JavaScript", "HTML", "CSS"],
        links: {
          github: "https://github.com/PiyushWithPant/MyIndia"
        }
      },
      {
        id: "proj-6",
        title: "ScoreKeeper",
        description: "DOM Manipulation project to keep score of a game. It has features like incrementing, decrementing and resetting the score.",
        color: "cyan",
        tags: ["JavaScript", "HTML", "CSS"],
        image: "projects/scorekeeper.png",
        links: {
          github: "https://github.com/PiyushWithPant/DOM-JavaScript"
        }
      },
      {
        id: "proj-7",
        title: "ToDo List App",
        description: "A simple ToDo List App built using JavaScript, HTML and CSS. It allows users to add, delete and mark tasks as completed.",
        color: "rose",
        tags: ["JavaScript", "HTML", "CSS"],
        image: "projects/todo.png",
        links: {
          github: "https://github.com/PiyushWithPant/DOM-JavaScript"
        }
      },


      {
        id: "proj-8",
        title: "Meet your Pandit - WebApp",
        description: "A website to meet pandit (priests) for your pujas (worships/rituals) in cities.",
        color: "purple",
        tags: ["JavaScript", "EJS", "CSS"],

        links: {
          github: "https://github.com/PiyushWithPant/Meet-your-Pandit-project"
        }
      },



      {
        id: "proj-9",
        title: "City Guider - WebApp",
        description: "A website to guide tourists about the places to visit, eat and stay in a city.",
        color: "green",
        tags: ["JavaScript", "EJS", "CSS"],

        links: {
          github: "https://github.com/PiyushWithPant/CITYGUIDER-FOR-VLOGGERS"
        }
      },
      
  ];