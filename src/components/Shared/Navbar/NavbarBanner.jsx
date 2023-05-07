import React from "react";
import './NavbarBanner.css';
import laptop from '../../../images/laptop1.png';

const NavbarBanner = ({ imageData }) => {
  const { image, prev, id, next } = imageData;

  return (
    <div id={`slide${id}`} className="carousel-item relative w-full size">
      <div className="carousel-img">
        <img src={image} alt="" className="w-screen h-[250px] lg:h-[900px]" />
      </div>
      <div className="absolute flex justify-center transform -translate-y-1/2 lg:left-24 top-20 lg:top-60 w-full">
        <h2 className="text-white lg:text-5xl uppercase">
          <p className="font-bold"><span className="text-yellow-400 text-center">Cars part store</span> & Auto Services</p><p className="font-serif mt-6 text-center">Welcome to AutoParts</p>
        </h2>
      </div>
      <div className="absolute flex justify-start transform -translate-y-1/2 left-1/3 top-3/4 w-2/5">
        <img className="mx-auto rounded-xl" src={laptop} alt="" />
      </div>
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 bottom-0">
        <a href={`#slide${prev}`} className="btn btn-sm md:btn-md btn-circle mr-5">
          ❮
        </a>
        <a href={`#slide${next}`} className="btn btn-sm md:btn-md btn-circle">
          ❯
        </a>
      </div>
    </div>
  );
};

export default NavbarBanner;
