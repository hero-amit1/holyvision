import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CourseImage from "../assets/sss.jpg"; // Replace with correct path

const CourseGuidancePage = () => {
  useEffect(() => {
    // Scroll to the top when the component is mounted
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full flex-shrink-0 overflow-hidden bg-gradient-to-b from-green-50 to-gray-50 animate-pageFadeIn">
      {/* Navbar */}
      <Navbar className="animate-slideDown" />

      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-72 animate-fadeInSlideUp"
        style={{ backgroundImage: `url(${CourseImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center animate-fadeIn">
          <h1 className="text-5xl text-white font-extrabold animate-bounceIn">
            Course Guidance
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-12 px-4 md:px-8 bg-gray-50 animate-fadeIn">
        <div className="max-w-6xl mx-auto">
          {/* Intro Section */}
          <h2 className="text-4xl font-bold text-gray-800 mb-4 text-center animate-zoomIn">
            Find the Right Course for Your Future
          </h2>
          <p className="text-lg text-gray-700 mb-8 text-center animate-slideUpFadeIn">
            Selecting the right course is the first step to achieving your career goals. Let us help you navigate your options and make informed decisions.
          </p>

          {/* Factors to Consider */}
          <div className="space-y-8 animate-slideUpFadeInDelayed">
            <div className="bg-white p-6 rounded-lg shadow-md animate-slideUp">
              <h3 className="text-2xl font-semibold text-green-700 mb-4">
                1. Factors to Consider When Choosing a Course
              </h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Identify your interests and passions.</li>
                <li>Consider your long-term career goals.</li>
                <li>Research industry demand and job prospects for the course.</li>
                <li>Evaluate the curriculum and specializations offered.</li>
                <li>Check the accreditation and reputation of the institution.</li>
              </ul>
            </div>

            {/* How We Help */}
            <div className="bg-white p-6 rounded-lg shadow-md animate-fadeInSlideUp">
              <h3 className="text-2xl font-semibold text-green-700 mb-4">
                2. How We Assist in Course Selection
              </h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Personalized counseling to match your academic strengths with suitable courses.</li>
                <li>Insights into trending courses and their global relevance.</li>
                <li>Detailed information on course requirements and prerequisites.</li>
                <li>Guidance on selecting courses that align with scholarship opportunities.</li>
                <li>Support in applying to courses and preparing required documents.</li>
              </ul>
            </div>

            {/* Popular Fields of Study */}
            <div className="bg-white p-6 rounded-lg shadow-md animate-slideUpFadeIn">
              <h3 className="text-2xl font-semibold text-green-700 mb-4">
                3. Popular Fields of Study
              </h3>
              <p className="text-gray-600 mb-4">
                Explore some of the most sought-after fields and their potential career paths:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>
                  <strong>Business and Management:</strong> Careers in finance, marketing, and entrepreneurship.
                </li>
                <li>
                  <strong>Engineering and Technology:</strong> Specializations in software, mechanical, and civil engineering.
                </li>
                <li>
                  <strong>Health Sciences:</strong> Fields like nursing, medicine, and public health.
                </li>
                <li>
                  <strong>Arts and Humanities:</strong> Careers in communication, design, and education.
                </li>
                <li>
                  <strong>Sciences:</strong> Research opportunities in biology, chemistry, and physics.
                </li>
              </ul>
            </div>

            {/* Final Note */}
            <div className="bg-white p-6 rounded-lg shadow-md animate-slideUpFadeInDelayed">
              <h3 className="text-2xl font-semibold text-green-700 mb-4">
                Ready to Choose Your Course?
              </h3>
              <p className="text-gray-600">
                Our expert advisors are here to provide personalized support for selecting the best course that aligns with your career goals. Contact us to start your journey today.
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

export default CourseGuidancePage;
