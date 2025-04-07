import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import australiaImg from "../assets/aus.jpg"; 
import visaProcessImg from "../assets/111.jpg";


const AustraliaPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-red-600 text-white py-8 px-4 pt-[100px]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold mb-4">Study in Australia</h1>
            <p className="text-lg">
              Explore opportunities to study in one of the most dynamic and multicultural countries.
            </p>
          </div>
          <img
            src={australiaImg}
            alt="Australia"
            className="w-full lg:w-1/2 mt-6 lg:mt-0 rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Why Study in Australia */}
      <section className="bg-gray-50 py-8 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Why Study in the Australia?</h2>
          <p className="text-lg text-justify ">
         
Australia is known for its high-quality education system and vibrant student life. For Nepalese students, studying in Australia means benefiting from a practical and hands-on approach to learning, which is highly valued by employers worldwide. Australia's universities are renowned for their research and teaching excellence, particularly in fields such as engineering, medicine, and environmental sciences. The country's welcoming and multicultural society makes it an ideal destination for international students. Additionally, Australia offers numerous scholarships and financial support options for Nepalese students.
          </p>
        </div>
    
      </section>
      <section className="bg-gray-50 py-10 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Post-Education Opportunities</h2>
          <p className="text-lg text-justify ">
       
          After completing your studies, you can apply for a Temporary Graduate visa (subclass 485), allowing you to work in Australia for up to four years. This can lead to a Skilled Independent visa (subclass 189) or a Skilled Nominated visa (subclass 190), granting you permanent residency. As a permanent resident, you can enjoy a high standard of living, excellent healthcare, and financial freedom. Australia offers a secure environment with abundant career opportunities and the potential for high earnings.
          </p>
        </div>
    
      </section>

      {/* Facts About Australia */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Facts About Australia</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <ul className="space-y-4 text-gray-700">
              <li>Australia is the world’s 13th-largest economy.</li>
              <li>Australia is the fourth-happiest country globally.</li>
              <li>Over 260 languages are spoken in Australia.</li>
              <li>
                5 of the top 30 best student cities in the world are in Australia.
              </li>
              <li>
                8 out of the top 100 universities globally are located in Australia.
              </li>
            </ul>
            <ul className="space-y-4 text-gray-700">
              <li>Australia ranks 9th globally in the university system ranking.</li>
              <li>
                It is the 3rd most popular destination for international students.
              </li>
              <li>
                5 of the top 40 cities with the best infrastructure are in Australia.
              </li>
              <li>
                Melbourne has been ranked the world’s most livable city for 3 consecutive years.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Reasons to Study in Australia */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Reasons to Study in Australia</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold">1. High-Quality Education</h3>
              <p className="text-gray-700">
                Australian universities are globally renowned for their academic standards and a
                diverse range of courses.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">2. Global Recognition</h3>
              <p className="text-gray-700">
                Degrees from Australian universities are highly regarded by employers and
                institutions worldwide.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">3. Cultural Diversity</h3>
              <p className="text-gray-700">
                Australia provides a multicultural environment and global networking opportunities.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">4. Research Opportunities</h3>
              <p className="text-gray-700">
                Australian universities lead in cutting-edge research and innovation.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">5. Vibrant Lifestyle</h3>
              <p className="text-gray-700">
                Experience stunning beaches, rich culture, and modern cities in Australia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Student Visa Process */}
      <section className="bg-white  py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-6">
          <div>
            <h2 className="text-3xl font-bold mb-4">Student Visa Process for Australia</h2>
            <p className="text-lg text-gray-700 mb-6">
            The student visa process for Australia involves several steps. Firstly, you need to be accepted into a recognized Australian educational institution and receive a Confirmation of Enrollment (CoE) letter. Then, you can create an account on the Department of Home Affairs website and submit your student visa application online. You will need to provide documents such as your CoE, proof of financial capacity, health insurance, and English language proficiency. After submitting the application, you will be required to undergo a health examination and may need to attend an interview at the Australian embassy or consulate.
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
      <section className="bg-gray-50    px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-6">
          
          <div>
  <h2 className="text-3xl font-bold mb-4">Fee, Scholarships & Cost of Living</h2>
  
  <p className="text-lg text-gray-700 mb-6">
    Moving from Nepal to Australia and studying here as an international student is likely to be overwhelming. Therefore, being prepared for the standard of living is necessary, and this includes understanding the costs involved. There are mainly three areas that you will have to consider while gathering and segmenting your finances for your study stay in Australia.
  </p>
  
  <p className="text-lg text-gray-700 mb-6">
    Let’s take a look at the fees you have to pay for admission in a university, the possible scholarship opportunities that you can avail, and the cost of living you may have to incur.
  </p>

  <h3 className="text-2xl font-semibold mb-4">The Fee Structure for Studying in Australia</h3>
  <p className="text-lg text-gray-700 mb-6">
    Before you arrange finances, one of the most daunting tasks is to get admission at a university. We’ve helped more than 100,000 international students achieve their academic and professional goals in Australia. Expert Education is your companion throughout the process of application and admission at your preferred institution. It’s a simple process; we will take you through it, from structured budgets to study plans.
  </p>
  <p className="text-lg text-gray-700 mb-6">
    The cost of studying depends on the educational provider you select, the location, and the chosen level of study.
  </p>

  <ul className="list-disc list-inside text-gray-700 mb-6">
    <li>Schools in Australia may cost around $7,800 to $30,000 (yearly).</li>
    <li>Undergraduate Bachelor Degree is around $15,000 to $33,000 (yearly).</li>
    <li>A postgraduate Master’s Degree can vary from $20,000 up to $37,000 (yearly).</li>
    <li>Vocational Education and Training is around $4,000 to $22,000 (yearly).</li>
    <li>English language studies can cost around $300 per week.</li>
    <li>Doctoral degrees are around $14,000 to $37,000 (yearly).</li>
  </ul>

  <h3 className="text-2xl font-semibold mb-4">Scholarships – Your Ticket to Financial Support</h3>
  <p className="text-lg text-gray-700 mb-6">
    Various scholarship opportunities are offered to international students to study without worrying about financial support. Every scholarship to study in Australia has a different set of requirements based on the institution selected to pursue studies.
  </p>
  <p className="text-lg text-gray-700 mb-6">
    Parents seeking a scholarship for their child can also directly visit the respective university website for more information.
  </p>
  <p className="text-lg text-gray-700 mb-6">
    However, if you need a helping hand, we can assist in advising the best scholarship to study in Australia and aid in its application processes.
  </p>

  <h3 className="text-2xl font-semibold mb-4">Travel and Accommodation</h3>
  <p className="text-lg text-gray-700 mb-6">
    The average cost of living in Australia is a crucial factor to consider during your application and financial preparation.
  </p>

  <p className="text-lg text-gray-700 mb-4">Here are some of the approximate weekly costs involved in sharing a rental to home-staying and more:</p>
  <ul className="list-disc list-inside text-gray-700 mb-6">
    <li>Homestay – $235 to $325 per week</li>
    <li>Rental – $185 to $440 per week</li>
    <li>Shared Rental – $95 to $215 per week</li>
    <li>On-campus – $110 to $280 per week</li>
    <li>Hostels, Guesthouses – $90 to $150 per week</li>
  </ul>

  <p className="text-lg text-gray-700 mb-4">
    If you choose a boarding school for your child in Australia, the yearly cost can range from $11,000 to $22,000.
  </p>
  
  <p className="text-lg text-gray-700 mb-4">Similarly, other approximate weekly costs include:</p>
  <ul className="list-disc list-inside text-gray-700 mb-6">
    <li>Gas and electricity – $10 to $20 per week</li>
    <li>Groceries and eating out – $140 to $280 per week</li>
    <li>Phone and Internet – $15 to $30 per week</li>
    <li>Public transport – $30 to $60 per week</li>
    <li>Private car – $150 to $260 per week</li>
    <li>Entertainment – $80 to $150 per week</li>
  </ul>

  <p className="text-lg text-gray-700 mb-6">
    If you are a resident of Nepal, then you are requested to attend the Australian Visa Application Centre in Kathmandu in person to submit your biometrics.
  </p>
</div>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AustraliaPage;
