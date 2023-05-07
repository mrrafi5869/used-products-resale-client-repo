import React from "react";
import './AutoScroll.css';

const AutoScroll = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-9/12 place-items-center mx-auto my-16">
      <div className="box w-[220px] lg:w-full h-[650px] rounded-sm shadow-md shadow-gray-400 box2"></div>
      <div className="box w-[220px] lg:w-full h-[650px] rounded-sm shadow-md shadow-gray-400 box1"></div>
    </div>
  );
};

export default AutoScroll;
