import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'; // Correct imports
import Layout from './Layout';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Properties from './components/Properties';
import PropertyList from './components/PropertyList';
import About from './components/About';
import Contact from './components/Contact';
import Forgot_password from "./components/forgot_password";
import { Route, createRoutesFromElements } from 'react-router-dom';
import Booking from './components/Booking';

const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Properties />} />
        <Route path="properties" element={<Properties />} />
        {/* <Route path="properties" element={<PropertyList />} /> */}
        <Route path="login" element={<Login />} />
        <Route path="booking" element={<Booking />} />
        <Route path="forgot-password" element={<Forgot_password />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    )
  );  
  
  const Main = () => {
    return (
      <RouterProvider router={router} />
    );
  };
  
  export default Main;
