import React from 'react';

const ResumeCard = ({ title, subTitle, result, des }) => {
  return (
    <div className="w-full group flex">
      <div className="w-10 h-[2px] bg-gray-300 mt-12 relative">
        <span className="absolute w-5 h-5 rounded-full -top-2 -left-2 flex justify-center items-center bg-gray-200 border border-gray-400">
          <span className="w-2.5 h-2.5 rounded-full bg-white group-hover:bg-black duration-300"></span>
        </span>
      </div>
      <div className="w-full bg-white border border-gray-200 hover:border-black duration-300 rounded-lg p-5 lgl:px-8 flex flex-col justify-center gap-4 shadow-shadowOne">
        <div className="flex flex-col lgl:flex-row justify-between gap-3 lgl:gap-0 lgl:items-center">
          <div>
            <h3 className="text-xl font-bold text-black group-hover:text-black duration-300">
              {title}
            </h3>
            <p className="text-sm mt-1 text-gray-500 font-medium">
              {subTitle}
            </p>
          </div>
          <div>
            <p className="px-3 py-1.5 text-black bg-gray-100 border border-gray-300 rounded-md flex justify-center items-center shadow-sm text-xs font-bold uppercase tracking-wider">
              {result}
            </p>
          </div>
        </div>
        <p className="text-sm md:text-base font-normal text-gray-600 leading-6">
          {des}
        </p>
      </div>
    </div>
  );
};

export default ResumeCard;