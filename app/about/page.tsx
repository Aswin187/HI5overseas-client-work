"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

import AboutHero from "./AboutHero";
import ServicesSection from "./ServicesSection";
import WhyTrustUs from "./WhyTrustUs";
import MissionVision from "./MissionVision";
import ValuesSection from "./ValuesSection";
import FoundersSection from "./FoundersSection";
import ClosingSection from "./ClosingSection";
import Footer from "../../components/Footer";
import WhatsAppButton from "../../components/WhatsAppButton";

export default function AboutPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isNavOpen, setIsNavOpen] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    setIsLoaded(true);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Helper function for active link styling
  const linkClasses = (path: string) =>
    pathname === path
      ? "text-blue-600 font-medium cursor-pointer whitespace-nowrap"
      : "text-gray-700 hover:text-blue-600 transition-colors cursor-pointer whitespace-nowrap";

  return (
    <div
      className={`min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden transition-all duration-1000 ${
        isLoaded ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-[500px] h-[500px] bg-gradient-to-r from-purple-400/15 to-pink-400/15 rounded-full blur-3xl animate-bounce slow"></div>
        <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-gradient-to-r from-indigo-400/25 to-blue-400/25 rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* Mouse Follow Effect */}
      <div
        className="fixed pointer-events-none z-10 w-80 h-80 rounded-full bg-gradient-to-r from-blue-400/10 to-purple-400/10 blur-3xl transition-all duration-1000 ease-out"
        style={{
          left: mousePosition.x - 160,
          top: mousePosition.y - 160,
        }}
      ></div>

      {/* Enhanced Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-2xl bg-white/10 border-b border-white/20 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center cursor-pointer">
              <img
                src="/assets/logo.png"
                alt="Hi5Overseas"
                className="h-20 w-25"
              />
            </Link>
            <div className="hidden md:flex space-x-8 font-semibold uppercase">
              <Link href="/" className={linkClasses("/")}>
                Home
              </Link>
              <Link href="/about" className={linkClasses("/about")}>
                About
              </Link>
              <Link href="/services" className={linkClasses("/services")}>
                Services
              </Link>
              <Link href="/contact" className={linkClasses("/contact")}>
                Contact
              </Link>
            </div>
            <button
              className="md:hidden text-gray-700 w-6 h-6 flex items-center justify-center cursor-pointer"
              onClick={() => setIsNavOpen(true)}
            >
              <i className="ri-menu-line text-xl"></i>
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-20">
        <AboutHero />
        <ServicesSection />
        <WhyTrustUs />
        <MissionVision />
        <FoundersSection />
        <ValuesSection />
        <ClosingSection />
      </main>

      {isNavOpen && (
        <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center">
          <div className="bg-white rounded-2xl shadow-2xl p-8 w-80 relative">
            <button
              className="absolute top-4 right-4 text-gray-700 text-2xl"
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
                className="text-gray-700 hover:text-blue-600 text-lg font-semibold uppercase"
              >
                About
              </Link>
              <Link
                href="/services"
                onClick={() => setIsNavOpen(false)}
                className="text-gray-700 hover:text-blue-600 text-lg font-semibold uppercase"
              >
                Services
              </Link>
              <Link
                href="/contact"
                onClick={() => setIsNavOpen(false)}
                className="text-gray-700 hover:text-blue-600 text-lg font-semibold uppercase"
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>
      )}

      {/* Footer */}
      <Footer />
      {/* WhatsApp Button */}
      <WhatsAppButton />
    </div>
  );
}
