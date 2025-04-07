import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ukImg from "../assets/uk.jpg"; // Replace with your UK image
import visaProcessImg from "../assets/555.jpg"; // Replace with your Visa Process image


const UKPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-slate-800 text-white py-8 px-4 pt-[100px]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold mb-4">Study in the UK</h1>
            <p className="text-lg">
              Unlock global career opportunities with world-renowned universities and a rich cultural experience in the UK.
            </p>
          </div>
          <img
            src={ukImg}
            alt="UK"
            className="w-full lg:w-1/2 mt-6 lg:mt-0 rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Why Study in the UK */}
      <section className="bg-gray-50 py-8 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Why Study in the UK?</h2>
          <p className="text-lg text-justify ">
          The UK boasts a rich academic heritage with universities that are globally recognized for their excellence. For Nepalese students, studying in the UK provides an opportunity to learn from world-class faculty and engage in research that can shape their future careers. The UK's education system emphasizes critical thinking, creativity, and independent learning, preparing students for success in a globalized world. Moreover, the UK offers a variety of scholarships and funding options to support international students. With its vibrant cultural scene and historic landmarks, the UK also provides an enriching student experience.
          </p>
        </div>
    
      </section>
      <section className="bg-gray-50 py-10 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Post-Education Opportunities</h2>
          <p className="text-lg text-justify ">
       
