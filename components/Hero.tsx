import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, MapPin } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 -z-10 hero-glow" />
      <div className="absolute top-1/4 right-0 w-1/3 h-1/3 bg-brand-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-accent-500/10 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-50 border border-brand-100 text-brand-700 text-sm font-medium mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
          </span>
          Redefining Fashion Logistics
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight text-gray-900 leading-[1.1] mb-8"
        >
          Tryza is <span className="gradient-text">redefining</span> how India shops for fashion.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12"
        >
          A hyperlocal, trial-first fashion platform delivering curated outfits within <span className="font-semibold text-gray-900">60 minutes</span> — allowing customers to <span className="font-semibold text-gray-900">try before they pay.</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button disabled className="px-8 py-4 bg-gray-900 text-white rounded-full font-semibold text-lg flex items-center gap-2 hover:bg-gray-800 transition-all transform hover:scale-105 disabled:opacity-80 disabled:cursor-not-allowed">
            Tryza — Coming Soon
            <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>

        {/* Floating Badges */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-24 flex justify-center gap-8 md:gap-16 grayscale opacity-60"
        >
           <div className="flex items-center gap-2">
             <Clock className="w-5 h-5 text-gray-500" />
             <span className="font-semibold">60 Min Delivery</span>
           </div>
           <div className="flex items-center gap-2">
             <MapPin className="w-5 h-5 text-gray-500" />
             <span className="font-semibold">Hyperlocal</span>
           </div>
        </motion.div>
      </div>
    </div>
  );
};