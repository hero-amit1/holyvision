import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Manually imported images
import img11 from "../assets/11.jpeg";
import img22 from "../assets/22.jpeg";
import img33 from "../assets/33.jpeg";
import img44 from "../assets/44.jpeg";
import img55 from "../assets/55.jpeg";
import img66 from "../assets/66.jpeg";
import img77 from "../assets/77.jpeg";
import img88 from "../assets/88.jpeg";
import img99 from "../assets/99.jpeg";

import img111 from "../assets/111.jpeg";
import img222 from "../assets/222.jpeg";
import img333 from "../assets/333.jpeg";
import img444 from "../assets/444.jpeg";
import img555 from "../assets/555.jpeg";
import img666 from "../assets/666.jpeg";
import img777 from "../assets/777.jpeg";
import img888 from "../assets/888.jpeg";
import img999 from "../assets/999.jpeg";

import img1111 from "../assets/1111.jpeg";
import img2222 from "../assets/2222.jpeg";
import img3333 from "../assets/3333.jpeg";
import img4444 from "../assets/4444.jpeg";
import img5555 from "../assets/5555.jpeg";
import img6666 from "../assets/6666.jpeg";
import img7777 from "../assets/7777.jpeg";
import img8888 from "../assets/8888.jpeg";
import img9999 from "../assets/9999.jpeg";

import img11111 from "../assets/11111.jpeg";
import img22222 from "../assets/22222.jpeg";
import img33333 from "../assets/33333.jpeg";
import img44444 from "../assets/44444.jpeg";
import img55555 from "../assets/55555.jpeg";
import img66666 from "../assets/66666.jpeg";
import img77777 from "../assets/77777.jpeg";
import img88888 from "../assets/88888.jpeg";
import img99999 from "../assets/99999.jpeg";

const images = [
  img11, img22, img33, img44, img55, img66,  img88, img99,
  img111,  img333, img444, img555, img666, img777, img888, img999,
  img1111, img2222, img3333, img4444, img5555, img6666, img7777, img8888, img9999,
  img11111, img22222, img33333, img44444, img55555, img66666, img77777, img88888, img99999,
];

const GalleryPage = () => {
  return (
    <div>
      <Navbar />
      <section id="gallery" className="bg-gray-50 py-12 px-6 sm:px-12 pt-[140px]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-4xl font-bold text-[#034694] mb-6 text-center">
            Holy Vision Campus Gallery
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {images.map((image, index) => (
              <div key={index} className="overflow-hidden rounded-lg shadow-lg">
                <img
                  src={image}
                  alt={`Gallery Image ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default GalleryPage;