Upon graduation, you can apply for a Graduate Route visa, allowing you to stay and work in the UK for up to two years (or three years for doctoral graduates). This can be a pathway to securing a Skilled Worker visa and eventually Indefinite Leave to Remain (ILR), leading to permanent residency. With ILR, you can enjoy a high quality of life, robust healthcare, and financial stability. The UK offers a safe and dynamic environment with diverse career opportunities and competitive salaries.
          </p>
        </div>
    
      </section>

      {/* Facts About the UK */}
      <section className="bg-white   px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Facts About the UK</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <ul className="space-y-4 text-gray-700">
              <li>The UK is home to four of the top 10 universities in the world.</li>
              <li>Over 485,000 international students study in the UK annually.</li>
              <li>English universities have a rich history dating back over 800 years.</li>
              <li>London is ranked as the #1 student city globally.</li>
              <li>Graduates from UK universities are highly sought after worldwide.</li>
            </ul>
            <ul className="space-y-4 text-gray-700">
              <li>The UK has one of the highest student satisfaction rates globally.</li>
              <li>The UK offers shorter undergraduate and master's programs, saving time and money.</li>
              <li>The country has a post-study work visa for international students.</li>
              <li>The UK is known for its vibrant culture, arts, and historical landmarks.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Reasons to Study in the UK */}
      <section className="bg-gray-50 py-7 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Reasons to Study in the UK</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold">1. World-Class Education</h3>
              <p className="text-gray-700">
                The UK is home to globally recognized universities offering cutting-edge programs.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">2. Shorter Courses</h3>
              <p className="text-gray-700">
                Most UK undergraduate degrees are three years, and master's programs are one year.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">3. Post-Study Work Opportunities</h3>
              <p className="text-gray-700">
                The Graduate Route visa allows international students to stay and work in the UK after graduation.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">4. Cultural Diversity</h3>
              <p className="text-gray-700">
                The UK has a diverse student population, with students from over 140 countries.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">5. Financial Support</h3>
              <p className="text-gray-700">
                Scholarships and financial aid are widely available for international students.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Student Visa Process */}
      <section className="bg-white py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-6">
          <div>
            <h2 className="text-3xl font-bold mb-4">Student Visa Process for the UK</h2>
            <p className="text-lg text-gray-700 mb-6">
              The UK student visa process requires obtaining a Confirmation of Acceptance for Studies (CAS) from your university, applying for a Tier 4 (General) Student Visa, and fulfilling English language requirements.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              The process includes submitting proof of financial ability, a valid passport, and supporting documents. Applicants may need to attend a visa interview and provide biometrics at the nearest visa application center.
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
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-6">
         
        <div>
  <h2 className="text-3xl font-bold mb-4">Scholarships & Cost of Living</h2>
  <p className="text-lg text-gray-700 mb-6">
    The UK offers numerous scholarships, including the Chevening Scholarships, Commonwealth Scholarships, and university-specific financial aid. These scholarships cover tuition, living costs, or both.
  </p>
  
  <h3 className="text-2xl font-semibold mb-4">Living Costs</h3>
  <ul className="list-disc list-inside text-gray-700 mb-6">
    <li>Accommodation – £400 to £1,000 per month</li>
    <li>Groceries – £100 to £300 per month</li>
    <li>Transport – £50 to £150 per month</li>
    <li>Entertainment – £50 to £100 per month</li>
    <li>Miscellaneous – £50 to £150 per month</li>
  </ul>
  <p className="text-lg text-gray-700 mb-6">
    The overall cost of living depends on the city. Students in London may incur higher expenses, but scholarships and part-time work opportunities can help manage costs.
  </p>

  <h2 className="text-3xl font-bold mb-4">How to Apply for a Student Visa in the UK</h2>
  <p className="text-lg text-gray-700 mb-6">
    When planning your study abroad journey in the UK, it’s essential to understand the student visa application process. Below is an overview of the types of UK student visas and their requirements.
  </p>

  <h3 className="text-2xl font-semibold mb-4">Types of UK Student Visas</h3>
  <ul className="list-disc list-inside text-gray-700 mb-6">
    <li>
      <strong>Short-term UK Student Visa:</strong> For short courses, requiring a CAS (Confirmation of Acceptance for Studies) letter and proof of financial capacity.
    </li>
    <li>
      <strong>General UK Student Visa (Tier 4):</strong> For long-term courses, requiring a CAS letter, financial proof, and payment of the healthcare surcharge for NHS access.
    </li>
  </ul>

  <h3 className="text-2xl font-semibold mb-4">Steps to Apply for a UK Student Visa</h3>
  <ol className="list-decimal list-inside text-gray-700 mb-6">
    <li>Collect a CAS letter from your university.</li>
    <li>Prepare financial documents proving your ability to cover expenses.</li>
    <li>Register on the UKVI visa website and fill out the online application form.</li>
    <li>Pay the IHS (Health Care Surcharge) for the duration of your stay.</li>
    <li>Submit your application fee online or through your bank.</li>
    <li>Book an appointment at the visa application center for biometrics and document submission.</li>
  </ol>
  <p className="text-lg text-gray-700 mb-6">
    Ensure all required documents like a valid passport, CAS number, and ATAS clearance (if applicable) are ready before applying.
  </p>

  <h2 className="text-3xl font-bold mb-4">Cost of Studying and Living in the UK</h2>
  <p className="text-lg text-gray-700 mb-6">
    The average cost of studying in the UK is approximately £22,200 per year, with London being more expensive. Here's a breakdown based on the program type:
  </p>
  <ul className="list-disc list-inside text-gray-700 mb-6">
    <li>Undergraduate program: £7,000 to £20,000 per year</li>
    <li>Postgraduate master’s program: £10,000 to £25,000 per year</li>
    <li>Doctoral program: £15,000 to £30,000 per year</li>
  </ul>
  <p className="text-lg text-gray-700 mb-6">
    The Tier 4 Student Visa costs £348 for applications outside the UK and £475 for extensions or switches within the UK.
  </p>

  <h2 className="text-3xl font-bold mb-4">Acquiring a Scholarship in the UK</h2>
  <p className="text-lg text-gray-700 mb-6">
    Scholarships like the GREAT Scholarship, global scholarships, and science and research funding can help cover costs. Visit university websites or consult professional advisors for guidance on scholarship opportunities.
  </p>

  <h3 className="text-2xl font-semibold mb-4">Cost of Living Expenses</h3>
  <ul className="list-disc list-inside text-gray-700 mb-6">
    <li>UK student visa application fee: £348 (one-time)</li>
    <li>Housing: £500 per month</li>
    <li>Transportation: £150-£200 per month</li>
    <li>Food: £150-£200 per month</li>
    <li>Clothing and leisure: £50 per month</li>
    <li>Telephone and mobile: £50 per month</li>
  </ul>
  <p className="text-lg text-gray-700 mb-6">
    Additional costs may include university or private accommodation, utilities, and travel expenses.
  </p>

  <h2 className="text-3xl font-bold mb-4">Living as an International Student in the UK</h2>
  <p className="text-lg text-gray-700 mb-6">
    The UK offers more than academic excellence. Its rich culture, diverse traditions, and unique weather provide a vibrant experience. Public holidays, seasonal variations, and meeting people with distinct accents make life in the UK exciting.
  </p>
  <p className="text-lg text-gray-700 mb-6">
    Enjoy exploring the UK's heritage-rich landmarks like the Tower of London, Buckingham Palace, and the Lake District, while adapting to new cultural and academic experiences.
  </p>
</div>


        </div>
      </section>

      <Footer />
    </div>
  );
};

export default UKPage;
