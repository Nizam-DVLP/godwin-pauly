import React from 'react'
import { FaBuilding, FaCoins, FaGraduationCap, FaGlobe, FaRocket, FaChartLine } from "react-icons/fa";
import Title from '../layouts/Title';
import Card from './Card';

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-gray-200"
    >
      <Title title="CORE CAPABILITIES" des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="Real Estate Advisory"
          des="Helping clients buy, sell, or structure property decisions aligned with long-term financial growth."
          icon={<FaBuilding />}
        />
        <Card
          title="Retail & Cashflow Ventures"
          des="Identifying margin-driven retail distribution opportunities and executing short-cycle revenue models."
          icon={<FaCoins />}
        />
        <Card
          title="Education & Career Structuring"
          des="Guiding students in selecting PG/UG programs aligned with income potential, career clarity, and background."
          icon={<FaGraduationCap />}
        />
        <Card
          title="Digital & Scalable Income Systems"
          des="Creating leveraged digital channels designed for structured, scalable revenue."
          icon={<FaGlobe />}
        />
        <Card
          title="Soft Launch Platform"
          des="A structured income experimentation platform where you test, execute, and scale revenue models."
          icon={<FaRocket />}
        />
        <Card
          title="Multi-Channel Income Design"
          des="Designing sustainable revenue systems with clarity first, structure second, and execution always."
          icon={<FaChartLine />}
        />
      </div>
    </section>
  );
}

export default Features;