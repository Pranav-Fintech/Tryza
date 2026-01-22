import React from 'react';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start">
          <Logo className="mb-2" />
          <p className="text-gray-500 text-sm">Try First. Buy Later.</p>
        </div>
        
        <div className="text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Tryza. All rights reserved.
        </div>
      </div>
    </footer>
  );
};