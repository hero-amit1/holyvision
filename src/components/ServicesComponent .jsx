import React, { useEffect } from "react";
import graduateImg from "../assets/career1.webp";
import groupStudentsImg from "../assets/career2.webp";

const ServicesComponent = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-in, .scale-in");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.3 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect(); // Cleanup
  }, []);

  const features = [
    "Diverse Technical Programs: Nursing, General Medicine, Pharmacy, and Caregiver.",
    "Modern Infrastructure: Labs, libraries, simulation rooms, digital resources.",
    "Experienced Faculty: Clinical and industry experts guiding your journey.",
    "Internship Opportunities: Hospitals, clinics, and pharmacies across Nepal.",
    "Career Counseling: Job preparation and guidance for further studies.",
    "CTEVT Affiliation: Recognized health diplomas with national credibility.",
    "Student Support: Mentorship and personal counseling services.",
    "Safe & Inclusive Campus: A nurturing academic environment in Kathmandu.",
  ];

  return (
    <section className="bg-gray-50 py-12 px-6" aria-labelledby="hvtc-services">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Text Section */}
        <div className="lg:w-1/2 fade-in opacity-0 transition-all duration-1000 ease-in-out">
          <h2 id="hvtc-services" className="text-4xl font-bold text-gray-800 mb-6 animate-textSlideIn">
            Empower Your Career with Holy Vision Technical Campus
          </h2>
          <p className="text-lg text-gray-600 mb-6 animate-fadeIn">
            HVTC provides accredited healthcare and technical education in Nepal with modern facilities, practical training, and expert faculty.
          </p>
          <ul className="space-y-4">
            {features.map((item, index) => (
              <li
                key={index}
                className="flex items-start space-x-2 text-gray-700 font-medium scale-in opacity-0 transition-all duration-700"
              >
                <span className="text-green-600 font-bold">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Images Section */}
        <div className="lg:w-1/2 grid gap-6">
          {[graduateImg, groupStudentsImg].map((img, index) => (
            <div
              key={index}
              className="scale-in opacity-0 w-full h-64 sm:h-48 bg-cover bg-center rounded-lg shadow-lg transform hover:scale-110 transition-all duration-700"
              style={{ backgroundImage: `url(${img})` }}
              role="img"
              aria-label={index === 0 ? "HVTC Graduate" : "HVTC Students Group"}
            ></div>
          ))}
        </div>
      </div>

      {/* Inline CSS for fade/scale animation */}
      <style>
        {`
          .fade-in {
            opacity: 0;
            transform: translateY(30px);
          }
          .fade-in.visible {
            opacity: 1;
            transform: translateY(0);
          }
          .scale-in {
            opacity: 0;
            transform: scale(0.8);
          }
          .scale-in.visible {
            opacity: 1;
            transform: scale(1);
          }
          @keyframes textSlideIn {
            from { opacity: 0; transform: translateX(-40px); }
            to { opacity: 1; transform: translateX(0); }
          }
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          .animate-textSlideIn { animation: textSlideIn 0.8s ease-out forwards; }
          .animate-fadeIn { animation: fadeIn 1.2s ease-out forwards; }
        `}
      </style>
    </section>
  );
};

export default ServicesComponent;
