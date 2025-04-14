
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-law-red text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-xl font-serif font-semibold mb-6">KUTAFIN</h3>
            <p className="text-white/70 text-sm mb-6">
              Kutafin Moscow State Law University is one of Russia's most prestigious legal educational institutions, 
              providing exceptional educational experiences since 1931.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-white/70 hover:text-white transition-colors text-sm">Home</a>
              </li>
              <li>
                <a href="#about" className="text-white/70 hover:text-white transition-colors text-sm">About Us</a>
              </li>
              <li>
                <a href="#programs" className="text-white/70 hover:text-white transition-colors text-sm">Programs</a>
              </li>
              <li>
                <a href="#faculty" className="text-white/70 hover:text-white transition-colors text-sm">Faculty</a>
              </li>
              <li>
                <a href="#campus" className="text-white/70 hover:text-white transition-colors text-sm">Campus</a>
              </li>
              <li>
                <a href="#events" className="text-white/70 hover:text-white transition-colors text-sm">Events</a>
              </li>
              <li>
                <a href="#contact" className="text-white/70 hover:text-white transition-colors text-sm">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-6">Programs</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors text-sm">Bachelor of Laws</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors text-sm">Master of Laws</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors text-sm">PhD in Legal Sciences</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors text-sm">International Law</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors text-sm">Corporate Law</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors text-sm">Criminal Law</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/50 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Kutafin Moscow State Law University. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-white/50 hover:text-white transition-colors text-sm">Privacy Policy</a>
              <a href="#" className="text-white/50 hover:text-white transition-colors text-sm">Terms of Use</a>
              <a href="#" className="text-white/50 hover:text-white transition-colors text-sm">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
