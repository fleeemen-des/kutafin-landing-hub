import React, { useEffect, useRef } from 'react';
const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(sectionRef);
  return <section id="about" className="py-20 md:py-28" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className={`transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h5 className="text-law-gold font-medium mb-3">ABOUT THE UNIVERSITY</h5>
              <h2 className="section-heading">A Legacy of Legal Excellence</h2>
              <p className="text-law-slate mb-6 leading-relaxed">
                Kutafin Moscow State Law University (MSAL) is one of Russia's most prestigious legal educational institutions with a rich history dating back to 1931. Named after the prominent Russian legal scholar Oleg Emelyanovich Kutafin, the university has established itself as a center of excellence in legal education and research.
              </p>
              <p className="text-law-slate mb-6 leading-relaxed">
                The university combines traditional academic values with innovative teaching methods, preparing students to meet the challenges of the modern legal profession both in Russia and internationally.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-law-gold/20 rounded-full flex items-center justify-center mr-4">
                    <span className="text-law-gold font-serif text-xl font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-serif text-law-navy font-medium text-lg mb-2">Renowned Faculty</h4>
                    <p className="text-law-slate text-sm">Leading scholars and practicing legal professionals</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-law-gold/20 rounded-full flex items-center justify-center mr-4">
                    <span className="text-law-gold font-serif text-xl font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-serif text-law-navy font-medium text-lg mb-2">Modern Facilities</h4>
                    <p className="text-law-slate text-sm">State-of-the-art libraries, classrooms, and resources</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-law-gold/20 rounded-full flex items-center justify-center mr-4">
                    <span className="text-law-gold font-serif text-xl font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-serif text-law-navy font-medium text-lg mb-2">Global Recognition</h4>
                    <p className="text-law-slate text-sm">Internationally recognized degrees and certifications</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-law-gold/20 rounded-full flex items-center justify-center mr-4">
                    <span className="text-law-gold font-serif text-xl font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="font-serif text-law-navy font-medium text-lg mb-2">Rich Traditions</h4>
                    <p className="text-law-slate text-sm">Heritage of excellence and academic rigor</p>
                  </div>
                </div>
              </div>
              
              <a href="#programs" className="button-primary bg-law-navy inline-block">
                Discover Our Heritage
              </a>
            </div>
          </div>
          
          <div className={`relative transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
            <div className="relative z-10">
              <img alt="Kutafin University Building" className="w-full h-auto rounded-md shadow-xl object-contain" src="/lovable-uploads/a7bb959e-b1fd-4ac3-bf49-2bfcedda981d.jpg" />
            </div>
            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-law-gold rounded-md -z-10"></div>
            <div className="absolute -top-6 -right-6 w-40 h-40 border-2 border-law-navy rounded-md -z-10"></div>
          </div>
        </div>
      </div>
    </section>;
};

// Utility hook for checking if element is in viewport
function useOnScreen(ref: React.RefObject<HTMLElement>) {
  const [isIntersecting, setIntersecting] = React.useState(false);
  React.useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      // When element enters viewport, set state to true and stop observing
      if (entry.isIntersecting) {
        setIntersecting(true);
        observer.disconnect();
      }
    }, {
      rootMargin: '0px',
      threshold: 0.1
    });
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      observer.disconnect();
    };
  }, [ref]);
  return isIntersecting;
}
export default AboutSection;