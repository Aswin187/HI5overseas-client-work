"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Footer from "../../components/Footer";
import WhatsAppButton from "../../components/WhatsAppButton";

export default function ContactPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("");

    try {
      // Send email using API endpoint
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setIsSubmitting(false);
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });

        setTimeout(() => {
          setSubmitStatus("");
        }, 5000);
      } else {
        throw new Error(result.error || "Failed to send message");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setIsSubmitting(false);
      setSubmitStatus("error");

      setTimeout(() => {
        setSubmitStatus("");
      }, 5000);
    }
  };

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
                className="h-12 w-auto"
              />
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link
                href="/"
                className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer whitespace-nowrap"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer whitespace-nowrap"
              >
                About
              </Link>
              <Link
                href="/services"
                className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer whitespace-nowrap"
              >
                Services
              </Link>
              <Link
                href="/contact"
                className="text-blue-600 font-medium cursor-pointer whitespace-nowrap"
              >
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

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div
            className={`text-center mb-16 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="backdrop-blur-lg bg-white/10 rounded-3xl p-8 border border-white/20 shadow-xl inline-block">
              <h1 className="text-4xl md:text-6xl font-bold text-black-700 mb-6 leading-tight font-poppins">
                📞 Get in Touch
              </h1>
              <p className="text-2xl md:text-3xl font-semibold text-blue-400 mb-6 font-serif italic">
                Ready to Start Your Journey?
              </p>
              <p className="text-lg text-black-700 mb-8 leading-relaxed font-inter">
                Whether you're ready to fly or just starting to explore options,
                we'd love to hear from you. Let's discuss your dreams and make
                them reality together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            {/* Visit Us */}
            <div
              className={`backdrop-blur-lg bg-white/20 rounded-3xl p-8 border border-white/30 shadow-xl text-center transform transition-all duration-700 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0 rotate-0 scale-100 animate-float"
                  : "opacity-0 translate-y-10 rotate-6 scale-90"
              }`}
            >
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
                <i className="ri-map-pin-line text-3xl text-white"></i>
              </div>
              <h2 className="font-bold text-black-700 text-2xl font-serif italic">
                Visit Our Office
              </h2>
              <p className="text-lg text-black-600  mb-8 leading-relaxed font-inter">
                Drop by our office for a face-to-face consultation. We're here
                to answer all your questions in person.
              </p>
              <div className="space-y-2 text-gray-700">
                <p className="text-lg text-black-600 font-semibold mb-8 leading-relaxed font-inter">
                  <i className="ri-building-line mr-2 text-blue-600"></i>
                  Hi5Overseas Consultancy
                </p>
                <p className="text-lg text-black-600 font-semibold mb-8 leading-relaxed font-inter">
                  <i className="ri-map-pin-2-line mr-2 text-blue-600"></i>
                  Hi5 overseas Cabin no 11 2nd floor Gulecha Tower Arcot Road
                  Vadapalani-600026
                </p>
                <p className="text-lg text-black-600 font-semibold mb-8 leading-relaxed font-inter">
                  <i className="ri-time-line mr-2 text-blue-600"></i>
                  Mon-Sat: 9:00 AM - 6:00 PM
                </p>
              </div>
            </div>

            {/* Call/WhatsApp */}
            <div
              className={`backdrop-blur-lg bg-white/20 rounded-3xl p-8 border border-white/30 shadow-xl text-center transform transition-all duration-700 ease-out delay-200 ${
                isVisible
                  ? "opacity-100 translate-y-0 rotate-0 scale-100 animate-float"
                  : "opacity-0 translate-y-10 rotate-6 scale-90"
              }`}
            >
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce-slow">
                <i className="ri-whatsapp-line text-3xl text-white"></i>
              </div>
              <h2 className="font-bold text-black-700 text-2xl font-serif italic">
                Call or WhatsApp
              </h2>
              <p className="text-lg text-black-600  mb-8 leading-relaxed font-inter">
                Quick responses to all your questions. We're just a call or
                message away from helping you.
              </p>
              <div className="space-y-4">
                <div className="backdrop-blur-lg bg-white/30 rounded-xl p-4 border border-white/40">
                  <p className="text-lg text-black-600 font-semibold mb-8 leading-relaxed font-inter">
                    <i className="ri-phone-line mr-2 text-green-600"></i>
                    +91 9384818321
                  </p>
                </div>
                <div className="backdrop-blur-lg bg-white/30 rounded-xl p-4 border border-white/40">
                  <p className="text-lg text-black-600 font-semibold mb-8 leading-relaxed font-inter">
                    <i className="ri-whatsapp-line mr-2 text-green-600"></i>
                    +91 9384818320
                  </p>
                </div>
              </div>
            </div>

            {/* Email */}
            <div
              className={`backdrop-blur-lg bg-white/20 rounded-3xl p-8 border border-white/30 shadow-xl text-center transform transition-all duration-700 ease-out delay-400 ${
                isVisible
                  ? "opacity-100 translate-y-0 rotate-0 scale-100 animate-float"
                  : "opacity-0 translate-y-10 rotate-6 scale-90"
              }`}
            >
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
                <i className="ri-mail-line text-3xl text-white"></i>
              </div>
              <h2 className="font-bold text-black-700 text-2xl font-serif italic">
                Email Us
              </h2>
              <p className="text-lg text-black-600  mb-8 leading-relaxed font-inter">
                Send us detailed queries and we'll get back to you with
                comprehensive answers within 24 hours.
              </p>
              <div className="space-y-4">
                <div className="backdrop-blur-lg bg-white/30 rounded-xl p-4 border border-white/40">
                  <p className="text-lg text-black-600 font-semibold mb-8 leading-relaxed font-inter">
                    <i className="ri-mail-line mr-2 text-purple-600"></i>
                    info@hi5overseas.com
                  </p>
                </div>
                <div className="backdrop-blur-lg bg-white/30 rounded-xl p-4 border border-white/40">
                  <p className="text-lg text-black-600 font-semibold mb-8 leading-relaxed font-inter">
                    <i className="ri-customer-service-line mr-2 text-purple-600"></i>
                    hr@hi5overseas.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-6">
          <div
            className={`backdrop-blur-lg bg-white/10 rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl transition-all duration-1000 delay-600 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="text-center mb-8">
              <h2 className="text-4xl md:text-5xl font-bold text-black-700 mb-6 leading-tight font-poppins">
                💬 Send Us a Message
              </h2>
              <p className="text-lg text-black-600 font-semibold mb-8 leading-relaxed font-inter">
                Fill out the form below and we'll get back to you as soon as
                possible
              </p>
            </div>

            <form
              id="contact-form"
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 backdrop-blur-lg bg-white/20 border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800 placeholder-gray-500"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 backdrop-blur-lg bg-white/20 border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800 placeholder-gray-500"
                    placeholder="Enter your email address"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 backdrop-blur-lg bg-white/20 border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800 placeholder-gray-500"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <label
                    htmlFor="service"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Service Interested In
                  </label>
                  <div className="relative">
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 pr-8 backdrop-blur-lg bg-white/20 border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800 appearance-none cursor-pointer"
                    >
                      <option value="">Select a service</option>
                      <option value="study-abroad">
                        Study Abroad Guidance
                      </option>
                      <option value="jobs-abroad">
                        Jobs Abroad Assistance
                      </option>
                      <option value="visa-support">Visa Support</option>
                      <option value="admission-assistance">
                        Admission Assistance
                      </option>
                      <option value="other">Other</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <i className="ri-arrow-down-s-line text-gray-500"></i>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  maxLength={500}
                  rows={6}
                  className="w-full px-4 py-3 backdrop-blur-lg bg-white/20 border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800 placeholder-gray-500 resize-none"
                  placeholder="Tell us about your plans, questions, or how we can help you..."
                ></textarea>
                <div className="text-right text-sm text-gray-500 mt-1">
                  {formData.message.length}/500 characters
                </div>
              </div>

              {submitStatus === "success" && (
                <div className="backdrop-blur-lg bg-green-100/50 border border-green-200 rounded-xl p-4 text-center">
                  <i className="ri-check-circle-line text-2xl text-green-600 mb-2"></i>
                  <p className="text-green-700 font-medium">
                    Thank you! Your message has been sent successfully. We'll
                    get back to you soon.
                  </p>
                </div>
              )}

              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="relative overflow-hidden px-8 py-4
      bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600
      text-white font-semibold rounded-full
      transition-all duration-300
      shadow-lg hover:shadow-2xl
      cursor-pointer whitespace-nowrap
      transform hover:scale-110 active:scale-95
      disabled:opacity-50 disabled:cursor-not-allowed
      animate-bounce-slow group"
                >
                  {/* shiny sweep animation */}
                  <span className="absolute top-0 left-[-150%] w-[50%] h-full bg-white/30 skew-x-[-20deg] animate-shine"></span>

                  {isSubmitting ? (
                    <>
                      <i className="ri-loader-4-line animate-spin mr-2"></i>
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <i className="ri-send-plane-fill mr-2 animate-pulse"></i>
                      Send Message
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div
            className={`backdrop-blur-lg bg-white/10 rounded-3xl p-8 border border-white/20 shadow-xl transition-all duration-1000 delay-800 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="text-center mb-8">
              <h2 className="text-4xl md:text-5xl font-bold text-black-700 mb-6 leading-tight font-poppins">
                Find Us Here
              </h2>
              <p className="text-lg text-black-600 font-semibold mb-8 leading-relaxed font-inter">
                Located in the heart of the business district for your
                convenience
              </p>
            </div>
            <div className="h-96 rounded-2xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.9537353153167!3d-37.81627997975195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2sEnvato!5e0!3m2!1sen!2sau!4v1619223739735!5m2!1sen!2sau"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50/50 to-purple-50/50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="backdrop-blur-lg bg-white/10 rounded-3xl p-8 border border-white/20 shadow-xl inline-block">
              <h2 className="text-4xl md:text-5xl font-bold text-black-700 mb-6 leading-tight font-poppins">
                ❓ Frequently Asked Questions
              </h2>
              <p className="text-lg text-black-600 font-semibold mb-8 leading-relaxed font-inter">
                Quick answers to common questions about our services
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="backdrop-blur-lg bg-white/20 rounded-2xl p-6 border border-white/30 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                How long does the visa application process take?
              </h3>
              <p className="text-gray-700">
                The timeline varies by country and visa type, typically ranging
                from 2-8 weeks. We provide detailed timelines for each
                destination and keep you updated throughout the process.
              </p>
            </div>

            <div className="backdrop-blur-lg bg-white/20 rounded-2xl p-6 border border-white/30 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Do you charge consultation fees?
              </h3>
              <p className="text-gray-700">
                Your first consultation is completely free! We believe in
                providing value upfront and only charge for our comprehensive
                services after you decide to work with us.
              </p>
            </div>

            <div className="backdrop-blur-lg bg-white/20 rounded-2xl p-6 border border-white/30 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                What documents do I need to get started?
              </h3>
              <p className="text-gray-700">
                Basic documents include your passport, educational certificates,
                work experience letters, and language test scores. We provide a
                complete checklist based on your specific goals and destination.
              </p>
            </div>

            <div className="backdrop-blur-lg bg-white/20 rounded-2xl p-6 border border-white/30 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Do you provide support after I reach my destination?
              </h3>
              <p className="text-gray-700">
                Absolutely! Our support continues even after you land. We help
                with airport pickup, accommodation, bank account setup, and
                settling into your new environment.
              </p>
            </div>
          </div>
        </div>
      </section>

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
                className="text-blue-600 font-medium text-lg"
              >
                Home
              </Link>
              <Link
                href="/about"
                onClick={() => setIsNavOpen(false)}
                className="text-gray-700 hover:text-blue-600 text-lg"
              >
                About
              </Link>
              <Link
                href="/services"
                onClick={() => setIsNavOpen(false)}
                className="text-gray-700 hover:text-blue-600 text-lg"
              >
                Services
              </Link>
              <Link
                href="/contact"
                onClick={() => setIsNavOpen(false)}
                className="text-gray-700 hover:text-blue-600 text-lg"
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
