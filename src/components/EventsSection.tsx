import React, { useRef } from 'react';
const events = [{
  title: "Moscow International Legal Forum",
  date: "September 20-22, 2024",
  location: "Moscow City Conference Center",
  description: "A premier international conference bringing together legal experts, scholars, and practitioners to discuss global legal challenges and innovations in jurisprudence."
}, {
  title: "Russian-Chinese Legal Forum",
  date: "October 15-17, 2024",
  location: "Kutafin Moscow State Law University",
  description: "An annual bilateral forum fostering legal dialogue and cooperation between Russian and Chinese legal professionals, exploring comparative law and international legal frameworks."
}, {
  title: "International IP Forum",
  date: "November 10-12, 2024",
  location: "International Business Center",
  description: "A comprehensive conference addressing the latest developments in intellectual property law, featuring global experts, policy makers, and industry leaders discussing emerging IP trends and challenges."
}];
const EventsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(sectionRef);
  return <section id="events" className="py-20 md:py-28 bg-white" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h5 className="text-law-red font-medium mb-3">ANNUAL LEGAL EVENTS</h5>
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-gray-900 mb-6">Prominent Legal Conferences</h2>
          <p className="text-gray-700">
            Explore our flagship annual events that bring together legal minds from around the world to discuss critical legal issues, foster international cooperation, and drive legal innovation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((event, index) => <div key={event.title} className="">
              <h3 className="text-xl font-serif font-semibold text-gray-900 mb-2">{event.title}</h3>
              <p className="text-law-red text-sm mb-4">{event.location}</p>
              <p className="text-gray-700 text-sm mb-6">{event.description}</p>
              
            </div>)}
        </div>
        
        <div className={`mt-12 text-center transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
        </div>
      </div>
    </section>;
};
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
export default EventsSection;