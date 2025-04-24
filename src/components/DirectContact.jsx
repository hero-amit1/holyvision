import React, { useState } from "react";
import bgImage from "../assets/syringe.jpg";

const DirectContactUs = () => {
  const [messageSent, setMessageSent] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=hvtcampus@gmail.com&su=Direct Contact Request&body=
      Name: ${encodeURIComponent(data.name)}
      %0AEmail: ${encodeURIComponent(data.email)}
      %0APhone: ${encodeURIComponent(data.phone)}
      %0AAddress: ${encodeURIComponent(data.address)}
      %0ACourse: ${encodeURIComponent(data.course)}`;

    const mailtoLink = `mailto:hvtcampus@gmail.com?subject=Direct Contact Request&body=
      Name: ${encodeURIComponent(data.name)}
      %0AEmail: ${encodeURIComponent(data.email)}
      %0APhone: ${encodeURIComponent(data.phone)}
      %0AAddress: ${encodeURIComponent(data.address)}
      %0ACourse: ${encodeURIComponent(data.course)}`;

    window.open(gmailLink, "_blank") || (window.location.href = mailtoLink);

    setMessageSent(true);
  };

  return (
    <div className="w-full">
      <section
        className="relative bg-cover bg-center py-12 px-6"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form Card */}
          <div className="bg-white p-8 rounded-2xl shadow-xl w-full">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
              Direct Contact Us
            </h2>
            {messageSent ? (
              <p className="text-green-600 font-bold text-lg text-center">
                Message Sent Successfully! Please check your Gmail app.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    className="w-full p-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">E-mail</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="example@gmail.com"
                    className="w-full p-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Enter your phone number"
                    className="w-full p-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Address</label>
                  <input
                    type="text"
                    name="address"
                    placeholder="Enter your address"
                    className="w-full p-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Select Course</label>
                  <select
                    name="course"
                    className="w-full p-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="PCL In General Medicine (HA)">PCL In General Medicine (HA)</option>
                    <option value="PCL In Nursing">PCL In Nursing</option>
                    <option value="Diploma in Pharmacy">Diploma in Pharmacy</option>
                    <option value="Caregiver Program">Caregiver Program</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Description Text */}
          <div className="text-white text-center md:text-left">
            <h1 className="text-4xl font-bold mb-4">Holy Vision Technical Campus</h1>
            <p className="text-lg leading-relaxed mb-4">
              HVTC offers a 3-year academic program in Proficiency Certificate Level (PCL) Nursing (Staff Nurse),
              General Medicine (Health Assistant), and Diploma in Pharmacy. The curriculum is prescribed by CTEVT,
              recognized by Tribhuvan University, and approved by the Nepal Nursing Council, Nepal Health Professional
              Council, and Nepal Pharmacy Council.
            </p>
            <p className="text-lg leading-relaxed">
              Our state-of-the-art simulation labs and expert-led courses ensure a comprehensive, hands-on learning
              experience that upholds the highest standards of patient care and safety.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DirectContactUs;
