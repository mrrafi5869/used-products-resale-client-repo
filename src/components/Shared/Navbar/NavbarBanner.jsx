import React from "react";
import { Link } from "react-router-dom";
import {  } from 'react-icons/fa';

const NavbarBanner = ({ imageData }) => {
  const { image, prev, id, next } = imageData;

  return (
    <div id={`slide${id}`} className="carousel-item relative w-full size">
      <div className="carousel-img">
        <img src={image} alt="" className="w-screen h-[900px] rounded-xl" />
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/4">
        {/* navbar start */}
        <div className="navbar bg-base-100">
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
                  <Link>Home</Link>
                </li>
                <li>
                  <Link>Bookmarks</Link>
                </li>
                <li>
                  <Link>Message</Link>
                </li>
              </ul>
            </div>
            <Link className="btn btn-ghost normal-case text-xl">daisyUI</Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal p-0">
              <li>
                <Link>Item 1</Link>
              </li>
              <li>
                <Link>Item 3</Link>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            <Link className="btn">Get started</Link>
          </div>
        </div>
        {/* navbar end */}
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/2 w-2/5">
        <p className="text-white text-xl">
          There are many variations of passages of available, but the majority
          have suffered alteration in some form
        </p>
      </div>
      <div className="absolute flex justify-start transform -translate-y-1/2 left-24 top-3/4 w-2/5">
        <button className="btn btn-warning mr-5">Warning</button>
        <button className="btn btn-outline btn-success">Success</button>
      </div>
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 bottom-0">
        <Link href={`#slide${prev}`} className="btn btn-circle mr-5">
          ❮
        </Link>
        <Link href={`#slide${next}`} className="btn btn-circle">
          ❯
        </Link>
      </div>
    </div>
  );
};

export default NavbarBanner;
