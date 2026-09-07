import React, { useState } from 'react';
import Slider from "react-slick";
import { RiStarFill } from "react-icons/ri";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi";
import Title from '../layouts/Title';
import { testimonialOne, testimonialTwo, quote } from "../../assets";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="w-12 h-12 bg-white border border-gray-300 hover:bg-black hover:text-white duration-300 rounded-md text-xl text-black flex justify-center items-center absolute top-0 right-0 shadow-sm cursor-pointer z-10"
      onClick={onClick}
    >
      <HiArrowRight />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="w-12 h-12 bg-white border border-gray-300 hover:bg-black hover:text-white duration-300 rounded-md text-xl text-black flex justify-center items-center absolute top-0 right-16 shadow-sm cursor-pointer z-10"
      onClick={onClick}
    >
      <HiArrowLeft />
    </div>
  );
}

const Testimonial = () => {
  const [dotActive, setDocActive] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    beforeChange: (prev, next) => {
      setDocActive(next);
    },
    appendDots: (dots) => (
      <div
        style={{
          borderRadius: "10px",
          padding: "10px",
        }}
      >
        <ul
          style={{
            display: "flex",
            gap: "15px",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          {dots}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={
          i === dotActive
            ? {
                width: "12px",
                height: "12px",
                background: "#000000",
                borderRadius: "50%",
                cursor: "pointer",
              }
            : {
                width: "12px",
                height: "12px",
                background: "#d1d5db",
                borderRadius: "50%",
                cursor: "pointer",
              }
        }
      ></div>
    ),
  };

  return (
    <section
      id="testimonial"
      className="w-full py-20 border-b-[1px] border-b-gray-200"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="PARTNERSHIP & COLLABORATION" des="Why People Connect With Me" />
      </div>
      <div className="max-w-6xl mx-auto">
        {/* ================ Slider One ================== */}
        <Slider {...settings}>
          <div className="w-full">
            <div className="w-full h-auto flex flex-col lgl:flex-row justify-between gap-6">
              <div className="w-full lgl:w-[35%] h-full bg-gray-50 border border-gray-200 p-8 rounded-lg shadow-shadowOne flex flex-col md:flex-row lgl:flex-col gap-6 justify-center md:justify-start lgl:justify-center">
                <img
                  className="h-72 md:h-32 lgl:h-72 rounded-lg object-cover"
                  src={testimonialOne}
                  alt="Godwin Pauly"
                />
                <div className="w-full flex flex-col justify-end">
                  <p className="text-xs uppercase text-gray-500 font-bold tracking-wide mb-1">
                    Clarity &amp; Structure
                  </p>
                  <h3 className="text-2xl font-bold text-black">Godwin Pauly</h3>
                  <p className="text-base tracking-wide text-gray-600">
                    Founder | Soft Launch
                  </p>
                </div>
              </div>
              <div className="w-full lgl:w-[60%] h-full flex flex-col justify-between">
                <img className="w-16 lgl:w-24 opacity-60" src={quote} alt="quote" />
                <div className="w-full h-[70%] py-8 bg-white border border-gray-200 rounded-lg shadow-shadowOne p-6 lgl:p-8 flex flex-col justify-center gap-4 lgl:gap-6">
                  <div className="flex flex-col justify-between lgl:items-center py-4 border-b border-b-gray-200">
                    <div>
                      <h3 className="text-xl lgl:text-2xl font-bold tracking-wide text-black">
                        Structured, Practical Decision-Making
                      </h3>
                      <p className="text-sm text-gray-600 font-semibold mt-1">
                        Logic • Unit Economics • Margin Clarity
                      </p>
                    </div>
                    <div className="text-black flex gap-1 mt-2 lgl:mt-0 text-lg">
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                    </div>
                  </div>
                  <p className="text-base font-bodyFont text-gray-700 font-normal tracking-wide leading-7">
                    “I thrive in partnerships that balance clarity with execution. Every opportunity is evaluated with disciplined logic and strict cost-to-margin clarity so you can scale safely without uncalculated risk.”
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ================ Slider Two ================== */}
          <div className="w-full">
            <div className="w-full h-auto flex flex-col lgl:flex-row justify-between gap-6">
              <div className="w-full lgl:w-[35%] h-full bg-gray-50 border border-gray-200 p-8 rounded-lg shadow-shadowOne flex flex-col md:flex-row lgl:flex-col gap-6 justify-center md:justify-start lgl:justify-center">
                <img
                  className="h-72 md:h-32 lgl:h-72 rounded-lg object-cover"
                  src={testimonialTwo}
                  alt="Cross-Sector Perspective"
                />
                <div className="w-full flex flex-col justify-end">
                  <p className="text-xs uppercase text-gray-500 font-bold tracking-wide mb-1">
                    Opportunity Structuring
                  </p>
                  <h3 className="text-2xl font-bold text-black">Godwin Pauly</h3>
                  <p className="text-base tracking-wide text-gray-600">
                    Cross-Sector Asset Advisor
                  </p>
                </div>
              </div>
              <div className="w-full lgl:w-[60%] h-full flex flex-col justify-between">
                <img className="w-16 lgl:w-24 opacity-60" src={quote} alt="quote" />
                <div className="w-full h-[70%] py-8 bg-white border border-gray-200 rounded-lg shadow-shadowOne p-6 lgl:p-8 flex flex-col justify-center gap-4 lgl:gap-6">
                  <div className="flex flex-col justify-between lgl:items-center py-4 border-b border-b-gray-200">
                    <div>
                      <h3 className="text-xl lgl:text-2xl font-bold tracking-wide text-black">
                        Opportunity Evaluation &amp; Cross-Sector Perspective
                      </h3>
                      <p className="text-sm text-gray-600 font-semibold mt-1">
                        Real Estate • Retail Ventures • Career Advisory
                      </p>
                    </div>
                    <div className="text-black flex gap-1 mt-2 lgl:mt-0 text-lg">
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                    </div>
                  </div>
                  <p className="text-base font-bodyFont text-gray-700 font-normal tracking-wide leading-7">
                    “Where others see abstract ideas, I see structure. Having hands-on execution across assets, retail, and education enables me to identify high-potential leverage points that others overlook.”
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ================ Slider Three ================== */}
          <div className="w-full">
            <div className="w-full h-auto flex flex-col lgl:flex-row justify-between gap-6">
              <div className="w-full lgl:w-[35%] h-full bg-gray-50 border border-gray-200 p-8 rounded-lg shadow-shadowOne flex flex-col md:flex-row lgl:flex-col gap-6 justify-center md:justify-start lgl:justify-center">
                <img
                  className="h-72 md:h-32 lgl:h-72 rounded-lg object-cover"
                  src={testimonialOne}
                  alt="Action-Oriented Network"
                />
                <div className="w-full flex flex-col justify-end">
                  <p className="text-xs uppercase text-gray-500 font-bold tracking-wide mb-1">
                    Action-Oriented Mindset
                  </p>
                  <h3 className="text-2xl font-bold text-black">Godwin Pauly</h3>
                  <p className="text-base tracking-wide text-gray-600">
                    Multi-Channel Income Designer
                  </p>
                </div>
              </div>
              <div className="w-full lgl:w-[60%] h-full flex flex-col justify-between">
                <img className="w-16 lgl:w-24 opacity-60" src={quote} alt="quote" />
                <div className="w-full h-[70%] py-8 bg-white border border-gray-200 rounded-lg shadow-shadowOne p-6 lgl:p-8 flex flex-col justify-center gap-4 lgl:gap-6">
                  <div className="flex flex-col justify-between lgl:items-center py-4 border-b border-b-gray-200">
                    <div>
                      <h3 className="text-xl lgl:text-2xl font-bold tracking-wide text-black">
                        Relationship-Driven Network &amp; Compounding Growth
                      </h3>
                      <p className="text-sm text-gray-600 font-semibold mt-1">
                        Connect • Collaborate • Build
                      </p>
                    </div>
                    <div className="text-black flex gap-1 mt-2 lgl:mt-0 text-lg">
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                    </div>
                  </div>
                  <p className="text-base font-bodyFont text-gray-700 font-normal tracking-wide leading-7">
                    “Growth is designed — not accidental. I build strong, relationship-driven networks with founders, clients, and partners to generate sustainable, long-term financial momentum.”
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Testimonial;