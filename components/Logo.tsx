import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`flex items-center ${className}`} aria-label="Tryza Logo">
      {/* 
        Brand Logo: Pure Text Implementation
        Font: Space Grotesk (Display)
        Style: Bold Italic
        Gradient: Deep Purple -> Violet -> Fuchsia/Pink
      */}
      <span className="font-display font-bold italic tracking-tight text-4xl md:text-5xl bg-gradient-to-r from-[#4c1d95] via-[#7c3aed] to-[#d946ef] bg-clip-text text-transparent pb-1 pr-1">
        Tryza
      </span>
    </div>
  );
};