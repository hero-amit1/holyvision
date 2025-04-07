import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import europeImg from "../assets/ff.jpeg";
import visaProcessImg from "../assets/santorini.jpeg";

const EuropePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-blue-800 text-white py-8 px-4 pt-[100px]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold mb-4">Study in Europe</h1>
            <p className="text-lg">
              Discover a blend of rich cultural heritage and cutting-edge education by studying in Europe, home to some of the world's most prestigious universities.
            </p>
          </div>
          <img
            src={europeImg}
            alt="Europe"
            className="w-full lg:w-1/2 mt-6 lg:mt-0 rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Why Study in Europe */}
      <section className="bg-gray-50 py-8 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Why Study in Europe?</h2>
          <p className="text-lg text-justify ">
       
Europe is home to some of the oldest and most prestigious universities in the world, offering a diverse range of programs and research opportunities. For Nepalese students, studying in Europe provides access to high-quality education and the chance to experience different cultures and languages. European universities emphasize critical thinking, creativity, and innovation, preparing students for successful careers in a globalized world. The region offers numerous scholarships and funding options to support international students, making it an attractive destination for higher education.
          </p>
        </div>
      </section>

      {/* Post-Education Opportunities */}
      <section className="bg-gray-50 py-10 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Post-Education Opportunities</h2>
          <p className="text-lg text-justify ">
          
After completing your studies, you can apply for various residence permits depending on the country. Many European countries offer pathways to permanent residency through employment or investment. As a permanent resident, you can enjoy a high quality of life, excellent healthcare, and financial stability. Europe offers a secure environment with diverse career opportunities and competitive salaries.
          </p>
        </div>
      </section>

      {/* Facts About Europe */}
      <section className="bg-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Facts About Europe</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <ul className="space-y-4 text-gray-700">
              <li>Europe is home to over 4,000 higher education institutions.</li>
              <li>Boasts some of the oldest and most prestigious universities in the world.</li>
              <li>Offers programs taught in English across various disciplines.</li>
              <li>Known for affordable tuition fees and living costs compared to other destinations.</li>
              <li>Provides numerous scholarships for international students.</li>
            </ul>
            <ul className="space-y-4 text-gray-700">
              <li>Includes 44 countries with rich cultural diversity and history.</li>
              <li>Encourages student mobility with the Erasmus+ program.</li>
              <li>Offers access to cutting-edge research facilities and internships.</li>
              <li>Provides extensive travel opportunities within the Schengen area.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Reasons to Study in Europe */}
      <section className="bg-gray-50 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Reasons to Study in Europe</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold">1. High Academic Standards</h3>
              <p className="text-gray-700">
                Europe is known for its excellent academic quality and rigorous programs.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">2. Multilingual Environment</h3>
              <p className="text-gray-700">
                Learn new languages while studying in a multicultural setting.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">3. Career Opportunities</h3>
              <p className="text-gray-700">
                Build your career in thriving industries with global connections.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">4. Affordable Education</h3>
              <p className="text-gray-700">
                Many countries in Europe offer low tuition fees and living costs.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">5. Rich Cultural Experience</h3>
              <p className="text-gray-700">
                Immerse yourself in Europe's rich history, arts, and cuisine.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Student Visa Process */}
      <section className="bg-white py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-6">
          <div>
            <h2 className="text-3xl font-bold mb-4">Student Visa Process for Europe</h2>
            <p className="text-lg text-gray-700 mb-6">
              To study in Europe, international students need to apply for a student visa specific to the country they plan to study in. Requirements generally include an offer of admission from a recognized institution, proof of funds, health insurance, and a valid passport. Some countries also require language proficiency tests.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Each country has its own visa process, so it is essential to check specific requirements and apply well in advance.
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
            Tuition fees in Europe vary depending on the country and institution, with many offering free or low-cost education for international students. Countries such as Germany, Norway, and Finland provide free education in public universities for EU/EEA students and affordable fees for non-EU students.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Numerous scholarships are available, such as Erasmus+, DAAD, and country-specific scholarships, to support international students financially.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Living costs in Europe vary, with estimated monthly expenses ranging from EUR 700 to EUR 1,200, depending on the city and lifestyle. These costs typically cover accommodation, food, transportation, and other essentials.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EuropePage;
