import React, { useState } from "react";

export default function Contact_Us() {
  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   message: "",
  // });

  // const handleChange = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   alert("Thank you for contacting us, " + formData.name + "!");
  //   setFormData({ name: "", email: "", message: "" });
  // };

  return (
      <div className="max-w-2xl w-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900  backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-white/20">
        <h2 className="text-3xl font-bold text-center text-white mb-6">
          Contact Us
        </h2>
        <p className="text-gray-300 text-center mb-8">
          We’d love to hear from you! Fill out the form below and we’ll get back
          to you soon.
        </p>

        <form  className="space-y-5">
          <div>
            <label className="block text-gray-300 mb-2 font-medium">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              required
              className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:ring-2 focus:ring-indigo-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-2 font-medium">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              placeholder="example@email.com"
              required
              className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:ring-2 focus:ring-indigo-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-2 font-medium">
              Your Message
            </label>
            <textarea
              name="message"
              rows="5"
              placeholder="Type your message here..."
              required
              className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:ring-2 focus:ring-indigo-500 outline-none resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg shadow-md transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
  );
}