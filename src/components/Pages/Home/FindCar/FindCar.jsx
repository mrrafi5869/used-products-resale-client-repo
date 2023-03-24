import React from 'react';
import './FindCar.css'

const FindCar = () => {
    return (
        <div className='bg-white shadow-md lg:w-9/12 p-3 lg:p-10 mx-auto my-36'>
            <div className='flex justify-between'>
                <h1 className='text-xl md:text-3xl find-car'>Find Your Car</h1>
                <p className='font-semibold amount'><span className='text-xl md:text-2xl text-red-500'>1200</span> Available</p>
            </div>
            <ul className='border-solid border-2 border-gray-500 my-7'></ul>
            <div className='lg:flex justify-around text-gray-400 mb-16'>
                <div>
                    <span>Car Condition</span>
                    <select className="select w-full bordered select-bordered rounded-none">
                        <option disabled selected>Pick a Condition</option>
                        <option>90%</option>
                        <option>85%</option>
                        <option>80%</option>
                        <option>75%</option>
                        <option>50%</option>
                    </select>
                </div>
                <div>
                    <span>Car Brand</span>
                    <select className="select w-full max-w-xs select-bordered rounded-none">
                        <option disabled selected>Pick your favorite Brand</option>
                        <option>Toyota</option>
                        <option>Lamborghini</option>
                        <option>Ferrari</option>
                        <option>BMW</option>
                        <option>Mercedes</option>
                    </select>
                </div>
                <div>
                    <span>Location</span>
                    <select className="select w-full max-w-xs select-bordered rounded-none">
                        <option disabled selected>Pick your location</option>
                        <option>USA</option>
                        <option>UK</option>
                        <option>UAE</option>
                        <option>KSA</option>
                        <option>Bangladesh</option>
                    </select>
                </div>
            </div>
            <p>Price Range($)</p>
            <div>
                <div>
                    <div className='flex justify-between font-semibold'>
                    <span>$1000</span>
                    <span>$10000</span>
                    </div>
                    <input type="range" min="10" max="100" value="40" className="range range-xs" /> 
                    <div className='text-center'>
                        <button className='btn btn-error rounded-sm mt-10 hover:text-white'>Find Vehicles</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FindCar;