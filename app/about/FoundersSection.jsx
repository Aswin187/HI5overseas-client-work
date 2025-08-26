'use client';

import { useState, useEffect, useRef } from 'react';

export default function FoundersSection() {
    const [isVisible, setIsVisible] = useState(false);
    const [activeFounder, setActiveFounder] = useState(0);
    const sectionRef = useRef(null); // ✅ fixed: removed TypeScript generic

    useEffect(() => {
        // ✅ Always visible on mobile to avoid blank screen
        if (typeof window !== "undefined" && window.innerWidth < 640) {
            setIsVisible(true);
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    const founders = [
        {
            name: 'JAYAKRISHNAN KESAVAN',
            role: 'Co-Founder & Director',
            background:
                'Our journey began with a shared vision — to create opportunities beyond borders for students and professionals alike. With our combined dedication and experience, we started Hi5overseas to guide students in pursuing higher education abroad while also supporting skilled and unskilled professionals in finding overseas career opportunities. Our mission is to provide trusted, professional support that empowers individuals to achieve their global dreams with confidence.',
            image1:
                'https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001877.png',
            gradient: 'from-blue-500 to-purple-500',
            icon: 'ri-user-star-line',
        },
        {
            name: 'YUVARAJ KALLIMUTHU',
            role: 'Co-Founder & Director',
            background:
                'Our journey began with a shared vision — to create opportunities beyond borders for students and professionals alike. With our combined dedication and experience, we started Hi5overseas to guide students in pursuing higher education abroad while also supporting skilled and unskilled professionals in finding overseas career opportunities. Our mission is to provide trusted, professional support that empowers individuals to achieve their global dreams with confidence.',
            image1:
                'https://png.pngtree.com/png-clipart/20231019/original/pngtree-user-profile-avatar-png-image_13369991.png',
            gradient: 'from-purple-500 to-pink-500',
            icon: 'ri-briefcase-4-line',
        },
    ];

    return (
        <section
            ref={sectionRef}
            className="py-16 px-4 sm:px-6 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden"
        >
            <div className="max-w-7xl mx-auto">
                {/* Section Title */}
                <div
                    className={`text-center mb-12 md:mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                        }`}
                >
                    <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight font-poppins">
                        Meet Our Founders
                    </h2>
                    <p className="text-lg text-gray-600 font-semibold mb-8 leading-relaxed font-inter">
                        The visionary leaders behind Hi5Overseas, bringing decades of combined
                        experience in international education and global career placement.
                    </p>
                </div>

                {/* Founders Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    {founders.map((founder, index) => (
                        <div
                            key={index}
                            className={`transform transition-all duration-1000 delay-${index * 200
                                } ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                            onMouseEnter={() => setActiveFounder(index)}
                            onClick={() => setActiveFounder(index)} // ✅ Mobile tap support
                        >
                            <div
                                className={`relative backdrop-blur-xl bg-white/20 rounded-2xl p-6 md:p-8 border border-white/30 shadow-2xl hover:shadow-3xl transition-all duration-500 h-full hover:-translate-y-2 hover:scale-[1.02] ${activeFounder === index ? 'ring-2 ring-blue-400/50' : ''
                                    }`}
                            >
                                {/* Founder Image */}
                                <div className="relative mb-6 md:mb-8">
                                    <div
                                        className="w-full h-48 md:h-64 bg-cover bg-center bg-no-repeat rounded-2xl shadow-lg transition-transform duration-700 hover:scale-110 hover:rotate-1"
                                        style={{ backgroundImage: `url(${founder.image1})` }}
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-2xl"></div>
                                        <div className="absolute bottom-4 left-4 right-4">
                                            <div
                                                className={`w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r ${founder.gradient} rounded-2xl flex items-center justify-center mb-2 md:mb-3 animate-pop`}
                                            >
                                                <i className={`${founder.icon} text-white text-lg md:text-xl`}></i>
                                            </div>
                                            <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                                                {founder.name}
                                            </h3>
                                            <p className="text-blue-200 text-sm md:text-base font-medium">
                                                {founder.role}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Founder Details */}
                                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 md:p-6 border border-white/20 animate-fade-in-up">
                                    <h4 className="font-bold text-gray-800 text-lg font-serif italic">
                                        <i className="ri-profile-line mr-2 text-blue-600"></i>
                                        Background
                                    </h4>
                                    <p className="text-lg text-gray-700 mb-8 leading-relaxed font-inter">
                                        {founder.background}
                                    </p>
                                </div>

                                {/* Floating Decoration */}
                                <div className="absolute top-4 right-4 w-3 h-3 bg-blue-400/50 rounded-full animate-pulse"></div>
                                <div className="absolute bottom-6 left-6 w-2 h-2 bg-purple-400/50 rounded-full animate-ping"></div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Leadership Quote */}
                <div
                    className={`mt-12 md:mt-16 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                        }`}
                >
                    <div className="backdrop-blur-xl bg-gradient-to-r from-white/10 to-white/20 rounded-2xl p-6 md:p-12 border border-white/30 shadow-2xl text-center animate-fade-in-up">
                        <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 md:mb-8 animate-pop">
                            <i className="ri-double-quotes-l text-white text-xl md:text-2xl"></i>
                        </div>
                        <blockquote className="text-lg md:text-3xl font-bold text-gray-800 mb-4 md:mb-6 leading-relaxed animate-fade-in-up">
                            "We founded Hi5Overseas with a simple belief: every dream deserves expert
                            guidance, genuine care, and unwavering support."
                        </blockquote>
                    </div>
                </div>
            </div>

            {/* Background Decorations */}
            <div className="absolute top-20 left-10 w-32 h-32 md:w-40 md:h-40 bg-blue-200/30 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-20 right-10 w-24 h-24 md:w-32 md:h-32 bg-purple-200/30 rounded-full blur-3xl animate-float-slow"></div>
            <div className="absolute top-1/2 right-6 w-20 h-20 md:w-24 md:h-24 bg-pink-200/30 rounded-full blur-2xl animate-float-delayed"></div>
        </section>
    );
}
