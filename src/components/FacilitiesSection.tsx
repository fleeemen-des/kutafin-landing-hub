import React, { useRef } from 'react';
import { Building2, UtensilsCrossed, Bus, Building, HeartPulse } from 'lucide-react';

const FacilitiesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(sectionRef);
  
  return (
    <section id="facilities" className="py-20 md:py-28 bg-white" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h5 className="text-law-red font-medium mb-3">STUDENT FACILITIES</h5>
          <h2 className="section-heading">Supporting International Students</h2>
          <p className="text-law-slate">
            Kutafin Moscow State Law University provides comprehensive support for our international
            students, with a focus on comfortable accommodation and excellent campus facilities.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Dormitories */}
          <div className={`bg-white rounded-lg shadow-lg p-8 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="w-16 h-16 bg-law-red/10 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Building2 size={32} className="text-law-red" />
            </div>
            <h3 className="text-xl font-serif font-semibold text-law-navy text-center mb-4">Dormitories</h3>
            <p className="text-law-slate text-center mb-6">
              We offer 3 comfortable dormitories for our students located throughout Moscow.
            </p>
            <div className="space-y-3">
              <div className="bg-gray-50 p-3 rounded-md">
                <p className="text-sm text-law-slate">2nd Donskoy Passage, building 7</p>
              </div>
              <div className="bg-gray-50 p-3 rounded-md">
                <p className="text-sm text-law-slate">Volokolamsk Highway, building 88, block 6</p>
              </div>
              <div className="bg-gray-50 p-3 rounded-md">
                <p className="text-sm text-law-slate">Shitov Embankment, building 72, block 2</p>
              </div>
            </div>
          </div>
          
          {/* Catering */}
          <div className={`bg-white rounded-lg shadow-lg p-8 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="w-16 h-16 bg-law-red/10 rounded-full flex items-center justify-center mb-6 mx-auto">
              <UtensilsCrossed size={32} className="text-law-red" />
            </div>
            <h3 className="text-xl font-serif font-semibold text-law-navy text-center mb-4">Catering Facilities</h3>
            <p className="text-law-slate text-center mb-6">
              Multiple dining options are available on campus to meet diverse dietary preferences.
            </p>
            <div className="space-y-3">
              <div className="flex items-center justify-between bg-gray-50 p-3 rounded-md">
                <p className="text-sm font-medium text-law-navy">Canteens</p>
                <p className="text-sm text-law-slate">3 locations</p>
              </div>
              <div className="flex items-center justify-between bg-gray-50 p-3 rounded-md">
                <p className="text-sm font-medium text-law-navy">Buffet</p>
                <p className="text-sm text-law-slate">2 locations</p>
              </div>
              <div className="flex items-center justify-between bg-gray-50 p-3 rounded-md">
                <p className="text-sm font-medium text-law-navy">Summer Café</p>
                <p className="text-sm text-law-slate">Seasonal</p>
              </div>
            </div>
          </div>
          
          {/* Medical Services */}
          <div className={`bg-white rounded-lg shadow-lg p-8 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="w-16 h-16 bg-law-red/10 rounded-full flex items-center justify-center mb-6 mx-auto">
              <HeartPulse size={32} className="text-law-red" />
            </div>
            <h3 className="text-xl font-serif font-semibold text-law-navy text-center mb-4">Medical Support</h3>
            <p className="text-law-slate text-center mb-6">
              We provide comprehensive medical support for all students on campus.
            </p>
            <div className="bg-gray-50 p-4 rounded-md">
              <h4 className="text-sm font-medium text-law-navy mb-2">Medical Office Location:</h4>
              <p className="text-sm text-law-slate">
                Sadovaya-Kudrinskaya Street, building 9, structure 2
              </p>
            </div>
          </div>
        </div>
        
        {/* International Student Statistics */}
        <div className={`mt-16 p-8 bg-law-red/5 rounded-lg border border-law-red/10 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <div className="text-center">
            <h3 className="text-2xl font-serif font-semibold text-law-navy mb-6">International Student Community</h3>
            <div className="inline-block px-6 py-3 bg-white rounded-full shadow-md">
              <p className="text-law-red font-medium">
                International Students from more than 40 countries
              </p>
            </div>
            <p className="mt-6 text-law-slate max-w-2xl mx-auto">
              We have a vibrant and diverse international student community, including students from 
              around the globe. Our university provides specialized support
              for international students to ensure a comfortable and productive educational experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// Utility hook for checking if element is in viewport
function useOnScreen(ref: React.RefObject<HTMLElement>) {
  const [isIntersecting, setIntersecting] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // When element enters viewport, set state to true and stop observing
        if (entry.isIntersecting) {
          setIntersecting(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '0px',
        threshold: 0.1
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return isIntersecting;
}

export default FacilitiesSection;
