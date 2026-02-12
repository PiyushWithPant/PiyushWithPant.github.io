import { Database, ExternalLink, Cpu } from "lucide-react";
import React from "react";

const models = [
  {
    name: "Robust-LLM-7B",
    description: "A fine-tuned Llama-2 model optimized for adversarial robustness in medical contexts.",
    repo: "https://huggingface.co/PiyushWithPant/robust-llm",
    tags: ["NLP", "Safety", "PyTorch"],
    metrics: "92% Accuracy"
  }
];

export default function ModelZoo() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 flex items-center gap-3">
        <Cpu className="text-cyan-400" /> Model Zoo
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {models.map((model) => (
          <div key={model.name} className="glass-card p-6 border-l-4 border-cyan-500 hover:scale-[1.02] transition-transform">
            <h3 className="text-xl font-bold mb-2">{model.name}</h3>
            <p className="text-gray-400 text-sm mb-4">{model.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {model.tags.map(tag => (
                <span key={tag} className="px-2 py-1 bg-white/5 text-[10px] rounded uppercase font-bold text-cyan-400 border border-cyan-500/20">{tag}</span>
              ))}
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs font-mono text-gray-500 italic">{model.metrics}</span>
              <a href={model.repo} className="text-white hover:text-cyan-400 flex items-center gap-1 text-sm font-bold">
                View on HF <ExternalLink size={14} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}