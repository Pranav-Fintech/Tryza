import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/80 backdrop-blur-md border-b border-gray-100 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <Logo className={scrolled ? "scale-90 transition-transform origin-left" : "transition-transform origin-left"} />
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <a href="#problem" className="hover:text-brand-600 transition-colors">Why Tryza</a>
          <a href="#how-it-works" className="hover:text-brand-600 transition-colors">How it Works</a>
          <a href="#business-model" className="hover:text-brand-600 transition-colors">Model</a>
        </div>

        <button 
          disabled
          className="bg-gray-900 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-gray-800 transition-colors opacity-90 hover:opacity-100 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          Coming Soon
        </button>
      </div>
    </nav>
  );
};