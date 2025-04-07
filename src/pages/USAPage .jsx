import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import usaImg from "../assets/usa.jpg"; 
import visaProcessImg from "../assets/222.jpg";


const USAPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-8 px-4 pt-[100px]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold mb-4">Study in the USA</h1>
            <p className="text-lg">
              Unlock unparalleled opportunities by studying in the United States, a global hub for education and innovation.
            </p>
          </div>
          <img
            src={usaImg}
            alt="USA"
            className="w-full lg:w-1/2 mt-6 lg:mt-0 rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Why Study in the USA */}
      <section className="bg-gray-50 py-8 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Why Study in the USA?</h2>
          <p className="text-lg text-justify ">
          The USA is home to some of the world's most prestigious universities and offers a diverse range of programs and research opportunities. For Nepalese students, studying in the USA means access to cutting-edge technology, innovative teaching methods, and a multicultural environment that fosters personal and professional growth. The USA's flexible education system allows students to explore various fields of study and tailor their education to their interests and career goals. Additionally, the USA offers numerous scholarships and financial aid options specifically for international students, making it a top choice for higher education.
          </p>
        </div>
    
      </section>
      <section className="bg-gray-50 py-10 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Post-Education Opportunities</h2>
          <p className="text-lg text-justify ">
          After completing your education, you can apply for a Post-Completion Optional Practical Training (OPT) visa, allowing you to work in the USA for up to 12 months (or 24 months for STEM graduates). This experience can lead to sponsorship for an H-1B visa and eventually a Green Card, granting you permanent residency. With a Green Card, you can enjoy a high standard of living, excellent healthcare, and financial freedom. The USA offers a secure environment with numerous career opportunities and the potential for high earnings.
          </p>
        </div>
    
      </section>

      {/* Facts About the USA */}
      <section className="bg-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Facts About the USA</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <ul className="space-y-4 text-gray-700">
              <li>The USA has over 4,000 universities offering a wide range of courses.</li>
              <li>Home to 16 of the top 20 universities globally.</li>
              <li>Provides unparalleled research and internship opportunities.</li>
              <li>
                Welcomes international students with generous scholarships and assistantships.
              </li>
              <li>Hosts vibrant multicultural communities and a dynamic lifestyle.</li>
            </ul>
            <ul className="space-y-4 text-gray-700">
              <li>The USA invests heavily in higher education and innovation.</li>
              <li>
                International students in the USA contribute to groundbreaking research in technology, medicine, and science.
              </li>
              <li>
                Offers access to top-notch facilities and resources, including libraries and labs.
              </li>
              <li>
                Extensive post-graduate work opportunities under OPT and H1-B visa programs.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Reasons to Study in the USA */}
      <section className="bg-gray-50 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Reasons to Study in the USA</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold">1. World-Class Education</h3>
              <p className="text-gray-700">
                The USA is home to some of the world's top universities and colleges renowned for academic excellence.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">2. Research Opportunities</h3>
              <p className="text-gray-700">
                Gain access to cutting-edge research facilities and collaborate with leading experts in your field.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">3. Career Prospects</h3>
              <p className="text-gray-700">
                The USA offers extensive job and internship opportunities, boosting your career on a global scale.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">4. Diversity and Inclusion</h3>
              <p className="text-gray-700">
                Experience a vibrant, multicultural environment that welcomes students from around the globe.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">5. Innovative Curriculum</h3>
              <p className="text-gray-700">
                Flexible curriculums allow students to explore a wide range of subjects and tailor their education.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Student Visa Process */}
      <section className="bg-white  py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-6">
          <div>
            <h2 className="text-3xl font-bold mb-4">Student Visa Process for the USA</h2>
            <p className="text-lg text-gray-700 mb-6">
              To study in the USA, you need to obtain an F-1 student visa. The process includes receiving your I-20 form from a SEVP-approved institution, filling out the DS-160 form, paying the SEVIS fee, scheduling a visa interview, and presenting your financial and academic documents.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              During your interview, you must demonstrate your intent to study, proof of funds, and ties to your home country.
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
    Planning to pursue studies in the USA is a great decision. That is why we want to make sure you know all there is to know. This more importantly involves the related costs, from tuition fees to scholarships and living expenses.
  </p>

  <h3 className="text-2xl font-semibold mb-4">The Fee Structure</h3>
  <p className="text-lg text-gray-700 mb-6">
    Public colleges charge between $35,000 and $45,000, while private colleges charge from $50,000 to $75,000 annually. It is essential to note that most colleges don’t have a standardized government fee system. This is because their fee assessments depend on the college and the course selected.
  </p>
  <h4 className="text-xl font-semibold mb-4">Cost of Undergraduate Degrees in the US</h4>
  <ul className="list-disc list-inside text-gray-700 mb-6">
    <li>Public universities: $25,000-$35,000 per year</li>
    <li>Private colleges: $30,000-$45,000 per year (sometimes even higher: $50,000-$55,000 per year)</li>
    <li>Community colleges: $2,500-$3,000 per year</li>
  </ul>
  <p className="text-lg text-gray-700 mb-6">
    Community colleges usually award certificates and associate degrees as they do not offer bachelor’s degrees. However, you may use the associate’s degree to qualify for the first half of your bachelor’s degree and later pursue a master’s degree.
  </p>

  <h4 className="text-xl font-semibold mb-4">Cost of Postgraduate Degrees in the US</h4>
  <ul className="list-disc list-inside text-gray-700 mb-6">
    <li>Public universities: $20,000-$35,000 per year</li>
    <li>Private colleges: $35,000-$50,000 per year</li>
  </ul>

  <h3 className="text-2xl font-semibold mb-4">Scholarship Opportunities</h3>
  <p className="text-lg text-gray-700 mb-6">
    Studying in the US can prove highly expensive for some students. Applying for a scholarship can be significantly helpful for international students. Scholarships are competitive and take time for approval, so make sure to apply for a scholarship with professional help and guidance.
  </p>
  <p className="text-lg text-gray-700 mb-6">
    Students with above-average grades and those athletically inclined are likely to get approved for scholarships. Additionally, scholarships are available for art, dance, and music. Some prominent scholarship opportunities include:
  </p>
  <ul className="list-disc list-inside text-gray-700 mb-6">
    <li>Fulbright Foreign Student Program</li>
    <li>Golden Key Graduate Scholar Award</li>
    <li>IEFA Non-Government Scholarship</li>
    <li>QS Undergraduate Scholarship</li>
    <li>QS Leadership Scholarship for Excellence</li>
    <li>QS Leadership Scholarship</li>
  </ul>

  <h3 className="text-2xl font-semibold mb-4">Living Costs</h3>
  <p className="text-lg text-gray-700 mb-6">
    The cost of living in the US varies by location. Urban areas tend to be more expensive than rural ones. Here are some rough estimates for yearly expenses:
  </p>
  <ul className="list-disc list-inside text-gray-700 mb-6">
    <li>Emergency expenses, groceries, electricity, internet, books, clothes, and other essentials: $10,000-$12,000 per year</li>
    <li>On-campus accommodation (dormitory): $5,000-$8,000 per year</li>
    <li>Non-campus accommodation: $6,000-$15,000 per year (based on location)</li>
  </ul>

  <h4 className="text-xl font-semibold mb-4">Transportation Costs</h4>
  <ul className="list-disc list-inside text-gray-700 mb-6">
    <li>Bus and train passes: $30-$50 per month</li>
    <li>Total transportation: $100-$300 per month (depending on usage)</li>
  </ul>

  <h3 className="text-2xl font-semibold mb-4">Studying and Living in the USA</h3>
  <p className="text-lg text-gray-700 mb-6">
    The city you choose to travel to will offer a unique experience compared to other states in America. Initially, you might feel overwhelmed, but life becomes interesting as you adjust and gain a broader perspective of things. 
  </p>
  <p className="text-lg text-gray-700 mb-6">
    The USA has stunning heritage-rich sites such as the Grand Canyon National Park, Times Square, the Great Smoky Mountains National Park, the Statue of Liberty, and more. You can take trips across cities along the Eastern Seaboard, the West Coast, the Southwest, and the Hawaiian Islands to explore its beauty and culture.
  </p>
</div>


        
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default USAPage;
