import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PostArrivalImage from "../assets/uuu.jpg"; // Replace with the correct path

const PostArrivalSupportPage = () => {
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
        style={{ backgroundImage: `url(${PostArrivalImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center animate-fadeIn">
          <h1 className="text-5xl text-white font-extrabold animate-bounceIn">
            Post-Arrival Support
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-12 px-4 md:px-8 bg-gray-50 animate-fadeIn">
        <div className="max-w-6xl mx-auto">
          {/* Intro Section */}
          <h2 className="text-4xl font-bold text-gray-800 mb-4 text-center animate-zoomIn">
            Settle in Seamlessly
          </h2>
          <p className="text-lg text-gray-700 mb-8 text-center animate-slideUpFadeIn">
            Moving to a new country is exciting yet challenging. Our Post-Arrival Support services are designed to help you transition smoothly into your new environment and start your journey with confidence.
          </p>

          {/* Key Areas of Post-Arrival Support */}
          <div className="space-y-8 animate-slideUpFadeInDelayed">
            <div className="bg-white p-6 rounded-lg shadow-md animate-slideUp">
              <h3 className="text-2xl font-semibold text-yellow-700 mb-4">
                1. Airport Pickup and Transportation
              </h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Arrange airport pickup to your accommodation.</li>
                <li>Guidance on local transportation options.</li>
                <li>Assistance with understanding public transit systems.</li>
              </ul>
            </div>

            {/* Accommodation Assistance */}
            <div className="bg-white p-6 rounded-lg shadow-md animate-fadeInSlideUp">
              <h3 className="text-2xl font-semibold text-yellow-700 mb-4">
                2. Accommodation Assistance
              </h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Help with securing short-term or long-term housing.</li>
                <li>Guidance on understanding rental agreements and policies.</li>
                <li>Support in setting up utilities, internet, and other essentials.</li>
              </ul>
            </div>

            {/* Orientation to Local Culture */}
            <div className="bg-white p-6 rounded-lg shadow-md animate-slideUpFadeIn">
              <h3 className="text-2xl font-semibold text-yellow-700 mb-4">
                3. Orientation to Local Culture
              </h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Introduction to cultural norms and practices.</li>
                <li>Understanding local laws and regulations.</li>
                <li>Tips for communication and building connections.</li>
              </ul>
            </div>

            {/* Academic and Administrative Assistance */}
            <div className="bg-white p-6 rounded-lg shadow-md animate-zoomIn">
              <h3 className="text-2xl font-semibold text-yellow-700 mb-4">
                4. Academic and Administrative Support
              </h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Help with university registration and orientation.</li>
                <li>Support with opening a local bank account.</li>
                <li>Assistance with obtaining local identification or permits.</li>
              </ul>
            </div>

            {/* Building a Support Network */}
            <div className="bg-white p-6 rounded-lg shadow-md animate-slideUpFadeInDelayed">
              <h3 className="text-2xl font-semibold text-yellow-700 mb-4">
                5. Building Your Support Network
              </h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Join student communities and local organizations.</li>
                <li>Participate in networking events and meetups.</li>
                <li>Connect with mentors for guidance and advice.</li>
              </ul>
            </div>

            {/* Health and Safety Guidance */}
            <div className="bg-white p-6 rounded-lg shadow-md animate-slideUpFadeInDelayed">
              <h3 className="text-2xl font-semibold text-yellow-700 mb-4">
                6. Health and Safety Guidance
              </h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Access to local healthcare services and insurance options.</li>
                <li>Guidance on emergency contacts and resources.</li>
                <li>Support in maintaining mental and physical well-being.</li>
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

export default PostArrivalSupportPage;
