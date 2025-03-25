
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Change navbar style on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="#" className={`font-serif text-2xl font-bold ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
              KUTAFIN MOSCOW STATE LAW UNIVERSITY
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1">
            <a href="#home" className={`nav-link ${isScrolled ? 'text-gray-900' : 'text-white'} active-nav-link`}>Home</a>
            <a href="#about" className={`nav-link ${isScrolled ? 'text-gray-900' : 'text-white'}`}>About</a>
            <a href="#programs" className={`nav-link ${isScrolled ? 'text-gray-900' : 'text-white'}`}>Programs</a>
            <a href="#faculty" className={`nav-link ${isScrolled ? 'text-gray-900' : 'text-white'}`}>Faculty</a>
            <a href="#campus" className={`nav-link ${isScrolled ? 'text-gray-900' : 'text-white'}`}>Campus</a>
            <a href="#events" className={`nav-link ${isScrolled ? 'text-gray-900' : 'text-white'}`}>Events</a>
            <a href="#contact" className={`nav-link ${isScrolled ? 'text-gray-900' : 'text-white'}`}>Contact</a>
          </div>
          
          <div className="hidden md:block">
            <a href="#contact" className="button-primary bg-[#94C414] text-white hover:bg-[#94C414]/90">Apply Now</a>
          </div>
          
          {/* Mobile Menu Button */}
          <button className={`md:hidden ${isScrolled ? 'text-gray-900' : 'text-white'}`} onClick={toggleMobileMenu} aria-label="Toggle menu">
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>
      
      {/* Mobile Navigation */}
      <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} bg-white py-4 px-6 shadow-md animate-fade-in-fast`}>
        <div className="flex flex-col space-y-4">
          <a href="#home" className="nav-link text-gray-900 active-nav-link">Home</a>
          <a href="#about" className="nav-link text-gray-900">About</a>
          <a href="#programs" className="nav-link text-gray-900">Programs</a>
          <a href="#faculty" className="nav-link text-gray-900">Faculty</a>
          <a href="#campus" className="nav-link text-gray-900">Campus</a>
          <a href="#events" className="nav-link text-gray-900">Events</a>
          <a href="#contact" className="nav-link text-gray-900">Contact</a>
          <a href="#contact" className="button-primary bg-[#94C414] text-white text-center">Apply Now</a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
