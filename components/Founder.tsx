import React from 'react';
import { Section } from './ui/Section';

export const Founder: React.FC = () => {
  return (
    <Section>
      <div className="relative rounded-3xl bg-gray-900 text-white overflow-hidden p-8 md:p-20 text-center">
        {/* Abstract Background Design */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-brand-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-accent-600/20 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-sm font-bold tracking-widest uppercase text-brand-400 mb-6">
            The Vision
          </h2>
          <p className="text-2xl md:text-4xl font-display font-medium leading-tight mb-8">
            "Founded by Pranav, Tryza was born from firsthand frustration with online fashion shopping and is built to eliminate uncertainty and make fashion decisions instant and confident."
          </p>
          <div className="inline-block border-t border-gray-700 pt-6 mt-4">
             <span className="text-lg font-bold">Pranav</span>
             <span className="block text-gray-400">Founder, Tryza</span>
          </div>
        </div>
      </div>
    </Section>
  );
};