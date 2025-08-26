"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import ServicesHero from "./ServicesHero";
import ServiceCards from "./ServiceCards";
import ProcessSection from "./ProcessSection";
import CTASection from "./CTASection";
import Footer from "../../components/Footer";
import WhatsAppButton from "../../components/WhatsAppButton";

export default function ServicesPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div
      className={`min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 transition-all duration-1000 ${
        isLoaded ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-white/10 border-b border-white/20">
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
                className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer whitespace-nowrap font-semibold uppercase"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer whitespace-nowrap font-semibold uppercase"
              >
                About
              </Link>
              <Link
                href="/services"
                className="text-blue-600 font-medium cursor-pointer whitespace-nowrap font-semibold uppercase"
              >
                Services
              </Link>
              <Link
                href="/contact"
                className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer whitespace-nowrap font-semibold uppercase"
              >
                Contact
              </Link>
            </div>
            <button
              className="md:hidden text-gray-700 w-6 h-6 flex items-center justify-center cursor-pointer font-semibold uppercase"
              onClick={() => setIsNavOpen(true)}
            >
              <i className="ri-menu-line text-xl"></i>
            </button>
          </div>
        </div>
      </nav>
      {/* Main Content */}
      <main className="pt-20">
        <ServicesHero />
        <ServiceCards />
        <ProcessSection />
        <CTASection />
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
