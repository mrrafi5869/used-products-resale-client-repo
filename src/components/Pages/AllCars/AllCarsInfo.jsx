import React, { useContext } from "react";
import { FaMapMarkerAlt } from 'react-icons/fa';
import { AuthContext } from "../../../contexts/AuthProvider";

const AllCarsInfo = ({singleProduct, setData}) => {
    const { img, name,condition, location, resalePrice, originalPrice, used } = singleProduct;
    const { user } = useContext(AuthContext);



  return (
    <div className="card w-72 md:w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {name}
        </h2>
        <h2 className="text-2xl font-semibold font-sans">Seller: {user?.displayName}</h2>
        <p className="text-xl font-semibold">Condition: {condition}</p>
        <span className="font-semibold flex items-center"><FaMapMarkerAlt className="mr-2 text-blue-400"></FaMapMarkerAlt>Location </span>
        <select name="slot" className="select select-bordered w-full">
              {
                location.map((singleLocation, index) => <option key={index} value={singleLocation}>{singleLocation}</option>)
              }
        </select>
      </div>
      <div className="flex stats shadow bg-lime-50 rounded-sm">
      <div className="stat place-items-center text-sm">
        <div className="stat-title text-sm">Resale Price</div>
        <div className="stat-value text-sm">{resalePrice}</div>
      </div>

      <div className="stat place-items-center">
        <div className="stat-title text-sm">Used</div>
        <div className="stat-value text-gray-500 text-sm">{used}</div>
      </div>

      <div className="stat place-items-center">
        <div className="stat-title text-sm">Original Price</div>
        <div className="stat-value text-sm">{originalPrice}</div>
      </div>
    </div>
      <label onClick={() => setData(singleProduct)}  htmlFor="booking-modal" className="btn text-white rounded-b-md rounded-t-sm">Book Now</label>
      
    </div>
  );
};

export default AllCarsInfo;
