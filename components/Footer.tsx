"use client";

import Link from "next/link";
import ReactCountryFlag from "react-country-flag";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-400/10 rounded-full blur-2xl animate-pulse"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <Link
                href="/"
                className="text-3xl md:text-3xl font-bold text-black-700 mb-6 leading-tight font-poppins"
              >
                Hi5Overseas
              </Link>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                Your trusted partner for studying and working abroad. We turn
                your international dreams into reality with expert guidance,
                personalized support, and genuine care.
              </p>
              <div className="flex space-x-4">
                {/* Facebook */}
                <a
                  href="https://www.facebook.com/people/Hi5-overseas/61578313485102/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-blue-600/20 backdrop-blur-lg rounded-full flex items-center justify-center hover:bg-blue-600/30 transition-colors cursor-pointer"
                >
                  <i className="ri-facebook-fill text-blue-400"></i>
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/9384818320"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-green-600/20 backdrop-blur-lg rounded-full flex items-center justify-center hover:bg-green-600/30 transition-colors cursor-pointer"
                >
                  <i className="ri-whatsapp-fill text-green-400"></i>
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/hi5overseas/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-pink-600/20 backdrop-blur-lg rounded-full flex items-center justify-center hover:bg-pink-600/30 transition-colors cursor-pointer"
                >
                  <i className="ri-instagram-fill text-pink-400"></i>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-6">
                Quick Links
              </h3>
              <div className="space-y-3">
                <Link
                  href="/"
                  className="block text-gray-300 hover:text-blue-400 transition-colors cursor-pointer"
                >
                  <i className="ri-home-line mr-2"></i>Home
                </Link>
                <Link
                  href="/about"
                  className="block text-gray-300 hover:text-blue-400 transition-colors cursor-pointer"
                >
                  <i className="ri-information-line mr-2"></i>About Us
                </Link>
                <Link
                  href="/services"
                  className="block text-gray-300 hover:text-blue-400 transition-colors cursor-pointer"
                >
                  <i className="ri-service-line mr-2"></i>Our Services
                </Link>
                <Link
                  href="/contact"
                  className="block text-gray-300 hover:text-blue-400 transition-colors cursor-pointer"
                >
                  <i className="ri-phone-line mr-2"></i>Contact Us
                </Link>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-6">
                Our Services
              </h3>
              <div className="space-y-3">
                <div className="text-gray-300">
                  <i className="ri-graduation-cap-line mr-2 text-blue-400"></i>
                  Study Abroad Guidance
                </div>
                <div className="text-gray-300">
                  <i className="ri-briefcase-line mr-2 text-purple-400"></i>Jobs
                  Abroad Assistance
                </div>
                <div className="text-gray-300">
                  <i className="ri-passport-line mr-2 text-green-400"></i>Visa
                  Support
                </div>
                <div className="text-gray-300">
                  <i className="ri-school-line mr-2 text-orange-400"></i>
                  Admission Assistance
                </div>
                <div className="text-gray-300">
                  <i className="ri-flight-takeoff-line mr-2 text-pink-400"></i>
                  Others
                </div>
              </div>
            </div>
          </div>

          {/* Contact Info Bar */}
          <div className="mt-12 pt-8 border-t border-gray-700/50">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="backdrop-blur-lg bg-white/5 rounded-2xl p-6 border border-white/10">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center">
                    <i className="ri-map-pin-line text-xl text-blue-400"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Visit Us</h4>
                    <p className="text-gray-300 text-sm">
                      Hi5 overseas Cabin no 11 2nd floor Gulecha Tower Arcot
                      Road Vadapalani-600026 Chennai
                    </p>
                  </div>
                </div>
              </div>

              <div className="backdrop-blur-lg bg-white/5 rounded-2xl p-6 border border-white/10">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-600/20 rounded-full flex items-center justify-center">
                    <i className="ri-phone-line text-xl text-green-400"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Call Us</h4>
                    <p className="text-gray-300 text-sm">+91 9384818320</p>
                  </div>
                </div>
              </div>

              <div className="backdrop-blur-lg bg-white/5 rounded-2xl p-6 border border-white/10">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-600/20 rounded-full flex items-center justify-center">
                    <i className="ri-mail-line text-xl text-purple-400"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Email Us</h4>
                    <p className="text-gray-300 text-sm">
                      info@hi5overseas.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Popular Destinations */}
          <div className="mt-12 pt-8 border-t border-gray-700/50">
            <h3 className="text-2xl md:text-2xl font-bold text-black-700 mb-6 leading-tight font-poppins text-center">
              Popular Destinations
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { name: "Singapore", code: "SG" },
                { name: "Germany", code: "DE" },
                { name: "United Kingdom", code: "GB" },
                { name: "France", code: "FR" },
                { name: "Canada", code: "CA" },
                { name: "Australia", code: "AU" },
                { name: "UAE", code: "AE" },
                { name: "Malaysia", code: "MY" },
                { name: "Maldives", code: "MV" },
              ].map((country, index) => (
                <div
                  key={index}
                  className="backdrop-blur-lg bg-white/5 rounded-full px-4 py-2 border border-white/10 hover:bg-white/10 transition-colors cursor-pointer"
                >
                  <span className="text-gray-300 text-sm flex items-center gap-2">
                    <ReactCountryFlag
                      countryCode={country.code}
                      svg
                      style={{ width: "1.5em", height: "1.5em" }}
                    />
                    {country.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700/50 bg-black/20 backdrop-blur-lg">
          <div className="max-w-7xl mx-auto px-6 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-gray-400 text-sm">
                &copy; {currentYear} Hi5Overseas. All rights reserved. | Making
                dreams come true since 2025
              </div>
              <div className="flex space-x-6 text-sm">
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition-colors cursor-pointer"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition-colors cursor-pointer"
                >
                  Terms of Service
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition-colors cursor-pointer"
                >
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-8 lg:mb-0"></div>
    </footer>
  );
}
