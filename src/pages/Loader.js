import React, { useState, useEffect } from 'react';

const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Show the loader for 2 seconds when the page first loads
    setTimeout(() => {
      setIsLoading(false); // Hide loader after 2 seconds
    }, 1000);

    
  }, []);

  return (
    <div
      id="loader"
      className={`fixed top-0 left-0 w-full h-full bg-[#ffffffcc] flex justify-center items-center z-50 transition-opacity duration-300 ${isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
    >
      <img src={"./assets/temple-loader.gif"} className='w-[8%]' alt="loader" />
    </div>
  );
};

export default Loader;
