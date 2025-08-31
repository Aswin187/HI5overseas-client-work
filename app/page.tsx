"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeDestination, setActiveDestination] = useState(0);
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    const interval = setInterval(() => {
      setActiveDestination((prev) => (prev + 1) % 4);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const studyDestinations = [
    {
      name: "Singapore",
      icon: "ri-building-line",
      color: "from-red-500 to-white",
    },
    {
      name: "Germany",
      icon: "ri-castle-line",
      color: "from-yellow-500 to-red-600",
    },
    {
      name: "UK",
      icon: "ri-government-line",
      color: "from-blue-600 to-red-500",
    },
    {
      name: "France",
      icon: "ri-ancient-pavilion-line",
      color: "from-blue-500 to-white",
    },
  ];

  const workDestinations = [
    { name: "Singapore", icon: "ri-building-4-line" },
    { name: "Europe", icon: "ri-earth-line" },
    { name: "Australia & Canada", icon: "ri-map-2-line" },
    { name: "GCC Countries", icon: "ri-oil-line" },
    { name: "Malaysia & Maldives", icon: "ri-ship-line" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-pink-200/25 rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-white/80 border-b border-white/20">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center cursor-pointer">
              <img
                src="/assets/logo.png"
                alt="Hi5Overseas"
                className="h-20 w-25"
              />
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link
                href="/"
                className="text-blue-600 font-medium cursor-pointer whitespace-nowrap font-semibold uppercase"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-black-700 hover:text-blue-600 transition-colors cursor-pointer whitespace-nowrap font-semibold uppercase"
              >
                About
              </Link>
              <Link
                href="/services"
                className="text-black-700 hover:text-blue-600 transition-colors cursor-pointer whitespace-nowrap font-semibold uppercase"
              >
                Services
              </Link>
              <Link
                href="/contact"
                className="text-black-700 hover:text-blue-600 transition-colors cursor-pointer whitespace-nowrap font-semibold uppercase"
              >
                Contact
              </Link>
            </div>
            <button
              className="md:hidden text-black-700 w-6 h-6 flex items-center justify-center cursor-pointer font-bold"
              onClick={() => setIsNavOpen(true)}
            >
              <i className="ri-menu-line text-xl"></i>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 min-h-screen flex items-center justify-center relative bg-gradient-to-r from-[#a5fafa]/30 to-blue-200/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div
              className={`transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              }`}
            >
              <div
                className="backdrop-blur-lg bg-white/10 rounded-3xl p-8 border border-white/20 shadow-2xl 
                animate-bounce-smooth"
              >
                <h1 className="text-4xl md:text-6xl font-bold text-black-700 mb-6 leading-tight font-poppins">
                  Welcome To
                  <span className="block text-blue-800 text-3xl md:text-5xl mt-2">
                    Hi5Overseas
                  </span>
                </h1>
                <h2 className="text-2xl md:text-3xl font-bold text-blue-400 mb-6">
                  Elevate Your Ambitions Across Continents
                </h2>

                <p className="text-lg text-black-700 mb-8 leading-relaxed font-inter">
                  Dreaming of studying in{" "}
                  <span className="font-bold">Germany</span> or working in
                  <span className="font-bold"> Canada</span> or{" "}
                  <span className="font-bold">Europe</span> ? You are in the
                  ideal spot. We here to help students and job seekers like
                  yourself move forward offering{" "}
                  <span className="font-bold">
                    Professional Advice, Customized Assistance, and Dedicated
                    Attention.
                  </span>
                </p>
                <p className="text-lg text-black-700 mb-8 leading-relaxed font-inter">
                  We support you throughout from identifying the ideal
                  University or Workplace to obtaining a visa and settling in a
                  new country. We believe relocation is more than just moving
                  it’ s about creating lasting personal achievements
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/services"
                    className="relative px-8 py-4 bg-gradient-to-r from-[#46EBEB] to-blue-400 text-white font-semibold rounded-full shadow-lg cursor-pointer whitespace-nowrap transition-transform duration-500 hover:scale-110 hover:rotate-1 overflow-hidden"
                  >
                    <span className="relative z-10">Explore Our Services</span>
                    <span className="absolute inset-0 rounded-full border-2 border-black-400 animate-[neonPulse_2s_infinite]"></span>
                  </Link>

                  <Link
                    href="/contact"
                    className="relative px-8 py-4 bg-gradient-to-r from-[#46EBEB] to-blue-400 text-white font-semibold rounded-full shadow-lg cursor-pointer whitespace-nowrap transition-transform duration-500 hover:scale-110 hover:rotate-1 overflow-hidden"
                  >
                    <span className="relative z-10">Start Your Journey</span>
                    <span className="absolute inset-0 rounded-full border-2 border-black-400 animate-[neonPulse_2s_infinite]"></span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Content - Image */}
            <div
              className={`transition-all duration-1000 delay-300 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              }`}
            >
              <div className="relative group">
                {/* Animated Image */}
                <img
                  src="https://wpvip.edutopia.org/wp-content/uploads/2022/10/shutterstock_183854621_1.jpg?w=2880&quality=85"
                  alt="International Students Success"
                  className="w-full h-96 object-cover rounded-3xl shadow-2xl
                  transform transition-transform duration-700
                  group-hover:scale-110 group-hover:rotate-2
                  animate-pan"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl"></div>

                {/* Floating Icon Box */}
                <div
                  className="absolute -top-4 -right-4 backdrop-blur-lg bg-white/20 rounded-2xl 
                  p-4 border border-gray/60 shadow-lg
                  animate-rotate-slow"
                >
                  <i className="ri-graduation-cap-line text-3xl bg-gradient-to-r from-[#46EBEB] to-blue-500 bg-clip-text text-transparent animate-pulse-glow"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Study Abroad Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Image */}
            <div className="relative group">
              <img
                src="https://www.odkrywamyzakryte.com/wp-content/uploads/2018/08/42289373_m.jpg"
                alt="Study Abroad"
                className="w-full h-96 object-cover rounded-3xl shadow-2xl
                transform transition-transform duration-700
                group-hover:scale-110 group-hover:rotate-2
                 animate-pan"
              />
              <div
                className="absolute -top-4 -right-4 backdrop-blur-lg bg-white/20 rounded-2xl 
                p-4 border border-gray/60 shadow-lg
                animate-rotate-slow"
              >
                <i className="ri-graduation-cap-line text-3xl bg-gradient-to-r from-[#46EBEB] to-blue-500 bg-clip-text text-transparent animate-pulse-glow"></i>
              </div>
            </div>

            {/* Right - Content */}
            <div
              className="backdrop-blur-lg bg-white/10 rounded-3xl p-8 border border-white/20 shadow-xl 
                animate-bounce-card hover:scale-105 transition-transform duration-500"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-black-700 mb-6 leading-tight font-poppins">
                Want to Study Abroad?
                <span className="block text-blue-600">
                  We Will Make It Happen
                </span>
              </h2>

              <p className="text-lg text-black-700 mb-8 leading-relaxed font-inter">
                Every student has a different dream and we get that. Whether you
                are planning to study Engineering, Design, Business, or Arts, We
                help you choose the right course and country based on what you
                want not just what's trending.
              </p>

              {/* Destinations */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-blue-400 mb-6 ">
                  Our Top Student Destinations:
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {studyDestinations.map((dest, index) => (
                    <div
                      key={dest.name}
                      className={`p-4 rounded-xl border border-gray/60 transition-all duration-500 cursor-pointer hover:scale-110 ${
                        activeDestination === index
                          ? "backdrop-blur-lg bg-gradient-to-r " +
                            dest.color +
                            " text-white shadow-lg"
                          : "backdrop-blur-lg bg-white/20 hover:bg-white/30"
                      } animate-bounce-card`}
                    >
                      <div className="flex items-center space-x-3">
                        <i className={`${dest.icon} text-2xl`}></i>
                        <span className="font-medium">{dest.name}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Services List */}
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-blue-400 mb-6 ">
                  How We Can Assist You:
                </h3>
                {[
                  "Finding the right Universities & Courses",
                  "SOPs, LORs, resumes we help you write them the right way",
                  "Visa application support",
                  "IELTS & language training",
                  "Pre-departure briefings so you know what to expect",
                ].map((service, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 text-black-700 font-bold animate-bounce-card"
                    style={{ animationDelay: `${index * 0.2}s` }} // delay for staggered effect
                  >
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-glow"></div>
                    <span>{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Abroad Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Content */}
            <div className="backdrop-blur-lg bg-white/10 rounded-3xl p-8 border border-white/20 shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold text-black-700 mb-6 leading-tight font-poppins">
                Looking to Work Abroad ?
              </h2>
              <p className="text-lg text-black-700 mb-8 leading-relaxed font-inter">
                If you are planning to build your career. We are here to support
                you every step of the way. From Skilled and Unskilled
                Opportunities in <span className="font-bold">Europe</span> to
                exciting hospitality roles in the
                <span className="font-bold"> Maldives</span> we will guide you
                to apply confidently and through the right legal channels..
              </p>

              {/* Work Destinations - Updated with Cards */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-blue-400 mb-6 ">
                  Our Global Presence
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {/* Singapore */}
                  <div className="group backdrop-blur-lg bg-white/20 rounded-2xl overflow-hidden border border-gray/60  hover:scale-105 transition-all duration-500 cursor-pointer shadow-lg hover:shadow-xl">
                    <div className="relative h-32 overflow-hidden">
                      <img
                        src="https://cdn-images-1.medium.com/v2/resize:fit:1200/1*LLNz0N_PjuUlCDuOykT_yw.jpeg"
                        alt="Singapore Work Opportunities"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      <div className="absolute bottom-2 left-3">
                        <div className="w-8 h-8 bg-white/20 backdrop-blur-lg rounded-full flex items-center justify-center">
                          <i className="ri-building-4-line text-white text-sm"></i>
                        </div>
                      </div>
                    </div>
                    <div className="p-4">
                      <h4 className="font-bold text-black-700 text-lg uppercase">
                        Singapore
                      </h4>
                      <p className="text-sm text-black-700 mt-1 font-serif italic">
                        Business & Tech Hub
                      </p>
                    </div>
                  </div>

                  {/* Europe */}
                  <div className="group backdrop-blur-lg bg-white/20 rounded-2xl overflow-hidden border border-gray/60  hover:scale-105 transition-all duration-500 cursor-pointer shadow-lg hover:shadow-xl">
                    <div className="relative h-32 overflow-hidden">
                      <img
                        src="https://i.natgeofe.com/n/075e4f53-f271-4f7a-855a-5eccdba43587/01_Europe_16x9.jpg?w=1200"
                        alt="Europe Work Opportunities"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      <div className="absolute bottom-2 left-3">
                        <div className="w-8 h-8 bg-white/20 backdrop-blur-lg rounded-full flex items-center justify-center">
                          <i className="ri-earth-line text-white text-sm"></i>
                        </div>
                      </div>
                    </div>
                    <div className="p-4">
                      <h4 className="font-bold text-black-700 text-lg uppercase">
                        Europe
                      </h4>
                      <p className="text-sm text-black-700 mt-1 font-serif italic">
                        Diverse Career Paths
                      </p>
                    </div>
                  </div>

                  {/* Australia & Canada */}
                  <div className="group backdrop-blur-lg bg-white/20 rounded-2xl overflow-hidden border border-gray/60  hover:scale-105 transition-all duration-500 cursor-pointer shadow-lg hover:shadow-xl">
                    <div className="relative h-32 overflow-hidden">
                      <img
                        src="https://dwyeyw425tqez.cloudfront.net/blogposts/427/47a5493e49d54baf6f25ff9a4f5853f1.jpg"
                        alt="Australia & Canada Work"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      <div className="absolute bottom-2 left-3">
                        <div className="w-8 h-8 bg-white/20 backdrop-blur-lg rounded-full flex items-center justify-center">
                          <i className="ri-map-2-line text-white text-sm"></i>
                        </div>
                      </div>
                    </div>
                    <div className="p-4">
                      <h4 className="font-bold text-black-700 text-lg uppercase">
                        Australia & Canada
                      </h4>
                      <p className="text-sm text-black-700 mt-1 font-serif italic">
                        Growing Economies
                      </p>
                    </div>
                  </div>

                  {/* GCC Countries */}
                  <div className="group backdrop-blur-lg bg-white/20 rounded-2xl overflow-hidden border border-gray/60  hover:scale-105 transition-all duration-500 cursor-pointer shadow-lg hover:shadow-xl">
                    <div className="relative h-32 overflow-hidden">
                      <img
                        src="https://readdy.ai/api/search-image?query=Dubai%20golden%20skyline%20with%20Burj%20Khalifa%20and%20modern%20skyscrapers%2C%20luxurious%20business%20district%2C%20GCC%20countries%20architecture%2C%20professional%20work%20environment%2C%20oil%20and%20gas%20industry%20buildings&width=300&height=200&seq=work-gcc&orientation=landscape"
                        alt="GCC Countries Work"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      <div className="absolute bottom-2 left-3">
                        <div className="w-8 h-8 bg-white/20 backdrop-blur-lg rounded-full flex items-center justify-center">
                          <i className="ri-oil-line text-white text-sm"></i>
                        </div>
                      </div>
                    </div>
                    <div className="p-4">
                      <h4 className="font-bold text-black-700 text-lg uppercase">
                        GCC Countries
                      </h4>
                      <p className="text-sm text-black-700 mt-1 font-serif italic">
                        Oil & Construction
                      </p>
                    </div>
                  </div>

                  {/* Malaysia & Maldives */}
                  <div className="group backdrop-blur-lg bg-white/20 rounded-2xl overflow-hidden border border-gray/60  hover:scale-105 transition-all duration-500 cursor-pointer shadow-lg hover:shadow-xl md:col-span-2">
                    <div className="relative h-32 overflow-hidden">
                      <img
                        src="https://readdy.ai/api/search-image?query=Split%20scene%20showing%20Kuala%20Lumpur%20Twin%20Towers%20business%20district%20and%20Maldives%20luxury%20resort%20hospitality%20industry%2C%20tropical%20work%20environments%2C%20tourism%20and%20business%20opportunities&width=600&height=200&seq=work-mal-maldives&orientation=landscape"
                        alt="Malaysia & Maldives Work"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      <div className="absolute bottom-2 left-3">
                        <div className="w-8 h-8 bg-white/20 backdrop-blur-lg rounded-full flex items-center justify-center">
                          <i className="ri-ship-line text-white text-sm"></i>
                        </div>
                      </div>
                    </div>
                    <div className="p-4">
                      <h4 className="font-bold text-black-700 text-lg uppercase">
                        Malaysia & Maldives
                      </h4>
                      <p className="text-sm text-black-700 mt-1 font-serif italic">
                        Tourism & Hospitality
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Services List */}
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-blue-400 mb-6 ">
                  Our Job Support Includes:
                </h3>
                {[
                  "Job search help",
                  "Professional resume building",
                  "Interview tips",
                  "Visa filing",
                  "Work permit guidance",
                  "Support even after you land",
                ].map((service, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3  font-bold text-black-700"
                  >
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-glow"></div>
                    <span>{service}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Image */}
            <div
              className={`transition-all duration-1000 delay-300 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              }`}
            >
              <div className="relative group">
                {/* Animated Image */}
                <img
                  src="https://imageio.forbes.com/specials-images/imageserve/66eb02da27dc7e9a3676195a/0x0.jpg?format=jpg&amp;height=900&amp;width=1600&amp;fit=bounds"
                  alt="Work Abroad"
                  className="w-full h-96 object-cover rounded-3xl shadow-2xl
                  transform transition-transform duration-700
                  group-hover:scale-110 group-hover:rotate-2
                  animate-pan"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl"></div>

                {/* Floating Icon Box */}
                <div
                  className="absolute -top-4 -right-4 backdrop-blur-lg bg-white/20 rounded-2xl 
                  p-4 border border-gray/60 shadow-lg
                  animate-rotate-slow"
                >
                  <i className="ri-briefcase-line text-3xl bg-gradient-to-r from-[#46EBEB] to-blue-500 bg-clip-text text-transparent animate-pulse-glow"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50/50 to-purple-50/50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="backdrop-blur-lg bg-white/20 rounded-3xl p-12 border border-gray/60 shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-black-700 mb-6 leading-tight font-poppins">
              Why Choose Us?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div
                className="group relative backdrop-blur-lg bg-white/30 rounded-2xl p-6 border border-white/40 
          transition-all duration-500 ease-out 
          hover:scale-105 hover:-translate-y-2 hover:rotate-1 
          hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)]"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition duration-500"></div>

                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#46EBEB] to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-500">
                    <i className="ri-heart-line text-2xl text-white"></i>
                  </div>
                  <h3 className="font-bold text-black-700 text-2xl mb-2 ">
                    Real Advice
                  </h3>
                  <p className="text-lg text-black-700 mb-8 leading-relaxed font-inter">
                    We believe in real advice not copy-paste solutions. You will
                    have a dedicated expert guiding you every step of the way.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div
                className="group relative backdrop-blur-lg bg-white/30 rounded-2xl p-6 border border-white/40 
          transition-all duration-500 ease-out 
          hover:scale-105 hover:-translate-y-2 hover:-rotate-1 
          hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)]"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-400/20 to-blue-400/20 opacity-0 group-hover:opacity-100 transition duration-500"></div>

                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#46EBEB] to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-500">
                    <i className="ri-shield-check-line text-2xl text-white"></i>
                  </div>
                  <h3 className="font-bold text-black-700 text-2xl mb-2">
                    Honest Work
                  </h3>
                  <p className="text-lg text-black-700 mb-8 leading-relaxed font-inter">
                    We don't make fake promises. We focus on honest work that
                    gets real results.
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div
                className="group relative backdrop-blur-lg bg-white/30 rounded-2xl p-6 border border-white/40 
          transition-all duration-500 ease-out 
          hover:scale-105 hover:-translate-y-2 hover:rotate-2 
          hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)]"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-400/20 to-pink-400/20 opacity-0 group-hover:opacity-100 transition duration-500"></div>

                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#46EBEB] to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-500">
                    <i className="ri-trophy-line text-2xl text-white"></i>
                  </div>
                  <h3 className="font-bold text-black-700 text-2xl mb-2">
                    Success Stories
                  </h3>
                  <p className="text-lg text-black-700 mb-8 leading-relaxed font-inter">
                    For us it's not just about sending people abroad it's about
                    building success stories.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why People Choose Us Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="backdrop-blur-lg bg-white/10 rounded-3xl p-8 border border-white/20 shadow-xl inline-block">
              <h2 className="text-3xl md:text-4xl font-bold text-black-700 mb-6 leading-tight font-poppins">
                Why People Choose Us
              </h2>
              <p className="text-lg text-black-700 mb-8 leading-relaxed font-inter">
                We know how confusing and stressful this process can be. That's
                why we keep things clear, simple and fully transparent. No
                hidden fees. No complicated terms. Just expert help you can
                count on.
              </p>
            </div>
          </div>

          {/* What You Get With Us */}
          <div className="mb-20">
            <div className="backdrop-blur-lg bg-gray/80 rounded-3xl p-8 border border-gray/20 shadow-xl">
              <h3 className="text-4xl font-bold text-black-700 mb-6 leading-tight font-poppins text-center">
                What We Offer:
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Card 1 */}
                <div
                  className="backdrop-blur-lg bg-white/20 rounded-2xl p-6 border border-gray/60 
                  hover:scale-105 hover:rotate-1 hover:shadow-2xl 
                  transition-all duration-500 text-center 
                  animate-fade-in-up"
                >
                  <div
                    className="w-12 h-12 bg-gradient-to-r from-[#46EBEB] to-blue-500 rounded-full 
                    flex items-center justify-center mx-auto mb-4 
                    animate-bounce-slow"
                  >
                    <i className="ri-team-line text-xl text-white"></i>
                  </div>
                  <p className="text-gray-800 font-semibold">
                    A team that listens, understands, and guides you
                  </p>
                </div>

                {/* Card 2 */}
                <div
                  className="backdrop-blur-lg bg-white/20 rounded-2xl p-6 border border-gray/60  
                  hover:scale-105 hover:-rotate-1 hover:shadow-2xl 
                  transition-all duration-500 text-center 
                  animate-fade-in-up delay-200"
                >
                  <div
                    className="w-12 h-12 bg-gradient-to-r from-[#46EBEB] to-blue-500 rounded-full 
                    flex items-center justify-center mx-auto mb-4 
                    animate-bounce-slow"
                  >
                    <i className="ri-user-settings-line text-xl text-white"></i>
                  </div>
                  <p className="text-gray-800 font-semibold">
                    Solutions tailored just for you not generic advice
                  </p>
                </div>

                {/* Card 3 */}
                <div
                  className="backdrop-blur-lg bg-white/20 rounded-2xl p-6 border border-gray/60  
                  hover:scale-105 hover:rotate-1 hover:shadow-2xl 
                  transition-all duration-500 text-center 
                  animate-fade-in-up delay-400"
                >
                  <div
                    className="w-12 h-12 bg-gradient-to-r from-[#46EBEB] to-blue-500 rounded-full 
                    flex items-center justify-center mx-auto mb-4 
                    animate-bounce-slow"
                  >
                    <i className="ri-notification-3-line text-xl text-white"></i>
                  </div>
                  <p className="text-gray-800 font-semibold">
                    Real time Updates and Quick Responses
                  </p>
                </div>

                {/* Card 4 */}
                <div
                  className="backdrop-blur-lg bg-white/20 rounded-2xl p-6 border border-gray/60  
                  hover:scale-105 hover:-rotate-1 hover:shadow-2xl 
                  transition-all duration-500 text-center 
                  animate-fade-in-up delay-600"
                >
                  <div
                    className="w-12 h-12 bg-gradient-to-r from-[#46EBEB] to-blue-500 rounded-full 
                    flex items-center justify-center mx-auto mb-4 
                    animate-bounce-slow"
                  >
                    <i className="ri-route-line text-xl text-white"></i>
                  </div>
                  <p className="text-gray-800 font-semibold">
                    A smooth step-by-step process
                  </p>
                </div>
              </div>

              <div className="text-center mt-8">
                <div className="backdrop-blur-lg bg-gradient-to-r from-green-100/50 to-blue-100/50 rounded-2xl p-4 border border-white/40 inline-block">
                  <p className="text-lg font-semibold text-black-700">
                    <i className="ri-trophy-line text-green-600 mr-2"></i>
                    High visa success rate and lots of happy clients
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials Section */}
      <section className="py-20 bg-gradient-to-r from-purple-50/50 to-blue-50/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="backdrop-blur-lg bg-white/10 rounded-3xl p-8 border border-white/20 shadow-xl inline-block">
              <h2 className="text-3xl md:text-4xl font-bold text-black-700 mb-6 leading-tight font-poppins">
                Our Happy Clients
              </h2>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="backdrop-blur-lg bg-white/20 rounded-3xl p-8 border border-gray/60  shadow-xl hover:scale-105 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-[#46EBEB] to-blue-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-lg">PR</span>
                </div>
                <div>
                  <h4 className="font-bold text-black-700">
                    PREM KUMAR RANA SWAMY
                  </h4>
                  <p className="text-blue-600 font-medium uppercase">
                    Singapore
                  </p>
                  <p className="text-sm text-black-700">
                    Diploma in Logistics and Supply Chain
                  </p>
                </div>
              </div>
              <div className="mb-4">
                <div className="flex text-yellow-400 mb-2">
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                </div>
              </div>
              <p className="text-lg text-black-700 mb-8 leading-relaxed font-inter">
                I'm grateful to Hi5Overseas for their support in my journey.
                Completing my Diploma in Logistics and Supply Chain has opened
                new career opportunities in Singapore and their guidance made
                the process smooth and easy.
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="backdrop-blur-lg bg-white/20 rounded-3xl p-8 border border-gray/60  shadow-xl hover:scale-105 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-[#46EBEB] to-blue-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-lg">K</span>
                </div>
                <div>
                  <h4 className="font-bold text-black-700">KARUNYA</h4>
                  <p className="text-blue-600 font-medium uppercase">
                    Maldives
                  </p>
                  <p className="text-sm text-black-700">
                    Placed in an Accounts Job
                  </p>
                </div>
              </div>
              <div className="mb-4">
                <div className="flex text-yellow-400 mb-2">
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                </div>
              </div>
              <p className="text-lg text-black-700 mb-8 leading-relaxed font-inter">
                Landing an accounting job in the Maldives has been a dream come
                true. Iam grateful for the professional guidance and support I
                received and I highly recommend their services for building an
                international career.
              </p>
            </div>

            {/* Testimonial 3 */}
            <div className="backdrop-blur-lg bg-white/20 rounded-3xl p-8 border border-gray/60  shadow-xl hover:scale-105 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-[#46EBEB] to-blue-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-lg">MM</span>
                </div>
                <div>
                  <h4 className="font-bold text-black-700">MIDHUN MOHANAN</h4>
                  <p className="text-blue-600 font-medium uppercase">
                    Malaysia
                  </p>
                  <p className="text-sm text-black-700">
                    Cashier at Restaurant
                  </p>
                </div>
              </div>
              <div className="mb-4">
                <div className="flex text-yellow-400 mb-2">
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                </div>
              </div>
              <p className="text-lg text-black-700 mb-8 leading-relaxed font-inter">
                Thanks to Hi5 Overseas, I am now working as a cashier in
                Malaysia. Their support made the whole process smooth and easy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="backdrop-blur-lg bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-3xl p-12 border border-gray/60  shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-black-700 mb-6 leading-tight font-poppins">
              Because Your Future Deserves More Than Just a Chance
            </h2>
            <p className="text-xl text-blue-600 font-bold mb-8">
              It Deserves the Best Start.
            </p>
            <p className="text-lg text-black-700 font-bold mb-8">
              Let's build your journey
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="relative px-8 py-4 bg-gradient-to-r from-[#46EBEB] to-blue-400 text-white font-semibold rounded-full shadow-lg cursor-pointer whitespace-nowrap transition-transform duration-500 hover:scale-110 hover:rotate-1 overflow-hidden"
              >
                <span className="relative z-10"> Get Free Consultation</span>

                {/* Neon glow effect */}
                <span className="absolute inset-0 rounded-full border-2 border-black-400 animate-[neonPulse_2s_infinite]"></span>
              </Link>
              <Link
                href="/about"
                className="relative px-8 py-4 bg-gradient-to-r from-[#46EBEB] to-blue-400 text-white font-semibold rounded-full shadow-lg cursor-pointer whitespace-nowrap transition-transform duration-500 hover:scale-110 hover:rotate-1 overflow-hidden"
              >
                <span className="relative z-10">Learn More About Us</span>

                {/* Neon glow effect */}
                <span className="absolute inset-0 rounded-full border-2 border-black-400 animate-[neonPulse_2s_infinite]"></span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {isNavOpen && (
        <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center">
          <div className="bg-white rounded-2xl shadow-2xl p-8 w-80 relative">
            <button
              className="absolute top-4 right-4 text-black-700 text-2xl"
              onClick={() => setIsNavOpen(false)}
            >
              <i className="ri-close-line"></i>
            </button>
            <nav className="flex flex-col space-y-6 mt-4">
              <Link
                href="/"
                onClick={() => setIsNavOpen(false)}
                className="text-blue-600 font-medium text-lg font-semibold uppercase"
              >
                Home
              </Link>
              <Link
                href="/about"
                onClick={() => setIsNavOpen(false)}
                className="text-black-700 hover:text-blue-600 text-lg font-semibold uppercase"
              >
                About
              </Link>
              <Link
                href="/services"
                onClick={() => setIsNavOpen(false)}
                className="text-black-700 hover:text-blue-600 text-lg font-semibold uppercase"
              >
                Services
              </Link>
              <Link
                href="/contact"
                onClick={() => setIsNavOpen(false)}
                className="text-black-700 hover:text-blue-600 text-lg font-semibold uppercase"
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>
      )}

      {/* Footer */}
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
