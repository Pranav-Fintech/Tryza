import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProblemInsight } from './components/ProblemInsight';
import { Solution } from './components/Solution';
import { HowItWorks } from './components/HowItWorks';
import { BusinessModel } from './components/BusinessModel';
import { Founder } from './components/Founder';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-white min-h-screen selection:bg-brand-200 selection:text-brand-900">
      <Navbar />
      <main>
        <Hero />
        <ProblemInsight />
        <Solution />
        <HowItWorks />
        <BusinessModel />
        <Founder />
      </main>
      <Footer />
    </div>
  );
};

export default App;