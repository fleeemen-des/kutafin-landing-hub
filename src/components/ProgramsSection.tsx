
import React, { useRef } from 'react';
import { BookOpen, Users, GraduationCap, Globe } from 'lucide-react';

const programs = [
  {
    title: "Bachelor of Laws",
    description: "Our flagship four-year undergraduate program provides a comprehensive foundation in legal principles, theory, and practice.",
    level: "Undergraduate",
    duration: "4 years",
    icon: BookOpen
  },
  {
    title: "Master of Laws (LL.M.)",
    description: "Advanced study in specialized legal fields designed for those seeking to deepen their expertise and advance their career.",
    level: "Graduate",
    duration: "2 years",
    icon: GraduationCap
  },
  {
    title: "PhD in Legal Sciences",
    description: "Research-focused doctoral program for those pursuing academic excellence and groundbreaking legal scholarship.",
    level: "Postgraduate",
    duration: "3-5 years",
    icon: Users
  },
  {
    title: "International Law Program",
    description: "Specialized program focusing on international legal systems, diplomacy, and cross-border legal practices.",
    level: "Graduate",
    duration: "2 years",
    icon: Globe
  }
];

const ProgramsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(sectionRef);
  
  return (
    <section id="programs" className="py-20 md:py-28 bg-law-navy/5" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h5 className="text-law-gold font-medium mb-3">OUR PROGRAMS</h5>
          <h2 className="section-heading">Academic Excellence in Legal Education</h2>
          <p className="text-law-slate">
            Kutafin University offers a wide range of programs designed to prepare students 
            for successful careers in various legal fields. Our curriculum combines theoretical knowledge 
            with practical skills and real-world experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => (
            <div 
              key={program.title}
              className={`bg-white rounded-lg shadow-lg p-6 card-hover transition-all duration-700 delay-${index * 100} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              <div className="w-14 h-14 bg-law-gold/20 rounded-full flex items-center justify-center mb-6">
                <program.icon size={24} className="text-law-gold" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-law-navy mb-3">{program.title}</h3>
              <p className="text-law-slate mb-4 text-sm">{program.description}</p>
              <div className="flex items-center justify-between text-sm text-law-slate/80 mb-4">
                <span>{program.level}</span>
                <span>{program.duration}</span>
              </div>
              <a 
                href="#contact" 
                className="text-law-navy font-medium text-sm flex items-center hover:text-law-gold transition-colors"
              >
                Learn More
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          ))}
        </div>
        
        <div className={`mt-12 text-center transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <a href="#contact" className="button-secondary inline-block">
            Request Program Details
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

export default ProgramsSection;
