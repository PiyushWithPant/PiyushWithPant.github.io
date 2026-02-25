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
//* Color choices - cyan, purple, rose, amber, indigo, blue, white, gray

export const publications: Publication[] = [
  {
    id: "pub-1",
    title: "GREAT: Generalizable Backdoor Attacks in RLHF via Emotion-Aware Trigger Synthesis",
    authors: ["S.K. Dutta", "Yuelin Xu", "Piyush Pant", "Xiao Zhang"],
    thumbnail: "/publications/great.png",  // points to public/
    venue: "arXiv Pre-print",
    date: "2025/10/10",
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
    venue: "arXiv Pre-print",
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

  // {
  //   id: "",
  //   title: "",
  //   authors: ["Piyush Pant"],
  //   venue: "arXiv Pre-print",
  //   date: "2020/10/12",
  //   color: "amber",
  //   links: {
  //     arxiv: "",
  //     pdf: "",
  //     code: "",
  //     cite: ``,
  //   }
  // },



];