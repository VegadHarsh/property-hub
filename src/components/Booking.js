import React from 'react';
import { useLocation } from 'react-router-dom';
import Loader from '../pages/Loader';

const Booking = () => {
  const location = useLocation();
  const { image, title, location: propertyLocation, price, description } = location.state || {};

  return (
    <>
    <Loader />
      <div className="container mx-auto px-4 md:px-0 grid grid-cols-1 md:grid-cols-2 py-8 gap-8 mt-20">
        <div className="relative">
          <img
            src={image || "https://via.placeholder.com/600"} // Show passed image or fallback
            alt={title || "Property"}
            className="w-[90%] h-[400px] object-cover rounded-lg shadow-lg"
          />
          <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-4 rounded-lg">
            <h2 className="text-xl font-bold mb-1" >{title || "Luxury Apartment"}</h2>
            <p className="text-sm mb-1">{description || "Villas"}</p>
            <p className="text-sm mb-1">{propertyLocation || "1234 Rental St, Property City, PC 56789"}</p>
            <p className="text-sm mb-1">Price: ${price || "N/A"}</p>
          </div>
        </div>

        {/* Booking Form */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Book Your Stay</h2>
          <form>
            {/* Form fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            {/* Other form fields */}
            <textarea placeholder="Your Message" className="grid grid-cols-3 md:grid-cols-2 w-full border border-gray-300 rounded-md p-3 mt-4 focus:outline-none focus:ring-2 focus:ring-blue-500 h-23" required></textarea>

            {/* Centered Button */}
            <div className="flex justify-center mt-4">
              <button
                type="submit"
                className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-md shadow-lg hover:bg-gradient-to-l transition duration-300"
              >
                Confirm Booking
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Booking;
