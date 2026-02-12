import { FileDown, Lock } from "lucide-react";

export default function ResumePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20 text-center">
      <div className="glass-card p-12">
        <div className="bg-cyan-500/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
          <FileDown className="text-cyan-400" size={40} />
        </div>
        <h1 className="text-3xl font-bold mb-4">Curriculum Vitae</h1>
        <p className="text-gray-400 mb-8 max-w-md mx-auto">
          For privacy reasons and to ensure you receive the most up-to-date version, 
          my full resume is available via a secure Google Drive link.
        </p>
        
        <div className="space-y-4">
          <a 
            href="YOUR_GOOGLE_DRIVE_LINK" 
            className="btn-style inline-block"
            target="_blank"
          >
            Access CV (Available on Request)
          </a>
          <p className="text-xs text-gray-500 flex items-center justify-center gap-1 mt-4">
            <Lock size={12} /> Last updated: Feb 2026
          </p>
        </div>
      </div>
    </div>
  );
}