import React, { useEffect } from "react";
import { motion } from "framer-motion";
import NavbarMain from "../components/NavbarMain";
import Footer from "../components/Footer";
import ParticularDirectContactUs from "../components/ParticularDirectContactUs";
import pharmacyImage from "../assets/pharmacy.jpg";

const DiplomaInPharmacyPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);

    const head = document.head;
    const title = document.createElement("title");
    title.innerText = "Diploma in Pharmacy | Holy Vision Technical Campus, Kathmandu - CTEVT";
    head.appendChild(title);

    const metaDesc = document.createElement("meta");
    metaDesc.name = "description";
    metaDesc.content =
      "Join the Diploma in Pharmacy (D. Pharm) at Holy Vision Technical Campus in Kathmandu. Gain hands-on training and prepare for roles as Assistant Pharmacist, Sales Rep, Hospital Pharmacist, and more. CTEVT-affiliated with affordable fees.";
    head.appendChild(metaDesc);

    const metaKeywords = document.createElement("meta");
    metaKeywords.name = "keywords";
    metaKeywords.content =
      "Diploma in Pharmacy Nepal, D. Pharm Kathmandu, Pharmacy Course Nepal, CTEVT Pharmacy Course, Pharmacy College Nepal, Holy Vision Technical Campus Pharmacy, Assistant Pharmacist Program";
    head.appendChild(metaKeywords);
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen">
      <NavbarMain />

      <section
        className="relative bg-cover bg-center h-[350px] flex items-center justify-center mt-[60px]"
        style={{ backgroundImage: `url(${pharmacyImage})` }}
      >
        <motion.div
          className="bg-black bg-opacity-60 p-8 text-white text-center rounded-lg shadow-lg"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <h2 className="text-4xl font-extrabold">Diploma in Pharmacy (D. Pharm)</h2>
          <p className="text-lg mt-3">
            Build a strong foundation in pharmaceutical sciences with hands-on lab experience and clinical practice.
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
            The <strong>Diploma in Pharmacy</strong> program at <strong>Holy Vision Technical Campus (HVTC)</strong> offers a strong foundation in pharmaceutical sciences, combining practical training with theoretical knowledge. Students benefit from advanced labs and expert faculty, gaining hands-on experience in compounding, drug delivery, and patient counseling.
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
              or TSLC (CMA) with ≥ 68.33%
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
                <li>English, Nepali, Social Studies</li>
                <li>Maths, Statistics & Computer</li>
                <li>Physics, Chemistry, Botany, Zoology</li>
                <li>Anatomy & Physiology</li>
              </ul>
            </div>
            <div className="bg-green-50 p-6 rounded-lg shadow-md">
              <h4 className="font-semibold text-lg text-green-800 mb-2">Second Year</h4>
              <ul className="list-disc list-inside text-gray-700 text-sm">
                <li>Pharmaceutics I, Pharmacology I</li>
                <li>Pharmaceutical Chemistry I, Pharmacognosy</li>
                <li>Biochemistry & Microbiology</li>
                <li>Pharmacotherapeutics I, Public Health Pharmacy</li>
                <li>Pharmaceutical Management</li>
              </ul>
            </div>
            <div className="bg-green-50 p-6 rounded-lg shadow-md">
              <h4 className="font-semibold text-lg text-green-800 mb-2">Third Year</h4>
              <ul className="list-disc list-inside text-gray-700 text-sm">
                <li>Pharmaceutics II, Pharmacology II</li>
                <li>Pharmaceutical Chemistry II</li>
                <li>Pharmacotherapeutics II</li>
                <li>Hospital & Clinical Pharmacy</li>
                <li>Pharmaceutical Jurisprudence</li>
                <li>Community Pharmacy Practice</li>
                <li>Comprehensive Field Practice</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-xl font-semibold text-green-700 mb-4">Key Features</h4>
            <ul className="list-disc list-inside text-gray-700 text-sm leading-relaxed">
              <li>Hands-on training in pharmaceutical labs</li>
              <li>Real-world clinical pharmacy exposure</li>
              <li>Modern compounding and formulation practice</li>
              <li>Focus on patient-centered pharmacy care</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-xl font-semibold text-green-700 mb-4">Facilities</h4>
            <ul className="list-disc list-inside text-gray-700 text-sm leading-relaxed">
              <li>Advanced pharmaceutical labs and simulation rooms</li>
              <li>Rich pharmacy library and digital resources</li>
              <li>Experienced teaching and clinical faculty</li>
              <li>Industry and hospital internship network</li>
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
            <li>Assistant Pharmacist</li>
            <li>Assistant Hospital Pharmacist</li>
            <li>Assistant Clinical Pharmacist</li>
            <li>Medical Sales Representative</li>
          </ul>
        </section>

       

        <section className="mb-20 bg-green-50 p-10 rounded-lg shadow text-center">
          <h3 className="text-2xl font-bold text-green-800 mb-4">
            Why Choose HVTC for Diploma in Pharmacy?
          </h3>
          <ul className="list-disc list-inside text-gray-700 max-w-2xl mx-auto text-sm leading-relaxed">
            <li>Industry-experienced Faculty</li>
            <li>Dedicated Pharmaceutical Labs</li>
            <li>CTEVT-Aligned Practical Curriculum</li>
            <li>Internship and Placement Assistance</li>
            <li>Strong Community & Hospital Ties</li>
            <li>Modern Learning Environment</li>
          </ul>
        </section>

        <ParticularDirectContactUs course="Diploma in Pharmacy" />
      </main>

      <Footer />
    </div>
  );
};

export default DiplomaInPharmacyPage;
