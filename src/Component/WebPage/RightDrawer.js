import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { NavLink } from 'react-router-dom';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import MiscellaneousServicesOutlinedIcon from '@mui/icons-material/MiscellaneousServicesOutlined';
import AirOutlinedIcon from '@mui/icons-material/AirOutlined';
import QuizOutlinedIcon from '@mui/icons-material/QuizOutlined';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import { Divider } from '@mui/material';
import Account from '../forms/Account'
const RightDrawer = ({ isOpen, toggleDrawer, user,  handleLogout }) => {
  return (
    <div>
      {isOpen && (
        <div className="lg:hidden fixed inset-0 right-0 flex justify-end z-40" onClick={toggleDrawer}>
          {/* Drawer Content */}
          <div className="w-48 bg-gray-100 shadow-lg h-full z-50"> {/* Reduced width to w-40 */}
            <div className="flex flex-col gap-4 text-center mt-4">
              <div className="text-lg font-semibold italic">
                {/* {user ? <h3>Hello, {user} 😊</h3> : 'Hello USER 😊'} */}
                <br /><Divider className='color:black'/>
              </div>
             <Account/>
              <ScrollLink 
                to="about" 
                spy={true} 
                smooth={true} 
                duration={500} 
                className="px-3 py-2 nav-sans text-gray-900 hover:text-[#1977cc] cursor-pointer font-thin">
                <InfoOutlinedIcon />&nbsp;
                About
              </ScrollLink>
              <ScrollLink 
                to="doc" 
                spy={true} 
                smooth={true} 
                duration={500} 
                className="px-3 py-2 nav-sans text-gray-900 hover:text-[#1977cc] cursor-pointer font-thin">
                <AdminPanelSettingsOutlinedIcon /> &nbsp;
                Doctor
              </ScrollLink>
              <ScrollLink 
                to="service" 
                spy={true} 
                smooth={true} 
                duration={500} 
                className="px-3 py-2 nav-sans text-gray-900 hover:text-[#1977cc] cursor-pointer font-thin">
                <MiscellaneousServicesOutlinedIcon /> &nbsp;
                Services
              </ScrollLink>
              <ScrollLink 
                to="testi" 
                spy={true} 
                smooth={true} 
                duration={500} 
                className="px-3 py-2 nav-sans text-gray-900 hover:text-[#1977cc] cursor-pointer font-thin">
                <AirOutlinedIcon /> &nbsp;
                Testimonials
              </ScrollLink>
              <ScrollLink 
                to="contact" 
                spy={true} 
                smooth={true} 
                duration={500} 
                className="px-3 py-2 nav-sans text-gray-900 hover:text-[#1977cc] cursor-pointer font-thin">
                <QuizOutlinedIcon /> &nbsp;
                Contact Us
              </ScrollLink>
              {user ? (
                <button onClick={handleLogout} className="px-3 py-2 nav-sans text-gray-900 hover:text-[#1977cc] cursor-pointer font-thin">
                  <LoginOutlinedIcon /> &nbsp;
                  Log Out
                </button>
              ) : (
                <NavLink to="/login" className="px-3 py-2 nav-sans text-gray-900 hover:text-[#1977cc] cursor-pointer font-thin">
                  <LoginOutlinedIcon /> &nbsp;
                  SignIn
                </NavLink>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RightDrawer;
