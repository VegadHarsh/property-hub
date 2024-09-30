import React, { useEffect, useState } from 'react';
import Animation from '../pages/Animation'; // Import Animation to apply scroll-based animations
import axios from 'axios';
import Loader from '../pages/Loader';
import '../CSS/Properties.css'; // Additional styles for Properties
import { Link } from 'react-router-dom';

const Properties = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    // Fetch properties data from API
    axios.get('https://66262569052332d55321c8d0.mockapi.io/to-do/DataApi')
      .then(response => {
        setProperties(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
      });

  }, []);

  return (
    <>
      <Loader />
      <div className="properties-container mx-auto mt-7 pt-7">
        <div className='relative  animate-on-scroll'>
          <img src='./assets/images.jpg' className='opacity-[.8] w-full h-[500px] object-cover' />
          <div className='absolute top-0 flex justify-center items-center w-full h-full flex-col  animate-on-scroll'>
            <h1 className="text-6xl text-white font-bold text-center">PRH</h1>
            <h1 className="text-3xl text-white font-bold text-center">Welcome to the Property Rental Hub</h1>
            </div>
        </div>
        <div className="properties-grid p-6 mt-10 pt-5 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-7">
          {properties.map((property) => (
            <div
              key={property.id}
              // className="property-card flex flex-col justify-between bg-white rounded-lg shadow-lg overflow-hidden animate-on-scroll" // Apply animate-on-scroll class to enable animation
              className="property-card bg-white rounded-lg shadow-lg overflow-hidden animate-on-scroll"
            >
              <Animation /> {/* Include the Animation component to trigger scroll animations */}
              <img src={property.image} alt={property.title} className="property-image w-full h-48 object-cover" />
              <div className="property-details p-3 flex flex-col justify-between text-left flex-grow">
                <div className='h-[170px]'>
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">{property.title}</h2>
                  <p className="property-description mb-4 text-gray-700">{property.description}</p>
                  <p className="text-gray-800 font-medium">Price: ${property.price}</p>
                  <p className="text-gray-600">Location: {property.location}</p>
                  <p className="text-gray-600">Bedrooms: {property.bedrooms}</p>
                </div>
                <Link
                  to="/booking"
                  state={{
                    image: property.image,
                    description: property.description,
                    title: property.title,
                    location: property.location,
                    price: property.price
                  }}
                >
                  <button className="w-full px-4 mt-8 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-md shadow hover:bg-gradient-to-l transition duration-300">
                    Book Now
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Properties;
