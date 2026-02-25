// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollFire from "@/components/ScrollFire";
import CustomCursor from "@/components/CustomCursor";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://piyushpant.github.io"), // Replace with your actual domain
  title: {
    default: "Piyush Pant | AI Researcher and Developer",
    template: "%s | Piyush Pant"
  },
  description: "Personal portfolio of Piyush Pant. AI Researcher specializing in Adversarial ML, Trustworthy AI, and NLP.",
  keywords: ["Piyush Pant", "AI Researcher", "Adversarial Machine Learning", "Trustworthy AI", "NLP", "Computer Science", "Safe Reinforcement Learning", "Machine Learning", "Piyush Pant AI", "Piyush Pant Research", "Piyush Pant PhD"],
  authors: [{ name: "Piyush Pant" }],
  creator: "Piyush Pant",
  icons: { 
    icon: "/favicon.ico",
    // apple: "/apple-touch-icon.png", 
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://piyushpant.github.io",
    title: "Piyush Pant | AI Researcher and Developer",
    description: "Researching the future of Safe and Trustworthy AI. Explore my publications and engineering projects.",
    siteName: "Piyush Pant Portfolio",
    images: [
      {
        url: "/og-image.png", 
        width: 1200,
        height: 630,
        alt: "Piyush Pant Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Piyush Pant | AI Researcher and Developer",
    description: "AI Researcher specializing in Adversarial ML and NLP.",
    images: ["/og-image.png"],
    // creator: "@your_twitter_handle", 
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-[#171724] text-white min-h-screen flex flex-col antialiased`}>
        
        <Navbar />

        <CustomCursor />

        <ScrollFire />

        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}