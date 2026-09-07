import React, { useState } from 'react';
import { Link } from "react-scroll";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { logo } from "../../assets/index";
import { navLinksdata } from '../../constants';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="w-full h-24 sticky top-0 z-50 bg-white/95 backdrop-blur-md mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-200">
      <div className="flex items-center gap-2">
        <img src={logo} alt="logo" className="w-12 h-12 object-contain" />
        <span className="font-bold text-xl tracking-wider text-black">
          GODWIN <span className="text-gray-600">PAULY</span>
        </span>
      </div>
      <div>
        <ul className="hidden mdl:inline-flex items-center gap-6 lg:gap-10">
          {navLinksdata.map(({ _id, title, link }) => (
            <li
              className="text-base font-medium text-gray-600 tracking-wide cursor-pointer hover:text-black duration-300"
              key={_id}
            >
              <Link
                activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
        <span
          onClick={() => setShowMenu(!showMenu)}
          className="text-xl mdl:hidden bg-gray-100 border border-gray-300 w-10 h-10 inline-flex items-center justify-center rounded-full text-black cursor-pointer shadow-sm"
        >
          <FiMenu />
        </span>
        {showMenu && (
          <div className="w-[80%] h-screen overflow-scroll absolute top-0 left-0 bg-white border-r border-gray-200 shadow-2xl p-6 scrollbar-hide z-50">
            <div className="flex flex-col gap-8 py-2 relative">
              <div>
                <img className="w-20" src={logo} alt="logo" />
                <h3 className="text-lg font-bold text-black mt-3 font-titleFont">
                  GODWIN <span className="text-gray-600">PAULY</span>
                </h3>
                <p className="text-xs text-black font-semibold uppercase tracking-wider">
                  Founder | Soft Launch
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  Designing and executing structured income models across real estate, retail distribution, and education advisory.
                </p>
              </div>
              <ul className="flex flex-col gap-4">
                {navLinksdata.map((item) => (
                  <li
                    key={item._id}
                    className="text-base font-medium text-gray-700 tracking-wide cursor-pointer hover:text-black duration-300"
                  >
                    <Link
                      onClick={() => setShowMenu(false)}
                      activeClass="active"
                      to={item.link}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-4">
                <h2 className="text-base uppercase font-titleFont mb-2 text-black">
                  Connect
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
                  <a href="mailto:godwinpauly@gmail.com">
                    <span className="bannerIcon">
                      <MdEmail />
                    </span>
                  </a>
                </div>
              </div>
              <span
                onClick={() => setShowMenu(false)}
                className="absolute top-4 right-4 text-gray-600 hover:text-black duration-300 text-2xl cursor-pointer"
              >
                <MdClose />
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;