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
          backgroundImage: `url('https://amadeus.com/content/dam/amadeus/images/en/business/teamwork/meet-up-for-financial-advice.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#a5fafa]/80 to-blue-200/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div
          className={`transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {/* Glassmorphism Card */}
          <div className="backdrop-blur-xl bg-white/50 rounded-3xl p-12 border border-white/70 shadow-2xl mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-black mb-8 leading-tight">
              Your Journey
              <span className="block text-transparent bg-clip-text text-blue-500">
                Our Mission
              </span>
            </h1>

            <p className="text-lg text-black/90 mb-8 leading-relaxed font-inter">
              We understand that choosing to Study or Work abroad isn't just a
              career decision it's a life changing journey. That's why we are
              here to Guide, Support, and Walk Alongside you every step of the
              way.
            </p>

            <div
              className={`transform transition-all duration-1000 delay-500 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <p className="text-lg text-black/90 mb-8 leading-relaxed font-inter">
                We founded with a clear vision to make global opportunities more
                accessible for every Dreamer, Achiever, and Explorer. Over the
                years we have helped Students and Professionals turn their
                ambitions into reality through Transparent Guidance, Honest
                Advice, and Comprehensive Support.
              </p>

              {/* Floating Animation Elements */}
              <div className="flex justify-center space-x-8 mt-12">
                <div className="animate-bounce delay-100">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#46EBEB] to-blue-500 rounded-full flex items-center justify-center backdrop-blur-lg border border-white/20">
                    <i className="ri-graduation-cap-line text-white text-2xl"></i>
                  </div>
                </div>
                <div className="animate-bounce delay-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#46EBEB] to-blue-500 rounded-full flex items-center justify-center backdrop-blur-lg border border-white/20">
                    <i className="ri-briefcase-line text-white text-2xl"></i>
                  </div>
                </div>
                <div className="animate-bounce delay-500">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#46EBEB] to-blue-500 rounded-full flex items-center justify-center backdrop-blur-lg border border-white/20">
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
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-400/20 rounded-full blur-xl animate-pulse delay-300"></div>
      <div className="absolute top-1/2 left-20 w-16 h-16 bg-pink-400/20 rounded-full blur-xl animate-pulse delay-300"></div>
    </section>
  );
}
