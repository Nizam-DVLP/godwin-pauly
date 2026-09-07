import React from 'react';
import Title from '../layouts/Title';
import {
  rahulSharmaImg,
  priyaNairImg,
  rohanVermaImg,
  vikramMalhotraImg,
  ananyaIyerImg,
  karthikMenonImg,
} from "../../assets";

const testimonials = [
  {
    id: 1,
    name: "Rahul Sharma",
    role: "Property Investor & Asset Owner, Bengaluru",
    image: rahulSharmaImg,
    quote:
      "Working with Godwin on residential acquisition and transaction structuring was seamless. His 5-filter evaluation protected our capital and gave us absolute yield clarity before closing.",
  },
  {
    id: 2,
    name: "Priya Nair",
    role: "Commercial Director, Mumbai",
    image: priyaNairImg,
    quote:
      "Godwin has a sharp eye for identifying margin-driven retail opportunities. His ability to execute short-cycle distribution models with strict unit economics delivered tangible profit within weeks.",
  },
  {
    id: 3,
    name: "Rohan Verma",
    role: "MBA Candidate & Strategy Analyst, Kochi",
    image: rohanVermaImg,
    quote:
      "Godwin evaluated my academic roadmap with real earning clarity. Rather than generic admissions advice, he mapped out programs aligned with scalable market demand and genuine career ROI.",
  },
  {
    id: 4,
    name: "Vikram Malhotra",
    role: "Managing Partner, Vertex Capital",
    image: vikramMalhotraImg,
    quote:
      "Godwin's disciplined approach to commercial deal structuring and cashflow visibility is exceptional. He cuts through ambiguity and executes with high operational precision.",
  },
  {
    id: 5,
    name: "Ananya Iyer",
    role: "Founder, Retail Bridge Solutions",
    image: ananyaIyerImg,
    quote:
      "From unit-level sourcing to rapid inventory turnover, Godwin's structured models transformed how we manage cashflow cycles. Every session brings tangible commercial value.",
  },
  {
    id: 6,
    name: "Karthik Menon",
    role: "Head of Operations, Soft Launch Labs",
    image: karthikMenonImg,
    quote:
      "We rely on Godwin's multi-channel frameworks to validate and scale new revenue streams. The methodology is intuitive, execution-focused, and exceptionally reliable.",
  },
];

const Testimonial = () => {
  return (
    <section
      id="testimonial"
      className="w-full py-12 sm:py-16 md:py-20 lgl:py-24 border-b-[1px] border-b-gray-200"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="REAL RESULTS, REAL VOICES" des="What People Say" />
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 mdl:grid-cols-2 lgl:grid-cols-3 gap-6">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-gray-200 hover:border-black rounded-xl p-6 sm:p-7 shadow-shadowOne flex flex-col justify-between transition-all duration-300 group hover:-translate-y-1"
            >
              <div>
                {/* Profile Header */}
                <div className="flex items-center gap-3.5 mb-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-11 h-11 sm:w-12 sm:h-12 rounded-full object-cover border border-gray-200 shadow-sm shrink-0 group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="flex flex-col">
                    <h3 className="text-base font-bold text-black group-hover:text-black">
                      {item.name}
                    </h3>
                    <p className="text-xs text-gray-500 font-medium leading-snug">
                      {item.role}
                    </p>
                  </div>
                </div>

                {/* Testimonial Quote */}
                <p className="text-sm text-gray-700 leading-relaxed font-bodyFont">
                  {item.quote}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;