import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div className="w-full lgl:w-1/2">
        <div className="py-8 font-titleFont flex flex-col gap-2">
          <p className="text-xs text-gray-500 font-bold tracking-[3px] uppercase">
            The Way I Think
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-black">The 5 Core Filters</h2>
          <p className="text-sm text-gray-600 italic mt-1">
            “Opportunities only move forward when the structure is sound.”
          </p>
        </div>
        <div className="mt-4 w-full flex flex-col gap-6">
          <div className="overflow-x-hidden">
            <p className="text-sm uppercase font-bold text-black">Revenue Strength</p>
            <span className="w-full h-2.5 bg-gray-200 rounded-full inline-flex mt-2 relative">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-full h-full bg-black rounded-full relative"
              >
                <span className="absolute -top-5 right-0 text-xs font-bold text-black">100%</span>
              </motion.span>
            </span>
          </div>
          <div className="overflow-x-hidden">
            <p className="text-sm uppercase font-bold text-black">Cost &amp; Margin Clarity</p>
            <span className="w-full h-2.5 bg-gray-200 rounded-full inline-flex mt-2 relative">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[95%] h-full bg-black rounded-full relative"
              >
                <span className="absolute -top-5 right-0 text-xs font-bold text-black">95%</span>
              </motion.span>
            </span>
          </div>
          <div className="overflow-x-hidden">
            <p className="text-sm uppercase font-bold text-black">Risk-to-Reward Ratio</p>
            <span className="w-full h-2.5 bg-gray-200 rounded-full inline-flex mt-2 relative">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[90%] h-full bg-black rounded-full relative"
              >
                <span className="absolute -top-5 right-0 text-xs font-bold text-black">90%</span>
              </motion.span>
            </span>
          </div>
          <div className="overflow-x-hidden">
            <p className="text-sm uppercase font-bold text-black">Scalability Potential</p>
            <span className="w-full h-2.5 bg-gray-200 rounded-full inline-flex mt-2 relative">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[85%] h-full bg-black rounded-full relative"
              >
                <span className="absolute -top-5 right-0 text-xs font-bold text-black">85%</span>
              </motion.span>
            </span>
          </div>
          <div className="overflow-x-hidden">
            <p className="text-sm uppercase font-bold text-black">Long-Term Sustainability</p>
            <span className="w-full h-2.5 bg-gray-200 rounded-full inline-flex mt-2 relative">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[95%] h-full bg-black rounded-full relative"
              >
                <span className="absolute -top-5 right-0 text-xs font-bold text-black">95%</span>
              </motion.span>
            </span>
          </div>
        </div>
      </div>

      <div className="w-full lgl:w-1/2">
        <div className="py-8 font-titleFont flex flex-col gap-2">
          <p className="text-xs text-gray-500 font-bold tracking-[3px] uppercase">
            Strategic Competencies
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-black">Execution Domains</h2>
          <p className="text-sm text-gray-600 italic mt-1">
            “Growth is designed — not accidental.”
          </p>
        </div>
        <div className="mt-4 flex flex-col gap-6">
          <div className="overflow-x-hidden">
            <p className="text-sm uppercase font-bold text-black">Multi-Channel Income Design</p>
            <span className="w-full h-2.5 bg-gray-200 rounded-full inline-flex mt-2 relative">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[95%] h-full bg-black rounded-full relative"
              >
                <span className="absolute -top-5 right-0 text-xs font-bold text-black">95%</span>
              </motion.span>
            </span>
          </div>
          <div className="overflow-x-hidden">
            <p className="text-sm uppercase font-bold text-black">Real Estate &amp; Asset Advisory</p>
            <span className="w-full h-2.5 bg-gray-200 rounded-full inline-flex mt-2 relative">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[90%] h-full bg-black rounded-full relative"
              >
                <span className="absolute -top-5 right-0 text-xs font-bold text-black">90%</span>
              </motion.span>
            </span>
          </div>
          <div className="overflow-x-hidden">
            <p className="text-sm uppercase font-bold text-black">Retail &amp; Cashflow Ventures</p>
            <span className="w-full h-2.5 bg-gray-200 rounded-full inline-flex mt-2 relative">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[88%] h-full bg-black rounded-full relative"
              >
                <span className="absolute -top-5 right-0 text-xs font-bold text-black">88%</span>
              </motion.span>
            </span>
          </div>
          <div className="overflow-x-hidden">
            <p className="text-sm uppercase font-bold text-black">Education &amp; Career Structuring</p>
            <span className="w-full h-2.5 bg-gray-200 rounded-full inline-flex mt-2 relative">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[92%] h-full bg-black rounded-full relative"
              >
                <span className="absolute -top-5 right-0 text-xs font-bold text-black">92%</span>
              </motion.span>
            </span>
          </div>
          <div className="overflow-x-hidden">
            <p className="text-sm uppercase font-bold text-black">Business Administration &amp; Data Analytics</p>
            <span className="w-full h-2.5 bg-gray-200 rounded-full inline-flex mt-2 relative">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[90%] h-full bg-black rounded-full relative"
              >
                <span className="absolute -top-5 right-0 text-xs font-bold text-black">90%</span>
              </motion.span>
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;