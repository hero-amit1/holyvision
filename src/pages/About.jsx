import React, { useEffect } from "react";
import TeamImage from "../assets/can.jpg"; // Ensure this path is correct
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Reviews from "../components/Reviews";

const AboutIntandem = () => {
  useEffect(() => {
    // Scroll to the top when the page loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full flex-shrink-0 overflow-hidden">
      <Navbar />
      <div className="min-h-screen flex flex-col items-center py-10 pt-[100px] animate-fadeIn">
        {/* Adjusted padding to prevent content overlap */}
        <h1 className="text-4xl font-bold text-blue-900 mb-6 animate-slideDown">
          About Intandem Scholars
        </h1>
        <div className="max-w-7xl w-full flex flex-col md:flex-row bg-gray-800 shadow-lg rounded-lg overflow-hidden animate-zoomIn">
          {/* Left Section - Image */}
          <div className="w-full md:w-1/2 group relative">
            <img
              src={TeamImage}
              alt="Team Intandem"
              className="w-full h-[300px] md:h-auto object-cover transition-transform transform hover:scale-105 duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>
            <p className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              Intandem Scholars: Empowering Futures Together
            </p>
          </div>

          {/* Right Section - Description */}
          <div className="w-full md:w-1/2 p-8 space-y-6">
            <h2 className="text-3xl font-semibold text-white animate-fadeIn delay-300">
              Welcome to Intandem Scholars
            </h2>
            <p className="text-lg leading-relaxed text-justify text-white animate-fadeIn delay-500">
              Welcome to InTandem Scholars, a leading education consultancy in Nepal. Based in Kathmandu, we specialize in guiding students through the journey of studying abroad. Our expert consultants provide personalized support in university selection, course guidance, scholarship assistance, admissions counseling, and visa processing.
            </p>
            <p className="text-lg leading-relaxed text-justify text-white animate-fadeIn delay-700">
              At InTandem Scholars, we are committed to helping you achieve your academic and career aspirations. Whether you aim to study in Australia, Canada, the USA, the UK, South Korea, or Europe, we are here to make your dreams a reality.
            </p>
            <p className="text-lg leading-relaxed text-justify text-white animate-fadeIn delay-900">
              What sets us apart is our dedication to understanding your unique goals and aspirations, ensuring tailored solutions at every step. With a proven track record of success, a strong network of global institutions, and unwavering support, we strive to simplify the complexities of studying abroad, so you can focus on your future. Join us and embark on your path to a brighter future.
            </p>
          </div>
        </div>
      </div>
      <Reviews />
      <Footer />
      <style>{`
        /* Fade-in effect */
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        /* Slide-down effect */
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Zoom-in effect */
        @keyframes zoomIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        /* Classes */
        .animate-fadeIn {
          animation: fadeIn 1.2s ease-in-out forwards;
        }

        .animate-slideDown {
          animation: slideDown 1.5s ease-out forwards;
        }

        .animate-zoomIn {
          animation: zoomIn 1.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default AboutIntandem;
