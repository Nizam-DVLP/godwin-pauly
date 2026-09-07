import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import {
  FaLinkedinIn,
  FaTwitter,
  FaBuilding,
  FaGraduationCap,
  FaCoins,
  FaChartLine,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: [
      "Founder | Soft Launch.",
      "Asset Advisory Specialist.",
      "Business Operations Leader.",
      "Multi-Channel Income Designer.",
    ],
    loop: true,
    typeSpeed: 30,
    deleteSpeed: 15,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-[55%] flex flex-col gap-12 lgl:gap-14">
      <div className="flex flex-col gap-5">
        <h4 className="text-xs sm:text-sm md:text-base font-semibold tracking-widest text-black uppercase">
          BUSINESS OPERATIONS • ASSET ADVISORY • MULTI-CHANNEL INCOME DESIGN
        </h4>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lgl:text-5xl xl:text-6xl font-bold text-black whitespace-nowrap">
          Hi, I'm <span className="text-gray-900 underline decoration-black underline-offset-8">Godwin Pauly</span>
        </h1>
        <h2 className="text-2xl sm:text-3xl lgl:text-3xl xl:text-4xl font-bold text-black min-h-[40px] flex flex-wrap items-center">
          a&nbsp;<span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#000000"
          />
        </h2>
        <p className="text-sm sm:text-base font-bodyFont leading-7 tracking-wide text-gray-700">
          I design and execute structured income models across real estate transactions,
          retail distribution, and education advisory. With a background in Business
          Administration (Data Analytics &amp; HR) and hands-on execution experience, I focus on
          identifying opportunity, structuring it correctly, and executing it for sustainable revenue.
        </p>
        <p className="text-xs sm:text-sm font-bold tracking-wider text-black uppercase bg-gray-100 p-3 rounded-md border-l-4 border-black">
          “Clarity first. Structure second. Execution always. Where others see ideas, I see structure.”
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Connect With Me
          </h2>
          <div className="flex gap-4">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <span className="bannerIcon">
                <FaLinkedinIn />
              </span>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <span className="bannerIcon">
                <FaTwitter />
              </span>
            </a>
            <a href="#contact">
              <span className="bannerIcon">
                <MdEmail />
              </span>
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Core Focus Areas
          </h2>
          <div className="flex gap-4">
            <span title="Asset & Real Estate Advisory" className="bannerIcon">
              <FaBuilding />
            </span>
            <span title="Retail & Cashflow Ventures" className="bannerIcon">
              <FaCoins />
            </span>
            <span title="Education & Career Structuring" className="bannerIcon">
              <FaGraduationCap />
            </span>
            <span title="Multi-Channel Income Design" className="bannerIcon">
              <FaChartLine />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBanner;
