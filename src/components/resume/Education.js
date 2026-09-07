import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one: Operating Principles */}
      <div className="w-full lgl:w-1/2">
        <div className="py-6 lgl:py-8 font-titleFont flex flex-col gap-3">
          <p className="text-xs text-gray-500 font-bold uppercase tracking-[3px]">EXECUTION PHILOSOPHY</p>
          <h2 className="text-3xl md:text-4xl font-bold text-black">Operating Principles</h2>
        </div>
        <div className="mt-4 lgl:mt-8 w-full h-auto border-l-2 border-l-gray-300 flex flex-col gap-6">
          <ResumeCard
            title="Act Decisively, Guided by Logic"
            subTitle="Principle 01 • Decision Making"
            result="Logic"
            des="Make sharp, rational decisions backed by data and structured opportunity assessment rather than emotional momentum."
          />
          <ResumeCard
            title="Discipline Before Expansion"
            subTitle="Principle 02 • Risk & Stability"
            result="Discipline"
            des="Establish solid unit economics, clear operational workflows, and risk containment before attempting to scale."
          />
          <ResumeCard
            title="Diversify With Structure, Not Impulse"
            subTitle="Principle 03 • Portfolio Growth"
            result="Structure"
            des="Build multi-channel income streams with deliberate architecture, ensuring each asset class supports the broader portfolio."
          />
          <ResumeCard
            title="Prioritize Long-Term Value"
            subTitle="Principle 04 • Sustainable Growth"
            result="Long-Term"
            des="Reject ephemeral, short-term vanity wins in favor of compounding cashflow, resilient client relationships, and enduring systems."
          />
          <ResumeCard
            title="Stay Adaptable, Protect Fundamentals"
            subTitle="Principle 05 • Resilience"
            result="Adaptable"
            des="Remain agile to market conditions and shifting cycles while strictly safeguarding foundational unit margins and clarity."
          />
        </div>
      </div>

      {/* part Two: Foundation & Background */}
      <div className="w-full lgl:w-1/2">
        <div className="py-6 lgl:py-8 font-titleFont flex flex-col gap-3">
          <p className="text-xs text-gray-500 font-bold uppercase tracking-[3px]">FOUNDATION &amp; ROLES</p>
          <h2 className="text-3xl md:text-4xl font-bold text-black">Background &amp; Roles</h2>
        </div>
        <div className="mt-4 lgl:mt-8 w-full h-auto border-l-2 border-l-gray-300 flex flex-col gap-6">
          <ResumeCard
            title="Business Administration"
            subTitle="Specialization in Data Analytics & HR"
            result="BBA"
            des="Rigorous training in quantitative business data analysis, performance metrics, and human resource management for operational efficiency."
          />
          <ResumeCard
            title="Founder • Soft Launch"
            subTitle="Structured Income Experimentation Platform"
            result="Active"
            des="Platform dedicated to testing, validating, executing, and scaling revenue models across multiple asset and commercial verticals."
          />
          <ResumeCard
            title="Cross-Sector Asset & Commercial Advisor"
            subTitle="Real Estate • Retail Distribution • Education"
            result="Advisor"
            des="Advising and executing across diverse commercial sectors: structuring residential property deals, margin-driven distribution, and UG/PG admissions."
          />
          <ResumeCard
            title="Practical Operating Mantra"
            subTitle="Clarity • Structure • Execution"
            result="Execution"
            des="Where others see abstract ideas, I see tangible structure. Clarity first. Structure second. Execution always."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
