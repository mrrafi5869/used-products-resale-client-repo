import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import AllCarsInfo from './AllCarsInfo';

const AllCars = () => {
    const { products } = useLoaderData();
    const {loading} = useContext(AuthContext);
    
    if (loading) {
        return (
          <div className="flex justify-center my-96">
            <button className="btn btn-square loading"></button>
          </div>
        );
      }
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-9/12 mx-auto my-16'>
            {
                products?.map(singleProduct => <AllCarsInfo
                    key={singleProduct._id}
                    singleProduct={singleProduct}
                ></AllCarsInfo>)
            }
        </div>
    );
};

export default AllCars;