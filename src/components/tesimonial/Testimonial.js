import React, { useState } from 'react';
import Slider from "react-slick";
import { RiStarFill } from "react-icons/ri";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi";
import Title from '../layouts/Title';
import { quote, rahulSharmaImg, priyaNairImg, rohanVermaImg } from "../../assets";

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
                  className="h-72 md:h-36 lgl:h-72 w-full object-cover rounded-lg shadow-md"
                  src={rahulSharmaImg}
                  alt="Rahul Sharma"
                />
                <div className="w-full flex flex-col justify-end">
                  <p className="text-xs uppercase text-gray-500 font-bold tracking-wide mb-1">
                    Real Estate &amp; Asset Advisory
                  </p>
                  <h3 className="text-2xl font-bold text-black">Rahul Sharma</h3>
                  <p className="text-base tracking-wide text-gray-600 font-medium">
                    Property Investor, Bengaluru
                  </p>
                </div>
              </div>
              <div className="w-full lgl:w-[60%] h-full flex flex-col justify-between">
                <img className="w-16 lgl:w-24 opacity-60" src={quote} alt="quote" />
                <div className="w-full h-[70%] py-8 bg-white border border-gray-200 rounded-lg shadow-shadowOne p-6 lgl:p-8 flex flex-col justify-center gap-4 lgl:gap-6">
                  <div className="flex flex-col justify-between lgl:items-center py-4 border-b border-b-gray-200">
                    <div>
                      <h3 className="text-xl lgl:text-2xl font-bold tracking-wide text-black">
                        Exceptional Deal Structuring &amp; Capital Clarity
                      </h3>
                      <p className="text-sm text-gray-600 font-semibold mt-1">
                        Residential Acquisition • Margin Security
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
                    “Working with Godwin on property acquisition and transaction structuring was seamless. His disciplined 5-filter evaluation protected our capital and gave us absolute clarity on yield before closing the deal.”
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
                  className="h-72 md:h-36 lgl:h-72 w-full object-cover rounded-lg shadow-md"
                  src={priyaNairImg}
                  alt="Priya Nair"
                />
                <div className="w-full flex flex-col justify-end">
                  <p className="text-xs uppercase text-gray-500 font-bold tracking-wide mb-1">
                    Retail &amp; Distribution Ventures
                  </p>
                  <h3 className="text-2xl font-bold text-black">Priya Nair</h3>
                  <p className="text-base tracking-wide text-gray-600 font-medium">
                    Commercial Director, Mumbai
                  </p>
                </div>
              </div>
              <div className="w-full lgl:w-[60%] h-full flex flex-col justify-between">
                <img className="w-16 lgl:w-24 opacity-60" src={quote} alt="quote" />
                <div className="w-full h-[70%] py-8 bg-white border border-gray-200 rounded-lg shadow-shadowOne p-6 lgl:p-8 flex flex-col justify-center gap-4 lgl:gap-6">
                  <div className="flex flex-col justify-between lgl:items-center py-4 border-b border-b-gray-200">
                    <div>
                      <h3 className="text-xl lgl:text-2xl font-bold tracking-wide text-black">
                        Short-Cycle Execution &amp; Healthy Margins
                      </h3>
                      <p className="text-sm text-gray-600 font-semibold mt-1">
                        Retail Sourcing • Rapid Inventory Turnover
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
                    “Godwin has a sharp eye for identifying margin-driven retail opportunities. His ability to execute short-cycle distribution models with strict unit economics delivered tangible profit within weeks.”
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
                  className="h-72 md:h-36 lgl:h-72 w-full object-cover rounded-lg shadow-md"
                  src={rohanVermaImg}
                  alt="Rohan Verma"
                />
                <div className="w-full flex flex-col justify-end">
                  <p className="text-xs uppercase text-gray-500 font-bold tracking-wide mb-1">
                    Education &amp; Career Structuring
                  </p>
                  <h3 className="text-2xl font-bold text-black">Rohan Verma</h3>
                  <p className="text-base tracking-wide text-gray-600 font-medium">
                    MBA Candidate &amp; Strategy Analyst, Kochi
                  </p>
                </div>
              </div>
              <div className="w-full lgl:w-[60%] h-full flex flex-col justify-between">
                <img className="w-16 lgl:w-24 opacity-60" src={quote} alt="quote" />
                <div className="w-full h-[70%] py-8 bg-white border border-gray-200 rounded-lg shadow-shadowOne p-6 lgl:p-8 flex flex-col justify-center gap-4 lgl:gap-6">
                  <div className="flex flex-col justify-between lgl:items-center py-4 border-b border-b-gray-200">
                    <div>
                      <h3 className="text-xl lgl:text-2xl font-bold tracking-wide text-black">
                        High-ROI Higher Education Roadmapping
                      </h3>
                      <p className="text-sm text-gray-600 font-semibold mt-1">
                        Career Alignment • Strategic Admissions
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
                    “Godwin evaluated my academic roadmap with real earning clarity. Rather than generic advice, he mapped out programs aligned with scalable market demand and genuine ROI for my career.”
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