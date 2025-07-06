import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import ParticularDirectContactUs from "../components/ParticularDirectContactUs";
import NavbarMain from "../components/NavbarMain";
import nursingImage from "../assets/syringe.jpg"; // Replace with actual path

const PclNursingPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);

    const head = document.head;

    const title = document.createElement("title");
    title.innerText = "PCL in Nursing | Holy Vision Technical Campus, Kathmandu - CTEVT";
    head.appendChild(title);

    const metaDesc = document.createElement("meta");
    metaDesc.name = "description";
    metaDesc.content =
      "Join the PCL in Nursing program at Holy Vision Technical Campus in Kathmandu. Gain clinical experience, compassionate care training, and prepare for roles like Staff Nurse, Midwife, and Community Health Nurse. CTEVT-affiliated and affordable.";
    head.appendChild(metaDesc);

    const metaKeywords = document.createElement("meta");
    metaKeywords.name = "keywords";
    metaKeywords.content =
      "PCL in Nursing Nepal, Nursing College Kathmandu, Staff Nurse Training Nepal, CTEVT Nursing Course, Holy Vision Technical Campus Nursing, Nursing Education Nepal";
    head.appendChild(metaKeywords);
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen">
      <NavbarMain />

      <section
        className="relative bg-cover bg-center h-[350px] flex items-center justify-center mt-[60px]"
        style={{ backgroundImage: `url(${nursingImage})` }}
      >
        <motion.div
          className="bg-black bg-opacity-60 p-8 text-white text-center rounded-lg shadow-lg"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <h2 className="text-4xl font-extrabold">PCL in Nursing</h2>
          <p className="text-lg mt-3">
            A respected foundation in professional nursing care with extensive clinical training and compassionate practice.
          </p>
        </motion.div>
      </section>

      <main className="max-w-6xl mx-auto px-6 py-20">
        <section className="mb-12 text-center">
          <motion.h3
            className="text-3xl font-bold text-gray-800 mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Course Overview
          </motion.h3>
          <p className="text-gray-700 max-w-4xl mx-auto leading-relaxed">
            The PCL in Nursing program at <strong>Holy Vision Technical Campus (HVTC)</strong> equips students with the knowledge, ethics, and practical training essential for modern nursing. Through intensive clinical experiences and expert instruction, graduates are prepared to contribute effectively to both hospital and community healthcare settings.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center mb-16">
          <div className="bg-white p-6 rounded shadow-md">
            <h4 className="text-lg font-bold text-green-700">Duration</h4>
            <p className="text-gray-600 mt-2">3 Years</p>
          </div>
          <div className="bg-white p-6 rounded shadow-md">
            <h4 className="text-lg font-bold text-green-700">Affiliation</h4>
            <p className="text-gray-600 mt-2">CTEVT (Nepal)</p>
          </div>
          <div className="bg-white p-6 rounded shadow-md">
            <h4 className="text-lg font-bold text-green-700">Eligibility</h4>
            <p className="text-gray-600 mt-2">
              SEE with GPA ≥ 2.0<br />
              For TSLC (ANM) with ≥ 68.33%
            </p>
          </div>
        </section>

        <section className="mb-16">
          <motion.h3
            className="text-2xl font-bold text-gray-800 mb-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Course Structure
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-green-50 p-6 rounded-lg shadow-md">
              <h4 className="font-semibold text-lg text-green-800 mb-2">First Year</h4>
              <ul className="list-disc list-inside text-gray-700 text-sm">
                <li>Fundamental of Nursing (T/P)</li>
                <li>Community Health Nursing I (T/P)</li>
                <li>Anatomy & Physiology, English, Nepali (T)</li>
                <li>Basic Science, Pharmacology, Biochemistry, Microbiology (T)</li>
              </ul>
            </div>
            <div className="bg-green-50 p-6 rounded-lg shadow-md">
              <h4 className="font-semibold text-lg text-green-800 mb-2">Second Year</h4>
              <ul className="list-disc list-inside text-gray-700 text-sm">
                <li>Medical & Surgical I, II (T/P)</li>
                <li>Geriatric Nursing (T/P)</li>
                <li>Mental Health & Behaviors Nursing (T/P)</li>
                <li>Community Health Nursing II (T/P)</li>
                <li>Social Science (T)</li>
              </ul>
            </div>
            <div className="bg-green-50 p-6 rounded-lg shadow-md">
              <h4 className="font-semibold text-lg text-green-800 mb-2">Third Year</h4>
              <ul className="list-disc list-inside text-gray-700 text-sm">
                <li>Midwifery Nursing I, II, III (T/P)</li>
                <li>Gynecology Nursing (T/P)</li>
                <li>Child Health Nursing (T/P)</li>
                <li>Leadership & Management (T/P)</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-xl font-semibold text-green-700 mb-4">Key Features</h4>
            <ul className="list-disc list-inside text-gray-700 text-sm leading-relaxed">
              <li>Extensive clinical & community exposure</li>
              <li>Focus on patient-centered compassionate care</li>
              <li>Modern learning and simulation environment</li>
              <li>Preparation for Nepal Nursing Council Licensing</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-xl font-semibold text-green-700 mb-4">Facilities</h4>
            <ul className="list-disc list-inside text-gray-700 text-sm leading-relaxed">
              <li>Advanced nursing labs and mannequins</li>
              <li>Extensive library and e-learning support</li>
              <li>Experienced clinical instructors</li>
              <li>Hostel and support for female students</li>
            </ul>
          </div>
        </section>

        <section className="mb-16 bg-gray-100 p-8 rounded-lg shadow-md text-center">
          <motion.h3
            className="text-2xl font-bold text-gray-800"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            Career Prospects
          </motion.h3>
          <p className="text-gray-700 mt-4 max-w-4xl mx-auto leading-relaxed">
            Graduates can pursue roles such as:
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-3 text-left max-w-md mx-auto text-sm">
            <li>Staff Nurse</li>
            <li>Midwife</li>
            <li>Community Health Nurse</li>
            <li>Public Health Educator</li>
          </ul>
        </section>

        <section className="mb-20 bg-green-50 p-10 rounded-lg shadow text-center">
          <h3 className="text-2xl font-bold text-green-800 mb-4">
            Why Choose HVTC for PCL in Nursing?
          </h3>
          <ul className="list-disc list-inside text-gray-700 max-w-2xl mx-auto text-sm leading-relaxed">
            <li>Rigorous academic calendar with modern tools</li>
            <li>Strong community-based nursing exposure</li>
            <li>Internships in hospitals and health posts</li>
            <li>Supportive faculty and personalized guidance</li>
            <li>Excellent results in licensing exams</li>
          </ul>
        </section>

        <ParticularDirectContactUs course="PCL in Nursing" />
      </main>

      <Footer />
    </div>
  );
};

export default PclNursingPage;
