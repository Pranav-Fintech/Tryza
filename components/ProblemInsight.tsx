import React from 'react';
import { Section } from './ui/Section';
import { AlertTriangle, Lightbulb } from 'lucide-react';
import { motion } from 'framer-motion';

export const ProblemInsight: React.FC = () => {
  return (
    <div id="problem" className="bg-gray-50">
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Problem Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <div className="w-12 h-12 bg-red-100 rounded-2xl flex items-center justify-center mb-6">
              <AlertTriangle className="w-6 h-6 text-red-600" />
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 mb-6">
              The Problem
            </h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Online fashion suffers from uncertainty — poor fit, fabric mismatch, and delayed delivery. This friction leads to a staggering <span className="font-bold text-gray-900">30–40% return rate</span> and broken customer trust. The current e-commerce model forces you to pay for uncertainty.
            </p>
          </motion.div>

          {/* Insight Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100"
          >
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-500 to-accent-500 rounded-t-3xl" />
            
            <div className="w-12 h-12 bg-brand-100 rounded-2xl flex items-center justify-center mb-6">
              <Lightbulb className="w-6 h-6 text-brand-600" />
            </div>
            <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-4">
              Our Insight
            </h2>
            <blockquote className="text-xl md:text-2xl text-gray-700 italic border-l-4 border-brand-200 pl-6 my-6">
              "Fashion returns don’t happen because people want to return products. They happen because decisions are made <span className="text-brand-600 font-semibold not-italic">too late</span> — after delivery, not before payment."
            </blockquote>
          </motion.div>

        </div>
      </Section>
    </div>
  );
};