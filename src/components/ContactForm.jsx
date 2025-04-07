import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError(false);

    // EmailJS or any email-sending service API
    try {
      const serviceID = "YOUR_SERVICE_ID"; // Replace with your EmailJS service ID
      const templateID = "YOUR_TEMPLATE_ID"; // Replace with your EmailJS template ID
      const userID = "YOUR_USER_ID"; // Replace with your EmailJS user ID

      const response = await fetch(
        `https://api.emailjs.com/api/v1.0/email/send`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            service_id: serviceID,
            template_id: templateID,
            user_id: userID,
            template_params: {
              from_name: formData.name,
              from_email: formData.email,
              phone: formData.phone,
              message: formData.message,
              to_email: "elizapant55@gmail.com",
            },
          }),
        }
      );

      if (response.ok) {
        setLoading(false);
        setSuccess(true);
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        throw new Error("Email sending failed");
      }
    } catch (err) {
      setLoading(false);
      setError(true);
    }
  };

  return (
    <div className="bg-gray-100 py-16 px-6">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold text-center text-green-600 mb-8">
          CONTACT US NEO CLINIC
        </h2>
        <p className="text-center text-gray-600 mb-4">
          Gwarko-6, Lalitpur Nepal
        </p>
        <p className="text-center text-gray-600 mb-8">
          +977 9702451907, 9851007196, 9860391547 <br />
          <a
            href="mailto:lalitpurneoclinic@gmail.com"
            className="text-blue-500 underline"
          >
            lalitpurneoclinic@gmail.com
          </a>
        </p>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
              required
            />
          </div>
          <div className="mt-4">
            <input
              type="text"
              name="phone"
              placeholder="Phone No."
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
              required
            />
          </div>
          <div className="mt-4">
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
              required
            ></textarea>
          </div>
          <div className="mt-6 text-center">
            <button
              type="submit"
              className="px-6 py-2 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>
        {success && (
          <p className="mt-4 text-green-600 text-center">
            Message sent successfully!
          </p>
        )}
        {error && (
          <p className="mt-4 text-red-600 text-center">
            Failed to send message. Please try again.
          </p>
        )}
      </div>
    </div>
  );
};

export default ContactForm;
