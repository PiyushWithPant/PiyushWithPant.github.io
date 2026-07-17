import { p } from "framer-motion/client";

export interface Publication {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  date: string;
  thumbnail?: string; // points to public/
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

//! Use Backticks `` for adding Bibtex citation
//* Color choices - cyan, purple, rose

export const publications: Publication[] = [
  {
    id: "pub-1",
    title: "GREAT: Generalizable Backdoor Attacks in RLHF via Emotion-Aware Trigger Synthesis",
    authors: ["S.K. Dutta", "Yuelin Xu", "Piyush Pant", "Xiao Zhang"],
    thumbnail: "/publications/great.png",  // points to public/
    venue: "arXiv Pre-print | Under Review",
    date: "2026/1/10",
    color: "cyan",
    links: {
      arxiv: "https://arxiv.org/abs/2510.09260",
      pdf: "https://arxiv.org/pdf/2510.09260",
      code: "https://github.com/PiyushWithPant/GREAT",
      // openreview: "https://openreview.net/forum?id=N0X8TUW9AF",
      cite: `@misc{dutta2025greatgeneralizablebackdoorattacks,
      title={GREAT: Generalizable Backdoor Attacks in RLHF via Emotion-Aware Trigger Synthesis}, 
      author={Subrat Kishore Dutta and Yuelin Xu and Piyush Pant and Xiao Zhang},
      year={2025},
      eprint={2510.09260},
      archivePrefix={arXiv},
      primaryClass={cs.CR},
      url={https://arxiv.org/abs/2510.09260}, 
}`,
    }
  },

  {
    id: "pub-2",
    title: "Equity-Aware Geospatial AI for Forecasting Demand-Driven Hospital Locations in Germany",
    authors: ["Piyush Pant", "M.W. Suntoro", "A. Siddiqua", "M.S. Sharif", "D. Ahmed"],
    venue: "arXiv Pre-print  |  2nd best project award at DS course at Saarland University",
    date: "2025/10/12",
    color: "purple",
    thumbnail: "/publications/equity_aware_ai.png",  // points to public/
    links: {
      arxiv: "https://arxiv.org/abs/2510.10640",
      pdf: "https://arxiv.org/pdf/2510.10640",
      code: "https://github.com/mwsyow/equity-aware-geospatial-ai-project",
      cite: `@misc{pant2025equityawaregeospatialaiforecasting,
      title={Equity-Aware Geospatial AI for Forecasting Demand-Driven Hospital Locations in Germany}, 
      author={Piyush Pant and Marcellius William Suntoro and Ayesha Siddiqua and Muhammad Shehryaar Sharif and Daniyal Ahmed},
      year={2025},
      eprint={2510.10640},
      archivePrefix={arXiv},
      primaryClass={cs.AI},
      url={https://arxiv.org/abs/2510.10640}, 
}`,
    }
  },


  {
    id: "pub-3",
    title: "Improving LLM Safety and Helpfulness using SFT and DPO: A Study on OPT-350M",
    authors: ["Piyush Pant"],
    venue: "arXiv Pre-print | Independent Research",
    date: "2025/9/10",
    thumbnail: "/publications/improving_llm_safety.png",  // points to public/
    color: "rose",
    links: {
      arxiv: "https://arxiv.org/abs/2509.09055",
      pdf: "https://arxiv.org/pdf/2509.09055",
      code: "https://github.com/PiyushWithPant/Improving-LLM-Safety-and-Helpfulness-using-SFT-and-DPO",
      
      cite: `@misc{pant2025improvingllmsafetyhelpfulness,
      title={Improving LLM Safety and Helpfulness using SFT and DPO: A Study on OPT-350M}, 
      author={Piyush Pant},
      year={2025},
      eprint={2509.09055},
      archivePrefix={arXiv},
      primaryClass={cs.CL},
      url={https://arxiv.org/abs/2509.09055}, 
}`,
    }
  },

    {
    id: "pub-4",
    title: "Authentication and Authorization in Modern Web Apps for Data Security using Nodejs and Role of Dark Web",
    authors: ["Piyush Pant", "Anand Singh Rajawat", "SB Goyal", "Pradeep Bedi", "Chaman Verma", "Maria Simona Raboaca", "Florentina Magda Enescu"],
    venue: "ICIDCA 2022 | Procedia Computer Science 215 (Pg 781–790) - Elsevier",
    date: "2022/1/1",     
    thumbnail: "/publications/auth.png",  // points to public/
    color: "rose",
    links: {
      arxiv: "https://www.sciencedirect.com/science/article/pii/S1877050922021512",
      pdf: "https://www.sciencedirect.com/science/article/pii/S1877050922021512/pdf?md5=8eb2ca7db3fdf6734d16faa4721e7aff&pid=1-s2.0-S1877050922021512-main.pdf",
      code: "",
      cite: `@article{pant2022authentication,
  title={Authentication and authorization in modern web apps for data security using Nodejs and role of dark web},
  author={Pant, Piyush and Rajawat, Anand Singh and Goyal, SB and Bedi, Pradeep and Verma, Chaman and Raboaca, Maria Simona and Enescu, Florentina Magda},
  journal={Procedia Computer Science},
  volume={215},
  pages={781--790},
  year={2022},
  publisher={Elsevier}
}`,
    }
  },

 

    {
    id: "pub-5",
    title: "Machine Learning Techniques for Analysis of Mars Weather Data",
    authors: ["Piyush Pant", "Anand Singh Rajawat", "SB Goyal", "Baharu Bin Kemat", "Traian Candin Mihălţan", "Chaman Verma", "Maria Simona Răboacă",],
    venue: "15th Intl. Conf. on Electronics, Computers and Artificial Intelligence (ECAI) | IEEE",
    date: "2023/6/29",
    thumbnail: "/publications/ecai2.png",  // points to public/
    color: "purple",
    links: {
      arxiv: "",
      pdf: "https://ieeexplore.ieee.org/abstract/document/10194233",
      code: "",
      cite: `@INPROCEEDINGS{10194233,
  author={Pant, Piyush and Rajawat, Anand Singh and Goyal, S. B. and Kemat, Baharu Bin and Mihălţan, Traian Candin and Verma, Chaman and Răboacă, Maria Simona},
  booktitle={2023 15th International Conference on Electronics, Computers and Artificial Intelligence (ECAI)}, 
  title={Machine Learning Techniques for Analysis of Mars Weather Data}, 
  year={2023},
  volume={},
  number={},
  pages={1-7},
  keywords={Mars;Temperature distribution;Machine learning algorithms;Atmospheric modeling;Space missions;Linear regression;Machine learning;Artificial Intelligence;Machine Learning;Data Analysis;Data Science;Mars;Mars weather data},
  doi={10.1109/ECAI58194.2023.10194233}}
`,
    }
  },

        {
    id: "pub-6",
    title: "Deep Q-Learning for Virtual Autonomous Automobile",
    authors: ["Piyush Pant", "Rajendra Sinha", "Anand Singh Rajawat", "SB Goyal", "Masri bin Abdul Lasi"],
    venue: "ICDAM-2023 | Springer",
    date: "2023/6/23",
    thumbnail: "/publications/qlearn.png",  // points to public/
    color: "cyan",
    links: {
      arxiv: "",
      pdf: "https://www.researchgate.net/publication/377392318_Deep_Q-Learning_for_Virtual_Autonomous_Automobile",
      code: "",
      cite: `@inproceedings{pant2023deep,
  title={Deep Q-Learning for Virtual Autonomous Automobile},
  author={Pant, Piyush and Sinha, Rajendra and Rajawat, Anand Singh and Goyal, SB and Lasi, Masri bin Abdul},
  booktitle={International Conference on Data Analytics \& Management},
  pages={203--216},
  year={2023},
  organization={Springer}
}`,
    }
  },

      {
    id: "pub-7",
    title: "Stealthy Emotion-Targeted Subpopulation Attacks in RLHF",
    authors: ["Piyush Pant"],
    venue: "Master's Thesis | Saarland University & CISPA Helmholtz Center for Information Security",
    date: "2026/07/15",
    thumbnail: "/publications/thesis.png",  // points to public/
    color: "purple",
    links: {
      // arxiv: "",
      pdf: "https://piyushwithpant.github.io/The-Thesis-Arc/THESIS.pdf",
      code: "https://github.com/PiyushWithPant/The-Thesis-Arc",
      cite: `@mastersthesis{pant2026thesis,
  author  = {Piyush Pant},
  title   = {Stealthy Emotion-Targeted Subpopulation Attacks in RLHF},
  school  = {Saarland University},
  address = {Saarbrücken, Germany},
  year    = {2026},
  month   = jul,
  type    = {Master's Thesis},
  url     = {https://piyushwithpant.github.io/The-Thesis-Arc/THESIS.pdf}
}`,
    }
  },


        // {
  //   id: "",
  //   title: "",
  //   authors: ["Piyush Pant"],
  //   venue: "arXiv Pre-print",
  //   date: "2020/10/12",
  //   thumbnail: "/publications/improving_llm_safety.png",  // points to public/
  //   color: "purple",
  //   links: {
  //     arxiv: "",
  //     pdf: "",
  //     code: "",
  //     cite: ``,
  //   }
  // },



];