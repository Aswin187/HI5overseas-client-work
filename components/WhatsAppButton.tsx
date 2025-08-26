"use client";

import { useState } from "react";

export default function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);

  const handleWhatsAppClick = () => {
    const phoneNumber = "+91 9384818320"; // Replace with actual WhatsApp number
    const message =
      "Hi! I am interested in your services at Hi5Overseas. Could you please provide me with more details ?";
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(
      /[^0-9]/g,
      ""
    )}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={handleWhatsAppClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 cursor-pointer animate-pulse"
      >
        {/* WhatsApp Icon */}
        <div className="w-6 h-6 flex items-center justify-center">
          <i className="ri-whatsapp-fill text-2xl"></i>
        </div>

        {/* Tooltip */}
        <div
          className={`absolute right-full mr-4 top-1/2 transform -translate-y-1/2 transition-all duration-300 ${
            isHovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2"
          }`}
        >
          <div className="backdrop-blur-lg bg-white/90 text-gray-800 px-4 py-2 rounded-xl shadow-lg border border-white/20 whitespace-nowrap">
            <div className="flex items-center space-x-2">
              <i className="ri-chat-3-line text-green-500"></i>
              <span className="font-medium">Chat with Hi5Overseas</span>
            </div>
            <div className="text-xs text-gray-600 mt-1">
              Quick response guaranteed!
            </div>
          </div>
          {/* Arrow */}
          <div className="absolute top-1/2 right-0 transform translate-x-full -translate-y-1/2">
            <div className="w-0 h-0 border-l-8 border-l-white/90 border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
          </div>
        </div>

        {/* Ripple Effect */}
        <div className="absolute inset-0 rounded-full bg-green-400 opacity-20 animate-ping"></div>

        {/* Online Status Indicator */}
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white animate-pulse">
          <div className="w-full h-full bg-green-500 rounded-full animate-ping"></div>
        </div>
      </button>

      {/* Floating Message */}
      <div
        className={`absolute bottom-full mb-4 right-0 transition-all duration-500 ${
          isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
        }`}
      >
        <div className="backdrop-blur-lg bg-green-50/90 border border-green-200 rounded-2xl p-4 shadow-xl max-w-xs">
          <div className="flex items-center space-x-3 mb-2">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
              <i className="ri-customer-service-2-line text-white text-sm"></i>
            </div>
            <div>
              <div className="font-semibold text-green-800">
                Hi5Overseas Support
              </div>
              <div className="text-xs text-green-600">
                Typically replies instantly
              </div>
            </div>
          </div>
          <p className="text-sm text-green-700">
            Need help with studying or working abroad? We're here to assist you!
            🌟
          </p>
        </div>
      </div>
    </div>
  );
}
