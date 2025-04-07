import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import newZealandImg from "../assets/qq.jpg";
import visaProcessImg from "../assets/tt.jpeg";

const NewZealandPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-green-600 text-white py-8 px-4 pt-[100px]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold mb-4">Study in New Zealand</h1>
            <p className="text-lg">
              Experience world-class education and an unparalleled quality of life in New Zealand, a country renowned for its natural beauty and innovative education system.
            </p>
          </div>
          <img
            src={newZealandImg}
            alt="New Zealand"
            className="w-full lg:w-1/2 mt-6 lg:mt-0 rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Why Study in New Zealand */}
      <section className="bg-gray-50 py-8 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Why Study in New Zealand?</h2>
          <p className="text-lg text-justify ">
          New Zealand offers a unique and dynamic education experience with a focus on research and practical learning. For Nepalese students, studying in New Zealand means access to world-class education in a supportive and innovative environment. The country's universities are known for their strong emphasis on student well-being and personalized learning experiences. New Zealand's stunning natural landscapes and friendly communities provide an enriching backdrop for academic and personal growth. Additionally, there are various scholarships and financial support options available for international students.
          </p>
        </div>
      </section>

      {/* Post-Education Opportunities */}
      <section className="bg-gray-50 py-10 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Post-Education Opportunities</h2>
          <p className="text-lg text-justify ">
         
After completing your studies, you can apply for a Post-Study Work Visa, allowing you to work in New Zealand for up to three years. This can lead to a Skilled Migrant Category Resident Visa, granting you permanent residency. As a permanent resident, you can enjoy a high standard of living, excellent healthcare, and financial freedom. New Zealand offers a secure environment with numerous career opportunities and the potential for high earnings.
          </p>
        </div>
      </section>

      {/* Facts About New Zealand */}
      <section className="bg-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Facts About New Zealand</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <ul className="space-y-4 text-gray-700">
              <li>Home to eight universities, all ranked among the top 3% globally.</li>
              <li>Renowned for its innovative and research-driven education system.</li>
              <li>Offers a safe, welcoming, and multicultural environment for students.</li>
              <li>Provides generous scholarships for international students.</li>
              <li>Boasts breathtaking landscapes and outdoor recreational activities.</li>
            </ul>
            <ul className="space-y-4 text-gray-700">
              <li>English is the primary language, making it easier for international students to adapt.</li>
              <li>Ranked as one of the safest countries in the world.</li>
              <li>Encourages work-study options with part-time jobs during studies.</li>
              <li>High demand for skilled workers in various sectors.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Reasons to Study in New Zealand */}
      <section className="bg-gray-50 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Reasons to Study in New Zealand</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold">1. Globally Recognized Qualifications</h3>
              <p className="text-gray-700">
                Gain degrees that are internationally acknowledged and respected.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">2. Affordable Education</h3>
              <p className="text-gray-700">
                Enjoy a cost-effective education system with competitive tuition fees and living costs.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">3. Work Opportunities</h3>
              <p className="text-gray-700">
                Explore flexible work options during studies and post-graduation.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">4. Quality of Life</h3>
              <p className="text-gray-700">
                Experience an excellent standard of living with access to modern amenities and pristine natural beauty.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">5. Supportive Environment</h3>
              <p className="text-gray-700">
                Benefit from a student-friendly culture and supportive educational institutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Student Visa Process */}
      <section className="bg-white py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-6">
          <div>
            <h2 className="text-3xl font-bold mb-4">Student Visa Process for New Zealand</h2>
            <p className="text-lg text-gray-700 mb-6">
              To study in New Zealand, you need a student visa. The process includes receiving an offer of place from a recognized institution, providing proof of funds, health insurance, and a valid passport. You also need to meet health and character requirements and submit a completed visa application online.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Make sure to apply early and provide all required documents to avoid delays in processing your visa application.
            </p>
          </div>
          <img
            src={visaProcessImg}
            alt="Visa Process"
            className="w-full lg:w-1/2 rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Scholarships and Living Costs */}
      <section className="bg-gray-50 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Fee, Scholarships & Cost of Living</h2>
          <p className="text-lg text-gray-700 mb-6">
            New Zealand offers affordable tuition fees and living costs compared to other popular study destinations. The average tuition fees for undergraduate programs range from NZD 22,000 to NZD 32,000 annually, while postgraduate programs range from NZD 26,000 to NZD 37,000 annually.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Scholarships are available for international students, including the New Zealand International Scholarships and institution-specific awards. These scholarships can significantly reduce the financial burden of studying abroad.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Living costs vary depending on location, with an average cost of NZD 15,000 to NZD 20,000 annually, covering accommodation, food, transportation, and other essentials.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NewZealandPage;
