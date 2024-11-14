import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import logo from '../img/logo.png';
import { NavLink, Link as RouterLink } from 'react-router-dom';
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import { DropdownMenu } from "@lemonsqueezy/wedges";
import { ChevronDownIcon, LogOutIcon, UserIcon } from "@iconicicons/react";
import RightDrawer from './RightDrawer'; // Import the RightDrawer component

const Navbar = ({ user, handleLogout }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Function to toggle the drawer
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-10 w-full bg-white border-b shadow-lg">
      <div className="flex items-center justify-between px-4 py-4 max-h-20 lg:px-8">
        {user ?
        <NavLink to='/'>
          <ScrollLink to='Home' spy={true} smooth={true} duration={500}>
            <img src={logo} alt='logo' className='h-10 w-10 cursor-pointer' />
          </ScrollLink>
        </NavLink>:
        <NavLink to='/'>
          <ScrollLink to='Home' spy={true} smooth={true} duration={500}>
            <img src={logo} alt='logo' className='h-10 w-10 cursor-pointer' />
          </ScrollLink>
        </NavLink>}

        {/* Toggle Drawer Button for Mobile */}
        <button onClick={toggleDrawer} className="lg:hidden">
          <IconButton className="hamburgur">
            <MenuIcon style={{ color: "black" }} />
          </IconButton>
        </button>

        <div className="hidden lg:flex items-center gap-4 text-sm lg:text-md">
          <ScrollLink to="about" spy={true} smooth={true} duration={500} className="px-3 py-2 nav-sans text-gray-900 hover:text-[#1977cc] cursor-pointer relative group">
            About
          </ScrollLink>
  
          <ScrollLink to="doc" spy={true} smooth={true} duration={500} className="px-3 py-2 nav-sans text-gray-900 hover:text-[#1977cc] cursor-pointer relative group">
            Doctor
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#1977cc] transition-all duration-300 ease-out group-hover:w-full"></span>
          </ScrollLink>

          <ScrollLink to="service" spy={true} smooth={true} duration={500} className="px-3 py-2 nav-sans text-gray-900 hover:text-[#1977cc] cursor-pointer relative group">
            Services
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#1977cc] transition-all duration-300 ease-out group-hover:w-full"></span>
          </ScrollLink>

          <ScrollLink to="testi" spy={true} smooth={true} duration={500} className="px-3 py-2 nav-sans text-gray-900 hover:text-[#1977cc] cursor-pointer relative group">
            Testimonials
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#1977cc] transition-all duration-300 ease-out group-hover:w-full"></span>
          </ScrollLink>

          <ScrollLink to="contact" spy={true} smooth={true} duration={500} className="px-3 py-2 nav-sans text-gray-900 hover:text-[#1977cc] cursor-pointer relative group">
            Contact Us
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#1977cc] transition-all duration-300 ease-out group-hover:w-full"></span>
          </ScrollLink>
        </div>

        <div className="hidden lg:flex gap-4 items-center">
          {user ? (
            <NavLink to='/home'>
              <ScrollLink to="doc" spy={true} smooth={true} duration={500} className="px-4 py-2 chivo-mono rounded-full transition duration-500 ease-in-out bg-[#1977cc] text-white hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-bg-[#1977cc] focus:ring-opacity-50 transform hover:scale-105 cursor-pointer">
                Book An Appointment
              </ScrollLink>
            </NavLink>
          ) : (
            <NavLink to='/login'>
              <button className="px-4 py-2 chivo-mono rounded-full  transition duration-500 ease-in-out bg-[#1977cc] text-white hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-bg-[#1977cc] focus:ring-opacity-50 transform hover:scale-105 cursor-pointer">
                Book An Appointment
              </button>
            </NavLink>
          )}

          <div className="relative">
            <DropdownMenu>
              <DropdownMenu.Trigger asChild>
                <span className="group flex items-center gap-2 rounded-full px-4 py-2  bg-gray-300 text-gray-700 transition duration-500 ease-in-out transform  cursor-pointer">
                  <span className="px-3 py-2 chivo-mono rounded-full bg-gray-200 text-gray-700 shadow-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 transform hover:scale-105 cursor-pointer">
                    {user ? user.name : 'user'}
                  </span>
                  <ChevronDownIcon className="trigger-icon h-5 w-5 text-black" />
                </span>
              </DropdownMenu.Trigger>

              <DropdownMenu.Content align="end" className="min-w-[140px]">
                <DropdownMenu.Group>
                  <DropdownMenu.Item>
                    <UserIcon />
                    <RouterLink to="/account" className="ml-2">
                      Account
                    </RouterLink>
                  </DropdownMenu.Item>
                </DropdownMenu.Group>

                <DropdownMenu.Separator />

                <DropdownMenu.Group>
                  <DropdownMenu.Item>
                    <LogOutIcon />
                    {user ? (
                      <button onClick={handleLogout} className="ml-2">
                        Log Out
                      </button>
                    ) : (
                      <NavLink to='/login' className="ml-2">
                        Sign In
                      </NavLink>
                    )}
                  </DropdownMenu.Item>
                </DropdownMenu.Group>
              </DropdownMenu.Content>
            </DropdownMenu>
          </div>
        </div>
      </div>

      {/* Render RightDrawer Component and pass props */}
      <RightDrawer isOpen={isDrawerOpen} toggleDrawer={toggleDrawer} user={user} />
    </nav>
  );
};

export default Navbar;
