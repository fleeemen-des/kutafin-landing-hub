
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
    
    // Set page title
    document.title = "Page Not Found | Kutafin Moscow State Law University";
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-law-navy/5 px-6">
      <div className="text-center max-w-xl">
        <h1 className="text-6xl md:text-8xl font-serif font-bold text-law-navy mb-4">404</h1>
        <h2 className="text-2xl md:text-3xl font-serif font-medium text-law-slate mb-6">Page Not Found</h2>
        <p className="text-law-slate mb-8">
          We couldn't find the page you were looking for. The page may have been moved, deleted, 
          or might never have existed.
        </p>
        <Link 
          to="/" 
          className="button-primary bg-law-navy inline-block hover:bg-law-navy/90"
        >
          Return to Homepage
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
