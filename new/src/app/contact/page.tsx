import { Mail, Linkedin, Twitter } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-20">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
        <p className="text-gray-400">Always open to research collaborations or interesting discussions.</p>
      </div>

      <div className="grid grid-cols-1 gap-4">
        <a href="mailto:piyushpant15@gmail.com" className="glass-card p-6 flex items-center gap-6 hover:bg-white/10 transition-colors">
          <Mail className="text-cyan-400" />
          <div>
            <p className="text-xs text-gray-500 uppercase font-bold">Email</p>
            <p className="text-lg">piyushpant15@gmail.com</p>
          </div>
        </a>
        <a href="https://linkedin.com/in/piyush-pant" className="glass-card p-6 flex items-center gap-6 hover:bg-white/10 transition-colors">
          <Linkedin className="text-cyan-400" />
          <div>
            <p className="text-xs text-gray-500 uppercase font-bold">LinkedIn</p>
            <p className="text-lg">piyush-pant</p>
          </div>
        </a>
      </div>
    </div>
  );
}