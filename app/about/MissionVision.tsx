"use client";

import { useState, useEffect, useRef } from "react";

export default function MissionVision() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [counts, setCounts] = useState({
    students: 0,
    countries: 0,
    success: 0,
    years: 0,
  });

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

  useEffect(() => {
    setIsVisible(true);

    if (isVisible) {
      let interval = setInterval(() => {
        setCounts((prev) => ({
          students: prev.students < 1000 ? prev.students + 50 : 1000,
          countries: prev.countries < 10 ? prev.countries + 1 : 10,
          success: prev.success < 100 ? prev.success + 1 : 100,
          years: prev.years < 5 ? prev.years + 1 : 5,
        }));
      }, 40);

      return () => clearInterval(interval);
    }
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="py-20 px-6 relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Professional%20modern%20office%20environment%20with%20global%20education%20themes%2C%20international%20students%20and%20consultants%20working%20together%2C%20bright%20inspiring%20workspace%20with%20world%20maps%20and%20university%20imagery%2C%20clean%20minimalist%20aesthetic%20with%20soft%20natural%20lighting%20and%20motivational%20atmosphere&width=1920&height=1080&seq=mission-vision-bg&orientation=landscape')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/90 via-purple-50/90 to-pink-50/90"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Mission */}
          <div
            className={`transform transition-all duration-1000 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-10 opacity-0"
            }`}
          >
            <div className="backdrop-blur-xl bg-white/20 rounded-3xl p-10 border border-white/30 shadow-2xl hover:shadow-3xl transition-all duration-500 h-full group hover:scale-105">
              <div className="w-20 h-20 bg-gradient-to-r from-[#46EBEB] to-blue-500 rounded-3xl flex items-center justify-center mb-8 group-hover:rotate-12 transition-transform duration-500">
                <i className="ri-rocket-line text-white text-3xl"></i>
              </div>

              <h3 className="font-bold text-black-700 text-2xl uppercase mb-4">
                Our Mission
              </h3>
              <p className="text-lg text-black-700 mb-8 leading-relaxed font-inter">
                To make international education and career opportunities more
                approachable, affordable, and achievable for everyone.
              </p>

              {/* Animated Progress Bar */}
              <div className="mt-8">
                <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r from-[#46EBEB] to-blue-500 rounded-full transition-all duration-2000 delay-500 ${
                      isVisible ? "w-full" : "w-0"
                    }`}
                  ></div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute top-6 right-6 w-3 h-3 bg-blue-400 rounded-full animate-pulse opacity-60"></div>
              <div className="absolute bottom-8 right-8 w-2 h-2 bg-purple-400 rounded-full animate-ping opacity-40"></div>
            </div>
          </div>

          {/* Vision */}
          <div
            className={`transform transition-all duration-1000 delay-300 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-10 opacity-0"
            }`}
          >
            <div className="backdrop-blur-xl bg-white/20 rounded-3xl p-10 border border-white/30 shadow-2xl hover:shadow-3xl transition-all duration-500 h-full group hover:scale-105">
              <div className="w-20 h-20 bg-gradient-to-r from-[#46EBEB] to-blue-500 rounded-3xl flex items-center justify-center mb-8 group-hover:rotate-12 transition-transform duration-500">
                <i className="ri-eye-line text-white text-3xl"></i>
              </div>

              <h3 className="font-bold text-black-700 text-2xl uppercase mb-4">
                Our Vision
              </h3>
              <p className="text-lg text-black-700 mb-8 leading-relaxed font-inter">
                To become a trusted name in overseas education and job
                consultancy by empowering thousands of individuals to shape
                their future with confidence.
              </p>

              {/* Animated Progress Bar */}
              <div className="mt-8">
                <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r from-[#46EBEB] to-blue-500 rounded-full transition-all duration-2000 delay-800 ${
                      isVisible ? "w-full" : "w-0"
                    }`}
                  ></div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute top-6 right-6 w-3 h-3 bg-purple-400 rounded-full animate-pulse opacity-60"></div>
              <div className="absolute bottom-8 right-8 w-2 h-2 bg-pink-400 rounded-full animate-ping opacity-40"></div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div
          className={`mt-16 transform transition-all duration-1000 delay-500 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="backdrop-blur-xl bg-gradient-to-r from-white/10 to-white/20 rounded-3xl p-8 border border-white/30 shadow-xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="group">
                <div className="text-3xl font-extrabold text-blue-600 mb-2 animate-bounce">
                  {counts.students}+
                </div>
                <div className="text-gray-600 font-medium">Students Helped</div>
              </div>
              <div className="group">
                <div className="text-3xl font-extrabold text-purple-600 mb-2 animate-pulse">
                  {counts.countries}+
                </div>
                <div className="text-gray-600 font-medium">Countries</div>
              </div>
              <div className="group">
                <div className="text-3xl font-extrabold text-pink-600 mb-2 transition-transform duration-500 group-hover:rotate-6">
                  {counts.success}%
                </div>
                <div className="text-gray-600 font-medium">Success Rate</div>
              </div>
              <div className="group">
                <div className="text-3xl font-extrabold text-indigo-600 mb-2 transition-transform duration-500 group-hover:scale-125">
                  {counts.years}+
                </div>
                <div className="text-gray-600 font-medium">
                  Years Experience
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute top-32 left-32 w-24 h-24 bg-blue-300/20 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-32 right-32 w-32 h-32 bg-purple-300/20 rounded-full blur-2xl animate-pulse delay-700"></div>
    </section>
  );
}
