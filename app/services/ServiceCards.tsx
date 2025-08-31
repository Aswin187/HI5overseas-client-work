"use client";

import { useState, useEffect, useRef } from "react";

export default function ServiceCards() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
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

  const services = [
    {
      icon: "ri-graduation-cap-line",
      title: "Study Abroad Guidance",
      subtitle: "The world is your classroom.",
      description:
        "We help you explore top universities across the globe, choose the right course, and handle all the paperwork — so you can focus on your future.",
      features: [
        "Personalized course & country selection",
        "University applications made easy",
        "SOP, LOR & documentation support",
        "Full visa guidance",
        "Pre-departure briefing and support",
      ],
      gradient: "from-blue-500 to-cyan-500",
      bgImage:
        "https://blog.aifsabroad.com/wp-content/uploads/2020/02/aifs-study-abroad-preparation-research.jpg",
      animation: {
        enter: "translate-y-[50px] opacity-0",
        active: "translate-y-0 opacity-100",
        hover: "hover:animate-bounce",
      },
    },
    {
      icon: "ri-briefcase-line",
      title: "Jobs Abroad Assistance",
      subtitle: "Step into your global career.",
      description:
        "Looking for opportunities to work overseas? We connect skilled professionals with the right job roles abroad, helping you prepare and apply with confidence.",
      features: [
        "Job search & employer connections",
        "CV polishing & interview training",
        "Visa and relocation guidance",
        "Post-arrival support for smooth onboarding",
      ],
      gradient: "from-blue-500 to-cyan-500",
      bgImage:
        "https://www.raoconsultants.com/wp-content/uploads/2024/05/1-38.png",
      animation: {
        enter: "translate-y-[50px] opacity-0",
        active: "translate-y-0 opacity-100",
        hover: "hover:animate-bounce",
      },
    },
    {
      icon: "ri-passport-line",
      title: "Visa Support",
      subtitle: "Your visa, handled with care.",
      description:
        "Visa applications can be confusing — but not with us. We guide you through the process with clarity and expert support, ensuring everything is in place.",
      features: [
        "Student visas",
        "Work visas",
        "Dependent & visitor visas",
        "Document checks & interview prep",
      ],
      gradient: "from-blue-500 to-cyan-500",
      bgImage:
        "https://www.joinincampus.com/assets/images/web/visa-assistance-thumb.png",
      animation: {
        enter: "translate-y-[50px] opacity-0",
        active: "translate-y-0 opacity-100",
        hover: "hover:animate-bounce",
      },
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-12 px-4 sm:px-6 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        {services.map((service, index) => (
          <div
            key={index}
            className={`transform transition-all duration-700 ease-out ${
              isVisible ? service.animation.active : service.animation.enter
            }`}
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div
              className={`grid gap-8 items-center ${
                index % 2 === 0
                  ? "lg:grid-cols-2"
                  : "lg:grid-cols-2 lg:grid-flow-col-dense"
              }`}
            >
              {/* Content */}
              <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                <div
                  className={`relative backdrop-blur-xl bg-white/30 rounded-2xl p-6 sm:p-8 border border-white/40 shadow-xl hover:shadow-2xl transition-all duration-500 ${service.animation.hover}`}
                >
                  <div
                    className={`w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r ${
                      service.gradient
                    } rounded-xl flex items-center justify-center mb-4 sm:mb-6 ${
                      hoveredCard === index ? "scale-110 animate-pulse" : ""
                    } transition-all duration-300`}
                  >
                    <i
                      className={`${service.icon} text-white text-xl sm:text-2xl`}
                    ></i>
                  </div>

                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-2 uppercase">
                    {service.title}
                  </h3>
                  <p
                    className={`text-base font-medium text-transparent bg-clip-text bg-gradient-to-r ${service.gradient} mb-3 uppercase`}
                  >
                    {service.subtitle}
                  </p>
                  <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed font-semibold">
                    {service.description}
                  </p>

                  <div className="space-y-2 sm:space-y-3">
                    <h4 className="font-semibold text-gray-800 mb-2">
                      What we do:
                    </h4>
                    {service.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className={`flex items-center space-x-2 sm:space-x-3 transition-all duration-500 ${
                          isVisible
                            ? "translate-x-0 opacity-100"
                            : "translate-x-3 opacity-0"
                        }`}
                      >
                        <div
                          className={`w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-r ${service.gradient} rounded-full flex items-center justify-center flex-shrink-0`}
                        >
                          <i className="ri-check-line text-white text-xs sm:text-sm"></i>
                        </div>
                        <span className="text-gray-700 text-sm sm:text-base font-bold">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Image with zoom-in/out animation */}
              <div className={`${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                <div className="relative group">
                  <div
                    className={`w-full h-56 sm:h-72 md:h-80 bg-cover bg-center rounded-2xl shadow-xl transform transition-all duration-[4000ms] ease-in-out animate-[zoomInOut_6s_ease-in-out_infinite] ${
                      hoveredCard === index ? "scale-105" : ""
                    }`}
                    style={{ backgroundImage: `url(${service.bgImage})` }}
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-20 rounded-2xl group-hover:opacity-30 transition-opacity`}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* background decoration (disabled for mobile) */}
      <div className="hidden sm:block absolute top-40 left-20 w-32 h-32 bg-blue-200/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="hidden sm:block absolute bottom-40 right-20 w-40 h-40 bg-purple-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

      {/* Custom keyframes for zoom in/out */}
      <style jsx>{`
        @keyframes zoomInOut {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.08);
          }
        }
      `}</style>
    </section>
  );
}
