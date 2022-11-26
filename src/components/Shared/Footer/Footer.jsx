import React from "react";
import { Link } from "react-router-dom";
import './Footer.css'
import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp, FaPaypal, FaCcVisa, FaCcMastercard, FaArrowDown } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="bg-gray-800">
      <footer className="footer p-10 text-white w-4/5 mx-auto">
        <div>
          <span className="footer-title">Services</span>
          <Link className="link link-hover">Branding</Link>
          <Link className="link link-hover">Design</Link>
          <Link className="link link-hover">Marketing</Link>
          <Link className="link link-hover">Advertisement</Link>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <Link className="link link-hover">About us</Link>
          <Link className="link link-hover">Contact</Link>
          <Link className="link link-hover">Jobs</Link>
          <Link className="link link-hover">Press kit</Link>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <Link className="link link-hover">Terms of use</Link>
          <Link className="link link-hover">Privacy policy</Link>
          <Link className="link link-hover">Cookie policy</Link>
        </div>
        <div>
          <span className="flex items-center font-semibold">Send Email to know anything <FaArrowDown className="ml-2 text-orange-200"></FaArrowDown></span>
          <label className="input-group">
                <span className="w-24 bg-orange-100 text-black font-semibold">Email</span>
                <input
                  type="email"
                  name="email"
                  placeholder="Email@web.com"
                  className="input input-bordered"
                />
              </label>
        </div>
      </footer>
      <footer className="footer px-10 py-4 border-t bg-gray-800 mx-auto w-9/12 text-white border-base-300">
        <div className="items-center grid-flow-col">
          <ul className="flex">
            <li><FaFacebook className="font-bold text-4xl mr-3 rounded-sm bg-blue-700 p-1"></FaFacebook></li>
            <li><FaTwitter className="font-bold text-4xl mr-3 rounded-sm bg-sky-500 p-1"></FaTwitter></li>
            <li><FaInstagram className="font-bold text-4xl mr-3 rounded-none instagram"></FaInstagram></li>
            <li><FaWhatsapp className="font-bold text-4xl mr-3 rounded-none whatsapp"></FaWhatsapp></li>
          </ul>
          
        </div>
        <div className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4">
            <Link>
              <FaPaypal className="font-bold text-4xl mr-3 rounded-sm p-1 paypal"></FaPaypal>
            </Link>
            <Link>
              <FaCcVisa className="font-bold text-4xl mr-3 rounded-sm visa"></FaCcVisa>
            </Link>
            <Link>
              <FaCcMastercard className="font-bold text-4xl mr-3 rounded-sm text-orange-400"></FaCcMastercard>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
