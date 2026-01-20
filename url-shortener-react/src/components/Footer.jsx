import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-7">
      <div className="max-w-7xl mx-auto px-6 lg:px-14 flex flex-col lg:flex-row justify-between items-center gap-6">
        {/* Brand */}
        <div className="text-center lg:text-left">
          <h2 className="text-2xl sm:text-3xl font-bold mb-1">LinkPulse</h2>
          <p className="text-gray-200 text-sm">
            Simplifying URL shortening & analytics
          </p>
        </div>

        {/* Copyright */}
        <p className="text-gray-200 text-sm text-center lg:text-center">
          &copy; 2026 LinkPulse. All rights reserved.
        </p>

        {/* Social Icons */}
        <div className="flex space-x-6">
          <a
            href="#"
            className="hover:text-indigo-200 transition-colors duration-200"
            aria-label="Facebook"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="#"
            className="hover:text-indigo-200 transition-colors duration-200"
            aria-label="Twitter"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="#"
            className="hover:text-indigo-200 transition-colors duration-200"
            aria-label="Instagram"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="#"
            className="hover:text-indigo-200 transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
