import { FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { godwinImg } from "../../assets/index";

const Footer = () => {
  return (
    <div className="w-full py-20 h-auto border-b-[1px] border-b-gray-200 grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-4 gap-8">
      <div className="w-full h-full flex flex-col gap-6">
        <div className="flex items-center gap-3">
          <img className="w-14 h-14 rounded-full object-cover border-2 border-black shadow-sm" src={godwinImg} alt="Godwin Pauly" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-black font-titleFont">
            GODWIN <span className="text-gray-600">PAULY</span>
          </h3>
          <p className="text-xs text-black font-semibold uppercase tracking-widest mt-1">
            Founder | Soft Launch
          </p>
          <p className="text-sm text-gray-600 mt-2 leading-6">
            Designing and scaling structured income systems across real estate transactions, retail distribution, and education advisory.
          </p>
        </div>
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
          <a href="mailto:godwinpauly@gmail.com">
            <span className="bannerIcon">
              <MdEmail />
            </span>
          </a>
        </div>
      </div>
      <div className="w-full h-full">
        <h3 className="text-sm uppercase font-bold text-black tracking-widest">
          Quick Navigation
        </h3>
        <ul className="flex flex-col gap-3 font-titleFont font-medium py-6 overflow-hidden">
          <li>
            <a href="#home" className="w-full text-sm text-gray-600 relative hover:text-black duration-300 group cursor-pointer block">
              Home
            </a>
          </li>
          <li>
            <a href="#features" className="w-full text-sm text-gray-600 relative hover:text-black duration-300 group cursor-pointer block">
              What I Do
            </a>
          </li>
          <li>
            <a href="#projects" className="w-full text-sm text-gray-600 relative hover:text-black duration-300 group cursor-pointer block">
              Execution Highlights
            </a>
          </li>
          <li>
            <a href="#resume" className="w-full text-sm text-gray-600 relative hover:text-black duration-300 group cursor-pointer block">
              Operating Principles
            </a>
          </li>
          <li>
            <a href="#testimonial" className="w-full text-sm text-gray-600 relative hover:text-black duration-300 group cursor-pointer block">
              Why Connect
            </a>
          </li>
        </ul>
      </div>
      <div className="w-full h-full">
        <h3 className="text-sm uppercase font-bold text-black tracking-widest">
          Focus Verticals
        </h3>
        <ul className="flex flex-col gap-3 font-titleFont font-medium py-6 overflow-hidden">
          <li className="text-sm text-gray-600">
            Real Estate Advisory
          </li>
          <li className="text-sm text-gray-600">
            Retail &amp; Cashflow Ventures
          </li>
          <li className="text-sm text-gray-600">
            Education &amp; Career Structuring
          </li>
          <li className="text-sm text-gray-600">
            Digital Scalable Systems
          </li>
          <li className="text-sm text-gray-600">
            Soft Launch Platform
          </li>
        </ul>
      </div>
      <div className="w-full h-full">
        <h3 className="text-sm uppercase font-bold text-black tracking-widest">
          Core Principles
        </h3>
        <ul className="flex flex-col gap-3 font-titleFont font-medium py-6 overflow-hidden">
          <li className="text-sm text-gray-600">
            Act Decisively with Logic
          </li>
          <li className="text-sm text-gray-600">
            Discipline Before Expansion
          </li>
          <li className="text-sm text-gray-600">
            Structured Diversification
          </li>
          <li className="text-sm text-gray-600">
            Long-Term Value Creation
          </li>
          <li className="text-sm text-gray-600">
            Protect Fundamentals
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;