"use client";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X } from "lucide-react"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const pathname = usePathname();
  const router = useRouter();
  const isHome = pathname === "/";
  const searchInputRef = useRef<HTMLInputElement>(null);

  const navLinks = [
    { name: "About Me", href: "/about" },
    { name: "Research", href: "/research" },
    { name: "Projects", href: "/projects" },
    { name: "Resume", href: "/resume" },
    { name: "Blogs", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    if (isSearchOpen) searchInputRef.current?.focus();
  }, [isSearchOpen]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setIsSearchOpen(false);
      setSearchQuery("");
    }
  };

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
          
          {/* LEFT: LOGO */}
          <Link href="/" className="group flex items-center shrink-0">
            <span className="text-xl font-bold tracking-tight text-white transition-all group-hover:text-brand-cyan group-hover:drop-shadow-[0_0_10px_#00f0ff]">
              Piyush Pant <span className="inline-block group-hover:rotate-12 transition-transform duration-300 ml-1">🥰</span>
            </span>
          </Link>

          {/* RIGHT: MENU & SEARCH */}
          <div className="hidden md:flex items-center gap-10">
            <div className="flex items-center gap-10">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link 
                    key={link.name} 
                    href={link.href} 
                    className={`nav-link-hover py-1 text-[15px] font-normal tracking-wide transition-all duration-300 ${
                      isActive ? "text-brand-cyan nav-link-active" : "text-gray-400"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>

            <div className="flex items-center pl-6 h-8 ">
              <AnimatePresence>
                {isSearchOpen && (
                  <motion.form 
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: 220, opacity: 1 }}
                    exit={{ width: 0, opacity: 0 }}
                    onSubmit={handleSearchSubmit}
                    className="relative overflow-hidden"
                  >
                    <input
                      ref={searchInputRef}
                      type="text"
                      placeholder="Query the Universe..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-full py-1.5 pl-4 pr-10 text-[11px] font-mono text-brand-cyan focus:outline-none focus:border-brand-cyan/50"
                    />
                  </motion.form>
                )}
              </AnimatePresence>
              
              <button 
                onClick={() => setIsSearchOpen(!isSearchOpen)} 
                className={`p-2 transition-colors ml-1 ${isSearchOpen ? 'text-brand-cyan' : 'text-gray-400 hover:text-brand-cyan'}`}
                aria-label="Toggle Search"
              >
                {isSearchOpen ? <X size={18} /> : <Search size={20} />}
              </button>
            </div>
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