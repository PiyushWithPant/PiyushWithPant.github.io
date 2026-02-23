"use client";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();
  const isLandingPage = pathname === "/";

  return (
    <footer 
      className={`w-full py-10 transition-all duration-500 relative z-10 ${
        isLandingPage 
          ? "absolute bottom-0" 
          : "mt-auto"
      } bg-transparent border-none`}
    >
      <div className="container mx-auto px-4 text-center">
        <p className={`${isLandingPage ? "text-gray-500" : "text-gray-400"} text-sm font-light tracking-wide`}>
          &copy; {new Date().getFullYear()} Piyush Pant. All rights reserved. Made with ❤️
        </p>
      </div>
    </footer>
  );
};

export default Footer;