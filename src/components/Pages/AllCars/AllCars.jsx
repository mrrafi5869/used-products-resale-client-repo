import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllCarsInfo from './AllCarsInfo';

const AllCars = () => {
    const { products } = useLoaderData();
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-9/12 mx-auto my-16'>
            {
                products.map(singleProduct => <AllCarsInfo
                    key={singleProduct._id}
                    singleProduct={singleProduct}
                ></AllCarsInfo>)
            }
        </div>
    );
};

export default AllCars;