import React from 'react';
import { Section } from './ui/Section';
import { TrendingUp, Box, Layers } from 'lucide-react';

export const BusinessModel: React.FC = () => {
  return (
    <div id="business-model" className="bg-brand-50/50">
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-8">
              Business Model
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Tryza starts with a <span className="text-brand-700 font-semibold">private-label-first strategy</span> to ensure margin control and inventory efficiency, and selectively partners with D2C brands as the platform scales.
            </p>
            <p className="text-xl text-gray-600 leading-relaxed">
              The model is built around profitable dark stores, fast inventory rotation, and disciplined expansion in India-1 cities.
            </p>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-brand-100 flex items-start gap-4">
              <div className="bg-brand-100 p-3 rounded-lg">
                <Layers className="w-6 h-6 text-brand-600" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-lg">Margin Control</h4>
                <p className="text-gray-500">Private label focus ensures unit economics work from day one.</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-brand-100 flex items-start gap-4">
              <div className="bg-brand-100 p-3 rounded-lg">
                <Box className="w-6 h-6 text-brand-600" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-lg">Dark Stores</h4>
                <p className="text-gray-500">Low-cost hyperlocal warehousing enables 60-min delivery.</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-brand-100 flex items-start gap-4">
              <div className="bg-brand-100 p-3 rounded-lg">
                <TrendingUp className="w-6 h-6 text-brand-600" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-lg">Scalability</h4>
                <p className="text-gray-500">Disciplined expansion into high-density urban areas.</p>
              </div>
            </div>
          </div>

        </div>
      </Section>
    </div>
  );
};