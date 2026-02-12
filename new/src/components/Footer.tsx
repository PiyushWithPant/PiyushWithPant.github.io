"use client";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();
  const isLandingPage = pathname === "/";

  return (
    <footer 
      className={`w-full py-6 transition-all duration-500 ${
        isLandingPage 
          ? "absolute bottom-0 bg-transparent border-none z-10" 
          : "mt-auto border-t border-white/5 bg-[#171724]"
      }`}
    >
      <div className="container mx-auto px-4 text-center">
        <p className={`${isLandingPage ? "text-gray-600" : "text-gray-500"} text-sm`}>
          &copy; {new Date().getFullYear()} Piyush Pant. All rights reserved. Made with ❤️
        </p>
        
        {!isLandingPage && (
          <div className="mt-4 inline-block px-4 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-400">
            <span className="mr-2 text-cyan-400">●</span>
            Visitors: <img 
              src={`https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2FPiyushWithPant&count_bg=%23171724&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=false`} 
              alt="Hits" 
              className="inline ml-2"
            />
          </div>
        )}
      </div>
    </footer>
  );
};

export default Footer;