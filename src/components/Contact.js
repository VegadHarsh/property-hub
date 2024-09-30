import React from 'react';
import Animation from '../pages/Animation';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Loader from '../pages/Loader';

const Contact = () => {
  return (
    <>
    <Loader />
    <div className="contact-page bg-gradient-to-b from-gray-100 to-gray-300 py-12">
      {/* Hero Section */}
      <div className="hero-section text-center bg-white py-12 rounded-xl shadow-md mx-4 lg:mx-0 animate-on-scroll">
        <h1 className="text-5xl font-extrabold text-gray-800 mb-4">Contact Us</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          We're here to help! If you have any questions or inquiries, please don't hesitate to reach out.
        </p>
      </div>
      <Animation />
      {/* Contact Info and Form Section */}
      <div className="contact-info-form grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 px-6 max-w-6xl mx-auto">
        {/* Contact Information */}
        <div className="info-card bg-white p-6 rounded-lg shadow-lg duration-300 animate-on-scroll-right">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Get in Touch</h2>
          <p className="text-gray-600 mb-4">We're always happy to hear from you! Here’s how you can reach us:</p>
          <ul className="list-disc list-inside text-gray-700 list-none">
            <li className='mb-1'>Email: <a href="mailto:contact@propertyrentalhub.com" className=''>contact@propertyrentalhub.com</a></li>
            <li className='mb-1'>Phone: <a href="tel:+11234567890">+1 (123) 456-7890</a></li>
            <li className='mb-1'>Address: 1234 Rental St, Property City, PC 56789</li>
          </ul>
          <h2 className="text-2xl font-bold text-gray-800 mb-2 mt-8">Follow Us</h2>
          <p className="text-gray-600 mb-4">Stay updated with the latest news and offers by following us on social media:</p>
          <div className="flex space-x-4">
            <a href="#" className="flex items-center text-black-500 hover:text-black-700 transition duration-300">
              <FaFacebook className="h-6 w-6 mr-1 text-red-400" />
              Facebook
            </a>
            <a href="#" className="flex items-center text-black-500 hover:text-black-700 transition duration-300">
              <FaTwitter className="h-6 w-6 mr-1 text-red-400" />
              Twitter
            </a>
            <a href="#" className="flex items-center text-black-500 hover:text-black-700 transition duration-300">
              <FaInstagram className="h-6 w-6 mr-1 text-red-400" />
              Instagram
            </a>
            <a href="#" className="flex items-center text-black-500 hover:text-black-700 transition duration-300">
              <FaLinkedin className="h-6 w-6 mr-1 text-red-400" />
              LinkedIn
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-form bg-white p-8 rounded-lg shadow-md duration-300 animate-on-scroll-left">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" placeholder="Your Name" className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500" required />
              <input type="email" placeholder="Your Email" className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500" required />
            </div>
            <textarea placeholder="Your Message" className="grid grid-cols-3 md:grid-cols-2 w-full border border-gray-300 rounded-md p-3 mt-4 focus:outline-none focus:ring-2 focus:ring-blue-500 h-23" required></textarea>
            <button type="submit" className="mt-4 px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-md shadow-lg hover:bg-gradient-to-l transition duration-300">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
    </>
  );
};

export default Contact;
