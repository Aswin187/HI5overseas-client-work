"use client";

import { useState, useEffect } from "react";

export default function ServicesHero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Professional%20international%20education%20services%20office%20with%20diverse%20students%20and%20consultants%20working%20together%2C%20modern%20workspace%20with%20world%20maps%20and%20university%20flags%2C%20bright%20inspiring%20atmosphere%20with%20laptops%20and%20documents%2C%20clean%20aesthetic%20with%20global%20connectivity%20themes%20and%20educational%20elements&width=1920&height=1080&seq=services-hero-bg&orientation=landscape')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-purple-900/60 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto text-center">
        <div
          className={`transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {/* Glassmorphism Card */}
          <div className="backdrop-blur-xl bg-white/10 rounded-3xl p-6 sm:p-12 border border-white/20 shadow-2xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white/90 mb-6 leading-tight font-poppins">
              Our Services
            </h1>

            <div className="text-2xl md:text-3xl font-semibold text-blue-400 mb-6 font-serif italic">
              Your Dream. Our Guidance.
            </div>

            <p className="text-lg text-white/90 mb-8 leading-relaxed font-inter">
              At Hi5Overseas, we believe that studying or working abroad isn't
              just a process—it's a life-changing journey. That's why we're here
              to guide you through every step with care, clarity, and
              commitment.
            </p>

            <div
              className={`transform transition-all duration-1000 delay-500 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <p className="text-lg text-white/90 mb-8 leading-relaxed font-inter">
                From choosing the right path to settling into a new country,
                we've got your back.
              </p>

              {/* Animated Service Icons */}
              <div className="flex flex-col sm:flex-row sm:justify-center sm:space-x-8 space-y-6 sm:space-y-0 mt-6 sm:mt-12">
                <div className="animate-bounce delay-100">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-2xl flex items-center justify-center backdrop-blur-lg border border-white/20 hover:scale-110 transition-transform duration-300 mx-auto">
                    <i className="ri-graduation-cap-line text-white text-2xl sm:text-3xl"></i>
                  </div>
                  <p className="text-white/80 text-xs sm:text-sm mt-2">
                    Study Abroad
                  </p>
                </div>
                <div className="animate-bounce delay-300">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-purple-400 to-pink-400 rounded-2xl flex items-center justify-center backdrop-blur-lg border border-white/20 hover:scale-110 transition-transform duration-300 mx-auto">
                    <i className="ri-briefcase-line text-white text-2xl sm:text-3xl"></i>
                  </div>
                  <p className="text-white/80 text-xs sm:text-sm mt-2">
                    Jobs Abroad
                  </p>
                </div>
                <div className="animate-bounce delay-500">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-green-400 to-blue-400 rounded-2xl flex items-center justify-center backdrop-blur-lg border border-white/20 hover:scale-110 transition-transform duration-300 mx-auto">
                    <i className="ri-passport-line text-white text-2xl sm:text-3xl"></i>
                  </div>
                  <p className="text-white/80 text-xs sm:text-sm mt-2">
                    Visa Support
                  </p>
                </div>
                <div className="animate-bounce delay-700">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-orange-400 to-red-400 rounded-2xl flex items-center justify-center backdrop-blur-lg border border-white/20 hover:scale-110 transition-transform duration-300 mx-auto">
                    <i className="ri-plane-line text-white text-2xl sm:text-3xl"></i>
                  </div>
                  <p className="text-white/80 text-xs sm:text-sm mt-2">
                    Pre-Departure
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Background Elements */}
      <div className="absolute top-20 left-10 w-16 sm:w-24 h-16 sm:h-24 bg-blue-400/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-24 sm:w-32 h-24 sm:h-32 bg-purple-400/20 rounded-full blur-xl animate-pulse delay-700"></div>
      <div className="absolute top-1/3 right-10 sm:right-20 w-12 sm:w-16 h-12 sm:h-16 bg-pink-400/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute bottom-1/3 left-10 sm:left-20 w-14 sm:w-20 h-14 sm:h-20 bg-green-400/20 rounded-full blur-xl animate-pulse delay-500"></div>
    </section>
  );
}
