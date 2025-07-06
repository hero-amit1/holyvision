import React, { useEffect } from "react";
import { motion } from "framer-motion";

import Footer from "../components/Footer";
import ParticularDirectContactUs from "../components/ParticularDirectContactUs";
import generalMedicineImage from "../assets/gm.jpg";
import NavbarMain from "../components/NavbarMain";

const PclGeneralMedicinePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);

    const title = document.createElement("title");
    title.innerText =
      "PCL in General Medicine (HA) | Holy Vision Technical Campus – CTEVT Health Assistant Program in Nepal";
    document.head.appendChild(title);

    const metaDesc = document.createElement("meta");
    metaDesc.name = "description";
    metaDesc.content =
      "Enroll in the PCL in General Medicine (Health Assistant) program at Holy Vision Technical Campus. Get hands-on clinical training, modern labs, and CTEVT affiliation for a strong medical career in Nepal.";
    document.head.appendChild(metaDesc);

    const metaKeywords = document.createElement("meta");
    metaKeywords.name = "keywords";
    metaKeywords.content =
      "PCL General Medicine, Health Assistant Nepal, CTEVT Medical Courses, HA program Kathmandu, Holy Vision HA, General Medicine College Nepal, CTEVT affiliated courses, Practical medical training Nepal";
    document.head.appendChild(metaKeywords);
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen">
      <NavbarMain />

      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[350px] flex items-center justify-center mt-[60px]"
        style={{ backgroundImage: `url(${generalMedicineImage})` }}
      >
        <motion.div
          className="bg-black bg-opacity-60 p-8 text-white text-center rounded-lg shadow-lg"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <h2 className="text-4xl font-extrabold">PCL in General Medicine (Health Assistant)</h2>
          <p className="text-lg mt-3">
            A comprehensive pathway to becoming a skilled Health Assistant with real-world clinical expertise.
          </p>
        </motion.div>
      </section>

      <main className="max-w-6xl mx-auto px-6 py-20">
        {/* Overview */}
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
            The PCL in General Medicine at <strong>Holy Vision Technical Campus (HVTC)</strong> offers a comprehensive curriculum emphasizing practical skills and theoretical knowledge in healthcare. With state-of-the-art facilities and experienced faculty, students gain hands-on training in patient care, clinical procedures, and medical ethics, preparing them to excel in the healthcare industry.
          </p>
        </section>

        {/* Course Structure */}
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
            {/* Year 1 */}
            <div className="bg-green-50 p-6 rounded-lg shadow-md">
              <h4 className="font-semibold text-lg text-green-800 mb-2">Year 1</h4>
              <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                <li>English (T)</li>
                <li>Nepali (T)</li>
                <li>Social Studies (T)</li>
                <li>Maths, Statistics & Computer (T/P)</li>
                <li>Physics (T/P)</li>
                <li>Chemistry (T/P)</li>
                <li>Botany (T/P)</li>
                <li>Zoology (T/P)</li>
                <li>Anatomy & Physiology (T)</li>
              </ul>
            </div>

            {/* Year 2 */}
            <div className="bg-green-50 p-6 rounded-lg shadow-md">
              <h4 className="font-semibold text-lg text-green-800 mb-2">Year 2</h4>
              <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                <li>Medicine I (T/P)</li>
                <li>Surgery I (T/P)</li>
                <li>Basic Medical Procedures & First Aid (T/P)</li>
                <li>Clinical Pathology (T/P)</li>
                <li>Pharmacy & Pharmacology (T)</li>
                <li>Environmental Health (T)</li>
                <li>Health Education (T)</li>
                <li>Primary Health Care & Family Health (MCH, FP, Nutrition) (T/P)</li>
              </ul>
            </div>

            {/* Year 3 */}
            <div className="bg-green-50 p-6 rounded-lg shadow-md">
              <h4 className="font-semibold text-lg text-green-800 mb-2">Year 3</h4>
              <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                <li>Medicine II (T/P)</li>
                <li>Surgery II (T/P)</li>
                <li>Health Management (T)</li>
                <li>Epidemiology & Demography (T/P)</li>
                <li>Community Diagnosis (T/P)</li>
                <li>Comprehensive Clinical + PHC Practicum II (P)</li>
                <li>Comprehensive Community Field Practicum (P)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Career & Eligibility */}
        <section className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h4 className="text-xl font-bold text-green-800 mb-4">Career Opportunities</h4>
            <ul className="list-disc list-inside text-gray-700 text-sm space-y-1 text-left max-w-xs mx-auto">
              <li>Health Assistants (HA)</li>
              <li>Community Health Workers</li>
              <li>Emergency Medical Technicians (EMTs)</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h4 className="text-xl font-bold text-green-800 mb-4">Eligibility</h4>
            <p className="text-gray-700 text-sm leading-relaxed">
              • SEE with GPA ≥ 2.00<br />
              • TSLC (CMA) with ≥ 68.33%
            </p>
          </div>
        </section>

        {/* Contact Form */}
        <ParticularDirectContactUs course="PCL in General Medicine (HA)" />
      </main>

      <Footer />
    </div>
  );
};

export default PclGeneralMedicinePage;
