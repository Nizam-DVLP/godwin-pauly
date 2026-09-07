import React from 'react';
import { FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { godwinImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-white border border-gray-200 p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover object-top rounded-lg mb-2 shadow-sm border border-gray-200"
        src={godwinImg}
        alt="Godwin Pauly"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-black font-titleFont">Godwin Pauly</h3>
        <p className="text-base font-bold text-black uppercase tracking-wider">
          Founder | Soft Launch
        </p>
        <p className="text-xs font-semibold tracking-widest text-gray-500 uppercase">
          Business Operations • Asset Advisory • Multi-Channel Income Design
        </p>
        <p className="text-sm text-gray-700 leading-6 tracking-wide">
          If you’re exploring real estate deals, retail distribution, student admissions partnerships, or scalable income projects, let’s connect. I’m open to meaningful collaborations, strategic partnerships, and opportunity-driven conversations.
        </p>
        <p className="text-sm font-bold tracking-widest text-black uppercase bg-gray-100 p-2.5 rounded-md border-l-4 border-black">
          Connect | Collaborate | Build
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-xs uppercase font-titleFont font-bold text-gray-700 tracking-wider">Connect With Me</h2>
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
    </div>
  );
};

export default ContactLeft;