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
      id: "proj-19",
      title: "OPT-Align",
      description: "Engineered an RLHF pipeline implementing SFT and DPO on the OPT-1.3B. This workflow significantly mitigated harmfulness while simultaneously maximizing model helpfulness.",
      color: "cyan",
      tags: ["RLHF", "PyTorch", "LLM" ],
      image: "projects/optalign.png",

      links: {
        github: "https://github.com/PiyushWithPant/Mars-Weather-Data-Analysis",

      }
    },

    {
      id: "proj-16",
      title: "Mars Weather Data Analysis",
      description: "Analyzed Mars weather data using Python and Pandas. Cleaned and visualized the data to uncover trends and patterns in Martian weather conditions.",
      color: "rose",
      tags: ["Python", "Pandas", "Matplotlib"],
      image: "projects/mars.png",

      links: {
        github: "https://github.com/PiyushWithPant/Mars-Weather-Data-Analysis",

      }
    },

    {
      id: "proj-15",
      title: "Hospital Travel Accessibility Scorer",
      description: "Geospatial pipeline to evaluate hospital accessibility in Saarland, Germany. Computes travel times, generates district-level metrics, and visualizes results with interactive maps.",
      color: "purple",
      tags: ["Python", "Geopy"],
      image: "projects/hospital_score.png",

      links: {
        github: "https://github.com/PiyushWithPant/Hospital-Travel-Accessibility-Score-",
      }
    },

    {
      id: "proj-18",
      title: "Adversarial Attack on Reward Model of Reinforcement Learning-based Snake Game ",
      description: "Implemented an adversarial attack on the reward model of a reinforcement learning-based snake game. The attack manipulates the reward signals to mislead the learning agent.",
      color: "cyan",
      tags: ["Python", "Pandas", "Matplotlib"],
      image: "projects/adv_snake.png",

      links: {
        github: " https://github.com/PiyushWithPant/Adversarial-Attack-on-Reward-System-of-Reinforcement-Learning-based-Snake-Game",

      }
    },

   

    {
      id: "proj-14",
      title: "ToxiLens",
      description: "A dual-head neural network that detects whether a comment is toxic and identifies the specific toxic categories.",
      color: "green",
      tags: ["Python", "NLP"],
      image: "projects/toxilens.png",

      links: {
        github: "https://github.com/PiyushWithPant/ToxiLens",
        demo: "https://toxilens.streamlit.app"
      }
    },



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
      id: "proj-11",
      title: "AI for Self-Driving Cars",
      description: "DQN based AI model to drive a car in a simulator. The model is trained using reinforcement learning and can learn to drive the car by itself.",
      color: "cyan",
      tags: ["Python", "Kvlang", "Shell"],
      image: "projects/dqn.png",

      links: {
        github: "https://github.com/PiyushWithPant/CITYGUIDER-FOR-VLOGGERS"
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
      id: "proj-17",
      title: "MAIVE",
      description: "MAIVE Python Package - Mathematics and Artificial Intelligence with Visualization Extended.",
      color: "rose",
      tags: ["Python", "Mathematics", "AI"],
      image: "projects/maive.png",

      links: {
        github: "https://github.com/PiyushWithPant/MAIVE",
        demo: "https://piyushwithpant.github.io/MAIVE/"

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
      color: "green",
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