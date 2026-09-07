import React from 'react'

const Title = ({title, des}) => {
  return (
    <div className="flex flex-col gap-3 font-titleFont mb-14">
      <h3 className="text-sm uppercase font-semibold text-gray-500 tracking-widest">
       {title}
      </h3>
      <h1 className="text-4xl md:text-5xl text-black font-bold capitalize tracking-tight">{des}</h1>
    </div>
  );
}

export default Title