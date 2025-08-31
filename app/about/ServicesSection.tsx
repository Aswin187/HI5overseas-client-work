"use client";

import { useState, useEffect, useRef } from "react";

export default function ServicesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Auto show on mobile to avoid blank view
    if (window.innerWidth < 640) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const studyDestinations = [
    {
      country: "Germany",
      image:
        "https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2023/12/26112132/rothenburg-2-1-1600x900.jpeg",
    },
    {
      country: "Singapore",
      image:
        "https://i.natgeofe.com/k/95d61645-a0c7-470f-b198-74a399dd5dfb/singapore-city_3x2.jpg",
    },
    {
      country: "United Kingdom",
      image:
        "https://www.godigit.com/content/dam/godigit/directportal/en/contenthm/how%20many%20cities%20are%20there%20in%20the%20united%20kingdom.jpg  ",
    },
    {
      country: "France",
      image:
        "https://res.klook.com/image/upload/q_85/c_fill,w_750/v1645703027/blog/nbxewkp9ehoc7oeaeozi.jpg",
    },
  ];

  const jobDestinations = [
    {
      country: "Singapore",
      image:
        "https://static.toiimg.com/thumb/msid-90660347,width-748,height-499,resizemode=4,imgsize-145460/5-days-in-Singapore-Must-visit-attractions-only.jpg",
    },
    {
      country: "Europe",
      image:
        "https://www.authentic-europe.com/themes/european-capital-and-city-tours/_/image/23a1f703-10dd-44e6-a4b2-8e48a8649c18:29dff0cdc1ca51e1d6bcddb3cd1013717072c330/width-1140/London-Visit-Britain",
    },
    {
      country: "Australia",
      image:
        "https://e-images.juwaistatic.com/content-site/2022/01/24155005/5-Cities-with-Most-Chinese-Population-in-Australia.png",
    },
    {
      country: "Canada",
      image:
        "https://imgcld.yatra.com/ytimages/image/upload/v1396184548/International%20Holidays/Canada/Vancouver/shutterstock_38020621.jpg",
    },
    {
      country: "Maldives",
      image:
        "https://www.sunsiyam.com/media/qnfnzgmq/ssiv_general_04.jpg?width=782&height=521&mode=max",
    },
    {
      country: "GCC Countries",
      image:
        "https://media.istockphoto.com/id/1309800132/photo/dubai-skyline-view-from-the-marasi-marina-in-city-business-bay-downtown-area-in-the-uae.jpg?s=612x612&w=0&k=20&c=j3Q7WMWbiKC-hg4oXP8p1WYIcOoFW0WTZ05zEOJGWwI=",
    },
    {
      country: "Malaysia",
      image:
        "https://i.natgeofe.com/k/8dc7401d-fac9-43c5-a6d4-d056401f7779/kuala-lumpur.jpg?wp=1&w=1084.125&h=721.875",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-12 px-4 sm:px-6 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div
          className={`text-center mb-12 transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight font-poppins">
            What We Do
          </h2>
          <p className="text-lg text-gray-600 font-semibold mb-8 leading-relaxed font-inter">
            We specialize in Study Abroad Consulting, Overseas Job Assistance,
            and Career Guidance.
          </p>
        </div>

        {/* Study Abroad */}
        <div
          className={`mb-16 transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-[#46EBEB] to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <i className="ri-book-open-line text-white text-2xl"></i>
            </div>
            <h3 className="text-4xl font-bold text-blue-600 mb-6 ">
              Study Abroad Consulting
            </h3>
            <p className="text-lg text-gray-700 font-bold mb-8 leading-relaxed font-inter">
              Top Destinations for World Class Education.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {studyDestinations.map((d) => (
              <div
                key={d.country}
                className="font-bold text-gray-800 text-lg uppercase"
              >
                <div className="relative h-40 sm:h-48 min-h-[160px] rounded-lg overflow-hidden">
                  <img
                    src={d.image}
                    alt={d.country}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </div>
                <div className="p-4 text-center">
                  <h4 className="text-lg font-bold text-gray-800">
                    {d.country}
                  </h4>
                  {/* <p className="text-xs text-gray-600">Premier Universities</p> */}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Jobs Abroad */}
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-[#46EBEB] to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <i className="ri-briefcase-line text-white text-2xl"></i>
            </div>
            <h3 className="text-4xl font-bold text-blue-600 mb-6 ">
              Overseas Job Assistance
            </h3>
            <p className="text-lg text-gray-700 font-bold mb-8 leading-relaxed font-inter">
              Helping Professionals Find Global Career Opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {jobDestinations.map((d) => (
              <div
                key={d.country}
                className="font-bold text-gray-800 text-lg  uppercase"
              >
                <div className="relative h-36 sm:h-40 min-h-[140px] rounded-lg overflow-hidden">
                  <img
                    src={d.image}
                    alt={d.country}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </div>
                <div className="p-4 text-center">
                  <h4 className="text-base md:text-lg font-bold text-gray-800">
                    {d.country}
                  </h4>
                  {/* <p className="text-xs text-gray-600">Career Opportunities</p> */}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Closing Note */}
        <div
          className={`text-center mt-12 transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 backdrop-blur-md rounded-2xl p-6 md:p-10 border border-gray-200 shadow">
            <p className="text-lg text-gray-700 font-semibold mb-8 leading-relaxed font-inter">
              Whether you are planning to Study or Work Abroad. We are here to
              help you reach your destination with confidence and support.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
