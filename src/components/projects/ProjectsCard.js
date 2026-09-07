import React from 'react';
import { FaArrowRight } from "react-icons/fa";

const ProjectsCard = ({ title, des, src }) => {
  return (
    <div className="w-full p-4 xl:px-8 h-auto xl:py-8 rounded-lg shadow-shadowOne flex flex-col bg-white border border-gray-200 group hover:border-black hover:-translate-y-1 transition-all duration-300">
      <div className="w-full h-56 overflow-hidden rounded-lg bg-gray-100">
        <img
          className="w-full h-full object-cover group-hover:scale-105 duration-300 cursor-pointer"
          src={src}
          alt={title}
        />
      </div>
      <div className="w-full mt-5 flex flex-col gap-4">
        <div>
          <div className="flex items-center justify-between">
            <h3 className="text-base uppercase text-black font-bold tracking-wide">
              {title}
            </h3>
            <div className="flex gap-2">
              <span className="text-base w-9 h-9 rounded-full bg-gray-100 border border-gray-200 inline-flex justify-center items-center text-gray-700 hover:bg-black hover:text-white duration-300 cursor-pointer">
                <FaArrowRight />
              </span>
            </div>
          </div>
          <p className="text-sm text-gray-600 leading-6 mt-3">
            {des}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;