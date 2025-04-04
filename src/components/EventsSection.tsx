import React, { useRef } from 'react';
import { Calendar } from 'lucide-react';
const events = [{
  title: "International Legal Conference",
  date: "October 15-17, 2023",
  location: "Main Auditorium",
  description: "Join leading international legal experts for discussions on current global legal challenges and solutions."
}, {
  title: "Law Career Fair",
  date: "November 5, 2023",
  location: "University Hall",
  description: "Meet representatives from top law firms, government agencies, and non-profit organizations."
}, {
  title: "Moot Court Competition",
  date: "December 8-10, 2023",
  location: "Law Faculty Building",
  description: "Witness our students demonstrate their legal advocacy skills in simulated court proceedings."
}];
const EventsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(sectionRef);
  return <section id="events" className="py-20 md:py-28 bg-white" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h5 className="text-law-red font-medium mb-3">UPCOMING EVENTS</h5>
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-gray-900 mb-6">Join Our Community</h2>
          <p className="text-gray-700">
            Stay connected with the latest news, conferences, guest lectures, and special events
            happening at Kutafin Moscow State Law University.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((event, index) => <div key={event.title} className="">
              <div className="flex items-center mb-4">
                <Calendar size={20} className="text-law-red mr-2" />
                <span className="text-gray-600 text-sm">{event.date}</span>
              </div>
              <h3 className="text-xl font-serif font-semibold text-gray-900 mb-2">{event.title}</h3>
              <p className="text-law-red text-sm mb-4">{event.location}</p>
              <p className="text-gray-700 text-sm mb-6">{event.description}</p>
              <a href="#" className="text-law-red font-medium text-sm flex items-center hover:text-law-red/80 transition-colors">
                Learn More
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>)}
        </div>
        
        <div className={`mt-12 text-center transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <a href="#" className="button-secondary border-law-red text-law-red hover:bg-law-red hover:text-white inline-block">
            View All Events
          </a>
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
export default EventsSection;