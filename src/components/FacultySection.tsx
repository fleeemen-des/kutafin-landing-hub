
import React, { useRef } from 'react';

const faculty = [
  {
    name: "Prof. Alexander Ivanov",
    title: "Dean, Faculty of Constitutional Law",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Leading expert in constitutional law with over 25 years of experience in legal education and research."
  },
  {
    name: "Prof. Elena Petrova",
    title: "Head, Department of Criminal Law",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Renowned scholar in criminal justice reforms and author of several influential publications."
  },
  {
    name: "Prof. Mikhail Kuznetsov",
    title: "Chair, International Law Center",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Distinguished expert in international law who has represented Russia at numerous international forums."
  }
];

const FacultySection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(sectionRef);
  
  return (
    <section id="faculty" className="py-20 md:py-28" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h5 className="text-law-gold font-medium mb-3">OUR FACULTY</h5>
          <h2 className="section-heading">Distinguished Legal Minds</h2>
          <p className="text-law-slate">
            Our faculty consists of distinguished scholars, practicing attorneys, and international experts 
            who bring real-world experience and cutting-edge research to the classroom.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {faculty.map((member, index) => (
            <div 
              key={member.name}
              className={`group transition-all duration-700 delay-${index * 100} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              <div className="relative overflow-hidden rounded-lg mb-6">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-law-navy/90 to-transparent opacity-70"></div>
              </div>
              <h3 className="text-xl font-serif font-semibold text-law-navy">{member.name}</h3>
              <p className="text-law-gold text-sm mb-3">{member.title}</p>
              <p className="text-law-slate text-sm">{member.description}</p>
            </div>
          ))}
        </div>
        
        <div className={`mt-16 flex justify-center transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <a href="#" className="button-primary bg-law-navy inline-block">
            Meet Our Faculty
          </a>
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

export default FacultySection;
