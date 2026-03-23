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
      id: "proj-13",
      title: "IMDB Movie Review Sentiment Analysis",
      description: "A RNN model built using PyTorch to perform sentiment analysis on IMDB movie reviews. The model is trained on a dataset of movie reviews and can classify reviews as positive or negative.",
      color: "rose",
      tags: ["Python", "NLP"],
      image: "projects/imdb.png",

      links: {
        github: "https://github.com/PiyushWithPant/IMDB-Movie-Review-Sentiment-Analysis-with-RNN",
        demo: "https://imdb-movie-review-sentiment-analysis-with-rnn.streamlit.app"
      }
    },

    {
      id: "proj-12",
      title: "The Infamous Snake Game",
      description: "The infamous snake game, that we all played in our Nokia :-)",
      color: "cyan",
      tags: ["Python", "Pygame"],
      image: "projects/snake.png",

      links: {
        github: "https://github.com/PiyushWithPant/The-Infamous-Snake-Game"
      }
    },

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
      id: "proj-10",
      title: "YelpCamp - WebApp",
      description: "Webapp to find and review campgrounds. Users can create, update and delete their campgrounds and reviews. Features",
      color: "green",
      image: "projects/yelpcamp.png",
      tags: ["JavaScript", "EJS", "CSS"],

      links: {
        github: "https://github.com/PiyushWithPant/YelpCamp",
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
      id: "proj-11",
      title: "AI for Self-Driving Cars",
      description: "DQN based AI model to drive a car in a simulator. The model is trained using reinforcement learning and can learn to drive the car by itself.",
      color: "rose",
      tags: ["Python", "Kvlang", "Shell"],
      image: "projects/dqn.png",

      links: {
        github: "https://github.com/PiyushWithPant/CITYGUIDER-FOR-VLOGGERS"
      }
    },

    {
      id: "proj-7",
      title: "ToDo List App",
      description: "A simple ToDo List App built using JavaScript, HTML and CSS. It allows users to add, delete and mark tasks as completed.",
      color: "green",
      tags: ["JavaScript", "HTML", "CSS"],
      image: "projects/todo.png",
      links: {
        github: "https://github.com/PiyushWithPant/DOM-JavaScript"
      }
    },
    {
      id: "proj-2",
      title: "NewsApp",
      description: "NewsApp is a react app for daily news with categories & features like infinite scroll, loading bar, etc.",
      color: "purple",
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
        color: "cyan",
        tags: ["PyTorch", "OpenCV", "FastAPI"],
        links: {
          github: "https://github.com/PiyushWithPant/iNotebook"
        }
      },
      {
        id: "proj-5",
        title: "WebApp - ThePride",
        description: "Hackathon project Theme - 'Cultural Heritage and Traditions of India'. ",
        color: "purple",
        tags: ["JavaScript", "HTML", "CSS"],
        links: {
          github: "https://github.com/PiyushWithPant/The-Pride"
        }
      },



      {
        id: "proj-8",
        title: "Meet your Pandit - WebApp",
        description: "A website to meet pandit (priests) for your pujas (worships/rituals) in cities.",
        color: "rose",
        tags: ["JavaScript", "EJS", "CSS"],

        links: {
          github: "https://github.com/PiyushWithPant/Meet-your-Pandit-project"
        }
      },













  ];