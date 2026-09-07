import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div className="w-full lgl:w-1/2">
        <div className="py-6 lgl:py-8 font-titleFont flex flex-col gap-3">
          <p className="text-xs text-gray-500 font-bold uppercase tracking-[3px]">CORE DIRECTION</p>
          <h2 className="text-3xl md:text-4xl font-bold text-black">Mission &amp; Vision</h2>
        </div>
        <div className="mt-4 lgl:mt-8 w-full h-auto border-l-2 border-l-gray-300 flex flex-col gap-6">
          <ResumeCard
            title="Our Mission"
            subTitle="Sustainable Financial Growth"
            result="Mission"
            des="“To design and scale structured income systems that generate sustainable, long-term financial growth.”"
          />
          <ResumeCard
            title="Our Vision"
            subTitle="Cashflow-Driven Portfolio"
            result="Vision"
            des="“To build a diversified portfolio of cashflow-driven assets and scalable revenue channels.”"
          />
          <ResumeCard
            title="Soft Launch Platform"
            subTitle="Testing, Executing &amp; Scaling"
            result="Platform"
            des="A structured income experimentation platform where entrepreneurs and operators test, execute, and scale revenue models."
          />
        </div>
      </div>
      <div className="w-full lgl:w-1/2">
        <div className="py-6 lgl:py-8 font-titleFont flex flex-col gap-3">
          <p className="text-xs text-gray-500 font-bold uppercase tracking-[3px]">PROVEN OUTCOMES</p>
          <h2 className="text-3xl md:text-4xl font-bold text-black">Key Milestones</h2>
        </div>
        <div className="mt-4 lgl:mt-8 w-full h-auto border-l-2 border-l-gray-300 flex flex-col gap-6">
          <ResumeCard
            title="14-Day Retail Wine Sprint"
            subTitle="₹6,000 Profit • 23 Units"
            result="14 Days"
            des="Independently sourced and distributed 23 premium wine units in 14 days, generating ₹6,000 net profit through rapid short-cycle execution."
          />
          <ResumeCard
            title="Residential Property Advisory"
            subTitle="₹10,000 Commission Realized"
            result="Success"
            des="Successfully negotiated and closed a residential real estate transaction generating ₹10,000 commission income while protecting client equity."
          />
          <ResumeCard
            title="50+ Students Career Structuring"
            subTitle="Admissions &amp; Earning Alignment"
            result="50+ Placed"
            des="Structured admissions roadmaps for 50+ PG/UG candidates to ensure high return-on-education and long-term earnings clarity."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
