import React, { useRef } from 'react';
const CampusSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(sectionRef);
  return <section id="campus" className="py-20 md:py-28 bg-gray-50" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`order-2 lg:order-1 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img alt="Kutafin University Campus" className="w-full h-48 object-cover rounded-md shadow-md" src="/lovable-uploads/144fee8f-ab9d-4ad9-b10c-3c1dd69f6725.jpg" />
                <img alt="Modern Library" className="w-full h-64 object-cover rounded-md shadow-md" src="/lovable-uploads/d5574d05-42a0-4150-a0a5-35335f0ab713.jpg" />
              </div>
              <div className="space-y-4 mt-8">
                <img alt="Computer Lab" className="w-full h-64 object-cover rounded-md shadow-md" src="/lovable-uploads/498c40fe-15ea-4cad-9e70-1d32b916be20.jpg" />
                <img alt="Lecture Hall" className="w-full h-48 object-cover rounded-md shadow-md" src="/lovable-uploads/d15788a5-24a3-40cd-91ca-3ac3867b948c.jpg" />
              </div>
            </div>
          </div>
          
          <div className={`order-1 lg:order-2 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h5 className="text-law-red font-medium mb-3">OUR CAMPUS</h5>
            <h2 className="text-4xl md:text-5xl font-serif font-semibold text-gray-900 mb-6">A Perfect Learning Environment</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Situated in the heart of Moscow, our campus provides a stimulating environment for legal education. With modern facilities, state-of-the-art technology, and thoughtfully designed spaces, we create the ideal setting for academic excellence and personal growth.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-law-red/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-law-red" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-serif text-gray-900 font-medium text-lg mb-2">Extensive Law Library</h4>
                  <p className="text-gray-700 text-sm">
                    Our library houses over 500,000 volumes of legal texts, journals, and digital resources, providing students with comprehensive research materials.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-law-red/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-law-red" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-serif text-gray-900 font-medium text-lg mb-2">Modern Facilities</h4>
                  <p className="text-gray-700 text-sm">
                    Tech-enabled classrooms, moot courts, conference halls, and student areas equipped with cutting-edge amenities.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-law-red/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-law-red" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-serif text-gray-900 font-medium text-lg mb-2">Safe & Accessible</h4>
                  <p className="text-gray-700 text-sm">
                    24/7 security, accessible design, and convenient location with excellent public transportation connections.
                  </p>
                </div>
              </div>
            </div>
            
            <a href="#" className="button-primary bg-law-red text-white hover:bg-law-red/90 inline-block">
              Virtual Campus Tour
            </a>
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
export default CampusSection;