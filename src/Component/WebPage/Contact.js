import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';


const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-2 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h3 className="text-xl font-bold">Radiant Life</h3>
            <p className="mt-1">© 2023 All Rights Reserved</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white">Contact</a>
          </div>
        </div>
        <div className="flex justify-between items-start mb-8">
          <div>
            <h5 className="text-white mb-3">Quick Links</h5>
            <ul className="list-unstyled text-muted space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">About</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Services</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-white mb-3">Resources</h5>
            <ul className="list-unstyled text-muted space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Help Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Support</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Community</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-white mb-3">Contact Us</h5>
            <p className="text-gray-400">1234 Street Name, City, State, 12345</p>
            <p className="text-gray-400">Email: info@mentalhealthwebsite.com</p>
            <p className="text-gray-400">Phone: (123) 456-7890</p>
          </div>
        </div>
        <div className="mt-8">
          <p className="text-center text-gray-400">Follow us on:</p>
          <div className="flex justify-center space-x-4 mt-2">
            <a href="https://facebook.com" className="text-gray-400 hover:text-white">
              <FaFacebookF className="h-6 w-6 text-blue-500 hover:text-blue-400" />
              <span className="sr-only ">Facebook</span>
            </a>
            <a href="https://twitter.com" className="text-gray-400 hover:text-white">
              <FaTwitter className="h-6 w-6 text-blue-400 hover:text-blue-300" />
              <span className="sr-only">Twitter</span>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaInstagram className="h-6 w-6 text-pink-500 hover:text-pink-400" />
              <span className="sr-only">Instagram</span>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaLinkedinIn className="h-6 w-6 text-blue-700 hover:text-blue-600" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
