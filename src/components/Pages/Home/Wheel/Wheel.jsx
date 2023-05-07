import React from "react";
import './Wheel.css'
import wheel from "../../../../videos/car (1).mp4";
import logo from "../../../../images/logo.png"

const Wheel = () => {
  return (
    <div className="flex items-center justify-center bg-gray-200">
      <video autoPlay loop muted playsinline className="w-1/2">
        <source src={wheel} type="video/mp4" />
      </video>
      <div className="w-1/2 text-left ml-[150px]">
        {/* <h1 className="logo text-9xl mb-8">AutoParts...</h1> */}
        <img src={logo} className="mb-8" alt="" />
        <h3 className="quote text-5xl font-semibold mb-10">
          Take your car and, share your <br /> joy with us
        </h3>
        <button class="btn bg-blue-500 hover:bg-blue-700 border-none animate-pulse">
          <span class="mr-2">Buy Cars</span>
        </button>
        {/* <button class="bg-gradient-to-r from-black to-white hover:from-white hover:to-black text-blue-500 font-bold py-2 px-4 rounded-lg shadow-md hover:shadow-lg">
          Buy Now
        </button> */}
      </div>
    </div>
  );
};

export default Wheel;
