import React from 'react';

const ResumeCard = ({ title, subTitle, result, des, link }) => {
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
            {link ? (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 text-white bg-black hover:bg-gray-800 transition-colors rounded-md inline-flex items-center gap-1.5 shadow-sm text-xs font-bold uppercase tracking-wider cursor-pointer"
              >
                <span>{result}</span>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            ) : (
              <p className="px-3 py-1.5 text-black bg-gray-100 border border-gray-300 rounded-md flex justify-center items-center shadow-sm text-xs font-bold uppercase tracking-wider">
                {result}
              </p>
            )}
          </div>
        </div>
        <p className="text-sm md:text-base font-normal text-gray-600 leading-6">
          {des}
        </p>
        {link && (
          <div className="pt-1">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-black underline underline-offset-4 hover:text-gray-600 inline-flex items-center gap-1"
            >
              rightin.in ↗
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResumeCard;