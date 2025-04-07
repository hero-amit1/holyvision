import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

// Import all consultancy-related images
import consultancy1 from "../assets/jj.jpg";
import consultancy2 from "../assets/cd.jpg";
import consultancy3 from "../assets/ef.jpg";
import consultancy4 from "../assets/gh.jpg";
import consultancy5 from "../assets/ij.jpg";
import consultancy6 from "../assets/can.jpg";

// Define the images in an array
const images = [
  { src: consultancy1, alt: "1" },
  { src: consultancy2, alt: "2" },
  { src: consultancy3, alt: "3" },
  { src: consultancy4, alt: "4" },
  { src: consultancy5, alt: "5" },
  { src: consultancy6, alt: "6" },
];

export default function VisaConsultancySlider() {
  const [loaded, setLoaded] = useState(Array(images.length).fill(false));

  const handleImageLoad = (index) => {
    setLoaded((prev) => {
      const newLoaded = [...prev];
      newLoaded[index] = true;
      return newLoaded;
    });
  };

  return (
    <div className="w-full relative z-[0] bg-gray-100">
      <Swiper
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="swiper-container"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="w-full relative">
              {/* Placeholder/Loader */}
              {!loaded[index] && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-200 animate-pulse">
                  <span className="text-gray-400 text-lg">Loading...</span>
                </div>
              )}
              {/* Image */}
              <img
                src={image.src}
                alt={image.alt}
                className={`w-full h-[300px] sm:h-[620px] md:h-[640px] 2xl:h-[900px] object-cover object-center transition-opacity duration-700 ${
                  loaded[index] ? "opacity-100" : "opacity-0"
                }`}
                onLoad={() => handleImageLoad(index)}
                loading="lazy"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Optional Inline CSS for Loader Animation */}
      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
          .animate-pulse {
            background: linear-gradient(90deg, rgba(200, 200, 200, 0.2) 25%, rgba(240, 240, 240, 0.4) 50%, rgba(200, 200, 200, 0.2) 75%);
            background-size: 400% 100%;
            animation: fadeIn 1.5s infinite linear;
          }
        `}
      </style>
    </div>
  );
}
