"use client";

import React, { useEffect, useRef, useState } from "react";
import { track } from "@vercel/analytics";
import {
  Github,
  Linkedin,
  Twitter,
  Edit3,
  EyeOff,
  Languages,
  Keyboard,
  Menu,
  X,
} from "lucide-react";

const AppleIcon = ({
  size = 20,
  className = "",
}: {
  size?: number;
  className?: string;
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" />
  </svg>
);

export default function LandingPage() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.error("Video autoplay failed:", error);
      });
    }
  }, []);

  const handleDownload = () => {
    // Track the download event
    track("download_clicked");
    // Tracking is handled by the API route
    window.location.href = "/api/download";
  };

  return (
    <div className="min-h-screen bg-[#fbfbfd] text-[#1d1d1f] selection:bg-blue-100 overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 liquid-glass">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a
            href="#"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <img src="/icons/icon.png" alt="iShot Logo" className="w-8 h-8" />
            <span className="font-semibold text-xl tracking-tight">iShot</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
            <a href="#features" className="hover:text-black transition-colors">
              Features
            </a>
            <a href="#feedback" className="hover:text-black transition-colors">
              Feedback
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-600 hover:text-black transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full liquid-glass py-6 px-6 flex flex-col gap-4 animate-in fade-in slide-in-from-top-4 duration-300">
            <a
              href="#features"
              className="text-lg font-medium text-gray-600 hover:text-black transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a
              href="#feedback"
              className="text-lg font-medium text-gray-600 hover:text-black transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Feedback
            </a>
          </div>
        )}
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-16 items-center pt-32 pb-20 overflow-hidden">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
          <div
            className="absolute top-1/2 -right-24 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl -z-10 animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>

          <div className="flex flex-col justify-center space-y-6 lg:space-y-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              Capture, Edit,{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-400 to-gray-600">
                Extract.
              </span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-500 max-w-md leading-relaxed">
              The fastest way to capture your screen, edit with precision, and
              instantly extract text from any where on your Mac.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button
                onClick={handleDownload}
                className="bg-black text-white px-8 lg:px-10 py-4 rounded-2xl font-bold text-base lg:text-lg flex items-center justify-center gap-3 shadow-2xl shadow-black/20 group"
              >
                <AppleIcon size={22} className="" />
                Download for Mac
              </button>
            </div>
          </div>
          <div className="relative group w-full max-w-[600px] lg:max-w-none mx-auto">
            <div className="absolute -inset-4 lg:-inset-6 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 rounded-[2rem] lg:rounded-[3rem] opacity-20 blur-2xl lg:blur-3xl group-hover:opacity-30 transition-opacity duration-700"></div>
            <div className="relative rounded-[1.5rem] lg:rounded-[2.5rem] overflow-hidden border border-white/40 shadow-2xl bg-white/30 backdrop-blur-2xl w-full">
              <video
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="w-full h-auto block"
              >
                <source src="/ishot.mov" type="video/quicktime" />
                <source src="/ishot.mov" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section
          id="features"
          className="bg-white py-32 border-y border-gray-100"
        >
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-4xl font-bold mb-4">Everything you need.</h2>
              <p className="text-gray-500 text-lg">
                Simple tools, powerful results.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <FeatureCard
                icon={<Edit3 className="text-blue-500" />}
                title="Quick Notes"
                description="Add arrows, shapes, and text to your shots in seconds."
              />
              <FeatureCard
                icon={<EyeOff className="text-purple-500" />}
                title="Privacy First"
                description="Easily blur sensitive info before you use it."
              />
              <FeatureCard
                icon={<Languages className="text-green-500" />}
                title="Copy Text"
                description="Instantly grab text from any where with powerful multi-language support."
              />
              <FeatureCard
                icon={<Keyboard className="text-orange-500" />}
                title="Your Keys"
                description="Use the shortcuts you already know and love."
              />
            </div>
          </div>
        </section>

        {/* Feedback Section */}
        <section id="feedback" className="py-32 max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-4">Loved by users.</h2>
            <p className="text-gray-500 text-lg">
              What people are saying about iShot.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeedbackCard
              name="Alex Rivera"
              role="Software Engineer"
              content="The fastest screenshot tool I've used on Mac. The performance is absolutely incredible."
              avatarUrl="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
            />
            <FeedbackCard
              name="Sarah Chen"
              role="Product Designer"
              content="The text extraction feature is a lifesaver for grabbing info from designs. It's so accurate."
              avatarUrl="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
            />
            <FeedbackCard
              name="James Wilson"
              role="Content Creator"
              content="Minimal, clean, and doesn't get in the way. Exactly what I needed for my workflow."
              avatarUrl="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop"
            />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-20">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="space-y-4 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <img src="/icons/icon.png" alt="iShot Logo" className="w-6 h-6" />
              <span className="font-bold text-lg">iShot</span>
            </div>
            <p className="text-gray-500 text-sm max-w-xs">
              Built with ❤️ by Tuan Tran. <br />
              Making screenshotting better, one pixel at a time.
            </p>
            <div className="flex justify-center md:justify-start gap-4">
              <a
                href="https://github.com/tuanhqv123"
                className="text-gray-400 hover:text-black transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/tuan-tran149"
                className="text-gray-400 hover:text-black transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://x.com/lgrd149"
                className="text-gray-400 hover:text-black transition-colors"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-end gap-6">
            <div id="kofi-widget-container"></div>
            <a
              href="https://ko-fi.com/B0B01RHE94"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                height="36"
                style={{ border: "0px", height: "36px" }}
                src="https://storage.ko-fi.com/cdn/kofi3.png?v=6"
                alt="Buy Me a Coffee at ko-fi.com"
              />
            </a>
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-6 mt-20 pt-8 border-t border-gray-50 text-center text-gray-400 text-xs">
          © 2026 iShot. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactElement;
  title: string;
  description: string;
}) {
  return (
    <div className="p-6 lg:p-8 rounded-[2rem] lg:rounded-[2.5rem] liquid-glass border border-white/40 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-700 group">
      <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-xl lg:rounded-2xl bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-xl shadow-inner flex items-center justify-center mb-6 lg:mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 border border-white/60">
        {React.cloneElement(icon, { size: 24 } as any)}
      </div>
      <h3 className="text-xl lg:text-2xl font-bold mb-3 lg:mb-4 tracking-tight">
        {title}
      </h3>
      <p className="text-base lg:text-lg text-gray-500 leading-relaxed group-hover:text-gray-700 transition-colors">
        {description}
      </p>
    </div>
  );
}

function FeedbackCard({
  name,
  role,
  content,
  avatarUrl,
}: {
  name: string;
  role: string;
  content: string;
  avatarUrl: string;
}) {
  return (
    <div className="p-6 lg:p-10 rounded-[2rem] lg:rounded-[2.5rem] liquid-glass border border-white/30 shadow-sm hover:shadow-xl transition-all duration-500 group">
      <p className="text-base lg:text-lg text-gray-600 italic mb-6 lg:mb-8 group-hover:text-black transition-colors leading-relaxed">
        "{content}"
      </p>
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full overflow-hidden border border-white/50 shadow-sm">
          <img
            src={avatarUrl}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <div className="font-bold text-sm lg:text-base">{name}</div>
          <div className="text-gray-400 text-xs lg:text-sm">{role}</div>
        </div>
      </div>
    </div>
  );
}
