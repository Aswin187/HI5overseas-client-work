'use client';

import { useState, useEffect, useRef } from 'react';

export default function FoundersSection() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        if (typeof window !== "undefined" && window.innerWidth < 640) {
            setIsVisible(true);
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setIsVisible(true);
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
        },
        {
            name: 'YUVARAJ KALLIMUTHU',
            role: 'Co-Founder & Director',
        },
    ];

    return (
        <section
            ref={sectionRef}
            className="relative py-16 px-6 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 overflow-hidden"
        >
            <div className="max-w-5xl mx-auto text-center">
                {/* Title */}
                <div
                    className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}
                >
                    <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
                        Meet Our Founders
                    </h2>
                    <p className="text-lg text-gray-700 font-medium max-w-3xl mx-auto">
                        Hi5overseas was founded with a shared vision to open global opportunities for students and professionals.
                        With our expertise and dedication, we guide students towards higher education abroad and support professionals
                        in building overseas careers. Our mission is to provide trusted, professional support that helps individuals pursue their global dreams with confidence.
                    </p>
                </div>

                {/* Founders Name & Role */}
                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {founders.map((founder, i) => (
                        <div
                            key={i}
                            className={`bg-gradient-to-r from-[#a5fafa]/50 to-blue-200/50 shadow-lg rounded-xl p-6 transform transition-all duration-1000 ${isVisible
                                ? 'opacity-100 translate-y-0'
                                : 'opacity-0 translate-y-8'
                                }`}
                        >
                            <h3 className="text-2xl font-bold text-gray-900">
                                {founder.name}
                            </h3>
                            <p className="text-black text-lg font-medium ">
                                {founder.role}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Leadership Quote */}
                <div
                    className={`mt-16 max-w-3xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}
                >
                    <blockquote className="text-xl md:text-2xl font-semibold text-gray-800 italic">
                        "We founded with a simple belief: every dream deserves
                        Expert Guidance, Genuine Care, and Unwavering Support."
                    </blockquote>
                </div>
            </div>

            {/* Soft Background Decorations */}
            <div className="absolute top-10 left-10 w-32 h-32 bg-blue-200/40 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-200/40 rounded-full blur-3xl animate-pulse delay-300"></div>
        </section>
    );
}
