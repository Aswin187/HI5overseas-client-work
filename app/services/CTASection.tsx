"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function CTASection() {
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
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Inspiring%20international%20education%20consultation%20scene%20with%20happy%20diverse%20students%20celebrating%20success%2C%20modern%20office%20environment%20with%20world%20map%20and%20university%20brochures%2C%20bright%20motivational%20atmosphere%20with%20professional%20consultants%20helping%20achieve%20global%20dreams%20and%20aspirations&width=1920&height=1080&seq=cta-services-bg&orientation=landscape')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/85 via-purple-900/75 to-pink-900/65"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div
          className={`transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {/* Main CTA */}
          <div className="backdrop-blur-xl bg-white/10 rounded-3xl p-12 border border-white/20 shadow-2xl mb-12">
            <h2 className="text-4xl md:text-4xl font-bold text-white/90 mb-6 leading-tight font-poppins">
              Ready to Start Your
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Global Journey
              </span>
            </h2>

            <p className="text-lg text-white/90 mb-8 leading-relaxed font-inter">
              Don't let your dreams wait. Our expert team is ready to guide you
              through every step of your international education or career
              journey.
            </p>

            {/* CTA Buttons */}
            <div
              className={`flex flex-col sm:flex-row gap-6 justify-center transform transition-all duration-1000 delay-500 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-5 opacity-0"
              }`}
            >
              <Link
                href="/contact"
                className="relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-700 text-white font-semibold rounded-full shadow-lg cursor-pointer whitespace-nowrap transition-transform duration-500 hover:scale-110 hover:rotate-1 overflow-hidden"
              >
                <span className="relative z-10">Get Free Consultation</span>

                {/* Neon glow effect */}
                <span className="absolute inset-0 rounded-full border-2 border-black-400 animate-[neonPulse_2s_infinite]"></span>
              </Link>
              <Link
                href="/about"
                className="relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-700 text-white font-semibold rounded-full shadow-lg cursor-pointer whitespace-nowrap transition-transform duration-500 hover:scale-110 hover:rotate-1 overflow-hidden"
              >
                <span className="relative z-10">Learn More About Us</span>

                {/* Neon glow effect */}
                <span className="absolute inset-0 rounded-full border-2 border-black-400 animate-[neonPulse_2s_infinite]"></span>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div
              className={`mt-12 transform transition-all duration-1000 delay-700 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-5 opacity-0"
              }`}
            >
              <div className="flex flex-wrap justify-center items-center gap-8 text-white/80">
                <div className="flex items-center space-x-2">
                  <i className="ri-shield-check-line text-green-400 text-xl"></i>
                  <span className="text-sm font-medium">
                    Trusted by 1000+ Students
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <i className="ri-time-line text-blue-400 text-xl"></i>
                  <span className="text-sm font-medium">
                    5+ Years Experience
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <i className="ri-global-line text-purple-400 text-xl"></i>
                  <span className="text-sm font-medium">10+ Countries</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Methods */}
        </div>
      </div>

      {/* Floating Animation Elements */}
      <div className="absolute top-20 left-20 w-8 h-8 bg-blue-400/30 rounded-full animate-bounce delay-100"></div>
      <div className="absolute top-40 right-32 w-6 h-6 bg-purple-400/30 rounded-full animate-bounce delay-300"></div>
      <div className="absolute bottom-32 left-32 w-10 h-10 bg-pink-400/30 rounded-full animate-bounce delay-500"></div>
      <div className="absolute bottom-20 right-20 w-7 h-7 bg-indigo-400/30 rounded-full animate-bounce delay-700"></div>

      {/* Gradient Overlay for Smooth Transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue-50 to-transparent"></div>
    </section>
  );
}
