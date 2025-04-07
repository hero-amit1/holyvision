import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AdmissionsCounselingImage from "../assets/qqq.jpg"; // Replace with the correct path

const AdmissionsCounselingPage = () => {
  useEffect(() => {
    // Scroll to the top when the component is mounted
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full flex-shrink-0 overflow-hidden bg-gradient-to-b from-pink-50 to-gray-50 animate-pageFadeIn">
      {/* Navbar */}
      <Navbar className="animate-slideDown" />

      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-72 animate-fadeInSlideUp"
        style={{ backgroundImage: `url(${AdmissionsCounselingImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center animate-fadeIn">
          <h1 className="text-5xl text-white font-extrabold animate-bounceIn">
            Admissions Counseling
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-12 px-4 md:px-8 bg-gray-50 animate-fadeIn">
        <div className="max-w-6xl mx-auto">
          {/* Intro Section */}
          <h2 className="text-4xl font-bold text-gray-800 mb-4 text-center animate-zoomIn">
            Simplify Your College Admissions Journey
          </h2>
          <p className="text-lg text-gray-700 mb-8 text-center animate-slideUpFadeIn">
            Applying to colleges and universities can be overwhelming. With our
            expert counseling, you’ll receive step-by-step guidance to navigate
            the entire admissions process confidently.
          </p>

          {/* How We Help */}
          <div className="space-y-8 animate-slideUpFadeInDelayed">
            <div className="bg-white p-6 rounded-lg shadow-md animate-slideUp">
              <h3 className="text-2xl font-semibold text-pink-700 mb-4">
                1. Personalized Guidance
              </h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Understand your academic profile and aspirations.</li>
                <li>Shortlist colleges and universities aligned with your goals.</li>
                <li>Provide tailored advice on courses, programs, and locations.</li>
                <li>Navigate admissions requirements and deadlines with ease.</li>
              </ul>
            </div>

            {/* Application Support */}
            <div className="bg-white p-6 rounded-lg shadow-md animate-fadeInSlideUp">
              <h3 className="text-2xl font-semibold text-pink-700 mb-4">
                2. Application Preparation
              </h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Help draft compelling Statements of Purpose (SOPs).</li>
                <li>Provide assistance with completing application forms.</li>
                <li>Guide in gathering and organizing required documents.</li>
                <li>Offer tips for crafting impressive resumes and portfolios.</li>
              </ul>
            </div>

            {/* Interview Coaching */}
            <div className="bg-white p-6 rounded-lg shadow-md animate-slideUpFadeIn">
              <h3 className="text-2xl font-semibold text-pink-700 mb-4">
                3. Interview Coaching
              </h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Prepare for university admission interviews.</li>
                <li>Practice common questions and strategies for effective answers.</li>
                <li>Build confidence and improve communication skills.</li>
                <li>Receive constructive feedback through mock interviews.</li>
              </ul>
            </div>

            {/* Admissions Timelines */}
            <div className="bg-white p-6 rounded-lg shadow-md animate-zoomIn">
              <h3 className="text-2xl font-semibold text-pink-700 mb-4">
                4. Admissions Timelines
              </h3>
              <p className="text-gray-600 mb-4">
                Stay ahead by keeping track of important deadlines and key
                milestones during the application process:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Application opening and submission deadlines.</li>
                <li>Scholarship and financial aid timelines.</li>
                <li>Interview schedules and result announcements.</li>
                <li>Enrollment and visa application deadlines.</li>
              </ul>
            </div>

            {/* Continuous Support */}
            <div className="bg-white p-6 rounded-lg shadow-md animate-slideUpFadeInDelayed">
              <h3 className="text-2xl font-semibold text-pink-700 mb-4">
                5. Continuous Support
              </h3>
              <p className="text-gray-600">
                Our team is here to support you every step of the way, from the
                initial consultation to securing admission at your dream
                institution. We are committed to ensuring a smooth and stress-free
                experience.
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

export default AdmissionsCounselingPage;
