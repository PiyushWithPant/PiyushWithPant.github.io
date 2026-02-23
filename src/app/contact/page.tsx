// CONTACT PAGE WITH SECURE FORM SUBMISSION USING FORMSPREE.IO

"use client";
import React, { useState } from 'react';
import { Mail, Linkedin, Send, MessageSquare, ShieldCheck, User, AtSign, AlertTriangle } from "lucide-react";
import Starfield from "@/components/Starfield";

export default function ContactPage() {
  const [status, setStatus] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    
    setStatus("sending");

    try {
      const response = await fetch("https://formspree.io/f/xdallgzo", {
        method: "POST",
        body: data,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        // This handles server-side errors (e.g. 404, 500)
        setStatus("error");
      }
    } catch (err) {
      // This handles network-side errors (e.g. user is offline)
      setStatus("error");
    }
  };

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">
      <Starfield />

      <div className="max-w-6xl mx-auto px-6 pt-32 pb-20 relative z-10">
        
        {/* HEADER */}
        <div className="flex flex-col items-center mb-10 group/section">
          <div className="p-3 bg-white/5 rounded-2xl border border-white/10 section-header-icon mb-4">
            <MessageSquare size={32} className="text-brand-cyan" />
          </div>
          <h1 className="text-3xl md:text-6xl font-black text-white tracking-tighter text-center uppercase italic">
            Get in Touch
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          
          {/* LEFT: INFO CARDS */}
          <div className="space-y-4">
            <a href="mailto:piyushpant15@gmail.com" className="contact-info-card group">
              <div className="p-4 bg-brand-cyan/10 rounded-xl group-hover:bg-brand-cyan group-hover:text-black transition-all duration-500">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 mb-1">Direct Email</p>
                <p className="text-lg text-white font-bold">piyushpant15@gmail.com</p>
              </div>
            </a>

            <a href="https://linkedin.com/in/piyush-pant" target="_blank" className="contact-info-card group">
              <div className="p-4 bg-brand-cyan/10 rounded-xl group-hover:bg-brand-cyan group-hover:text-black transition-all duration-500">
                <Linkedin size={24} />
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 mb-1">Professional Network</p>
                <p className="text-lg text-white font-bold">linkedin.com/in/piyush-pant</p>
              </div>
            </a>

            <div className="p-6 border border-white/5 bg-white/[0.01] rounded-3xl mt-6">
               <div className="flex items-center gap-3 text-brand-cyan mb-3">
                  <ShieldCheck size={18} />
                  <span className="text-[10px] font-black uppercase tracking-[0.2em]">Security Protocol</span>
               </div>
               <p className="text-gray-500 text-xs leading-relaxed">
                  All transmissions are rate-limited and encrypted. Bot-detection is active to ensure research integrity.
               </p>
            </div>
          </div>

          {/* RIGHT: SECURE FORM */}
          <div className="contact-form-container !p-8"> 
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600" size={18} />
                <input required name="name" type="text" placeholder="FULL NAME" className="contact-input" />
              </div>

              <div className="relative">
                <AtSign className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600" size={18} />
                <input required name="email" type="email" placeholder="EMAIL ADDRESS" className="contact-input" />
              </div>

              <textarea required name="message" rows={4} placeholder="YOUR MESSAGE..." className="contact-input pt-4"></textarea>

              <input type="text" name="_gotcha" style={{display: 'none'}} />

              <button 
                type="submit" 
                disabled={status === "sending"}
                className="contact-submit-btn"
              >
                <span>{status === "sending" ? "TRANSMITTING..." : "SEND MESSAGE"}</span>
                <Send size={18} />
              </button>

              {/* SUCCESS STATE */}
              {status === "success" && (
                <div className="mt-6 p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl flex items-center gap-3">
                  <div className="text-emerald-400 font-black text-[10px] uppercase tracking-widest text-center w-full">
                    Transmission Received. I will reach out shortly.
                  </div>
                </div>
              )}

              {/* ERROR STATE / FALLBACK */}
              {status === "error" && (
                <div className="mt-6 p-4 bg-rose-500/10 border border-rose-500/20 rounded-xl flex flex-col items-center gap-2">
                  <div className="flex items-center gap-2 text-rose-400 font-black text-[10px] uppercase tracking-widest">
                    <AlertTriangle size={14} /> Transmission Failed
                  </div>
                  <p className="text-gray-400 text-[11px] text-center">
                    Service unavailable. Please reach out directly to: <br />
                    <a href="mailto:piyushpant15@gmail.com" className="text-white font-bold underline decoration-rose-500/50 hover:text-rose-400 transition-colors">
                      piyushpant15@gmail.com
                    </a>
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}