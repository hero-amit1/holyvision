import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import UniversityImage from "../assets/kkk.jpg"; // Replace with correct path

const UniversitySelectionPage = () => {
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
        style={{ backgroundImage: `url(${UniversityImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center animate-fadeIn">
          <h1 className="text-5xl text-white font-extrabold animate-bounceIn">
            University Selection
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-12 px-4 md:px-8 bg-gray-50 animate-fadeIn">
        <div className="max-w-6xl mx-auto">
          {/* Intro Section */}
          <h2 className="text-4xl font-bold text-gray-800 mb-4 text-center animate-zoomIn">
            Find the Perfect University for You
          </h2>
          <p className="text-lg text-gray-700 mb-8 text-center animate-slideUpFadeIn">
            Choosing the right university is a crucial step towards achieving
            your academic and career goals. Let us guide you through the
            process of making an informed decision.
          </p>

          {/* Why Choose the Right University */}
          <div className="space-y-8 animate-slideUpFadeInDelayed">
            <div className="bg-white p-6 rounded-lg shadow-md animate-slideUp">
              <h3 className="text-2xl font-semibold text-green-700 mb-4">
                1. Why Choosing the Right University Matters
              </h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Aligns with your career aspirations and interests.</li>
                <li>Ensures access to quality education and resources.</li>
                <li>Provides networking opportunities for future growth.</li>
                <li>Enhances your personal and professional development.</li>
                <li>Maximizes return on investment in higher education.</li>
              </ul>
            </div>

            {/* Steps to Select a University */}
            <div className="bg-white p-6 rounded-lg shadow-md animate-fadeInSlideUp">
              <h3 className="text-2xl font-semibold text-green-700 mb-4">
                2. Steps to Select the Right University
              </h3>
              <ol className="list-decimal list-inside text-gray-600 space-y-2">
                <li>Identify your academic and career goals.</li>
                <li>Research universities that offer relevant programs.</li>
                <li>Evaluate the university’s rankings and reputation.</li>
                <li>Consider location, campus facilities, and culture.</li>
                <li>Check tuition fees, scholarships, and financial aid options.</li>
                <li>Review admission requirements and deadlines.</li>
                <li>Consult with education advisors for expert guidance.</li>
              </ol>
            </div>

            {/* Importance of Rankings and Accreditation */}
            <div className="bg-white p-6 rounded-lg shadow-md animate-slideUpFadeIn">
              <h3 className="text-2xl font-semibold text-green-700 mb-4">
                3. Understanding Rankings & Accreditation
              </h3>
              <p className="text-gray-600 mb-4">
                Rankings and accreditation ensure that the institution meets
                quality standards. Keep these in mind while choosing a
                university:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Global rankings like QS, Times Higher Education, etc.</li>
                <li>Regional or national accreditation bodies.</li>
                <li>Program-specific accreditations for specialized fields.</li>
                <li>Alumni success and career placement statistics.</li>
              </ul>
            </div>

            {/* Personalized Guidance */}
            <div className="bg-white p-6 rounded-lg shadow-md animate-zoomIn">
              <h3 className="text-2xl font-semibold text-green-700 mb-4">
                4. How We Help
              </h3>
              <p className="text-gray-600 mb-4">
                At Intandem Scholars, we provide personalized guidance to help
                you make the right choice. Our process includes:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Understanding your academic background and preferences.</li>
                <li>Shortlisting universities that align with your goals.</li>
                <li>Providing insights on rankings, courses, and campus life.</li>
                <li>Assisting with application preparation and submission.</li>
              </ul>
            </div>

            {/* Final Note */}
            <div className="bg-white p-6 rounded-lg shadow-md animate-slideUp">
              <h3 className="text-2xl font-semibold text-green-700 mb-4">
                Ready to Begin Your Journey?
              </h3>
              <p className="text-gray-600">
                Our dedicated advisors are here to guide you every step of the
                way. Let us help you find the university that’s perfect for
                you.
              </p>
              <p className="mt-4 text-gray-600">
                Contact us today to start your university selection process.
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

export default UniversitySelectionPage;
