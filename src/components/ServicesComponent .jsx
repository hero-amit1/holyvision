import React, { useEffect } from "react";
import graduateImg from "../assets/aa.jpg"; // Update with your image path
import groupStudentsImg from "../assets/bb.jpg"; // Update with your image path

const ServicesSection = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-in, .scale-in");
    elements.forEach((el) => {
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
      observer.observe(el);
    });
  }, []);

  return (
    <div className="bg-gray-50 py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Text Section */}
        <div className="lg:w-1/2 fade-in opacity-0 transition-all duration-1000 ease-in-out">
          <h1 className="text-4xl font-bold text-gray-800 mb-6 animate-textSlideIn">
            Unlock Your Future
          </h1>
          <p className="text-lg text-gray-600 mb-6 animate-fadeIn">
            Intandem Scholars provides expert education consultancy tailored to your success.
          </p>
          <ul className="space-y-4">
            {[
              "University Selection: Personalized guidance for choosing the best universities.",
              "Course Guidance: Expert advice on selecting the right courses.",
              "Scholarship Assistance: Support in identifying and applying for scholarships.",
              "Admissions Counseling: Help with applications, documents, and interviews.",
              "Visa Processing: Step-by-step guidance for a smooth visa application.",
              "Academic Planning: Strategic planning for long-term success.",
              "Pre-Departure Orientation: Tips to prepare for your academic journey abroad.",
              "Post-Arrival Support: Assistance with settling into your new environment.",
            ].map((item, index) => (
              <li
                key={index}
                className="text-gray-700 font-medium flex items-start space-x-2 scale-in opacity-0 transition-all duration-700"
              >
                <span className="text-blue-600 font-semibold">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Images Section */}
        <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-1 gap-6">
          {/* First Image */}
          <div
            className="scale-in opacity-0 transition-all duration-1000 ease-in-out w-full h-64 sm:h-48 bg-cover bg-center rounded-lg shadow-lg transform hover:scale-110 hover:rotate-3 transition-all duration-700"
            style={{
              backgroundImage: `url(${graduateImg})`,
            }}
          ></div>
          {/* Second Image */}
          <div
            className="scale-in opacity-0 transition-all duration-1000 ease-in-out w-full h-64 sm:h-48 bg-cover bg-center rounded-lg shadow-lg transform hover:scale-110 hover:-rotate-3 transition-all duration-700"
            style={{
              backgroundImage: `url(${groupStudentsImg})`,
            }}
          ></div>
        </div>
      </div>

      {/* Inline CSS for Animations */}
      <style>
        {`
          /* Fade-in Effect */
          .fade-in {
            opacity: 0;
            transform: translateY(30px);
          }
          .fade-in.visible {
            opacity: 1;
            transform: translateY(0);
          }

          /* Scale-in Effect */
          .scale-in {
            opacity: 0;
            transform: scale(0.8);
          }
          .scale-in.visible {
            opacity: 1;
            transform: scale(1);
          }

          /* Animations for Title and Paragraph */
          @keyframes textSlideIn {
            from {
              opacity: 0;
              transform: translateX(-50px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }

          .animate-textSlideIn {
            animation: textSlideIn 1s ease-out forwards;
          }

          .animate-fadeIn {
            animation: fadeIn 1.5s ease-out forwards;
          }

          /* Responsive Fix for Images */
          @media (max-width: 768px) {
            .lg\\:w-1\\/2 {
              width: 100%;
            }
            .grid-cols-1 {
              grid-template-columns: 1fr;
            }
          }
        `}
      </style>
    </div>
  );
};

export default ServicesSection;
