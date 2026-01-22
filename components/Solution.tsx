import React from 'react';
import { Section } from './ui/Section';
import { FeatureProps } from '../types';
import { Timer, Home, CheckCircle, Store } from 'lucide-react';
import { motion } from 'framer-motion';

const solutions: FeatureProps[] = [
  {
    title: "60-Minute Delivery",
    description: "Instant gratification. We bring the store to your door in under an hour using hyperlocal logistics.",
    icon: Timer
  },
  {
    title: "Try at Home",
    description: "Your bedroom is your fitting room. Try outfits comfortably with your existing wardrobe mirrors.",
    icon: Home
  },
  {
    title: "Pay Only What Fits",
    description: "Zero upfront payment. Card is only charged for the items you decide to keep.",
    icon: CheckCircle
  },
  {
    title: "Hyperlocal Dark Stores",
    description: "Inventory is positioned close to demand, ensuring speed and reducing carbon footprint.",
    icon: Store
  }
];

export const Solution: React.FC = () => {
  return (
    <Section className="bg-white">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
          The <span className="gradient-text">Tryza</span> Solution
        </h2>
        <p className="text-xl text-gray-500">
          We've inverted the traditional e-commerce model to prioritize confidence and convenience.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {solutions.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="group p-8 rounded-3xl bg-white border border-gray-100 hover:border-brand-200 hover:shadow-2xl hover:shadow-brand-500/10 transition-all duration-300"
          >
            <div className="w-14 h-14 bg-gray-50 group-hover:bg-brand-50 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300">
              <item.icon className="w-7 h-7 text-gray-700 group-hover:text-brand-600 transition-colors duration-300" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
            <p className="text-gray-600 leading-relaxed">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};