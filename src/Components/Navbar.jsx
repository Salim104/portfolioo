import React, { useState } from 'react'
import logo from '../assets/brand-logo.svg'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav 
      className="flex items-center justify-between max-w-[1400px] mx-auto h-16 px-4 relative"
      role="navigation"
      aria-label="Main Navigation"
    >
      {/* Left Section: Logo */}
      <div className="flex items-center">
        <img src={logo} alt="Portfolio Logo" className="h-8 w-auto" />
      </div>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center gap-16">
        {/* Middle Section: Nav Links */}
        <div className="flex gap-6 text-white text-lg">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="py-[2px] hover:underline font-medium transition-all duration-200"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right Section: Download Button */}
        <div className="flex items-center gap-2">
          <a
            href="/cv.pdf"
            download
            className="bg-[#FF6B5C] text-white px-4 py-[3px] rounded-md font-bold text-lg hover:bg-[#ff4a3a] transition-all duration-200"
          >
            Download CV
          </a>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <div className="lg:hidden">
        <button
          onClick={toggleMenu}
          className="text-white text-2xl p-2 hover:bg-gray-800 rounded-md transition-all duration-200"
          aria-label="Toggle mobile menu"
        >
          {isMenuOpen ? <IoClose /> : <GiHamburgerMenu />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
    
        <div className={`fixed top-16 left-0 w-[80%] h-full border-r border-r-gray-900 bg-[#002440] z-50 transition-transform duration-700 ease-in-out ${
          isMenuOpen ? 'translate-x-0 ' : '-translate-x-full '
        }`}>
          <div className="flex flex-col px-4 py-6 space-y-4">
            {/* Mobile Nav Links */}
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white text-lg font-medium py-2 hover:text-[#FF6B5C] transition-all duration-200 border-b border-gray-700"
                onClick={closeMenu}
              >
                {link.name}
              </a>
            ))}

            {/* Mobile Download Button */}
            <div className="pt-4">
              <a
                href="/cv.pdf"
                download
                className="block bg-[#FF6B5C] text-white px-4 py-3 rounded-md font-bold text-lg hover:bg-[#ff4a3a] transition-all duration-200 text-center"
                onClick={closeMenu}
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      
    </nav>
  );
};

export default Navbar;
