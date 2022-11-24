import React from "react";
import background from "../../../images/background.jpg";
import background1 from "../../../images/background (1).jpg";
import background2 from "../../../images/background (2).jpg";
import NavbarBanner from "./NavbarBanner";

const Navbar = () => {
  const imagesData = [
    {
      image: background,
      prev: 3,
      id: 1,
      next: 2, 
    },
    {
      image: background1,
      prev: 1,
      id: 2,
      next: 3, 
    },
    {
      image: background2,
      prev: 2,
      id: 3,
      next: 1, 
    },
  ]
  return (
    <div className="carousel w-full">
      {
        imagesData.map(imageData => <NavbarBanner
          key={imageData.id}
          imageData={imageData}
        ></NavbarBanner>)
      }
    </div>
    
  );
};

export default Navbar;
