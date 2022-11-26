import React from "react";

const Info = () => {
  return (
    <div className="w-9/12 mx-auto">
      <p className="font-bold text-3xl uppercase text-center">Our <span className="text-blue-500">Car's</span> Information</p>
      <div className="flex stats shadow my-12 w-9/12 mx-auto">
      <div className="stat place-items-center">
        <div className="stat-title">Available</div>
        <div className="stat-value">1200</div>
      </div>

      <div className="stat place-items-center">
        <div className="stat-title">Sold</div>
        <div className="stat-value text-gray-500">2,200</div>
        <div className="stat-desc text-black font-bold">From 2015 to 2022</div>
      </div>

      <div className="stat place-items-center">
        <div className="stat-title">Up Coming</div>
        <div className="stat-value">600</div>
      </div>
    </div>
    </div>
  );
};

export default Info;
