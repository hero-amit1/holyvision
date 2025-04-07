import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AcademicPlanningImage from "../assets/bbbb.jpg"; // Replace with the correct path

const AcademicPlanningPage = () => {
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
        style={{ backgroundImage: `url(${AcademicPlanningImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center animate-fadeIn">
          <h1 className="text-5xl text-white font-extrabold animate-bounceIn">
            Academic Planning
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-12 px-4 md:px-8 bg-gray-50 animate-fadeIn">
        <div className="max-w-6xl mx-auto">
          {/* Intro Section */}
          <h2 className="text-4xl font-bold text-gray-800 mb-4 text-center animate-zoomIn">
            Plan Your Path to Academic Success
          </h2>
          <p className="text-lg text-gray-700 mb-8 text-center animate-slideUpFadeIn">
            Academic planning is essential for achieving your educational and career goals. Our expert guidance helps you design a personalized roadmap for success.
          </p>

          {/* Key Areas of Academic Planning */}
          <div className="space-y-8 animate-slideUpFadeInDelayed">
            <div className="bg-white p-6 rounded-lg shadow-md animate-slideUp">
              <h3 className="text-2xl font-semibold text-green-700 mb-4">
                1. Goal Setting
              </h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Define your short-term and long-term academic goals.</li>
                <li>Align your goals with your career aspirations.</li>
                <li>Set realistic milestones to track your progress.</li>
              </ul>
            </div>

            {/* Course and Curriculum Planning */}
            <div className="bg-white p-6 rounded-lg shadow-md animate-fadeInSlideUp">
              <h3 className="text-2xl font-semibold text-green-700 mb-4">
                2. Course and Curriculum Planning
              </h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Select courses that align with your academic interests and career goals.</li>
                <li>Understand prerequisites and course requirements.</li>
                <li>Create a balanced schedule to manage workload effectively.</li>
              </ul>
            </div>

            {/* Time Management */}
            <div className="bg-white p-6 rounded-lg shadow-md animate-slideUpFadeIn">
              <h3 className="text-2xl font-semibold text-green-700 mb-4">
                3. Time Management
              </h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Develop a daily and weekly study schedule.</li>
                <li>Prioritize tasks to meet deadlines effectively.</li>
                <li>Incorporate time for self-study, group discussions, and extracurricular activities.</li>
              </ul>
            </div>

            {/* Academic Resources and Support */}
            <div className="bg-white p-6 rounded-lg shadow-md animate-zoomIn">
              <h3 className="text-2xl font-semibold text-green-700 mb-4">
                4. Academic Resources and Support
              </h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Access academic advisors and mentoring programs.</li>
                <li>Utilize library and online resources effectively.</li>
                <li>Participate in workshops, seminars, and skill development programs.</li>
              </ul>
            </div>

            {/* Career Alignment */}
            <div className="bg-white p-6 rounded-lg shadow-md animate-slideUpFadeInDelayed">
              <h3 className="text-2xl font-semibold text-green-700 mb-4">
                5. Aligning Academics with Career Goals
              </h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Identify career opportunities related to your chosen field of study.</li>
                <li>Build a professional network through internships and events.</li>
                <li>Gain hands-on experience with projects and research.</li>
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

export default AcademicPlanningPage;
