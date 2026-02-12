"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  const navLinks = [
    { name: "About Me", href: "/about" },
    { name: "Research", href: "/research" },
    { name: "Projects", href: "/projects" },
    { name: "Resume", href: "/resume" },
    { name: "Blogs", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isHome 
          ? "bg-transparent border-transparent" 
          : "bg-brand-dark/80 backdrop-blur-xl border-b border-white/5 shadow-2xl shadow-black/20"
      }`}
    >
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex items-center justify-between h-20">
          
          <Link href="/" className="group flex items-center">
            <span className="text-xl font-bold tracking-tight text-white transition-all group-hover:text-brand-cyan">
              Piyush Pant <span className="inline-block group-hover:rotate-12 transition-transform duration-300 ml-1">🥰</span>
            </span>
          </Link>

          {/* Desktop Menu - Increased gap-10 here */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className={`nav-link-hover py-1 text-[15px] font-normal tracking-wide transition-colors ${
                  pathname === link.href ? "text-brand-cyan font-medium" : "text-gray-400 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="p-2 text-gray-400 hover:text-brand-cyan transition-colors"
            >
              <div className="w-6 h-5 flex flex-col justify-between items-end">
                <span className={`h-[2px] bg-current transition-all ${isOpen ? 'w-6 rotate-45 translate-y-2' : 'w-6'}`} />
                <span className={`h-[2px] bg-current transition-all ${isOpen ? 'opacity-0' : 'w-4'}`} />
                <span className={`h-[2px] bg-current transition-all ${isOpen ? 'w-6 -rotate-45 -translate-y-2' : 'w-5'}`} />
              </div>
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            className="fixed inset-0 top-20 bg-brand-dark/98 backdrop-blur-3xl z-40 md:hidden"
          >
            <div className="flex flex-col items-center justify-center h-[70vh] space-y-10 px-6">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href} 
                  className="text-3xl font-light text-gray-300 hover:text-brand-cyan transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;