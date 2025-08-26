"use client";

import { useState, useEffect } from "react";

export default function AboutHero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20international%20education%20journey%20with%20students%20from%20diverse%20backgrounds%20walking%20towards%20bright%20university%20buildings%20and%20global%20destinations%2C%20professional%20consulting%20atmosphere%20with%20world%20map%20elements%2C%20clean%20minimalist%20background%20with%20soft%20lighting%20and%20inspiring%20educational%20themes&width=1920&height=1080&seq=hero-about-bg&orientation=landscape')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 via-purple-900/50 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div
          className={`transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {/* Glassmorphism Card */}
          <div className="backdrop-blur-xl bg-white/10 rounded-3xl p-12 border border-white/20 shadow-2xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Your Journey,
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Our Mission
              </span>
            </h1>

            <p className="text-lg text-white/90 mb-8 leading-relaxed font-inter">
              At Hi5Overseas, we understand that choosing to study or work
              abroad isn't just a career decision it's a life-changing journey.
              That's why we're here: to guide, support, and walk alongside you
              every step of the way.
            </p>

            <div
              className={`transform transition-all duration-1000 delay-500 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <p className="text-lg text-white/90 mb-8 leading-relaxed font-inter">
                We founded Hi5Overseas with a clear vision — to make global
                opportunities more accessible for every dreamer, achiever, and
                explorer. Over the years, we've helped students and
                professionals turn their ambitions into reality through
                transparent guidance, honest advice, and comprehensive support.
              </p>

              {/* Floating Animation Elements */}
              <div className="flex justify-center space-x-8 mt-12">
                <div className="animate-bounce delay-100">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center backdrop-blur-lg border border-white/20">
                    <i className="ri-graduation-cap-line text-white text-2xl"></i>
                  </div>
                </div>
                <div className="animate-bounce delay-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center backdrop-blur-lg border border-white/20">
                    <i className="ri-briefcase-line text-white text-2xl"></i>
                  </div>
                </div>
                <div className="animate-bounce delay-500">
                  <div className="w-16 h-16 bg-gradient-to-r from-pink-400 to-blue-400 rounded-full flex items-center justify-center backdrop-blur-lg border border-white/20">
                    <i className="ri-global-line text-white text-2xl"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Background Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-400/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-400/20 rounded-full blur-xl animate-pulse delay-700"></div>
      <div className="absolute top-1/2 left-20 w-16 h-16 bg-pink-400/20 rounded-full blur-xl animate-pulse delay-1000"></div>
    </section>
  );
}
