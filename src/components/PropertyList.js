// /src/components/PropertyList.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const PropertyList = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await fetch('https://66262569052332d55321c8d0.mockapi.io/to-do/DataApi');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProperties(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  if (loading) {
    return <div className="text-center text-gray-600">Loading properties...</div>;
  }

  if (error) {
    return <div className="text-center text-red-600">Error fetching properties: {error}</div>;
  }

  return (
    <div className="container mx-auto px-4 md:px-0 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Available Properties</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map((property) => (
          <div key={property.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img 
              src={property.image} 
              alt={property.title} 
              className="w-full h-48 object-cover" 
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">{property.title}</h2>
              <p className="text-gray-600 mb-4">{property.description}</p>
              <p className="text-gray-700">Price: <span className="font-bold">${property.price}</span></p>
              <p className="text-gray-700">Location: <span className="font-bold">{property.location}</span></p>
              <p className="text-gray-700">Bedrooms: <span className="font-bold">{property.bedrooms}</span></p>
              <div className="mt-4">
                <Link to="/Booking">
                  <button className="w-full px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-md shadow hover:bg-gradient-to-l transition duration-300">
                    Book Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyList;
