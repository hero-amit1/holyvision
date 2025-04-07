import React, { useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import ContactForm from '../components/Contact';
import aawazlocation from '../assets/map.png';
import Footer from '../components/Footer';

const mapImageUrl =
  'https://www.google.com/maps/place/Intandem+Scholars/@27.7020502,85.340598,17z/data=!4m6!3m5!1s0x39eb193ca8412ca1:0xbc5eaf962c8bfd62!8m2!3d27.7020787!4d85.3406429!16s%2Fg%2F11wm_t1qyg?entry=ttu&g_ep=EgoyMDI0';

const Contact = () => {
  const headingRef = useRef(null);
  const textRef = useRef(null);
  const mapRef = useRef(null);

  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);

    const observerOptions = {
      threshold: 0.1,
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.animationPlayState = 'running';
          entry.target.style.opacity = '1';
        } else {
          entry.target.style.animationPlayState = 'paused';
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    if (headingRef.current) observer.observe(headingRef.current);
    if (textRef.current) observer.observe(textRef.current);
    if (mapRef.current) observer.observe(mapRef.current);

    return () => {
      if (headingRef.current) observer.unobserve(headingRef.current);
      if (textRef.current) observer.unobserve(textRef.current);
      if (mapRef.current) observer.unobserve(mapRef.current);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Fixed Navbar */}
      <Navbar />

      {/* Main Content with Padding */}
      <div className="flex-grow pt-[80px]">
        <div className="p-8 text-center">
          <h1
            ref={headingRef}
            className=" text-[#2D4591] text-2xl sm:text-4xl font-semibold opacity-0"
            style={{ animation: 'fadeInDown 1s ease-out forwards', animationPlayState: 'paused' }}
          >
            Welcome to Intandem Scholars
          </h1>

          <p
            ref={textRef}
            className="mt-4 text-[15px] sm:text-lg text-gray-700"
            style={{ animation: 'fadeInUp 1s ease-out forwards', animationPlayState: 'paused' }}
          >
            Your trusted partner in turning dreams into global realities. At Intandem Scholars, we specialize in guiding you through every step of your journey to study, work, or settle abroad. From selecting the right path to navigating complex visa processes, we empower aspiring individuals to unlock a world of opportunities.
          </p>
        </div>

        <div ref={mapRef} className="text-center mt-8">
          <a href={mapImageUrl} target="_blank" rel="noopener noreferrer">
            <img
              src={aawazlocation}
              alt="Map"
              className="mx-auto max-w-full h-auto"
            />
          </a>
        </div>
      </div>

      {/* Contact Form */}
      <div className="mt-8">
        <ContactForm />
      </div>

      {/* Inline CSS for custom animations */}
      <style>{`
        @keyframes fadeInDown {
          0% { opacity: 0; transform: translateY(-20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 768px) {
          h1 {
            font-size: 1.5rem;
            animation-duration: 0.8s;
          }
          p {
            font-size: 1rem;
            animation-duration: 0.8s;
          }
          img {
            animation-duration: 0.8s;
          }
        }
      `}</style>
      <Footer/>
    </div>
  );
};

export default Contact;
