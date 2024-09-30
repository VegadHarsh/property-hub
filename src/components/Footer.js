// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black py-4 text-center animate-on-scroll">
      <div className="max-w-6xl mx-auto">
        <p className="text-white">&copy; {new Date().getFullYear()} Property Rental Hub. All rights reserved.</p>
        <div className="footer_link mt-3">
          <a href="/about" className="text-red-300 mx-6">About Us</a>
          <a href="/contact" className="text-red-300 mx-6">Contact Us</a>
          <a href="#" className="text-red-300 mx-6">Terms of Service</a>
          <a href="#" className="text-red-300 mx-6">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
