import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CarCategories = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch("https://used-products-resale-server-pied.vercel.app/carCategories")
      .then((res) => res.json())
      .then((data) => {
        setCars(data);
      });
  }, []);

  return (
    <div className="md:w-9/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 md:gap-8 place-items-center">
      {cars?.map((car) => (
        <div className="card card-compact w-72 md:w-96 bg-base-100 shadow-xl" key={car._id}>
        <figure><img src={car.img} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{car.name} {car.type}</h2>
          <p>Made in {car.made}</p>
          <div className="card-actions justify-end">
            <Link to={`/allCars/${car._id}`} className="w-full">
                <button className="btn btn-primary w-full">See All</button>
            </Link>
          </div>
        </div>
      </div>
      ))}
    </div>
  );
};

export default CarCategories;
