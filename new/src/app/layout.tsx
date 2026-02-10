import type { Metadata } from "next";
import { Geist, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Piyush Pant | AI Researcher",
    template: "%s | Piyush Pant"
  },
  description: "Personal website of Piyush Pant – AI Researcher, Developer, Martial Artist.",
  icons: { icon: "/favicon.ico" }, // Place your favicon in /public
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-[#171724] text-white min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}