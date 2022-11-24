import React from "react";
import { Link } from "react-router-dom";
import './NavbarBanner.css';
import laptop from '../../../images/laptop-removebg.png';
import { FaHome, FaBookmark, FaFacebookMessenger, FaFacebook, FaInstagram } from 'react-icons/fa';

const NavbarBanner = ({ imageData }) => {
  const { image, prev, id, next } = imageData;

  return (
    <div id={`slide${id}`} className="carousel-item relative w-full size">
      <div className="carousel-img">
        <img src={image} alt="" className="w-screen h-[900px] rounded-xl" />
      </div>
      <div className="absolute lg:left-52 top-11 w-9/12">
        {/* navbar start */}
        <div className="navbar text-white">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link className="hover:bg-black hover:text-white"><FaHome></FaHome>Home</Link>
                </li>
                <li>
                  <Link><FaBookmark></FaBookmark>Bookmark</Link>
                </li>
                <li>
                  <Link><FaFacebookMessenger></FaFacebookMessenger>Message</Link>
                </li>
              </ul>
            </div>
            <Link className="btn btn-ghost normal-case text-xl my-logo">AutoParts</Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal p-0 items font-bold">
              <li>
                <Link>Home</Link>
              </li>
              <li>
                <Link>Bookmark</Link>
              </li>
              <li>
                <Link>Message</Link>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            <Link className="btn rounded-full mr-3"><FaFacebook></FaFacebook></Link>
            <Link className="btn rounded-full mr-9"><FaInstagram></FaInstagram></Link>
            <Link className="btn rounded-full bg-red-500">Purchase Now</Link>
          </div>
        </div>
        {/* navbar end */}
      </div>
      <div className="absolute flex justify-center transform -translate-y-1/2 left-24 top-60 w-full">
        <h2 className="text-white text-5xl uppercase">
          <p className="font-bold"><span className="text-yellow-400">Cars part store</span> & Auto Services</p><p className="font-serif mt-6">Welcome to AutoParts</p>
        </h2>
      </div>
      <div className="absolute flex justify-start transform -translate-y-1/2 left-1/3 top-3/4 w-2/5">
        <img className="laptop" src={laptop} alt="" />
      </div>
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 bottom-0">
        <a href={`#slide${prev}`} className="btn btn-circle mr-5">
          ❮
        </a>
        <a href={`#slide${next}`} className="btn btn-circle">
          ❯
        </a>
      </div>
    </div>
  );
};

export default NavbarBanner;
