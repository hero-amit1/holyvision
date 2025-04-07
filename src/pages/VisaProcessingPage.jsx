import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import VisaProcessingImage from "../assets/aaaa.jpg"; // Replace with the correct path

const VisaProcessingPage = () => {
  useEffect(() => {
    // Scroll to the top when the component is mounted
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full flex-shrink-0 overflow-hidden bg-gradient-to-b from-blue-50 to-gray-50 animate-pageFadeIn">
      {/* Navbar */}
      <Navbar className="animate-slideDown" />

      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-72 animate-fadeInSlideUp"
        style={{ backgroundImage: `url(${VisaProcessingImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center animate-fadeIn">
          <h1 className="text-5xl text-white font-extrabold animate-bounceIn">
            Visa Processing Assistance
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-12 px-4 md:px-8 bg-gray-50 animate-fadeIn">
        <div className="max-w-6xl mx-auto">
          {/* Intro Section */}
          <h2 className="text-4xl font-bold text-gray-800 mb-4 text-center animate-zoomIn">
            Your Guide to a Smooth Visa Application
          </h2>
          <p className="text-lg text-gray-700 mb-8 text-center animate-slideUpFadeIn">
            Getting the right visa is the final step in your study abroad journey. Our visa processing assistance ensures a seamless application process, from document preparation to approval.
          </p>

          {/* What We Cover */}
          <div className="space-y-8 animate-slideUpFadeInDelayed">
            <div className="bg-white p-6 rounded-lg shadow-md animate-slideUp">
              <h3 className="text-2xl font-semibold text-blue-700 mb-4">
                1. Understanding Visa Requirements
              </h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Visa types: study, transit, work-study, etc.</li>
                <li>Eligibility criteria for each visa type.</li>
                <li>Required documentation for application.</li>
                <li>Processing timelines for different visa categories.</li>
              </ul>
            </div>

            {/* Document Preparation */}
            <div className="bg-white p-6 rounded-lg shadow-md animate-fadeInSlideUp">
              <h3 className="text-2xl font-semibold text-blue-700 mb-4">
                2. Document Preparation
              </h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Valid passport with adequate blank pages.</li>
                <li>Offer letter from your institution.</li>
                <li>Financial proof (bank statements, sponsor letters, etc.).</li>
                <li>Medical reports (if required by the country).</li>
                <li>Visa application form, photographs, and visa fees payment proof.</li>
              </ul>
            </div>

            {/* Visa Application Process */}
            <div className="bg-white p-6 rounded-lg shadow-md animate-slideUpFadeIn">
              <h3 className="text-2xl font-semibold text-blue-700 mb-4">
                3. The Visa Application Process
              </h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Filling out the application form accurately.</li>
                <li>Paying the visa application fee.</li>
                <li>Submitting the required documents (online or in person).</li>
                <li>Scheduling biometric appointments (if necessary).</li>
                <li>Tracking your application status online.</li>
              </ul>
            </div>

            {/* Visa Interview Preparation */}
            <div className="bg-white p-6 rounded-lg shadow-md animate-zoomIn">
              <h3 className="text-2xl font-semibold text-blue-700 mb-4">
                4. Visa Interview Preparation
              </h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Tips for answering visa interview questions confidently.</li>
                <li>Preparing relevant supporting documents for the interview.</li>
                <li>Mock interviews to practice and build confidence.</li>
                <li>Common visa interview questions and answers.</li>
              </ul>
            </div>

            {/* Post-Visa Approval Tips */}
            <div className="bg-white p-6 rounded-lg shadow-md animate-slideUpFadeInDelayed">
              <h3 className="text-2xl font-semibold text-blue-700 mb-4">
                5. Post-Visa Approval Tips
              </h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Check visa details for accuracy (name, dates, visa type, etc.).</li>
                <li>Prepare your travel and accommodation plans.</li>
                <li>Carry all necessary documents, including your visa, passport, and medical insurance.</li>
                <li>Stay informed about the entry requirements for your destination (e.g., COVID-19 regulations).</li>
              </ul>
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

export default VisaProcessingPage;
