import React from 'react';
import hero from "../img/bg.png.jpg";
import Navbar from './Navbar';
import { NavLink } from 'react-router-dom';

function Home({user}) {
  return (
    <>     
      <div className="relative h-screen rail ">
        <img className="object-cover w-full h-full" src={hero} alt="hero" />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-center">
          <h1 className="text-4xl rail leading-tight text-white  rail   animate-fade-in-1">Welcome to Radiant Life</h1>
          <h2 className="mt-2 text-lg text-white animate-fade-in-1 rail">Providing compassionate care and cutting-edge treatments</h2>
         {user ?
          <NavLink to="/">
          <button className="mt-4 font-medium text-md rail  tracking-wide px-8 py-3 rounded-full transition duration-500 ease-in-out bg-[#1977cc] text-white hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transform hover:scale-105 animate-fade-in-1">
            Get Started
          </button>
        </NavLink>:
        <NavLink to='login'>
           <button className="mt-4 font-medium text-md rail  tracking-wide px-8 py-3 rounded-full transition duration-500 ease-in-out bg-[#1977cc] text-white hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transform hover:scale-105 animate-fade-in-1">
            Get Started
          </button>
          </NavLink>}
        </div>
      </div>
    </>
  );
}

export default Home;
