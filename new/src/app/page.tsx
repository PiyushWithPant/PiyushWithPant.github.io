"use client";
import { motion, Variants } from "framer-motion";
import Starfield from "@/components/Starfield";
import Link from "next/link";
import React, { useEffect, useRef, useState } from 'react';
import { FaGithub, FaLinkedin, FaWhatsapp, FaGraduationCap } from "react-icons/fa";
import { SiOrcid } from "react-icons/si";

const GREETINGS = [
  { hello: "Namaste 🙏", intro: "I am Piyush Pant" }, 
  { hello: "नमस्ते 🇮🇳", intro: "मैं पियुष पंत हूँ" }, 
  { hello: "Hallo 🇩🇪", intro: "Ich bin Piyush Pant" }, 
  { hello: "こんにちは 🇯🇵", intro: "ピーユッシュです" }, 
  { hello: "Привет 🇷🇺", intro: "Я Пиюш Пант" }, 
  { hello: "Bonjour 🇫🇷", intro: "Je suis Piyush Pant" }, 
  { hello: "नमस्ते 🇳🇵", intro: "म पियुष पन्त हुँ" }, 
  { hello: "Γεια σας 🇬🇷", intro: "Είμαι ο Piyush Pant" }, 
  { hello: "你好 🇨🇳", intro: "我是皮尤什" }, 
  { hello: "Hola 🇪🇸", intro: "Soy Piyush Pant" }, 
  { hello: "Ciao 🇮🇹", intro: "Sono Piyush Pant" }, 
  { hello: "안녕하세요 🇰🇷", intro: "저는 피유시 판트입니다" }, 
  { hello: "Olà 🇵🇹", intro: "Eu sou Piyush Pant" }, 
  { hello: "ನಮಸ್ಕಾರ 🇮🇳", intro: "ನಾನು ಪಿಯೂಷ್ ಪಂತ್" }, 
  { hello: "வணக்கம் 🇮🇳", intro: "நான் பியೂஷ் பந்த்" }, 
  { hello: "Sveiki 🇱🇻", intro: "Es esmu Piyush Pant" }, 
  { hello: "مرحباً 🇦🇪", intro: "أنا بيوش بانت" }, 
];

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [isInterfering, setIsInterfering] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      // 1. Trigger the interference animation on the text
      setIsInterfering(true);

      // 2. Precisely 200ms in (peak of jitter), swap the text
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % GREETINGS.length);
      }, 200);

      // 3. Stop the interference state so it can re-trigger next time
      setTimeout(() => {
        setIsInterfering(false);
      }, 600);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const x = (e.clientX - window.innerWidth / 2) / 10;
      const y = (e.clientY - window.innerHeight / 2) / 10;
      containerRef.current.style.setProperty("--mouse-x", `${x}`);
      containerRef.current.style.setProperty("--mouse-y", `${y}`);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const containerVars: Variants = { 
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
  };

  const itemVars: Variants = { 
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } }
  };

  const socialLinks = [
    { icon: <FaGithub />, href: "https://github.com/PiyushWithPant" },
    { icon: <FaGraduationCap />, href: "https://scholar.google.com/citations?user=I3-AR5MAAAAJ" },
    { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/piyush-pant/" },
    { icon: <FaWhatsapp />, href: "https://wa.me/919145728659" },
    { icon: <SiOrcid />, href: "https://orcid.org/0000-0003-0991-9454" }
  ];

  return (
    <div ref={containerRef} className="relative flex flex-col items-center justify-center min-h-[calc(100vh-80px)] px-8 overflow-hidden">
      
      <Starfield />
    
      <motion.div 
        variants={containerVars}
        initial="initial"
        animate="animate"
        className="w-full max-w-6xl flex flex-col items-center mt-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center md:-ml-32 w-full">
          <motion.div variants={itemVars} className="flex justify-center md:justify-end">
            <img
              src="/img1.jpg"
              alt="Piyush Pant"
              className="w-64 h-auto md:w-80 ellipse-shape relative z-10"
            />
          </motion.div>

          <div className="text-center md:text-left z-10">
            {/* Wrap only the text you want to interfere */}
            <div className={`transition-all duration-300 ${isInterfering ? 'text-interference language-sweep' : ''}`}>
              <motion.h2 
                variants={itemVars} 
                className="text-4xl md:text-5xl font-bold mb-1 text-gray-200 hover-glow-effect cursor-default whitespace-nowrap"
              >
                {GREETINGS[index].hello}
              </motion.h2>

              <motion.h1 
                variants={itemVars} 
                className="text-4xl md:text-6xl font-black mb-6 text-white leading-tight hover-glow-effect cursor-default whitespace-nowrap"
              >
                {GREETINGS[index].intro}
              </motion.h1>
            </div>

            <motion.div variants={itemVars} className="mb-12">
              <p className="scrolling-text text-xl md:text-xl data-stream-hover cursor-default">
                AI Researcher • Developer • Martial Artist
              </p>
            </motion.div>

            <motion.div variants={itemVars} className="flex justify-center md:justify-start">
              <Link href="/about" className="btn-style">
                FROM ME IMPORT ⭐️
              </Link>
            </motion.div>
          </div>
        </div>

        <motion.div 
          variants={itemVars}
          className="flex items-center justify-center gap-10 mt-20 md:mt-24 z-10"
        >
          {socialLinks.map((social, index) => (
            <a 
              key={index}
              href={social.href} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-3xl text-[#b5b5b5] transition-all duration-300 hover:text-white hover:scale-110 hover:[filter:drop-shadow(0_0_10px_rgba(255,255,255,0.8))]"
            >
              {social.icon}
            </a>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}