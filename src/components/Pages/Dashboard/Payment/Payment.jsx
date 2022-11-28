import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Payment = () => {
    const booking = useLoaderData();
    const {name, price} = booking;
    return (
        <div className='w-9/12 mx-auto my-36'>
            <h1 className='text-2xl font-bold'>Please pay {price} Bucks For {name}</h1>
        </div>
    );
};

export default Payment;