
import React, { useEffect, useState } from 'react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set visibility after a short delay for animation purposes
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-law-navy/95">
        <div className="absolute inset-0 bg-[url('/src/assets/hero-pattern.svg')] opacity-5"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-6 py-24 pt-32 md:pt-24 relative z-10">
        <div className="max-w-3xl">
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h5 className="font-serif text-law-red mb-3">KUTAFIN MOSCOW STATE LAW UNIVERSITY</h5>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight">
              Shaping the Future of Legal Excellence
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl">
              One of Russia's most prestigious legal institutions, offering world-class education 
              and producing outstanding legal professionals since 1931.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="#programs" className="button-primary bg-law-red text-white hover:bg-white hover:text-law-navy">
                Explore Programs
              </a>
              <a href="#about" className="button-secondary border-white text-white hover:bg-white hover:text-law-navy">
                Learn More
              </a>
            </div>
          </div>
        </div>
        
        {/* Stats */}
        <div className={`mt-16 md:mt-32 grid grid-cols-1 md:grid-cols-4 gap-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-md border border-white/20">
            <h3 className="text-4xl font-serif font-bold text-law-red">90+</h3>
            <p className="text-white/80 mt-2">Years of Excellence</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-md border border-white/20">
            <h3 className="text-4xl font-serif font-bold text-law-red">18,000+</h3>
            <p className="text-white/80 mt-2">Students Enrolled</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-md border border-white/20">
            <h3 className="text-4xl font-serif font-bold text-law-red">30+</h3>
            <p className="text-white/80 mt-2">Distinguished Faculty</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-md border border-white/20">
            <h3 className="text-4xl font-serif font-bold text-law-red">95%</h3>
            <p className="text-white/80 mt-2">Employment Rate</p>
          </div>
        </div>
      </div>
      
      {/* Decorative Element */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"></div>
    </section>;
};

export default HeroSection;
