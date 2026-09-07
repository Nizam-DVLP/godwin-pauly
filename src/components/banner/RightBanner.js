import React from 'react';

const RightBanner = () => {
  return (
    <div className="w-full lgl:w-[45%] flex justify-center lgl:justify-end items-center relative">
      <div className="relative group max-w-full">
        <img
          className="w-[280px] h-[360px] sm:w-[340px] sm:h-[440px] md:w-[380px] md:h-[490px] lgl:w-[400px] lgl:h-[520px] xl:w-[440px] xl:h-[560px] object-cover rounded-2xl shadow-xl border border-gray-200 z-10 relative transition-transform duration-300 group-hover:scale-[1.01]"
          src="/godwin.png"
          alt="Godwin Pauly"
        />
        <div className="absolute -inset-2 bg-gradient-to-r from-gray-200 to-gray-100 rounded-3xl -z-0 opacity-80 blur-sm transform group-hover:scale-105 transition-all duration-300"></div>
      </div>
    </div>
  );
};

export default RightBanner;