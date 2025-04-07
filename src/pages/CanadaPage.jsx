import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import canadaImg from "../assets/canada1.jpg"; // Replace with your Canada image
import visaProcessImg from "../assets/333.jpg"; // Replace with your Visa Process image


const CanadaPage = () => {
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
            <h1 className="text-4xl font-bold mb-4">Study in Canada</h1>
            <p className="text-lg">
              Discover world-class education and multicultural experiences in one of the safest countries globally.
            </p>
          </div>
          <img
            src={canadaImg}
            alt="Canada"
            className="w-full lg:w-1/2 mt-6 lg:mt-0 rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Why Study in Canada */}
      <section className="bg-gray-50 py-8 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Why Study in the Canada?</h2>
          <p className="text-lg text-justify ">
          Canada is celebrated for its excellent education system and inclusive, multicultural society. For Nepalese students, studying in Canada offers access to top-ranked universities and a wide range of programs that emphasize research and practical experience. Canada's commitment to innovation and technology provides students with the skills needed to excel in their careers. The country's safe and welcoming environment, along with its numerous scholarships and financial aid options, makes it an attractive destination for international students.
          
          </p>
        </div>
    
      </section>
      <section className="bg-gray-50 py-10 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Post-Education Opportunities</h2>
          <p className="text-lg text-justify ">
       
After graduation, you can apply for a Post-Graduation Work Permit (PGWP), allowing you to work in Canada for up to three years. This experience can lead to permanent residency through the Canadian Experience Class (CEC) or Provincial Nominee Program (PNP). As a permanent resident, you can enjoy a high quality of life, excellent healthcare, and financial stability. Canada offers a secure environment with diverse career opportunities and competitive salaries.

          </p>
        </div>
    
      </section>

      {/* Facts About Canada */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Facts About Canada</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <ul className="space-y-4 text-gray-700">
              <li>Canada is the second-largest country in the world by area.</li>
              <li>It is one of the safest countries globally with a high quality of life.</li>
              <li>Canada is home to over 640,000 international students.</li>
              <li>5 Canadian universities are ranked in the top 100 globally.</li>
              <li>Canada offers a post-graduate work permit for international students.</li>
            </ul>
            <ul className="space-y-4 text-gray-700">
              <li>Canada is ranked #1 in the world for quality of life.</li>
              <li>Toronto and Vancouver are among the best student cities globally.</li>
              <li>Canada’s education system is government-funded and affordable.</li>
              <li>It has two official languages: English and French.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Reasons to Study in Canada */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Reasons to Study in Canada</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold">1. High-Quality Education</h3>
              <p className="text-gray-700">
                Canadian universities and colleges are renowned for their academic excellence and affordable tuition fees.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">2. Diverse and Inclusive Culture</h3>
              <p className="text-gray-700">
                Canada embraces diversity and is one of the most immigrant-friendly countries.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">3. Work Opportunities</h3>
              <p className="text-gray-700">
                International students can work up to 20 hours per week during studies and full-time during breaks.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">4. Pathway to Permanent Residency</h3>
              <p className="text-gray-700">
                Canada offers several immigration pathways for international students to settle after graduation.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">5. Advanced Research Opportunities</h3>
              <p className="text-gray-700">
                Canadian universities are leaders in research and innovation, offering students hands-on experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Student Visa Process */}
      <section className="bg-white py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-6">
          <div>
            <h2 className="text-3xl font-bold mb-4">Student Visa Process for Canada</h2>
            <p className="text-lg text-gray-700 mb-6">
              The Canadian student visa process involves obtaining a Letter of Acceptance (LOA) from a recognized educational institution, creating an account on the Canadian Immigration and Citizenship (CIC) website, and submitting your application online. Supporting documents include proof of financial support, medical examination, and English proficiency.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              After submitting your application, you may be required to provide biometrics and attend an interview at the nearest visa application center.
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
    Canada offers a variety of scholarships for international students, covering tuition fees, living costs, and other expenses. Some scholarships are based on academic merit, while others consider financial need.
  </p>

  <h3 className="text-2xl font-semibold mb-4">Living Costs</h3>
  <ul className="list-disc list-inside text-gray-700 mb-6">
    <li>Homestay – $200 to $400 per week</li>
    <li>Rental – $600 to $1,500 per month</li>
    <li>Shared Rental – $250 to $700 per month</li>
    <li>Groceries – $200 to $400 per month</li>
    <li>Public Transport – $80 to $150 per month</li>
  </ul>
  <p className="text-lg text-gray-700 mb-6">
    Overall, the cost of living in Canada depends on the city and lifestyle. International students can also work part-time to cover their expenses.
  </p>

  <h2 className="text-3xl font-bold mb-4">Universities and Courses in Canada</h2>
  <p className="text-lg text-gray-700 mb-6">
    Studying in Canada can be a dream come true for various international students. Plus, there are many options to choose from in terms of the universities and course options. The education system in Canada is divided into three levels:
  </p>

  <h3 className="text-2xl font-semibold mb-4">The Education System</h3>
  <ul className="list-disc list-inside text-gray-700 mb-6">
    <li>Primary Education: Starts from age 6 to 7 until age 13 to 14 (up to grade 8).</li>
    <li>Secondary Education: Runs from grade 9 to grade 12.</li>
    <li>Post-Secondary Education: Includes universities and a variety of courses.</li>
  </ul>
  <p className="text-lg text-gray-700 mb-6">
    Canada has internationally recognized universities offering a variety of courses, the duration of which depends on the course you choose to study.
  </p>

  <h3 className="text-2xl font-semibold mb-4">Top Canadian Universities</h3>
  <ul className="list-disc list-inside text-gray-700 mb-6">
    <li>University Canada West</li>
    <li>Cape Breton University</li>
    <li>Thompson Rivers University</li>
    <li>University of Toronto</li>
    <li>University of British Columbia</li>
    <li>University of Alberta</li>
    <li>Yorkville University</li>
    <li>University of New Brunswick</li>
  </ul>

  <h3 className="text-2xl font-semibold mb-4">Popular Courses in Canada</h3>
  <ul className="list-disc list-inside text-gray-700 mb-6">
    <li>Biosciences, Medicine and Healthcare</li>
    <li>Media and Journalism</li>
    <li>Agricultural Science and Forestry</li>
    <li>Mathematics, Statistics, and Actuarial Science</li>
    <li>Psychology and Human Resources</li>
  </ul>
  <p className="text-lg text-gray-700 mb-6">
    Some of the most sought-after bachelor's degrees include Bachelors in Business Administration, Environmental Sciences, Computer Science, and Engineering. For postgraduate studies, popular programs include:
  </p>
  <ul className="list-disc list-inside text-gray-700 mb-6">
    <li>Masters in Computer Science</li>
    <li>Masters in Civil Engineering</li>
    <li>Masters in Public Health</li>
    <li>Masters in Finance</li>
    <li>Masters in Human Resource Management</li>
  </ul>

  <h2 className="text-3xl font-bold mb-4">Admission Process in Canada</h2>
  <p className="text-lg text-gray-700 mb-6">
    Canada is becoming a popular destination for international students because of its transparent and accessible visa application process. Each institution has specific policies regarding admission requirements for international students. Entry criteria vary depending on the program, for example:
  </p>
  <ul className="list-disc list-inside text-gray-700 mb-6">
    <li>Community colleges: Minimum 55% in the previous qualification</li>
    <li>Universities: Minimum 60% in the last qualification</li>
  </ul>
  <p className="text-lg text-gray-700 mb-6">
    English proficiency tests like IELTS, TOEFL, or PTE are mandatory. For a bachelor's degree, exams like SAT might be required, while GRE or GMAT is often necessary for master’s programs.
  </p>
  <p className="text-lg text-gray-700 mb-6">
    The Canada student visa fee is C$100, applicable for single or multiple entries, including extensions. Professional guidance can help simplify the admission process.
  </p>

  <h2 className="text-3xl font-bold mb-4">Living in the Great White North</h2>
  <p className="text-lg text-gray-700 mb-6">
    Canada is the second-largest country, known for its Arctic tundra and snow, earning it the name “The Great White North.” Studying in Canada offers a better quality of life, significant healthcare facilities, world-class education, and the benefits of a robust economy.
  </p>
  <p className="text-lg text-gray-700 mb-6">
    Some of the best cities to explore include Toronto, Montreal, Vancouver, Calgary, and Edmonton. From skiing in Whistler to visiting Niagara Falls and Banff National Park, there’s plenty to experience.
  </p>
  <p className="text-lg text-gray-700 mb-6">
    Students can participate in festivals, concerts, camping, and other adventures. International students are encouraged to explore this beautiful country while pursuing their academic goals.
  </p>
</div>



        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CanadaPage;
