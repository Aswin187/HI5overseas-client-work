"use client";

import { useState, useEffect, useRef } from "react";

export default function ValuesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeValue, setActiveValue] = useState(0);
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

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setActiveValue((prev) => (prev + 1) % 5);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isVisible]);

  const values = [
    {
      icon: "ri-shield-check-line",
      title: "Integrity",
      description: "in every interaction",
      gradient: "from-emerald-500 to-teal-500",
      bgColor: "bg-emerald-50",
    },
    {
      icon: "ri-target-line",
      title: "Dedication",
      description: "to your goals",
      gradient: "from-blue-500 to-indigo-500",
      bgColor: "bg-blue-50",
    },
    {
      icon: "ri-eye-line",
      title: "Transparency",
      description: "in process and advice",
      gradient: "from-amber-500 to-orange-500",
      bgColor: "bg-amber-50",
    },
    {
      icon: "ri-heart-line",
      title: "Respect",
      description: "for your dreams",
      gradient: "from-pink-500 to-rose-500",
      bgColor: "bg-pink-50",
    },
    {
      icon: "ri-star-line",
      title: "Excellence",
      description: "in service delivery",
      gradient: "from-purple-500 to-violet-500",
      bgColor: "bg-purple-50",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-20 px-6 bg-gradient-to-br from-gray-50 to-slate-100 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-black-700 mb-6 leading-tight font-poppins">
            Our Values
          </h2>
          <p className="text-lg text-black-600 font-semibold mb-8 leading-relaxed font-inter">
            These core principles guide everything we do and shape how we
            interact with our clients and partners.
          </p>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:block">
          <div className="relative">
            {/* Central Hub */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="w-32 h-32 backdrop-blur-xl bg-white/30 rounded-full border border-white/40 shadow-2xl flex items-center justify-center">
                <div className="text-lg font-semibold text-blue-400 mb-6 font-serif italic">
                  VALUES
                </div>
              </div>
            </div>

            {/* Value Cards in Circle */}
            <div className="relative w-full h-96">
              {values.map((value, index) => {
                const angle = index * 72 - 90; // 360/5 = 72 degrees between each
                const radius = 180;
                const x = Math.cos((angle * Math.PI) / 180) * radius;
                const y = Math.sin((angle * Math.PI) / 180) * radius;

                return (
                  <div
                    key={index}
                    className={`absolute w-48 h-32 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-1000 delay-${
                      index * 200
                    } ${
                      isVisible
                        ? "translate-x-0 translate-y-0 opacity-100"
                        : "translate-x-0 translate-y-10 opacity-0"
                    }`}
                    style={{
                      top: "50%",
                      left: "50%",
                      transform: `translate(${x}px, ${y}px) translate(-50%, -50%) ${
                        activeValue === index ? "scale(1.1)" : "scale(1)"
                      }`,
                    }}
                  >
                    <div
                      className={`backdrop-blur-xl bg-white/20 rounded-2xl p-6 border border-white/30 shadow-xl hover:shadow-2xl transition-all duration-500 h-full cursor-pointer ${
                        activeValue === index
                          ? "ring-2 ring-blue-400 ring-opacity-50"
                          : ""
                      }`}
                    >
                      <div
                        className={`w-12 h-12 bg-gradient-to-r ${
                          value.gradient
                        } rounded-xl flex items-center justify-center mb-3 ${
                          activeValue === index ? "animate-pulse" : ""
                        }`}
                      >
                        <i className={`${value.icon} text-white text-xl`}></i>
                      </div>
                      <h3 className="font-bold text-black-700 text-lg font-serif italic">
                        {value.title}
                      </h3>
                      <p className="text-sm text-black-700 mt-1 font-serif itali">
                        {value.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Connecting Lines */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              style={{
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              {values.map((_, index) => {
                const angle = index * 72 - 90;
                const radius = 120;
                const x = Math.cos((angle * Math.PI) / 180) * radius;
                const y = Math.sin((angle * Math.PI) / 180) * radius;

                return (
                  <line
                    key={index}
                    x1="0"
                    y1="0"
                    x2={x}
                    y2={y}
                    stroke={activeValue === index ? "#3B82F6" : "#E5E7EB"}
                    strokeWidth={activeValue === index ? "3" : "1"}
                    strokeOpacity={activeValue === index ? "0.8" : "0.3"}
                    className="transition-all duration-500"
                    transform="translate(50%, 50%)"
                  />
                );
              })}
            </svg>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden space-y-6">
          {values.map((value, index) => (
            <div
              key={index}
              className={`transform transition-all duration-1000 delay-${
                index * 200
              } ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <div className="backdrop-blur-xl bg-white/20 rounded-2xl p-6 border border-white/30 shadow-xl hover:shadow-2xl transition-all duration-500">
                <div className="flex items-center space-x-4">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${value.gradient} rounded-2xl flex items-center justify-center`}
                  >
                    <i className={`${value.icon} text-white text-2xl`}></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-1">
                      {value.title}
                    </h3>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-r from-blue-200/30 to-purple-200/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-r from-pink-200/30 to-indigo-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
    </section>
  );
}
