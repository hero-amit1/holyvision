import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScholarshipImage from "../assets/111.jpg"; // Replace with correct path

const ScholarshipAssistancePage = () => {
  useEffect(() => {
    // Scroll to the top when the component is mounted
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full flex-shrink-0 overflow-hidden bg-gradient-to-b from-yellow-50 to-gray-50 animate-pageFadeIn">
      {/* Navbar */}
      <Navbar className="animate-slideDown" />

      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-72 animate-fadeInSlideUp"
        style={{ backgroundImage: `url(${ScholarshipImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center animate-fadeIn">
          <h1 className="text-5xl text-white font-extrabold animate-bounceIn">
            Scholarship Assistance
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-12 px-4 md:px-8 bg-gray-50 animate-fadeIn">
        <div className="max-w-6xl mx-auto">
          {/* Intro Section */}
          <h2 className="text-4xl font-bold text-gray-800 mb-4 text-center animate-zoomIn">
            Unlock Your Potential with Scholarships
          </h2>
          <p className="text-lg text-gray-700 mb-8 text-center animate-slideUpFadeIn">
            Scholarships can ease your financial burden and open doors to
            quality education. Let us guide you through finding and applying
            for the best scholarships.
          </p>

          {/* Types of Scholarships */}
          <div className="space-y-8 animate-slideUpFadeInDelayed">
            <div className="bg-white p-6 rounded-lg shadow-md animate-slideUp">
              <h3 className="text-2xl font-semibold text-yellow-700 mb-4">
                1. Types of Scholarships
              </h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li><strong>Merit-Based Scholarships:</strong> Awarded for academic or extracurricular excellence.</li>
                <li><strong>Need-Based Scholarships:</strong> Based on financial need and family income.</li>
                <li><strong>Sports Scholarships:</strong> For exceptional athletes excelling in specific sports.</li>
                <li><strong>Program-Specific Scholarships:</strong> Offered for specialized courses or fields of study.</li>
                <li><strong>Government-Funded Scholarships:</strong> Provided by national or regional governments.</li>
              </ul>
            </div>

            {/* How We Help */}
            <div className="bg-white p-6 rounded-lg shadow-md animate-fadeInSlideUp">
              <h3 className="text-2xl font-semibold text-yellow-700 mb-4">
                2. How We Assist
              </h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Identify scholarships that match your profile and goals.</li>
                <li>Guide you in preparing a compelling application.</li>
                <li>Provide tips for writing impactful essays and SOPs.</li>
                <li>Assist with the timely submission of required documents.</li>
                <li>Help you navigate scholarship interviews and assessments.</li>
              </ul>
            </div>

            {/* Tips for Successful Applications */}
            <div className="bg-white p-6 rounded-lg shadow-md animate-slideUpFadeIn">
              <h3 className="text-2xl font-semibold text-yellow-700 mb-4">
                3. Tips for Successful Scholarship Applications
              </h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Start early and research thoroughly.</li>
                <li>Tailor your application to highlight your strengths.</li>
                <li>Provide clear and concise information.</li>
                <li>Ensure your essays and SOPs are authentic and well-written.</li>
                <li>Follow all instructions and meet deadlines.</li>
              </ul>
            </div>

            {/* Scholarships by Country */}
            <div className="bg-white p-6 rounded-lg shadow-md animate-zoomIn">
              <h3 className="text-2xl font-semibold text-yellow-700 mb-4">
                4. Scholarships by Destination
              </h3>
              <p className="text-gray-600 mb-4">
                Explore scholarship opportunities available in popular study destinations:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li><strong>USA:</strong> Fulbright, Stanford Knight-Hennessy, and more.</li>
                <li><strong>UK:</strong> Chevening, Commonwealth, and Rhodes Scholarships.</li>
                <li><strong>Australia:</strong> Endeavour and Australia Awards Scholarships.</li>
                <li><strong>Canada:</strong> Vanier CGS, Trudeau Foundation, and provincial scholarships.</li>
                <li><strong>Europe:</strong> Erasmus Mundus, DAAD, and country-specific programs.</li>
              </ul>
            </div>

            {/* Contact Us */}
            <div className="bg-white p-6 rounded-lg shadow-md animate-slideUpFadeInDelayed">
              <h3 className="text-2xl font-semibold text-yellow-700 mb-4">
                Ready to Apply for Scholarships?
              </h3>
              <p className="text-gray-600">
                Let us help you achieve your academic dreams. Contact us for personalized scholarship assistance and expert advice. Reach out to us at{" "}
                <a href="mailto:intandemscholars@gmail.com" className="text-yellow-700 underline">
                intandemscholars@gmail.com
                </a> or call us at (9801025694).
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

export default ScholarshipAssistancePage;
