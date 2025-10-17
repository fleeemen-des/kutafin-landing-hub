import React, { useRef, useState } from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
const ContactSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(sectionRef);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });

    // Show success message (would be implemented with a toast in a real application)
    alert('Thank you for your message. We will contact you shortly.');
  };
  return <section id="contact" className="py-20 md:py-28 bg-law-navy/5" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h5 className="text-law-gold font-medium mb-3">CONTACT US</h5>
          <h2 className="section-heading">Get in Touch</h2>
          <p className="text-law-slate">
            Have questions about our programs, admissions, or campus? We're here to help.
            Reach out to us, and our team will get back to you as soon as possible.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          
          <div className={`transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="bg-white p-8 rounded-lg shadow-lg h-full">
              <h3 className="text-xl font-serif font-semibold text-law-navy mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-law-gold/20 rounded-full flex items-center justify-center mr-4">
                    <MapPin size={18} className="text-law-gold" />
                  </div>
                  <div>
                    <h4 className="font-medium text-law-navy mb-1">Address</h4>
                    <p className="text-law-slate text-sm">
                      Sadovaya-Kudrinskaya Street, 9<br />
                      Moscow, Russia, 123995
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-law-gold/20 rounded-full flex items-center justify-center mr-4">
                    <Phone size={18} className="text-law-gold" />
                  </div>
                  <div>
                    <h4 className="font-medium text-law-navy mb-1">Phone</h4>
                    <p className="text-law-slate text-sm">
                      +7 (499) 244-88-88, ext. 685
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-law-gold/20 rounded-full flex items-center justify-center mr-4">
                    <Mail size={18} className="text-law-gold" />
                  </div>
                  <div>
                    <h4 className="font-medium text-law-navy mb-1">Email</h4>
                    <p className="text-law-slate text-sm mb-3">
                      international@msal.ru
                    </p>
                    <h5 className="font-medium text-law-navy text-xs mb-2">Contact Persons:</h5>
                    <p className="text-law-slate text-sm">
                      <strong>Emil T. Gasanov</strong><br />
                      ETGASANOV@msal.ru<br />
                      Tel.: ext. 854
                    </p>
                    <p className="text-law-slate text-sm mt-2">
                      <strong>Ariza Kh. Ichalova</strong><br />
                      AHICHALOVA@msal.ru<br />
                      Tel.: ext. 2044
                    </p>
                    <p className="text-law-slate text-sm mt-2">
                      <strong>Carlos Daniel Valverde Petrov</strong><br />
                      KVALVERDE@msal.ru<br />
                      Tel.: ext. 685
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="font-medium text-law-navy mb-3">Office Hours</h4>
                <p className="text-law-slate text-sm mb-2">
                  Monday - Friday: 9:00 AM - 6:00 PM
                </p>
                <p className="text-law-slate text-sm">
                  Saturday: 9:00 AM - 1:00 PM<br />
                  Sunday: Closed
                </p>
              </div>
            </div>
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
export default ContactSection;