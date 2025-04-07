import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import { AiFillStar } from "react-icons/ai";
import { FaQuoteRight } from "react-icons/fa";

// Import images (replace with real paths)
import image1 from "../assets/111.jpg";
import image2 from "../assets/222.jpg";
import image3 from "../assets/333.jpg";
import image4 from "../assets/444.jpg";

const reviews = [
  {
    image: image1,
    name: "Rachana Poudel",
    title: "Alumni – PCL Nursing (Batch 2077)",
    review:
      "Holy Vision provided me the best learning experience during my PCL Nursing course. The faculty was supportive and the hands-on practicals helped prepare me for real-world healthcare settings.",
    rating: 5,
  },
  {
    image: image2,
    name: "Suman Ghimire",
    title: "Alumni – General Medicine (HA)",
    review:
      "The General Medicine program at Holy Vision was both challenging and fulfilling. The academic environment and rural exposure shaped me into a confident health assistant.",
    rating: 5,
  },
  {
    image: image3,
    name: "Anisha KC",
    title: "Alumni – Diploma in Pharmacy",
    review:
      "I’m proud to have graduated with distinction in Diploma in Pharmacy from Holy Vision. The training, labs, and focus on quality healthcare made a huge difference in my career.",
    rating: 5,
  },
  {
    image: image4,
    name: "Dipesh Lama",
    title: "Graduate – General Medicine",
    review:
      "Holy Vision Technical Campus doesn’t just teach — it transforms. I found strong mentorship, community engagement, and academic excellence in my 3-year journey.",
    rating: 5,
  },
];

const Reviews = () => {
  return (
    <section className="bg-blue-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-blue-900 mb-4">
          Testimonial
        </h2>
      

        {/* Swiper: 3 per screen on large */}
        <Swiper
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop={true}
          modules={[Autoplay]}
          slidesPerView={1}
          spaceBetween={20}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="relative bg-white p-6 rounded-lg shadow-md border-b-4 border-pink-400 h-full flex flex-col justify-between hover:shadow-xl transition-shadow duration-300">
                {/* Quote Icon */}
                <FaQuoteRight className="text-3xl text-gray-500 absolute bottom-4 right-4 opacity-70" />

                {/* Review */}
                <div className="mb-6">
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {review.review}
                  </p>
                </div>

                {/* Reviewer Info */}
                <div className="flex items-center mt-auto">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-pink-400 mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm">
                      {review.name}
                    </h4>
                    <p className="text-xs text-gray-500">{review.title}</p>
                    <div className="flex mt-1">
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <AiFillStar key={i} className="text-yellow-500 text-sm" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Reviews;
