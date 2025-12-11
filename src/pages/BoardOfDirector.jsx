import React, { useState } from "react";
import { motion } from "framer-motion";
import NavbarMain from "../components/NavbarMain";
import Footer from "../components/Footer";

// IMPORT REAL PHOTOS (use the correct extension your files actually use!)
import chairmanImg from "../assets/BOD/chairman.png";
import director1Img from "../assets/BOD/director1.png";
import director2Img from "../assets/BOD/director2.png";
import principalImg from "../assets/BOD/principal.png";

// Animation Variants
const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.2 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 45, scale: 0.92 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const truncate = (text, n = 240) =>
  text.length > n ? text.slice(0, n).trim() + "…" : text;

export default function BoardOfDirectorsAnimatedCards() {
  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  const cards = [
    {
      id: "chairman",
      img: chairmanImg,
      name: "Mr. Dipak Chandar Baral",
      title: "Chairman, Holy Vision Technical Campus",
      headerLabel: "Message From the Chairman",
      message: `Namaste and warm greetings to all prospective students, esteemed guardians, partners, and well-wishers.

I am Mr. Dipak Chandar Baral, Chairman of Holy Vision Technical Campus…

With best wishes for a fulfilling and impactful future.`,
    },

    {
      id: "director1",
      img: director1Img,
      name: "Mr. Tulsi Das Shrestha",
      title: "Director, Holy Vision Technical Campus",
      headerLabel: "Message From the Director",
      message: `I extend my warm greetings to all prospective students, parents, and well-wishers…

Thank you.`,
    },

    {
      id: "director2",
      img: director2Img,
      name: "Dr. Soni Mahato",
      title: "Director, Holy Vision Technical Campus",
      headerLabel: "Message From the Director",
      message: `Warm greetings to the aspiring students, dedicated guardians, and well-wishers…

With sincerity and encouragement.`,
    },

    {
      id: "principal",
      img: principalImg,
      name: "Mr. Bishwa Bandhu Subedi",
      title: "Principal, Holy Vision Technical Campus",
      headerLabel: "Message From the Principal",
      message: `Dear Students, Parents, and Well-Wishers,

I am pleased to congratulate you…

With best wishes for your future.`,
    },
  ];

  return (
    <>
      <NavbarMain />

      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-100/30 pt-36 pb-20 px-4">
        <div className="max-w-7xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-20"
          >
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r 
              from-[#2a57e8] via-[#e2b92e] to-[#ff5722] bg-clip-text text-transparent">
              Board of Directors
            </h1>
            <p className="text-gray-600 mt-4 max-w-3xl mx-auto text-lg">
              Leadership dedicated to vision, excellence, and nation-building.
            </p>
          </motion.div>

          <motion.section
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 gap-14"
          >
            {cards.map((c, i) => (
              <motion.div key={c.id} variants={cardVariants}>

                <motion.div
                  whileHover={{ scale: 1.035 }}
                  transition={{ type: "spring", stiffness: 160, damping: 18 }}
                  className="p-[1px] rounded-3xl bg-gradient-to-br 
                    from-blue-400/40 via-white to-blue-300/40 shadow-2xl"
                >
                  <div className="rounded-3xl bg-white/80 backdrop-blur-2xl shadow-xl p-8">

                    <div className="text-center mb-6">
                      <span className="px-4 py-1.5 rounded-full text-sm font-semibold text-blue-700 bg-blue-100 shadow">
                        {c.headerLabel}
                      </span>
                    </div>

                    <div className="flex gap-6 items-center mb-6">
                      <div className="relative w-40 h-40 rounded-2xl overflow-hidden bg-white shadow">
                        <img
                          src={c.img}
                          alt={c.name}
                          className="w-full h-full object-cover rounded-2xl border border-gray-300"
                        />
                      </div>

                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{c.name}</h3>
                        <p className="text-blue-700 font-medium mt-1 text-sm">{c.title}</p>
                      </div>
                    </div>

                    <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                      {openIndex === i ? c.message : truncate(c.message, 260)}
                    </p>

                    <button
                      onClick={() => toggle(i)}
                      className="text-sm font-semibold text-blue-600 hover:text-blue-800 mt-4"
                    >
                      {openIndex === i ? "Show less ▲" : "Read more ▼"}
                    </button>
                  </div>
                </motion.div>

              </motion.div>
            ))}
          </motion.section>
        </div>
      </main>

      <Footer />
    </>
  );
}
