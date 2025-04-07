import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PreDepartureImage from "../assets/cccc.jpg"; // Replace with the correct path

const PreDepartureOrientationPage = () => {
  useEffect(() => {
    // Scroll to the top when the component is mounted
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full flex-shrink-0 overflow-hidden bg-gradient-to-b from-purple-50 to-gray-50 animate-pageFadeIn">
      {/* Navbar */}
      <Navbar className="animate-slideDown" />

      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-72 animate-fadeInSlideUp"
        style={{ backgroundImage: `url(${PreDepartureImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center animate-fadeIn">
          <h1 className="text-5xl text-white font-extrabold animate-bounceIn">
            Pre-Departure Orientation
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-12 px-4 md:px-8 bg-gray-50 animate-fadeIn">
        <div className="max-w-6xl mx-auto">
          {/* Intro Section */}
          <h2 className="text-4xl font-bold text-gray-800 mb-4 text-center animate-zoomIn">
            Get Ready for Your New Journey
          </h2>
          <p className="text-lg text-gray-700 mb-8 text-center animate-slideUpFadeIn">
            Transitioning to a new country can be both exciting and daunting. Our Pre-Departure Orientation equips you with the essential knowledge and resources to settle in smoothly and confidently.
          </p>

          {/* What We Cover */}
          <div className="space-y-8 animate-slideUpFadeInDelayed">
            <div className="bg-white p-6 rounded-lg shadow-md animate-slideUp">
              <h3 className="text-2xl font-semibold text-purple-700 mb-4">
                1. Travel Preparation
              </h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Checklist of essential documents (passport, visa, tickets, etc.).</li>
                <li>Tips for packing smart and light.</li>
                <li>Guidance on booking flights and airport procedures.</li>
                <li>Currency exchange and international banking tips.</li>
              </ul>
            </div>

            {/* Settling In */}
            <div className="bg-white p-6 rounded-lg shadow-md animate-fadeInSlideUp">
              <h3 className="text-2xl font-semibold text-purple-700 mb-4">
                2. Settling Into Your New Environment
              </h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Overview of local culture and etiquette.</li>
                <li>Information on public transport and commuting.</li>
                <li>Finding housing and understanding rental agreements.</li>
                <li>Setting up utilities, internet, and other essentials.</li>
              </ul>
            </div>

            {/* Academic and Campus Life */}
            <div className="bg-white p-6 rounded-lg shadow-md animate-slideUpFadeIn">
              <h3 className="text-2xl font-semibold text-purple-700 mb-4">
                3. Academic and Campus Life
              </h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Introduction to campus facilities and resources.</li>
                <li>Understanding academic expectations and grading systems.</li>
                <li>Tips for managing time and staying organized.</li>
                <li>Building a support network with peers and mentors.</li>
              </ul>
            </div>

            {/* Health and Safety */}
            <div className="bg-white p-6 rounded-lg shadow-md animate-zoomIn">
              <h3 className="text-2xl font-semibold text-purple-700 mb-4">
                4. Health and Safety
              </h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Ensuring adequate health insurance coverage.</li>
                <li>Understanding emergency services and healthcare systems.</li>
                <li>Staying safe in your new environment.</li>
                <li>Mental health resources and coping with homesickness.</li>
              </ul>
            </div>

            {/* Final Tips */}
            <div className="bg-white p-6 rounded-lg shadow-md animate-slideUpFadeInDelayed">
              <h3 className="text-2xl font-semibold text-purple-700 mb-4">
                5. Final Tips for Success
              </h3>
              <p className="text-gray-600">
                We provide practical tips to help you adapt quickly and thrive in your new environment. Our goal is to ensure that your transition is seamless and enjoyable.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer className="animate-fadeIn" />

      {/* Animations */}
      <style>{`
        @keyframes pageFadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
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

        @keyframes zoomIn {
          from {
            transform: scale(0.8);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }

        @keyframes fadeInSlideUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-pageFadeIn {
          animation: pageFadeIn 1.5s ease-in-out;
        }

        .animate-slideDown {
          animation: slideDown 1s ease-out;
        }

        .animate-fadeIn {
          animation: fadeIn 1.2s ease-in;
        }

        .animate-zoomIn {
          animation: zoomIn 1.2s ease-out;
        }

        .animate-fadeInSlideUp {
          animation: fadeInSlideUp 1.5s ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default PreDepartureOrientationPage;
