import React from "react";
import { Wine, Building, GraduationCap, Rocket, ArrowUpRight } from "lucide-react";
import { Badge } from "./badge";
import { projectOne, projectTwo, projectThree } from "../../assets/index";

function Feature() {
  return (
    <section id="projects" className="w-full py-20 border-b border-b-gray-200">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-10">
          <div className="flex gap-4 flex-col items-center text-center">
            <div>
              <Badge variant="secondary" className="border border-gray-300 px-3 py-1 font-semibold text-xs tracking-widest uppercase">
                Proven Track Record
              </Badge>
            </div>
            <div className="flex gap-3 flex-col max-w-2xl">
              <h2 className="text-3xl md:text-5xl tracking-tight font-bold text-black font-titleFont">
                Selected Execution Highlights
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-gray-600">
                Tangible commercial outcomes across retail distribution, residential property advisory, and strategic education roadmaps.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Bento Card 1: Retail Distribution (2 cols) */}
            <div className="bg-white border border-gray-200 rounded-2xl h-full lg:col-span-2 p-8 flex justify-between flex-col shadow-shadowOne group hover:border-black transition-all duration-300 relative overflow-hidden">
              <div className="flex items-center justify-between z-10">
                <div className="w-12 h-12 rounded-xl bg-gray-100 border border-gray-200 flex items-center justify-center text-black group-hover:bg-black group-hover:text-white transition-colors duration-300">
                  <Wine className="w-6 h-6 stroke-[1.5]" />
                </div>
                <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full bg-gray-100 text-black border border-gray-200">
                  14-Day Sprint • ₹6,000 Profit
                </span>
              </div>
              <div className="my-6 z-10">
                <img
                  src={projectOne}
                  alt="Retail Wine Distribution"
                  className="w-full h-44 object-cover rounded-xl border border-gray-100 group-hover:scale-[1.01] transition-transform duration-300"
                />
              </div>
              <div className="flex flex-col gap-2 z-10">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold tracking-tight text-black font-titleFont">
                    Retail Wine Distribution
                  </h3>
                  <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-black transition-colors" />
                </div>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  Generated ₹6,000 net profit in 14 days by independently sourcing, negotiating, and distributing 23 premium wine units through short-cycle margin execution.
                </p>
              </div>
            </div>

            {/* Bento Card 2: Real Estate Advisory (1 col) */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 flex justify-between flex-col shadow-shadowOne group hover:border-black transition-all duration-300">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-gray-100 border border-gray-200 flex items-center justify-center text-black group-hover:bg-black group-hover:text-white transition-colors duration-300">
                  <Building className="w-6 h-6 stroke-[1.5]" />
                </div>
                <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full bg-gray-100 text-black border border-gray-200">
                  ₹10,000 Commission
                </span>
              </div>
              <div className="my-6">
                <img
                  src={projectTwo}
                  alt="Residential Property Advisory"
                  className="w-full h-36 object-cover rounded-xl border border-gray-100 group-hover:scale-[1.01] transition-transform duration-300"
                />
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold tracking-tight text-black font-titleFont">
                    Residential Property Deal
                  </h3>
                  <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-black transition-colors" />
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Successfully structured a residential acquisition transaction generating ₹10,000 commission income while protecting long-term buyer equity.
                </p>
              </div>
            </div>

            {/* Bento Card 3: Education Advisory (1 col) */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 flex justify-between flex-col shadow-shadowOne group hover:border-black transition-all duration-300">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-gray-100 border border-gray-200 flex items-center justify-center text-black group-hover:bg-black group-hover:text-white transition-colors duration-300">
                  <GraduationCap className="w-6 h-6 stroke-[1.5]" />
                </div>
                <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full bg-gray-100 text-black border border-gray-200">
                  50+ Placements
                </span>
              </div>
              <div className="my-6">
                <img
                  src={projectThree}
                  alt="Education Advisory"
                  className="w-full h-36 object-cover rounded-xl border border-gray-100 group-hover:scale-[1.01] transition-transform duration-300"
                />
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold tracking-tight text-black font-titleFont">
                    Education Advisory
                  </h3>
                  <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-black transition-colors" />
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Guided 50+ candidates in PG/UG admissions aligned with high-income trajectories, candidate profile strengths, and verified academic ROI.
                </p>
              </div>
            </div>

            {/* Bento Card 4: Soft Launch Platform (2 cols) */}
            <div className="bg-white border border-gray-200 rounded-2xl h-full lg:col-span-2 p-8 flex justify-between flex-col shadow-shadowOne group hover:border-black transition-all duration-300">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-gray-100 border border-gray-200 flex items-center justify-center text-black group-hover:bg-black group-hover:text-white transition-colors duration-300">
                  <Rocket className="w-6 h-6 stroke-[1.5]" />
                </div>
                <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full bg-gray-100 text-black border border-gray-200">
                  Experimentation Platform
                </span>
              </div>
              <div className="my-6">
                <img
                  src={projectTwo}
                  alt="Soft Launch Platform"
                  className="w-full h-44 object-cover rounded-xl border border-gray-100 group-hover:scale-[1.01] transition-transform duration-300"
                />
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold tracking-tight text-black font-titleFont">
                    Soft Launch Platform
                  </h3>
                  <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-black transition-colors" />
                </div>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  A structured income experimentation platform where operators test, execute, and scale revenue models across real assets, retail networks, and digital channels.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export { Feature };
export default Feature;
