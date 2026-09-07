import React from 'react';
import { Building2, Coins, GraduationCap, Globe, Rocket, LineChart } from 'lucide-react';
import Title from '../layouts/Title';

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-gray-200"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="CORE CAPABILITIES" des="What I Do" />
      </div>

      <div className="relative mx-auto grid max-w-5xl border border-gray-200 divide-y divide-gray-200 sm:grid-cols-2 lg:grid-cols-3 sm:divide-y-0 sm:divide-x [&>div]:p-8 md:[&>div]:p-10 bg-white rounded-xl shadow-shadowOne overflow-hidden">
        <div className="space-y-3 sm:border-b border-gray-200 hover:bg-gray-50/80 transition-colors duration-200 group cursor-pointer">
          <div className="flex items-center gap-2.5">
            <Building2 className="w-5 h-5 text-black group-hover:scale-110 transition-transform duration-200" />
            <h3 className="text-base font-bold text-black">Real Estate Advisory</h3>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">
            Helping clients buy, sell, or structure property decisions aligned with long-term financial growth and equity.
          </p>
        </div>

        <div className="space-y-3 sm:border-b border-gray-200 hover:bg-gray-50/80 transition-colors duration-200 group cursor-pointer">
          <div className="flex items-center gap-2.5">
            <Coins className="w-5 h-5 text-black group-hover:scale-110 transition-transform duration-200" />
            <h3 className="text-base font-bold text-black">Retail &amp; Cashflow</h3>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">
            Identifying margin-driven retail distribution opportunities and executing short-cycle revenue models.
          </p>
        </div>

        <div
          onClick={() => window.open('https://rightin.in', '_blank', 'noopener,noreferrer')}
          className="space-y-3 sm:border-b border-gray-200 hover:bg-gray-50/80 transition-colors duration-200 group cursor-pointer"
        >
          <div className="flex items-center gap-2.5">
            <GraduationCap className="w-5 h-5 text-black group-hover:scale-110 transition-transform duration-200" />
            <h3 className="text-base font-bold text-black">Education Advisory</h3>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">
            Guiding students in selecting PG/UG programs aligned with real earning clarity, ROI, and background.
          </p>
        </div>

        <div className="space-y-3 hover:bg-gray-50/80 transition-colors duration-200 border-t border-gray-200 sm:border-t-0 group cursor-pointer">
          <div className="flex items-center gap-2.5">
            <Globe className="w-5 h-5 text-black group-hover:scale-110 transition-transform duration-200" />
            <h3 className="text-base font-bold text-black">Digital Systems</h3>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">
            Creating leveraged digital channels designed for structured, scalable, and compounding cashflow.
          </p>
        </div>

        <div className="space-y-3 hover:bg-gray-50/80 transition-colors duration-200 border-t border-gray-200 sm:border-t-0 group cursor-pointer">
          <div className="flex items-center gap-2.5">
            <Rocket className="w-5 h-5 text-black group-hover:scale-110 transition-transform duration-200" />
            <h3 className="text-base font-bold text-black">Soft Launch Platform</h3>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">
            A structured income experimentation platform where operators test, execute, and scale revenue models.
          </p>
        </div>

        <div className="space-y-3 hover:bg-gray-50/80 transition-colors duration-200 border-t border-gray-200 sm:border-t-0 group cursor-pointer">
          <div className="flex items-center gap-2.5">
            <LineChart className="w-5 h-5 text-black group-hover:scale-110 transition-transform duration-200" />
            <h3 className="text-base font-bold text-black">Multi-Channel Design</h3>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">
            Designing sustainable revenue systems: clarity first, structure second, and execution always.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;