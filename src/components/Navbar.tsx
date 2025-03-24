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
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="#" className="text-law-WHITE font-serif text-2xl font-bold">KUTAFIN MOSCOW
STATE LAW UNIVERSITY</a>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1">
            <a href="#home" className="nav-link active-nav-link">Home</a>
            <a href="#about" className="nav-link">About</a>
            <a href="#programs" className="nav-link">Programs</a>
            <a href="#faculty" className="nav-link">Faculty</a>
            <a href="#campus" className="nav-link">Campus</a>
            <a href="#events" className="nav-link">Events</a>
            <a href="#contact" className="nav-link">Contact</a>
          </div>
          
          <div className="hidden md:block">
            <a href="#contact" className="button-primary">Apply Now</a>
          </div>
          
          {/* Mobile Menu Button */}
          <button className="md:hidden text-law-navy" onClick={toggleMobileMenu} aria-label="Toggle menu">
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>
      
      {/* Mobile Navigation */}
      <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} bg-white py-4 px-6 shadow-md animate-fade-in-fast`}>
        <div className="flex flex-col space-y-4">
          <a href="#home" className="nav-link active-nav-link">Home</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#programs" className="nav-link">Programs</a>
          <a href="#faculty" className="nav-link">Faculty</a>
          <a href="#campus" className="nav-link">Campus</a>
          <a href="#events" className="nav-link">Events</a>
          <a href="#contact" className="nav-link">Contact</a>
          <a href="#contact" className="button-primary text-center">Apply Now</a>
        </div>
      </div>
    </header>;
};
export default Navbar;