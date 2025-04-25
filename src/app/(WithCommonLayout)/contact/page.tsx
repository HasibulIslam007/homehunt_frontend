import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const ContactPage = () => {
  const mapUrl =
    "https://www.google.com/maps/dir//23.7585925,90.4137329/@23.7587705,90.4130034,19z/data=!4m2!4m1!3e0?entry=ttu&g_ep=EgoyMDI1MDQyMi4wIKXMDSoASAFQAw%3D%3D";
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
          Contact <span className="text-indigo-600">HomeHunt</span>
        </h1>
        <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
          Get in touch with our team for any inquiries
        </p>
      </div>

      {/* Grid Layout */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Send us a message
          </h2>
          <form className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Your name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="How can we help you?"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 px-4 rounded-lg hover:bg-indigo-700 transition duration-200 font-medium"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="space-y-8">
          {/* Contact Cards */}
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Contact Information
            </h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <FaPhone className="text-indigo-600 mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-gray-900">Phone</h4>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start">
                <FaEnvelope className="text-indigo-600 mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-gray-900">Email</h4>
                  <p className="text-gray-600">support@homehunt.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <FaMapMarkerAlt className="text-indigo-600 mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-gray-900">Office</h4>
                  <p className="text-gray-600">
                    MirbagMor,ModhubAG
                    <br />
                    Dhaka
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <FaClock className="text-indigo-600 mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-gray-900">Hours</h4>
                  <p className="text-gray-600">
                    Monday - Friday: 9AM - 6PM
                    <br />
                    Saturday: 10AM - 4PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          {/* Map Section */}
          <div className="bg-white p-4 rounded-xl shadow-lg mt-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Our Location
            </h3>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src={mapUrl}
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="rounded-lg"
                aria-label="HomeHunt office location"
              ></iframe>
            </div>
            <div className="mt-4 text-center">
              <p className="text-gray-600">
                MirbagMor,ModhubAG
                <br />
                Dhaka
              </p>
              <a
                href="https://www.google.com/maps/dir//23.7585925,90.4137329/@23.7587705,90.4130034,19z/data=!4m2!4m1!3e0?entry=ttu&g_ep=EgoyMDI1MDQyMi4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block text-indigo-600 hover:text-indigo-800"
              >
                Open in Google Maps →
              </a>
            </div>
          </div>
          <p className="mt-3 text-sm text-gray-500 text-center">
            Visit our office location
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
