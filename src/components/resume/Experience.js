import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div className="w-full lgl:w-1/2">
        <div className="py-6 lgl:py-8 font-titleFont flex flex-col gap-3">
          <p className="text-xs text-gray-500 font-bold uppercase tracking-[3px]">ASSET &amp; VENTURE TRACK RECORD</p>
          <h2 className="text-3xl md:text-4xl font-bold text-black">Commercial Execution</h2>
        </div>
        <div className="mt-4 lgl:mt-8 w-full h-auto border-l-2 border-l-gray-300 flex flex-col gap-6">
          <ResumeCard
            title="Real Estate Advisory"
            subTitle="Property Advisory &amp; Transaction Structuring"
            result="Advisory"
            des="Helping clients buy, sell, or structure property decisions aligned with long-term financial growth; successfully closed residential transactions generating ₹10,000 commission income."
          />
          <ResumeCard
            title="Retail &amp; Cashflow Ventures"
            subTitle="Short-Cycle Margin Distribution"
            result="Distribution"
            des="Identifying margin-driven retail opportunities and executing short-cycle revenue models; generated ₹6,000 profit in 14 days by independently sourcing and distributing 23 premium wine units."
          />
          <ResumeCard
            title="Soft Launch Platform"
            subTitle="Founder &amp; Principal Architect"
            result="Founder"
            des="A structured income experimentation platform designed to test, validate, execute, and scale diversified revenue models across assets and digital operations."
          />
        </div>
      </div>
      <div className="w-full lgl:w-1/2">
        <div className="py-6 lgl:py-8 font-titleFont flex flex-col gap-3">
          <p className="text-xs text-gray-500 font-bold uppercase tracking-[3px]">ADVISORY &amp; OPERATIONS</p>
          <h2 className="text-3xl md:text-4xl font-bold text-black">Advisory &amp; Systems</h2>
        </div>
        <div className="mt-4 lgl:mt-8 w-full h-auto border-l-2 border-l-gray-300 flex flex-col gap-6">
          <ResumeCard
            title="Education &amp; Career Structuring"
            subTitle="PG / UG Admissions Consulting"
            result="50+ Students"
            des="Guided 50+ students in selecting PG/UG academic programs aligned directly with high-income potential, career clarity, and candidate background."
          />
          <ResumeCard
            title="Digital &amp; Scalable Income Systems"
            subTitle="Leveraged Distribution Channels"
            result="Scalable"
            des="Creating leveraged digital channels and structured operating procedures designed for systematic, scalable revenue generation."
          />
          <ResumeCard
            title="Business Operations &amp; HR Analytics"
            subTitle="Analytical Decision Framework"
            result="Analytics"
            des="Leveraging quantitative data analytics and organizational HR structuring to ensure cost clarity, healthy margins, and sustainable execution."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
