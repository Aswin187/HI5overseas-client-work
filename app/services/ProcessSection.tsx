"use client";

import { useState, useEffect, useRef } from "react";

export default function ProcessSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setActiveStep((prev) => (prev + 1) % 5);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isVisible]);

  const steps = [
    {
      number: "01",
      title: "Initial Consultation",
      description:
        "We understand your goals, background, and preferences through a detailed consultation.",
      icon: "ri-chat-3-line",
      gradient: "bg-gradient-to-r from-[#46EBEB] to-blue-500",
    },
    {
      number: "02",
      title: "Personalized Planning",
      description:
        "Create a customized roadmap tailored to your specific needs and aspirations.",
      icon: "ri-roadmap-line",
      gradient: "bg-gradient-to-r from-[#46EBEB] to-blue-500",
    },
    {
      number: "03",
      title: "Application Process",
      description:
        "Guide you through applications, documentation, and submission processes.",
      icon: "ri-file-text-line",
      gradient: "bg-gradient-to-r from-[#46EBEB] to-blue-500",
    },
    {
      number: "04",
      title: "Visa & Documentation",
      description:
        "Handle all visa requirements and ensure your documentation is perfect.",
      icon: "ri-shield-check-line",
      gradient: "bg-gradient-to-r from-[#46EBEB] to-blue-500",
    },
    {
      number: "05",
      title: "Pre-Departure Support",
      description:
        "Prepare you for your journey with comprehensive pre-departure guidance.",
      icon: "ri-flight-takeoff-line",
      gradient: "bg-gradient-to-r from-[#46EBEB] to-blue-500",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-20 px-6 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-black-700 mb-6 leading-tight font-poppins">
            Our Process
          </h2>
          <p className="text-lg text-black-600 font-semibold mb-8 leading-relaxed font-inter">
            We follow a structured approach to ensure your journey abroad is
            smooth, successful, and stress-free.
          </p>
        </div>

        {/* Desktop Process Flow */}
        <div className="hidden lg:block relative">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 transform -translate-y-1/2">
            <div
              className={`h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-[2000ms] ${
                isVisible ? "w-full" : "w-0"
              }`}
            ></div>
          </div>

          <div className="grid grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`text-center transform transition-all duration-1000 delay-${
                  index * 200
                } ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
              >
                {/* Icon Circle */}
                <div
                  className={`relative mx-auto mb-6 transition-all duration-500 ${
                    activeStep === index
                      ? "scale-110 animate-glow"
                      : "scale-100"
                  }`}
                >
                  <div
                    className={`w-20 h-20 bg-gradient-to-r ${
                      step.gradient
                    } rounded-full flex items-center justify-center relative z-10 ${
                      activeStep === index ? "animate-float" : ""
                    }`}
                  >
                    {/* <i className={`${step.icon} text-white text-2xl`}></i> */}
                  </div>
                  <div className="absolute inset-0 bg-white rounded-full transform scale-125 opacity-20"></div>
                  <div
                    className={`absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r ${step.gradient} rounded-full text-white text-xs flex items-center justify-center font-bold`}
                  >
                    {step.number}
                  </div>
                </div>

                {/* Card */}
                <div className="backdrop-blur-xl bg-white/30 rounded-2xl p-6 border border-white/40 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:rotate-1">
                  <h3 className="font-bold text-black-700 text-lg font-serif italic">
                    {step.title}
                  </h3>
                  <p className="text-sm text-black-700 mt-1 font-serif italicF">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Flow */}
        <div className="lg:hidden space-y-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`transform transition-all duration-1000 delay-${
                index * 200
              } ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "translate-x-10 opacity-0"
              }`}
            >
              <div className="backdrop-blur-xl bg-white/20 rounded-2xl p-6 border border-white/30 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.03] animate-slideUp">
                <div className="flex items-center space-x-4">
                  <div
                    className={`relative flex-shrink-0 ${
                      activeStep === index
                        ? "scale-110 animate-float"
                        : "scale-100"
                    } transition-all duration-500`}
                  >
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${step.gradient} rounded-2xl flex items-center justify-center`}
                    >
                      {/* <i className={`${step.icon} text-white text-xl`}></i> */}
                    </div>
                    <div
                      className={`absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r ${step.gradient} rounded-full text-white text-xs flex items-center justify-center font-bold`}
                    >
                      {step.number}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-black-700 text-lg font-serif italic">
                      {step.title}
                    </h3>
                    <p className="text-lg text-black-700 mb-8 leading-relaxed font-inter">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div
          className={`mt-16 transform transition-all duration-1000 delay-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="backdrop-blur-xl bg-gradient-to-r from-white/10 to-white/20 rounded-3xl p-8 border border-white/30 shadow-xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                {
                  number: "100%",
                  label: "Success Rate",
                  icon: "ri-trophy-line",
                  color: "text-yellow-600",
                },
                {
                  number: "2-4",
                  label: "Weeks Process",
                  icon: "ri-time-line",
                  color: "text-blue-600",
                },
                {
                  number: "24/7",
                  label: "Support",
                  icon: "ri-customer-service-line",
                  color: "text-green-600",
                },
                {
                  number: "10+",
                  label: "Countries",
                  icon: "ri-global-line",
                  color: "text-purple-600",
                },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="group hover:animate-wiggle transition-transform"
                >
                  <div
                    className={`w-12 h-12 ${stat.color} mx-auto mb-3 flex items-center justify-center`}
                  >
                    <i
                      className={`${stat.icon} text-2xl group-hover:scale-125 transition-transform duration-500`}
                    ></i>
                  </div>
                  <div className="text-2xl font-bold text-gray-800 mb-1 group-hover:scale-125 transition-transform duration-500">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Background elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-r from-blue-200/30 to-purple-200/30 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-r from-pink-200/30 to-indigo-200/30 rounded-full blur-3xl animate-float-slow"></div>
    </section>
  );
}
