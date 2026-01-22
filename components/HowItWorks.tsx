import React from 'react';
import { Section } from './ui/Section';
import { StepProps } from '../types';
import { motion } from 'framer-motion';

const steps: StepProps[] = [
  {
    number: "01",
    title: "Choose Outfits",
    description: "Browse our curated collection of trend-forward fashion on the Tryza app."
  },
  {
    number: "02",
    title: "60-Min Delivery",
    description: "Our rider brings your selection to your doorstep in under an hour."
  },
  {
    number: "03",
    title: "Try at Home",
    description: "Take 15 minutes while the rider waits, or schedule a later pickup."
  },
  {
    number: "04",
    title: "Pay & Return",
    description: "Hand back what doesn't fit. Pay only for what you keep."
  }
];

export const HowItWorks: React.FC = () => {
  return (
    <div id="how-it-works" className="bg-gray-900 text-white py-24">
      <Section>
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            How It Works
          </h2>
          <div className="h-1 w-24 bg-brand-500 rounded-full"/>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-gray-800 z-0" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="relative z-10"
            >
              <div className="w-24 h-24 bg-gray-800 border-4 border-gray-900 rounded-full flex items-center justify-center text-3xl font-display font-bold text-brand-400 mb-8 shadow-xl">
                {step.number}
              </div>
              <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
              <p className="text-gray-400 leading-relaxed text-lg">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>
    </div>
  );
};