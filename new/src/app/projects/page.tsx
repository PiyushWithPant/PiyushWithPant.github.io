import { Github, Globe } from "lucide-react";

export default function ProjectsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-12">Engineering Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass-card overflow-hidden group">
          <div className="h-48 bg-gradient-to-br from-purple-900 to-[#171724] p-8 flex items-center justify-center">
             <Github size={48} className="text-white/20 group-hover:text-white transition-colors" />
          </div>
          <div className="p-6">
            <h3 className="font-bold text-xl mb-2">Martial Arts Tracker</h3>
            <p className="text-gray-400 text-sm mb-4">A simple app to log Judo and BJJ progress.</p>
            <div className="flex gap-4">
               <button className="text-xs font-bold text-cyan-400 uppercase">Code</button>
               <button className="text-xs font-bold text-gray-500 uppercase">Live Demo</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}