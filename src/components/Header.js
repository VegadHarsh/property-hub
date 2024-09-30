import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import Animation from '../pages/Animation';
import Loader from '../pages/Loader';
import '../CSS/Header.css';
import '../index.css';

const Header = () => {
  const [IsScrolled, setIsScrolled] = useState();
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      // className="header sticky top-0 z-50 "
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${IsScrolled
          ? 'bg-white shadow-lg py-4'
          : 'bg-black py-2'
        }`}
    >
      <Animation />
      <div className="container mx-auto px-4 flex justify-between items-center">
        <NavLink to="/" className={` outline-none header-logo relative text-4xl ${IsScrolled
                  ? 'text-red-500'
                  : 'text-red-400'
                }`}>
          PRH <span className={`absolute outline-none text-xs w-max ms-1  ${IsScrolled
                  ? 'text-red-500 top-0'
                  : 'text-red-400 top-3'
                }`}>Property Rental Hub</span>
        </NavLink>
        <ul className="header-nav flex items-center gap-10">
          <li>
            <NavLink
              to="/properties"
              // onClick={}
              className={`block py-2 pr-4 pl-3 lg:hover:bg-transparent lg:border-0 lg:p-0  ${IsScrolled
                  ? 'text-black py-4'
                  : 'text-white py-2'
                }`}
              activeClassName="text-red-500"
            >
              Properties
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={`text-white-700 block py-2 pr-4 pl-3 lg:hover:bg-transparent lg:border-0 lg:p-0
                ${IsScrolled
                  ? 'text-black py-4'
                  : 'text-white py-2'
                }`
              }
              activeClassName="text-red-500"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={`text-white-700 block py-2 pr-4 pl-3 lg:hover:bg-transparent lg:border-0 lg:p-0  ${IsScrolled
                  ? 'text-black py-4'
                  : 'text-white py-2'
                }`}
              activeClassName="text-red-500"
            >
              Contact
            </NavLink>
          </li>
        </ul>
        <div className="header-buttons flex gap-8">
          <Link to="/login" className={`login-btn ps-3 pe-3 pt-1 pb-1 flex items-center text-white bg-blue-600 rounded hover:bg-blue-700`}
          >Login</Link>
          <Link to="/signup" className="signup-btn px-3 py-1 flex items-center bg-red-500 text-white rounded hover:bg-red-600 transition">Sign Up</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
