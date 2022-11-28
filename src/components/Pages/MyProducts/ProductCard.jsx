import React, { useContext } from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { AuthContext } from '../../../contexts/AuthProvider';

const ProductCard = ({productData}) => {
    const {user} = useContext(AuthContext);
    const { img, productName, condition, resalePrice, originalPrice, location, used} = productData;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <div className='flex justify-between items-center'>
        <h2 className="card-title">
          {productName}
        </h2>
        <button className="btn btn-outline btn-info btn-xs">Advertise</button>
        </div>
        <h2 className="text-2xl font-semibold font-sans">Seller: {user?.displayName}</h2>
        <p className="text-xl font-semibold">Condition: {condition}</p>
        <div className='flex items-center'>
        <span className="font-semibold flex items-center mr-2"><FaMapMarkerAlt className="mr-2 text-blue-400"></FaMapMarkerAlt>Location: </span>
        <p>{location}</p>
        </div>
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
    </div>
    );
};

export default ProductCard;