"use client";

import { useState, useEffect, useRef } from "react";

export default function WhyTrustUs() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: "ri-user-heart-line",
      title: "Personalized Approach",
      description:
        "We listen, understand, and recommend what's best for you not what's easiest for us.",
      gradient: "bg-gradient-to-r from-[#46EBEB] to-blue-500",
    },
    {
      icon: "ri-global-line",
      title: "Global Network",
      description:
        "We are connected with top universities and international employers across multiple countries.",
      gradient: "bg-gradient-to-r from-[#46EBEB] to-blue-500",
    },
    {
      icon: "ri-file-text-line",
      title: "Clear & Transparent",
      description: "No false promises. Just honest guidance, step-by-step.",
      gradient: "bg-gradient-to-r from-[#46EBEB] to-blue-500",
    },
    {
      icon: "ri-compass-3-line",
      title: "Complete Guidance",
      description:
        "From counseling and applications to visas and interview prep we are with you throughout.",
      gradient: "bg-gradient-to-r from-[#46EBEB] to-blue-500",
    },
    {
      icon: "ri-hand-heart-line",
      title: "Human Touch",
      description:
        "You're more than just a client — you're a partner, and we're committed to supporting and celebrating your success.",
      gradient: "bg-gradient-to-r from-[#46EBEB] to-blue-500",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-20 px-6 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-black-700 mb-6 leading-tight font-poppins">
            Why People Trust Us
          </h2>
          <p className="text-lg text-black-600 font-semibold mb-8 leading-relaxed font-inter">
            Our commitment to excellence and personalized service has made us a
            trusted partner for thousands of individuals pursuing their global
            dreams.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`transform transition-all duration-1000 delay-${
                index * 200
              } ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div
                className={`relative backdrop-blur-xl bg-white/20 rounded-3xl p-8 border border-white/30 shadow-xl hover:shadow-2xl transition-all duration-500 h-full cursor-pointer ${
                  hoveredCard === index ? "scale-105 -translate-y-2" : ""
                }`}
              >
                {/* Animated Background Gradient */}
                <div
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${feature.gradient} opacity-0 hover:opacity-10 transition-opacity duration-500`}
                ></div>

                <div className="relative z-10">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r from-[#46EBEB] to-blue-500 
                      // feature.gradient
                     rounded-2xl flex items-center justify-center mb-6 transform transition-all duration-300 ${
                       hoveredCard === index ? "rotate-12 scale-110" : ""
                     }`}
                  >
                    <i className={`${feature.icon} text-white text-2xl`}></i>
                  </div>

                  <h3 className="font-bold text-black-700 text-lg uppercase mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-lg text-black-700 mb-8 leading-relaxed font-inter">
                    {feature.description}
                  </p>

                  {/* Animated Border */}
                  <div
                    className={`absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r ${feature.gradient} opacity-0 hover:opacity-100 transition-opacity duration-500 -z-10`}
                    style={{
                      background: `linear-gradient(white, white) padding-box, linear-gradient(to right, var(--tw-gradient-stops)) border-box`,
                      backgroundClip: "padding-box, border-box",
                    }}
                  ></div>

                  {/* Floating Particles */}
                  <div
                    className={`absolute top-4 right-4 w-2 h-2 bg-gradient-to-r ${feature.gradient} rounded-full opacity-50 animate-pulse`}
                  ></div>
                  <div
                    className={`absolute bottom-6 left-6 w-1 h-1 bg-gradient-to-r ${feature.gradient} rounded-full opacity-30 animate-ping`}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute top-20 left-20 w-40 h-40 bg-blue-200/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-purple-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-10 w-20 h-20 bg-pink-200/30 rounded-full blur-2xl animate-pulse delay-500"></div>
    </section>
  );
}
