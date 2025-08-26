"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function ClosingSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-6 relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Inspiring%20graduation%20ceremony%20scene%20with%20diverse%20international%20students%20celebrating%20success%2C%20beautiful%20campus%20environment%20with%20flags%20from%20different%20countries%2C%20bright%20golden%20hour%20lighting%20creating%20warm%20atmosphere%2C%20professional%20education%20consulting%20theme%20with%20hope%20and%20achievement&width=1920&height=1080&seq=closing-bg&orientation=landscape')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-purple-900/70 to-pink-900/60"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div
          className={`transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {/* Main Message */}
          <div className="backdrop-blur-xl bg-white/10 rounded-3xl p-12 border border-white/20 shadow-2xl mb-12">
            <h2 className="text-4xl md:text-4xl font-bold text-white/90 mb-6 leading-tight font-poppins">
              At Hi5Overseas, we don't just send you abroad.
            </h2>
            <p className="text-4xl md:text-2xl font-bold text-white/90 mb-6 leading-tight font-poppins">
              We help you start a new chapter with clarity, care, and
              confidence.
            </p>

            {/* Animated Tagline */}
            <div
              className={`transform transition-all duration-1000 delay-500 ${
                isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"
              }`}
            >
              <div className="inline-block">
                <div className="text-lg text-white/80 mb-8 px-6 py-3 rounded-full backdrop-blur-lg bg-white/10 border border-white/20">
                  Your success is our celebration 🎉
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div
              className={`flex flex-col sm:flex-row gap-4 justify-center transform transition-all duration-1000 delay-700 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-5 opacity-0"
              }`}
            >
              <Link
                href="/contact"
                className="relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-700 text-white font-semibold rounded-full shadow-lg cursor-pointer whitespace-nowrap transition-transform duration-500 hover:scale-110 hover:rotate-1 overflow-hidden"
              >
                <span className="relative z-10">Start Your Journey</span>

                {/* Neon glow effect */}
                <span className="absolute inset-0 rounded-full border-2 border-black-400 animate-[neonPulse_2s_infinite]"></span>
              </Link>
              <Link
                href="/services"
                className="relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-700 text-white font-semibold rounded-full shadow-lg cursor-pointer whitespace-nowrap transition-transform duration-500 hover:scale-110 hover:rotate-1 overflow-hidden"
              >
                <span className="relative z-10">Explore Our Services</span>

                {/* Neon glow effect */}
                <span className="absolute inset-0 rounded-full border-2 border-black-400 animate-[neonPulse_2s_infinite]"></span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Animation Elements */}
      <div className="absolute top-20 left-20 w-6 h-6 bg-blue-400/30 rounded-full animate-bounce delay-100"></div>
      <div className="absolute top-40 right-32 w-4 h-4 bg-purple-400/30 rounded-full animate-bounce delay-300"></div>
      <div className="absolute bottom-32 left-32 w-8 h-8 bg-pink-400/30 rounded-full animate-bounce delay-500"></div>
      <div className="absolute bottom-20 right-20 w-5 h-5 bg-indigo-400/30 rounded-full animate-bounce delay-700"></div>

      {/* Gradient Overlay for Smooth Transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue-50 to-transparent"></div>
    </section>
  );
}
